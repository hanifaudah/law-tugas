import logging
from logstash_async.handler import AsynchronousLogstashHandler
from logstash_async.handler import LogstashFormatter

# Create the logger and set it's logging level
logger = logging.getLogger("logstash")
logger.setLevel(logging.DEBUG)      

# Create the handler
handler = AsynchronousLogstashHandler(
    host='9b78fd5a-ca9b-4ad4-a447-793d4f5fe527-ls.logit.io', 
    port=24699, 
    ssl_enable=False, 
    ssl_verify=False,
    database_path='')
# Here you can specify additional formatting on your log record/message
formatter = LogstashFormatter()
handler.setFormatter(formatter)

# Assign handler to the logger
logger.addHandler(handler)