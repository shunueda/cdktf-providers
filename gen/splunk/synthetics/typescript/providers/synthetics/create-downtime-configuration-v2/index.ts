// https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CreateDowntimeConfigurationV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#id CreateDowntimeConfigurationV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * downtime_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#downtime_configuration CreateDowntimeConfigurationV2#downtime_configuration}
  */
  readonly downtimeConfiguration: CreateDowntimeConfigurationV2DowntimeConfiguration[] | cdktf.IResolvable;
}
export interface CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#type CreateDowntimeConfigurationV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#value CreateDowntimeConfigurationV2#value}
  */
  readonly value?: string;
}

export function createDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndToTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function createDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndToHclTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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

export class CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndList extends cdktf.ComplexList {
  public internalValue? : CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd[] | cdktf.IResolvable

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
  public get(index: number): CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndOutputReference {
    return new CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#custom_frequency CreateDowntimeConfigurationV2#custom_frequency}
  */
  readonly customFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#custom_value CreateDowntimeConfigurationV2#custom_value}
  */
  readonly customValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#type CreateDowntimeConfigurationV2#type}
  */
  readonly type?: string;
}

export function createDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsToTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_frequency: cdktf.stringToTerraform(struct!.customFrequency),
    custom_value: cdktf.numberToTerraform(struct!.customValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function createDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsToHclTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_frequency: {
      value: cdktf.stringToHclTerraform(struct!.customFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_value: {
      value: cdktf.numberToHclTerraform(struct!.customValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFrequency = this._customFrequency;
    }
    if (this._customValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValue = this._customValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customFrequency = undefined;
      this._customValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customFrequency = value.customFrequency;
      this._customValue = value.customValue;
      this._type = value.type;
    }
  }

  // custom_frequency - computed: false, optional: true, required: false
  private _customFrequency?: string; 
  public get customFrequency() {
    return this.getStringAttribute('custom_frequency');
  }
  public set customFrequency(value: string) {
    this._customFrequency = value;
  }
  public resetCustomFrequency() {
    this._customFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFrequencyInput() {
    return this._customFrequency;
  }

  // custom_value - computed: false, optional: true, required: false
  private _customValue?: number; 
  public get customValue() {
    return this.getNumberAttribute('custom_value');
  }
  public set customValue(value: number) {
    this._customValue = value;
  }
  public resetCustomValue() {
    this._customValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValueInput() {
    return this._customValue;
  }

  // type - computed: false, optional: true, required: false
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

export class CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsList extends cdktf.ComplexList {
  public internalValue? : CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats[] | cdktf.IResolvable

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
  public get(index: number): CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsOutputReference {
    return new CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence {
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#end CreateDowntimeConfigurationV2#end}
  */
  readonly end?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd[] | cdktf.IResolvable;
  /**
  * repeats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#repeats CreateDowntimeConfigurationV2#repeats}
  */
  readonly repeats?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats[] | cdktf.IResolvable;
}

export function createDowntimeConfigurationV2DowntimeConfigurationRecurrenceToTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.listMapper(createDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndToTerraform, true)(struct!.end),
    repeats: cdktf.listMapper(createDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsToTerraform, true)(struct!.repeats),
  }
}


export function createDowntimeConfigurationV2DowntimeConfigurationRecurrenceToHclTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.listMapperHcl(createDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndList",
    },
    repeats: {
      value: cdktf.listMapperHcl(createDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsToHclTerraform, true)(struct!.repeats),
      isBlock: true,
      type: "set",
      storageClassType: "CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._repeats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeats = this._repeats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._repeats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._repeats.internalValue = value.repeats;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end = new CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // repeats - computed: false, optional: true, required: false
  private _repeats = new CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeatsList(this, "repeats", true);
  public get repeats() {
    return this._repeats;
  }
  public putRepeats(value: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceRepeats[] | cdktf.IResolvable) {
    this._repeats.internalValue = value;
  }
  public resetRepeats() {
    this._repeats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatsInput() {
    return this._repeats.internalValue;
  }
}

export class CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceList extends cdktf.ComplexList {
  public internalValue? : CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence[] | cdktf.IResolvable

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
  public get(index: number): CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceOutputReference {
    return new CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateDowntimeConfigurationV2DowntimeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#description CreateDowntimeConfigurationV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#end_time CreateDowntimeConfigurationV2#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#name CreateDowntimeConfigurationV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#rule CreateDowntimeConfigurationV2#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#start_time CreateDowntimeConfigurationV2#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#test_ids CreateDowntimeConfigurationV2#test_ids}
  */
  readonly testIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#timezone CreateDowntimeConfigurationV2#timezone}
  */
  readonly timezone?: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#recurrence CreateDowntimeConfigurationV2#recurrence}
  */
  readonly recurrence?: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence[] | cdktf.IResolvable;
}

export function createDowntimeConfigurationV2DowntimeConfigurationToTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    rule: cdktf.stringToTerraform(struct!.rule),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    test_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.testIds),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    recurrence: cdktf.listMapper(createDowntimeConfigurationV2DowntimeConfigurationRecurrenceToTerraform, true)(struct!.recurrence),
  }
}


export function createDowntimeConfigurationV2DowntimeConfigurationToHclTerraform(struct?: CreateDowntimeConfigurationV2DowntimeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.testIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: cdktf.listMapperHcl(createDowntimeConfigurationV2DowntimeConfigurationRecurrenceToHclTerraform, true)(struct!.recurrence),
      isBlock: true,
      type: "set",
      storageClassType: "CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateDowntimeConfigurationV2DowntimeConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateDowntimeConfigurationV2DowntimeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._testIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.testIds = this._testIds;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateDowntimeConfigurationV2DowntimeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._rule = undefined;
      this._startTime = undefined;
      this._testIds = undefined;
      this._timezone = undefined;
      this._recurrence.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._endTime = value.endTime;
      this._name = value.name;
      this._rule = value.rule;
      this._startTime = value.startTime;
      this._testIds = value.testIds;
      this._timezone = value.timezone;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // test_ids - computed: false, optional: false, required: true
  private _testIds?: number[]; 
  public get testIds() {
    return this.getNumberListAttribute('test_ids');
  }
  public set testIds(value: number[]) {
    this._testIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdsInput() {
    return this._testIds;
  }

  // tests_updated_at - computed: true, optional: false, required: false
  public get testsUpdatedAt() {
    return this.getStringAttribute('tests_updated_at');
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new CreateDowntimeConfigurationV2DowntimeConfigurationRecurrenceList(this, "recurrence", true);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: CreateDowntimeConfigurationV2DowntimeConfigurationRecurrence[] | cdktf.IResolvable) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}

export class CreateDowntimeConfigurationV2DowntimeConfigurationList extends cdktf.ComplexList {
  public internalValue? : CreateDowntimeConfigurationV2DowntimeConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CreateDowntimeConfigurationV2DowntimeConfigurationOutputReference {
    return new CreateDowntimeConfigurationV2DowntimeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2 synthetics_create_downtime_configuration_v2}
*/
export class CreateDowntimeConfigurationV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_create_downtime_configuration_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CreateDowntimeConfigurationV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CreateDowntimeConfigurationV2 to import
  * @param importFromId The id of the existing CreateDowntimeConfigurationV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CreateDowntimeConfigurationV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_create_downtime_configuration_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_downtime_configuration_v2 synthetics_create_downtime_configuration_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CreateDowntimeConfigurationV2Config
  */
  public constructor(scope: Construct, id: string, config: CreateDowntimeConfigurationV2Config) {
    super(scope, id, {
      terraformResourceType: 'synthetics_create_downtime_configuration_v2',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.16',
        providerVersionConstraint: '2.0.16'
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
    this._downtimeConfiguration.internalValue = config.downtimeConfiguration;
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

  // downtime_configuration - computed: false, optional: false, required: true
  private _downtimeConfiguration = new CreateDowntimeConfigurationV2DowntimeConfigurationList(this, "downtime_configuration", true);
  public get downtimeConfiguration() {
    return this._downtimeConfiguration;
  }
  public putDowntimeConfiguration(value: CreateDowntimeConfigurationV2DowntimeConfiguration[] | cdktf.IResolvable) {
    this._downtimeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downtimeConfigurationInput() {
    return this._downtimeConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      downtime_configuration: cdktf.listMapper(createDowntimeConfigurationV2DowntimeConfigurationToTerraform, true)(this._downtimeConfiguration.internalValue),
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
      downtime_configuration: {
        value: cdktf.listMapperHcl(createDowntimeConfigurationV2DowntimeConfigurationToHclTerraform, true)(this._downtimeConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateDowntimeConfigurationV2DowntimeConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
