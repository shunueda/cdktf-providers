// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IccpPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * MD5 authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#authentication_key IccpPeer#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * IP address for this peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#ip_address IccpPeer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Local IP address to use for this peer alone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#local_ip_addr IccpPeer#local_ip_addr}
  */
  readonly localIpAddr?: string;
  /**
  * List of redundancy groups this peer is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#redundancy_group_id_list IccpPeer#redundancy_group_id_list}
  */
  readonly redundancyGroupIdList: number[];
  /**
  * Time within which connection must succeed with this peer (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#session_establishment_hold_time IccpPeer#session_establishment_hold_time}
  */
  readonly sessionEstablishmentHoldTime?: number;
  /**
  * backup_liveness_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#backup_liveness_detection IccpPeer#backup_liveness_detection}
  */
  readonly backupLivenessDetection?: IccpPeerBackupLivenessDetection;
  /**
  * liveness_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#liveness_detection IccpPeer#liveness_detection}
  */
  readonly livenessDetection?: IccpPeerLivenessDetection;
}
export interface IccpPeerBackupLivenessDetection {
  /**
  * Backup liveness detection peer's IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#backup_peer_ip IccpPeer#backup_peer_ip}
  */
  readonly backupPeerIp?: string;
}

export function iccpPeerBackupLivenessDetectionToTerraform(struct?: IccpPeerBackupLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_peer_ip: cdktf.stringToTerraform(struct!.backupPeerIp),
  }
}


export function iccpPeerBackupLivenessDetectionToHclTerraform(struct?: IccpPeerBackupLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.backupPeerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IccpPeerBackupLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IccpPeerBackupLivenessDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPeerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPeerIp = this._backupPeerIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IccpPeerBackupLivenessDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPeerIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPeerIp = value.backupPeerIp;
    }
  }

  // backup_peer_ip - computed: false, optional: true, required: false
  private _backupPeerIp?: string; 
  public get backupPeerIp() {
    return this.getStringAttribute('backup_peer_ip');
  }
  public set backupPeerIp(value: string) {
    this._backupPeerIp = value;
  }
  public resetBackupPeerIp() {
    this._backupPeerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeerIpInput() {
    return this._backupPeerIp;
  }
}
export interface IccpPeerLivenessDetection {
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#detection_time_threshold IccpPeer#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Minimum transmit and receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#minimum_interval IccpPeer#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#minimum_receive_interval IccpPeer#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier (1..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#multiplier IccpPeer#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Disable adaptation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#no_adaptation IccpPeer#no_adaptation}
  */
  readonly noAdaptation?: boolean | cdktf.IResolvable;
  /**
  * Minimum transmit interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#transmit_interval_minimum_interval IccpPeer#transmit_interval_minimum_interval}
  */
  readonly transmitIntervalMinimumInterval?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#transmit_interval_threshold IccpPeer#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#version IccpPeer#version}
  */
  readonly version?: string;
}

export function iccpPeerLivenessDetectionToTerraform(struct?: IccpPeerLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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


export function iccpPeerLivenessDetectionToHclTerraform(struct?: IccpPeerLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IccpPeerLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IccpPeerLivenessDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: IccpPeerLivenessDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer junos_iccp_peer}
*/
export class IccpPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_iccp_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IccpPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IccpPeer to import
  * @param importFromId The id of the existing IccpPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IccpPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_iccp_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/iccp_peer junos_iccp_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IccpPeerConfig
  */
  public constructor(scope: Construct, id: string, config: IccpPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_iccp_peer',
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
    this._authenticationKey = config.authenticationKey;
    this._ipAddress = config.ipAddress;
    this._localIpAddr = config.localIpAddr;
    this._redundancyGroupIdList = config.redundancyGroupIdList;
    this._sessionEstablishmentHoldTime = config.sessionEstablishmentHoldTime;
    this._backupLivenessDetection.internalValue = config.backupLivenessDetection;
    this._livenessDetection.internalValue = config.livenessDetection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // local_ip_addr - computed: false, optional: true, required: false
  private _localIpAddr?: string; 
  public get localIpAddr() {
    return this.getStringAttribute('local_ip_addr');
  }
  public set localIpAddr(value: string) {
    this._localIpAddr = value;
  }
  public resetLocalIpAddr() {
    this._localIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddrInput() {
    return this._localIpAddr;
  }

  // redundancy_group_id_list - computed: false, optional: false, required: true
  private _redundancyGroupIdList?: number[]; 
  public get redundancyGroupIdList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('redundancy_group_id_list')));
  }
  public set redundancyGroupIdList(value: number[]) {
    this._redundancyGroupIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyGroupIdListInput() {
    return this._redundancyGroupIdList;
  }

  // session_establishment_hold_time - computed: false, optional: true, required: false
  private _sessionEstablishmentHoldTime?: number; 
  public get sessionEstablishmentHoldTime() {
    return this.getNumberAttribute('session_establishment_hold_time');
  }
  public set sessionEstablishmentHoldTime(value: number) {
    this._sessionEstablishmentHoldTime = value;
  }
  public resetSessionEstablishmentHoldTime() {
    this._sessionEstablishmentHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEstablishmentHoldTimeInput() {
    return this._sessionEstablishmentHoldTime;
  }

  // backup_liveness_detection - computed: false, optional: true, required: false
  private _backupLivenessDetection = new IccpPeerBackupLivenessDetectionOutputReference(this, "backup_liveness_detection");
  public get backupLivenessDetection() {
    return this._backupLivenessDetection;
  }
  public putBackupLivenessDetection(value: IccpPeerBackupLivenessDetection) {
    this._backupLivenessDetection.internalValue = value;
  }
  public resetBackupLivenessDetection() {
    this._backupLivenessDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLivenessDetectionInput() {
    return this._backupLivenessDetection.internalValue;
  }

  // liveness_detection - computed: false, optional: true, required: false
  private _livenessDetection = new IccpPeerLivenessDetectionOutputReference(this, "liveness_detection");
  public get livenessDetection() {
    return this._livenessDetection;
  }
  public putLivenessDetection(value: IccpPeerLivenessDetection) {
    this._livenessDetection.internalValue = value;
  }
  public resetLivenessDetection() {
    this._livenessDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessDetectionInput() {
    return this._livenessDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      local_ip_addr: cdktf.stringToTerraform(this._localIpAddr),
      redundancy_group_id_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._redundancyGroupIdList),
      session_establishment_hold_time: cdktf.numberToTerraform(this._sessionEstablishmentHoldTime),
      backup_liveness_detection: iccpPeerBackupLivenessDetectionToTerraform(this._backupLivenessDetection.internalValue),
      liveness_detection: iccpPeerLivenessDetectionToTerraform(this._livenessDetection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip_addr: {
        value: cdktf.stringToHclTerraform(this._localIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundancy_group_id_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._redundancyGroupIdList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      session_establishment_hold_time: {
        value: cdktf.numberToHclTerraform(this._sessionEstablishmentHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_liveness_detection: {
        value: iccpPeerBackupLivenessDetectionToHclTerraform(this._backupLivenessDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IccpPeerBackupLivenessDetection",
      },
      liveness_detection: {
        value: iccpPeerLivenessDetectionToHclTerraform(this._livenessDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IccpPeerLivenessDetection",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
