 // Sample initial data
  let cards = {
    todo: ['Task 1', 'Task 2', 'Task 3'],
    inprogress: ['Task 4'],
    done: ['Task 5']
  };

  // Function to render cards in each column
  function renderCards() {
    for (let column in cards) {
      let columnElement = document.getElementById(column);
      columnElement.innerHTML = '';
      cards[column].forEach(cardText => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerText = cardText;
        columnElement.appendChild(card);
      });
    }
  }

  // Function to add a new card to a column
  function addCard(column) {
    let cardText = prompt('Enter task:');
    if (cardText) {
      cards[column].push(cardText);
      renderCards();
    }
  }

  // Initial rendering
  renderCards();
