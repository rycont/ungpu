#!/bin/bash
socat -s TCP-LISTEN:${PORT},reuseaddr,fork, EXEC:./${PROB_NAME}
