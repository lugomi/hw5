// $('#rank-and-school').on('submit', function(e){
//     e.preventDefault();
//     $.ajax({
//        type: "POST",
//        url: "/postinfo.php",
//        data: $(this).serialize(),
//        success: function() {
//          alert('success');
//        }
//     });
});



// used for the external link
function openUp() {
    var chris10P = window.open("https://www.instagram.com/chriscrawford10p/");
}

function anotherOne() {
    var alfy = window.open("https://www.instagram.com/pooh.jitsu/");
}

// for the POST form
document.getElementById('oss').addEventListener('click', function(event){
    let req = new XMLHttpRequest();

    let payload = {
        name:null,
        belt:null,
        school:null
    }
    
    // data entered by the user
    payload.name = document.getElementById('name').value;
    payload.belt = document.getElementById('belt').value;
    payload.school = document.getElementById('school').value;



    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-type', 'application/json');
    req.addEventListener('load', function(){
        if (req.status >= 200 && req.status < 400){
            let response = JSON.parse(req.responseText);
            document.getElementById('userData').textContent = JSON.parse(response.data).spam;
        } else {
            alert('The following error has occured: ' + req.statusText);
        }
    })
    req.send(JSON.stringify(payload));
    event.preventDefault();
});

// about-me page
function myResume() {
    var resume = window.open()
}





// // post request for form
// function postReq() {
//     document.getElementById('rank-and-school').addEventListener('click', function(event){
//         let req = new XMLHttpRequest();

//         // data entered by the user
//         let name = document.forms['name'].value;
//         let belt = document.forms['belt'].value;
//         let school = document.forms['school'].value;
//     })
// }