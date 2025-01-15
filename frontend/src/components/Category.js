import ItemCard from "./ItemCard";

function Category({ title, items }) {
  return (
    <section className="category ml-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      {items.map((item) => (
        <ItemCard key={item} item={item} />
      ))}
    </section>
  );
}

export default Category;
