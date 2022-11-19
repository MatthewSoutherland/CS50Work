#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

int compute_lengths(string word);
int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

// variables declared outside of main.
int lettercount = 0;
int wordcount = 1;
int sentencecount = 0;

int main(void)
{
    string userstr = get_string("Text: ");
    // functions called to get numbers
    count_letters(userstr);
    count_words(userstr);
    count_sentences(userstr);

    // declaring variables to have working decimal math
    float a = lettercount;
    float b = wordcount;
    float c = sentencecount;

    // doing the math for grade level result.
    float L = a / b * 100.00;
    float S = c / b * 100.00;
    float index = 0.0588 * L - 0.296 * S - 15.8;

    if (index > 16)
    {
        return printf("Grade 16+\n"), 0;
    }
    else if (index < 1)
    {
        return printf("Before Grade 1\n"), 0;
    }
    else
    {
        int newindex = roundf(index);
        return printf("Grade %d\n", newindex), 0;
    }
}

int count_letters(string text)
{
    for (int i = 0; i < strlen(text); i++)
    {
        text[i] = tolower(text[i]);
        if (text[i] < 123 && text[i] > 96)
        {
            lettercount = lettercount + 1;
        }
    }
    return lettercount;
}

int count_words(string text)
{
    for (int i = 0; i < strlen(text); i++)
    {
        if (text[i] == 32)
        {
            wordcount = wordcount + 1;
        }
    }
    return wordcount;
}

int count_sentences(string text)
{
    for (int i = 0; i < strlen(text); i++)
    {
        if (text[i] == 46 || text[i] == 33 || text[i] == 63)
        {
            sentencecount = sentencecount + 1;
        }
    }
    return sentencecount;
}