import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Bomb.png" alt="Bomb" width="100" height="100" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="bg-black text-white py-2 px-4 rounded-md mt-6 shadow-xl shadow-[lightgray]">Let me go back to home</a>
    </div>
  );
}