// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#action_group_ref Alertconfig#action_group_ref}
  */
  readonly actionGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#autoscale_alert Alertconfig#autoscale_alert}
  */
  readonly autoscaleAlert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#category Alertconfig#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#description Alertconfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#enabled Alertconfig#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#expiry_time Alertconfig#expiry_time}
  */
  readonly expiryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#id Alertconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#name Alertconfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#obj_uuid Alertconfig#obj_uuid}
  */
  readonly objUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#object_type Alertconfig#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#recommendation Alertconfig#recommendation}
  */
  readonly recommendation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#rolling_window Alertconfig#rolling_window}
  */
  readonly rollingWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#source Alertconfig#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#summary Alertconfig#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#tenant_ref Alertconfig#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#threshold Alertconfig#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#throttle Alertconfig#throttle}
  */
  readonly throttle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#uuid Alertconfig#uuid}
  */
  readonly uuid?: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#alert_rule Alertconfig#alert_rule}
  */
  readonly alertRule: AlertconfigAlertRule[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#configpb_attributes Alertconfig#configpb_attributes}
  */
  readonly configpbAttributes?: AlertconfigConfigpbAttributes[] | cdktf.IResolvable;
}
export interface AlertconfigAlertRuleConnAppLogRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#filter_action Alertconfig#filter_action}
  */
  readonly filterAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#filter_string Alertconfig#filter_string}
  */
  readonly filterString: string;
}

export function alertconfigAlertRuleConnAppLogRuleToTerraform(struct?: AlertconfigAlertRuleConnAppLogRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_action: cdktf.stringToTerraform(struct!.filterAction),
    filter_string: cdktf.stringToTerraform(struct!.filterString),
  }
}


export function alertconfigAlertRuleConnAppLogRuleToHclTerraform(struct?: AlertconfigAlertRuleConnAppLogRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_action: {
      value: cdktf.stringToHclTerraform(struct!.filterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_string: {
      value: cdktf.stringToHclTerraform(struct!.filterString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertconfigAlertRuleConnAppLogRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertconfigAlertRuleConnAppLogRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAction = this._filterAction;
    }
    if (this._filterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterString = this._filterString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertconfigAlertRuleConnAppLogRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterAction = undefined;
      this._filterString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterAction = value.filterAction;
      this._filterString = value.filterString;
    }
  }

  // filter_action - computed: true, optional: true, required: false
  private _filterAction?: string; 
  public get filterAction() {
    return this.getStringAttribute('filter_action');
  }
  public set filterAction(value: string) {
    this._filterAction = value;
  }
  public resetFilterAction() {
    this._filterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionInput() {
    return this._filterAction;
  }

  // filter_string - computed: false, optional: false, required: true
  private _filterString?: string; 
  public get filterString() {
    return this.getStringAttribute('filter_string');
  }
  public set filterString(value: string) {
    this._filterString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStringInput() {
    return this._filterString;
  }
}

export class AlertconfigAlertRuleConnAppLogRuleList extends cdktf.ComplexList {
  public internalValue? : AlertconfigAlertRuleConnAppLogRule[] | cdktf.IResolvable

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
  public get(index: number): AlertconfigAlertRuleConnAppLogRuleOutputReference {
    return new AlertconfigAlertRuleConnAppLogRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertconfigAlertRuleMetricsRuleMetricThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#comparator Alertconfig#comparator}
  */
  readonly comparator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#threshold Alertconfig#threshold}
  */
  readonly threshold?: string;
}

export function alertconfigAlertRuleMetricsRuleMetricThresholdToTerraform(struct?: AlertconfigAlertRuleMetricsRuleMetricThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function alertconfigAlertRuleMetricsRuleMetricThresholdToHclTerraform(struct?: AlertconfigAlertRuleMetricsRuleMetricThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertconfigAlertRuleMetricsRuleMetricThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertconfigAlertRuleMetricsRuleMetricThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertconfigAlertRuleMetricsRuleMetricThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._threshold = value.threshold;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class AlertconfigAlertRuleMetricsRuleMetricThresholdList extends cdktf.ComplexList {
  public internalValue? : AlertconfigAlertRuleMetricsRuleMetricThreshold[] | cdktf.IResolvable

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
  public get(index: number): AlertconfigAlertRuleMetricsRuleMetricThresholdOutputReference {
    return new AlertconfigAlertRuleMetricsRuleMetricThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertconfigAlertRuleMetricsRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#duration Alertconfig#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#metric_id Alertconfig#metric_id}
  */
  readonly metricId?: string;
  /**
  * metric_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#metric_threshold Alertconfig#metric_threshold}
  */
  readonly metricThreshold: AlertconfigAlertRuleMetricsRuleMetricThreshold[] | cdktf.IResolvable;
}

export function alertconfigAlertRuleMetricsRuleToTerraform(struct?: AlertconfigAlertRuleMetricsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    metric_threshold: cdktf.listMapper(alertconfigAlertRuleMetricsRuleMetricThresholdToTerraform, true)(struct!.metricThreshold),
  }
}


export function alertconfigAlertRuleMetricsRuleToHclTerraform(struct?: AlertconfigAlertRuleMetricsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_threshold: {
      value: cdktf.listMapperHcl(alertconfigAlertRuleMetricsRuleMetricThresholdToHclTerraform, true)(struct!.metricThreshold),
      isBlock: true,
      type: "set",
      storageClassType: "AlertconfigAlertRuleMetricsRuleMetricThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertconfigAlertRuleMetricsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertconfigAlertRuleMetricsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._metricThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricThreshold = this._metricThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertconfigAlertRuleMetricsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._metricId = undefined;
      this._metricThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._metricId = value.metricId;
      this._metricThreshold.internalValue = value.metricThreshold;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // metric_id - computed: true, optional: true, required: false
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  public resetMetricId() {
    this._metricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_threshold - computed: false, optional: false, required: true
  private _metricThreshold = new AlertconfigAlertRuleMetricsRuleMetricThresholdList(this, "metric_threshold", true);
  public get metricThreshold() {
    return this._metricThreshold;
  }
  public putMetricThreshold(value: AlertconfigAlertRuleMetricsRuleMetricThreshold[] | cdktf.IResolvable) {
    this._metricThreshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricThresholdInput() {
    return this._metricThreshold.internalValue;
  }
}

export class AlertconfigAlertRuleMetricsRuleList extends cdktf.ComplexList {
  public internalValue? : AlertconfigAlertRuleMetricsRule[] | cdktf.IResolvable

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
  public get(index: number): AlertconfigAlertRuleMetricsRuleOutputReference {
    return new AlertconfigAlertRuleMetricsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertconfigAlertRuleSysEventRuleEventDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#comparator Alertconfig#comparator}
  */
  readonly comparator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#event_details_key Alertconfig#event_details_key}
  */
  readonly eventDetailsKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#event_details_value Alertconfig#event_details_value}
  */
  readonly eventDetailsValue: string;
}

export function alertconfigAlertRuleSysEventRuleEventDetailsToTerraform(struct?: AlertconfigAlertRuleSysEventRuleEventDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    event_details_key: cdktf.stringToTerraform(struct!.eventDetailsKey),
    event_details_value: cdktf.stringToTerraform(struct!.eventDetailsValue),
  }
}


export function alertconfigAlertRuleSysEventRuleEventDetailsToHclTerraform(struct?: AlertconfigAlertRuleSysEventRuleEventDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_details_key: {
      value: cdktf.stringToHclTerraform(struct!.eventDetailsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_details_value: {
      value: cdktf.stringToHclTerraform(struct!.eventDetailsValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertconfigAlertRuleSysEventRuleEventDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertconfigAlertRuleSysEventRuleEventDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._eventDetailsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDetailsKey = this._eventDetailsKey;
    }
    if (this._eventDetailsValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDetailsValue = this._eventDetailsValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertconfigAlertRuleSysEventRuleEventDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._eventDetailsKey = undefined;
      this._eventDetailsValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._eventDetailsKey = value.eventDetailsKey;
      this._eventDetailsValue = value.eventDetailsValue;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // event_details_key - computed: false, optional: false, required: true
  private _eventDetailsKey?: string; 
  public get eventDetailsKey() {
    return this.getStringAttribute('event_details_key');
  }
  public set eventDetailsKey(value: string) {
    this._eventDetailsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDetailsKeyInput() {
    return this._eventDetailsKey;
  }

  // event_details_value - computed: false, optional: false, required: true
  private _eventDetailsValue?: string; 
  public get eventDetailsValue() {
    return this.getStringAttribute('event_details_value');
  }
  public set eventDetailsValue(value: string) {
    this._eventDetailsValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDetailsValueInput() {
    return this._eventDetailsValue;
  }
}

export class AlertconfigAlertRuleSysEventRuleEventDetailsList extends cdktf.ComplexList {
  public internalValue? : AlertconfigAlertRuleSysEventRuleEventDetails[] | cdktf.IResolvable

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
  public get(index: number): AlertconfigAlertRuleSysEventRuleEventDetailsOutputReference {
    return new AlertconfigAlertRuleSysEventRuleEventDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertconfigAlertRuleSysEventRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#event_id Alertconfig#event_id}
  */
  readonly eventId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#not_cond Alertconfig#not_cond}
  */
  readonly notCond?: string;
  /**
  * event_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#event_details Alertconfig#event_details}
  */
  readonly eventDetails?: AlertconfigAlertRuleSysEventRuleEventDetails[] | cdktf.IResolvable;
}

export function alertconfigAlertRuleSysEventRuleToTerraform(struct?: AlertconfigAlertRuleSysEventRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_id: cdktf.stringToTerraform(struct!.eventId),
    not_cond: cdktf.stringToTerraform(struct!.notCond),
    event_details: cdktf.listMapper(alertconfigAlertRuleSysEventRuleEventDetailsToTerraform, true)(struct!.eventDetails),
  }
}


export function alertconfigAlertRuleSysEventRuleToHclTerraform(struct?: AlertconfigAlertRuleSysEventRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_id: {
      value: cdktf.stringToHclTerraform(struct!.eventId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_cond: {
      value: cdktf.stringToHclTerraform(struct!.notCond),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_details: {
      value: cdktf.listMapperHcl(alertconfigAlertRuleSysEventRuleEventDetailsToHclTerraform, true)(struct!.eventDetails),
      isBlock: true,
      type: "list",
      storageClassType: "AlertconfigAlertRuleSysEventRuleEventDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertconfigAlertRuleSysEventRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertconfigAlertRuleSysEventRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventId = this._eventId;
    }
    if (this._notCond !== undefined) {
      hasAnyValues = true;
      internalValueResult.notCond = this._notCond;
    }
    if (this._eventDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDetails = this._eventDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertconfigAlertRuleSysEventRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventId = undefined;
      this._notCond = undefined;
      this._eventDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventId = value.eventId;
      this._notCond = value.notCond;
      this._eventDetails.internalValue = value.eventDetails;
    }
  }

  // event_id - computed: true, optional: true, required: false
  private _eventId?: string; 
  public get eventId() {
    return this.getStringAttribute('event_id');
  }
  public set eventId(value: string) {
    this._eventId = value;
  }
  public resetEventId() {
    this._eventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdInput() {
    return this._eventId;
  }

  // not_cond - computed: false, optional: true, required: false
  private _notCond?: string; 
  public get notCond() {
    return this.getStringAttribute('not_cond');
  }
  public set notCond(value: string) {
    this._notCond = value;
  }
  public resetNotCond() {
    this._notCond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notCondInput() {
    return this._notCond;
  }

  // event_details - computed: false, optional: true, required: false
  private _eventDetails = new AlertconfigAlertRuleSysEventRuleEventDetailsList(this, "event_details", false);
  public get eventDetails() {
    return this._eventDetails;
  }
  public putEventDetails(value: AlertconfigAlertRuleSysEventRuleEventDetails[] | cdktf.IResolvable) {
    this._eventDetails.internalValue = value;
  }
  public resetEventDetails() {
    this._eventDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDetailsInput() {
    return this._eventDetails.internalValue;
  }
}

export class AlertconfigAlertRuleSysEventRuleList extends cdktf.ComplexList {
  public internalValue? : AlertconfigAlertRuleSysEventRule[] | cdktf.IResolvable

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
  public get(index: number): AlertconfigAlertRuleSysEventRuleOutputReference {
    return new AlertconfigAlertRuleSysEventRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertconfigAlertRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#event_match_filter Alertconfig#event_match_filter}
  */
  readonly eventMatchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#operator Alertconfig#operator}
  */
  readonly operator?: string;
  /**
  * conn_app_log_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#conn_app_log_rule Alertconfig#conn_app_log_rule}
  */
  readonly connAppLogRule?: AlertconfigAlertRuleConnAppLogRule[] | cdktf.IResolvable;
  /**
  * metrics_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#metrics_rule Alertconfig#metrics_rule}
  */
  readonly metricsRule?: AlertconfigAlertRuleMetricsRule[] | cdktf.IResolvable;
  /**
  * sys_event_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#sys_event_rule Alertconfig#sys_event_rule}
  */
  readonly sysEventRule?: AlertconfigAlertRuleSysEventRule[] | cdktf.IResolvable;
}

export function alertconfigAlertRuleToTerraform(struct?: AlertconfigAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_match_filter: cdktf.stringToTerraform(struct!.eventMatchFilter),
    operator: cdktf.stringToTerraform(struct!.operator),
    conn_app_log_rule: cdktf.listMapper(alertconfigAlertRuleConnAppLogRuleToTerraform, true)(struct!.connAppLogRule),
    metrics_rule: cdktf.listMapper(alertconfigAlertRuleMetricsRuleToTerraform, true)(struct!.metricsRule),
    sys_event_rule: cdktf.listMapper(alertconfigAlertRuleSysEventRuleToTerraform, true)(struct!.sysEventRule),
  }
}


export function alertconfigAlertRuleToHclTerraform(struct?: AlertconfigAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_match_filter: {
      value: cdktf.stringToHclTerraform(struct!.eventMatchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conn_app_log_rule: {
      value: cdktf.listMapperHcl(alertconfigAlertRuleConnAppLogRuleToHclTerraform, true)(struct!.connAppLogRule),
      isBlock: true,
      type: "set",
      storageClassType: "AlertconfigAlertRuleConnAppLogRuleList",
    },
    metrics_rule: {
      value: cdktf.listMapperHcl(alertconfigAlertRuleMetricsRuleToHclTerraform, true)(struct!.metricsRule),
      isBlock: true,
      type: "list",
      storageClassType: "AlertconfigAlertRuleMetricsRuleList",
    },
    sys_event_rule: {
      value: cdktf.listMapperHcl(alertconfigAlertRuleSysEventRuleToHclTerraform, true)(struct!.sysEventRule),
      isBlock: true,
      type: "list",
      storageClassType: "AlertconfigAlertRuleSysEventRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertconfigAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertconfigAlertRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventMatchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventMatchFilter = this._eventMatchFilter;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._connAppLogRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connAppLogRule = this._connAppLogRule?.internalValue;
    }
    if (this._metricsRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsRule = this._metricsRule?.internalValue;
    }
    if (this._sysEventRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysEventRule = this._sysEventRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertconfigAlertRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventMatchFilter = undefined;
      this._operator = undefined;
      this._connAppLogRule.internalValue = undefined;
      this._metricsRule.internalValue = undefined;
      this._sysEventRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventMatchFilter = value.eventMatchFilter;
      this._operator = value.operator;
      this._connAppLogRule.internalValue = value.connAppLogRule;
      this._metricsRule.internalValue = value.metricsRule;
      this._sysEventRule.internalValue = value.sysEventRule;
    }
  }

  // event_match_filter - computed: true, optional: true, required: false
  private _eventMatchFilter?: string; 
  public get eventMatchFilter() {
    return this.getStringAttribute('event_match_filter');
  }
  public set eventMatchFilter(value: string) {
    this._eventMatchFilter = value;
  }
  public resetEventMatchFilter() {
    this._eventMatchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventMatchFilterInput() {
    return this._eventMatchFilter;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // conn_app_log_rule - computed: false, optional: true, required: false
  private _connAppLogRule = new AlertconfigAlertRuleConnAppLogRuleList(this, "conn_app_log_rule", true);
  public get connAppLogRule() {
    return this._connAppLogRule;
  }
  public putConnAppLogRule(value: AlertconfigAlertRuleConnAppLogRule[] | cdktf.IResolvable) {
    this._connAppLogRule.internalValue = value;
  }
  public resetConnAppLogRule() {
    this._connAppLogRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connAppLogRuleInput() {
    return this._connAppLogRule.internalValue;
  }

  // metrics_rule - computed: false, optional: true, required: false
  private _metricsRule = new AlertconfigAlertRuleMetricsRuleList(this, "metrics_rule", false);
  public get metricsRule() {
    return this._metricsRule;
  }
  public putMetricsRule(value: AlertconfigAlertRuleMetricsRule[] | cdktf.IResolvable) {
    this._metricsRule.internalValue = value;
  }
  public resetMetricsRule() {
    this._metricsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRuleInput() {
    return this._metricsRule.internalValue;
  }

  // sys_event_rule - computed: false, optional: true, required: false
  private _sysEventRule = new AlertconfigAlertRuleSysEventRuleList(this, "sys_event_rule", false);
  public get sysEventRule() {
    return this._sysEventRule;
  }
  public putSysEventRule(value: AlertconfigAlertRuleSysEventRule[] | cdktf.IResolvable) {
    this._sysEventRule.internalValue = value;
  }
  public resetSysEventRule() {
    this._sysEventRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysEventRuleInput() {
    return this._sysEventRule.internalValue;
  }
}

export class AlertconfigAlertRuleList extends cdktf.ComplexList {
  public internalValue? : AlertconfigAlertRule[] | cdktf.IResolvable

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
  public get(index: number): AlertconfigAlertRuleOutputReference {
    return new AlertconfigAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertconfigConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#version Alertconfig#version}
  */
  readonly version?: string;
}

export function alertconfigConfigpbAttributesToTerraform(struct?: AlertconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function alertconfigConfigpbAttributesToHclTerraform(struct?: AlertconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertconfigConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertconfigConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertconfigConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class AlertconfigConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertconfigConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertconfigConfigpbAttributesOutputReference {
    return new AlertconfigConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig avi_alertconfig}
*/
export class Alertconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_alertconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alertconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alertconfig to import
  * @param importFromId The id of the existing Alertconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alertconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_alertconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/alertconfig avi_alertconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertconfigConfig
  */
  public constructor(scope: Construct, id: string, config: AlertconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_alertconfig',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionGroupRef = config.actionGroupRef;
    this._autoscaleAlert = config.autoscaleAlert;
    this._category = config.category;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expiryTime = config.expiryTime;
    this._id = config.id;
    this._name = config.name;
    this._objUuid = config.objUuid;
    this._objectType = config.objectType;
    this._recommendation = config.recommendation;
    this._rollingWindow = config.rollingWindow;
    this._source = config.source;
    this._summary = config.summary;
    this._tenantRef = config.tenantRef;
    this._threshold = config.threshold;
    this._throttle = config.throttle;
    this._uuid = config.uuid;
    this._alertRule.internalValue = config.alertRule;
    this._configpbAttributes.internalValue = config.configpbAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_group_ref - computed: true, optional: true, required: false
  private _actionGroupRef?: string; 
  public get actionGroupRef() {
    return this.getStringAttribute('action_group_ref');
  }
  public set actionGroupRef(value: string) {
    this._actionGroupRef = value;
  }
  public resetActionGroupRef() {
    this._actionGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupRefInput() {
    return this._actionGroupRef;
  }

  // autoscale_alert - computed: true, optional: true, required: false
  private _autoscaleAlert?: string; 
  public get autoscaleAlert() {
    return this.getStringAttribute('autoscale_alert');
  }
  public set autoscaleAlert(value: string) {
    this._autoscaleAlert = value;
  }
  public resetAutoscaleAlert() {
    this._autoscaleAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleAlertInput() {
    return this._autoscaleAlert;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expiry_time - computed: false, optional: true, required: false
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
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

  // obj_uuid - computed: true, optional: true, required: false
  private _objUuid?: string; 
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }
  public set objUuid(value: string) {
    this._objUuid = value;
  }
  public resetObjUuid() {
    this._objUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objUuidInput() {
    return this._objUuid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // recommendation - computed: true, optional: true, required: false
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  public resetRecommendation() {
    this._recommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // rolling_window - computed: false, optional: true, required: false
  private _rollingWindow?: string; 
  public get rollingWindow() {
    return this.getStringAttribute('rolling_window');
  }
  public set rollingWindow(value: string) {
    this._rollingWindow = value;
  }
  public resetRollingWindow() {
    this._rollingWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingWindowInput() {
    return this._rollingWindow;
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

  // summary - computed: true, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle?: string; 
  public get throttle() {
    return this.getStringAttribute('throttle');
  }
  public set throttle(value: string) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // alert_rule - computed: false, optional: false, required: true
  private _alertRule = new AlertconfigAlertRuleList(this, "alert_rule", true);
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: AlertconfigAlertRule[] | cdktf.IResolvable) {
    this._alertRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new AlertconfigConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AlertconfigConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_group_ref: cdktf.stringToTerraform(this._actionGroupRef),
      autoscale_alert: cdktf.stringToTerraform(this._autoscaleAlert),
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.stringToTerraform(this._enabled),
      expiry_time: cdktf.stringToTerraform(this._expiryTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      obj_uuid: cdktf.stringToTerraform(this._objUuid),
      object_type: cdktf.stringToTerraform(this._objectType),
      recommendation: cdktf.stringToTerraform(this._recommendation),
      rolling_window: cdktf.stringToTerraform(this._rollingWindow),
      source: cdktf.stringToTerraform(this._source),
      summary: cdktf.stringToTerraform(this._summary),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      threshold: cdktf.stringToTerraform(this._threshold),
      throttle: cdktf.stringToTerraform(this._throttle),
      uuid: cdktf.stringToTerraform(this._uuid),
      alert_rule: cdktf.listMapper(alertconfigAlertRuleToTerraform, true)(this._alertRule.internalValue),
      configpb_attributes: cdktf.listMapper(alertconfigConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_group_ref: {
        value: cdktf.stringToHclTerraform(this._actionGroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscale_alert: {
        value: cdktf.stringToHclTerraform(this._autoscaleAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_time: {
        value: cdktf.stringToHclTerraform(this._expiryTime),
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
      obj_uuid: {
        value: cdktf.stringToHclTerraform(this._objUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommendation: {
        value: cdktf.stringToHclTerraform(this._recommendation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolling_window: {
        value: cdktf.stringToHclTerraform(this._rollingWindow),
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
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.stringToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttle: {
        value: cdktf.stringToHclTerraform(this._throttle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_rule: {
        value: cdktf.listMapperHcl(alertconfigAlertRuleToHclTerraform, true)(this._alertRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertconfigAlertRuleList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(alertconfigConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertconfigConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
