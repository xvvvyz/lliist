import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { defaultAnimateLayoutChanges, useSortable } from '@dnd-kit/sortable';
import ListItem, { ListItemProps } from '../ListItem';

const SortableListItem = ({ category, id, ...rest }: ListItemProps) => {
  const { attributes, isDragging, listeners, setActivatorNodeRef, setNodeRef, transform, transition } = useSortable({
    animateLayoutChanges: defaultAnimateLayoutChanges,
    id,
  });

  return (
    <ListItem
      category={category}
      containerProps={{
        ref: setNodeRef,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      dragHandleProps={{
        ...attributes,
        ...listeners,
        'aria-label': 'sort',
        'aria-roledescription': 'sortable',
        ref: setActivatorNodeRef,
      }}
      id={id}
      isDragging={isDragging}
      {...rest}
    />
  );
};

export default SortableListItem;
