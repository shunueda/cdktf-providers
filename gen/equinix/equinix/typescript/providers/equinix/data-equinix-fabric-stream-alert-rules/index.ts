// https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricStreamAlertRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pagination details for the returned stream alert rules list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#pagination DataEquinixFabricStreamAlertRules#pagination}
  */
  readonly pagination: DataEquinixFabricStreamAlertRulesPagination;
  /**
  * The uuid of the stream that is the target of the stream alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#stream_id DataEquinixFabricStreamAlertRules#stream_id}
  */
  readonly streamId: string;
}
export interface DataEquinixFabricStreamAlertRulesDataChangeLog {
}

export function dataEquinixFabricStreamAlertRulesDataChangeLogToTerraform(struct?: DataEquinixFabricStreamAlertRulesDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricStreamAlertRulesDataChangeLogToHclTerraform(struct?: DataEquinixFabricStreamAlertRulesDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricStreamAlertRulesDataChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRulesDataChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRulesDataChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}
export interface DataEquinixFabricStreamAlertRulesDataDetectionMethod {
  /**
  * Stream alert rule metric critical threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#critical_threshold DataEquinixFabricStreamAlertRules#critical_threshold}
  */
  readonly criticalThreshold?: string;
  /**
  * Stream alert rule metric operand
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#operand DataEquinixFabricStreamAlertRules#operand}
  */
  readonly operand?: string;
  /**
  * Stream Alert Rule detection method type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#type DataEquinixFabricStreamAlertRules#type}
  */
  readonly type: string;
  /**
  * Stream alert rule metric warning threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#warning_threshold DataEquinixFabricStreamAlertRules#warning_threshold}
  */
  readonly warningThreshold?: string;
  /**
  * Stream alert rule metric window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#window_size DataEquinixFabricStreamAlertRules#window_size}
  */
  readonly windowSize?: string;
}

export function dataEquinixFabricStreamAlertRulesDataDetectionMethodToTerraform(struct?: DataEquinixFabricStreamAlertRulesDataDetectionMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_threshold: cdktf.stringToTerraform(struct!.criticalThreshold),
    operand: cdktf.stringToTerraform(struct!.operand),
    type: cdktf.stringToTerraform(struct!.type),
    warning_threshold: cdktf.stringToTerraform(struct!.warningThreshold),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function dataEquinixFabricStreamAlertRulesDataDetectionMethodToHclTerraform(struct?: DataEquinixFabricStreamAlertRulesDataDetectionMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical_threshold: {
      value: cdktf.stringToHclTerraform(struct!.criticalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operand: {
      value: cdktf.stringToHclTerraform(struct!.operand),
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
    warning_threshold: {
      value: cdktf.stringToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricStreamAlertRulesDataDetectionMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRulesDataDetectionMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criticalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalThreshold = this._criticalThreshold;
    }
    if (this._operand !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand = this._operand;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRulesDataDetectionMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalThreshold = undefined;
      this._operand = undefined;
      this._type = undefined;
      this._warningThreshold = undefined;
      this._windowSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criticalThreshold = value.criticalThreshold;
      this._operand = value.operand;
      this._type = value.type;
      this._warningThreshold = value.warningThreshold;
      this._windowSize = value.windowSize;
    }
  }

  // critical_threshold - computed: true, optional: true, required: false
  private _criticalThreshold?: string; 
  public get criticalThreshold() {
    return this.getStringAttribute('critical_threshold');
  }
  public set criticalThreshold(value: string) {
    this._criticalThreshold = value;
  }
  public resetCriticalThreshold() {
    this._criticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalThresholdInput() {
    return this._criticalThreshold;
  }

  // operand - computed: true, optional: true, required: false
  private _operand?: string; 
  public get operand() {
    return this.getStringAttribute('operand');
  }
  public set operand(value: string) {
    this._operand = value;
  }
  public resetOperand() {
    this._operand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandInput() {
    return this._operand;
  }

  // type - computed: true, optional: false, required: true
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

  // warning_threshold - computed: true, optional: true, required: false
  private _warningThreshold?: string; 
  public get warningThreshold() {
    return this.getStringAttribute('warning_threshold');
  }
  public set warningThreshold(value: string) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // window_size - computed: true, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface DataEquinixFabricStreamAlertRulesDataMetricSelector {
  /**
  * List of metrics to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#include DataEquinixFabricStreamAlertRules#include}
  */
  readonly include: string[];
}

export function dataEquinixFabricStreamAlertRulesDataMetricSelectorToTerraform(struct?: DataEquinixFabricStreamAlertRulesDataMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function dataEquinixFabricStreamAlertRulesDataMetricSelectorToHclTerraform(struct?: DataEquinixFabricStreamAlertRulesDataMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricStreamAlertRulesDataMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRulesDataMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRulesDataMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
    }
  }

  // include - computed: true, optional: false, required: true
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface DataEquinixFabricStreamAlertRulesDataResourceSelector {
}

export function dataEquinixFabricStreamAlertRulesDataResourceSelectorToTerraform(struct?: DataEquinixFabricStreamAlertRulesDataResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricStreamAlertRulesDataResourceSelectorToHclTerraform(struct?: DataEquinixFabricStreamAlertRulesDataResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricStreamAlertRulesDataResourceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRulesDataResourceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRulesDataResourceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getListAttribute('include');
  }
}
export interface DataEquinixFabricStreamAlertRulesData {
  /**
  * Detection method for stream alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#detection_method DataEquinixFabricStreamAlertRules#detection_method}
  */
  readonly detectionMethod?: DataEquinixFabricStreamAlertRulesDataDetectionMethod;
  /**
  * Metric selector for the stream alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#metric_selector DataEquinixFabricStreamAlertRules#metric_selector}
  */
  readonly metricSelector?: DataEquinixFabricStreamAlertRulesDataMetricSelector;
}

export function dataEquinixFabricStreamAlertRulesDataToTerraform(struct?: DataEquinixFabricStreamAlertRulesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_method: dataEquinixFabricStreamAlertRulesDataDetectionMethodToTerraform(struct!.detectionMethod),
    metric_selector: dataEquinixFabricStreamAlertRulesDataMetricSelectorToTerraform(struct!.metricSelector),
  }
}


export function dataEquinixFabricStreamAlertRulesDataToHclTerraform(struct?: DataEquinixFabricStreamAlertRulesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_method: {
      value: dataEquinixFabricStreamAlertRulesDataDetectionMethodToHclTerraform(struct!.detectionMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataEquinixFabricStreamAlertRulesDataDetectionMethod",
    },
    metric_selector: {
      value: dataEquinixFabricStreamAlertRulesDataMetricSelectorToHclTerraform(struct!.metricSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataEquinixFabricStreamAlertRulesDataMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricStreamAlertRulesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricStreamAlertRulesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMethod = this._detectionMethod?.internalValue;
    }
    if (this._metricSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelector = this._metricSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRulesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMethod.internalValue = undefined;
      this._metricSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMethod.internalValue = value.detectionMethod;
      this._metricSelector.internalValue = value.metricSelector;
    }
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new DataEquinixFabricStreamAlertRulesDataChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detection_method - computed: true, optional: true, required: false
  private _detectionMethod = new DataEquinixFabricStreamAlertRulesDataDetectionMethodOutputReference(this, "detection_method");
  public get detectionMethod() {
    return this._detectionMethod;
  }
  public putDetectionMethod(value: DataEquinixFabricStreamAlertRulesDataDetectionMethod) {
    this._detectionMethod.internalValue = value;
  }
  public resetDetectionMethod() {
    this._detectionMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMethodInput() {
    return this._detectionMethod.internalValue;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // metric_selector - computed: true, optional: true, required: false
  private _metricSelector = new DataEquinixFabricStreamAlertRulesDataMetricSelectorOutputReference(this, "metric_selector");
  public get metricSelector() {
    return this._metricSelector;
  }
  public putMetricSelector(value: DataEquinixFabricStreamAlertRulesDataMetricSelector) {
    this._metricSelector.internalValue = value;
  }
  public resetMetricSelector() {
    this._metricSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_selector - computed: true, optional: false, required: false
  private _resourceSelector = new DataEquinixFabricStreamAlertRulesDataResourceSelectorOutputReference(this, "resource_selector");
  public get resourceSelector() {
    return this._resourceSelector;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataEquinixFabricStreamAlertRulesDataList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricStreamAlertRulesData[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricStreamAlertRulesDataOutputReference {
    return new DataEquinixFabricStreamAlertRulesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricStreamAlertRulesPagination {
  /**
  * Maximum number of search results returned per page. Number must be between 1 and 100, and the default is 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#limit DataEquinixFabricStreamAlertRules#limit}
  */
  readonly limit?: number;
  /**
  * Index of the first item returned in the response. The default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#offset DataEquinixFabricStreamAlertRules#offset}
  */
  readonly offset?: number;
}

export function dataEquinixFabricStreamAlertRulesPaginationToTerraform(struct?: DataEquinixFabricStreamAlertRulesPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
  }
}


export function dataEquinixFabricStreamAlertRulesPaginationToHclTerraform(struct?: DataEquinixFabricStreamAlertRulesPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricStreamAlertRulesPaginationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRulesPagination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRulesPagination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._offset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._offset = value.offset;
    }
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules equinix_fabric_stream_alert_rules}
*/
export class DataEquinixFabricStreamAlertRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_stream_alert_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricStreamAlertRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricStreamAlertRules to import
  * @param importFromId The id of the existing DataEquinixFabricStreamAlertRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricStreamAlertRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_stream_alert_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_alert_rules equinix_fabric_stream_alert_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricStreamAlertRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricStreamAlertRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_stream_alert_rules',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pagination.internalValue = config.pagination;
    this._streamId = config.streamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataEquinixFabricStreamAlertRulesDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pagination - computed: false, optional: false, required: true
  private _pagination = new DataEquinixFabricStreamAlertRulesPaginationOutputReference(this, "pagination");
  public get pagination() {
    return this._pagination;
  }
  public putPagination(value: DataEquinixFabricStreamAlertRulesPagination) {
    this._pagination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationInput() {
    return this._pagination.internalValue;
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pagination: dataEquinixFabricStreamAlertRulesPaginationToTerraform(this._pagination.internalValue),
      stream_id: cdktf.stringToTerraform(this._streamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pagination: {
        value: dataEquinixFabricStreamAlertRulesPaginationToHclTerraform(this._pagination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricStreamAlertRulesPagination",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
