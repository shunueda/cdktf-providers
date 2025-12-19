// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#charge_type EmrCluster#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#cluster_type EmrCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#deposit_type EmrCluster#deposit_type}
  */
  readonly depositType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#eas_enable EmrCluster#eas_enable}
  */
  readonly easEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#emr_ver EmrCluster#emr_ver}
  */
  readonly emrVer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#high_availability_enable EmrCluster#high_availability_enable}
  */
  readonly highAvailabilityEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#id EmrCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#is_open_public_ip EmrCluster#is_open_public_ip}
  */
  readonly isOpenPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#key_pair_name EmrCluster#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#master_pwd EmrCluster#master_pwd}
  */
  readonly masterPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#meta_store_type EmrCluster#meta_store_type}
  */
  readonly metaStoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#name EmrCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#option_software_list EmrCluster#option_software_list}
  */
  readonly optionSoftwareList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#period EmrCluster#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#related_cluster_id EmrCluster#related_cluster_id}
  */
  readonly relatedClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#resource_group_id EmrCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#security_group_id EmrCluster#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#ssh_enable EmrCluster#ssh_enable}
  */
  readonly sshEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#tags EmrCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#use_local_metadb EmrCluster#use_local_metadb}
  */
  readonly useLocalMetadb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#user_defined_emr_ecs_role EmrCluster#user_defined_emr_ecs_role}
  */
  readonly userDefinedEmrEcsRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#vswitch_id EmrCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#zone_id EmrCluster#zone_id}
  */
  readonly zoneId: string;
  /**
  * bootstrap_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}
  */
  readonly bootstrapAction?: EmrClusterBootstrapAction[] | cdktf.IResolvable;
  /**
  * configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#configs EmrCluster#configs}
  */
  readonly configs?: EmrClusterConfigs[] | cdktf.IResolvable;
  /**
  * host_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#host_group EmrCluster#host_group}
  */
  readonly hostGroup?: EmrClusterHostGroup[] | cdktf.IResolvable;
  /**
  * meta_store_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#meta_store_conf EmrCluster#meta_store_conf}
  */
  readonly metaStoreConf?: EmrClusterMetaStoreConf;
  /**
  * modify_cluster_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#modify_cluster_service_config EmrCluster#modify_cluster_service_config}
  */
  readonly modifyClusterServiceConfig?: EmrClusterModifyClusterServiceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#timeouts EmrCluster#timeouts}
  */
  readonly timeouts?: EmrClusterTimeouts;
}
export interface EmrClusterBootstrapAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#arg EmrCluster#arg}
  */
  readonly arg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#execution_fail_strategy EmrCluster#execution_fail_strategy}
  */
  readonly executionFailStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#execution_moment EmrCluster#execution_moment}
  */
  readonly executionMoment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#execution_target EmrCluster#execution_target}
  */
  readonly executionTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#name EmrCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#path EmrCluster#path}
  */
  readonly path?: string;
}

export function emrClusterBootstrapActionToTerraform(struct?: EmrClusterBootstrapAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg: cdktf.stringToTerraform(struct!.arg),
    execution_fail_strategy: cdktf.stringToTerraform(struct!.executionFailStrategy),
    execution_moment: cdktf.stringToTerraform(struct!.executionMoment),
    execution_target: cdktf.stringToTerraform(struct!.executionTarget),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function emrClusterBootstrapActionToHclTerraform(struct?: EmrClusterBootstrapAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg: {
      value: cdktf.stringToHclTerraform(struct!.arg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_fail_strategy: {
      value: cdktf.stringToHclTerraform(struct!.executionFailStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_moment: {
      value: cdktf.stringToHclTerraform(struct!.executionMoment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_target: {
      value: cdktf.stringToHclTerraform(struct!.executionTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterBootstrapActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterBootstrapAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arg !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg = this._arg;
    }
    if (this._executionFailStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionFailStrategy = this._executionFailStrategy;
    }
    if (this._executionMoment !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionMoment = this._executionMoment;
    }
    if (this._executionTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTarget = this._executionTarget;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterBootstrapAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arg = undefined;
      this._executionFailStrategy = undefined;
      this._executionMoment = undefined;
      this._executionTarget = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arg = value.arg;
      this._executionFailStrategy = value.executionFailStrategy;
      this._executionMoment = value.executionMoment;
      this._executionTarget = value.executionTarget;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // arg - computed: false, optional: true, required: false
  private _arg?: string; 
  public get arg() {
    return this.getStringAttribute('arg');
  }
  public set arg(value: string) {
    this._arg = value;
  }
  public resetArg() {
    this._arg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg;
  }

  // execution_fail_strategy - computed: false, optional: true, required: false
  private _executionFailStrategy?: string; 
  public get executionFailStrategy() {
    return this.getStringAttribute('execution_fail_strategy');
  }
  public set executionFailStrategy(value: string) {
    this._executionFailStrategy = value;
  }
  public resetExecutionFailStrategy() {
    this._executionFailStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionFailStrategyInput() {
    return this._executionFailStrategy;
  }

  // execution_moment - computed: false, optional: true, required: false
  private _executionMoment?: string; 
  public get executionMoment() {
    return this.getStringAttribute('execution_moment');
  }
  public set executionMoment(value: string) {
    this._executionMoment = value;
  }
  public resetExecutionMoment() {
    this._executionMoment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionMomentInput() {
    return this._executionMoment;
  }

  // execution_target - computed: false, optional: true, required: false
  private _executionTarget?: string; 
  public get executionTarget() {
    return this.getStringAttribute('execution_target');
  }
  public set executionTarget(value: string) {
    this._executionTarget = value;
  }
  public resetExecutionTarget() {
    this._executionTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTargetInput() {
    return this._executionTarget;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: true, required: false
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
}

export class EmrClusterBootstrapActionList extends cdktf.ComplexList {
  public internalValue? : EmrClusterBootstrapAction[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterBootstrapActionOutputReference {
    return new EmrClusterBootstrapActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#config_key EmrCluster#config_key}
  */
  readonly configKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#config_value EmrCluster#config_value}
  */
  readonly configValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#file_name EmrCluster#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#service_name EmrCluster#service_name}
  */
  readonly serviceName: string;
}

export function emrClusterConfigsToTerraform(struct?: EmrClusterConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_key: cdktf.stringToTerraform(struct!.configKey),
    config_value: cdktf.stringToTerraform(struct!.configValue),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function emrClusterConfigsToHclTerraform(struct?: EmrClusterConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_key: {
      value: cdktf.stringToHclTerraform(struct!.configKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_value: {
      value: cdktf.stringToHclTerraform(struct!.configValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.configKey = this._configKey;
    }
    if (this._configValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValue = this._configValue;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configKey = undefined;
      this._configValue = undefined;
      this._fileName = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configKey = value.configKey;
      this._configValue = value.configValue;
      this._fileName = value.fileName;
      this._serviceName = value.serviceName;
    }
  }

  // config_key - computed: false, optional: false, required: true
  private _configKey?: string; 
  public get configKey() {
    return this.getStringAttribute('config_key');
  }
  public set configKey(value: string) {
    this._configKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configKeyInput() {
    return this._configKey;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class EmrClusterConfigsList extends cdktf.ComplexList {
  public internalValue? : EmrClusterConfigs[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterConfigsOutputReference {
    return new EmrClusterConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterHostGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#auto_renew EmrCluster#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#charge_type EmrCluster#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#decommission_timeout EmrCluster#decommission_timeout}
  */
  readonly decommissionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#disk_capacity EmrCluster#disk_capacity}
  */
  readonly diskCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#disk_count EmrCluster#disk_count}
  */
  readonly diskCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#enable_graceful_decommission EmrCluster#enable_graceful_decommission}
  */
  readonly enableGracefulDecommission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#gpu_driver EmrCluster#gpu_driver}
  */
  readonly gpuDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#host_group_name EmrCluster#host_group_name}
  */
  readonly hostGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#host_group_type EmrCluster#host_group_type}
  */
  readonly hostGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#instance_list EmrCluster#instance_list}
  */
  readonly instanceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#instance_type EmrCluster#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#node_count EmrCluster#node_count}
  */
  readonly nodeCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#period EmrCluster#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#sys_disk_capacity EmrCluster#sys_disk_capacity}
  */
  readonly sysDiskCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#sys_disk_type EmrCluster#sys_disk_type}
  */
  readonly sysDiskType?: string;
}

export function emrClusterHostGroupToTerraform(struct?: EmrClusterHostGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    charge_type: cdktf.stringToTerraform(struct!.chargeType),
    decommission_timeout: cdktf.numberToTerraform(struct!.decommissionTimeout),
    disk_capacity: cdktf.stringToTerraform(struct!.diskCapacity),
    disk_count: cdktf.stringToTerraform(struct!.diskCount),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_graceful_decommission: cdktf.booleanToTerraform(struct!.enableGracefulDecommission),
    gpu_driver: cdktf.stringToTerraform(struct!.gpuDriver),
    host_group_name: cdktf.stringToTerraform(struct!.hostGroupName),
    host_group_type: cdktf.stringToTerraform(struct!.hostGroupType),
    instance_list: cdktf.stringToTerraform(struct!.instanceList),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    node_count: cdktf.stringToTerraform(struct!.nodeCount),
    period: cdktf.numberToTerraform(struct!.period),
    sys_disk_capacity: cdktf.stringToTerraform(struct!.sysDiskCapacity),
    sys_disk_type: cdktf.stringToTerraform(struct!.sysDiskType),
  }
}


export function emrClusterHostGroupToHclTerraform(struct?: EmrClusterHostGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    charge_type: {
      value: cdktf.stringToHclTerraform(struct!.chargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decommission_timeout: {
      value: cdktf.numberToHclTerraform(struct!.decommissionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_capacity: {
      value: cdktf.stringToHclTerraform(struct!.diskCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_count: {
      value: cdktf.stringToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_graceful_decommission: {
      value: cdktf.booleanToHclTerraform(struct!.enableGracefulDecommission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gpu_driver: {
      value: cdktf.stringToHclTerraform(struct!.gpuDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_group_name: {
      value: cdktf.stringToHclTerraform(struct!.hostGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_group_type: {
      value: cdktf.stringToHclTerraform(struct!.hostGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_list: {
      value: cdktf.stringToHclTerraform(struct!.instanceList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.stringToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sys_disk_capacity: {
      value: cdktf.stringToHclTerraform(struct!.sysDiskCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.sysDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterHostGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterHostGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenew = this._autoRenew;
    }
    if (this._chargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargeType = this._chargeType;
    }
    if (this._decommissionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.decommissionTimeout = this._decommissionTimeout;
    }
    if (this._diskCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCapacity = this._diskCapacity;
    }
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableGracefulDecommission !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGracefulDecommission = this._enableGracefulDecommission;
    }
    if (this._gpuDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriver = this._gpuDriver;
    }
    if (this._hostGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroupName = this._hostGroupName;
    }
    if (this._hostGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroupType = this._hostGroupType;
    }
    if (this._instanceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceList = this._instanceList;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._sysDiskCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysDiskCapacity = this._sysDiskCapacity;
    }
    if (this._sysDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysDiskType = this._sysDiskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterHostGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRenew = undefined;
      this._chargeType = undefined;
      this._decommissionTimeout = undefined;
      this._diskCapacity = undefined;
      this._diskCount = undefined;
      this._diskType = undefined;
      this._enableGracefulDecommission = undefined;
      this._gpuDriver = undefined;
      this._hostGroupName = undefined;
      this._hostGroupType = undefined;
      this._instanceList = undefined;
      this._instanceType = undefined;
      this._nodeCount = undefined;
      this._period = undefined;
      this._sysDiskCapacity = undefined;
      this._sysDiskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRenew = value.autoRenew;
      this._chargeType = value.chargeType;
      this._decommissionTimeout = value.decommissionTimeout;
      this._diskCapacity = value.diskCapacity;
      this._diskCount = value.diskCount;
      this._diskType = value.diskType;
      this._enableGracefulDecommission = value.enableGracefulDecommission;
      this._gpuDriver = value.gpuDriver;
      this._hostGroupName = value.hostGroupName;
      this._hostGroupType = value.hostGroupType;
      this._instanceList = value.instanceList;
      this._instanceType = value.instanceType;
      this._nodeCount = value.nodeCount;
      this._period = value.period;
      this._sysDiskCapacity = value.sysDiskCapacity;
      this._sysDiskType = value.sysDiskType;
    }
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // decommission_timeout - computed: true, optional: true, required: false
  private _decommissionTimeout?: number; 
  public get decommissionTimeout() {
    return this.getNumberAttribute('decommission_timeout');
  }
  public set decommissionTimeout(value: number) {
    this._decommissionTimeout = value;
  }
  public resetDecommissionTimeout() {
    this._decommissionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decommissionTimeoutInput() {
    return this._decommissionTimeout;
  }

  // disk_capacity - computed: false, optional: true, required: false
  private _diskCapacity?: string; 
  public get diskCapacity() {
    return this.getStringAttribute('disk_capacity');
  }
  public set diskCapacity(value: string) {
    this._diskCapacity = value;
  }
  public resetDiskCapacity() {
    this._diskCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCapacityInput() {
    return this._diskCapacity;
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: string; 
  public get diskCount() {
    return this.getStringAttribute('disk_count');
  }
  public set diskCount(value: string) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // enable_graceful_decommission - computed: true, optional: true, required: false
  private _enableGracefulDecommission?: boolean | cdktf.IResolvable; 
  public get enableGracefulDecommission() {
    return this.getBooleanAttribute('enable_graceful_decommission');
  }
  public set enableGracefulDecommission(value: boolean | cdktf.IResolvable) {
    this._enableGracefulDecommission = value;
  }
  public resetEnableGracefulDecommission() {
    this._enableGracefulDecommission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGracefulDecommissionInput() {
    return this._enableGracefulDecommission;
  }

  // gpu_driver - computed: false, optional: true, required: false
  private _gpuDriver?: string; 
  public get gpuDriver() {
    return this.getStringAttribute('gpu_driver');
  }
  public set gpuDriver(value: string) {
    this._gpuDriver = value;
  }
  public resetGpuDriver() {
    this._gpuDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInput() {
    return this._gpuDriver;
  }

  // host_group_name - computed: false, optional: true, required: false
  private _hostGroupName?: string; 
  public get hostGroupName() {
    return this.getStringAttribute('host_group_name');
  }
  public set hostGroupName(value: string) {
    this._hostGroupName = value;
  }
  public resetHostGroupName() {
    this._hostGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupNameInput() {
    return this._hostGroupName;
  }

  // host_group_type - computed: false, optional: true, required: false
  private _hostGroupType?: string; 
  public get hostGroupType() {
    return this.getStringAttribute('host_group_type');
  }
  public set hostGroupType(value: string) {
    this._hostGroupType = value;
  }
  public resetHostGroupType() {
    this._hostGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupTypeInput() {
    return this._hostGroupType;
  }

  // instance_list - computed: false, optional: true, required: false
  private _instanceList?: string; 
  public get instanceList() {
    return this.getStringAttribute('instance_list');
  }
  public set instanceList(value: string) {
    this._instanceList = value;
  }
  public resetInstanceList() {
    this._instanceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: string; 
  public get nodeCount() {
    return this.getStringAttribute('node_count');
  }
  public set nodeCount(value: string) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // sys_disk_capacity - computed: false, optional: true, required: false
  private _sysDiskCapacity?: string; 
  public get sysDiskCapacity() {
    return this.getStringAttribute('sys_disk_capacity');
  }
  public set sysDiskCapacity(value: string) {
    this._sysDiskCapacity = value;
  }
  public resetSysDiskCapacity() {
    this._sysDiskCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysDiskCapacityInput() {
    return this._sysDiskCapacity;
  }

  // sys_disk_type - computed: false, optional: true, required: false
  private _sysDiskType?: string; 
  public get sysDiskType() {
    return this.getStringAttribute('sys_disk_type');
  }
  public set sysDiskType(value: string) {
    this._sysDiskType = value;
  }
  public resetSysDiskType() {
    this._sysDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysDiskTypeInput() {
    return this._sysDiskType;
  }
}

export class EmrClusterHostGroupList extends cdktf.ComplexList {
  public internalValue? : EmrClusterHostGroup[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterHostGroupOutputReference {
    return new EmrClusterHostGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterMetaStoreConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#db_password EmrCluster#db_password}
  */
  readonly dbPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#db_url EmrCluster#db_url}
  */
  readonly dbUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#db_user_name EmrCluster#db_user_name}
  */
  readonly dbUserName: string;
}

export function emrClusterMetaStoreConfToTerraform(struct?: EmrClusterMetaStoreConfOutputReference | EmrClusterMetaStoreConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_password: cdktf.stringToTerraform(struct!.dbPassword),
    db_url: cdktf.stringToTerraform(struct!.dbUrl),
    db_user_name: cdktf.stringToTerraform(struct!.dbUserName),
  }
}


export function emrClusterMetaStoreConfToHclTerraform(struct?: EmrClusterMetaStoreConfOutputReference | EmrClusterMetaStoreConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_password: {
      value: cdktf.stringToHclTerraform(struct!.dbPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_url: {
      value: cdktf.stringToHclTerraform(struct!.dbUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user_name: {
      value: cdktf.stringToHclTerraform(struct!.dbUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMetaStoreConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterMetaStoreConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPassword = this._dbPassword;
    }
    if (this._dbUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUrl = this._dbUrl;
    }
    if (this._dbUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUserName = this._dbUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMetaStoreConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbPassword = undefined;
      this._dbUrl = undefined;
      this._dbUserName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbPassword = value.dbPassword;
      this._dbUrl = value.dbUrl;
      this._dbUserName = value.dbUserName;
    }
  }

  // db_password - computed: false, optional: false, required: true
  private _dbPassword?: string; 
  public get dbPassword() {
    return this.getStringAttribute('db_password');
  }
  public set dbPassword(value: string) {
    this._dbPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordInput() {
    return this._dbPassword;
  }

  // db_url - computed: false, optional: false, required: true
  private _dbUrl?: string; 
  public get dbUrl() {
    return this.getStringAttribute('db_url');
  }
  public set dbUrl(value: string) {
    this._dbUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUrlInput() {
    return this._dbUrl;
  }

  // db_user_name - computed: false, optional: false, required: true
  private _dbUserName?: string; 
  public get dbUserName() {
    return this.getStringAttribute('db_user_name');
  }
  public set dbUserName(value: string) {
    this._dbUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserNameInput() {
    return this._dbUserName;
  }
}
export interface EmrClusterModifyClusterServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#comment EmrCluster#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#config_params EmrCluster#config_params}
  */
  readonly configParams: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#config_type EmrCluster#config_type}
  */
  readonly configType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#custom_config_params EmrCluster#custom_config_params}
  */
  readonly customConfigParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#gateway_cluster_id_list EmrCluster#gateway_cluster_id_list}
  */
  readonly gatewayClusterIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#group_id EmrCluster#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#host_instance_id EmrCluster#host_instance_id}
  */
  readonly hostInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#refresh_host_config EmrCluster#refresh_host_config}
  */
  readonly refreshHostConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#service_name EmrCluster#service_name}
  */
  readonly serviceName: string;
}

export function emrClusterModifyClusterServiceConfigToTerraform(struct?: EmrClusterModifyClusterServiceConfigOutputReference | EmrClusterModifyClusterServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    config_params: cdktf.stringToTerraform(struct!.configParams),
    config_type: cdktf.stringToTerraform(struct!.configType),
    custom_config_params: cdktf.stringToTerraform(struct!.customConfigParams),
    gateway_cluster_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gatewayClusterIdList),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    host_instance_id: cdktf.stringToTerraform(struct!.hostInstanceId),
    refresh_host_config: cdktf.booleanToTerraform(struct!.refreshHostConfig),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function emrClusterModifyClusterServiceConfigToHclTerraform(struct?: EmrClusterModifyClusterServiceConfigOutputReference | EmrClusterModifyClusterServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_params: {
      value: cdktf.stringToHclTerraform(struct!.configParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_type: {
      value: cdktf.stringToHclTerraform(struct!.configType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_config_params: {
      value: cdktf.stringToHclTerraform(struct!.customConfigParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_cluster_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gatewayClusterIdList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.hostInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_host_config: {
      value: cdktf.booleanToHclTerraform(struct!.refreshHostConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterModifyClusterServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterModifyClusterServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._configParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParams = this._configParams;
    }
    if (this._configType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configType = this._configType;
    }
    if (this._customConfigParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfigParams = this._customConfigParams;
    }
    if (this._gatewayClusterIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayClusterIdList = this._gatewayClusterIdList;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._hostInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostInstanceId = this._hostInstanceId;
    }
    if (this._refreshHostConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshHostConfig = this._refreshHostConfig;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterModifyClusterServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._configParams = undefined;
      this._configType = undefined;
      this._customConfigParams = undefined;
      this._gatewayClusterIdList = undefined;
      this._groupId = undefined;
      this._hostInstanceId = undefined;
      this._refreshHostConfig = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._configParams = value.configParams;
      this._configType = value.configType;
      this._customConfigParams = value.customConfigParams;
      this._gatewayClusterIdList = value.gatewayClusterIdList;
      this._groupId = value.groupId;
      this._hostInstanceId = value.hostInstanceId;
      this._refreshHostConfig = value.refreshHostConfig;
      this._serviceName = value.serviceName;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // config_params - computed: false, optional: false, required: true
  private _configParams?: string; 
  public get configParams() {
    return this.getStringAttribute('config_params');
  }
  public set configParams(value: string) {
    this._configParams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamsInput() {
    return this._configParams;
  }

  // config_type - computed: false, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // custom_config_params - computed: false, optional: true, required: false
  private _customConfigParams?: string; 
  public get customConfigParams() {
    return this.getStringAttribute('custom_config_params');
  }
  public set customConfigParams(value: string) {
    this._customConfigParams = value;
  }
  public resetCustomConfigParams() {
    this._customConfigParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigParamsInput() {
    return this._customConfigParams;
  }

  // gateway_cluster_id_list - computed: false, optional: true, required: false
  private _gatewayClusterIdList?: string[]; 
  public get gatewayClusterIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('gateway_cluster_id_list'));
  }
  public set gatewayClusterIdList(value: string[]) {
    this._gatewayClusterIdList = value;
  }
  public resetGatewayClusterIdList() {
    this._gatewayClusterIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayClusterIdListInput() {
    return this._gatewayClusterIdList;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // host_instance_id - computed: false, optional: true, required: false
  private _hostInstanceId?: string; 
  public get hostInstanceId() {
    return this.getStringAttribute('host_instance_id');
  }
  public set hostInstanceId(value: string) {
    this._hostInstanceId = value;
  }
  public resetHostInstanceId() {
    this._hostInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInstanceIdInput() {
    return this._hostInstanceId;
  }

  // refresh_host_config - computed: false, optional: true, required: false
  private _refreshHostConfig?: boolean | cdktf.IResolvable; 
  public get refreshHostConfig() {
    return this.getBooleanAttribute('refresh_host_config');
  }
  public set refreshHostConfig(value: boolean | cdktf.IResolvable) {
    this._refreshHostConfig = value;
  }
  public resetRefreshHostConfig() {
    this._refreshHostConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshHostConfigInput() {
    return this._refreshHostConfig;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface EmrClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#create EmrCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#delete EmrCluster#delete}
  */
  readonly delete?: string;
}

export function emrClusterTimeoutsToTerraform(struct?: EmrClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function emrClusterTimeoutsToHclTerraform(struct?: EmrClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster alicloud_emr_cluster}
*/
export class EmrCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_emr_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrCluster to import
  * @param importFromId The id of the existing EmrCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_emr_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/emr_cluster alicloud_emr_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_emr_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chargeType = config.chargeType;
    this._clusterType = config.clusterType;
    this._depositType = config.depositType;
    this._easEnable = config.easEnable;
    this._emrVer = config.emrVer;
    this._highAvailabilityEnable = config.highAvailabilityEnable;
    this._id = config.id;
    this._isOpenPublicIp = config.isOpenPublicIp;
    this._keyPairName = config.keyPairName;
    this._masterPwd = config.masterPwd;
    this._metaStoreType = config.metaStoreType;
    this._name = config.name;
    this._optionSoftwareList = config.optionSoftwareList;
    this._period = config.period;
    this._relatedClusterId = config.relatedClusterId;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupId = config.securityGroupId;
    this._sshEnable = config.sshEnable;
    this._tags = config.tags;
    this._useLocalMetadb = config.useLocalMetadb;
    this._userDefinedEmrEcsRole = config.userDefinedEmrEcsRole;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._bootstrapAction.internalValue = config.bootstrapAction;
    this._configs.internalValue = config.configs;
    this._hostGroup.internalValue = config.hostGroup;
    this._metaStoreConf.internalValue = config.metaStoreConf;
    this._modifyClusterServiceConfig.internalValue = config.modifyClusterServiceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // deposit_type - computed: false, optional: true, required: false
  private _depositType?: string; 
  public get depositType() {
    return this.getStringAttribute('deposit_type');
  }
  public set depositType(value: string) {
    this._depositType = value;
  }
  public resetDepositType() {
    this._depositType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depositTypeInput() {
    return this._depositType;
  }

  // eas_enable - computed: false, optional: true, required: false
  private _easEnable?: boolean | cdktf.IResolvable; 
  public get easEnable() {
    return this.getBooleanAttribute('eas_enable');
  }
  public set easEnable(value: boolean | cdktf.IResolvable) {
    this._easEnable = value;
  }
  public resetEasEnable() {
    this._easEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get easEnableInput() {
    return this._easEnable;
  }

  // emr_ver - computed: false, optional: false, required: true
  private _emrVer?: string; 
  public get emrVer() {
    return this.getStringAttribute('emr_ver');
  }
  public set emrVer(value: string) {
    this._emrVer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emrVerInput() {
    return this._emrVer;
  }

  // high_availability_enable - computed: false, optional: true, required: false
  private _highAvailabilityEnable?: boolean | cdktf.IResolvable; 
  public get highAvailabilityEnable() {
    return this.getBooleanAttribute('high_availability_enable');
  }
  public set highAvailabilityEnable(value: boolean | cdktf.IResolvable) {
    this._highAvailabilityEnable = value;
  }
  public resetHighAvailabilityEnable() {
    this._highAvailabilityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityEnableInput() {
    return this._highAvailabilityEnable;
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

  // is_open_public_ip - computed: false, optional: true, required: false
  private _isOpenPublicIp?: boolean | cdktf.IResolvable; 
  public get isOpenPublicIp() {
    return this.getBooleanAttribute('is_open_public_ip');
  }
  public set isOpenPublicIp(value: boolean | cdktf.IResolvable) {
    this._isOpenPublicIp = value;
  }
  public resetIsOpenPublicIp() {
    this._isOpenPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOpenPublicIpInput() {
    return this._isOpenPublicIp;
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // master_pwd - computed: false, optional: true, required: false
  private _masterPwd?: string; 
  public get masterPwd() {
    return this.getStringAttribute('master_pwd');
  }
  public set masterPwd(value: string) {
    this._masterPwd = value;
  }
  public resetMasterPwd() {
    this._masterPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPwdInput() {
    return this._masterPwd;
  }

  // meta_store_type - computed: true, optional: true, required: false
  private _metaStoreType?: string; 
  public get metaStoreType() {
    return this.getStringAttribute('meta_store_type');
  }
  public set metaStoreType(value: string) {
    this._metaStoreType = value;
  }
  public resetMetaStoreType() {
    this._metaStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaStoreTypeInput() {
    return this._metaStoreType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // option_software_list - computed: false, optional: true, required: false
  private _optionSoftwareList?: string[]; 
  public get optionSoftwareList() {
    return this.getListAttribute('option_software_list');
  }
  public set optionSoftwareList(value: string[]) {
    this._optionSoftwareList = value;
  }
  public resetOptionSoftwareList() {
    this._optionSoftwareList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionSoftwareListInput() {
    return this._optionSoftwareList;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // related_cluster_id - computed: false, optional: true, required: false
  private _relatedClusterId?: string; 
  public get relatedClusterId() {
    return this.getStringAttribute('related_cluster_id');
  }
  public set relatedClusterId(value: string) {
    this._relatedClusterId = value;
  }
  public resetRelatedClusterId() {
    this._relatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedClusterIdInput() {
    return this._relatedClusterId;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_group_id - computed: false, optional: true, required: false
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

  // ssh_enable - computed: false, optional: true, required: false
  private _sshEnable?: boolean | cdktf.IResolvable; 
  public get sshEnable() {
    return this.getBooleanAttribute('ssh_enable');
  }
  public set sshEnable(value: boolean | cdktf.IResolvable) {
    this._sshEnable = value;
  }
  public resetSshEnable() {
    this._sshEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEnableInput() {
    return this._sshEnable;
  }

  // tags - computed: true, optional: true, required: false
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

  // use_local_metadb - computed: false, optional: true, required: false
  private _useLocalMetadb?: boolean | cdktf.IResolvable; 
  public get useLocalMetadb() {
    return this.getBooleanAttribute('use_local_metadb');
  }
  public set useLocalMetadb(value: boolean | cdktf.IResolvable) {
    this._useLocalMetadb = value;
  }
  public resetUseLocalMetadb() {
    this._useLocalMetadb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalMetadbInput() {
    return this._useLocalMetadb;
  }

  // user_defined_emr_ecs_role - computed: false, optional: true, required: false
  private _userDefinedEmrEcsRole?: string; 
  public get userDefinedEmrEcsRole() {
    return this.getStringAttribute('user_defined_emr_ecs_role');
  }
  public set userDefinedEmrEcsRole(value: string) {
    this._userDefinedEmrEcsRole = value;
  }
  public resetUserDefinedEmrEcsRole() {
    this._userDefinedEmrEcsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedEmrEcsRoleInput() {
    return this._userDefinedEmrEcsRole;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // bootstrap_action - computed: false, optional: true, required: false
  private _bootstrapAction = new EmrClusterBootstrapActionList(this, "bootstrap_action", true);
  public get bootstrapAction() {
    return this._bootstrapAction;
  }
  public putBootstrapAction(value: EmrClusterBootstrapAction[] | cdktf.IResolvable) {
    this._bootstrapAction.internalValue = value;
  }
  public resetBootstrapAction() {
    this._bootstrapAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapActionInput() {
    return this._bootstrapAction.internalValue;
  }

  // configs - computed: false, optional: true, required: false
  private _configs = new EmrClusterConfigsList(this, "configs", true);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: EmrClusterConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // host_group - computed: false, optional: true, required: false
  private _hostGroup = new EmrClusterHostGroupList(this, "host_group", true);
  public get hostGroup() {
    return this._hostGroup;
  }
  public putHostGroup(value: EmrClusterHostGroup[] | cdktf.IResolvable) {
    this._hostGroup.internalValue = value;
  }
  public resetHostGroup() {
    this._hostGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupInput() {
    return this._hostGroup.internalValue;
  }

  // meta_store_conf - computed: false, optional: true, required: false
  private _metaStoreConf = new EmrClusterMetaStoreConfOutputReference(this, "meta_store_conf");
  public get metaStoreConf() {
    return this._metaStoreConf;
  }
  public putMetaStoreConf(value: EmrClusterMetaStoreConf) {
    this._metaStoreConf.internalValue = value;
  }
  public resetMetaStoreConf() {
    this._metaStoreConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaStoreConfInput() {
    return this._metaStoreConf.internalValue;
  }

  // modify_cluster_service_config - computed: false, optional: true, required: false
  private _modifyClusterServiceConfig = new EmrClusterModifyClusterServiceConfigOutputReference(this, "modify_cluster_service_config");
  public get modifyClusterServiceConfig() {
    return this._modifyClusterServiceConfig;
  }
  public putModifyClusterServiceConfig(value: EmrClusterModifyClusterServiceConfig) {
    this._modifyClusterServiceConfig.internalValue = value;
  }
  public resetModifyClusterServiceConfig() {
    this._modifyClusterServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyClusterServiceConfigInput() {
    return this._modifyClusterServiceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EmrClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EmrClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      charge_type: cdktf.stringToTerraform(this._chargeType),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      deposit_type: cdktf.stringToTerraform(this._depositType),
      eas_enable: cdktf.booleanToTerraform(this._easEnable),
      emr_ver: cdktf.stringToTerraform(this._emrVer),
      high_availability_enable: cdktf.booleanToTerraform(this._highAvailabilityEnable),
      id: cdktf.stringToTerraform(this._id),
      is_open_public_ip: cdktf.booleanToTerraform(this._isOpenPublicIp),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      master_pwd: cdktf.stringToTerraform(this._masterPwd),
      meta_store_type: cdktf.stringToTerraform(this._metaStoreType),
      name: cdktf.stringToTerraform(this._name),
      option_software_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optionSoftwareList),
      period: cdktf.numberToTerraform(this._period),
      related_cluster_id: cdktf.stringToTerraform(this._relatedClusterId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      ssh_enable: cdktf.booleanToTerraform(this._sshEnable),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_local_metadb: cdktf.booleanToTerraform(this._useLocalMetadb),
      user_defined_emr_ecs_role: cdktf.stringToTerraform(this._userDefinedEmrEcsRole),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      bootstrap_action: cdktf.listMapper(emrClusterBootstrapActionToTerraform, true)(this._bootstrapAction.internalValue),
      configs: cdktf.listMapper(emrClusterConfigsToTerraform, true)(this._configs.internalValue),
      host_group: cdktf.listMapper(emrClusterHostGroupToTerraform, true)(this._hostGroup.internalValue),
      meta_store_conf: emrClusterMetaStoreConfToTerraform(this._metaStoreConf.internalValue),
      modify_cluster_service_config: emrClusterModifyClusterServiceConfigToTerraform(this._modifyClusterServiceConfig.internalValue),
      timeouts: emrClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deposit_type: {
        value: cdktf.stringToHclTerraform(this._depositType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eas_enable: {
        value: cdktf.booleanToHclTerraform(this._easEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      emr_ver: {
        value: cdktf.stringToHclTerraform(this._emrVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_availability_enable: {
        value: cdktf.booleanToHclTerraform(this._highAvailabilityEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_open_public_ip: {
        value: cdktf.booleanToHclTerraform(this._isOpenPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_pwd: {
        value: cdktf.stringToHclTerraform(this._masterPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_store_type: {
        value: cdktf.stringToHclTerraform(this._metaStoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_software_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optionSoftwareList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      related_cluster_id: {
        value: cdktf.stringToHclTerraform(this._relatedClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_enable: {
        value: cdktf.booleanToHclTerraform(this._sshEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_local_metadb: {
        value: cdktf.booleanToHclTerraform(this._useLocalMetadb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_defined_emr_ecs_role: {
        value: cdktf.stringToHclTerraform(this._userDefinedEmrEcsRole),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_action: {
        value: cdktf.listMapperHcl(emrClusterBootstrapActionToHclTerraform, true)(this._bootstrapAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrClusterBootstrapActionList",
      },
      configs: {
        value: cdktf.listMapperHcl(emrClusterConfigsToHclTerraform, true)(this._configs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrClusterConfigsList",
      },
      host_group: {
        value: cdktf.listMapperHcl(emrClusterHostGroupToHclTerraform, true)(this._hostGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrClusterHostGroupList",
      },
      meta_store_conf: {
        value: emrClusterMetaStoreConfToHclTerraform(this._metaStoreConf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrClusterMetaStoreConfList",
      },
      modify_cluster_service_config: {
        value: emrClusterModifyClusterServiceConfigToHclTerraform(this._modifyClusterServiceConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrClusterModifyClusterServiceConfigList",
      },
      timeouts: {
        value: emrClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
