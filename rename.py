import os

direct = "Z:\\github\\indexNew\\index\\imgsNew"
last = int(input("输入上次最后一张bg的index:"))

def cgF(dir,index):
    arrList=[]
    files = os.listdir(dir)
    start = index
    end = start + len(files)
    for i in range(start+1,end+1):
        arrList.append(i)
    for i in range(len(arrList)):
        # print(dir+"\\"+str(files[i]))
        #print("bg" + str(arrList[i]) +".jpg")
        os.rename(dir+"\\"+str(files[i]),dir+"\\"+"bg"+str(arrList[i]) +".jpg")
cgF(direct,last)