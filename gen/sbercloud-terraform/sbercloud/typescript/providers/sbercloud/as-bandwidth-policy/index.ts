// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsBandwidthPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies identification of operation the AS bandwidth policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#action AsBandwidthPolicy#action}
  */
  readonly action?: string;
  /**
  * Specifies the alarm rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#alarm_id AsBandwidthPolicy#alarm_id}
  */
  readonly alarmId?: string;
  /**
  * Specifies the scaling bandwidth ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#bandwidth_id AsBandwidthPolicy#bandwidth_id}
  */
  readonly bandwidthId: string;
  /**
  * Specifies the cooldown period (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#cool_down_time AsBandwidthPolicy#cool_down_time}
  */
  readonly coolDownTime?: number;
  /**
  * Specifies the description of the AS policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#description AsBandwidthPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#id AsBandwidthPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#region AsBandwidthPolicy#region}
  */
  readonly region?: string;
  /**
  * Specifies the AS policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#scaling_policy_name AsBandwidthPolicy#scaling_policy_name}
  */
  readonly scalingPolicyName: string;
  /**
  * Specifies the AS policy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#scaling_policy_type AsBandwidthPolicy#scaling_policy_type}
  */
  readonly scalingPolicyType: string;
  /**
  * interval_alarm_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#interval_alarm_actions AsBandwidthPolicy#interval_alarm_actions}
  */
  readonly intervalAlarmActions?: AsBandwidthPolicyIntervalAlarmActions[] | cdktf.IResolvable;
  /**
  * scaling_policy_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#scaling_policy_action AsBandwidthPolicy#scaling_policy_action}
  */
  readonly scalingPolicyAction?: AsBandwidthPolicyScalingPolicyAction;
  /**
  * scheduled_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#scheduled_policy AsBandwidthPolicy#scheduled_policy}
  */
  readonly scheduledPolicy?: AsBandwidthPolicyScheduledPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#timeouts AsBandwidthPolicy#timeouts}
  */
  readonly timeouts?: AsBandwidthPolicyTimeouts;
}
export interface AsBandwidthPolicyMetaData {
}

export function asBandwidthPolicyMetaDataToTerraform(struct?: AsBandwidthPolicyMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function asBandwidthPolicyMetaDataToHclTerraform(struct?: AsBandwidthPolicyMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AsBandwidthPolicyMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsBandwidthPolicyMetaData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsBandwidthPolicyMetaData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_bandwidth_share_type - computed: true, optional: false, required: false
  public get metadataBandwidthShareType() {
    return this.getStringAttribute('metadata_bandwidth_share_type');
  }

  // metadata_eip_address - computed: true, optional: false, required: false
  public get metadataEipAddress() {
    return this.getStringAttribute('metadata_eip_address');
  }

  // metadata_eip_id - computed: true, optional: false, required: false
  public get metadataEipId() {
    return this.getStringAttribute('metadata_eip_id');
  }
}

export class AsBandwidthPolicyMetaDataList extends cdktf.ComplexList {

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
  public get(index: number): AsBandwidthPolicyMetaDataOutputReference {
    return new AsBandwidthPolicyMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsBandwidthPolicyIntervalAlarmActions {
  /**
  * Specifies the operation restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#limits AsBandwidthPolicy#limits}
  */
  readonly limits?: number;
  /**
  * Specifies the lower limit of the value range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#lower_bound AsBandwidthPolicy#lower_bound}
  */
  readonly lowerBound?: string;
  /**
  * Specifies the operation to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#operation AsBandwidthPolicy#operation}
  */
  readonly operation?: string;
  /**
  * Specifies the operation size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#size AsBandwidthPolicy#size}
  */
  readonly size?: number;
  /**
  * Specifies the upper limit of the value range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#upper_bound AsBandwidthPolicy#upper_bound}
  */
  readonly upperBound?: string;
}

export function asBandwidthPolicyIntervalAlarmActionsToTerraform(struct?: AsBandwidthPolicyIntervalAlarmActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.numberToTerraform(struct!.limits),
    lower_bound: cdktf.stringToTerraform(struct!.lowerBound),
    operation: cdktf.stringToTerraform(struct!.operation),
    size: cdktf.numberToTerraform(struct!.size),
    upper_bound: cdktf.stringToTerraform(struct!.upperBound),
  }
}


export function asBandwidthPolicyIntervalAlarmActionsToHclTerraform(struct?: AsBandwidthPolicyIntervalAlarmActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.numberToHclTerraform(struct!.limits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lower_bound: {
      value: cdktf.stringToHclTerraform(struct!.lowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_bound: {
      value: cdktf.stringToHclTerraform(struct!.upperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsBandwidthPolicyIntervalAlarmActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsBandwidthPolicyIntervalAlarmActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._lowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._upperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsBandwidthPolicyIntervalAlarmActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._lowerBound = undefined;
      this._operation = undefined;
      this._size = undefined;
      this._upperBound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._lowerBound = value.lowerBound;
      this._operation = value.operation;
      this._size = value.size;
      this._upperBound = value.upperBound;
    }
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: number; 
  public get limits() {
    return this.getNumberAttribute('limits');
  }
  public set limits(value: number) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // lower_bound - computed: true, optional: true, required: false
  private _lowerBound?: string; 
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }
  public set lowerBound(value: string) {
    this._lowerBound = value;
  }
  public resetLowerBound() {
    this._lowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound;
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // upper_bound - computed: true, optional: true, required: false
  private _upperBound?: string; 
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
  public set upperBound(value: string) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }
}

export class AsBandwidthPolicyIntervalAlarmActionsList extends cdktf.ComplexList {
  public internalValue? : AsBandwidthPolicyIntervalAlarmActions[] | cdktf.IResolvable

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
  public get(index: number): AsBandwidthPolicyIntervalAlarmActionsOutputReference {
    return new AsBandwidthPolicyIntervalAlarmActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsBandwidthPolicyScalingPolicyAction {
  /**
  * Specifies the operation restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#limits AsBandwidthPolicy#limits}
  */
  readonly limits?: number;
  /**
  * Specifies the operation to be performed. The default operation is ADD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#operation AsBandwidthPolicy#operation}
  */
  readonly operation?: string;
  /**
  * Specifies the bandwidth (Mbit/s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#size AsBandwidthPolicy#size}
  */
  readonly size?: number;
}

export function asBandwidthPolicyScalingPolicyActionToTerraform(struct?: AsBandwidthPolicyScalingPolicyActionOutputReference | AsBandwidthPolicyScalingPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.numberToTerraform(struct!.limits),
    operation: cdktf.stringToTerraform(struct!.operation),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function asBandwidthPolicyScalingPolicyActionToHclTerraform(struct?: AsBandwidthPolicyScalingPolicyActionOutputReference | AsBandwidthPolicyScalingPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.numberToHclTerraform(struct!.limits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsBandwidthPolicyScalingPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsBandwidthPolicyScalingPolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsBandwidthPolicyScalingPolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._operation = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._operation = value.operation;
      this._size = value.size;
    }
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: number; 
  public get limits() {
    return this.getNumberAttribute('limits');
  }
  public set limits(value: number) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface AsBandwidthPolicyScheduledPolicy {
  /**
  * Specifies the end time of the scaling action triggered periodically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#end_time AsBandwidthPolicy#end_time}
  */
  readonly endTime?: string;
  /**
  * Specifies the time when the scaling action is triggered. The time format complies with UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#launch_time AsBandwidthPolicy#launch_time}
  */
  readonly launchTime: string;
  /**
  * Specifies the periodic triggering type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#recurrence_type AsBandwidthPolicy#recurrence_type}
  */
  readonly recurrenceType?: string;
  /**
  * Specifies the day when a periodic scaling action is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#recurrence_value AsBandwidthPolicy#recurrence_value}
  */
  readonly recurrenceValue?: string;
  /**
  * Specifies the start time of the scaling action triggered periodically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#start_time AsBandwidthPolicy#start_time}
  */
  readonly startTime?: string;
}

export function asBandwidthPolicyScheduledPolicyToTerraform(struct?: AsBandwidthPolicyScheduledPolicyOutputReference | AsBandwidthPolicyScheduledPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    launch_time: cdktf.stringToTerraform(struct!.launchTime),
    recurrence_type: cdktf.stringToTerraform(struct!.recurrenceType),
    recurrence_value: cdktf.stringToTerraform(struct!.recurrenceValue),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function asBandwidthPolicyScheduledPolicyToHclTerraform(struct?: AsBandwidthPolicyScheduledPolicyOutputReference | AsBandwidthPolicyScheduledPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_time: {
      value: cdktf.stringToHclTerraform(struct!.launchTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_type: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_value: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsBandwidthPolicyScheduledPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsBandwidthPolicyScheduledPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._launchTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTime = this._launchTime;
    }
    if (this._recurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceType = this._recurrenceType;
    }
    if (this._recurrenceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceValue = this._recurrenceValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsBandwidthPolicyScheduledPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._launchTime = undefined;
      this._recurrenceType = undefined;
      this._recurrenceValue = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._launchTime = value.launchTime;
      this._recurrenceType = value.recurrenceType;
      this._recurrenceValue = value.recurrenceValue;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // launch_time - computed: false, optional: false, required: true
  private _launchTime?: string; 
  public get launchTime() {
    return this.getStringAttribute('launch_time');
  }
  public set launchTime(value: string) {
    this._launchTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTimeInput() {
    return this._launchTime;
  }

  // recurrence_type - computed: true, optional: true, required: false
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  public resetRecurrenceType() {
    this._recurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
  }

  // recurrence_value - computed: true, optional: true, required: false
  private _recurrenceValue?: string; 
  public get recurrenceValue() {
    return this.getStringAttribute('recurrence_value');
  }
  public set recurrenceValue(value: string) {
    this._recurrenceValue = value;
  }
  public resetRecurrenceValue() {
    this._recurrenceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceValueInput() {
    return this._recurrenceValue;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface AsBandwidthPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#create AsBandwidthPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#update AsBandwidthPolicy#update}
  */
  readonly update?: string;
}

export function asBandwidthPolicyTimeoutsToTerraform(struct?: AsBandwidthPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function asBandwidthPolicyTimeoutsToHclTerraform(struct?: AsBandwidthPolicyTimeouts | cdktf.IResolvable): any {
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

export class AsBandwidthPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AsBandwidthPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsBandwidthPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy sbercloud_as_bandwidth_policy}
*/
export class AsBandwidthPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_as_bandwidth_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsBandwidthPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsBandwidthPolicy to import
  * @param importFromId The id of the existing AsBandwidthPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsBandwidthPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_as_bandwidth_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/as_bandwidth_policy sbercloud_as_bandwidth_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsBandwidthPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AsBandwidthPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_as_bandwidth_policy',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14',
        providerVersionConstraint: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._alarmId = config.alarmId;
    this._bandwidthId = config.bandwidthId;
    this._coolDownTime = config.coolDownTime;
    this._description = config.description;
    this._id = config.id;
    this._region = config.region;
    this._scalingPolicyName = config.scalingPolicyName;
    this._scalingPolicyType = config.scalingPolicyType;
    this._intervalAlarmActions.internalValue = config.intervalAlarmActions;
    this._scalingPolicyAction.internalValue = config.scalingPolicyAction;
    this._scheduledPolicy.internalValue = config.scheduledPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // alarm_id - computed: true, optional: true, required: false
  private _alarmId?: string; 
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }
  public set alarmId(value: string) {
    this._alarmId = value;
  }
  public resetAlarmId() {
    this._alarmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdInput() {
    return this._alarmId;
  }

  // bandwidth_id - computed: false, optional: false, required: true
  private _bandwidthId?: string; 
  public get bandwidthId() {
    return this.getStringAttribute('bandwidth_id');
  }
  public set bandwidthId(value: string) {
    this._bandwidthId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthIdInput() {
    return this._bandwidthId;
  }

  // cool_down_time - computed: true, optional: true, required: false
  private _coolDownTime?: number; 
  public get coolDownTime() {
    return this.getNumberAttribute('cool_down_time');
  }
  public set coolDownTime(value: number) {
    this._coolDownTime = value;
  }
  public resetCoolDownTime() {
    this._coolDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownTimeInput() {
    return this._coolDownTime;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // meta_data - computed: true, optional: false, required: false
  private _metaData = new AsBandwidthPolicyMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scaling_policy_name - computed: false, optional: false, required: true
  private _scalingPolicyName?: string; 
  public get scalingPolicyName() {
    return this.getStringAttribute('scaling_policy_name');
  }
  public set scalingPolicyName(value: string) {
    this._scalingPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyNameInput() {
    return this._scalingPolicyName;
  }

  // scaling_policy_type - computed: false, optional: false, required: true
  private _scalingPolicyType?: string; 
  public get scalingPolicyType() {
    return this.getStringAttribute('scaling_policy_type');
  }
  public set scalingPolicyType(value: string) {
    this._scalingPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyTypeInput() {
    return this._scalingPolicyType;
  }

  // scaling_resource_type - computed: true, optional: false, required: false
  public get scalingResourceType() {
    return this.getStringAttribute('scaling_resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // interval_alarm_actions - computed: false, optional: true, required: false
  private _intervalAlarmActions = new AsBandwidthPolicyIntervalAlarmActionsList(this, "interval_alarm_actions", true);
  public get intervalAlarmActions() {
    return this._intervalAlarmActions;
  }
  public putIntervalAlarmActions(value: AsBandwidthPolicyIntervalAlarmActions[] | cdktf.IResolvable) {
    this._intervalAlarmActions.internalValue = value;
  }
  public resetIntervalAlarmActions() {
    this._intervalAlarmActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalAlarmActionsInput() {
    return this._intervalAlarmActions.internalValue;
  }

  // scaling_policy_action - computed: false, optional: true, required: false
  private _scalingPolicyAction = new AsBandwidthPolicyScalingPolicyActionOutputReference(this, "scaling_policy_action");
  public get scalingPolicyAction() {
    return this._scalingPolicyAction;
  }
  public putScalingPolicyAction(value: AsBandwidthPolicyScalingPolicyAction) {
    this._scalingPolicyAction.internalValue = value;
  }
  public resetScalingPolicyAction() {
    this._scalingPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyActionInput() {
    return this._scalingPolicyAction.internalValue;
  }

  // scheduled_policy - computed: false, optional: true, required: false
  private _scheduledPolicy = new AsBandwidthPolicyScheduledPolicyOutputReference(this, "scheduled_policy");
  public get scheduledPolicy() {
    return this._scheduledPolicy;
  }
  public putScheduledPolicy(value: AsBandwidthPolicyScheduledPolicy) {
    this._scheduledPolicy.internalValue = value;
  }
  public resetScheduledPolicy() {
    this._scheduledPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledPolicyInput() {
    return this._scheduledPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AsBandwidthPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AsBandwidthPolicyTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      alarm_id: cdktf.stringToTerraform(this._alarmId),
      bandwidth_id: cdktf.stringToTerraform(this._bandwidthId),
      cool_down_time: cdktf.numberToTerraform(this._coolDownTime),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      scaling_policy_name: cdktf.stringToTerraform(this._scalingPolicyName),
      scaling_policy_type: cdktf.stringToTerraform(this._scalingPolicyType),
      interval_alarm_actions: cdktf.listMapper(asBandwidthPolicyIntervalAlarmActionsToTerraform, true)(this._intervalAlarmActions.internalValue),
      scaling_policy_action: asBandwidthPolicyScalingPolicyActionToTerraform(this._scalingPolicyAction.internalValue),
      scheduled_policy: asBandwidthPolicyScheduledPolicyToTerraform(this._scheduledPolicy.internalValue),
      timeouts: asBandwidthPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_id: {
        value: cdktf.stringToHclTerraform(this._alarmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cool_down_time: {
        value: cdktf.numberToHclTerraform(this._coolDownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy_name: {
        value: cdktf.stringToHclTerraform(this._scalingPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy_type: {
        value: cdktf.stringToHclTerraform(this._scalingPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_alarm_actions: {
        value: cdktf.listMapperHcl(asBandwidthPolicyIntervalAlarmActionsToHclTerraform, true)(this._intervalAlarmActions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AsBandwidthPolicyIntervalAlarmActionsList",
      },
      scaling_policy_action: {
        value: asBandwidthPolicyScalingPolicyActionToHclTerraform(this._scalingPolicyAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsBandwidthPolicyScalingPolicyActionList",
      },
      scheduled_policy: {
        value: asBandwidthPolicyScheduledPolicyToHclTerraform(this._scheduledPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsBandwidthPolicyScheduledPolicyList",
      },
      timeouts: {
        value: asBandwidthPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AsBandwidthPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
