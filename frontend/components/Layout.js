export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 p-4 text-white text-center">
          <h1 className="text-2xl">Car Record Management</h1>
        </header>
        <main className="p-4">{children}</main>
      </div>
    );
  }
  