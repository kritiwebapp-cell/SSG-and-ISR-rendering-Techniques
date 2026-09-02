
//SSG rendering Technique

const teams = [
  {
    id: 1,
    name: "India",
    captain: "Rohit Sharma",
    ranking: 1,
  },
  {
    id: 2,
    name: "Australia",
    captain: "Pat Cummins",
    ranking: 2,
  },
  {
    id: 3,
    name: "England",
    captain: "Harry Brook",
    ranking: 3,
  },
];

export default function Teams() {
  return (
    <main>
      <h1>Cricket Teams</h1>

      {teams.map((team) => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <p>Captain: {team.captain}</p>
          <p>Ranking: {team.ranking}</p>
        </div>
      ))}
    </main>
  );
}