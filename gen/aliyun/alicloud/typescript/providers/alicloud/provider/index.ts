// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlicloudProviderConfig {
  /**
  * The access key for API operations. You can retrieve this from the 'Security Management' section of the Alibaba Cloud console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#access_key AlicloudProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * The account ID for some service API operations. You can retrieve this from the 'Security Settings' section of the Alibaba Cloud console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#account_id AlicloudProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#account_type AlicloudProvider#account_type}
  */
  readonly accountType?: string;
  /**
  * The maximum timeout of the client connection server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#client_connect_timeout AlicloudProvider#client_connect_timeout}
  */
  readonly clientConnectTimeout?: number;
  /**
  * The maximum timeout of the client read request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#client_read_timeout AlicloudProvider#client_read_timeout}
  */
  readonly clientReadTimeout?: number;
  /**
  * Use this to mark a terraform configuration file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#configuration_source AlicloudProvider#configuration_source}
  */
  readonly configurationSource?: string;
  /**
  * The URI of sidecar credentials service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#credentials_uri AlicloudProvider#credentials_uri}
  */
  readonly credentialsUri?: string;
  /**
  * The RAM Role Name attached on a ECS instance for API operations. You can retrieve this from the 'Access Control' section of the Alibaba Cloud console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ecs_role_name AlicloudProvider#ecs_role_name}
  */
  readonly ecsRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#fc AlicloudProvider#fc}
  */
  readonly fc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#log_endpoint AlicloudProvider#log_endpoint}
  */
  readonly logEndpoint?: string;
  /**
  * The maximum retry timeout of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#max_retry_timeout AlicloudProvider#max_retry_timeout}
  */
  readonly maxRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#mns_endpoint AlicloudProvider#mns_endpoint}
  */
  readonly mnsEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ots_instance_name AlicloudProvider#ots_instance_name}
  */
  readonly otsInstanceName?: string;
  /**
  * The profile for API operations. If not set, the default profile created with `aliyun configure` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#profile AlicloudProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#protocol AlicloudProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * The region where Alibaba Cloud operations will take place. Examples are cn-beijing, cn-hangzhou, eu-central-1, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#region AlicloudProvider#region}
  */
  readonly region?: string;
  /**
  * The secret key for API operations. You can retrieve this from the 'Security Management' section of the Alibaba Cloud console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#secret_key AlicloudProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The security transport for the assume role invoking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#secure_transport AlicloudProvider#secure_transport}
  */
  readonly secureTransport?: string;
  /**
  * security token. A security token is only required if you are using Security Token Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#security_token AlicloudProvider#security_token}
  */
  readonly securityToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#security_transport AlicloudProvider#security_transport}
  */
  readonly securityTransport?: string;
  /**
  * The path to the shared credentials file. If not set this defaults to ~/.aliyun/config.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#shared_credentials_file AlicloudProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * Skip static validation of region ID. Used by users of alternative AlibabaCloud-like APIs or users w/ access to regions that are not public (yet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#skip_region_validation AlicloudProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktf.IResolvable;
  /**
  * The source ip for the assume role invoking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#source_ip AlicloudProvider#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#alias AlicloudProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#assume_role AlicloudProvider#assume_role}
  */
  readonly assumeRole?: AlicloudProviderAssumeRole;
  /**
  * assume_role_with_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#assume_role_with_oidc AlicloudProvider#assume_role_with_oidc}
  */
  readonly assumeRoleWithOidc?: AlicloudProviderAssumeRoleWithOidc;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#endpoints AlicloudProvider#endpoints}
  */
  readonly endpoints?: AlicloudProviderEndpoints[] | cdktf.IResolvable;
  /**
  * sign_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#sign_version AlicloudProvider#sign_version}
  */
  readonly signVersion?: AlicloudProviderSignVersion;
}
export interface AlicloudProviderAssumeRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#external_id AlicloudProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * The permissions applied when assuming a role. You cannot use, this policy to grant further permissions that are in excess to those of the, role that is being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#policy AlicloudProvider#policy}
  */
  readonly policy?: string;
  /**
  * The ARN of a RAM role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#role_arn AlicloudProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * The time after which the established session for assuming role expires. Valid value range: [900-3600] seconds. Default to 0 (in this case Alicloud use own default value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#session_expiration AlicloudProvider#session_expiration}
  */
  readonly sessionExpiration?: number;
  /**
  * The session name to use when assuming the role. If omitted, `terraform` is passed to the AssumeRole call as session name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#session_name AlicloudProvider#session_name}
  */
  readonly sessionName?: string;
}

export function alicloudProviderAssumeRoleToTerraform(struct?: AlicloudProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_expiration: cdktf.numberToTerraform(struct!.sessionExpiration),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function alicloudProviderAssumeRoleToHclTerraform(struct?: AlicloudProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_expiration: {
      value: cdktf.numberToHclTerraform(struct!.sessionExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AlicloudProviderAssumeRoleWithOidc {
  /**
  * ARN of the OIDC IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oidc_provider_arn AlicloudProvider#oidc_provider_arn}
  */
  readonly oidcProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oidc_token AlicloudProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The file path of OIDC token that is issued by the external IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oidc_token_file AlicloudProvider#oidc_token_file}
  */
  readonly oidcTokenFile?: string;
  /**
  * The policy that specifies the permissions of the returned STS token. You can use this parameter to grant the STS token fewer permissions than the permissions granted to the RAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#policy AlicloudProvider#policy}
  */
  readonly policy?: string;
  /**
  * ARN of a RAM role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#role_arn AlicloudProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The custom name of the role session. Set this parameter based on your business requirements. In most cases, this parameter is set to the identity of the user who calls the operation, for example, the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#role_session_name AlicloudProvider#role_session_name}
  */
  readonly roleSessionName?: string;
  /**
  * The validity period of the STS token. Unit: seconds. Default value: 3600. Minimum value: 900. Maximum value: the value of the MaxSessionDuration parameter when creating a ram role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#session_expiration AlicloudProvider#session_expiration}
  */
  readonly sessionExpiration?: number;
}

export function alicloudProviderAssumeRoleWithOidcToTerraform(struct?: AlicloudProviderAssumeRoleWithOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_provider_arn: cdktf.stringToTerraform(struct!.oidcProviderArn),
    oidc_token: cdktf.stringToTerraform(struct!.oidcToken),
    oidc_token_file: cdktf.stringToTerraform(struct!.oidcTokenFile),
    policy: cdktf.stringToTerraform(struct!.policy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_session_name: cdktf.stringToTerraform(struct!.roleSessionName),
    session_expiration: cdktf.numberToTerraform(struct!.sessionExpiration),
  }
}


export function alicloudProviderAssumeRoleWithOidcToHclTerraform(struct?: AlicloudProviderAssumeRoleWithOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_provider_arn: {
      value: cdktf.stringToHclTerraform(struct!.oidcProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_token: {
      value: cdktf.stringToHclTerraform(struct!.oidcToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_token_file: {
      value: cdktf.stringToHclTerraform(struct!.oidcTokenFile),
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_session_name: {
      value: cdktf.stringToHclTerraform(struct!.roleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_expiration: {
      value: cdktf.numberToHclTerraform(struct!.sessionExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AlicloudProviderEndpoints {
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom acr endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#acr AlicloudProvider#acr}
  */
  readonly acr?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Actiontrail endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#actiontrail AlicloudProvider#actiontrail}
  */
  readonly actiontrail?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom AnalyticDB endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#adb AlicloudProvider#adb}
  */
  readonly adb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#aiworkspace AlicloudProvider#aiworkspace}
  */
  readonly aiworkspace?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom alb endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#alb AlicloudProvider#alb}
  */
  readonly alb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom alidfs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#alidfs AlicloudProvider#alidfs}
  */
  readonly alidfs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom alidns endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#alidns AlicloudProvider#alidns}
  */
  readonly alidns?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ALIKAFKA endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#alikafka AlicloudProvider#alikafka}
  */
  readonly alikafka?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom onsproxy endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#amqp AlicloudProvider#amqp}
  */
  readonly amqp?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ddosbasic endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#antiddos_public AlicloudProvider#antiddos_public}
  */
  readonly antiddosPublic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#apig AlicloudProvider#apig}
  */
  readonly apig?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Api Gateway endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#apigateway AlicloudProvider#apigateway}
  */
  readonly apigateway?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom arms endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#arms AlicloudProvider#arms}
  */
  readonly arms?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom bastionhost endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#bastionhost AlicloudProvider#bastionhost}
  */
  readonly bastionhost?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom beebot endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#beebot AlicloudProvider#beebot}
  */
  readonly beebot?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom bpstudio endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#bpstudio AlicloudProvider#bpstudio}
  */
  readonly bpstudio?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom brain_industrial endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#brain_industrial AlicloudProvider#brain_industrial}
  */
  readonly brainIndustrial?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom BSSOPENAPI endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#bssopenapi AlicloudProvider#bssopenapi}
  */
  readonly bssopenapi?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom CAS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cas AlicloudProvider#cas}
  */
  readonly cas?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cassandra endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cassandra AlicloudProvider#cassandra}
  */
  readonly cassandra?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cbn endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cbn AlicloudProvider#cbn}
  */
  readonly cbn?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cbs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cbs AlicloudProvider#cbs}
  */
  readonly cbs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cddc endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cddc AlicloudProvider#cddc}
  */
  readonly cddc?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom CDN endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cdn AlicloudProvider#cdn}
  */
  readonly cdn?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cds endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cds AlicloudProvider#cds}
  */
  readonly cds?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom beebot endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#chatbot AlicloudProvider#chatbot}
  */
  readonly chatbot?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom clickhouse endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#clickhouse AlicloudProvider#clickhouse}
  */
  readonly clickhouse?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Api Gateway endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cloudapi AlicloudProvider#cloudapi}
  */
  readonly cloudapi?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cloudauth endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cloudauth AlicloudProvider#cloudauth}
  */
  readonly cloudauth?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cloudfirewall endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cloudfirewall AlicloudProvider#cloudfirewall}
  */
  readonly cloudfirewall?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cloudfw endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cloudfw AlicloudProvider#cloudfw}
  */
  readonly cloudfw?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cloudphone endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cloudphone AlicloudProvider#cloudphone}
  */
  readonly cloudphone?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cloudsso endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cloudsso AlicloudProvider#cloudsso}
  */
  readonly cloudsso?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Cloud Monitor endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cms AlicloudProvider#cms}
  */
  readonly cms?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom computenest endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#computenest AlicloudProvider#computenest}
  */
  readonly computenest?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom config endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#config AlicloudProvider#config}
  */
  readonly config?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Container Registry endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cr AlicloudProvider#cr}
  */
  readonly cr?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Container Service endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#cs AlicloudProvider#cs}
  */
  readonly cs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom das endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#das AlicloudProvider#das}
  */
  readonly das?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Datahub endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#datahub AlicloudProvider#datahub}
  */
  readonly datahub?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dataworkspublic endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dataworks_public AlicloudProvider#dataworks_public}
  */
  readonly dataworksPublic?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dataworkspublic endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dataworkspublic AlicloudProvider#dataworkspublic}
  */
  readonly dataworkspublic?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dbfs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dbfs AlicloudProvider#dbfs}
  */
  readonly dbfs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom cbs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dbs AlicloudProvider#dbs}
  */
  readonly dbs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dcdn endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dcdn AlicloudProvider#dcdn}
  */
  readonly dcdn?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ddosbasic endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ddosbasic AlicloudProvider#ddosbasic}
  */
  readonly ddosbasic?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom DDOSBGP endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ddosbgp AlicloudProvider#ddosbgp}
  */
  readonly ddosbgp?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom DDOSCOO endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ddoscoo AlicloudProvider#ddoscoo}
  */
  readonly ddoscoo?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom MongoDB endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dds AlicloudProvider#dds}
  */
  readonly dds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#devops_rdc AlicloudProvider#devops_rdc}
  */
  readonly devopsRdc?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom devopsrdc endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#devopsrdc AlicloudProvider#devopsrdc}
  */
  readonly devopsrdc?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom alidfs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dfs AlicloudProvider#dfs}
  */
  readonly dfs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dg endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dg AlicloudProvider#dg}
  */
  readonly dg?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dm endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dm AlicloudProvider#dm}
  */
  readonly dm?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dms_enterprise endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dms_enterprise AlicloudProvider#dms_enterprise}
  */
  readonly dmsEnterprise?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dmsenterprise endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dmsenterprise AlicloudProvider#dmsenterprise}
  */
  readonly dmsenterprise?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom DNS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dns AlicloudProvider#dns}
  */
  readonly dns?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom DRDS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#drds AlicloudProvider#drds}
  */
  readonly drds?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dts endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dts AlicloudProvider#dts}
  */
  readonly dts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dysms AlicloudProvider#dysms}
  */
  readonly dysms?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom dysmsapi endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#dysmsapi AlicloudProvider#dysmsapi}
  */
  readonly dysmsapi?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom eais endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eais AlicloudProvider#eais}
  */
  readonly eais?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ebs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ebs AlicloudProvider#ebs}
  */
  readonly ebs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom gwsecd endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ecd AlicloudProvider#ecd}
  */
  readonly ecd?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom eci endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eci AlicloudProvider#eci}
  */
  readonly eci?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ECS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ecs AlicloudProvider#ecs}
  */
  readonly ecs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom edas endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#edas AlicloudProvider#edas}
  */
  readonly edas?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom edasschedulerx endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#edasschedulerx AlicloudProvider#edasschedulerx}
  */
  readonly edasschedulerx?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom edsuser endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eds_user AlicloudProvider#eds_user}
  */
  readonly edsUser?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom edsuser endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#edsuser AlicloudProvider#edsuser}
  */
  readonly edsuser?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom eflo endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eflo AlicloudProvider#eflo}
  */
  readonly eflo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eflo_cnp AlicloudProvider#eflo_cnp}
  */
  readonly efloCnp?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom efloctrl endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eflo_controller AlicloudProvider#eflo_controller}
  */
  readonly efloController?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ehpc endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ehpc AlicloudProvider#ehpc}
  */
  readonly ehpc?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ehs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ehs AlicloudProvider#ehs}
  */
  readonly ehs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom eipanycast endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eipanycast AlicloudProvider#eipanycast}
  */
  readonly eipanycast?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Elasticsearch endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#elasticsearch AlicloudProvider#elasticsearch}
  */
  readonly elasticsearch?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom EMR endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#emr AlicloudProvider#emr}
  */
  readonly emr?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ens endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ens AlicloudProvider#ens}
  */
  readonly ens?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#esa AlicloudProvider#esa}
  */
  readonly esa?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Autoscaling endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ess AlicloudProvider#ess}
  */
  readonly ess?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom eventbridge_share endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#eventbridge AlicloudProvider#eventbridge}
  */
  readonly eventbridge?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Function Computing endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#fc AlicloudProvider#fc}
  */
  readonly fc?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Function Computing endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#fc_open AlicloudProvider#fc_open}
  */
  readonly fcOpen?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom fnf endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#fnf AlicloudProvider#fnf}
  */
  readonly fnf?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ga endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ga AlicloudProvider#ga}
  */
  readonly ga?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom gaplus endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#gaplus AlicloudProvider#gaplus}
  */
  readonly gaplus?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom gds endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#gdb AlicloudProvider#gdb}
  */
  readonly gdb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom gds endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#gds AlicloudProvider#gds}
  */
  readonly gds?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom GPDB endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#gpdb AlicloudProvider#gpdb}
  */
  readonly gpdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#gwlb AlicloudProvider#gwlb}
  */
  readonly gwlb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom gwsecd endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#gwsecd AlicloudProvider#gwsecd}
  */
  readonly gwsecd?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom hbr endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#hbr AlicloudProvider#hbr}
  */
  readonly hbr?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom hcs_sgw endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#hcs_sgw AlicloudProvider#hcs_sgw}
  */
  readonly hcsSgw?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom hitsdb endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#hitsdb AlicloudProvider#hitsdb}
  */
  readonly hitsdb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom imm endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#imm AlicloudProvider#imm}
  */
  readonly imm?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom imp endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#imp AlicloudProvider#imp}
  */
  readonly imp?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ims endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ims AlicloudProvider#ims}
  */
  readonly ims?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom iot endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#iot AlicloudProvider#iot}
  */
  readonly iot?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom KMS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#kms AlicloudProvider#kms}
  */
  readonly kms?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom R-KVStore endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#kvstore AlicloudProvider#kvstore}
  */
  readonly kvstore?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Location Service endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#location AlicloudProvider#location}
  */
  readonly location?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Log Service endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#log AlicloudProvider#log}
  */
  readonly log?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Market Place endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#market AlicloudProvider#market}
  */
  readonly market?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom MaxCompute endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#maxcompute AlicloudProvider#maxcompute}
  */
  readonly maxcompute?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom mhub endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#mhub AlicloudProvider#mhub}
  */
  readonly mhub?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom MNS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#mns AlicloudProvider#mns}
  */
  readonly mns?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom MNS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#mns_open AlicloudProvider#mns_open}
  */
  readonly mnsOpen?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom mscopensubscription endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#mscopensubscription AlicloudProvider#mscopensubscription}
  */
  readonly mscopensubscription?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom mse endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#mse AlicloudProvider#mse}
  */
  readonly mse?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom NAS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#nas AlicloudProvider#nas}
  */
  readonly nas?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom nlb endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#nlb AlicloudProvider#nlb}
  */
  readonly nlb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom oceanbase endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oceanbase AlicloudProvider#oceanbase}
  */
  readonly oceanbase?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom oceanbase endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oceanbasepro AlicloudProvider#oceanbasepro}
  */
  readonly oceanbasepro?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ONS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ons AlicloudProvider#ons}
  */
  readonly ons?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom onsproxy endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#onsproxy AlicloudProvider#onsproxy}
  */
  readonly onsproxy?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom oos endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oos AlicloudProvider#oos}
  */
  readonly oos?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom opensearch endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#opensearch AlicloudProvider#opensearch}
  */
  readonly opensearch?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom OSS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oss AlicloudProvider#oss}
  */
  readonly oss?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Table Store endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ots AlicloudProvider#ots}
  */
  readonly ots?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom PolarDB endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#polardb AlicloudProvider#polardb}
  */
  readonly polardb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom DRDS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#polardbx AlicloudProvider#polardbx}
  */
  readonly polardbx?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom privatelink endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#privatelink AlicloudProvider#privatelink}
  */
  readonly privatelink?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom Private Zone endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#pvtz AlicloudProvider#pvtz}
  */
  readonly pvtz?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom quickbi endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#quickbi AlicloudProvider#quickbi}
  */
  readonly quickbi?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom quickbi endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#quickbi_public AlicloudProvider#quickbi_public}
  */
  readonly quickbiPublic?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom quotas endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#quotas AlicloudProvider#quotas}
  */
  readonly quotas?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom r_kvstore endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#r_kvstore AlicloudProvider#r_kvstore}
  */
  readonly rKvstore?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom RAM endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ram AlicloudProvider#ram}
  */
  readonly ram?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom RDS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#rds AlicloudProvider#rds}
  */
  readonly rds?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom redisa endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#redisa AlicloudProvider#redisa}
  */
  readonly redisa?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom resourcemanager endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#resourcemanager AlicloudProvider#resourcemanager}
  */
  readonly resourcemanager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#resourcesharing AlicloudProvider#resourcesharing}
  */
  readonly resourcesharing?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom resourcesharing endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ressharing AlicloudProvider#ressharing}
  */
  readonly ressharing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#rocketmq AlicloudProvider#rocketmq}
  */
  readonly rocketmq?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom ros endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#ros AlicloudProvider#ros}
  */
  readonly ros?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom serverless endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#sae AlicloudProvider#sae}
  */
  readonly sae?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom sas endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#sas AlicloudProvider#sas}
  */
  readonly sas?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom scdn endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#scdn AlicloudProvider#scdn}
  */
  readonly scdn?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom edasschedulerx endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#schedulerx2 AlicloudProvider#schedulerx2}
  */
  readonly schedulerx2?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom sddp endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#sddp AlicloudProvider#sddp}
  */
  readonly sddp?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom selectdb endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#selectdb AlicloudProvider#selectdb}
  */
  readonly selectdb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom serverless endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#serverless AlicloudProvider#serverless}
  */
  readonly serverless?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom srvcatalog endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#servicecatalog AlicloudProvider#servicecatalog}
  */
  readonly servicecatalog?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom servicemesh endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#servicemesh AlicloudProvider#servicemesh}
  */
  readonly servicemesh?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom sgw endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#sgw AlicloudProvider#sgw}
  */
  readonly sgw?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom SLB endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#slb AlicloudProvider#slb}
  */
  readonly slb?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom smartag endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#smartag AlicloudProvider#smartag}
  */
  readonly smartag?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom srvcatalog endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#srvcatalog AlicloudProvider#srvcatalog}
  */
  readonly srvcatalog?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom STS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#sts AlicloudProvider#sts}
  */
  readonly sts?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom swas endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#swas AlicloudProvider#swas}
  */
  readonly swas?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom swas endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#swas_open AlicloudProvider#swas_open}
  */
  readonly swasOpen?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom tag endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#tag AlicloudProvider#tag}
  */
  readonly tag?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom vod endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#vod AlicloudProvider#vod}
  */
  readonly vod?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom VPC and VPN endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#vpc AlicloudProvider#vpc}
  */
  readonly vpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#vpcipam AlicloudProvider#vpcipam}
  */
  readonly vpcipam?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom vpcpeer endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#vpcpeer AlicloudProvider#vpcpeer}
  */
  readonly vpcpeer?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom vs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#vs AlicloudProvider#vs}
  */
  readonly vs?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom waf endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#waf AlicloudProvider#waf}
  */
  readonly waf?: string;
  /**
  * Use this to override the default endpoint URL constructed from the `region`. It's typically used to connect to custom waf_openapi endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#waf_openapi AlicloudProvider#waf_openapi}
  */
  readonly wafOpenapi?: string;
}

export function alicloudProviderEndpointsToTerraform(struct?: AlicloudProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr: cdktf.stringToTerraform(struct!.acr),
    actiontrail: cdktf.stringToTerraform(struct!.actiontrail),
    adb: cdktf.stringToTerraform(struct!.adb),
    aiworkspace: cdktf.stringToTerraform(struct!.aiworkspace),
    alb: cdktf.stringToTerraform(struct!.alb),
    alidfs: cdktf.stringToTerraform(struct!.alidfs),
    alidns: cdktf.stringToTerraform(struct!.alidns),
    alikafka: cdktf.stringToTerraform(struct!.alikafka),
    amqp: cdktf.stringToTerraform(struct!.amqp),
    antiddos_public: cdktf.stringToTerraform(struct!.antiddosPublic),
    apig: cdktf.stringToTerraform(struct!.apig),
    apigateway: cdktf.stringToTerraform(struct!.apigateway),
    arms: cdktf.stringToTerraform(struct!.arms),
    bastionhost: cdktf.stringToTerraform(struct!.bastionhost),
    beebot: cdktf.stringToTerraform(struct!.beebot),
    bpstudio: cdktf.stringToTerraform(struct!.bpstudio),
    brain_industrial: cdktf.stringToTerraform(struct!.brainIndustrial),
    bssopenapi: cdktf.stringToTerraform(struct!.bssopenapi),
    cas: cdktf.stringToTerraform(struct!.cas),
    cassandra: cdktf.stringToTerraform(struct!.cassandra),
    cbn: cdktf.stringToTerraform(struct!.cbn),
    cbs: cdktf.stringToTerraform(struct!.cbs),
    cddc: cdktf.stringToTerraform(struct!.cddc),
    cdn: cdktf.stringToTerraform(struct!.cdn),
    cds: cdktf.stringToTerraform(struct!.cds),
    chatbot: cdktf.stringToTerraform(struct!.chatbot),
    clickhouse: cdktf.stringToTerraform(struct!.clickhouse),
    cloudapi: cdktf.stringToTerraform(struct!.cloudapi),
    cloudauth: cdktf.stringToTerraform(struct!.cloudauth),
    cloudfirewall: cdktf.stringToTerraform(struct!.cloudfirewall),
    cloudfw: cdktf.stringToTerraform(struct!.cloudfw),
    cloudphone: cdktf.stringToTerraform(struct!.cloudphone),
    cloudsso: cdktf.stringToTerraform(struct!.cloudsso),
    cms: cdktf.stringToTerraform(struct!.cms),
    computenest: cdktf.stringToTerraform(struct!.computenest),
    config: cdktf.stringToTerraform(struct!.config),
    cr: cdktf.stringToTerraform(struct!.cr),
    cs: cdktf.stringToTerraform(struct!.cs),
    das: cdktf.stringToTerraform(struct!.das),
    datahub: cdktf.stringToTerraform(struct!.datahub),
    dataworks_public: cdktf.stringToTerraform(struct!.dataworksPublic),
    dataworkspublic: cdktf.stringToTerraform(struct!.dataworkspublic),
    dbfs: cdktf.stringToTerraform(struct!.dbfs),
    dbs: cdktf.stringToTerraform(struct!.dbs),
    dcdn: cdktf.stringToTerraform(struct!.dcdn),
    ddosbasic: cdktf.stringToTerraform(struct!.ddosbasic),
    ddosbgp: cdktf.stringToTerraform(struct!.ddosbgp),
    ddoscoo: cdktf.stringToTerraform(struct!.ddoscoo),
    dds: cdktf.stringToTerraform(struct!.dds),
    devops_rdc: cdktf.stringToTerraform(struct!.devopsRdc),
    devopsrdc: cdktf.stringToTerraform(struct!.devopsrdc),
    dfs: cdktf.stringToTerraform(struct!.dfs),
    dg: cdktf.stringToTerraform(struct!.dg),
    dm: cdktf.stringToTerraform(struct!.dm),
    dms_enterprise: cdktf.stringToTerraform(struct!.dmsEnterprise),
    dmsenterprise: cdktf.stringToTerraform(struct!.dmsenterprise),
    dns: cdktf.stringToTerraform(struct!.dns),
    drds: cdktf.stringToTerraform(struct!.drds),
    dts: cdktf.stringToTerraform(struct!.dts),
    dysms: cdktf.stringToTerraform(struct!.dysms),
    dysmsapi: cdktf.stringToTerraform(struct!.dysmsapi),
    eais: cdktf.stringToTerraform(struct!.eais),
    ebs: cdktf.stringToTerraform(struct!.ebs),
    ecd: cdktf.stringToTerraform(struct!.ecd),
    eci: cdktf.stringToTerraform(struct!.eci),
    ecs: cdktf.stringToTerraform(struct!.ecs),
    edas: cdktf.stringToTerraform(struct!.edas),
    edasschedulerx: cdktf.stringToTerraform(struct!.edasschedulerx),
    eds_user: cdktf.stringToTerraform(struct!.edsUser),
    edsuser: cdktf.stringToTerraform(struct!.edsuser),
    eflo: cdktf.stringToTerraform(struct!.eflo),
    eflo_cnp: cdktf.stringToTerraform(struct!.efloCnp),
    eflo_controller: cdktf.stringToTerraform(struct!.efloController),
    ehpc: cdktf.stringToTerraform(struct!.ehpc),
    ehs: cdktf.stringToTerraform(struct!.ehs),
    eipanycast: cdktf.stringToTerraform(struct!.eipanycast),
    elasticsearch: cdktf.stringToTerraform(struct!.elasticsearch),
    emr: cdktf.stringToTerraform(struct!.emr),
    ens: cdktf.stringToTerraform(struct!.ens),
    esa: cdktf.stringToTerraform(struct!.esa),
    ess: cdktf.stringToTerraform(struct!.ess),
    eventbridge: cdktf.stringToTerraform(struct!.eventbridge),
    fc: cdktf.stringToTerraform(struct!.fc),
    fc_open: cdktf.stringToTerraform(struct!.fcOpen),
    fnf: cdktf.stringToTerraform(struct!.fnf),
    ga: cdktf.stringToTerraform(struct!.ga),
    gaplus: cdktf.stringToTerraform(struct!.gaplus),
    gdb: cdktf.stringToTerraform(struct!.gdb),
    gds: cdktf.stringToTerraform(struct!.gds),
    gpdb: cdktf.stringToTerraform(struct!.gpdb),
    gwlb: cdktf.stringToTerraform(struct!.gwlb),
    gwsecd: cdktf.stringToTerraform(struct!.gwsecd),
    hbr: cdktf.stringToTerraform(struct!.hbr),
    hcs_sgw: cdktf.stringToTerraform(struct!.hcsSgw),
    hitsdb: cdktf.stringToTerraform(struct!.hitsdb),
    imm: cdktf.stringToTerraform(struct!.imm),
    imp: cdktf.stringToTerraform(struct!.imp),
    ims: cdktf.stringToTerraform(struct!.ims),
    iot: cdktf.stringToTerraform(struct!.iot),
    kms: cdktf.stringToTerraform(struct!.kms),
    kvstore: cdktf.stringToTerraform(struct!.kvstore),
    location: cdktf.stringToTerraform(struct!.location),
    log: cdktf.stringToTerraform(struct!.log),
    market: cdktf.stringToTerraform(struct!.market),
    maxcompute: cdktf.stringToTerraform(struct!.maxcompute),
    mhub: cdktf.stringToTerraform(struct!.mhub),
    mns: cdktf.stringToTerraform(struct!.mns),
    mns_open: cdktf.stringToTerraform(struct!.mnsOpen),
    mscopensubscription: cdktf.stringToTerraform(struct!.mscopensubscription),
    mse: cdktf.stringToTerraform(struct!.mse),
    nas: cdktf.stringToTerraform(struct!.nas),
    nlb: cdktf.stringToTerraform(struct!.nlb),
    oceanbase: cdktf.stringToTerraform(struct!.oceanbase),
    oceanbasepro: cdktf.stringToTerraform(struct!.oceanbasepro),
    ons: cdktf.stringToTerraform(struct!.ons),
    onsproxy: cdktf.stringToTerraform(struct!.onsproxy),
    oos: cdktf.stringToTerraform(struct!.oos),
    opensearch: cdktf.stringToTerraform(struct!.opensearch),
    oss: cdktf.stringToTerraform(struct!.oss),
    ots: cdktf.stringToTerraform(struct!.ots),
    polardb: cdktf.stringToTerraform(struct!.polardb),
    polardbx: cdktf.stringToTerraform(struct!.polardbx),
    privatelink: cdktf.stringToTerraform(struct!.privatelink),
    pvtz: cdktf.stringToTerraform(struct!.pvtz),
    quickbi: cdktf.stringToTerraform(struct!.quickbi),
    quickbi_public: cdktf.stringToTerraform(struct!.quickbiPublic),
    quotas: cdktf.stringToTerraform(struct!.quotas),
    r_kvstore: cdktf.stringToTerraform(struct!.rKvstore),
    ram: cdktf.stringToTerraform(struct!.ram),
    rds: cdktf.stringToTerraform(struct!.rds),
    redisa: cdktf.stringToTerraform(struct!.redisa),
    resourcemanager: cdktf.stringToTerraform(struct!.resourcemanager),
    resourcesharing: cdktf.stringToTerraform(struct!.resourcesharing),
    ressharing: cdktf.stringToTerraform(struct!.ressharing),
    rocketmq: cdktf.stringToTerraform(struct!.rocketmq),
    ros: cdktf.stringToTerraform(struct!.ros),
    sae: cdktf.stringToTerraform(struct!.sae),
    sas: cdktf.stringToTerraform(struct!.sas),
    scdn: cdktf.stringToTerraform(struct!.scdn),
    schedulerx2: cdktf.stringToTerraform(struct!.schedulerx2),
    sddp: cdktf.stringToTerraform(struct!.sddp),
    selectdb: cdktf.stringToTerraform(struct!.selectdb),
    serverless: cdktf.stringToTerraform(struct!.serverless),
    servicecatalog: cdktf.stringToTerraform(struct!.servicecatalog),
    servicemesh: cdktf.stringToTerraform(struct!.servicemesh),
    sgw: cdktf.stringToTerraform(struct!.sgw),
    slb: cdktf.stringToTerraform(struct!.slb),
    smartag: cdktf.stringToTerraform(struct!.smartag),
    srvcatalog: cdktf.stringToTerraform(struct!.srvcatalog),
    sts: cdktf.stringToTerraform(struct!.sts),
    swas: cdktf.stringToTerraform(struct!.swas),
    swas_open: cdktf.stringToTerraform(struct!.swasOpen),
    tag: cdktf.stringToTerraform(struct!.tag),
    vod: cdktf.stringToTerraform(struct!.vod),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    vpcipam: cdktf.stringToTerraform(struct!.vpcipam),
    vpcpeer: cdktf.stringToTerraform(struct!.vpcpeer),
    vs: cdktf.stringToTerraform(struct!.vs),
    waf: cdktf.stringToTerraform(struct!.waf),
    waf_openapi: cdktf.stringToTerraform(struct!.wafOpenapi),
  }
}


export function alicloudProviderEndpointsToHclTerraform(struct?: AlicloudProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr: {
      value: cdktf.stringToHclTerraform(struct!.acr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actiontrail: {
      value: cdktf.stringToHclTerraform(struct!.actiontrail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adb: {
      value: cdktf.stringToHclTerraform(struct!.adb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aiworkspace: {
      value: cdktf.stringToHclTerraform(struct!.aiworkspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alb: {
      value: cdktf.stringToHclTerraform(struct!.alb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alidfs: {
      value: cdktf.stringToHclTerraform(struct!.alidfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alidns: {
      value: cdktf.stringToHclTerraform(struct!.alidns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alikafka: {
      value: cdktf.stringToHclTerraform(struct!.alikafka),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amqp: {
      value: cdktf.stringToHclTerraform(struct!.amqp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antiddos_public: {
      value: cdktf.stringToHclTerraform(struct!.antiddosPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apig: {
      value: cdktf.stringToHclTerraform(struct!.apig),
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
    arms: {
      value: cdktf.stringToHclTerraform(struct!.arms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastionhost: {
      value: cdktf.stringToHclTerraform(struct!.bastionhost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beebot: {
      value: cdktf.stringToHclTerraform(struct!.beebot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpstudio: {
      value: cdktf.stringToHclTerraform(struct!.bpstudio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    brain_industrial: {
      value: cdktf.stringToHclTerraform(struct!.brainIndustrial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bssopenapi: {
      value: cdktf.stringToHclTerraform(struct!.bssopenapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cas: {
      value: cdktf.stringToHclTerraform(struct!.cas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cassandra: {
      value: cdktf.stringToHclTerraform(struct!.cassandra),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cbn: {
      value: cdktf.stringToHclTerraform(struct!.cbn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cbs: {
      value: cdktf.stringToHclTerraform(struct!.cbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cddc: {
      value: cdktf.stringToHclTerraform(struct!.cddc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdn: {
      value: cdktf.stringToHclTerraform(struct!.cdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cds: {
      value: cdktf.stringToHclTerraform(struct!.cds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chatbot: {
      value: cdktf.stringToHclTerraform(struct!.chatbot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse: {
      value: cdktf.stringToHclTerraform(struct!.clickhouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudapi: {
      value: cdktf.stringToHclTerraform(struct!.cloudapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudauth: {
      value: cdktf.stringToHclTerraform(struct!.cloudauth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfirewall: {
      value: cdktf.stringToHclTerraform(struct!.cloudfirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfw: {
      value: cdktf.stringToHclTerraform(struct!.cloudfw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudphone: {
      value: cdktf.stringToHclTerraform(struct!.cloudphone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudsso: {
      value: cdktf.stringToHclTerraform(struct!.cloudsso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cms: {
      value: cdktf.stringToHclTerraform(struct!.cms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    computenest: {
      value: cdktf.stringToHclTerraform(struct!.computenest),
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
    cr: {
      value: cdktf.stringToHclTerraform(struct!.cr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cs: {
      value: cdktf.stringToHclTerraform(struct!.cs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    das: {
      value: cdktf.stringToHclTerraform(struct!.das),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datahub: {
      value: cdktf.stringToHclTerraform(struct!.datahub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataworks_public: {
      value: cdktf.stringToHclTerraform(struct!.dataworksPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataworkspublic: {
      value: cdktf.stringToHclTerraform(struct!.dataworkspublic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbfs: {
      value: cdktf.stringToHclTerraform(struct!.dbfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbs: {
      value: cdktf.stringToHclTerraform(struct!.dbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dcdn: {
      value: cdktf.stringToHclTerraform(struct!.dcdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddosbasic: {
      value: cdktf.stringToHclTerraform(struct!.ddosbasic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddosbgp: {
      value: cdktf.stringToHclTerraform(struct!.ddosbgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddoscoo: {
      value: cdktf.stringToHclTerraform(struct!.ddoscoo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dds: {
      value: cdktf.stringToHclTerraform(struct!.dds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devops_rdc: {
      value: cdktf.stringToHclTerraform(struct!.devopsRdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devopsrdc: {
      value: cdktf.stringToHclTerraform(struct!.devopsrdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dfs: {
      value: cdktf.stringToHclTerraform(struct!.dfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dg: {
      value: cdktf.stringToHclTerraform(struct!.dg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dm: {
      value: cdktf.stringToHclTerraform(struct!.dm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dms_enterprise: {
      value: cdktf.stringToHclTerraform(struct!.dmsEnterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dmsenterprise: {
      value: cdktf.stringToHclTerraform(struct!.dmsenterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drds: {
      value: cdktf.stringToHclTerraform(struct!.drds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dts: {
      value: cdktf.stringToHclTerraform(struct!.dts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dysms: {
      value: cdktf.stringToHclTerraform(struct!.dysms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dysmsapi: {
      value: cdktf.stringToHclTerraform(struct!.dysmsapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eais: {
      value: cdktf.stringToHclTerraform(struct!.eais),
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
    ecd: {
      value: cdktf.stringToHclTerraform(struct!.ecd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eci: {
      value: cdktf.stringToHclTerraform(struct!.eci),
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
    edas: {
      value: cdktf.stringToHclTerraform(struct!.edas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edasschedulerx: {
      value: cdktf.stringToHclTerraform(struct!.edasschedulerx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eds_user: {
      value: cdktf.stringToHclTerraform(struct!.edsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edsuser: {
      value: cdktf.stringToHclTerraform(struct!.edsuser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eflo: {
      value: cdktf.stringToHclTerraform(struct!.eflo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eflo_cnp: {
      value: cdktf.stringToHclTerraform(struct!.efloCnp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eflo_controller: {
      value: cdktf.stringToHclTerraform(struct!.efloController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ehpc: {
      value: cdktf.stringToHclTerraform(struct!.ehpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ehs: {
      value: cdktf.stringToHclTerraform(struct!.ehs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eipanycast: {
      value: cdktf.stringToHclTerraform(struct!.eipanycast),
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
    emr: {
      value: cdktf.stringToHclTerraform(struct!.emr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ens: {
      value: cdktf.stringToHclTerraform(struct!.ens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esa: {
      value: cdktf.stringToHclTerraform(struct!.esa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ess: {
      value: cdktf.stringToHclTerraform(struct!.ess),
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
    fc: {
      value: cdktf.stringToHclTerraform(struct!.fc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fc_open: {
      value: cdktf.stringToHclTerraform(struct!.fcOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fnf: {
      value: cdktf.stringToHclTerraform(struct!.fnf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ga: {
      value: cdktf.stringToHclTerraform(struct!.ga),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gaplus: {
      value: cdktf.stringToHclTerraform(struct!.gaplus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gdb: {
      value: cdktf.stringToHclTerraform(struct!.gdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gds: {
      value: cdktf.stringToHclTerraform(struct!.gds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpdb: {
      value: cdktf.stringToHclTerraform(struct!.gpdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwlb: {
      value: cdktf.stringToHclTerraform(struct!.gwlb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwsecd: {
      value: cdktf.stringToHclTerraform(struct!.gwsecd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbr: {
      value: cdktf.stringToHclTerraform(struct!.hbr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hcs_sgw: {
      value: cdktf.stringToHclTerraform(struct!.hcsSgw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hitsdb: {
      value: cdktf.stringToHclTerraform(struct!.hitsdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imm: {
      value: cdktf.stringToHclTerraform(struct!.imm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imp: {
      value: cdktf.stringToHclTerraform(struct!.imp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ims: {
      value: cdktf.stringToHclTerraform(struct!.ims),
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
    kms: {
      value: cdktf.stringToHclTerraform(struct!.kms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kvstore: {
      value: cdktf.stringToHclTerraform(struct!.kvstore),
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    market: {
      value: cdktf.stringToHclTerraform(struct!.market),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxcompute: {
      value: cdktf.stringToHclTerraform(struct!.maxcompute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mhub: {
      value: cdktf.stringToHclTerraform(struct!.mhub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mns: {
      value: cdktf.stringToHclTerraform(struct!.mns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mns_open: {
      value: cdktf.stringToHclTerraform(struct!.mnsOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mscopensubscription: {
      value: cdktf.stringToHclTerraform(struct!.mscopensubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mse: {
      value: cdktf.stringToHclTerraform(struct!.mse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nas: {
      value: cdktf.stringToHclTerraform(struct!.nas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nlb: {
      value: cdktf.stringToHclTerraform(struct!.nlb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oceanbase: {
      value: cdktf.stringToHclTerraform(struct!.oceanbase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oceanbasepro: {
      value: cdktf.stringToHclTerraform(struct!.oceanbasepro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ons: {
      value: cdktf.stringToHclTerraform(struct!.ons),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    onsproxy: {
      value: cdktf.stringToHclTerraform(struct!.onsproxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oos: {
      value: cdktf.stringToHclTerraform(struct!.oos),
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
    oss: {
      value: cdktf.stringToHclTerraform(struct!.oss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ots: {
      value: cdktf.stringToHclTerraform(struct!.ots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polardb: {
      value: cdktf.stringToHclTerraform(struct!.polardb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polardbx: {
      value: cdktf.stringToHclTerraform(struct!.polardbx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privatelink: {
      value: cdktf.stringToHclTerraform(struct!.privatelink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvtz: {
      value: cdktf.stringToHclTerraform(struct!.pvtz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quickbi: {
      value: cdktf.stringToHclTerraform(struct!.quickbi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quickbi_public: {
      value: cdktf.stringToHclTerraform(struct!.quickbiPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quotas: {
      value: cdktf.stringToHclTerraform(struct!.quotas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_kvstore: {
      value: cdktf.stringToHclTerraform(struct!.rKvstore),
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
    rds: {
      value: cdktf.stringToHclTerraform(struct!.rds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redisa: {
      value: cdktf.stringToHclTerraform(struct!.redisa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcemanager: {
      value: cdktf.stringToHclTerraform(struct!.resourcemanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcesharing: {
      value: cdktf.stringToHclTerraform(struct!.resourcesharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ressharing: {
      value: cdktf.stringToHclTerraform(struct!.ressharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rocketmq: {
      value: cdktf.stringToHclTerraform(struct!.rocketmq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ros: {
      value: cdktf.stringToHclTerraform(struct!.ros),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sae: {
      value: cdktf.stringToHclTerraform(struct!.sae),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas: {
      value: cdktf.stringToHclTerraform(struct!.sas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scdn: {
      value: cdktf.stringToHclTerraform(struct!.scdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedulerx2: {
      value: cdktf.stringToHclTerraform(struct!.schedulerx2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sddp: {
      value: cdktf.stringToHclTerraform(struct!.sddp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectdb: {
      value: cdktf.stringToHclTerraform(struct!.selectdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverless: {
      value: cdktf.stringToHclTerraform(struct!.serverless),
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
    servicemesh: {
      value: cdktf.stringToHclTerraform(struct!.servicemesh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sgw: {
      value: cdktf.stringToHclTerraform(struct!.sgw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb: {
      value: cdktf.stringToHclTerraform(struct!.slb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smartag: {
      value: cdktf.stringToHclTerraform(struct!.smartag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srvcatalog: {
      value: cdktf.stringToHclTerraform(struct!.srvcatalog),
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
    swas: {
      value: cdktf.stringToHclTerraform(struct!.swas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swas_open: {
      value: cdktf.stringToHclTerraform(struct!.swasOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod: {
      value: cdktf.stringToHclTerraform(struct!.vod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpcipam: {
      value: cdktf.stringToHclTerraform(struct!.vpcipam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpcpeer: {
      value: cdktf.stringToHclTerraform(struct!.vpcpeer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs: {
      value: cdktf.stringToHclTerraform(struct!.vs),
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
    waf_openapi: {
      value: cdktf.stringToHclTerraform(struct!.wafOpenapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AlicloudProviderSignVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#oss AlicloudProvider#oss}
  */
  readonly oss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#sls AlicloudProvider#sls}
  */
  readonly sls?: string;
}

export function alicloudProviderSignVersionToTerraform(struct?: AlicloudProviderSignVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oss: cdktf.stringToTerraform(struct!.oss),
    sls: cdktf.stringToTerraform(struct!.sls),
  }
}


export function alicloudProviderSignVersionToHclTerraform(struct?: AlicloudProviderSignVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oss: {
      value: cdktf.stringToHclTerraform(struct!.oss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls: {
      value: cdktf.stringToHclTerraform(struct!.sls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs alicloud}
*/
export class AlicloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlicloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlicloudProvider to import
  * @param importFromId The id of the existing AlicloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlicloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs alicloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlicloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AlicloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      terraformProviderSource: 'aliyun/alicloud'
    });
    this._accessKey = config.accessKey;
    this._accountId = config.accountId;
    this._accountType = config.accountType;
    this._clientConnectTimeout = config.clientConnectTimeout;
    this._clientReadTimeout = config.clientReadTimeout;
    this._configurationSource = config.configurationSource;
    this._credentialsUri = config.credentialsUri;
    this._ecsRoleName = config.ecsRoleName;
    this._fc = config.fc;
    this._logEndpoint = config.logEndpoint;
    this._maxRetryTimeout = config.maxRetryTimeout;
    this._mnsEndpoint = config.mnsEndpoint;
    this._otsInstanceName = config.otsInstanceName;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._region = config.region;
    this._secretKey = config.secretKey;
    this._secureTransport = config.secureTransport;
    this._securityToken = config.securityToken;
    this._securityTransport = config.securityTransport;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._skipRegionValidation = config.skipRegionValidation;
    this._sourceIp = config.sourceIp;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._assumeRoleWithOidc = config.assumeRoleWithOidc;
    this._endpoints = config.endpoints;
    this._signVersion = config.signVersion;
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

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this._accountType;
  }
  public set accountType(value: string | undefined) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // client_connect_timeout - computed: false, optional: true, required: false
  private _clientConnectTimeout?: number; 
  public get clientConnectTimeout() {
    return this._clientConnectTimeout;
  }
  public set clientConnectTimeout(value: number | undefined) {
    this._clientConnectTimeout = value;
  }
  public resetClientConnectTimeout() {
    this._clientConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectTimeoutInput() {
    return this._clientConnectTimeout;
  }

  // client_read_timeout - computed: false, optional: true, required: false
  private _clientReadTimeout?: number; 
  public get clientReadTimeout() {
    return this._clientReadTimeout;
  }
  public set clientReadTimeout(value: number | undefined) {
    this._clientReadTimeout = value;
  }
  public resetClientReadTimeout() {
    this._clientReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientReadTimeoutInput() {
    return this._clientReadTimeout;
  }

  // configuration_source - computed: false, optional: true, required: false
  private _configurationSource?: string; 
  public get configurationSource() {
    return this._configurationSource;
  }
  public set configurationSource(value: string | undefined) {
    this._configurationSource = value;
  }
  public resetConfigurationSource() {
    this._configurationSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSourceInput() {
    return this._configurationSource;
  }

  // credentials_uri - computed: false, optional: true, required: false
  private _credentialsUri?: string; 
  public get credentialsUri() {
    return this._credentialsUri;
  }
  public set credentialsUri(value: string | undefined) {
    this._credentialsUri = value;
  }
  public resetCredentialsUri() {
    this._credentialsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsUriInput() {
    return this._credentialsUri;
  }

  // ecs_role_name - computed: false, optional: true, required: false
  private _ecsRoleName?: string; 
  public get ecsRoleName() {
    return this._ecsRoleName;
  }
  public set ecsRoleName(value: string | undefined) {
    this._ecsRoleName = value;
  }
  public resetEcsRoleName() {
    this._ecsRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsRoleNameInput() {
    return this._ecsRoleName;
  }

  // fc - computed: false, optional: true, required: false
  private _fc?: string; 
  public get fc() {
    return this._fc;
  }
  public set fc(value: string | undefined) {
    this._fc = value;
  }
  public resetFc() {
    this._fc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc;
  }

  // log_endpoint - computed: false, optional: true, required: false
  private _logEndpoint?: string; 
  public get logEndpoint() {
    return this._logEndpoint;
  }
  public set logEndpoint(value: string | undefined) {
    this._logEndpoint = value;
  }
  public resetLogEndpoint() {
    this._logEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEndpointInput() {
    return this._logEndpoint;
  }

  // max_retry_timeout - computed: false, optional: true, required: false
  private _maxRetryTimeout?: number; 
  public get maxRetryTimeout() {
    return this._maxRetryTimeout;
  }
  public set maxRetryTimeout(value: number | undefined) {
    this._maxRetryTimeout = value;
  }
  public resetMaxRetryTimeout() {
    this._maxRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryTimeoutInput() {
    return this._maxRetryTimeout;
  }

  // mns_endpoint - computed: false, optional: true, required: false
  private _mnsEndpoint?: string; 
  public get mnsEndpoint() {
    return this._mnsEndpoint;
  }
  public set mnsEndpoint(value: string | undefined) {
    this._mnsEndpoint = value;
  }
  public resetMnsEndpoint() {
    this._mnsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnsEndpointInput() {
    return this._mnsEndpoint;
  }

  // ots_instance_name - computed: false, optional: true, required: false
  private _otsInstanceName?: string; 
  public get otsInstanceName() {
    return this._otsInstanceName;
  }
  public set otsInstanceName(value: string | undefined) {
    this._otsInstanceName = value;
  }
  public resetOtsInstanceName() {
    this._otsInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otsInstanceNameInput() {
    return this._otsInstanceName;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // secure_transport - computed: false, optional: true, required: false
  private _secureTransport?: string; 
  public get secureTransport() {
    return this._secureTransport;
  }
  public set secureTransport(value: string | undefined) {
    this._secureTransport = value;
  }
  public resetSecureTransport() {
    this._secureTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTransportInput() {
    return this._secureTransport;
  }

  // security_token - computed: false, optional: true, required: false
  private _securityToken?: string; 
  public get securityToken() {
    return this._securityToken;
  }
  public set securityToken(value: string | undefined) {
    this._securityToken = value;
  }
  public resetSecurityToken() {
    this._securityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenInput() {
    return this._securityToken;
  }

  // security_transport - computed: false, optional: true, required: false
  private _securityTransport?: string; 
  public get securityTransport() {
    return this._securityTransport;
  }
  public set securityTransport(value: string | undefined) {
    this._securityTransport = value;
  }
  public resetSecurityTransport() {
    this._securityTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTransportInput() {
    return this._securityTransport;
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

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this._sourceIp;
  }
  public set sourceIp(value: string | undefined) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
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
  private _assumeRole?: AlicloudProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AlicloudProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // assume_role_with_oidc - computed: false, optional: true, required: false
  private _assumeRoleWithOidc?: AlicloudProviderAssumeRoleWithOidc; 
  public get assumeRoleWithOidc() {
    return this._assumeRoleWithOidc;
  }
  public set assumeRoleWithOidc(value: AlicloudProviderAssumeRoleWithOidc | undefined) {
    this._assumeRoleWithOidc = value;
  }
  public resetAssumeRoleWithOidc() {
    this._assumeRoleWithOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithOidcInput() {
    return this._assumeRoleWithOidc;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AlicloudProviderEndpoints[] | cdktf.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AlicloudProviderEndpoints[] | cdktf.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // sign_version - computed: false, optional: true, required: false
  private _signVersion?: AlicloudProviderSignVersion; 
  public get signVersion() {
    return this._signVersion;
  }
  public set signVersion(value: AlicloudProviderSignVersion | undefined) {
    this._signVersion = value;
  }
  public resetSignVersion() {
    this._signVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signVersionInput() {
    return this._signVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      account_id: cdktf.stringToTerraform(this._accountId),
      account_type: cdktf.stringToTerraform(this._accountType),
      client_connect_timeout: cdktf.numberToTerraform(this._clientConnectTimeout),
      client_read_timeout: cdktf.numberToTerraform(this._clientReadTimeout),
      configuration_source: cdktf.stringToTerraform(this._configurationSource),
      credentials_uri: cdktf.stringToTerraform(this._credentialsUri),
      ecs_role_name: cdktf.stringToTerraform(this._ecsRoleName),
      fc: cdktf.stringToTerraform(this._fc),
      log_endpoint: cdktf.stringToTerraform(this._logEndpoint),
      max_retry_timeout: cdktf.numberToTerraform(this._maxRetryTimeout),
      mns_endpoint: cdktf.stringToTerraform(this._mnsEndpoint),
      ots_instance_name: cdktf.stringToTerraform(this._otsInstanceName),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      secure_transport: cdktf.stringToTerraform(this._secureTransport),
      security_token: cdktf.stringToTerraform(this._securityToken),
      security_transport: cdktf.stringToTerraform(this._securityTransport),
      shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
      skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: alicloudProviderAssumeRoleToTerraform(this._assumeRole),
      assume_role_with_oidc: alicloudProviderAssumeRoleWithOidcToTerraform(this._assumeRoleWithOidc),
      endpoints: cdktf.listMapper(alicloudProviderEndpointsToTerraform, true)(this._endpoints),
      sign_version: alicloudProviderSignVersionToTerraform(this._signVersion),
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
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_connect_timeout: {
        value: cdktf.numberToHclTerraform(this._clientConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_read_timeout: {
        value: cdktf.numberToHclTerraform(this._clientReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configuration_source: {
        value: cdktf.stringToHclTerraform(this._configurationSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_uri: {
        value: cdktf.stringToHclTerraform(this._credentialsUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_role_name: {
        value: cdktf.stringToHclTerraform(this._ecsRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fc: {
        value: cdktf.stringToHclTerraform(this._fc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_endpoint: {
        value: cdktf.stringToHclTerraform(this._logEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._maxRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mns_endpoint: {
        value: cdktf.stringToHclTerraform(this._mnsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ots_instance_name: {
        value: cdktf.stringToHclTerraform(this._otsInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_transport: {
        value: cdktf.stringToHclTerraform(this._secureTransport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_token: {
        value: cdktf.stringToHclTerraform(this._securityToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_transport: {
        value: cdktf.stringToHclTerraform(this._securityTransport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_credentials_file: {
        value: cdktf.stringToHclTerraform(this._sharedCredentialsFile),
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
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: alicloudProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "set",
        storageClassType: "AlicloudProviderAssumeRoleList",
      },
      assume_role_with_oidc: {
        value: alicloudProviderAssumeRoleWithOidcToHclTerraform(this._assumeRoleWithOidc),
        isBlock: true,
        type: "list",
        storageClassType: "AlicloudProviderAssumeRoleWithOidcList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(alicloudProviderEndpointsToHclTerraform, true)(this._endpoints),
        isBlock: true,
        type: "set",
        storageClassType: "AlicloudProviderEndpointsList",
      },
      sign_version: {
        value: alicloudProviderSignVersionToHclTerraform(this._signVersion),
        isBlock: true,
        type: "set",
        storageClassType: "AlicloudProviderSignVersionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
