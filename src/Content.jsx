import ItemList from "./ItemList.jsx";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem", color: "red" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
