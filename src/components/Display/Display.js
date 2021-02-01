
export const Display = props => {
  return (
    <div style={styles.display}>
      {props.children}
    </div>
  );
}


const styles = {
  display: {
    backgroundColor: '#aaa',
    height: 50,
  }
}