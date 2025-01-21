export default function Layout({children}) {
    return (
        <div className="flex">
            <aside className="w-64 bg-gray-800 text-white min-h-screen">
                <div className="p-4 font-bold">
                </div>
            </aside>
            <main className="flex-1 bg-white p-6">
                <header className="mb-4 border-b pb-2">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                </header>
                {children}
            </main>
        </div>
    );
}