COUNT=$1
START=$2 || 1

for i in `seq $START $COUNT`
do
    cp packages/ui/SaasLanding.tsx packages/ui/SaasLanding-$i.tsx
done