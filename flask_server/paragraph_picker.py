import nltk
import sys
import os
import string
import math
FILE_MATCHES = 1
SENTENCE_MATCHES = 1


def main():
    # Check command-line arguments
    if len(sys.argv) != 2:
        sys.exit("Usage: python questions.py corpus")
    # Calculate IDF values across files
    files = load_files(sys.argv[1])
    file_words = {
        filename: tokenize(files[filename])
        for filename in files
    }
    file_idfs = compute_idfs(file_words)

    # Prompt user for query
    query = set(tokenize(input("Query: ")))

    # Determine top file matches according to TF-IDF
    filenames = top_files(query, file_words, file_idfs, n=FILE_MATCHES)

    # Extract sentences from top files
    sentences = dict()
    for filename in filenames:
        for passage in files[filename].split("\n"):
            for sentence in nltk.sent_tokenize(passage):
                tokens = tokenize(sentence)
                if tokens:
                    sentences[sentence] = tokens

    # Compute IDF values across sentences
    idfs = compute_idfs(sentences)

    # Determine top sentence matches
    matches = top_sentences(query, sentences, idfs, n=SENTENCE_MATCHES)
    for match in matches:
        for filename in filenames:
            for passage in files[filename].split("\n"):
                if match in passage:
                    print(passage)
        #print(match)


def load_files(directory):
    """
    Given a directory name, return a dictionary mapping the filename of each
    `.txt` file inside that directory to the file's contents as a string.
    """
    content = dict()
    for file in os.listdir(directory):
        file_path = os.path.join(directory, file)
        if file.endswith('.txt'):
            f = open(file_path, 'r', encoding = 'utf8')
            content[file] = f.read()
    return content


def tokenize(document):
    """
    Given a document (represented as a string), return a list of all of the
    words in that document, in order.

    Process document by coverting all words to lowercase, and removing any
    punctuation or English stopwords.
    """
    document = document.lower()
    words = nltk.word_tokenize(document)
    l = []
    for word in words:
        if word not in string.punctuation:
            
            if word not in nltk.corpus.stopwords.words("english"):
                l.append(word)
    return l
    

def compute_idfs(documents):
    """
    Given a dictionary of `documents` that maps names of documents to a list
    of words, return a dictionary that maps words to their IDF values.

    Any word that appears in at least one of the documents should be in the
    resulting dictionary.
    """
    idfs = dict()
    num = len(documents.keys())
    words = []
    for word_list in documents.values():
        for word in word_list:
            words.append(word)
    
    for word in words:
        num_doc = 0
        for text in documents.values():
            if word in text:
                num_doc += 1
        idf = math.log(num/num_doc)
        idfs[word] = idf

    return idfs

def Func(a):
    return a[1]

def top_files(query, files, idfs, n):
    """
    Given a `query` (a set of words), `files` (a dictionary mapping names of
    files to a list of their words), and `idfs` (a dictionary mapping words
    to their IDF values), return a list of the filenames of the the `n` top
    files that match the query, ranked according to tf-idf.
    """
    tf_idf = []
    for file, words in files.items():
        score = 0
        for word in query:
            try:
                score += word.count(word) * idfs[word]
            except:
                continue
        tf_idf.append((file,score))
    
    tf_idf.sort(key = Func, reverse = True)
    tf_idf = tf_idf[:n]
    temp = []
    for i in tf_idf:
        temp.append(i[0])
    return temp
    


def top_sentences(query, sentences, idfs, n):
    """
    Given a `query` (a set of words), `sentences` (a dictionary mapping
    sentences to a list of their words), and `idfs` (a dictionary mapping words
    to their IDF values), return a list of the `n` top sentences that match
    the query, ranked according to idf. If there are ties, preference should
    be given to sentences that have a higher query term density.
    """
    
    scores = []

    for sentence in sentences:
        sentence_val = [sentence, 0, 0]
        for word in query:
            if word in sentences[sentence]:
                sentence_val[1] += idfs[word] 
                sentence_val[2] += sentences[sentence].count(word)/len(sentences[sentence])
        scores.append(sentence_val)
    
    return [sentence for sentence, mwm, qtd in sorted(scores, key=lambda item: (item[1], item[2]), reverse=True)][:n]

def get_information(question):
    # Calculate IDF values across files
    files = load_files('corpus')
    file_words = {
        filename: tokenize(files[filename])
        for filename in files
    }
    file_idfs = compute_idfs(file_words)

    # Prompt user for query
    query = set(tokenize(question))

    # Determine top file matches according to TF-IDF
    filenames = top_files(query, file_words, file_idfs, n=FILE_MATCHES)

    # Extract sentences from top files
    sentences = dict()
    for filename in filenames:
        for passage in files[filename].split("\n"):
            for sentence in nltk.sent_tokenize(passage):
                tokens = tokenize(sentence)
                if tokens:
                    sentences[sentence] = tokens

    # Compute IDF values across sentences
    idfs = compute_idfs(sentences)

    # Determine top sentence matches
    matches = top_sentences(query, sentences, idfs, n=SENTENCE_MATCHES)
    for match in matches:
        for filename in filenames:
            for passage in files[filename].split("\n"):
                if match in passage:
                    return passage
        #print(match)

# if __name__ == "__main__":
#     main()
