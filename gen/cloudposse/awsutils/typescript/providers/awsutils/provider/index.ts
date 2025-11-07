// https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsutilsProviderConfig {
  /**
  * The access key for API operations. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#access_key AwsutilsProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#allowed_account_ids AwsutilsProvider#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * File containing custom root and intermediate certificates. Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#custom_ca_bundle AwsutilsProvider#custom_ca_bundle}
  */
  readonly customCaBundle?: string;
  /**
  * Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ec2_metadata_service_endpoint AwsutilsProvider#ec2_metadata_service_endpoint}
  */
  readonly ec2MetadataServiceEndpoint?: string;
  /**
  * Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ec2_metadata_service_endpoint_mode AwsutilsProvider#ec2_metadata_service_endpoint_mode}
  */
  readonly ec2MetadataServiceEndpointMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#forbidden_account_ids AwsutilsProvider#forbidden_account_ids}
  */
  readonly forbiddenAccountIds?: string[];
  /**
  * The address of an HTTP proxy to use when accessing the AWS API. Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#http_proxy AwsutilsProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#insecure AwsutilsProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times an AWS API request is
  * being executed. If the API request still fails, an error is
  * thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#max_retries AwsutilsProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The profile for API operations. If not set, the default profile
  * created with `aws configure` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#profile AwsutilsProvider#profile}
  */
  readonly profile?: string;
  /**
  * The region where AWS operations will take place. Examples
  * are us-east-1, us-west-2, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#region AwsutilsProvider#region}
  */
  readonly region?: string;
  /**
  * Set this to true to enable the request to use path-style addressing,
  * i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
  * use virtual hosted bucket addressing when possible
  * (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#s3_force_path_style AwsutilsProvider#s3_force_path_style}
  */
  readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * Set this to true to enable the request to use path-style addressing,
  * i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
  * use virtual hosted bucket addressing when possible
  * (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#s3_use_path_style AwsutilsProvider#s3_use_path_style}
  */
  readonly s3UsePathStyle?: boolean | cdktf.IResolvable;
  /**
  * The secret key for API operations. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#secret_key AwsutilsProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * List of paths to shared config files. If not set, defaults to [~/.aws/config].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#shared_config_files AwsutilsProvider#shared_config_files}
  */
  readonly sharedConfigFiles?: string[];
  /**
  * The path to the shared credentials file. If not set, defaults to ~/.aws/credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#shared_credentials_file AwsutilsProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#shared_credentials_files AwsutilsProvider#shared_credentials_files}
  */
  readonly sharedCredentialsFiles?: string[];
  /**
  * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#skip_credentials_validation AwsutilsProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#skip_get_ec2_platforms AwsutilsProvider#skip_get_ec2_platforms}
  */
  readonly skipGetEc2Platforms?: boolean | cdktf.IResolvable;
  /**
  * Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#skip_metadata_api_check AwsutilsProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: string;
  /**
  * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#skip_region_validation AwsutilsProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#skip_requesting_account_id AwsutilsProvider#skip_requesting_account_id}
  */
  readonly skipRequestingAccountId?: boolean | cdktf.IResolvable;
  /**
  * The region where AWS STS operations will take place. Examples
  * are us-east-1 and us-west-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sts_region AwsutilsProvider#sts_region}
  */
  readonly stsRegion?: string;
  /**
  * session token. A session token is only required if you are
  * using temporary security credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#token AwsutilsProvider#token}
  */
  readonly token?: string;
  /**
  * Resolve an endpoint with DualStack capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#use_dualstack_endpoint AwsutilsProvider#use_dualstack_endpoint}
  */
  readonly useDualstackEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Resolve an endpoint with FIPS capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#use_fips_endpoint AwsutilsProvider#use_fips_endpoint}
  */
  readonly useFipsEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#alias AwsutilsProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#assume_role AwsutilsProvider#assume_role}
  */
  readonly assumeRole?: AwsutilsProviderAssumeRole;
  /**
  * assume_role_with_web_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#assume_role_with_web_identity AwsutilsProvider#assume_role_with_web_identity}
  */
  readonly assumeRoleWithWebIdentity?: AwsutilsProviderAssumeRoleWithWebIdentity;
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#default_tags AwsutilsProvider#default_tags}
  */
  readonly defaultTags?: AwsutilsProviderDefaultTags;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#endpoints AwsutilsProvider#endpoints}
  */
  readonly endpoints?: AwsutilsProviderEndpoints[] | cdktf.IResolvable;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ignore_tags AwsutilsProvider#ignore_tags}
  */
  readonly ignoreTags?: AwsutilsProviderIgnoreTags;
}
export interface AwsutilsProviderAssumeRole {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#duration AwsutilsProvider#duration}
  */
  readonly duration?: string;
  /**
  * The duration, in seconds, of the role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#duration_seconds AwsutilsProvider#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * A unique identifier that might be required when you assume a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#external_id AwsutilsProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#policy AwsutilsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#policy_arns AwsutilsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#role_arn AwsutilsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#session_name AwsutilsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#tags AwsutilsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#transitive_tag_keys AwsutilsProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function awsutilsProviderAssumeRoleToTerraform(struct?: AwsutilsProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


export function awsutilsProviderAssumeRoleToHclTerraform(struct?: AwsutilsProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transitive_tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transitiveTagKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsutilsProviderAssumeRoleWithWebIdentity {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#duration AwsutilsProvider#duration}
  */
  readonly duration?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#policy AwsutilsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#policy_arns AwsutilsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#role_arn AwsutilsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#session_name AwsutilsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#web_identity_token AwsutilsProvider#web_identity_token}
  */
  readonly webIdentityToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#web_identity_token_file AwsutilsProvider#web_identity_token_file}
  */
  readonly webIdentityTokenFile?: string;
}

export function awsutilsProviderAssumeRoleWithWebIdentityToTerraform(struct?: AwsutilsProviderAssumeRoleWithWebIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    web_identity_token: cdktf.stringToTerraform(struct!.webIdentityToken),
    web_identity_token_file: cdktf.stringToTerraform(struct!.webIdentityTokenFile),
  }
}


export function awsutilsProviderAssumeRoleWithWebIdentityToHclTerraform(struct?: AwsutilsProviderAssumeRoleWithWebIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token: {
      value: cdktf.stringToHclTerraform(struct!.webIdentityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token_file: {
      value: cdktf.stringToHclTerraform(struct!.webIdentityTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsutilsProviderDefaultTags {
  /**
  * Resource tags to default across all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#tags AwsutilsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function awsutilsProviderDefaultTagsToTerraform(struct?: AwsutilsProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function awsutilsProviderDefaultTagsToHclTerraform(struct?: AwsutilsProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsutilsProviderEndpoints {
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#accessanalyzer AwsutilsProvider#accessanalyzer}
  */
  readonly accessanalyzer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#account AwsutilsProvider#account}
  */
  readonly account?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#acm AwsutilsProvider#acm}
  */
  readonly acm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#acmpca AwsutilsProvider#acmpca}
  */
  readonly acmpca?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#alexaforbusiness AwsutilsProvider#alexaforbusiness}
  */
  readonly alexaforbusiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#amg AwsutilsProvider#amg}
  */
  readonly amg?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#amp AwsutilsProvider#amp}
  */
  readonly amp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#amplify AwsutilsProvider#amplify}
  */
  readonly amplify?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#amplifybackend AwsutilsProvider#amplifybackend}
  */
  readonly amplifybackend?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#amplifyuibuilder AwsutilsProvider#amplifyuibuilder}
  */
  readonly amplifyuibuilder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#apigateway AwsutilsProvider#apigateway}
  */
  readonly apigateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#apigatewaymanagementapi AwsutilsProvider#apigatewaymanagementapi}
  */
  readonly apigatewaymanagementapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#apigatewayv2 AwsutilsProvider#apigatewayv2}
  */
  readonly apigatewayv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appautoscaling AwsutilsProvider#appautoscaling}
  */
  readonly appautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appconfig AwsutilsProvider#appconfig}
  */
  readonly appconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appconfigdata AwsutilsProvider#appconfigdata}
  */
  readonly appconfigdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appflow AwsutilsProvider#appflow}
  */
  readonly appflow?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appintegrations AwsutilsProvider#appintegrations}
  */
  readonly appintegrations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appintegrationsservice AwsutilsProvider#appintegrationsservice}
  */
  readonly appintegrationsservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#applicationautoscaling AwsutilsProvider#applicationautoscaling}
  */
  readonly applicationautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#applicationcostprofiler AwsutilsProvider#applicationcostprofiler}
  */
  readonly applicationcostprofiler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#applicationdiscovery AwsutilsProvider#applicationdiscovery}
  */
  readonly applicationdiscovery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#applicationdiscoveryservice AwsutilsProvider#applicationdiscoveryservice}
  */
  readonly applicationdiscoveryservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#applicationinsights AwsutilsProvider#applicationinsights}
  */
  readonly applicationinsights?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appmesh AwsutilsProvider#appmesh}
  */
  readonly appmesh?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appregistry AwsutilsProvider#appregistry}
  */
  readonly appregistry?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#apprunner AwsutilsProvider#apprunner}
  */
  readonly apprunner?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appstream AwsutilsProvider#appstream}
  */
  readonly appstream?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#appsync AwsutilsProvider#appsync}
  */
  readonly appsync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#athena AwsutilsProvider#athena}
  */
  readonly athena?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#auditmanager AwsutilsProvider#auditmanager}
  */
  readonly auditmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#augmentedairuntime AwsutilsProvider#augmentedairuntime}
  */
  readonly augmentedairuntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#autoscaling AwsutilsProvider#autoscaling}
  */
  readonly autoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#autoscalingplans AwsutilsProvider#autoscalingplans}
  */
  readonly autoscalingplans?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#backup AwsutilsProvider#backup}
  */
  readonly backup?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#backupgateway AwsutilsProvider#backupgateway}
  */
  readonly backupgateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#batch AwsutilsProvider#batch}
  */
  readonly batch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#beanstalk AwsutilsProvider#beanstalk}
  */
  readonly beanstalk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#billingconductor AwsutilsProvider#billingconductor}
  */
  readonly billingconductor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#braket AwsutilsProvider#braket}
  */
  readonly braket?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#budgets AwsutilsProvider#budgets}
  */
  readonly budgets?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ce AwsutilsProvider#ce}
  */
  readonly ce?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#chime AwsutilsProvider#chime}
  */
  readonly chime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#chimesdkidentity AwsutilsProvider#chimesdkidentity}
  */
  readonly chimesdkidentity?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#chimesdkmeetings AwsutilsProvider#chimesdkmeetings}
  */
  readonly chimesdkmeetings?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#chimesdkmessaging AwsutilsProvider#chimesdkmessaging}
  */
  readonly chimesdkmessaging?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloud9 AwsutilsProvider#cloud9}
  */
  readonly cloud9?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudcontrol AwsutilsProvider#cloudcontrol}
  */
  readonly cloudcontrol?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudcontrolapi AwsutilsProvider#cloudcontrolapi}
  */
  readonly cloudcontrolapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#clouddirectory AwsutilsProvider#clouddirectory}
  */
  readonly clouddirectory?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudformation AwsutilsProvider#cloudformation}
  */
  readonly cloudformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudfront AwsutilsProvider#cloudfront}
  */
  readonly cloudfront?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudhsm AwsutilsProvider#cloudhsm}
  */
  readonly cloudhsm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudhsmv2 AwsutilsProvider#cloudhsmv2}
  */
  readonly cloudhsmv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudsearch AwsutilsProvider#cloudsearch}
  */
  readonly cloudsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudsearchdomain AwsutilsProvider#cloudsearchdomain}
  */
  readonly cloudsearchdomain?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudtrail AwsutilsProvider#cloudtrail}
  */
  readonly cloudtrail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudwatch AwsutilsProvider#cloudwatch}
  */
  readonly cloudwatch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudwatchevents AwsutilsProvider#cloudwatchevents}
  */
  readonly cloudwatchevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudwatchevidently AwsutilsProvider#cloudwatchevidently}
  */
  readonly cloudwatchevidently?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudwatchlog AwsutilsProvider#cloudwatchlog}
  */
  readonly cloudwatchlog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudwatchlogs AwsutilsProvider#cloudwatchlogs}
  */
  readonly cloudwatchlogs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cloudwatchrum AwsutilsProvider#cloudwatchrum}
  */
  readonly cloudwatchrum?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codeartifact AwsutilsProvider#codeartifact}
  */
  readonly codeartifact?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codebuild AwsutilsProvider#codebuild}
  */
  readonly codebuild?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codecommit AwsutilsProvider#codecommit}
  */
  readonly codecommit?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codedeploy AwsutilsProvider#codedeploy}
  */
  readonly codedeploy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codeguruprofiler AwsutilsProvider#codeguruprofiler}
  */
  readonly codeguruprofiler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codegurureviewer AwsutilsProvider#codegurureviewer}
  */
  readonly codegurureviewer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codepipeline AwsutilsProvider#codepipeline}
  */
  readonly codepipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codestar AwsutilsProvider#codestar}
  */
  readonly codestar?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codestarconnections AwsutilsProvider#codestarconnections}
  */
  readonly codestarconnections?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#codestarnotifications AwsutilsProvider#codestarnotifications}
  */
  readonly codestarnotifications?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cognitoidentity AwsutilsProvider#cognitoidentity}
  */
  readonly cognitoidentity?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cognitoidentityprovider AwsutilsProvider#cognitoidentityprovider}
  */
  readonly cognitoidentityprovider?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cognitoidp AwsutilsProvider#cognitoidp}
  */
  readonly cognitoidp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cognitosync AwsutilsProvider#cognitosync}
  */
  readonly cognitosync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#comprehend AwsutilsProvider#comprehend}
  */
  readonly comprehend?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#comprehendmedical AwsutilsProvider#comprehendmedical}
  */
  readonly comprehendmedical?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#computeoptimizer AwsutilsProvider#computeoptimizer}
  */
  readonly computeoptimizer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#config AwsutilsProvider#config}
  */
  readonly config?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#configservice AwsutilsProvider#configservice}
  */
  readonly configservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#connect AwsutilsProvider#connect}
  */
  readonly connect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#connectcontactlens AwsutilsProvider#connectcontactlens}
  */
  readonly connectcontactlens?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#connectparticipant AwsutilsProvider#connectparticipant}
  */
  readonly connectparticipant?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#connectwisdomservice AwsutilsProvider#connectwisdomservice}
  */
  readonly connectwisdomservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#costandusagereportservice AwsutilsProvider#costandusagereportservice}
  */
  readonly costandusagereportservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#costexplorer AwsutilsProvider#costexplorer}
  */
  readonly costexplorer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#cur AwsutilsProvider#cur}
  */
  readonly cur?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#customerprofiles AwsutilsProvider#customerprofiles}
  */
  readonly customerprofiles?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#databasemigration AwsutilsProvider#databasemigration}
  */
  readonly databasemigration?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#databasemigrationservice AwsutilsProvider#databasemigrationservice}
  */
  readonly databasemigrationservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#databrew AwsutilsProvider#databrew}
  */
  readonly databrew?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#dataexchange AwsutilsProvider#dataexchange}
  */
  readonly dataexchange?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#datapipeline AwsutilsProvider#datapipeline}
  */
  readonly datapipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#datasync AwsutilsProvider#datasync}
  */
  readonly datasync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#dax AwsutilsProvider#dax}
  */
  readonly dax?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#deploy AwsutilsProvider#deploy}
  */
  readonly deploy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#detective AwsutilsProvider#detective}
  */
  readonly detective?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#devicefarm AwsutilsProvider#devicefarm}
  */
  readonly devicefarm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#devopsguru AwsutilsProvider#devopsguru}
  */
  readonly devopsguru?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#directconnect AwsutilsProvider#directconnect}
  */
  readonly directconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#directoryservice AwsutilsProvider#directoryservice}
  */
  readonly directoryservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#discovery AwsutilsProvider#discovery}
  */
  readonly discovery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#dlm AwsutilsProvider#dlm}
  */
  readonly dlm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#dms AwsutilsProvider#dms}
  */
  readonly dms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#docdb AwsutilsProvider#docdb}
  */
  readonly docdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#drs AwsutilsProvider#drs}
  */
  readonly drs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ds AwsutilsProvider#ds}
  */
  readonly ds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#dynamodb AwsutilsProvider#dynamodb}
  */
  readonly dynamodb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#dynamodbstreams AwsutilsProvider#dynamodbstreams}
  */
  readonly dynamodbstreams?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ebs AwsutilsProvider#ebs}
  */
  readonly ebs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ec2 AwsutilsProvider#ec2}
  */
  readonly ec2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ec2instanceconnect AwsutilsProvider#ec2instanceconnect}
  */
  readonly ec2Instanceconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ecr AwsutilsProvider#ecr}
  */
  readonly ecr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ecrpublic AwsutilsProvider#ecrpublic}
  */
  readonly ecrpublic?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ecs AwsutilsProvider#ecs}
  */
  readonly ecs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#efs AwsutilsProvider#efs}
  */
  readonly efs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#eks AwsutilsProvider#eks}
  */
  readonly eks?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elasticache AwsutilsProvider#elasticache}
  */
  readonly elasticache?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elasticbeanstalk AwsutilsProvider#elasticbeanstalk}
  */
  readonly elasticbeanstalk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elasticinference AwsutilsProvider#elasticinference}
  */
  readonly elasticinference?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elasticloadbalancing AwsutilsProvider#elasticloadbalancing}
  */
  readonly elasticloadbalancing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elasticloadbalancingv2 AwsutilsProvider#elasticloadbalancingv2}
  */
  readonly elasticloadbalancingv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elasticsearch AwsutilsProvider#elasticsearch}
  */
  readonly elasticsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elasticsearchservice AwsutilsProvider#elasticsearchservice}
  */
  readonly elasticsearchservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elastictranscoder AwsutilsProvider#elastictranscoder}
  */
  readonly elastictranscoder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elb AwsutilsProvider#elb}
  */
  readonly elb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#elbv2 AwsutilsProvider#elbv2}
  */
  readonly elbv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#emr AwsutilsProvider#emr}
  */
  readonly emr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#emrcontainers AwsutilsProvider#emrcontainers}
  */
  readonly emrcontainers?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#emrserverless AwsutilsProvider#emrserverless}
  */
  readonly emrserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#es AwsutilsProvider#es}
  */
  readonly es?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#eventbridge AwsutilsProvider#eventbridge}
  */
  readonly eventbridge?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#events AwsutilsProvider#events}
  */
  readonly events?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#evidently AwsutilsProvider#evidently}
  */
  readonly evidently?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#finspace AwsutilsProvider#finspace}
  */
  readonly finspace?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#finspacedata AwsutilsProvider#finspacedata}
  */
  readonly finspacedata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#firehose AwsutilsProvider#firehose}
  */
  readonly firehose?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#fis AwsutilsProvider#fis}
  */
  readonly fis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#fms AwsutilsProvider#fms}
  */
  readonly fms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#forecast AwsutilsProvider#forecast}
  */
  readonly forecast?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#forecastquery AwsutilsProvider#forecastquery}
  */
  readonly forecastquery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#forecastqueryservice AwsutilsProvider#forecastqueryservice}
  */
  readonly forecastqueryservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#forecastservice AwsutilsProvider#forecastservice}
  */
  readonly forecastservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#frauddetector AwsutilsProvider#frauddetector}
  */
  readonly frauddetector?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#fsx AwsutilsProvider#fsx}
  */
  readonly fsx?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#gamelift AwsutilsProvider#gamelift}
  */
  readonly gamelift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#glacier AwsutilsProvider#glacier}
  */
  readonly glacier?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#globalaccelerator AwsutilsProvider#globalaccelerator}
  */
  readonly globalaccelerator?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#glue AwsutilsProvider#glue}
  */
  readonly glue?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#gluedatabrew AwsutilsProvider#gluedatabrew}
  */
  readonly gluedatabrew?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#grafana AwsutilsProvider#grafana}
  */
  readonly grafana?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#greengrass AwsutilsProvider#greengrass}
  */
  readonly greengrass?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#greengrassv2 AwsutilsProvider#greengrassv2}
  */
  readonly greengrassv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#groundstation AwsutilsProvider#groundstation}
  */
  readonly groundstation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#guardduty AwsutilsProvider#guardduty}
  */
  readonly guardduty?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#health AwsutilsProvider#health}
  */
  readonly health?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#healthlake AwsutilsProvider#healthlake}
  */
  readonly healthlake?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#honeycode AwsutilsProvider#honeycode}
  */
  readonly honeycode?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iam AwsutilsProvider#iam}
  */
  readonly iam?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#identitystore AwsutilsProvider#identitystore}
  */
  readonly identitystore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#imagebuilder AwsutilsProvider#imagebuilder}
  */
  readonly imagebuilder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#inspector AwsutilsProvider#inspector}
  */
  readonly inspector?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#inspector2 AwsutilsProvider#inspector2}
  */
  readonly inspector2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iot AwsutilsProvider#iot}
  */
  readonly iot?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iot1clickdevices AwsutilsProvider#iot1clickdevices}
  */
  readonly iot1Clickdevices?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iot1clickdevicesservice AwsutilsProvider#iot1clickdevicesservice}
  */
  readonly iot1Clickdevicesservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iot1clickprojects AwsutilsProvider#iot1clickprojects}
  */
  readonly iot1Clickprojects?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotanalytics AwsutilsProvider#iotanalytics}
  */
  readonly iotanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotdata AwsutilsProvider#iotdata}
  */
  readonly iotdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotdataplane AwsutilsProvider#iotdataplane}
  */
  readonly iotdataplane?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotdeviceadvisor AwsutilsProvider#iotdeviceadvisor}
  */
  readonly iotdeviceadvisor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotevents AwsutilsProvider#iotevents}
  */
  readonly iotevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ioteventsdata AwsutilsProvider#ioteventsdata}
  */
  readonly ioteventsdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotfleethub AwsutilsProvider#iotfleethub}
  */
  readonly iotfleethub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotjobsdata AwsutilsProvider#iotjobsdata}
  */
  readonly iotjobsdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotjobsdataplane AwsutilsProvider#iotjobsdataplane}
  */
  readonly iotjobsdataplane?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotsecuretunneling AwsutilsProvider#iotsecuretunneling}
  */
  readonly iotsecuretunneling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotsitewise AwsutilsProvider#iotsitewise}
  */
  readonly iotsitewise?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotthingsgraph AwsutilsProvider#iotthingsgraph}
  */
  readonly iotthingsgraph?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iottwinmaker AwsutilsProvider#iottwinmaker}
  */
  readonly iottwinmaker?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#iotwireless AwsutilsProvider#iotwireless}
  */
  readonly iotwireless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ivs AwsutilsProvider#ivs}
  */
  readonly ivs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kafka AwsutilsProvider#kafka}
  */
  readonly kafka?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kafkaconnect AwsutilsProvider#kafkaconnect}
  */
  readonly kafkaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kendra AwsutilsProvider#kendra}
  */
  readonly kendra?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#keyspaces AwsutilsProvider#keyspaces}
  */
  readonly keyspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesis AwsutilsProvider#kinesis}
  */
  readonly kinesis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesisanalytics AwsutilsProvider#kinesisanalytics}
  */
  readonly kinesisanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesisanalyticsv2 AwsutilsProvider#kinesisanalyticsv2}
  */
  readonly kinesisanalyticsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesisvideo AwsutilsProvider#kinesisvideo}
  */
  readonly kinesisvideo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesisvideoarchivedmedia AwsutilsProvider#kinesisvideoarchivedmedia}
  */
  readonly kinesisvideoarchivedmedia?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesisvideomedia AwsutilsProvider#kinesisvideomedia}
  */
  readonly kinesisvideomedia?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesisvideosignaling AwsutilsProvider#kinesisvideosignaling}
  */
  readonly kinesisvideosignaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kinesisvideosignalingchannels AwsutilsProvider#kinesisvideosignalingchannels}
  */
  readonly kinesisvideosignalingchannels?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#kms AwsutilsProvider#kms}
  */
  readonly kms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lakeformation AwsutilsProvider#lakeformation}
  */
  readonly lakeformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lambda AwsutilsProvider#lambda}
  */
  readonly lambda?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lex AwsutilsProvider#lex}
  */
  readonly lex?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexmodelbuilding AwsutilsProvider#lexmodelbuilding}
  */
  readonly lexmodelbuilding?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexmodelbuildingservice AwsutilsProvider#lexmodelbuildingservice}
  */
  readonly lexmodelbuildingservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexmodels AwsutilsProvider#lexmodels}
  */
  readonly lexmodels?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexmodelsv2 AwsutilsProvider#lexmodelsv2}
  */
  readonly lexmodelsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexruntime AwsutilsProvider#lexruntime}
  */
  readonly lexruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexruntimeservice AwsutilsProvider#lexruntimeservice}
  */
  readonly lexruntimeservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexruntimev2 AwsutilsProvider#lexruntimev2}
  */
  readonly lexruntimev2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexv2models AwsutilsProvider#lexv2models}
  */
  readonly lexv2Models?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lexv2runtime AwsutilsProvider#lexv2runtime}
  */
  readonly lexv2Runtime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#licensemanager AwsutilsProvider#licensemanager}
  */
  readonly licensemanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lightsail AwsutilsProvider#lightsail}
  */
  readonly lightsail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#location AwsutilsProvider#location}
  */
  readonly location?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#locationservice AwsutilsProvider#locationservice}
  */
  readonly locationservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#logs AwsutilsProvider#logs}
  */
  readonly logs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lookoutequipment AwsutilsProvider#lookoutequipment}
  */
  readonly lookoutequipment?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lookoutforvision AwsutilsProvider#lookoutforvision}
  */
  readonly lookoutforvision?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lookoutmetrics AwsutilsProvider#lookoutmetrics}
  */
  readonly lookoutmetrics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#lookoutvision AwsutilsProvider#lookoutvision}
  */
  readonly lookoutvision?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#machinelearning AwsutilsProvider#machinelearning}
  */
  readonly machinelearning?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#macie AwsutilsProvider#macie}
  */
  readonly macie?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#macie2 AwsutilsProvider#macie2}
  */
  readonly macie2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#managedblockchain AwsutilsProvider#managedblockchain}
  */
  readonly managedblockchain?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#managedgrafana AwsutilsProvider#managedgrafana}
  */
  readonly managedgrafana?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#marketplacecatalog AwsutilsProvider#marketplacecatalog}
  */
  readonly marketplacecatalog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#marketplacecommerceanalytics AwsutilsProvider#marketplacecommerceanalytics}
  */
  readonly marketplacecommerceanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#marketplaceentitlement AwsutilsProvider#marketplaceentitlement}
  */
  readonly marketplaceentitlement?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#marketplaceentitlementservice AwsutilsProvider#marketplaceentitlementservice}
  */
  readonly marketplaceentitlementservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#marketplacemetering AwsutilsProvider#marketplacemetering}
  */
  readonly marketplacemetering?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mediaconnect AwsutilsProvider#mediaconnect}
  */
  readonly mediaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mediaconvert AwsutilsProvider#mediaconvert}
  */
  readonly mediaconvert?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#medialive AwsutilsProvider#medialive}
  */
  readonly medialive?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mediapackage AwsutilsProvider#mediapackage}
  */
  readonly mediapackage?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mediapackagevod AwsutilsProvider#mediapackagevod}
  */
  readonly mediapackagevod?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mediastore AwsutilsProvider#mediastore}
  */
  readonly mediastore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mediastoredata AwsutilsProvider#mediastoredata}
  */
  readonly mediastoredata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mediatailor AwsutilsProvider#mediatailor}
  */
  readonly mediatailor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#memorydb AwsutilsProvider#memorydb}
  */
  readonly memorydb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#meteringmarketplace AwsutilsProvider#meteringmarketplace}
  */
  readonly meteringmarketplace?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mgh AwsutilsProvider#mgh}
  */
  readonly mgh?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mgn AwsutilsProvider#mgn}
  */
  readonly mgn?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#migrationhub AwsutilsProvider#migrationhub}
  */
  readonly migrationhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#migrationhubconfig AwsutilsProvider#migrationhubconfig}
  */
  readonly migrationhubconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#migrationhubrefactorspaces AwsutilsProvider#migrationhubrefactorspaces}
  */
  readonly migrationhubrefactorspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#migrationhubstrategy AwsutilsProvider#migrationhubstrategy}
  */
  readonly migrationhubstrategy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#migrationhubstrategyrecommendations AwsutilsProvider#migrationhubstrategyrecommendations}
  */
  readonly migrationhubstrategyrecommendations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mobile AwsutilsProvider#mobile}
  */
  readonly mobile?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mq AwsutilsProvider#mq}
  */
  readonly mq?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#msk AwsutilsProvider#msk}
  */
  readonly msk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mturk AwsutilsProvider#mturk}
  */
  readonly mturk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#mwaa AwsutilsProvider#mwaa}
  */
  readonly mwaa?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#neptune AwsutilsProvider#neptune}
  */
  readonly neptune?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#networkfirewall AwsutilsProvider#networkfirewall}
  */
  readonly networkfirewall?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#networkmanager AwsutilsProvider#networkmanager}
  */
  readonly networkmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#nimble AwsutilsProvider#nimble}
  */
  readonly nimble?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#nimblestudio AwsutilsProvider#nimblestudio}
  */
  readonly nimblestudio?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#opensearch AwsutilsProvider#opensearch}
  */
  readonly opensearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#opensearchservice AwsutilsProvider#opensearchservice}
  */
  readonly opensearchservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#opsworks AwsutilsProvider#opsworks}
  */
  readonly opsworks?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#opsworkscm AwsutilsProvider#opsworkscm}
  */
  readonly opsworkscm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#organizations AwsutilsProvider#organizations}
  */
  readonly organizations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#outposts AwsutilsProvider#outposts}
  */
  readonly outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#panorama AwsutilsProvider#panorama}
  */
  readonly panorama?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#personalize AwsutilsProvider#personalize}
  */
  readonly personalize?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#personalizeevents AwsutilsProvider#personalizeevents}
  */
  readonly personalizeevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#personalizeruntime AwsutilsProvider#personalizeruntime}
  */
  readonly personalizeruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#pi AwsutilsProvider#pi}
  */
  readonly pi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#pinpoint AwsutilsProvider#pinpoint}
  */
  readonly pinpoint?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#pinpointemail AwsutilsProvider#pinpointemail}
  */
  readonly pinpointemail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#pinpointsmsvoice AwsutilsProvider#pinpointsmsvoice}
  */
  readonly pinpointsmsvoice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#polly AwsutilsProvider#polly}
  */
  readonly polly?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#pricing AwsutilsProvider#pricing}
  */
  readonly pricing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#prometheus AwsutilsProvider#prometheus}
  */
  readonly prometheus?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#prometheusservice AwsutilsProvider#prometheusservice}
  */
  readonly prometheusservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#proton AwsutilsProvider#proton}
  */
  readonly proton?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#qldb AwsutilsProvider#qldb}
  */
  readonly qldb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#qldbsession AwsutilsProvider#qldbsession}
  */
  readonly qldbsession?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#quicksight AwsutilsProvider#quicksight}
  */
  readonly quicksight?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ram AwsutilsProvider#ram}
  */
  readonly ram?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#rbin AwsutilsProvider#rbin}
  */
  readonly rbin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#rds AwsutilsProvider#rds}
  */
  readonly rds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#rdsdata AwsutilsProvider#rdsdata}
  */
  readonly rdsdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#rdsdataservice AwsutilsProvider#rdsdataservice}
  */
  readonly rdsdataservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#recyclebin AwsutilsProvider#recyclebin}
  */
  readonly recyclebin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#redshift AwsutilsProvider#redshift}
  */
  readonly redshift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#redshiftdata AwsutilsProvider#redshiftdata}
  */
  readonly redshiftdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#redshiftdataapiservice AwsutilsProvider#redshiftdataapiservice}
  */
  readonly redshiftdataapiservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#redshiftserverless AwsutilsProvider#redshiftserverless}
  */
  readonly redshiftserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#rekognition AwsutilsProvider#rekognition}
  */
  readonly rekognition?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#resiliencehub AwsutilsProvider#resiliencehub}
  */
  readonly resiliencehub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#resourcegroups AwsutilsProvider#resourcegroups}
  */
  readonly resourcegroups?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#resourcegroupstagging AwsutilsProvider#resourcegroupstagging}
  */
  readonly resourcegroupstagging?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#resourcegroupstaggingapi AwsutilsProvider#resourcegroupstaggingapi}
  */
  readonly resourcegroupstaggingapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#robomaker AwsutilsProvider#robomaker}
  */
  readonly robomaker?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#rolesanywhere AwsutilsProvider#rolesanywhere}
  */
  readonly rolesanywhere?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#route53 AwsutilsProvider#route53}
  */
  readonly route53?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#route53domains AwsutilsProvider#route53domains}
  */
  readonly route53Domains?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#route53recoverycluster AwsutilsProvider#route53recoverycluster}
  */
  readonly route53Recoverycluster?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#route53recoverycontrolconfig AwsutilsProvider#route53recoverycontrolconfig}
  */
  readonly route53Recoverycontrolconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#route53recoveryreadiness AwsutilsProvider#route53recoveryreadiness}
  */
  readonly route53Recoveryreadiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#route53resolver AwsutilsProvider#route53resolver}
  */
  readonly route53Resolver?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#rum AwsutilsProvider#rum}
  */
  readonly rum?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#s3 AwsutilsProvider#s3}
  */
  readonly s3?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#s3api AwsutilsProvider#s3api}
  */
  readonly s3Api?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#s3control AwsutilsProvider#s3control}
  */
  readonly s3Control?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#s3outposts AwsutilsProvider#s3outposts}
  */
  readonly s3Outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sagemaker AwsutilsProvider#sagemaker}
  */
  readonly sagemaker?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sagemakera2iruntime AwsutilsProvider#sagemakera2iruntime}
  */
  readonly sagemakera2Iruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sagemakeredge AwsutilsProvider#sagemakeredge}
  */
  readonly sagemakeredge?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sagemakeredgemanager AwsutilsProvider#sagemakeredgemanager}
  */
  readonly sagemakeredgemanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sagemakerfeaturestoreruntime AwsutilsProvider#sagemakerfeaturestoreruntime}
  */
  readonly sagemakerfeaturestoreruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sagemakerruntime AwsutilsProvider#sagemakerruntime}
  */
  readonly sagemakerruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#savingsplans AwsutilsProvider#savingsplans}
  */
  readonly savingsplans?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#schemas AwsutilsProvider#schemas}
  */
  readonly schemas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sdb AwsutilsProvider#sdb}
  */
  readonly sdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#secretsmanager AwsutilsProvider#secretsmanager}
  */
  readonly secretsmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#securityhub AwsutilsProvider#securityhub}
  */
  readonly securityhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#serverlessapplicationrepository AwsutilsProvider#serverlessapplicationrepository}
  */
  readonly serverlessapplicationrepository?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#serverlessapprepo AwsutilsProvider#serverlessapprepo}
  */
  readonly serverlessapprepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#serverlessrepo AwsutilsProvider#serverlessrepo}
  */
  readonly serverlessrepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#servicecatalog AwsutilsProvider#servicecatalog}
  */
  readonly servicecatalog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#servicecatalogappregistry AwsutilsProvider#servicecatalogappregistry}
  */
  readonly servicecatalogappregistry?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#servicediscovery AwsutilsProvider#servicediscovery}
  */
  readonly servicediscovery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#servicequotas AwsutilsProvider#servicequotas}
  */
  readonly servicequotas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ses AwsutilsProvider#ses}
  */
  readonly ses?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sesv2 AwsutilsProvider#sesv2}
  */
  readonly sesv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sfn AwsutilsProvider#sfn}
  */
  readonly sfn?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#shield AwsutilsProvider#shield}
  */
  readonly shield?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#signer AwsutilsProvider#signer}
  */
  readonly signer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#simpledb AwsutilsProvider#simpledb}
  */
  readonly simpledb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sms AwsutilsProvider#sms}
  */
  readonly sms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#snowball AwsutilsProvider#snowball}
  */
  readonly snowball?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#snowdevicemanagement AwsutilsProvider#snowdevicemanagement}
  */
  readonly snowdevicemanagement?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sns AwsutilsProvider#sns}
  */
  readonly sns?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sqs AwsutilsProvider#sqs}
  */
  readonly sqs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ssm AwsutilsProvider#ssm}
  */
  readonly ssm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ssmcontacts AwsutilsProvider#ssmcontacts}
  */
  readonly ssmcontacts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ssmincidents AwsutilsProvider#ssmincidents}
  */
  readonly ssmincidents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sso AwsutilsProvider#sso}
  */
  readonly sso?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ssoadmin AwsutilsProvider#ssoadmin}
  */
  readonly ssoadmin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#ssooidc AwsutilsProvider#ssooidc}
  */
  readonly ssooidc?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#stepfunctions AwsutilsProvider#stepfunctions}
  */
  readonly stepfunctions?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#storagegateway AwsutilsProvider#storagegateway}
  */
  readonly storagegateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#sts AwsutilsProvider#sts}
  */
  readonly sts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#support AwsutilsProvider#support}
  */
  readonly support?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#swf AwsutilsProvider#swf}
  */
  readonly swf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#synthetics AwsutilsProvider#synthetics}
  */
  readonly synthetics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#textract AwsutilsProvider#textract}
  */
  readonly textract?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#timestreamquery AwsutilsProvider#timestreamquery}
  */
  readonly timestreamquery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#timestreamwrite AwsutilsProvider#timestreamwrite}
  */
  readonly timestreamwrite?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#transcribe AwsutilsProvider#transcribe}
  */
  readonly transcribe?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#transcribeservice AwsutilsProvider#transcribeservice}
  */
  readonly transcribeservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#transcribestreaming AwsutilsProvider#transcribestreaming}
  */
  readonly transcribestreaming?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#transcribestreamingservice AwsutilsProvider#transcribestreamingservice}
  */
  readonly transcribestreamingservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#transfer AwsutilsProvider#transfer}
  */
  readonly transfer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#translate AwsutilsProvider#translate}
  */
  readonly translate?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#voiceid AwsutilsProvider#voiceid}
  */
  readonly voiceid?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#waf AwsutilsProvider#waf}
  */
  readonly waf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#wafregional AwsutilsProvider#wafregional}
  */
  readonly wafregional?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#wafv2 AwsutilsProvider#wafv2}
  */
  readonly wafv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#wellarchitected AwsutilsProvider#wellarchitected}
  */
  readonly wellarchitected?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#wisdom AwsutilsProvider#wisdom}
  */
  readonly wisdom?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#workdocs AwsutilsProvider#workdocs}
  */
  readonly workdocs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#worklink AwsutilsProvider#worklink}
  */
  readonly worklink?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#workmail AwsutilsProvider#workmail}
  */
  readonly workmail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#workmailmessageflow AwsutilsProvider#workmailmessageflow}
  */
  readonly workmailmessageflow?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#workspaces AwsutilsProvider#workspaces}
  */
  readonly workspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#workspacesweb AwsutilsProvider#workspacesweb}
  */
  readonly workspacesweb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#xray AwsutilsProvider#xray}
  */
  readonly xray?: string;
}

export function awsutilsProviderEndpointsToTerraform(struct?: AwsutilsProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessanalyzer: cdktf.stringToTerraform(struct!.accessanalyzer),
    account: cdktf.stringToTerraform(struct!.account),
    acm: cdktf.stringToTerraform(struct!.acm),
    acmpca: cdktf.stringToTerraform(struct!.acmpca),
    alexaforbusiness: cdktf.stringToTerraform(struct!.alexaforbusiness),
    amg: cdktf.stringToTerraform(struct!.amg),
    amp: cdktf.stringToTerraform(struct!.amp),
    amplify: cdktf.stringToTerraform(struct!.amplify),
    amplifybackend: cdktf.stringToTerraform(struct!.amplifybackend),
    amplifyuibuilder: cdktf.stringToTerraform(struct!.amplifyuibuilder),
    apigateway: cdktf.stringToTerraform(struct!.apigateway),
    apigatewaymanagementapi: cdktf.stringToTerraform(struct!.apigatewaymanagementapi),
    apigatewayv2: cdktf.stringToTerraform(struct!.apigatewayv2),
    appautoscaling: cdktf.stringToTerraform(struct!.appautoscaling),
    appconfig: cdktf.stringToTerraform(struct!.appconfig),
    appconfigdata: cdktf.stringToTerraform(struct!.appconfigdata),
    appflow: cdktf.stringToTerraform(struct!.appflow),
    appintegrations: cdktf.stringToTerraform(struct!.appintegrations),
    appintegrationsservice: cdktf.stringToTerraform(struct!.appintegrationsservice),
    applicationautoscaling: cdktf.stringToTerraform(struct!.applicationautoscaling),
    applicationcostprofiler: cdktf.stringToTerraform(struct!.applicationcostprofiler),
    applicationdiscovery: cdktf.stringToTerraform(struct!.applicationdiscovery),
    applicationdiscoveryservice: cdktf.stringToTerraform(struct!.applicationdiscoveryservice),
    applicationinsights: cdktf.stringToTerraform(struct!.applicationinsights),
    appmesh: cdktf.stringToTerraform(struct!.appmesh),
    appregistry: cdktf.stringToTerraform(struct!.appregistry),
    apprunner: cdktf.stringToTerraform(struct!.apprunner),
    appstream: cdktf.stringToTerraform(struct!.appstream),
    appsync: cdktf.stringToTerraform(struct!.appsync),
    athena: cdktf.stringToTerraform(struct!.athena),
    auditmanager: cdktf.stringToTerraform(struct!.auditmanager),
    augmentedairuntime: cdktf.stringToTerraform(struct!.augmentedairuntime),
    autoscaling: cdktf.stringToTerraform(struct!.autoscaling),
    autoscalingplans: cdktf.stringToTerraform(struct!.autoscalingplans),
    backup: cdktf.stringToTerraform(struct!.backup),
    backupgateway: cdktf.stringToTerraform(struct!.backupgateway),
    batch: cdktf.stringToTerraform(struct!.batch),
    beanstalk: cdktf.stringToTerraform(struct!.beanstalk),
    billingconductor: cdktf.stringToTerraform(struct!.billingconductor),
    braket: cdktf.stringToTerraform(struct!.braket),
    budgets: cdktf.stringToTerraform(struct!.budgets),
    ce: cdktf.stringToTerraform(struct!.ce),
    chime: cdktf.stringToTerraform(struct!.chime),
    chimesdkidentity: cdktf.stringToTerraform(struct!.chimesdkidentity),
    chimesdkmeetings: cdktf.stringToTerraform(struct!.chimesdkmeetings),
    chimesdkmessaging: cdktf.stringToTerraform(struct!.chimesdkmessaging),
    cloud9: cdktf.stringToTerraform(struct!.cloud9),
    cloudcontrol: cdktf.stringToTerraform(struct!.cloudcontrol),
    cloudcontrolapi: cdktf.stringToTerraform(struct!.cloudcontrolapi),
    clouddirectory: cdktf.stringToTerraform(struct!.clouddirectory),
    cloudformation: cdktf.stringToTerraform(struct!.cloudformation),
    cloudfront: cdktf.stringToTerraform(struct!.cloudfront),
    cloudhsm: cdktf.stringToTerraform(struct!.cloudhsm),
    cloudhsmv2: cdktf.stringToTerraform(struct!.cloudhsmv2),
    cloudsearch: cdktf.stringToTerraform(struct!.cloudsearch),
    cloudsearchdomain: cdktf.stringToTerraform(struct!.cloudsearchdomain),
    cloudtrail: cdktf.stringToTerraform(struct!.cloudtrail),
    cloudwatch: cdktf.stringToTerraform(struct!.cloudwatch),
    cloudwatchevents: cdktf.stringToTerraform(struct!.cloudwatchevents),
    cloudwatchevidently: cdktf.stringToTerraform(struct!.cloudwatchevidently),
    cloudwatchlog: cdktf.stringToTerraform(struct!.cloudwatchlog),
    cloudwatchlogs: cdktf.stringToTerraform(struct!.cloudwatchlogs),
    cloudwatchrum: cdktf.stringToTerraform(struct!.cloudwatchrum),
    codeartifact: cdktf.stringToTerraform(struct!.codeartifact),
    codebuild: cdktf.stringToTerraform(struct!.codebuild),
    codecommit: cdktf.stringToTerraform(struct!.codecommit),
    codedeploy: cdktf.stringToTerraform(struct!.codedeploy),
    codeguruprofiler: cdktf.stringToTerraform(struct!.codeguruprofiler),
    codegurureviewer: cdktf.stringToTerraform(struct!.codegurureviewer),
    codepipeline: cdktf.stringToTerraform(struct!.codepipeline),
    codestar: cdktf.stringToTerraform(struct!.codestar),
    codestarconnections: cdktf.stringToTerraform(struct!.codestarconnections),
    codestarnotifications: cdktf.stringToTerraform(struct!.codestarnotifications),
    cognitoidentity: cdktf.stringToTerraform(struct!.cognitoidentity),
    cognitoidentityprovider: cdktf.stringToTerraform(struct!.cognitoidentityprovider),
    cognitoidp: cdktf.stringToTerraform(struct!.cognitoidp),
    cognitosync: cdktf.stringToTerraform(struct!.cognitosync),
    comprehend: cdktf.stringToTerraform(struct!.comprehend),
    comprehendmedical: cdktf.stringToTerraform(struct!.comprehendmedical),
    computeoptimizer: cdktf.stringToTerraform(struct!.computeoptimizer),
    config: cdktf.stringToTerraform(struct!.config),
    configservice: cdktf.stringToTerraform(struct!.configservice),
    connect: cdktf.stringToTerraform(struct!.connect),
    connectcontactlens: cdktf.stringToTerraform(struct!.connectcontactlens),
    connectparticipant: cdktf.stringToTerraform(struct!.connectparticipant),
    connectwisdomservice: cdktf.stringToTerraform(struct!.connectwisdomservice),
    costandusagereportservice: cdktf.stringToTerraform(struct!.costandusagereportservice),
    costexplorer: cdktf.stringToTerraform(struct!.costexplorer),
    cur: cdktf.stringToTerraform(struct!.cur),
    customerprofiles: cdktf.stringToTerraform(struct!.customerprofiles),
    databasemigration: cdktf.stringToTerraform(struct!.databasemigration),
    databasemigrationservice: cdktf.stringToTerraform(struct!.databasemigrationservice),
    databrew: cdktf.stringToTerraform(struct!.databrew),
    dataexchange: cdktf.stringToTerraform(struct!.dataexchange),
    datapipeline: cdktf.stringToTerraform(struct!.datapipeline),
    datasync: cdktf.stringToTerraform(struct!.datasync),
    dax: cdktf.stringToTerraform(struct!.dax),
    deploy: cdktf.stringToTerraform(struct!.deploy),
    detective: cdktf.stringToTerraform(struct!.detective),
    devicefarm: cdktf.stringToTerraform(struct!.devicefarm),
    devopsguru: cdktf.stringToTerraform(struct!.devopsguru),
    directconnect: cdktf.stringToTerraform(struct!.directconnect),
    directoryservice: cdktf.stringToTerraform(struct!.directoryservice),
    discovery: cdktf.stringToTerraform(struct!.discovery),
    dlm: cdktf.stringToTerraform(struct!.dlm),
    dms: cdktf.stringToTerraform(struct!.dms),
    docdb: cdktf.stringToTerraform(struct!.docdb),
    drs: cdktf.stringToTerraform(struct!.drs),
    ds: cdktf.stringToTerraform(struct!.ds),
    dynamodb: cdktf.stringToTerraform(struct!.dynamodb),
    dynamodbstreams: cdktf.stringToTerraform(struct!.dynamodbstreams),
    ebs: cdktf.stringToTerraform(struct!.ebs),
    ec2: cdktf.stringToTerraform(struct!.ec2),
    ec2instanceconnect: cdktf.stringToTerraform(struct!.ec2Instanceconnect),
    ecr: cdktf.stringToTerraform(struct!.ecr),
    ecrpublic: cdktf.stringToTerraform(struct!.ecrpublic),
    ecs: cdktf.stringToTerraform(struct!.ecs),
    efs: cdktf.stringToTerraform(struct!.efs),
    eks: cdktf.stringToTerraform(struct!.eks),
    elasticache: cdktf.stringToTerraform(struct!.elasticache),
    elasticbeanstalk: cdktf.stringToTerraform(struct!.elasticbeanstalk),
    elasticinference: cdktf.stringToTerraform(struct!.elasticinference),
    elasticloadbalancing: cdktf.stringToTerraform(struct!.elasticloadbalancing),
    elasticloadbalancingv2: cdktf.stringToTerraform(struct!.elasticloadbalancingv2),
    elasticsearch: cdktf.stringToTerraform(struct!.elasticsearch),
    elasticsearchservice: cdktf.stringToTerraform(struct!.elasticsearchservice),
    elastictranscoder: cdktf.stringToTerraform(struct!.elastictranscoder),
    elb: cdktf.stringToTerraform(struct!.elb),
    elbv2: cdktf.stringToTerraform(struct!.elbv2),
    emr: cdktf.stringToTerraform(struct!.emr),
    emrcontainers: cdktf.stringToTerraform(struct!.emrcontainers),
    emrserverless: cdktf.stringToTerraform(struct!.emrserverless),
    es: cdktf.stringToTerraform(struct!.es),
    eventbridge: cdktf.stringToTerraform(struct!.eventbridge),
    events: cdktf.stringToTerraform(struct!.events),
    evidently: cdktf.stringToTerraform(struct!.evidently),
    finspace: cdktf.stringToTerraform(struct!.finspace),
    finspacedata: cdktf.stringToTerraform(struct!.finspacedata),
    firehose: cdktf.stringToTerraform(struct!.firehose),
    fis: cdktf.stringToTerraform(struct!.fis),
    fms: cdktf.stringToTerraform(struct!.fms),
    forecast: cdktf.stringToTerraform(struct!.forecast),
    forecastquery: cdktf.stringToTerraform(struct!.forecastquery),
    forecastqueryservice: cdktf.stringToTerraform(struct!.forecastqueryservice),
    forecastservice: cdktf.stringToTerraform(struct!.forecastservice),
    frauddetector: cdktf.stringToTerraform(struct!.frauddetector),
    fsx: cdktf.stringToTerraform(struct!.fsx),
    gamelift: cdktf.stringToTerraform(struct!.gamelift),
    glacier: cdktf.stringToTerraform(struct!.glacier),
    globalaccelerator: cdktf.stringToTerraform(struct!.globalaccelerator),
    glue: cdktf.stringToTerraform(struct!.glue),
    gluedatabrew: cdktf.stringToTerraform(struct!.gluedatabrew),
    grafana: cdktf.stringToTerraform(struct!.grafana),
    greengrass: cdktf.stringToTerraform(struct!.greengrass),
    greengrassv2: cdktf.stringToTerraform(struct!.greengrassv2),
    groundstation: cdktf.stringToTerraform(struct!.groundstation),
    guardduty: cdktf.stringToTerraform(struct!.guardduty),
    health: cdktf.stringToTerraform(struct!.health),
    healthlake: cdktf.stringToTerraform(struct!.healthlake),
    honeycode: cdktf.stringToTerraform(struct!.honeycode),
    iam: cdktf.stringToTerraform(struct!.iam),
    identitystore: cdktf.stringToTerraform(struct!.identitystore),
    imagebuilder: cdktf.stringToTerraform(struct!.imagebuilder),
    inspector: cdktf.stringToTerraform(struct!.inspector),
    inspector2: cdktf.stringToTerraform(struct!.inspector2),
    iot: cdktf.stringToTerraform(struct!.iot),
    iot1clickdevices: cdktf.stringToTerraform(struct!.iot1Clickdevices),
    iot1clickdevicesservice: cdktf.stringToTerraform(struct!.iot1Clickdevicesservice),
    iot1clickprojects: cdktf.stringToTerraform(struct!.iot1Clickprojects),
    iotanalytics: cdktf.stringToTerraform(struct!.iotanalytics),
    iotdata: cdktf.stringToTerraform(struct!.iotdata),
    iotdataplane: cdktf.stringToTerraform(struct!.iotdataplane),
    iotdeviceadvisor: cdktf.stringToTerraform(struct!.iotdeviceadvisor),
    iotevents: cdktf.stringToTerraform(struct!.iotevents),
    ioteventsdata: cdktf.stringToTerraform(struct!.ioteventsdata),
    iotfleethub: cdktf.stringToTerraform(struct!.iotfleethub),
    iotjobsdata: cdktf.stringToTerraform(struct!.iotjobsdata),
    iotjobsdataplane: cdktf.stringToTerraform(struct!.iotjobsdataplane),
    iotsecuretunneling: cdktf.stringToTerraform(struct!.iotsecuretunneling),
    iotsitewise: cdktf.stringToTerraform(struct!.iotsitewise),
    iotthingsgraph: cdktf.stringToTerraform(struct!.iotthingsgraph),
    iottwinmaker: cdktf.stringToTerraform(struct!.iottwinmaker),
    iotwireless: cdktf.stringToTerraform(struct!.iotwireless),
    ivs: cdktf.stringToTerraform(struct!.ivs),
    kafka: cdktf.stringToTerraform(struct!.kafka),
    kafkaconnect: cdktf.stringToTerraform(struct!.kafkaconnect),
    kendra: cdktf.stringToTerraform(struct!.kendra),
    keyspaces: cdktf.stringToTerraform(struct!.keyspaces),
    kinesis: cdktf.stringToTerraform(struct!.kinesis),
    kinesisanalytics: cdktf.stringToTerraform(struct!.kinesisanalytics),
    kinesisanalyticsv2: cdktf.stringToTerraform(struct!.kinesisanalyticsv2),
    kinesisvideo: cdktf.stringToTerraform(struct!.kinesisvideo),
    kinesisvideoarchivedmedia: cdktf.stringToTerraform(struct!.kinesisvideoarchivedmedia),
    kinesisvideomedia: cdktf.stringToTerraform(struct!.kinesisvideomedia),
    kinesisvideosignaling: cdktf.stringToTerraform(struct!.kinesisvideosignaling),
    kinesisvideosignalingchannels: cdktf.stringToTerraform(struct!.kinesisvideosignalingchannels),
    kms: cdktf.stringToTerraform(struct!.kms),
    lakeformation: cdktf.stringToTerraform(struct!.lakeformation),
    lambda: cdktf.stringToTerraform(struct!.lambda),
    lex: cdktf.stringToTerraform(struct!.lex),
    lexmodelbuilding: cdktf.stringToTerraform(struct!.lexmodelbuilding),
    lexmodelbuildingservice: cdktf.stringToTerraform(struct!.lexmodelbuildingservice),
    lexmodels: cdktf.stringToTerraform(struct!.lexmodels),
    lexmodelsv2: cdktf.stringToTerraform(struct!.lexmodelsv2),
    lexruntime: cdktf.stringToTerraform(struct!.lexruntime),
    lexruntimeservice: cdktf.stringToTerraform(struct!.lexruntimeservice),
    lexruntimev2: cdktf.stringToTerraform(struct!.lexruntimev2),
    lexv2models: cdktf.stringToTerraform(struct!.lexv2Models),
    lexv2runtime: cdktf.stringToTerraform(struct!.lexv2Runtime),
    licensemanager: cdktf.stringToTerraform(struct!.licensemanager),
    lightsail: cdktf.stringToTerraform(struct!.lightsail),
    location: cdktf.stringToTerraform(struct!.location),
    locationservice: cdktf.stringToTerraform(struct!.locationservice),
    logs: cdktf.stringToTerraform(struct!.logs),
    lookoutequipment: cdktf.stringToTerraform(struct!.lookoutequipment),
    lookoutforvision: cdktf.stringToTerraform(struct!.lookoutforvision),
    lookoutmetrics: cdktf.stringToTerraform(struct!.lookoutmetrics),
    lookoutvision: cdktf.stringToTerraform(struct!.lookoutvision),
    machinelearning: cdktf.stringToTerraform(struct!.machinelearning),
    macie: cdktf.stringToTerraform(struct!.macie),
    macie2: cdktf.stringToTerraform(struct!.macie2),
    managedblockchain: cdktf.stringToTerraform(struct!.managedblockchain),
    managedgrafana: cdktf.stringToTerraform(struct!.managedgrafana),
    marketplacecatalog: cdktf.stringToTerraform(struct!.marketplacecatalog),
    marketplacecommerceanalytics: cdktf.stringToTerraform(struct!.marketplacecommerceanalytics),
    marketplaceentitlement: cdktf.stringToTerraform(struct!.marketplaceentitlement),
    marketplaceentitlementservice: cdktf.stringToTerraform(struct!.marketplaceentitlementservice),
    marketplacemetering: cdktf.stringToTerraform(struct!.marketplacemetering),
    mediaconnect: cdktf.stringToTerraform(struct!.mediaconnect),
    mediaconvert: cdktf.stringToTerraform(struct!.mediaconvert),
    medialive: cdktf.stringToTerraform(struct!.medialive),
    mediapackage: cdktf.stringToTerraform(struct!.mediapackage),
    mediapackagevod: cdktf.stringToTerraform(struct!.mediapackagevod),
    mediastore: cdktf.stringToTerraform(struct!.mediastore),
    mediastoredata: cdktf.stringToTerraform(struct!.mediastoredata),
    mediatailor: cdktf.stringToTerraform(struct!.mediatailor),
    memorydb: cdktf.stringToTerraform(struct!.memorydb),
    meteringmarketplace: cdktf.stringToTerraform(struct!.meteringmarketplace),
    mgh: cdktf.stringToTerraform(struct!.mgh),
    mgn: cdktf.stringToTerraform(struct!.mgn),
    migrationhub: cdktf.stringToTerraform(struct!.migrationhub),
    migrationhubconfig: cdktf.stringToTerraform(struct!.migrationhubconfig),
    migrationhubrefactorspaces: cdktf.stringToTerraform(struct!.migrationhubrefactorspaces),
    migrationhubstrategy: cdktf.stringToTerraform(struct!.migrationhubstrategy),
    migrationhubstrategyrecommendations: cdktf.stringToTerraform(struct!.migrationhubstrategyrecommendations),
    mobile: cdktf.stringToTerraform(struct!.mobile),
    mq: cdktf.stringToTerraform(struct!.mq),
    msk: cdktf.stringToTerraform(struct!.msk),
    mturk: cdktf.stringToTerraform(struct!.mturk),
    mwaa: cdktf.stringToTerraform(struct!.mwaa),
    neptune: cdktf.stringToTerraform(struct!.neptune),
    networkfirewall: cdktf.stringToTerraform(struct!.networkfirewall),
    networkmanager: cdktf.stringToTerraform(struct!.networkmanager),
    nimble: cdktf.stringToTerraform(struct!.nimble),
    nimblestudio: cdktf.stringToTerraform(struct!.nimblestudio),
    opensearch: cdktf.stringToTerraform(struct!.opensearch),
    opensearchservice: cdktf.stringToTerraform(struct!.opensearchservice),
    opsworks: cdktf.stringToTerraform(struct!.opsworks),
    opsworkscm: cdktf.stringToTerraform(struct!.opsworkscm),
    organizations: cdktf.stringToTerraform(struct!.organizations),
    outposts: cdktf.stringToTerraform(struct!.outposts),
    panorama: cdktf.stringToTerraform(struct!.panorama),
    personalize: cdktf.stringToTerraform(struct!.personalize),
    personalizeevents: cdktf.stringToTerraform(struct!.personalizeevents),
    personalizeruntime: cdktf.stringToTerraform(struct!.personalizeruntime),
    pi: cdktf.stringToTerraform(struct!.pi),
    pinpoint: cdktf.stringToTerraform(struct!.pinpoint),
    pinpointemail: cdktf.stringToTerraform(struct!.pinpointemail),
    pinpointsmsvoice: cdktf.stringToTerraform(struct!.pinpointsmsvoice),
    polly: cdktf.stringToTerraform(struct!.polly),
    pricing: cdktf.stringToTerraform(struct!.pricing),
    prometheus: cdktf.stringToTerraform(struct!.prometheus),
    prometheusservice: cdktf.stringToTerraform(struct!.prometheusservice),
    proton: cdktf.stringToTerraform(struct!.proton),
    qldb: cdktf.stringToTerraform(struct!.qldb),
    qldbsession: cdktf.stringToTerraform(struct!.qldbsession),
    quicksight: cdktf.stringToTerraform(struct!.quicksight),
    ram: cdktf.stringToTerraform(struct!.ram),
    rbin: cdktf.stringToTerraform(struct!.rbin),
    rds: cdktf.stringToTerraform(struct!.rds),
    rdsdata: cdktf.stringToTerraform(struct!.rdsdata),
    rdsdataservice: cdktf.stringToTerraform(struct!.rdsdataservice),
    recyclebin: cdktf.stringToTerraform(struct!.recyclebin),
    redshift: cdktf.stringToTerraform(struct!.redshift),
    redshiftdata: cdktf.stringToTerraform(struct!.redshiftdata),
    redshiftdataapiservice: cdktf.stringToTerraform(struct!.redshiftdataapiservice),
    redshiftserverless: cdktf.stringToTerraform(struct!.redshiftserverless),
    rekognition: cdktf.stringToTerraform(struct!.rekognition),
    resiliencehub: cdktf.stringToTerraform(struct!.resiliencehub),
    resourcegroups: cdktf.stringToTerraform(struct!.resourcegroups),
    resourcegroupstagging: cdktf.stringToTerraform(struct!.resourcegroupstagging),
    resourcegroupstaggingapi: cdktf.stringToTerraform(struct!.resourcegroupstaggingapi),
    robomaker: cdktf.stringToTerraform(struct!.robomaker),
    rolesanywhere: cdktf.stringToTerraform(struct!.rolesanywhere),
    route53: cdktf.stringToTerraform(struct!.route53),
    route53domains: cdktf.stringToTerraform(struct!.route53Domains),
    route53recoverycluster: cdktf.stringToTerraform(struct!.route53Recoverycluster),
    route53recoverycontrolconfig: cdktf.stringToTerraform(struct!.route53Recoverycontrolconfig),
    route53recoveryreadiness: cdktf.stringToTerraform(struct!.route53Recoveryreadiness),
    route53resolver: cdktf.stringToTerraform(struct!.route53Resolver),
    rum: cdktf.stringToTerraform(struct!.rum),
    s3: cdktf.stringToTerraform(struct!.s3),
    s3api: cdktf.stringToTerraform(struct!.s3Api),
    s3control: cdktf.stringToTerraform(struct!.s3Control),
    s3outposts: cdktf.stringToTerraform(struct!.s3Outposts),
    sagemaker: cdktf.stringToTerraform(struct!.sagemaker),
    sagemakera2iruntime: cdktf.stringToTerraform(struct!.sagemakera2Iruntime),
    sagemakeredge: cdktf.stringToTerraform(struct!.sagemakeredge),
    sagemakeredgemanager: cdktf.stringToTerraform(struct!.sagemakeredgemanager),
    sagemakerfeaturestoreruntime: cdktf.stringToTerraform(struct!.sagemakerfeaturestoreruntime),
    sagemakerruntime: cdktf.stringToTerraform(struct!.sagemakerruntime),
    savingsplans: cdktf.stringToTerraform(struct!.savingsplans),
    schemas: cdktf.stringToTerraform(struct!.schemas),
    sdb: cdktf.stringToTerraform(struct!.sdb),
    secretsmanager: cdktf.stringToTerraform(struct!.secretsmanager),
    securityhub: cdktf.stringToTerraform(struct!.securityhub),
    serverlessapplicationrepository: cdktf.stringToTerraform(struct!.serverlessapplicationrepository),
    serverlessapprepo: cdktf.stringToTerraform(struct!.serverlessapprepo),
    serverlessrepo: cdktf.stringToTerraform(struct!.serverlessrepo),
    servicecatalog: cdktf.stringToTerraform(struct!.servicecatalog),
    servicecatalogappregistry: cdktf.stringToTerraform(struct!.servicecatalogappregistry),
    servicediscovery: cdktf.stringToTerraform(struct!.servicediscovery),
    servicequotas: cdktf.stringToTerraform(struct!.servicequotas),
    ses: cdktf.stringToTerraform(struct!.ses),
    sesv2: cdktf.stringToTerraform(struct!.sesv2),
    sfn: cdktf.stringToTerraform(struct!.sfn),
    shield: cdktf.stringToTerraform(struct!.shield),
    signer: cdktf.stringToTerraform(struct!.signer),
    simpledb: cdktf.stringToTerraform(struct!.simpledb),
    sms: cdktf.stringToTerraform(struct!.sms),
    snowball: cdktf.stringToTerraform(struct!.snowball),
    snowdevicemanagement: cdktf.stringToTerraform(struct!.snowdevicemanagement),
    sns: cdktf.stringToTerraform(struct!.sns),
    sqs: cdktf.stringToTerraform(struct!.sqs),
    ssm: cdktf.stringToTerraform(struct!.ssm),
    ssmcontacts: cdktf.stringToTerraform(struct!.ssmcontacts),
    ssmincidents: cdktf.stringToTerraform(struct!.ssmincidents),
    sso: cdktf.stringToTerraform(struct!.sso),
    ssoadmin: cdktf.stringToTerraform(struct!.ssoadmin),
    ssooidc: cdktf.stringToTerraform(struct!.ssooidc),
    stepfunctions: cdktf.stringToTerraform(struct!.stepfunctions),
    storagegateway: cdktf.stringToTerraform(struct!.storagegateway),
    sts: cdktf.stringToTerraform(struct!.sts),
    support: cdktf.stringToTerraform(struct!.support),
    swf: cdktf.stringToTerraform(struct!.swf),
    synthetics: cdktf.stringToTerraform(struct!.synthetics),
    textract: cdktf.stringToTerraform(struct!.textract),
    timestreamquery: cdktf.stringToTerraform(struct!.timestreamquery),
    timestreamwrite: cdktf.stringToTerraform(struct!.timestreamwrite),
    transcribe: cdktf.stringToTerraform(struct!.transcribe),
    transcribeservice: cdktf.stringToTerraform(struct!.transcribeservice),
    transcribestreaming: cdktf.stringToTerraform(struct!.transcribestreaming),
    transcribestreamingservice: cdktf.stringToTerraform(struct!.transcribestreamingservice),
    transfer: cdktf.stringToTerraform(struct!.transfer),
    translate: cdktf.stringToTerraform(struct!.translate),
    voiceid: cdktf.stringToTerraform(struct!.voiceid),
    waf: cdktf.stringToTerraform(struct!.waf),
    wafregional: cdktf.stringToTerraform(struct!.wafregional),
    wafv2: cdktf.stringToTerraform(struct!.wafv2),
    wellarchitected: cdktf.stringToTerraform(struct!.wellarchitected),
    wisdom: cdktf.stringToTerraform(struct!.wisdom),
    workdocs: cdktf.stringToTerraform(struct!.workdocs),
    worklink: cdktf.stringToTerraform(struct!.worklink),
    workmail: cdktf.stringToTerraform(struct!.workmail),
    workmailmessageflow: cdktf.stringToTerraform(struct!.workmailmessageflow),
    workspaces: cdktf.stringToTerraform(struct!.workspaces),
    workspacesweb: cdktf.stringToTerraform(struct!.workspacesweb),
    xray: cdktf.stringToTerraform(struct!.xray),
  }
}


export function awsutilsProviderEndpointsToHclTerraform(struct?: AwsutilsProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessanalyzer: {
      value: cdktf.stringToHclTerraform(struct!.accessanalyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acm: {
      value: cdktf.stringToHclTerraform(struct!.acm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acmpca: {
      value: cdktf.stringToHclTerraform(struct!.acmpca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alexaforbusiness: {
      value: cdktf.stringToHclTerraform(struct!.alexaforbusiness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amg: {
      value: cdktf.stringToHclTerraform(struct!.amg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amp: {
      value: cdktf.stringToHclTerraform(struct!.amp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amplify: {
      value: cdktf.stringToHclTerraform(struct!.amplify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amplifybackend: {
      value: cdktf.stringToHclTerraform(struct!.amplifybackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amplifyuibuilder: {
      value: cdktf.stringToHclTerraform(struct!.amplifyuibuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigateway: {
      value: cdktf.stringToHclTerraform(struct!.apigateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigatewaymanagementapi: {
      value: cdktf.stringToHclTerraform(struct!.apigatewaymanagementapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigatewayv2: {
      value: cdktf.stringToHclTerraform(struct!.apigatewayv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appautoscaling: {
      value: cdktf.stringToHclTerraform(struct!.appautoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appconfig: {
      value: cdktf.stringToHclTerraform(struct!.appconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appconfigdata: {
      value: cdktf.stringToHclTerraform(struct!.appconfigdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appflow: {
      value: cdktf.stringToHclTerraform(struct!.appflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appintegrations: {
      value: cdktf.stringToHclTerraform(struct!.appintegrations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appintegrationsservice: {
      value: cdktf.stringToHclTerraform(struct!.appintegrationsservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationautoscaling: {
      value: cdktf.stringToHclTerraform(struct!.applicationautoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationcostprofiler: {
      value: cdktf.stringToHclTerraform(struct!.applicationcostprofiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationdiscovery: {
      value: cdktf.stringToHclTerraform(struct!.applicationdiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationdiscoveryservice: {
      value: cdktf.stringToHclTerraform(struct!.applicationdiscoveryservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationinsights: {
      value: cdktf.stringToHclTerraform(struct!.applicationinsights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appmesh: {
      value: cdktf.stringToHclTerraform(struct!.appmesh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appregistry: {
      value: cdktf.stringToHclTerraform(struct!.appregistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apprunner: {
      value: cdktf.stringToHclTerraform(struct!.apprunner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appstream: {
      value: cdktf.stringToHclTerraform(struct!.appstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appsync: {
      value: cdktf.stringToHclTerraform(struct!.appsync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    athena: {
      value: cdktf.stringToHclTerraform(struct!.athena),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auditmanager: {
      value: cdktf.stringToHclTerraform(struct!.auditmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    augmentedairuntime: {
      value: cdktf.stringToHclTerraform(struct!.augmentedairuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: cdktf.stringToHclTerraform(struct!.autoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscalingplans: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingplans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup: {
      value: cdktf.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backupgateway: {
      value: cdktf.stringToHclTerraform(struct!.backupgateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch: {
      value: cdktf.stringToHclTerraform(struct!.batch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beanstalk: {
      value: cdktf.stringToHclTerraform(struct!.beanstalk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billingconductor: {
      value: cdktf.stringToHclTerraform(struct!.billingconductor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    braket: {
      value: cdktf.stringToHclTerraform(struct!.braket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    budgets: {
      value: cdktf.stringToHclTerraform(struct!.budgets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ce: {
      value: cdktf.stringToHclTerraform(struct!.ce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chime: {
      value: cdktf.stringToHclTerraform(struct!.chime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chimesdkidentity: {
      value: cdktf.stringToHclTerraform(struct!.chimesdkidentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chimesdkmeetings: {
      value: cdktf.stringToHclTerraform(struct!.chimesdkmeetings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chimesdkmessaging: {
      value: cdktf.stringToHclTerraform(struct!.chimesdkmessaging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud9: {
      value: cdktf.stringToHclTerraform(struct!.cloud9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudcontrol: {
      value: cdktf.stringToHclTerraform(struct!.cloudcontrol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudcontrolapi: {
      value: cdktf.stringToHclTerraform(struct!.cloudcontrolapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clouddirectory: {
      value: cdktf.stringToHclTerraform(struct!.clouddirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudformation: {
      value: cdktf.stringToHclTerraform(struct!.cloudformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront: {
      value: cdktf.stringToHclTerraform(struct!.cloudfront),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudhsm: {
      value: cdktf.stringToHclTerraform(struct!.cloudhsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudhsmv2: {
      value: cdktf.stringToHclTerraform(struct!.cloudhsmv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudsearch: {
      value: cdktf.stringToHclTerraform(struct!.cloudsearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudsearchdomain: {
      value: cdktf.stringToHclTerraform(struct!.cloudsearchdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudtrail: {
      value: cdktf.stringToHclTerraform(struct!.cloudtrail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchevents: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchevents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchevidently: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchevidently),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchlog: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchlog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchlogs: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchlogs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchrum: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchrum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeartifact: {
      value: cdktf.stringToHclTerraform(struct!.codeartifact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codebuild: {
      value: cdktf.stringToHclTerraform(struct!.codebuild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codecommit: {
      value: cdktf.stringToHclTerraform(struct!.codecommit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codedeploy: {
      value: cdktf.stringToHclTerraform(struct!.codedeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeguruprofiler: {
      value: cdktf.stringToHclTerraform(struct!.codeguruprofiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codegurureviewer: {
      value: cdktf.stringToHclTerraform(struct!.codegurureviewer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codepipeline: {
      value: cdktf.stringToHclTerraform(struct!.codepipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codestar: {
      value: cdktf.stringToHclTerraform(struct!.codestar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codestarconnections: {
      value: cdktf.stringToHclTerraform(struct!.codestarconnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codestarnotifications: {
      value: cdktf.stringToHclTerraform(struct!.codestarnotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidentity: {
      value: cdktf.stringToHclTerraform(struct!.cognitoidentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidentityprovider: {
      value: cdktf.stringToHclTerraform(struct!.cognitoidentityprovider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidp: {
      value: cdktf.stringToHclTerraform(struct!.cognitoidp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitosync: {
      value: cdktf.stringToHclTerraform(struct!.cognitosync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comprehend: {
      value: cdktf.stringToHclTerraform(struct!.comprehend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comprehendmedical: {
      value: cdktf.stringToHclTerraform(struct!.comprehendmedical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    computeoptimizer: {
      value: cdktf.stringToHclTerraform(struct!.computeoptimizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configservice: {
      value: cdktf.stringToHclTerraform(struct!.configservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect: {
      value: cdktf.stringToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectcontactlens: {
      value: cdktf.stringToHclTerraform(struct!.connectcontactlens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectparticipant: {
      value: cdktf.stringToHclTerraform(struct!.connectparticipant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectwisdomservice: {
      value: cdktf.stringToHclTerraform(struct!.connectwisdomservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costandusagereportservice: {
      value: cdktf.stringToHclTerraform(struct!.costandusagereportservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costexplorer: {
      value: cdktf.stringToHclTerraform(struct!.costexplorer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cur: {
      value: cdktf.stringToHclTerraform(struct!.cur),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customerprofiles: {
      value: cdktf.stringToHclTerraform(struct!.customerprofiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databasemigration: {
      value: cdktf.stringToHclTerraform(struct!.databasemigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databasemigrationservice: {
      value: cdktf.stringToHclTerraform(struct!.databasemigrationservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databrew: {
      value: cdktf.stringToHclTerraform(struct!.databrew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataexchange: {
      value: cdktf.stringToHclTerraform(struct!.dataexchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datapipeline: {
      value: cdktf.stringToHclTerraform(struct!.datapipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasync: {
      value: cdktf.stringToHclTerraform(struct!.datasync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dax: {
      value: cdktf.stringToHclTerraform(struct!.dax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy: {
      value: cdktf.stringToHclTerraform(struct!.deploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detective: {
      value: cdktf.stringToHclTerraform(struct!.detective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devicefarm: {
      value: cdktf.stringToHclTerraform(struct!.devicefarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devopsguru: {
      value: cdktf.stringToHclTerraform(struct!.devopsguru),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directconnect: {
      value: cdktf.stringToHclTerraform(struct!.directconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directoryservice: {
      value: cdktf.stringToHclTerraform(struct!.directoryservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery: {
      value: cdktf.stringToHclTerraform(struct!.discovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlm: {
      value: cdktf.stringToHclTerraform(struct!.dlm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dms: {
      value: cdktf.stringToHclTerraform(struct!.dms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docdb: {
      value: cdktf.stringToHclTerraform(struct!.docdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs: {
      value: cdktf.stringToHclTerraform(struct!.drs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds: {
      value: cdktf.stringToHclTerraform(struct!.ds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamodb: {
      value: cdktf.stringToHclTerraform(struct!.dynamodb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamodbstreams: {
      value: cdktf.stringToHclTerraform(struct!.dynamodbstreams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs: {
      value: cdktf.stringToHclTerraform(struct!.ebs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2: {
      value: cdktf.stringToHclTerraform(struct!.ec2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2instanceconnect: {
      value: cdktf.stringToHclTerraform(struct!.ec2Instanceconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecr: {
      value: cdktf.stringToHclTerraform(struct!.ecr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecrpublic: {
      value: cdktf.stringToHclTerraform(struct!.ecrpublic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecs: {
      value: cdktf.stringToHclTerraform(struct!.ecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    efs: {
      value: cdktf.stringToHclTerraform(struct!.efs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks: {
      value: cdktf.stringToHclTerraform(struct!.eks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticache: {
      value: cdktf.stringToHclTerraform(struct!.elasticache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticbeanstalk: {
      value: cdktf.stringToHclTerraform(struct!.elasticbeanstalk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticinference: {
      value: cdktf.stringToHclTerraform(struct!.elasticinference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticloadbalancing: {
      value: cdktf.stringToHclTerraform(struct!.elasticloadbalancing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticloadbalancingv2: {
      value: cdktf.stringToHclTerraform(struct!.elasticloadbalancingv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearchservice: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elastictranscoder: {
      value: cdktf.stringToHclTerraform(struct!.elastictranscoder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elb: {
      value: cdktf.stringToHclTerraform(struct!.elb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elbv2: {
      value: cdktf.stringToHclTerraform(struct!.elbv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emr: {
      value: cdktf.stringToHclTerraform(struct!.emr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emrcontainers: {
      value: cdktf.stringToHclTerraform(struct!.emrcontainers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emrserverless: {
      value: cdktf.stringToHclTerraform(struct!.emrserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    es: {
      value: cdktf.stringToHclTerraform(struct!.es),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eventbridge: {
      value: cdktf.stringToHclTerraform(struct!.eventbridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events: {
      value: cdktf.stringToHclTerraform(struct!.events),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evidently: {
      value: cdktf.stringToHclTerraform(struct!.evidently),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finspace: {
      value: cdktf.stringToHclTerraform(struct!.finspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finspacedata: {
      value: cdktf.stringToHclTerraform(struct!.finspacedata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firehose: {
      value: cdktf.stringToHclTerraform(struct!.firehose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fis: {
      value: cdktf.stringToHclTerraform(struct!.fis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fms: {
      value: cdktf.stringToHclTerraform(struct!.fms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forecast: {
      value: cdktf.stringToHclTerraform(struct!.forecast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forecastquery: {
      value: cdktf.stringToHclTerraform(struct!.forecastquery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forecastqueryservice: {
      value: cdktf.stringToHclTerraform(struct!.forecastqueryservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forecastservice: {
      value: cdktf.stringToHclTerraform(struct!.forecastservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frauddetector: {
      value: cdktf.stringToHclTerraform(struct!.frauddetector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsx: {
      value: cdktf.stringToHclTerraform(struct!.fsx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gamelift: {
      value: cdktf.stringToHclTerraform(struct!.gamelift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glacier: {
      value: cdktf.stringToHclTerraform(struct!.glacier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalaccelerator: {
      value: cdktf.stringToHclTerraform(struct!.globalaccelerator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue: {
      value: cdktf.stringToHclTerraform(struct!.glue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gluedatabrew: {
      value: cdktf.stringToHclTerraform(struct!.gluedatabrew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana: {
      value: cdktf.stringToHclTerraform(struct!.grafana),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greengrass: {
      value: cdktf.stringToHclTerraform(struct!.greengrass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greengrassv2: {
      value: cdktf.stringToHclTerraform(struct!.greengrassv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groundstation: {
      value: cdktf.stringToHclTerraform(struct!.groundstation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardduty: {
      value: cdktf.stringToHclTerraform(struct!.guardduty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthlake: {
      value: cdktf.stringToHclTerraform(struct!.healthlake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    honeycode: {
      value: cdktf.stringToHclTerraform(struct!.honeycode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam: {
      value: cdktf.stringToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identitystore: {
      value: cdktf.stringToHclTerraform(struct!.identitystore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagebuilder: {
      value: cdktf.stringToHclTerraform(struct!.imagebuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspector: {
      value: cdktf.stringToHclTerraform(struct!.inspector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspector2: {
      value: cdktf.stringToHclTerraform(struct!.inspector2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot: {
      value: cdktf.stringToHclTerraform(struct!.iot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot1clickdevices: {
      value: cdktf.stringToHclTerraform(struct!.iot1Clickdevices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot1clickdevicesservice: {
      value: cdktf.stringToHclTerraform(struct!.iot1Clickdevicesservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot1clickprojects: {
      value: cdktf.stringToHclTerraform(struct!.iot1Clickprojects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotanalytics: {
      value: cdktf.stringToHclTerraform(struct!.iotanalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotdata: {
      value: cdktf.stringToHclTerraform(struct!.iotdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotdataplane: {
      value: cdktf.stringToHclTerraform(struct!.iotdataplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotdeviceadvisor: {
      value: cdktf.stringToHclTerraform(struct!.iotdeviceadvisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotevents: {
      value: cdktf.stringToHclTerraform(struct!.iotevents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ioteventsdata: {
      value: cdktf.stringToHclTerraform(struct!.ioteventsdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotfleethub: {
      value: cdktf.stringToHclTerraform(struct!.iotfleethub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotjobsdata: {
      value: cdktf.stringToHclTerraform(struct!.iotjobsdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotjobsdataplane: {
      value: cdktf.stringToHclTerraform(struct!.iotjobsdataplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotsecuretunneling: {
      value: cdktf.stringToHclTerraform(struct!.iotsecuretunneling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotsitewise: {
      value: cdktf.stringToHclTerraform(struct!.iotsitewise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotthingsgraph: {
      value: cdktf.stringToHclTerraform(struct!.iotthingsgraph),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iottwinmaker: {
      value: cdktf.stringToHclTerraform(struct!.iottwinmaker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotwireless: {
      value: cdktf.stringToHclTerraform(struct!.iotwireless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivs: {
      value: cdktf.stringToHclTerraform(struct!.ivs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka: {
      value: cdktf.stringToHclTerraform(struct!.kafka),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafkaconnect: {
      value: cdktf.stringToHclTerraform(struct!.kafkaconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kendra: {
      value: cdktf.stringToHclTerraform(struct!.kendra),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyspaces: {
      value: cdktf.stringToHclTerraform(struct!.keyspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis: {
      value: cdktf.stringToHclTerraform(struct!.kinesis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisanalytics: {
      value: cdktf.stringToHclTerraform(struct!.kinesisanalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisanalyticsv2: {
      value: cdktf.stringToHclTerraform(struct!.kinesisanalyticsv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisvideo: {
      value: cdktf.stringToHclTerraform(struct!.kinesisvideo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisvideoarchivedmedia: {
      value: cdktf.stringToHclTerraform(struct!.kinesisvideoarchivedmedia),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisvideomedia: {
      value: cdktf.stringToHclTerraform(struct!.kinesisvideomedia),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisvideosignaling: {
      value: cdktf.stringToHclTerraform(struct!.kinesisvideosignaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisvideosignalingchannels: {
      value: cdktf.stringToHclTerraform(struct!.kinesisvideosignalingchannels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms: {
      value: cdktf.stringToHclTerraform(struct!.kms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lakeformation: {
      value: cdktf.stringToHclTerraform(struct!.lakeformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda: {
      value: cdktf.stringToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lex: {
      value: cdktf.stringToHclTerraform(struct!.lex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelbuilding: {
      value: cdktf.stringToHclTerraform(struct!.lexmodelbuilding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelbuildingservice: {
      value: cdktf.stringToHclTerraform(struct!.lexmodelbuildingservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodels: {
      value: cdktf.stringToHclTerraform(struct!.lexmodels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelsv2: {
      value: cdktf.stringToHclTerraform(struct!.lexmodelsv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexruntime: {
      value: cdktf.stringToHclTerraform(struct!.lexruntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexruntimeservice: {
      value: cdktf.stringToHclTerraform(struct!.lexruntimeservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexruntimev2: {
      value: cdktf.stringToHclTerraform(struct!.lexruntimev2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexv2models: {
      value: cdktf.stringToHclTerraform(struct!.lexv2Models),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexv2runtime: {
      value: cdktf.stringToHclTerraform(struct!.lexv2Runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    licensemanager: {
      value: cdktf.stringToHclTerraform(struct!.licensemanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lightsail: {
      value: cdktf.stringToHclTerraform(struct!.lightsail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locationservice: {
      value: cdktf.stringToHclTerraform(struct!.locationservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs: {
      value: cdktf.stringToHclTerraform(struct!.logs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookoutequipment: {
      value: cdktf.stringToHclTerraform(struct!.lookoutequipment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookoutforvision: {
      value: cdktf.stringToHclTerraform(struct!.lookoutforvision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookoutmetrics: {
      value: cdktf.stringToHclTerraform(struct!.lookoutmetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookoutvision: {
      value: cdktf.stringToHclTerraform(struct!.lookoutvision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machinelearning: {
      value: cdktf.stringToHclTerraform(struct!.machinelearning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macie: {
      value: cdktf.stringToHclTerraform(struct!.macie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macie2: {
      value: cdktf.stringToHclTerraform(struct!.macie2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managedblockchain: {
      value: cdktf.stringToHclTerraform(struct!.managedblockchain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managedgrafana: {
      value: cdktf.stringToHclTerraform(struct!.managedgrafana),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketplacecatalog: {
      value: cdktf.stringToHclTerraform(struct!.marketplacecatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketplacecommerceanalytics: {
      value: cdktf.stringToHclTerraform(struct!.marketplacecommerceanalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketplaceentitlement: {
      value: cdktf.stringToHclTerraform(struct!.marketplaceentitlement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketplaceentitlementservice: {
      value: cdktf.stringToHclTerraform(struct!.marketplaceentitlementservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketplacemetering: {
      value: cdktf.stringToHclTerraform(struct!.marketplacemetering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediaconnect: {
      value: cdktf.stringToHclTerraform(struct!.mediaconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediaconvert: {
      value: cdktf.stringToHclTerraform(struct!.mediaconvert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medialive: {
      value: cdktf.stringToHclTerraform(struct!.medialive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediapackage: {
      value: cdktf.stringToHclTerraform(struct!.mediapackage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediapackagevod: {
      value: cdktf.stringToHclTerraform(struct!.mediapackagevod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediastore: {
      value: cdktf.stringToHclTerraform(struct!.mediastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediastoredata: {
      value: cdktf.stringToHclTerraform(struct!.mediastoredata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediatailor: {
      value: cdktf.stringToHclTerraform(struct!.mediatailor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memorydb: {
      value: cdktf.stringToHclTerraform(struct!.memorydb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meteringmarketplace: {
      value: cdktf.stringToHclTerraform(struct!.meteringmarketplace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgh: {
      value: cdktf.stringToHclTerraform(struct!.mgh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgn: {
      value: cdktf.stringToHclTerraform(struct!.mgn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migrationhub: {
      value: cdktf.stringToHclTerraform(struct!.migrationhub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migrationhubconfig: {
      value: cdktf.stringToHclTerraform(struct!.migrationhubconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migrationhubrefactorspaces: {
      value: cdktf.stringToHclTerraform(struct!.migrationhubrefactorspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migrationhubstrategy: {
      value: cdktf.stringToHclTerraform(struct!.migrationhubstrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migrationhubstrategyrecommendations: {
      value: cdktf.stringToHclTerraform(struct!.migrationhubstrategyrecommendations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile: {
      value: cdktf.stringToHclTerraform(struct!.mobile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mq: {
      value: cdktf.stringToHclTerraform(struct!.mq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msk: {
      value: cdktf.stringToHclTerraform(struct!.msk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mturk: {
      value: cdktf.stringToHclTerraform(struct!.mturk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mwaa: {
      value: cdktf.stringToHclTerraform(struct!.mwaa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neptune: {
      value: cdktf.stringToHclTerraform(struct!.neptune),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkfirewall: {
      value: cdktf.stringToHclTerraform(struct!.networkfirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkmanager: {
      value: cdktf.stringToHclTerraform(struct!.networkmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nimble: {
      value: cdktf.stringToHclTerraform(struct!.nimble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nimblestudio: {
      value: cdktf.stringToHclTerraform(struct!.nimblestudio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearch: {
      value: cdktf.stringToHclTerraform(struct!.opensearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearchservice: {
      value: cdktf.stringToHclTerraform(struct!.opensearchservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsworks: {
      value: cdktf.stringToHclTerraform(struct!.opsworks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsworkscm: {
      value: cdktf.stringToHclTerraform(struct!.opsworkscm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizations: {
      value: cdktf.stringToHclTerraform(struct!.organizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outposts: {
      value: cdktf.stringToHclTerraform(struct!.outposts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama: {
      value: cdktf.stringToHclTerraform(struct!.panorama),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personalize: {
      value: cdktf.stringToHclTerraform(struct!.personalize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personalizeevents: {
      value: cdktf.stringToHclTerraform(struct!.personalizeevents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personalizeruntime: {
      value: cdktf.stringToHclTerraform(struct!.personalizeruntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pi: {
      value: cdktf.stringToHclTerraform(struct!.pi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinpoint: {
      value: cdktf.stringToHclTerraform(struct!.pinpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinpointemail: {
      value: cdktf.stringToHclTerraform(struct!.pinpointemail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinpointsmsvoice: {
      value: cdktf.stringToHclTerraform(struct!.pinpointsmsvoice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polly: {
      value: cdktf.stringToHclTerraform(struct!.polly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing: {
      value: cdktf.stringToHclTerraform(struct!.pricing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus: {
      value: cdktf.stringToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheusservice: {
      value: cdktf.stringToHclTerraform(struct!.prometheusservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proton: {
      value: cdktf.stringToHclTerraform(struct!.proton),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qldb: {
      value: cdktf.stringToHclTerraform(struct!.qldb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qldbsession: {
      value: cdktf.stringToHclTerraform(struct!.qldbsession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quicksight: {
      value: cdktf.stringToHclTerraform(struct!.quicksight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram: {
      value: cdktf.stringToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rbin: {
      value: cdktf.stringToHclTerraform(struct!.rbin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds: {
      value: cdktf.stringToHclTerraform(struct!.rds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdsdata: {
      value: cdktf.stringToHclTerraform(struct!.rdsdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdsdataservice: {
      value: cdktf.stringToHclTerraform(struct!.rdsdataservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recyclebin: {
      value: cdktf.stringToHclTerraform(struct!.recyclebin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshift: {
      value: cdktf.stringToHclTerraform(struct!.redshift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftdata: {
      value: cdktf.stringToHclTerraform(struct!.redshiftdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftdataapiservice: {
      value: cdktf.stringToHclTerraform(struct!.redshiftdataapiservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftserverless: {
      value: cdktf.stringToHclTerraform(struct!.redshiftserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rekognition: {
      value: cdktf.stringToHclTerraform(struct!.rekognition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resiliencehub: {
      value: cdktf.stringToHclTerraform(struct!.resiliencehub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroups: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroupstagging: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroupstagging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroupstaggingapi: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroupstaggingapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    robomaker: {
      value: cdktf.stringToHclTerraform(struct!.robomaker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolesanywhere: {
      value: cdktf.stringToHclTerraform(struct!.rolesanywhere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53: {
      value: cdktf.stringToHclTerraform(struct!.route53),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53domains: {
      value: cdktf.stringToHclTerraform(struct!.route53Domains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53recoverycluster: {
      value: cdktf.stringToHclTerraform(struct!.route53Recoverycluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53recoverycontrolconfig: {
      value: cdktf.stringToHclTerraform(struct!.route53Recoverycontrolconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53recoveryreadiness: {
      value: cdktf.stringToHclTerraform(struct!.route53Recoveryreadiness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53resolver: {
      value: cdktf.stringToHclTerraform(struct!.route53Resolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rum: {
      value: cdktf.stringToHclTerraform(struct!.rum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktf.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3api: {
      value: cdktf.stringToHclTerraform(struct!.s3Api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3control: {
      value: cdktf.stringToHclTerraform(struct!.s3Control),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3outposts: {
      value: cdktf.stringToHclTerraform(struct!.s3Outposts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker: {
      value: cdktf.stringToHclTerraform(struct!.sagemaker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemakera2iruntime: {
      value: cdktf.stringToHclTerraform(struct!.sagemakera2Iruntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemakeredge: {
      value: cdktf.stringToHclTerraform(struct!.sagemakeredge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemakeredgemanager: {
      value: cdktf.stringToHclTerraform(struct!.sagemakeredgemanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemakerfeaturestoreruntime: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerfeaturestoreruntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemakerruntime: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerruntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    savingsplans: {
      value: cdktf.stringToHclTerraform(struct!.savingsplans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schemas: {
      value: cdktf.stringToHclTerraform(struct!.schemas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdb: {
      value: cdktf.stringToHclTerraform(struct!.sdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secretsmanager: {
      value: cdktf.stringToHclTerraform(struct!.secretsmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securityhub: {
      value: cdktf.stringToHclTerraform(struct!.securityhub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessapplicationrepository: {
      value: cdktf.stringToHclTerraform(struct!.serverlessapplicationrepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessapprepo: {
      value: cdktf.stringToHclTerraform(struct!.serverlessapprepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessrepo: {
      value: cdktf.stringToHclTerraform(struct!.serverlessrepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicecatalog: {
      value: cdktf.stringToHclTerraform(struct!.servicecatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicecatalogappregistry: {
      value: cdktf.stringToHclTerraform(struct!.servicecatalogappregistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicediscovery: {
      value: cdktf.stringToHclTerraform(struct!.servicediscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicequotas: {
      value: cdktf.stringToHclTerraform(struct!.servicequotas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ses: {
      value: cdktf.stringToHclTerraform(struct!.ses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesv2: {
      value: cdktf.stringToHclTerraform(struct!.sesv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sfn: {
      value: cdktf.stringToHclTerraform(struct!.sfn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shield: {
      value: cdktf.stringToHclTerraform(struct!.shield),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer: {
      value: cdktf.stringToHclTerraform(struct!.signer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simpledb: {
      value: cdktf.stringToHclTerraform(struct!.simpledb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms: {
      value: cdktf.stringToHclTerraform(struct!.sms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snowball: {
      value: cdktf.stringToHclTerraform(struct!.snowball),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snowdevicemanagement: {
      value: cdktf.stringToHclTerraform(struct!.snowdevicemanagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns: {
      value: cdktf.stringToHclTerraform(struct!.sns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs: {
      value: cdktf.stringToHclTerraform(struct!.sqs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm: {
      value: cdktf.stringToHclTerraform(struct!.ssm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmcontacts: {
      value: cdktf.stringToHclTerraform(struct!.ssmcontacts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmincidents: {
      value: cdktf.stringToHclTerraform(struct!.ssmincidents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssoadmin: {
      value: cdktf.stringToHclTerraform(struct!.ssoadmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssooidc: {
      value: cdktf.stringToHclTerraform(struct!.ssooidc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stepfunctions: {
      value: cdktf.stringToHclTerraform(struct!.stepfunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storagegateway: {
      value: cdktf.stringToHclTerraform(struct!.storagegateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sts: {
      value: cdktf.stringToHclTerraform(struct!.sts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support: {
      value: cdktf.stringToHclTerraform(struct!.support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swf: {
      value: cdktf.stringToHclTerraform(struct!.swf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synthetics: {
      value: cdktf.stringToHclTerraform(struct!.synthetics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    textract: {
      value: cdktf.stringToHclTerraform(struct!.textract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestreamquery: {
      value: cdktf.stringToHclTerraform(struct!.timestreamquery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestreamwrite: {
      value: cdktf.stringToHclTerraform(struct!.timestreamwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribe: {
      value: cdktf.stringToHclTerraform(struct!.transcribe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribeservice: {
      value: cdktf.stringToHclTerraform(struct!.transcribeservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribestreaming: {
      value: cdktf.stringToHclTerraform(struct!.transcribestreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribestreamingservice: {
      value: cdktf.stringToHclTerraform(struct!.transcribestreamingservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer: {
      value: cdktf.stringToHclTerraform(struct!.transfer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate: {
      value: cdktf.stringToHclTerraform(struct!.translate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voiceid: {
      value: cdktf.stringToHclTerraform(struct!.voiceid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf: {
      value: cdktf.stringToHclTerraform(struct!.waf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wafregional: {
      value: cdktf.stringToHclTerraform(struct!.wafregional),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wafv2: {
      value: cdktf.stringToHclTerraform(struct!.wafv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wellarchitected: {
      value: cdktf.stringToHclTerraform(struct!.wellarchitected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wisdom: {
      value: cdktf.stringToHclTerraform(struct!.wisdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workdocs: {
      value: cdktf.stringToHclTerraform(struct!.workdocs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worklink: {
      value: cdktf.stringToHclTerraform(struct!.worklink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workmail: {
      value: cdktf.stringToHclTerraform(struct!.workmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workmailmessageflow: {
      value: cdktf.stringToHclTerraform(struct!.workmailmessageflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspaces: {
      value: cdktf.stringToHclTerraform(struct!.workspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspacesweb: {
      value: cdktf.stringToHclTerraform(struct!.workspacesweb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xray: {
      value: cdktf.stringToHclTerraform(struct!.xray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsutilsProviderIgnoreTags {
  /**
  * Resource tag key prefixes to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#key_prefixes AwsutilsProvider#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Resource tag keys to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#keys AwsutilsProvider#keys}
  */
  readonly keys?: string[];
}

export function awsutilsProviderIgnoreTagsToTerraform(struct?: AwsutilsProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function awsutilsProviderIgnoreTagsToHclTerraform(struct?: AwsutilsProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs awsutils}
*/
export class AwsutilsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsutils";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsutilsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsutilsProvider to import
  * @param importFromId The id of the existing AwsutilsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsutilsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsutils", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs awsutils} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsutilsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsutilsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awsutils',
      terraformGeneratorMetadata: {
        providerName: 'awsutils',
        providerVersion: '0.20.1'
      },
      terraformProviderSource: 'cloudposse/awsutils'
    });
    this._accessKey = config.accessKey;
    this._allowedAccountIds = config.allowedAccountIds;
    this._customCaBundle = config.customCaBundle;
    this._ec2MetadataServiceEndpoint = config.ec2MetadataServiceEndpoint;
    this._ec2MetadataServiceEndpointMode = config.ec2MetadataServiceEndpointMode;
    this._forbiddenAccountIds = config.forbiddenAccountIds;
    this._httpProxy = config.httpProxy;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._profile = config.profile;
    this._region = config.region;
    this._s3ForcePathStyle = config.s3ForcePathStyle;
    this._s3UsePathStyle = config.s3UsePathStyle;
    this._secretKey = config.secretKey;
    this._sharedConfigFiles = config.sharedConfigFiles;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._sharedCredentialsFiles = config.sharedCredentialsFiles;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._skipGetEc2Platforms = config.skipGetEc2Platforms;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._skipRegionValidation = config.skipRegionValidation;
    this._skipRequestingAccountId = config.skipRequestingAccountId;
    this._stsRegion = config.stsRegion;
    this._token = config.token;
    this._useDualstackEndpoint = config.useDualstackEndpoint;
    this._useFipsEndpoint = config.useFipsEndpoint;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._assumeRoleWithWebIdentity = config.assumeRoleWithWebIdentity;
    this._defaultTags = config.defaultTags;
    this._endpoints = config.endpoints;
    this._ignoreTags = config.ignoreTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[] | undefined) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // custom_ca_bundle - computed: false, optional: true, required: false
  private _customCaBundle?: string; 
  public get customCaBundle() {
    return this._customCaBundle;
  }
  public set customCaBundle(value: string | undefined) {
    this._customCaBundle = value;
  }
  public resetCustomCaBundle() {
    this._customCaBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCaBundleInput() {
    return this._customCaBundle;
  }

  // ec2_metadata_service_endpoint - computed: false, optional: true, required: false
  private _ec2MetadataServiceEndpoint?: string; 
  public get ec2MetadataServiceEndpoint() {
    return this._ec2MetadataServiceEndpoint;
  }
  public set ec2MetadataServiceEndpoint(value: string | undefined) {
    this._ec2MetadataServiceEndpoint = value;
  }
  public resetEc2MetadataServiceEndpoint() {
    this._ec2MetadataServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataServiceEndpointInput() {
    return this._ec2MetadataServiceEndpoint;
  }

  // ec2_metadata_service_endpoint_mode - computed: false, optional: true, required: false
  private _ec2MetadataServiceEndpointMode?: string; 
  public get ec2MetadataServiceEndpointMode() {
    return this._ec2MetadataServiceEndpointMode;
  }
  public set ec2MetadataServiceEndpointMode(value: string | undefined) {
    this._ec2MetadataServiceEndpointMode = value;
  }
  public resetEc2MetadataServiceEndpointMode() {
    this._ec2MetadataServiceEndpointMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataServiceEndpointModeInput() {
    return this._ec2MetadataServiceEndpointMode;
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[]; 
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[] | undefined) {
    this._forbiddenAccountIds = value;
  }
  public resetForbiddenAccountIds() {
    this._forbiddenAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAccountIdsInput() {
    return this._forbiddenAccountIds;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean | cdktf.IResolvable; 
  public get s3ForcePathStyle() {
    return this._s3ForcePathStyle;
  }
  public set s3ForcePathStyle(value: boolean | cdktf.IResolvable | undefined) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle;
  }

  // s3_use_path_style - computed: false, optional: true, required: false
  private _s3UsePathStyle?: boolean | cdktf.IResolvable; 
  public get s3UsePathStyle() {
    return this._s3UsePathStyle;
  }
  public set s3UsePathStyle(value: boolean | cdktf.IResolvable | undefined) {
    this._s3UsePathStyle = value;
  }
  public resetS3UsePathStyle() {
    this._s3UsePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UsePathStyleInput() {
    return this._s3UsePathStyle;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // shared_config_files - computed: false, optional: true, required: false
  private _sharedConfigFiles?: string[]; 
  public get sharedConfigFiles() {
    return this._sharedConfigFiles;
  }
  public set sharedConfigFiles(value: string[] | undefined) {
    this._sharedConfigFiles = value;
  }
  public resetSharedConfigFiles() {
    this._sharedConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedConfigFilesInput() {
    return this._sharedConfigFiles;
  }

  // shared_credentials_file - computed: false, optional: true, required: false
  private _sharedCredentialsFile?: string; 
  public get sharedCredentialsFile() {
    return this._sharedCredentialsFile;
  }
  public set sharedCredentialsFile(value: string | undefined) {
    this._sharedCredentialsFile = value;
  }
  public resetSharedCredentialsFile() {
    this._sharedCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFileInput() {
    return this._sharedCredentialsFile;
  }

  // shared_credentials_files - computed: false, optional: true, required: false
  private _sharedCredentialsFiles?: string[]; 
  public get sharedCredentialsFiles() {
    return this._sharedCredentialsFiles;
  }
  public set sharedCredentialsFiles(value: string[] | undefined) {
    this._sharedCredentialsFiles = value;
  }
  public resetSharedCredentialsFiles() {
    this._sharedCredentialsFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFilesInput() {
    return this._sharedCredentialsFiles;
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktf.IResolvable; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation;
  }

  // skip_get_ec2_platforms - computed: false, optional: true, required: false
  private _skipGetEc2Platforms?: boolean | cdktf.IResolvable; 
  public get skipGetEc2Platforms() {
    return this._skipGetEc2Platforms;
  }
  public set skipGetEc2Platforms(value: boolean | cdktf.IResolvable | undefined) {
    this._skipGetEc2Platforms = value;
  }
  public resetSkipGetEc2Platforms() {
    this._skipGetEc2Platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGetEc2PlatformsInput() {
    return this._skipGetEc2Platforms;
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: string; 
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: string | undefined) {
    this._skipMetadataApiCheck = value;
  }
  public resetSkipMetadataApiCheck() {
    this._skipMetadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataApiCheckInput() {
    return this._skipMetadataApiCheck;
  }

  // skip_region_validation - computed: false, optional: true, required: false
  private _skipRegionValidation?: boolean | cdktf.IResolvable; 
  public get skipRegionValidation() {
    return this._skipRegionValidation;
  }
  public set skipRegionValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipRegionValidation = value;
  }
  public resetSkipRegionValidation() {
    this._skipRegionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRegionValidationInput() {
    return this._skipRegionValidation;
  }

  // skip_requesting_account_id - computed: false, optional: true, required: false
  private _skipRequestingAccountId?: boolean | cdktf.IResolvable; 
  public get skipRequestingAccountId() {
    return this._skipRequestingAccountId;
  }
  public set skipRequestingAccountId(value: boolean | cdktf.IResolvable | undefined) {
    this._skipRequestingAccountId = value;
  }
  public resetSkipRequestingAccountId() {
    this._skipRequestingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRequestingAccountIdInput() {
    return this._skipRequestingAccountId;
  }

  // sts_region - computed: false, optional: true, required: false
  private _stsRegion?: string; 
  public get stsRegion() {
    return this._stsRegion;
  }
  public set stsRegion(value: string | undefined) {
    this._stsRegion = value;
  }
  public resetStsRegion() {
    this._stsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRegionInput() {
    return this._stsRegion;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_dualstack_endpoint - computed: false, optional: true, required: false
  private _useDualstackEndpoint?: boolean | cdktf.IResolvable; 
  public get useDualstackEndpoint() {
    return this._useDualstackEndpoint;
  }
  public set useDualstackEndpoint(value: boolean | cdktf.IResolvable | undefined) {
    this._useDualstackEndpoint = value;
  }
  public resetUseDualstackEndpoint() {
    this._useDualstackEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDualstackEndpointInput() {
    return this._useDualstackEndpoint;
  }

  // use_fips_endpoint - computed: false, optional: true, required: false
  private _useFipsEndpoint?: boolean | cdktf.IResolvable; 
  public get useFipsEndpoint() {
    return this._useFipsEndpoint;
  }
  public set useFipsEndpoint(value: boolean | cdktf.IResolvable | undefined) {
    this._useFipsEndpoint = value;
  }
  public resetUseFipsEndpoint() {
    this._useFipsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFipsEndpointInput() {
    return this._useFipsEndpoint;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsutilsProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsutilsProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // assume_role_with_web_identity - computed: false, optional: true, required: false
  private _assumeRoleWithWebIdentity?: AwsutilsProviderAssumeRoleWithWebIdentity; 
  public get assumeRoleWithWebIdentity() {
    return this._assumeRoleWithWebIdentity;
  }
  public set assumeRoleWithWebIdentity(value: AwsutilsProviderAssumeRoleWithWebIdentity | undefined) {
    this._assumeRoleWithWebIdentity = value;
  }
  public resetAssumeRoleWithWebIdentity() {
    this._assumeRoleWithWebIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithWebIdentityInput() {
    return this._assumeRoleWithWebIdentity;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: AwsutilsProviderDefaultTags; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: AwsutilsProviderDefaultTags | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsutilsProviderEndpoints[] | cdktf.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsutilsProviderEndpoints[] | cdktf.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AwsutilsProviderIgnoreTags; 
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AwsutilsProviderIgnoreTags | undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
      custom_ca_bundle: cdktf.stringToTerraform(this._customCaBundle),
      ec2_metadata_service_endpoint: cdktf.stringToTerraform(this._ec2MetadataServiceEndpoint),
      ec2_metadata_service_endpoint_mode: cdktf.stringToTerraform(this._ec2MetadataServiceEndpointMode),
      forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forbiddenAccountIds),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      s3_force_path_style: cdktf.booleanToTerraform(this._s3ForcePathStyle),
      s3_use_path_style: cdktf.booleanToTerraform(this._s3UsePathStyle),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      shared_config_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedConfigFiles),
      shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
      shared_credentials_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedCredentialsFiles),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      skip_get_ec2_platforms: cdktf.booleanToTerraform(this._skipGetEc2Platforms),
      skip_metadata_api_check: cdktf.stringToTerraform(this._skipMetadataApiCheck),
      skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
      skip_requesting_account_id: cdktf.booleanToTerraform(this._skipRequestingAccountId),
      sts_region: cdktf.stringToTerraform(this._stsRegion),
      token: cdktf.stringToTerraform(this._token),
      use_dualstack_endpoint: cdktf.booleanToTerraform(this._useDualstackEndpoint),
      use_fips_endpoint: cdktf.booleanToTerraform(this._useFipsEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: awsutilsProviderAssumeRoleToTerraform(this._assumeRole),
      assume_role_with_web_identity: awsutilsProviderAssumeRoleWithWebIdentityToTerraform(this._assumeRoleWithWebIdentity),
      default_tags: awsutilsProviderDefaultTagsToTerraform(this._defaultTags),
      endpoints: cdktf.listMapper(awsutilsProviderEndpointsToTerraform, true)(this._endpoints),
      ignore_tags: awsutilsProviderIgnoreTagsToTerraform(this._ignoreTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_ca_bundle: {
        value: cdktf.stringToHclTerraform(this._customCaBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_metadata_service_endpoint: {
        value: cdktf.stringToHclTerraform(this._ec2MetadataServiceEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_metadata_service_endpoint_mode: {
        value: cdktf.stringToHclTerraform(this._ec2MetadataServiceEndpointMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forbidden_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forbiddenAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_force_path_style: {
        value: cdktf.booleanToHclTerraform(this._s3ForcePathStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      s3_use_path_style: {
        value: cdktf.booleanToHclTerraform(this._s3UsePathStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_config_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedConfigFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_credentials_file: {
        value: cdktf.stringToHclTerraform(this._sharedCredentialsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_credentials_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedCredentialsFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_credentials_validation: {
        value: cdktf.booleanToHclTerraform(this._skipCredentialsValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_get_ec2_platforms: {
        value: cdktf.booleanToHclTerraform(this._skipGetEc2Platforms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_metadata_api_check: {
        value: cdktf.stringToHclTerraform(this._skipMetadataApiCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_region_validation: {
        value: cdktf.booleanToHclTerraform(this._skipRegionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_requesting_account_id: {
        value: cdktf.booleanToHclTerraform(this._skipRequestingAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sts_region: {
        value: cdktf.stringToHclTerraform(this._stsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_dualstack_endpoint: {
        value: cdktf.booleanToHclTerraform(this._useDualstackEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_fips_endpoint: {
        value: cdktf.booleanToHclTerraform(this._useFipsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: awsutilsProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "list",
        storageClassType: "AwsutilsProviderAssumeRoleList",
      },
      assume_role_with_web_identity: {
        value: awsutilsProviderAssumeRoleWithWebIdentityToHclTerraform(this._assumeRoleWithWebIdentity),
        isBlock: true,
        type: "list",
        storageClassType: "AwsutilsProviderAssumeRoleWithWebIdentityList",
      },
      default_tags: {
        value: awsutilsProviderDefaultTagsToHclTerraform(this._defaultTags),
        isBlock: true,
        type: "list",
        storageClassType: "AwsutilsProviderDefaultTagsList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(awsutilsProviderEndpointsToHclTerraform, true)(this._endpoints),
        isBlock: true,
        type: "set",
        storageClassType: "AwsutilsProviderEndpointsList",
      },
      ignore_tags: {
        value: awsutilsProviderIgnoreTagsToHclTerraform(this._ignoreTags),
        isBlock: true,
        type: "list",
        storageClassType: "AwsutilsProviderIgnoreTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
