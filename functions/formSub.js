/**
 * POST /api/submit
 */
export async function onRequestPost(context) {
  try {
    // Convert FormData to JSON
    // NOTE: Allows multiple values per key
    let output = {};
    for (let [key, value] of context.request.formData()) {
      let tmp = output[key];
      if (tmp === undefined) {
        output[key] = value;
      } else {
        output[key] = [].concat(tmp, value);
      }
    }

    // Perform any processing or validation here with the received data
    console.log('Received data:', output);

    // Return a response
    return new Response(JSON.stringify(output, null, 2), {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  } catch (err) {
    return new Response('Error parsing JSON content', { status: 400 });
  }
}