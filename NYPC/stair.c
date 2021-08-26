#include <math.h>
#include <stdio.h>

int main() {
    int height, current, hope;
    scanf("%d %d %d", &height, &current, &hope);
    double asdf = ((double)hope - height + current) / (height - 1);
    printf("%d", (int)ceil(asdf));
    return 0;
}
