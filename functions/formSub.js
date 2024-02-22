export async function onRequest(context) {
  // Retrieve the form data from the request
  const { name, email, message } = await context.request.json();

  // Access the database connection from the environment variable
  const database = context.env.formDB;

  // Prepare an SQL query to insert the form data into a table
  // Make sure the table and column names match your database schema
  const query = `INSERT INTO portfolioDB (name, email, message) VALUES (?, ?, ?)`;
  const ps = database.prepare(query);

  // Execute the query with the form data
  try {
    const result = await ps.run(name, email, message);
    return new Response('Form submitted successfully', { status: 200 });
  } catch (error) {
    // Handle any errors that occur during the database operation
    console.error('Database error:', error);
    return new Response('Error submitting form', { status: 500 });
  }
}
