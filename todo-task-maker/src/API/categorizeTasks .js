export const categorizeTasks = (tasks) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for consistent date comparison
  
    return tasks.reduce((categorizedTasks, task) => {
      const deadlineDate = new Date(task.deadline);
      deadlineDate.setHours(0, 0, 0, 0); // Set time to midnight for consistent date comparison
  
      if (deadlineDate < today) {
        // Deadline is before today, categorize as 'To-Do'
        categorizedTasks['To-Do'].push(task);
      } else if (deadlineDate.getTime() === today.getTime()) {
        // Deadline is today, categorize as 'On-Going'
        categorizedTasks['On-Going'].push(task);
      } else {
        // Deadline is after today, categorize as 'Completed'
        categorizedTasks['Completed'].push(task);
      }
  
      return categorizedTasks;
    }, { 'To-Do': [], 'On-Going': [], 'Completed': [] });
  };
  