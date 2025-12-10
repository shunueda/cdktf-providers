// https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSyntheticsHttpV2CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#id DataSyntheticsHttpV2Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#test DataSyntheticsHttpV2Check#test}
  */
  readonly test: DataSyntheticsHttpV2CheckTest[] | cdktf.IResolvable;
}
export interface DataSyntheticsHttpV2CheckTestCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#key DataSyntheticsHttpV2Check#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#value DataSyntheticsHttpV2Check#value}
  */
  readonly value?: string;
}

export function dataSyntheticsHttpV2CheckTestCustomPropertiesToTerraform(struct?: DataSyntheticsHttpV2CheckTestCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSyntheticsHttpV2CheckTestCustomPropertiesToHclTerraform(struct?: DataSyntheticsHttpV2CheckTestCustomProperties | cdktf.IResolvable): any {
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

export class DataSyntheticsHttpV2CheckTestCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsHttpV2CheckTestCustomProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSyntheticsHttpV2CheckTestCustomProperties | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataSyntheticsHttpV2CheckTestCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsHttpV2CheckTestCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsHttpV2CheckTestCustomPropertiesOutputReference {
    return new DataSyntheticsHttpV2CheckTestCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsHttpV2CheckTestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#name DataSyntheticsHttpV2Check#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#value DataSyntheticsHttpV2Check#value}
  */
  readonly value?: string;
}

export function dataSyntheticsHttpV2CheckTestHeadersToTerraform(struct?: DataSyntheticsHttpV2CheckTestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSyntheticsHttpV2CheckTestHeadersToHclTerraform(struct?: DataSyntheticsHttpV2CheckTestHeaders | cdktf.IResolvable): any {
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

export class DataSyntheticsHttpV2CheckTestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsHttpV2CheckTestHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSyntheticsHttpV2CheckTestHeaders | cdktf.IResolvable | undefined) {
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

export class DataSyntheticsHttpV2CheckTestHeadersList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsHttpV2CheckTestHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsHttpV2CheckTestHeadersOutputReference {
    return new DataSyntheticsHttpV2CheckTestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsHttpV2CheckTestValidations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#actual DataSyntheticsHttpV2Check#actual}
  */
  readonly actual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#code DataSyntheticsHttpV2Check#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#comparator DataSyntheticsHttpV2Check#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#expected DataSyntheticsHttpV2Check#expected}
  */
  readonly expected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#extractor DataSyntheticsHttpV2Check#extractor}
  */
  readonly extractor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#name DataSyntheticsHttpV2Check#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#source DataSyntheticsHttpV2Check#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#type DataSyntheticsHttpV2Check#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#value DataSyntheticsHttpV2Check#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#variable DataSyntheticsHttpV2Check#variable}
  */
  readonly variable?: string;
}

export function dataSyntheticsHttpV2CheckTestValidationsToTerraform(struct?: DataSyntheticsHttpV2CheckTestValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actual: cdktf.stringToTerraform(struct!.actual),
    code: cdktf.stringToTerraform(struct!.code),
    comparator: cdktf.stringToTerraform(struct!.comparator),
    expected: cdktf.stringToTerraform(struct!.expected),
    extractor: cdktf.stringToTerraform(struct!.extractor),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function dataSyntheticsHttpV2CheckTestValidationsToHclTerraform(struct?: DataSyntheticsHttpV2CheckTestValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actual: {
      value: cdktf.stringToHclTerraform(struct!.actual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected: {
      value: cdktf.stringToHclTerraform(struct!.expected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractor: {
      value: cdktf.stringToHclTerraform(struct!.extractor),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsHttpV2CheckTestValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsHttpV2CheckTestValidations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actual !== undefined) {
      hasAnyValues = true;
      internalValueResult.actual = this._actual;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._expected !== undefined) {
      hasAnyValues = true;
      internalValueResult.expected = this._expected;
    }
    if (this._extractor !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractor = this._extractor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsHttpV2CheckTestValidations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actual = undefined;
      this._code = undefined;
      this._comparator = undefined;
      this._expected = undefined;
      this._extractor = undefined;
      this._name = undefined;
      this._source = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actual = value.actual;
      this._code = value.code;
      this._comparator = value.comparator;
      this._expected = value.expected;
      this._extractor = value.extractor;
      this._name = value.name;
      this._source = value.source;
      this._type = value.type;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // actual - computed: false, optional: true, required: false
  private _actual?: string; 
  public get actual() {
    return this.getStringAttribute('actual');
  }
  public set actual(value: string) {
    this._actual = value;
  }
  public resetActual() {
    this._actual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actualInput() {
    return this._actual;
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // comparator - computed: false, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // expected - computed: false, optional: true, required: false
  private _expected?: string; 
  public get expected() {
    return this.getStringAttribute('expected');
  }
  public set expected(value: string) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
  }

  // extractor - computed: false, optional: true, required: false
  private _extractor?: string; 
  public get extractor() {
    return this.getStringAttribute('extractor');
  }
  public set extractor(value: string) {
    this._extractor = value;
  }
  public resetExtractor() {
    this._extractor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorInput() {
    return this._extractor;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class DataSyntheticsHttpV2CheckTestValidationsList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsHttpV2CheckTestValidations[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsHttpV2CheckTestValidationsOutputReference {
    return new DataSyntheticsHttpV2CheckTestValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsHttpV2CheckTest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#frequency DataSyntheticsHttpV2Check#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#id DataSyntheticsHttpV2Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * custom_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#custom_properties DataSyntheticsHttpV2Check#custom_properties}
  */
  readonly customProperties?: DataSyntheticsHttpV2CheckTestCustomProperties[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#headers DataSyntheticsHttpV2Check#headers}
  */
  readonly headers?: DataSyntheticsHttpV2CheckTestHeaders[] | cdktf.IResolvable;
  /**
  * validations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#validations DataSyntheticsHttpV2Check#validations}
  */
  readonly validations?: DataSyntheticsHttpV2CheckTestValidations[] | cdktf.IResolvable;
}

export function dataSyntheticsHttpV2CheckTestToTerraform(struct?: DataSyntheticsHttpV2CheckTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
    id: cdktf.numberToTerraform(struct!.id),
    custom_properties: cdktf.listMapper(dataSyntheticsHttpV2CheckTestCustomPropertiesToTerraform, true)(struct!.customProperties),
    headers: cdktf.listMapper(dataSyntheticsHttpV2CheckTestHeadersToTerraform, true)(struct!.headers),
    validations: cdktf.listMapper(dataSyntheticsHttpV2CheckTestValidationsToTerraform, true)(struct!.validations),
  }
}


export function dataSyntheticsHttpV2CheckTestToHclTerraform(struct?: DataSyntheticsHttpV2CheckTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_properties: {
      value: cdktf.listMapperHcl(dataSyntheticsHttpV2CheckTestCustomPropertiesToHclTerraform, true)(struct!.customProperties),
      isBlock: true,
      type: "set",
      storageClassType: "DataSyntheticsHttpV2CheckTestCustomPropertiesList",
    },
    headers: {
      value: cdktf.listMapperHcl(dataSyntheticsHttpV2CheckTestHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "set",
      storageClassType: "DataSyntheticsHttpV2CheckTestHeadersList",
    },
    validations: {
      value: cdktf.listMapperHcl(dataSyntheticsHttpV2CheckTestValidationsToHclTerraform, true)(struct!.validations),
      isBlock: true,
      type: "set",
      storageClassType: "DataSyntheticsHttpV2CheckTestValidationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsHttpV2CheckTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsHttpV2CheckTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._customProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._validations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validations = this._validations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsHttpV2CheckTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._id = undefined;
      this._customProperties.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._validations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._id = value.id;
      this._customProperties.internalValue = value.customProperties;
      this._headers.internalValue = value.headers;
      this._validations.internalValue = value.validations;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // automatic_retries - computed: true, optional: false, required: false
  public get automaticRetries() {
    return this.getNumberAttribute('automatic_retries');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // last_run_at - computed: true, optional: false, required: false
  public get lastRunAt() {
    return this.getStringAttribute('last_run_at');
  }

  // last_run_status - computed: true, optional: false, required: false
  public get lastRunStatus() {
    return this.getStringAttribute('last_run_status');
  }

  // location_ids - computed: true, optional: false, required: false
  public get locationIds() {
    return this.getListAttribute('location_ids');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // scheduling_strategy - computed: true, optional: false, required: false
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }

  // verify_certificates - computed: true, optional: false, required: false
  public get verifyCertificates() {
    return this.getBooleanAttribute('verify_certificates');
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new DataSyntheticsHttpV2CheckTestCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DataSyntheticsHttpV2CheckTestCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataSyntheticsHttpV2CheckTestHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataSyntheticsHttpV2CheckTestHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // validations - computed: false, optional: true, required: false
  private _validations = new DataSyntheticsHttpV2CheckTestValidationsList(this, "validations", true);
  public get validations() {
    return this._validations;
  }
  public putValidations(value: DataSyntheticsHttpV2CheckTestValidations[] | cdktf.IResolvable) {
    this._validations.internalValue = value;
  }
  public resetValidations() {
    this._validations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationsInput() {
    return this._validations.internalValue;
  }
}

export class DataSyntheticsHttpV2CheckTestList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsHttpV2CheckTest[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsHttpV2CheckTestOutputReference {
    return new DataSyntheticsHttpV2CheckTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check synthetics_http_v2_check}
*/
export class DataSyntheticsHttpV2Check extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_http_v2_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSyntheticsHttpV2Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSyntheticsHttpV2Check to import
  * @param importFromId The id of the existing DataSyntheticsHttpV2Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSyntheticsHttpV2Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_http_v2_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/http_v2_check synthetics_http_v2_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSyntheticsHttpV2CheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataSyntheticsHttpV2CheckConfig) {
    super(scope, id, {
      terraformResourceType: 'synthetics_http_v2_check',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.17',
        providerVersionConstraint: '2.0.17'
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
    this._test.internalValue = config.test;
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

  // test - computed: false, optional: false, required: true
  private _test = new DataSyntheticsHttpV2CheckTestList(this, "test", true);
  public get test() {
    return this._test;
  }
  public putTest(value: DataSyntheticsHttpV2CheckTest[] | cdktf.IResolvable) {
    this._test.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      test: cdktf.listMapper(dataSyntheticsHttpV2CheckTestToTerraform, true)(this._test.internalValue),
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
      test: {
        value: cdktf.listMapperHcl(dataSyntheticsHttpV2CheckTestToHclTerraform, true)(this._test.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsHttpV2CheckTestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
