import pokeball from "../../assets/pokeball.png";

export function Header() {
  return (
    <header>
      <h1>
        <img src={pokeball} alt="" />
        Pokédex
      </h1>
      <button></button>
    </header>
  );
}
