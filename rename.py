import os

last = int(input('输入上次最后一张bg的index:'))
direct = str(input('输入要转换名称的图片的文件夹的路径:'))
def changeName(dir, index):
    imgList = []
    files = os.listdir(os.path.realpath(dir))
    print(files)
    start = index
    end = start + len(files)
    for i in range(start + 1, end + 1):
        imgList.append(i)
    for j in range(len(imgList)):
        _originName = os.path.realpath(dir) + '/' +  files[j]
        _laterName = os.path.realpath(dir) + '/' + 'bg' + str(imgList[j]) + '.jpg'
        print(_laterName)
        os.rename(_originName, _laterName)
changeName(direct, last)