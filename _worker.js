addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const targetUrl = url.searchParams.get('url')

  if (!targetUrl) {
    const currentDomain = url.origin
    return new Response(
      `Usage: Send a request with the "url" query parameter.
Example: ${currentDomain}/?url=https://example.com`,
      { status: 400 }
    )
  }

  // 创建请求并转发
  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow'
  })

  // 创建响应并添加 CORS 头
  const modifiedResponse = new Response(response.body, response)

  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*')
  modifiedResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  modifiedResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  return modifiedResponse
}
