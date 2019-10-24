#!/bin/sh
currTime=$(date +"%Y-%m-%d %T")
echo -e "\n********************************$currTime*************************"
echo "http://www.sk-yye.cn"  > urls.txt
echo "http://www.sk-yye.cn/list/products"  >> urls.txt
echo "http://www.sk-yye.cn/list/news"  >> urls.txt
echo "http://www.sk-yye.cn/list/company"  >> urls.txt
echo "http://www.sk-yye.cn/list/contact"  >> urls.txt
echo "http://www.sk-yye.cn/list/contact"  >> urls.txt
curl http://sk-yye.cn:8080/publiccms/member/detail.json > temp.json
array=`cat temp.json | jq -r '.'`
for data in ${array[@]}  
do  
    data=`echo $data | sed -e 's/"//g'`
    data=`echo $data | sed -e 's/,//g'`
	if [ "$data" != '[' ] && [ "$data" != ']' ]; then
		echo -e "http://www.sk-yye.cn/${data}"  >> urls.txt		
	fi
done 
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=www.sk-yye.cn&token=iZ3PEmXwNc1f8wau"		