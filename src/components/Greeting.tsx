import Head from "./Head";

export default function Greeting() {
  return (
    <div className="greeting">
      <div className="greeting-msg">
        <p>Hey there! Glad you made it!</p>
      </div>
      <Head />
    </div>
  );
}
