// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag. Valid values are `0`(NOTIFY_AND_MANUAL_RENEW), `1`(NOTIFY_AND_AUTO_RENEW) and `2`(DISABLE_NOTIFY_AND_MANUAL_RENEW). Default value is `0`. Note: only works for PREPAID instance. Only supports`0` and `1` for creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#auto_renew_flag MongodbInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * If cloud database instances are deployed in multiple availability zones, specify a list of multiple availability zones.
  * 	- To deploy an instance with multiple availability zones, the parameter Zone specifies the primary availability zone information of the instance; Availability ZoneList specifies all availability zone information, including the primary availability zone. The input format is as follows: [ap-Guangzhou-2,ap-Guangzhou-3,ap-Guangzhou-4].
  * 	- You can obtain availability zone information planned in different regions of the cloud database through the interface DescribeSpecInfo, so as to specify effective availability zones.
  * 	- Multiple availability zone deployment nodes can only be deployed in 3 different availability zones. Deploying most nodes of a cluster in the same availability zone is not supported. For example, a 3-node cluster does not support 2 nodes deployed in the same zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#availability_zone_list MongodbInstance#availability_zone_list}
  */
  readonly availabilityZoneList?: string[];
  /**
  * The available zone of the Mongodb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#available_zone MongodbInstance#available_zone}
  */
  readonly availableZone: string;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`. Default value is `POSTPAID_BY_HOUR`. Note: TencentCloud International only supports `POSTPAID_BY_HOUR`. Caution that update operation on this field will delete old instances and create new one with new charge type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#charge_type MongodbInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Refers to version information. The DescribeSpecInfo API can be called to obtain detailed information about the supported versions.
  * - MONGO_40_WT: version of the MongoDB 4.0 WiredTiger storage engine.
  * - MONGO_42_WT: version of the MongoDB 4.2 WiredTiger storage engine.
  * - MONGO_44_WT: version of the MongoDB 4.4 WiredTiger storage engine.
  * - MONGO_50_WT: version of the MongoDB 5.0 WiredTiger storage engine.
  * - MONGO_60_WT: version of the MongoDB 6.0 WiredTiger storage engine.
  * - MONGO_70_WT: version of the MongoDB 7.0 WiredTiger storage engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#engine_version MongodbInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * The availability zone to which the Hidden node belongs. This parameter is required in cross-AZ instance deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#hidden_zone MongodbInstance#hidden_zone}
  */
  readonly hiddenZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#id MongodbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Switch time for instance configuration changes.
  * 	- 0: When the adjustment is completed, perform the configuration task immediately. Default is 0.
  * 	- 1: Perform reconfiguration tasks within the maintenance time window.
  * Note: Adjusting the number of nodes and slices does not support changes within the maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#in_maintenance MongodbInstance#in_maintenance}
  */
  readonly inMaintenance?: number;
  /**
  * Name of the Mongodb instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#instance_name MongodbInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Type of Mongodb instance, and available values include `HIO`(or `GIO` which will be deprecated, represents high IO) and `HIO10G`(or `TGIO` which will be deprecated, represents 10-gigabit high IO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#machine_type MongodbInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Maintenance window end time.
  * 	- The value range is any full point or half point from `00:00-23:00`, and the maintenance time duration is at least 30 minutes and at most 3 hours.
  * 	- The end time must be based on the start time backwards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#maintenance_end MongodbInstance#maintenance_end}
  */
  readonly maintenanceEnd?: string;
  /**
  * Maintenance window start time. The value range is any full point or half point from `00:00-23:00`, such as 00:00 or 00:30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#maintenance_start MongodbInstance#maintenance_start}
  */
  readonly maintenanceStart?: string;
  /**
  * Memory size. The minimum value is 2, and unit is GB. Memory and volume must be upgraded or degraded simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#memory MongodbInstance#memory}
  */
  readonly memory: number;
  /**
  * The number of nodes in each replica set. Default value: 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#node_num MongodbInstance#node_num}
  */
  readonly nodeNum?: number;
  /**
  * Password of this Mongodb account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#password MongodbInstance#password}
  */
  readonly password?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance. Valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#prepaid_period MongodbInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * ID of the project which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#project_id MongodbInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * ID of the security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#security_groups MongodbInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * ID of the subnet within this VPC. The value is required if `vpc_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#subnet_id MongodbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags of the Mongodb. Key name `project` is system reserved and can't be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#tags MongodbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Disk size. The minimum value is 25, and unit is GB. Memory and volume must be upgraded or degraded simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#volume MongodbInstance#volume}
  */
  readonly volume: number;
  /**
  * ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#vpc_id MongodbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * add_node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#add_node_list MongodbInstance#add_node_list}
  */
  readonly addNodeList?: MongodbInstanceAddNodeListStruct[] | cdktf.IResolvable;
  /**
  * remove_node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#remove_node_list MongodbInstance#remove_node_list}
  */
  readonly removeNodeList?: MongodbInstanceRemoveNodeListStruct[] | cdktf.IResolvable;
}
export interface MongodbInstanceStandbyInstanceListStruct {
}

export function mongodbInstanceStandbyInstanceListStructToTerraform(struct?: MongodbInstanceStandbyInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mongodbInstanceStandbyInstanceListStructToHclTerraform(struct?: MongodbInstanceStandbyInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MongodbInstanceStandbyInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbInstanceStandbyInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceStandbyInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // standby_instance_id - computed: true, optional: false, required: false
  public get standbyInstanceId() {
    return this.getStringAttribute('standby_instance_id');
  }

  // standby_instance_region - computed: true, optional: false, required: false
  public get standbyInstanceRegion() {
    return this.getStringAttribute('standby_instance_region');
  }
}

export class MongodbInstanceStandbyInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): MongodbInstanceStandbyInstanceListStructOutputReference {
    return new MongodbInstanceStandbyInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbInstanceAddNodeListStruct {
  /**
  * The node role that needs to be added.
  * - SECONDARY: Mongod node;
  * - READONLY: read-only node;
  * - MONGOS: Mongos node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#role MongodbInstance#role}
  */
  readonly role: string;
  /**
  * The availability zone corresponding to the node.
  * - single availability zone, where all nodes are in the same availability zone;
  * - multiple availability zones: the current standard specification is the distribution of three availability zones, and the master and slave nodes are not in the same availability zone. You should pay attention to configuring the availability zone corresponding to the new node, and the rule that the number of nodes in any two availability zones is greater than the third availability zone must be met after the addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#zone MongodbInstance#zone}
  */
  readonly zone: string;
}

export function mongodbInstanceAddNodeListStructToTerraform(struct?: MongodbInstanceAddNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mongodbInstanceAddNodeListStructToHclTerraform(struct?: MongodbInstanceAddNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class MongodbInstanceAddNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbInstanceAddNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceAddNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._zone = value.zone;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

export class MongodbInstanceAddNodeListStructList extends cdktf.ComplexList {
  public internalValue? : MongodbInstanceAddNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): MongodbInstanceAddNodeListStructOutputReference {
    return new MongodbInstanceAddNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbInstanceRemoveNodeListStruct {
  /**
  * The node ID to delete. The shard cluster must specify the name of the node to be deleted by a group of shards, and the rest of the shards should be grouped and aligned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#node_name MongodbInstance#node_name}
  */
  readonly nodeName: string;
  /**
  * The node role that needs to be deleted.
  * - SECONDARY: Mongod node;
  * - READONLY: read-only node;
  * - MONGOS: Mongos node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#role MongodbInstance#role}
  */
  readonly role: string;
  /**
  * The availability zone corresponding to the node.
  * - single availability zone, where all nodes are in the same availability zone;
  * - multiple availability zones: the current standard specification is the distribution of three availability zones, and the master and slave nodes are not in the same availability zone. You should pay attention to configuring the availability zone corresponding to the new node, and the rule that the number of nodes in any two availability zones is greater than the third availability zone must be met after the addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#zone MongodbInstance#zone}
  */
  readonly zone: string;
}

export function mongodbInstanceRemoveNodeListStructToTerraform(struct?: MongodbInstanceRemoveNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    role: cdktf.stringToTerraform(struct!.role),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mongodbInstanceRemoveNodeListStructToHclTerraform(struct?: MongodbInstanceRemoveNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class MongodbInstanceRemoveNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbInstanceRemoveNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceRemoveNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
      this._role = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
      this._role = value.role;
      this._zone = value.zone;
    }
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

export class MongodbInstanceRemoveNodeListStructList extends cdktf.ComplexList {
  public internalValue? : MongodbInstanceRemoveNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): MongodbInstanceRemoveNodeListStructOutputReference {
    return new MongodbInstanceRemoveNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance tencentcloud_mongodb_instance}
*/
export class MongodbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbInstance to import
  * @param importFromId The id of the existing MongodbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance tencentcloud_mongodb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._availabilityZoneList = config.availabilityZoneList;
    this._availableZone = config.availableZone;
    this._chargeType = config.chargeType;
    this._engineVersion = config.engineVersion;
    this._hiddenZone = config.hiddenZone;
    this._id = config.id;
    this._inMaintenance = config.inMaintenance;
    this._instanceName = config.instanceName;
    this._machineType = config.machineType;
    this._maintenanceEnd = config.maintenanceEnd;
    this._maintenanceStart = config.maintenanceStart;
    this._memory = config.memory;
    this._nodeNum = config.nodeNum;
    this._password = config.password;
    this._prepaidPeriod = config.prepaidPeriod;
    this._projectId = config.projectId;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volume = config.volume;
    this._vpcId = config.vpcId;
    this._addNodeList.internalValue = config.addNodeList;
    this._removeNodeList.internalValue = config.removeNodeList;
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

  // availability_zone_list - computed: true, optional: true, required: false
  private _availabilityZoneList?: string[]; 
  public get availabilityZoneList() {
    return this.getListAttribute('availability_zone_list');
  }
  public set availabilityZoneList(value: string[]) {
    this._availabilityZoneList = value;
  }
  public resetAvailabilityZoneList() {
    this._availabilityZoneList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneListInput() {
    return this._availabilityZoneList;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // hidden_zone - computed: true, optional: true, required: false
  private _hiddenZone?: string; 
  public get hiddenZone() {
    return this.getStringAttribute('hidden_zone');
  }
  public set hiddenZone(value: string) {
    this._hiddenZone = value;
  }
  public resetHiddenZone() {
    this._hiddenZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenZoneInput() {
    return this._hiddenZone;
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

  // in_maintenance - computed: false, optional: true, required: false
  private _inMaintenance?: number; 
  public get inMaintenance() {
    return this.getNumberAttribute('in_maintenance');
  }
  public set inMaintenance(value: number) {
    this._inMaintenance = value;
  }
  public resetInMaintenance() {
    this._inMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMaintenanceInput() {
    return this._inMaintenance;
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // maintenance_end - computed: true, optional: true, required: false
  private _maintenanceEnd?: string; 
  public get maintenanceEnd() {
    return this.getStringAttribute('maintenance_end');
  }
  public set maintenanceEnd(value: string) {
    this._maintenanceEnd = value;
  }
  public resetMaintenanceEnd() {
    this._maintenanceEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceEndInput() {
    return this._maintenanceEnd;
  }

  // maintenance_start - computed: true, optional: true, required: false
  private _maintenanceStart?: string; 
  public get maintenanceStart() {
    return this.getStringAttribute('maintenance_start');
  }
  public set maintenanceStart(value: string) {
    this._maintenanceStart = value;
  }
  public resetMaintenanceStart() {
    this._maintenanceStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStartInput() {
    return this._maintenanceStart;
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

  // node_num - computed: true, optional: true, required: false
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  public resetNodeNum() {
    this._nodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // standby_instance_list - computed: true, optional: false, required: false
  private _standbyInstanceList = new MongodbInstanceStandbyInstanceListStructList(this, "standby_instance_list", false);
  public get standbyInstanceList() {
    return this._standbyInstanceList;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subnet_id - computed: false, optional: true, required: false
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

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
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

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }

  // add_node_list - computed: false, optional: true, required: false
  private _addNodeList = new MongodbInstanceAddNodeListStructList(this, "add_node_list", false);
  public get addNodeList() {
    return this._addNodeList;
  }
  public putAddNodeList(value: MongodbInstanceAddNodeListStruct[] | cdktf.IResolvable) {
    this._addNodeList.internalValue = value;
  }
  public resetAddNodeList() {
    this._addNodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNodeListInput() {
    return this._addNodeList.internalValue;
  }

  // remove_node_list - computed: false, optional: true, required: false
  private _removeNodeList = new MongodbInstanceRemoveNodeListStructList(this, "remove_node_list", false);
  public get removeNodeList() {
    return this._removeNodeList;
  }
  public putRemoveNodeList(value: MongodbInstanceRemoveNodeListStruct[] | cdktf.IResolvable) {
    this._removeNodeList.internalValue = value;
  }
  public resetRemoveNodeList() {
    this._removeNodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeNodeListInput() {
    return this._removeNodeList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      availability_zone_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZoneList),
      available_zone: cdktf.stringToTerraform(this._availableZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      hidden_zone: cdktf.stringToTerraform(this._hiddenZone),
      id: cdktf.stringToTerraform(this._id),
      in_maintenance: cdktf.numberToTerraform(this._inMaintenance),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      machine_type: cdktf.stringToTerraform(this._machineType),
      maintenance_end: cdktf.stringToTerraform(this._maintenanceEnd),
      maintenance_start: cdktf.stringToTerraform(this._maintenanceStart),
      memory: cdktf.numberToTerraform(this._memory),
      node_num: cdktf.numberToTerraform(this._nodeNum),
      password: cdktf.stringToTerraform(this._password),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      volume: cdktf.numberToTerraform(this._volume),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      add_node_list: cdktf.listMapper(mongodbInstanceAddNodeListStructToTerraform, true)(this._addNodeList.internalValue),
      remove_node_list: cdktf.listMapper(mongodbInstanceRemoveNodeListStructToTerraform, true)(this._removeNodeList.internalValue),
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
      availability_zone_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZoneList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden_zone: {
        value: cdktf.stringToHclTerraform(this._hiddenZone),
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
      in_maintenance: {
        value: cdktf.numberToHclTerraform(this._inMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_end: {
        value: cdktf.stringToHclTerraform(this._maintenanceEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_start: {
        value: cdktf.stringToHclTerraform(this._maintenanceStart),
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
      node_num: {
        value: cdktf.numberToHclTerraform(this._nodeNum),
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
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      volume: {
        value: cdktf.numberToHclTerraform(this._volume),
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
      add_node_list: {
        value: cdktf.listMapperHcl(mongodbInstanceAddNodeListStructToHclTerraform, true)(this._addNodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MongodbInstanceAddNodeListStructList",
      },
      remove_node_list: {
        value: cdktf.listMapperHcl(mongodbInstanceRemoveNodeListStructToHclTerraform, true)(this._removeNodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MongodbInstanceRemoveNodeListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
