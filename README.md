 <h5 id="title" align="center"><img style="width: 300px; height:200px;" src="https://svgshare.com/i/pUp.svg"/>
 </h5>
 <br />
 <h4 id="title" align="center"></h4>

<h1 align="center">Github Dashboard </h1>


<h3 id="description" align="center">
Present the repositories through filtering by the language used in the project of a given user.
</h3>

<br />

<p id="badges" align="center">
<img src="https://img.shields.io/badge/-React.JS-000?style=for-the-badge&logo=react"/>
<img src="https://shields.io/badge/-Typescript-000?style=for-the-badge&logo=typescript"/>
<img src="https://img.shields.io/badge/ESLint-000?style=for-the-badge&logo=ESLint&logoColor=4B32C3"/>
<img src="https://img.shields.io/badge/Prettier-000?style=for-the-badge&logo=Prettier&logoColor=F7B93E"/>
<img src="https://shields.io/badge/-JSON Server-000?style=for-the-badge&logo=JSON&logoColor=fff"/>
<img src="https://shields.io/badge/-Axios Server-000?style=for-the-badge&logo=Axios&logoColor=fff"/>
</p>

<br />

* [Title and image](#title)
* [Description](#description)
* [Badges](#badges)
* [Status of project](#status)
* [Project's goal](#objective)
* [Functionalities](#functionalities)
* [Prerequisites](#prerequisites)
* [Demo](#demo)
* [Pictures](#pictures)
* [Technologies](#techonologies)

<br />

<h4 id="status" align="center">
  Project README 🚀 Finished ✔️
</h4>

<br />

<h2 id="objective" name="objective">
🎯 Project's goal
</h2>

Every project consists of putting react concepts into practice using Typescript, as well as focusing on the use of rest api consumption to implement filters using react hooks.

<br />

<h2 id="functionalities" name="functionalities">
📋 Functionalities
</h2>

* [x] - Receive the user from github and send the parameter by route using react-router-dom's useNavigate hook
* [x] - Get the user from the routes and query the github api for both user data and repositories
* [x] - Get the language from the repositories and create dynamic filtering
* [x] - Keeping all components and pages responsive

<br />

<h2 id="prerequisites" name="prerequisites">
⌨️ Prerequisites
</h2>

```bash
# Clone the repository in some directory of your computer
$ git clone https://github.com/eliveltonsf/github-dashboard.git

# Enter in the repository
$ cd github-dashboard

# Install the dependencies
$ yarn install

# Start the application
$ yarn start
```

To start the application performing the test through the json-server and not through the github api, you must change the variable of the `.env` file to `REACT_APP_API_BASE_URL` and direct it to the correct host ( `localhost:5000` ) of the Json-server and run the following command:
```bash
# Start the application Json-server
$ yarn json-server
```
<h2 id="demo" name="demo">
🎥 Demo
</h2>
<img src="https://raw.githubusercontent.com/eliveltonsf/github-dashboard/82bb9ddedb7aef85a013da3d029dce508930561d/src/assets/github-dashboard.gif"/>
<br />
<br />


<h2 id="pictures" name="pictures">
📸 Pictures
</h2>
<h4>Home</h4>
 <img src="https://uploaddeimagens.com.br/images/004/305/943/original/home.png?1674226241"/>

<br />
<h4>Repositories</h4>
 <img src="https://uploaddeimagens.com.br/images/004/305/945/original/repositories.png?1674226270"/>
<br />
<br />

<h3 id="responsive" name="responsive">
:iphone: Responsive
</h3>
<br />
 <img src="https://uploaddeimagens.com.br/images/004/305/946/original/home-mobile.png?1674226297"/>
 <img src="https://uploaddeimagens.com.br/images/004/305/947/original/repositories-mobile.png?1674226323"/>

<br />
<h2 id="techonologies" name="technologies">
🚀 Technologies
</h2>

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React.js](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Json Server](https://github.com/typicode/json-server)
- [Styled Components](https://styled-components.com/)


<hr>

Made with 🧡 By Elivelton Ferreira. [Get in touch!](https://www.linkedin.com/in/eliveltonsf/) :calling:
