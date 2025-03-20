
interface CardProps {
  sets: number;
  reps: number;
}

function Card({ sets, reps }: CardProps) {
  return (
    <div>
      <h1>Workout</h1>
      <p>Sets: {sets} | Reps: {reps}</p>
    </div>
  )
}

export default Card