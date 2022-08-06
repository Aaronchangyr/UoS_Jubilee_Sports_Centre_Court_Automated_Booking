/*
 *Author： Yi Ren Chang
 *Student ID： 32440855
 *Copyright: Yi Ren Chang
 */ 

const puppeteer = require('puppeteer');

//use get the time pass 12:00am
function timetowait() {
    var d = new Date(); // for now
    d.getMinutes();
    d.getSeconds();
    total = (d.getMinutes()*60) + (d.getSeconds());
    minus = (3600 - total)*1000; //if your wifi is good then change to 3600(if not then 3599)
    return minus;
}

 (async () => {

    const browser = await puppeteer.launch({
        //executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        "headless": false, //false to show ui
        defaultViewport: null,
        args: ['--start-maximized'] //open with full screen
        // args: [
        //     '--auto-open-devtools-for-tabs',
        //     '--disable-dev-shm-usage'
        // ]
    });
    
    const page = await browser.newPage();
    //await page.setViewport({ width: 1366, height: 786 }); //set your own stage

    await page.goto("https://soton.leisurecloud.net/Connect/mrmselectActivityGroup.aspx");

    //login
    await page.type('[name="ctl00$MainContent$InputLogin"]', 'username@soton.ac.uk'); //username
    await page.type('[name="ctl00$MainContent$InputPassword"]', 'password'); //password
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    //badminton
    await page.$eval('a#ctl00_MainContent__advanceSearchResultsUserControl_Activities_ctrl2_lnkActivitySelect_lg', form => form.click() );
    await page.waitForNavigation();

    //change to the correct page (Suppose current day is Sunday, have to book two weeks later's Monday)
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //1 eg:Sun(current) -> Mon
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //2 eg:Mon -> Tue
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //3 eg:Tue -> Wed
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //4 eg:Wed -> Thu
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //5 eg:Thu -> Fri
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //6 eg:Fri -> Sat
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //7 eg:Sat -> Sun
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_Button2', form => form.click() ); //8 eg:Sun -> Mon
    await page.waitForNavigation();
    
    //bookcourt
    await page.waitForTimeout(timetowait()); //set the time
    await page.reload(); //reload the page
    
    //check which time is available
    //it will choose the earliest available time so comment those time you are unavailable
    page //7:00am
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(2) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(2) > td.itemavailable > input', form => form.click()));
    page //8:00am
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(3) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(3) > td.itemavailable > input', form => form.click()));
    page //9:00am
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(4) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(4) > td.itemavailable > input', form => form.click()));
    page //10:00am
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(5) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(5) > td.itemavailable > input', form => form.click()));
    page //11:00am
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(6) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(6) > td.itemavailable > input', form => form.click()));
    page //12:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(7) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(7) > td.itemavailable > input', form => form.click()));
    page //13:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(8) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(8) > td.itemavailable > input', form => form.click()));
    page //14:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(9) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(9) > td.itemavailable > input', form => form.click()));
    page //15:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(10) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(10) > td.itemavailable > input', form => form.click()));
    page //16:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(11) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(11) > td.itemavailable > input', form => form.click()));
    page //17:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(12) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(12) > td.itemavailable > input', form => form.click()));
    page //18:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(13) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(13) > td.itemavailable > input', form => form.click()));
    page //19:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(14) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(14) > td.itemavailable > input', form => form.click()));
    page //20:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(15) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(15) > td.itemavailable > input', form => form.click()));
    page //21:00pm
        .waitForSelector('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(16) > td.itemavailable > input')
        .then(() => page.$eval('#ctl00_MainContent_grdResourceView > tbody > tr:nth-child(16) > td.itemavailable > input', form => form.click()));
    
    await page.waitForNavigation();
    await page.$eval('#ctl00_MainContent_btnBasket', form => form.click());
    

    //poundfit
    // await page.$eval('a#ctl00_MainContent_MostRecentBookings1_Bookings_ctl04_bookingLink', form => form.click() ); //ctl01/ctl02/ctl03/ctl04 depends
    // await page.waitForNavigation();
    // // var d = new Date(); // for now
    // // d.getMinutes();
    // // d.getSeconds();
    // // total = (d.getMinutes()*60) + (d.getSeconds());
    // // minus = (3600 - total)*1000;
    // // a = timetowait();
    // //await page.waitForTimeout(timetowait()); //set the time
    // await page.reload(); //reload the page
    // page
    //     .waitForSelector('#ctl00_MainContent_ClassStatus_ctrl0_btnBook')
    //     .then(() => page.$eval('#ctl00_MainContent_ClassStatus_ctrl0_btnBook', form => form.click()));
    // //await page.$eval('#ctl00_MainContent_ClassStatus_ctrl0_btnBook', form => form.click() );
    // await page.waitForNavigation();
    // await page.$eval('#ctl00_MainContent_btnBasket', form => form.click() );
    
    //dancefit
    // await page.$eval('a#ctl00_MainContent_MostRecentBookings1_Bookings_ctl03_bookingLink', form => form.click() ); 
    // await page.waitForNavigation();
    // await page.$eval('#ctl00_MainContent_ClassStatus_ctrl0_btnBook', form => form.click() );
    // await page.waitForNavigation();
    // await page.$eval('#ctl00_MainContent_btnBasket', form => form.click() );

    //zumba
    // await page.$eval('#ctl00_MainContent_MostRecentBookings1_Bookings_ctl02_bookingLink', form => form.click() );
    // await page.waitForNavigation();
    // await page.$eval('#ctl00_MainContent_ClassStatus_ctrl0_btnBook', form => form.click() );
    // await page.waitForNavigation();
    // await page.$eval('#ctl00_MainContent_btnBasket', form => form.click() );

    //screenshot
    //await page.waitForNavigation();
    //await page.screenshot({path: 'bookingTime.png', fullPage: true});
    
    await browser.close();

})();


