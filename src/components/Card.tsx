
interface CardProps {
  count: number;
}

function Card({ count }: CardProps) {
  return (
    <div>
      <h1>Card</h1>
      <p>Count: {count}</p>
    </div>
  )
}

export default Card