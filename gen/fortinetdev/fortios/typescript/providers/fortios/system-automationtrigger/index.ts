// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutomationtriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#description SystemAutomationtrigger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#dynamic_sort_subtable SystemAutomationtrigger#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#event_type SystemAutomationtrigger#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#fabric_event_name SystemAutomationtrigger#fabric_event_name}
  */
  readonly fabricEventName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#fabric_event_severity SystemAutomationtrigger#fabric_event_severity}
  */
  readonly fabricEventSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#faz_event_name SystemAutomationtrigger#faz_event_name}
  */
  readonly fazEventName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#faz_event_severity SystemAutomationtrigger#faz_event_severity}
  */
  readonly fazEventSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#faz_event_tags SystemAutomationtrigger#faz_event_tags}
  */
  readonly fazEventTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#get_all_tables SystemAutomationtrigger#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#id SystemAutomationtrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#ioc_level SystemAutomationtrigger#ioc_level}
  */
  readonly iocLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#license_type SystemAutomationtrigger#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#logid SystemAutomationtrigger#logid}
  */
  readonly logid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#name SystemAutomationtrigger#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#report_type SystemAutomationtrigger#report_type}
  */
  readonly reportType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#serial SystemAutomationtrigger#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#stitch_name SystemAutomationtrigger#stitch_name}
  */
  readonly stitchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#trigger_datetime SystemAutomationtrigger#trigger_datetime}
  */
  readonly triggerDatetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#trigger_day SystemAutomationtrigger#trigger_day}
  */
  readonly triggerDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#trigger_frequency SystemAutomationtrigger#trigger_frequency}
  */
  readonly triggerFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#trigger_hour SystemAutomationtrigger#trigger_hour}
  */
  readonly triggerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#trigger_minute SystemAutomationtrigger#trigger_minute}
  */
  readonly triggerMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#trigger_type SystemAutomationtrigger#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#trigger_weekday SystemAutomationtrigger#trigger_weekday}
  */
  readonly triggerWeekday?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#vdomparam SystemAutomationtrigger#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#fields SystemAutomationtrigger#fields}
  */
  readonly fields?: SystemAutomationtriggerFields[] | cdktf.IResolvable;
  /**
  * logid_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#logid_block SystemAutomationtrigger#logid_block}
  */
  readonly logidBlock?: SystemAutomationtriggerLogidBlock[] | cdktf.IResolvable;
  /**
  * vdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#vdom SystemAutomationtrigger#vdom}
  */
  readonly vdom?: SystemAutomationtriggerVdom[] | cdktf.IResolvable;
}
export interface SystemAutomationtriggerFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#id SystemAutomationtrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#name SystemAutomationtrigger#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#value SystemAutomationtrigger#value}
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
export interface SystemAutomationtriggerLogidBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#id SystemAutomationtrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systemAutomationtriggerLogidBlockToTerraform(struct?: SystemAutomationtriggerLogidBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systemAutomationtriggerLogidBlockToHclTerraform(struct?: SystemAutomationtriggerLogidBlock | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAutomationtriggerLogidBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAutomationtriggerLogidBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAutomationtriggerLogidBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class SystemAutomationtriggerLogidBlockList extends cdktf.ComplexList {
  public internalValue? : SystemAutomationtriggerLogidBlock[] | cdktf.IResolvable

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
  public get(index: number): SystemAutomationtriggerLogidBlockOutputReference {
    return new SystemAutomationtriggerLogidBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAutomationtriggerVdom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#name SystemAutomationtrigger#name}
  */
  readonly name?: string;
}

export function systemAutomationtriggerVdomToTerraform(struct?: SystemAutomationtriggerVdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemAutomationtriggerVdomToHclTerraform(struct?: SystemAutomationtriggerVdom | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAutomationtriggerVdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAutomationtriggerVdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAutomationtriggerVdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SystemAutomationtriggerVdomList extends cdktf.ComplexList {
  public internalValue? : SystemAutomationtriggerVdom[] | cdktf.IResolvable

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
  public get(index: number): SystemAutomationtriggerVdomOutputReference {
    return new SystemAutomationtriggerVdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger fortios_system_automationtrigger}
*/
export class SystemAutomationtrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_automationtrigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutomationtrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutomationtrigger to import
  * @param importFromId The id of the existing SystemAutomationtrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutomationtrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_automationtrigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_automationtrigger fortios_system_automationtrigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutomationtriggerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAutomationtriggerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_automationtrigger',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eventType = config.eventType;
    this._fabricEventName = config.fabricEventName;
    this._fabricEventSeverity = config.fabricEventSeverity;
    this._fazEventName = config.fazEventName;
    this._fazEventSeverity = config.fazEventSeverity;
    this._fazEventTags = config.fazEventTags;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._iocLevel = config.iocLevel;
    this._licenseType = config.licenseType;
    this._logid = config.logid;
    this._name = config.name;
    this._reportType = config.reportType;
    this._serial = config.serial;
    this._stitchName = config.stitchName;
    this._triggerDatetime = config.triggerDatetime;
    this._triggerDay = config.triggerDay;
    this._triggerFrequency = config.triggerFrequency;
    this._triggerHour = config.triggerHour;
    this._triggerMinute = config.triggerMinute;
    this._triggerType = config.triggerType;
    this._triggerWeekday = config.triggerWeekday;
    this._vdomparam = config.vdomparam;
    this._fields.internalValue = config.fields;
    this._logidBlock.internalValue = config.logidBlock;
    this._vdom.internalValue = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fabric_event_name - computed: false, optional: true, required: false
  private _fabricEventName?: string; 
  public get fabricEventName() {
    return this.getStringAttribute('fabric_event_name');
  }
  public set fabricEventName(value: string) {
    this._fabricEventName = value;
  }
  public resetFabricEventName() {
    this._fabricEventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricEventNameInput() {
    return this._fabricEventName;
  }

  // fabric_event_severity - computed: false, optional: true, required: false
  private _fabricEventSeverity?: string; 
  public get fabricEventSeverity() {
    return this.getStringAttribute('fabric_event_severity');
  }
  public set fabricEventSeverity(value: string) {
    this._fabricEventSeverity = value;
  }
  public resetFabricEventSeverity() {
    this._fabricEventSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricEventSeverityInput() {
    return this._fabricEventSeverity;
  }

  // faz_event_name - computed: false, optional: true, required: false
  private _fazEventName?: string; 
  public get fazEventName() {
    return this.getStringAttribute('faz_event_name');
  }
  public set fazEventName(value: string) {
    this._fazEventName = value;
  }
  public resetFazEventName() {
    this._fazEventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazEventNameInput() {
    return this._fazEventName;
  }

  // faz_event_severity - computed: false, optional: true, required: false
  private _fazEventSeverity?: string; 
  public get fazEventSeverity() {
    return this.getStringAttribute('faz_event_severity');
  }
  public set fazEventSeverity(value: string) {
    this._fazEventSeverity = value;
  }
  public resetFazEventSeverity() {
    this._fazEventSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazEventSeverityInput() {
    return this._fazEventSeverity;
  }

  // faz_event_tags - computed: false, optional: true, required: false
  private _fazEventTags?: string; 
  public get fazEventTags() {
    return this.getStringAttribute('faz_event_tags');
  }
  public set fazEventTags(value: string) {
    this._fazEventTags = value;
  }
  public resetFazEventTags() {
    this._fazEventTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazEventTagsInput() {
    return this._fazEventTags;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // ioc_level - computed: true, optional: true, required: false
  private _iocLevel?: string; 
  public get iocLevel() {
    return this.getStringAttribute('ioc_level');
  }
  public set iocLevel(value: string) {
    this._iocLevel = value;
  }
  public resetIocLevel() {
    this._iocLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iocLevelInput() {
    return this._iocLevel;
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // logid - computed: false, optional: true, required: false
  private _logid?: number; 
  public get logid() {
    return this.getNumberAttribute('logid');
  }
  public set logid(value: number) {
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

  // report_type - computed: true, optional: true, required: false
  private _reportType?: string; 
  public get reportType() {
    return this.getStringAttribute('report_type');
  }
  public set reportType(value: string) {
    this._reportType = value;
  }
  public resetReportType() {
    this._reportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTypeInput() {
    return this._reportType;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // stitch_name - computed: false, optional: true, required: false
  private _stitchName?: string; 
  public get stitchName() {
    return this.getStringAttribute('stitch_name');
  }
  public set stitchName(value: string) {
    this._stitchName = value;
  }
  public resetStitchName() {
    this._stitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchNameInput() {
    return this._stitchName;
  }

  // trigger_datetime - computed: true, optional: true, required: false
  private _triggerDatetime?: string; 
  public get triggerDatetime() {
    return this.getStringAttribute('trigger_datetime');
  }
  public set triggerDatetime(value: string) {
    this._triggerDatetime = value;
  }
  public resetTriggerDatetime() {
    this._triggerDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDatetimeInput() {
    return this._triggerDatetime;
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

  // trigger_hour - computed: false, optional: true, required: false
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

  // trigger_minute - computed: false, optional: true, required: false
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

  // trigger_weekday - computed: false, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
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

  // logid_block - computed: false, optional: true, required: false
  private _logidBlock = new SystemAutomationtriggerLogidBlockList(this, "logid_block", true);
  public get logidBlock() {
    return this._logidBlock;
  }
  public putLogidBlock(value: SystemAutomationtriggerLogidBlock[] | cdktf.IResolvable) {
    this._logidBlock.internalValue = value;
  }
  public resetLogidBlock() {
    this._logidBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logidBlockInput() {
    return this._logidBlock.internalValue;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom = new SystemAutomationtriggerVdomList(this, "vdom", true);
  public get vdom() {
    return this._vdom;
  }
  public putVdom(value: SystemAutomationtriggerVdom[] | cdktf.IResolvable) {
    this._vdom.internalValue = value;
  }
  public resetVdom() {
    this._vdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      event_type: cdktf.stringToTerraform(this._eventType),
      fabric_event_name: cdktf.stringToTerraform(this._fabricEventName),
      fabric_event_severity: cdktf.stringToTerraform(this._fabricEventSeverity),
      faz_event_name: cdktf.stringToTerraform(this._fazEventName),
      faz_event_severity: cdktf.stringToTerraform(this._fazEventSeverity),
      faz_event_tags: cdktf.stringToTerraform(this._fazEventTags),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ioc_level: cdktf.stringToTerraform(this._iocLevel),
      license_type: cdktf.stringToTerraform(this._licenseType),
      logid: cdktf.numberToTerraform(this._logid),
      name: cdktf.stringToTerraform(this._name),
      report_type: cdktf.stringToTerraform(this._reportType),
      serial: cdktf.stringToTerraform(this._serial),
      stitch_name: cdktf.stringToTerraform(this._stitchName),
      trigger_datetime: cdktf.stringToTerraform(this._triggerDatetime),
      trigger_day: cdktf.numberToTerraform(this._triggerDay),
      trigger_frequency: cdktf.stringToTerraform(this._triggerFrequency),
      trigger_hour: cdktf.numberToTerraform(this._triggerHour),
      trigger_minute: cdktf.numberToTerraform(this._triggerMinute),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
      trigger_weekday: cdktf.stringToTerraform(this._triggerWeekday),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      fields: cdktf.listMapper(systemAutomationtriggerFieldsToTerraform, true)(this._fields.internalValue),
      logid_block: cdktf.listMapper(systemAutomationtriggerLogidBlockToTerraform, true)(this._logidBlock.internalValue),
      vdom: cdktf.listMapper(systemAutomationtriggerVdomToTerraform, true)(this._vdom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      fabric_event_name: {
        value: cdktf.stringToHclTerraform(this._fabricEventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_event_severity: {
        value: cdktf.stringToHclTerraform(this._fabricEventSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_event_name: {
        value: cdktf.stringToHclTerraform(this._fazEventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_event_severity: {
        value: cdktf.stringToHclTerraform(this._fazEventSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_event_tags: {
        value: cdktf.stringToHclTerraform(this._fazEventTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      ioc_level: {
        value: cdktf.stringToHclTerraform(this._iocLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logid: {
        value: cdktf.numberToHclTerraform(this._logid),
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
      report_type: {
        value: cdktf.stringToHclTerraform(this._reportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stitch_name: {
        value: cdktf.stringToHclTerraform(this._stitchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_datetime: {
        value: cdktf.stringToHclTerraform(this._triggerDatetime),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
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
      logid_block: {
        value: cdktf.listMapperHcl(systemAutomationtriggerLogidBlockToHclTerraform, true)(this._logidBlock.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemAutomationtriggerLogidBlockList",
      },
      vdom: {
        value: cdktf.listMapperHcl(systemAutomationtriggerVdomToHclTerraform, true)(this._vdom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemAutomationtriggerVdomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
