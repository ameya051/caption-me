export default function PageHeaders({
  h1Text = "Hello",
  h2Text = "Subheader",
}) {
  return (
    <section className="text-center mt-12 sm:mt-24 mb-4 sm:mb-8">
      <h1
        className="bg-[length:200%_auto] animate-gradient text-3xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.blue.500),theme(colors.purple.600),theme(colors.purple.600),theme(colors.blue.500),theme(colors.green.300))]"
        // style={{ textShadow: "1px 1px 0 rgba(0,0,0,.2)" }}
      >
        {h1Text}
      </h1>
      <h2 className="text-white/75 mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-sm">{h2Text}</h2>
    </section>
  );
}
