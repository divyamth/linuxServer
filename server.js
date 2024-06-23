const express = require('express');
const app = express();

app.get('/run', (req, res) =>{
    const {command} = req.body;

    //sanitization

    const childProcess = require('child_process');
    childProcess.exec(command, (error, stdout, stderr) =>{
        if(error){
            console.error(error);
            res.status(500).send('Error running command');
        }else{
            res.send({stdout, stderr});
        }
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));