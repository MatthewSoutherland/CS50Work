#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int usernum = get_int("Height\n");
    while (usernum < 1 || usernum > 8)
    {
        usernum = get_int("Height: ");
    }
    for (int i = 1; i <= usernum; i++)
    {
        for (int j = 1; j <= usernum; j++)
        {
            if ((i + j) > usernum)
            {
                printf("#");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}