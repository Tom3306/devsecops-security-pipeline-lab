#!/usr/bin/env sh
set -eu

url="${1:-http://127.0.0.1:3000/healthz}"
attempts="${2:-30}"

i=1
while [ "$i" -le "$attempts" ]; do
  if curl -fsS "$url" >/dev/null 2>&1; then
    exit 0
  fi
  i=$((i + 1))
  sleep 2
done

echo "Timed out waiting for $url" >&2
exit 1

