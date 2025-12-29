


interface counterDisplayProps {
    currentCount: number;
    onIncrement:  () => void;
}

const counterDisplay: React.FC<counterDisplayProps> = ({currentCount, onIncrement}) => {
   return(<>
     <h2>{currentCount}</h2>
     <button onClick={onIncrement}>add</button>
    </>)
}

 export default counterDisplay