import css from './FriendListItem.module.css';
export default function FriendItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    return (
        <li className={CSS.wrapper}>
            <img src={avatar} alt="Avatar" className={css.img} width="48" />
            <p className={css.name}>{name}</p>
            <p className={[css.status, isOnline && css.isOnline].join('')}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
}