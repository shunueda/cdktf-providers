// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#description Dataset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#id Dataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#slug Dataset#slug}
  */
  readonly slug?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#configuration Dataset#configuration}
  */
  readonly configuration: DatasetConfiguration;
}
export interface DatasetConfigurationLogDatasetMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#query Dataset#query}
  */
  readonly query: string;
}

export function datasetConfigurationLogDatasetMatchCriteriaToTerraform(struct?: DatasetConfigurationLogDatasetMatchCriteriaOutputReference | DatasetConfigurationLogDatasetMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function datasetConfigurationLogDatasetMatchCriteriaToHclTerraform(struct?: DatasetConfigurationLogDatasetMatchCriteriaOutputReference | DatasetConfigurationLogDatasetMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationLogDatasetMatchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationLogDatasetMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationLogDatasetMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface DatasetConfigurationLogDataset {
  /**
  * match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match_criteria Dataset#match_criteria}
  */
  readonly matchCriteria?: DatasetConfigurationLogDatasetMatchCriteria;
}

export function datasetConfigurationLogDatasetToTerraform(struct?: DatasetConfigurationLogDatasetOutputReference | DatasetConfigurationLogDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: datasetConfigurationLogDatasetMatchCriteriaToTerraform(struct!.matchCriteria),
  }
}


export function datasetConfigurationLogDatasetToHclTerraform(struct?: DatasetConfigurationLogDatasetOutputReference | DatasetConfigurationLogDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: datasetConfigurationLogDatasetMatchCriteriaToHclTerraform(struct!.matchCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationLogDatasetMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationLogDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationLogDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationLogDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchCriteria.internalValue = value.matchCriteria;
    }
  }

  // match_criteria - computed: false, optional: true, required: false
  private _matchCriteria = new DatasetConfigurationLogDatasetMatchCriteriaOutputReference(this, "match_criteria");
  public get matchCriteria() {
    return this._matchCriteria;
  }
  public putMatchCriteria(value: DatasetConfigurationLogDatasetMatchCriteria) {
    this._matchCriteria.internalValue = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria.internalValue;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#max_secs Dataset#max_secs}
  */
  readonly maxSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#min_secs Dataset#min_secs}
  */
  readonly minSecs?: number;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanDurationToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanDurationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_secs: cdktf.numberToTerraform(struct!.maxSecs),
    min_secs: cdktf.numberToTerraform(struct!.minSecs),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanDurationToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanDurationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_secs: {
      value: cdktf.numberToHclTerraform(struct!.maxSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_secs: {
      value: cdktf.numberToHclTerraform(struct!.minSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSecs = this._maxSecs;
    }
    if (this._minSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSecs = this._minSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSecs = undefined;
      this._minSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSecs = value.maxSecs;
      this._minSecs = value.minSecs;
    }
  }

  // max_secs - computed: false, optional: true, required: false
  private _maxSecs?: number; 
  public get maxSecs() {
    return this.getNumberAttribute('max_secs');
  }
  public set maxSecs(value: number) {
    this._maxSecs = value;
  }
  public resetMaxSecs() {
    this._maxSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSecsInput() {
    return this._maxSecs;
  }

  // min_secs - computed: false, optional: true, required: false
  private _minSecs?: number; 
  public get minSecs() {
    return this.getNumberAttribute('min_secs');
  }
  public set minSecs(value: number) {
    this._minSecs = value;
  }
  public resetMinSecs() {
    this._minSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecsInput() {
    return this._minSecs;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanErrorToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanErrorOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanErrorToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanErrorOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#in_values Dataset#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match Dataset#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value?: string;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanOperationToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanOperationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanOperationToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanOperationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#in_values Dataset#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match Dataset#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value?: string;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanParentService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#in_values Dataset#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match Dataset#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value?: string;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanParentService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanParentService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanParentService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#in_values Dataset#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match Dataset#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value?: string;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanServiceToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanServiceOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanServiceToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanServiceOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#max Dataset#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#min Dataset#min}
  */
  readonly min?: number;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#comparison Dataset#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value: number;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparison = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#in_values Dataset#in_values}
  */
  readonly inValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match Dataset#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value?: string;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanTagValueToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValueOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inValues),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanTagValueToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValueOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inValues = this._inValues;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inValues = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inValues = value.inValues;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // in_values - computed: false, optional: true, required: false
  private _inValues?: string[]; 
  public get inValues() {
    return this.getListAttribute('in_values');
  }
  public set inValues(value: string[]) {
    this._inValues = value;
  }
  public resetInValues() {
    this._inValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inValuesInput() {
    return this._inValues;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpanTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#key Dataset#key}
  */
  readonly key?: string;
  /**
  * numeric_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#numeric_value Dataset#numeric_value}
  */
  readonly numericValue?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValue;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValue;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanTagToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    numeric_value: datasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueToTerraform(struct!.numericValue),
    value: datasetConfigurationTraceDatasetMatchCriteriaSpanTagValueToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanTagToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTag | cdktf.IResolvable): any {
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
    numeric_value: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueToHclTerraform(struct!.numericValue),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueList",
    },
    value: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpanTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._numericValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericValue = this._numericValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._numericValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._numericValue.internalValue = value.numericValue;
      this._value.internalValue = value.value;
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

  // numeric_value - computed: false, optional: true, required: false
  private _numericValue = new DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValueOutputReference(this, "numeric_value");
  public get numericValue() {
    return this._numericValue;
  }
  public putNumericValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagNumericValue) {
    this._numericValue.internalValue = value;
  }
  public resetNumericValue() {
    this._numericValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericValueInput() {
    return this._numericValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanTagList extends cdktf.ComplexList {
  public internalValue? : DatasetConfigurationTraceDatasetMatchCriteriaSpanTag[] | cdktf.IResolvable

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
  public get(index: number): DatasetConfigurationTraceDatasetMatchCriteriaSpanTagOutputReference {
    return new DatasetConfigurationTraceDatasetMatchCriteriaSpanTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaSpan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match_type Dataset#match_type}
  */
  readonly matchType?: string;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#duration Dataset#duration}
  */
  readonly duration?: DatasetConfigurationTraceDatasetMatchCriteriaSpanDuration;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#error Dataset#error}
  */
  readonly error?: DatasetConfigurationTraceDatasetMatchCriteriaSpanError;
  /**
  * is_root_span block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#is_root_span Dataset#is_root_span}
  */
  readonly isRootSpan?: DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpan;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#operation Dataset#operation}
  */
  readonly operation?: DatasetConfigurationTraceDatasetMatchCriteriaSpanOperation;
  /**
  * parent_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#parent_operation Dataset#parent_operation}
  */
  readonly parentOperation?: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperation;
  /**
  * parent_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#parent_service Dataset#parent_service}
  */
  readonly parentService?: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentService;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#service Dataset#service}
  */
  readonly service?: DatasetConfigurationTraceDatasetMatchCriteriaSpanService;
  /**
  * span_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#span_count Dataset#span_count}
  */
  readonly spanCount?: DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCount;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#tag Dataset#tag}
  */
  readonly tag?: DatasetConfigurationTraceDatasetMatchCriteriaSpanTag[] | cdktf.IResolvable;
}

export function datasetConfigurationTraceDatasetMatchCriteriaSpanToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    duration: datasetConfigurationTraceDatasetMatchCriteriaSpanDurationToTerraform(struct!.duration),
    error: datasetConfigurationTraceDatasetMatchCriteriaSpanErrorToTerraform(struct!.error),
    is_root_span: datasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanToTerraform(struct!.isRootSpan),
    operation: datasetConfigurationTraceDatasetMatchCriteriaSpanOperationToTerraform(struct!.operation),
    parent_operation: datasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationToTerraform(struct!.parentOperation),
    parent_service: datasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceToTerraform(struct!.parentService),
    service: datasetConfigurationTraceDatasetMatchCriteriaSpanServiceToTerraform(struct!.service),
    span_count: datasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountToTerraform(struct!.spanCount),
    tag: cdktf.listMapper(datasetConfigurationTraceDatasetMatchCriteriaSpanTagToTerraform, true)(struct!.tag),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaSpanToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaSpan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanDurationList",
    },
    error: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanErrorList",
    },
    is_root_span: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanToHclTerraform(struct!.isRootSpan),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanList",
    },
    operation: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanOperationList",
    },
    parent_operation: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationToHclTerraform(struct!.parentOperation),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationList",
    },
    parent_service: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceToHclTerraform(struct!.parentService),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceList",
    },
    service: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanServiceList",
    },
    span_count: {
      value: datasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountToHclTerraform(struct!.spanCount),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountList",
    },
    tag: {
      value: cdktf.listMapperHcl(datasetConfigurationTraceDatasetMatchCriteriaSpanTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaSpan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._isRootSpan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRootSpan = this._isRootSpan?.internalValue;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    if (this._parentOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentOperation = this._parentOperation?.internalValue;
    }
    if (this._parentService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentService = this._parentService?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._spanCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanCount = this._spanCount?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaSpan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._duration.internalValue = undefined;
      this._error.internalValue = undefined;
      this._isRootSpan.internalValue = undefined;
      this._operation.internalValue = undefined;
      this._parentOperation.internalValue = undefined;
      this._parentService.internalValue = undefined;
      this._service.internalValue = undefined;
      this._spanCount.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._duration.internalValue = value.duration;
      this._error.internalValue = value.error;
      this._isRootSpan.internalValue = value.isRootSpan;
      this._operation.internalValue = value.operation;
      this._parentOperation.internalValue = value.parentOperation;
      this._parentService.internalValue = value.parentService;
      this._service.internalValue = value.service;
      this._spanCount.internalValue = value.spanCount;
      this._tag.internalValue = value.tag;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new DatasetConfigurationTraceDatasetMatchCriteriaSpanDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new DatasetConfigurationTraceDatasetMatchCriteriaSpanErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // is_root_span - computed: false, optional: true, required: false
  private _isRootSpan = new DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpanOutputReference(this, "is_root_span");
  public get isRootSpan() {
    return this._isRootSpan;
  }
  public putIsRootSpan(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanIsRootSpan) {
    this._isRootSpan.internalValue = value;
  }
  public resetIsRootSpan() {
    this._isRootSpan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRootSpanInput() {
    return this._isRootSpan.internalValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new DatasetConfigurationTraceDatasetMatchCriteriaSpanOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanOperation) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // parent_operation - computed: false, optional: true, required: false
  private _parentOperation = new DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperationOutputReference(this, "parent_operation");
  public get parentOperation() {
    return this._parentOperation;
  }
  public putParentOperation(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentOperation) {
    this._parentOperation.internalValue = value;
  }
  public resetParentOperation() {
    this._parentOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentOperationInput() {
    return this._parentOperation.internalValue;
  }

  // parent_service - computed: false, optional: true, required: false
  private _parentService = new DatasetConfigurationTraceDatasetMatchCriteriaSpanParentServiceOutputReference(this, "parent_service");
  public get parentService() {
    return this._parentService;
  }
  public putParentService(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanParentService) {
    this._parentService.internalValue = value;
  }
  public resetParentService() {
    this._parentService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentServiceInput() {
    return this._parentService.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DatasetConfigurationTraceDatasetMatchCriteriaSpanServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // span_count - computed: false, optional: true, required: false
  private _spanCount = new DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCountOutputReference(this, "span_count");
  public get spanCount() {
    return this._spanCount;
  }
  public putSpanCount(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanSpanCount) {
    this._spanCount.internalValue = value;
  }
  public resetSpanCount() {
    this._spanCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanCountInput() {
    return this._spanCount.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DatasetConfigurationTraceDatasetMatchCriteriaSpanTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DatasetConfigurationTraceDatasetMatchCriteriaSpanTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class DatasetConfigurationTraceDatasetMatchCriteriaSpanList extends cdktf.ComplexList {
  public internalValue? : DatasetConfigurationTraceDatasetMatchCriteriaSpan[] | cdktf.IResolvable

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
  public get(index: number): DatasetConfigurationTraceDatasetMatchCriteriaSpanOutputReference {
    return new DatasetConfigurationTraceDatasetMatchCriteriaSpanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaTraceDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#max_secs Dataset#max_secs}
  */
  readonly maxSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#min_secs Dataset#min_secs}
  */
  readonly minSecs?: number;
}

export function datasetConfigurationTraceDatasetMatchCriteriaTraceDurationToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaTraceDurationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaTraceDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_secs: cdktf.numberToTerraform(struct!.maxSecs),
    min_secs: cdktf.numberToTerraform(struct!.minSecs),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaTraceDurationToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaTraceDurationOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaTraceDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_secs: {
      value: cdktf.numberToHclTerraform(struct!.maxSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_secs: {
      value: cdktf.numberToHclTerraform(struct!.minSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaTraceDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaTraceDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSecs = this._maxSecs;
    }
    if (this._minSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSecs = this._minSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaTraceDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSecs = undefined;
      this._minSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSecs = value.maxSecs;
      this._minSecs = value.minSecs;
    }
  }

  // max_secs - computed: false, optional: true, required: false
  private _maxSecs?: number; 
  public get maxSecs() {
    return this.getNumberAttribute('max_secs');
  }
  public set maxSecs(value: number) {
    this._maxSecs = value;
  }
  public resetMaxSecs() {
    this._maxSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSecsInput() {
    return this._maxSecs;
  }

  // min_secs - computed: false, optional: true, required: false
  private _minSecs?: number; 
  public get minSecs() {
    return this.getNumberAttribute('min_secs');
  }
  public set minSecs(value: number) {
    this._minSecs = value;
  }
  public resetMinSecs() {
    this._minSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecsInput() {
    return this._minSecs;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaTraceError {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#value Dataset#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function datasetConfigurationTraceDatasetMatchCriteriaTraceErrorToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaTraceErrorOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaTraceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaTraceErrorToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaTraceErrorOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaTraceError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaTraceErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaTraceError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaTraceError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteriaTrace {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#duration Dataset#duration}
  */
  readonly duration?: DatasetConfigurationTraceDatasetMatchCriteriaTraceDuration;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#error Dataset#error}
  */
  readonly error?: DatasetConfigurationTraceDatasetMatchCriteriaTraceError;
}

export function datasetConfigurationTraceDatasetMatchCriteriaTraceToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaTraceOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: datasetConfigurationTraceDatasetMatchCriteriaTraceDurationToTerraform(struct!.duration),
    error: datasetConfigurationTraceDatasetMatchCriteriaTraceErrorToTerraform(struct!.error),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaTraceToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaTraceOutputReference | DatasetConfigurationTraceDatasetMatchCriteriaTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: datasetConfigurationTraceDatasetMatchCriteriaTraceDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaTraceDurationList",
    },
    error: {
      value: datasetConfigurationTraceDatasetMatchCriteriaTraceErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaTraceErrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaTraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteriaTrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteriaTrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration.internalValue = undefined;
      this._error.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration.internalValue = value.duration;
      this._error.internalValue = value.error;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new DatasetConfigurationTraceDatasetMatchCriteriaTraceDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: DatasetConfigurationTraceDatasetMatchCriteriaTraceDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new DatasetConfigurationTraceDatasetMatchCriteriaTraceErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DatasetConfigurationTraceDatasetMatchCriteriaTraceError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }
}
export interface DatasetConfigurationTraceDatasetMatchCriteria {
  /**
  * span block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#span Dataset#span}
  */
  readonly span?: DatasetConfigurationTraceDatasetMatchCriteriaSpan[] | cdktf.IResolvable;
  /**
  * trace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#trace Dataset#trace}
  */
  readonly trace?: DatasetConfigurationTraceDatasetMatchCriteriaTrace;
}

export function datasetConfigurationTraceDatasetMatchCriteriaToTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaOutputReference | DatasetConfigurationTraceDatasetMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    span: cdktf.listMapper(datasetConfigurationTraceDatasetMatchCriteriaSpanToTerraform, true)(struct!.span),
    trace: datasetConfigurationTraceDatasetMatchCriteriaTraceToTerraform(struct!.trace),
  }
}


export function datasetConfigurationTraceDatasetMatchCriteriaToHclTerraform(struct?: DatasetConfigurationTraceDatasetMatchCriteriaOutputReference | DatasetConfigurationTraceDatasetMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    span: {
      value: cdktf.listMapperHcl(datasetConfigurationTraceDatasetMatchCriteriaSpanToHclTerraform, true)(struct!.span),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaSpanList",
    },
    trace: {
      value: datasetConfigurationTraceDatasetMatchCriteriaTraceToHclTerraform(struct!.trace),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaTraceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetMatchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDatasetMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._span?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.span = this._span?.internalValue;
    }
    if (this._trace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trace = this._trace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDatasetMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._span.internalValue = undefined;
      this._trace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._span.internalValue = value.span;
      this._trace.internalValue = value.trace;
    }
  }

  // span - computed: false, optional: true, required: false
  private _span = new DatasetConfigurationTraceDatasetMatchCriteriaSpanList(this, "span", false);
  public get span() {
    return this._span;
  }
  public putSpan(value: DatasetConfigurationTraceDatasetMatchCriteriaSpan[] | cdktf.IResolvable) {
    this._span.internalValue = value;
  }
  public resetSpan() {
    this._span.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span.internalValue;
  }

  // trace - computed: false, optional: true, required: false
  private _trace = new DatasetConfigurationTraceDatasetMatchCriteriaTraceOutputReference(this, "trace");
  public get trace() {
    return this._trace;
  }
  public putTrace(value: DatasetConfigurationTraceDatasetMatchCriteriaTrace) {
    this._trace.internalValue = value;
  }
  public resetTrace() {
    this._trace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace.internalValue;
  }
}
export interface DatasetConfigurationTraceDataset {
  /**
  * match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#match_criteria Dataset#match_criteria}
  */
  readonly matchCriteria: DatasetConfigurationTraceDatasetMatchCriteria;
}

export function datasetConfigurationTraceDatasetToTerraform(struct?: DatasetConfigurationTraceDatasetOutputReference | DatasetConfigurationTraceDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: datasetConfigurationTraceDatasetMatchCriteriaToTerraform(struct!.matchCriteria),
  }
}


export function datasetConfigurationTraceDatasetToHclTerraform(struct?: DatasetConfigurationTraceDatasetOutputReference | DatasetConfigurationTraceDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: datasetConfigurationTraceDatasetMatchCriteriaToHclTerraform(struct!.matchCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationTraceDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfigurationTraceDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfigurationTraceDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchCriteria.internalValue = value.matchCriteria;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria = new DatasetConfigurationTraceDatasetMatchCriteriaOutputReference(this, "match_criteria");
  public get matchCriteria() {
    return this._matchCriteria;
  }
  public putMatchCriteria(value: DatasetConfigurationTraceDatasetMatchCriteria) {
    this._matchCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria.internalValue;
  }
}
export interface DatasetConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#type Dataset#type}
  */
  readonly type: string;
  /**
  * log_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#log_dataset Dataset#log_dataset}
  */
  readonly logDataset?: DatasetConfigurationLogDataset;
  /**
  * trace_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#trace_dataset Dataset#trace_dataset}
  */
  readonly traceDataset?: DatasetConfigurationTraceDataset;
}

export function datasetConfigurationToTerraform(struct?: DatasetConfigurationOutputReference | DatasetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    log_dataset: datasetConfigurationLogDatasetToTerraform(struct!.logDataset),
    trace_dataset: datasetConfigurationTraceDatasetToTerraform(struct!.traceDataset),
  }
}


export function datasetConfigurationToHclTerraform(struct?: DatasetConfigurationOutputReference | DatasetConfiguration): any {
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
    log_dataset: {
      value: datasetConfigurationLogDatasetToHclTerraform(struct!.logDataset),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationLogDatasetList",
    },
    trace_dataset: {
      value: datasetConfigurationTraceDatasetToHclTerraform(struct!.traceDataset),
      isBlock: true,
      type: "list",
      storageClassType: "DatasetConfigurationTraceDatasetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._logDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDataset = this._logDataset?.internalValue;
    }
    if (this._traceDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceDataset = this._traceDataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._logDataset.internalValue = undefined;
      this._traceDataset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._logDataset.internalValue = value.logDataset;
      this._traceDataset.internalValue = value.traceDataset;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // log_dataset - computed: false, optional: true, required: false
  private _logDataset = new DatasetConfigurationLogDatasetOutputReference(this, "log_dataset");
  public get logDataset() {
    return this._logDataset;
  }
  public putLogDataset(value: DatasetConfigurationLogDataset) {
    this._logDataset.internalValue = value;
  }
  public resetLogDataset() {
    this._logDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDatasetInput() {
    return this._logDataset.internalValue;
  }

  // trace_dataset - computed: false, optional: true, required: false
  private _traceDataset = new DatasetConfigurationTraceDatasetOutputReference(this, "trace_dataset");
  public get traceDataset() {
    return this._traceDataset;
  }
  public putTraceDataset(value: DatasetConfigurationTraceDataset) {
    this._traceDataset.internalValue = value;
  }
  public resetTraceDataset() {
    this._traceDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceDatasetInput() {
    return this._traceDataset.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset chronosphere_dataset}
*/
export class Dataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dataset to import
  * @param importFromId The id of the existing Dataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/dataset chronosphere_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_dataset',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0'
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
    this._slug = config.slug;
    this._configuration.internalValue = config.configuration;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DatasetConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DatasetConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      configuration: datasetConfigurationToTerraform(this._configuration.internalValue),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: datasetConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasetConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
