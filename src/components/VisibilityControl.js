export const VisibilityControl = ({
  setShowCompleted,
  cleanTask,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("¿Seguro que quieres eliminar estas tareas?")) {
      cleanTask();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          checked={isChecked}
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar Tareas Hechas </label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Limpiar
      </button>
    </div>
  );
};
