import "./App.css";
import { Heading } from "./components/Heading/Heading";
import { Form } from "./components/Form/Form";
import { Types } from "./components/Types/Types";
import { Reviews } from "./components/Reviews/Reviews";
import { useState } from "react";

const initialReviews = [
  { author: "Kawowy1", text: "Najlepsza jest latte!", id: 1 },
  { author: "Marta", text: "Cappuccino na dobry początek dnia", id: 2 },
  { author: "Max", text: "Do kawy najlepsze są kawowe muffinki", id: 3 },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);

  return (
    <>
      <Heading />
      <Types />
      <Form
        onReviewSubmit={(author, text) => {
          setReviews((prevReviews) => {
            return [
              { author, text, id: prevReviews.length + 1 },
              ...prevReviews,
            ];
          });
        }}
      />
      <Reviews reviews={reviews} />
    </>
  );
}

export default App;
