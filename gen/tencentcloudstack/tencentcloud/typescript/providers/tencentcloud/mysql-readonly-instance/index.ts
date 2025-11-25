// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#auto_renew_flag MysqlReadonlyInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Pay type of instance. Valid values:`PREPAID`, `POSTPAID`. Default is `POSTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#charge_type MysqlReadonlyInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#cpu MysqlReadonlyInstance#cpu}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#device_type MysqlReadonlyInstance#device_type}
  */
  readonly deviceType?: string;
  /**
  * Specify whether to enable fast upgrade when upgrade instance spec, available value: `1` - enabled, `0` - disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#fast_upgrade MysqlReadonlyInstance#fast_upgrade}
  */
  readonly fastUpgrade?: number;
  /**
  * Indicate whether to delete instance directly or not. Default is `false`. If set true, the instance will be deleted instead of staying recycle bin. Note: only works for `PREPAID` instance. When the main mysql instance set true, this para of the readonly mysql instance will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#force_delete MysqlReadonlyInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#id MysqlReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of a mysql instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#instance_name MysqlReadonlyInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Public access port. Valid value ranges: [1024~65535]. The default value is `3306`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#intranet_port MysqlReadonlyInstance#intranet_port}
  */
  readonly intranetPort?: number;
  /**
  * Indicates the master instance ID of recovery instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#master_instance_id MysqlReadonlyInstance#master_instance_id}
  */
  readonly masterInstanceId: string;
  /**
  * The region information of the master instance. This field is required when purchasing a cross-region subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#master_region MysqlReadonlyInstance#master_region}
  */
  readonly masterRegion?: string;
  /**
  * Memory size (in MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#mem_size MysqlReadonlyInstance#mem_size}
  */
  readonly memSize: number;
  /**
  * Specify parameter template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#param_template_id MysqlReadonlyInstance#param_template_id}
  */
  readonly paramTemplateId?: number;
  /**
  * Pay type of instance. Valid values: `0`, `1`. `0`: prepaid, `1`: postpaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#pay_type MysqlReadonlyInstance#pay_type}
  */
  readonly payType?: number;
  /**
  * Period of instance. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#period MysqlReadonlyInstance#period}
  */
  readonly period?: number;
  /**
  * Period of instance. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#prepaid_period MysqlReadonlyInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * Read only group id. If rogroupId is empty, a new ro group is created by default. If it is not empty, the existing ro group is used. Cross-region query requires master instance permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#ro_group_id MysqlReadonlyInstance#ro_group_id}
  */
  readonly roGroupId?: string;
  /**
  * Security groups to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#security_groups MysqlReadonlyInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Availability zone deployment method. Available values: 0 - Single availability zone; 1 - Multiple availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#slave_deploy_mode MysqlReadonlyInstance#slave_deploy_mode}
  */
  readonly slaveDeployMode?: number;
  /**
  * Private network ID. If `vpc_id` is set, this value is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#subnet_id MysqlReadonlyInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Instance tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#tags MysqlReadonlyInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Disk size (in GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#volume_size MysqlReadonlyInstance#volume_size}
  */
  readonly volumeSize: number;
  /**
  * ID of VPC, which can be modified once every 24 hours and can't be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#vpc_id MysqlReadonlyInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Switch the method of accessing new instances, default is `0`. Supported values include: `0` - switch immediately, `1` - switch in time window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#wait_switch MysqlReadonlyInstance#wait_switch}
  */
  readonly waitSwitch?: number;
  /**
  * Zone information, this parameter defaults to, the system automatically selects an Availability Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#zone MysqlReadonlyInstance#zone}
  */
  readonly zone?: string;
  /**
  * cluster_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#cluster_topology MysqlReadonlyInstance#cluster_topology}
  */
  readonly clusterTopology?: MysqlReadonlyInstanceClusterTopology;
}
export interface MysqlReadonlyInstanceClusterTopologyReadOnlyNodes {
  /**
  * Whether to distribute in random availability zones. Enter `true` to specify a random availability zone. Otherwise, use the availability zone specified by Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#is_random_zone MysqlReadonlyInstance#is_random_zone}
  */
  readonly isRandomZone?: boolean | cdktf.IResolvable;
  /**
  * When upgrading a cluster instance, if you want to adjust the availability zone of a read-only node, you need to specify the node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#node_id MysqlReadonlyInstance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Specifies the availability zone where the node is distributed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#zone MysqlReadonlyInstance#zone}
  */
  readonly zone?: string;
}

export function mysqlReadonlyInstanceClusterTopologyReadOnlyNodesToTerraform(struct?: MysqlReadonlyInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable): any {
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


export function mysqlReadonlyInstanceClusterTopologyReadOnlyNodesToHclTerraform(struct?: MysqlReadonlyInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable): any {
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

export class MysqlReadonlyInstanceClusterTopologyReadOnlyNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlReadonlyInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlReadonlyInstanceClusterTopologyReadOnlyNodes | cdktf.IResolvable | undefined) {
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

export class MysqlReadonlyInstanceClusterTopologyReadOnlyNodesList extends cdktf.ComplexList {
  public internalValue? : MysqlReadonlyInstanceClusterTopologyReadOnlyNodes[] | cdktf.IResolvable

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
  public get(index: number): MysqlReadonlyInstanceClusterTopologyReadOnlyNodesOutputReference {
    return new MysqlReadonlyInstanceClusterTopologyReadOnlyNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlReadonlyInstanceClusterTopologyReadWriteNode {
  /**
  * When upgrading a cluster instance, if you want to adjust the availability zone of a read-only node, you need to specify the node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#node_id MysqlReadonlyInstance#node_id}
  */
  readonly nodeId?: string;
  /**
  * The availability zone where the RW node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#zone MysqlReadonlyInstance#zone}
  */
  readonly zone: string;
}

export function mysqlReadonlyInstanceClusterTopologyReadWriteNodeToTerraform(struct?: MysqlReadonlyInstanceClusterTopologyReadWriteNodeOutputReference | MysqlReadonlyInstanceClusterTopologyReadWriteNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mysqlReadonlyInstanceClusterTopologyReadWriteNodeToHclTerraform(struct?: MysqlReadonlyInstanceClusterTopologyReadWriteNodeOutputReference | MysqlReadonlyInstanceClusterTopologyReadWriteNode): any {
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

export class MysqlReadonlyInstanceClusterTopologyReadWriteNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlReadonlyInstanceClusterTopologyReadWriteNode | undefined {
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

  public set internalValue(value: MysqlReadonlyInstanceClusterTopologyReadWriteNode | undefined) {
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
export interface MysqlReadonlyInstanceClusterTopology {
  /**
  * read_only_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#read_only_nodes MysqlReadonlyInstance#read_only_nodes}
  */
  readonly readOnlyNodes?: MysqlReadonlyInstanceClusterTopologyReadOnlyNodes[] | cdktf.IResolvable;
  /**
  * read_write_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#read_write_node MysqlReadonlyInstance#read_write_node}
  */
  readonly readWriteNode?: MysqlReadonlyInstanceClusterTopologyReadWriteNode;
}

export function mysqlReadonlyInstanceClusterTopologyToTerraform(struct?: MysqlReadonlyInstanceClusterTopologyOutputReference | MysqlReadonlyInstanceClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only_nodes: cdktf.listMapper(mysqlReadonlyInstanceClusterTopologyReadOnlyNodesToTerraform, true)(struct!.readOnlyNodes),
    read_write_node: mysqlReadonlyInstanceClusterTopologyReadWriteNodeToTerraform(struct!.readWriteNode),
  }
}


export function mysqlReadonlyInstanceClusterTopologyToHclTerraform(struct?: MysqlReadonlyInstanceClusterTopologyOutputReference | MysqlReadonlyInstanceClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only_nodes: {
      value: cdktf.listMapperHcl(mysqlReadonlyInstanceClusterTopologyReadOnlyNodesToHclTerraform, true)(struct!.readOnlyNodes),
      isBlock: true,
      type: "set",
      storageClassType: "MysqlReadonlyInstanceClusterTopologyReadOnlyNodesList",
    },
    read_write_node: {
      value: mysqlReadonlyInstanceClusterTopologyReadWriteNodeToHclTerraform(struct!.readWriteNode),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlReadonlyInstanceClusterTopologyReadWriteNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlReadonlyInstanceClusterTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlReadonlyInstanceClusterTopology | undefined {
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

  public set internalValue(value: MysqlReadonlyInstanceClusterTopology | undefined) {
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
  private _readOnlyNodes = new MysqlReadonlyInstanceClusterTopologyReadOnlyNodesList(this, "read_only_nodes", true);
  public get readOnlyNodes() {
    return this._readOnlyNodes;
  }
  public putReadOnlyNodes(value: MysqlReadonlyInstanceClusterTopologyReadOnlyNodes[] | cdktf.IResolvable) {
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
  private _readWriteNode = new MysqlReadonlyInstanceClusterTopologyReadWriteNodeOutputReference(this, "read_write_node");
  public get readWriteNode() {
    return this._readWriteNode;
  }
  public putReadWriteNode(value: MysqlReadonlyInstanceClusterTopologyReadWriteNode) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance tencentcloud_mysql_readonly_instance}
*/
export class MysqlReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlReadonlyInstance to import
  * @param importFromId The id of the existing MysqlReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_readonly_instance tencentcloud_mysql_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_readonly_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._chargeType = config.chargeType;
    this._cpu = config.cpu;
    this._deviceType = config.deviceType;
    this._fastUpgrade = config.fastUpgrade;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._intranetPort = config.intranetPort;
    this._masterInstanceId = config.masterInstanceId;
    this._masterRegion = config.masterRegion;
    this._memSize = config.memSize;
    this._paramTemplateId = config.paramTemplateId;
    this._payType = config.payType;
    this._period = config.period;
    this._prepaidPeriod = config.prepaidPeriod;
    this._roGroupId = config.roGroupId;
    this._securityGroups = config.securityGroups;
    this._slaveDeployMode = config.slaveDeployMode;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volumeSize = config.volumeSize;
    this._vpcId = config.vpcId;
    this._waitSwitch = config.waitSwitch;
    this._zone = config.zone;
    this._clusterTopology.internalValue = config.clusterTopology;
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

  // master_instance_id - computed: false, optional: false, required: true
  private _masterInstanceId?: string; 
  public get masterInstanceId() {
    return this.getStringAttribute('master_instance_id');
  }
  public set masterInstanceId(value: string) {
    this._masterInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceIdInput() {
    return this._masterInstanceId;
  }

  // master_region - computed: true, optional: true, required: false
  private _masterRegion?: string; 
  public get masterRegion() {
    return this.getStringAttribute('master_region');
  }
  public set masterRegion(value: string) {
    this._masterRegion = value;
  }
  public resetMasterRegion() {
    this._masterRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterRegionInput() {
    return this._masterRegion;
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

  // ro_group_id - computed: true, optional: true, required: false
  private _roGroupId?: string; 
  public get roGroupId() {
    return this.getStringAttribute('ro_group_id');
  }
  public set roGroupId(value: string) {
    this._roGroupId = value;
  }
  public resetRoGroupId() {
    this._roGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roGroupIdInput() {
    return this._roGroupId;
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

  // cluster_topology - computed: false, optional: true, required: false
  private _clusterTopology = new MysqlReadonlyInstanceClusterTopologyOutputReference(this, "cluster_topology");
  public get clusterTopology() {
    return this._clusterTopology;
  }
  public putClusterTopology(value: MysqlReadonlyInstanceClusterTopology) {
    this._clusterTopology.internalValue = value;
  }
  public resetClusterTopology() {
    this._clusterTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTopologyInput() {
    return this._clusterTopology.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      cpu: cdktf.numberToTerraform(this._cpu),
      device_type: cdktf.stringToTerraform(this._deviceType),
      fast_upgrade: cdktf.numberToTerraform(this._fastUpgrade),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      intranet_port: cdktf.numberToTerraform(this._intranetPort),
      master_instance_id: cdktf.stringToTerraform(this._masterInstanceId),
      master_region: cdktf.stringToTerraform(this._masterRegion),
      mem_size: cdktf.numberToTerraform(this._memSize),
      param_template_id: cdktf.numberToTerraform(this._paramTemplateId),
      pay_type: cdktf.numberToTerraform(this._payType),
      period: cdktf.numberToTerraform(this._period),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      ro_group_id: cdktf.stringToTerraform(this._roGroupId),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      slave_deploy_mode: cdktf.numberToTerraform(this._slaveDeployMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_switch: cdktf.numberToTerraform(this._waitSwitch),
      zone: cdktf.stringToTerraform(this._zone),
      cluster_topology: mysqlReadonlyInstanceClusterTopologyToTerraform(this._clusterTopology.internalValue),
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
      fast_upgrade: {
        value: cdktf.numberToHclTerraform(this._fastUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      intranet_port: {
        value: cdktf.numberToHclTerraform(this._intranetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_region: {
        value: cdktf.stringToHclTerraform(this._masterRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ro_group_id: {
        value: cdktf.stringToHclTerraform(this._roGroupId),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_topology: {
        value: mysqlReadonlyInstanceClusterTopologyToHclTerraform(this._clusterTopology.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlReadonlyInstanceClusterTopologyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
