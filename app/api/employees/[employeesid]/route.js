import { NextResponse } from "next/server";
import { employees } from "../../data";

// GET - Single employee
export async function GET(request, { params }) {
  const { employeesid } = await params;

  const employee = employees.find(
    (emp) => String(emp.id) === String(employeesid)
  );

  if (!employee) {
    return NextResponse.json(
      { error: "Employee Not Found" },
      { status: 404 }
    );
  }

  return NextResponse.json(employee);
}

// PUT - Full update
export async function PUT(request, { params }) {
  const { employeesid } = await params;

  const employee = employees.find(
    (emp) => String(emp.id) === String(employeesid)
  );

  if (!employee) {
    return NextResponse.json(
      { error: "Employee Not Found" },
      { status: 404 }
    );
  }

  const data = await request.json();

  employee.name = data.name;
  employee.department = data.department;
  employee.salary = data.salary;

  return NextResponse.json({
    message: "Employee updated successfully",
    employee: employee
  });
}

// PATCH - Partial update
export async function PATCH(request, { params }) {
  const { employeesid } = await params;

  // Fixed: changed String(id) -> String(employeesid) and emp.employeesid -> emp.id
  const employee = employees.find(
    (emp) => String(emp.id) === String(employeesid)
  );

  if (!employee) {
    return NextResponse.json(
      { error: "Employee Not Found" },
      { status: 404 }
    );
  }

  const data = await request.json();

  if (data.name !== undefined) {
    employee.name = data.name;
  }

  if (data.department !== undefined) {
    employee.department = data.department;
  }

  if (data.salary !== undefined) {
    employee.salary = data.salary;
  }

  return NextResponse.json({
    message: "Employee updated successfully",
    employee: employee
  });
}

// DELETE - Delete employee
export async function DELETE(request, { params }) {
  const { employeesid } = await params;

  // Fixed: changed String(id) -> String(employeesid) and emp.employeesid -> emp.id
  const index = employees.findIndex(
    (emp) => String(emp.id) === String(employeesid)
  );

  if (index === -1) {
    return NextResponse.json(
      { error: "Employee Not Found" },
      { status: 404 }
    );
  }

  const deletedEmployee = employees.splice(index, 1);

  return NextResponse.json({
    message: "Employee deleted successfully",
    employee: deletedEmployee[0]
  });
}