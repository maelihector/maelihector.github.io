$(document).ready(function () {

  var portfolio = {

    // Technologies array
    technologiesArray: ["HTML5", "CSS3", "Bootstrap", "Materialize", "JavaScript", "jQuery", "Handlebars", "Node.js", "Express", "ReactJS", "OOP", "Third-Party API", "SQL", "MySQL", "Sequelize", "Github Pages", "Heroku", "Firebase", "CLI (Command Line Interface)"],

    projectsObject: {
      1: {
        id: 1,
        name: "Cosmos Hangman",
        main_image: "https://repository-images.githubusercontent.com/121297785/99edd180-8213-11e9-9f49-efb51cdf75e5",
        website_link: "https://maelihector.github.io/Guess-The-Word/",
        github_link: "https://github.com/maelihector/Guess-The-Word/blob/master/assets/javascript/game.js",
        readme_link: "https://github.com/maelihector/Guess-The-Word#cosmos-hangman",
        technologies: ["HTML5", "Bootstrap", "JavaScript", "OOP", "Github Pages"]
      },
      2: {
        id: 2,
        name: "Crystal Collector",
        main_image: "https://repository-images.githubusercontent.com/122532769/2b157600-821d-11e9-970c-7fb3bee636c8",
        website_link: "https://maelihector.github.io/Crystal-Collector-Game/",
        github_link: "https://github.com/maelihector/Crystal-Collector-Game/blob/master/assets/javascript/game.js",
        readme_link: "https://github.com/maelihector/Crystal-Collector-Game#crystal-collector",
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Github Pages"]
      },
      3: {
        id: 3,
        name: "Game of Thrones RPG",
        main_image: "https://repository-images.githubusercontent.com/187100245/04f0d580-821f-11e9-9bb9-1d13b8567891",
        website_link: "https://maelihector.github.io/javaScript-game-of-thrones-rpg/",
        github_link: "https://github.com/maelihector/javaScript-game-of-thrones-rpg/blob/master/assets/index.js",
        readme_link: "https://github.com/maelihector/javaScript-game-of-thrones-rpg#game-of-thrones-rpg",
        technologies: ["HTML5", "CSS3", "JavaScript", "Github Pages"]
      },
      4: {
        id: 4,
        name: "X-Files Trivia",
        main_image: "https://repository-images.githubusercontent.com/123469558/8e369d00-07aa-11ea-9544-3627ce7ee3fc",
        website_link: "https://maelihector.github.io/TriviaGame/",
        github_link: "https://github.com/maelihector/TriviaGame/blob/master/assets/javascript/app.js",
        readme_link: "https://github.com/maelihector/TriviaGame#x-files-trivia",
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "OOP", "Github Pages"]
      },
      5: {
        id: 5,
        name: "Athlete Gifs Generator",
        main_image: "https://repository-images.githubusercontent.com/124461443/6fe9de80-8216-11e9-95ba-c26c7fa68721",
        website_link: "https://maelihector.github.io/Athlete-gifs-generator/",
        github_link: "https://github.com/maelihector/Athlete-gifs-generator/blob/master/assets/main.js",
        readme_link: "https://github.com/maelihector/Athlete-gifs-generator#famous-athletes-gifs",
        technologies: ["HTML5", "Bootstrap", "JavaScript", "jQuery", "Third-Party API", "Github Pages"]
      },
      6: {
        id: 6,
        name: "Train Scheduler",
        main_image: "https://repository-images.githubusercontent.com/125113895/e8e93600-8216-11e9-8d24-b5ab7786550c",
        website_link: "https://train-scheduler-bbc3e.firebaseapp.com",
        github_link: "https://github.com/maelihector/Train-Scheduler/blob/master/public/js/index.js",
        readme_link: "https://github.com/maelihector/Train-Scheduler#train-arrivals",
        technologies: ["HTML5", "CSS3", "Materialize", "JavaScript", "jQuery", "Firebase"]
      },
      // 7: {
      //   id: 7,
      //   name: "Healthy Gorilla",
      //   main_image: "https://repository-images.githubusercontent.com/126731970/d83ecb80-82bb-11e9-81e7-eb0266bd7ca0",
      //   website_link: "https://healthygorilla.firebaseapp.com",
      //   github_link: "https://github.com/maelihector/Healthy-Gorilla/tree/master/assets/js",
      //   readme_link: "https://github.com/maelihector/Healthy-Gorilla#healthy-gorilla--hg",
      //   technologies: ["HTML5", "CSS3", "Materialize", "JavaScript", "jQuery", "Third-Party API", "Firebase"]
      // },
      8: {
        id: 8,
        name: "Liri (Language Interpretation and Recognition Interface) CLI",
        main_image: "https://repository-images.githubusercontent.com/127964643/cb515e00-07af-11ea-9518-c2aaee60ce67",
        website_link: null,
        github_link: "https://github.com/maelihector/node-command-app/blob/master/liri.js",
        readme_link: "https://github.com/maelihector/node-command-app#language-interpretation-and-recognition-interface-liri",
        technologies: ["JavaScript", "Node.js", "Third-Party API", "CLI (Command Line Interface)"]
      },
      9: {
        id: 9,
        name: "Bamazon CLI",
        main_image: "https://repository-images.githubusercontent.com/130274603/80569380-82c0-11e9-81b7-5fd45b8403d2",
        website_link: null,
        github_link: "https://github.com/maelihector/Store-front-help",
        readme_link: "https://github.com/maelihector/Store-front-help#bamazon-store",
        technologies: ["Node.js", "MySQL", "CLI (Command Line Interface)"]
      },
      10: {
        id: 10,
        name: "Friend Finder",
        main_image: "https://repository-images.githubusercontent.com/189484664/262e7b00-0706-11ea-808f-00aa6afb5965",
        website_link: "https://best-friend-finder.herokuapp.com/",
        github_link: "https://github.com/maelihector/FriendFinder/blob/master/app/public/survey.html",
        readme_link: "https://github.com/maelihector/FriendFinder#bestfriendfinderbff",
        technologies: ["HTML5", "Bootstrap", "JavaScript", "jQuery", "Node.js", "Express", "Heroku"]
      },
      11: {
        id: 11,
        name: "Virtual Restaurant",
        main_image: "https://repository-images.githubusercontent.com/200102577/d308f800-0706-11ea-9201-45563f457107",
        website_link: "https://virtual-restaurant-ol.herokuapp.com/",
        github_link: "https://github.com/maelihector/Node-MySQL-Express-Handlebars-homemadeORM-App-A_Virtual_Restaurant_Order_Logger/blob/master/public/assets/javascript/orders.js",
        readme_link: "https://github.com/maelihector/Node-MySQL-Express-Handlebars-homemadeORM-App-A_Virtual_Restaurant_Order_Logger#node-mysql-express-handlebars-ormown-virtual-restaurant-order-logger",
        technologies: ["HTML5", "CSS3", "Handlebars", "JavaScript", "jQuery", "Node.js", "Express", "MySQL", "Heroku"]
      },
      12: {
        id: 12,
        name: "Sequelized Virtual Restaurant",
        main_image: "https://repository-images.githubusercontent.com/205259533/fb8f0180-079b-11ea-89a3-45c33b6499af",
        website_link: "https://sequelized-virtual-restaurant.herokuapp.com/",
        github_link: "https://github.com/maelihector/Sequelize-Node-MySQL-Express-Handlebars-Virtual_Restaurant_Order_Logger/tree/master/public/assets/javascript",
        readme_link: "https://github.com/maelihector/Sequelize-Node-MySQL-Express-Handlebars-Virtual_Restaurant_Order_Logger#sequelized-virtual-restaurant-food-logger",
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Handlebars", "Node.js", "Express", "MySQL", "Sequelize", "Heroku"]
      }
    },

    // Array that stores all user clicked tech boxes in an array
    techsChecked: [],
    // Array that stores project ids in an array
    techProjects: [],

    // Method that lists all technologies to DOM
    listTechnologies: function () {

      // Empty tech buttons div before listing
      $("#tech-checkboxes").empty();

      // Loop through technologies array
      this.technologiesArray.forEach(function (element, index) {

        // Create a div with button for each technology
        var techElement = $("<div>");
        var button = $("<button>").addClass("tech-checkbox").text(element).attr({
          "id": index
        });
        var input = $("<input>").attr({
          "type": "checkbox",
          "name": "project-tech-checked",
          "value": index
        });

        // Add event listener for when a tech button is selected
        $(button).on("click", function (event) {
          event.preventDefault();
          var buttonElement = $(this);
          var checkbox = $(this).parent().find('input');
          // Toggle between adding and removing 'checked' attribute with each click
          checkbox.attr('checked', !checkbox.attr('checked'));

          // Grab whether 'checked' exisits or not and change the button's CSS accordingly
          var isChecked = $(checkbox).attr('checked');

          if (isChecked === 'checked') {
            buttonElement.addClass('checked');
            buttonElement.removeClass('unChecked');
          } else {
            checkbox.removeAttr('checked');
            buttonElement.removeClass('checked');
            buttonElement.addClass('unChecked');
          }

        });

        // Dump on the DOM
        techElement.append(button);
        techElement.append(input);
        $("#tech-checkboxes").prepend(techElement);

      });
    },

    // Method to list all projects
    listProjects: function (projects) {

      // Empty projects div before listing
      $("#projects").empty();

      // Set projects to all projects if page load or reset
      if (projects === undefined) {
        projects = this.projectsObject;
      }

      // Loop through projects object
      for (var project in projects) {
        // Create project element
        var projectElement = $("<div>").attr({
          "id": projects[project].id
        }).addClass("project");
        var title = $("<h3>").text(projects[project].name);
        var image = $("<img>").addClass("project-image").attr({
          "src": projects[project].main_image
        });
        var projectLinks = $("<div>").addClass("secondary-links");
        var webLink = $("<a>").attr({
          "target": "_blank",
          "href": projects[project].website_link
        }).text("Live");
        var githubLink = $("<a>").addClass("second-child-link").attr({
          "target": "_blank",
          "href": projects[project].github_link
        }).text("Github");
        var readMeLink = $("<a>").attr({
          "target": "_blank",
          "href": projects[project].readme_link
        }).text("More");
        projectLinks.append(webLink);
        projectLinks.append(githubLink);
        projectLinks.append(readMeLink);
        // For each project technology array
        var projectTechsArray = projects[project].technologies;
        var techArrayDiv = $("<div>").addClass("project-technologies");
        projectTechsArray.forEach(function (element) {
          var techP = $("<p>").text(element);
          techArrayDiv.prepend(techP);
        });

        // Dump projects on DOM
        projectElement.append(title);
        projectElement.append(image);
        projectElement.append(techArrayDiv);
        projectElement.append(projectLinks);
        $("#projects").prepend(projectElement);

      }
    },

    // Event for when the 'tech-submit' button is clicked
    handleTechSubmit: function () {

      // Empty arrays
      this.techsChecked = [];
      this.techProjects = [];

      // Grab the buttons/checkboxes to view which are 'checked===true'
      var children = $('#tech-checkboxes')[0].children;
      // Loop through each child and grab those 'checked===true'
      for (var i = 0; i < children.length; i++) {
        if (children[i].children[1].checked) {
          // Add checked technology to techsChecked array
          this.techsChecked.push(children[i].innerText);
        }
      }

      // Loop through each project's technologies array to check which projects have matching techs to those in techsChecked array
      for (var project in this.projectsObject) {
        var projectTechsArray = this.projectsObject[project].technologies;
        // If an element matches one in the techsChecked array, push project to techProjects array
        projectTechsArray.forEach(function (element) {
          if (portfolio.techsChecked.indexOf(element) != -1) {
            portfolio.techProjects.push(portfolio.projectsObject[project]);
          }
        });
      }

      // Remove duplicate project objects in techProjects array
      var uniq = {}
      this.techProjects = this.techProjects.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));

      // Convert objects array to object in order to call handleSubmit()
      const arrayToObject = (array) =>
        array.reduce((obj, item) => {
          obj[item.id] = item
          return obj
        }, {})
      this.techProjects = arrayToObject(this.techProjects);

      // Rebuild projects list
      if (this.techsChecked.length == 0) {
        this.listProjects(this.projectsObject);
      } else {
        this.listProjects(this.techProjects);
      }


    }
  };

  // List technologies at page load
  portfolio.listTechnologies();

  // List projects at page load
  portfolio.listProjects();

  // Event for when the 'tech-submit' button is clicked
  $(".technology-buttons").click(function (event) {
    event.preventDefault();
    portfolio.handleTechSubmit();
  });

});