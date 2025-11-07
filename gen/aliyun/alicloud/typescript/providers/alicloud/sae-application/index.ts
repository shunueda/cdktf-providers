// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SaeApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#acr_assume_role_arn SaeApplication#acr_assume_role_arn}
  */
  readonly acrAssumeRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#acr_instance_id SaeApplication#acr_instance_id}
  */
  readonly acrInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#app_description SaeApplication#app_description}
  */
  readonly appDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#app_name SaeApplication#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#auto_config SaeApplication#auto_config}
  */
  readonly autoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#auto_enable_application_scaling_rule SaeApplication#auto_enable_application_scaling_rule}
  */
  readonly autoEnableApplicationScalingRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#batch_wait_time SaeApplication#batch_wait_time}
  */
  readonly batchWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#change_order_desc SaeApplication#change_order_desc}
  */
  readonly changeOrderDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#command SaeApplication#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#command_args SaeApplication#command_args}
  */
  readonly commandArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#command_args_v2 SaeApplication#command_args_v2}
  */
  readonly commandArgsV2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#config_map_mount_desc SaeApplication#config_map_mount_desc}
  */
  readonly configMapMountDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#cpu SaeApplication#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#custom_host_alias SaeApplication#custom_host_alias}
  */
  readonly customHostAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#deploy SaeApplication#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#edas_container_version SaeApplication#edas_container_version}
  */
  readonly edasContainerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#enable_ahas SaeApplication#enable_ahas}
  */
  readonly enableAhas?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#enable_grey_tag_route SaeApplication#enable_grey_tag_route}
  */
  readonly enableGreyTagRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#envs SaeApplication#envs}
  */
  readonly envs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#id SaeApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#image_pull_secrets SaeApplication#image_pull_secrets}
  */
  readonly imagePullSecrets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#image_url SaeApplication#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#jar_start_args SaeApplication#jar_start_args}
  */
  readonly jarStartArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#jar_start_options SaeApplication#jar_start_options}
  */
  readonly jarStartOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#jdk SaeApplication#jdk}
  */
  readonly jdk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#liveness SaeApplication#liveness}
  */
  readonly liveness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#memory SaeApplication#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#micro_registration SaeApplication#micro_registration}
  */
  readonly microRegistration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#min_ready_instance_ratio SaeApplication#min_ready_instance_ratio}
  */
  readonly minReadyInstanceRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#min_ready_instances SaeApplication#min_ready_instances}
  */
  readonly minReadyInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#mount_desc SaeApplication#mount_desc}
  */
  readonly mountDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#mount_host SaeApplication#mount_host}
  */
  readonly mountHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#namespace_id SaeApplication#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#nas_id SaeApplication#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#oss_ak_id SaeApplication#oss_ak_id}
  */
  readonly ossAkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#oss_ak_secret SaeApplication#oss_ak_secret}
  */
  readonly ossAkSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#oss_mount_descs SaeApplication#oss_mount_descs}
  */
  readonly ossMountDescs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#package_type SaeApplication#package_type}
  */
  readonly packageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#package_url SaeApplication#package_url}
  */
  readonly packageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#package_version SaeApplication#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#php SaeApplication#php}
  */
  readonly php?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#php_arms_config_location SaeApplication#php_arms_config_location}
  */
  readonly phpArmsConfigLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#php_config SaeApplication#php_config}
  */
  readonly phpConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#php_config_location SaeApplication#php_config_location}
  */
  readonly phpConfigLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#post_start SaeApplication#post_start}
  */
  readonly postStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#pre_stop SaeApplication#pre_stop}
  */
  readonly preStop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#programming_language SaeApplication#programming_language}
  */
  readonly programmingLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#readiness SaeApplication#readiness}
  */
  readonly readiness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#replicas SaeApplication#replicas}
  */
  readonly replicas: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#security_group_id SaeApplication#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#sls_configs SaeApplication#sls_configs}
  */
  readonly slsConfigs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#status SaeApplication#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#tags SaeApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#termination_grace_period_seconds SaeApplication#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#timezone SaeApplication#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#tomcat_config SaeApplication#tomcat_config}
  */
  readonly tomcatConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#update_strategy SaeApplication#update_strategy}
  */
  readonly updateStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#version_id SaeApplication#version_id}
  */
  readonly versionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#vpc_id SaeApplication#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#vswitch_id SaeApplication#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#war_start_options SaeApplication#war_start_options}
  */
  readonly warStartOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#web_container SaeApplication#web_container}
  */
  readonly webContainer?: string;
  /**
  * config_map_mount_desc_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#config_map_mount_desc_v2 SaeApplication#config_map_mount_desc_v2}
  */
  readonly configMapMountDescV2?: SaeApplicationConfigMapMountDescV2[] | cdktf.IResolvable;
  /**
  * custom_host_alias_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#custom_host_alias_v2 SaeApplication#custom_host_alias_v2}
  */
  readonly customHostAliasV2?: SaeApplicationCustomHostAliasV2[] | cdktf.IResolvable;
  /**
  * kafka_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#kafka_configs SaeApplication#kafka_configs}
  */
  readonly kafkaConfigs?: SaeApplicationKafkaConfigs;
  /**
  * liveness_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#liveness_v2 SaeApplication#liveness_v2}
  */
  readonly livenessV2?: SaeApplicationLivenessV2;
  /**
  * nas_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#nas_configs SaeApplication#nas_configs}
  */
  readonly nasConfigs?: SaeApplicationNasConfigs[] | cdktf.IResolvable;
  /**
  * oss_mount_descs_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#oss_mount_descs_v2 SaeApplication#oss_mount_descs_v2}
  */
  readonly ossMountDescsV2?: SaeApplicationOssMountDescsV2[] | cdktf.IResolvable;
  /**
  * post_start_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#post_start_v2 SaeApplication#post_start_v2}
  */
  readonly postStartV2?: SaeApplicationPostStartV2;
  /**
  * pre_stop_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#pre_stop_v2 SaeApplication#pre_stop_v2}
  */
  readonly preStopV2?: SaeApplicationPreStopV2;
  /**
  * pvtz_discovery_svc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#pvtz_discovery_svc SaeApplication#pvtz_discovery_svc}
  */
  readonly pvtzDiscoverySvc?: SaeApplicationPvtzDiscoverySvc;
  /**
  * readiness_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#readiness_v2 SaeApplication#readiness_v2}
  */
  readonly readinessV2?: SaeApplicationReadinessV2;
  /**
  * tomcat_config_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#tomcat_config_v2 SaeApplication#tomcat_config_v2}
  */
  readonly tomcatConfigV2?: SaeApplicationTomcatConfigV2;
  /**
  * update_strategy_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#update_strategy_v2 SaeApplication#update_strategy_v2}
  */
  readonly updateStrategyV2?: SaeApplicationUpdateStrategyV2;
}
export interface SaeApplicationConfigMapMountDescV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#config_map_id SaeApplication#config_map_id}
  */
  readonly configMapId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#key SaeApplication#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#mount_path SaeApplication#mount_path}
  */
  readonly mountPath?: string;
}

export function saeApplicationConfigMapMountDescV2ToTerraform(struct?: SaeApplicationConfigMapMountDescV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_id: cdktf.stringToTerraform(struct!.configMapId),
    key: cdktf.stringToTerraform(struct!.key),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function saeApplicationConfigMapMountDescV2ToHclTerraform(struct?: SaeApplicationConfigMapMountDescV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_id: {
      value: cdktf.stringToHclTerraform(struct!.configMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationConfigMapMountDescV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaeApplicationConfigMapMountDescV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapId = this._configMapId;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationConfigMapMountDescV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapId = undefined;
      this._key = undefined;
      this._mountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapId = value.configMapId;
      this._key = value.key;
      this._mountPath = value.mountPath;
    }
  }

  // config_map_id - computed: true, optional: true, required: false
  private _configMapId?: string; 
  public get configMapId() {
    return this.getStringAttribute('config_map_id');
  }
  public set configMapId(value: string) {
    this._configMapId = value;
  }
  public resetConfigMapId() {
    this._configMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapIdInput() {
    return this._configMapId;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}

export class SaeApplicationConfigMapMountDescV2List extends cdktf.ComplexList {
  public internalValue? : SaeApplicationConfigMapMountDescV2[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SaeApplicationConfigMapMountDescV2OutputReference {
    return new SaeApplicationConfigMapMountDescV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationCustomHostAliasV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#host_name SaeApplication#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#ip SaeApplication#ip}
  */
  readonly ip?: string;
}

export function saeApplicationCustomHostAliasV2ToTerraform(struct?: SaeApplicationCustomHostAliasV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function saeApplicationCustomHostAliasV2ToHclTerraform(struct?: SaeApplicationCustomHostAliasV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationCustomHostAliasV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaeApplicationCustomHostAliasV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationCustomHostAliasV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._ip = value.ip;
    }
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class SaeApplicationCustomHostAliasV2List extends cdktf.ComplexList {
  public internalValue? : SaeApplicationCustomHostAliasV2[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SaeApplicationCustomHostAliasV2OutputReference {
    return new SaeApplicationCustomHostAliasV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationKafkaConfigsKafkaConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#kafka_topic SaeApplication#kafka_topic}
  */
  readonly kafkaTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#log_dir SaeApplication#log_dir}
  */
  readonly logDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#log_type SaeApplication#log_type}
  */
  readonly logType?: string;
}

export function saeApplicationKafkaConfigsKafkaConfigsToTerraform(struct?: SaeApplicationKafkaConfigsKafkaConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_topic: cdktf.stringToTerraform(struct!.kafkaTopic),
    log_dir: cdktf.stringToTerraform(struct!.logDir),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


export function saeApplicationKafkaConfigsKafkaConfigsToHclTerraform(struct?: SaeApplicationKafkaConfigsKafkaConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_topic: {
      value: cdktf.stringToHclTerraform(struct!.kafkaTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_dir: {
      value: cdktf.stringToHclTerraform(struct!.logDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationKafkaConfigsKafkaConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaeApplicationKafkaConfigsKafkaConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopic = this._kafkaTopic;
    }
    if (this._logDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDir = this._logDir;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationKafkaConfigsKafkaConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kafkaTopic = undefined;
      this._logDir = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kafkaTopic = value.kafkaTopic;
      this._logDir = value.logDir;
      this._logType = value.logType;
    }
  }

  // kafka_topic - computed: false, optional: true, required: false
  private _kafkaTopic?: string; 
  public get kafkaTopic() {
    return this.getStringAttribute('kafka_topic');
  }
  public set kafkaTopic(value: string) {
    this._kafkaTopic = value;
  }
  public resetKafkaTopic() {
    this._kafkaTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicInput() {
    return this._kafkaTopic;
  }

  // log_dir - computed: false, optional: true, required: false
  private _logDir?: string; 
  public get logDir() {
    return this.getStringAttribute('log_dir');
  }
  public set logDir(value: string) {
    this._logDir = value;
  }
  public resetLogDir() {
    this._logDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDirInput() {
    return this._logDir;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class SaeApplicationKafkaConfigsKafkaConfigsList extends cdktf.ComplexList {
  public internalValue? : SaeApplicationKafkaConfigsKafkaConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SaeApplicationKafkaConfigsKafkaConfigsOutputReference {
    return new SaeApplicationKafkaConfigsKafkaConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationKafkaConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#kafka_endpoint SaeApplication#kafka_endpoint}
  */
  readonly kafkaEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#kafka_instance_id SaeApplication#kafka_instance_id}
  */
  readonly kafkaInstanceId?: string;
  /**
  * kafka_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#kafka_configs SaeApplication#kafka_configs}
  */
  readonly kafkaConfigs?: SaeApplicationKafkaConfigsKafkaConfigs[] | cdktf.IResolvable;
}

export function saeApplicationKafkaConfigsToTerraform(struct?: SaeApplicationKafkaConfigsOutputReference | SaeApplicationKafkaConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_endpoint: cdktf.stringToTerraform(struct!.kafkaEndpoint),
    kafka_instance_id: cdktf.stringToTerraform(struct!.kafkaInstanceId),
    kafka_configs: cdktf.listMapper(saeApplicationKafkaConfigsKafkaConfigsToTerraform, true)(struct!.kafkaConfigs),
  }
}


export function saeApplicationKafkaConfigsToHclTerraform(struct?: SaeApplicationKafkaConfigsOutputReference | SaeApplicationKafkaConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.kafkaEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.kafkaInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_configs: {
      value: cdktf.listMapperHcl(saeApplicationKafkaConfigsKafkaConfigsToHclTerraform, true)(struct!.kafkaConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationKafkaConfigsKafkaConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationKafkaConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationKafkaConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaEndpoint = this._kafkaEndpoint;
    }
    if (this._kafkaInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaInstanceId = this._kafkaInstanceId;
    }
    if (this._kafkaConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConfigs = this._kafkaConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationKafkaConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaEndpoint = undefined;
      this._kafkaInstanceId = undefined;
      this._kafkaConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaEndpoint = value.kafkaEndpoint;
      this._kafkaInstanceId = value.kafkaInstanceId;
      this._kafkaConfigs.internalValue = value.kafkaConfigs;
    }
  }

  // kafka_endpoint - computed: false, optional: true, required: false
  private _kafkaEndpoint?: string; 
  public get kafkaEndpoint() {
    return this.getStringAttribute('kafka_endpoint');
  }
  public set kafkaEndpoint(value: string) {
    this._kafkaEndpoint = value;
  }
  public resetKafkaEndpoint() {
    this._kafkaEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaEndpointInput() {
    return this._kafkaEndpoint;
  }

  // kafka_instance_id - computed: false, optional: true, required: false
  private _kafkaInstanceId?: string; 
  public get kafkaInstanceId() {
    return this.getStringAttribute('kafka_instance_id');
  }
  public set kafkaInstanceId(value: string) {
    this._kafkaInstanceId = value;
  }
  public resetKafkaInstanceId() {
    this._kafkaInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInstanceIdInput() {
    return this._kafkaInstanceId;
  }

  // kafka_configs - computed: false, optional: true, required: false
  private _kafkaConfigs = new SaeApplicationKafkaConfigsKafkaConfigsList(this, "kafka_configs", false);
  public get kafkaConfigs() {
    return this._kafkaConfigs;
  }
  public putKafkaConfigs(value: SaeApplicationKafkaConfigsKafkaConfigs[] | cdktf.IResolvable) {
    this._kafkaConfigs.internalValue = value;
  }
  public resetKafkaConfigs() {
    this._kafkaConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConfigsInput() {
    return this._kafkaConfigs.internalValue;
  }
}
export interface SaeApplicationLivenessV2Exec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#command SaeApplication#command}
  */
  readonly command?: string[];
}

export function saeApplicationLivenessV2ExecToTerraform(struct?: SaeApplicationLivenessV2ExecOutputReference | SaeApplicationLivenessV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function saeApplicationLivenessV2ExecToHclTerraform(struct?: SaeApplicationLivenessV2ExecOutputReference | SaeApplicationLivenessV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationLivenessV2ExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationLivenessV2Exec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationLivenessV2Exec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface SaeApplicationLivenessV2HttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#is_contain_key_word SaeApplication#is_contain_key_word}
  */
  readonly isContainKeyWord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#key_word SaeApplication#key_word}
  */
  readonly keyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#path SaeApplication#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#port SaeApplication#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#scheme SaeApplication#scheme}
  */
  readonly scheme?: string;
}

export function saeApplicationLivenessV2HttpGetToTerraform(struct?: SaeApplicationLivenessV2HttpGetOutputReference | SaeApplicationLivenessV2HttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_contain_key_word: cdktf.booleanToTerraform(struct!.isContainKeyWord),
    key_word: cdktf.stringToTerraform(struct!.keyWord),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function saeApplicationLivenessV2HttpGetToHclTerraform(struct?: SaeApplicationLivenessV2HttpGetOutputReference | SaeApplicationLivenessV2HttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_contain_key_word: {
      value: cdktf.booleanToHclTerraform(struct!.isContainKeyWord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_word: {
      value: cdktf.stringToHclTerraform(struct!.keyWord),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationLivenessV2HttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationLivenessV2HttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isContainKeyWord !== undefined) {
      hasAnyValues = true;
      internalValueResult.isContainKeyWord = this._isContainKeyWord;
    }
    if (this._keyWord !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyWord = this._keyWord;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationLivenessV2HttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isContainKeyWord = undefined;
      this._keyWord = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isContainKeyWord = value.isContainKeyWord;
      this._keyWord = value.keyWord;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // is_contain_key_word - computed: true, optional: true, required: false
  private _isContainKeyWord?: boolean | cdktf.IResolvable; 
  public get isContainKeyWord() {
    return this.getBooleanAttribute('is_contain_key_word');
  }
  public set isContainKeyWord(value: boolean | cdktf.IResolvable) {
    this._isContainKeyWord = value;
  }
  public resetIsContainKeyWord() {
    this._isContainKeyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContainKeyWordInput() {
    return this._isContainKeyWord;
  }

  // key_word - computed: true, optional: true, required: false
  private _keyWord?: string; 
  public get keyWord() {
    return this.getStringAttribute('key_word');
  }
  public set keyWord(value: string) {
    this._keyWord = value;
  }
  public resetKeyWord() {
    this._keyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWordInput() {
    return this._keyWord;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface SaeApplicationLivenessV2TcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#port SaeApplication#port}
  */
  readonly port?: number;
}

export function saeApplicationLivenessV2TcpSocketToTerraform(struct?: SaeApplicationLivenessV2TcpSocketOutputReference | SaeApplicationLivenessV2TcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function saeApplicationLivenessV2TcpSocketToHclTerraform(struct?: SaeApplicationLivenessV2TcpSocketOutputReference | SaeApplicationLivenessV2TcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationLivenessV2TcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationLivenessV2TcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationLivenessV2TcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface SaeApplicationLivenessV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#failure_threshold SaeApplication#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#initial_delay_seconds SaeApplication#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#period_seconds SaeApplication#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#timeout_seconds SaeApplication#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#exec SaeApplication#exec}
  */
  readonly exec?: SaeApplicationLivenessV2Exec;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#http_get SaeApplication#http_get}
  */
  readonly httpGet?: SaeApplicationLivenessV2HttpGet;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#tcp_socket SaeApplication#tcp_socket}
  */
  readonly tcpSocket?: SaeApplicationLivenessV2TcpSocket;
}

export function saeApplicationLivenessV2ToTerraform(struct?: SaeApplicationLivenessV2OutputReference | SaeApplicationLivenessV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: saeApplicationLivenessV2ExecToTerraform(struct!.exec),
    http_get: saeApplicationLivenessV2HttpGetToTerraform(struct!.httpGet),
    tcp_socket: saeApplicationLivenessV2TcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function saeApplicationLivenessV2ToHclTerraform(struct?: SaeApplicationLivenessV2OutputReference | SaeApplicationLivenessV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: saeApplicationLivenessV2ExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationLivenessV2ExecList",
    },
    http_get: {
      value: saeApplicationLivenessV2HttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationLivenessV2HttpGetList",
    },
    tcp_socket: {
      value: saeApplicationLivenessV2TcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationLivenessV2TcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationLivenessV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationLivenessV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationLivenessV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new SaeApplicationLivenessV2ExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: SaeApplicationLivenessV2Exec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new SaeApplicationLivenessV2HttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: SaeApplicationLivenessV2HttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new SaeApplicationLivenessV2TcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: SaeApplicationLivenessV2TcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface SaeApplicationNasConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#mount_domain SaeApplication#mount_domain}
  */
  readonly mountDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#mount_path SaeApplication#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#nas_id SaeApplication#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#nas_path SaeApplication#nas_path}
  */
  readonly nasPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#read_only SaeApplication#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function saeApplicationNasConfigsToTerraform(struct?: SaeApplicationNasConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_domain: cdktf.stringToTerraform(struct!.mountDomain),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    nas_id: cdktf.stringToTerraform(struct!.nasId),
    nas_path: cdktf.stringToTerraform(struct!.nasPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function saeApplicationNasConfigsToHclTerraform(struct?: SaeApplicationNasConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_domain: {
      value: cdktf.stringToHclTerraform(struct!.mountDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nas_id: {
      value: cdktf.stringToHclTerraform(struct!.nasId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nas_path: {
      value: cdktf.stringToHclTerraform(struct!.nasPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationNasConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaeApplicationNasConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDomain = this._mountDomain;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._nasId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nasId = this._nasId;
    }
    if (this._nasPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nasPath = this._nasPath;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationNasConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountDomain = undefined;
      this._mountPath = undefined;
      this._nasId = undefined;
      this._nasPath = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountDomain = value.mountDomain;
      this._mountPath = value.mountPath;
      this._nasId = value.nasId;
      this._nasPath = value.nasPath;
      this._readOnly = value.readOnly;
    }
  }

  // mount_domain - computed: false, optional: true, required: false
  private _mountDomain?: string; 
  public get mountDomain() {
    return this.getStringAttribute('mount_domain');
  }
  public set mountDomain(value: string) {
    this._mountDomain = value;
  }
  public resetMountDomain() {
    this._mountDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDomainInput() {
    return this._mountDomain;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // nas_id - computed: false, optional: true, required: false
  private _nasId?: string; 
  public get nasId() {
    return this.getStringAttribute('nas_id');
  }
  public set nasId(value: string) {
    this._nasId = value;
  }
  public resetNasId() {
    this._nasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdInput() {
    return this._nasId;
  }

  // nas_path - computed: false, optional: true, required: false
  private _nasPath?: string; 
  public get nasPath() {
    return this.getStringAttribute('nas_path');
  }
  public set nasPath(value: string) {
    this._nasPath = value;
  }
  public resetNasPath() {
    this._nasPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasPathInput() {
    return this._nasPath;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class SaeApplicationNasConfigsList extends cdktf.ComplexList {
  public internalValue? : SaeApplicationNasConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SaeApplicationNasConfigsOutputReference {
    return new SaeApplicationNasConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationOssMountDescsV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#bucket_name SaeApplication#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#bucket_path SaeApplication#bucket_path}
  */
  readonly bucketPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#mount_path SaeApplication#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#read_only SaeApplication#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function saeApplicationOssMountDescsV2ToTerraform(struct?: SaeApplicationOssMountDescsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_path: cdktf.stringToTerraform(struct!.bucketPath),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function saeApplicationOssMountDescsV2ToHclTerraform(struct?: SaeApplicationOssMountDescsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_path: {
      value: cdktf.stringToHclTerraform(struct!.bucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationOssMountDescsV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaeApplicationOssMountDescsV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPath = this._bucketPath;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationOssMountDescsV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPath = undefined;
      this._mountPath = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPath = value.bucketPath;
      this._mountPath = value.mountPath;
      this._readOnly = value.readOnly;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_path - computed: true, optional: true, required: false
  private _bucketPath?: string; 
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  public resetBucketPath() {
    this._bucketPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class SaeApplicationOssMountDescsV2List extends cdktf.ComplexList {
  public internalValue? : SaeApplicationOssMountDescsV2[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SaeApplicationOssMountDescsV2OutputReference {
    return new SaeApplicationOssMountDescsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationPostStartV2Exec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#command SaeApplication#command}
  */
  readonly command?: string[];
}

export function saeApplicationPostStartV2ExecToTerraform(struct?: SaeApplicationPostStartV2ExecOutputReference | SaeApplicationPostStartV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function saeApplicationPostStartV2ExecToHclTerraform(struct?: SaeApplicationPostStartV2ExecOutputReference | SaeApplicationPostStartV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationPostStartV2ExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationPostStartV2Exec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationPostStartV2Exec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface SaeApplicationPostStartV2 {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#exec SaeApplication#exec}
  */
  readonly exec?: SaeApplicationPostStartV2Exec;
}

export function saeApplicationPostStartV2ToTerraform(struct?: SaeApplicationPostStartV2OutputReference | SaeApplicationPostStartV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: saeApplicationPostStartV2ExecToTerraform(struct!.exec),
  }
}


export function saeApplicationPostStartV2ToHclTerraform(struct?: SaeApplicationPostStartV2OutputReference | SaeApplicationPostStartV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: saeApplicationPostStartV2ExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationPostStartV2ExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationPostStartV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationPostStartV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationPostStartV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new SaeApplicationPostStartV2ExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: SaeApplicationPostStartV2Exec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}
export interface SaeApplicationPreStopV2Exec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#command SaeApplication#command}
  */
  readonly command?: string[];
}

export function saeApplicationPreStopV2ExecToTerraform(struct?: SaeApplicationPreStopV2ExecOutputReference | SaeApplicationPreStopV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function saeApplicationPreStopV2ExecToHclTerraform(struct?: SaeApplicationPreStopV2ExecOutputReference | SaeApplicationPreStopV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationPreStopV2ExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationPreStopV2Exec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationPreStopV2Exec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface SaeApplicationPreStopV2 {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#exec SaeApplication#exec}
  */
  readonly exec?: SaeApplicationPreStopV2Exec;
}

export function saeApplicationPreStopV2ToTerraform(struct?: SaeApplicationPreStopV2OutputReference | SaeApplicationPreStopV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: saeApplicationPreStopV2ExecToTerraform(struct!.exec),
  }
}


export function saeApplicationPreStopV2ToHclTerraform(struct?: SaeApplicationPreStopV2OutputReference | SaeApplicationPreStopV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: saeApplicationPreStopV2ExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationPreStopV2ExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationPreStopV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationPreStopV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationPreStopV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new SaeApplicationPreStopV2ExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: SaeApplicationPreStopV2Exec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}
export interface SaeApplicationPvtzDiscoverySvcPortProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#port SaeApplication#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#protocol SaeApplication#protocol}
  */
  readonly protocol?: string;
}

export function saeApplicationPvtzDiscoverySvcPortProtocolsToTerraform(struct?: SaeApplicationPvtzDiscoverySvcPortProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function saeApplicationPvtzDiscoverySvcPortProtocolsToHclTerraform(struct?: SaeApplicationPvtzDiscoverySvcPortProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationPvtzDiscoverySvcPortProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaeApplicationPvtzDiscoverySvcPortProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationPvtzDiscoverySvcPortProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class SaeApplicationPvtzDiscoverySvcPortProtocolsList extends cdktf.ComplexList {
  public internalValue? : SaeApplicationPvtzDiscoverySvcPortProtocols[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SaeApplicationPvtzDiscoverySvcPortProtocolsOutputReference {
    return new SaeApplicationPvtzDiscoverySvcPortProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationPvtzDiscoverySvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#enable SaeApplication#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#namespace_id SaeApplication#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#service_name SaeApplication#service_name}
  */
  readonly serviceName?: string;
  /**
  * port_protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#port_protocols SaeApplication#port_protocols}
  */
  readonly portProtocols?: SaeApplicationPvtzDiscoverySvcPortProtocols[] | cdktf.IResolvable;
}

export function saeApplicationPvtzDiscoverySvcToTerraform(struct?: SaeApplicationPvtzDiscoverySvcOutputReference | SaeApplicationPvtzDiscoverySvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    port_protocols: cdktf.listMapper(saeApplicationPvtzDiscoverySvcPortProtocolsToTerraform, true)(struct!.portProtocols),
  }
}


export function saeApplicationPvtzDiscoverySvcToHclTerraform(struct?: SaeApplicationPvtzDiscoverySvcOutputReference | SaeApplicationPvtzDiscoverySvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_protocols: {
      value: cdktf.listMapperHcl(saeApplicationPvtzDiscoverySvcPortProtocolsToHclTerraform, true)(struct!.portProtocols),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationPvtzDiscoverySvcPortProtocolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationPvtzDiscoverySvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationPvtzDiscoverySvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._portProtocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portProtocols = this._portProtocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationPvtzDiscoverySvc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._namespaceId = undefined;
      this._serviceName = undefined;
      this._portProtocols.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._namespaceId = value.namespaceId;
      this._serviceName = value.serviceName;
      this._portProtocols.internalValue = value.portProtocols;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // namespace_id - computed: false, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // port_protocols - computed: false, optional: true, required: false
  private _portProtocols = new SaeApplicationPvtzDiscoverySvcPortProtocolsList(this, "port_protocols", false);
  public get portProtocols() {
    return this._portProtocols;
  }
  public putPortProtocols(value: SaeApplicationPvtzDiscoverySvcPortProtocols[] | cdktf.IResolvable) {
    this._portProtocols.internalValue = value;
  }
  public resetPortProtocols() {
    this._portProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portProtocolsInput() {
    return this._portProtocols.internalValue;
  }
}
export interface SaeApplicationReadinessV2Exec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#command SaeApplication#command}
  */
  readonly command?: string[];
}

export function saeApplicationReadinessV2ExecToTerraform(struct?: SaeApplicationReadinessV2ExecOutputReference | SaeApplicationReadinessV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function saeApplicationReadinessV2ExecToHclTerraform(struct?: SaeApplicationReadinessV2ExecOutputReference | SaeApplicationReadinessV2Exec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationReadinessV2ExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationReadinessV2Exec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationReadinessV2Exec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface SaeApplicationReadinessV2HttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#is_contain_key_word SaeApplication#is_contain_key_word}
  */
  readonly isContainKeyWord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#key_word SaeApplication#key_word}
  */
  readonly keyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#path SaeApplication#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#port SaeApplication#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#scheme SaeApplication#scheme}
  */
  readonly scheme?: string;
}

export function saeApplicationReadinessV2HttpGetToTerraform(struct?: SaeApplicationReadinessV2HttpGetOutputReference | SaeApplicationReadinessV2HttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_contain_key_word: cdktf.booleanToTerraform(struct!.isContainKeyWord),
    key_word: cdktf.stringToTerraform(struct!.keyWord),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function saeApplicationReadinessV2HttpGetToHclTerraform(struct?: SaeApplicationReadinessV2HttpGetOutputReference | SaeApplicationReadinessV2HttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_contain_key_word: {
      value: cdktf.booleanToHclTerraform(struct!.isContainKeyWord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_word: {
      value: cdktf.stringToHclTerraform(struct!.keyWord),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationReadinessV2HttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationReadinessV2HttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isContainKeyWord !== undefined) {
      hasAnyValues = true;
      internalValueResult.isContainKeyWord = this._isContainKeyWord;
    }
    if (this._keyWord !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyWord = this._keyWord;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationReadinessV2HttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isContainKeyWord = undefined;
      this._keyWord = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isContainKeyWord = value.isContainKeyWord;
      this._keyWord = value.keyWord;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // is_contain_key_word - computed: true, optional: true, required: false
  private _isContainKeyWord?: boolean | cdktf.IResolvable; 
  public get isContainKeyWord() {
    return this.getBooleanAttribute('is_contain_key_word');
  }
  public set isContainKeyWord(value: boolean | cdktf.IResolvable) {
    this._isContainKeyWord = value;
  }
  public resetIsContainKeyWord() {
    this._isContainKeyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContainKeyWordInput() {
    return this._isContainKeyWord;
  }

  // key_word - computed: true, optional: true, required: false
  private _keyWord?: string; 
  public get keyWord() {
    return this.getStringAttribute('key_word');
  }
  public set keyWord(value: string) {
    this._keyWord = value;
  }
  public resetKeyWord() {
    this._keyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWordInput() {
    return this._keyWord;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface SaeApplicationReadinessV2TcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#port SaeApplication#port}
  */
  readonly port?: number;
}

export function saeApplicationReadinessV2TcpSocketToTerraform(struct?: SaeApplicationReadinessV2TcpSocketOutputReference | SaeApplicationReadinessV2TcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function saeApplicationReadinessV2TcpSocketToHclTerraform(struct?: SaeApplicationReadinessV2TcpSocketOutputReference | SaeApplicationReadinessV2TcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationReadinessV2TcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationReadinessV2TcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationReadinessV2TcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface SaeApplicationReadinessV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#failure_threshold SaeApplication#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#initial_delay_seconds SaeApplication#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#period_seconds SaeApplication#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#success_threshold SaeApplication#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#timeout_seconds SaeApplication#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#exec SaeApplication#exec}
  */
  readonly exec?: SaeApplicationReadinessV2Exec;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#http_get SaeApplication#http_get}
  */
  readonly httpGet?: SaeApplicationReadinessV2HttpGet;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#tcp_socket SaeApplication#tcp_socket}
  */
  readonly tcpSocket?: SaeApplicationReadinessV2TcpSocket;
}

export function saeApplicationReadinessV2ToTerraform(struct?: SaeApplicationReadinessV2OutputReference | SaeApplicationReadinessV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: saeApplicationReadinessV2ExecToTerraform(struct!.exec),
    http_get: saeApplicationReadinessV2HttpGetToTerraform(struct!.httpGet),
    tcp_socket: saeApplicationReadinessV2TcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function saeApplicationReadinessV2ToHclTerraform(struct?: SaeApplicationReadinessV2OutputReference | SaeApplicationReadinessV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: saeApplicationReadinessV2ExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationReadinessV2ExecList",
    },
    http_get: {
      value: saeApplicationReadinessV2HttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationReadinessV2HttpGetList",
    },
    tcp_socket: {
      value: saeApplicationReadinessV2TcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationReadinessV2TcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationReadinessV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationReadinessV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationReadinessV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new SaeApplicationReadinessV2ExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: SaeApplicationReadinessV2Exec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new SaeApplicationReadinessV2HttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: SaeApplicationReadinessV2HttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new SaeApplicationReadinessV2TcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: SaeApplicationReadinessV2TcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface SaeApplicationTomcatConfigV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#context_path SaeApplication#context_path}
  */
  readonly contextPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#max_threads SaeApplication#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#port SaeApplication#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#uri_encoding SaeApplication#uri_encoding}
  */
  readonly uriEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#use_body_encoding_for_uri SaeApplication#use_body_encoding_for_uri}
  */
  readonly useBodyEncodingForUri?: string;
}

export function saeApplicationTomcatConfigV2ToTerraform(struct?: SaeApplicationTomcatConfigV2OutputReference | SaeApplicationTomcatConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_path: cdktf.stringToTerraform(struct!.contextPath),
    max_threads: cdktf.numberToTerraform(struct!.maxThreads),
    port: cdktf.numberToTerraform(struct!.port),
    uri_encoding: cdktf.stringToTerraform(struct!.uriEncoding),
    use_body_encoding_for_uri: cdktf.stringToTerraform(struct!.useBodyEncodingForUri),
  }
}


export function saeApplicationTomcatConfigV2ToHclTerraform(struct?: SaeApplicationTomcatConfigV2OutputReference | SaeApplicationTomcatConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_path: {
      value: cdktf.stringToHclTerraform(struct!.contextPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri_encoding: {
      value: cdktf.stringToHclTerraform(struct!.uriEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_body_encoding_for_uri: {
      value: cdktf.stringToHclTerraform(struct!.useBodyEncodingForUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationTomcatConfigV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationTomcatConfigV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextPath = this._contextPath;
    }
    if (this._maxThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreads = this._maxThreads;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._uriEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriEncoding = this._uriEncoding;
    }
    if (this._useBodyEncodingForUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBodyEncodingForUri = this._useBodyEncodingForUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationTomcatConfigV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextPath = undefined;
      this._maxThreads = undefined;
      this._port = undefined;
      this._uriEncoding = undefined;
      this._useBodyEncodingForUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextPath = value.contextPath;
      this._maxThreads = value.maxThreads;
      this._port = value.port;
      this._uriEncoding = value.uriEncoding;
      this._useBodyEncodingForUri = value.useBodyEncodingForUri;
    }
  }

  // context_path - computed: true, optional: true, required: false
  private _contextPath?: string; 
  public get contextPath() {
    return this.getStringAttribute('context_path');
  }
  public set contextPath(value: string) {
    this._contextPath = value;
  }
  public resetContextPath() {
    this._contextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextPathInput() {
    return this._contextPath;
  }

  // max_threads - computed: true, optional: true, required: false
  private _maxThreads?: number; 
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }
  public set maxThreads(value: number) {
    this._maxThreads = value;
  }
  public resetMaxThreads() {
    this._maxThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsInput() {
    return this._maxThreads;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // uri_encoding - computed: true, optional: true, required: false
  private _uriEncoding?: string; 
  public get uriEncoding() {
    return this.getStringAttribute('uri_encoding');
  }
  public set uriEncoding(value: string) {
    this._uriEncoding = value;
  }
  public resetUriEncoding() {
    this._uriEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriEncodingInput() {
    return this._uriEncoding;
  }

  // use_body_encoding_for_uri - computed: true, optional: true, required: false
  private _useBodyEncodingForUri?: string; 
  public get useBodyEncodingForUri() {
    return this.getStringAttribute('use_body_encoding_for_uri');
  }
  public set useBodyEncodingForUri(value: string) {
    this._useBodyEncodingForUri = value;
  }
  public resetUseBodyEncodingForUri() {
    this._useBodyEncodingForUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBodyEncodingForUriInput() {
    return this._useBodyEncodingForUri;
  }
}
export interface SaeApplicationUpdateStrategyV2BatchUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#batch SaeApplication#batch}
  */
  readonly batch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#batch_wait_time SaeApplication#batch_wait_time}
  */
  readonly batchWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#release_type SaeApplication#release_type}
  */
  readonly releaseType?: string;
}

export function saeApplicationUpdateStrategyV2BatchUpdateToTerraform(struct?: SaeApplicationUpdateStrategyV2BatchUpdateOutputReference | SaeApplicationUpdateStrategyV2BatchUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch: cdktf.numberToTerraform(struct!.batch),
    batch_wait_time: cdktf.numberToTerraform(struct!.batchWaitTime),
    release_type: cdktf.stringToTerraform(struct!.releaseType),
  }
}


export function saeApplicationUpdateStrategyV2BatchUpdateToHclTerraform(struct?: SaeApplicationUpdateStrategyV2BatchUpdateOutputReference | SaeApplicationUpdateStrategyV2BatchUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch: {
      value: cdktf.numberToHclTerraform(struct!.batch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.batchWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    release_type: {
      value: cdktf.stringToHclTerraform(struct!.releaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationUpdateStrategyV2BatchUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationUpdateStrategyV2BatchUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batch !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch;
    }
    if (this._batchWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchWaitTime = this._batchWaitTime;
    }
    if (this._releaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseType = this._releaseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationUpdateStrategyV2BatchUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batch = undefined;
      this._batchWaitTime = undefined;
      this._releaseType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batch = value.batch;
      this._batchWaitTime = value.batchWaitTime;
      this._releaseType = value.releaseType;
    }
  }

  // batch - computed: true, optional: true, required: false
  private _batch?: number; 
  public get batch() {
    return this.getNumberAttribute('batch');
  }
  public set batch(value: number) {
    this._batch = value;
  }
  public resetBatch() {
    this._batch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch;
  }

  // batch_wait_time - computed: true, optional: true, required: false
  private _batchWaitTime?: number; 
  public get batchWaitTime() {
    return this.getNumberAttribute('batch_wait_time');
  }
  public set batchWaitTime(value: number) {
    this._batchWaitTime = value;
  }
  public resetBatchWaitTime() {
    this._batchWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchWaitTimeInput() {
    return this._batchWaitTime;
  }

  // release_type - computed: true, optional: true, required: false
  private _releaseType?: string; 
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }
  public set releaseType(value: string) {
    this._releaseType = value;
  }
  public resetReleaseType() {
    this._releaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseTypeInput() {
    return this._releaseType;
  }
}
export interface SaeApplicationUpdateStrategyV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#type SaeApplication#type}
  */
  readonly type?: string;
  /**
  * batch_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#batch_update SaeApplication#batch_update}
  */
  readonly batchUpdate?: SaeApplicationUpdateStrategyV2BatchUpdate;
}

export function saeApplicationUpdateStrategyV2ToTerraform(struct?: SaeApplicationUpdateStrategyV2OutputReference | SaeApplicationUpdateStrategyV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    batch_update: saeApplicationUpdateStrategyV2BatchUpdateToTerraform(struct!.batchUpdate),
  }
}


export function saeApplicationUpdateStrategyV2ToHclTerraform(struct?: SaeApplicationUpdateStrategyV2OutputReference | SaeApplicationUpdateStrategyV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_update: {
      value: saeApplicationUpdateStrategyV2BatchUpdateToHclTerraform(struct!.batchUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationUpdateStrategyV2BatchUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationUpdateStrategyV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationUpdateStrategyV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._batchUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchUpdate = this._batchUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationUpdateStrategyV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._batchUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._batchUpdate.internalValue = value.batchUpdate;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // batch_update - computed: false, optional: true, required: false
  private _batchUpdate = new SaeApplicationUpdateStrategyV2BatchUpdateOutputReference(this, "batch_update");
  public get batchUpdate() {
    return this._batchUpdate;
  }
  public putBatchUpdate(value: SaeApplicationUpdateStrategyV2BatchUpdate) {
    this._batchUpdate.internalValue = value;
  }
  public resetBatchUpdate() {
    this._batchUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchUpdateInput() {
    return this._batchUpdate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application alicloud_sae_application}
*/
export class SaeApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sae_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SaeApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaeApplication to import
  * @param importFromId The id of the existing SaeApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaeApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sae_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sae_application alicloud_sae_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaeApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: SaeApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sae_application',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acrAssumeRoleArn = config.acrAssumeRoleArn;
    this._acrInstanceId = config.acrInstanceId;
    this._appDescription = config.appDescription;
    this._appName = config.appName;
    this._autoConfig = config.autoConfig;
    this._autoEnableApplicationScalingRule = config.autoEnableApplicationScalingRule;
    this._batchWaitTime = config.batchWaitTime;
    this._changeOrderDesc = config.changeOrderDesc;
    this._command = config.command;
    this._commandArgs = config.commandArgs;
    this._commandArgsV2 = config.commandArgsV2;
    this._configMapMountDesc = config.configMapMountDesc;
    this._cpu = config.cpu;
    this._customHostAlias = config.customHostAlias;
    this._deploy = config.deploy;
    this._edasContainerVersion = config.edasContainerVersion;
    this._enableAhas = config.enableAhas;
    this._enableGreyTagRoute = config.enableGreyTagRoute;
    this._envs = config.envs;
    this._id = config.id;
    this._imagePullSecrets = config.imagePullSecrets;
    this._imageUrl = config.imageUrl;
    this._jarStartArgs = config.jarStartArgs;
    this._jarStartOptions = config.jarStartOptions;
    this._jdk = config.jdk;
    this._liveness = config.liveness;
    this._memory = config.memory;
    this._microRegistration = config.microRegistration;
    this._minReadyInstanceRatio = config.minReadyInstanceRatio;
    this._minReadyInstances = config.minReadyInstances;
    this._mountDesc = config.mountDesc;
    this._mountHost = config.mountHost;
    this._namespaceId = config.namespaceId;
    this._nasId = config.nasId;
    this._ossAkId = config.ossAkId;
    this._ossAkSecret = config.ossAkSecret;
    this._ossMountDescs = config.ossMountDescs;
    this._packageType = config.packageType;
    this._packageUrl = config.packageUrl;
    this._packageVersion = config.packageVersion;
    this._php = config.php;
    this._phpArmsConfigLocation = config.phpArmsConfigLocation;
    this._phpConfig = config.phpConfig;
    this._phpConfigLocation = config.phpConfigLocation;
    this._postStart = config.postStart;
    this._preStop = config.preStop;
    this._programmingLanguage = config.programmingLanguage;
    this._readiness = config.readiness;
    this._replicas = config.replicas;
    this._securityGroupId = config.securityGroupId;
    this._slsConfigs = config.slsConfigs;
    this._status = config.status;
    this._tags = config.tags;
    this._terminationGracePeriodSeconds = config.terminationGracePeriodSeconds;
    this._timezone = config.timezone;
    this._tomcatConfig = config.tomcatConfig;
    this._updateStrategy = config.updateStrategy;
    this._versionId = config.versionId;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._warStartOptions = config.warStartOptions;
    this._webContainer = config.webContainer;
    this._configMapMountDescV2.internalValue = config.configMapMountDescV2;
    this._customHostAliasV2.internalValue = config.customHostAliasV2;
    this._kafkaConfigs.internalValue = config.kafkaConfigs;
    this._livenessV2.internalValue = config.livenessV2;
    this._nasConfigs.internalValue = config.nasConfigs;
    this._ossMountDescsV2.internalValue = config.ossMountDescsV2;
    this._postStartV2.internalValue = config.postStartV2;
    this._preStopV2.internalValue = config.preStopV2;
    this._pvtzDiscoverySvc.internalValue = config.pvtzDiscoverySvc;
    this._readinessV2.internalValue = config.readinessV2;
    this._tomcatConfigV2.internalValue = config.tomcatConfigV2;
    this._updateStrategyV2.internalValue = config.updateStrategyV2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acr_assume_role_arn - computed: true, optional: true, required: false
  private _acrAssumeRoleArn?: string; 
  public get acrAssumeRoleArn() {
    return this.getStringAttribute('acr_assume_role_arn');
  }
  public set acrAssumeRoleArn(value: string) {
    this._acrAssumeRoleArn = value;
  }
  public resetAcrAssumeRoleArn() {
    this._acrAssumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrAssumeRoleArnInput() {
    return this._acrAssumeRoleArn;
  }

  // acr_instance_id - computed: false, optional: true, required: false
  private _acrInstanceId?: string; 
  public get acrInstanceId() {
    return this.getStringAttribute('acr_instance_id');
  }
  public set acrInstanceId(value: string) {
    this._acrInstanceId = value;
  }
  public resetAcrInstanceId() {
    this._acrInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrInstanceIdInput() {
    return this._acrInstanceId;
  }

  // app_description - computed: false, optional: true, required: false
  private _appDescription?: string; 
  public get appDescription() {
    return this.getStringAttribute('app_description');
  }
  public set appDescription(value: string) {
    this._appDescription = value;
  }
  public resetAppDescription() {
    this._appDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDescriptionInput() {
    return this._appDescription;
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // auto_config - computed: false, optional: true, required: false
  private _autoConfig?: boolean | cdktf.IResolvable; 
  public get autoConfig() {
    return this.getBooleanAttribute('auto_config');
  }
  public set autoConfig(value: boolean | cdktf.IResolvable) {
    this._autoConfig = value;
  }
  public resetAutoConfig() {
    this._autoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigInput() {
    return this._autoConfig;
  }

  // auto_enable_application_scaling_rule - computed: false, optional: true, required: false
  private _autoEnableApplicationScalingRule?: boolean | cdktf.IResolvable; 
  public get autoEnableApplicationScalingRule() {
    return this.getBooleanAttribute('auto_enable_application_scaling_rule');
  }
  public set autoEnableApplicationScalingRule(value: boolean | cdktf.IResolvable) {
    this._autoEnableApplicationScalingRule = value;
  }
  public resetAutoEnableApplicationScalingRule() {
    this._autoEnableApplicationScalingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableApplicationScalingRuleInput() {
    return this._autoEnableApplicationScalingRule;
  }

  // batch_wait_time - computed: true, optional: true, required: false
  private _batchWaitTime?: number; 
  public get batchWaitTime() {
    return this.getNumberAttribute('batch_wait_time');
  }
  public set batchWaitTime(value: number) {
    this._batchWaitTime = value;
  }
  public resetBatchWaitTime() {
    this._batchWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchWaitTimeInput() {
    return this._batchWaitTime;
  }

  // change_order_desc - computed: false, optional: true, required: false
  private _changeOrderDesc?: string; 
  public get changeOrderDesc() {
    return this.getStringAttribute('change_order_desc');
  }
  public set changeOrderDesc(value: string) {
    this._changeOrderDesc = value;
  }
  public resetChangeOrderDesc() {
    this._changeOrderDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeOrderDescInput() {
    return this._changeOrderDesc;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_args - computed: true, optional: true, required: false
  private _commandArgs?: string; 
  public get commandArgs() {
    return this.getStringAttribute('command_args');
  }
  public set commandArgs(value: string) {
    this._commandArgs = value;
  }
  public resetCommandArgs() {
    this._commandArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandArgsInput() {
    return this._commandArgs;
  }

  // command_args_v2 - computed: true, optional: true, required: false
  private _commandArgsV2?: string[]; 
  public get commandArgsV2() {
    return this.getListAttribute('command_args_v2');
  }
  public set commandArgsV2(value: string[]) {
    this._commandArgsV2 = value;
  }
  public resetCommandArgsV2() {
    this._commandArgsV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandArgsV2Input() {
    return this._commandArgsV2;
  }

  // config_map_mount_desc - computed: true, optional: true, required: false
  private _configMapMountDesc?: string; 
  public get configMapMountDesc() {
    return this.getStringAttribute('config_map_mount_desc');
  }
  public set configMapMountDesc(value: string) {
    this._configMapMountDesc = value;
  }
  public resetConfigMapMountDesc() {
    this._configMapMountDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapMountDescInput() {
    return this._configMapMountDesc;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // custom_host_alias - computed: true, optional: true, required: false
  private _customHostAlias?: string; 
  public get customHostAlias() {
    return this.getStringAttribute('custom_host_alias');
  }
  public set customHostAlias(value: string) {
    this._customHostAlias = value;
  }
  public resetCustomHostAlias() {
    this._customHostAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostAliasInput() {
    return this._customHostAlias;
  }

  // deploy - computed: false, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // edas_container_version - computed: false, optional: true, required: false
  private _edasContainerVersion?: string; 
  public get edasContainerVersion() {
    return this.getStringAttribute('edas_container_version');
  }
  public set edasContainerVersion(value: string) {
    this._edasContainerVersion = value;
  }
  public resetEdasContainerVersion() {
    this._edasContainerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasContainerVersionInput() {
    return this._edasContainerVersion;
  }

  // enable_ahas - computed: true, optional: true, required: false
  private _enableAhas?: string; 
  public get enableAhas() {
    return this.getStringAttribute('enable_ahas');
  }
  public set enableAhas(value: string) {
    this._enableAhas = value;
  }
  public resetEnableAhas() {
    this._enableAhas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAhasInput() {
    return this._enableAhas;
  }

  // enable_grey_tag_route - computed: true, optional: true, required: false
  private _enableGreyTagRoute?: boolean | cdktf.IResolvable; 
  public get enableGreyTagRoute() {
    return this.getBooleanAttribute('enable_grey_tag_route');
  }
  public set enableGreyTagRoute(value: boolean | cdktf.IResolvable) {
    this._enableGreyTagRoute = value;
  }
  public resetEnableGreyTagRoute() {
    this._enableGreyTagRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGreyTagRouteInput() {
    return this._enableGreyTagRoute;
  }

  // envs - computed: true, optional: true, required: false
  private _envs?: string; 
  public get envs() {
    return this.getStringAttribute('envs');
  }
  public set envs(value: string) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string; 
  public get imagePullSecrets() {
    return this.getStringAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // jar_start_args - computed: false, optional: true, required: false
  private _jarStartArgs?: string; 
  public get jarStartArgs() {
    return this.getStringAttribute('jar_start_args');
  }
  public set jarStartArgs(value: string) {
    this._jarStartArgs = value;
  }
  public resetJarStartArgs() {
    this._jarStartArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarStartArgsInput() {
    return this._jarStartArgs;
  }

  // jar_start_options - computed: false, optional: true, required: false
  private _jarStartOptions?: string; 
  public get jarStartOptions() {
    return this.getStringAttribute('jar_start_options');
  }
  public set jarStartOptions(value: string) {
    this._jarStartOptions = value;
  }
  public resetJarStartOptions() {
    this._jarStartOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarStartOptionsInput() {
    return this._jarStartOptions;
  }

  // jdk - computed: false, optional: true, required: false
  private _jdk?: string; 
  public get jdk() {
    return this.getStringAttribute('jdk');
  }
  public set jdk(value: string) {
    this._jdk = value;
  }
  public resetJdk() {
    this._jdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdkInput() {
    return this._jdk;
  }

  // liveness - computed: true, optional: true, required: false
  private _liveness?: string; 
  public get liveness() {
    return this.getStringAttribute('liveness');
  }
  public set liveness(value: string) {
    this._liveness = value;
  }
  public resetLiveness() {
    this._liveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessInput() {
    return this._liveness;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // micro_registration - computed: true, optional: true, required: false
  private _microRegistration?: string; 
  public get microRegistration() {
    return this.getStringAttribute('micro_registration');
  }
  public set microRegistration(value: string) {
    this._microRegistration = value;
  }
  public resetMicroRegistration() {
    this._microRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microRegistrationInput() {
    return this._microRegistration;
  }

  // min_ready_instance_ratio - computed: true, optional: true, required: false
  private _minReadyInstanceRatio?: number; 
  public get minReadyInstanceRatio() {
    return this.getNumberAttribute('min_ready_instance_ratio');
  }
  public set minReadyInstanceRatio(value: number) {
    this._minReadyInstanceRatio = value;
  }
  public resetMinReadyInstanceRatio() {
    this._minReadyInstanceRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadyInstanceRatioInput() {
    return this._minReadyInstanceRatio;
  }

  // min_ready_instances - computed: true, optional: true, required: false
  private _minReadyInstances?: number; 
  public get minReadyInstances() {
    return this.getNumberAttribute('min_ready_instances');
  }
  public set minReadyInstances(value: number) {
    this._minReadyInstances = value;
  }
  public resetMinReadyInstances() {
    this._minReadyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadyInstancesInput() {
    return this._minReadyInstances;
  }

  // mount_desc - computed: false, optional: true, required: false
  private _mountDesc?: string; 
  public get mountDesc() {
    return this.getStringAttribute('mount_desc');
  }
  public set mountDesc(value: string) {
    this._mountDesc = value;
  }
  public resetMountDesc() {
    this._mountDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDescInput() {
    return this._mountDesc;
  }

  // mount_host - computed: false, optional: true, required: false
  private _mountHost?: string; 
  public get mountHost() {
    return this.getStringAttribute('mount_host');
  }
  public set mountHost(value: string) {
    this._mountHost = value;
  }
  public resetMountHost() {
    this._mountHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountHostInput() {
    return this._mountHost;
  }

  // namespace_id - computed: false, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // nas_id - computed: false, optional: true, required: false
  private _nasId?: string; 
  public get nasId() {
    return this.getStringAttribute('nas_id');
  }
  public set nasId(value: string) {
    this._nasId = value;
  }
  public resetNasId() {
    this._nasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdInput() {
    return this._nasId;
  }

  // oss_ak_id - computed: false, optional: true, required: false
  private _ossAkId?: string; 
  public get ossAkId() {
    return this.getStringAttribute('oss_ak_id');
  }
  public set ossAkId(value: string) {
    this._ossAkId = value;
  }
  public resetOssAkId() {
    this._ossAkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossAkIdInput() {
    return this._ossAkId;
  }

  // oss_ak_secret - computed: false, optional: true, required: false
  private _ossAkSecret?: string; 
  public get ossAkSecret() {
    return this.getStringAttribute('oss_ak_secret');
  }
  public set ossAkSecret(value: string) {
    this._ossAkSecret = value;
  }
  public resetOssAkSecret() {
    this._ossAkSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossAkSecretInput() {
    return this._ossAkSecret;
  }

  // oss_mount_descs - computed: true, optional: true, required: false
  private _ossMountDescs?: string; 
  public get ossMountDescs() {
    return this.getStringAttribute('oss_mount_descs');
  }
  public set ossMountDescs(value: string) {
    this._ossMountDescs = value;
  }
  public resetOssMountDescs() {
    this._ossMountDescs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossMountDescsInput() {
    return this._ossMountDescs;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_url - computed: false, optional: true, required: false
  private _packageUrl?: string; 
  public get packageUrl() {
    return this.getStringAttribute('package_url');
  }
  public set packageUrl(value: string) {
    this._packageUrl = value;
  }
  public resetPackageUrl() {
    this._packageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUrlInput() {
    return this._packageUrl;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // php - computed: false, optional: true, required: false
  private _php?: string; 
  public get php() {
    return this.getStringAttribute('php');
  }
  public set php(value: string) {
    this._php = value;
  }
  public resetPhp() {
    this._php = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpInput() {
    return this._php;
  }

  // php_arms_config_location - computed: true, optional: true, required: false
  private _phpArmsConfigLocation?: string; 
  public get phpArmsConfigLocation() {
    return this.getStringAttribute('php_arms_config_location');
  }
  public set phpArmsConfigLocation(value: string) {
    this._phpArmsConfigLocation = value;
  }
  public resetPhpArmsConfigLocation() {
    this._phpArmsConfigLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpArmsConfigLocationInput() {
    return this._phpArmsConfigLocation;
  }

  // php_config - computed: false, optional: true, required: false
  private _phpConfig?: string; 
  public get phpConfig() {
    return this.getStringAttribute('php_config');
  }
  public set phpConfig(value: string) {
    this._phpConfig = value;
  }
  public resetPhpConfig() {
    this._phpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpConfigInput() {
    return this._phpConfig;
  }

  // php_config_location - computed: false, optional: true, required: false
  private _phpConfigLocation?: string; 
  public get phpConfigLocation() {
    return this.getStringAttribute('php_config_location');
  }
  public set phpConfigLocation(value: string) {
    this._phpConfigLocation = value;
  }
  public resetPhpConfigLocation() {
    this._phpConfigLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpConfigLocationInput() {
    return this._phpConfigLocation;
  }

  // post_start - computed: true, optional: true, required: false
  private _postStart?: string; 
  public get postStart() {
    return this.getStringAttribute('post_start');
  }
  public set postStart(value: string) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }

  // pre_stop - computed: true, optional: true, required: false
  private _preStop?: string; 
  public get preStop() {
    return this.getStringAttribute('pre_stop');
  }
  public set preStop(value: string) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop;
  }

  // programming_language - computed: true, optional: true, required: false
  private _programmingLanguage?: string; 
  public get programmingLanguage() {
    return this.getStringAttribute('programming_language');
  }
  public set programmingLanguage(value: string) {
    this._programmingLanguage = value;
  }
  public resetProgrammingLanguage() {
    this._programmingLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programmingLanguageInput() {
    return this._programmingLanguage;
  }

  // readiness - computed: true, optional: true, required: false
  private _readiness?: string; 
  public get readiness() {
    return this.getStringAttribute('readiness');
  }
  public set readiness(value: string) {
    this._readiness = value;
  }
  public resetReadiness() {
    this._readiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessInput() {
    return this._readiness;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // sls_configs - computed: false, optional: true, required: false
  private _slsConfigs?: string; 
  public get slsConfigs() {
    return this.getStringAttribute('sls_configs');
  }
  public set slsConfigs(value: string) {
    this._slsConfigs = value;
  }
  public resetSlsConfigs() {
    this._slsConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsConfigsInput() {
    return this._slsConfigs;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // termination_grace_period_seconds - computed: true, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // tomcat_config - computed: true, optional: true, required: false
  private _tomcatConfig?: string; 
  public get tomcatConfig() {
    return this.getStringAttribute('tomcat_config');
  }
  public set tomcatConfig(value: string) {
    this._tomcatConfig = value;
  }
  public resetTomcatConfig() {
    this._tomcatConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tomcatConfigInput() {
    return this._tomcatConfig;
  }

  // update_strategy - computed: true, optional: true, required: false
  private _updateStrategy?: string; 
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }
  public set updateStrategy(value: string) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // war_start_options - computed: false, optional: true, required: false
  private _warStartOptions?: string; 
  public get warStartOptions() {
    return this.getStringAttribute('war_start_options');
  }
  public set warStartOptions(value: string) {
    this._warStartOptions = value;
  }
  public resetWarStartOptions() {
    this._warStartOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warStartOptionsInput() {
    return this._warStartOptions;
  }

  // web_container - computed: false, optional: true, required: false
  private _webContainer?: string; 
  public get webContainer() {
    return this.getStringAttribute('web_container');
  }
  public set webContainer(value: string) {
    this._webContainer = value;
  }
  public resetWebContainer() {
    this._webContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webContainerInput() {
    return this._webContainer;
  }

  // config_map_mount_desc_v2 - computed: false, optional: true, required: false
  private _configMapMountDescV2 = new SaeApplicationConfigMapMountDescV2List(this, "config_map_mount_desc_v2", false);
  public get configMapMountDescV2() {
    return this._configMapMountDescV2;
  }
  public putConfigMapMountDescV2(value: SaeApplicationConfigMapMountDescV2[] | cdktf.IResolvable) {
    this._configMapMountDescV2.internalValue = value;
  }
  public resetConfigMapMountDescV2() {
    this._configMapMountDescV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapMountDescV2Input() {
    return this._configMapMountDescV2.internalValue;
  }

  // custom_host_alias_v2 - computed: false, optional: true, required: false
  private _customHostAliasV2 = new SaeApplicationCustomHostAliasV2List(this, "custom_host_alias_v2", false);
  public get customHostAliasV2() {
    return this._customHostAliasV2;
  }
  public putCustomHostAliasV2(value: SaeApplicationCustomHostAliasV2[] | cdktf.IResolvable) {
    this._customHostAliasV2.internalValue = value;
  }
  public resetCustomHostAliasV2() {
    this._customHostAliasV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostAliasV2Input() {
    return this._customHostAliasV2.internalValue;
  }

  // kafka_configs - computed: false, optional: true, required: false
  private _kafkaConfigs = new SaeApplicationKafkaConfigsOutputReference(this, "kafka_configs");
  public get kafkaConfigs() {
    return this._kafkaConfigs;
  }
  public putKafkaConfigs(value: SaeApplicationKafkaConfigs) {
    this._kafkaConfigs.internalValue = value;
  }
  public resetKafkaConfigs() {
    this._kafkaConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConfigsInput() {
    return this._kafkaConfigs.internalValue;
  }

  // liveness_v2 - computed: false, optional: true, required: false
  private _livenessV2 = new SaeApplicationLivenessV2OutputReference(this, "liveness_v2");
  public get livenessV2() {
    return this._livenessV2;
  }
  public putLivenessV2(value: SaeApplicationLivenessV2) {
    this._livenessV2.internalValue = value;
  }
  public resetLivenessV2() {
    this._livenessV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessV2Input() {
    return this._livenessV2.internalValue;
  }

  // nas_configs - computed: false, optional: true, required: false
  private _nasConfigs = new SaeApplicationNasConfigsList(this, "nas_configs", false);
  public get nasConfigs() {
    return this._nasConfigs;
  }
  public putNasConfigs(value: SaeApplicationNasConfigs[] | cdktf.IResolvable) {
    this._nasConfigs.internalValue = value;
  }
  public resetNasConfigs() {
    this._nasConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasConfigsInput() {
    return this._nasConfigs.internalValue;
  }

  // oss_mount_descs_v2 - computed: false, optional: true, required: false
  private _ossMountDescsV2 = new SaeApplicationOssMountDescsV2List(this, "oss_mount_descs_v2", false);
  public get ossMountDescsV2() {
    return this._ossMountDescsV2;
  }
  public putOssMountDescsV2(value: SaeApplicationOssMountDescsV2[] | cdktf.IResolvable) {
    this._ossMountDescsV2.internalValue = value;
  }
  public resetOssMountDescsV2() {
    this._ossMountDescsV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossMountDescsV2Input() {
    return this._ossMountDescsV2.internalValue;
  }

  // post_start_v2 - computed: false, optional: true, required: false
  private _postStartV2 = new SaeApplicationPostStartV2OutputReference(this, "post_start_v2");
  public get postStartV2() {
    return this._postStartV2;
  }
  public putPostStartV2(value: SaeApplicationPostStartV2) {
    this._postStartV2.internalValue = value;
  }
  public resetPostStartV2() {
    this._postStartV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartV2Input() {
    return this._postStartV2.internalValue;
  }

  // pre_stop_v2 - computed: false, optional: true, required: false
  private _preStopV2 = new SaeApplicationPreStopV2OutputReference(this, "pre_stop_v2");
  public get preStopV2() {
    return this._preStopV2;
  }
  public putPreStopV2(value: SaeApplicationPreStopV2) {
    this._preStopV2.internalValue = value;
  }
  public resetPreStopV2() {
    this._preStopV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopV2Input() {
    return this._preStopV2.internalValue;
  }

  // pvtz_discovery_svc - computed: false, optional: true, required: false
  private _pvtzDiscoverySvc = new SaeApplicationPvtzDiscoverySvcOutputReference(this, "pvtz_discovery_svc");
  public get pvtzDiscoverySvc() {
    return this._pvtzDiscoverySvc;
  }
  public putPvtzDiscoverySvc(value: SaeApplicationPvtzDiscoverySvc) {
    this._pvtzDiscoverySvc.internalValue = value;
  }
  public resetPvtzDiscoverySvc() {
    this._pvtzDiscoverySvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvtzDiscoverySvcInput() {
    return this._pvtzDiscoverySvc.internalValue;
  }

  // readiness_v2 - computed: false, optional: true, required: false
  private _readinessV2 = new SaeApplicationReadinessV2OutputReference(this, "readiness_v2");
  public get readinessV2() {
    return this._readinessV2;
  }
  public putReadinessV2(value: SaeApplicationReadinessV2) {
    this._readinessV2.internalValue = value;
  }
  public resetReadinessV2() {
    this._readinessV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessV2Input() {
    return this._readinessV2.internalValue;
  }

  // tomcat_config_v2 - computed: false, optional: true, required: false
  private _tomcatConfigV2 = new SaeApplicationTomcatConfigV2OutputReference(this, "tomcat_config_v2");
  public get tomcatConfigV2() {
    return this._tomcatConfigV2;
  }
  public putTomcatConfigV2(value: SaeApplicationTomcatConfigV2) {
    this._tomcatConfigV2.internalValue = value;
  }
  public resetTomcatConfigV2() {
    this._tomcatConfigV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tomcatConfigV2Input() {
    return this._tomcatConfigV2.internalValue;
  }

  // update_strategy_v2 - computed: false, optional: true, required: false
  private _updateStrategyV2 = new SaeApplicationUpdateStrategyV2OutputReference(this, "update_strategy_v2");
  public get updateStrategyV2() {
    return this._updateStrategyV2;
  }
  public putUpdateStrategyV2(value: SaeApplicationUpdateStrategyV2) {
    this._updateStrategyV2.internalValue = value;
  }
  public resetUpdateStrategyV2() {
    this._updateStrategyV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyV2Input() {
    return this._updateStrategyV2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acr_assume_role_arn: cdktf.stringToTerraform(this._acrAssumeRoleArn),
      acr_instance_id: cdktf.stringToTerraform(this._acrInstanceId),
      app_description: cdktf.stringToTerraform(this._appDescription),
      app_name: cdktf.stringToTerraform(this._appName),
      auto_config: cdktf.booleanToTerraform(this._autoConfig),
      auto_enable_application_scaling_rule: cdktf.booleanToTerraform(this._autoEnableApplicationScalingRule),
      batch_wait_time: cdktf.numberToTerraform(this._batchWaitTime),
      change_order_desc: cdktf.stringToTerraform(this._changeOrderDesc),
      command: cdktf.stringToTerraform(this._command),
      command_args: cdktf.stringToTerraform(this._commandArgs),
      command_args_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commandArgsV2),
      config_map_mount_desc: cdktf.stringToTerraform(this._configMapMountDesc),
      cpu: cdktf.numberToTerraform(this._cpu),
      custom_host_alias: cdktf.stringToTerraform(this._customHostAlias),
      deploy: cdktf.booleanToTerraform(this._deploy),
      edas_container_version: cdktf.stringToTerraform(this._edasContainerVersion),
      enable_ahas: cdktf.stringToTerraform(this._enableAhas),
      enable_grey_tag_route: cdktf.booleanToTerraform(this._enableGreyTagRoute),
      envs: cdktf.stringToTerraform(this._envs),
      id: cdktf.stringToTerraform(this._id),
      image_pull_secrets: cdktf.stringToTerraform(this._imagePullSecrets),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      jar_start_args: cdktf.stringToTerraform(this._jarStartArgs),
      jar_start_options: cdktf.stringToTerraform(this._jarStartOptions),
      jdk: cdktf.stringToTerraform(this._jdk),
      liveness: cdktf.stringToTerraform(this._liveness),
      memory: cdktf.numberToTerraform(this._memory),
      micro_registration: cdktf.stringToTerraform(this._microRegistration),
      min_ready_instance_ratio: cdktf.numberToTerraform(this._minReadyInstanceRatio),
      min_ready_instances: cdktf.numberToTerraform(this._minReadyInstances),
      mount_desc: cdktf.stringToTerraform(this._mountDesc),
      mount_host: cdktf.stringToTerraform(this._mountHost),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      nas_id: cdktf.stringToTerraform(this._nasId),
      oss_ak_id: cdktf.stringToTerraform(this._ossAkId),
      oss_ak_secret: cdktf.stringToTerraform(this._ossAkSecret),
      oss_mount_descs: cdktf.stringToTerraform(this._ossMountDescs),
      package_type: cdktf.stringToTerraform(this._packageType),
      package_url: cdktf.stringToTerraform(this._packageUrl),
      package_version: cdktf.stringToTerraform(this._packageVersion),
      php: cdktf.stringToTerraform(this._php),
      php_arms_config_location: cdktf.stringToTerraform(this._phpArmsConfigLocation),
      php_config: cdktf.stringToTerraform(this._phpConfig),
      php_config_location: cdktf.stringToTerraform(this._phpConfigLocation),
      post_start: cdktf.stringToTerraform(this._postStart),
      pre_stop: cdktf.stringToTerraform(this._preStop),
      programming_language: cdktf.stringToTerraform(this._programmingLanguage),
      readiness: cdktf.stringToTerraform(this._readiness),
      replicas: cdktf.numberToTerraform(this._replicas),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      sls_configs: cdktf.stringToTerraform(this._slsConfigs),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      termination_grace_period_seconds: cdktf.numberToTerraform(this._terminationGracePeriodSeconds),
      timezone: cdktf.stringToTerraform(this._timezone),
      tomcat_config: cdktf.stringToTerraform(this._tomcatConfig),
      update_strategy: cdktf.stringToTerraform(this._updateStrategy),
      version_id: cdktf.stringToTerraform(this._versionId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      war_start_options: cdktf.stringToTerraform(this._warStartOptions),
      web_container: cdktf.stringToTerraform(this._webContainer),
      config_map_mount_desc_v2: cdktf.listMapper(saeApplicationConfigMapMountDescV2ToTerraform, true)(this._configMapMountDescV2.internalValue),
      custom_host_alias_v2: cdktf.listMapper(saeApplicationCustomHostAliasV2ToTerraform, true)(this._customHostAliasV2.internalValue),
      kafka_configs: saeApplicationKafkaConfigsToTerraform(this._kafkaConfigs.internalValue),
      liveness_v2: saeApplicationLivenessV2ToTerraform(this._livenessV2.internalValue),
      nas_configs: cdktf.listMapper(saeApplicationNasConfigsToTerraform, true)(this._nasConfigs.internalValue),
      oss_mount_descs_v2: cdktf.listMapper(saeApplicationOssMountDescsV2ToTerraform, true)(this._ossMountDescsV2.internalValue),
      post_start_v2: saeApplicationPostStartV2ToTerraform(this._postStartV2.internalValue),
      pre_stop_v2: saeApplicationPreStopV2ToTerraform(this._preStopV2.internalValue),
      pvtz_discovery_svc: saeApplicationPvtzDiscoverySvcToTerraform(this._pvtzDiscoverySvc.internalValue),
      readiness_v2: saeApplicationReadinessV2ToTerraform(this._readinessV2.internalValue),
      tomcat_config_v2: saeApplicationTomcatConfigV2ToTerraform(this._tomcatConfigV2.internalValue),
      update_strategy_v2: saeApplicationUpdateStrategyV2ToTerraform(this._updateStrategyV2.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acr_assume_role_arn: {
        value: cdktf.stringToHclTerraform(this._acrAssumeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acr_instance_id: {
        value: cdktf.stringToHclTerraform(this._acrInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_description: {
        value: cdktf.stringToHclTerraform(this._appDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_config: {
        value: cdktf.booleanToHclTerraform(this._autoConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_enable_application_scaling_rule: {
        value: cdktf.booleanToHclTerraform(this._autoEnableApplicationScalingRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      batch_wait_time: {
        value: cdktf.numberToHclTerraform(this._batchWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      change_order_desc: {
        value: cdktf.stringToHclTerraform(this._changeOrderDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_args: {
        value: cdktf.stringToHclTerraform(this._commandArgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_args_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commandArgsV2),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_map_mount_desc: {
        value: cdktf.stringToHclTerraform(this._configMapMountDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_host_alias: {
        value: cdktf.stringToHclTerraform(this._customHostAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edas_container_version: {
        value: cdktf.stringToHclTerraform(this._edasContainerVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ahas: {
        value: cdktf.stringToHclTerraform(this._enableAhas),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_grey_tag_route: {
        value: cdktf.booleanToHclTerraform(this._enableGreyTagRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      envs: {
        value: cdktf.stringToHclTerraform(this._envs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_pull_secrets: {
        value: cdktf.stringToHclTerraform(this._imagePullSecrets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jar_start_args: {
        value: cdktf.stringToHclTerraform(this._jarStartArgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jar_start_options: {
        value: cdktf.stringToHclTerraform(this._jarStartOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdk: {
        value: cdktf.stringToHclTerraform(this._jdk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      liveness: {
        value: cdktf.stringToHclTerraform(this._liveness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      micro_registration: {
        value: cdktf.stringToHclTerraform(this._microRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_ready_instance_ratio: {
        value: cdktf.numberToHclTerraform(this._minReadyInstanceRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ready_instances: {
        value: cdktf.numberToHclTerraform(this._minReadyInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_desc: {
        value: cdktf.stringToHclTerraform(this._mountDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_host: {
        value: cdktf.stringToHclTerraform(this._mountHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_id: {
        value: cdktf.stringToHclTerraform(this._nasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_ak_id: {
        value: cdktf.stringToHclTerraform(this._ossAkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_ak_secret: {
        value: cdktf.stringToHclTerraform(this._ossAkSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_mount_descs: {
        value: cdktf.stringToHclTerraform(this._ossMountDescs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_url: {
        value: cdktf.stringToHclTerraform(this._packageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      php: {
        value: cdktf.stringToHclTerraform(this._php),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      php_arms_config_location: {
        value: cdktf.stringToHclTerraform(this._phpArmsConfigLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      php_config: {
        value: cdktf.stringToHclTerraform(this._phpConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      php_config_location: {
        value: cdktf.stringToHclTerraform(this._phpConfigLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_start: {
        value: cdktf.stringToHclTerraform(this._postStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_stop: {
        value: cdktf.stringToHclTerraform(this._preStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      programming_language: {
        value: cdktf.stringToHclTerraform(this._programmingLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readiness: {
        value: cdktf.stringToHclTerraform(this._readiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_configs: {
        value: cdktf.stringToHclTerraform(this._slsConfigs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      termination_grace_period_seconds: {
        value: cdktf.numberToHclTerraform(this._terminationGracePeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tomcat_config: {
        value: cdktf.stringToHclTerraform(this._tomcatConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_strategy: {
        value: cdktf.stringToHclTerraform(this._updateStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      war_start_options: {
        value: cdktf.stringToHclTerraform(this._warStartOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_container: {
        value: cdktf.stringToHclTerraform(this._webContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_map_mount_desc_v2: {
        value: cdktf.listMapperHcl(saeApplicationConfigMapMountDescV2ToHclTerraform, true)(this._configMapMountDescV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationConfigMapMountDescV2List",
      },
      custom_host_alias_v2: {
        value: cdktf.listMapperHcl(saeApplicationCustomHostAliasV2ToHclTerraform, true)(this._customHostAliasV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationCustomHostAliasV2List",
      },
      kafka_configs: {
        value: saeApplicationKafkaConfigsToHclTerraform(this._kafkaConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationKafkaConfigsList",
      },
      liveness_v2: {
        value: saeApplicationLivenessV2ToHclTerraform(this._livenessV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationLivenessV2List",
      },
      nas_configs: {
        value: cdktf.listMapperHcl(saeApplicationNasConfigsToHclTerraform, true)(this._nasConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationNasConfigsList",
      },
      oss_mount_descs_v2: {
        value: cdktf.listMapperHcl(saeApplicationOssMountDescsV2ToHclTerraform, true)(this._ossMountDescsV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationOssMountDescsV2List",
      },
      post_start_v2: {
        value: saeApplicationPostStartV2ToHclTerraform(this._postStartV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationPostStartV2List",
      },
      pre_stop_v2: {
        value: saeApplicationPreStopV2ToHclTerraform(this._preStopV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationPreStopV2List",
      },
      pvtz_discovery_svc: {
        value: saeApplicationPvtzDiscoverySvcToHclTerraform(this._pvtzDiscoverySvc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationPvtzDiscoverySvcList",
      },
      readiness_v2: {
        value: saeApplicationReadinessV2ToHclTerraform(this._readinessV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationReadinessV2List",
      },
      tomcat_config_v2: {
        value: saeApplicationTomcatConfigV2ToHclTerraform(this._tomcatConfigV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationTomcatConfigV2List",
      },
      update_strategy_v2: {
        value: saeApplicationUpdateStrategyV2ToHclTerraform(this._updateStrategyV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationUpdateStrategyV2List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
