# Tutum Event Client

Simple client for listening to [Tutum StreamAPI](http://blog.tutum.co/2015/04/07/presenting-tutum-stream-api/) websocket messages.

[![Docker Repository on Quay](https://quay.io/repository/trunk/tutum-event-client/status "Docker Repository on Quay")](https://quay.io/repository/trunk/tutum-event-client)

You must specify the following environment variables when running this container:

    TUTUM_APIKEY
    TUTUM_USER
    
All events will be published into `stdout` which you can aggregate using [gliderlabs/logspout](https://github.com/gliderlabs/logspout) and send to something like [papertrail](https://papertrailapp.com/) or [logstash](https://www.elastic.co/products/logstash) to do further investigation/filtering.
