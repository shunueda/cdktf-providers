// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#datacenter_id AutoscalingGroup#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#id AutoscalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum value for the number of replicas on a VM Auto Scaling Group. Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#max_replica_count AutoscalingGroup#max_replica_count}
  */
  readonly maxReplicaCount: number;
  /**
  * The minimum value for the number of replicas on a VM Auto Scaling Group. Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#min_replica_count AutoscalingGroup#min_replica_count}
  */
  readonly minReplicaCount: number;
  /**
  * User-defined name for the Autoscaling Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#name AutoscalingGroup#name}
  */
  readonly name: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#policy AutoscalingGroup#policy}
  */
  readonly policy: AutoscalingGroupPolicy;
  /**
  * replica_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#replica_configuration AutoscalingGroup#replica_configuration}
  */
  readonly replicaConfiguration: AutoscalingGroupReplicaConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}
  */
  readonly timeouts?: AutoscalingGroupTimeouts;
}
export interface AutoscalingGroupPolicyScaleInAction {
  /**
  * When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed. The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always removed. Note that for 'SCALE_IN' operations, volumes are not deleted after the server is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}
  */
  readonly amount: number;
  /**
  * The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}
  */
  readonly amountType: string;
  /**
  * The minimum time that elapses after the start of this scaling action until the following scaling action is started. While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}
  */
  readonly cooldownPeriod?: string;
  /**
  * If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted. When set to 'false', all volumes remain in the datacenter and must be deleted manually. Note that every scale-out creates new volumes. When they are not deleted, they will eventually use all of your contracts resource limits. At this point, scaling out would not be possible anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#delete_volumes AutoscalingGroup#delete_volumes}
  */
  readonly deleteVolumes: boolean | cdktf.IResolvable;
  /**
  * The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas. The default termination policy is 'OLDEST_SERVER_FIRST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#termination_policy_type AutoscalingGroup#termination_policy_type}
  */
  readonly terminationPolicyType?: string;
}

export function autoscalingGroupPolicyScaleInActionToTerraform(struct?: AutoscalingGroupPolicyScaleInActionOutputReference | AutoscalingGroupPolicyScaleInAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    amount_type: cdktf.stringToTerraform(struct!.amountType),
    cooldown_period: cdktf.stringToTerraform(struct!.cooldownPeriod),
    delete_volumes: cdktf.booleanToTerraform(struct!.deleteVolumes),
    termination_policy_type: cdktf.stringToTerraform(struct!.terminationPolicyType),
  }
}


export function autoscalingGroupPolicyScaleInActionToHclTerraform(struct?: AutoscalingGroupPolicyScaleInActionOutputReference | AutoscalingGroupPolicyScaleInAction): any {
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
    amount_type: {
      value: cdktf.stringToHclTerraform(struct!.amountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown_period: {
      value: cdktf.stringToHclTerraform(struct!.cooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.deleteVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    termination_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.terminationPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingGroupPolicyScaleInActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingGroupPolicyScaleInAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._amountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.amountType = this._amountType;
    }
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    if (this._deleteVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteVolumes = this._deleteVolumes;
    }
    if (this._terminationPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationPolicyType = this._terminationPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupPolicyScaleInAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amount = undefined;
      this._amountType = undefined;
      this._cooldownPeriod = undefined;
      this._deleteVolumes = undefined;
      this._terminationPolicyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amount = value.amount;
      this._amountType = value.amountType;
      this._cooldownPeriod = value.cooldownPeriod;
      this._deleteVolumes = value.deleteVolumes;
      this._terminationPolicyType = value.terminationPolicyType;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // amount_type - computed: false, optional: false, required: true
  private _amountType?: string; 
  public get amountType() {
    return this.getStringAttribute('amount_type');
  }
  public set amountType(value: string) {
    this._amountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountTypeInput() {
    return this._amountType;
  }

  // cooldown_period - computed: true, optional: true, required: false
  private _cooldownPeriod?: string; 
  public get cooldownPeriod() {
    return this.getStringAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: string) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }

  // delete_volumes - computed: false, optional: false, required: true
  private _deleteVolumes?: boolean | cdktf.IResolvable; 
  public get deleteVolumes() {
    return this.getBooleanAttribute('delete_volumes');
  }
  public set deleteVolumes(value: boolean | cdktf.IResolvable) {
    this._deleteVolumes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVolumesInput() {
    return this._deleteVolumes;
  }

  // termination_policy_type - computed: true, optional: true, required: false
  private _terminationPolicyType?: string; 
  public get terminationPolicyType() {
    return this.getStringAttribute('termination_policy_type');
  }
  public set terminationPolicyType(value: string) {
    this._terminationPolicyType = value;
  }
  public resetTerminationPolicyType() {
    this._terminationPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPolicyTypeInput() {
    return this._terminationPolicyType;
  }
}
export interface AutoscalingGroupPolicyScaleOutAction {
  /**
  * When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added. The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always added or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}
  */
  readonly amount: number;
  /**
  * The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}
  */
  readonly amountType: string;
  /**
  * The minimum time that elapses after the start of this scaling action until the following scaling action is started. While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}
  */
  readonly cooldownPeriod?: string;
}

export function autoscalingGroupPolicyScaleOutActionToTerraform(struct?: AutoscalingGroupPolicyScaleOutActionOutputReference | AutoscalingGroupPolicyScaleOutAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    amount_type: cdktf.stringToTerraform(struct!.amountType),
    cooldown_period: cdktf.stringToTerraform(struct!.cooldownPeriod),
  }
}


export function autoscalingGroupPolicyScaleOutActionToHclTerraform(struct?: AutoscalingGroupPolicyScaleOutActionOutputReference | AutoscalingGroupPolicyScaleOutAction): any {
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
    amount_type: {
      value: cdktf.stringToHclTerraform(struct!.amountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown_period: {
      value: cdktf.stringToHclTerraform(struct!.cooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingGroupPolicyScaleOutActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingGroupPolicyScaleOutAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._amountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.amountType = this._amountType;
    }
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupPolicyScaleOutAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amount = undefined;
      this._amountType = undefined;
      this._cooldownPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amount = value.amount;
      this._amountType = value.amountType;
      this._cooldownPeriod = value.cooldownPeriod;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // amount_type - computed: false, optional: false, required: true
  private _amountType?: string; 
  public get amountType() {
    return this.getStringAttribute('amount_type');
  }
  public set amountType(value: string) {
    this._amountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountTypeInput() {
    return this._amountType;
  }

  // cooldown_period - computed: true, optional: true, required: false
  private _cooldownPeriod?: string; 
  public get cooldownPeriod() {
    return this.getStringAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: string) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }
}
export interface AutoscalingGroupPolicy {
  /**
  * The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#metric AutoscalingGroup#metric}
  */
  readonly metric: string;
  /**
  * Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#range AutoscalingGroup#range}
  */
  readonly range?: string;
  /**
  * The upper threshold for the value of the 'metric'. Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scale_out_action' property. The value must have a lower minimum delta to the 'scale_in_threshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#scale_in_threshold AutoscalingGroup#scale_in_threshold}
  */
  readonly scaleInThreshold: number;
  /**
  * The upper threshold for the value of the 'metric'. Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scaleOutAction' property. The value must have a lower minimum delta to the 'scaleInThreshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#scale_out_threshold AutoscalingGroup#scale_out_threshold}
  */
  readonly scaleOutThreshold: number;
  /**
  * Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#unit AutoscalingGroup#unit}
  */
  readonly unit: string;
  /**
  * scale_in_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#scale_in_action AutoscalingGroup#scale_in_action}
  */
  readonly scaleInAction: AutoscalingGroupPolicyScaleInAction;
  /**
  * scale_out_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#scale_out_action AutoscalingGroup#scale_out_action}
  */
  readonly scaleOutAction: AutoscalingGroupPolicyScaleOutAction;
}

export function autoscalingGroupPolicyToTerraform(struct?: AutoscalingGroupPolicyOutputReference | AutoscalingGroupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    range: cdktf.stringToTerraform(struct!.range),
    scale_in_threshold: cdktf.numberToTerraform(struct!.scaleInThreshold),
    scale_out_threshold: cdktf.numberToTerraform(struct!.scaleOutThreshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    scale_in_action: autoscalingGroupPolicyScaleInActionToTerraform(struct!.scaleInAction),
    scale_out_action: autoscalingGroupPolicyScaleOutActionToTerraform(struct!.scaleOutAction),
  }
}


export function autoscalingGroupPolicyToHclTerraform(struct?: AutoscalingGroupPolicyOutputReference | AutoscalingGroupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_in_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scaleInThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scaleOutThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_in_action: {
      value: autoscalingGroupPolicyScaleInActionToHclTerraform(struct!.scaleInAction),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingGroupPolicyScaleInActionList",
    },
    scale_out_action: {
      value: autoscalingGroupPolicyScaleOutActionToHclTerraform(struct!.scaleOutAction),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingGroupPolicyScaleOutActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingGroupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingGroupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._scaleInThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInThreshold = this._scaleInThreshold;
    }
    if (this._scaleOutThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutThreshold = this._scaleOutThreshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._scaleInAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInAction = this._scaleInAction?.internalValue;
    }
    if (this._scaleOutAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutAction = this._scaleOutAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric = undefined;
      this._range = undefined;
      this._scaleInThreshold = undefined;
      this._scaleOutThreshold = undefined;
      this._unit = undefined;
      this._scaleInAction.internalValue = undefined;
      this._scaleOutAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric = value.metric;
      this._range = value.range;
      this._scaleInThreshold = value.scaleInThreshold;
      this._scaleOutThreshold = value.scaleOutThreshold;
      this._unit = value.unit;
      this._scaleInAction.internalValue = value.scaleInAction;
      this._scaleOutAction.internalValue = value.scaleOutAction;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // scale_in_threshold - computed: false, optional: false, required: true
  private _scaleInThreshold?: number; 
  public get scaleInThreshold() {
    return this.getNumberAttribute('scale_in_threshold');
  }
  public set scaleInThreshold(value: number) {
    this._scaleInThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInThresholdInput() {
    return this._scaleInThreshold;
  }

  // scale_out_threshold - computed: false, optional: false, required: true
  private _scaleOutThreshold?: number; 
  public get scaleOutThreshold() {
    return this.getNumberAttribute('scale_out_threshold');
  }
  public set scaleOutThreshold(value: number) {
    this._scaleOutThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutThresholdInput() {
    return this._scaleOutThreshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // scale_in_action - computed: false, optional: false, required: true
  private _scaleInAction = new AutoscalingGroupPolicyScaleInActionOutputReference(this, "scale_in_action");
  public get scaleInAction() {
    return this._scaleInAction;
  }
  public putScaleInAction(value: AutoscalingGroupPolicyScaleInAction) {
    this._scaleInAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInActionInput() {
    return this._scaleInAction.internalValue;
  }

  // scale_out_action - computed: false, optional: false, required: true
  private _scaleOutAction = new AutoscalingGroupPolicyScaleOutActionOutputReference(this, "scale_out_action");
  public get scaleOutAction() {
    return this._scaleOutAction;
  }
  public putScaleOutAction(value: AutoscalingGroupPolicyScaleOutAction) {
    this._scaleOutAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutActionInput() {
    return this._scaleOutAction.internalValue;
  }
}
export interface AutoscalingGroupReplicaConfigurationNicFirewallRule {
  /**
  * Sets the allowed code (from 0 to 254) when ICMP protocol is selected. The value 'null' allows all codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#icmp_code AutoscalingGroup#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Sets the allowed type (from 0 to 254) if the protocol ICMP is selected. The value 'null' allows all types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#icmp_type AutoscalingGroup#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * The name of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#name AutoscalingGroup#name}
  */
  readonly name?: string;
  /**
  * Sets the end range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. The value 'null' for 'port_range_start' and 'port_range_end' allows all ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#port_range_end AutoscalingGroup#port_range_end}
  */
  readonly portRangeEnd?: number;
  /**
  * Sets the initial range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. The value 'null' for 'port_range_start' and 'port_range_end' allows all ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#port_range_start AutoscalingGroup#port_range_start}
  */
  readonly portRangeStart?: number;
  /**
  * The protocol for the rule. The property cannot be modified after its creation (not allowed in update requests).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#protocol AutoscalingGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Only traffic originating from the respective IPv4 address is permitted. The value 'null' allows traffic from any IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#source_ip AutoscalingGroup#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Only traffic originating from the respective MAC address is permitted. Valid format: 'aa:bb:cc:dd:ee:ff'. The value 'null' allows traffic from any MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#source_mac AutoscalingGroup#source_mac}
  */
  readonly sourceMac?: string;
  /**
  * If the target NIC has multiple IP addresses, only the traffic directed to the respective IP address of the NIC is allowed. The value 'null' allows traffic to any target IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#target_ip AutoscalingGroup#target_ip}
  */
  readonly targetIp?: string;
  /**
  * The firewall rule type. If not specified, the default value 'INGRESS' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#type AutoscalingGroup#type}
  */
  readonly type?: string;
}

export function autoscalingGroupReplicaConfigurationNicFirewallRuleToTerraform(struct?: AutoscalingGroupReplicaConfigurationNicFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    name: cdktf.stringToTerraform(struct!.name),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_mac: cdktf.stringToTerraform(struct!.sourceMac),
    target_ip: cdktf.stringToTerraform(struct!.targetIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function autoscalingGroupReplicaConfigurationNicFirewallRuleToHclTerraform(struct?: AutoscalingGroupReplicaConfigurationNicFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_mac: {
      value: cdktf.stringToHclTerraform(struct!.sourceMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ip: {
      value: cdktf.stringToHclTerraform(struct!.targetIp),
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

export class AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingGroupReplicaConfigurationNicFirewallRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMac = this._sourceMac;
    }
    if (this._targetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIp = this._targetIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupReplicaConfigurationNicFirewallRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._name = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._sourceIp = undefined;
      this._sourceMac = undefined;
      this._targetIp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._name = value.name;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._sourceIp = value.sourceIp;
      this._sourceMac = value.sourceMac;
      this._targetIp = value.targetIp;
      this._type = value.type;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
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

  // port_range_end - computed: false, optional: true, required: false
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  public resetPortRangeEnd() {
    this._portRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: true, required: false
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  public resetPortRangeStart() {
    this._portRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_mac - computed: false, optional: true, required: false
  private _sourceMac?: string; 
  public get sourceMac() {
    return this.getStringAttribute('source_mac');
  }
  public set sourceMac(value: string) {
    this._sourceMac = value;
  }
  public resetSourceMac() {
    this._sourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMacInput() {
    return this._sourceMac;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: string; 
  public get targetIp() {
    return this.getStringAttribute('target_ip');
  }
  public set targetIp(value: string) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp;
  }

  // type - computed: true, optional: true, required: false
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
}

export class AutoscalingGroupReplicaConfigurationNicFirewallRuleList extends cdktf.ComplexList {
  public internalValue? : AutoscalingGroupReplicaConfigurationNicFirewallRule[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference {
    return new AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingGroupReplicaConfigurationNicFlowLog {
  /**
  * Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#action AutoscalingGroup#action}
  */
  readonly action: string;
  /**
  * The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#bucket AutoscalingGroup#bucket}
  */
  readonly bucket: string;
  /**
  * Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#direction AutoscalingGroup#direction}
  */
  readonly direction: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#name AutoscalingGroup#name}
  */
  readonly name: string;
}

export function autoscalingGroupReplicaConfigurationNicFlowLogToTerraform(struct?: AutoscalingGroupReplicaConfigurationNicFlowLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function autoscalingGroupReplicaConfigurationNicFlowLogToHclTerraform(struct?: AutoscalingGroupReplicaConfigurationNicFlowLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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

export class AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingGroupReplicaConfigurationNicFlowLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupReplicaConfigurationNicFlowLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._bucket = undefined;
      this._direction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._bucket = value.bucket;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

export class AutoscalingGroupReplicaConfigurationNicFlowLogList extends cdktf.ComplexList {
  public internalValue? : AutoscalingGroupReplicaConfigurationNicFlowLog[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference {
    return new AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingGroupReplicaConfigurationNicTargetGroup {
  /**
  * The port for the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#port AutoscalingGroup#port}
  */
  readonly port: number;
  /**
  * The ID of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#target_group_id AutoscalingGroup#target_group_id}
  */
  readonly targetGroupId: string;
  /**
  * The weight for the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#weight AutoscalingGroup#weight}
  */
  readonly weight: number;
}

export function autoscalingGroupReplicaConfigurationNicTargetGroupToTerraform(struct?: AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference | AutoscalingGroupReplicaConfigurationNicTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    target_group_id: cdktf.stringToTerraform(struct!.targetGroupId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function autoscalingGroupReplicaConfigurationNicTargetGroupToHclTerraform(struct?: AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference | AutoscalingGroupReplicaConfigurationNicTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group_id: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingGroupReplicaConfigurationNicTargetGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._targetGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupId = this._targetGroupId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupReplicaConfigurationNicTargetGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._targetGroupId = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._targetGroupId = value.targetGroupId;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_group_id - computed: false, optional: false, required: true
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface AutoscalingGroupReplicaConfigurationNic {
  /**
  * Dhcp flag for this replica Nic. This is an optional attribute with default value of 'true' if not given in the request payload or given as null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#dhcp AutoscalingGroup#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Activate or deactivate the firewall. By default, an active firewall without any defined rules will block all incoming network traffic except for the firewall rules that explicitly allows certain protocols, IP addresses and ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#firewall_active AutoscalingGroup#firewall_active}
  */
  readonly firewallActive?: boolean | cdktf.IResolvable;
  /**
  * The type of firewall rules that will be allowed on the NIC. If not specified, the default INGRESS value is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#firewall_type AutoscalingGroup#firewall_type}
  */
  readonly firewallType?: string;
  /**
  * Lan ID for this replica Nic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#lan AutoscalingGroup#lan}
  */
  readonly lan: number;
  /**
  * Name for this replica NIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#name AutoscalingGroup#name}
  */
  readonly name: string;
  /**
  * firewall_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#firewall_rule AutoscalingGroup#firewall_rule}
  */
  readonly firewallRule?: AutoscalingGroupReplicaConfigurationNicFirewallRule[] | cdktf.IResolvable;
  /**
  * flow_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#flow_log AutoscalingGroup#flow_log}
  */
  readonly flowLog?: AutoscalingGroupReplicaConfigurationNicFlowLog[] | cdktf.IResolvable;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#target_group AutoscalingGroup#target_group}
  */
  readonly targetGroup?: AutoscalingGroupReplicaConfigurationNicTargetGroup;
}

export function autoscalingGroupReplicaConfigurationNicToTerraform(struct?: AutoscalingGroupReplicaConfigurationNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    firewall_active: cdktf.booleanToTerraform(struct!.firewallActive),
    firewall_type: cdktf.stringToTerraform(struct!.firewallType),
    lan: cdktf.numberToTerraform(struct!.lan),
    name: cdktf.stringToTerraform(struct!.name),
    firewall_rule: cdktf.listMapper(autoscalingGroupReplicaConfigurationNicFirewallRuleToTerraform, true)(struct!.firewallRule),
    flow_log: cdktf.listMapper(autoscalingGroupReplicaConfigurationNicFlowLogToTerraform, true)(struct!.flowLog),
    target_group: autoscalingGroupReplicaConfigurationNicTargetGroupToTerraform(struct!.targetGroup),
  }
}


export function autoscalingGroupReplicaConfigurationNicToHclTerraform(struct?: AutoscalingGroupReplicaConfigurationNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall_active: {
      value: cdktf.booleanToHclTerraform(struct!.firewallActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall_type: {
      value: cdktf.stringToHclTerraform(struct!.firewallType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan: {
      value: cdktf.numberToHclTerraform(struct!.lan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_rule: {
      value: cdktf.listMapperHcl(autoscalingGroupReplicaConfigurationNicFirewallRuleToHclTerraform, true)(struct!.firewallRule),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingGroupReplicaConfigurationNicFirewallRuleList",
    },
    flow_log: {
      value: cdktf.listMapperHcl(autoscalingGroupReplicaConfigurationNicFlowLogToHclTerraform, true)(struct!.flowLog),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingGroupReplicaConfigurationNicFlowLogList",
    },
    target_group: {
      value: autoscalingGroupReplicaConfigurationNicTargetGroupToHclTerraform(struct!.targetGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingGroupReplicaConfigurationNicTargetGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingGroupReplicaConfigurationNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingGroupReplicaConfigurationNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._firewallActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallActive = this._firewallActive;
    }
    if (this._firewallType !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallType = this._firewallType;
    }
    if (this._lan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lan = this._lan;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._firewallRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallRule = this._firewallRule?.internalValue;
    }
    if (this._flowLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLog = this._flowLog?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupReplicaConfigurationNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._firewallActive = undefined;
      this._firewallType = undefined;
      this._lan = undefined;
      this._name = undefined;
      this._firewallRule.internalValue = undefined;
      this._flowLog.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._firewallActive = value.firewallActive;
      this._firewallType = value.firewallType;
      this._lan = value.lan;
      this._name = value.name;
      this._firewallRule.internalValue = value.firewallRule;
      this._flowLog.internalValue = value.flowLog;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // firewall_active - computed: false, optional: true, required: false
  private _firewallActive?: boolean | cdktf.IResolvable; 
  public get firewallActive() {
    return this.getBooleanAttribute('firewall_active');
  }
  public set firewallActive(value: boolean | cdktf.IResolvable) {
    this._firewallActive = value;
  }
  public resetFirewallActive() {
    this._firewallActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallActiveInput() {
    return this._firewallActive;
  }

  // firewall_type - computed: false, optional: true, required: false
  private _firewallType?: string; 
  public get firewallType() {
    return this.getStringAttribute('firewall_type');
  }
  public set firewallType(value: string) {
    this._firewallType = value;
  }
  public resetFirewallType() {
    this._firewallType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypeInput() {
    return this._firewallType;
  }

  // lan - computed: false, optional: false, required: true
  private _lan?: number; 
  public get lan() {
    return this.getNumberAttribute('lan');
  }
  public set lan(value: number) {
    this._lan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInput() {
    return this._lan;
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

  // firewall_rule - computed: false, optional: true, required: false
  private _firewallRule = new AutoscalingGroupReplicaConfigurationNicFirewallRuleList(this, "firewall_rule", false);
  public get firewallRule() {
    return this._firewallRule;
  }
  public putFirewallRule(value: AutoscalingGroupReplicaConfigurationNicFirewallRule[] | cdktf.IResolvable) {
    this._firewallRule.internalValue = value;
  }
  public resetFirewallRule() {
    this._firewallRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleInput() {
    return this._firewallRule.internalValue;
  }

  // flow_log - computed: false, optional: true, required: false
  private _flowLog = new AutoscalingGroupReplicaConfigurationNicFlowLogList(this, "flow_log", false);
  public get flowLog() {
    return this._flowLog;
  }
  public putFlowLog(value: AutoscalingGroupReplicaConfigurationNicFlowLog[] | cdktf.IResolvable) {
    this._flowLog.internalValue = value;
  }
  public resetFlowLog() {
    this._flowLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogInput() {
    return this._flowLog.internalValue;
  }

  // target_group - computed: false, optional: true, required: false
  private _targetGroup = new AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference(this, "target_group");
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: AutoscalingGroupReplicaConfigurationNicTargetGroup) {
    this._targetGroup.internalValue = value;
  }
  public resetTargetGroup() {
    this._targetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}

export class AutoscalingGroupReplicaConfigurationNicList extends cdktf.ComplexList {
  public internalValue? : AutoscalingGroupReplicaConfigurationNic[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingGroupReplicaConfigurationNicOutputReference {
    return new AutoscalingGroupReplicaConfigurationNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingGroupReplicaConfigurationVolume {
  /**
  * The uuid of the Backup Unit that user has access to. The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#backup_unit_id AutoscalingGroup#backup_unit_id}
  */
  readonly backupUnitId?: string;
  /**
  * Determines whether the volume will be used as a boot volume. Set to NONE, the volume will not be used as boot volume. 
  * Set to PRIMARY, the volume will be used as boot volume and set to AUTO will delegate the decision to the provisioning engine to decide whether to use the volume as boot volume.
  * Notice that exactly one volume can be set to PRIMARY or all of them set to AUTO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#boot_order AutoscalingGroup#boot_order}
  */
  readonly bootOrder: string;
  /**
  * The bus type of the volume. Default setting is 'VIRTIO'. The bus type 'IDE' is also supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#bus AutoscalingGroup#bus}
  */
  readonly bus?: string;
  /**
  * The image installed on the disk. Currently, only the UUID of the image is supported. Note that either 'image' or 'imageAlias' must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#image AutoscalingGroup#image}
  */
  readonly image?: string;
  /**
  * The image installed on the volume. Must be an 'imageAlias' as specified via the images API. Note that one of 'image' or 'imageAlias' must be set, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#image_alias AutoscalingGroup#image_alias}
  */
  readonly imageAlias?: string;
  /**
  * Image password for this replica volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#image_password AutoscalingGroup#image_password}
  */
  readonly imagePassword?: string;
  /**
  * Name for this replica volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#name AutoscalingGroup#name}
  */
  readonly name: string;
  /**
  * User-defined size for this replica volume in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#size AutoscalingGroup#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#ssh_keys AutoscalingGroup#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Storage Type for this replica volume. Possible values: SSD, HDD, SSD_STANDARD or SSD_PREMIUM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#type AutoscalingGroup#type}
  */
  readonly type: string;
  /**
  * User-data (Cloud Init) for this replica volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#user_data AutoscalingGroup#user_data}
  */
  readonly userData?: string;
}

export function autoscalingGroupReplicaConfigurationVolumeToTerraform(struct?: AutoscalingGroupReplicaConfigurationVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_unit_id: cdktf.stringToTerraform(struct!.backupUnitId),
    boot_order: cdktf.stringToTerraform(struct!.bootOrder),
    bus: cdktf.stringToTerraform(struct!.bus),
    image: cdktf.stringToTerraform(struct!.image),
    image_alias: cdktf.stringToTerraform(struct!.imageAlias),
    image_password: cdktf.stringToTerraform(struct!.imagePassword),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    type: cdktf.stringToTerraform(struct!.type),
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function autoscalingGroupReplicaConfigurationVolumeToHclTerraform(struct?: AutoscalingGroupReplicaConfigurationVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_unit_id: {
      value: cdktf.stringToHclTerraform(struct!.backupUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_order: {
      value: cdktf.stringToHclTerraform(struct!.bootOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bus: {
      value: cdktf.stringToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_alias: {
      value: cdktf.stringToHclTerraform(struct!.imageAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_password: {
      value: cdktf.stringToHclTerraform(struct!.imagePassword),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingGroupReplicaConfigurationVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingGroupReplicaConfigurationVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupUnitId = this._backupUnitId;
    }
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageAlias = this._imageAlias;
    }
    if (this._imagePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePassword = this._imagePassword;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupReplicaConfigurationVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupUnitId = undefined;
      this._bootOrder = undefined;
      this._bus = undefined;
      this._image = undefined;
      this._imageAlias = undefined;
      this._imagePassword = undefined;
      this._name = undefined;
      this._size = undefined;
      this._sshKeys = undefined;
      this._type = undefined;
      this._userData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupUnitId = value.backupUnitId;
      this._bootOrder = value.bootOrder;
      this._bus = value.bus;
      this._image = value.image;
      this._imageAlias = value.imageAlias;
      this._imagePassword = value.imagePassword;
      this._name = value.name;
      this._size = value.size;
      this._sshKeys = value.sshKeys;
      this._type = value.type;
      this._userData = value.userData;
    }
  }

  // backup_unit_id - computed: true, optional: true, required: false
  private _backupUnitId?: string; 
  public get backupUnitId() {
    return this.getStringAttribute('backup_unit_id');
  }
  public set backupUnitId(value: string) {
    this._backupUnitId = value;
  }
  public resetBackupUnitId() {
    this._backupUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupUnitIdInput() {
    return this._backupUnitId;
  }

  // boot_order - computed: false, optional: false, required: true
  private _bootOrder?: string; 
  public get bootOrder() {
    return this.getStringAttribute('boot_order');
  }
  public set bootOrder(value: string) {
    this._bootOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // bus - computed: false, optional: true, required: false
  private _bus?: string; 
  public get bus() {
    return this.getStringAttribute('bus');
  }
  public set bus(value: string) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_alias - computed: false, optional: true, required: false
  private _imageAlias?: string; 
  public get imageAlias() {
    return this.getStringAttribute('image_alias');
  }
  public set imageAlias(value: string) {
    this._imageAlias = value;
  }
  public resetImageAlias() {
    this._imageAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAliasInput() {
    return this._imageAlias;
  }

  // image_password - computed: false, optional: true, required: false
  private _imagePassword?: string; 
  public get imagePassword() {
    return this.getStringAttribute('image_password');
  }
  public set imagePassword(value: string) {
    this._imagePassword = value;
  }
  public resetImagePassword() {
    this._imagePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePasswordInput() {
    return this._imagePassword;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // user_data - computed: true, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }
}

export class AutoscalingGroupReplicaConfigurationVolumeList extends cdktf.ComplexList {
  public internalValue? : AutoscalingGroupReplicaConfigurationVolume[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingGroupReplicaConfigurationVolumeOutputReference {
    return new AutoscalingGroupReplicaConfigurationVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingGroupReplicaConfiguration {
  /**
  * The zone where the VMs are created using this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#availability_zone AutoscalingGroup#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * The total number of cores for the VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#cores AutoscalingGroup#cores}
  */
  readonly cores: number;
  /**
  * The zone where the VMs are created using this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#cpu_family AutoscalingGroup#cpu_family}
  */
  readonly cpuFamily?: string;
  /**
  * The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#ram AutoscalingGroup#ram}
  */
  readonly ram: number;
  /**
  * nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#nic AutoscalingGroup#nic}
  */
  readonly nic?: AutoscalingGroupReplicaConfigurationNic[] | cdktf.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#volume AutoscalingGroup#volume}
  */
  readonly volume?: AutoscalingGroupReplicaConfigurationVolume[] | cdktf.IResolvable;
}

export function autoscalingGroupReplicaConfigurationToTerraform(struct?: AutoscalingGroupReplicaConfigurationOutputReference | AutoscalingGroupReplicaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    cores: cdktf.numberToTerraform(struct!.cores),
    cpu_family: cdktf.stringToTerraform(struct!.cpuFamily),
    ram: cdktf.numberToTerraform(struct!.ram),
    nic: cdktf.listMapper(autoscalingGroupReplicaConfigurationNicToTerraform, true)(struct!.nic),
    volume: cdktf.listMapper(autoscalingGroupReplicaConfigurationVolumeToTerraform, true)(struct!.volume),
  }
}


export function autoscalingGroupReplicaConfigurationToHclTerraform(struct?: AutoscalingGroupReplicaConfigurationOutputReference | AutoscalingGroupReplicaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_family: {
      value: cdktf.stringToHclTerraform(struct!.cpuFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nic: {
      value: cdktf.listMapperHcl(autoscalingGroupReplicaConfigurationNicToHclTerraform, true)(struct!.nic),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingGroupReplicaConfigurationNicList",
    },
    volume: {
      value: cdktf.listMapperHcl(autoscalingGroupReplicaConfigurationVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingGroupReplicaConfigurationVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingGroupReplicaConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingGroupReplicaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._cpuFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuFamily = this._cpuFamily;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    if (this._nic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nic = this._nic?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingGroupReplicaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._cores = undefined;
      this._cpuFamily = undefined;
      this._ram = undefined;
      this._nic.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._cores = value.cores;
      this._cpuFamily = value.cpuFamily;
      this._ram = value.ram;
      this._nic.internalValue = value.nic;
      this._volume.internalValue = value.volume;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // cpu_family - computed: false, optional: true, required: false
  private _cpuFamily?: string; 
  public get cpuFamily() {
    return this.getStringAttribute('cpu_family');
  }
  public set cpuFamily(value: string) {
    this._cpuFamily = value;
  }
  public resetCpuFamily() {
    this._cpuFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFamilyInput() {
    return this._cpuFamily;
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // nic - computed: false, optional: true, required: false
  private _nic = new AutoscalingGroupReplicaConfigurationNicList(this, "nic", false);
  public get nic() {
    return this._nic;
  }
  public putNic(value: AutoscalingGroupReplicaConfigurationNic[] | cdktf.IResolvable) {
    this._nic.internalValue = value;
  }
  public resetNic() {
    this._nic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicInput() {
    return this._nic.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new AutoscalingGroupReplicaConfigurationVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: AutoscalingGroupReplicaConfigurationVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}
export interface AutoscalingGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#create AutoscalingGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#default AutoscalingGroup#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#update AutoscalingGroup#update}
  */
  readonly update?: string;
}

export function autoscalingGroupTimeoutsToTerraform(struct?: AutoscalingGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function autoscalingGroupTimeoutsToHclTerraform(struct?: AutoscalingGroupTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class AutoscalingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: AutoscalingGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group ionoscloud_autoscaling_group}
*/
export class AutoscalingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_autoscaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingGroup to import
  * @param importFromId The id of the existing AutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_autoscaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/autoscaling_group ionoscloud_autoscaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_autoscaling_group',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._maxReplicaCount = config.maxReplicaCount;
    this._minReplicaCount = config.minReplicaCount;
    this._name = config.name;
    this._policy.internalValue = config.policy;
    this._replicaConfiguration.internalValue = config.replicaConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // max_replica_count - computed: false, optional: false, required: true
  private _maxReplicaCount?: number; 
  public get maxReplicaCount() {
    return this.getNumberAttribute('max_replica_count');
  }
  public set maxReplicaCount(value: number) {
    this._maxReplicaCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaCountInput() {
    return this._maxReplicaCount;
  }

  // min_replica_count - computed: false, optional: false, required: true
  private _minReplicaCount?: number; 
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
  public set minReplicaCount(value: number) {
    this._minReplicaCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaCountInput() {
    return this._minReplicaCount;
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

  // policy - computed: false, optional: false, required: true
  private _policy = new AutoscalingGroupPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: AutoscalingGroupPolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // replica_configuration - computed: false, optional: false, required: true
  private _replicaConfiguration = new AutoscalingGroupReplicaConfigurationOutputReference(this, "replica_configuration");
  public get replicaConfiguration() {
    return this._replicaConfiguration;
  }
  public putReplicaConfiguration(value: AutoscalingGroupReplicaConfiguration) {
    this._replicaConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaConfigurationInput() {
    return this._replicaConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutoscalingGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutoscalingGroupTimeouts) {
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
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      max_replica_count: cdktf.numberToTerraform(this._maxReplicaCount),
      min_replica_count: cdktf.numberToTerraform(this._minReplicaCount),
      name: cdktf.stringToTerraform(this._name),
      policy: autoscalingGroupPolicyToTerraform(this._policy.internalValue),
      replica_configuration: autoscalingGroupReplicaConfigurationToTerraform(this._replicaConfiguration.internalValue),
      timeouts: autoscalingGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
      max_replica_count: {
        value: cdktf.numberToHclTerraform(this._maxReplicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_replica_count: {
        value: cdktf.numberToHclTerraform(this._minReplicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: autoscalingGroupPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoscalingGroupPolicyList",
      },
      replica_configuration: {
        value: autoscalingGroupReplicaConfigurationToHclTerraform(this._replicaConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoscalingGroupReplicaConfigurationList",
      },
      timeouts: {
        value: autoscalingGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoscalingGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
