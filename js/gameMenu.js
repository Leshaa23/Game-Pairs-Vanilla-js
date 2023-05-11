import { startGame } from './startGame.js';

export const createGameMenu = () => {
  const title = document.createElement('h2');
  const gameSection = document.querySelector('.game-section-container');

  gameSection.innerHTML = '';
  title.textContent = 'Choose Level';
  title.classList.add('game-menu-title');

  const createDifficultButton = (difficult) => {
    const button = document.createElement('button');

    button.classList.add('game-level-button');
    button.textContent = `${difficult} cards`;

    button.addEventListener('click', () => startGame(difficult));

    return button;
  };

  gameSection.append(
    title,
    createDifficultButton(10),
    createDifficultButton(12),
    createDifficultButton(14),
    createDifficultButton(16)
  );
};
