import subprocess
import time

print("Starting main.py (unbuffered) and writing outputs to main_test.log...")
with open("main_test.log", "w", encoding="utf-8") as log_file:
    p = subprocess.Popen([r"C:\Python314\python.exe", "-u", "main.py"], stdout=log_file, stderr=log_file)
    time.sleep(10)
    p.terminate()
print("Finished. main.py terminated.")
