// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutomationtriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#dynamic_sort_subtable SystemAutomationtrigger#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#event_type SystemAutomationtrigger#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#id SystemAutomationtrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#logid SystemAutomationtrigger#logid}
  */
  readonly logid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#name SystemAutomationtrigger#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#trigger_day SystemAutomationtrigger#trigger_day}
  */
  readonly triggerDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#trigger_frequency SystemAutomationtrigger#trigger_frequency}
  */
  readonly triggerFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#trigger_hour SystemAutomationtrigger#trigger_hour}
  */
  readonly triggerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#trigger_minute SystemAutomationtrigger#trigger_minute}
  */
  readonly triggerMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#trigger_type SystemAutomationtrigger#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#trigger_weekday SystemAutomationtrigger#trigger_weekday}
  */
  readonly triggerWeekday?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#fields SystemAutomationtrigger#fields}
  */
  readonly fields?: SystemAutomationtriggerFields[] | cdktf.IResolvable;
}
export interface SystemAutomationtriggerFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#id SystemAutomationtrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#name SystemAutomationtrigger#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#value SystemAutomationtrigger#value}
  */
  readonly value?: string;
}

export function systemAutomationtriggerFieldsToTerraform(struct?: SystemAutomationtriggerFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function systemAutomationtriggerFieldsToHclTerraform(struct?: SystemAutomationtriggerFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class SystemAutomationtriggerFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAutomationtriggerFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
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

  public set internalValue(value: SystemAutomationtriggerFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._value = value.value;
    }
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

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class SystemAutomationtriggerFieldsList extends cdktf.ComplexList {
  public internalValue? : SystemAutomationtriggerFields[] | cdktf.IResolvable

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
  public get(index: number): SystemAutomationtriggerFieldsOutputReference {
    return new SystemAutomationtriggerFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger fortiswitch_system_automationtrigger}
*/
export class SystemAutomationtrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_automationtrigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutomationtrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutomationtrigger to import
  * @param importFromId The id of the existing SystemAutomationtrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutomationtrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_automationtrigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_automationtrigger fortiswitch_system_automationtrigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutomationtriggerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAutomationtriggerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_automationtrigger',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
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
    this._eventType = config.eventType;
    this._id = config.id;
    this._logid = config.logid;
    this._name = config.name;
    this._triggerDay = config.triggerDay;
    this._triggerFrequency = config.triggerFrequency;
    this._triggerHour = config.triggerHour;
    this._triggerMinute = config.triggerMinute;
    this._triggerType = config.triggerType;
    this._triggerWeekday = config.triggerWeekday;
    this._fields.internalValue = config.fields;
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

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
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

  // logid - computed: true, optional: true, required: false
  private _logid?: string; 
  public get logid() {
    return this.getStringAttribute('logid');
  }
  public set logid(value: string) {
    this._logid = value;
  }
  public resetLogid() {
    this._logid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logidInput() {
    return this._logid;
  }

  // name - computed: true, optional: true, required: false
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

  // trigger_day - computed: true, optional: true, required: false
  private _triggerDay?: number; 
  public get triggerDay() {
    return this.getNumberAttribute('trigger_day');
  }
  public set triggerDay(value: number) {
    this._triggerDay = value;
  }
  public resetTriggerDay() {
    this._triggerDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDayInput() {
    return this._triggerDay;
  }

  // trigger_frequency - computed: true, optional: true, required: false
  private _triggerFrequency?: string; 
  public get triggerFrequency() {
    return this.getStringAttribute('trigger_frequency');
  }
  public set triggerFrequency(value: string) {
    this._triggerFrequency = value;
  }
  public resetTriggerFrequency() {
    this._triggerFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerFrequencyInput() {
    return this._triggerFrequency;
  }

  // trigger_hour - computed: true, optional: true, required: false
  private _triggerHour?: number; 
  public get triggerHour() {
    return this.getNumberAttribute('trigger_hour');
  }
  public set triggerHour(value: number) {
    this._triggerHour = value;
  }
  public resetTriggerHour() {
    this._triggerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerHourInput() {
    return this._triggerHour;
  }

  // trigger_minute - computed: true, optional: true, required: false
  private _triggerMinute?: number; 
  public get triggerMinute() {
    return this.getNumberAttribute('trigger_minute');
  }
  public set triggerMinute(value: number) {
    this._triggerMinute = value;
  }
  public resetTriggerMinute() {
    this._triggerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerMinuteInput() {
    return this._triggerMinute;
  }

  // trigger_type - computed: true, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // trigger_weekday - computed: true, optional: true, required: false
  private _triggerWeekday?: string; 
  public get triggerWeekday() {
    return this.getStringAttribute('trigger_weekday');
  }
  public set triggerWeekday(value: string) {
    this._triggerWeekday = value;
  }
  public resetTriggerWeekday() {
    this._triggerWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWeekdayInput() {
    return this._triggerWeekday;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new SystemAutomationtriggerFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: SystemAutomationtriggerFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      event_type: cdktf.stringToTerraform(this._eventType),
      id: cdktf.stringToTerraform(this._id),
      logid: cdktf.stringToTerraform(this._logid),
      name: cdktf.stringToTerraform(this._name),
      trigger_day: cdktf.numberToTerraform(this._triggerDay),
      trigger_frequency: cdktf.stringToTerraform(this._triggerFrequency),
      trigger_hour: cdktf.numberToTerraform(this._triggerHour),
      trigger_minute: cdktf.numberToTerraform(this._triggerMinute),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
      trigger_weekday: cdktf.stringToTerraform(this._triggerWeekday),
      fields: cdktf.listMapper(systemAutomationtriggerFieldsToTerraform, true)(this._fields.internalValue),
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
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
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
      logid: {
        value: cdktf.stringToHclTerraform(this._logid),
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
      trigger_day: {
        value: cdktf.numberToHclTerraform(this._triggerDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_frequency: {
        value: cdktf.stringToHclTerraform(this._triggerFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_hour: {
        value: cdktf.numberToHclTerraform(this._triggerHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_minute: {
        value: cdktf.numberToHclTerraform(this._triggerMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_weekday: {
        value: cdktf.stringToHclTerraform(this._triggerWeekday),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(systemAutomationtriggerFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAutomationtriggerFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
