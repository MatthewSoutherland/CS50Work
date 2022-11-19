#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // determine winner.
    if (score1 > score2)
    {
        return printf("Player 1 wins!\n"), 0;
    }
    else if (score2 > score1)
    {
        return printf("Player 2 wins!\n"), 0;
    }
    else
    {
        return printf("Tie!\n"), 0;
    }
}

int compute_score(string word)
{
    // variables to help compute score.
    int score = 0;
    int n = strlen(word);
    string alpha = "abcdefghijklmnopqrstuvwxyz";

    // looping thru word string
    for (int i = 0; i < n; i++)
    {
        word[i] = tolower(word[i]);
        for (int j = 0; j < strlen(alpha); j++)
        {
            // finding char in index and assigning points from array.
            if (word[i] == alpha[j])
            {
                score = score + POINTS[j];
            }
        }
    }
    return score;
}
