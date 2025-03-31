    fetch('datatable.json')
    .then(response => response.json())
    .then(data => appendData(data))
    .catch(error => console.error('Error fetching data:', error));

function appendData(data) {
    var tableBody = document.querySelector('#myData tbody');
    
    for (var i = 0; i < data.length; i++) { 
        var row = document.createElement('tr');
        
        var idCell = document.createElement('td');
        idCell.textContent = data[i].employee_id;
        
        var titleCell = document.createElement('td');
        titleCell.textContent = data[i].employee_title;
        
        var deptCell = document.createElement('td');
        deptCell.textContent = data[i].department_name;
        
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(deptCell);
        
        tableBody.appendChild(row);
    }
}