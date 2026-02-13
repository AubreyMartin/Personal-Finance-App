import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Actions(props: {
  name: string;
  from: string;
  edit: string;
  id?: number | string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const fromLabel = { '/pots': 'Pot', '/budgets': 'Budget' } as Record<string, string>;

  const editPath = props.id != null && props.id !== '' ? `${props.edit}?id=${encodeURIComponent(String(props.id))}` : props.edit;
  const deleteSearch = new URLSearchParams({
    name: props.name,
    from: props.from,
    ...(props.id != null && props.id !== '' && { id: String(props.id) }),
  }).toString();

  return (
    <div className="actions-wrapper">
      <button
        type="button"
        className="controls-dots-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img src="/assets/images/icon-ellipsis.svg" alt="options" />
      </button>

      {open && (
        <ul className="dropdown-menu">
          <li onClick={() => navigate(editPath)}>Edit {fromLabel[props.from] ?? ''}</li>
          <li onClick={() => navigate(`/Deleted?${deleteSearch}`)}>
            Delete {fromLabel[props.from] ?? ''}
          </li>
        </ul>
      )}
    </div>
  );
}
