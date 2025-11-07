// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformSloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#description PlatformSlo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#id PlatformSlo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#name PlatformSlo#name}
  */
  readonly name: string;
  /**
  * Tags of the SLO. Example: `Stage:DEV`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#tags PlatformSlo#tags}
  */
  readonly tags?: string[];
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#criteria PlatformSlo#criteria}
  */
  readonly criteria: PlatformSloCriteria;
  /**
  * custom_sli block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#custom_sli PlatformSlo#custom_sli}
  */
  readonly customSli?: PlatformSloCustomSli;
  /**
  * sli_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#sli_reference PlatformSlo#sli_reference}
  */
  readonly sliReference?: PlatformSloSliReference;
}
export interface PlatformSloCriteriaCriteriaDetail {
  /**
  * Criteria target, example: `99.8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#target PlatformSlo#target}
  */
  readonly target: number;
  /**
  * Timeframe from, example: `now-7d`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#timeframe_from PlatformSlo#timeframe_from}
  */
  readonly timeframeFrom: string;
  /**
  * Timeframe to, example: `now`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#timeframe_to PlatformSlo#timeframe_to}
  */
  readonly timeframeTo?: string;
  /**
  * Criteria warning, example: `99.9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#warning PlatformSlo#warning}
  */
  readonly warning?: number;
}

export function platformSloCriteriaCriteriaDetailToTerraform(struct?: PlatformSloCriteriaCriteriaDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.numberToTerraform(struct!.target),
    timeframe_from: cdktf.stringToTerraform(struct!.timeframeFrom),
    timeframe_to: cdktf.stringToTerraform(struct!.timeframeTo),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function platformSloCriteriaCriteriaDetailToHclTerraform(struct?: PlatformSloCriteriaCriteriaDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeframe_from: {
      value: cdktf.stringToHclTerraform(struct!.timeframeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframe_to: {
      value: cdktf.stringToHclTerraform(struct!.timeframeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloCriteriaCriteriaDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformSloCriteriaCriteriaDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeframeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframeFrom = this._timeframeFrom;
    }
    if (this._timeframeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframeTo = this._timeframeTo;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloCriteriaCriteriaDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._timeframeFrom = undefined;
      this._timeframeTo = undefined;
      this._warning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._timeframeFrom = value.timeframeFrom;
      this._timeframeTo = value.timeframeTo;
      this._warning = value.warning;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeframe_from - computed: false, optional: false, required: true
  private _timeframeFrom?: string; 
  public get timeframeFrom() {
    return this.getStringAttribute('timeframe_from');
  }
  public set timeframeFrom(value: string) {
    this._timeframeFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeFromInput() {
    return this._timeframeFrom;
  }

  // timeframe_to - computed: false, optional: true, required: false
  private _timeframeTo?: string; 
  public get timeframeTo() {
    return this.getStringAttribute('timeframe_to');
  }
  public set timeframeTo(value: string) {
    this._timeframeTo = value;
  }
  public resetTimeframeTo() {
    this._timeframeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeToInput() {
    return this._timeframeTo;
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
}

export class PlatformSloCriteriaCriteriaDetailList extends cdktf.ComplexList {
  public internalValue? : PlatformSloCriteriaCriteriaDetail[] | cdktf.IResolvable

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
  public get(index: number): PlatformSloCriteriaCriteriaDetailOutputReference {
    return new PlatformSloCriteriaCriteriaDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformSloCriteria {
  /**
  * criteria_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#criteria_detail PlatformSlo#criteria_detail}
  */
  readonly criteriaDetail: PlatformSloCriteriaCriteriaDetail[] | cdktf.IResolvable;
}

export function platformSloCriteriaToTerraform(struct?: PlatformSloCriteriaOutputReference | PlatformSloCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria_detail: cdktf.listMapper(platformSloCriteriaCriteriaDetailToTerraform, true)(struct!.criteriaDetail),
  }
}


export function platformSloCriteriaToHclTerraform(struct?: PlatformSloCriteriaOutputReference | PlatformSloCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria_detail: {
      value: cdktf.listMapperHcl(platformSloCriteriaCriteriaDetailToHclTerraform, true)(struct!.criteriaDetail),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloCriteriaCriteriaDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteriaDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteriaDetail = this._criteriaDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteriaDetail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteriaDetail.internalValue = value.criteriaDetail;
    }
  }

  // criteria_detail - computed: false, optional: false, required: true
  private _criteriaDetail = new PlatformSloCriteriaCriteriaDetailList(this, "criteria_detail", false);
  public get criteriaDetail() {
    return this._criteriaDetail;
  }
  public putCriteriaDetail(value: PlatformSloCriteriaCriteriaDetail[] | cdktf.IResolvable) {
    this._criteriaDetail.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaDetailInput() {
    return this._criteriaDetail.internalValue;
  }
}
export interface PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable {
  /**
  * Name of the filter segment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#name PlatformSlo#name}
  */
  readonly name: string;
  /**
  * Values of the filter segment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#values PlatformSlo#values}
  */
  readonly values: string[];
}

export function platformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableToTerraform(struct?: PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function platformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableToHclTerraform(struct?: PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableList extends cdktf.ComplexList {
  public internalValue? : PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable[] | cdktf.IResolvable

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
  public get(index: number): PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableOutputReference {
    return new PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformSloCustomSliFilterSegmentsFilterSegmentVariables {
  /**
  * filter_segment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#filter_segment_variable PlatformSlo#filter_segment_variable}
  */
  readonly filterSegmentVariable: PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable[] | cdktf.IResolvable;
}

export function platformSloCustomSliFilterSegmentsFilterSegmentVariablesToTerraform(struct?: PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesOutputReference | PlatformSloCustomSliFilterSegmentsFilterSegmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_segment_variable: cdktf.listMapper(platformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableToTerraform, true)(struct!.filterSegmentVariable),
  }
}


export function platformSloCustomSliFilterSegmentsFilterSegmentVariablesToHclTerraform(struct?: PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesOutputReference | PlatformSloCustomSliFilterSegmentsFilterSegmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_segment_variable: {
      value: cdktf.listMapperHcl(platformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableToHclTerraform, true)(struct!.filterSegmentVariable),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloCustomSliFilterSegmentsFilterSegmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterSegmentVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSegmentVariable = this._filterSegmentVariable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloCustomSliFilterSegmentsFilterSegmentVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterSegmentVariable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterSegmentVariable.internalValue = value.filterSegmentVariable;
    }
  }

  // filter_segment_variable - computed: false, optional: false, required: true
  private _filterSegmentVariable = new PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariableList(this, "filter_segment_variable", false);
  public get filterSegmentVariable() {
    return this._filterSegmentVariable;
  }
  public putFilterSegmentVariable(value: PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesFilterSegmentVariable[] | cdktf.IResolvable) {
    this._filterSegmentVariable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSegmentVariableInput() {
    return this._filterSegmentVariable.internalValue;
  }
}
export interface PlatformSloCustomSliFilterSegmentsFilterSegment {
  /**
  * The ID of the filter segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#id PlatformSlo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#variables PlatformSlo#variables}
  */
  readonly variables?: PlatformSloCustomSliFilterSegmentsFilterSegmentVariables;
}

export function platformSloCustomSliFilterSegmentsFilterSegmentToTerraform(struct?: PlatformSloCustomSliFilterSegmentsFilterSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: platformSloCustomSliFilterSegmentsFilterSegmentVariablesToTerraform(struct!.variables),
  }
}


export function platformSloCustomSliFilterSegmentsFilterSegmentToHclTerraform(struct?: PlatformSloCustomSliFilterSegmentsFilterSegment | cdktf.IResolvable): any {
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
      value: platformSloCustomSliFilterSegmentsFilterSegmentVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloCustomSliFilterSegmentsFilterSegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformSloCustomSliFilterSegmentsFilterSegment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformSloCustomSliFilterSegmentsFilterSegment | cdktf.IResolvable | undefined) {
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
  private _variables = new PlatformSloCustomSliFilterSegmentsFilterSegmentVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: PlatformSloCustomSliFilterSegmentsFilterSegmentVariables) {
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

export class PlatformSloCustomSliFilterSegmentsFilterSegmentList extends cdktf.ComplexList {
  public internalValue? : PlatformSloCustomSliFilterSegmentsFilterSegment[] | cdktf.IResolvable

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
  public get(index: number): PlatformSloCustomSliFilterSegmentsFilterSegmentOutputReference {
    return new PlatformSloCustomSliFilterSegmentsFilterSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformSloCustomSliFilterSegments {
  /**
  * filter_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#filter_segment PlatformSlo#filter_segment}
  */
  readonly filterSegment: PlatformSloCustomSliFilterSegmentsFilterSegment[] | cdktf.IResolvable;
}

export function platformSloCustomSliFilterSegmentsToTerraform(struct?: PlatformSloCustomSliFilterSegmentsOutputReference | PlatformSloCustomSliFilterSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_segment: cdktf.listMapper(platformSloCustomSliFilterSegmentsFilterSegmentToTerraform, true)(struct!.filterSegment),
  }
}


export function platformSloCustomSliFilterSegmentsToHclTerraform(struct?: PlatformSloCustomSliFilterSegmentsOutputReference | PlatformSloCustomSliFilterSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_segment: {
      value: cdktf.listMapperHcl(platformSloCustomSliFilterSegmentsFilterSegmentToHclTerraform, true)(struct!.filterSegment),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloCustomSliFilterSegmentsFilterSegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloCustomSliFilterSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloCustomSliFilterSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSegment = this._filterSegment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloCustomSliFilterSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterSegment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterSegment.internalValue = value.filterSegment;
    }
  }

  // filter_segment - computed: false, optional: false, required: true
  private _filterSegment = new PlatformSloCustomSliFilterSegmentsFilterSegmentList(this, "filter_segment", false);
  public get filterSegment() {
    return this._filterSegment;
  }
  public putFilterSegment(value: PlatformSloCustomSliFilterSegmentsFilterSegment[] | cdktf.IResolvable) {
    this._filterSegment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSegmentInput() {
    return this._filterSegment.internalValue;
  }
}
export interface PlatformSloCustomSli {
  /**
  * Indicator of the custom SLI. Example: `timeseries sli=avg(dt.host.cpu.idle)`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#indicator PlatformSlo#indicator}
  */
  readonly indicator: string;
  /**
  * filter_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#filter_segments PlatformSlo#filter_segments}
  */
  readonly filterSegments?: PlatformSloCustomSliFilterSegments;
}

export function platformSloCustomSliToTerraform(struct?: PlatformSloCustomSliOutputReference | PlatformSloCustomSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator: cdktf.stringToTerraform(struct!.indicator),
    filter_segments: platformSloCustomSliFilterSegmentsToTerraform(struct!.filterSegments),
  }
}


export function platformSloCustomSliToHclTerraform(struct?: PlatformSloCustomSliOutputReference | PlatformSloCustomSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator: {
      value: cdktf.stringToHclTerraform(struct!.indicator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_segments: {
      value: platformSloCustomSliFilterSegmentsToHclTerraform(struct!.filterSegments),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloCustomSliFilterSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloCustomSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloCustomSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicator = this._indicator;
    }
    if (this._filterSegments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSegments = this._filterSegments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloCustomSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indicator = undefined;
      this._filterSegments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indicator = value.indicator;
      this._filterSegments.internalValue = value.filterSegments;
    }
  }

  // indicator - computed: false, optional: false, required: true
  private _indicator?: string; 
  public get indicator() {
    return this.getStringAttribute('indicator');
  }
  public set indicator(value: string) {
    this._indicator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorInput() {
    return this._indicator;
  }

  // filter_segments - computed: false, optional: true, required: false
  private _filterSegments = new PlatformSloCustomSliFilterSegmentsOutputReference(this, "filter_segments");
  public get filterSegments() {
    return this._filterSegments;
  }
  public putFilterSegments(value: PlatformSloCustomSliFilterSegments) {
    this._filterSegments.internalValue = value;
  }
  public resetFilterSegments() {
    this._filterSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSegmentsInput() {
    return this._filterSegments.internalValue;
  }
}
export interface PlatformSloSliReferenceVariablesSliReferenceVariable {
  /**
  * Name of the SLI reference variable. Example: `hostIds`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#name PlatformSlo#name}
  */
  readonly name: string;
  /**
  * Value of the SLI reference variable. Example: `HOST-123456789ABCDEFG`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#value PlatformSlo#value}
  */
  readonly value: string;
}

export function platformSloSliReferenceVariablesSliReferenceVariableToTerraform(struct?: PlatformSloSliReferenceVariablesSliReferenceVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformSloSliReferenceVariablesSliReferenceVariableToHclTerraform(struct?: PlatformSloSliReferenceVariablesSliReferenceVariable | cdktf.IResolvable): any {
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

export class PlatformSloSliReferenceVariablesSliReferenceVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformSloSliReferenceVariablesSliReferenceVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformSloSliReferenceVariablesSliReferenceVariable | cdktf.IResolvable | undefined) {
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

export class PlatformSloSliReferenceVariablesSliReferenceVariableList extends cdktf.ComplexList {
  public internalValue? : PlatformSloSliReferenceVariablesSliReferenceVariable[] | cdktf.IResolvable

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
  public get(index: number): PlatformSloSliReferenceVariablesSliReferenceVariableOutputReference {
    return new PlatformSloSliReferenceVariablesSliReferenceVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformSloSliReferenceVariables {
  /**
  * sli_reference_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#sli_reference_variable PlatformSlo#sli_reference_variable}
  */
  readonly sliReferenceVariable: PlatformSloSliReferenceVariablesSliReferenceVariable[] | cdktf.IResolvable;
}

export function platformSloSliReferenceVariablesToTerraform(struct?: PlatformSloSliReferenceVariablesOutputReference | PlatformSloSliReferenceVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sli_reference_variable: cdktf.listMapper(platformSloSliReferenceVariablesSliReferenceVariableToTerraform, true)(struct!.sliReferenceVariable),
  }
}


export function platformSloSliReferenceVariablesToHclTerraform(struct?: PlatformSloSliReferenceVariablesOutputReference | PlatformSloSliReferenceVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sli_reference_variable: {
      value: cdktf.listMapperHcl(platformSloSliReferenceVariablesSliReferenceVariableToHclTerraform, true)(struct!.sliReferenceVariable),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloSliReferenceVariablesSliReferenceVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloSliReferenceVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloSliReferenceVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sliReferenceVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliReferenceVariable = this._sliReferenceVariable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloSliReferenceVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sliReferenceVariable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sliReferenceVariable.internalValue = value.sliReferenceVariable;
    }
  }

  // sli_reference_variable - computed: false, optional: false, required: true
  private _sliReferenceVariable = new PlatformSloSliReferenceVariablesSliReferenceVariableList(this, "sli_reference_variable", false);
  public get sliReferenceVariable() {
    return this._sliReferenceVariable;
  }
  public putSliReferenceVariable(value: PlatformSloSliReferenceVariablesSliReferenceVariable[] | cdktf.IResolvable) {
    this._sliReferenceVariable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliReferenceVariableInput() {
    return this._sliReferenceVariable.internalValue;
  }
}
export interface PlatformSloSliReference {
  /**
  * Template ID of the SLI reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#template_id PlatformSlo#template_id}
  */
  readonly templateId: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#variables PlatformSlo#variables}
  */
  readonly variables: PlatformSloSliReferenceVariables;
}

export function platformSloSliReferenceToTerraform(struct?: PlatformSloSliReferenceOutputReference | PlatformSloSliReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_id: cdktf.stringToTerraform(struct!.templateId),
    variables: platformSloSliReferenceVariablesToTerraform(struct!.variables),
  }
}


export function platformSloSliReferenceToHclTerraform(struct?: PlatformSloSliReferenceOutputReference | PlatformSloSliReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: platformSloSliReferenceVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloSliReferenceVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloSliReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloSliReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloSliReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateId = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateId = value.templateId;
      this._variables.internalValue = value.variables;
    }
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // variables - computed: false, optional: false, required: true
  private _variables = new PlatformSloSliReferenceVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: PlatformSloSliReferenceVariables) {
    this._variables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo dynatrace_platform_slo}
*/
export class PlatformSlo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_platform_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformSlo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformSlo to import
  * @param importFromId The id of the existing PlatformSlo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformSlo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_platform_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/platform_slo dynatrace_platform_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformSloConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformSloConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_platform_slo',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._criteria.internalValue = config.criteria;
    this._customSli.internalValue = config.customSli;
    this._sliReference.internalValue = config.sliReference;
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

  // criteria - computed: false, optional: false, required: true
  private _criteria = new PlatformSloCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: PlatformSloCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // custom_sli - computed: false, optional: true, required: false
  private _customSli = new PlatformSloCustomSliOutputReference(this, "custom_sli");
  public get customSli() {
    return this._customSli;
  }
  public putCustomSli(value: PlatformSloCustomSli) {
    this._customSli.internalValue = value;
  }
  public resetCustomSli() {
    this._customSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSliInput() {
    return this._customSli.internalValue;
  }

  // sli_reference - computed: false, optional: true, required: false
  private _sliReference = new PlatformSloSliReferenceOutputReference(this, "sli_reference");
  public get sliReference() {
    return this._sliReference;
  }
  public putSliReference(value: PlatformSloSliReference) {
    this._sliReference.internalValue = value;
  }
  public resetSliReference() {
    this._sliReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliReferenceInput() {
    return this._sliReference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      criteria: platformSloCriteriaToTerraform(this._criteria.internalValue),
      custom_sli: platformSloCustomSliToTerraform(this._customSli.internalValue),
      sli_reference: platformSloSliReferenceToTerraform(this._sliReference.internalValue),
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
      criteria: {
        value: platformSloCriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSloCriteriaList",
      },
      custom_sli: {
        value: platformSloCustomSliToHclTerraform(this._customSli.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSloCustomSliList",
      },
      sli_reference: {
        value: platformSloSliReferenceToHclTerraform(this._sliReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSloSliReferenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
