<h1 style="text-align: center; margin-bottom: -10px; font-size: 30px;"><strong>Time Tracker</strong></h1>

---

<div id="top"></div>

<details>
  <summary style="font-size: 25px"><strong>Table of Contents</strong></summary>
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#used-technologies">Used technologies</a></li>
    <li>
      <a href="#setup">Setup</a>
      <ul>
        <li><a href="#for-development">For development</a></li>
      </ul>
    </li>
    <li>
      <a href="#commands">Commands</a>
    </li>
    <li>
      <a href="#debug-in-vs-code">Debug in VS Code</a>
    </li>
    <li><a href="#stay-in-touch">Stay in touch</a></li>
  </ol>
</details>

---

## __About the project__

### __Description__
Application to record the time spent on different personal tasks, work tasks, etc.

### __Motivation__
In my daily work, I have to record the hours I spend on different tasks for different projects. At the end of the week, I have to upload them to two different systems we use to keep track and make sure each project is running smoothly.

To keep track of my hours, for some time now I've been uploading everything to a simple Excel spreadsheet with just a couple of columns, enough to know how much time I spend on each task.

### __Problem__
The problem is that at the end of the week I spend approximately an hour, and in some cases more, since I have to record my time differently in the two tracking systems. It could be summarized in a weekly and a daily breakdown of hours.

### __Solution__
This project starts as a simple script written in TypeScript, which will take care of, given a date range, reading my Excel that will load daily, processing that information and then returning two results, both ready to be easily and quickly copied and pasted into both tracking systems.

### __Future__
I would like to grow this script into an application with a frontend and a backend, in which I record my time daily instead of uploading it to my Excel and finally extract different reports and metrics.

<p align="right">(<a href="#top">Back to top</a>)</p>

## __Used technologies__

- [Node.js v20.11.1](https://nodejs.org/es/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

<p align="right">(<a href="#top">Back to top</a>)</p>

## __Setup__

### __For development__
- TBD

## Commands
- Install dependencies: `yarn install`
- Build app: `yarn run build`
- Run the app: 
  - Development: `yarn run start:dev  --file-path path/to/your/file.csv --start-date YYYY-MM-DD --end-date YYYY-MM-DD`
  - Production: `yarn run start:prod  --file-path path/to/your/file.csv --start-date YYYY-MM-DD --end-date YYYY-MM-DD`
  - Params:
    - `--file-path`: Indicates the path to the .csv file to read (__mandatory__)
    - `--start-date`: Date from which to process data (__mandatory__)
    - `--end-date`: Date until which to process data (__mandatory__)
    - `--ignore-tickets`: Tickets to ignore separated by comma (__optional__)
  - Example: `yarn start:dev --file-path C:/Users/Braian/Desktop/sample.csv --start-date "2024-01-01" --end-date "2024-01-31" --ignore-tickets "almuerzo,pausa,carga de horas"`
- Run tests: 
  - TBD

<p align="right">(<a href="#top">Back to top</a>)</p>

## Debug in VS Code
Open JavaScript Debug Terminal

![Open JavaScript Debug Terminal](/docs/images/open-javascript-debug-terminal.png)

Then run the command `yarn start:dev`

If everything went well, we can see that the color of the VS Code status bar changed to orange and in the console we will see a message that the debugger was attached.

![Result of attach debugger](/docs/images/result-of-attach-debugger.png)

<p align="right">(<a href="#top">Back to top</a>)</p>

### __Stay in touch__

- Author - [Braian Gonzales](https://braiangonzales.vercel.app/)
- Email - [braian.gonzales77@gmail.com](mailto:braian.gonzales77@gmail.com)
- LinkedIn - [in/braiangonzales/](https://www.linkedin.com/in/braiangonzales/)

<p align="right">(<a href="#top">Back to top</a>)</p>
