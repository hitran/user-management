import styles from "./UserList.module.css";

import Card from "../../UI/Card/Card";

const UserList = (props) => {
  let content = <p>No Users Added</p>;
  if (props.users.length > 0) {
    content = (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user, id) => (
            <li key={id}>
              {user.name} ({user.age}) years old
            </li>
          ))}
        </ul>
      </Card>
    );
  }
  return <>{ content }</>;
};

export default UserList;
