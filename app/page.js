import AddTodoForm from "@/app/_components/add-todo-form";
import ListTodos from "@/app/_components/list-todos";
import ReduxProvider from "@/lib/redux-provider";



export default function Home() {
  return (
    <ReduxProvider>
      <main className="flex flex-col md:flex-row">
        <AddTodoForm />
        <ListTodos />
      </main>
    </ReduxProvider>
  );
}
