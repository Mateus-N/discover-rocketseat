function sum(a: number, b: number) {
  return a + b
}

let user: string = 'Mateus'

let valor = 5

let numbers: number[] = [1, 2, 3, 4, 5, 6]

let users: Array<string> = ['Mateus', 'Adrielly']

function showMessages(message: string): void {
  console.log (message)
}

function printUserId(id: number | string) {
  console.log (`O ID do usuário é ${id}`)
}

/*
S => state
T => type
K => Key
V => value
E => element
*/

function useState<T extends number | string = number>() {
  let state: T

  function get() {
    return state
  }

  function set(newValue: T) {
    state = newValue
  }

  return { get, set }
}

let newState = useState<number>()

newState.get()
newState.set(123)

type IdType = string | number | undefined

let userId: IdType
let adminId: IdType
