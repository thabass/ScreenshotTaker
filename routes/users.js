const express = require('express');
const router = express.Router();
const puppeteer=require('puppeteer');
//const { v4: uuidv4 } = require('uuid');

router.post('/',function(req,res)
{
  let url=req.body.url;
 
  console.log(url);

const takescreenshot= async ()=>
{
//const url=document.getElementById('homepage').value;
    const browser= await puppeteer.launch();
    const page= await browser.newPage();

    const options={ 
        path: 'Screenshot/website.png',
        fullpage: true,
        omitbackgrid: true ,
       };


    await page.goto(url);
    await page.screenshot(options);

    await browser.close();

    takescreenshot();

};


})



module.exports =router
