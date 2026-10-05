import { NextResponse } from "next/server";
import { employees, getNextId } from "../data";

// GET - Get all employees
export async function GET() {
  return NextResponse.json(employees);
}

// POST - Add new employee
export async function POST(request) {
  const data = await request.json();

  const newEmployee = {
    id: getNextId(), 
    name: data.name,
    department: data.department,
    salary: data.salary
  };

  employees.push(newEmployee);
return NextResponse.json(newEmployee, { status: 201 });
}