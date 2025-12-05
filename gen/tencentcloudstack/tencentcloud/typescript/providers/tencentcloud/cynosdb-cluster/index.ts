// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify whether the cluster can auto-pause while `db_mode` is `SERVERLESS`. Values: `yes` (default), `no`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#auto_pause CynosdbCluster#auto_pause}
  */
  readonly autoPause?: string;
  /**
  * Specify auto-pause delay in second while `db_mode` is `SERVERLESS`. Value range: `[600, 691200]`. Default: `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#auto_pause_delay CynosdbCluster#auto_pause_delay}
  */
  readonly autoPauseDelay?: number;
  /**
  * Auto renew flag. Valid values are `0`(MANUAL_RENEW), `1`(AUTO_RENEW). Default value is `0`. Only works for PREPAID cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#auto_renew_flag CynosdbCluster#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * The available zone of the CynosDB Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#available_zone CynosdbCluster#available_zone}
  */
  readonly availableZone: string;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`. Default value is `POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#charge_type CynosdbCluster#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Name of CynosDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#cluster_name CynosdbCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Kernel version, you can enter it when modifying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#cynos_version CynosdbCluster#cynos_version}
  */
  readonly cynosVersion?: string;
  /**
  * Specify DB mode, only available when `db_type` is `MYSQL`. Values: `NORMAL` (Default), `SERVERLESS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#db_mode CynosdbCluster#db_mode}
  */
  readonly dbMode?: string;
  /**
  * Type of CynosDB, and available values include `MYSQL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#db_type CynosdbCluster#db_type}
  */
  readonly dbType: string;
  /**
  * Version of CynosDB, which is related to `db_type`. For `MYSQL`, available value is `5.7`, `8.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#db_version CynosdbCluster#db_version}
  */
  readonly dbVersion: string;
  /**
  * Indicate whether to delete cluster instance directly or not. Default is false. If set true, the cluster and its `All RELATED INSTANCES` will be deleted instead of staying recycle bin. Note: works for both `PREPAID` and `POSTPAID_BY_HOUR` cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#force_delete CynosdbCluster#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#id CynosdbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of instances, the range is (0,16], the default value is 2 (i.e. one RW instance + one Ro instance), the passed n means 1 RW instance + n-1 Ro instances (with the same specifications), if you need a more accurate cluster composition, please use InstanceInitInfos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_count CynosdbCluster#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * The number of CPU cores of read-write type instance in the CynosDB cluster. Required while creating normal cluster. Note: modification of this field will take effect immediately, if want to upgrade on maintenance window, please upgrade from console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_cpu_core CynosdbCluster#instance_cpu_core}
  */
  readonly instanceCpuCore?: number;
  /**
  * Duration time for maintenance, unit in second. `3600` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_maintain_duration CynosdbCluster#instance_maintain_duration}
  */
  readonly instanceMaintainDuration?: number;
  /**
  * Offset time from 00:00, unit in second. For example, 03:00am should be `10800`. `10800` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_maintain_start_time CynosdbCluster#instance_maintain_start_time}
  */
  readonly instanceMaintainStartTime?: number;
  /**
  * Weekdays for maintenance. `["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_maintain_weekdays CynosdbCluster#instance_maintain_weekdays}
  */
  readonly instanceMaintainWeekdays?: string[];
  /**
  * Memory capacity of read-write type instance, unit in GB. Required while creating normal cluster. Note: modification of this field will take effect immediately, if want to upgrade on maintenance window, please upgrade from console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_memory_size CynosdbCluster#instance_memory_size}
  */
  readonly instanceMemorySize?: number;
  /**
  * Maximum CPU core count, required while `db_mode` is `SERVERLESS`, request DescribeServerlessInstanceSpecs for more reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#max_cpu CynosdbCluster#max_cpu}
  */
  readonly maxCpu?: number;
  /**
  * Minimum CPU core count, required while `db_mode` is `SERVERLESS`, request DescribeServerlessInstanceSpecs for more reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#min_cpu CynosdbCluster#min_cpu}
  */
  readonly minCpu?: number;
  /**
  * Recycling time of the old address, must be filled in when modifying the vpcRecycling time of the old address, must be filled in when modifying the vpc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#old_ip_reserve_hours CynosdbCluster#old_ip_reserve_hours}
  */
  readonly oldIpReserveHours?: number;
  /**
  * The ID of the parameter template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#param_template_id CynosdbCluster#param_template_id}
  */
  readonly paramTemplateId?: number;
  /**
  * Password of `root` account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#password CynosdbCluster#password}
  */
  readonly password: string;
  /**
  * Port of CynosDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#port CynosdbCluster#port}
  */
  readonly port?: number;
  /**
  * The ID of the parameter template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#prarm_template_id CynosdbCluster#prarm_template_id}
  */
  readonly prarmTemplateId?: number;
  /**
  * The tenancy (time unit is month) of the prepaid instance. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#prepaid_period CynosdbCluster#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * ID of the project. `0` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#project_id CynosdbCluster#project_id}
  */
  readonly projectId?: number;
  /**
  * IDs of security group for `ro_group`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#ro_group_sg CynosdbCluster#ro_group_sg}
  */
  readonly roGroupSg?: string[];
  /**
  * IDs of security group for `rw_group`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#rw_group_sg CynosdbCluster#rw_group_sg}
  */
  readonly rwGroupSg?: string[];
  /**
  * Specify whether to pause or resume serverless cluster. values: `resume`, `pause`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#serverless_status_flag CynosdbCluster#serverless_status_flag}
  */
  readonly serverlessStatusFlag?: string;
  /**
  * Multi zone Addresses of the CynosDB Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#slave_zone CynosdbCluster#slave_zone}
  */
  readonly slaveZone?: string;
  /**
  * Storage limit of CynosDB cluster instance, unit in GB. The maximum storage of a non-serverless instance in GB. NOTE: If db_type is `MYSQL` and charge_type is `PREPAID`, the value cannot exceed the maximum storage corresponding to the CPU and memory specifications, and the transaction mode is `order and pay`. when charge_type is `POSTPAID_BY_HOUR`, this argument is unnecessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#storage_limit CynosdbCluster#storage_limit}
  */
  readonly storageLimit?: number;
  /**
  * Cluster storage billing mode, pay-as-you-go: `0`-yearly/monthly: `1`-The default is pay-as-you-go. When the DbType is MYSQL, when the cluster computing billing mode is post-paid (including DbMode is SERVERLESS), the storage billing mode can only be billing by volume; rollback and cloning do not support yearly subscriptions monthly storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#storage_pay_mode CynosdbCluster#storage_pay_mode}
  */
  readonly storagePayMode?: number;
  /**
  * ID of the subnet within this VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#subnet_id CynosdbCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * The tags of the CynosDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#tags CynosdbCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#vpc_id CynosdbCluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * instance_init_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_init_infos CynosdbCluster#instance_init_infos}
  */
  readonly instanceInitInfos?: CynosdbClusterInstanceInitInfos[] | cdktf.IResolvable;
  /**
  * param_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#param_items CynosdbCluster#param_items}
  */
  readonly paramItems?: CynosdbClusterParamItems[] | cdktf.IResolvable;
}
export interface CynosdbClusterRoGroupAddr {
}

export function cynosdbClusterRoGroupAddrToTerraform(struct?: CynosdbClusterRoGroupAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cynosdbClusterRoGroupAddrToHclTerraform(struct?: CynosdbClusterRoGroupAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CynosdbClusterRoGroupAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbClusterRoGroupAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbClusterRoGroupAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class CynosdbClusterRoGroupAddrList extends cdktf.ComplexList {

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
  public get(index: number): CynosdbClusterRoGroupAddrOutputReference {
    return new CynosdbClusterRoGroupAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbClusterRoGroupInstances {
}

export function cynosdbClusterRoGroupInstancesToTerraform(struct?: CynosdbClusterRoGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cynosdbClusterRoGroupInstancesToHclTerraform(struct?: CynosdbClusterRoGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CynosdbClusterRoGroupInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbClusterRoGroupInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbClusterRoGroupInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
}

export class CynosdbClusterRoGroupInstancesList extends cdktf.ComplexList {

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
  public get(index: number): CynosdbClusterRoGroupInstancesOutputReference {
    return new CynosdbClusterRoGroupInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbClusterRwGroupAddr {
}

export function cynosdbClusterRwGroupAddrToTerraform(struct?: CynosdbClusterRwGroupAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cynosdbClusterRwGroupAddrToHclTerraform(struct?: CynosdbClusterRwGroupAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CynosdbClusterRwGroupAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbClusterRwGroupAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbClusterRwGroupAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class CynosdbClusterRwGroupAddrList extends cdktf.ComplexList {

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
  public get(index: number): CynosdbClusterRwGroupAddrOutputReference {
    return new CynosdbClusterRwGroupAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbClusterRwGroupInstances {
}

export function cynosdbClusterRwGroupInstancesToTerraform(struct?: CynosdbClusterRwGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cynosdbClusterRwGroupInstancesToHclTerraform(struct?: CynosdbClusterRwGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CynosdbClusterRwGroupInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbClusterRwGroupInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbClusterRwGroupInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
}

export class CynosdbClusterRwGroupInstancesList extends cdktf.ComplexList {

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
  public get(index: number): CynosdbClusterRwGroupInstancesOutputReference {
    return new CynosdbClusterRwGroupInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbClusterInstanceInitInfos {
  /**
  * CPU of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#cpu CynosdbCluster#cpu}
  */
  readonly cpu: number;
  /**
  * Instance machine type. Values: `common`, `exclusive`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#device_type CynosdbCluster#device_type}
  */
  readonly deviceType?: string;
  /**
  * Instance count. Range: [1, 15].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_count CynosdbCluster#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Instance type. Value: `rw`, `ro`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#instance_type CynosdbCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Maximum number of Serverless instances. Range [1,15].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#max_ro_count CynosdbCluster#max_ro_count}
  */
  readonly maxRoCount?: number;
  /**
  * Maximum Serverless Instance Specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#max_ro_cpu CynosdbCluster#max_ro_cpu}
  */
  readonly maxRoCpu?: number;
  /**
  * Memory of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#memory CynosdbCluster#memory}
  */
  readonly memory: number;
  /**
  * Minimum number of Serverless instances. Range [1,15].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#min_ro_count CynosdbCluster#min_ro_count}
  */
  readonly minRoCount?: number;
  /**
  * Minimum Serverless Instance Specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#min_ro_cpu CynosdbCluster#min_ro_cpu}
  */
  readonly minRoCpu?: number;
}

export function cynosdbClusterInstanceInitInfosToTerraform(struct?: CynosdbClusterInstanceInitInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    max_ro_count: cdktf.numberToTerraform(struct!.maxRoCount),
    max_ro_cpu: cdktf.numberToTerraform(struct!.maxRoCpu),
    memory: cdktf.numberToTerraform(struct!.memory),
    min_ro_count: cdktf.numberToTerraform(struct!.minRoCount),
    min_ro_cpu: cdktf.numberToTerraform(struct!.minRoCpu),
  }
}


export function cynosdbClusterInstanceInitInfosToHclTerraform(struct?: CynosdbClusterInstanceInitInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ro_count: {
      value: cdktf.numberToHclTerraform(struct!.maxRoCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ro_cpu: {
      value: cdktf.numberToHclTerraform(struct!.maxRoCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ro_count: {
      value: cdktf.numberToHclTerraform(struct!.minRoCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ro_cpu: {
      value: cdktf.numberToHclTerraform(struct!.minRoCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbClusterInstanceInitInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbClusterInstanceInitInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._maxRoCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRoCount = this._maxRoCount;
    }
    if (this._maxRoCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRoCpu = this._maxRoCpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._minRoCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRoCount = this._minRoCount;
    }
    if (this._minRoCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRoCpu = this._minRoCpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbClusterInstanceInitInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._deviceType = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._maxRoCount = undefined;
      this._maxRoCpu = undefined;
      this._memory = undefined;
      this._minRoCount = undefined;
      this._minRoCpu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._deviceType = value.deviceType;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._maxRoCount = value.maxRoCount;
      this._maxRoCpu = value.maxRoCpu;
      this._memory = value.memory;
      this._minRoCount = value.minRoCount;
      this._minRoCpu = value.minRoCpu;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_ro_count - computed: false, optional: true, required: false
  private _maxRoCount?: number; 
  public get maxRoCount() {
    return this.getNumberAttribute('max_ro_count');
  }
  public set maxRoCount(value: number) {
    this._maxRoCount = value;
  }
  public resetMaxRoCount() {
    this._maxRoCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRoCountInput() {
    return this._maxRoCount;
  }

  // max_ro_cpu - computed: false, optional: true, required: false
  private _maxRoCpu?: number; 
  public get maxRoCpu() {
    return this.getNumberAttribute('max_ro_cpu');
  }
  public set maxRoCpu(value: number) {
    this._maxRoCpu = value;
  }
  public resetMaxRoCpu() {
    this._maxRoCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRoCpuInput() {
    return this._maxRoCpu;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // min_ro_count - computed: false, optional: true, required: false
  private _minRoCount?: number; 
  public get minRoCount() {
    return this.getNumberAttribute('min_ro_count');
  }
  public set minRoCount(value: number) {
    this._minRoCount = value;
  }
  public resetMinRoCount() {
    this._minRoCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRoCountInput() {
    return this._minRoCount;
  }

  // min_ro_cpu - computed: false, optional: true, required: false
  private _minRoCpu?: number; 
  public get minRoCpu() {
    return this.getNumberAttribute('min_ro_cpu');
  }
  public set minRoCpu(value: number) {
    this._minRoCpu = value;
  }
  public resetMinRoCpu() {
    this._minRoCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRoCpuInput() {
    return this._minRoCpu;
  }
}

export class CynosdbClusterInstanceInitInfosList extends cdktf.ComplexList {
  public internalValue? : CynosdbClusterInstanceInitInfos[] | cdktf.IResolvable

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
  public get(index: number): CynosdbClusterInstanceInitInfosOutputReference {
    return new CynosdbClusterInstanceInitInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbClusterParamItems {
  /**
  * Param expected value to set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#current_value CynosdbCluster#current_value}
  */
  readonly currentValue: string;
  /**
  * Name of param, e.g. `character_set_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#name CynosdbCluster#name}
  */
  readonly name: string;
  /**
  * Param old value, indicates the value which already set, this value is required when modifying current_value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#old_value CynosdbCluster#old_value}
  */
  readonly oldValue?: string;
}

export function cynosdbClusterParamItemsToTerraform(struct?: CynosdbClusterParamItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_value: cdktf.stringToTerraform(struct!.currentValue),
    name: cdktf.stringToTerraform(struct!.name),
    old_value: cdktf.stringToTerraform(struct!.oldValue),
  }
}


export function cynosdbClusterParamItemsToHclTerraform(struct?: CynosdbClusterParamItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_value: {
      value: cdktf.stringToHclTerraform(struct!.currentValue),
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
    old_value: {
      value: cdktf.stringToHclTerraform(struct!.oldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbClusterParamItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbClusterParamItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentValue = this._currentValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldValue = this._oldValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbClusterParamItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentValue = undefined;
      this._name = undefined;
      this._oldValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentValue = value.currentValue;
      this._name = value.name;
      this._oldValue = value.oldValue;
    }
  }

  // current_value - computed: false, optional: false, required: true
  private _currentValue?: string; 
  public get currentValue() {
    return this.getStringAttribute('current_value');
  }
  public set currentValue(value: string) {
    this._currentValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentValueInput() {
    return this._currentValue;
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

  // old_value - computed: false, optional: true, required: false
  private _oldValue?: string; 
  public get oldValue() {
    return this.getStringAttribute('old_value');
  }
  public set oldValue(value: string) {
    this._oldValue = value;
  }
  public resetOldValue() {
    this._oldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldValueInput() {
    return this._oldValue;
  }
}

export class CynosdbClusterParamItemsList extends cdktf.ComplexList {
  public internalValue? : CynosdbClusterParamItems[] | cdktf.IResolvable

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
  public get(index: number): CynosdbClusterParamItemsOutputReference {
    return new CynosdbClusterParamItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster tencentcloud_cynosdb_cluster}
*/
export class CynosdbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbCluster to import
  * @param importFromId The id of the existing CynosdbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cynosdb_cluster tencentcloud_cynosdb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPause = config.autoPause;
    this._autoPauseDelay = config.autoPauseDelay;
    this._autoRenewFlag = config.autoRenewFlag;
    this._availableZone = config.availableZone;
    this._chargeType = config.chargeType;
    this._clusterName = config.clusterName;
    this._cynosVersion = config.cynosVersion;
    this._dbMode = config.dbMode;
    this._dbType = config.dbType;
    this._dbVersion = config.dbVersion;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._instanceCpuCore = config.instanceCpuCore;
    this._instanceMaintainDuration = config.instanceMaintainDuration;
    this._instanceMaintainStartTime = config.instanceMaintainStartTime;
    this._instanceMaintainWeekdays = config.instanceMaintainWeekdays;
    this._instanceMemorySize = config.instanceMemorySize;
    this._maxCpu = config.maxCpu;
    this._minCpu = config.minCpu;
    this._oldIpReserveHours = config.oldIpReserveHours;
    this._paramTemplateId = config.paramTemplateId;
    this._password = config.password;
    this._port = config.port;
    this._prarmTemplateId = config.prarmTemplateId;
    this._prepaidPeriod = config.prepaidPeriod;
    this._projectId = config.projectId;
    this._roGroupSg = config.roGroupSg;
    this._rwGroupSg = config.rwGroupSg;
    this._serverlessStatusFlag = config.serverlessStatusFlag;
    this._slaveZone = config.slaveZone;
    this._storageLimit = config.storageLimit;
    this._storagePayMode = config.storagePayMode;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._instanceInitInfos.internalValue = config.instanceInitInfos;
    this._paramItems.internalValue = config.paramItems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_pause - computed: false, optional: true, required: false
  private _autoPause?: string; 
  public get autoPause() {
    return this.getStringAttribute('auto_pause');
  }
  public set autoPause(value: string) {
    this._autoPause = value;
  }
  public resetAutoPause() {
    this._autoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseInput() {
    return this._autoPause;
  }

  // auto_pause_delay - computed: false, optional: true, required: false
  private _autoPauseDelay?: number; 
  public get autoPauseDelay() {
    return this.getNumberAttribute('auto_pause_delay');
  }
  public set autoPauseDelay(value: number) {
    this._autoPauseDelay = value;
  }
  public resetAutoPauseDelay() {
    this._autoPauseDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseDelayInput() {
    return this._autoPauseDelay;
  }

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // available_zone - computed: false, optional: false, required: true
  private _availableZone?: string; 
  public get availableZone() {
    return this.getStringAttribute('available_zone');
  }
  public set availableZone(value: string) {
    this._availableZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZoneInput() {
    return this._availableZone;
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

  // charset - computed: true, optional: false, required: false
  public get charset() {
    return this.getStringAttribute('charset');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_status - computed: true, optional: false, required: false
  public get clusterStatus() {
    return this.getStringAttribute('cluster_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cynos_version - computed: true, optional: true, required: false
  private _cynosVersion?: string; 
  public get cynosVersion() {
    return this.getStringAttribute('cynos_version');
  }
  public set cynosVersion(value: string) {
    this._cynosVersion = value;
  }
  public resetCynosVersion() {
    this._cynosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cynosVersionInput() {
    return this._cynosVersion;
  }

  // db_mode - computed: true, optional: true, required: false
  private _dbMode?: string; 
  public get dbMode() {
    return this.getStringAttribute('db_mode');
  }
  public set dbMode(value: string) {
    this._dbMode = value;
  }
  public resetDbMode() {
    this._dbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbModeInput() {
    return this._dbMode;
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

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_cpu_core - computed: false, optional: true, required: false
  private _instanceCpuCore?: number; 
  public get instanceCpuCore() {
    return this.getNumberAttribute('instance_cpu_core');
  }
  public set instanceCpuCore(value: number) {
    this._instanceCpuCore = value;
  }
  public resetInstanceCpuCore() {
    this._instanceCpuCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCpuCoreInput() {
    return this._instanceCpuCore;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_maintain_duration - computed: false, optional: true, required: false
  private _instanceMaintainDuration?: number; 
  public get instanceMaintainDuration() {
    return this.getNumberAttribute('instance_maintain_duration');
  }
  public set instanceMaintainDuration(value: number) {
    this._instanceMaintainDuration = value;
  }
  public resetInstanceMaintainDuration() {
    this._instanceMaintainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintainDurationInput() {
    return this._instanceMaintainDuration;
  }

  // instance_maintain_start_time - computed: false, optional: true, required: false
  private _instanceMaintainStartTime?: number; 
  public get instanceMaintainStartTime() {
    return this.getNumberAttribute('instance_maintain_start_time');
  }
  public set instanceMaintainStartTime(value: number) {
    this._instanceMaintainStartTime = value;
  }
  public resetInstanceMaintainStartTime() {
    this._instanceMaintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintainStartTimeInput() {
    return this._instanceMaintainStartTime;
  }

  // instance_maintain_weekdays - computed: true, optional: true, required: false
  private _instanceMaintainWeekdays?: string[]; 
  public get instanceMaintainWeekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_maintain_weekdays'));
  }
  public set instanceMaintainWeekdays(value: string[]) {
    this._instanceMaintainWeekdays = value;
  }
  public resetInstanceMaintainWeekdays() {
    this._instanceMaintainWeekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintainWeekdaysInput() {
    return this._instanceMaintainWeekdays;
  }

  // instance_memory_size - computed: false, optional: true, required: false
  private _instanceMemorySize?: number; 
  public get instanceMemorySize() {
    return this.getNumberAttribute('instance_memory_size');
  }
  public set instanceMemorySize(value: number) {
    this._instanceMemorySize = value;
  }
  public resetInstanceMemorySize() {
    this._instanceMemorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMemorySizeInput() {
    return this._instanceMemorySize;
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_storage_size - computed: true, optional: false, required: false
  public get instanceStorageSize() {
    return this.getNumberAttribute('instance_storage_size');
  }

  // max_cpu - computed: false, optional: true, required: false
  private _maxCpu?: number; 
  public get maxCpu() {
    return this.getNumberAttribute('max_cpu');
  }
  public set maxCpu(value: number) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: number; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // old_ip_reserve_hours - computed: false, optional: true, required: false
  private _oldIpReserveHours?: number; 
  public get oldIpReserveHours() {
    return this.getNumberAttribute('old_ip_reserve_hours');
  }
  public set oldIpReserveHours(value: number) {
    this._oldIpReserveHours = value;
  }
  public resetOldIpReserveHours() {
    this._oldIpReserveHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldIpReserveHoursInput() {
    return this._oldIpReserveHours;
  }

  // param_template_id - computed: true, optional: true, required: false
  private _paramTemplateId?: number; 
  public get paramTemplateId() {
    return this.getNumberAttribute('param_template_id');
  }
  public set paramTemplateId(value: number) {
    this._paramTemplateId = value;
  }
  public resetParamTemplateId() {
    this._paramTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramTemplateIdInput() {
    return this._paramTemplateId;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // prarm_template_id - computed: true, optional: true, required: false
  private _prarmTemplateId?: number; 
  public get prarmTemplateId() {
    return this.getNumberAttribute('prarm_template_id');
  }
  public set prarmTemplateId(value: number) {
    this._prarmTemplateId = value;
  }
  public resetPrarmTemplateId() {
    this._prarmTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prarmTemplateIdInput() {
    return this._prarmTemplateId;
  }

  // prepaid_period - computed: false, optional: true, required: false
  private _prepaidPeriod?: number; 
  public get prepaidPeriod() {
    return this.getNumberAttribute('prepaid_period');
  }
  public set prepaidPeriod(value: number) {
    this._prepaidPeriod = value;
  }
  public resetPrepaidPeriod() {
    this._prepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidPeriodInput() {
    return this._prepaidPeriod;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // ro_group_addr - computed: true, optional: false, required: false
  private _roGroupAddr = new CynosdbClusterRoGroupAddrList(this, "ro_group_addr", false);
  public get roGroupAddr() {
    return this._roGroupAddr;
  }

  // ro_group_id - computed: true, optional: false, required: false
  public get roGroupId() {
    return this.getStringAttribute('ro_group_id');
  }

  // ro_group_instances - computed: true, optional: false, required: false
  private _roGroupInstances = new CynosdbClusterRoGroupInstancesList(this, "ro_group_instances", false);
  public get roGroupInstances() {
    return this._roGroupInstances;
  }

  // ro_group_sg - computed: false, optional: true, required: false
  private _roGroupSg?: string[]; 
  public get roGroupSg() {
    return this.getListAttribute('ro_group_sg');
  }
  public set roGroupSg(value: string[]) {
    this._roGroupSg = value;
  }
  public resetRoGroupSg() {
    this._roGroupSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roGroupSgInput() {
    return this._roGroupSg;
  }

  // rw_group_addr - computed: true, optional: false, required: false
  private _rwGroupAddr = new CynosdbClusterRwGroupAddrList(this, "rw_group_addr", false);
  public get rwGroupAddr() {
    return this._rwGroupAddr;
  }

  // rw_group_id - computed: true, optional: false, required: false
  public get rwGroupId() {
    return this.getStringAttribute('rw_group_id');
  }

  // rw_group_instances - computed: true, optional: false, required: false
  private _rwGroupInstances = new CynosdbClusterRwGroupInstancesList(this, "rw_group_instances", false);
  public get rwGroupInstances() {
    return this._rwGroupInstances;
  }

  // rw_group_sg - computed: false, optional: true, required: false
  private _rwGroupSg?: string[]; 
  public get rwGroupSg() {
    return this.getListAttribute('rw_group_sg');
  }
  public set rwGroupSg(value: string[]) {
    this._rwGroupSg = value;
  }
  public resetRwGroupSg() {
    this._rwGroupSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwGroupSgInput() {
    return this._rwGroupSg;
  }

  // serverless_status - computed: true, optional: false, required: false
  public get serverlessStatus() {
    return this.getStringAttribute('serverless_status');
  }

  // serverless_status_flag - computed: false, optional: true, required: false
  private _serverlessStatusFlag?: string; 
  public get serverlessStatusFlag() {
    return this.getStringAttribute('serverless_status_flag');
  }
  public set serverlessStatusFlag(value: string) {
    this._serverlessStatusFlag = value;
  }
  public resetServerlessStatusFlag() {
    this._serverlessStatusFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessStatusFlagInput() {
    return this._serverlessStatusFlag;
  }

  // slave_zone - computed: false, optional: true, required: false
  private _slaveZone?: string; 
  public get slaveZone() {
    return this.getStringAttribute('slave_zone');
  }
  public set slaveZone(value: string) {
    this._slaveZone = value;
  }
  public resetSlaveZone() {
    this._slaveZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveZoneInput() {
    return this._slaveZone;
  }

  // storage_limit - computed: false, optional: true, required: false
  private _storageLimit?: number; 
  public get storageLimit() {
    return this.getNumberAttribute('storage_limit');
  }
  public set storageLimit(value: number) {
    this._storageLimit = value;
  }
  public resetStorageLimit() {
    this._storageLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitInput() {
    return this._storageLimit;
  }

  // storage_pay_mode - computed: true, optional: true, required: false
  private _storagePayMode?: number; 
  public get storagePayMode() {
    return this.getNumberAttribute('storage_pay_mode');
  }
  public set storagePayMode(value: number) {
    this._storagePayMode = value;
  }
  public resetStoragePayMode() {
    this._storagePayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePayModeInput() {
    return this._storagePayMode;
  }

  // storage_used - computed: true, optional: false, required: false
  public get storageUsed() {
    return this.getNumberAttribute('storage_used');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // instance_init_infos - computed: false, optional: true, required: false
  private _instanceInitInfos = new CynosdbClusterInstanceInitInfosList(this, "instance_init_infos", false);
  public get instanceInitInfos() {
    return this._instanceInitInfos;
  }
  public putInstanceInitInfos(value: CynosdbClusterInstanceInitInfos[] | cdktf.IResolvable) {
    this._instanceInitInfos.internalValue = value;
  }
  public resetInstanceInitInfos() {
    this._instanceInitInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInitInfosInput() {
    return this._instanceInitInfos.internalValue;
  }

  // param_items - computed: false, optional: true, required: false
  private _paramItems = new CynosdbClusterParamItemsList(this, "param_items", false);
  public get paramItems() {
    return this._paramItems;
  }
  public putParamItems(value: CynosdbClusterParamItems[] | cdktf.IResolvable) {
    this._paramItems.internalValue = value;
  }
  public resetParamItems() {
    this._paramItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramItemsInput() {
    return this._paramItems.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_pause: cdktf.stringToTerraform(this._autoPause),
      auto_pause_delay: cdktf.numberToTerraform(this._autoPauseDelay),
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      available_zone: cdktf.stringToTerraform(this._availableZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cynos_version: cdktf.stringToTerraform(this._cynosVersion),
      db_mode: cdktf.stringToTerraform(this._dbMode),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_cpu_core: cdktf.numberToTerraform(this._instanceCpuCore),
      instance_maintain_duration: cdktf.numberToTerraform(this._instanceMaintainDuration),
      instance_maintain_start_time: cdktf.numberToTerraform(this._instanceMaintainStartTime),
      instance_maintain_weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceMaintainWeekdays),
      instance_memory_size: cdktf.numberToTerraform(this._instanceMemorySize),
      max_cpu: cdktf.numberToTerraform(this._maxCpu),
      min_cpu: cdktf.numberToTerraform(this._minCpu),
      old_ip_reserve_hours: cdktf.numberToTerraform(this._oldIpReserveHours),
      param_template_id: cdktf.numberToTerraform(this._paramTemplateId),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      prarm_template_id: cdktf.numberToTerraform(this._prarmTemplateId),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      project_id: cdktf.numberToTerraform(this._projectId),
      ro_group_sg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roGroupSg),
      rw_group_sg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rwGroupSg),
      serverless_status_flag: cdktf.stringToTerraform(this._serverlessStatusFlag),
      slave_zone: cdktf.stringToTerraform(this._slaveZone),
      storage_limit: cdktf.numberToTerraform(this._storageLimit),
      storage_pay_mode: cdktf.numberToTerraform(this._storagePayMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      instance_init_infos: cdktf.listMapper(cynosdbClusterInstanceInitInfosToTerraform, true)(this._instanceInitInfos.internalValue),
      param_items: cdktf.listMapper(cynosdbClusterParamItemsToTerraform, true)(this._paramItems.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_pause: {
        value: cdktf.stringToHclTerraform(this._autoPause),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_pause_delay: {
        value: cdktf.numberToHclTerraform(this._autoPauseDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      available_zone: {
        value: cdktf.stringToHclTerraform(this._availableZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cynos_version: {
        value: cdktf.stringToHclTerraform(this._cynosVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_mode: {
        value: cdktf.stringToHclTerraform(this._dbMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_cpu_core: {
        value: cdktf.numberToHclTerraform(this._instanceCpuCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_maintain_duration: {
        value: cdktf.numberToHclTerraform(this._instanceMaintainDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_maintain_start_time: {
        value: cdktf.numberToHclTerraform(this._instanceMaintainStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_maintain_weekdays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceMaintainWeekdays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_memory_size: {
        value: cdktf.numberToHclTerraform(this._instanceMemorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_cpu: {
        value: cdktf.numberToHclTerraform(this._maxCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_cpu: {
        value: cdktf.numberToHclTerraform(this._minCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      old_ip_reserve_hours: {
        value: cdktf.numberToHclTerraform(this._oldIpReserveHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      param_template_id: {
        value: cdktf.numberToHclTerraform(this._paramTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prarm_template_id: {
        value: cdktf.numberToHclTerraform(this._prarmTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepaid_period: {
        value: cdktf.numberToHclTerraform(this._prepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ro_group_sg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roGroupSg),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rw_group_sg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rwGroupSg),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      serverless_status_flag: {
        value: cdktf.stringToHclTerraform(this._serverlessStatusFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slave_zone: {
        value: cdktf.stringToHclTerraform(this._slaveZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_limit: {
        value: cdktf.numberToHclTerraform(this._storageLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_pay_mode: {
        value: cdktf.numberToHclTerraform(this._storagePayMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_init_infos: {
        value: cdktf.listMapperHcl(cynosdbClusterInstanceInitInfosToHclTerraform, true)(this._instanceInitInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbClusterInstanceInitInfosList",
      },
      param_items: {
        value: cdktf.listMapperHcl(cynosdbClusterParamItemsToHclTerraform, true)(this._paramItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbClusterParamItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
