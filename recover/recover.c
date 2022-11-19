#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    // checking command line argument
    if(argc!=2)
    {
        fprintf(stderr, "Usage: ./recover infile\n");
        return 1; // return your shit is fucked up
    }

    // open input file
    FILE*inptr=fopen(argv[1], "r"); // "r" = read only
    if(inptr==NULL)
    {
        fprintf(stderr, "Could not open %s.\n", argv[1]);
        return 2;
    }

    //set outfile pointer to NULL
    FILE* outptr = NULL;

   //create an array of elements
    BYTE buffer[512];

    int jpeg=0;
    char filename[8]={0};
    // read memory
    while(fread(buffer, sizeof(BYTE)*512, 1, inptr)==1)
    {
        if(buffer[0]==0xFF&&buffer[1]==0xD8&&buffer[2]==0xFF&&(buffer[3]&0xF0)==0xE0)
        {
            //close outptr if jpeg was found
            if(outptr != NULL)
            {
                fclose(outptr);
            }
            sprintf(filename, "%03d.jpg", jpeg++);

            //open a new outptr for writing a new found jpeg
            outptr = fopen(filename, "w");
        }

       // write to jpeg
       if(outptr != NULL)
       {
            fwrite(buffer, sizeof(BYTE)*512, 1, outptr);
       }
    }

    if (outptr != NULL)
    {
      fclose(outptr);
    }

    //close input file
    fclose(inptr);
    return 0;
}
