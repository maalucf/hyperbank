<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/maalucf/hyperbank">
    <img src="https://github.com/maalucf/hyperbank/assets/114453210/4d63e73c-ea67-4749-9246-b30e8bfbd093" alt="Logo" width="100" height=auto>
  </a>

<h3 align="center">Hyperbank - Financial Highlights</h3>

  <p align="center">
    A financial wrapped web app
    <br />
    <a href="https://github.com/maalucf/hyperbank"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#demo">Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project allows the user to visualize their yearly bank activity in a "wrapped" format (similar to Spotify Wrapped). 

Here are the trends available on the project:
1. Anual expense
2. Monthly expenses + month most spent
3. Categories most spent on (Food, Services, Health...)
4. Methods most spent on (Credit, Debit...)
5. Top 3 locations transactions were made
6. Anual income + total saved

### Built With

#### Backend

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Mysql][Mysql]][Mysql-url]

#### Frontend

* [![React][React.js]][React-url]
* [![Javascript][Js]][Js-url]
* [![CSS][CSS]][CSS-url]
* [![Html][Html]][Html-url]

<br />

<!-- GETTING STARTED -->
## Getting Started

This repository contains two projects: <a href='https://github.com/maalucf/hyperbank/tree/main/hyperbank-front'>hyperbank-front</a> - the client side application - and <a href='https://github.com/maalucf/hyperbank/tree/main/hyperbank-back'>hyperbank-back</a> - the server.

To get a local copy up and running follow these steps.

### Prerequisites

To run the application you must have the following installed:

* node.js
* npm
* mysql

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/maalucf/hyperbank.git
   ```

2. Install NPM packages <br />

    a. Go to the <a href='https://github.com/maalucf/hyperbank/tree/main/hyperbank-front'>hyperbank-front</a> folder and run the command
    ```sh
    npm install
    ```

    b. Go to the <a href='https://github.com/maalucf/hyperbank/tree/main/hyperbank-back'>hyperbank-back</a> folder and run the command
    ```sh
    npm install
    ```

3. Create a mysql database <br />

   a. Log into the mysql terminal using your credentials
    ```sh
    mysql -u your_user -p
    ```

   b. Inside the mysql terminal, create a new database
    ```sh
    CREATE DATABASE your_database_name;
    ```
   
   c. Out of the mysql terminal, populate the database using the <a href='https://github.com/maalucf/hyperbank/blob/main/hyperbank-database.sql'>hyperbank-database.sql</a> file (make sure you are inside the hyperbank folder)
    ```sh
    mysql -u your_username -p your_database_name < hyperbank-database.sql
    ```

4. Create a `.env` file inside the <a href='https://github.com/maalucf/hyperbank/tree/main/hyperbank-back'>hyperbank-back</a> folder to configure the database

    ```js
    MYSQL_HOST='your_host'
    MYSQL_USER='your_user'
    MYSQL_PASSWORD='your_password'
    MYSQL_DB='your_database_name'
    ```

### Running

To run the application make sure you are inside the <a href='https://github.com/maalucf/hyperbank/tree/main/hyperbank-back'>hyperbank-back</a> folder. 
Once you are in the correct folder, run the script
```sh
npm run start
```

When the server is running, you can access the web page through the `http://localhost:5000` link in your browser.

<br />

<!-- USAGE EXAMPLES -->
## Usage

Database schema:

![image](https://github.com/maalucf/hyperbank/assets/114453210/db74d792-eea7-400e-a746-56f06ec94eea)

<a name="demo"></a>
Application demo:

https://github.com/maalucf/hyperbank/assets/114453210/e4279cac-09ea-4831-a980-a5ec750177fb

<br />

<!-- CONTACT -->
## Contact

* [![LinkedIn][LinkedIn.com]][linkedin-url] 
* [![Gmail][Gmail.com]][Gmail-url]

Project Link: [https://github.com/maalucf/hyperbank](https://github.com/maalucf/hyperbank)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[LinkedIn.com]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/malu-figueiredo
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Gmail.com]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: mailto:mari.luiza.fig@gmail.com
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Html-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Js]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Js-url]: https://www.javascript.com
[Mysql]: https://img.shields.io/badge/MySQL-02569B?style=for-the-badge&logo=mysql&logoColor=white
[Mysql-url]: https://www.mysql.com
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com
