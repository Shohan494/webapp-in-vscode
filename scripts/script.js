class Task {
    constructor(id, description, entryDate, isCompleted) {
        this.id = id;
        this.description = description;
        this.entryDate = entryDate;
        this.isCompleted = isCompleted;
    }
}
var main = () => {
    // Add date in page title
    var today = new Date().toDateString();
    // Create an array to store tasks
    var myTasks = [];
    $('h1').append(` My tasks for today, ${today}`);

    // Add tasks to the list
    $('form').submit((event) => {
        var input = $(event.target).find('input');
        var description = input.val();
        if (description != "") {
            var currentTaskCount = $("#tasks").children().length;
            task = new Task(currentTaskCount + 1, description, today, false);
            myTasks.push(task);
            var html = $('<li>').html(`<i class="fa fa-check"></i><i
class="fa fa-times"></i>${task.description}`);
            html.appendTo('#tasks');
            input.val("");
        }
        return false;
    });

    console.log(myTasks);

    // Remove tasks by clicking on the red X
    $('#tasks').on('click', '.fa.fa-times', function(event) {
        console.log($(this).closest("li").index());
        var selectedTask = $(this).closest("li").index();
        myTasks.splice(selectedTask, 1);
        $(this).closest("li").remove();
        console.log(myTasks);
    });
    // Highlight task (and mark it as complete) by clicking on the green check mark
    $('#tasks').on('click', '.fa.fa-check', function(event) {
        var selectedTask = $(this).closest("li").index();
        $(this).closest("li").toggleClass('done');
        if ($(this).closest("li").hasClass('done')) {
            myTasks[selectedTask].isCompleted = true;
        } else {
            myTasks[selectedTask].isCompleted = false;
        }
        console.log(myTasks);
    });
};
$(document).ready(main);