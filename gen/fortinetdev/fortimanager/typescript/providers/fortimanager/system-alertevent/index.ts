// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAlerteventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#dynamic_sort_subtable SystemAlertevent#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#enable_generic_text SystemAlertevent#enable_generic_text}
  */
  readonly enableGenericText?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#enable_severity_filter SystemAlertevent#enable_severity_filter}
  */
  readonly enableSeverityFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#event_time_period SystemAlertevent#event_time_period}
  */
  readonly eventTimePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#generic_text SystemAlertevent#generic_text}
  */
  readonly genericText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#id SystemAlertevent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#name SystemAlertevent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#num_events SystemAlertevent#num_events}
  */
  readonly numEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#severity_filter SystemAlertevent#severity_filter}
  */
  readonly severityFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#severity_level_comp SystemAlertevent#severity_level_comp}
  */
  readonly severityLevelComp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#severity_level_logs SystemAlertevent#severity_level_logs}
  */
  readonly severityLevelLogs?: string[];
  /**
  * alert_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#alert_destination SystemAlertevent#alert_destination}
  */
  readonly alertDestination?: SystemAlerteventAlertDestination[] | cdktf.IResolvable;
}
export interface SystemAlerteventAlertDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#from SystemAlertevent#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#smtp_name SystemAlertevent#smtp_name}
  */
  readonly smtpName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#snmp_name SystemAlertevent#snmp_name}
  */
  readonly snmpName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#syslog_name SystemAlertevent#syslog_name}
  */
  readonly syslogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#to SystemAlertevent#to}
  */
  readonly to?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#type SystemAlertevent#type}
  */
  readonly type?: string;
}

export function systemAlerteventAlertDestinationToTerraform(struct?: SystemAlerteventAlertDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    smtp_name: cdktf.stringToTerraform(struct!.smtpName),
    snmp_name: cdktf.stringToTerraform(struct!.snmpName),
    syslog_name: cdktf.stringToTerraform(struct!.syslogName),
    to: cdktf.stringToTerraform(struct!.to),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemAlerteventAlertDestinationToHclTerraform(struct?: SystemAlerteventAlertDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_name: {
      value: cdktf.stringToHclTerraform(struct!.smtpName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_name: {
      value: cdktf.stringToHclTerraform(struct!.snmpName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_name: {
      value: cdktf.stringToHclTerraform(struct!.syslogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAlerteventAlertDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAlerteventAlertDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._smtpName !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpName = this._smtpName;
    }
    if (this._snmpName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpName = this._snmpName;
    }
    if (this._syslogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogName = this._syslogName;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAlerteventAlertDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._smtpName = undefined;
      this._snmpName = undefined;
      this._syslogName = undefined;
      this._to = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._smtpName = value.smtpName;
      this._snmpName = value.snmpName;
      this._syslogName = value.syslogName;
      this._to = value.to;
      this._type = value.type;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // smtp_name - computed: false, optional: true, required: false
  private _smtpName?: string; 
  public get smtpName() {
    return this.getStringAttribute('smtp_name');
  }
  public set smtpName(value: string) {
    this._smtpName = value;
  }
  public resetSmtpName() {
    this._smtpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpNameInput() {
    return this._smtpName;
  }

  // snmp_name - computed: false, optional: true, required: false
  private _snmpName?: string; 
  public get snmpName() {
    return this.getStringAttribute('snmp_name');
  }
  public set snmpName(value: string) {
    this._snmpName = value;
  }
  public resetSnmpName() {
    this._snmpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpNameInput() {
    return this._snmpName;
  }

  // syslog_name - computed: false, optional: true, required: false
  private _syslogName?: string; 
  public get syslogName() {
    return this.getStringAttribute('syslog_name');
  }
  public set syslogName(value: string) {
    this._syslogName = value;
  }
  public resetSyslogName() {
    this._syslogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogNameInput() {
    return this._syslogName;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SystemAlerteventAlertDestinationList extends cdktf.ComplexList {
  public internalValue? : SystemAlerteventAlertDestination[] | cdktf.IResolvable

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
  public get(index: number): SystemAlerteventAlertDestinationOutputReference {
    return new SystemAlerteventAlertDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent fortimanager_system_alertevent}
*/
export class SystemAlertevent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_alertevent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAlertevent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAlertevent to import
  * @param importFromId The id of the existing SystemAlertevent that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAlertevent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_alertevent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertevent fortimanager_system_alertevent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAlerteventConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAlerteventConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_alertevent',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._enableGenericText = config.enableGenericText;
    this._enableSeverityFilter = config.enableSeverityFilter;
    this._eventTimePeriod = config.eventTimePeriod;
    this._genericText = config.genericText;
    this._id = config.id;
    this._name = config.name;
    this._numEvents = config.numEvents;
    this._severityFilter = config.severityFilter;
    this._severityLevelComp = config.severityLevelComp;
    this._severityLevelLogs = config.severityLevelLogs;
    this._alertDestination.internalValue = config.alertDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // enable_generic_text - computed: true, optional: true, required: false
  private _enableGenericText?: string[]; 
  public get enableGenericText() {
    return cdktf.Fn.tolist(this.getListAttribute('enable_generic_text'));
  }
  public set enableGenericText(value: string[]) {
    this._enableGenericText = value;
  }
  public resetEnableGenericText() {
    this._enableGenericText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGenericTextInput() {
    return this._enableGenericText;
  }

  // enable_severity_filter - computed: true, optional: true, required: false
  private _enableSeverityFilter?: string[]; 
  public get enableSeverityFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('enable_severity_filter'));
  }
  public set enableSeverityFilter(value: string[]) {
    this._enableSeverityFilter = value;
  }
  public resetEnableSeverityFilter() {
    this._enableSeverityFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSeverityFilterInput() {
    return this._enableSeverityFilter;
  }

  // event_time_period - computed: true, optional: true, required: false
  private _eventTimePeriod?: string; 
  public get eventTimePeriod() {
    return this.getStringAttribute('event_time_period');
  }
  public set eventTimePeriod(value: string) {
    this._eventTimePeriod = value;
  }
  public resetEventTimePeriod() {
    this._eventTimePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimePeriodInput() {
    return this._eventTimePeriod;
  }

  // generic_text - computed: false, optional: true, required: false
  private _genericText?: string; 
  public get genericText() {
    return this.getStringAttribute('generic_text');
  }
  public set genericText(value: string) {
    this._genericText = value;
  }
  public resetGenericText() {
    this._genericText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericTextInput() {
    return this._genericText;
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

  // num_events - computed: true, optional: true, required: false
  private _numEvents?: string; 
  public get numEvents() {
    return this.getStringAttribute('num_events');
  }
  public set numEvents(value: string) {
    this._numEvents = value;
  }
  public resetNumEvents() {
    this._numEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numEventsInput() {
    return this._numEvents;
  }

  // severity_filter - computed: true, optional: true, required: false
  private _severityFilter?: string; 
  public get severityFilter() {
    return this.getStringAttribute('severity_filter');
  }
  public set severityFilter(value: string) {
    this._severityFilter = value;
  }
  public resetSeverityFilter() {
    this._severityFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityFilterInput() {
    return this._severityFilter;
  }

  // severity_level_comp - computed: true, optional: true, required: false
  private _severityLevelComp?: string[]; 
  public get severityLevelComp() {
    return cdktf.Fn.tolist(this.getListAttribute('severity_level_comp'));
  }
  public set severityLevelComp(value: string[]) {
    this._severityLevelComp = value;
  }
  public resetSeverityLevelComp() {
    this._severityLevelComp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelCompInput() {
    return this._severityLevelComp;
  }

  // severity_level_logs - computed: true, optional: true, required: false
  private _severityLevelLogs?: string[]; 
  public get severityLevelLogs() {
    return cdktf.Fn.tolist(this.getListAttribute('severity_level_logs'));
  }
  public set severityLevelLogs(value: string[]) {
    this._severityLevelLogs = value;
  }
  public resetSeverityLevelLogs() {
    this._severityLevelLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelLogsInput() {
    return this._severityLevelLogs;
  }

  // alert_destination - computed: false, optional: true, required: false
  private _alertDestination = new SystemAlerteventAlertDestinationList(this, "alert_destination", false);
  public get alertDestination() {
    return this._alertDestination;
  }
  public putAlertDestination(value: SystemAlerteventAlertDestination[] | cdktf.IResolvable) {
    this._alertDestination.internalValue = value;
  }
  public resetAlertDestination() {
    this._alertDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDestinationInput() {
    return this._alertDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enable_generic_text: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enableGenericText),
      enable_severity_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enableSeverityFilter),
      event_time_period: cdktf.stringToTerraform(this._eventTimePeriod),
      generic_text: cdktf.stringToTerraform(this._genericText),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_events: cdktf.stringToTerraform(this._numEvents),
      severity_filter: cdktf.stringToTerraform(this._severityFilter),
      severity_level_comp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityLevelComp),
      severity_level_logs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityLevelLogs),
      alert_destination: cdktf.listMapper(systemAlerteventAlertDestinationToTerraform, true)(this._alertDestination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_generic_text: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enableGenericText),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_severity_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enableSeverityFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      event_time_period: {
        value: cdktf.stringToHclTerraform(this._eventTimePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_text: {
        value: cdktf.stringToHclTerraform(this._genericText),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_events: {
        value: cdktf.stringToHclTerraform(this._numEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_filter: {
        value: cdktf.stringToHclTerraform(this._severityFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_level_comp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityLevelComp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      severity_level_logs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityLevelLogs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_destination: {
        value: cdktf.listMapperHcl(systemAlerteventAlertDestinationToHclTerraform, true)(this._alertDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAlerteventAlertDestinationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
