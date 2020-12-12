window.addEventListener("load", () => {
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  const titles = document.querySelectorAll("h1");
  const statsCards = document.querySelectorAll(".stats-card");
  const overviewCards = document.querySelectorAll(".overview-item");
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      switchBackgroundTheme();
      switchCardsTheme();
    } else {
      button.classList.add("active");
      switchBackgroundTheme();
      switchCardsTheme();
    }
  });

  function switchCardsTheme() {
    for (let title of titles) {
      if (title.classList.contains("light")) {
        title.classList.remove("light");
      } else {
        title.classList.add("light");
      }
    }
    for (let card of statsCards) {
      if (card.classList.contains("light")) {
        card.classList.remove("light");
      } else {
        card.classList.add("light");
      }
    }
    for (let overviewCard of overviewCards)
      if (overviewCard.classList.contains("light")) {
        overviewCard.classList.remove("light");
      } else {
        overviewCard.classList.add("light");
      }
  }

  function switchBackgroundTheme() {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
    } else {
      body.classList.add("light");
    }
  }
});
