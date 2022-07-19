# enroute-app

Multi env deployment example with Netlify.

Three orgs (banana, peach, apple) are deployed to from main branch:

After merge to main, release tag is created, release tags are deployed to staging automatically:

https://staging.apple.shukaiu.com/

https://staging.banana.shukaiu.com/

https://staging.peach.shukaiu.com/

To deploy to prod, pick a release tag manually and execute prod release.

https://apple.shukaiu.com/

https://banana.shukaiu.com/

https://peach.shukaiu.com/
