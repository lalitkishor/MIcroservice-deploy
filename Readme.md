

# Link of my GitHUb : https://github.com/lalitkishor/MIcroservice-deploy
I use a proper CI and Cd tool in this project
IN this project I set a proper pipline of continous deployment. 

###Travics Ci link to see https://travis-ci.org/lalitkishor/MIcroservice-deploy/jobs/587850440


My app is containerized and deployed on docker hub and all container run without error
all images are public. you can see from here
### Docker hub link https://hub.docker.com/u/lalitcoder05

app is running on  cluster (My cluser name is attractive-hideout-1568958484)

and my app is using rolling update .
for utilization and tracking of app I use aws cloud watch.

and finally my app is running at this endpoint
http://a3223fb69dc7311e98d6f16097f0958b-1043473736.us-east-1.elb.amazonaws.com:8100/

### All screenshot is provided in sceenshot folder

Brief Description of step

first I brake this app in different different service. like feed and user .
afer that created a container and deploy on docker hub
after that I ititgrate the trvic ci with github
install kubctl and connect my local system to aws.
created a cluster
deploy all service and deployment file with our config.
initgrate with travic-ci 
