// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_physical
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosInterfacePhysicalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the interface part for search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_physical#config_interface DataJunosInterfacePhysical#config_interface}
  */
  readonly configInterface?: string;
  /**
  * Regex string to filter lines and find only one interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_physical#match DataJunosInterfacePhysical#match}
  */
  readonly match?: string;
}
export interface DataJunosInterfacePhysicalEsi {
}

export function dataJunosInterfacePhysicalEsiToTerraform(struct?: DataJunosInterfacePhysicalEsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalEsiToHclTerraform(struct?: DataJunosInterfacePhysicalEsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalEsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalEsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalEsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_derive_lacp - computed: true, optional: false, required: false
  public get autoDeriveLacp() {
    return this.getBooleanAttribute('auto_derive_lacp');
  }

  // df_election_type - computed: true, optional: false, required: false
  public get dfElectionType() {
    return this.getStringAttribute('df_election_type');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // source_bmac - computed: true, optional: false, required: false
  public get sourceBmac() {
    return this.getStringAttribute('source_bmac');
  }
}
export interface DataJunosInterfacePhysicalEtherOpts {
}

export function dataJunosInterfacePhysicalEtherOptsToTerraform(struct?: DataJunosInterfacePhysicalEtherOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalEtherOptsToHclTerraform(struct?: DataJunosInterfacePhysicalEtherOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalEtherOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalEtherOpts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalEtherOpts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ae_8023ad - computed: true, optional: false, required: false
  public get ae8023Ad() {
    return this.getStringAttribute('ae_8023ad');
  }

  // auto_negotiation - computed: true, optional: false, required: false
  public get autoNegotiation() {
    return this.getBooleanAttribute('auto_negotiation');
  }

  // flow_control - computed: true, optional: false, required: false
  public get flowControl() {
    return this.getBooleanAttribute('flow_control');
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }

  // no_auto_negotiation - computed: true, optional: false, required: false
  public get noAutoNegotiation() {
    return this.getBooleanAttribute('no_auto_negotiation');
  }

  // no_flow_control - computed: true, optional: false, required: false
  public get noFlowControl() {
    return this.getBooleanAttribute('no_flow_control');
  }

  // no_loopback - computed: true, optional: false, required: false
  public get noLoopback() {
    return this.getBooleanAttribute('no_loopback');
  }

  // redundant_parent - computed: true, optional: false, required: false
  public get redundantParent() {
    return this.getStringAttribute('redundant_parent');
  }
}
export interface DataJunosInterfacePhysicalGigetherOpts {
}

export function dataJunosInterfacePhysicalGigetherOptsToTerraform(struct?: DataJunosInterfacePhysicalGigetherOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalGigetherOptsToHclTerraform(struct?: DataJunosInterfacePhysicalGigetherOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalGigetherOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalGigetherOpts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalGigetherOpts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ae_8023ad - computed: true, optional: false, required: false
  public get ae8023Ad() {
    return this.getStringAttribute('ae_8023ad');
  }

  // auto_negotiation - computed: true, optional: false, required: false
  public get autoNegotiation() {
    return this.getBooleanAttribute('auto_negotiation');
  }

  // flow_control - computed: true, optional: false, required: false
  public get flowControl() {
    return this.getBooleanAttribute('flow_control');
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }

  // no_auto_negotiation - computed: true, optional: false, required: false
  public get noAutoNegotiation() {
    return this.getBooleanAttribute('no_auto_negotiation');
  }

  // no_flow_control - computed: true, optional: false, required: false
  public get noFlowControl() {
    return this.getBooleanAttribute('no_flow_control');
  }

  // no_loopback - computed: true, optional: false, required: false
  public get noLoopback() {
    return this.getBooleanAttribute('no_loopback');
  }

  // redundant_parent - computed: true, optional: false, required: false
  public get redundantParent() {
    return this.getStringAttribute('redundant_parent');
  }
}
export interface DataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetection {
}

export function dataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetectionToTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetectionToHclTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_algorithm - computed: true, optional: false, required: false
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }

  // authentication_key_chain - computed: true, optional: false, required: false
  public get authenticationKeyChain() {
    return this.getStringAttribute('authentication_key_chain');
  }

  // authentication_loose_check - computed: true, optional: false, required: false
  public get authenticationLooseCheck() {
    return this.getBooleanAttribute('authentication_loose_check');
  }

  // detection_time_threshold - computed: true, optional: false, required: false
  public get detectionTimeThreshold() {
    return this.getNumberAttribute('detection_time_threshold');
  }

  // holddown_interval - computed: true, optional: false, required: false
  public get holddownInterval() {
    return this.getNumberAttribute('holddown_interval');
  }

  // local_address - computed: true, optional: false, required: false
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // minimum_interval - computed: true, optional: false, required: false
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
  }

  // minimum_receive_interval - computed: true, optional: false, required: false
  public get minimumReceiveInterval() {
    return this.getNumberAttribute('minimum_receive_interval');
  }

  // multiplier - computed: true, optional: false, required: false
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }

  // neighbor - computed: true, optional: false, required: false
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }

  // no_adaptation - computed: true, optional: false, required: false
  public get noAdaptation() {
    return this.getBooleanAttribute('no_adaptation');
  }

  // transmit_interval_minimum_interval - computed: true, optional: false, required: false
  public get transmitIntervalMinimumInterval() {
    return this.getNumberAttribute('transmit_interval_minimum_interval');
  }

  // transmit_interval_threshold - computed: true, optional: false, required: false
  public get transmitIntervalThreshold() {
    return this.getNumberAttribute('transmit_interval_threshold');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataJunosInterfacePhysicalParentEtherOptsLacp {
}

export function dataJunosInterfacePhysicalParentEtherOptsLacpToTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalParentEtherOptsLacpToHclTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalParentEtherOptsLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalParentEtherOptsLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalParentEtherOptsLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_key - computed: true, optional: false, required: false
  public get adminKey() {
    return this.getNumberAttribute('admin_key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // periodic - computed: true, optional: false, required: false
  public get periodic() {
    return this.getStringAttribute('periodic');
  }

  // sync_reset - computed: true, optional: false, required: false
  public get syncReset() {
    return this.getStringAttribute('sync_reset');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // system_priority - computed: true, optional: false, required: false
  public get systemPriority() {
    return this.getNumberAttribute('system_priority');
  }
}
export interface DataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown {
}

export function dataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownToTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownToHclTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // force_icl_down - computed: true, optional: false, required: false
  public get forceIclDown() {
    return this.getBooleanAttribute('force_icl_down');
  }

  // prefer_status_control_active - computed: true, optional: false, required: false
  public get preferStatusControlActive() {
    return this.getBooleanAttribute('prefer_status_control_active');
  }
}
export interface DataJunosInterfacePhysicalParentEtherOptsMcAe {
}

export function dataJunosInterfacePhysicalParentEtherOptsMcAeToTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsMcAe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalParentEtherOptsMcAeToHclTerraform(struct?: DataJunosInterfacePhysicalParentEtherOptsMcAe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalParentEtherOptsMcAeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalParentEtherOptsMcAe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalParentEtherOptsMcAe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chassis_id - computed: true, optional: false, required: false
  public get chassisId() {
    return this.getNumberAttribute('chassis_id');
  }

  // enhanced_convergence - computed: true, optional: false, required: false
  public get enhancedConvergence() {
    return this.getBooleanAttribute('enhanced_convergence');
  }

  // events_iccp_peer_down - computed: true, optional: false, required: false
  private _eventsIccpPeerDown = new DataJunosInterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownOutputReference(this, "events_iccp_peer_down");
  public get eventsIccpPeerDown() {
    return this._eventsIccpPeerDown;
  }

  // init_delay_time - computed: true, optional: false, required: false
  public get initDelayTime() {
    return this.getNumberAttribute('init_delay_time');
  }

  // mc_ae_id - computed: true, optional: false, required: false
  public get mcAeId() {
    return this.getNumberAttribute('mc_ae_id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // redundancy_group - computed: true, optional: false, required: false
  public get redundancyGroup() {
    return this.getNumberAttribute('redundancy_group');
  }

  // revert_time - computed: true, optional: false, required: false
  public get revertTime() {
    return this.getNumberAttribute('revert_time');
  }

  // status_control - computed: true, optional: false, required: false
  public get statusControl() {
    return this.getStringAttribute('status_control');
  }

  // switchover_mode - computed: true, optional: false, required: false
  public get switchoverMode() {
    return this.getStringAttribute('switchover_mode');
  }
}
export interface DataJunosInterfacePhysicalParentEtherOpts {
}

export function dataJunosInterfacePhysicalParentEtherOptsToTerraform(struct?: DataJunosInterfacePhysicalParentEtherOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfacePhysicalParentEtherOptsToHclTerraform(struct?: DataJunosInterfacePhysicalParentEtherOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfacePhysicalParentEtherOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfacePhysicalParentEtherOpts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfacePhysicalParentEtherOpts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bfd_liveness_detection - computed: true, optional: false, required: false
  private _bfdLivenessDetection = new DataJunosInterfacePhysicalParentEtherOptsBfdLivenessDetectionOutputReference(this, "bfd_liveness_detection");
  public get bfdLivenessDetection() {
    return this._bfdLivenessDetection;
  }

  // flow_control - computed: true, optional: false, required: false
  public get flowControl() {
    return this.getBooleanAttribute('flow_control');
  }

  // lacp - computed: true, optional: false, required: false
  private _lacp = new DataJunosInterfacePhysicalParentEtherOptsLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }

  // link_speed - computed: true, optional: false, required: false
  public get linkSpeed() {
    return this.getStringAttribute('link_speed');
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }

  // mc_ae - computed: true, optional: false, required: false
  private _mcAe = new DataJunosInterfacePhysicalParentEtherOptsMcAeOutputReference(this, "mc_ae");
  public get mcAe() {
    return this._mcAe;
  }

  // minimum_bandwidth - computed: true, optional: false, required: false
  public get minimumBandwidth() {
    return this.getStringAttribute('minimum_bandwidth');
  }

  // minimum_links - computed: true, optional: false, required: false
  public get minimumLinks() {
    return this.getNumberAttribute('minimum_links');
  }

  // no_flow_control - computed: true, optional: false, required: false
  public get noFlowControl() {
    return this.getBooleanAttribute('no_flow_control');
  }

  // no_loopback - computed: true, optional: false, required: false
  public get noLoopback() {
    return this.getBooleanAttribute('no_loopback');
  }

  // redundancy_group - computed: true, optional: false, required: false
  public get redundancyGroup() {
    return this.getNumberAttribute('redundancy_group');
  }

  // source_address_filter - computed: true, optional: false, required: false
  public get sourceAddressFilter() {
    return this.getListAttribute('source_address_filter');
  }

  // source_filtering - computed: true, optional: false, required: false
  public get sourceFiltering() {
    return this.getBooleanAttribute('source_filtering');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_physical junos_interface_physical}
*/
export class DataJunosInterfacePhysical extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_interface_physical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosInterfacePhysical resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosInterfacePhysical to import
  * @param importFromId The id of the existing DataJunosInterfacePhysical that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_physical#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosInterfacePhysical to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_interface_physical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_physical junos_interface_physical} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosInterfacePhysicalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJunosInterfacePhysicalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_interface_physical',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configInterface = config.configInterface;
    this._match = config.match;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_interface - computed: false, optional: true, required: false
  private _configInterface?: string; 
  public get configInterface() {
    return this.getStringAttribute('config_interface');
  }
  public set configInterface(value: string) {
    this._configInterface = value;
  }
  public resetConfigInterface() {
    this._configInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInterfaceInput() {
    return this._configInterface;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // esi - computed: true, optional: false, required: false
  private _esi = new DataJunosInterfacePhysicalEsiOutputReference(this, "esi");
  public get esi() {
    return this._esi;
  }

  // ether_opts - computed: true, optional: false, required: false
  private _etherOpts = new DataJunosInterfacePhysicalEtherOptsOutputReference(this, "ether_opts");
  public get etherOpts() {
    return this._etherOpts;
  }

  // flexible_vlan_tagging - computed: true, optional: false, required: false
  public get flexibleVlanTagging() {
    return this.getBooleanAttribute('flexible_vlan_tagging');
  }

  // gigether_opts - computed: true, optional: false, required: false
  private _gigetherOpts = new DataJunosInterfacePhysicalGigetherOptsOutputReference(this, "gigether_opts");
  public get gigetherOpts() {
    return this._gigetherOpts;
  }

  // gratuitous_arp_reply - computed: true, optional: false, required: false
  public get gratuitousArpReply() {
    return this.getBooleanAttribute('gratuitous_arp_reply');
  }

  // hold_time_down - computed: true, optional: false, required: false
  public get holdTimeDown() {
    return this.getNumberAttribute('hold_time_down');
  }

  // hold_time_up - computed: true, optional: false, required: false
  public get holdTimeUp() {
    return this.getNumberAttribute('hold_time_up');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_mode - computed: true, optional: false, required: false
  public get linkMode() {
    return this.getStringAttribute('link_mode');
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

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // no_gratuitous_arp_reply - computed: true, optional: false, required: false
  public get noGratuitousArpReply() {
    return this.getBooleanAttribute('no_gratuitous_arp_reply');
  }

  // no_gratuitous_arp_request - computed: true, optional: false, required: false
  public get noGratuitousArpRequest() {
    return this.getBooleanAttribute('no_gratuitous_arp_request');
  }

  // parent_ether_opts - computed: true, optional: false, required: false
  private _parentEtherOpts = new DataJunosInterfacePhysicalParentEtherOptsOutputReference(this, "parent_ether_opts");
  public get parentEtherOpts() {
    return this._parentEtherOpts;
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // storm_control - computed: true, optional: false, required: false
  public get stormControl() {
    return this.getStringAttribute('storm_control');
  }

  // trunk - computed: true, optional: false, required: false
  public get trunk() {
    return this.getBooleanAttribute('trunk');
  }

  // trunk_non_els - computed: true, optional: false, required: false
  public get trunkNonEls() {
    return this.getBooleanAttribute('trunk_non_els');
  }

  // vlan_members - computed: true, optional: false, required: false
  public get vlanMembers() {
    return this.getListAttribute('vlan_members');
  }

  // vlan_native - computed: true, optional: false, required: false
  public get vlanNative() {
    return this.getNumberAttribute('vlan_native');
  }

  // vlan_native_non_els - computed: true, optional: false, required: false
  public get vlanNativeNonEls() {
    return this.getStringAttribute('vlan_native_non_els');
  }

  // vlan_tagging - computed: true, optional: false, required: false
  public get vlanTagging() {
    return this.getBooleanAttribute('vlan_tagging');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_interface: cdktf.stringToTerraform(this._configInterface),
      match: cdktf.stringToTerraform(this._match),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_interface: {
        value: cdktf.stringToHclTerraform(this._configInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
