import Counter from "@/components/counter";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Counter name="Academics" className="lg:translate-x-24" />
      <Counter name="Charm" className="lg:translate-x-96 lg:translate-y-16" />
      <Counter name="Courage" className="lg:-translate-x-24" />
    </div>
  );
}
