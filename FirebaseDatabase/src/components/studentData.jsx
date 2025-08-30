import { getStudent,updateStudent,deleteStudent } from "../services/service";
import { useEffect,useState } from "react";

const StudentData = () => {
const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null); 
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    stream: "",
  });

  const fetchStudents = async () => {
    const data = await getStudent();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (student) => {
    setEditing(student.id);
    setFormData({
      fname: student.fname,
      lname: student.lname,
      stream: student.stream,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editing) return;

    await updateStudent(editing, formData);
    setEditing(null);
    setFormData({ fname: "", lname: "", stream: "" });
    fetchStudents(); 
    alert("Student updated successfully!");
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">
        Student Collection
      </h1>

      {editing && (
        <form
          onSubmit={handleUpdate}
          className="max-w-md mx-auto bg-yellow-50 shadow-md rounded p-6 mb-6"
        >
          <h2 className="text-xl font-bold text-center text-yellow-600 mb-4">
            Update Student
          </h2>
          <input
            type="text"
            name="fname"
            placeholder="Enter your First name"
            value={formData.fname}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="text"
            name="lname"
            placeholder="Enter your Last Name"
            value={formData.lname}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="text"
            name="stream"
            placeholder="Enter your Stream"
            value={formData.stream}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
          >
            Update
          </button>
        </form>
      )}

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-6">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Fname</th>
              <th className="px-4 py-2">Lname</th>
              <th className="px-4 py-2">Stream</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-2">{student.fname}</td>
                <td className="border px-4 py-2">{student.lname}</td>
                <td className="border px-4 py-2">{student.stream}</td>
                <td className="border px-4 py-2 flex gap-3">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteStudent(student.id).then(fetchStudents)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentData