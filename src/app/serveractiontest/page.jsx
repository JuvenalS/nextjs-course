import { sayHello } from "@/lib/action";

export default function ServerActionTestPage(){
    return (
        <div>
            <form action={sayHello}>
                <button>Test me!</button>
            </form>
        </div>
    )
}