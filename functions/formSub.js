export async function onRequest(request) {
    try {
      const { name, email, message } = await request.json();
  
      // Perform any processing or validation here with the received data
  
      // For now, let's log the received data and return a response
      console.log('Received data:', { name, email, message });
  
      return new Response('Form data received successfully!', {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    } catch (error) {
      console.error('Error processing form data:', error);
  
      return new Response('Error processing form data', {
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  }
  