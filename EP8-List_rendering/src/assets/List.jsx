import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { IoAddCircleSharp } from "react-icons/io5";

const List = () => {
  var [items, setItems] = useState([
    { id: 1, Label: "Html&CSS", checked: true },
    { id: 2, Label: "JavaScript", checked: true },
    { id: 3, Label: "React", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [currentEleID, setCurrentEleId] = useState(null);

  function handleCheck(id) {
    let newListItem = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newListItem);
  }

  function handleDelete(id) {
    let newItems = items
      .filter((items) => items.id != id)
      .map((items, index) => {
        return {
          ...items,
          id: index + 1,
        };
      });

    setItems(newItems);
  }

  let handleUpdate = (id) => {
    let listItem = items.find((items) => items.id == id);
    setNewItem(listItem.Label);
    setIsEditing(true);
    setCurrentEleId(id);
  };

  var handleAddorSaveItem = () => {
    if (isEditing) {
      let newListItem = items.map((items) => {
        return items.id === currentEleID ? { ...items, Label: newItem } : items;
      });
      setItems(newListItem);
      setCurrentEleId(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      if (newItem == "") {
        setItems([...items]);
      } else {
        setItems([
          ...items,
          {
            id: items.length + 1,
            Label: newItem,
            checked: false,
          },
        ]);
        setNewItem("");
      }
    }
  };

  return (
    <div>
      <main>
        <label>
          <h1 id="heading">TO DO LIST</h1>
        </label>

        <input
          type="text"
          placeholder="Add new Item"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />

        <button onClick={() => handleAddorSaveItem()}>
          {isEditing ? <CiSaveDown1 /> : <IoAddCircleSharp />}
        </button>

        <ul>
          {items.map((item) => {
            return (
              <li key={item.id} className="item">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    handleCheck(item.id);
                  }}
                />
                <label>
                  <span style={{ fontSize: "20px" }}>{items.Label} </span>
                </label>
                <FaEdit
                  id="edit"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleUpdate(items.id)}
                />
                <MdDeleteSweep
                  id="delete"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleDelete(items.id)}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default List;
