import csv
import sys


def main():

    # setting variables for objects
    peps = []
    guy = []
    dna_seqs = ["AGATC", "TTTTTTCT", "AATG", "TCTAG", "GATA", "TATC", "GAAA", "TCTG"]
    dna_array = {}

    # Check for command-line usage
    if len(sys.argv) != 3:
        print("arg 1 = csv file, arg 2 = dna sequence")
        sys.exit(1)

    # Read database file into a variable
    with open(sys.argv[1], "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            row['value'] = 2
            peps.append(row)

    # Read DNA sequence file into a variable
    with open(sys.argv[2], "r") as file:
        dna_reader = csv.reader(file)
        for i in dna_reader:
            guy.append(i)

    # unnest array
    guy = str(guy[0])

    # Find longest match of each STR in DNA sequence
    for j in dna_seqs:
        dna_array[j] = (longest_match(guy, j))

    # Check database for matching profiles
    for i in dna_array:
        for b in peps:
            for c in b:
                if c == i:
                    # c = peps key, b[c] = peps key.value,
                    # i = dna key, dna_array[i] = dna key.value
                    # print(c, b[c], i, dna_array[i], b['name'])
                    if int(b[c]) == int(dna_array[i]):
                        b['value'] += 1
                        if b['value'] == len(b):
                            print(b['name'])
                            sys.exit(0)

    return print('No match')


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


if __name__ == "__main__":
    main()