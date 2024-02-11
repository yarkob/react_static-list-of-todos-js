// Add the required props
import { UserInfo } from '../UserInfo';
import cn from 'classnames';

export const TodoInfo = ({ todo }) => (
  <article className={cn('TodoInfo', {
    'TodoInfo--completed': todo.completed
  })}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
