const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li"); // <li></li>

  // divタグ生成
  const div = document.createElement("div"); // <div></div>
  div.className = "list-row"; // <div class="list-row"></div>

  // pタグ生成
  const p = document.createElement("p"); // <p></p>
  p.className = "todo-item"; // <p class="todo-item"></p>
  p.innerText = inputText; // <p class="todo-item">{inputText}</p>

  // buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // liタグの子要素に各要素を設定
  div.appendChild(p); // 階層構造
  p.appendChild(completeButton)
  p.appendChild(deleteButton)
  li.appendChild(div);

  // 未完成リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  console.log(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);
