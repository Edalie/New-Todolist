"use client";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([{ id: 1, task: "...", status: false }]);
  const [tachesTerminees, setTachesTerminees] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState("");

  //const todo = {id:1, task:"finir le rapport journalier", status:false}
  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), task: currentTodo, status: false }]);
    setCurrentTodo("");
  };
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => (todos.id == id ? { ...todo, status: true } : todo))
    );
    //console.log(todos)
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className=" h-screen  flex-col justify-center items-center">
      <h1 className="text-center text-4xl  p-10 font-bold  text-pink-600 ">
        TODO LISTE
      </h1>
      <div className="cursor-pointer">
        <input
          onChange={(e) => setCurrentTodo(e.target.value)}
          value={currentTodo}
          className="h-12 bg-white  rounded p-4"
          placeholder="Entrer la tache..."
        />
        <button
          disabled={currentTodo === "" ? true : false}
          onClick={addTodo}
          className="bg-green-700 h-12 hover:bg-amber-800 cursor p-4 rounded text-white px-4"
        >
          Ajouter à la liste{" "}
        </button>
      </div>
      <div className="mt-10">
        <table className="mx-50 bg-white/20 ">
          <thead>
            <tr className=" bg-pink-400 ">
              <th className="w-100 h-10">No</th>
              <th className="w-100 h-10">Tache</th>
              <th className="w-100 h-10"> Done</th>
              <th className="w-10s0 h-10">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {todos.map((todo, i) => (
              <tr key={i}>
                <td className="w-40 h-10 text-center">{i + 1}</td>
                <td className="w-40 h-10 test-xs">{todo.task}</td>
                <td className="w-40 h-10">
                  {todo.status ? "Terminé " : "En cours"}
                </td>
                <td>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white  p-1 rounded"
                  >
                    delete
                  </button>
                  <button
                    onClick={() => updateTodo(todo.id)}
                    className="bg-green-500 text-white p-1 rounded"
                  >
                    finish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
