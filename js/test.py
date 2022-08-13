from unittest import result


result_list = []

file = open('js\setInfoTable.js', 'r', encoding='utf-8')
for line in file.readlines():
    temp = []
    for item in line.strip('\n').split(','):
        try:
            temp.append(int(item))
        except ValueError:
            temp.append(item)
    
    result_list.append(temp)
file.close()

print(result_list)