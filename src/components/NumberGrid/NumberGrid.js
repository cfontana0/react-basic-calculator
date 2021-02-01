import { Button } from '../Button';

export const NumberGrid = props => {
    return (
        <div style={styles.grid}>
            <div style={styles.row}>
                <div style={styles.col}><Button onClick={props.onClick}>7</Button></div>
                <div style={styles.col}><Button onClick={props.onClick}>8</Button></div>
                <div style={styles.col}><Button onClick={props.onClick}>9</Button></div>
            </div>
            <div style={styles.row}>
                <div style={styles.col}><Button onClick={props.onClick}>4</Button></div>
                <div style={styles.col}><Button onClick={props.onClick}>5</Button></div>
                <div style={styles.col}><Button onClick={props.onClick}>6</Button></div>
            </div>
            <div style={styles.row}>
                <div style={styles.col}><Button onClick={props.onClick}>1</Button></div>
                <div style={styles.col}><Button onClick={props.onClick}>2</Button></div>
                <div style={styles.col}><Button onClick={props.onClick}>3</Button></div>
            </div>
            <div style={styles.row}>
                <div style={styles.col}><Button onClick={props.onClick}>0</Button></div>
                <div style={styles.col}></div>
                <div style={styles.col}><Button onClick={props.onClick}>,</Button></div>
            </div>
        </div>
    );
}


const styles = {
  grid: {
     width: '100%'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  col: {
    flex: '1 1 auto'
  },
  rowspan2: {
    flex: '1 1 100%'
  }
}