export function themeSwitcher(): void {
  const app: HTMLDivElement | any =
    document.querySelector<HTMLDivElement>("#app");

  let currentTheme: string = localStorage.getItem("currentTheme") || "light";

  const theme_switcher: HTMLDivElement | any =
    document.querySelector<HTMLDivElement>(".theme_switcher");

  const theme_switcher_item: HTMLDivElement | any =
    document.querySelector<HTMLDivElement>(".theme_switcher_item");

  theme_switcher!.addEventListener("click", () => {
    if (app.classList.contains("dark_theme")) {
      app.classList.remove("dark_theme");
      localStorage.setItem("currentTheme", "dark");
      theme_switcher_item.style.right = "0";
      theme_switcher_item.style.left = "unset";
    } else {
      app.classList.add("dark_theme");
      localStorage.setItem("currentTheme", "light");
      theme_switcher_item.style.left = "0";
      theme_switcher_item.style.right = "";
    }
  });
}
