import CardList from "./components/CardList";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-32">
        <CardList />
      </div>
    </>
  );
}
