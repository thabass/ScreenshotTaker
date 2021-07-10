const express = require('express');
const router = express.Router();
const puppeteer=require('puppeteer');
//const path = require('path');
// const { uuid } = require('uuid');
const {v4: uuidv4 } = require('uuid');
//const axios = require('axios');
const fetch = require('node-fetch')

router.post('/',async function(req,res)
{
   const url = req.body.name;

   console.log(url);

// const takescreenshot= async ()=>
// {

    const browser= await puppeteer.launch({args:['--no-sandbox']});
    const page= await browser.newPage();

    const string = uuidv4();
    const Path='routes/Screenshot/'+string+'.jpeg';
   const downloadPath='Screenshot/'+string+'.jpeg';
    const options={ 
        path: Path,
        fullpage: true,
        omitbackgrid: true,
         type: 'jpeg'
        
       };


    await page.goto(url);
    // await page.pdf({path:Path,format: 'A4'});
    await page.screenshot(options);
    //res.redirect(url);

     const file = `${__dirname}/${downloadPath}`;
     res.download(file);
// console.log(downloadPath);
//     res.redirect('http://localhost:3000/downloadimage');

    // let response=fetch('http://localhost:3000/screenshot',function(req,res){
    //    res.download(file);
    //  });

    //  response();
    
  


    // res.sendFile(path.join(__dirname+'/contact.html'));


   await browser.close();
   


// };
// takescreenshot();
});



module.exports =router
//module.exports.downloadPath = downloadPath
