// Function to show the voter information in the modal
function showImageView(
  voterID,
  voterName,
  voterAddress,
  voterPrecinct,
  voterClusteredPrecinct
) {
  // Here, you should fetch the image URL based on the voterID.
  // For demonstration purposes, we'll use a static image URL.
  var imageURL = "path/to/image/" + voterID + ".jpg";
  $("#modal-image").attr("src", imageURL);
  $("#voter-name").text(voterName);
  $("#voter-address").text(voterAddress);
  $("#voter-precinct").text(voterPrecinct);
  $("#voter-clustered-precinct").text(voterClusteredPrecinct);
  // Show the image view modal
  $("#image-view-modal").modal("show");
}

// Attach event listeners to the buttons
$(document).ready(function () {
  // When any "View Information Card" link is clicked
  $(".view-card-btn").click(function (e) {
    e.preventDefault();
    var voterID = $(this).data("voter-id");
    var voterName = $(this).data("voter-name");
    var voterAddress = $(this).data("voter-address");
    var voterPrecinct = $(this).data("voter-precinct");
    var voterClusteredPrecinct = $(this).data("voter-clustered-precinct");
    showImageView(
      voterID,
      voterName,
      voterAddress,
      voterPrecinct,
      voterClusteredPrecinct
    );
  });
});
function printModal(modalId) {
  if (window.innerWidth >= 992) {
    var printContents = document.getElementById(modalId).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = '<div id="printarea">' + printContents + "</div>";
    window.print();
    document.body.innerHTML = originalContents;
  }
}
