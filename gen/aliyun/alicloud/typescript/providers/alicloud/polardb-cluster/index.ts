// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#allow_shut_down PolardbCluster#allow_shut_down}
  */
  readonly allowShutDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#auto_renew_period PolardbCluster#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#backup_retention_policy_on_cluster_deletion PolardbCluster#backup_retention_policy_on_cluster_deletion}
  */
  readonly backupRetentionPolicyOnClusterDeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#clone_data_point PolardbCluster#clone_data_point}
  */
  readonly cloneDataPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#collector_status PolardbCluster#collector_status}
  */
  readonly collectorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#compress_storage PolardbCluster#compress_storage}
  */
  readonly compressStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#creation_category PolardbCluster#creation_category}
  */
  readonly creationCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#creation_option PolardbCluster#creation_option}
  */
  readonly creationOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_minor_version PolardbCluster#db_minor_version}
  */
  readonly dbMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_node_class PolardbCluster#db_node_class}
  */
  readonly dbNodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_node_count PolardbCluster#db_node_count}
  */
  readonly dbNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_node_id PolardbCluster#db_node_id}
  */
  readonly dbNodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_node_num PolardbCluster#db_node_num}
  */
  readonly dbNodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_type PolardbCluster#db_type}
  */
  readonly dbType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_version PolardbCluster#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#default_time_zone PolardbCluster#default_time_zone}
  */
  readonly defaultTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#deletion_lock PolardbCluster#deletion_lock}
  */
  readonly deletionLock?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#description PolardbCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#encrypt_new_tables PolardbCluster#encrypt_new_tables}
  */
  readonly encryptNewTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#encryption_key PolardbCluster#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#from_time_service PolardbCluster#from_time_service}
  */
  readonly fromTimeService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#gdn_id PolardbCluster#gdn_id}
  */
  readonly gdnId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#hot_replica_mode PolardbCluster#hot_replica_mode}
  */
  readonly hotReplicaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#hot_standby_cluster PolardbCluster#hot_standby_cluster}
  */
  readonly hotStandbyCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#id PolardbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#imci_switch PolardbCluster#imci_switch}
  */
  readonly imciSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#loose_polar_log_bin PolardbCluster#loose_polar_log_bin}
  */
  readonly loosePolarLogBin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#loose_xengine PolardbCluster#loose_xengine}
  */
  readonly looseXengine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#loose_xengine_use_memory_pct PolardbCluster#loose_xengine_use_memory_pct}
  */
  readonly looseXengineUseMemoryPct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#lower_case_table_names PolardbCluster#lower_case_table_names}
  */
  readonly lowerCaseTableNames?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#maintain_time PolardbCluster#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#modify_type PolardbCluster#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#parameter_group_id PolardbCluster#parameter_group_id}
  */
  readonly parameterGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#pay_type PolardbCluster#pay_type}
  */
  readonly payType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#period PolardbCluster#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#planned_end_time PolardbCluster#planned_end_time}
  */
  readonly plannedEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#planned_start_time PolardbCluster#planned_start_time}
  */
  readonly plannedStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#provisioned_iops PolardbCluster#provisioned_iops}
  */
  readonly provisionedIops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#proxy_class PolardbCluster#proxy_class}
  */
  readonly proxyClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#proxy_type PolardbCluster#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#renewal_status PolardbCluster#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#resource_group_id PolardbCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#role_arn PolardbCluster#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#scale_ap_ro_num_max PolardbCluster#scale_ap_ro_num_max}
  */
  readonly scaleApRoNumMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#scale_ap_ro_num_min PolardbCluster#scale_ap_ro_num_min}
  */
  readonly scaleApRoNumMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#scale_max PolardbCluster#scale_max}
  */
  readonly scaleMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#scale_min PolardbCluster#scale_min}
  */
  readonly scaleMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#scale_ro_num_max PolardbCluster#scale_ro_num_max}
  */
  readonly scaleRoNumMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#scale_ro_num_min PolardbCluster#scale_ro_num_min}
  */
  readonly scaleRoNumMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#seconds_until_auto_pause PolardbCluster#seconds_until_auto_pause}
  */
  readonly secondsUntilAutoPause?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#security_group_ids PolardbCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#security_ips PolardbCluster#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#serverless_rule_cpu_enlarge_threshold PolardbCluster#serverless_rule_cpu_enlarge_threshold}
  */
  readonly serverlessRuleCpuEnlargeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#serverless_rule_cpu_shrink_threshold PolardbCluster#serverless_rule_cpu_shrink_threshold}
  */
  readonly serverlessRuleCpuShrinkThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#serverless_rule_mode PolardbCluster#serverless_rule_mode}
  */
  readonly serverlessRuleMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#serverless_steady_switch PolardbCluster#serverless_steady_switch}
  */
  readonly serverlessSteadySwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#serverless_type PolardbCluster#serverless_type}
  */
  readonly serverlessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#source_resource_id PolardbCluster#source_resource_id}
  */
  readonly sourceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#standby_az PolardbCluster#standby_az}
  */
  readonly standbyAz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#storage_pay_type PolardbCluster#storage_pay_type}
  */
  readonly storagePayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#storage_space PolardbCluster#storage_space}
  */
  readonly storageSpace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#storage_type PolardbCluster#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#strict_consistency PolardbCluster#strict_consistency}
  */
  readonly strictConsistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#sub_category PolardbCluster#sub_category}
  */
  readonly subCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#tags PolardbCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#target_db_revision_version_code PolardbCluster#target_db_revision_version_code}
  */
  readonly targetDbRevisionVersionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#tde_status PolardbCluster#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#upgrade_type PolardbCluster#upgrade_type}
  */
  readonly upgradeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#vpc_id PolardbCluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#vswitch_id PolardbCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#zone_id PolardbCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * db_cluster_ip_array block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_cluster_ip_array PolardbCluster#db_cluster_ip_array}
  */
  readonly dbClusterIpArray?: PolardbClusterDbClusterIpArray[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#parameters PolardbCluster#parameters}
  */
  readonly parameters?: PolardbClusterParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#timeouts PolardbCluster#timeouts}
  */
  readonly timeouts?: PolardbClusterTimeouts;
}
export interface PolardbClusterDbRevisionVersionListStruct {
}

export function polardbClusterDbRevisionVersionListStructToTerraform(struct?: PolardbClusterDbRevisionVersionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function polardbClusterDbRevisionVersionListStructToHclTerraform(struct?: PolardbClusterDbRevisionVersionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PolardbClusterDbRevisionVersionListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PolardbClusterDbRevisionVersionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolardbClusterDbRevisionVersionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // release_note - computed: true, optional: false, required: false
  public get releaseNote() {
    return this.getStringAttribute('release_note');
  }

  // release_type - computed: true, optional: false, required: false
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }

  // revision_version_code - computed: true, optional: false, required: false
  public get revisionVersionCode() {
    return this.getStringAttribute('revision_version_code');
  }

  // revision_version_name - computed: true, optional: false, required: false
  public get revisionVersionName() {
    return this.getStringAttribute('revision_version_name');
  }
}

export class PolardbClusterDbRevisionVersionListStructList extends cdktf.ComplexList {

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
  public get(index: number): PolardbClusterDbRevisionVersionListStructOutputReference {
    return new PolardbClusterDbRevisionVersionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolardbClusterDbClusterIpArray {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#db_cluster_ip_array_name PolardbCluster#db_cluster_ip_array_name}
  */
  readonly dbClusterIpArrayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#modify_mode PolardbCluster#modify_mode}
  */
  readonly modifyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#security_ips PolardbCluster#security_ips}
  */
  readonly securityIps?: string[];
}

export function polardbClusterDbClusterIpArrayToTerraform(struct?: PolardbClusterDbClusterIpArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_cluster_ip_array_name: cdktf.stringToTerraform(struct!.dbClusterIpArrayName),
    modify_mode: cdktf.stringToTerraform(struct!.modifyMode),
    security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityIps),
  }
}


export function polardbClusterDbClusterIpArrayToHclTerraform(struct?: PolardbClusterDbClusterIpArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_cluster_ip_array_name: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterIpArrayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_mode: {
      value: cdktf.stringToHclTerraform(struct!.modifyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolardbClusterDbClusterIpArrayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbClusterDbClusterIpArray | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbClusterIpArrayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIpArrayName = this._dbClusterIpArrayName;
    }
    if (this._modifyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyMode = this._modifyMode;
    }
    if (this._securityIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIps = this._securityIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolardbClusterDbClusterIpArray | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbClusterIpArrayName = undefined;
      this._modifyMode = undefined;
      this._securityIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbClusterIpArrayName = value.dbClusterIpArrayName;
      this._modifyMode = value.modifyMode;
      this._securityIps = value.securityIps;
    }
  }

  // db_cluster_ip_array_name - computed: false, optional: true, required: false
  private _dbClusterIpArrayName?: string; 
  public get dbClusterIpArrayName() {
    return this.getStringAttribute('db_cluster_ip_array_name');
  }
  public set dbClusterIpArrayName(value: string) {
    this._dbClusterIpArrayName = value;
  }
  public resetDbClusterIpArrayName() {
    this._dbClusterIpArrayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIpArrayNameInput() {
    return this._dbClusterIpArrayName;
  }

  // modify_mode - computed: false, optional: true, required: false
  private _modifyMode?: string; 
  public get modifyMode() {
    return this.getStringAttribute('modify_mode');
  }
  public set modifyMode(value: string) {
    this._modifyMode = value;
  }
  public resetModifyMode() {
    this._modifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyModeInput() {
    return this._modifyMode;
  }

  // security_ips - computed: false, optional: true, required: false
  private _securityIps?: string[]; 
  public get securityIps() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ips'));
  }
  public set securityIps(value: string[]) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }
}

export class PolardbClusterDbClusterIpArrayList extends cdktf.ComplexList {
  public internalValue? : PolardbClusterDbClusterIpArray[] | cdktf.IResolvable

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
  public get(index: number): PolardbClusterDbClusterIpArrayOutputReference {
    return new PolardbClusterDbClusterIpArrayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolardbClusterParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#name PolardbCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#value PolardbCluster#value}
  */
  readonly value: string;
}

export function polardbClusterParametersToTerraform(struct?: PolardbClusterParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function polardbClusterParametersToHclTerraform(struct?: PolardbClusterParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolardbClusterParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbClusterParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolardbClusterParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolardbClusterParametersList extends cdktf.ComplexList {
  public internalValue? : PolardbClusterParameters[] | cdktf.IResolvable

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
  public get(index: number): PolardbClusterParametersOutputReference {
    return new PolardbClusterParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolardbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#create PolardbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#delete PolardbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#update PolardbCluster#update}
  */
  readonly update?: string;
}

export function polardbClusterTimeoutsToTerraform(struct?: PolardbClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function polardbClusterTimeoutsToHclTerraform(struct?: PolardbClusterTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolardbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolardbClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolardbClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster alicloud_polardb_cluster}
*/
export class PolardbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbCluster to import
  * @param importFromId The id of the existing PolardbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_cluster alicloud_polardb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowShutDown = config.allowShutDown;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._backupRetentionPolicyOnClusterDeletion = config.backupRetentionPolicyOnClusterDeletion;
    this._cloneDataPoint = config.cloneDataPoint;
    this._collectorStatus = config.collectorStatus;
    this._compressStorage = config.compressStorage;
    this._creationCategory = config.creationCategory;
    this._creationOption = config.creationOption;
    this._dbMinorVersion = config.dbMinorVersion;
    this._dbNodeClass = config.dbNodeClass;
    this._dbNodeCount = config.dbNodeCount;
    this._dbNodeId = config.dbNodeId;
    this._dbNodeNum = config.dbNodeNum;
    this._dbType = config.dbType;
    this._dbVersion = config.dbVersion;
    this._defaultTimeZone = config.defaultTimeZone;
    this._deletionLock = config.deletionLock;
    this._description = config.description;
    this._encryptNewTables = config.encryptNewTables;
    this._encryptionKey = config.encryptionKey;
    this._fromTimeService = config.fromTimeService;
    this._gdnId = config.gdnId;
    this._hotReplicaMode = config.hotReplicaMode;
    this._hotStandbyCluster = config.hotStandbyCluster;
    this._id = config.id;
    this._imciSwitch = config.imciSwitch;
    this._loosePolarLogBin = config.loosePolarLogBin;
    this._looseXengine = config.looseXengine;
    this._looseXengineUseMemoryPct = config.looseXengineUseMemoryPct;
    this._lowerCaseTableNames = config.lowerCaseTableNames;
    this._maintainTime = config.maintainTime;
    this._modifyType = config.modifyType;
    this._parameterGroupId = config.parameterGroupId;
    this._payType = config.payType;
    this._period = config.period;
    this._plannedEndTime = config.plannedEndTime;
    this._plannedStartTime = config.plannedStartTime;
    this._provisionedIops = config.provisionedIops;
    this._proxyClass = config.proxyClass;
    this._proxyType = config.proxyType;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._roleArn = config.roleArn;
    this._scaleApRoNumMax = config.scaleApRoNumMax;
    this._scaleApRoNumMin = config.scaleApRoNumMin;
    this._scaleMax = config.scaleMax;
    this._scaleMin = config.scaleMin;
    this._scaleRoNumMax = config.scaleRoNumMax;
    this._scaleRoNumMin = config.scaleRoNumMin;
    this._secondsUntilAutoPause = config.secondsUntilAutoPause;
    this._securityGroupIds = config.securityGroupIds;
    this._securityIps = config.securityIps;
    this._serverlessRuleCpuEnlargeThreshold = config.serverlessRuleCpuEnlargeThreshold;
    this._serverlessRuleCpuShrinkThreshold = config.serverlessRuleCpuShrinkThreshold;
    this._serverlessRuleMode = config.serverlessRuleMode;
    this._serverlessSteadySwitch = config.serverlessSteadySwitch;
    this._serverlessType = config.serverlessType;
    this._sourceResourceId = config.sourceResourceId;
    this._standbyAz = config.standbyAz;
    this._storagePayType = config.storagePayType;
    this._storageSpace = config.storageSpace;
    this._storageType = config.storageType;
    this._strictConsistency = config.strictConsistency;
    this._subCategory = config.subCategory;
    this._tags = config.tags;
    this._targetDbRevisionVersionCode = config.targetDbRevisionVersionCode;
    this._tdeStatus = config.tdeStatus;
    this._upgradeType = config.upgradeType;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._dbClusterIpArray.internalValue = config.dbClusterIpArray;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_shut_down - computed: false, optional: true, required: false
  private _allowShutDown?: string; 
  public get allowShutDown() {
    return this.getStringAttribute('allow_shut_down');
  }
  public set allowShutDown(value: string) {
    this._allowShutDown = value;
  }
  public resetAllowShutDown() {
    this._allowShutDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShutDownInput() {
    return this._allowShutDown;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // backup_retention_policy_on_cluster_deletion - computed: true, optional: true, required: false
  private _backupRetentionPolicyOnClusterDeletion?: string; 
  public get backupRetentionPolicyOnClusterDeletion() {
    return this.getStringAttribute('backup_retention_policy_on_cluster_deletion');
  }
  public set backupRetentionPolicyOnClusterDeletion(value: string) {
    this._backupRetentionPolicyOnClusterDeletion = value;
  }
  public resetBackupRetentionPolicyOnClusterDeletion() {
    this._backupRetentionPolicyOnClusterDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyOnClusterDeletionInput() {
    return this._backupRetentionPolicyOnClusterDeletion;
  }

  // clone_data_point - computed: false, optional: true, required: false
  private _cloneDataPoint?: string; 
  public get cloneDataPoint() {
    return this.getStringAttribute('clone_data_point');
  }
  public set cloneDataPoint(value: string) {
    this._cloneDataPoint = value;
  }
  public resetCloneDataPoint() {
    this._cloneDataPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneDataPointInput() {
    return this._cloneDataPoint;
  }

  // collector_status - computed: true, optional: true, required: false
  private _collectorStatus?: string; 
  public get collectorStatus() {
    return this.getStringAttribute('collector_status');
  }
  public set collectorStatus(value: string) {
    this._collectorStatus = value;
  }
  public resetCollectorStatus() {
    this._collectorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorStatusInput() {
    return this._collectorStatus;
  }

  // compress_storage - computed: true, optional: true, required: false
  private _compressStorage?: string; 
  public get compressStorage() {
    return this.getStringAttribute('compress_storage');
  }
  public set compressStorage(value: string) {
    this._compressStorage = value;
  }
  public resetCompressStorage() {
    this._compressStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressStorageInput() {
    return this._compressStorage;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creation_category - computed: true, optional: true, required: false
  private _creationCategory?: string; 
  public get creationCategory() {
    return this.getStringAttribute('creation_category');
  }
  public set creationCategory(value: string) {
    this._creationCategory = value;
  }
  public resetCreationCategory() {
    this._creationCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationCategoryInput() {
    return this._creationCategory;
  }

  // creation_option - computed: true, optional: true, required: false
  private _creationOption?: string; 
  public get creationOption() {
    return this.getStringAttribute('creation_option');
  }
  public set creationOption(value: string) {
    this._creationOption = value;
  }
  public resetCreationOption() {
    this._creationOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationOptionInput() {
    return this._creationOption;
  }

  // db_minor_version - computed: true, optional: true, required: false
  private _dbMinorVersion?: string; 
  public get dbMinorVersion() {
    return this.getStringAttribute('db_minor_version');
  }
  public set dbMinorVersion(value: string) {
    this._dbMinorVersion = value;
  }
  public resetDbMinorVersion() {
    this._dbMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMinorVersionInput() {
    return this._dbMinorVersion;
  }

  // db_node_class - computed: false, optional: false, required: true
  private _dbNodeClass?: string; 
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }
  public set dbNodeClass(value: string) {
    this._dbNodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeClassInput() {
    return this._dbNodeClass;
  }

  // db_node_count - computed: true, optional: true, required: false
  private _dbNodeCount?: number; 
  public get dbNodeCount() {
    return this.getNumberAttribute('db_node_count');
  }
  public set dbNodeCount(value: number) {
    this._dbNodeCount = value;
  }
  public resetDbNodeCount() {
    this._dbNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeCountInput() {
    return this._dbNodeCount;
  }

  // db_node_id - computed: false, optional: true, required: false
  private _dbNodeId?: string; 
  public get dbNodeId() {
    return this.getStringAttribute('db_node_id');
  }
  public set dbNodeId(value: string) {
    this._dbNodeId = value;
  }
  public resetDbNodeId() {
    this._dbNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeIdInput() {
    return this._dbNodeId;
  }

  // db_node_num - computed: false, optional: true, required: false
  private _dbNodeNum?: number; 
  public get dbNodeNum() {
    return this.getNumberAttribute('db_node_num');
  }
  public set dbNodeNum(value: number) {
    this._dbNodeNum = value;
  }
  public resetDbNodeNum() {
    this._dbNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeNumInput() {
    return this._dbNodeNum;
  }

  // db_revision_version_list - computed: true, optional: false, required: false
  private _dbRevisionVersionList = new PolardbClusterDbRevisionVersionListStructList(this, "db_revision_version_list", false);
  public get dbRevisionVersionList() {
    return this._dbRevisionVersionList;
  }

  // db_type - computed: false, optional: false, required: true
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // default_time_zone - computed: true, optional: true, required: false
  private _defaultTimeZone?: string; 
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }
  public set defaultTimeZone(value: string) {
    this._defaultTimeZone = value;
  }
  public resetDefaultTimeZone() {
    this._defaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeZoneInput() {
    return this._defaultTimeZone;
  }

  // deletion_lock - computed: false, optional: true, required: false
  private _deletionLock?: number; 
  public get deletionLock() {
    return this.getNumberAttribute('deletion_lock');
  }
  public set deletionLock(value: number) {
    this._deletionLock = value;
  }
  public resetDeletionLock() {
    this._deletionLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionLockInput() {
    return this._deletionLock;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encrypt_new_tables - computed: false, optional: true, required: false
  private _encryptNewTables?: string; 
  public get encryptNewTables() {
    return this.getStringAttribute('encrypt_new_tables');
  }
  public set encryptNewTables(value: string) {
    this._encryptNewTables = value;
  }
  public resetEncryptNewTables() {
    this._encryptNewTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptNewTablesInput() {
    return this._encryptNewTables;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // from_time_service - computed: false, optional: true, required: false
  private _fromTimeService?: string; 
  public get fromTimeService() {
    return this.getStringAttribute('from_time_service');
  }
  public set fromTimeService(value: string) {
    this._fromTimeService = value;
  }
  public resetFromTimeService() {
    this._fromTimeService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeServiceInput() {
    return this._fromTimeService;
  }

  // gdn_id - computed: false, optional: true, required: false
  private _gdnId?: string; 
  public get gdnId() {
    return this.getStringAttribute('gdn_id');
  }
  public set gdnId(value: string) {
    this._gdnId = value;
  }
  public resetGdnId() {
    this._gdnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gdnIdInput() {
    return this._gdnId;
  }

  // hot_replica_mode - computed: true, optional: true, required: false
  private _hotReplicaMode?: string; 
  public get hotReplicaMode() {
    return this.getStringAttribute('hot_replica_mode');
  }
  public set hotReplicaMode(value: string) {
    this._hotReplicaMode = value;
  }
  public resetHotReplicaMode() {
    this._hotReplicaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotReplicaModeInput() {
    return this._hotReplicaMode;
  }

  // hot_standby_cluster - computed: true, optional: true, required: false
  private _hotStandbyCluster?: string; 
  public get hotStandbyCluster() {
    return this.getStringAttribute('hot_standby_cluster');
  }
  public set hotStandbyCluster(value: string) {
    this._hotStandbyCluster = value;
  }
  public resetHotStandbyCluster() {
    this._hotStandbyCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotStandbyClusterInput() {
    return this._hotStandbyCluster;
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

  // imci_switch - computed: true, optional: true, required: false
  private _imciSwitch?: string; 
  public get imciSwitch() {
    return this.getStringAttribute('imci_switch');
  }
  public set imciSwitch(value: string) {
    this._imciSwitch = value;
  }
  public resetImciSwitch() {
    this._imciSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imciSwitchInput() {
    return this._imciSwitch;
  }

  // loose_polar_log_bin - computed: true, optional: true, required: false
  private _loosePolarLogBin?: string; 
  public get loosePolarLogBin() {
    return this.getStringAttribute('loose_polar_log_bin');
  }
  public set loosePolarLogBin(value: string) {
    this._loosePolarLogBin = value;
  }
  public resetLoosePolarLogBin() {
    this._loosePolarLogBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loosePolarLogBinInput() {
    return this._loosePolarLogBin;
  }

  // loose_xengine - computed: true, optional: true, required: false
  private _looseXengine?: string; 
  public get looseXengine() {
    return this.getStringAttribute('loose_xengine');
  }
  public set looseXengine(value: string) {
    this._looseXengine = value;
  }
  public resetLooseXengine() {
    this._looseXengine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get looseXengineInput() {
    return this._looseXengine;
  }

  // loose_xengine_use_memory_pct - computed: true, optional: true, required: false
  private _looseXengineUseMemoryPct?: number; 
  public get looseXengineUseMemoryPct() {
    return this.getNumberAttribute('loose_xengine_use_memory_pct');
  }
  public set looseXengineUseMemoryPct(value: number) {
    this._looseXengineUseMemoryPct = value;
  }
  public resetLooseXengineUseMemoryPct() {
    this._looseXengineUseMemoryPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get looseXengineUseMemoryPctInput() {
    return this._looseXengineUseMemoryPct;
  }

  // lower_case_table_names - computed: true, optional: true, required: false
  private _lowerCaseTableNames?: number; 
  public get lowerCaseTableNames() {
    return this.getNumberAttribute('lower_case_table_names');
  }
  public set lowerCaseTableNames(value: number) {
    this._lowerCaseTableNames = value;
  }
  public resetLowerCaseTableNames() {
    this._lowerCaseTableNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerCaseTableNamesInput() {
    return this._lowerCaseTableNames;
  }

  // maintain_time - computed: true, optional: true, required: false
  private _maintainTime?: string; 
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }
  public set maintainTime(value: string) {
    this._maintainTime = value;
  }
  public resetMaintainTime() {
    this._maintainTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainTimeInput() {
    return this._maintainTime;
  }

  // modify_type - computed: false, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // parameter_group_id - computed: false, optional: true, required: false
  private _parameterGroupId?: string; 
  public get parameterGroupId() {
    return this.getStringAttribute('parameter_group_id');
  }
  public set parameterGroupId(value: string) {
    this._parameterGroupId = value;
  }
  public resetParameterGroupId() {
    this._parameterGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupIdInput() {
    return this._parameterGroupId;
  }

  // pay_type - computed: false, optional: true, required: false
  private _payType?: string; 
  public get payType() {
    return this.getStringAttribute('pay_type');
  }
  public set payType(value: string) {
    this._payType = value;
  }
  public resetPayType() {
    this._payType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
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

  // planned_end_time - computed: false, optional: true, required: false
  private _plannedEndTime?: string; 
  public get plannedEndTime() {
    return this.getStringAttribute('planned_end_time');
  }
  public set plannedEndTime(value: string) {
    this._plannedEndTime = value;
  }
  public resetPlannedEndTime() {
    this._plannedEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedEndTimeInput() {
    return this._plannedEndTime;
  }

  // planned_start_time - computed: false, optional: true, required: false
  private _plannedStartTime?: string; 
  public get plannedStartTime() {
    return this.getStringAttribute('planned_start_time');
  }
  public set plannedStartTime(value: string) {
    this._plannedStartTime = value;
  }
  public resetPlannedStartTime() {
    this._plannedStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedStartTimeInput() {
    return this._plannedStartTime;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // provisioned_iops - computed: true, optional: true, required: false
  private _provisionedIops?: string; 
  public get provisionedIops() {
    return this.getStringAttribute('provisioned_iops');
  }
  public set provisionedIops(value: string) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // proxy_class - computed: false, optional: true, required: false
  private _proxyClass?: string; 
  public get proxyClass() {
    return this.getStringAttribute('proxy_class');
  }
  public set proxyClass(value: string) {
    this._proxyClass = value;
  }
  public resetProxyClass() {
    this._proxyClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyClassInput() {
    return this._proxyClass;
  }

  // proxy_type - computed: false, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // renewal_status - computed: false, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // resource_group_id - computed: true, optional: true, required: false
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // scale_ap_ro_num_max - computed: true, optional: true, required: false
  private _scaleApRoNumMax?: number; 
  public get scaleApRoNumMax() {
    return this.getNumberAttribute('scale_ap_ro_num_max');
  }
  public set scaleApRoNumMax(value: number) {
    this._scaleApRoNumMax = value;
  }
  public resetScaleApRoNumMax() {
    this._scaleApRoNumMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleApRoNumMaxInput() {
    return this._scaleApRoNumMax;
  }

  // scale_ap_ro_num_min - computed: true, optional: true, required: false
  private _scaleApRoNumMin?: number; 
  public get scaleApRoNumMin() {
    return this.getNumberAttribute('scale_ap_ro_num_min');
  }
  public set scaleApRoNumMin(value: number) {
    this._scaleApRoNumMin = value;
  }
  public resetScaleApRoNumMin() {
    this._scaleApRoNumMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleApRoNumMinInput() {
    return this._scaleApRoNumMin;
  }

  // scale_max - computed: false, optional: true, required: false
  private _scaleMax?: number; 
  public get scaleMax() {
    return this.getNumberAttribute('scale_max');
  }
  public set scaleMax(value: number) {
    this._scaleMax = value;
  }
  public resetScaleMax() {
    this._scaleMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMaxInput() {
    return this._scaleMax;
  }

  // scale_min - computed: false, optional: true, required: false
  private _scaleMin?: number; 
  public get scaleMin() {
    return this.getNumberAttribute('scale_min');
  }
  public set scaleMin(value: number) {
    this._scaleMin = value;
  }
  public resetScaleMin() {
    this._scaleMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMinInput() {
    return this._scaleMin;
  }

  // scale_ro_num_max - computed: false, optional: true, required: false
  private _scaleRoNumMax?: number; 
  public get scaleRoNumMax() {
    return this.getNumberAttribute('scale_ro_num_max');
  }
  public set scaleRoNumMax(value: number) {
    this._scaleRoNumMax = value;
  }
  public resetScaleRoNumMax() {
    this._scaleRoNumMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleRoNumMaxInput() {
    return this._scaleRoNumMax;
  }

  // scale_ro_num_min - computed: false, optional: true, required: false
  private _scaleRoNumMin?: number; 
  public get scaleRoNumMin() {
    return this.getNumberAttribute('scale_ro_num_min');
  }
  public set scaleRoNumMin(value: number) {
    this._scaleRoNumMin = value;
  }
  public resetScaleRoNumMin() {
    this._scaleRoNumMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleRoNumMinInput() {
    return this._scaleRoNumMin;
  }

  // seconds_until_auto_pause - computed: true, optional: true, required: false
  private _secondsUntilAutoPause?: number; 
  public get secondsUntilAutoPause() {
    return this.getNumberAttribute('seconds_until_auto_pause');
  }
  public set secondsUntilAutoPause(value: number) {
    this._secondsUntilAutoPause = value;
  }
  public resetSecondsUntilAutoPause() {
    this._secondsUntilAutoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsUntilAutoPauseInput() {
    return this._secondsUntilAutoPause;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // security_ips - computed: true, optional: true, required: false
  private _securityIps?: string[]; 
  public get securityIps() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ips'));
  }
  public set securityIps(value: string[]) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }

  // serverless_rule_cpu_enlarge_threshold - computed: true, optional: true, required: false
  private _serverlessRuleCpuEnlargeThreshold?: number; 
  public get serverlessRuleCpuEnlargeThreshold() {
    return this.getNumberAttribute('serverless_rule_cpu_enlarge_threshold');
  }
  public set serverlessRuleCpuEnlargeThreshold(value: number) {
    this._serverlessRuleCpuEnlargeThreshold = value;
  }
  public resetServerlessRuleCpuEnlargeThreshold() {
    this._serverlessRuleCpuEnlargeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessRuleCpuEnlargeThresholdInput() {
    return this._serverlessRuleCpuEnlargeThreshold;
  }

  // serverless_rule_cpu_shrink_threshold - computed: true, optional: true, required: false
  private _serverlessRuleCpuShrinkThreshold?: number; 
  public get serverlessRuleCpuShrinkThreshold() {
    return this.getNumberAttribute('serverless_rule_cpu_shrink_threshold');
  }
  public set serverlessRuleCpuShrinkThreshold(value: number) {
    this._serverlessRuleCpuShrinkThreshold = value;
  }
  public resetServerlessRuleCpuShrinkThreshold() {
    this._serverlessRuleCpuShrinkThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessRuleCpuShrinkThresholdInput() {
    return this._serverlessRuleCpuShrinkThreshold;
  }

  // serverless_rule_mode - computed: true, optional: true, required: false
  private _serverlessRuleMode?: string; 
  public get serverlessRuleMode() {
    return this.getStringAttribute('serverless_rule_mode');
  }
  public set serverlessRuleMode(value: string) {
    this._serverlessRuleMode = value;
  }
  public resetServerlessRuleMode() {
    this._serverlessRuleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessRuleModeInput() {
    return this._serverlessRuleMode;
  }

  // serverless_steady_switch - computed: false, optional: true, required: false
  private _serverlessSteadySwitch?: string; 
  public get serverlessSteadySwitch() {
    return this.getStringAttribute('serverless_steady_switch');
  }
  public set serverlessSteadySwitch(value: string) {
    this._serverlessSteadySwitch = value;
  }
  public resetServerlessSteadySwitch() {
    this._serverlessSteadySwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessSteadySwitchInput() {
    return this._serverlessSteadySwitch;
  }

  // serverless_type - computed: false, optional: true, required: false
  private _serverlessType?: string; 
  public get serverlessType() {
    return this.getStringAttribute('serverless_type');
  }
  public set serverlessType(value: string) {
    this._serverlessType = value;
  }
  public resetServerlessType() {
    this._serverlessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessTypeInput() {
    return this._serverlessType;
  }

  // source_resource_id - computed: false, optional: true, required: false
  private _sourceResourceId?: string; 
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }
  public set sourceResourceId(value: string) {
    this._sourceResourceId = value;
  }
  public resetSourceResourceId() {
    this._sourceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceIdInput() {
    return this._sourceResourceId;
  }

  // standby_az - computed: true, optional: true, required: false
  private _standbyAz?: string; 
  public get standbyAz() {
    return this.getStringAttribute('standby_az');
  }
  public set standbyAz(value: string) {
    this._standbyAz = value;
  }
  public resetStandbyAz() {
    this._standbyAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyAzInput() {
    return this._standbyAz;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_pay_type - computed: true, optional: true, required: false
  private _storagePayType?: string; 
  public get storagePayType() {
    return this.getStringAttribute('storage_pay_type');
  }
  public set storagePayType(value: string) {
    this._storagePayType = value;
  }
  public resetStoragePayType() {
    this._storagePayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePayTypeInput() {
    return this._storagePayType;
  }

  // storage_space - computed: true, optional: true, required: false
  private _storageSpace?: number; 
  public get storageSpace() {
    return this.getNumberAttribute('storage_space');
  }
  public set storageSpace(value: number) {
    this._storageSpace = value;
  }
  public resetStorageSpace() {
    this._storageSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpaceInput() {
    return this._storageSpace;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // strict_consistency - computed: true, optional: true, required: false
  private _strictConsistency?: string; 
  public get strictConsistency() {
    return this.getStringAttribute('strict_consistency');
  }
  public set strictConsistency(value: string) {
    this._strictConsistency = value;
  }
  public resetStrictConsistency() {
    this._strictConsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictConsistencyInput() {
    return this._strictConsistency;
  }

  // sub_category - computed: true, optional: true, required: false
  private _subCategory?: string; 
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }
  public set subCategory(value: string) {
    this._subCategory = value;
  }
  public resetSubCategory() {
    this._subCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
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

  // target_db_revision_version_code - computed: false, optional: true, required: false
  private _targetDbRevisionVersionCode?: string; 
  public get targetDbRevisionVersionCode() {
    return this.getStringAttribute('target_db_revision_version_code');
  }
  public set targetDbRevisionVersionCode(value: string) {
    this._targetDbRevisionVersionCode = value;
  }
  public resetTargetDbRevisionVersionCode() {
    this._targetDbRevisionVersionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDbRevisionVersionCodeInput() {
    return this._targetDbRevisionVersionCode;
  }

  // tde_region - computed: true, optional: false, required: false
  public get tdeRegion() {
    return this.getStringAttribute('tde_region');
  }

  // tde_status - computed: false, optional: true, required: false
  private _tdeStatus?: string; 
  public get tdeStatus() {
    return this.getStringAttribute('tde_status');
  }
  public set tdeStatus(value: string) {
    this._tdeStatus = value;
  }
  public resetTdeStatus() {
    this._tdeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeStatusInput() {
    return this._tdeStatus;
  }

  // upgrade_type - computed: false, optional: true, required: false
  private _upgradeType?: string; 
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
  public set upgradeType(value: string) {
    this._upgradeType = value;
  }
  public resetUpgradeType() {
    this._upgradeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypeInput() {
    return this._upgradeType;
  }

  // vpc_id - computed: true, optional: true, required: false
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

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // db_cluster_ip_array - computed: false, optional: true, required: false
  private _dbClusterIpArray = new PolardbClusterDbClusterIpArrayList(this, "db_cluster_ip_array", true);
  public get dbClusterIpArray() {
    return this._dbClusterIpArray;
  }
  public putDbClusterIpArray(value: PolardbClusterDbClusterIpArray[] | cdktf.IResolvable) {
    this._dbClusterIpArray.internalValue = value;
  }
  public resetDbClusterIpArray() {
    this._dbClusterIpArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIpArrayInput() {
    return this._dbClusterIpArray.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PolardbClusterParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PolardbClusterParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PolardbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PolardbClusterTimeouts) {
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
      allow_shut_down: cdktf.stringToTerraform(this._allowShutDown),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      backup_retention_policy_on_cluster_deletion: cdktf.stringToTerraform(this._backupRetentionPolicyOnClusterDeletion),
      clone_data_point: cdktf.stringToTerraform(this._cloneDataPoint),
      collector_status: cdktf.stringToTerraform(this._collectorStatus),
      compress_storage: cdktf.stringToTerraform(this._compressStorage),
      creation_category: cdktf.stringToTerraform(this._creationCategory),
      creation_option: cdktf.stringToTerraform(this._creationOption),
      db_minor_version: cdktf.stringToTerraform(this._dbMinorVersion),
      db_node_class: cdktf.stringToTerraform(this._dbNodeClass),
      db_node_count: cdktf.numberToTerraform(this._dbNodeCount),
      db_node_id: cdktf.stringToTerraform(this._dbNodeId),
      db_node_num: cdktf.numberToTerraform(this._dbNodeNum),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      default_time_zone: cdktf.stringToTerraform(this._defaultTimeZone),
      deletion_lock: cdktf.numberToTerraform(this._deletionLock),
      description: cdktf.stringToTerraform(this._description),
      encrypt_new_tables: cdktf.stringToTerraform(this._encryptNewTables),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      from_time_service: cdktf.stringToTerraform(this._fromTimeService),
      gdn_id: cdktf.stringToTerraform(this._gdnId),
      hot_replica_mode: cdktf.stringToTerraform(this._hotReplicaMode),
      hot_standby_cluster: cdktf.stringToTerraform(this._hotStandbyCluster),
      id: cdktf.stringToTerraform(this._id),
      imci_switch: cdktf.stringToTerraform(this._imciSwitch),
      loose_polar_log_bin: cdktf.stringToTerraform(this._loosePolarLogBin),
      loose_xengine: cdktf.stringToTerraform(this._looseXengine),
      loose_xengine_use_memory_pct: cdktf.numberToTerraform(this._looseXengineUseMemoryPct),
      lower_case_table_names: cdktf.numberToTerraform(this._lowerCaseTableNames),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      parameter_group_id: cdktf.stringToTerraform(this._parameterGroupId),
      pay_type: cdktf.stringToTerraform(this._payType),
      period: cdktf.numberToTerraform(this._period),
      planned_end_time: cdktf.stringToTerraform(this._plannedEndTime),
      planned_start_time: cdktf.stringToTerraform(this._plannedStartTime),
      provisioned_iops: cdktf.stringToTerraform(this._provisionedIops),
      proxy_class: cdktf.stringToTerraform(this._proxyClass),
      proxy_type: cdktf.stringToTerraform(this._proxyType),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      scale_ap_ro_num_max: cdktf.numberToTerraform(this._scaleApRoNumMax),
      scale_ap_ro_num_min: cdktf.numberToTerraform(this._scaleApRoNumMin),
      scale_max: cdktf.numberToTerraform(this._scaleMax),
      scale_min: cdktf.numberToTerraform(this._scaleMin),
      scale_ro_num_max: cdktf.numberToTerraform(this._scaleRoNumMax),
      scale_ro_num_min: cdktf.numberToTerraform(this._scaleRoNumMin),
      seconds_until_auto_pause: cdktf.numberToTerraform(this._secondsUntilAutoPause),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      serverless_rule_cpu_enlarge_threshold: cdktf.numberToTerraform(this._serverlessRuleCpuEnlargeThreshold),
      serverless_rule_cpu_shrink_threshold: cdktf.numberToTerraform(this._serverlessRuleCpuShrinkThreshold),
      serverless_rule_mode: cdktf.stringToTerraform(this._serverlessRuleMode),
      serverless_steady_switch: cdktf.stringToTerraform(this._serverlessSteadySwitch),
      serverless_type: cdktf.stringToTerraform(this._serverlessType),
      source_resource_id: cdktf.stringToTerraform(this._sourceResourceId),
      standby_az: cdktf.stringToTerraform(this._standbyAz),
      storage_pay_type: cdktf.stringToTerraform(this._storagePayType),
      storage_space: cdktf.numberToTerraform(this._storageSpace),
      storage_type: cdktf.stringToTerraform(this._storageType),
      strict_consistency: cdktf.stringToTerraform(this._strictConsistency),
      sub_category: cdktf.stringToTerraform(this._subCategory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_db_revision_version_code: cdktf.stringToTerraform(this._targetDbRevisionVersionCode),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      upgrade_type: cdktf.stringToTerraform(this._upgradeType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      db_cluster_ip_array: cdktf.listMapper(polardbClusterDbClusterIpArrayToTerraform, true)(this._dbClusterIpArray.internalValue),
      parameters: cdktf.listMapper(polardbClusterParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: polardbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_shut_down: {
        value: cdktf.stringToHclTerraform(this._allowShutDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_policy_on_cluster_deletion: {
        value: cdktf.stringToHclTerraform(this._backupRetentionPolicyOnClusterDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_data_point: {
        value: cdktf.stringToHclTerraform(this._cloneDataPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_status: {
        value: cdktf.stringToHclTerraform(this._collectorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_storage: {
        value: cdktf.stringToHclTerraform(this._compressStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_category: {
        value: cdktf.stringToHclTerraform(this._creationCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_option: {
        value: cdktf.stringToHclTerraform(this._creationOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_minor_version: {
        value: cdktf.stringToHclTerraform(this._dbMinorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_class: {
        value: cdktf.stringToHclTerraform(this._dbNodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_count: {
        value: cdktf.numberToHclTerraform(this._dbNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_node_id: {
        value: cdktf.stringToHclTerraform(this._dbNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_num: {
        value: cdktf.numberToHclTerraform(this._dbNodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_time_zone: {
        value: cdktf.stringToHclTerraform(this._defaultTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_lock: {
        value: cdktf.numberToHclTerraform(this._deletionLock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_new_tables: {
        value: cdktf.stringToHclTerraform(this._encryptNewTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_time_service: {
        value: cdktf.stringToHclTerraform(this._fromTimeService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gdn_id: {
        value: cdktf.stringToHclTerraform(this._gdnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hot_replica_mode: {
        value: cdktf.stringToHclTerraform(this._hotReplicaMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hot_standby_cluster: {
        value: cdktf.stringToHclTerraform(this._hotStandbyCluster),
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
      imci_switch: {
        value: cdktf.stringToHclTerraform(this._imciSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loose_polar_log_bin: {
        value: cdktf.stringToHclTerraform(this._loosePolarLogBin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loose_xengine: {
        value: cdktf.stringToHclTerraform(this._looseXengine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loose_xengine_use_memory_pct: {
        value: cdktf.numberToHclTerraform(this._looseXengineUseMemoryPct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lower_case_table_names: {
        value: cdktf.numberToHclTerraform(this._lowerCaseTableNames),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintain_time: {
        value: cdktf.stringToHclTerraform(this._maintainTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_group_id: {
        value: cdktf.stringToHclTerraform(this._parameterGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_type: {
        value: cdktf.stringToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      planned_end_time: {
        value: cdktf.stringToHclTerraform(this._plannedEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      planned_start_time: {
        value: cdktf.stringToHclTerraform(this._plannedStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_iops: {
        value: cdktf.stringToHclTerraform(this._provisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_class: {
        value: cdktf.stringToHclTerraform(this._proxyClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_type: {
        value: cdktf.stringToHclTerraform(this._proxyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_ap_ro_num_max: {
        value: cdktf.numberToHclTerraform(this._scaleApRoNumMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_ap_ro_num_min: {
        value: cdktf.numberToHclTerraform(this._scaleApRoNumMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_max: {
        value: cdktf.numberToHclTerraform(this._scaleMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_min: {
        value: cdktf.numberToHclTerraform(this._scaleMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_ro_num_max: {
        value: cdktf.numberToHclTerraform(this._scaleRoNumMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_ro_num_min: {
        value: cdktf.numberToHclTerraform(this._scaleRoNumMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seconds_until_auto_pause: {
        value: cdktf.numberToHclTerraform(this._secondsUntilAutoPause),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      serverless_rule_cpu_enlarge_threshold: {
        value: cdktf.numberToHclTerraform(this._serverlessRuleCpuEnlargeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serverless_rule_cpu_shrink_threshold: {
        value: cdktf.numberToHclTerraform(this._serverlessRuleCpuShrinkThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serverless_rule_mode: {
        value: cdktf.stringToHclTerraform(this._serverlessRuleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_steady_switch: {
        value: cdktf.stringToHclTerraform(this._serverlessSteadySwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_type: {
        value: cdktf.stringToHclTerraform(this._serverlessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_resource_id: {
        value: cdktf.stringToHclTerraform(this._sourceResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_az: {
        value: cdktf.stringToHclTerraform(this._standbyAz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_pay_type: {
        value: cdktf.stringToHclTerraform(this._storagePayType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_space: {
        value: cdktf.numberToHclTerraform(this._storageSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_consistency: {
        value: cdktf.stringToHclTerraform(this._strictConsistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_category: {
        value: cdktf.stringToHclTerraform(this._subCategory),
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
      target_db_revision_version_code: {
        value: cdktf.stringToHclTerraform(this._targetDbRevisionVersionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tde_status: {
        value: cdktf.stringToHclTerraform(this._tdeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_type: {
        value: cdktf.stringToHclTerraform(this._upgradeType),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_ip_array: {
        value: cdktf.listMapperHcl(polardbClusterDbClusterIpArrayToHclTerraform, true)(this._dbClusterIpArray.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolardbClusterDbClusterIpArrayList",
      },
      parameters: {
        value: cdktf.listMapperHcl(polardbClusterParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolardbClusterParametersList",
      },
      timeouts: {
        value: polardbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolardbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
