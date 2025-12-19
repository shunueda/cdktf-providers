// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteReliabilityGuardianConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#description SiteReliabilityGuardian#description}
  */
  readonly description?: string;
  /**
  * If set to null/'BIZ_EVENT' validation events stored as bizevents in Grail. If set to 'SDLC_EVENT' validation events stored as SDLC events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#event_kind SiteReliabilityGuardian#event_kind}
  */
  readonly eventKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#id SiteReliabilityGuardian#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#name SiteReliabilityGuardian#name}
  */
  readonly name: string;
  /**
  * Define key/value pairs that further describe this guardian.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#tags SiteReliabilityGuardian#tags}
  */
  readonly tags?: string[];
  /**
  * objectives block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#objectives SiteReliabilityGuardian#objectives}
  */
  readonly objectives: SiteReliabilityGuardianObjectives;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#variables SiteReliabilityGuardian#variables}
  */
  readonly variables?: SiteReliabilityGuardianVariables;
}
export interface SiteReliabilityGuardianObjectivesObjectiveDisplayUnit {
  /**
  * Base Unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#base SiteReliabilityGuardian#base}
  */
  readonly base: string;
  /**
  * Decimals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#decimals SiteReliabilityGuardian#decimals}
  */
  readonly decimals: number;
  /**
  * display as unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#display SiteReliabilityGuardian#display}
  */
  readonly display: string;
}

export function siteReliabilityGuardianObjectivesObjectiveDisplayUnitToTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveDisplayUnitOutputReference | SiteReliabilityGuardianObjectivesObjectiveDisplayUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.stringToTerraform(struct!.base),
    decimals: cdktf.numberToTerraform(struct!.decimals),
    display: cdktf.stringToTerraform(struct!.display),
  }
}


export function siteReliabilityGuardianObjectivesObjectiveDisplayUnitToHclTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveDisplayUnitOutputReference | SiteReliabilityGuardianObjectivesObjectiveDisplayUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.stringToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decimals: {
      value: cdktf.numberToHclTerraform(struct!.decimals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianObjectivesObjectiveDisplayUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteReliabilityGuardianObjectivesObjectiveDisplayUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._decimals !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimals = this._decimals;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianObjectivesObjectiveDisplayUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._base = undefined;
      this._decimals = undefined;
      this._display = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._base = value.base;
      this._decimals = value.decimals;
      this._display = value.display;
    }
  }

  // base - computed: false, optional: false, required: true
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // decimals - computed: false, optional: false, required: true
  private _decimals?: number; 
  public get decimals() {
    return this.getNumberAttribute('decimals');
  }
  public set decimals(value: number) {
    this._decimals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalsInput() {
    return this._decimals;
  }

  // display - computed: false, optional: false, required: true
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }
}
export interface SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable {
  /**
  * Variable Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#name SiteReliabilityGuardian#name}
  */
  readonly name: string;
  /**
  * Variable Values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#values SiteReliabilityGuardian#values}
  */
  readonly values?: string[];
}

export function siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableToTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableToHclTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableList extends cdktf.ComplexList {
  public internalValue? : SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable[] | cdktf.IResolvable

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
  public get(index: number): SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableOutputReference {
    return new SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariables {
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#variable SiteReliabilityGuardian#variable}
  */
  readonly variable: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable[] | cdktf.IResolvable;
}

export function siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesToTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesOutputReference | SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable: cdktf.listMapper(siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableToTerraform, true)(struct!.variable),
  }
}


export function siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesToHclTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesOutputReference | SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variable: {
      value: cdktf.listMapperHcl(siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variable.internalValue = value.variable;
    }
  }

  // variable - computed: false, optional: false, required: true
  private _variable = new SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}
export interface SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment {
  /**
  * Segment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#id SiteReliabilityGuardian#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#variables SiteReliabilityGuardian#variables}
  */
  readonly variables?: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariables;
}

export function siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentToTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesToTerraform(struct!.variables),
  }
}


export function siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentToHclTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._variables.internalValue = value.variables;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentList extends cdktf.ComplexList {
  public internalValue? : SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment[] | cdktf.IResolvable

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
  public get(index: number): SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentOutputReference {
    return new SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteReliabilityGuardianObjectivesObjectiveSegments {
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#segment SiteReliabilityGuardian#segment}
  */
  readonly segment: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment[] | cdktf.IResolvable;
}

export function siteReliabilityGuardianObjectivesObjectiveSegmentsToTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsOutputReference | SiteReliabilityGuardianObjectivesObjectiveSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment: cdktf.listMapper(siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentToTerraform, true)(struct!.segment),
  }
}


export function siteReliabilityGuardianObjectivesObjectiveSegmentsToHclTerraform(struct?: SiteReliabilityGuardianObjectivesObjectiveSegmentsOutputReference | SiteReliabilityGuardianObjectivesObjectiveSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment: {
      value: cdktf.listMapperHcl(siteReliabilityGuardianObjectivesObjectiveSegmentsSegmentToHclTerraform, true)(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianObjectivesObjectiveSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteReliabilityGuardianObjectivesObjectiveSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianObjectivesObjectiveSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segment.internalValue = value.segment;
    }
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new SiteReliabilityGuardianObjectivesObjectiveSegmentsSegmentList(this, "segment", false);
  public get segment() {
    return this._segment;
  }
  public putSegment(value: SiteReliabilityGuardianObjectivesObjectiveSegmentsSegment[] | cdktf.IResolvable) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }
}
export interface SiteReliabilityGuardianObjectivesObjective {
  /**
  * Enable auto adaptive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#auto_adaptive_threshold_enabled SiteReliabilityGuardian#auto_adaptive_threshold_enabled}
  */
  readonly autoAdaptiveThresholdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `GREATER_THAN_OR_EQUAL`, `LESS_THAN_OR_EQUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#comparison_operator SiteReliabilityGuardian#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#description SiteReliabilityGuardian#description}
  */
  readonly description?: string;
  /**
  * DQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#dql_query SiteReliabilityGuardian#dql_query}
  */
  readonly dqlQuery?: string;
  /**
  * Objective name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#name SiteReliabilityGuardian#name}
  */
  readonly name: string;
  /**
  * Possible Values: `DQL`, `REFERENCE_SLO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#objective_type SiteReliabilityGuardian#objective_type}
  */
  readonly objectiveType: string;
  /**
  * Please enter the metric key of your desired SLO. SLO metric keys have to start with 'func:slo.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#reference_slo SiteReliabilityGuardian#reference_slo}
  */
  readonly referenceSlo?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#target SiteReliabilityGuardian#target}
  */
  readonly target?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#warning SiteReliabilityGuardian#warning}
  */
  readonly warning?: number;
  /**
  * display_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#display_unit SiteReliabilityGuardian#display_unit}
  */
  readonly displayUnit?: SiteReliabilityGuardianObjectivesObjectiveDisplayUnit;
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#segments SiteReliabilityGuardian#segments}
  */
  readonly segments?: SiteReliabilityGuardianObjectivesObjectiveSegments;
}

export function siteReliabilityGuardianObjectivesObjectiveToTerraform(struct?: SiteReliabilityGuardianObjectivesObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_adaptive_threshold_enabled: cdktf.booleanToTerraform(struct!.autoAdaptiveThresholdEnabled),
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    description: cdktf.stringToTerraform(struct!.description),
    dql_query: cdktf.stringToTerraform(struct!.dqlQuery),
    name: cdktf.stringToTerraform(struct!.name),
    objective_type: cdktf.stringToTerraform(struct!.objectiveType),
    reference_slo: cdktf.stringToTerraform(struct!.referenceSlo),
    target: cdktf.numberToTerraform(struct!.target),
    warning: cdktf.numberToTerraform(struct!.warning),
    display_unit: siteReliabilityGuardianObjectivesObjectiveDisplayUnitToTerraform(struct!.displayUnit),
    segments: siteReliabilityGuardianObjectivesObjectiveSegmentsToTerraform(struct!.segments),
  }
}


export function siteReliabilityGuardianObjectivesObjectiveToHclTerraform(struct?: SiteReliabilityGuardianObjectivesObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_adaptive_threshold_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoAdaptiveThresholdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dql_query: {
      value: cdktf.stringToHclTerraform(struct!.dqlQuery),
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
    objective_type: {
      value: cdktf.stringToHclTerraform(struct!.objectiveType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_slo: {
      value: cdktf.stringToHclTerraform(struct!.referenceSlo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_unit: {
      value: siteReliabilityGuardianObjectivesObjectiveDisplayUnitToHclTerraform(struct!.displayUnit),
      isBlock: true,
      type: "list",
      storageClassType: "SiteReliabilityGuardianObjectivesObjectiveDisplayUnitList",
    },
    segments: {
      value: siteReliabilityGuardianObjectivesObjectiveSegmentsToHclTerraform(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "SiteReliabilityGuardianObjectivesObjectiveSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianObjectivesObjectiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteReliabilityGuardianObjectivesObjective | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAdaptiveThresholdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAdaptiveThresholdEnabled = this._autoAdaptiveThresholdEnabled;
    }
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.dqlQuery = this._dqlQuery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectiveType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectiveType = this._objectiveType;
    }
    if (this._referenceSlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceSlo = this._referenceSlo;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._displayUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayUnit = this._displayUnit?.internalValue;
    }
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianObjectivesObjective | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoAdaptiveThresholdEnabled = undefined;
      this._comparisonOperator = undefined;
      this._description = undefined;
      this._dqlQuery = undefined;
      this._name = undefined;
      this._objectiveType = undefined;
      this._referenceSlo = undefined;
      this._target = undefined;
      this._warning = undefined;
      this._displayUnit.internalValue = undefined;
      this._segments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoAdaptiveThresholdEnabled = value.autoAdaptiveThresholdEnabled;
      this._comparisonOperator = value.comparisonOperator;
      this._description = value.description;
      this._dqlQuery = value.dqlQuery;
      this._name = value.name;
      this._objectiveType = value.objectiveType;
      this._referenceSlo = value.referenceSlo;
      this._target = value.target;
      this._warning = value.warning;
      this._displayUnit.internalValue = value.displayUnit;
      this._segments.internalValue = value.segments;
    }
  }

  // auto_adaptive_threshold_enabled - computed: false, optional: true, required: false
  private _autoAdaptiveThresholdEnabled?: boolean | cdktf.IResolvable; 
  public get autoAdaptiveThresholdEnabled() {
    return this.getBooleanAttribute('auto_adaptive_threshold_enabled');
  }
  public set autoAdaptiveThresholdEnabled(value: boolean | cdktf.IResolvable) {
    this._autoAdaptiveThresholdEnabled = value;
  }
  public resetAutoAdaptiveThresholdEnabled() {
    this._autoAdaptiveThresholdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAdaptiveThresholdEnabledInput() {
    return this._autoAdaptiveThresholdEnabled;
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
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

  // dql_query - computed: false, optional: true, required: false
  private _dqlQuery?: string; 
  public get dqlQuery() {
    return this.getStringAttribute('dql_query');
  }
  public set dqlQuery(value: string) {
    this._dqlQuery = value;
  }
  public resetDqlQuery() {
    this._dqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlQueryInput() {
    return this._dqlQuery;
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

  // objective_type - computed: false, optional: false, required: true
  private _objectiveType?: string; 
  public get objectiveType() {
    return this.getStringAttribute('objective_type');
  }
  public set objectiveType(value: string) {
    this._objectiveType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveTypeInput() {
    return this._objectiveType;
  }

  // reference_slo - computed: false, optional: true, required: false
  private _referenceSlo?: string; 
  public get referenceSlo() {
    return this.getStringAttribute('reference_slo');
  }
  public set referenceSlo(value: string) {
    this._referenceSlo = value;
  }
  public resetReferenceSlo() {
    this._referenceSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceSloInput() {
    return this._referenceSlo;
  }

  // target - computed: false, optional: true, required: false
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // display_unit - computed: false, optional: true, required: false
  private _displayUnit = new SiteReliabilityGuardianObjectivesObjectiveDisplayUnitOutputReference(this, "display_unit");
  public get displayUnit() {
    return this._displayUnit;
  }
  public putDisplayUnit(value: SiteReliabilityGuardianObjectivesObjectiveDisplayUnit) {
    this._displayUnit.internalValue = value;
  }
  public resetDisplayUnit() {
    this._displayUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayUnitInput() {
    return this._displayUnit.internalValue;
  }

  // segments - computed: false, optional: true, required: false
  private _segments = new SiteReliabilityGuardianObjectivesObjectiveSegmentsOutputReference(this, "segments");
  public get segments() {
    return this._segments;
  }
  public putSegments(value: SiteReliabilityGuardianObjectivesObjectiveSegments) {
    this._segments.internalValue = value;
  }
  public resetSegments() {
    this._segments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}

export class SiteReliabilityGuardianObjectivesObjectiveList extends cdktf.ComplexList {
  public internalValue? : SiteReliabilityGuardianObjectivesObjective[] | cdktf.IResolvable

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
  public get(index: number): SiteReliabilityGuardianObjectivesObjectiveOutputReference {
    return new SiteReliabilityGuardianObjectivesObjectiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteReliabilityGuardianObjectives {
  /**
  * objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#objective SiteReliabilityGuardian#objective}
  */
  readonly objective: SiteReliabilityGuardianObjectivesObjective[] | cdktf.IResolvable;
}

export function siteReliabilityGuardianObjectivesToTerraform(struct?: SiteReliabilityGuardianObjectivesOutputReference | SiteReliabilityGuardianObjectives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objective: cdktf.listMapper(siteReliabilityGuardianObjectivesObjectiveToTerraform, true)(struct!.objective),
  }
}


export function siteReliabilityGuardianObjectivesToHclTerraform(struct?: SiteReliabilityGuardianObjectivesOutputReference | SiteReliabilityGuardianObjectives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objective: {
      value: cdktf.listMapperHcl(siteReliabilityGuardianObjectivesObjectiveToHclTerraform, true)(struct!.objective),
      isBlock: true,
      type: "list",
      storageClassType: "SiteReliabilityGuardianObjectivesObjectiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianObjectivesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteReliabilityGuardianObjectives | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objective = this._objective?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianObjectives | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objective.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objective.internalValue = value.objective;
    }
  }

  // objective - computed: false, optional: false, required: true
  private _objective = new SiteReliabilityGuardianObjectivesObjectiveList(this, "objective", false);
  public get objective() {
    return this._objective;
  }
  public putObjective(value: SiteReliabilityGuardianObjectivesObjective[] | cdktf.IResolvable) {
    this._objective.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective.internalValue;
  }
}
export interface SiteReliabilityGuardianVariablesVariable {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#definition SiteReliabilityGuardian#definition}
  */
  readonly definition: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#name SiteReliabilityGuardian#name}
  */
  readonly name: string;
}

export function siteReliabilityGuardianVariablesVariableToTerraform(struct?: SiteReliabilityGuardianVariablesVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function siteReliabilityGuardianVariablesVariableToHclTerraform(struct?: SiteReliabilityGuardianVariablesVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianVariablesVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteReliabilityGuardianVariablesVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianVariablesVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._name = value.name;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
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
}

export class SiteReliabilityGuardianVariablesVariableList extends cdktf.ComplexList {
  public internalValue? : SiteReliabilityGuardianVariablesVariable[] | cdktf.IResolvable

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
  public get(index: number): SiteReliabilityGuardianVariablesVariableOutputReference {
    return new SiteReliabilityGuardianVariablesVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteReliabilityGuardianVariables {
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#variable SiteReliabilityGuardian#variable}
  */
  readonly variable: SiteReliabilityGuardianVariablesVariable[] | cdktf.IResolvable;
}

export function siteReliabilityGuardianVariablesToTerraform(struct?: SiteReliabilityGuardianVariablesOutputReference | SiteReliabilityGuardianVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable: cdktf.listMapper(siteReliabilityGuardianVariablesVariableToTerraform, true)(struct!.variable),
  }
}


export function siteReliabilityGuardianVariablesToHclTerraform(struct?: SiteReliabilityGuardianVariablesOutputReference | SiteReliabilityGuardianVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variable: {
      value: cdktf.listMapperHcl(siteReliabilityGuardianVariablesVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "SiteReliabilityGuardianVariablesVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteReliabilityGuardianVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteReliabilityGuardianVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteReliabilityGuardianVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variable.internalValue = value.variable;
    }
  }

  // variable - computed: false, optional: false, required: true
  private _variable = new SiteReliabilityGuardianVariablesVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: SiteReliabilityGuardianVariablesVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian dynatrace_site_reliability_guardian}
*/
export class SiteReliabilityGuardian extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_site_reliability_guardian";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteReliabilityGuardian resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteReliabilityGuardian to import
  * @param importFromId The id of the existing SiteReliabilityGuardian that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteReliabilityGuardian to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_site_reliability_guardian", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/site_reliability_guardian dynatrace_site_reliability_guardian} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteReliabilityGuardianConfig
  */
  public constructor(scope: Construct, id: string, config: SiteReliabilityGuardianConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_site_reliability_guardian',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._eventKind = config.eventKind;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._objectives.internalValue = config.objectives;
    this._variables.internalValue = config.variables;
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

  // event_kind - computed: false, optional: true, required: false
  private _eventKind?: string; 
  public get eventKind() {
    return this.getStringAttribute('event_kind');
  }
  public set eventKind(value: string) {
    this._eventKind = value;
  }
  public resetEventKind() {
    this._eventKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventKindInput() {
    return this._eventKind;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // objectives - computed: false, optional: false, required: true
  private _objectives = new SiteReliabilityGuardianObjectivesOutputReference(this, "objectives");
  public get objectives() {
    return this._objectives;
  }
  public putObjectives(value: SiteReliabilityGuardianObjectives) {
    this._objectives.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectivesInput() {
    return this._objectives.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new SiteReliabilityGuardianVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: SiteReliabilityGuardianVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_kind: cdktf.stringToTerraform(this._eventKind),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      objectives: siteReliabilityGuardianObjectivesToTerraform(this._objectives.internalValue),
      variables: siteReliabilityGuardianVariablesToTerraform(this._variables.internalValue),
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
      event_kind: {
        value: cdktf.stringToHclTerraform(this._eventKind),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      objectives: {
        value: siteReliabilityGuardianObjectivesToHclTerraform(this._objectives.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteReliabilityGuardianObjectivesList",
      },
      variables: {
        value: siteReliabilityGuardianVariablesToHclTerraform(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteReliabilityGuardianVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
