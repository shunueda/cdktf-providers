// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DavisAnomalyDetectorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the anomaly detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#description DavisAnomalyDetectors#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#enabled DavisAnomalyDetectors#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#id DavisAnomalyDetectors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#source DavisAnomalyDetectors#source}
  */
  readonly source: string;
  /**
  * The title of the anomaly detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#title DavisAnomalyDetectors#title}
  */
  readonly title: string;
  /**
  * analyzer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#analyzer DavisAnomalyDetectors#analyzer}
  */
  readonly analyzer: DavisAnomalyDetectorsAnalyzer;
  /**
  * event_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#event_template DavisAnomalyDetectors#event_template}
  */
  readonly eventTemplate: DavisAnomalyDetectorsEventTemplate;
  /**
  * execution_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#execution_settings DavisAnomalyDetectors#execution_settings}
  */
  readonly executionSettings: DavisAnomalyDetectorsExecutionSettings;
}
export interface DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#key DavisAnomalyDetectors#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#value DavisAnomalyDetectors#value}
  */
  readonly value: string;
}

export function davisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldToTerraform(struct?: DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function davisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldToHclTerraform(struct?: DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DavisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DavisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldList extends cdktf.ComplexList {
  public internalValue? : DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField[] | cdktf.IResolvable

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
  public get(index: number): DavisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldOutputReference {
    return new DavisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DavisAnomalyDetectorsAnalyzerInput {
  /**
  * analyzer_input_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#analyzer_input_field DavisAnomalyDetectors#analyzer_input_field}
  */
  readonly analyzerInputField: DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField[] | cdktf.IResolvable;
}

export function davisAnomalyDetectorsAnalyzerInputToTerraform(struct?: DavisAnomalyDetectorsAnalyzerInputOutputReference | DavisAnomalyDetectorsAnalyzerInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyzer_input_field: cdktf.listMapper(davisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldToTerraform, true)(struct!.analyzerInputField),
  }
}


export function davisAnomalyDetectorsAnalyzerInputToHclTerraform(struct?: DavisAnomalyDetectorsAnalyzerInputOutputReference | DavisAnomalyDetectorsAnalyzerInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyzer_input_field: {
      value: cdktf.listMapperHcl(davisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldToHclTerraform, true)(struct!.analyzerInputField),
      isBlock: true,
      type: "set",
      storageClassType: "DavisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DavisAnomalyDetectorsAnalyzerInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DavisAnomalyDetectorsAnalyzerInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzerInputField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzerInputField = this._analyzerInputField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisAnomalyDetectorsAnalyzerInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analyzerInputField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analyzerInputField.internalValue = value.analyzerInputField;
    }
  }

  // analyzer_input_field - computed: false, optional: false, required: true
  private _analyzerInputField = new DavisAnomalyDetectorsAnalyzerInputAnalyzerInputFieldList(this, "analyzer_input_field", true);
  public get analyzerInputField() {
    return this._analyzerInputField;
  }
  public putAnalyzerInputField(value: DavisAnomalyDetectorsAnalyzerInputAnalyzerInputField[] | cdktf.IResolvable) {
    this._analyzerInputField.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInputFieldInput() {
    return this._analyzerInputField.internalValue;
  }
}
export interface DavisAnomalyDetectorsAnalyzer {
  /**
  * Fully qualified name of the analyzer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#name DavisAnomalyDetectors#name}
  */
  readonly name: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#input DavisAnomalyDetectors#input}
  */
  readonly input?: DavisAnomalyDetectorsAnalyzerInput;
}

export function davisAnomalyDetectorsAnalyzerToTerraform(struct?: DavisAnomalyDetectorsAnalyzerOutputReference | DavisAnomalyDetectorsAnalyzer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    input: davisAnomalyDetectorsAnalyzerInputToTerraform(struct!.input),
  }
}


export function davisAnomalyDetectorsAnalyzerToHclTerraform(struct?: DavisAnomalyDetectorsAnalyzerOutputReference | DavisAnomalyDetectorsAnalyzer): any {
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
    input: {
      value: davisAnomalyDetectorsAnalyzerInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "DavisAnomalyDetectorsAnalyzerInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DavisAnomalyDetectorsAnalyzerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DavisAnomalyDetectorsAnalyzer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisAnomalyDetectorsAnalyzer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._input.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._input.internalValue = value.input;
    }
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

  // input - computed: false, optional: true, required: false
  private _input = new DavisAnomalyDetectorsAnalyzerInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: DavisAnomalyDetectorsAnalyzerInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }
}
export interface DavisAnomalyDetectorsEventTemplatePropertiesProperty {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#key DavisAnomalyDetectors#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#value DavisAnomalyDetectors#value}
  */
  readonly value: string;
}

export function davisAnomalyDetectorsEventTemplatePropertiesPropertyToTerraform(struct?: DavisAnomalyDetectorsEventTemplatePropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function davisAnomalyDetectorsEventTemplatePropertiesPropertyToHclTerraform(struct?: DavisAnomalyDetectorsEventTemplatePropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DavisAnomalyDetectorsEventTemplatePropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DavisAnomalyDetectorsEventTemplatePropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisAnomalyDetectorsEventTemplatePropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DavisAnomalyDetectorsEventTemplatePropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : DavisAnomalyDetectorsEventTemplatePropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): DavisAnomalyDetectorsEventTemplatePropertiesPropertyOutputReference {
    return new DavisAnomalyDetectorsEventTemplatePropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DavisAnomalyDetectorsEventTemplateProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#property DavisAnomalyDetectors#property}
  */
  readonly property: DavisAnomalyDetectorsEventTemplatePropertiesProperty[] | cdktf.IResolvable;
}

export function davisAnomalyDetectorsEventTemplatePropertiesToTerraform(struct?: DavisAnomalyDetectorsEventTemplatePropertiesOutputReference | DavisAnomalyDetectorsEventTemplateProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(davisAnomalyDetectorsEventTemplatePropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function davisAnomalyDetectorsEventTemplatePropertiesToHclTerraform(struct?: DavisAnomalyDetectorsEventTemplatePropertiesOutputReference | DavisAnomalyDetectorsEventTemplateProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(davisAnomalyDetectorsEventTemplatePropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "DavisAnomalyDetectorsEventTemplatePropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DavisAnomalyDetectorsEventTemplatePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DavisAnomalyDetectorsEventTemplateProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisAnomalyDetectorsEventTemplateProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: false, required: true
  private _property = new DavisAnomalyDetectorsEventTemplatePropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: DavisAnomalyDetectorsEventTemplatePropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface DavisAnomalyDetectorsEventTemplate {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#properties DavisAnomalyDetectors#properties}
  */
  readonly properties?: DavisAnomalyDetectorsEventTemplateProperties;
}

export function davisAnomalyDetectorsEventTemplateToTerraform(struct?: DavisAnomalyDetectorsEventTemplateOutputReference | DavisAnomalyDetectorsEventTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: davisAnomalyDetectorsEventTemplatePropertiesToTerraform(struct!.properties),
  }
}


export function davisAnomalyDetectorsEventTemplateToHclTerraform(struct?: DavisAnomalyDetectorsEventTemplateOutputReference | DavisAnomalyDetectorsEventTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: davisAnomalyDetectorsEventTemplatePropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DavisAnomalyDetectorsEventTemplatePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DavisAnomalyDetectorsEventTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DavisAnomalyDetectorsEventTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisAnomalyDetectorsEventTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties.internalValue = value.properties;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DavisAnomalyDetectorsEventTemplatePropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DavisAnomalyDetectorsEventTemplateProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface DavisAnomalyDetectorsExecutionSettings {
  /**
  * UUID of a service user. Queries will be executed on behalf of the service user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#actor DavisAnomalyDetectors#actor}
  */
  readonly actor?: string;
  /**
  * Minute offset of sliding evaluation window for metrics with latency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#query_offset DavisAnomalyDetectors#query_offset}
  */
  readonly queryOffset?: number;
}

export function davisAnomalyDetectorsExecutionSettingsToTerraform(struct?: DavisAnomalyDetectorsExecutionSettingsOutputReference | DavisAnomalyDetectorsExecutionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actor: cdktf.stringToTerraform(struct!.actor),
    query_offset: cdktf.numberToTerraform(struct!.queryOffset),
  }
}


export function davisAnomalyDetectorsExecutionSettingsToHclTerraform(struct?: DavisAnomalyDetectorsExecutionSettingsOutputReference | DavisAnomalyDetectorsExecutionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actor: {
      value: cdktf.stringToHclTerraform(struct!.actor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_offset: {
      value: cdktf.numberToHclTerraform(struct!.queryOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DavisAnomalyDetectorsExecutionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DavisAnomalyDetectorsExecutionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actor !== undefined) {
      hasAnyValues = true;
      internalValueResult.actor = this._actor;
    }
    if (this._queryOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryOffset = this._queryOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisAnomalyDetectorsExecutionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actor = undefined;
      this._queryOffset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actor = value.actor;
      this._queryOffset = value.queryOffset;
    }
  }

  // actor - computed: false, optional: true, required: false
  private _actor?: string; 
  public get actor() {
    return this.getStringAttribute('actor');
  }
  public set actor(value: string) {
    this._actor = value;
  }
  public resetActor() {
    this._actor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorInput() {
    return this._actor;
  }

  // query_offset - computed: false, optional: true, required: false
  private _queryOffset?: number; 
  public get queryOffset() {
    return this.getNumberAttribute('query_offset');
  }
  public set queryOffset(value: number) {
    this._queryOffset = value;
  }
  public resetQueryOffset() {
    this._queryOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOffsetInput() {
    return this._queryOffset;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors dynatrace_davis_anomaly_detectors}
*/
export class DavisAnomalyDetectors extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_davis_anomaly_detectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DavisAnomalyDetectors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DavisAnomalyDetectors to import
  * @param importFromId The id of the existing DavisAnomalyDetectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DavisAnomalyDetectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_davis_anomaly_detectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_anomaly_detectors dynatrace_davis_anomaly_detectors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DavisAnomalyDetectorsConfig
  */
  public constructor(scope: Construct, id: string, config: DavisAnomalyDetectorsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_davis_anomaly_detectors',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._source = config.source;
    this._title = config.title;
    this._analyzer.internalValue = config.analyzer;
    this._eventTemplate.internalValue = config.eventTemplate;
    this._executionSettings.internalValue = config.executionSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer = new DavisAnomalyDetectorsAnalyzerOutputReference(this, "analyzer");
  public get analyzer() {
    return this._analyzer;
  }
  public putAnalyzer(value: DavisAnomalyDetectorsAnalyzer) {
    this._analyzer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer.internalValue;
  }

  // event_template - computed: false, optional: false, required: true
  private _eventTemplate = new DavisAnomalyDetectorsEventTemplateOutputReference(this, "event_template");
  public get eventTemplate() {
    return this._eventTemplate;
  }
  public putEventTemplate(value: DavisAnomalyDetectorsEventTemplate) {
    this._eventTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTemplateInput() {
    return this._eventTemplate.internalValue;
  }

  // execution_settings - computed: false, optional: false, required: true
  private _executionSettings = new DavisAnomalyDetectorsExecutionSettingsOutputReference(this, "execution_settings");
  public get executionSettings() {
    return this._executionSettings;
  }
  public putExecutionSettings(value: DavisAnomalyDetectorsExecutionSettings) {
    this._executionSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSettingsInput() {
    return this._executionSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      source: cdktf.stringToTerraform(this._source),
      title: cdktf.stringToTerraform(this._title),
      analyzer: davisAnomalyDetectorsAnalyzerToTerraform(this._analyzer.internalValue),
      event_template: davisAnomalyDetectorsEventTemplateToTerraform(this._eventTemplate.internalValue),
      execution_settings: davisAnomalyDetectorsExecutionSettingsToTerraform(this._executionSettings.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyzer: {
        value: davisAnomalyDetectorsAnalyzerToHclTerraform(this._analyzer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DavisAnomalyDetectorsAnalyzerList",
      },
      event_template: {
        value: davisAnomalyDetectorsEventTemplateToHclTerraform(this._eventTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DavisAnomalyDetectorsEventTemplateList",
      },
      execution_settings: {
        value: davisAnomalyDetectorsExecutionSettingsToHclTerraform(this._executionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DavisAnomalyDetectorsExecutionSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
