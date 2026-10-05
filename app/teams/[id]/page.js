

//create dynamic routes and generate their pages statically at build time using generateStaticParams().

export function generateStaticParams() {
  
  return [
    {
      id: "india",
    },
    {
      id: "australia",
    },
    {
      id: "england",
    },
  ];                                        
}

export default async function TeamPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>🏏 Team Details</h1>

      <h2>{id}</h2>

      <p>Welcome to the {id} cricket team page.</p>
    </main>
  );
}


// generateStaticParams()
//         ↓
//  ┌──────┼─────────┐
//  ↓      ↓         ↓
// india australia england
//  ↓      ↓         ↓
// /teams/india
// /teams/australia
// /teams/england