// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverConfigInstanceRoGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * 0-user-defined weight (adjusted according to WeightPairs), 1-system automatically assigns weight (WeightPairs is invalid), the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#auto_weight SqlserverConfigInstanceRoGroup#auto_weight}
  */
  readonly autoWeight?: number;
  /**
  * 0-do not rebalance the load, 1-rebalance the load, the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#balance_weight SqlserverConfigInstanceRoGroup#balance_weight}
  */
  readonly balanceWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#id SqlserverConfigInstanceRoGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#instance_id SqlserverConfigInstanceRoGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to enable timeout culling function. 0- Disable the culling function. 1- Enable the culling function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#is_offline_delay SqlserverConfigInstanceRoGroup#is_offline_delay}
  */
  readonly isOfflineDelay?: number;
  /**
  * After the timeout removal function is enabled, the number of read-only copies retained by the read-only group at least, if this parameter is not filled, it will not be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#min_read_only_in_group SqlserverConfigInstanceRoGroup#min_read_only_in_group}
  */
  readonly minReadOnlyInGroup?: number;
  /**
  * Read-only group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#read_only_group_id SqlserverConfigInstanceRoGroup#read_only_group_id}
  */
  readonly readOnlyGroupId: string;
  /**
  * Read-only group name. If this parameter is not specified, it is not modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#read_only_group_name SqlserverConfigInstanceRoGroup#read_only_group_name}
  */
  readonly readOnlyGroupName?: string;
  /**
  * After the timeout elimination function is enabled, the timeout threshold used, if this parameter is not filled, it will not be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#read_only_max_delay_time SqlserverConfigInstanceRoGroup#read_only_max_delay_time}
  */
  readonly readOnlyMaxDelayTime?: number;
  /**
  * weight_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#weight_pairs SqlserverConfigInstanceRoGroup#weight_pairs}
  */
  readonly weightPairs?: SqlserverConfigInstanceRoGroupWeightPairs[] | cdktf.IResolvable;
}
export interface SqlserverConfigInstanceRoGroupWeightPairs {
  /**
  * Read-only instance ID, in the format: mssqlro-3l3fgqn7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#read_only_instance_id SqlserverConfigInstanceRoGroup#read_only_instance_id}
  */
  readonly readOnlyInstanceId: string;
  /**
  * Read-only instance weight, the range is 0-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#read_only_weight SqlserverConfigInstanceRoGroup#read_only_weight}
  */
  readonly readOnlyWeight: number;
}

export function sqlserverConfigInstanceRoGroupWeightPairsToTerraform(struct?: SqlserverConfigInstanceRoGroupWeightPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only_instance_id: cdktf.stringToTerraform(struct!.readOnlyInstanceId),
    read_only_weight: cdktf.numberToTerraform(struct!.readOnlyWeight),
  }
}


export function sqlserverConfigInstanceRoGroupWeightPairsToHclTerraform(struct?: SqlserverConfigInstanceRoGroupWeightPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.readOnlyInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_weight: {
      value: cdktf.numberToHclTerraform(struct!.readOnlyWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverConfigInstanceRoGroupWeightPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverConfigInstanceRoGroupWeightPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnlyInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyInstanceId = this._readOnlyInstanceId;
    }
    if (this._readOnlyWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyWeight = this._readOnlyWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverConfigInstanceRoGroupWeightPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnlyInstanceId = undefined;
      this._readOnlyWeight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnlyInstanceId = value.readOnlyInstanceId;
      this._readOnlyWeight = value.readOnlyWeight;
    }
  }

  // read_only_instance_id - computed: false, optional: false, required: true
  private _readOnlyInstanceId?: string; 
  public get readOnlyInstanceId() {
    return this.getStringAttribute('read_only_instance_id');
  }
  public set readOnlyInstanceId(value: string) {
    this._readOnlyInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInstanceIdInput() {
    return this._readOnlyInstanceId;
  }

  // read_only_weight - computed: false, optional: false, required: true
  private _readOnlyWeight?: number; 
  public get readOnlyWeight() {
    return this.getNumberAttribute('read_only_weight');
  }
  public set readOnlyWeight(value: number) {
    this._readOnlyWeight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyWeightInput() {
    return this._readOnlyWeight;
  }
}

export class SqlserverConfigInstanceRoGroupWeightPairsList extends cdktf.ComplexList {
  public internalValue? : SqlserverConfigInstanceRoGroupWeightPairs[] | cdktf.IResolvable

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
  public get(index: number): SqlserverConfigInstanceRoGroupWeightPairsOutputReference {
    return new SqlserverConfigInstanceRoGroupWeightPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group tencentcloud_sqlserver_config_instance_ro_group}
*/
export class SqlserverConfigInstanceRoGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_config_instance_ro_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverConfigInstanceRoGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverConfigInstanceRoGroup to import
  * @param importFromId The id of the existing SqlserverConfigInstanceRoGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverConfigInstanceRoGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_config_instance_ro_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/sqlserver_config_instance_ro_group tencentcloud_sqlserver_config_instance_ro_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverConfigInstanceRoGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverConfigInstanceRoGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_config_instance_ro_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoWeight = config.autoWeight;
    this._balanceWeight = config.balanceWeight;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isOfflineDelay = config.isOfflineDelay;
    this._minReadOnlyInGroup = config.minReadOnlyInGroup;
    this._readOnlyGroupId = config.readOnlyGroupId;
    this._readOnlyGroupName = config.readOnlyGroupName;
    this._readOnlyMaxDelayTime = config.readOnlyMaxDelayTime;
    this._weightPairs.internalValue = config.weightPairs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_weight - computed: false, optional: true, required: false
  private _autoWeight?: number; 
  public get autoWeight() {
    return this.getNumberAttribute('auto_weight');
  }
  public set autoWeight(value: number) {
    this._autoWeight = value;
  }
  public resetAutoWeight() {
    this._autoWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoWeightInput() {
    return this._autoWeight;
  }

  // balance_weight - computed: false, optional: true, required: false
  private _balanceWeight?: number; 
  public get balanceWeight() {
    return this.getNumberAttribute('balance_weight');
  }
  public set balanceWeight(value: number) {
    this._balanceWeight = value;
  }
  public resetBalanceWeight() {
    this._balanceWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceWeightInput() {
    return this._balanceWeight;
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

  // is_offline_delay - computed: false, optional: true, required: false
  private _isOfflineDelay?: number; 
  public get isOfflineDelay() {
    return this.getNumberAttribute('is_offline_delay');
  }
  public set isOfflineDelay(value: number) {
    this._isOfflineDelay = value;
  }
  public resetIsOfflineDelay() {
    this._isOfflineDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOfflineDelayInput() {
    return this._isOfflineDelay;
  }

  // min_read_only_in_group - computed: false, optional: true, required: false
  private _minReadOnlyInGroup?: number; 
  public get minReadOnlyInGroup() {
    return this.getNumberAttribute('min_read_only_in_group');
  }
  public set minReadOnlyInGroup(value: number) {
    this._minReadOnlyInGroup = value;
  }
  public resetMinReadOnlyInGroup() {
    this._minReadOnlyInGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadOnlyInGroupInput() {
    return this._minReadOnlyInGroup;
  }

  // read_only_group_id - computed: false, optional: false, required: true
  private _readOnlyGroupId?: string; 
  public get readOnlyGroupId() {
    return this.getStringAttribute('read_only_group_id');
  }
  public set readOnlyGroupId(value: string) {
    this._readOnlyGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupIdInput() {
    return this._readOnlyGroupId;
  }

  // read_only_group_name - computed: false, optional: true, required: false
  private _readOnlyGroupName?: string; 
  public get readOnlyGroupName() {
    return this.getStringAttribute('read_only_group_name');
  }
  public set readOnlyGroupName(value: string) {
    this._readOnlyGroupName = value;
  }
  public resetReadOnlyGroupName() {
    this._readOnlyGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupNameInput() {
    return this._readOnlyGroupName;
  }

  // read_only_max_delay_time - computed: false, optional: true, required: false
  private _readOnlyMaxDelayTime?: number; 
  public get readOnlyMaxDelayTime() {
    return this.getNumberAttribute('read_only_max_delay_time');
  }
  public set readOnlyMaxDelayTime(value: number) {
    this._readOnlyMaxDelayTime = value;
  }
  public resetReadOnlyMaxDelayTime() {
    this._readOnlyMaxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyMaxDelayTimeInput() {
    return this._readOnlyMaxDelayTime;
  }

  // weight_pairs - computed: false, optional: true, required: false
  private _weightPairs = new SqlserverConfigInstanceRoGroupWeightPairsList(this, "weight_pairs", false);
  public get weightPairs() {
    return this._weightPairs;
  }
  public putWeightPairs(value: SqlserverConfigInstanceRoGroupWeightPairs[] | cdktf.IResolvable) {
    this._weightPairs.internalValue = value;
  }
  public resetWeightPairs() {
    this._weightPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightPairsInput() {
    return this._weightPairs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_weight: cdktf.numberToTerraform(this._autoWeight),
      balance_weight: cdktf.numberToTerraform(this._balanceWeight),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_offline_delay: cdktf.numberToTerraform(this._isOfflineDelay),
      min_read_only_in_group: cdktf.numberToTerraform(this._minReadOnlyInGroup),
      read_only_group_id: cdktf.stringToTerraform(this._readOnlyGroupId),
      read_only_group_name: cdktf.stringToTerraform(this._readOnlyGroupName),
      read_only_max_delay_time: cdktf.numberToTerraform(this._readOnlyMaxDelayTime),
      weight_pairs: cdktf.listMapper(sqlserverConfigInstanceRoGroupWeightPairsToTerraform, true)(this._weightPairs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_weight: {
        value: cdktf.numberToHclTerraform(this._autoWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      balance_weight: {
        value: cdktf.numberToHclTerraform(this._balanceWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      is_offline_delay: {
        value: cdktf.numberToHclTerraform(this._isOfflineDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_read_only_in_group: {
        value: cdktf.numberToHclTerraform(this._minReadOnlyInGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_only_group_id: {
        value: cdktf.stringToHclTerraform(this._readOnlyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_group_name: {
        value: cdktf.stringToHclTerraform(this._readOnlyGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_max_delay_time: {
        value: cdktf.numberToHclTerraform(this._readOnlyMaxDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_pairs: {
        value: cdktf.listMapperHcl(sqlserverConfigInstanceRoGroupWeightPairsToHclTerraform, true)(this._weightPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverConfigInstanceRoGroupWeightPairsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
