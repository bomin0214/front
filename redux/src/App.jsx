import useTogglesStore from "./store/useTogglesStore";
import ganadi from "./assets/ganadi.png";

function App() {
  const isOpen = useTogglesStore((state) => state.isOpen);
  const toggleModal = useTogglesStore((state) => state.toggleModal);

  return (
    <div className="flex min-h-screen flex-col items-center pt-20 bg-gray-50">
      <h1 className="mb-8 text-4xl font-bold text-slate-800">GANADI</h1>
      <div className="mb-8 flex gap-4">
        <button
          onClick={toggleModal}
          className="rounded-xl px-5 py-3 shadow hover:bg-blue-200"
        >
          {isOpen ? "Close Modal" : "Open Modal"}
        </button>
      </div>
      {isOpen && (
        <div className="w-96 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="mb-4 flex items-center gap-3">
            <img
              src={ganadi}
              alt="Ganadi"
              className="h-50 w-50 mx-auto"
            />
          </div>
          <p className="text-center text-slate-700">안녕하세요? 가나디입니다.</p>
        </div>
      )}
    </div>
  );
}

export default App;
