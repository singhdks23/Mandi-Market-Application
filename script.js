        document.getElementById('btn').addEventListener('click', loadAPI);
        document.getElementById('btn_sort').addEventListener('click', sortDetails);
        document.getElementById('btn_sort_district').addEventListener('click', sortDetailsDistrict);
        document.getElementById('btn_sort_state').addEventListener('click', sortDetailsState);
        document.getElementById('textbtn').addEventListener('click', Searching);
       

        //  Fetch all details of the api
        function loadAPI(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=25', true);

        xhr.onload = function(){
            if(this.status == 200){
                var mandiParsedObj = JSON.parse(this.responseText);

                // console.log(this.responseText);
                var output = '';
                for(var i in mandiParsedObj.records){
                    output += 
                        `<div class = "mandi_location">` + 
                        `<ul>` + 
                        `<h3 style="color: Tomato; font-family: Lucida Console", Courier, monospace;">`+ mandiParsedObj.records[i].   district + `<label>,</label> ` + mandiParsedObj.records[i].state + `</h3>` +
                        `<h2 style="color: grey; font-family: Lucida Console", Courier, monospace;"><label>Rs</label>`+ mandiParsedObj.records[i].modal_price + `<label>,</label> ` + mandiParsedObj.records[i].commodity + `</h2>` +
                        `<li style="color: SaddleBrown;">Arrival Date : ` + mandiParsedObj.records[i].arrival_date + `</li>` +
                        `<li style="color: SaddleBrown;">Market : ` + mandiParsedObj.records[i].market + `</li>` +
                        `<li style="color: SaddleBrown;">Variety : ` + mandiParsedObj.records[i].variety + `</li>` +
                        `<li style="color: SaddleBrown;">Maximum Rate : <label>Rs </label>` + mandiParsedObj.records[i].max_price + `</li>` +
                        `<li style="color: SaddleBrown;">Minimum Rate : <label>Rs </label>` + mandiParsedObj.records[i].min_price + `</li>` +
                        `</ul> </div>`
                }
                 
                document.getElementById('display_mandi').innerHTML = output;
                document.getElementById('lastUpdated').innerHTML = mandiParsedObj.updated_date;
            }
        }

        xhr.send();
    }

    // Sort the Details by price
    function sortDetails(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=25', true);

        xhr.onload = function(){
            if(this.status == 200){
                var mandiParsedObj = JSON.parse(this.responseText);

                mandiParsedObj.records.sort(function(a, b) {
                    if(a.modal_price < b.modal_price) {
                        return -1;
                    } 
                    else if(a.modal_price > b.modal_price) {
                        return 1;
                    } 
                    return 0;
                });

                // console.log(this.responseText);
                var output = '';
                for(var i in mandiParsedObj.records){
                    output += 
                        `<div class = "mandi_location">` + 
                        `<ul>` + 
                        `<h3 style="color: Tomato; font-family: Lucida Console", Courier, monospace;">`+ mandiParsedObj.records[i].   district + `<label>,</label> ` + mandiParsedObj.records[i].state + `</h3>` +
                        `<h2 style="color: grey; font-family: Lucida Console", Courier, monospace;"><label>Rs</label>`+ mandiParsedObj.records[i].modal_price + `<label>,</label> ` + mandiParsedObj.records[i].commodity + `</h2>` +
                        `<li style="color: SaddleBrown;">Arrival Date : ` + mandiParsedObj.records[i].arrival_date + `</li>` +
                        `<li style="color: SaddleBrown;">Market : ` + mandiParsedObj.records[i].market + `</li>` +
                        `<li style="color: SaddleBrown;">Variety : ` + mandiParsedObj.records[i].variety + `</li>` +
                        `<li style="color: SaddleBrown;">Maximum Rate : <label>Rs </label>` + mandiParsedObj.records[i].max_price + `</li>` +
                        `<li style="color: SaddleBrown;">Minimum Rate : <label>Rs </label>` + mandiParsedObj.records[i].min_price + `</li>` +
                        `</ul> </div>`
                }
                 
                document.getElementById('display_mandi').innerHTML = output;
                document.getElementById('lastUpdated').innerHTML = mandiParsedObj.updated_date;
            }
        }

        xhr.send();
    }

    // sort the details by state name
    function sortDetailsState(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=25', true);

        xhr.onload = function(){
            if(this.status == 200){
                var mandiParsedObj = JSON.parse(this.responseText);

                mandiParsedObj.records.sort(function(a, b) {
                    if(a.state.toLowerCase() < b.state.toLowerCase()) {
                        return -1;
                    } 
                    else if(a.state.toLowerCase() > b.state.toLowerCase()) {
                        return 1;
                    } 
                    return 0;
                });

                // console.log(this.responseText);
                var output = '';
                for(var i in mandiParsedObj.records){
                    output += 
                        `<div class = "mandi_location">` + 
                        `<ul>` + 
                        `<h3 style="color: Tomato; font-family: Lucida Console", Courier, monospace;">`+ mandiParsedObj.records[i].   district + `<label>,</label> ` + mandiParsedObj.records[i].state + `</h3>` +
                        `<h2 style="color: grey; font-family: Lucida Console", Courier, monospace;"><label>Rs</label>`+ mandiParsedObj.records[i].modal_price + `<label>,</label> ` + mandiParsedObj.records[i].commodity + `</h2>` +
                        `<li style="color: SaddleBrown;">Arrival Date : ` + mandiParsedObj.records[i].arrival_date + `</li>` +
                        `<li style="color: SaddleBrown;">Market : ` + mandiParsedObj.records[i].market + `</li>` +
                        `<li style="color: SaddleBrown;">Variety : ` + mandiParsedObj.records[i].variety + `</li>` +
                        `<li style="color: SaddleBrown;">Maximum Rate : <label>Rs </label>` + mandiParsedObj.records[i].max_price + `</li>` +
                        `<li style="color: SaddleBrown;">Minimum Rate : <label>Rs </label>` + mandiParsedObj.records[i].min_price + `</li>` +
                        `</ul> </div>`
                }
                 
                document.getElementById('display_mandi').innerHTML = output;
                document.getElementById('lastUpdated').innerHTML = mandiParsedObj.updated_date;
            }
        }

        xhr.send();
    }

    // Sort the Details by District Name
    function sortDetailsDistrict(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=25', true);

        xhr.onload = function(){
            if(this.status == 200){
                var mandiParsedObj = JSON.parse(this.responseText);

                mandiParsedObj.records.sort(function(a, b) {
                    if(a.district.toLowerCase() < b.district.toLowerCase()) {
                        return -1;
                    } 
                    else if(a.district.toLowerCase() > b.district.toLowerCase()) {
                        return 1;
                    } 
                    return 0;
                });

                // console.log(this.responseText);
                var output = '';
                for(var i in mandiParsedObj.records){
                    output += 
                        `<div class = "mandi_location">` + 
                        `<ul>` + 
                        `<h3 style="color: Tomato; font-family: Lucida Console", Courier, monospace;">`+ mandiParsedObj.records[i].district + `<label>,</label> ` + mandiParsedObj.records[i].state + `</h3>` +
                        `<h2 style="color: grey; font-family: Lucida Console", Courier, monospace;"><label>Rs</label>`+ mandiParsedObj.records[i].modal_price + `<label>,</label> ` + mandiParsedObj.records[i].commodity + `</h2>` +
                        `<li style="color: SaddleBrown;">Arrival Date : ` + mandiParsedObj.records[i].arrival_date + `</li>` +
                        `<li style="color: SaddleBrown;">Market : ` + mandiParsedObj.records[i].market + `</li>` +
                        `<li style="color: SaddleBrown;">Variety : ` + mandiParsedObj.records[i].variety + `</li>` +
                        `<li style="color: SaddleBrown;">Maximum Rate : <label>Rs </label>` + mandiParsedObj.records[i].max_price + `</li>` +
                        `<li style="color: SaddleBrown;">Minimum Rate : <label>Rs </label>` + mandiParsedObj.records[i].min_price + `</li>` +
                        `</ul> </div>`
                }
                 
                document.getElementById('display_mandi').innerHTML = output;
                document.getElementById('lastUpdated').innerHTML = mandiParsedObj.updated_date;
            }
        }

        xhr.send();
    }

    // Searching the market by market name
    function Searching(){

        var str = document.getElementById('text1').value;

        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=25', true);

        xhr.onload = function(){
            if(this.status == 200){
                var mandiParsedObj = JSON.parse(this.responseText);
                
                // console.log(this.responseText);
                var output = '';
                for(var i in mandiParsedObj.records){
                    if(mandiParsedObj.records[i].market.toLowerCase() == str || 
                        mandiParsedObj.records[i].market.toUpperCase() == str ||
                        mandiParsedObj.records[i].market === str ||
                        mandiParsedObj.records[i].commodity === str ||
                        mandiParsedObj.records[i].commodity.toLowerCase() == str ||
                        mandiParsedObj.records[i].commodity.toUpperCase() == str ||
                        mandiParsedObj.records[i].commodity.search(str) != -1 ||
                        mandiParsedObj.records[i].commodity.toLowerCase().search(str) != -1 ||
                        mandiParsedObj.records[i].commodity.toUpperCase().search(str) != -1){
                        output += 
                            `<div class = "mandi_location">` + 
                            `<ul>` + 
                            `<h3 style="color: Tomato; font-family: Lucida Console", Courier, monospace;">`+ mandiParsedObj.records[i].district + `<label>,</label> ` + mandiParsedObj.records[i].state + `</h3>` +
                            `<h2 style="color: grey; font-family: Lucida Console", Courier, monospace;"><label>Rs</label>`+ mandiParsedObj.records[i].modal_price + `<label>,</label> ` + mandiParsedObj.records[i].commodity + `</h2>` +
                            `<li style="color: SaddleBrown;">Arrival Date : ` + mandiParsedObj.records[i].arrival_date + `</li>` +
                            `<li style="color: SaddleBrown;">Market : ` + mandiParsedObj.records[i].market + `</li>` +
                            `<li style="color: SaddleBrown;">Variety : ` + mandiParsedObj.records[i].variety + `</li>` +
                            `<li style="color: SaddleBrown;">Maximum Rate : <label>Rs </label>` + mandiParsedObj.records[i].max_price + `</li>` +
                            `<li style="color: SaddleBrown;">Minimum Rate : <label>Rs </label>` + mandiParsedObj.records[i].min_price + `</li>` +
                            `</ul> </div>`
                    }
                }
                 
                if(output != '') 
                    document.getElementById('display_mandi').innerHTML = output;
                else{
                    output += `<div class = "mandi_location"><br><br><center><br><br>No Result Matched! </div>` 
                    document.getElementById('display_mandi').innerHTML = output;
                }
                document.getElementById('lastUpdated').innerHTML = mandiParsedObj.updated_date;
            }
        }

        xhr.send();
    }
    