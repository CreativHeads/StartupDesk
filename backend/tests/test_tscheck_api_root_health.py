"""Verifies the API ingress root returns the expected health payload.

Criterion: "Public preview and API ingress are healthy" -> /api/ returns JSON
with message 'Hello World'.
"""

def test_api_root_returns_hello_world(client):
    response = client.get("/")
    assert response.status_code == 200, f"unexpected status: {response.status_code} body={response.text[:200]}"
    body = response.json()
    assert body.get("message") == "Hello World", f"unexpected payload: {body}"
