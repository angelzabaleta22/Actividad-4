export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          style={{ cursor: "pointer" }}
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        ></input>
      </td>
    </tr>
  );
};
