// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <strings.h>

#include "dictionary.h"



// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// TODO: Choose number of buckets in hash table
const unsigned int N = 26;

// Hash table
node *table[N];


// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO
    //create a pointer to the first node
    unsigned int i = hash(word);
    node *check = table[i];

    //compare the words
    while (check != NULL)//!!! if here is (chec->next != NULL)，the last word would not be check
    {
        if (strcasecmp(check->word, word) == 0)
        {
            return true;
        }
        else
        {
            check = check->next;
        }
    }
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    /*int n0 = toupper(word[0]) - 'A';
    int n1 = toupper(word[1]) - 'A';
    if (sizeof(word) > 2 && word[1] != '\'')
    {
        return n0 * 26 + n1;
    }
    else
    {
        return n0 * 26;
    }*/
    return toupper(word[0]) - 'A';
}

int word_count = 0;
// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // TODO
    //open the dictionary
    FILE *file = fopen(dictionary, "r");
    if (file == NULL)
    {
        return false;
    }

    char word[LENGTH + 1];

    //copy the word into node
    while (fscanf(file, "%s", word) != EOF)
    {
        //create a node
        int i = hash(word);
        node *n = malloc(sizeof(node));
        if (n == NULL)
        {
            return false;
        }
        //copy the word
        strcpy(n->word, word);
        if (table[i] == NULL)
        {
            table[i] = n;
            n->next = NULL;
        }
        else
        {
            n->next = table[i];
            table[i] = n;
        }
        word_count++;
    }
    fclose(file);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return word_count;
    return 0;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    // TODO
    node *cursor;
    node *tmp;
    int i = 0;
    for (; i < N; i++)
    {
        cursor = table[i];
        tmp = table[i];
        while (cursor != NULL)
        {
            cursor = cursor->next;
            free(tmp);
            tmp = cursor;
        }
    }
    if (i == N && cursor == NULL)
    {
        return true;
    }
    else
    {
        return false;
    }
}