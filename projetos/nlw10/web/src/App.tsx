import { Habit } from "./components/Habit";

export function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={4} />
      <Habit completed={5} />
      <Habit completed={1} />
      <Habit completed={3} />
      <Habit completed={4} />
      <Habit completed={6} />
    </div>
  )
}
