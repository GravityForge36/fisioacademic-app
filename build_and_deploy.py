import os
import subprocess
import time
import sys

# Paths
project_dir = r"C:\Users\Robson Silva\.gemini\antigravity\scratch\fisioterapia-study-app"
dist_exe = os.path.join(project_dir, "dist", "Fisio Uniasselve.exe")

print("--- STEP 1: TERMINATING RUNNING INSTANCES ---")
try:
    # Attempt to kill any running instance of the app
    result = subprocess.run(["taskkill", "/F", "/IM", "Fisio Uniasselve.exe"], capture_output=True, text=True)
    print("Taskkill stdout:", result.stdout.strip())
    print("Taskkill stderr:", result.stderr.strip())
except Exception as e:
    print("Error running taskkill:", e)

# Wait a moment for processes to release handles
time.sleep(2)

print("\n--- STEP 2: REMOVING OLD EXECUTABLE ---")
if os.path.exists(dist_exe):
    try:
        os.remove(dist_exe)
        print(f"Successfully removed old executable at {dist_exe}")
    except Exception as e:
        print(f"Error removing old executable: {e}")
        print("Retrying after 3 more seconds...")
        time.sleep(3)
        try:
            os.remove(dist_exe)
            print(f"Successfully removed old executable at {dist_exe} on retry")
        except Exception as e2:
            print(f"Failed to remove old executable: {e2}")
            sys.exit(1)
else:
    print("No old executable found in dist/. Good.")

print("\n--- STEP 3: RUNNING PYINSTALLER COMPILATION ---")
spec_path = os.path.join(project_dir, "Fisio Uniasselve.spec")
cmd = [r"C:\Python314\python.exe", "-m", "PyInstaller", "--clean", spec_path]

print(f"Running command: {' '.join(cmd)}")
try:
    process = subprocess.Popen(cmd, cwd=project_dir, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, encoding="utf-8")
    
    # Stream output in real time
    while True:
        output = process.stdout.readline()
        if output == '' and process.poll() is not None:
            break
        if output:
            print(output.strip())
            
    rc = process.poll()
    if rc == 0:
        print("\n--- BUILD SUCCESSFUL! ---")
    else:
        print(f"\n--- BUILD FAILED WITH EXIT CODE {rc} ---")
        sys.exit(rc)
except Exception as e:
    print("Exception occurred during build:", e)
    sys.exit(1)
