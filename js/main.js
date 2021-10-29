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

function entryRender(viewEntries) {
  // top 1st part

  var $ulEntryList = document.createElement('ul');
  $ulEntryList.setAttribute('class', 'entry-list');

  var $liRow = document.createElement('li');
  $liRow.setAttribute('class', 'row');
  $ulEntryList.appendChild($liRow);

  var $columnHalfTop = document.createElement('div');
  $columnHalfTop.setAttribute('class', 'column-half');
  $liRow.appendChild($columnHalfTop);

  var $headerEntry = document.createElement('h1');
  $headerEntry.setAttribute('class', 'heading-new-entry');

  // top is 2nd part

  var $rowHalved = document.createElement('li');
  $rowHalved.setAttribute('class', 'row');

  var $columnHalfImage = document.createElement('div');
  $columnHalfImage.setAttribute('class', 'column-half');
  $rowHalved.appendChild($columnHalfImage);

  var $image = document.createElement('img');
  $image.className = 'image';
  $image.setAttribute('src', viewEntries.image);
  $columnHalfImage.appendChild($image);

  var $columnHalfEntry = document.createElement('div');
  $columnHalfEntry.setAttribute('class', 'column-half');

  var $nameHeading = document.createElement('name-heading');
  $nameHeading.setAttribute('name', viewEntries.name);
  $columnHalfEntry.appendChild($nameHeading);

  var $paragraph = document.createElement('paragraph');
  $paragraph.setAttribute('name', viewEntries.paragraph);
  $columnHalfEntry.appendChild($paragraph);

}
var $viewEntries = document.querySelector('.entry-list');
var $containerEntries = document.querySelector('.entries');

for (var i = 0; i < $viewEntries.length; i++) {
  var $entry = entryRender($viewEntries[i]);
  $containerEntries.append($entry);
}

function DOMContentLoaded(event) {
  for (var i = 0; i < $entryData.viewEntries.length; i++) {
    var $EntryRendered = entryRender($entryData.viewEntries[i]);
    $viewEntries.append($EntryRendered);
  }
}

$viewEntries.addEventListener('DOMContentLoaded', DOMContentLoaded);
