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

### __Motivation_
In my daily work life I have to record the hours I dedicate to different tasks, then at the end of the week I must upload these hours into two different systems, NetSuite and a collaborative Excel on which we rely to keep track and see that each project goes well.

To keep track of my hours, for some time I have been loading everything into a simple Excel with just a couple of columns, enough to know how much time is spent on each task.

### __Problem_
The problem here is that at the end of the week I invest approximately one hour, in some cases even more, since in the two places that I must record my time they are loaded in different ways, NetSuite based on tasks per day, and collaborative Excel based in tasks per week.

### __Solution_
This project starts as a simple script written in TypeScript, which will take care of given a range of dates, read my Excel that it will load daily, process that information and then return two results, both ready to be easily and quickly copied and pasted into NetSuite and collaborative Excel.

### __Future_
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
