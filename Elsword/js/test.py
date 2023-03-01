# import sys
# import requests
# from bs4 import BeautifulSoup

# targetURL = 'https://de.elsword.gameforge.com/news/archive/'

# minNum = 1
# maxNum = 145

# keyWordList = ['Happy Hour', 'Upgrade', 'Alpha', 'Frost-Igel', 'Schatzsuche']

# resultList = []
# for i in range(minNum, maxNum + 1):
#     print('Now Process: {} / {} ( {:.2f}% )'.format(
#         i, maxNum, i / maxNum * 100
#     ))

#     try:
#         response = requests.get(targetURL + str(i))
#         soup = BeautifulSoup(response.text, 'html.parser')

#         h3List = soup.find_all('h3')
#         for item in h3List:
#             titleText = item.getText()
#             for key_word in keyWordList:
#                 if key_word in titleText:
#                     resultList.append([
#                         key_word, titleText, item.select_one('a').get('href')
#                     ])
#                     break

#     except:
#         print("Unexpected error:", sys.exc_info()[0])

# writeFile = open('Record.csv', 'w', encoding='utf-8')
# for item in resultList:
#     print(item)
#     writeFile.write('{},{},{}\n'.format(item[0], item[1], item[2]))
# writeFile.close()



# file = open('C:\\Users\\Username\\Desktop\\Code\\GameDataColle\\Elsword\\js\\test.txt', 'r', encoding='utf-8')

# for line in file.readlines():
#     rawData = line.strip('\n').split('--')
#     print('                    <tr>')
#     print('                        <th scope="row">{}</th>'.format(rawData[0]))
#     print('                        <td>{}</td>'.format(rawData[1]))
#     print('                        <td>{}</td>'.format(rawData[2]))
#     print('                        <td>{}</td>'.format(rawData[3]))
#     print('                        <td>{}</td>'.format(rawData[4]))
#     print('                        <td>{}</td>'.format(rawData[5]))
#     print('                    </tr>')


# for line in file.readlines():
#     rawData = line.strip('\n').split('--')

#     print('    [{}, {}, {}, {}, {}],'.format(
#         rawData[1].strip('%'),
#         rawData[2].strip('%'),
#         rawData[3].strip('%'),
#         rawData[4].strip('%'),
#         rawData[5].strip('%'),
#     ))

rate = [
    [100, 0, 0, 0, 0],
    [100, 0, 0, 0, 0],
    [90, 0, 10, 0, 0],
    [80, 0, 20, 0, 0],
    [70, 0, 30, 0, 0],
    [60, 0, 40, 0, 0],
    [20, 0, 80, 0, 0],
    [5, 0, 15, 30, 50],
    [2, 20, 10, 28, 40],
    [1, 25, 7, 27, 40],
    [0.7, 35.3, 7, 27, 30],
    [1, 25, 7, 27, 40],
    [1, 29, 3, 27, 40],
]

for item in rate:
    temp = 0
    ls = []
    for i in item:
        temp += i * 10
        ls.append(int(temp))
    print(ls)

print()

for item in rate:
    temp = 0
    ls = []

    add_rate = item[0] * 10

    for i in range(0, 5):
        if i == 0:
            temp += item[i] * 20

        elif i == 2:
            temp += item[i] * 10 - add_rate

        else:
            temp += item[i] * 10

        ls.append(int(temp))
    print(ls)

# file.close()
