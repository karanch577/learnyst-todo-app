import AddTodoForm from "@/app/_components/add-todo-form";
import ListTodos from "@/app/_components/list-todos";
import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/lib/redux-provider"), { ssr: false })

export default function Home() {
  return (
    <ReduxProvider>
      <main className="flex">
        <AddTodoForm />
        <ListTodos />
      </main>
    </ReduxProvider>
  );
}
