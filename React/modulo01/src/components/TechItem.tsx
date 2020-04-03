import React from 'react';

interface IDeleteHandler {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  tech: string;
}

interface Props {
  tech: string;
  onDelete: (deleteDTO: IDeleteHandler) => void
}

function TechItem({ tech, onDelete }: Props) {
  return (
    <>
    <li>
      {tech}
      <button
        onClick={(e) => onDelete({e, tech })}
        type="button">
        Remover
      </button>
    </li>
    </>
  )
}

export default TechItem;
