// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringMetricExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}
  */
  readonly collectionRecurrences: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}
  */
  readonly publishTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}
  */
  readonly resourceType: string;
  /**
  * metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#metric_list StackMonitoringMetricExtension#metric_list}
  */
  readonly metricList: StackMonitoringMetricExtensionMetricListStruct[] | cdktf.IResolvable;
  /**
  * query_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#query_properties StackMonitoringMetricExtension#query_properties}
  */
  readonly queryProperties: StackMonitoringMetricExtensionQueryProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#timeouts StackMonitoringMetricExtension#timeouts}
  */
  readonly timeouts?: StackMonitoringMetricExtensionTimeouts;
}
export interface StackMonitoringMetricExtensionEnabledOnResources {
}

export function stackMonitoringMetricExtensionEnabledOnResourcesToTerraform(struct?: StackMonitoringMetricExtensionEnabledOnResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMetricExtensionEnabledOnResourcesToHclTerraform(struct?: StackMonitoringMetricExtensionEnabledOnResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMetricExtensionEnabledOnResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StackMonitoringMetricExtensionEnabledOnResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionEnabledOnResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}

export class StackMonitoringMetricExtensionEnabledOnResourcesList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMetricExtensionEnabledOnResourcesOutputReference {
    return new StackMonitoringMetricExtensionEnabledOnResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMetricExtensionMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#compute_expression StackMonitoringMetricExtension#compute_expression}
  */
  readonly computeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#data_type StackMonitoringMetricExtension#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#is_dimension StackMonitoringMetricExtension#is_dimension}
  */
  readonly isDimension?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#is_hidden StackMonitoringMetricExtension#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#metric_category StackMonitoringMetricExtension#metric_category}
  */
  readonly metricCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#unit StackMonitoringMetricExtension#unit}
  */
  readonly unit?: string;
}

export function stackMonitoringMetricExtensionMetricListStructToTerraform(struct?: StackMonitoringMetricExtensionMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_expression: cdktf.stringToTerraform(struct!.computeExpression),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_dimension: cdktf.booleanToTerraform(struct!.isDimension),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    metric_category: cdktf.stringToTerraform(struct!.metricCategory),
    name: cdktf.stringToTerraform(struct!.name),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function stackMonitoringMetricExtensionMetricListStructToHclTerraform(struct?: StackMonitoringMetricExtensionMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_expression: {
      value: cdktf.stringToHclTerraform(struct!.computeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_dimension: {
      value: cdktf.booleanToHclTerraform(struct!.isDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_category: {
      value: cdktf.stringToHclTerraform(struct!.metricCategory),
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

export class StackMonitoringMetricExtensionMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMetricExtensionMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeExpression = this._computeExpression;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDimension = this._isDimension;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._metricCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricCategory = this._metricCategory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeExpression = undefined;
      this._dataType = undefined;
      this._displayName = undefined;
      this._isDimension = undefined;
      this._isHidden = undefined;
      this._metricCategory = undefined;
      this._name = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeExpression = value.computeExpression;
      this._dataType = value.dataType;
      this._displayName = value.displayName;
      this._isDimension = value.isDimension;
      this._isHidden = value.isHidden;
      this._metricCategory = value.metricCategory;
      this._name = value.name;
      this._unit = value.unit;
    }
  }

  // compute_expression - computed: false, optional: true, required: false
  private _computeExpression?: string; 
  public get computeExpression() {
    return this.getStringAttribute('compute_expression');
  }
  public set computeExpression(value: string) {
    this._computeExpression = value;
  }
  public resetComputeExpression() {
    this._computeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeExpressionInput() {
    return this._computeExpression;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_dimension - computed: true, optional: true, required: false
  private _isDimension?: boolean | cdktf.IResolvable; 
  public get isDimension() {
    return this.getBooleanAttribute('is_dimension');
  }
  public set isDimension(value: boolean | cdktf.IResolvable) {
    this._isDimension = value;
  }
  public resetIsDimension() {
    this._isDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDimensionInput() {
    return this._isDimension;
  }

  // is_hidden - computed: true, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // metric_category - computed: true, optional: true, required: false
  private _metricCategory?: string; 
  public get metricCategory() {
    return this.getStringAttribute('metric_category');
  }
  public set metricCategory(value: string) {
    this._metricCategory = value;
  }
  public resetMetricCategory() {
    this._metricCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCategoryInput() {
    return this._metricCategory;
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

  // unit - computed: false, optional: true, required: false
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

export class StackMonitoringMetricExtensionMetricListStructList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMetricExtensionMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMetricExtensionMetricListStructOutputReference {
    return new StackMonitoringMetricExtensionMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMetricExtensionQueryPropertiesInParamDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#in_param_position StackMonitoringMetricExtension#in_param_position}
  */
  readonly inParamPosition: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#in_param_value StackMonitoringMetricExtension#in_param_value}
  */
  readonly inParamValue: string;
}

export function stackMonitoringMetricExtensionQueryPropertiesInParamDetailsToTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesInParamDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_param_position: cdktf.numberToTerraform(struct!.inParamPosition),
    in_param_value: cdktf.stringToTerraform(struct!.inParamValue),
  }
}


export function stackMonitoringMetricExtensionQueryPropertiesInParamDetailsToHclTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesInParamDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_param_position: {
      value: cdktf.numberToHclTerraform(struct!.inParamPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_param_value: {
      value: cdktf.stringToHclTerraform(struct!.inParamValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMetricExtensionQueryPropertiesInParamDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inParamPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.inParamPosition = this._inParamPosition;
    }
    if (this._inParamValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inParamValue = this._inParamValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionQueryPropertiesInParamDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inParamPosition = undefined;
      this._inParamValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inParamPosition = value.inParamPosition;
      this._inParamValue = value.inParamValue;
    }
  }

  // in_param_position - computed: false, optional: false, required: true
  private _inParamPosition?: number; 
  public get inParamPosition() {
    return this.getNumberAttribute('in_param_position');
  }
  public set inParamPosition(value: number) {
    this._inParamPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inParamPositionInput() {
    return this._inParamPosition;
  }

  // in_param_value - computed: false, optional: false, required: true
  private _inParamValue?: string; 
  public get inParamValue() {
    return this.getStringAttribute('in_param_value');
  }
  public set inParamValue(value: string) {
    this._inParamValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inParamValueInput() {
    return this._inParamValue;
  }
}

export class StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMetricExtensionQueryPropertiesInParamDetails[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference {
    return new StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMetricExtensionQueryPropertiesOutParamDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#out_param_name StackMonitoringMetricExtension#out_param_name}
  */
  readonly outParamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}
  */
  readonly outParamPosition: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}
  */
  readonly outParamType: string;
}

export function stackMonitoringMetricExtensionQueryPropertiesOutParamDetailsToTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference | StackMonitoringMetricExtensionQueryPropertiesOutParamDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    out_param_name: cdktf.stringToTerraform(struct!.outParamName),
    out_param_position: cdktf.numberToTerraform(struct!.outParamPosition),
    out_param_type: cdktf.stringToTerraform(struct!.outParamType),
  }
}


export function stackMonitoringMetricExtensionQueryPropertiesOutParamDetailsToHclTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference | StackMonitoringMetricExtensionQueryPropertiesOutParamDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    out_param_name: {
      value: cdktf.stringToHclTerraform(struct!.outParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_param_position: {
      value: cdktf.numberToHclTerraform(struct!.outParamPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_param_type: {
      value: cdktf.stringToHclTerraform(struct!.outParamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMetricExtensionQueryPropertiesOutParamDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outParamName = this._outParamName;
    }
    if (this._outParamPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.outParamPosition = this._outParamPosition;
    }
    if (this._outParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outParamType = this._outParamType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outParamName = undefined;
      this._outParamPosition = undefined;
      this._outParamType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outParamName = value.outParamName;
      this._outParamPosition = value.outParamPosition;
      this._outParamType = value.outParamType;
    }
  }

  // out_param_name - computed: true, optional: true, required: false
  private _outParamName?: string; 
  public get outParamName() {
    return this.getStringAttribute('out_param_name');
  }
  public set outParamName(value: string) {
    this._outParamName = value;
  }
  public resetOutParamName() {
    this._outParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outParamNameInput() {
    return this._outParamName;
  }

  // out_param_position - computed: false, optional: false, required: true
  private _outParamPosition?: number; 
  public get outParamPosition() {
    return this.getNumberAttribute('out_param_position');
  }
  public set outParamPosition(value: number) {
    this._outParamPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outParamPositionInput() {
    return this._outParamPosition;
  }

  // out_param_type - computed: false, optional: false, required: true
  private _outParamType?: string; 
  public get outParamType() {
    return this.getStringAttribute('out_param_type');
  }
  public set outParamType(value: string) {
    this._outParamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outParamTypeInput() {
    return this._outParamType;
  }
}
export interface StackMonitoringMetricExtensionQueryPropertiesScriptDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}
  */
  readonly name: string;
}

export function stackMonitoringMetricExtensionQueryPropertiesScriptDetailsToTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference | StackMonitoringMetricExtensionQueryPropertiesScriptDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function stackMonitoringMetricExtensionQueryPropertiesScriptDetailsToHclTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference | StackMonitoringMetricExtensionQueryPropertiesScriptDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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

export class StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMetricExtensionQueryPropertiesScriptDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionQueryPropertiesScriptDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._name = value.name;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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
export interface StackMonitoringMetricExtensionQueryPropertiesSqlDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}
  */
  readonly scriptFileName?: string;
}

export function stackMonitoringMetricExtensionQueryPropertiesSqlDetailsToTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference | StackMonitoringMetricExtensionQueryPropertiesSqlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    script_file_name: cdktf.stringToTerraform(struct!.scriptFileName),
  }
}


export function stackMonitoringMetricExtensionQueryPropertiesSqlDetailsToHclTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference | StackMonitoringMetricExtensionQueryPropertiesSqlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_file_name: {
      value: cdktf.stringToHclTerraform(struct!.scriptFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMetricExtensionQueryPropertiesSqlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._scriptFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptFileName = this._scriptFileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionQueryPropertiesSqlDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._scriptFileName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._scriptFileName = value.scriptFileName;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // script_file_name - computed: false, optional: true, required: false
  private _scriptFileName?: string; 
  public get scriptFileName() {
    return this.getStringAttribute('script_file_name');
  }
  public set scriptFileName(value: string) {
    this._scriptFileName = value;
  }
  public resetScriptFileName() {
    this._scriptFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFileNameInput() {
    return this._scriptFileName;
  }
}
export interface StackMonitoringMetricExtensionQueryProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}
  */
  readonly arguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}
  */
  readonly autoRowPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}
  */
  readonly collectionMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}
  */
  readonly identityMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}
  */
  readonly isMetricServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}
  */
  readonly jmxAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}
  */
  readonly managedBeanQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#protocol_type StackMonitoringMetricExtension#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#response_content_type StackMonitoringMetricExtension#response_content_type}
  */
  readonly responseContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}
  */
  readonly sqlType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}
  */
  readonly startsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#url StackMonitoringMetricExtension#url}
  */
  readonly url?: string;
  /**
  * in_param_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#in_param_details StackMonitoringMetricExtension#in_param_details}
  */
  readonly inParamDetails?: StackMonitoringMetricExtensionQueryPropertiesInParamDetails[] | cdktf.IResolvable;
  /**
  * out_param_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#out_param_details StackMonitoringMetricExtension#out_param_details}
  */
  readonly outParamDetails?: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails;
  /**
  * script_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#script_details StackMonitoringMetricExtension#script_details}
  */
  readonly scriptDetails?: StackMonitoringMetricExtensionQueryPropertiesScriptDetails;
  /**
  * sql_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#sql_details StackMonitoringMetricExtension#sql_details}
  */
  readonly sqlDetails?: StackMonitoringMetricExtensionQueryPropertiesSqlDetails;
}

export function stackMonitoringMetricExtensionQueryPropertiesToTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesOutputReference | StackMonitoringMetricExtensionQueryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    auto_row_prefix: cdktf.stringToTerraform(struct!.autoRowPrefix),
    collection_method: cdktf.stringToTerraform(struct!.collectionMethod),
    command: cdktf.stringToTerraform(struct!.command),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    identity_metric: cdktf.stringToTerraform(struct!.identityMetric),
    is_metric_service_enabled: cdktf.booleanToTerraform(struct!.isMetricServiceEnabled),
    jmx_attributes: cdktf.stringToTerraform(struct!.jmxAttributes),
    managed_bean_query: cdktf.stringToTerraform(struct!.managedBeanQuery),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    response_content_type: cdktf.stringToTerraform(struct!.responseContentType),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
    starts_with: cdktf.stringToTerraform(struct!.startsWith),
    url: cdktf.stringToTerraform(struct!.url),
    in_param_details: cdktf.listMapper(stackMonitoringMetricExtensionQueryPropertiesInParamDetailsToTerraform, true)(struct!.inParamDetails),
    out_param_details: stackMonitoringMetricExtensionQueryPropertiesOutParamDetailsToTerraform(struct!.outParamDetails),
    script_details: stackMonitoringMetricExtensionQueryPropertiesScriptDetailsToTerraform(struct!.scriptDetails),
    sql_details: stackMonitoringMetricExtensionQueryPropertiesSqlDetailsToTerraform(struct!.sqlDetails),
  }
}


export function stackMonitoringMetricExtensionQueryPropertiesToHclTerraform(struct?: StackMonitoringMetricExtensionQueryPropertiesOutputReference | StackMonitoringMetricExtensionQueryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_row_prefix: {
      value: cdktf.stringToHclTerraform(struct!.autoRowPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collection_method: {
      value: cdktf.stringToHclTerraform(struct!.collectionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_metric: {
      value: cdktf.stringToHclTerraform(struct!.identityMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_metric_service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMetricServiceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jmx_attributes: {
      value: cdktf.stringToHclTerraform(struct!.jmxAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_bean_query: {
      value: cdktf.stringToHclTerraform(struct!.managedBeanQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_content_type: {
      value: cdktf.stringToHclTerraform(struct!.responseContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_type: {
      value: cdktf.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_with: {
      value: cdktf.stringToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_param_details: {
      value: cdktf.listMapperHcl(stackMonitoringMetricExtensionQueryPropertiesInParamDetailsToHclTerraform, true)(struct!.inParamDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList",
    },
    out_param_details: {
      value: stackMonitoringMetricExtensionQueryPropertiesOutParamDetailsToHclTerraform(struct!.outParamDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList",
    },
    script_details: {
      value: stackMonitoringMetricExtensionQueryPropertiesScriptDetailsToHclTerraform(struct!.scriptDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMetricExtensionQueryPropertiesScriptDetailsList",
    },
    sql_details: {
      value: stackMonitoringMetricExtensionQueryPropertiesSqlDetailsToHclTerraform(struct!.sqlDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMetricExtensionQueryPropertiesSqlDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMetricExtensionQueryPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMetricExtensionQueryProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._autoRowPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRowPrefix = this._autoRowPrefix;
    }
    if (this._collectionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionMethod = this._collectionMethod;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._identityMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityMetric = this._identityMetric;
    }
    if (this._isMetricServiceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetricServiceEnabled = this._isMetricServiceEnabled;
    }
    if (this._jmxAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxAttributes = this._jmxAttributes;
    }
    if (this._managedBeanQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedBeanQuery = this._managedBeanQuery;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._responseContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseContentType = this._responseContentType;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._inParamDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inParamDetails = this._inParamDetails?.internalValue;
    }
    if (this._outParamDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outParamDetails = this._outParamDetails?.internalValue;
    }
    if (this._scriptDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptDetails = this._scriptDetails?.internalValue;
    }
    if (this._sqlDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlDetails = this._sqlDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionQueryProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._autoRowPrefix = undefined;
      this._collectionMethod = undefined;
      this._command = undefined;
      this._delimiter = undefined;
      this._identityMetric = undefined;
      this._isMetricServiceEnabled = undefined;
      this._jmxAttributes = undefined;
      this._managedBeanQuery = undefined;
      this._protocolType = undefined;
      this._responseContentType = undefined;
      this._sqlType = undefined;
      this._startsWith = undefined;
      this._url = undefined;
      this._inParamDetails.internalValue = undefined;
      this._outParamDetails.internalValue = undefined;
      this._scriptDetails.internalValue = undefined;
      this._sqlDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._autoRowPrefix = value.autoRowPrefix;
      this._collectionMethod = value.collectionMethod;
      this._command = value.command;
      this._delimiter = value.delimiter;
      this._identityMetric = value.identityMetric;
      this._isMetricServiceEnabled = value.isMetricServiceEnabled;
      this._jmxAttributes = value.jmxAttributes;
      this._managedBeanQuery = value.managedBeanQuery;
      this._protocolType = value.protocolType;
      this._responseContentType = value.responseContentType;
      this._sqlType = value.sqlType;
      this._startsWith = value.startsWith;
      this._url = value.url;
      this._inParamDetails.internalValue = value.inParamDetails;
      this._outParamDetails.internalValue = value.outParamDetails;
      this._scriptDetails.internalValue = value.scriptDetails;
      this._sqlDetails.internalValue = value.sqlDetails;
    }
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // auto_row_prefix - computed: true, optional: true, required: false
  private _autoRowPrefix?: string; 
  public get autoRowPrefix() {
    return this.getStringAttribute('auto_row_prefix');
  }
  public set autoRowPrefix(value: string) {
    this._autoRowPrefix = value;
  }
  public resetAutoRowPrefix() {
    this._autoRowPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRowPrefixInput() {
    return this._autoRowPrefix;
  }

  // collection_method - computed: false, optional: false, required: true
  private _collectionMethod?: string; 
  public get collectionMethod() {
    return this.getStringAttribute('collection_method');
  }
  public set collectionMethod(value: string) {
    this._collectionMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionMethodInput() {
    return this._collectionMethod;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // identity_metric - computed: true, optional: true, required: false
  private _identityMetric?: string; 
  public get identityMetric() {
    return this.getStringAttribute('identity_metric');
  }
  public set identityMetric(value: string) {
    this._identityMetric = value;
  }
  public resetIdentityMetric() {
    this._identityMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMetricInput() {
    return this._identityMetric;
  }

  // is_metric_service_enabled - computed: true, optional: true, required: false
  private _isMetricServiceEnabled?: boolean | cdktf.IResolvable; 
  public get isMetricServiceEnabled() {
    return this.getBooleanAttribute('is_metric_service_enabled');
  }
  public set isMetricServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._isMetricServiceEnabled = value;
  }
  public resetIsMetricServiceEnabled() {
    this._isMetricServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetricServiceEnabledInput() {
    return this._isMetricServiceEnabled;
  }

  // jmx_attributes - computed: true, optional: true, required: false
  private _jmxAttributes?: string; 
  public get jmxAttributes() {
    return this.getStringAttribute('jmx_attributes');
  }
  public set jmxAttributes(value: string) {
    this._jmxAttributes = value;
  }
  public resetJmxAttributes() {
    this._jmxAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxAttributesInput() {
    return this._jmxAttributes;
  }

  // managed_bean_query - computed: true, optional: true, required: false
  private _managedBeanQuery?: string; 
  public get managedBeanQuery() {
    return this.getStringAttribute('managed_bean_query');
  }
  public set managedBeanQuery(value: string) {
    this._managedBeanQuery = value;
  }
  public resetManagedBeanQuery() {
    this._managedBeanQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedBeanQueryInput() {
    return this._managedBeanQuery;
  }

  // protocol_type - computed: true, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // response_content_type - computed: true, optional: true, required: false
  private _responseContentType?: string; 
  public get responseContentType() {
    return this.getStringAttribute('response_content_type');
  }
  public set responseContentType(value: string) {
    this._responseContentType = value;
  }
  public resetResponseContentType() {
    this._responseContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseContentTypeInput() {
    return this._responseContentType;
  }

  // sql_type - computed: true, optional: true, required: false
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  public resetSqlType() {
    this._sqlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }

  // starts_with - computed: true, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // in_param_details - computed: false, optional: true, required: false
  private _inParamDetails = new StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(this, "in_param_details", false);
  public get inParamDetails() {
    return this._inParamDetails;
  }
  public putInParamDetails(value: StackMonitoringMetricExtensionQueryPropertiesInParamDetails[] | cdktf.IResolvable) {
    this._inParamDetails.internalValue = value;
  }
  public resetInParamDetails() {
    this._inParamDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inParamDetailsInput() {
    return this._inParamDetails.internalValue;
  }

  // out_param_details - computed: false, optional: true, required: false
  private _outParamDetails = new StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(this, "out_param_details");
  public get outParamDetails() {
    return this._outParamDetails;
  }
  public putOutParamDetails(value: StackMonitoringMetricExtensionQueryPropertiesOutParamDetails) {
    this._outParamDetails.internalValue = value;
  }
  public resetOutParamDetails() {
    this._outParamDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outParamDetailsInput() {
    return this._outParamDetails.internalValue;
  }

  // script_details - computed: false, optional: true, required: false
  private _scriptDetails = new StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(this, "script_details");
  public get scriptDetails() {
    return this._scriptDetails;
  }
  public putScriptDetails(value: StackMonitoringMetricExtensionQueryPropertiesScriptDetails) {
    this._scriptDetails.internalValue = value;
  }
  public resetScriptDetails() {
    this._scriptDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptDetailsInput() {
    return this._scriptDetails.internalValue;
  }

  // sql_details - computed: false, optional: true, required: false
  private _sqlDetails = new StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(this, "sql_details");
  public get sqlDetails() {
    return this._sqlDetails;
  }
  public putSqlDetails(value: StackMonitoringMetricExtensionQueryPropertiesSqlDetails) {
    this._sqlDetails.internalValue = value;
  }
  public resetSqlDetails() {
    this._sqlDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDetailsInput() {
    return this._sqlDetails.internalValue;
  }
}
export interface StackMonitoringMetricExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}
  */
  readonly update?: string;
}

export function stackMonitoringMetricExtensionTimeoutsToTerraform(struct?: StackMonitoringMetricExtensionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function stackMonitoringMetricExtensionTimeoutsToHclTerraform(struct?: StackMonitoringMetricExtensionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMetricExtensionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringMetricExtensionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMetricExtensionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}
*/
export class StackMonitoringMetricExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_metric_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringMetricExtension to import
  * @param importFromId The id of the existing StackMonitoringMetricExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringMetricExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_metric_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringMetricExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringMetricExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_metric_extension',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionRecurrences = config.collectionRecurrences;
    this._compartmentId = config.compartmentId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._publishTrigger = config.publishTrigger;
    this._resourceType = config.resourceType;
    this._metricList.internalValue = config.metricList;
    this._queryProperties.internalValue = config.queryProperties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_method - computed: true, optional: false, required: false
  public get collectionMethod() {
    return this.getStringAttribute('collection_method');
  }

  // collection_recurrences - computed: false, optional: false, required: true
  private _collectionRecurrences?: string; 
  public get collectionRecurrences() {
    return this.getStringAttribute('collection_recurrences');
  }
  public set collectionRecurrences(value: string) {
    this._collectionRecurrences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionRecurrencesInput() {
    return this._collectionRecurrences;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled_on_resources - computed: true, optional: false, required: false
  private _enabledOnResources = new StackMonitoringMetricExtensionEnabledOnResourcesList(this, "enabled_on_resources", false);
  public get enabledOnResources() {
    return this._enabledOnResources;
  }

  // enabled_on_resources_count - computed: true, optional: false, required: false
  public get enabledOnResourcesCount() {
    return this.getNumberAttribute('enabled_on_resources_count');
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

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // publish_trigger - computed: false, optional: true, required: false
  private _publishTrigger?: boolean | cdktf.IResolvable; 
  public get publishTrigger() {
    return this.getBooleanAttribute('publish_trigger');
  }
  public set publishTrigger(value: boolean | cdktf.IResolvable) {
    this._publishTrigger = value;
  }
  public resetPublishTrigger() {
    this._publishTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishTriggerInput() {
    return this._publishTrigger;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_uri - computed: true, optional: false, required: false
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // metric_list - computed: false, optional: false, required: true
  private _metricList = new StackMonitoringMetricExtensionMetricListStructList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }
  public putMetricList(value: StackMonitoringMetricExtensionMetricListStruct[] | cdktf.IResolvable) {
    this._metricList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricListInput() {
    return this._metricList.internalValue;
  }

  // query_properties - computed: false, optional: false, required: true
  private _queryProperties = new StackMonitoringMetricExtensionQueryPropertiesOutputReference(this, "query_properties");
  public get queryProperties() {
    return this._queryProperties;
  }
  public putQueryProperties(value: StackMonitoringMetricExtensionQueryProperties) {
    this._queryProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPropertiesInput() {
    return this._queryProperties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringMetricExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringMetricExtensionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_recurrences: cdktf.stringToTerraform(this._collectionRecurrences),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      publish_trigger: cdktf.booleanToTerraform(this._publishTrigger),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      metric_list: cdktf.listMapper(stackMonitoringMetricExtensionMetricListStructToTerraform, true)(this._metricList.internalValue),
      query_properties: stackMonitoringMetricExtensionQueryPropertiesToTerraform(this._queryProperties.internalValue),
      timeouts: stackMonitoringMetricExtensionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_recurrences: {
        value: cdktf.stringToHclTerraform(this._collectionRecurrences),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      publish_trigger: {
        value: cdktf.booleanToHclTerraform(this._publishTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_list: {
        value: cdktf.listMapperHcl(stackMonitoringMetricExtensionMetricListStructToHclTerraform, true)(this._metricList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMetricExtensionMetricListStructList",
      },
      query_properties: {
        value: stackMonitoringMetricExtensionQueryPropertiesToHclTerraform(this._queryProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMetricExtensionQueryPropertiesList",
      },
      timeouts: {
        value: stackMonitoringMetricExtensionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringMetricExtensionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
