// https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSyntheticsDowntimeConfigurationsV2CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#id DataSyntheticsDowntimeConfigurationsV2Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * downtime_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#downtime_configurations DataSyntheticsDowntimeConfigurationsV2Check#downtime_configurations}
  */
  readonly downtimeConfigurations?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations[] | cdktf.IResolvable;
}
export interface DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#type DataSyntheticsDowntimeConfigurationsV2Check#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#value DataSyntheticsDowntimeConfigurationsV2Check#value}
  */
  readonly value?: string;
}

export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndToTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndToHclTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd | cdktf.IResolvable): any {
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

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd | cdktf.IResolvable | undefined) {
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

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndOutputReference {
    return new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#custom_frequency DataSyntheticsDowntimeConfigurationsV2Check#custom_frequency}
  */
  readonly customFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#custom_value DataSyntheticsDowntimeConfigurationsV2Check#custom_value}
  */
  readonly customValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#type DataSyntheticsDowntimeConfigurationsV2Check#type}
  */
  readonly type?: string;
}

export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsToTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats | cdktf.IResolvable): any {
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


export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsToHclTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats | cdktf.IResolvable): any {
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

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats | cdktf.IResolvable | undefined) {
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

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsOutputReference {
    return new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence {
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#end DataSyntheticsDowntimeConfigurationsV2Check#end}
  */
  readonly end?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd[] | cdktf.IResolvable;
  /**
  * repeats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#repeats DataSyntheticsDowntimeConfigurationsV2Check#repeats}
  */
  readonly repeats?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats[] | cdktf.IResolvable;
}

export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceToTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.listMapper(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndToTerraform, true)(struct!.end),
    repeats: cdktf.listMapper(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsToTerraform, true)(struct!.repeats),
  }
}


export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceToHclTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.listMapperHcl(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndList",
    },
    repeats: {
      value: cdktf.listMapperHcl(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsToHclTerraform, true)(struct!.repeats),
      isBlock: true,
      type: "set",
      storageClassType: "DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence | cdktf.IResolvable | undefined) {
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
  private _end = new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceEnd[] | cdktf.IResolvable) {
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
  private _repeats = new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeatsList(this, "repeats", true);
  public get repeats() {
    return this._repeats;
  }
  public putRepeats(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceRepeats[] | cdktf.IResolvable) {
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

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceOutputReference {
    return new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#description DataSyntheticsDowntimeConfigurationsV2Check#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#id DataSyntheticsDowntimeConfigurationsV2Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#timezone DataSyntheticsDowntimeConfigurationsV2Check#timezone}
  */
  readonly timezone?: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#recurrence DataSyntheticsDowntimeConfigurationsV2Check#recurrence}
  */
  readonly recurrence?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence[] | cdktf.IResolvable;
}

export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsToTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    recurrence: cdktf.listMapper(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceToTerraform, true)(struct!.recurrence),
  }
}


export function dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsToHclTerraform(struct?: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: cdktf.listMapperHcl(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceToHclTerraform, true)(struct!.recurrence),
      isBlock: true,
      type: "set",
      storageClassType: "DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
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
      this._id = value.id;
      this._timezone = value.timezone;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    return this.getStringAttribute('rule');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // test_count - computed: true, optional: false, required: false
  public get testCount() {
    return this.getNumberAttribute('test_count');
  }

  // tests_updated_at - computed: true, optional: false, required: false
  public get testsUpdatedAt() {
    return this.getStringAttribute('tests_updated_at');
  }

  // timezone - computed: true, optional: true, required: false
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
  private _recurrence = new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrenceList(this, "recurrence", true);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsRecurrence[] | cdktf.IResolvable) {
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

export class DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsOutputReference {
    return new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check synthetics_downtime_configurations_v2_check}
*/
export class DataSyntheticsDowntimeConfigurationsV2Check extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_downtime_configurations_v2_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSyntheticsDowntimeConfigurationsV2Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSyntheticsDowntimeConfigurationsV2Check to import
  * @param importFromId The id of the existing DataSyntheticsDowntimeConfigurationsV2Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSyntheticsDowntimeConfigurationsV2Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_downtime_configurations_v2_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/downtime_configurations_v2_check synthetics_downtime_configurations_v2_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSyntheticsDowntimeConfigurationsV2CheckConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSyntheticsDowntimeConfigurationsV2CheckConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'synthetics_downtime_configurations_v2_check',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.16'
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
    this._downtimeConfigurations.internalValue = config.downtimeConfigurations;
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

  // downtime_configurations - computed: false, optional: true, required: false
  private _downtimeConfigurations = new DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsList(this, "downtime_configurations", true);
  public get downtimeConfigurations() {
    return this._downtimeConfigurations;
  }
  public putDowntimeConfigurations(value: DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurations[] | cdktf.IResolvable) {
    this._downtimeConfigurations.internalValue = value;
  }
  public resetDowntimeConfigurations() {
    this._downtimeConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downtimeConfigurationsInput() {
    return this._downtimeConfigurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      downtime_configurations: cdktf.listMapper(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsToTerraform, true)(this._downtimeConfigurations.internalValue),
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
      downtime_configurations: {
        value: cdktf.listMapperHcl(dataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsToHclTerraform, true)(this._downtimeConfigurations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsDowntimeConfigurationsV2CheckDowntimeConfigurationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
