#!/usr/bin/env python

import http.server
import sys


class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        http.server.SimpleHTTPRequestHandler.end_headers(self)


if __name__ == '__main__':
    try:
        http.server.test(HandlerClass=MyHTTPRequestHandler)
    except KeyboardInterrupt:
        sys.exit()
