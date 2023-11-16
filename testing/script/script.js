

const jsonUrl = '/files.json';

// Use the fetch API to get the JSON data
fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Process the JSON data
    const lastProject = data.projects[data.projects.length - 1];

    // Access the 'id' property of the last project
    const lastProjectId = lastProject.id;
    
    // Log the result
    console.log("Amout in list: " +  lastProjectId);

    var i = 0;
    while (i < data.projects.length) {

      var list = document.querySelector('tbody');
      var row = document.createElement('tr');
      
      var projectName = data.projects[i].name;
      var projectId = data.projects[i].id;
      var projectDescription = data.projects[i].description;

      var projectUrl = data.projects[i].url;
      if ( projectUrl == "undefined" || projectUrl == "") {
        projectUrl = "#";
      }
      row.innerHTML = '<td>' +"<a href="+ projectUrl + ">" + projectName +"</a>" + '</td>' + '<td>' + projectId + '</td>' + '<td>' + projectDescription + '</td>';
      list.appendChild(row);
      i++;
    }
    
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  

