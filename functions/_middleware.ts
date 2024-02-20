import staticFormsPlugin from '@cloudflare/pages-plugin-static-forms';

export const onRequest: PagesFunction = staticFormsPlugin({
  respondWith: ({ formData, name }) => {
    console.log('Form Data:', formData);
    console.log('Form Name:', name);
    const email = formData.get('email');
    return new Response(
      `Hello, ${email}! Thank you for submitting the ${name} form.`
    );
  },
});
