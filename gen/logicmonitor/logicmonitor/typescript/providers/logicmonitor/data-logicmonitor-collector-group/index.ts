// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorCollectorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#auto_balance DataLogicmonitorCollectorGroup#auto_balance}
  */
  readonly autoBalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#auto_balance_instance_count_threshold DataLogicmonitorCollectorGroup#auto_balance_instance_count_threshold}
  */
  readonly autoBalanceInstanceCountThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#auto_balance_strategy DataLogicmonitorCollectorGroup#auto_balance_strategy}
  */
  readonly autoBalanceStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#create_on DataLogicmonitorCollectorGroup#create_on}
  */
  readonly createOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#custom_properties DataLogicmonitorCollectorGroup#custom_properties}
  */
  readonly customProperties?: DataLogicmonitorCollectorGroupCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#description DataLogicmonitorCollectorGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#filter DataLogicmonitorCollectorGroup#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#id DataLogicmonitorCollectorGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#name DataLogicmonitorCollectorGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#num_of_collectors DataLogicmonitorCollectorGroup#num_of_collectors}
  */
  readonly numOfCollectors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#user_permission DataLogicmonitorCollectorGroup#user_permission}
  */
  readonly userPermission?: string;
  /**
  * highest_priority_collector_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#highest_priority_collector_status DataLogicmonitorCollectorGroup#highest_priority_collector_status}
  */
  readonly highestPriorityCollectorStatus?: DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus[] | cdktf.IResolvable;
}
export interface DataLogicmonitorCollectorGroupCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#name DataLogicmonitorCollectorGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#value DataLogicmonitorCollectorGroup#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorCollectorGroupCustomPropertiesToTerraform(struct?: DataLogicmonitorCollectorGroupCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorCollectorGroupCustomPropertiesToHclTerraform(struct?: DataLogicmonitorCollectorGroupCustomProperties | cdktf.IResolvable): any {
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

export class DataLogicmonitorCollectorGroupCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorCollectorGroupCustomProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLogicmonitorCollectorGroupCustomProperties | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataLogicmonitorCollectorGroupCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorCollectorGroupCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorCollectorGroupCustomPropertiesOutputReference {
    return new DataLogicmonitorCollectorGroupCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus {
}

export function dataLogicmonitorCollectorGroupHighestPriorityCollectorStatusToTerraform(struct?: DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogicmonitorCollectorGroupHighestPriorityCollectorStatusToHclTerraform(struct?: DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogicmonitorCollectorGroupHighestPriorityCollectorStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // acked - computed: true, optional: false, required: false
  public get acked() {
    return this.getBooleanAttribute('acked');
  }

  // in_s_d_t - computed: true, optional: false, required: false
  public get inSDT() {
    return this.getBooleanAttribute('in_s_d_t');
  }

  // is_down - computed: true, optional: false, required: false
  public get isDown() {
    return this.getBooleanAttribute('is_down');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class DataLogicmonitorCollectorGroupHighestPriorityCollectorStatusList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorCollectorGroupHighestPriorityCollectorStatusOutputReference {
    return new DataLogicmonitorCollectorGroupHighestPriorityCollectorStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group logicmonitor_collector_group}
*/
export class DataLogicmonitorCollectorGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_collector_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorCollectorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorCollectorGroup to import
  * @param importFromId The id of the existing DataLogicmonitorCollectorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorCollectorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_collector_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector_group logicmonitor_collector_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorCollectorGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorCollectorGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_collector_group',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25',
        providerVersionConstraint: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoBalance = config.autoBalance;
    this._autoBalanceInstanceCountThreshold = config.autoBalanceInstanceCountThreshold;
    this._autoBalanceStrategy = config.autoBalanceStrategy;
    this._createOn = config.createOn;
    this._customProperties.internalValue = config.customProperties;
    this._description = config.description;
    this._filter = config.filter;
    this._id = config.id;
    this._name = config.name;
    this._numOfCollectors = config.numOfCollectors;
    this._userPermission = config.userPermission;
    this._highestPriorityCollectorStatus.internalValue = config.highestPriorityCollectorStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_balance - computed: false, optional: true, required: false
  private _autoBalance?: boolean | cdktf.IResolvable; 
  public get autoBalance() {
    return this.getBooleanAttribute('auto_balance');
  }
  public set autoBalance(value: boolean | cdktf.IResolvable) {
    this._autoBalance = value;
  }
  public resetAutoBalance() {
    this._autoBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalanceInput() {
    return this._autoBalance;
  }

  // auto_balance_instance_count_threshold - computed: false, optional: true, required: false
  private _autoBalanceInstanceCountThreshold?: number; 
  public get autoBalanceInstanceCountThreshold() {
    return this.getNumberAttribute('auto_balance_instance_count_threshold');
  }
  public set autoBalanceInstanceCountThreshold(value: number) {
    this._autoBalanceInstanceCountThreshold = value;
  }
  public resetAutoBalanceInstanceCountThreshold() {
    this._autoBalanceInstanceCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalanceInstanceCountThresholdInput() {
    return this._autoBalanceInstanceCountThreshold;
  }

  // auto_balance_strategy - computed: false, optional: true, required: false
  private _autoBalanceStrategy?: string; 
  public get autoBalanceStrategy() {
    return this.getStringAttribute('auto_balance_strategy');
  }
  public set autoBalanceStrategy(value: string) {
    this._autoBalanceStrategy = value;
  }
  public resetAutoBalanceStrategy() {
    this._autoBalanceStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalanceStrategyInput() {
    return this._autoBalanceStrategy;
  }

  // create_on - computed: false, optional: true, required: false
  private _createOn?: number; 
  public get createOn() {
    return this.getNumberAttribute('create_on');
  }
  public set createOn(value: number) {
    this._createOn = value;
  }
  public resetCreateOn() {
    this._createOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOnInput() {
    return this._createOn;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new DataLogicmonitorCollectorGroupCustomPropertiesList(this, "custom_properties", false);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DataLogicmonitorCollectorGroupCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // num_of_collectors - computed: false, optional: true, required: false
  private _numOfCollectors?: number; 
  public get numOfCollectors() {
    return this.getNumberAttribute('num_of_collectors');
  }
  public set numOfCollectors(value: number) {
    this._numOfCollectors = value;
  }
  public resetNumOfCollectors() {
    this._numOfCollectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfCollectorsInput() {
    return this._numOfCollectors;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // highest_priority_collector_status - computed: false, optional: true, required: false
  private _highestPriorityCollectorStatus = new DataLogicmonitorCollectorGroupHighestPriorityCollectorStatusList(this, "highest_priority_collector_status", false);
  public get highestPriorityCollectorStatus() {
    return this._highestPriorityCollectorStatus;
  }
  public putHighestPriorityCollectorStatus(value: DataLogicmonitorCollectorGroupHighestPriorityCollectorStatus[] | cdktf.IResolvable) {
    this._highestPriorityCollectorStatus.internalValue = value;
  }
  public resetHighestPriorityCollectorStatus() {
    this._highestPriorityCollectorStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highestPriorityCollectorStatusInput() {
    return this._highestPriorityCollectorStatus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_balance: cdktf.booleanToTerraform(this._autoBalance),
      auto_balance_instance_count_threshold: cdktf.numberToTerraform(this._autoBalanceInstanceCountThreshold),
      auto_balance_strategy: cdktf.stringToTerraform(this._autoBalanceStrategy),
      create_on: cdktf.numberToTerraform(this._createOn),
      custom_properties: cdktf.listMapper(dataLogicmonitorCollectorGroupCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_of_collectors: cdktf.numberToTerraform(this._numOfCollectors),
      user_permission: cdktf.stringToTerraform(this._userPermission),
      highest_priority_collector_status: cdktf.listMapper(dataLogicmonitorCollectorGroupHighestPriorityCollectorStatusToTerraform, true)(this._highestPriorityCollectorStatus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_balance: {
        value: cdktf.booleanToHclTerraform(this._autoBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_balance_instance_count_threshold: {
        value: cdktf.numberToHclTerraform(this._autoBalanceInstanceCountThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_balance_strategy: {
        value: cdktf.stringToHclTerraform(this._autoBalanceStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_on: {
        value: cdktf.numberToHclTerraform(this._createOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorCollectorGroupCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorCollectorGroupCustomPropertiesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_of_collectors: {
        value: cdktf.numberToHclTerraform(this._numOfCollectors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      highest_priority_collector_status: {
        value: cdktf.listMapperHcl(dataLogicmonitorCollectorGroupHighestPriorityCollectorStatusToHclTerraform, true)(this._highestPriorityCollectorStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorCollectorGroupHighestPriorityCollectorStatusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
