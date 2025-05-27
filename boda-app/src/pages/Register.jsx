export default function Register() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="border p-2 rounded w-full" />
        <input type="tel" placeholder="Phone" className="border p-2 rounded w-full" />
        <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
        <button className="bg-blue-600 text-white p-2 rounded w-full">Submit</button>
      </form>
    </div>
  );
}
