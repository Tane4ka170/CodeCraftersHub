import ActiveLabel from "./componets/active-label";
import NotActiveLabel from "./componets/not-active-label";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not</NotActiveLabel>
    </main>
  );
}
