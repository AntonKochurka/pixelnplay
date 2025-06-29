import RegisterForm from "./form";

export default function Register() {
  return (
    <div className="container p-4">
      <div className="mt-20 flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <div className="w-full max-w-lg px-4 py-6 rounded-xl bg-zinc-800/90 border border-zinc-800 shadow-xl text-white">
            <RegisterForm/>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold tracking-wide leading-tight mb-6 text-white">
            Did you know?
          </h1>
          <p className="text-zinc-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            possimus ea iure ipsum rem sit unde, exercitationem, vel quod
            assumenda eius neque voluptate provident aliquid doloribus
            temporibus eligendi, odit ullam.
          </p>
        </div>
      </div>
    </div>
  );
}
