var config = {
  apiKey: "AIzaSyBDAUu4kxfhByYj3FE30ODEvlHvepSseeg",
  authDomain: "idea-dayra.firebaseapp.com",
  databaseURL: "https://idea-dayra.firebaseio.com",
  projectId: "idea-dayra",
  storageBucket: "idea-dayra.appspot.com",
  messagingSenderId: "558386996696"
};
firebase.initializeApp(config);
var firebaseIdeasRef = firebase.database().ref().child('ideas');


var addButton = document.getElementById('add-button');
 addButton.addEventListener('click',function() {
   var ideaInput = document.getElementById('idea-input');
   var idea = ideaInput.value; //sacar valor
   ideaInput.value='';

   firebaseIdeasRef.push().set(idea);
 });

//Retrieve new post as they are added to our database
firebaseIdeasRef.on("child_added", function(snapshot) {
  var idea= snapshot.val();
  addIdea(idea, snapshot.key);
});

firebaseIdeasRef.on("child_removed", function(snapshot) {
document.getElementById(snapshot.key).remove();
});

function addIdea(idea,id){
    var newIdeaElement =document.createElement('p');
    newIdeaElement.textContent = idea;
    newIdeaElement.id=id;
    document.getElementById('ideas').appendChild(newIdeaElement);

    newIdeaElement.addEventListener('click',function(){
      var ideaRef = firebaseIdeasRef.child(this.id);
      ideaRef.remove();
    });
}

//secondNewIdeaElement.addEventListener('click')
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
