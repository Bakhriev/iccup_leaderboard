const tGridInit = () => {
  const players = [...document.querySelectorAll(".t-player")]; // Деструктурируем NodeList в массив

  players.forEach((player) => {
    player.addEventListener("mouseenter", () => {
      const id = player.dataset.id;
      // Фильтруем игроков с таким же data-id
      players
        .filter((p) => p.dataset.id === id)
        .forEach((p) => {
          p.classList.add("mouse-enter");
        });
    });

    player.addEventListener("mouseleave", () => {
      // Убираем класс с всех игроков
      players.forEach((p) => {
        p.classList.remove("mouse-enter");
      });
    });
  });
};

tGridInit();
