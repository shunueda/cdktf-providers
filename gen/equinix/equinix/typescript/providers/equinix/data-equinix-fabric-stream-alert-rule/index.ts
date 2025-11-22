// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricStreamAlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The uuid of the stream alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#alert_rule_id DataEquinixFabricStreamAlertRule#alert_rule_id}
  */
  readonly alertRuleId: string;
  /**
  * Detection method for stream alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#detection_method DataEquinixFabricStreamAlertRule#detection_method}
  */
  readonly detectionMethod?: DataEquinixFabricStreamAlertRuleDetectionMethod;
  /**
  * Metric selector for the stream alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#metric_selector DataEquinixFabricStreamAlertRule#metric_selector}
  */
  readonly metricSelector?: DataEquinixFabricStreamAlertRuleMetricSelector;
  /**
  * The uuid of the stream that is the target of the stream alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#stream_id DataEquinixFabricStreamAlertRule#stream_id}
  */
  readonly streamId: string;
}
export interface DataEquinixFabricStreamAlertRuleChangeLog {
}

export function dataEquinixFabricStreamAlertRuleChangeLogToTerraform(struct?: DataEquinixFabricStreamAlertRuleChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricStreamAlertRuleChangeLogToHclTerraform(struct?: DataEquinixFabricStreamAlertRuleChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricStreamAlertRuleChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRuleChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRuleChangeLog | undefined) {
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
export interface DataEquinixFabricStreamAlertRuleDetectionMethod {
  /**
  * Stream alert rule metric critical threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#critical_threshold DataEquinixFabricStreamAlertRule#critical_threshold}
  */
  readonly criticalThreshold?: string;
  /**
  * Stream alert rule metric operand
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#operand DataEquinixFabricStreamAlertRule#operand}
  */
  readonly operand?: string;
  /**
  * Stream Alert Rule detection method type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#type DataEquinixFabricStreamAlertRule#type}
  */
  readonly type: string;
  /**
  * Stream alert rule metric warning threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#warning_threshold DataEquinixFabricStreamAlertRule#warning_threshold}
  */
  readonly warningThreshold?: string;
  /**
  * Stream alert rule metric window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#window_size DataEquinixFabricStreamAlertRule#window_size}
  */
  readonly windowSize?: string;
}

export function dataEquinixFabricStreamAlertRuleDetectionMethodToTerraform(struct?: DataEquinixFabricStreamAlertRuleDetectionMethod | cdktf.IResolvable): any {
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


export function dataEquinixFabricStreamAlertRuleDetectionMethodToHclTerraform(struct?: DataEquinixFabricStreamAlertRuleDetectionMethod | cdktf.IResolvable): any {
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

export class DataEquinixFabricStreamAlertRuleDetectionMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRuleDetectionMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataEquinixFabricStreamAlertRuleDetectionMethod | cdktf.IResolvable | undefined) {
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
export interface DataEquinixFabricStreamAlertRuleMetricSelector {
  /**
  * List of metrics to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#include DataEquinixFabricStreamAlertRule#include}
  */
  readonly include: string[];
}

export function dataEquinixFabricStreamAlertRuleMetricSelectorToTerraform(struct?: DataEquinixFabricStreamAlertRuleMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function dataEquinixFabricStreamAlertRuleMetricSelectorToHclTerraform(struct?: DataEquinixFabricStreamAlertRuleMetricSelector | cdktf.IResolvable): any {
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

export class DataEquinixFabricStreamAlertRuleMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRuleMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataEquinixFabricStreamAlertRuleMetricSelector | cdktf.IResolvable | undefined) {
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
export interface DataEquinixFabricStreamAlertRuleResourceSelector {
}

export function dataEquinixFabricStreamAlertRuleResourceSelectorToTerraform(struct?: DataEquinixFabricStreamAlertRuleResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricStreamAlertRuleResourceSelectorToHclTerraform(struct?: DataEquinixFabricStreamAlertRuleResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricStreamAlertRuleResourceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricStreamAlertRuleResourceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricStreamAlertRuleResourceSelector | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule equinix_fabric_stream_alert_rule}
*/
export class DataEquinixFabricStreamAlertRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_stream_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricStreamAlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricStreamAlertRule to import
  * @param importFromId The id of the existing DataEquinixFabricStreamAlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricStreamAlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_stream_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_stream_alert_rule equinix_fabric_stream_alert_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricStreamAlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricStreamAlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_stream_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertRuleId = config.alertRuleId;
    this._detectionMethod.internalValue = config.detectionMethod;
    this._metricSelector.internalValue = config.metricSelector;
    this._streamId = config.streamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_id - computed: false, optional: false, required: true
  private _alertRuleId?: string; 
  public get alertRuleId() {
    return this.getStringAttribute('alert_rule_id');
  }
  public set alertRuleId(value: string) {
    this._alertRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleIdInput() {
    return this._alertRuleId;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new DataEquinixFabricStreamAlertRuleChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detection_method - computed: true, optional: true, required: false
  private _detectionMethod = new DataEquinixFabricStreamAlertRuleDetectionMethodOutputReference(this, "detection_method");
  public get detectionMethod() {
    return this._detectionMethod;
  }
  public putDetectionMethod(value: DataEquinixFabricStreamAlertRuleDetectionMethod) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_selector - computed: true, optional: true, required: false
  private _metricSelector = new DataEquinixFabricStreamAlertRuleMetricSelectorOutputReference(this, "metric_selector");
  public get metricSelector() {
    return this._metricSelector;
  }
  public putMetricSelector(value: DataEquinixFabricStreamAlertRuleMetricSelector) {
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
  private _resourceSelector = new DataEquinixFabricStreamAlertRuleResourceSelectorOutputReference(this, "resource_selector");
  public get resourceSelector() {
    return this._resourceSelector;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_rule_id: cdktf.stringToTerraform(this._alertRuleId),
      detection_method: dataEquinixFabricStreamAlertRuleDetectionMethodToTerraform(this._detectionMethod.internalValue),
      metric_selector: dataEquinixFabricStreamAlertRuleMetricSelectorToTerraform(this._metricSelector.internalValue),
      stream_id: cdktf.stringToTerraform(this._streamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_rule_id: {
        value: cdktf.stringToHclTerraform(this._alertRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detection_method: {
        value: dataEquinixFabricStreamAlertRuleDetectionMethodToHclTerraform(this._detectionMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricStreamAlertRuleDetectionMethod",
      },
      metric_selector: {
        value: dataEquinixFabricStreamAlertRuleMetricSelectorToHclTerraform(this._metricSelector.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricStreamAlertRuleMetricSelector",
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
