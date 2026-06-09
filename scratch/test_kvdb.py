import urllib.request
import urllib.error
import json

bucket_id = "StQDmdMowP935XBv33Phwf"
url = f"https://kvdb.io/{bucket_id}/test_key"

print("Testing writing to kvdb...")
try:
    req = urllib.request.Request(url, data=b"hello_world", method="POST")
    with urllib.request.urlopen(req) as response:
        print("Write status:", response.status)
        print("Write headers:", response.headers.items())
except urllib.error.HTTPError as e:
    print("Write HTTPError:", e.code, e.read().decode())
except Exception as e:
    print("Write Exception:", e)

print("\nTesting reading from kvdb...")
try:
    with urllib.request.urlopen(url) as response:
        print("Read status:", response.status)
        print("Read data:", response.read().decode())
except urllib.error.HTTPError as e:
    print("Read HTTPError:", e.code, e.read().decode())
except Exception as e:
    print("Read Exception:", e)
