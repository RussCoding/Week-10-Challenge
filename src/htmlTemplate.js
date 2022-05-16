
const makeTeam = (team) => {
    const htmlArr = [];
    const managerCard = manager => {
        let managerText = 
        `
        <div class="card">
            <div class="card-header">
                Manager
            </div>
            <div class = "card-body">
                <ul class="list-group">
                <li class="list-group-item">Name: ${manager.name}</li>
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `;
    htmlArr.push(managerText);
    }

    const engineerCard = engineer => {
        let engineerText = 
        `
        <div class="card">
            <div class="card-header">
                Engineer
            </div>
            <div class = "card-body">
                <ul class="list-group">
                <li class="list-group-item">Name: ${engineer.name}</li>
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">Github: < href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
                </ul>
            </div>
        </div>
    `;
    htmlArr.push(engineerText);
    }

    const internCard = intern => {
        let internText = 
        `
        <div class="card">
            <div class="card-header">
                Intern
            </div>
            <div class = "card-body">
                <ul class="list-group">
                <li class="list-group-item">Name: ${intern.name}</li>
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span><a href="mailto:${intern.email}">${manager.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    `;
    htmlArr.push(internText);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            managerCard(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            engineerCard(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            internCard(team[i]);
        }
    }

return htmlArr.join("");

}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
        <h1>Team Builder</h1>
        </header>
        <div class = "team-cards"> ${makeTeam(team)} </div>
         
    </body>
    </html>

    `;

}