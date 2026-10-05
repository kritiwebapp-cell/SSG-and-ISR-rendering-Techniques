//ISR Rendering Technique

export const revalidate = 10;

export default async function MatchesPage() {
  console.log("🔄 MATCHES PAGE GENERATED:", new Date().toLocaleTimeString());

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const matches = await response.json();

  const generatedTime = new Date().toLocaleTimeString();

  return (
    <main>
      <h1>🏏 Cricket Matches</h1>

      <h2>Page generated at: {generatedTime}</h2>

      {matches.map((match) => (
        <div key={match.id}>
          <h3>India vs Australia</h3>
          <p>Match ID: {match.id}</p>
          <p>Information: {match.body}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}








// revalidate is a Next.js special configuration option used to specify the revalidation time in seconds