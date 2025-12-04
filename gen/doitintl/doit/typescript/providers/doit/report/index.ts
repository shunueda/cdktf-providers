// https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Report configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#config Report#config}
  */
  readonly config?: ReportConfigA;
  /**
  * Report description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#description Report#description}
  */
  readonly description?: string;
  /**
  * Report name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#name Report#name}
  */
  readonly name: string;
}
export interface ReportConfigAdvancedAnalysis {
  /**
  * Whether to enable forecast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#forecast Report#forecast}
  */
  readonly forecast?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable not trending analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#not_trending Report#not_trending}
  */
  readonly notTrending?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable trending down analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#trending_down Report#trending_down}
  */
  readonly trendingDown?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable trending up analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#trending_up Report#trending_up}
  */
  readonly trendingUp?: boolean | cdktf.IResolvable;
}

export function reportConfigAdvancedAnalysisToTerraform(struct?: ReportConfigAdvancedAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forecast: cdktf.booleanToTerraform(struct!.forecast),
    not_trending: cdktf.booleanToTerraform(struct!.notTrending),
    trending_down: cdktf.booleanToTerraform(struct!.trendingDown),
    trending_up: cdktf.booleanToTerraform(struct!.trendingUp),
  }
}


export function reportConfigAdvancedAnalysisToHclTerraform(struct?: ReportConfigAdvancedAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forecast: {
      value: cdktf.booleanToHclTerraform(struct!.forecast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not_trending: {
      value: cdktf.booleanToHclTerraform(struct!.notTrending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trending_down: {
      value: cdktf.booleanToHclTerraform(struct!.trendingDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trending_up: {
      value: cdktf.booleanToHclTerraform(struct!.trendingUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigAdvancedAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigAdvancedAnalysis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forecast !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecast = this._forecast;
    }
    if (this._notTrending !== undefined) {
      hasAnyValues = true;
      internalValueResult.notTrending = this._notTrending;
    }
    if (this._trendingDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendingDown = this._trendingDown;
    }
    if (this._trendingUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendingUp = this._trendingUp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigAdvancedAnalysis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forecast = undefined;
      this._notTrending = undefined;
      this._trendingDown = undefined;
      this._trendingUp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forecast = value.forecast;
      this._notTrending = value.notTrending;
      this._trendingDown = value.trendingDown;
      this._trendingUp = value.trendingUp;
    }
  }

  // forecast - computed: true, optional: true, required: false
  private _forecast?: boolean | cdktf.IResolvable; 
  public get forecast() {
    return this.getBooleanAttribute('forecast');
  }
  public set forecast(value: boolean | cdktf.IResolvable) {
    this._forecast = value;
  }
  public resetForecast() {
    this._forecast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastInput() {
    return this._forecast;
  }

  // not_trending - computed: true, optional: true, required: false
  private _notTrending?: boolean | cdktf.IResolvable; 
  public get notTrending() {
    return this.getBooleanAttribute('not_trending');
  }
  public set notTrending(value: boolean | cdktf.IResolvable) {
    this._notTrending = value;
  }
  public resetNotTrending() {
    this._notTrending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notTrendingInput() {
    return this._notTrending;
  }

  // trending_down - computed: true, optional: true, required: false
  private _trendingDown?: boolean | cdktf.IResolvable; 
  public get trendingDown() {
    return this.getBooleanAttribute('trending_down');
  }
  public set trendingDown(value: boolean | cdktf.IResolvable) {
    this._trendingDown = value;
  }
  public resetTrendingDown() {
    this._trendingDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendingDownInput() {
    return this._trendingDown;
  }

  // trending_up - computed: true, optional: true, required: false
  private _trendingUp?: boolean | cdktf.IResolvable; 
  public get trendingUp() {
    return this.getBooleanAttribute('trending_up');
  }
  public set trendingUp(value: boolean | cdktf.IResolvable) {
    this._trendingUp = value;
  }
  public resetTrendingUp() {
    this._trendingUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendingUpInput() {
    return this._trendingUp;
  }
}
export interface ReportConfigDimensions {
  /**
  * The field to apply to the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Type of the dimension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
}

export function reportConfigDimensionsToTerraform(struct?: ReportConfigDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportConfigDimensionsToHclTerraform(struct?: ReportConfigDimensions | cdktf.IResolvable): any {
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

export class ReportConfigDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
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
}

export class ReportConfigDimensionsList extends cdktf.ComplexList {
  public internalValue? : ReportConfigDimensions[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigDimensionsOutputReference {
    return new ReportConfigDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigFilters {
  /**
  * The field to filter on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Set to `true` to exclude the values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#inverse Report#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Type of the filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
  /**
  * Values to filter on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#values Report#values}
  */
  readonly values: string[];
}

export function reportConfigFiltersToTerraform(struct?: ReportConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function reportConfigFiltersToHclTerraform(struct?: ReportConfigFilters | cdktf.IResolvable): any {
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
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ReportConfigFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inverse = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inverse = value.inverse;
      this._type = value.type;
      this._values = value.values;
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

  // inverse - computed: true, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ReportConfigFiltersList extends cdktf.ComplexList {
  public internalValue? : ReportConfigFilters[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigFiltersOutputReference {
    return new ReportConfigFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigGroupLimitMetric {
  /**
  * Type of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
  /**
  * Value of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#value Report#value}
  */
  readonly value: string;
}

export function reportConfigGroupLimitMetricToTerraform(struct?: ReportConfigGroupLimitMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function reportConfigGroupLimitMetricToHclTerraform(struct?: ReportConfigGroupLimitMetric | cdktf.IResolvable): any {
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

export class ReportConfigGroupLimitMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigGroupLimitMetric | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ReportConfigGroupLimitMetric | cdktf.IResolvable | undefined) {
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
export interface ReportConfigGroupLimit {
  /**
  * Metric to sort by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#metric Report#metric}
  */
  readonly metric?: ReportConfigGroupLimitMetric;
  /**
  * Sort order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#sort Report#sort}
  */
  readonly sort?: string;
  /**
  * The number of items to show
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#value Report#value}
  */
  readonly value?: number;
}

export function reportConfigGroupLimitToTerraform(struct?: ReportConfigGroupLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: reportConfigGroupLimitMetricToTerraform(struct!.metric),
    sort: cdktf.stringToTerraform(struct!.sort),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function reportConfigGroupLimitToHclTerraform(struct?: ReportConfigGroupLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: reportConfigGroupLimitMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigGroupLimitMetric",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
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

export class ReportConfigGroupLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigGroupLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigGroupLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._sort = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._sort = value.sort;
      this._value = value.value;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new ReportConfigGroupLimitMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ReportConfigGroupLimitMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // sort - computed: true, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface ReportConfigGroup {
  /**
  * Dimension ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Limit the number of rows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#limit Report#limit}
  */
  readonly limit?: ReportConfigGroupLimit;
  /**
  * Type of the dimension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
}

export function reportConfigGroupToTerraform(struct?: ReportConfigGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    limit: reportConfigGroupLimitToTerraform(struct!.limit),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportConfigGroupToHclTerraform(struct?: ReportConfigGroup | cdktf.IResolvable): any {
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
    limit: {
      value: reportConfigGroupLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigGroupLimit",
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

export class ReportConfigGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._limit.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._limit.internalValue = value.limit;
      this._type = value.type;
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

  // limit - computed: false, optional: true, required: false
  private _limit = new ReportConfigGroupLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: ReportConfigGroupLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
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
}

export class ReportConfigGroupList extends cdktf.ComplexList {
  public internalValue? : ReportConfigGroup[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigGroupOutputReference {
    return new ReportConfigGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigMetric {
  /**
  * Type of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
  /**
  * For basic metrics the value can be one of: ["cost", "usage", "savings" 
  * If using custom metrics, the value must refer to an existing custom or calculated metric id 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#value Report#value}
  */
  readonly value: string;
}

export function reportConfigMetricToTerraform(struct?: ReportConfigMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function reportConfigMetricToHclTerraform(struct?: ReportConfigMetric | cdktf.IResolvable): any {
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

export class ReportConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigMetric | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ReportConfigMetric | cdktf.IResolvable | undefined) {
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
export interface ReportConfigMetricFilterMetric {
  /**
  * Type of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
  /**
  * Value of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#value Report#value}
  */
  readonly value: string;
}

export function reportConfigMetricFilterMetricToTerraform(struct?: ReportConfigMetricFilterMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function reportConfigMetricFilterMetricToHclTerraform(struct?: ReportConfigMetricFilterMetric | cdktf.IResolvable): any {
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

export class ReportConfigMetricFilterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigMetricFilterMetric | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ReportConfigMetricFilterMetric | cdktf.IResolvable | undefined) {
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
export interface ReportConfigMetricFilter {
  /**
  * The metric to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#metric Report#metric}
  */
  readonly metric: ReportConfigMetricFilterMetric;
  /**
  * Operator to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#operator Report#operator}
  */
  readonly operator: string;
  /**
  * Values to filter on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#values Report#values}
  */
  readonly values: number[];
}

export function reportConfigMetricFilterToTerraform(struct?: ReportConfigMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: reportConfigMetricFilterMetricToTerraform(struct!.metric),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function reportConfigMetricFilterToHclTerraform(struct?: ReportConfigMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: reportConfigMetricFilterMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigMetricFilterMetric",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigMetricFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigMetricFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new ReportConfigMetricFilterMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ReportConfigMetricFilterMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ReportConfigSplitsOrigin {
  /**
  * Origin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Origin Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
}

export function reportConfigSplitsOriginToTerraform(struct?: ReportConfigSplitsOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportConfigSplitsOriginToHclTerraform(struct?: ReportConfigSplitsOrigin | cdktf.IResolvable): any {
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

export class ReportConfigSplitsOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigSplitsOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigSplitsOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
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
}
export interface ReportConfigSplitsTargets {
  /**
  * Target ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Target Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
  /**
  * Percent of the target, represented in float format. E.g. 30% is 0.3. Must be set only if Split Mode is custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#value Report#value}
  */
  readonly value?: number;
}

export function reportConfigSplitsTargetsToTerraform(struct?: ReportConfigSplitsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function reportConfigSplitsTargetsToHclTerraform(struct?: ReportConfigSplitsTargets | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ReportConfigSplitsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigSplitsTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
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

  public set internalValue(value: ReportConfigSplitsTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
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
      this._id = value.id;
      this._type = value.type;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class ReportConfigSplitsTargetsList extends cdktf.ComplexList {
  public internalValue? : ReportConfigSplitsTargets[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigSplitsTargetsOutputReference {
    return new ReportConfigSplitsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigSplits {
  /**
  * ID of the field to split
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * If set, include the origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#include_origin Report#include_origin}
  */
  readonly includeOrigin: boolean | cdktf.IResolvable;
  /**
  * Mode of the split
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#mode Report#mode}
  */
  readonly mode: string;
  /**
  * Origin of the split
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#origin Report#origin}
  */
  readonly origin?: ReportConfigSplitsOrigin;
  /**
  * Targets for the split
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#targets Report#targets}
  */
  readonly targets: ReportConfigSplitsTargets[] | cdktf.IResolvable;
  /**
  * Type of the split.The only supported value at the moment: "attribution_group"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#type Report#type}
  */
  readonly type: string;
}

export function reportConfigSplitsToTerraform(struct?: ReportConfigSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include_origin: cdktf.booleanToTerraform(struct!.includeOrigin),
    mode: cdktf.stringToTerraform(struct!.mode),
    origin: reportConfigSplitsOriginToTerraform(struct!.origin),
    targets: cdktf.listMapper(reportConfigSplitsTargetsToTerraform, false)(struct!.targets),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportConfigSplitsToHclTerraform(struct?: ReportConfigSplits | cdktf.IResolvable): any {
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
    include_origin: {
      value: cdktf.booleanToHclTerraform(struct!.includeOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: reportConfigSplitsOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigSplitsOrigin",
    },
    targets: {
      value: cdktf.listMapperHcl(reportConfigSplitsTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigSplitsTargetsList",
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

export class ReportConfigSplitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigSplits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOrigin = this._includeOrigin;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigSplits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._includeOrigin = undefined;
      this._mode = undefined;
      this._origin.internalValue = undefined;
      this._targets.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._includeOrigin = value.includeOrigin;
      this._mode = value.mode;
      this._origin.internalValue = value.origin;
      this._targets.internalValue = value.targets;
      this._type = value.type;
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

  // include_origin - computed: false, optional: false, required: true
  private _includeOrigin?: boolean | cdktf.IResolvable; 
  public get includeOrigin() {
    return this.getBooleanAttribute('include_origin');
  }
  public set includeOrigin(value: boolean | cdktf.IResolvable) {
    this._includeOrigin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOriginInput() {
    return this._includeOrigin;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new ReportConfigSplitsOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: ReportConfigSplitsOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new ReportConfigSplitsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: ReportConfigSplitsTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
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
}

export class ReportConfigSplitsList extends cdktf.ComplexList {
  public internalValue? : ReportConfigSplits[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigSplitsOutputReference {
    return new ReportConfigSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigTimeRange {
  /**
  * Amount of time units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#amount Report#amount}
  */
  readonly amount?: number;
  /**
  * Whether to include current time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#include_current Report#include_current}
  */
  readonly includeCurrent?: boolean | cdktf.IResolvable;
  /**
  * Time range mode. Possible values: 'last', 'current', 'custom'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#mode Report#mode}
  */
  readonly mode: string;
  /**
  * Time unit. Possible values: 'day', 'week'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#unit Report#unit}
  */
  readonly unit?: string;
}

export function reportConfigTimeRangeToTerraform(struct?: ReportConfigTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    include_current: cdktf.booleanToTerraform(struct!.includeCurrent),
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function reportConfigTimeRangeToHclTerraform(struct?: ReportConfigTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_current: {
      value: cdktf.booleanToHclTerraform(struct!.includeCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigTimeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._includeCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCurrent = this._includeCurrent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigTimeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._includeCurrent = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._includeCurrent = value.includeCurrent;
      this._mode = value.mode;
      this._unit = value.unit;
    }
  }

  // amount - computed: true, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // include_current - computed: true, optional: true, required: false
  private _includeCurrent?: boolean | cdktf.IResolvable; 
  public get includeCurrent() {
    return this.getBooleanAttribute('include_current');
  }
  public set includeCurrent(value: boolean | cdktf.IResolvable) {
    this._includeCurrent = value;
  }
  public resetIncludeCurrent() {
    this._includeCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCurrentInput() {
    return this._includeCurrent;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ReportConfigA {
  /**
  * Advanced analysis options. Each of these can be set independently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#advanced_analysis Report#advanced_analysis}
  */
  readonly advancedAnalysis?: ReportConfigAdvancedAnalysis;
  /**
  * The aggregation to apply to the report. Possible values: 'total', 'percent_total', 'percent_col', 'percent_row'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#aggregation Report#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The currency to use for the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#currency Report#currency}
  */
  readonly currency?: string;
  /**
  * See [Dimensions](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#dimensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#dimensions Report#dimensions}
  */
  readonly dimensions?: ReportConfigDimensions[] | cdktf.IResolvable;
  /**
  * See [View data as (Comparative report)](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#view-as). Possible values: 'actuals_only', 'absolute_change', 'percentage_change', 'absolute_and_percentage'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#display_values Report#display_values}
  */
  readonly displayValues?: string;
  /**
  * The filters to use in this report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#filters Report#filters}
  */
  readonly filters?: ReportConfigFilters[] | cdktf.IResolvable;
  /**
  * The rows that appear in the tabular format of the report. See [Group by](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#group-by).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#group Report#group}
  */
  readonly group?: ReportConfigGroup[] | cdktf.IResolvable;
  /**
  * Whether to include [promotional credits](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#promotional-credits). If set to **true**, the report must use time interval `month`, `quarter`, or `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#include_promotional_credits Report#include_promotional_credits}
  */
  readonly includePromotionalCredits?: boolean | cdktf.IResolvable;
  /**
  * The visualization of the report. Possible values: 'column_chart', 'stacked_column_chart', 'bar_chart', 'stacked_bar_chart', 'line_chart', 'spline_chart'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#layout Report#layout}
  */
  readonly layout?: string;
  /**
  * The metric to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#metric Report#metric}
  */
  readonly metric?: ReportConfigMetric;
  /**
  * The metric filter to limit the report results by value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#metric_filter Report#metric_filter}
  */
  readonly metricFilter?: ReportConfigMetricFilter;
  /**
  * Sort dimensions. This option has no impact when reading reports via API. Possible values: 'asc', 'desc', 'a_to_z'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#sort_dimensions Report#sort_dimensions}
  */
  readonly sortDimensions?: string;
  /**
  * Sort groups. This option has no impact when reading reports via API. Possible values: 'asc', 'desc', 'a_to_z'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#sort_groups Report#sort_groups}
  */
  readonly sortGroups?: string;
  /**
  * The splits to use in the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#splits Report#splits}
  */
  readonly splits?: ReportConfigSplits[] | cdktf.IResolvable;
  /**
  * Time interval. Possible values: 'hour', 'day', 'dayCumSum', 'week', 'isoweek', 'month', 'quarter', 'year', 'week_day'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#time_interval Report#time_interval}
  */
  readonly timeInterval?: string;
  /**
  * Time settings for the report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#time_range Report#time_range}
  */
  readonly timeRange?: ReportConfigTimeRange;
}

export function reportConfigAToTerraform(struct?: ReportConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_analysis: reportConfigAdvancedAnalysisToTerraform(struct!.advancedAnalysis),
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    currency: cdktf.stringToTerraform(struct!.currency),
    dimensions: cdktf.listMapper(reportConfigDimensionsToTerraform, false)(struct!.dimensions),
    display_values: cdktf.stringToTerraform(struct!.displayValues),
    filters: cdktf.listMapper(reportConfigFiltersToTerraform, false)(struct!.filters),
    group: cdktf.listMapper(reportConfigGroupToTerraform, false)(struct!.group),
    include_promotional_credits: cdktf.booleanToTerraform(struct!.includePromotionalCredits),
    layout: cdktf.stringToTerraform(struct!.layout),
    metric: reportConfigMetricToTerraform(struct!.metric),
    metric_filter: reportConfigMetricFilterToTerraform(struct!.metricFilter),
    sort_dimensions: cdktf.stringToTerraform(struct!.sortDimensions),
    sort_groups: cdktf.stringToTerraform(struct!.sortGroups),
    splits: cdktf.listMapper(reportConfigSplitsToTerraform, false)(struct!.splits),
    time_interval: cdktf.stringToTerraform(struct!.timeInterval),
    time_range: reportConfigTimeRangeToTerraform(struct!.timeRange),
  }
}


export function reportConfigAToHclTerraform(struct?: ReportConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_analysis: {
      value: reportConfigAdvancedAnalysisToHclTerraform(struct!.advancedAnalysis),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigAdvancedAnalysis",
    },
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    currency: {
      value: cdktf.stringToHclTerraform(struct!.currency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(reportConfigDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigDimensionsList",
    },
    display_values: {
      value: cdktf.stringToHclTerraform(struct!.displayValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(reportConfigFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigFiltersList",
    },
    group: {
      value: cdktf.listMapperHcl(reportConfigGroupToHclTerraform, false)(struct!.group),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigGroupList",
    },
    include_promotional_credits: {
      value: cdktf.booleanToHclTerraform(struct!.includePromotionalCredits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    layout: {
      value: cdktf.stringToHclTerraform(struct!.layout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: reportConfigMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigMetric",
    },
    metric_filter: {
      value: reportConfigMetricFilterToHclTerraform(struct!.metricFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigMetricFilter",
    },
    sort_dimensions: {
      value: cdktf.stringToHclTerraform(struct!.sortDimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_groups: {
      value: cdktf.stringToHclTerraform(struct!.sortGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splits: {
      value: cdktf.listMapperHcl(reportConfigSplitsToHclTerraform, false)(struct!.splits),
      isBlock: true,
      type: "list",
      storageClassType: "ReportConfigSplitsList",
    },
    time_interval: {
      value: cdktf.stringToHclTerraform(struct!.timeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_range: {
      value: reportConfigTimeRangeToHclTerraform(struct!.timeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "ReportConfigTimeRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReportConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedAnalysis = this._advancedAnalysis?.internalValue;
    }
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._currency !== undefined) {
      hasAnyValues = true;
      internalValueResult.currency = this._currency;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._displayValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayValues = this._displayValues;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._includePromotionalCredits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePromotionalCredits = this._includePromotionalCredits;
    }
    if (this._layout !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._metricFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFilter = this._metricFilter?.internalValue;
    }
    if (this._sortDimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDimensions = this._sortDimensions;
    }
    if (this._sortGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortGroups = this._sortGroups;
    }
    if (this._splits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splits = this._splits?.internalValue;
    }
    if (this._timeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval;
    }
    if (this._timeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedAnalysis.internalValue = undefined;
      this._aggregation = undefined;
      this._currency = undefined;
      this._dimensions.internalValue = undefined;
      this._displayValues = undefined;
      this._filters.internalValue = undefined;
      this._group.internalValue = undefined;
      this._includePromotionalCredits = undefined;
      this._layout = undefined;
      this._metric.internalValue = undefined;
      this._metricFilter.internalValue = undefined;
      this._sortDimensions = undefined;
      this._sortGroups = undefined;
      this._splits.internalValue = undefined;
      this._timeInterval = undefined;
      this._timeRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedAnalysis.internalValue = value.advancedAnalysis;
      this._aggregation = value.aggregation;
      this._currency = value.currency;
      this._dimensions.internalValue = value.dimensions;
      this._displayValues = value.displayValues;
      this._filters.internalValue = value.filters;
      this._group.internalValue = value.group;
      this._includePromotionalCredits = value.includePromotionalCredits;
      this._layout = value.layout;
      this._metric.internalValue = value.metric;
      this._metricFilter.internalValue = value.metricFilter;
      this._sortDimensions = value.sortDimensions;
      this._sortGroups = value.sortGroups;
      this._splits.internalValue = value.splits;
      this._timeInterval = value.timeInterval;
      this._timeRange.internalValue = value.timeRange;
    }
  }

  // advanced_analysis - computed: true, optional: true, required: false
  private _advancedAnalysis = new ReportConfigAdvancedAnalysisOutputReference(this, "advanced_analysis");
  public get advancedAnalysis() {
    return this._advancedAnalysis;
  }
  public putAdvancedAnalysis(value: ReportConfigAdvancedAnalysis) {
    this._advancedAnalysis.internalValue = value;
  }
  public resetAdvancedAnalysis() {
    this._advancedAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedAnalysisInput() {
    return this._advancedAnalysis.internalValue;
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // currency - computed: true, optional: true, required: false
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  public resetCurrency() {
    this._currency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ReportConfigDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ReportConfigDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // display_values - computed: true, optional: true, required: false
  private _displayValues?: string; 
  public get displayValues() {
    return this.getStringAttribute('display_values');
  }
  public set displayValues(value: string) {
    this._displayValues = value;
  }
  public resetDisplayValues() {
    this._displayValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayValuesInput() {
    return this._displayValues;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ReportConfigFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ReportConfigFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ReportConfigGroupList(this, "group", false);
  public get group() {
    return this._group;
  }
  public putGroup(value: ReportConfigGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // include_promotional_credits - computed: true, optional: true, required: false
  private _includePromotionalCredits?: boolean | cdktf.IResolvable; 
  public get includePromotionalCredits() {
    return this.getBooleanAttribute('include_promotional_credits');
  }
  public set includePromotionalCredits(value: boolean | cdktf.IResolvable) {
    this._includePromotionalCredits = value;
  }
  public resetIncludePromotionalCredits() {
    this._includePromotionalCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePromotionalCreditsInput() {
    return this._includePromotionalCredits;
  }

  // layout - computed: true, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new ReportConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ReportConfigMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // metric_filter - computed: false, optional: true, required: false
  private _metricFilter = new ReportConfigMetricFilterOutputReference(this, "metric_filter");
  public get metricFilter() {
    return this._metricFilter;
  }
  public putMetricFilter(value: ReportConfigMetricFilter) {
    this._metricFilter.internalValue = value;
  }
  public resetMetricFilter() {
    this._metricFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterInput() {
    return this._metricFilter.internalValue;
  }

  // sort_dimensions - computed: true, optional: true, required: false
  private _sortDimensions?: string; 
  public get sortDimensions() {
    return this.getStringAttribute('sort_dimensions');
  }
  public set sortDimensions(value: string) {
    this._sortDimensions = value;
  }
  public resetSortDimensions() {
    this._sortDimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDimensionsInput() {
    return this._sortDimensions;
  }

  // sort_groups - computed: true, optional: true, required: false
  private _sortGroups?: string; 
  public get sortGroups() {
    return this.getStringAttribute('sort_groups');
  }
  public set sortGroups(value: string) {
    this._sortGroups = value;
  }
  public resetSortGroups() {
    this._sortGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortGroupsInput() {
    return this._sortGroups;
  }

  // splits - computed: false, optional: true, required: false
  private _splits = new ReportConfigSplitsList(this, "splits", false);
  public get splits() {
    return this._splits;
  }
  public putSplits(value: ReportConfigSplits[] | cdktf.IResolvable) {
    this._splits.internalValue = value;
  }
  public resetSplits() {
    this._splits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitsInput() {
    return this._splits.internalValue;
  }

  // time_interval - computed: true, optional: true, required: false
  private _timeInterval?: string; 
  public get timeInterval() {
    return this.getStringAttribute('time_interval');
  }
  public set timeInterval(value: string) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange = new ReportConfigTimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: ReportConfigTimeRange) {
    this._timeRange.internalValue = value;
  }
  public resetTimeRange() {
    this._timeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report doit_report}
*/
export class Report extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doit_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Report resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Report to import
  * @param importFromId The id of the existing Report that should be imported. Refer to the {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Report to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doit_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/report doit_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportConfig
  */
  public constructor(scope: Construct, id: string, config: ReportConfig) {
    super(scope, id, {
      terraformResourceType: 'doit_report',
      terraformGeneratorMetadata: {
        providerName: 'doit',
        providerVersion: '0.26.0',
        providerVersionConstraint: '0.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config = new ReportConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ReportConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: reportConfigAToTerraform(this._config.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: reportConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReportConfigA",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
