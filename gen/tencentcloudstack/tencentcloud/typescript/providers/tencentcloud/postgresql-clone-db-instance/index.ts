// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlCloneDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Campaign ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#activity_id PostgresqlCloneDbInstance#activity_id}
  */
  readonly activityId?: number;
  /**
  * Renewal Flag:
  * 
  * - `0`: manual renewal
  * `1`: auto-renewal
  * 
  * Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#auto_renew_flag PostgresqlCloneDbInstance#auto_renew_flag}
  */
  readonly autoRenewFlag: number;
  /**
  * Basic backup set ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#backup_set_id PostgresqlCloneDbInstance#backup_set_id}
  */
  readonly backupSetId?: string;
  /**
  * ID of the original instance to be cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#db_instance_id PostgresqlCloneDbInstance#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#id PostgresqlCloneDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance billing type, which currently supports:
  * 
  * - PREPAID: Prepaid, i.e., monthly subscription
  * - POSTPAID_BY_HOUR: Pay-as-you-go, i.e., pay by consumption
  * 
  * Default value: PREPAID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#instance_charge_type PostgresqlCloneDbInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Name of the newly purchased instance, which can contain up to 60 letters, digits, or symbols (-_). If this parameter is not specified, "Unnamed" will be displayed by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#name PostgresqlCloneDbInstance#name}
  */
  readonly name?: string;
  /**
  * Purchase duration, in months.
  * - Prepaid: Supports `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, and `36`.
  * - Pay-as-you-go: Only supports `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#period PostgresqlCloneDbInstance#period}
  */
  readonly period: number;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#project_id PostgresqlCloneDbInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Restoration point in time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#recovery_target_time PostgresqlCloneDbInstance#recovery_target_time}
  */
  readonly recoveryTargetTime?: string;
  /**
  * Security group of the instance, which can be obtained from the `sgld` field in the return value of the [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808?from_cn_redirect=1) API. If this parameter is not specified, the default security group will be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#security_group_ids PostgresqlCloneDbInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Purchasable code, which can be obtained from the `SpecCode` field in the return value of the [DescribeClasses](https://intl.cloud.tencent.com/document/api/409/89019?from_cn_redirect=1) API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#spec_code PostgresqlCloneDbInstance#spec_code}
  */
  readonly specCode: string;
  /**
  * Instance storage capacity in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#storage PostgresqlCloneDbInstance#storage}
  */
  readonly storage: number;
  /**
  * VPC subnet ID in the format of `subnet-xxxxxxxx`, which can be obtained in the console or from the `unSubnetId` field in the return value of the [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#subnet_id PostgresqlCloneDbInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Primary-standby sync mode, which supports:
  * Semi-sync: Semi-sync
  * Async: Asynchronous
  * Default value for the primary instance: Semi-sync
  * Default value for the read-only instance: Async.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#sync_mode PostgresqlCloneDbInstance#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * VPC ID in the format of `vpc-xxxxxxx`, which can be obtained in the console or from the `unVpcId` field in the return value of the [DescribeVpcEx](https://intl.cloud.tencent.com/document/api/215/1372?from_cn_redirect=1) API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#vpc_id PostgresqlCloneDbInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * db_node_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#db_node_set PostgresqlCloneDbInstance#db_node_set}
  */
  readonly dbNodeSet?: PostgresqlCloneDbInstanceDbNodeSet[] | cdktf.IResolvable;
  /**
  * tag_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#tag_list PostgresqlCloneDbInstance#tag_list}
  */
  readonly tagList?: PostgresqlCloneDbInstanceTagListStruct[] | cdktf.IResolvable;
}
export interface PostgresqlCloneDbInstanceDbNodeSet {
  /**
  * Dedicated cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#dedicated_cluster_id PostgresqlCloneDbInstance#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * Node type. Valid values:
  * `Primary`;
  * `Standby`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#role PostgresqlCloneDbInstance#role}
  */
  readonly role: string;
  /**
  * AZ where the node resides, such as ap-guangzhou-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#zone PostgresqlCloneDbInstance#zone}
  */
  readonly zone: string;
}

export function postgresqlCloneDbInstanceDbNodeSetToTerraform(struct?: PostgresqlCloneDbInstanceDbNodeSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_cluster_id: cdktf.stringToTerraform(struct!.dedicatedClusterId),
    role: cdktf.stringToTerraform(struct!.role),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function postgresqlCloneDbInstanceDbNodeSetToHclTerraform(struct?: PostgresqlCloneDbInstanceDbNodeSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedClusterId),
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

export class PostgresqlCloneDbInstanceDbNodeSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlCloneDbInstanceDbNodeSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedClusterId = this._dedicatedClusterId;
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

  public set internalValue(value: PostgresqlCloneDbInstanceDbNodeSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedicatedClusterId = undefined;
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
      this._dedicatedClusterId = value.dedicatedClusterId;
      this._role = value.role;
      this._zone = value.zone;
    }
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
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

export class PostgresqlCloneDbInstanceDbNodeSetList extends cdktf.ComplexList {
  public internalValue? : PostgresqlCloneDbInstanceDbNodeSet[] | cdktf.IResolvable

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
  public get(index: number): PostgresqlCloneDbInstanceDbNodeSetOutputReference {
    return new PostgresqlCloneDbInstanceDbNodeSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PostgresqlCloneDbInstanceTagListStruct {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#tag_key PostgresqlCloneDbInstance#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#tag_value PostgresqlCloneDbInstance#tag_value}
  */
  readonly tagValue: string;
}

export function postgresqlCloneDbInstanceTagListStructToTerraform(struct?: PostgresqlCloneDbInstanceTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function postgresqlCloneDbInstanceTagListStructToHclTerraform(struct?: PostgresqlCloneDbInstanceTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlCloneDbInstanceTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlCloneDbInstanceTagListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlCloneDbInstanceTagListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class PostgresqlCloneDbInstanceTagListStructList extends cdktf.ComplexList {
  public internalValue? : PostgresqlCloneDbInstanceTagListStruct[] | cdktf.IResolvable

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
  public get(index: number): PostgresqlCloneDbInstanceTagListStructOutputReference {
    return new PostgresqlCloneDbInstanceTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance tencentcloud_postgresql_clone_db_instance}
*/
export class PostgresqlCloneDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_clone_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlCloneDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlCloneDbInstance to import
  * @param importFromId The id of the existing PostgresqlCloneDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlCloneDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_clone_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/postgresql_clone_db_instance tencentcloud_postgresql_clone_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlCloneDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlCloneDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_clone_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activityId = config.activityId;
    this._autoRenewFlag = config.autoRenewFlag;
    this._backupSetId = config.backupSetId;
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._name = config.name;
    this._period = config.period;
    this._projectId = config.projectId;
    this._recoveryTargetTime = config.recoveryTargetTime;
    this._securityGroupIds = config.securityGroupIds;
    this._specCode = config.specCode;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._syncMode = config.syncMode;
    this._vpcId = config.vpcId;
    this._dbNodeSet.internalValue = config.dbNodeSet;
    this._tagList.internalValue = config.tagList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activity_id - computed: false, optional: true, required: false
  private _activityId?: number; 
  public get activityId() {
    return this.getNumberAttribute('activity_id');
  }
  public set activityId(value: number) {
    this._activityId = value;
  }
  public resetActivityId() {
    this._activityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityIdInput() {
    return this._activityId;
  }

  // auto_renew_flag - computed: false, optional: false, required: true
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // backup_set_id - computed: false, optional: true, required: false
  private _backupSetId?: string; 
  public get backupSetId() {
    return this.getStringAttribute('backup_set_id');
  }
  public set backupSetId(value: string) {
    this._backupSetId = value;
  }
  public resetBackupSetId() {
    this._backupSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSetIdInput() {
    return this._backupSetId;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
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

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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

  // recovery_target_time - computed: false, optional: true, required: false
  private _recoveryTargetTime?: string; 
  public get recoveryTargetTime() {
    return this.getStringAttribute('recovery_target_time');
  }
  public set recoveryTargetTime(value: string) {
    this._recoveryTargetTime = value;
  }
  public resetRecoveryTargetTime() {
    this._recoveryTargetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTargetTimeInput() {
    return this._recoveryTargetTime;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // spec_code - computed: false, optional: false, required: true
  private _specCode?: string; 
  public get specCode() {
    return this.getStringAttribute('spec_code');
  }
  public set specCode(value: string) {
    this._specCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specCodeInput() {
    return this._specCode;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
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

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
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

  // db_node_set - computed: false, optional: true, required: false
  private _dbNodeSet = new PostgresqlCloneDbInstanceDbNodeSetList(this, "db_node_set", false);
  public get dbNodeSet() {
    return this._dbNodeSet;
  }
  public putDbNodeSet(value: PostgresqlCloneDbInstanceDbNodeSet[] | cdktf.IResolvable) {
    this._dbNodeSet.internalValue = value;
  }
  public resetDbNodeSet() {
    this._dbNodeSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeSetInput() {
    return this._dbNodeSet.internalValue;
  }

  // tag_list - computed: false, optional: true, required: false
  private _tagList = new PostgresqlCloneDbInstanceTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }
  public putTagList(value: PostgresqlCloneDbInstanceTagListStruct[] | cdktf.IResolvable) {
    this._tagList.internalValue = value;
  }
  public resetTagList() {
    this._tagList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagListInput() {
    return this._tagList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activity_id: cdktf.numberToTerraform(this._activityId),
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      backup_set_id: cdktf.stringToTerraform(this._backupSetId),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      project_id: cdktf.numberToTerraform(this._projectId),
      recovery_target_time: cdktf.stringToTerraform(this._recoveryTargetTime),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      spec_code: cdktf.stringToTerraform(this._specCode),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      sync_mode: cdktf.stringToTerraform(this._syncMode),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      db_node_set: cdktf.listMapper(postgresqlCloneDbInstanceDbNodeSetToTerraform, true)(this._dbNodeSet.internalValue),
      tag_list: cdktf.listMapper(postgresqlCloneDbInstanceTagListStructToTerraform, true)(this._tagList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activity_id: {
        value: cdktf.numberToHclTerraform(this._activityId),
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
      backup_set_id: {
        value: cdktf.stringToHclTerraform(this._backupSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
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
      recovery_target_time: {
        value: cdktf.stringToHclTerraform(this._recoveryTargetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spec_code: {
        value: cdktf.stringToHclTerraform(this._specCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
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
      sync_mode: {
        value: cdktf.stringToHclTerraform(this._syncMode),
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
      db_node_set: {
        value: cdktf.listMapperHcl(postgresqlCloneDbInstanceDbNodeSetToHclTerraform, true)(this._dbNodeSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PostgresqlCloneDbInstanceDbNodeSetList",
      },
      tag_list: {
        value: cdktf.listMapperHcl(postgresqlCloneDbInstanceTagListStructToHclTerraform, true)(this._tagList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PostgresqlCloneDbInstanceTagListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
