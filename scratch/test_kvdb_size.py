import urllib.request
import urllib.error
import json

bucket_id = "StQDmdMowP935XBv33Phwf"

def test_size(size_kb):
    url = f"https://kvdb.io/{bucket_id}/test_size_{size_kb}k"
    payload = b"A" * (size_kb * 1024)
    print(f"Testing write of {size_kb} KB...")
    try:
        req = urllib.request.Request(url, data=payload, method="POST")
        with urllib.request.urlopen(req) as response:
            print(f"  Success! Status: {response.status}")
            return True
    except urllib.error.HTTPError as e:
        print(f"  HTTPError: {e.code} - {e.read().decode().strip()}")
        return False
    except Exception as e:
        print(f"  Exception: {e}")
        return False

test_size(10)
test_size(50)
test_size(100)
test_size(150)
test_size(200)
test_size(300)
