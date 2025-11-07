// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RipGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable demand circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#demand_circuit RipGroup#demand_circuit}
  */
  readonly demandCircuit?: boolean | cdktf.IResolvable;
  /**
  * Export policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#export RipGroup#export}
  */
  readonly export?: string[];
  /**
  * Import policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#import RipGroup#import}
  */
  readonly import?: string[];
  /**
  * Maximum time to re-transmit a message in demand-circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#max_retrans_time RipGroup#max_retrans_time}
  */
  readonly maxRetransTime?: number;
  /**
  * Default metric of exported routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#metric_out RipGroup#metric_out}
  */
  readonly metricOut?: number;
  /**
  * The name of group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#name RipGroup#name}
  */
  readonly name: string;
  /**
  * Protocol `ripng` instead of `rip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#ng RipGroup#ng}
  */
  readonly ng?: boolean | cdktf.IResolvable;
  /**
  * Preference of routes learned by this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#preference RipGroup#preference}
  */
  readonly preference?: number;
  /**
  * Delay before routes time out (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#route_timeout RipGroup#route_timeout}
  */
  readonly routeTimeout?: number;
  /**
  * Routing instance for RIP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#routing_instance RipGroup#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Interval between regular route updates (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#update_interval RipGroup#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * bfd_liveness_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#bfd_liveness_detection RipGroup#bfd_liveness_detection}
  */
  readonly bfdLivenessDetection?: RipGroupBfdLivenessDetection;
}
export interface RipGroupBfdLivenessDetection {
  /**
  * Authentication algorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#authentication_algorithm RipGroup#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Authentication key chain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#authentication_key_chain RipGroup#authentication_key_chain}
  */
  readonly authenticationKeyChain?: string;
  /**
  * Verify authentication only if authentication is negotiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#authentication_loose_check RipGroup#authentication_loose_check}
  */
  readonly authenticationLooseCheck?: boolean | cdktf.IResolvable;
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#detection_time_threshold RipGroup#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Minimum transmit and receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#minimum_interval RipGroup#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#minimum_receive_interval RipGroup#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#multiplier RipGroup#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Disable adaptation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#no_adaptation RipGroup#no_adaptation}
  */
  readonly noAdaptation?: boolean | cdktf.IResolvable;
  /**
  * Minimum transmit interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#transmit_interval_minimum_interval RipGroup#transmit_interval_minimum_interval}
  */
  readonly transmitIntervalMinimumInterval?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#transmit_interval_threshold RipGroup#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#version RipGroup#version}
  */
  readonly version?: string;
}

export function ripGroupBfdLivenessDetectionToTerraform(struct?: RipGroupBfdLivenessDetection | cdktf.IResolvable): any {
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


export function ripGroupBfdLivenessDetectionToHclTerraform(struct?: RipGroupBfdLivenessDetection | cdktf.IResolvable): any {
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

export class RipGroupBfdLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RipGroupBfdLivenessDetection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RipGroupBfdLivenessDetection | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group junos_rip_group}
*/
export class RipGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_rip_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RipGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RipGroup to import
  * @param importFromId The id of the existing RipGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RipGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_rip_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rip_group junos_rip_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RipGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RipGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_rip_group',
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
    this._demandCircuit = config.demandCircuit;
    this._export = config.export;
    this._import = config.import;
    this._maxRetransTime = config.maxRetransTime;
    this._metricOut = config.metricOut;
    this._name = config.name;
    this._ng = config.ng;
    this._preference = config.preference;
    this._routeTimeout = config.routeTimeout;
    this._routingInstance = config.routingInstance;
    this._updateInterval = config.updateInterval;
    this._bfdLivenessDetection.internalValue = config.bfdLivenessDetection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // export - computed: false, optional: true, required: false
  private _export?: string[]; 
  public get export() {
    return this.getListAttribute('export');
  }
  public set export(value: string[]) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
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

  // metric_out - computed: false, optional: true, required: false
  private _metricOut?: number; 
  public get metricOut() {
    return this.getNumberAttribute('metric_out');
  }
  public set metricOut(value: number) {
    this._metricOut = value;
  }
  public resetMetricOut() {
    this._metricOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOutInput() {
    return this._metricOut;
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

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
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

  // bfd_liveness_detection - computed: false, optional: true, required: false
  private _bfdLivenessDetection = new RipGroupBfdLivenessDetectionOutputReference(this, "bfd_liveness_detection");
  public get bfdLivenessDetection() {
    return this._bfdLivenessDetection;
  }
  public putBfdLivenessDetection(value: RipGroupBfdLivenessDetection) {
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
      demand_circuit: cdktf.booleanToTerraform(this._demandCircuit),
      export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._export),
      import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._import),
      max_retrans_time: cdktf.numberToTerraform(this._maxRetransTime),
      metric_out: cdktf.numberToTerraform(this._metricOut),
      name: cdktf.stringToTerraform(this._name),
      ng: cdktf.booleanToTerraform(this._ng),
      preference: cdktf.numberToTerraform(this._preference),
      route_timeout: cdktf.numberToTerraform(this._routeTimeout),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      bfd_liveness_detection: ripGroupBfdLivenessDetectionToTerraform(this._bfdLivenessDetection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      demand_circuit: {
        value: cdktf.booleanToHclTerraform(this._demandCircuit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._export),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._import),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_retrans_time: {
        value: cdktf.numberToHclTerraform(this._maxRetransTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_out: {
        value: cdktf.numberToHclTerraform(this._metricOut),
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
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_liveness_detection: {
        value: ripGroupBfdLivenessDetectionToHclTerraform(this._bfdLivenessDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RipGroupBfdLivenessDetection",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
