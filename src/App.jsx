import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://api.kanye.rest/";

function App() {
  const [quote, setQuote] = useState("Нажми на кнопку");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchQuote() {
    setIsLoading(true);
    try {
      const response = await fetch(URL);

      const data = await response.json();

      setQuote(data.quote);
    } catch (error) {
      console.error("Alarm");
      setQuote("Ошибка загрузки цитаты."); // Обновляем стейт с ошибкой
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <article>
      <h2>Цитаты Канье Уэста</h2>
      <blockquote>{quote}</blockquote>
      <button
        onClick={fetchQuote}
        disabled={isLoading}
        // Здесь вешаешь onClick и управляешь disabled
      >
        {isLoading ? "Загрузка..." : "Получить новую цитату"}
      </button>
    </article>
  );
}

export default App;
