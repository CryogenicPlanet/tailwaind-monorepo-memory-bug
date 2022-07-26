filename=$1
cat $filename | while read LINE; do
    # echo $LINE
    # write regex to parse css classname from .css file
   [[ ".hello-world ." =~ ^.*-*?(-*)$ ]] && echo "test"
done
