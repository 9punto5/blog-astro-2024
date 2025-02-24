#!/bin/bash
# Renombrar archivos con caracteres URL-encoded
# Reemplaza caracteres especiales con sus equivalentes sin acentos
find src/content/posts -name "*%C3%*" -type f | while read filename; do
  new_filename=$(echo "$filename" | sed "s/%C3%A1/a/g" | sed "s/%C3%A9/e/g" | sed "s/%C3%AD/i/g" | sed "s/%C3%B3/o/g" | sed "s/%C3%BA/u/g" | sed "s/%C3%BC/u/g" | sed "s/%C3%B1/n/g")
  echo "Renombrando: $filename -> $new_filename"
  mv "$filename" "$new_filename"
done
