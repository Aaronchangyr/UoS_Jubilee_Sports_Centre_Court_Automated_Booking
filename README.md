# Automated-Booking
***
This is the code to book the court for University of Southampton Jubilee Sport hall (mainly badminton court).

## Table of Contents
***
1. [General Info](#general-info)
2. [Built with](#built-with)
3. [Installation](#installation)
4. [Reminders](#reminders)

### General Info
***
The purpose of doing this project is due to Jubilee sport halls system is sucks. They require ppl to book the court at 12:00am in the mid-night and mtfk I need to sleep at that time. Thus, why not just create an automated booking script to do it for me. 
The code support Windows and Linux OS System.

### Built With
***
* [![Puppeteer][Puppeteer]][Puppeteer-url]
* [![Nodejs][Node.js]][Node.js-url]

### Installation
***
You can either download it in [Windows](#windows) or [Linux](#linux).

#### Windows:
1. Create a file and name it "court-booking".
2. Download [puppeter][Puppeteer-url] and [node.js][Node.js-url].
    <details><summary>CLICK ME</summary>
    <p>

    ##### Download Puppeteer
    ```sh <!-- language you use-->
    npm i puppeteer
    
    ```
    </p></details>
4. Download the autobook.js and autobook.bat from the git into the file.
5. Open the autobook.js file with editor and change your name and password.
    <details><summary>CLICK ME</summary>
    <p>

    ```javascript
    await page.type('[name="ctl00$MainContent$InputLogin"]', 'username@soton.ac.uk'); //username
    await page.type('[name="ctl00$MainContent$InputPassword"]', 'password'); //password
    ```
    </p></details>
4. Read the autobook.js file and edit the file according your preference. (all functionality are set, add // to disable the function or delete the // to activate the function)
5. Open the autobook.bat file with note editor and change the path (after cd) to your file absolute path.
6. Open Task Schedular.<ol type="a">
    <li> Create basic task (set name, desciption), click next.</li>
    <li> Start daily and set the date(your date) and time at 11:58pm or 23:58 (because the badminton court will update on 12:00), click next.</li>
    <li> Select start a program and choose autobook.bat file.</li></ol>
7. You are all set! Try and run the task you scheduled and make sure it's all fine.

#### Linux:
1. Create a file and name it "court-booking".
2. Download puppeter and node.js.
3. Download the autobook_Linux.js and autobook.bat from the git.
4. For the autobook_Linux.js there is only booking for badminton court. (You can try to reference autobook.js code to book other activities)
5. Open the autobook.js file with editor and change your name and password.
6. Read the autobook.js file and edit the file according your preference.
    (all functionality are set, add // to disable the function or delete the // to activate the function)
6. Open the autobook.bat file with editor and change the path (after cd) to your file absolute path.
7. Use Cron to schedule the task. (it is very easy to do, google yourself)
8. You are all set! Try and run the task you scheduled and make sure it's all fine.

### Reminders:
***
1. The program will book your court for the next week. (e.g. this monday will book next monday court) 
2. Make sure your laptop is on in the midnight. (can configure in power settings)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/Node.js-303030?style=for-the-badge&logo=nodedotjs&logoColor=3C873A
[Node.js-url]: https://nodejs.org/en/
[Puppeteer]: https://img.shields.io/badge/Puppeteer-01d8a2?style=for-the-badge&logo=Puppeteer&logoColor=000000
[Puppeteer-url]: https://pptr.dev/

