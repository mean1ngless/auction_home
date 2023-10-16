$(document).ready(function () {
  const items = $(".item-donate");
  const itemCount = items.length;
  let currentIndex = 0;

  function showItem(index) {
    items.css("transform", `translateX(-${index * 100}%)`);
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % itemCount; 
    showItem(currentIndex);
  }

  function prevItem() {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount; 
    showItem(currentIndex);
  }

  $("#next-button").click(nextItem);
  $("#prev-button").click(prevItem);
});
