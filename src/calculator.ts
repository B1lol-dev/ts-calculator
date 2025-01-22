export function calculator() {
  const text_top: HTMLElement | any = document.getElementById("text_top");
  const main_text: HTMLElement | any = document.getElementById("main_text");

  text_top!.style.opacity = 0;

  // buttons
  const btn_0: HTMLElement | any = document.getElementById("btn_0");
  const btn_1: HTMLElement | any = document.getElementById("btn_1");
  const btn_2: HTMLElement | any = document.getElementById("btn_2");
  const btn_3: HTMLElement | any = document.getElementById("btn_3");
  const btn_4: HTMLElement | any = document.getElementById("btn_4");
  const btn_5: HTMLElement | any = document.getElementById("btn_5");
  const btn_6: HTMLElement | any = document.getElementById("btn_6");
  const btn_7: HTMLElement | any = document.getElementById("btn_7");
  const btn_8: HTMLElement | any = document.getElementById("btn_8");
  const btn_9: HTMLElement | any = document.getElementById("btn_9");

  const numbersBtns: HTMLElement[] = [
    btn_0!,
    btn_1!,
    btn_2!,
    btn_3!,
    btn_4!,
    btn_5!,
    btn_6!,
    btn_7!,
    btn_8!,
    btn_9!,
  ];

  const btn_clear: HTMLElement | any = document.getElementById("btn_clear");
  const btn_math_minus: HTMLElement | any =
    document.getElementById("btn_math_minus");
  const btn_precent: HTMLElement | any = document.getElementById("btn_precent");
  const btn_divide: HTMLElement | any = document.getElementById("btn_divide");
  const btn_multiply: HTMLElement | any =
    document.getElementById("btn_multiply");
  const btn_minus: HTMLElement | any = document.getElementById("btn_minus");
  const btn_plus: HTMLElement | any = document.getElementById("btn_plus");
  const btn_equals: HTMLElement | any = document.getElementById("btn_equals");
  const btn_del: HTMLElement | any = document.getElementById("btn_del");
  const btn_dot: HTMLElement | any = document.getElementById("btn_dot");

  const mathOperators: HTMLElement[] = [
    btn_plus!,
    btn_minus!,
    btn_multiply!,
    btn_divide!,
  ];

  const adjustFontSize = () => {
    const mainTextElement = main_text as HTMLElement;
    const originalFontSize = 86; // Original font size
    const minFontSize = 22; // Minimum font size
    const maxLength = 6; // Maximum length before reducing font size
    const textLength = mainTextElement.innerText.length;

    if (textLength > maxLength) {
      const newFontSize = Math.max(
        minFontSize,
        originalFontSize - (textLength - maxLength) * 4
      );
      mainTextElement.style.fontSize = `${newFontSize}px`;
    } else {
      mainTextElement.style.fontSize = `${originalFontSize}px`;
    }
  };

  btn_clear?.addEventListener("click", () => {
    text_top!.innerText = "0";
    text_top!.style.opacity = 0;
    main_text!.innerText = "0";
    adjustFontSize();
  });

  numbersBtns?.forEach((btn) => {
    btn.addEventListener("click", () => {
      const current_number = main_text!.innerText;
      if (current_number === "0") {
        main_text!.innerText = btn.innerText;
      } else {
        main_text!.innerText = current_number + btn.innerText;
      }
      adjustFontSize();
    });
  });

  mathOperators?.forEach((btn) => {
    btn!.addEventListener("click", () => {
      const current_value = main_text!.innerText;
      main_text!.innerText = current_value + btn.innerText;
      adjustFontSize();
    });
  });

  btn_math_minus.addEventListener("click", () => {
    if (main_text.innerText.startsWith("-")) {
      main_text.innerText = main_text.innerText.substring(1);
    } else {
      main_text.innerText = "-" + main_text.innerText;
    }
  });

  btn_precent?.addEventListener("click", () => {
    const current_number = main_text!.innerText;
    main_text!.innerText = (eval(current_number) / 100).toString();
  });

  btn_equals?.addEventListener("click", () => {
    const current_value = main_text!.innerText;
    text_top!.style.opacity = 1;
    text_top!.innerText = current_value;
    const result = eval(current_value);
    main_text!.innerText = result.toString();
  });

  btn_del?.addEventListener("click", () => {
    if (main_text!.innerText !== "0") {
      const current_value = main_text!.innerText;
      main_text!.innerText = current_value.slice(0, -1);
    }
    if (main_text!.innerText === "") {
      main_text!.innerText = "0";
    }
  });

  btn_dot?.addEventListener("click", () => {
    if (!main_text.innerText.includes(".")) {
      main_text.innerText += ".";
    }
  });

  document.addEventListener("keydown", (e) => {
    const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numberKeys.includes(e.key)) {
      const btn = document.getElementById(`btn_${e.key}`);
      btn!.click();
    }

    if (e.key === "+") {
      const current_value = main_text!.innerText;
      main_text!.innerText = current_value + "+";
    }

    if (e.key === "-") {
      const current_value = main_text!.innerText;
      main_text!.innerText = current_value + "-";
    }

    if (e.key === "*") {
      const current_value = main_text!.innerText;
      main_text!.innerText = current_value + "*";
    }

    if (e.key === "/") {
      const current_value = main_text!.innerText;
      main_text!.innerText = current_value + "/";
    }

    if (e.key === "=" || e.key === "Enter") {
      btn_equals.click();
    }

    if (e.key === "Backspace") {
      btn_del.click();
    }

    if (e.key.toLowerCase() === "c" || e.key.toLowerCase() === "escape") {
      btn_clear.click();
    }
  });
}
