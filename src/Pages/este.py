import hashlib
import os
import base64

# Define the minimum and maximum length for the code verifier
MIN_CODE_VERIFIER_LENGTH = 43
MAX_CODE_VERIFIER_LENGTH = 128

# Generate a high-entropy cryptographic random string for the code verifier
def generate_code_verifier():
    length = os.urandom(1)[0] % (MAX_CODE_VERIFIER_LENGTH - MIN_CODE_VERIFIER_LENGTH + 1) + MIN_CODE_VERIFIER_LENGTH
    verifier_bytes = os.urandom(length)
    code_verifier = base64.urlsafe_b64encode(verifier_bytes).rstrip(b'=').decode('utf-8')
    return code_verifier

# Transform the code verifier into a code challenge using the "S256" method
def generate_code_challenge(code_verifier):
    verifier_bytes = code_verifier.encode('utf-8')
    sha256_hash = hashlib.sha256(verifier_bytes).digest()
    code_challenge = base64.urlsafe_b64encode(sha256_hash).rstrip(b'=').decode('utf-8')
    return code_challenge

# Generate a code verifier and code challenge
code_verifier = generate_code_verifier()
code_challenge = generate_code_challenge(code_verifier)

print("Generated Code Verifier:", code_verifier)
print("Generated Code Challenge (S256):", code_challenge)
