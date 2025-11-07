// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyMapQosConfig extends cdktf.TerraformMetaArguments {
  /**
  * QoS policy-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#classes PolicyMapQos#classes}
  */
  readonly classes?: PolicyMapQosClasses[] | cdktf.IResolvable;
  /**
  * Set description for this policy-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#description PolicyMapQos#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#device PolicyMapQos#device}
  */
  readonly device?: string;
  /**
  * Name of the policymap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#policy_map_name PolicyMapQos#policy_map_name}
  */
  readonly policyMapName: string;
}
export interface PolicyMapQosClassesQueueLimits {
  /**
  * queue-limit unit
  *   - Choices: `bytes`, `kbytes`, `mbytes`, `ms`, `packets`, `percent`, `us`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#unit PolicyMapQos#unit}
  */
  readonly unit: string;
  /**
  * queue-limit value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#value PolicyMapQos#value}
  */
  readonly value: string;
}

export function policyMapQosClassesQueueLimitsToTerraform(struct?: PolicyMapQosClassesQueueLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyMapQosClassesQueueLimitsToHclTerraform(struct?: PolicyMapQosClassesQueueLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
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

export class PolicyMapQosClassesQueueLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMapQosClassesQueueLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyMapQosClassesQueueLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
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

export class PolicyMapQosClassesQueueLimitsList extends cdktf.ComplexList {
  public internalValue? : PolicyMapQosClassesQueueLimits[] | cdktf.IResolvable

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
  public get(index: number): PolicyMapQosClassesQueueLimitsOutputReference {
    return new PolicyMapQosClassesQueueLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyMapQosClasses {
  /**
  * Bandwidth value unit
  *   - Choices: `percent`, `ratio`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#bandwidth_remaining_unit PolicyMapQos#bandwidth_remaining_unit}
  */
  readonly bandwidthRemainingUnit?: string;
  /**
  * Bandwidth value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#bandwidth_remaining_value PolicyMapQos#bandwidth_remaining_value}
  */
  readonly bandwidthRemainingValue?: string;
  /**
  * Name of the class-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#name PolicyMapQos#name}
  */
  readonly name: string;
  /**
  * Drop packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_conform_action_drop PolicyMapQos#police_conform_action_drop}
  */
  readonly policeConformActionDrop?: boolean | cdktf.IResolvable;
  /**
  * Transmit packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_conform_action_transmit PolicyMapQos#police_conform_action_transmit}
  */
  readonly policeConformActionTransmit?: boolean | cdktf.IResolvable;
  /**
  * Drop packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_exceed_action_drop PolicyMapQos#police_exceed_action_drop}
  */
  readonly policeExceedActionDrop?: boolean | cdktf.IResolvable;
  /**
  * Transmit packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_exceed_action_transmit PolicyMapQos#police_exceed_action_transmit}
  */
  readonly policeExceedActionTransmit?: boolean | cdktf.IResolvable;
  /**
  * Rate unit
  *   - Choices: `bps`, `cellsps`, `gbps`, `kbps`, `mbps`, `per-million`, `per-thousand`, `percent`, `pps`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_rate_unit PolicyMapQos#police_rate_unit}
  */
  readonly policeRateUnit?: string;
  /**
  * Committed Information Rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_rate_value PolicyMapQos#police_rate_value}
  */
  readonly policeRateValue?: string;
  /**
  * Drop packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_violate_action_drop PolicyMapQos#police_violate_action_drop}
  */
  readonly policeViolateActionDrop?: boolean | cdktf.IResolvable;
  /**
  * Transmit packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#police_violate_action_transmit PolicyMapQos#police_violate_action_transmit}
  */
  readonly policeViolateActionTransmit?: boolean | cdktf.IResolvable;
  /**
  * Configure a priority level
  *   - Range: `1`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#priority_level PolicyMapQos#priority_level}
  */
  readonly priorityLevel?: number;
  /**
  * Configure queue-limit (taildrop threshold) for this class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#queue_limits PolicyMapQos#queue_limits}
  */
  readonly queueLimits?: PolicyMapQosClassesQueueLimits[] | cdktf.IResolvable;
  /**
  * Name of the child service policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#service_policy_name PolicyMapQos#service_policy_name}
  */
  readonly servicePolicyName?: string;
  /**
  * Set IP DSCP (DiffServ CodePoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#set_dscp PolicyMapQos#set_dscp}
  */
  readonly setDscp?: string;
  /**
  * Sets the experimental value of the MPLS packet top-most labels.
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#set_mpls_experimental_topmost PolicyMapQos#set_mpls_experimental_topmost}
  */
  readonly setMplsExperimentalTopmost?: number;
  /**
  * Shape rate unit
  *   - Choices: `bps`, `cellsps`, `gbps`, `kbps`, `mbps`, `per-million`, `per-thousand`, `percent`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#shape_average_rate_unit PolicyMapQos#shape_average_rate_unit}
  */
  readonly shapeAverageRateUnit?: string;
  /**
  * Value of Shape rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#shape_average_rate_value PolicyMapQos#shape_average_rate_value}
  */
  readonly shapeAverageRateValue?: string;
  /**
  * The type of class-map
  *   - Choices: `qos`, `traffic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#type PolicyMapQos#type}
  */
  readonly type: string;
}

export function policyMapQosClassesToTerraform(struct?: PolicyMapQosClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_remaining_unit: cdktf.stringToTerraform(struct!.bandwidthRemainingUnit),
    bandwidth_remaining_value: cdktf.stringToTerraform(struct!.bandwidthRemainingValue),
    name: cdktf.stringToTerraform(struct!.name),
    police_conform_action_drop: cdktf.booleanToTerraform(struct!.policeConformActionDrop),
    police_conform_action_transmit: cdktf.booleanToTerraform(struct!.policeConformActionTransmit),
    police_exceed_action_drop: cdktf.booleanToTerraform(struct!.policeExceedActionDrop),
    police_exceed_action_transmit: cdktf.booleanToTerraform(struct!.policeExceedActionTransmit),
    police_rate_unit: cdktf.stringToTerraform(struct!.policeRateUnit),
    police_rate_value: cdktf.stringToTerraform(struct!.policeRateValue),
    police_violate_action_drop: cdktf.booleanToTerraform(struct!.policeViolateActionDrop),
    police_violate_action_transmit: cdktf.booleanToTerraform(struct!.policeViolateActionTransmit),
    priority_level: cdktf.numberToTerraform(struct!.priorityLevel),
    queue_limits: cdktf.listMapper(policyMapQosClassesQueueLimitsToTerraform, false)(struct!.queueLimits),
    service_policy_name: cdktf.stringToTerraform(struct!.servicePolicyName),
    set_dscp: cdktf.stringToTerraform(struct!.setDscp),
    set_mpls_experimental_topmost: cdktf.numberToTerraform(struct!.setMplsExperimentalTopmost),
    shape_average_rate_unit: cdktf.stringToTerraform(struct!.shapeAverageRateUnit),
    shape_average_rate_value: cdktf.stringToTerraform(struct!.shapeAverageRateValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyMapQosClassesToHclTerraform(struct?: PolicyMapQosClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_remaining_unit: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthRemainingUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_remaining_value: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthRemainingValue),
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
    police_conform_action_drop: {
      value: cdktf.booleanToHclTerraform(struct!.policeConformActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    police_conform_action_transmit: {
      value: cdktf.booleanToHclTerraform(struct!.policeConformActionTransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    police_exceed_action_drop: {
      value: cdktf.booleanToHclTerraform(struct!.policeExceedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    police_exceed_action_transmit: {
      value: cdktf.booleanToHclTerraform(struct!.policeExceedActionTransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    police_rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.policeRateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    police_rate_value: {
      value: cdktf.stringToHclTerraform(struct!.policeRateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    police_violate_action_drop: {
      value: cdktf.booleanToHclTerraform(struct!.policeViolateActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    police_violate_action_transmit: {
      value: cdktf.booleanToHclTerraform(struct!.policeViolateActionTransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority_level: {
      value: cdktf.numberToHclTerraform(struct!.priorityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_limits: {
      value: cdktf.listMapperHcl(policyMapQosClassesQueueLimitsToHclTerraform, false)(struct!.queueLimits),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyMapQosClassesQueueLimitsList",
    },
    service_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.servicePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_dscp: {
      value: cdktf.stringToHclTerraform(struct!.setDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_mpls_experimental_topmost: {
      value: cdktf.numberToHclTerraform(struct!.setMplsExperimentalTopmost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_average_rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.shapeAverageRateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_average_rate_value: {
      value: cdktf.stringToHclTerraform(struct!.shapeAverageRateValue),
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

export class PolicyMapQosClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMapQosClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthRemainingUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthRemainingUnit = this._bandwidthRemainingUnit;
    }
    if (this._bandwidthRemainingValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthRemainingValue = this._bandwidthRemainingValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policeConformActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeConformActionDrop = this._policeConformActionDrop;
    }
    if (this._policeConformActionTransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeConformActionTransmit = this._policeConformActionTransmit;
    }
    if (this._policeExceedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeExceedActionDrop = this._policeExceedActionDrop;
    }
    if (this._policeExceedActionTransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeExceedActionTransmit = this._policeExceedActionTransmit;
    }
    if (this._policeRateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeRateUnit = this._policeRateUnit;
    }
    if (this._policeRateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeRateValue = this._policeRateValue;
    }
    if (this._policeViolateActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeViolateActionDrop = this._policeViolateActionDrop;
    }
    if (this._policeViolateActionTransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeViolateActionTransmit = this._policeViolateActionTransmit;
    }
    if (this._priorityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityLevel = this._priorityLevel;
    }
    if (this._queueLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLimits = this._queueLimits?.internalValue;
    }
    if (this._servicePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePolicyName = this._servicePolicyName;
    }
    if (this._setDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDscp = this._setDscp;
    }
    if (this._setMplsExperimentalTopmost !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMplsExperimentalTopmost = this._setMplsExperimentalTopmost;
    }
    if (this._shapeAverageRateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAverageRateUnit = this._shapeAverageRateUnit;
    }
    if (this._shapeAverageRateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAverageRateValue = this._shapeAverageRateValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyMapQosClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthRemainingUnit = undefined;
      this._bandwidthRemainingValue = undefined;
      this._name = undefined;
      this._policeConformActionDrop = undefined;
      this._policeConformActionTransmit = undefined;
      this._policeExceedActionDrop = undefined;
      this._policeExceedActionTransmit = undefined;
      this._policeRateUnit = undefined;
      this._policeRateValue = undefined;
      this._policeViolateActionDrop = undefined;
      this._policeViolateActionTransmit = undefined;
      this._priorityLevel = undefined;
      this._queueLimits.internalValue = undefined;
      this._servicePolicyName = undefined;
      this._setDscp = undefined;
      this._setMplsExperimentalTopmost = undefined;
      this._shapeAverageRateUnit = undefined;
      this._shapeAverageRateValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthRemainingUnit = value.bandwidthRemainingUnit;
      this._bandwidthRemainingValue = value.bandwidthRemainingValue;
      this._name = value.name;
      this._policeConformActionDrop = value.policeConformActionDrop;
      this._policeConformActionTransmit = value.policeConformActionTransmit;
      this._policeExceedActionDrop = value.policeExceedActionDrop;
      this._policeExceedActionTransmit = value.policeExceedActionTransmit;
      this._policeRateUnit = value.policeRateUnit;
      this._policeRateValue = value.policeRateValue;
      this._policeViolateActionDrop = value.policeViolateActionDrop;
      this._policeViolateActionTransmit = value.policeViolateActionTransmit;
      this._priorityLevel = value.priorityLevel;
      this._queueLimits.internalValue = value.queueLimits;
      this._servicePolicyName = value.servicePolicyName;
      this._setDscp = value.setDscp;
      this._setMplsExperimentalTopmost = value.setMplsExperimentalTopmost;
      this._shapeAverageRateUnit = value.shapeAverageRateUnit;
      this._shapeAverageRateValue = value.shapeAverageRateValue;
      this._type = value.type;
    }
  }

  // bandwidth_remaining_unit - computed: false, optional: true, required: false
  private _bandwidthRemainingUnit?: string; 
  public get bandwidthRemainingUnit() {
    return this.getStringAttribute('bandwidth_remaining_unit');
  }
  public set bandwidthRemainingUnit(value: string) {
    this._bandwidthRemainingUnit = value;
  }
  public resetBandwidthRemainingUnit() {
    this._bandwidthRemainingUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthRemainingUnitInput() {
    return this._bandwidthRemainingUnit;
  }

  // bandwidth_remaining_value - computed: false, optional: true, required: false
  private _bandwidthRemainingValue?: string; 
  public get bandwidthRemainingValue() {
    return this.getStringAttribute('bandwidth_remaining_value');
  }
  public set bandwidthRemainingValue(value: string) {
    this._bandwidthRemainingValue = value;
  }
  public resetBandwidthRemainingValue() {
    this._bandwidthRemainingValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthRemainingValueInput() {
    return this._bandwidthRemainingValue;
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

  // police_conform_action_drop - computed: false, optional: true, required: false
  private _policeConformActionDrop?: boolean | cdktf.IResolvable; 
  public get policeConformActionDrop() {
    return this.getBooleanAttribute('police_conform_action_drop');
  }
  public set policeConformActionDrop(value: boolean | cdktf.IResolvable) {
    this._policeConformActionDrop = value;
  }
  public resetPoliceConformActionDrop() {
    this._policeConformActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeConformActionDropInput() {
    return this._policeConformActionDrop;
  }

  // police_conform_action_transmit - computed: false, optional: true, required: false
  private _policeConformActionTransmit?: boolean | cdktf.IResolvable; 
  public get policeConformActionTransmit() {
    return this.getBooleanAttribute('police_conform_action_transmit');
  }
  public set policeConformActionTransmit(value: boolean | cdktf.IResolvable) {
    this._policeConformActionTransmit = value;
  }
  public resetPoliceConformActionTransmit() {
    this._policeConformActionTransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeConformActionTransmitInput() {
    return this._policeConformActionTransmit;
  }

  // police_exceed_action_drop - computed: false, optional: true, required: false
  private _policeExceedActionDrop?: boolean | cdktf.IResolvable; 
  public get policeExceedActionDrop() {
    return this.getBooleanAttribute('police_exceed_action_drop');
  }
  public set policeExceedActionDrop(value: boolean | cdktf.IResolvable) {
    this._policeExceedActionDrop = value;
  }
  public resetPoliceExceedActionDrop() {
    this._policeExceedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeExceedActionDropInput() {
    return this._policeExceedActionDrop;
  }

  // police_exceed_action_transmit - computed: false, optional: true, required: false
  private _policeExceedActionTransmit?: boolean | cdktf.IResolvable; 
  public get policeExceedActionTransmit() {
    return this.getBooleanAttribute('police_exceed_action_transmit');
  }
  public set policeExceedActionTransmit(value: boolean | cdktf.IResolvable) {
    this._policeExceedActionTransmit = value;
  }
  public resetPoliceExceedActionTransmit() {
    this._policeExceedActionTransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeExceedActionTransmitInput() {
    return this._policeExceedActionTransmit;
  }

  // police_rate_unit - computed: false, optional: true, required: false
  private _policeRateUnit?: string; 
  public get policeRateUnit() {
    return this.getStringAttribute('police_rate_unit');
  }
  public set policeRateUnit(value: string) {
    this._policeRateUnit = value;
  }
  public resetPoliceRateUnit() {
    this._policeRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeRateUnitInput() {
    return this._policeRateUnit;
  }

  // police_rate_value - computed: false, optional: true, required: false
  private _policeRateValue?: string; 
  public get policeRateValue() {
    return this.getStringAttribute('police_rate_value');
  }
  public set policeRateValue(value: string) {
    this._policeRateValue = value;
  }
  public resetPoliceRateValue() {
    this._policeRateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeRateValueInput() {
    return this._policeRateValue;
  }

  // police_violate_action_drop - computed: false, optional: true, required: false
  private _policeViolateActionDrop?: boolean | cdktf.IResolvable; 
  public get policeViolateActionDrop() {
    return this.getBooleanAttribute('police_violate_action_drop');
  }
  public set policeViolateActionDrop(value: boolean | cdktf.IResolvable) {
    this._policeViolateActionDrop = value;
  }
  public resetPoliceViolateActionDrop() {
    this._policeViolateActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeViolateActionDropInput() {
    return this._policeViolateActionDrop;
  }

  // police_violate_action_transmit - computed: false, optional: true, required: false
  private _policeViolateActionTransmit?: boolean | cdktf.IResolvable; 
  public get policeViolateActionTransmit() {
    return this.getBooleanAttribute('police_violate_action_transmit');
  }
  public set policeViolateActionTransmit(value: boolean | cdktf.IResolvable) {
    this._policeViolateActionTransmit = value;
  }
  public resetPoliceViolateActionTransmit() {
    this._policeViolateActionTransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeViolateActionTransmitInput() {
    return this._policeViolateActionTransmit;
  }

  // priority_level - computed: false, optional: true, required: false
  private _priorityLevel?: number; 
  public get priorityLevel() {
    return this.getNumberAttribute('priority_level');
  }
  public set priorityLevel(value: number) {
    this._priorityLevel = value;
  }
  public resetPriorityLevel() {
    this._priorityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLevelInput() {
    return this._priorityLevel;
  }

  // queue_limits - computed: false, optional: true, required: false
  private _queueLimits = new PolicyMapQosClassesQueueLimitsList(this, "queue_limits", false);
  public get queueLimits() {
    return this._queueLimits;
  }
  public putQueueLimits(value: PolicyMapQosClassesQueueLimits[] | cdktf.IResolvable) {
    this._queueLimits.internalValue = value;
  }
  public resetQueueLimits() {
    this._queueLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLimitsInput() {
    return this._queueLimits.internalValue;
  }

  // service_policy_name - computed: false, optional: true, required: false
  private _servicePolicyName?: string; 
  public get servicePolicyName() {
    return this.getStringAttribute('service_policy_name');
  }
  public set servicePolicyName(value: string) {
    this._servicePolicyName = value;
  }
  public resetServicePolicyName() {
    this._servicePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyNameInput() {
    return this._servicePolicyName;
  }

  // set_dscp - computed: false, optional: true, required: false
  private _setDscp?: string; 
  public get setDscp() {
    return this.getStringAttribute('set_dscp');
  }
  public set setDscp(value: string) {
    this._setDscp = value;
  }
  public resetSetDscp() {
    this._setDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDscpInput() {
    return this._setDscp;
  }

  // set_mpls_experimental_topmost - computed: false, optional: true, required: false
  private _setMplsExperimentalTopmost?: number; 
  public get setMplsExperimentalTopmost() {
    return this.getNumberAttribute('set_mpls_experimental_topmost');
  }
  public set setMplsExperimentalTopmost(value: number) {
    this._setMplsExperimentalTopmost = value;
  }
  public resetSetMplsExperimentalTopmost() {
    this._setMplsExperimentalTopmost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMplsExperimentalTopmostInput() {
    return this._setMplsExperimentalTopmost;
  }

  // shape_average_rate_unit - computed: false, optional: true, required: false
  private _shapeAverageRateUnit?: string; 
  public get shapeAverageRateUnit() {
    return this.getStringAttribute('shape_average_rate_unit');
  }
  public set shapeAverageRateUnit(value: string) {
    this._shapeAverageRateUnit = value;
  }
  public resetShapeAverageRateUnit() {
    this._shapeAverageRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAverageRateUnitInput() {
    return this._shapeAverageRateUnit;
  }

  // shape_average_rate_value - computed: false, optional: true, required: false
  private _shapeAverageRateValue?: string; 
  public get shapeAverageRateValue() {
    return this.getStringAttribute('shape_average_rate_value');
  }
  public set shapeAverageRateValue(value: string) {
    this._shapeAverageRateValue = value;
  }
  public resetShapeAverageRateValue() {
    this._shapeAverageRateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAverageRateValueInput() {
    return this._shapeAverageRateValue;
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

export class PolicyMapQosClassesList extends cdktf.ComplexList {
  public internalValue? : PolicyMapQosClasses[] | cdktf.IResolvable

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
  public get(index: number): PolicyMapQosClassesOutputReference {
    return new PolicyMapQosClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos iosxr_policy_map_qos}
*/
export class PolicyMapQos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_policy_map_qos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyMapQos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyMapQos to import
  * @param importFromId The id of the existing PolicyMapQos that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyMapQos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_policy_map_qos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/policy_map_qos iosxr_policy_map_qos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyMapQosConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyMapQosConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_policy_map_qos',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classes.internalValue = config.classes;
    this._description = config.description;
    this._device = config.device;
    this._policyMapName = config.policyMapName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classes - computed: false, optional: true, required: false
  private _classes = new PolicyMapQosClassesList(this, "classes", false);
  public get classes() {
    return this._classes;
  }
  public putClasses(value: PolicyMapQosClasses[] | cdktf.IResolvable) {
    this._classes.internalValue = value;
  }
  public resetClasses() {
    this._classes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes.internalValue;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_map_name - computed: false, optional: false, required: true
  private _policyMapName?: string; 
  public get policyMapName() {
    return this.getStringAttribute('policy_map_name');
  }
  public set policyMapName(value: string) {
    this._policyMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMapNameInput() {
    return this._policyMapName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      classes: cdktf.listMapper(policyMapQosClassesToTerraform, false)(this._classes.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      policy_map_name: cdktf.stringToTerraform(this._policyMapName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classes: {
        value: cdktf.listMapperHcl(policyMapQosClassesToHclTerraform, false)(this._classes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyMapQosClassesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_map_name: {
        value: cdktf.stringToHclTerraform(this._policyMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
