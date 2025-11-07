// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#auto_renew_flag MysqlInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Indicates which availability zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#availability_zone MysqlInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Pay type of instance. Valid values:`PREPAID`, `POSTPAID`. Default is `POSTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#charge_type MysqlInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#cpu MysqlInstance#cpu}
  */
  readonly cpu?: number;
  /**
  * Specify device type, available values:
  * 	- `UNIVERSAL` (default): universal instance,
  * 	- `EXCLUSIVE`: exclusive instance,
  * 	- `BASIC_V2`: ONTKE single-node instance,
  * 	- `CLOUD_NATIVE_CLUSTER`: cluster version standard type,
  * 	- `CLOUD_NATIVE_CLUSTER_EXCLUSIVE`: cluster version enhanced type.
  * If it is not specified, it defaults to a universal instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#device_type MysqlInstance#device_type}
  */
  readonly deviceType?: string;
  /**
  * Instance engine type. The default value is `InnoDB`. Supported values include `InnoDB` and `RocksDB`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#engine_type MysqlInstance#engine_type}
  */
  readonly engineType?: string;
  /**
  * The version number of the database engine to use. Supported versions include 5.5/5.6/5.7/8.0, and default is 5.7. Upgrade the instance engine version to support 5.6/5.7 and switch immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#engine_version MysqlInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Specify whether to enable fast upgrade when upgrade instance spec, available value: `1` - enabled, `0` - disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#fast_upgrade MysqlInstance#fast_upgrade}
  */
  readonly fastUpgrade?: number;
  /**
  * Zone information about first slave instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#first_slave_zone MysqlInstance#first_slave_zone}
  */
  readonly firstSlaveZone?: string;
  /**
  * Indicate whether to delete instance directly or not. Default is `false`. If set true, the instance will be deleted instead of staying recycle bin. Note: only works for `PREPAID` instance. When the main mysql instance set true, this para of the readonly mysql instance will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#force_delete MysqlInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#id MysqlInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of a mysql instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#instance_name MysqlInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Indicates whether to enable the access to an instance from public network: 0 - No, 1 - Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#internet_service MysqlInstance#internet_service}
  */
  readonly internetService?: number;
  /**
  * Public access port. Valid value ranges: [1024~65535]. The default value is `3306`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#intranet_port MysqlInstance#intranet_port}
  */
  readonly intranetPort?: number;
  /**
  * Latency threshold. Value range 1~10. Only need to fill in when upgrading kernel subversion and engine version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#max_deay_time MysqlInstance#max_deay_time}
  */
  readonly maxDeayTime?: number;
  /**
  * Memory size (in MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#mem_size MysqlInstance#mem_size}
  */
  readonly memSize: number;
  /**
  * Specify parameter template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#param_template_id MysqlInstance#param_template_id}
  */
  readonly paramTemplateId?: number;
  /**
  * List of parameters to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#parameters MysqlInstance#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Pay type of instance. Valid values: `0`, `1`. `0`: prepaid, `1`: postpaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#pay_type MysqlInstance#pay_type}
  */
  readonly payType?: number;
  /**
  * Period of instance. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#period MysqlInstance#period}
  */
  readonly period?: number;
  /**
  * Period of instance. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#prepaid_period MysqlInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * Project ID, default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#project_id MysqlInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Password of root account. This parameter can be specified when you purchase master instances, but it should be ignored when you purchase read-only instances or disaster recovery instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#root_password MysqlInstance#root_password}
  */
  readonly rootPassword?: string;
  /**
  * Zone information about second slave instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#second_slave_zone MysqlInstance#second_slave_zone}
  */
  readonly secondSlaveZone?: string;
  /**
  * Security groups to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#security_groups MysqlInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Availability zone deployment method. Available values: 0 - Single availability zone; 1 - Multiple availability zones. Readonly instance settings are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#slave_deploy_mode MysqlInstance#slave_deploy_mode}
  */
  readonly slaveDeployMode?: number;
  /**
  * Data replication mode. 0 - Async replication; 1 - Semisync replication; 2 - Strongsync replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#slave_sync_mode MysqlInstance#slave_sync_mode}
  */
  readonly slaveSyncMode?: number;
  /**
  * Private network ID. If `vpc_id` is set, this value is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#subnet_id MysqlInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Instance tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#tags MysqlInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Whether it is a kernel subversion upgrade, supported values: 1 - upgrade the kernel subversion; 0 - upgrade the database engine version. Only need to fill in when upgrading kernel subversion and engine version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#upgrade_subversion MysqlInstance#upgrade_subversion}
  */
  readonly upgradeSubversion?: number;
  /**
  * Disk size (in GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#volume_size MysqlInstance#volume_size}
  */
  readonly volumeSize: number;
  /**
  * ID of VPC, which can be modified once every 24 hours and can't be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#vpc_id MysqlInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Switch the method of accessing new instances, default is `0`. Supported values include: `0` - switch immediately, `1` - switch in time window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#wait_switch MysqlInstance#wait_switch}
  */
  readonly waitSwitch?: number;
  /**
  * cluster_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#cluster_topology MysqlInstance#cluster_topology}
  */
  readonly clusterTopology?: MysqlInstanceClusterTopology;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#timeouts MysqlInstance#timeouts}
  */
  readonly timeouts?: MysqlInstanceTimeouts;
}
export interface MysqlInstanceClusterTopologyReadOnlyNodes {
  /**
  * Whether to distribute in random availability zones. Enter `true` to specify a random availability zone. Otherwise, use the availability zone specified by Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#is_random_zone MysqlInstance#is_random_zone}
  */
  readonly isRandomZone?: boolean | cdktf.IResolvable;
  /**
  * When upgrading a cluster instance, if you want to adjust the availability zone of a read-only node, you need to specify the node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#node_id MysqlInstance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Specifies the availability zone where the node is distributed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#zone MysqlInstance#zone}
  */
  readonly zone?: string;
}

export function mysqlInstanceClusterTopologyReadOnlyNodesToTerraform(struct?: MysqlInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_random_zone: cdktf.booleanToTerraform(struct!.isRandomZone),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mysqlInstanceClusterTopologyReadOnlyNodesToHclTerraform(struct?: MysqlInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_random_zone: {
      value: cdktf.booleanToHclTerraform(struct!.isRandomZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlInstanceClusterTopologyReadOnlyNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRandomZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRandomZone = this._isRandomZone;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isRandomZone = undefined;
      this._nodeId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isRandomZone = value.isRandomZone;
      this._nodeId = value.nodeId;
      this._zone = value.zone;
    }
  }

  // is_random_zone - computed: true, optional: true, required: false
  private _isRandomZone?: boolean | cdktf.IResolvable; 
  public get isRandomZone() {
    return this.getBooleanAttribute('is_random_zone');
  }
  public set isRandomZone(value: boolean | cdktf.IResolvable) {
    this._isRandomZone = value;
  }
  public resetIsRandomZone() {
    this._isRandomZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRandomZoneInput() {
    return this._isRandomZone;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class MysqlInstanceClusterTopologyReadOnlyNodesList extends cdktf.ComplexList {
  public internalValue? : MysqlInstanceClusterTopologyReadOnlyNodes[] | cdktf.IResolvable

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
  public get(index: number): MysqlInstanceClusterTopologyReadOnlyNodesOutputReference {
    return new MysqlInstanceClusterTopologyReadOnlyNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlInstanceClusterTopologyReadWriteNode {
  /**
  * When upgrading a cluster instance, if you want to adjust the availability zone of a read-only node, you need to specify the node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#node_id MysqlInstance#node_id}
  */
  readonly nodeId?: string;
  /**
  * The availability zone where the RW node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#zone MysqlInstance#zone}
  */
  readonly zone: string;
}

export function mysqlInstanceClusterTopologyReadWriteNodeToTerraform(struct?: MysqlInstanceClusterTopologyReadWriteNodeOutputReference | MysqlInstanceClusterTopologyReadWriteNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mysqlInstanceClusterTopologyReadWriteNodeToHclTerraform(struct?: MysqlInstanceClusterTopologyReadWriteNodeOutputReference | MysqlInstanceClusterTopologyReadWriteNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlInstanceClusterTopologyReadWriteNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlInstanceClusterTopologyReadWriteNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlInstanceClusterTopologyReadWriteNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeId = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeId = value.nodeId;
      this._zone = value.zone;
    }
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface MysqlInstanceClusterTopology {
  /**
  * read_only_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#read_only_nodes MysqlInstance#read_only_nodes}
  */
  readonly readOnlyNodes?: MysqlInstanceClusterTopologyReadOnlyNodes[] | cdktf.IResolvable;
  /**
  * read_write_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#read_write_node MysqlInstance#read_write_node}
  */
  readonly readWriteNode?: MysqlInstanceClusterTopologyReadWriteNode;
}

export function mysqlInstanceClusterTopologyToTerraform(struct?: MysqlInstanceClusterTopologyOutputReference | MysqlInstanceClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only_nodes: cdktf.listMapper(mysqlInstanceClusterTopologyReadOnlyNodesToTerraform, true)(struct!.readOnlyNodes),
    read_write_node: mysqlInstanceClusterTopologyReadWriteNodeToTerraform(struct!.readWriteNode),
  }
}


export function mysqlInstanceClusterTopologyToHclTerraform(struct?: MysqlInstanceClusterTopologyOutputReference | MysqlInstanceClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only_nodes: {
      value: cdktf.listMapperHcl(mysqlInstanceClusterTopologyReadOnlyNodesToHclTerraform, true)(struct!.readOnlyNodes),
      isBlock: true,
      type: "set",
      storageClassType: "MysqlInstanceClusterTopologyReadOnlyNodesList",
    },
    read_write_node: {
      value: mysqlInstanceClusterTopologyReadWriteNodeToHclTerraform(struct!.readWriteNode),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlInstanceClusterTopologyReadWriteNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlInstanceClusterTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlInstanceClusterTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnlyNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyNodes = this._readOnlyNodes?.internalValue;
    }
    if (this._readWriteNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWriteNode = this._readWriteNode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlInstanceClusterTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._readOnlyNodes.internalValue = undefined;
      this._readWriteNode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._readOnlyNodes.internalValue = value.readOnlyNodes;
      this._readWriteNode.internalValue = value.readWriteNode;
    }
  }

  // read_only_nodes - computed: false, optional: true, required: false
  private _readOnlyNodes = new MysqlInstanceClusterTopologyReadOnlyNodesList(this, "read_only_nodes", true);
  public get readOnlyNodes() {
    return this._readOnlyNodes;
  }
  public putReadOnlyNodes(value: MysqlInstanceClusterTopologyReadOnlyNodes[] | cdktf.IResolvable) {
    this._readOnlyNodes.internalValue = value;
  }
  public resetReadOnlyNodes() {
    this._readOnlyNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyNodesInput() {
    return this._readOnlyNodes.internalValue;
  }

  // read_write_node - computed: false, optional: true, required: false
  private _readWriteNode = new MysqlInstanceClusterTopologyReadWriteNodeOutputReference(this, "read_write_node");
  public get readWriteNode() {
    return this._readWriteNode;
  }
  public putReadWriteNode(value: MysqlInstanceClusterTopologyReadWriteNode) {
    this._readWriteNode.internalValue = value;
  }
  public resetReadWriteNode() {
    this._readWriteNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteNodeInput() {
    return this._readWriteNode.internalValue;
  }
}
export interface MysqlInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#create MysqlInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#delete MysqlInstance#delete}
  */
  readonly delete?: string;
}

export function mysqlInstanceTimeoutsToTerraform(struct?: MysqlInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function mysqlInstanceTimeoutsToHclTerraform(struct?: MysqlInstanceTimeouts | cdktf.IResolvable): any {
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

export class MysqlInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance tencentcloud_mysql_instance}
*/
export class MysqlInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlInstance to import
  * @param importFromId The id of the existing MysqlInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_instance tencentcloud_mysql_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._cpu = config.cpu;
    this._deviceType = config.deviceType;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
    this._fastUpgrade = config.fastUpgrade;
    this._firstSlaveZone = config.firstSlaveZone;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._internetService = config.internetService;
    this._intranetPort = config.intranetPort;
    this._maxDeayTime = config.maxDeayTime;
    this._memSize = config.memSize;
    this._paramTemplateId = config.paramTemplateId;
    this._parameters = config.parameters;
    this._payType = config.payType;
    this._period = config.period;
    this._prepaidPeriod = config.prepaidPeriod;
    this._projectId = config.projectId;
    this._rootPassword = config.rootPassword;
    this._secondSlaveZone = config.secondSlaveZone;
    this._securityGroups = config.securityGroups;
    this._slaveDeployMode = config.slaveDeployMode;
    this._slaveSyncMode = config.slaveSyncMode;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._upgradeSubversion = config.upgradeSubversion;
    this._volumeSize = config.volumeSize;
    this._vpcId = config.vpcId;
    this._waitSwitch = config.waitSwitch;
    this._clusterTopology.internalValue = config.clusterTopology;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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

  // cpu - computed: true, optional: true, required: false
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

  // device_type - computed: true, optional: true, required: false
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

  // engine_type - computed: true, optional: true, required: false
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // fast_upgrade - computed: false, optional: true, required: false
  private _fastUpgrade?: number; 
  public get fastUpgrade() {
    return this.getNumberAttribute('fast_upgrade');
  }
  public set fastUpgrade(value: number) {
    this._fastUpgrade = value;
  }
  public resetFastUpgrade() {
    this._fastUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUpgradeInput() {
    return this._fastUpgrade;
  }

  // first_slave_zone - computed: true, optional: true, required: false
  private _firstSlaveZone?: string; 
  public get firstSlaveZone() {
    return this.getStringAttribute('first_slave_zone');
  }
  public set firstSlaveZone(value: string) {
    this._firstSlaveZone = value;
  }
  public resetFirstSlaveZone() {
    this._firstSlaveZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstSlaveZoneInput() {
    return this._firstSlaveZone;
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

  // gtid - computed: true, optional: false, required: false
  public get gtid() {
    return this.getNumberAttribute('gtid');
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // internet_host - computed: true, optional: false, required: false
  public get internetHost() {
    return this.getStringAttribute('internet_host');
  }

  // internet_port - computed: true, optional: false, required: false
  public get internetPort() {
    return this.getNumberAttribute('internet_port');
  }

  // internet_service - computed: false, optional: true, required: false
  private _internetService?: number; 
  public get internetService() {
    return this.getNumberAttribute('internet_service');
  }
  public set internetService(value: number) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // intranet_ip - computed: true, optional: false, required: false
  public get intranetIp() {
    return this.getStringAttribute('intranet_ip');
  }

  // intranet_port - computed: false, optional: true, required: false
  private _intranetPort?: number; 
  public get intranetPort() {
    return this.getNumberAttribute('intranet_port');
  }
  public set intranetPort(value: number) {
    this._intranetPort = value;
  }
  public resetIntranetPort() {
    this._intranetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetPortInput() {
    return this._intranetPort;
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getNumberAttribute('locked');
  }

  // max_deay_time - computed: false, optional: true, required: false
  private _maxDeayTime?: number; 
  public get maxDeayTime() {
    return this.getNumberAttribute('max_deay_time');
  }
  public set maxDeayTime(value: number) {
    this._maxDeayTime = value;
  }
  public resetMaxDeayTime() {
    this._maxDeayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeayTimeInput() {
    return this._maxDeayTime;
  }

  // mem_size - computed: false, optional: false, required: true
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // param_template_id - computed: false, optional: true, required: false
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // pay_type - computed: false, optional: true, required: false
  private _payType?: number; 
  public get payType() {
    return this.getNumberAttribute('pay_type');
  }
  public set payType(value: number) {
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

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // second_slave_zone - computed: false, optional: true, required: false
  private _secondSlaveZone?: string; 
  public get secondSlaveZone() {
    return this.getStringAttribute('second_slave_zone');
  }
  public set secondSlaveZone(value: string) {
    this._secondSlaveZone = value;
  }
  public resetSecondSlaveZone() {
    this._secondSlaveZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondSlaveZoneInput() {
    return this._secondSlaveZone;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // slave_deploy_mode - computed: false, optional: true, required: false
  private _slaveDeployMode?: number; 
  public get slaveDeployMode() {
    return this.getNumberAttribute('slave_deploy_mode');
  }
  public set slaveDeployMode(value: number) {
    this._slaveDeployMode = value;
  }
  public resetSlaveDeployMode() {
    this._slaveDeployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveDeployModeInput() {
    return this._slaveDeployMode;
  }

  // slave_sync_mode - computed: false, optional: true, required: false
  private _slaveSyncMode?: number; 
  public get slaveSyncMode() {
    return this.getNumberAttribute('slave_sync_mode');
  }
  public set slaveSyncMode(value: number) {
    this._slaveSyncMode = value;
  }
  public resetSlaveSyncMode() {
    this._slaveSyncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveSyncModeInput() {
    return this._slaveSyncMode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
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

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getNumberAttribute('task_status');
  }

  // upgrade_subversion - computed: false, optional: true, required: false
  private _upgradeSubversion?: number; 
  public get upgradeSubversion() {
    return this.getNumberAttribute('upgrade_subversion');
  }
  public set upgradeSubversion(value: number) {
    this._upgradeSubversion = value;
  }
  public resetUpgradeSubversion() {
    this._upgradeSubversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSubversionInput() {
    return this._upgradeSubversion;
  }

  // volume_size - computed: false, optional: false, required: true
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
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

  // wait_switch - computed: false, optional: true, required: false
  private _waitSwitch?: number; 
  public get waitSwitch() {
    return this.getNumberAttribute('wait_switch');
  }
  public set waitSwitch(value: number) {
    this._waitSwitch = value;
  }
  public resetWaitSwitch() {
    this._waitSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSwitchInput() {
    return this._waitSwitch;
  }

  // cluster_topology - computed: false, optional: true, required: false
  private _clusterTopology = new MysqlInstanceClusterTopologyOutputReference(this, "cluster_topology");
  public get clusterTopology() {
    return this._clusterTopology;
  }
  public putClusterTopology(value: MysqlInstanceClusterTopology) {
    this._clusterTopology.internalValue = value;
  }
  public resetClusterTopology() {
    this._clusterTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTopologyInput() {
    return this._clusterTopology.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlInstanceTimeouts) {
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
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      cpu: cdktf.numberToTerraform(this._cpu),
      device_type: cdktf.stringToTerraform(this._deviceType),
      engine_type: cdktf.stringToTerraform(this._engineType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      fast_upgrade: cdktf.numberToTerraform(this._fastUpgrade),
      first_slave_zone: cdktf.stringToTerraform(this._firstSlaveZone),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      internet_service: cdktf.numberToTerraform(this._internetService),
      intranet_port: cdktf.numberToTerraform(this._intranetPort),
      max_deay_time: cdktf.numberToTerraform(this._maxDeayTime),
      mem_size: cdktf.numberToTerraform(this._memSize),
      param_template_id: cdktf.numberToTerraform(this._paramTemplateId),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      pay_type: cdktf.numberToTerraform(this._payType),
      period: cdktf.numberToTerraform(this._period),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      project_id: cdktf.numberToTerraform(this._projectId),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      second_slave_zone: cdktf.stringToTerraform(this._secondSlaveZone),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      slave_deploy_mode: cdktf.numberToTerraform(this._slaveDeployMode),
      slave_sync_mode: cdktf.numberToTerraform(this._slaveSyncMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_subversion: cdktf.numberToTerraform(this._upgradeSubversion),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_switch: cdktf.numberToTerraform(this._waitSwitch),
      cluster_topology: mysqlInstanceClusterTopologyToTerraform(this._clusterTopology.internalValue),
      timeouts: mysqlInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
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
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_upgrade: {
        value: cdktf.numberToHclTerraform(this._fastUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_slave_zone: {
        value: cdktf.stringToHclTerraform(this._firstSlaveZone),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service: {
        value: cdktf.numberToHclTerraform(this._internetService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      intranet_port: {
        value: cdktf.numberToHclTerraform(this._intranetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_deay_time: {
        value: cdktf.numberToHclTerraform(this._maxDeayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mem_size: {
        value: cdktf.numberToHclTerraform(this._memSize),
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
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      pay_type: {
        value: cdktf.numberToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
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
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      second_slave_zone: {
        value: cdktf.stringToHclTerraform(this._secondSlaveZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      slave_deploy_mode: {
        value: cdktf.numberToHclTerraform(this._slaveDeployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slave_sync_mode: {
        value: cdktf.numberToHclTerraform(this._slaveSyncMode),
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
      upgrade_subversion: {
        value: cdktf.numberToHclTerraform(this._upgradeSubversion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_size: {
        value: cdktf.numberToHclTerraform(this._volumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_switch: {
        value: cdktf.numberToHclTerraform(this._waitSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_topology: {
        value: mysqlInstanceClusterTopologyToHclTerraform(this._clusterTopology.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlInstanceClusterTopologyList",
      },
      timeouts: {
        value: mysqlInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
