import cs50


def main():
    letter_count = 0
    word_count = 1
    sentence_count = 0

    userstr = cs50.get_string("Text: ")

    # count letters, words, sentences
    letter_count = len(list(filter(str.isalpha, userstr)))

    for i in userstr:
        if i == " ":
            word_count += 1

    for i in userstr:
        if i == "?" or i == "." or i == "!":
            sentence_count += 1

    # variables for math
    a = float(letter_count)
    b = float(word_count)
    c = float(sentence_count)

    # caluclate grade level
    l = a / b * 100.00
    s = c / b * 100.00
    index = .0588 * l - .296 * s - 15.8

    # here comes the values being returned. Boom!
    if index > 16:
        return print("Grade 16+")
    elif index < 1:
        return print("Before Grade 1")
    else:
        newindex = round(index, 0)
        newindex = int(newindex)
        return print("Grade ", newindex)


main()