function Tasks () {
    const Tasks = ["sFinish Exams", "Get some Rest", "Go for a walk", "Clean the house", "Pay bills."];
<div>
    <h1>Tasks</h1>
    <p>Here are some Tasks for you to complete
    </p>
<table>
    <thead>
        <tr>
        <th colspan="5">Task Name</th>
        </tr>
    </thead>
    {
        Tasks.ingredients.map((ingredient, i)=>
        (
            <tr key ="{0}">{ingredient}</tr>
        )
        (
            <tr key ="{1}">{ingredient}</tr>
        )
        (
            <tr key ="{2}">{ingredient}</tr>
        )
        (
            <tr key ="{3}">{ingredient}</tr>
        )
        (
            <tr key ="{4}">{ingredient}</tr>
        )
        )}
</table>
</div>
}
export default Tasks;