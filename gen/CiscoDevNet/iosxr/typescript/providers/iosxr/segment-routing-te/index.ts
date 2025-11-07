// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentRoutingTeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#delete_mode SegmentRoutingTe#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#device SegmentRoutingTe#device}
  */
  readonly device?: string;
  /**
  * Enable logging for pcep peer status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#logging_pcep_peer_status SegmentRoutingTe#logging_pcep_peer_status}
  */
  readonly loggingPcepPeerStatus?: boolean | cdktf.IResolvable;
  /**
  * Enable logging for policy status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#logging_policy_status SegmentRoutingTe#logging_policy_status}
  */
  readonly loggingPolicyStatus?: boolean | cdktf.IResolvable;
  /**
  * On-demand color configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#on_demand_colors SegmentRoutingTe#on_demand_colors}
  */
  readonly onDemandColors?: SegmentRoutingTeOnDemandColors[] | cdktf.IResolvable;
  /**
  * Amount of time after which the peer can declare this session down, if no PCEP message has been received
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pcc_dead_timer SegmentRoutingTe#pcc_dead_timer}
  */
  readonly pccDeadTimer?: number;
  /**
  * Maximum time delegated SR-TE policies can remain up without an active connection to a PCE
  *   - Range: `0`-`1576800000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pcc_delegation_timeout SegmentRoutingTe#pcc_delegation_timeout}
  */
  readonly pccDelegationTimeout?: number;
  /**
  * Amount of time that PCE initiated policy remains delegated to a peer that has gone down
  *   - Range: `0`-`180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pcc_initiated_orphan SegmentRoutingTe#pcc_initiated_orphan}
  */
  readonly pccInitiatedOrphan?: number;
  /**
  * Amount of time that PCE initiated policy can exist as an orphan before it is cleaned up
  *   - Range: `0`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pcc_initiated_state SegmentRoutingTe#pcc_initiated_state}
  */
  readonly pccInitiatedState?: number;
  /**
  * Report all local SR policies to connected PCEP peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pcc_report_all SegmentRoutingTe#pcc_report_all}
  */
  readonly pccReportAll?: boolean | cdktf.IResolvable;
  /**
  * Local source IP address to use on PCEP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pcc_source_address SegmentRoutingTe#pcc_source_address}
  */
  readonly pccSourceAddress?: string;
  /**
  * PCE peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pce_peers SegmentRoutingTe#pce_peers}
  */
  readonly pcePeers?: SegmentRoutingTePcePeers[] | cdktf.IResolvable;
  /**
  * Policy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#policies SegmentRoutingTe#policies}
  */
  readonly policies?: SegmentRoutingTePolicies[] | cdktf.IResolvable;
}
export interface SegmentRoutingTeOnDemandColors {
  /**
  * Color
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#color SegmentRoutingTe#color}
  */
  readonly color: number;
  /**
  * Protection Type
  *   - Choices: `protected-only`, `protected-preferred`, `unprotected-only`, `unprotected-preferred`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#constraint_segments_protection_type SegmentRoutingTe#constraint_segments_protection_type}
  */
  readonly constraintSegmentsProtectionType?: string;
  /**
  * '0' for regular SIDs, '1' for strict-spf SIDs, '128' - '255' for flexible algorithm SIDs
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#constraint_segments_sid_algorithm SegmentRoutingTe#constraint_segments_sid_algorithm}
  */
  readonly constraintSegmentsSidAlgorithm?: number;
  /**
  * Anycast Prefix SID Inclusion. Applicable for SR-MPLS and SRv6 policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#dynamic_anycast_sid_inclusion SegmentRoutingTe#dynamic_anycast_sid_inclusion}
  */
  readonly dynamicAnycastSidInclusion?: boolean | cdktf.IResolvable;
  /**
  * Metric Type
  *   - Choices: `hopcount`, `igp`, `latency`, `te`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#dynamic_metric_type SegmentRoutingTe#dynamic_metric_type}
  */
  readonly dynamicMetricType?: string;
  /**
  * True only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#effective_metric_enable SegmentRoutingTe#effective_metric_enable}
  */
  readonly effectiveMetricEnable?: boolean | cdktf.IResolvable;
  /**
  * Metric type, advertised to other protocols
  *   - Choices: `default`, `hopcount`, `igp`, `latency`, `te`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#effective_metric_type SegmentRoutingTe#effective_metric_type}
  */
  readonly effectiveMetricType?: string;
  /**
  * Integer value of metric
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#effective_metric_value SegmentRoutingTe#effective_metric_value}
  */
  readonly effectiveMetricValue?: number;
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#source_address SegmentRoutingTe#source_address}
  */
  readonly sourceAddress: string;
  /**
  * IP address type
  *   - Choices: `end-point-type-ipv4`, `end-point-type-ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#source_address_type SegmentRoutingTe#source_address_type}
  */
  readonly sourceAddressType: string;
  /**
  * True only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_enable SegmentRoutingTe#srv6_enable}
  */
  readonly srv6Enable?: boolean | cdktf.IResolvable;
  /**
  * SRv6 USID Behavior
  *   - Choices: `ub6-encaps-reduced`, `ub6-insert-reduced`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_locator_behavior SegmentRoutingTe#srv6_locator_behavior}
  */
  readonly srv6LocatorBehavior?: string;
  /**
  * Binding Segment ID type
  *   - Choices: `srv6-dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_locator_binding_sid_type SegmentRoutingTe#srv6_locator_binding_sid_type}
  */
  readonly srv6LocatorBindingSidType?: string;
  /**
  * SRv6 locator name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_locator_name SegmentRoutingTe#srv6_locator_name}
  */
  readonly srv6LocatorName?: string;
}

export function segmentRoutingTeOnDemandColorsToTerraform(struct?: SegmentRoutingTeOnDemandColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.numberToTerraform(struct!.color),
    constraint_segments_protection_type: cdktf.stringToTerraform(struct!.constraintSegmentsProtectionType),
    constraint_segments_sid_algorithm: cdktf.numberToTerraform(struct!.constraintSegmentsSidAlgorithm),
    dynamic_anycast_sid_inclusion: cdktf.booleanToTerraform(struct!.dynamicAnycastSidInclusion),
    dynamic_metric_type: cdktf.stringToTerraform(struct!.dynamicMetricType),
    effective_metric_enable: cdktf.booleanToTerraform(struct!.effectiveMetricEnable),
    effective_metric_type: cdktf.stringToTerraform(struct!.effectiveMetricType),
    effective_metric_value: cdktf.numberToTerraform(struct!.effectiveMetricValue),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    source_address_type: cdktf.stringToTerraform(struct!.sourceAddressType),
    srv6_enable: cdktf.booleanToTerraform(struct!.srv6Enable),
    srv6_locator_behavior: cdktf.stringToTerraform(struct!.srv6LocatorBehavior),
    srv6_locator_binding_sid_type: cdktf.stringToTerraform(struct!.srv6LocatorBindingSidType),
    srv6_locator_name: cdktf.stringToTerraform(struct!.srv6LocatorName),
  }
}


export function segmentRoutingTeOnDemandColorsToHclTerraform(struct?: SegmentRoutingTeOnDemandColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.numberToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    constraint_segments_protection_type: {
      value: cdktf.stringToHclTerraform(struct!.constraintSegmentsProtectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraint_segments_sid_algorithm: {
      value: cdktf.numberToHclTerraform(struct!.constraintSegmentsSidAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_anycast_sid_inclusion: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicAnycastSidInclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.dynamicMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_metric_enable: {
      value: cdktf.booleanToHclTerraform(struct!.effectiveMetricEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effective_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.effectiveMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_metric_value: {
      value: cdktf.numberToHclTerraform(struct!.effectiveMetricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srv6_enable: {
      value: cdktf.booleanToHclTerraform(struct!.srv6Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    srv6_locator_behavior: {
      value: cdktf.stringToHclTerraform(struct!.srv6LocatorBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srv6_locator_binding_sid_type: {
      value: cdktf.stringToHclTerraform(struct!.srv6LocatorBindingSidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srv6_locator_name: {
      value: cdktf.stringToHclTerraform(struct!.srv6LocatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRoutingTeOnDemandColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRoutingTeOnDemandColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._constraintSegmentsProtectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintSegmentsProtectionType = this._constraintSegmentsProtectionType;
    }
    if (this._constraintSegmentsSidAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintSegmentsSidAlgorithm = this._constraintSegmentsSidAlgorithm;
    }
    if (this._dynamicAnycastSidInclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicAnycastSidInclusion = this._dynamicAnycastSidInclusion;
    }
    if (this._dynamicMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMetricType = this._dynamicMetricType;
    }
    if (this._effectiveMetricEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveMetricEnable = this._effectiveMetricEnable;
    }
    if (this._effectiveMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveMetricType = this._effectiveMetricType;
    }
    if (this._effectiveMetricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveMetricValue = this._effectiveMetricValue;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressType = this._sourceAddressType;
    }
    if (this._srv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6Enable = this._srv6Enable;
    }
    if (this._srv6LocatorBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6LocatorBehavior = this._srv6LocatorBehavior;
    }
    if (this._srv6LocatorBindingSidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6LocatorBindingSidType = this._srv6LocatorBindingSidType;
    }
    if (this._srv6LocatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6LocatorName = this._srv6LocatorName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRoutingTeOnDemandColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._constraintSegmentsProtectionType = undefined;
      this._constraintSegmentsSidAlgorithm = undefined;
      this._dynamicAnycastSidInclusion = undefined;
      this._dynamicMetricType = undefined;
      this._effectiveMetricEnable = undefined;
      this._effectiveMetricType = undefined;
      this._effectiveMetricValue = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressType = undefined;
      this._srv6Enable = undefined;
      this._srv6LocatorBehavior = undefined;
      this._srv6LocatorBindingSidType = undefined;
      this._srv6LocatorName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._constraintSegmentsProtectionType = value.constraintSegmentsProtectionType;
      this._constraintSegmentsSidAlgorithm = value.constraintSegmentsSidAlgorithm;
      this._dynamicAnycastSidInclusion = value.dynamicAnycastSidInclusion;
      this._dynamicMetricType = value.dynamicMetricType;
      this._effectiveMetricEnable = value.effectiveMetricEnable;
      this._effectiveMetricType = value.effectiveMetricType;
      this._effectiveMetricValue = value.effectiveMetricValue;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressType = value.sourceAddressType;
      this._srv6Enable = value.srv6Enable;
      this._srv6LocatorBehavior = value.srv6LocatorBehavior;
      this._srv6LocatorBindingSidType = value.srv6LocatorBindingSidType;
      this._srv6LocatorName = value.srv6LocatorName;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // constraint_segments_protection_type - computed: false, optional: true, required: false
  private _constraintSegmentsProtectionType?: string; 
  public get constraintSegmentsProtectionType() {
    return this.getStringAttribute('constraint_segments_protection_type');
  }
  public set constraintSegmentsProtectionType(value: string) {
    this._constraintSegmentsProtectionType = value;
  }
  public resetConstraintSegmentsProtectionType() {
    this._constraintSegmentsProtectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintSegmentsProtectionTypeInput() {
    return this._constraintSegmentsProtectionType;
  }

  // constraint_segments_sid_algorithm - computed: false, optional: true, required: false
  private _constraintSegmentsSidAlgorithm?: number; 
  public get constraintSegmentsSidAlgorithm() {
    return this.getNumberAttribute('constraint_segments_sid_algorithm');
  }
  public set constraintSegmentsSidAlgorithm(value: number) {
    this._constraintSegmentsSidAlgorithm = value;
  }
  public resetConstraintSegmentsSidAlgorithm() {
    this._constraintSegmentsSidAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintSegmentsSidAlgorithmInput() {
    return this._constraintSegmentsSidAlgorithm;
  }

  // dynamic_anycast_sid_inclusion - computed: false, optional: true, required: false
  private _dynamicAnycastSidInclusion?: boolean | cdktf.IResolvable; 
  public get dynamicAnycastSidInclusion() {
    return this.getBooleanAttribute('dynamic_anycast_sid_inclusion');
  }
  public set dynamicAnycastSidInclusion(value: boolean | cdktf.IResolvable) {
    this._dynamicAnycastSidInclusion = value;
  }
  public resetDynamicAnycastSidInclusion() {
    this._dynamicAnycastSidInclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAnycastSidInclusionInput() {
    return this._dynamicAnycastSidInclusion;
  }

  // dynamic_metric_type - computed: false, optional: true, required: false
  private _dynamicMetricType?: string; 
  public get dynamicMetricType() {
    return this.getStringAttribute('dynamic_metric_type');
  }
  public set dynamicMetricType(value: string) {
    this._dynamicMetricType = value;
  }
  public resetDynamicMetricType() {
    this._dynamicMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMetricTypeInput() {
    return this._dynamicMetricType;
  }

  // effective_metric_enable - computed: false, optional: true, required: false
  private _effectiveMetricEnable?: boolean | cdktf.IResolvable; 
  public get effectiveMetricEnable() {
    return this.getBooleanAttribute('effective_metric_enable');
  }
  public set effectiveMetricEnable(value: boolean | cdktf.IResolvable) {
    this._effectiveMetricEnable = value;
  }
  public resetEffectiveMetricEnable() {
    this._effectiveMetricEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveMetricEnableInput() {
    return this._effectiveMetricEnable;
  }

  // effective_metric_type - computed: false, optional: true, required: false
  private _effectiveMetricType?: string; 
  public get effectiveMetricType() {
    return this.getStringAttribute('effective_metric_type');
  }
  public set effectiveMetricType(value: string) {
    this._effectiveMetricType = value;
  }
  public resetEffectiveMetricType() {
    this._effectiveMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveMetricTypeInput() {
    return this._effectiveMetricType;
  }

  // effective_metric_value - computed: false, optional: true, required: false
  private _effectiveMetricValue?: number; 
  public get effectiveMetricValue() {
    return this.getNumberAttribute('effective_metric_value');
  }
  public set effectiveMetricValue(value: number) {
    this._effectiveMetricValue = value;
  }
  public resetEffectiveMetricValue() {
    this._effectiveMetricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveMetricValueInput() {
    return this._effectiveMetricValue;
  }

  // source_address - computed: false, optional: false, required: true
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_type - computed: false, optional: false, required: true
  private _sourceAddressType?: string; 
  public get sourceAddressType() {
    return this.getStringAttribute('source_address_type');
  }
  public set sourceAddressType(value: string) {
    this._sourceAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressTypeInput() {
    return this._sourceAddressType;
  }

  // srv6_enable - computed: false, optional: true, required: false
  private _srv6Enable?: boolean | cdktf.IResolvable; 
  public get srv6Enable() {
    return this.getBooleanAttribute('srv6_enable');
  }
  public set srv6Enable(value: boolean | cdktf.IResolvable) {
    this._srv6Enable = value;
  }
  public resetSrv6Enable() {
    this._srv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6EnableInput() {
    return this._srv6Enable;
  }

  // srv6_locator_behavior - computed: false, optional: true, required: false
  private _srv6LocatorBehavior?: string; 
  public get srv6LocatorBehavior() {
    return this.getStringAttribute('srv6_locator_behavior');
  }
  public set srv6LocatorBehavior(value: string) {
    this._srv6LocatorBehavior = value;
  }
  public resetSrv6LocatorBehavior() {
    this._srv6LocatorBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6LocatorBehaviorInput() {
    return this._srv6LocatorBehavior;
  }

  // srv6_locator_binding_sid_type - computed: false, optional: true, required: false
  private _srv6LocatorBindingSidType?: string; 
  public get srv6LocatorBindingSidType() {
    return this.getStringAttribute('srv6_locator_binding_sid_type');
  }
  public set srv6LocatorBindingSidType(value: string) {
    this._srv6LocatorBindingSidType = value;
  }
  public resetSrv6LocatorBindingSidType() {
    this._srv6LocatorBindingSidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6LocatorBindingSidTypeInput() {
    return this._srv6LocatorBindingSidType;
  }

  // srv6_locator_name - computed: false, optional: true, required: false
  private _srv6LocatorName?: string; 
  public get srv6LocatorName() {
    return this.getStringAttribute('srv6_locator_name');
  }
  public set srv6LocatorName(value: string) {
    this._srv6LocatorName = value;
  }
  public resetSrv6LocatorName() {
    this._srv6LocatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6LocatorNameInput() {
    return this._srv6LocatorName;
  }
}

export class SegmentRoutingTeOnDemandColorsList extends cdktf.ComplexList {
  public internalValue? : SegmentRoutingTeOnDemandColors[] | cdktf.IResolvable

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
  public get(index: number): SegmentRoutingTeOnDemandColorsOutputReference {
    return new SegmentRoutingTeOnDemandColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRoutingTePcePeers {
  /**
  * Remote PCE address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#pce_address SegmentRoutingTe#pce_address}
  */
  readonly pceAddress: string;
  /**
  * Precedence value of this PCE
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#precedence SegmentRoutingTe#precedence}
  */
  readonly precedence?: number;
}

export function segmentRoutingTePcePeersToTerraform(struct?: SegmentRoutingTePcePeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pce_address: cdktf.stringToTerraform(struct!.pceAddress),
    precedence: cdktf.numberToTerraform(struct!.precedence),
  }
}


export function segmentRoutingTePcePeersToHclTerraform(struct?: SegmentRoutingTePcePeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pce_address: {
      value: cdktf.stringToHclTerraform(struct!.pceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precedence: {
      value: cdktf.numberToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRoutingTePcePeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRoutingTePcePeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.pceAddress = this._pceAddress;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRoutingTePcePeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pceAddress = undefined;
      this._precedence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pceAddress = value.pceAddress;
      this._precedence = value.precedence;
    }
  }

  // pce_address - computed: false, optional: false, required: true
  private _pceAddress?: string; 
  public get pceAddress() {
    return this.getStringAttribute('pce_address');
  }
  public set pceAddress(value: string) {
    this._pceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pceAddressInput() {
    return this._pceAddress;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }
}

export class SegmentRoutingTePcePeersList extends cdktf.ComplexList {
  public internalValue? : SegmentRoutingTePcePeers[] | cdktf.IResolvable

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
  public get(index: number): SegmentRoutingTePcePeersOutputReference {
    return new SegmentRoutingTePcePeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRoutingTePolicies {
  /**
  * End point address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#policy_color_endpoint_address SegmentRoutingTe#policy_color_endpoint_address}
  */
  readonly policyColorEndpointAddress: string;
  /**
  * Color
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#policy_color_endpoint_color SegmentRoutingTe#policy_color_endpoint_color}
  */
  readonly policyColorEndpointColor: number;
  /**
  * End point type
  *   - Choices: `end-point-type-ipv4`, `end-point-type-ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#policy_color_endpoint_type SegmentRoutingTe#policy_color_endpoint_type}
  */
  readonly policyColorEndpointType: string;
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#policy_name SegmentRoutingTe#policy_name}
  */
  readonly policyName: string;
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#source_address SegmentRoutingTe#source_address}
  */
  readonly sourceAddress: string;
  /**
  * IP address type
  *   - Choices: `end-point-type-ipv4`, `end-point-type-ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#source_address_type SegmentRoutingTe#source_address_type}
  */
  readonly sourceAddressType: string;
  /**
  * True only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_enable SegmentRoutingTe#srv6_enable}
  */
  readonly srv6Enable?: boolean | cdktf.IResolvable;
  /**
  * SRv6 USID Behavior
  *   - Choices: `ub6-encaps-reduced`, `ub6-insert-reduced`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_locator_behavior SegmentRoutingTe#srv6_locator_behavior}
  */
  readonly srv6LocatorBehavior?: string;
  /**
  * Binding Segment ID type
  *   - Choices: `srv6-dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_locator_binding_sid_type SegmentRoutingTe#srv6_locator_binding_sid_type}
  */
  readonly srv6LocatorBindingSidType?: string;
  /**
  * SRv6 locator name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#srv6_locator_name SegmentRoutingTe#srv6_locator_name}
  */
  readonly srv6LocatorName?: string;
}

export function segmentRoutingTePoliciesToTerraform(struct?: SegmentRoutingTePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_color_endpoint_address: cdktf.stringToTerraform(struct!.policyColorEndpointAddress),
    policy_color_endpoint_color: cdktf.numberToTerraform(struct!.policyColorEndpointColor),
    policy_color_endpoint_type: cdktf.stringToTerraform(struct!.policyColorEndpointType),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    source_address_type: cdktf.stringToTerraform(struct!.sourceAddressType),
    srv6_enable: cdktf.booleanToTerraform(struct!.srv6Enable),
    srv6_locator_behavior: cdktf.stringToTerraform(struct!.srv6LocatorBehavior),
    srv6_locator_binding_sid_type: cdktf.stringToTerraform(struct!.srv6LocatorBindingSidType),
    srv6_locator_name: cdktf.stringToTerraform(struct!.srv6LocatorName),
  }
}


export function segmentRoutingTePoliciesToHclTerraform(struct?: SegmentRoutingTePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_color_endpoint_address: {
      value: cdktf.stringToHclTerraform(struct!.policyColorEndpointAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_color_endpoint_color: {
      value: cdktf.numberToHclTerraform(struct!.policyColorEndpointColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_color_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.policyColorEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srv6_enable: {
      value: cdktf.booleanToHclTerraform(struct!.srv6Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    srv6_locator_behavior: {
      value: cdktf.stringToHclTerraform(struct!.srv6LocatorBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srv6_locator_binding_sid_type: {
      value: cdktf.stringToHclTerraform(struct!.srv6LocatorBindingSidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srv6_locator_name: {
      value: cdktf.stringToHclTerraform(struct!.srv6LocatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRoutingTePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRoutingTePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyColorEndpointAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyColorEndpointAddress = this._policyColorEndpointAddress;
    }
    if (this._policyColorEndpointColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyColorEndpointColor = this._policyColorEndpointColor;
    }
    if (this._policyColorEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyColorEndpointType = this._policyColorEndpointType;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressType = this._sourceAddressType;
    }
    if (this._srv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6Enable = this._srv6Enable;
    }
    if (this._srv6LocatorBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6LocatorBehavior = this._srv6LocatorBehavior;
    }
    if (this._srv6LocatorBindingSidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6LocatorBindingSidType = this._srv6LocatorBindingSidType;
    }
    if (this._srv6LocatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6LocatorName = this._srv6LocatorName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRoutingTePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyColorEndpointAddress = undefined;
      this._policyColorEndpointColor = undefined;
      this._policyColorEndpointType = undefined;
      this._policyName = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressType = undefined;
      this._srv6Enable = undefined;
      this._srv6LocatorBehavior = undefined;
      this._srv6LocatorBindingSidType = undefined;
      this._srv6LocatorName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyColorEndpointAddress = value.policyColorEndpointAddress;
      this._policyColorEndpointColor = value.policyColorEndpointColor;
      this._policyColorEndpointType = value.policyColorEndpointType;
      this._policyName = value.policyName;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressType = value.sourceAddressType;
      this._srv6Enable = value.srv6Enable;
      this._srv6LocatorBehavior = value.srv6LocatorBehavior;
      this._srv6LocatorBindingSidType = value.srv6LocatorBindingSidType;
      this._srv6LocatorName = value.srv6LocatorName;
    }
  }

  // policy_color_endpoint_address - computed: false, optional: false, required: true
  private _policyColorEndpointAddress?: string; 
  public get policyColorEndpointAddress() {
    return this.getStringAttribute('policy_color_endpoint_address');
  }
  public set policyColorEndpointAddress(value: string) {
    this._policyColorEndpointAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyColorEndpointAddressInput() {
    return this._policyColorEndpointAddress;
  }

  // policy_color_endpoint_color - computed: false, optional: false, required: true
  private _policyColorEndpointColor?: number; 
  public get policyColorEndpointColor() {
    return this.getNumberAttribute('policy_color_endpoint_color');
  }
  public set policyColorEndpointColor(value: number) {
    this._policyColorEndpointColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyColorEndpointColorInput() {
    return this._policyColorEndpointColor;
  }

  // policy_color_endpoint_type - computed: false, optional: false, required: true
  private _policyColorEndpointType?: string; 
  public get policyColorEndpointType() {
    return this.getStringAttribute('policy_color_endpoint_type');
  }
  public set policyColorEndpointType(value: string) {
    this._policyColorEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyColorEndpointTypeInput() {
    return this._policyColorEndpointType;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // source_address - computed: false, optional: false, required: true
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_type - computed: false, optional: false, required: true
  private _sourceAddressType?: string; 
  public get sourceAddressType() {
    return this.getStringAttribute('source_address_type');
  }
  public set sourceAddressType(value: string) {
    this._sourceAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressTypeInput() {
    return this._sourceAddressType;
  }

  // srv6_enable - computed: false, optional: true, required: false
  private _srv6Enable?: boolean | cdktf.IResolvable; 
  public get srv6Enable() {
    return this.getBooleanAttribute('srv6_enable');
  }
  public set srv6Enable(value: boolean | cdktf.IResolvable) {
    this._srv6Enable = value;
  }
  public resetSrv6Enable() {
    this._srv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6EnableInput() {
    return this._srv6Enable;
  }

  // srv6_locator_behavior - computed: false, optional: true, required: false
  private _srv6LocatorBehavior?: string; 
  public get srv6LocatorBehavior() {
    return this.getStringAttribute('srv6_locator_behavior');
  }
  public set srv6LocatorBehavior(value: string) {
    this._srv6LocatorBehavior = value;
  }
  public resetSrv6LocatorBehavior() {
    this._srv6LocatorBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6LocatorBehaviorInput() {
    return this._srv6LocatorBehavior;
  }

  // srv6_locator_binding_sid_type - computed: false, optional: true, required: false
  private _srv6LocatorBindingSidType?: string; 
  public get srv6LocatorBindingSidType() {
    return this.getStringAttribute('srv6_locator_binding_sid_type');
  }
  public set srv6LocatorBindingSidType(value: string) {
    this._srv6LocatorBindingSidType = value;
  }
  public resetSrv6LocatorBindingSidType() {
    this._srv6LocatorBindingSidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6LocatorBindingSidTypeInput() {
    return this._srv6LocatorBindingSidType;
  }

  // srv6_locator_name - computed: false, optional: true, required: false
  private _srv6LocatorName?: string; 
  public get srv6LocatorName() {
    return this.getStringAttribute('srv6_locator_name');
  }
  public set srv6LocatorName(value: string) {
    this._srv6LocatorName = value;
  }
  public resetSrv6LocatorName() {
    this._srv6LocatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6LocatorNameInput() {
    return this._srv6LocatorName;
  }
}

export class SegmentRoutingTePoliciesList extends cdktf.ComplexList {
  public internalValue? : SegmentRoutingTePolicies[] | cdktf.IResolvable

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
  public get(index: number): SegmentRoutingTePoliciesOutputReference {
    return new SegmentRoutingTePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te iosxr_segment_routing_te}
*/
export class SegmentRoutingTe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_segment_routing_te";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SegmentRoutingTe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SegmentRoutingTe to import
  * @param importFromId The id of the existing SegmentRoutingTe that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SegmentRoutingTe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_segment_routing_te", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te iosxr_segment_routing_te} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentRoutingTeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SegmentRoutingTeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_segment_routing_te',
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
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._loggingPcepPeerStatus = config.loggingPcepPeerStatus;
    this._loggingPolicyStatus = config.loggingPolicyStatus;
    this._onDemandColors.internalValue = config.onDemandColors;
    this._pccDeadTimer = config.pccDeadTimer;
    this._pccDelegationTimeout = config.pccDelegationTimeout;
    this._pccInitiatedOrphan = config.pccInitiatedOrphan;
    this._pccInitiatedState = config.pccInitiatedState;
    this._pccReportAll = config.pccReportAll;
    this._pccSourceAddress = config.pccSourceAddress;
    this._pcePeers.internalValue = config.pcePeers;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // logging_pcep_peer_status - computed: false, optional: true, required: false
  private _loggingPcepPeerStatus?: boolean | cdktf.IResolvable; 
  public get loggingPcepPeerStatus() {
    return this.getBooleanAttribute('logging_pcep_peer_status');
  }
  public set loggingPcepPeerStatus(value: boolean | cdktf.IResolvable) {
    this._loggingPcepPeerStatus = value;
  }
  public resetLoggingPcepPeerStatus() {
    this._loggingPcepPeerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingPcepPeerStatusInput() {
    return this._loggingPcepPeerStatus;
  }

  // logging_policy_status - computed: false, optional: true, required: false
  private _loggingPolicyStatus?: boolean | cdktf.IResolvable; 
  public get loggingPolicyStatus() {
    return this.getBooleanAttribute('logging_policy_status');
  }
  public set loggingPolicyStatus(value: boolean | cdktf.IResolvable) {
    this._loggingPolicyStatus = value;
  }
  public resetLoggingPolicyStatus() {
    this._loggingPolicyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingPolicyStatusInput() {
    return this._loggingPolicyStatus;
  }

  // on_demand_colors - computed: false, optional: true, required: false
  private _onDemandColors = new SegmentRoutingTeOnDemandColorsList(this, "on_demand_colors", false);
  public get onDemandColors() {
    return this._onDemandColors;
  }
  public putOnDemandColors(value: SegmentRoutingTeOnDemandColors[] | cdktf.IResolvable) {
    this._onDemandColors.internalValue = value;
  }
  public resetOnDemandColors() {
    this._onDemandColors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandColorsInput() {
    return this._onDemandColors.internalValue;
  }

  // pcc_dead_timer - computed: false, optional: true, required: false
  private _pccDeadTimer?: number; 
  public get pccDeadTimer() {
    return this.getNumberAttribute('pcc_dead_timer');
  }
  public set pccDeadTimer(value: number) {
    this._pccDeadTimer = value;
  }
  public resetPccDeadTimer() {
    this._pccDeadTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pccDeadTimerInput() {
    return this._pccDeadTimer;
  }

  // pcc_delegation_timeout - computed: false, optional: true, required: false
  private _pccDelegationTimeout?: number; 
  public get pccDelegationTimeout() {
    return this.getNumberAttribute('pcc_delegation_timeout');
  }
  public set pccDelegationTimeout(value: number) {
    this._pccDelegationTimeout = value;
  }
  public resetPccDelegationTimeout() {
    this._pccDelegationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pccDelegationTimeoutInput() {
    return this._pccDelegationTimeout;
  }

  // pcc_initiated_orphan - computed: false, optional: true, required: false
  private _pccInitiatedOrphan?: number; 
  public get pccInitiatedOrphan() {
    return this.getNumberAttribute('pcc_initiated_orphan');
  }
  public set pccInitiatedOrphan(value: number) {
    this._pccInitiatedOrphan = value;
  }
  public resetPccInitiatedOrphan() {
    this._pccInitiatedOrphan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pccInitiatedOrphanInput() {
    return this._pccInitiatedOrphan;
  }

  // pcc_initiated_state - computed: false, optional: true, required: false
  private _pccInitiatedState?: number; 
  public get pccInitiatedState() {
    return this.getNumberAttribute('pcc_initiated_state');
  }
  public set pccInitiatedState(value: number) {
    this._pccInitiatedState = value;
  }
  public resetPccInitiatedState() {
    this._pccInitiatedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pccInitiatedStateInput() {
    return this._pccInitiatedState;
  }

  // pcc_report_all - computed: false, optional: true, required: false
  private _pccReportAll?: boolean | cdktf.IResolvable; 
  public get pccReportAll() {
    return this.getBooleanAttribute('pcc_report_all');
  }
  public set pccReportAll(value: boolean | cdktf.IResolvable) {
    this._pccReportAll = value;
  }
  public resetPccReportAll() {
    this._pccReportAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pccReportAllInput() {
    return this._pccReportAll;
  }

  // pcc_source_address - computed: false, optional: true, required: false
  private _pccSourceAddress?: string; 
  public get pccSourceAddress() {
    return this.getStringAttribute('pcc_source_address');
  }
  public set pccSourceAddress(value: string) {
    this._pccSourceAddress = value;
  }
  public resetPccSourceAddress() {
    this._pccSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pccSourceAddressInput() {
    return this._pccSourceAddress;
  }

  // pce_peers - computed: false, optional: true, required: false
  private _pcePeers = new SegmentRoutingTePcePeersList(this, "pce_peers", false);
  public get pcePeers() {
    return this._pcePeers;
  }
  public putPcePeers(value: SegmentRoutingTePcePeers[] | cdktf.IResolvable) {
    this._pcePeers.internalValue = value;
  }
  public resetPcePeers() {
    this._pcePeers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcePeersInput() {
    return this._pcePeers.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new SegmentRoutingTePoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: SegmentRoutingTePolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      logging_pcep_peer_status: cdktf.booleanToTerraform(this._loggingPcepPeerStatus),
      logging_policy_status: cdktf.booleanToTerraform(this._loggingPolicyStatus),
      on_demand_colors: cdktf.listMapper(segmentRoutingTeOnDemandColorsToTerraform, false)(this._onDemandColors.internalValue),
      pcc_dead_timer: cdktf.numberToTerraform(this._pccDeadTimer),
      pcc_delegation_timeout: cdktf.numberToTerraform(this._pccDelegationTimeout),
      pcc_initiated_orphan: cdktf.numberToTerraform(this._pccInitiatedOrphan),
      pcc_initiated_state: cdktf.numberToTerraform(this._pccInitiatedState),
      pcc_report_all: cdktf.booleanToTerraform(this._pccReportAll),
      pcc_source_address: cdktf.stringToTerraform(this._pccSourceAddress),
      pce_peers: cdktf.listMapper(segmentRoutingTePcePeersToTerraform, false)(this._pcePeers.internalValue),
      policies: cdktf.listMapper(segmentRoutingTePoliciesToTerraform, false)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      logging_pcep_peer_status: {
        value: cdktf.booleanToHclTerraform(this._loggingPcepPeerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging_policy_status: {
        value: cdktf.booleanToHclTerraform(this._loggingPolicyStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_demand_colors: {
        value: cdktf.listMapperHcl(segmentRoutingTeOnDemandColorsToHclTerraform, false)(this._onDemandColors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRoutingTeOnDemandColorsList",
      },
      pcc_dead_timer: {
        value: cdktf.numberToHclTerraform(this._pccDeadTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcc_delegation_timeout: {
        value: cdktf.numberToHclTerraform(this._pccDelegationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcc_initiated_orphan: {
        value: cdktf.numberToHclTerraform(this._pccInitiatedOrphan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcc_initiated_state: {
        value: cdktf.numberToHclTerraform(this._pccInitiatedState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcc_report_all: {
        value: cdktf.booleanToHclTerraform(this._pccReportAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pcc_source_address: {
        value: cdktf.stringToHclTerraform(this._pccSourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pce_peers: {
        value: cdktf.listMapperHcl(segmentRoutingTePcePeersToHclTerraform, false)(this._pcePeers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRoutingTePcePeersList",
      },
      policies: {
        value: cdktf.listMapperHcl(segmentRoutingTePoliciesToHclTerraform, false)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRoutingTePoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
