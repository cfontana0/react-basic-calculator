
export const Button = props => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick(props.children);
    }
  }

  return (
    <div style={styles.button} onClick={onClick}>
      {props.children}
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: '#999',
    border: '1px solid black',
    height: 50,
    minWidth: '50',
    verticalAlign: 'middle',
    width: '100%',
  }
}