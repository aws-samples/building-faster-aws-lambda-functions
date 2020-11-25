# Building faster AWS Lambda functions

This repo shows three versions of the same function with minor changes in configuration to reduce the duration time. For more details, the companion blog post to this repo is available at: TBD.

Important: this application uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the [AWS Pricing page](https://aws.amazon.com/pricing/) for details. You are responsible for any AWS costs incurred. No warranty is implied in this example.

```bash
.
├── README.MD                   <-- This instructions file
├── v1                          <-- Source code for v1 function
├── v2                          <-- Source code for v2 function
├── v3                          <-- Source code for v3 function
```

## Requirements

* AWS CLI already configured with Administrator permission
* [AWS SAM CLI installed](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) - **minimum version 0.48**.
* [NodeJS 12.x installed](https://nodejs.org/en/download/)

## Installation Instructions

1. [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and login.

2. Clone the repo onto your local development machine:
```
git clone https://github.com/aws-samples/TBD
```

3. To deploy a version, navigate to the version directory and run:
```
sam build
sam deploy --guided 
```
During the prompts, enter the stack name, your preferred Region, and then accept the defaults. 

If you have any questions, please contact the author or raise an issue in the GitHub repo.

==============================================

Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.

SPDX-License-Identifier: MIT-0
