const textContainer = document.getElementById("text-container");
const textInput = document.getElementById("text-input");

function bionic() {
  text = textInput.value;
  text = text.trim();
  bionicReading(text);
  const bionicText = `<p class="text">${bionicReading(text)}</p>`;
  textContainer.innerHTML = bionicText;
}

function bionicReading(text) {
  const wordArray = text.split(" ");
  const letterArr = wordArray.map((el) => el.split(""));
  const arr1 = letterArr.map((el) => {
    const length = el.length;
    const boldLen = Math.floor((length / 100) * 50);
    let boldLetters = [];
    let notBold = [];
    for (let i = 0; i < el.length; i++) {
      if (i <= boldLen) {
        boldLetters.push(el[i]);
      } else {
        notBold.push(el[i]);
      }
    }

    const formattedWord = [];

    formattedWord.push(
      `<span class="bold-letters">${boldLetters.join("")}</span>`
    );
    formattedWord.push(`${notBold.join("")}`);

    return formattedWord;
  });

  const arr2 = arr1.map((el) => el.join("")).join(" ");

  return arr2;
}
