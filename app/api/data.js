export let employees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 50000
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 45000
  },
  {
    id: 3,
    name: "Amit",
    department: "Finance",
    salary: 55000
  }
];
let nextId = 4;

export function getNextId() {
  return nextId++;
}