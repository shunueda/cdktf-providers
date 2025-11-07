// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlibabacloudstackProviderConfig {
  /**
  * The access key for API operations. You can retrieve this from the 'Security Management' section of the AlibabacloudStack console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#access_key AlibabacloudstackProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#asapi_endpoint AlibabacloudstackProvider#asapi_endpoint}
  */
  readonly asapiEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#client_connect_timeout AlibabacloudstackProvider#client_connect_timeout}
  */
  readonly clientConnectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#client_read_timeout AlibabacloudstackProvider#client_read_timeout}
  */
  readonly clientReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#configuration_source AlibabacloudstackProvider#configuration_source}
  */
  readonly configurationSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#department AlibabacloudstackProvider#department}
  */
  readonly department?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ecs_role_name AlibabacloudstackProvider#ecs_role_name}
  */
  readonly ecsRoleName?: string;
  /**
  * Use this to Trust self-signed certificates. It's typically used to allow insecure connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#insecure AlibabacloudstackProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#is_center_region AlibabacloudstackProvider#is_center_region}
  */
  readonly isCenterRegion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#kms_endpoint AlibabacloudstackProvider#kms_endpoint}
  */
  readonly kmsEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#max_retry_timeout AlibabacloudstackProvider#max_retry_timeout}
  */
  readonly maxRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#organization_accesskey AlibabacloudstackProvider#organization_accesskey}
  */
  readonly organizationAccesskey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#organization_secretkey AlibabacloudstackProvider#organization_secretkey}
  */
  readonly organizationSecretkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ossservice_domain AlibabacloudstackProvider#ossservice_domain}
  */
  readonly ossserviceDomain?: string;
  /**
  * Use this to override the default domain. It's typically used to connect to custom domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#popgw_domain AlibabacloudstackProvider#popgw_domain}
  */
  readonly popgwDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#profile AlibabacloudstackProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#protocol AlibabacloudstackProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * Use this to set proxy connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#proxy AlibabacloudstackProvider#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#region AlibabacloudstackProvider#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#region_id AlibabacloudstackProvider#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#resource_group AlibabacloudstackProvider#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#resource_group_set_name AlibabacloudstackProvider#resource_group_set_name}
  */
  readonly resourceGroupSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#role_arn AlibabacloudstackProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The secret key for API operations. You can retrieve this from the 'Security Management' section of the AlibabacloudStackconsole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#secret_key AlibabacloudstackProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#secure_transport AlibabacloudstackProvider#secure_transport}
  */
  readonly secureTransport?: string;
  /**
  * security token. A security token is only required if you are using Security Token Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#security_token AlibabacloudstackProvider#security_token}
  */
  readonly securityToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#security_transport AlibabacloudstackProvider#security_transport}
  */
  readonly securityTransport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#shared_credentials_file AlibabacloudstackProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#skip_region_validation AlibabacloudstackProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#sls_endpoint AlibabacloudstackProvider#sls_endpoint}
  */
  readonly slsEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#sls_openapi_endpoint AlibabacloudstackProvider#sls_openapi_endpoint}
  */
  readonly slsOpenapiEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#source_ip AlibabacloudstackProvider#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#sts_endpoint AlibabacloudstackProvider#sts_endpoint}
  */
  readonly stsEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#alias AlibabacloudstackProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#assume_role AlibabacloudstackProvider#assume_role}
  */
  readonly assumeRole?: AlibabacloudstackProviderAssumeRole;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#endpoints AlibabacloudstackProvider#endpoints}
  */
  readonly endpoints?: AlibabacloudstackProviderEndpoints[] | cdktf.IResolvable;
}
export interface AlibabacloudstackProviderAssumeRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#policy AlibabacloudstackProvider#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#role_arn AlibabacloudstackProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#session_expiration AlibabacloudstackProvider#session_expiration}
  */
  readonly sessionExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#session_name AlibabacloudstackProvider#session_name}
  */
  readonly sessionName?: string;
}

export function alibabacloudstackProviderAssumeRoleToTerraform(struct?: AlibabacloudstackProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_expiration: cdktf.numberToTerraform(struct!.sessionExpiration),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function alibabacloudstackProviderAssumeRoleToHclTerraform(struct?: AlibabacloudstackProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export interface AlibabacloudstackProviderEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#acm AlibabacloudstackProvider#acm}
  */
  readonly acm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#adb AlibabacloudstackProvider#adb}
  */
  readonly adb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#alikafka AlibabacloudstackProvider#alikafka}
  */
  readonly alikafka?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#arms AlibabacloudstackProvider#arms}
  */
  readonly arms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#asapi AlibabacloudstackProvider#asapi}
  */
  readonly asapi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ascm AlibabacloudstackProvider#ascm}
  */
  readonly ascm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#bastionhostprivate AlibabacloudstackProvider#bastionhostprivate}
  */
  readonly bastionhostprivate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#bssdata AlibabacloudstackProvider#bssdata}
  */
  readonly bssdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cbn AlibabacloudstackProvider#cbn}
  */
  readonly cbn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cdn AlibabacloudstackProvider#cdn}
  */
  readonly cdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cloudapi AlibabacloudstackProvider#cloudapi}
  */
  readonly cloudapi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#clouddns AlibabacloudstackProvider#clouddns}
  */
  readonly clouddns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cloudfw AlibabacloudstackProvider#cloudfw}
  */
  readonly cloudfw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cms AlibabacloudstackProvider#cms}
  */
  readonly cms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cr AlibabacloudstackProvider#cr}
  */
  readonly cr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cr_ee AlibabacloudstackProvider#cr_ee}
  */
  readonly crEe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#cs AlibabacloudstackProvider#cs}
  */
  readonly cs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#csb AlibabacloudstackProvider#csb}
  */
  readonly csb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#datahub AlibabacloudstackProvider#datahub}
  */
  readonly datahub?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#dataworks_private_cloud AlibabacloudstackProvider#dataworks_private_cloud}
  */
  readonly dataworksPrivateCloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#dataworkspublic AlibabacloudstackProvider#dataworkspublic}
  */
  readonly dataworkspublic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#dbs AlibabacloudstackProvider#dbs}
  */
  readonly dbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#dds AlibabacloudstackProvider#dds}
  */
  readonly dds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#dmsenterprise AlibabacloudstackProvider#dmsenterprise}
  */
  readonly dmsenterprise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#drds AlibabacloudstackProvider#drds}
  */
  readonly drds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#dts AlibabacloudstackProvider#dts}
  */
  readonly dts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ebs AlibabacloudstackProvider#ebs}
  */
  readonly ebs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ecs AlibabacloudstackProvider#ecs}
  */
  readonly ecs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#edas AlibabacloudstackProvider#edas}
  */
  readonly edas?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#elasticsearch_k8s AlibabacloudstackProvider#elasticsearch_k8s}
  */
  readonly elasticsearchK8S?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ess AlibabacloudstackProvider#ess}
  */
  readonly ess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#gdb AlibabacloudstackProvider#gdb}
  */
  readonly gdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#gpdb AlibabacloudstackProvider#gpdb}
  */
  readonly gpdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#hbase AlibabacloudstackProvider#hbase}
  */
  readonly hbase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#hitsdb AlibabacloudstackProvider#hitsdb}
  */
  readonly hitsdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#hologram AlibabacloudstackProvider#hologram}
  */
  readonly hologram?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#kms AlibabacloudstackProvider#kms}
  */
  readonly kms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#nas AlibabacloudstackProvider#nas}
  */
  readonly nas?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#onerouter AlibabacloudstackProvider#onerouter}
  */
  readonly onerouter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ons AlibabacloudstackProvider#ons}
  */
  readonly ons?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#oos AlibabacloudstackProvider#oos}
  */
  readonly oos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#oss AlibabacloudstackProvider#oss}
  */
  readonly oss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ossdata AlibabacloudstackProvider#ossdata}
  */
  readonly ossdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ots AlibabacloudstackProvider#ots}
  */
  readonly ots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#polardb AlibabacloudstackProvider#polardb}
  */
  readonly polardb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#polardbx AlibabacloudstackProvider#polardbx}
  */
  readonly polardbx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#quickbi AlibabacloudstackProvider#quickbi}
  */
  readonly quickbi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#r_kvstore AlibabacloudstackProvider#r_kvstore}
  */
  readonly rKvstore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ram AlibabacloudstackProvider#ram}
  */
  readonly ram?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#rds AlibabacloudstackProvider#rds}
  */
  readonly rds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ros AlibabacloudstackProvider#ros}
  */
  readonly ros?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#slb AlibabacloudstackProvider#slb}
  */
  readonly slb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#sls AlibabacloudstackProvider#sls}
  */
  readonly sls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#slsdata AlibabacloudstackProvider#slsdata}
  */
  readonly slsdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#sts AlibabacloudstackProvider#sts}
  */
  readonly sts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#ververica AlibabacloudstackProvider#ververica}
  */
  readonly ververica?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#vpc AlibabacloudstackProvider#vpc}
  */
  readonly vpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#waf_onecs AlibabacloudstackProvider#waf_onecs}
  */
  readonly wafOnecs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#wafopenapi AlibabacloudstackProvider#wafopenapi}
  */
  readonly wafopenapi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#yaochiops AlibabacloudstackProvider#yaochiops}
  */
  readonly yaochiops?: string;
}

export function alibabacloudstackProviderEndpointsToTerraform(struct?: AlibabacloudstackProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: cdktf.stringToTerraform(struct!.acm),
    adb: cdktf.stringToTerraform(struct!.adb),
    alikafka: cdktf.stringToTerraform(struct!.alikafka),
    arms: cdktf.stringToTerraform(struct!.arms),
    asapi: cdktf.stringToTerraform(struct!.asapi),
    ascm: cdktf.stringToTerraform(struct!.ascm),
    bastionhostprivate: cdktf.stringToTerraform(struct!.bastionhostprivate),
    bssdata: cdktf.stringToTerraform(struct!.bssdata),
    cbn: cdktf.stringToTerraform(struct!.cbn),
    cdn: cdktf.stringToTerraform(struct!.cdn),
    cloudapi: cdktf.stringToTerraform(struct!.cloudapi),
    clouddns: cdktf.stringToTerraform(struct!.clouddns),
    cloudfw: cdktf.stringToTerraform(struct!.cloudfw),
    cms: cdktf.stringToTerraform(struct!.cms),
    cr: cdktf.stringToTerraform(struct!.cr),
    cr_ee: cdktf.stringToTerraform(struct!.crEe),
    cs: cdktf.stringToTerraform(struct!.cs),
    csb: cdktf.stringToTerraform(struct!.csb),
    datahub: cdktf.stringToTerraform(struct!.datahub),
    dataworks_private_cloud: cdktf.stringToTerraform(struct!.dataworksPrivateCloud),
    dataworkspublic: cdktf.stringToTerraform(struct!.dataworkspublic),
    dbs: cdktf.stringToTerraform(struct!.dbs),
    dds: cdktf.stringToTerraform(struct!.dds),
    dmsenterprise: cdktf.stringToTerraform(struct!.dmsenterprise),
    drds: cdktf.stringToTerraform(struct!.drds),
    dts: cdktf.stringToTerraform(struct!.dts),
    ebs: cdktf.stringToTerraform(struct!.ebs),
    ecs: cdktf.stringToTerraform(struct!.ecs),
    edas: cdktf.stringToTerraform(struct!.edas),
    elasticsearch_k8s: cdktf.stringToTerraform(struct!.elasticsearchK8S),
    ess: cdktf.stringToTerraform(struct!.ess),
    gdb: cdktf.stringToTerraform(struct!.gdb),
    gpdb: cdktf.stringToTerraform(struct!.gpdb),
    hbase: cdktf.stringToTerraform(struct!.hbase),
    hitsdb: cdktf.stringToTerraform(struct!.hitsdb),
    hologram: cdktf.stringToTerraform(struct!.hologram),
    kms: cdktf.stringToTerraform(struct!.kms),
    nas: cdktf.stringToTerraform(struct!.nas),
    onerouter: cdktf.stringToTerraform(struct!.onerouter),
    ons: cdktf.stringToTerraform(struct!.ons),
    oos: cdktf.stringToTerraform(struct!.oos),
    oss: cdktf.stringToTerraform(struct!.oss),
    ossdata: cdktf.stringToTerraform(struct!.ossdata),
    ots: cdktf.stringToTerraform(struct!.ots),
    polardb: cdktf.stringToTerraform(struct!.polardb),
    polardbx: cdktf.stringToTerraform(struct!.polardbx),
    quickbi: cdktf.stringToTerraform(struct!.quickbi),
    r_kvstore: cdktf.stringToTerraform(struct!.rKvstore),
    ram: cdktf.stringToTerraform(struct!.ram),
    rds: cdktf.stringToTerraform(struct!.rds),
    ros: cdktf.stringToTerraform(struct!.ros),
    slb: cdktf.stringToTerraform(struct!.slb),
    sls: cdktf.stringToTerraform(struct!.sls),
    slsdata: cdktf.stringToTerraform(struct!.slsdata),
    sts: cdktf.stringToTerraform(struct!.sts),
    ververica: cdktf.stringToTerraform(struct!.ververica),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    waf_onecs: cdktf.stringToTerraform(struct!.wafOnecs),
    wafopenapi: cdktf.stringToTerraform(struct!.wafopenapi),
    yaochiops: cdktf.stringToTerraform(struct!.yaochiops),
  }
}


export function alibabacloudstackProviderEndpointsToHclTerraform(struct?: AlibabacloudstackProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: cdktf.stringToHclTerraform(struct!.acm),
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
    alikafka: {
      value: cdktf.stringToHclTerraform(struct!.alikafka),
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
    asapi: {
      value: cdktf.stringToHclTerraform(struct!.asapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ascm: {
      value: cdktf.stringToHclTerraform(struct!.ascm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastionhostprivate: {
      value: cdktf.stringToHclTerraform(struct!.bastionhostprivate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bssdata: {
      value: cdktf.stringToHclTerraform(struct!.bssdata),
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
    cdn: {
      value: cdktf.stringToHclTerraform(struct!.cdn),
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
    clouddns: {
      value: cdktf.stringToHclTerraform(struct!.clouddns),
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
    cms: {
      value: cdktf.stringToHclTerraform(struct!.cms),
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
    cr_ee: {
      value: cdktf.stringToHclTerraform(struct!.crEe),
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
    csb: {
      value: cdktf.stringToHclTerraform(struct!.csb),
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
    dataworks_private_cloud: {
      value: cdktf.stringToHclTerraform(struct!.dataworksPrivateCloud),
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
    dbs: {
      value: cdktf.stringToHclTerraform(struct!.dbs),
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
    dmsenterprise: {
      value: cdktf.stringToHclTerraform(struct!.dmsenterprise),
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
    ebs: {
      value: cdktf.stringToHclTerraform(struct!.ebs),
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
    elasticsearch_k8s: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchK8S),
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
    gdb: {
      value: cdktf.stringToHclTerraform(struct!.gdb),
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
    hbase: {
      value: cdktf.stringToHclTerraform(struct!.hbase),
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
    hologram: {
      value: cdktf.stringToHclTerraform(struct!.hologram),
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
    nas: {
      value: cdktf.stringToHclTerraform(struct!.nas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    onerouter: {
      value: cdktf.stringToHclTerraform(struct!.onerouter),
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
    oos: {
      value: cdktf.stringToHclTerraform(struct!.oos),
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
    ossdata: {
      value: cdktf.stringToHclTerraform(struct!.ossdata),
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
    quickbi: {
      value: cdktf.stringToHclTerraform(struct!.quickbi),
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
    ros: {
      value: cdktf.stringToHclTerraform(struct!.ros),
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
    sls: {
      value: cdktf.stringToHclTerraform(struct!.sls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slsdata: {
      value: cdktf.stringToHclTerraform(struct!.slsdata),
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
    ververica: {
      value: cdktf.stringToHclTerraform(struct!.ververica),
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
    waf_onecs: {
      value: cdktf.stringToHclTerraform(struct!.wafOnecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wafopenapi: {
      value: cdktf.stringToHclTerraform(struct!.wafopenapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaochiops: {
      value: cdktf.stringToHclTerraform(struct!.yaochiops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs alibabacloudstack}
*/
export class AlibabacloudstackProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlibabacloudstackProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlibabacloudstackProvider to import
  * @param importFromId The id of the existing AlibabacloudstackProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlibabacloudstackProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs alibabacloudstack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlibabacloudstackProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AlibabacloudstackProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      terraformProviderSource: 'aliyun/alibabacloudstack'
    });
    this._accessKey = config.accessKey;
    this._asapiEndpoint = config.asapiEndpoint;
    this._clientConnectTimeout = config.clientConnectTimeout;
    this._clientReadTimeout = config.clientReadTimeout;
    this._configurationSource = config.configurationSource;
    this._department = config.department;
    this._ecsRoleName = config.ecsRoleName;
    this._insecure = config.insecure;
    this._isCenterRegion = config.isCenterRegion;
    this._kmsEndpoint = config.kmsEndpoint;
    this._maxRetryTimeout = config.maxRetryTimeout;
    this._organizationAccesskey = config.organizationAccesskey;
    this._organizationSecretkey = config.organizationSecretkey;
    this._ossserviceDomain = config.ossserviceDomain;
    this._popgwDomain = config.popgwDomain;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._proxy = config.proxy;
    this._region = config.region;
    this._regionId = config.regionId;
    this._resourceGroup = config.resourceGroup;
    this._resourceGroupSetName = config.resourceGroupSetName;
    this._roleArn = config.roleArn;
    this._secretKey = config.secretKey;
    this._secureTransport = config.secureTransport;
    this._securityToken = config.securityToken;
    this._securityTransport = config.securityTransport;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._skipRegionValidation = config.skipRegionValidation;
    this._slsEndpoint = config.slsEndpoint;
    this._slsOpenapiEndpoint = config.slsOpenapiEndpoint;
    this._sourceIp = config.sourceIp;
    this._stsEndpoint = config.stsEndpoint;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._endpoints = config.endpoints;
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

  // asapi_endpoint - computed: false, optional: true, required: false
  private _asapiEndpoint?: string; 
  public get asapiEndpoint() {
    return this._asapiEndpoint;
  }
  public set asapiEndpoint(value: string | undefined) {
    this._asapiEndpoint = value;
  }
  public resetAsapiEndpoint() {
    this._asapiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asapiEndpointInput() {
    return this._asapiEndpoint;
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

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this._department;
  }
  public set department(value: string | undefined) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
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

  // is_center_region - computed: false, optional: true, required: false
  private _isCenterRegion?: boolean | cdktf.IResolvable; 
  public get isCenterRegion() {
    return this._isCenterRegion;
  }
  public set isCenterRegion(value: boolean | cdktf.IResolvable | undefined) {
    this._isCenterRegion = value;
  }
  public resetIsCenterRegion() {
    this._isCenterRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCenterRegionInput() {
    return this._isCenterRegion;
  }

  // kms_endpoint - computed: false, optional: true, required: false
  private _kmsEndpoint?: string; 
  public get kmsEndpoint() {
    return this._kmsEndpoint;
  }
  public set kmsEndpoint(value: string | undefined) {
    this._kmsEndpoint = value;
  }
  public resetKmsEndpoint() {
    this._kmsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEndpointInput() {
    return this._kmsEndpoint;
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

  // organization_accesskey - computed: false, optional: true, required: false
  private _organizationAccesskey?: string; 
  public get organizationAccesskey() {
    return this._organizationAccesskey;
  }
  public set organizationAccesskey(value: string | undefined) {
    this._organizationAccesskey = value;
  }
  public resetOrganizationAccesskey() {
    this._organizationAccesskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAccesskeyInput() {
    return this._organizationAccesskey;
  }

  // organization_secretkey - computed: false, optional: true, required: false
  private _organizationSecretkey?: string; 
  public get organizationSecretkey() {
    return this._organizationSecretkey;
  }
  public set organizationSecretkey(value: string | undefined) {
    this._organizationSecretkey = value;
  }
  public resetOrganizationSecretkey() {
    this._organizationSecretkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationSecretkeyInput() {
    return this._organizationSecretkey;
  }

  // ossservice_domain - computed: false, optional: true, required: false
  private _ossserviceDomain?: string; 
  public get ossserviceDomain() {
    return this._ossserviceDomain;
  }
  public set ossserviceDomain(value: string | undefined) {
    this._ossserviceDomain = value;
  }
  public resetOssserviceDomain() {
    this._ossserviceDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossserviceDomainInput() {
    return this._ossserviceDomain;
  }

  // popgw_domain - computed: false, optional: true, required: false
  private _popgwDomain?: string; 
  public get popgwDomain() {
    return this._popgwDomain;
  }
  public set popgwDomain(value: string | undefined) {
    this._popgwDomain = value;
  }
  public resetPopgwDomain() {
    this._popgwDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popgwDomainInput() {
    return this._popgwDomain;
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

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: string | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this._regionId;
  }
  public set regionId(value: string | undefined) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public set resourceGroup(value: string | undefined) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_group_set_name - computed: false, optional: true, required: false
  private _resourceGroupSetName?: string; 
  public get resourceGroupSetName() {
    return this._resourceGroupSetName;
  }
  public set resourceGroupSetName(value: string | undefined) {
    this._resourceGroupSetName = value;
  }
  public resetResourceGroupSetName() {
    this._resourceGroupSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupSetNameInput() {
    return this._resourceGroupSetName;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // sls_endpoint - computed: false, optional: true, required: false
  private _slsEndpoint?: string; 
  public get slsEndpoint() {
    return this._slsEndpoint;
  }
  public set slsEndpoint(value: string | undefined) {
    this._slsEndpoint = value;
  }
  public resetSlsEndpoint() {
    this._slsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsEndpointInput() {
    return this._slsEndpoint;
  }

  // sls_openapi_endpoint - computed: false, optional: true, required: false
  private _slsOpenapiEndpoint?: string; 
  public get slsOpenapiEndpoint() {
    return this._slsOpenapiEndpoint;
  }
  public set slsOpenapiEndpoint(value: string | undefined) {
    this._slsOpenapiEndpoint = value;
  }
  public resetSlsOpenapiEndpoint() {
    this._slsOpenapiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsOpenapiEndpointInput() {
    return this._slsOpenapiEndpoint;
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

  // sts_endpoint - computed: false, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this._stsEndpoint;
  }
  public set stsEndpoint(value: string | undefined) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
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
  private _assumeRole?: AlibabacloudstackProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AlibabacloudstackProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AlibabacloudstackProviderEndpoints[] | cdktf.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AlibabacloudstackProviderEndpoints[] | cdktf.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      asapi_endpoint: cdktf.stringToTerraform(this._asapiEndpoint),
      client_connect_timeout: cdktf.numberToTerraform(this._clientConnectTimeout),
      client_read_timeout: cdktf.numberToTerraform(this._clientReadTimeout),
      configuration_source: cdktf.stringToTerraform(this._configurationSource),
      department: cdktf.stringToTerraform(this._department),
      ecs_role_name: cdktf.stringToTerraform(this._ecsRoleName),
      insecure: cdktf.booleanToTerraform(this._insecure),
      is_center_region: cdktf.booleanToTerraform(this._isCenterRegion),
      kms_endpoint: cdktf.stringToTerraform(this._kmsEndpoint),
      max_retry_timeout: cdktf.numberToTerraform(this._maxRetryTimeout),
      organization_accesskey: cdktf.stringToTerraform(this._organizationAccesskey),
      organization_secretkey: cdktf.stringToTerraform(this._organizationSecretkey),
      ossservice_domain: cdktf.stringToTerraform(this._ossserviceDomain),
      popgw_domain: cdktf.stringToTerraform(this._popgwDomain),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy: cdktf.stringToTerraform(this._proxy),
      region: cdktf.stringToTerraform(this._region),
      region_id: cdktf.stringToTerraform(this._regionId),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      resource_group_set_name: cdktf.stringToTerraform(this._resourceGroupSetName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      secure_transport: cdktf.stringToTerraform(this._secureTransport),
      security_token: cdktf.stringToTerraform(this._securityToken),
      security_transport: cdktf.stringToTerraform(this._securityTransport),
      shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
      skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
      sls_endpoint: cdktf.stringToTerraform(this._slsEndpoint),
      sls_openapi_endpoint: cdktf.stringToTerraform(this._slsOpenapiEndpoint),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      sts_endpoint: cdktf.stringToTerraform(this._stsEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: alibabacloudstackProviderAssumeRoleToTerraform(this._assumeRole),
      endpoints: cdktf.listMapper(alibabacloudstackProviderEndpointsToTerraform, true)(this._endpoints),
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
      asapi_endpoint: {
        value: cdktf.stringToHclTerraform(this._asapiEndpoint),
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
      department: {
        value: cdktf.stringToHclTerraform(this._department),
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
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_center_region: {
        value: cdktf.booleanToHclTerraform(this._isCenterRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_endpoint: {
        value: cdktf.stringToHclTerraform(this._kmsEndpoint),
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
      organization_accesskey: {
        value: cdktf.stringToHclTerraform(this._organizationAccesskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_secretkey: {
        value: cdktf.stringToHclTerraform(this._organizationSecretkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ossservice_domain: {
        value: cdktf.stringToHclTerraform(this._ossserviceDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      popgw_domain: {
        value: cdktf.stringToHclTerraform(this._popgwDomain),
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
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
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
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_set_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      sls_endpoint: {
        value: cdktf.stringToHclTerraform(this._slsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_openapi_endpoint: {
        value: cdktf.stringToHclTerraform(this._slsOpenapiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_endpoint: {
        value: cdktf.stringToHclTerraform(this._stsEndpoint),
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
        value: alibabacloudstackProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "set",
        storageClassType: "AlibabacloudstackProviderAssumeRoleList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(alibabacloudstackProviderEndpointsToHclTerraform, true)(this._endpoints),
        isBlock: true,
        type: "set",
        storageClassType: "AlibabacloudstackProviderEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
