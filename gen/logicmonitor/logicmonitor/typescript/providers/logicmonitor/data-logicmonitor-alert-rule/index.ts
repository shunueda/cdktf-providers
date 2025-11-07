// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorAlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#datapoint DataLogicmonitorAlertRule#datapoint}
  */
  readonly datapoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#datasource DataLogicmonitorAlertRule#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#device_groups DataLogicmonitorAlertRule#device_groups}
  */
  readonly deviceGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#devices DataLogicmonitorAlertRule#devices}
  */
  readonly devices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#escalating_chain DataLogicmonitorAlertRule#escalating_chain}
  */
  readonly escalatingChain?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#escalating_chain_id DataLogicmonitorAlertRule#escalating_chain_id}
  */
  readonly escalatingChainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#escalation_interval DataLogicmonitorAlertRule#escalation_interval}
  */
  readonly escalationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#filter DataLogicmonitorAlertRule#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#id DataLogicmonitorAlertRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#instance DataLogicmonitorAlertRule#instance}
  */
  readonly instance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#level_str DataLogicmonitorAlertRule#level_str}
  */
  readonly levelStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#name DataLogicmonitorAlertRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#priority DataLogicmonitorAlertRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#resource_properties DataLogicmonitorAlertRule#resource_properties}
  */
  readonly resourceProperties?: DataLogicmonitorAlertRuleResourceProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#send_anomaly_suppressed_alert DataLogicmonitorAlertRule#send_anomaly_suppressed_alert}
  */
  readonly sendAnomalySuppressedAlert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#suppress_alert_ack_sdt DataLogicmonitorAlertRule#suppress_alert_ack_sdt}
  */
  readonly suppressAlertAckSdt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#suppress_alert_clear DataLogicmonitorAlertRule#suppress_alert_clear}
  */
  readonly suppressAlertClear?: boolean | cdktf.IResolvable;
}
export interface DataLogicmonitorAlertRuleResourceProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#name DataLogicmonitorAlertRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#value DataLogicmonitorAlertRule#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorAlertRuleResourcePropertiesToTerraform(struct?: DataLogicmonitorAlertRuleResourceProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorAlertRuleResourcePropertiesToHclTerraform(struct?: DataLogicmonitorAlertRuleResourceProperties | cdktf.IResolvable): any {
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

export class DataLogicmonitorAlertRuleResourcePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorAlertRuleResourceProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLogicmonitorAlertRuleResourceProperties | cdktf.IResolvable | undefined) {
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

export class DataLogicmonitorAlertRuleResourcePropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorAlertRuleResourceProperties[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorAlertRuleResourcePropertiesOutputReference {
    return new DataLogicmonitorAlertRuleResourcePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule logicmonitor_alert_rule}
*/
export class DataLogicmonitorAlertRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorAlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorAlertRule to import
  * @param importFromId The id of the existing DataLogicmonitorAlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorAlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/alert_rule logicmonitor_alert_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorAlertRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorAlertRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datapoint = config.datapoint;
    this._datasource = config.datasource;
    this._deviceGroups = config.deviceGroups;
    this._devices = config.devices;
    this._escalatingChain = config.escalatingChain;
    this._escalatingChainId = config.escalatingChainId;
    this._escalationInterval = config.escalationInterval;
    this._filter = config.filter;
    this._id = config.id;
    this._instance = config.instance;
    this._levelStr = config.levelStr;
    this._name = config.name;
    this._priority = config.priority;
    this._resourceProperties.internalValue = config.resourceProperties;
    this._sendAnomalySuppressedAlert = config.sendAnomalySuppressedAlert;
    this._suppressAlertAckSdt = config.suppressAlertAckSdt;
    this._suppressAlertClear = config.suppressAlertClear;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datapoint - computed: false, optional: true, required: false
  private _datapoint?: string; 
  public get datapoint() {
    return this.getStringAttribute('datapoint');
  }
  public set datapoint(value: string) {
    this._datapoint = value;
  }
  public resetDatapoint() {
    this._datapoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapointInput() {
    return this._datapoint;
  }

  // datasource - computed: false, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups?: string[]; 
  public get deviceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('device_groups'));
  }
  public set deviceGroups(value: string[]) {
    this._deviceGroups = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return cdktf.Fn.tolist(this.getListAttribute('devices'));
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // escalating_chain - computed: false, optional: true, required: false
  private _escalatingChain?: { [key: string]: string }; 
  public get escalatingChain() {
    return this.getStringMapAttribute('escalating_chain');
  }
  public set escalatingChain(value: { [key: string]: string }) {
    this._escalatingChain = value;
  }
  public resetEscalatingChain() {
    this._escalatingChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalatingChainInput() {
    return this._escalatingChain;
  }

  // escalating_chain_id - computed: false, optional: true, required: false
  private _escalatingChainId?: number; 
  public get escalatingChainId() {
    return this.getNumberAttribute('escalating_chain_id');
  }
  public set escalatingChainId(value: number) {
    this._escalatingChainId = value;
  }
  public resetEscalatingChainId() {
    this._escalatingChainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalatingChainIdInput() {
    return this._escalatingChainId;
  }

  // escalation_interval - computed: false, optional: true, required: false
  private _escalationInterval?: number; 
  public get escalationInterval() {
    return this.getNumberAttribute('escalation_interval');
  }
  public set escalationInterval(value: number) {
    this._escalationInterval = value;
  }
  public resetEscalationInterval() {
    this._escalationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationIntervalInput() {
    return this._escalationInterval;
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

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // level_str - computed: false, optional: true, required: false
  private _levelStr?: string; 
  public get levelStr() {
    return this.getStringAttribute('level_str');
  }
  public set levelStr(value: string) {
    this._levelStr = value;
  }
  public resetLevelStr() {
    this._levelStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelStrInput() {
    return this._levelStr;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // resource_properties - computed: false, optional: true, required: false
  private _resourceProperties = new DataLogicmonitorAlertRuleResourcePropertiesList(this, "resource_properties", false);
  public get resourceProperties() {
    return this._resourceProperties;
  }
  public putResourceProperties(value: DataLogicmonitorAlertRuleResourceProperties[] | cdktf.IResolvable) {
    this._resourceProperties.internalValue = value;
  }
  public resetResourceProperties() {
    this._resourceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePropertiesInput() {
    return this._resourceProperties.internalValue;
  }

  // send_anomaly_suppressed_alert - computed: false, optional: true, required: false
  private _sendAnomalySuppressedAlert?: boolean | cdktf.IResolvable; 
  public get sendAnomalySuppressedAlert() {
    return this.getBooleanAttribute('send_anomaly_suppressed_alert');
  }
  public set sendAnomalySuppressedAlert(value: boolean | cdktf.IResolvable) {
    this._sendAnomalySuppressedAlert = value;
  }
  public resetSendAnomalySuppressedAlert() {
    this._sendAnomalySuppressedAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAnomalySuppressedAlertInput() {
    return this._sendAnomalySuppressedAlert;
  }

  // suppress_alert_ack_sdt - computed: false, optional: true, required: false
  private _suppressAlertAckSdt?: boolean | cdktf.IResolvable; 
  public get suppressAlertAckSdt() {
    return this.getBooleanAttribute('suppress_alert_ack_sdt');
  }
  public set suppressAlertAckSdt(value: boolean | cdktf.IResolvable) {
    this._suppressAlertAckSdt = value;
  }
  public resetSuppressAlertAckSdt() {
    this._suppressAlertAckSdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAlertAckSdtInput() {
    return this._suppressAlertAckSdt;
  }

  // suppress_alert_clear - computed: false, optional: true, required: false
  private _suppressAlertClear?: boolean | cdktf.IResolvable; 
  public get suppressAlertClear() {
    return this.getBooleanAttribute('suppress_alert_clear');
  }
  public set suppressAlertClear(value: boolean | cdktf.IResolvable) {
    this._suppressAlertClear = value;
  }
  public resetSuppressAlertClear() {
    this._suppressAlertClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAlertClearInput() {
    return this._suppressAlertClear;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datapoint: cdktf.stringToTerraform(this._datapoint),
      datasource: cdktf.stringToTerraform(this._datasource),
      device_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceGroups),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      escalating_chain: cdktf.hashMapper(cdktf.stringToTerraform)(this._escalatingChain),
      escalating_chain_id: cdktf.numberToTerraform(this._escalatingChainId),
      escalation_interval: cdktf.numberToTerraform(this._escalationInterval),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.numberToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      level_str: cdktf.stringToTerraform(this._levelStr),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      resource_properties: cdktf.listMapper(dataLogicmonitorAlertRuleResourcePropertiesToTerraform, false)(this._resourceProperties.internalValue),
      send_anomaly_suppressed_alert: cdktf.booleanToTerraform(this._sendAnomalySuppressedAlert),
      suppress_alert_ack_sdt: cdktf.booleanToTerraform(this._suppressAlertAckSdt),
      suppress_alert_clear: cdktf.booleanToTerraform(this._suppressAlertClear),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datapoint: {
        value: cdktf.stringToHclTerraform(this._datapoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasource: {
        value: cdktf.stringToHclTerraform(this._datasource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      escalating_chain: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._escalatingChain),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      escalating_chain_id: {
        value: cdktf.numberToHclTerraform(this._escalatingChainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      escalation_interval: {
        value: cdktf.numberToHclTerraform(this._escalationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level_str: {
        value: cdktf.stringToHclTerraform(this._levelStr),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorAlertRuleResourcePropertiesToHclTerraform, false)(this._resourceProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorAlertRuleResourcePropertiesList",
      },
      send_anomaly_suppressed_alert: {
        value: cdktf.booleanToHclTerraform(this._sendAnomalySuppressedAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_alert_ack_sdt: {
        value: cdktf.booleanToHclTerraform(this._suppressAlertAckSdt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_alert_clear: {
        value: cdktf.booleanToHclTerraform(this._suppressAlertClear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
