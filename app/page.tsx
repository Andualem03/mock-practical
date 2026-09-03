export default function Home() {
  const properties = [
    { id: 1, address: "12 Maple Street", price: "$450,000", status: "For Sale" },
    { id: 2, address: "88 Oak Avenue", price: "$1,200/mo", status: "For Rent" },
    { id: 3, address: "5 Birch Lane", price: "$675,000", status: "Sold" },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Calnan Property Listings</h1>
      <p>Mock practice app — property listings page</p>
      <p>Total: {properties.length} properties</p>

      <div style={{ marginTop: "24px" }}>
        {properties.map((property) => (
          <div
            key={property.id}
            style={{
              border: "1px solid #444",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "12px",
            }}
          >
            <h2>{property.address}</h2>
            <p>Price: {property.price}</p>
            <p>Status: {property.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}