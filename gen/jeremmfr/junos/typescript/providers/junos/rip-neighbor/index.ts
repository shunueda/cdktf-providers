// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RipNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable strict checks on sender address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#any_sender RipNeighbor#any_sender}
  */
  readonly anySender?: boolean | cdktf.IResolvable;
  /**
  * Authentication key (password).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#authentication_key RipNeighbor#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#authentication_type RipNeighbor#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Check reserved fields on incoming RIPv1 packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#check_zero RipNeighbor#check_zero}
  */
  readonly checkZero?: boolean | cdktf.IResolvable;
  /**
  * Enable demand circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#demand_circuit RipNeighbor#demand_circuit}
  */
  readonly demandCircuit?: boolean | cdktf.IResolvable;
  /**
  * Learn peers dynamically on a p2mp interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#dynamic_peers RipNeighbor#dynamic_peers}
  */
  readonly dynamicPeers?: boolean | cdktf.IResolvable;
  /**
  * Name of RIP or RIPng group for this neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#group RipNeighbor#group}
  */
  readonly group: string;
  /**
  * Import policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#import RipNeighbor#import}
  */
  readonly import?: string[];
  /**
  * Point-to-multipoint link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#interface_type_p2mp RipNeighbor#interface_type_p2mp}
  */
  readonly interfaceTypeP2Mp?: boolean | cdktf.IResolvable;
  /**
  * Maximum time to re-transmit a message in demand-circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#max_retrans_time RipNeighbor#max_retrans_time}
  */
  readonly maxRetransTime?: number;
  /**
  * Number of route entries per update message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#message_size RipNeighbor#message_size}
  */
  readonly messageSize?: number;
  /**
  * Metric value to add to incoming routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#metric_in RipNeighbor#metric_in}
  */
  readonly metricIn?: number;
  /**
  * Logical interface name or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#name RipNeighbor#name}
  */
  readonly name: string;
  /**
  * Protocol `ripng` instead of `rip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#ng RipNeighbor#ng}
  */
  readonly ng?: boolean | cdktf.IResolvable;
  /**
  * Don't check reserved fields on incoming RIPv1 packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#no_check_zero RipNeighbor#no_check_zero}
  */
  readonly noCheckZero?: boolean | cdktf.IResolvable;
  /**
  * P2MP peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#peer RipNeighbor#peer}
  */
  readonly peer?: string[];
  /**
  * Configure RIP receive options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#receive RipNeighbor#receive}
  */
  readonly receive?: string;
  /**
  * Delay before routes time out (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#route_timeout RipNeighbor#route_timeout}
  */
  readonly routeTimeout?: number;
  /**
  * Routing instance for RIP neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#routing_instance RipNeighbor#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Configure RIP send options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#send RipNeighbor#send}
  */
  readonly send?: string;
  /**
  * Interval between regular route updates (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#update_interval RipNeighbor#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * authentication_selective_md5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#authentication_selective_md5 RipNeighbor#authentication_selective_md5}
  */
  readonly authenticationSelectiveMd5?: RipNeighborAuthenticationSelectiveMd5[] | cdktf.IResolvable;
  /**
  * bfd_liveness_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#bfd_liveness_detection RipNeighbor#bfd_liveness_detection}
  */
  readonly bfdLivenessDetection?: RipNeighborBfdLivenessDetection;
}
export interface RipNeighborAuthenticationSelectiveMd5 {
  /**
  * MD5 authentication key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#key RipNeighbor#key}
  */
  readonly key: string;
  /**
  * Key ID for MD5 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#key_id RipNeighbor#key_id}
  */
  readonly keyId: number;
  /**
  * Start time for key transmission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#start_time RipNeighbor#start_time}
  */
  readonly startTime?: string;
}

export function ripNeighborAuthenticationSelectiveMd5ToTerraform(struct?: RipNeighborAuthenticationSelectiveMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_id: cdktf.numberToTerraform(struct!.keyId),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function ripNeighborAuthenticationSelectiveMd5ToHclTerraform(struct?: RipNeighborAuthenticationSelectiveMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RipNeighborAuthenticationSelectiveMd5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RipNeighborAuthenticationSelectiveMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RipNeighborAuthenticationSelectiveMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._keyId = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._keyId = value.keyId;
      this._startTime = value.startTime;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // start_time - computed: false, optional: true, required: false
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

export class RipNeighborAuthenticationSelectiveMd5List extends cdktf.ComplexList {
  public internalValue? : RipNeighborAuthenticationSelectiveMd5[] | cdktf.IResolvable

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
  public get(index: number): RipNeighborAuthenticationSelectiveMd5OutputReference {
    return new RipNeighborAuthenticationSelectiveMd5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RipNeighborBfdLivenessDetection {
  /**
  * Authentication algorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#authentication_algorithm RipNeighbor#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Authentication key chain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#authentication_key_chain RipNeighbor#authentication_key_chain}
  */
  readonly authenticationKeyChain?: string;
  /**
  * Verify authentication only if authentication is negotiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#authentication_loose_check RipNeighbor#authentication_loose_check}
  */
  readonly authenticationLooseCheck?: boolean | cdktf.IResolvable;
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#detection_time_threshold RipNeighbor#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Minimum transmit and receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#minimum_interval RipNeighbor#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#minimum_receive_interval RipNeighbor#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#multiplier RipNeighbor#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Disable adaptation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#no_adaptation RipNeighbor#no_adaptation}
  */
  readonly noAdaptation?: boolean | cdktf.IResolvable;
  /**
  * Minimum transmit interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#transmit_interval_minimum_interval RipNeighbor#transmit_interval_minimum_interval}
  */
  readonly transmitIntervalMinimumInterval?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#transmit_interval_threshold RipNeighbor#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#version RipNeighbor#version}
  */
  readonly version?: string;
}

export function ripNeighborBfdLivenessDetectionToTerraform(struct?: RipNeighborBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    authentication_key_chain: cdktf.stringToTerraform(struct!.authenticationKeyChain),
    authentication_loose_check: cdktf.booleanToTerraform(struct!.authenticationLooseCheck),
    detection_time_threshold: cdktf.numberToTerraform(struct!.detectionTimeThreshold),
    minimum_interval: cdktf.numberToTerraform(struct!.minimumInterval),
    minimum_receive_interval: cdktf.numberToTerraform(struct!.minimumReceiveInterval),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    no_adaptation: cdktf.booleanToTerraform(struct!.noAdaptation),
    transmit_interval_minimum_interval: cdktf.numberToTerraform(struct!.transmitIntervalMinimumInterval),
    transmit_interval_threshold: cdktf.numberToTerraform(struct!.transmitIntervalThreshold),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ripNeighborBfdLivenessDetectionToHclTerraform(struct?: RipNeighborBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_chain: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_loose_check: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationLooseCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detection_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.detectionTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_receive_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumReceiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_adaptation: {
      value: cdktf.booleanToHclTerraform(struct!.noAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transmit_interval_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval_threshold: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class RipNeighborBfdLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RipNeighborBfdLivenessDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._authenticationKeyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyChain = this._authenticationKeyChain;
    }
    if (this._authenticationLooseCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationLooseCheck = this._authenticationLooseCheck;
    }
    if (this._detectionTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionTimeThreshold = this._detectionTimeThreshold;
    }
    if (this._minimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInterval = this._minimumInterval;
    }
    if (this._minimumReceiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumReceiveInterval = this._minimumReceiveInterval;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._noAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdaptation = this._noAdaptation;
    }
    if (this._transmitIntervalMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalMinimumInterval = this._transmitIntervalMinimumInterval;
    }
    if (this._transmitIntervalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalThreshold = this._transmitIntervalThreshold;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RipNeighborBfdLivenessDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = undefined;
      this._authenticationKeyChain = undefined;
      this._authenticationLooseCheck = undefined;
      this._detectionTimeThreshold = undefined;
      this._minimumInterval = undefined;
      this._minimumReceiveInterval = undefined;
      this._multiplier = undefined;
      this._noAdaptation = undefined;
      this._transmitIntervalMinimumInterval = undefined;
      this._transmitIntervalThreshold = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._authenticationKeyChain = value.authenticationKeyChain;
      this._authenticationLooseCheck = value.authenticationLooseCheck;
      this._detectionTimeThreshold = value.detectionTimeThreshold;
      this._minimumInterval = value.minimumInterval;
      this._minimumReceiveInterval = value.minimumReceiveInterval;
      this._multiplier = value.multiplier;
      this._noAdaptation = value.noAdaptation;
      this._transmitIntervalMinimumInterval = value.transmitIntervalMinimumInterval;
      this._transmitIntervalThreshold = value.transmitIntervalThreshold;
      this._version = value.version;
    }
  }

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_key_chain - computed: false, optional: true, required: false
  private _authenticationKeyChain?: string; 
  public get authenticationKeyChain() {
    return this.getStringAttribute('authentication_key_chain');
  }
  public set authenticationKeyChain(value: string) {
    this._authenticationKeyChain = value;
  }
  public resetAuthenticationKeyChain() {
    this._authenticationKeyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyChainInput() {
    return this._authenticationKeyChain;
  }

  // authentication_loose_check - computed: false, optional: true, required: false
  private _authenticationLooseCheck?: boolean | cdktf.IResolvable; 
  public get authenticationLooseCheck() {
    return this.getBooleanAttribute('authentication_loose_check');
  }
  public set authenticationLooseCheck(value: boolean | cdktf.IResolvable) {
    this._authenticationLooseCheck = value;
  }
  public resetAuthenticationLooseCheck() {
    this._authenticationLooseCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationLooseCheckInput() {
    return this._authenticationLooseCheck;
  }

  // detection_time_threshold - computed: false, optional: true, required: false
  private _detectionTimeThreshold?: number; 
  public get detectionTimeThreshold() {
    return this.getNumberAttribute('detection_time_threshold');
  }
  public set detectionTimeThreshold(value: number) {
    this._detectionTimeThreshold = value;
  }
  public resetDetectionTimeThreshold() {
    this._detectionTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionTimeThresholdInput() {
    return this._detectionTimeThreshold;
  }

  // minimum_interval - computed: false, optional: true, required: false
  private _minimumInterval?: number; 
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
  }
  public set minimumInterval(value: number) {
    this._minimumInterval = value;
  }
  public resetMinimumInterval() {
    this._minimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumIntervalInput() {
    return this._minimumInterval;
  }

  // minimum_receive_interval - computed: false, optional: true, required: false
  private _minimumReceiveInterval?: number; 
  public get minimumReceiveInterval() {
    return this.getNumberAttribute('minimum_receive_interval');
  }
  public set minimumReceiveInterval(value: number) {
    this._minimumReceiveInterval = value;
  }
  public resetMinimumReceiveInterval() {
    this._minimumReceiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumReceiveIntervalInput() {
    return this._minimumReceiveInterval;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // no_adaptation - computed: false, optional: true, required: false
  private _noAdaptation?: boolean | cdktf.IResolvable; 
  public get noAdaptation() {
    return this.getBooleanAttribute('no_adaptation');
  }
  public set noAdaptation(value: boolean | cdktf.IResolvable) {
    this._noAdaptation = value;
  }
  public resetNoAdaptation() {
    this._noAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdaptationInput() {
    return this._noAdaptation;
  }

  // transmit_interval_minimum_interval - computed: false, optional: true, required: false
  private _transmitIntervalMinimumInterval?: number; 
  public get transmitIntervalMinimumInterval() {
    return this.getNumberAttribute('transmit_interval_minimum_interval');
  }
  public set transmitIntervalMinimumInterval(value: number) {
    this._transmitIntervalMinimumInterval = value;
  }
  public resetTransmitIntervalMinimumInterval() {
    this._transmitIntervalMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalMinimumIntervalInput() {
    return this._transmitIntervalMinimumInterval;
  }

  // transmit_interval_threshold - computed: false, optional: true, required: false
  private _transmitIntervalThreshold?: number; 
  public get transmitIntervalThreshold() {
    return this.getNumberAttribute('transmit_interval_threshold');
  }
  public set transmitIntervalThreshold(value: number) {
    this._transmitIntervalThreshold = value;
  }
  public resetTransmitIntervalThreshold() {
    this._transmitIntervalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalThresholdInput() {
    return this._transmitIntervalThreshold;
  }

  // version - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor junos_rip_neighbor}
*/
export class RipNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_rip_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RipNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RipNeighbor to import
  * @param importFromId The id of the existing RipNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RipNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_rip_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_neighbor junos_rip_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RipNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RipNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_rip_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anySender = config.anySender;
    this._authenticationKey = config.authenticationKey;
    this._authenticationType = config.authenticationType;
    this._checkZero = config.checkZero;
    this._demandCircuit = config.demandCircuit;
    this._dynamicPeers = config.dynamicPeers;
    this._group = config.group;
    this._import = config.import;
    this._interfaceTypeP2Mp = config.interfaceTypeP2Mp;
    this._maxRetransTime = config.maxRetransTime;
    this._messageSize = config.messageSize;
    this._metricIn = config.metricIn;
    this._name = config.name;
    this._ng = config.ng;
    this._noCheckZero = config.noCheckZero;
    this._peer = config.peer;
    this._receive = config.receive;
    this._routeTimeout = config.routeTimeout;
    this._routingInstance = config.routingInstance;
    this._send = config.send;
    this._updateInterval = config.updateInterval;
    this._authenticationSelectiveMd5.internalValue = config.authenticationSelectiveMd5;
    this._bfdLivenessDetection.internalValue = config.bfdLivenessDetection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // any_sender - computed: false, optional: true, required: false
  private _anySender?: boolean | cdktf.IResolvable; 
  public get anySender() {
    return this.getBooleanAttribute('any_sender');
  }
  public set anySender(value: boolean | cdktf.IResolvable) {
    this._anySender = value;
  }
  public resetAnySender() {
    this._anySender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anySenderInput() {
    return this._anySender;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // check_zero - computed: false, optional: true, required: false
  private _checkZero?: boolean | cdktf.IResolvable; 
  public get checkZero() {
    return this.getBooleanAttribute('check_zero');
  }
  public set checkZero(value: boolean | cdktf.IResolvable) {
    this._checkZero = value;
  }
  public resetCheckZero() {
    this._checkZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkZeroInput() {
    return this._checkZero;
  }

  // demand_circuit - computed: false, optional: true, required: false
  private _demandCircuit?: boolean | cdktf.IResolvable; 
  public get demandCircuit() {
    return this.getBooleanAttribute('demand_circuit');
  }
  public set demandCircuit(value: boolean | cdktf.IResolvable) {
    this._demandCircuit = value;
  }
  public resetDemandCircuit() {
    this._demandCircuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandCircuitInput() {
    return this._demandCircuit;
  }

  // dynamic_peers - computed: false, optional: true, required: false
  private _dynamicPeers?: boolean | cdktf.IResolvable; 
  public get dynamicPeers() {
    return this.getBooleanAttribute('dynamic_peers');
  }
  public set dynamicPeers(value: boolean | cdktf.IResolvable) {
    this._dynamicPeers = value;
  }
  public resetDynamicPeers() {
    this._dynamicPeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPeersInput() {
    return this._dynamicPeers;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import - computed: false, optional: true, required: false
  private _import?: string[]; 
  public get import() {
    return this.getListAttribute('import');
  }
  public set import(value: string[]) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // interface_type_p2mp - computed: false, optional: true, required: false
  private _interfaceTypeP2Mp?: boolean | cdktf.IResolvable; 
  public get interfaceTypeP2Mp() {
    return this.getBooleanAttribute('interface_type_p2mp');
  }
  public set interfaceTypeP2Mp(value: boolean | cdktf.IResolvable) {
    this._interfaceTypeP2Mp = value;
  }
  public resetInterfaceTypeP2Mp() {
    this._interfaceTypeP2Mp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeP2MpInput() {
    return this._interfaceTypeP2Mp;
  }

  // max_retrans_time - computed: false, optional: true, required: false
  private _maxRetransTime?: number; 
  public get maxRetransTime() {
    return this.getNumberAttribute('max_retrans_time');
  }
  public set maxRetransTime(value: number) {
    this._maxRetransTime = value;
  }
  public resetMaxRetransTime() {
    this._maxRetransTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetransTimeInput() {
    return this._maxRetransTime;
  }

  // message_size - computed: false, optional: true, required: false
  private _messageSize?: number; 
  public get messageSize() {
    return this.getNumberAttribute('message_size');
  }
  public set messageSize(value: number) {
    this._messageSize = value;
  }
  public resetMessageSize() {
    this._messageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSizeInput() {
    return this._messageSize;
  }

  // metric_in - computed: false, optional: true, required: false
  private _metricIn?: number; 
  public get metricIn() {
    return this.getNumberAttribute('metric_in');
  }
  public set metricIn(value: number) {
    this._metricIn = value;
  }
  public resetMetricIn() {
    this._metricIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInInput() {
    return this._metricIn;
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

  // ng - computed: false, optional: true, required: false
  private _ng?: boolean | cdktf.IResolvable; 
  public get ng() {
    return this.getBooleanAttribute('ng');
  }
  public set ng(value: boolean | cdktf.IResolvable) {
    this._ng = value;
  }
  public resetNg() {
    this._ng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngInput() {
    return this._ng;
  }

  // no_check_zero - computed: false, optional: true, required: false
  private _noCheckZero?: boolean | cdktf.IResolvable; 
  public get noCheckZero() {
    return this.getBooleanAttribute('no_check_zero');
  }
  public set noCheckZero(value: boolean | cdktf.IResolvable) {
    this._noCheckZero = value;
  }
  public resetNoCheckZero() {
    this._noCheckZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCheckZeroInput() {
    return this._noCheckZero;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string[]; 
  public get peer() {
    return cdktf.Fn.tolist(this.getListAttribute('peer'));
  }
  public set peer(value: string[]) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // route_timeout - computed: false, optional: true, required: false
  private _routeTimeout?: number; 
  public get routeTimeout() {
    return this.getNumberAttribute('route_timeout');
  }
  public set routeTimeout(value: number) {
    this._routeTimeout = value;
  }
  public resetRouteTimeout() {
    this._routeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTimeoutInput() {
    return this._routeTimeout;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // authentication_selective_md5 - computed: false, optional: true, required: false
  private _authenticationSelectiveMd5 = new RipNeighborAuthenticationSelectiveMd5List(this, "authentication_selective_md5", false);
  public get authenticationSelectiveMd5() {
    return this._authenticationSelectiveMd5;
  }
  public putAuthenticationSelectiveMd5(value: RipNeighborAuthenticationSelectiveMd5[] | cdktf.IResolvable) {
    this._authenticationSelectiveMd5.internalValue = value;
  }
  public resetAuthenticationSelectiveMd5() {
    this._authenticationSelectiveMd5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSelectiveMd5Input() {
    return this._authenticationSelectiveMd5.internalValue;
  }

  // bfd_liveness_detection - computed: false, optional: true, required: false
  private _bfdLivenessDetection = new RipNeighborBfdLivenessDetectionOutputReference(this, "bfd_liveness_detection");
  public get bfdLivenessDetection() {
    return this._bfdLivenessDetection;
  }
  public putBfdLivenessDetection(value: RipNeighborBfdLivenessDetection) {
    this._bfdLivenessDetection.internalValue = value;
  }
  public resetBfdLivenessDetection() {
    this._bfdLivenessDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdLivenessDetectionInput() {
    return this._bfdLivenessDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      any_sender: cdktf.booleanToTerraform(this._anySender),
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      check_zero: cdktf.booleanToTerraform(this._checkZero),
      demand_circuit: cdktf.booleanToTerraform(this._demandCircuit),
      dynamic_peers: cdktf.booleanToTerraform(this._dynamicPeers),
      group: cdktf.stringToTerraform(this._group),
      import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._import),
      interface_type_p2mp: cdktf.booleanToTerraform(this._interfaceTypeP2Mp),
      max_retrans_time: cdktf.numberToTerraform(this._maxRetransTime),
      message_size: cdktf.numberToTerraform(this._messageSize),
      metric_in: cdktf.numberToTerraform(this._metricIn),
      name: cdktf.stringToTerraform(this._name),
      ng: cdktf.booleanToTerraform(this._ng),
      no_check_zero: cdktf.booleanToTerraform(this._noCheckZero),
      peer: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peer),
      receive: cdktf.stringToTerraform(this._receive),
      route_timeout: cdktf.numberToTerraform(this._routeTimeout),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      send: cdktf.stringToTerraform(this._send),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      authentication_selective_md5: cdktf.listMapper(ripNeighborAuthenticationSelectiveMd5ToTerraform, true)(this._authenticationSelectiveMd5.internalValue),
      bfd_liveness_detection: ripNeighborBfdLivenessDetectionToTerraform(this._bfdLivenessDetection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      any_sender: {
        value: cdktf.booleanToHclTerraform(this._anySender),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_zero: {
        value: cdktf.booleanToHclTerraform(this._checkZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      demand_circuit: {
        value: cdktf.booleanToHclTerraform(this._demandCircuit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_peers: {
        value: cdktf.booleanToHclTerraform(this._dynamicPeers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._import),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interface_type_p2mp: {
        value: cdktf.booleanToHclTerraform(this._interfaceTypeP2Mp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retrans_time: {
        value: cdktf.numberToHclTerraform(this._maxRetransTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_size: {
        value: cdktf.numberToHclTerraform(this._messageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_in: {
        value: cdktf.numberToHclTerraform(this._metricIn),
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
      ng: {
        value: cdktf.booleanToHclTerraform(this._ng),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_check_zero: {
        value: cdktf.booleanToHclTerraform(this._noCheckZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peer: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      receive: {
        value: cdktf.stringToHclTerraform(this._receive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_timeout: {
        value: cdktf.numberToHclTerraform(this._routeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send: {
        value: cdktf.stringToHclTerraform(this._send),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_selective_md5: {
        value: cdktf.listMapperHcl(ripNeighborAuthenticationSelectiveMd5ToHclTerraform, true)(this._authenticationSelectiveMd5.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RipNeighborAuthenticationSelectiveMd5List",
      },
      bfd_liveness_detection: {
        value: ripNeighborBfdLivenessDetectionToHclTerraform(this._bfdLivenessDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RipNeighborBfdLivenessDetection",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
