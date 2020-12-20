const express = require('express');
const router = express.Router();
const Team = require('../../Models/Team');

router.get('/',async (req,res)=>{
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

router.post('/',async (req,res)=>{
    const { team_name, wins, losses,ties, Score} = req.body;
    const doc = { team_name, wins, losses,ties, Score };
    return new Team(doc).save()
    .then((team) => {
      return res.json(team);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Server Error');
    });
});

router.get('/page',async (req,res)=>{
    try{
        const pageSize = parseInt(req.query.pageSize) || 10;
        const pageNumber = parseInt(req.query.page) || 0;
        const team_name = req.query.name || '';
        const score = req.query.score || '';
        let queryobj = {};
        if (team_name !== '') {
        queryobj.team_name = team_name;
        }
        if (score !== '') {
        queryobj.score = score;
        }
        const total = await Team.countDocuments(queryobj);
        const teams = await Team.find(queryobj)
        .limit(pageSize)
        .skip(pageNumber * pageSize);
        res.json({
        pages: Math.ceil(total / pageSize),
        teams,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});


module.exports =router;