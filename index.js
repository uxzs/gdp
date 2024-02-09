addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
}); 

/**
* Many more examples available at:
* https://developers.cloudflare.com/workers/examples
* @param {Request} request
* @returns {Promise<Response>}
*/

async  function handleRequest(request)  {
  return fetch("https://lifi.bio.link");
