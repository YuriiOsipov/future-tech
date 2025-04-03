class Questions {
  rootSelector = "[data-js-container]";

  selectors = {
    itemSelector: "[data-js-item]",
    resultSelector: "[data-js-result]",
  };

  innerTextResult = {
    true: "Правильно!",
    false: "Не верно!",
  };

  trueAnswer = '"12"';

  constructor() {
    this.rootElement = document.querySelector(this.rootSelector);
    this.itemCollection = document.querySelectorAll(
      this.selectors.itemSelector
    );
    this.resultElement = document.querySelector(this.selectors.resultSelector);
    this.answer();
  }

  onClickAnswer = (event) => {
    const target = event.target.closest(this.selectors.itemSelector);
    if (!target) return;

    const userAnswer = target.textContent.trim();

    const isCorrect = userAnswer === this.trueAnswer;

    this.itemCollection.forEach((item) => {
      if (isCorrect) {
        target.classList.add("true"); 
        item.classList.remove("false");
      } else {
        item.classList.remove("true");
        target.classList.add("false");
      }
    });

    this.resultElement.textContent = this.innerTextResult[isCorrect];
  };

  answer() {
    this.rootElement.addEventListener("click", this.onClickAnswer);
  }
}

new Questions();
