// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlRoGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#id MysqlRoGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, in the format: cdbro-3i70uj0k.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#instance_id MysqlRoGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to rebalance the load of RO instances in the RO group. Supported values include: 1 - rebalance load; 0 - do not rebalance load. The default value is 0. Note that when it is set to rebalance the load, the RO instance in the RO group will have a momentary disconnection of the database connection, please ensure that the application can reconnect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#is_balance_ro_load MysqlRoGroup#is_balance_ro_load}
  */
  readonly isBalanceRoLoad?: number;
  /**
  * The ID of the RO group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#ro_group_id MysqlRoGroup#ro_group_id}
  */
  readonly roGroupId: string;
  /**
  * ro_group_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#ro_group_info MysqlRoGroup#ro_group_info}
  */
  readonly roGroupInfo?: MysqlRoGroupRoGroupInfo;
  /**
  * ro_weight_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#ro_weight_values MysqlRoGroup#ro_weight_values}
  */
  readonly roWeightValues?: MysqlRoGroupRoWeightValues[] | cdktf.IResolvable;
}
export interface MysqlRoGroupRoGroupInfo {
  /**
  * The minimum number of reserved instances. It can be set to any value less than or equal to the number of RO instances under this RO group. Note that if the setting value is greater than the number of RO instances, it will not be removed; if it is set to 0, all instances whose latency exceeds the limit will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#min_ro_in_group MysqlRoGroup#min_ro_in_group}
  */
  readonly minRoInGroup?: number;
  /**
  * Delayed replication time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#replication_delay_time MysqlRoGroup#replication_delay_time}
  */
  readonly replicationDelayTime?: number;
  /**
  * RO group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#ro_group_name MysqlRoGroup#ro_group_name}
  */
  readonly roGroupName?: string;
  /**
  * RO instance maximum latency threshold. The unit is seconds, the minimum value is 1. Note that the RO group must have enabled instance delay culling policy for this value to be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#ro_max_delay_time MysqlRoGroup#ro_max_delay_time}
  */
  readonly roMaxDelayTime?: number;
  /**
  * Whether to enable delayed culling of instances. Supported values are: 1 - on; 0 - not on. Note that if you enable instance delay culling, you must set the delay threshold (RoMaxDelayTime) parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#ro_offline_delay MysqlRoGroup#ro_offline_delay}
  */
  readonly roOfflineDelay?: number;
  /**
  * weight mode. Supported values include: `system` - automatically assigned by the system; `custom` - user-defined settings. Note that if the `custom` mode is set, the RO instance weight configuration (RoWeightValues) parameter must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#weight_mode MysqlRoGroup#weight_mode}
  */
  readonly weightMode?: string;
}

export function mysqlRoGroupRoGroupInfoToTerraform(struct?: MysqlRoGroupRoGroupInfoOutputReference | MysqlRoGroupRoGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_ro_in_group: cdktf.numberToTerraform(struct!.minRoInGroup),
    replication_delay_time: cdktf.numberToTerraform(struct!.replicationDelayTime),
    ro_group_name: cdktf.stringToTerraform(struct!.roGroupName),
    ro_max_delay_time: cdktf.numberToTerraform(struct!.roMaxDelayTime),
    ro_offline_delay: cdktf.numberToTerraform(struct!.roOfflineDelay),
    weight_mode: cdktf.stringToTerraform(struct!.weightMode),
  }
}


export function mysqlRoGroupRoGroupInfoToHclTerraform(struct?: MysqlRoGroupRoGroupInfoOutputReference | MysqlRoGroupRoGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_ro_in_group: {
      value: cdktf.numberToHclTerraform(struct!.minRoInGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.replicationDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ro_group_name: {
      value: cdktf.stringToHclTerraform(struct!.roGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ro_max_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.roMaxDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ro_offline_delay: {
      value: cdktf.numberToHclTerraform(struct!.roOfflineDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight_mode: {
      value: cdktf.stringToHclTerraform(struct!.weightMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlRoGroupRoGroupInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlRoGroupRoGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minRoInGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRoInGroup = this._minRoInGroup;
    }
    if (this._replicationDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationDelayTime = this._replicationDelayTime;
    }
    if (this._roGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roGroupName = this._roGroupName;
    }
    if (this._roMaxDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.roMaxDelayTime = this._roMaxDelayTime;
    }
    if (this._roOfflineDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.roOfflineDelay = this._roOfflineDelay;
    }
    if (this._weightMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightMode = this._weightMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlRoGroupRoGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minRoInGroup = undefined;
      this._replicationDelayTime = undefined;
      this._roGroupName = undefined;
      this._roMaxDelayTime = undefined;
      this._roOfflineDelay = undefined;
      this._weightMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minRoInGroup = value.minRoInGroup;
      this._replicationDelayTime = value.replicationDelayTime;
      this._roGroupName = value.roGroupName;
      this._roMaxDelayTime = value.roMaxDelayTime;
      this._roOfflineDelay = value.roOfflineDelay;
      this._weightMode = value.weightMode;
    }
  }

  // min_ro_in_group - computed: false, optional: true, required: false
  private _minRoInGroup?: number; 
  public get minRoInGroup() {
    return this.getNumberAttribute('min_ro_in_group');
  }
  public set minRoInGroup(value: number) {
    this._minRoInGroup = value;
  }
  public resetMinRoInGroup() {
    this._minRoInGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRoInGroupInput() {
    return this._minRoInGroup;
  }

  // replication_delay_time - computed: false, optional: true, required: false
  private _replicationDelayTime?: number; 
  public get replicationDelayTime() {
    return this.getNumberAttribute('replication_delay_time');
  }
  public set replicationDelayTime(value: number) {
    this._replicationDelayTime = value;
  }
  public resetReplicationDelayTime() {
    this._replicationDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationDelayTimeInput() {
    return this._replicationDelayTime;
  }

  // ro_group_name - computed: false, optional: true, required: false
  private _roGroupName?: string; 
  public get roGroupName() {
    return this.getStringAttribute('ro_group_name');
  }
  public set roGroupName(value: string) {
    this._roGroupName = value;
  }
  public resetRoGroupName() {
    this._roGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roGroupNameInput() {
    return this._roGroupName;
  }

  // ro_max_delay_time - computed: false, optional: true, required: false
  private _roMaxDelayTime?: number; 
  public get roMaxDelayTime() {
    return this.getNumberAttribute('ro_max_delay_time');
  }
  public set roMaxDelayTime(value: number) {
    this._roMaxDelayTime = value;
  }
  public resetRoMaxDelayTime() {
    this._roMaxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roMaxDelayTimeInput() {
    return this._roMaxDelayTime;
  }

  // ro_offline_delay - computed: false, optional: true, required: false
  private _roOfflineDelay?: number; 
  public get roOfflineDelay() {
    return this.getNumberAttribute('ro_offline_delay');
  }
  public set roOfflineDelay(value: number) {
    this._roOfflineDelay = value;
  }
  public resetRoOfflineDelay() {
    this._roOfflineDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roOfflineDelayInput() {
    return this._roOfflineDelay;
  }

  // weight_mode - computed: false, optional: true, required: false
  private _weightMode?: string; 
  public get weightMode() {
    return this.getStringAttribute('weight_mode');
  }
  public set weightMode(value: string) {
    this._weightMode = value;
  }
  public resetWeightMode() {
    this._weightMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightModeInput() {
    return this._weightMode;
  }
}
export interface MysqlRoGroupRoWeightValues {
  /**
  * RO instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#instance_id MysqlRoGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Weights. The value range is [0, 100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#weight MysqlRoGroup#weight}
  */
  readonly weight: number;
}

export function mysqlRoGroupRoWeightValuesToTerraform(struct?: MysqlRoGroupRoWeightValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function mysqlRoGroupRoWeightValuesToHclTerraform(struct?: MysqlRoGroupRoWeightValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlRoGroupRoWeightValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlRoGroupRoWeightValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlRoGroupRoWeightValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._weight = value.weight;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class MysqlRoGroupRoWeightValuesList extends cdktf.ComplexList {
  public internalValue? : MysqlRoGroupRoWeightValues[] | cdktf.IResolvable

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
  public get(index: number): MysqlRoGroupRoWeightValuesOutputReference {
    return new MysqlRoGroupRoWeightValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group tencentcloud_mysql_ro_group}
*/
export class MysqlRoGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_ro_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlRoGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlRoGroup to import
  * @param importFromId The id of the existing MysqlRoGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlRoGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_ro_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_ro_group tencentcloud_mysql_ro_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlRoGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlRoGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_ro_group',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isBalanceRoLoad = config.isBalanceRoLoad;
    this._roGroupId = config.roGroupId;
    this._roGroupInfo.internalValue = config.roGroupInfo;
    this._roWeightValues.internalValue = config.roWeightValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_balance_ro_load - computed: false, optional: true, required: false
  private _isBalanceRoLoad?: number; 
  public get isBalanceRoLoad() {
    return this.getNumberAttribute('is_balance_ro_load');
  }
  public set isBalanceRoLoad(value: number) {
    this._isBalanceRoLoad = value;
  }
  public resetIsBalanceRoLoad() {
    this._isBalanceRoLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBalanceRoLoadInput() {
    return this._isBalanceRoLoad;
  }

  // ro_group_id - computed: false, optional: false, required: true
  private _roGroupId?: string; 
  public get roGroupId() {
    return this.getStringAttribute('ro_group_id');
  }
  public set roGroupId(value: string) {
    this._roGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roGroupIdInput() {
    return this._roGroupId;
  }

  // ro_group_info - computed: false, optional: true, required: false
  private _roGroupInfo = new MysqlRoGroupRoGroupInfoOutputReference(this, "ro_group_info");
  public get roGroupInfo() {
    return this._roGroupInfo;
  }
  public putRoGroupInfo(value: MysqlRoGroupRoGroupInfo) {
    this._roGroupInfo.internalValue = value;
  }
  public resetRoGroupInfo() {
    this._roGroupInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roGroupInfoInput() {
    return this._roGroupInfo.internalValue;
  }

  // ro_weight_values - computed: false, optional: true, required: false
  private _roWeightValues = new MysqlRoGroupRoWeightValuesList(this, "ro_weight_values", false);
  public get roWeightValues() {
    return this._roWeightValues;
  }
  public putRoWeightValues(value: MysqlRoGroupRoWeightValues[] | cdktf.IResolvable) {
    this._roWeightValues.internalValue = value;
  }
  public resetRoWeightValues() {
    this._roWeightValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roWeightValuesInput() {
    return this._roWeightValues.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_balance_ro_load: cdktf.numberToTerraform(this._isBalanceRoLoad),
      ro_group_id: cdktf.stringToTerraform(this._roGroupId),
      ro_group_info: mysqlRoGroupRoGroupInfoToTerraform(this._roGroupInfo.internalValue),
      ro_weight_values: cdktf.listMapper(mysqlRoGroupRoWeightValuesToTerraform, true)(this._roWeightValues.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_balance_ro_load: {
        value: cdktf.numberToHclTerraform(this._isBalanceRoLoad),
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
      ro_group_info: {
        value: mysqlRoGroupRoGroupInfoToHclTerraform(this._roGroupInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlRoGroupRoGroupInfoList",
      },
      ro_weight_values: {
        value: cdktf.listMapperHcl(mysqlRoGroupRoWeightValuesToHclTerraform, true)(this._roWeightValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlRoGroupRoWeightValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
