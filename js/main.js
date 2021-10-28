/* global data */
/* exported data */

var $entryData = document.querySelector('#entry-of-form');
var $photoUrl = document.querySelector('#photoUrl');
var $image = document.querySelector('.image');

$entryData.addEventListener('submit', submitForm);
$photoUrl.addEventListener('input', imageEntry);

function imageEntry(event) {
  var $image = document.getElementById('image');
  $image.setAttribute('src', event.target.value);
}

function submitForm(event) {
  event.preventDefault();
  var $newEntryObj = {};
  $newEntryObj.title = $entryData.elements.title.value;
  $newEntryObj.photoUrl = $entryData.elements.photoUrl.value;
  $newEntryObj.notes = $entryData.elements.notes.value;
  $newEntryObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift($newEntryObj);
  $entryData.reset();
  $image.setAttribute('src', '../images/placeholder/image/square.jpg');
}
