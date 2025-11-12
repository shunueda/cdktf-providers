// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchPhysicalportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#cdp_status SwitchPhysicalport#cdp_status}
  */
  readonly cdpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#description SwitchPhysicalport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#dmi_status SwitchPhysicalport#dmi_status}
  */
  readonly dmiStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#eee_tx_idle_time SwitchPhysicalport#eee_tx_idle_time}
  */
  readonly eeeTxIdleTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#eee_tx_wake_time SwitchPhysicalport#eee_tx_wake_time}
  */
  readonly eeeTxWakeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#egress_drop_mode SwitchPhysicalport#egress_drop_mode}
  */
  readonly egressDropMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#energy_efficient_ethernet SwitchPhysicalport#energy_efficient_ethernet}
  */
  readonly energyEfficientEthernet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#flap_duration SwitchPhysicalport#flap_duration}
  */
  readonly flapDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#flap_rate SwitchPhysicalport#flap_rate}
  */
  readonly flapRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#flap_timeout SwitchPhysicalport#flap_timeout}
  */
  readonly flapTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#flap_trig SwitchPhysicalport#flap_trig}
  */
  readonly flapTrig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#flapguard SwitchPhysicalport#flapguard}
  */
  readonly flapguard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#flapguard_state SwitchPhysicalport#flapguard_state}
  */
  readonly flapguardState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#flow_control SwitchPhysicalport#flow_control}
  */
  readonly flowControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#fortilink_p2p SwitchPhysicalport#fortilink_p2p}
  */
  readonly fortilinkP2P?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#id SwitchPhysicalport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#l2_learning SwitchPhysicalport#l2_learning}
  */
  readonly l2Learning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#l2_sa_unknown SwitchPhysicalport#l2_sa_unknown}
  */
  readonly l2SaUnknown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#link_status SwitchPhysicalport#link_status}
  */
  readonly linkStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#lldp_profile SwitchPhysicalport#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#lldp_status SwitchPhysicalport#lldp_status}
  */
  readonly lldpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#loopback SwitchPhysicalport#loopback}
  */
  readonly loopback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#macsec_pae_mode SwitchPhysicalport#macsec_pae_mode}
  */
  readonly macsecPaeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#macsec_profile SwitchPhysicalport#macsec_profile}
  */
  readonly macsecProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#max_frame_size SwitchPhysicalport#max_frame_size}
  */
  readonly maxFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#medium SwitchPhysicalport#medium}
  */
  readonly medium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#name SwitchPhysicalport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#owning_interface SwitchPhysicalport#owning_interface}
  */
  readonly owningInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#pause_meter_rate SwitchPhysicalport#pause_meter_rate}
  */
  readonly pauseMeterRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#pause_resume SwitchPhysicalport#pause_resume}
  */
  readonly pauseResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#poe_max_power_mode SwitchPhysicalport#poe_max_power_mode}
  */
  readonly poeMaxPowerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#poe_port_mode SwitchPhysicalport#poe_port_mode}
  */
  readonly poePortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#poe_port_priority SwitchPhysicalport#poe_port_priority}
  */
  readonly poePortPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#poe_status SwitchPhysicalport#poe_status}
  */
  readonly poeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#port_index SwitchPhysicalport#port_index}
  */
  readonly portIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#priority_based_flow_control SwitchPhysicalport#priority_based_flow_control}
  */
  readonly priorityBasedFlowControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#qsfp_low_power_mode SwitchPhysicalport#qsfp_low_power_mode}
  */
  readonly qsfpLowPowerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#security_mode SwitchPhysicalport#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#speed SwitchPhysicalport#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#status SwitchPhysicalport#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#storm_control_mode SwitchPhysicalport#storm_control_mode}
  */
  readonly stormControlMode?: string;
  /**
  * storm_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#storm_control SwitchPhysicalport#storm_control}
  */
  readonly stormControl?: SwitchPhysicalportStormControl;
}
export interface SwitchPhysicalportStormControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#broadcast SwitchPhysicalport#broadcast}
  */
  readonly broadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#burst_size_level SwitchPhysicalport#burst_size_level}
  */
  readonly burstSizeLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#rate SwitchPhysicalport#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#unknown_multicast SwitchPhysicalport#unknown_multicast}
  */
  readonly unknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#unknown_unicast SwitchPhysicalport#unknown_unicast}
  */
  readonly unknownUnicast?: string;
}

export function switchPhysicalportStormControlToTerraform(struct?: SwitchPhysicalportStormControlOutputReference | SwitchPhysicalportStormControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: cdktf.stringToTerraform(struct!.broadcast),
    burst_size_level: cdktf.numberToTerraform(struct!.burstSizeLevel),
    rate: cdktf.numberToTerraform(struct!.rate),
    unknown_multicast: cdktf.stringToTerraform(struct!.unknownMulticast),
    unknown_unicast: cdktf.stringToTerraform(struct!.unknownUnicast),
  }
}


export function switchPhysicalportStormControlToHclTerraform(struct?: SwitchPhysicalportStormControlOutputReference | SwitchPhysicalportStormControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: cdktf.stringToHclTerraform(struct!.broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burst_size_level: {
      value: cdktf.numberToHclTerraform(struct!.burstSizeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_multicast: {
      value: cdktf.stringToHclTerraform(struct!.unknownMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_unicast: {
      value: cdktf.stringToHclTerraform(struct!.unknownUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchPhysicalportStormControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchPhysicalportStormControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast;
    }
    if (this._burstSizeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSizeLevel = this._burstSizeLevel;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._unknownMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownMulticast = this._unknownMulticast;
    }
    if (this._unknownUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownUnicast = this._unknownUnicast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchPhysicalportStormControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broadcast = undefined;
      this._burstSizeLevel = undefined;
      this._rate = undefined;
      this._unknownMulticast = undefined;
      this._unknownUnicast = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broadcast = value.broadcast;
      this._burstSizeLevel = value.burstSizeLevel;
      this._rate = value.rate;
      this._unknownMulticast = value.unknownMulticast;
      this._unknownUnicast = value.unknownUnicast;
    }
  }

  // broadcast - computed: true, optional: true, required: false
  private _broadcast?: string; 
  public get broadcast() {
    return this.getStringAttribute('broadcast');
  }
  public set broadcast(value: string) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // burst_size_level - computed: true, optional: true, required: false
  private _burstSizeLevel?: number; 
  public get burstSizeLevel() {
    return this.getNumberAttribute('burst_size_level');
  }
  public set burstSizeLevel(value: number) {
    this._burstSizeLevel = value;
  }
  public resetBurstSizeLevel() {
    this._burstSizeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeLevelInput() {
    return this._burstSizeLevel;
  }

  // rate - computed: true, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // unknown_multicast - computed: true, optional: true, required: false
  private _unknownMulticast?: string; 
  public get unknownMulticast() {
    return this.getStringAttribute('unknown_multicast');
  }
  public set unknownMulticast(value: string) {
    this._unknownMulticast = value;
  }
  public resetUnknownMulticast() {
    this._unknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownMulticastInput() {
    return this._unknownMulticast;
  }

  // unknown_unicast - computed: true, optional: true, required: false
  private _unknownUnicast?: string; 
  public get unknownUnicast() {
    return this.getStringAttribute('unknown_unicast');
  }
  public set unknownUnicast(value: string) {
    this._unknownUnicast = value;
  }
  public resetUnknownUnicast() {
    this._unknownUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastInput() {
    return this._unknownUnicast;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport fortiswitch_switch_physicalport}
*/
export class SwitchPhysicalport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_physicalport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchPhysicalport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchPhysicalport to import
  * @param importFromId The id of the existing SwitchPhysicalport that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchPhysicalport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_physicalport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_physicalport fortiswitch_switch_physicalport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchPhysicalportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchPhysicalportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_physicalport',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdpStatus = config.cdpStatus;
    this._description = config.description;
    this._dmiStatus = config.dmiStatus;
    this._eeeTxIdleTime = config.eeeTxIdleTime;
    this._eeeTxWakeTime = config.eeeTxWakeTime;
    this._egressDropMode = config.egressDropMode;
    this._energyEfficientEthernet = config.energyEfficientEthernet;
    this._flapDuration = config.flapDuration;
    this._flapRate = config.flapRate;
    this._flapTimeout = config.flapTimeout;
    this._flapTrig = config.flapTrig;
    this._flapguard = config.flapguard;
    this._flapguardState = config.flapguardState;
    this._flowControl = config.flowControl;
    this._fortilinkP2P = config.fortilinkP2P;
    this._id = config.id;
    this._l2Learning = config.l2Learning;
    this._l2SaUnknown = config.l2SaUnknown;
    this._linkStatus = config.linkStatus;
    this._lldpProfile = config.lldpProfile;
    this._lldpStatus = config.lldpStatus;
    this._loopback = config.loopback;
    this._macsecPaeMode = config.macsecPaeMode;
    this._macsecProfile = config.macsecProfile;
    this._maxFrameSize = config.maxFrameSize;
    this._medium = config.medium;
    this._name = config.name;
    this._owningInterface = config.owningInterface;
    this._pauseMeterRate = config.pauseMeterRate;
    this._pauseResume = config.pauseResume;
    this._poeMaxPowerMode = config.poeMaxPowerMode;
    this._poePortMode = config.poePortMode;
    this._poePortPriority = config.poePortPriority;
    this._poeStatus = config.poeStatus;
    this._portIndex = config.portIndex;
    this._priorityBasedFlowControl = config.priorityBasedFlowControl;
    this._qsfpLowPowerMode = config.qsfpLowPowerMode;
    this._securityMode = config.securityMode;
    this._speed = config.speed;
    this._status = config.status;
    this._stormControlMode = config.stormControlMode;
    this._stormControl.internalValue = config.stormControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdp_status - computed: true, optional: true, required: false
  private _cdpStatus?: string; 
  public get cdpStatus() {
    return this.getStringAttribute('cdp_status');
  }
  public set cdpStatus(value: string) {
    this._cdpStatus = value;
  }
  public resetCdpStatus() {
    this._cdpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpStatusInput() {
    return this._cdpStatus;
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

  // dmi_status - computed: true, optional: true, required: false
  private _dmiStatus?: string; 
  public get dmiStatus() {
    return this.getStringAttribute('dmi_status');
  }
  public set dmiStatus(value: string) {
    this._dmiStatus = value;
  }
  public resetDmiStatus() {
    this._dmiStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmiStatusInput() {
    return this._dmiStatus;
  }

  // eee_tx_idle_time - computed: true, optional: true, required: false
  private _eeeTxIdleTime?: number; 
  public get eeeTxIdleTime() {
    return this.getNumberAttribute('eee_tx_idle_time');
  }
  public set eeeTxIdleTime(value: number) {
    this._eeeTxIdleTime = value;
  }
  public resetEeeTxIdleTime() {
    this._eeeTxIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eeeTxIdleTimeInput() {
    return this._eeeTxIdleTime;
  }

  // eee_tx_wake_time - computed: true, optional: true, required: false
  private _eeeTxWakeTime?: number; 
  public get eeeTxWakeTime() {
    return this.getNumberAttribute('eee_tx_wake_time');
  }
  public set eeeTxWakeTime(value: number) {
    this._eeeTxWakeTime = value;
  }
  public resetEeeTxWakeTime() {
    this._eeeTxWakeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eeeTxWakeTimeInput() {
    return this._eeeTxWakeTime;
  }

  // egress_drop_mode - computed: true, optional: true, required: false
  private _egressDropMode?: string; 
  public get egressDropMode() {
    return this.getStringAttribute('egress_drop_mode');
  }
  public set egressDropMode(value: string) {
    this._egressDropMode = value;
  }
  public resetEgressDropMode() {
    this._egressDropMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressDropModeInput() {
    return this._egressDropMode;
  }

  // energy_efficient_ethernet - computed: true, optional: true, required: false
  private _energyEfficientEthernet?: string; 
  public get energyEfficientEthernet() {
    return this.getStringAttribute('energy_efficient_ethernet');
  }
  public set energyEfficientEthernet(value: string) {
    this._energyEfficientEthernet = value;
  }
  public resetEnergyEfficientEthernet() {
    this._energyEfficientEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get energyEfficientEthernetInput() {
    return this._energyEfficientEthernet;
  }

  // flap_duration - computed: true, optional: true, required: false
  private _flapDuration?: number; 
  public get flapDuration() {
    return this.getNumberAttribute('flap_duration');
  }
  public set flapDuration(value: number) {
    this._flapDuration = value;
  }
  public resetFlapDuration() {
    this._flapDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapDurationInput() {
    return this._flapDuration;
  }

  // flap_rate - computed: true, optional: true, required: false
  private _flapRate?: number; 
  public get flapRate() {
    return this.getNumberAttribute('flap_rate');
  }
  public set flapRate(value: number) {
    this._flapRate = value;
  }
  public resetFlapRate() {
    this._flapRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapRateInput() {
    return this._flapRate;
  }

  // flap_timeout - computed: true, optional: true, required: false
  private _flapTimeout?: number; 
  public get flapTimeout() {
    return this.getNumberAttribute('flap_timeout');
  }
  public set flapTimeout(value: number) {
    this._flapTimeout = value;
  }
  public resetFlapTimeout() {
    this._flapTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapTimeoutInput() {
    return this._flapTimeout;
  }

  // flap_trig - computed: true, optional: true, required: false
  private _flapTrig?: number; 
  public get flapTrig() {
    return this.getNumberAttribute('flap_trig');
  }
  public set flapTrig(value: number) {
    this._flapTrig = value;
  }
  public resetFlapTrig() {
    this._flapTrig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapTrigInput() {
    return this._flapTrig;
  }

  // flapguard - computed: true, optional: true, required: false
  private _flapguard?: string; 
  public get flapguard() {
    return this.getStringAttribute('flapguard');
  }
  public set flapguard(value: string) {
    this._flapguard = value;
  }
  public resetFlapguard() {
    this._flapguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapguardInput() {
    return this._flapguard;
  }

  // flapguard_state - computed: true, optional: true, required: false
  private _flapguardState?: string; 
  public get flapguardState() {
    return this.getStringAttribute('flapguard_state');
  }
  public set flapguardState(value: string) {
    this._flapguardState = value;
  }
  public resetFlapguardState() {
    this._flapguardState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapguardStateInput() {
    return this._flapguardState;
  }

  // flow_control - computed: true, optional: true, required: false
  private _flowControl?: string; 
  public get flowControl() {
    return this.getStringAttribute('flow_control');
  }
  public set flowControl(value: string) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // fortilink_p2p - computed: true, optional: true, required: false
  private _fortilinkP2P?: string; 
  public get fortilinkP2P() {
    return this.getStringAttribute('fortilink_p2p');
  }
  public set fortilinkP2P(value: string) {
    this._fortilinkP2P = value;
  }
  public resetFortilinkP2P() {
    this._fortilinkP2P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkP2PInput() {
    return this._fortilinkP2P;
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

  // l2_learning - computed: true, optional: true, required: false
  private _l2Learning?: string; 
  public get l2Learning() {
    return this.getStringAttribute('l2_learning');
  }
  public set l2Learning(value: string) {
    this._l2Learning = value;
  }
  public resetL2Learning() {
    this._l2Learning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2LearningInput() {
    return this._l2Learning;
  }

  // l2_sa_unknown - computed: true, optional: true, required: false
  private _l2SaUnknown?: string; 
  public get l2SaUnknown() {
    return this.getStringAttribute('l2_sa_unknown');
  }
  public set l2SaUnknown(value: string) {
    this._l2SaUnknown = value;
  }
  public resetL2SaUnknown() {
    this._l2SaUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2SaUnknownInput() {
    return this._l2SaUnknown;
  }

  // link_status - computed: true, optional: true, required: false
  private _linkStatus?: string; 
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }
  public set linkStatus(value: string) {
    this._linkStatus = value;
  }
  public resetLinkStatus() {
    this._linkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStatusInput() {
    return this._linkStatus;
  }

  // lldp_profile - computed: true, optional: true, required: false
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
    this._lldpProfile = value;
  }
  public resetLldpProfile() {
    this._lldpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
  }

  // lldp_status - computed: true, optional: true, required: false
  private _lldpStatus?: string; 
  public get lldpStatus() {
    return this.getStringAttribute('lldp_status');
  }
  public set lldpStatus(value: string) {
    this._lldpStatus = value;
  }
  public resetLldpStatus() {
    this._lldpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpStatusInput() {
    return this._lldpStatus;
  }

  // loopback - computed: true, optional: true, required: false
  private _loopback?: string; 
  public get loopback() {
    return this.getStringAttribute('loopback');
  }
  public set loopback(value: string) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // macsec_pae_mode - computed: true, optional: true, required: false
  private _macsecPaeMode?: string; 
  public get macsecPaeMode() {
    return this.getStringAttribute('macsec_pae_mode');
  }
  public set macsecPaeMode(value: string) {
    this._macsecPaeMode = value;
  }
  public resetMacsecPaeMode() {
    this._macsecPaeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecPaeModeInput() {
    return this._macsecPaeMode;
  }

  // macsec_profile - computed: true, optional: true, required: false
  private _macsecProfile?: string; 
  public get macsecProfile() {
    return this.getStringAttribute('macsec_profile');
  }
  public set macsecProfile(value: string) {
    this._macsecProfile = value;
  }
  public resetMacsecProfile() {
    this._macsecProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecProfileInput() {
    return this._macsecProfile;
  }

  // max_frame_size - computed: true, optional: true, required: false
  private _maxFrameSize?: number; 
  public get maxFrameSize() {
    return this.getNumberAttribute('max_frame_size');
  }
  public set maxFrameSize(value: number) {
    this._maxFrameSize = value;
  }
  public resetMaxFrameSize() {
    this._maxFrameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFrameSizeInput() {
    return this._maxFrameSize;
  }

  // medium - computed: true, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // name - computed: true, optional: true, required: false
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

  // owning_interface - computed: true, optional: true, required: false
  private _owningInterface?: string; 
  public get owningInterface() {
    return this.getStringAttribute('owning_interface');
  }
  public set owningInterface(value: string) {
    this._owningInterface = value;
  }
  public resetOwningInterface() {
    this._owningInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get owningInterfaceInput() {
    return this._owningInterface;
  }

  // pause_meter_rate - computed: true, optional: true, required: false
  private _pauseMeterRate?: number; 
  public get pauseMeterRate() {
    return this.getNumberAttribute('pause_meter_rate');
  }
  public set pauseMeterRate(value: number) {
    this._pauseMeterRate = value;
  }
  public resetPauseMeterRate() {
    this._pauseMeterRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseMeterRateInput() {
    return this._pauseMeterRate;
  }

  // pause_resume - computed: true, optional: true, required: false
  private _pauseResume?: string; 
  public get pauseResume() {
    return this.getStringAttribute('pause_resume');
  }
  public set pauseResume(value: string) {
    this._pauseResume = value;
  }
  public resetPauseResume() {
    this._pauseResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseResumeInput() {
    return this._pauseResume;
  }

  // poe_max_power_mode - computed: true, optional: true, required: false
  private _poeMaxPowerMode?: string; 
  public get poeMaxPowerMode() {
    return this.getStringAttribute('poe_max_power_mode');
  }
  public set poeMaxPowerMode(value: string) {
    this._poeMaxPowerMode = value;
  }
  public resetPoeMaxPowerMode() {
    this._poeMaxPowerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeMaxPowerModeInput() {
    return this._poeMaxPowerMode;
  }

  // poe_port_mode - computed: true, optional: true, required: false
  private _poePortMode?: string; 
  public get poePortMode() {
    return this.getStringAttribute('poe_port_mode');
  }
  public set poePortMode(value: string) {
    this._poePortMode = value;
  }
  public resetPoePortMode() {
    this._poePortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortModeInput() {
    return this._poePortMode;
  }

  // poe_port_priority - computed: true, optional: true, required: false
  private _poePortPriority?: string; 
  public get poePortPriority() {
    return this.getStringAttribute('poe_port_priority');
  }
  public set poePortPriority(value: string) {
    this._poePortPriority = value;
  }
  public resetPoePortPriority() {
    this._poePortPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortPriorityInput() {
    return this._poePortPriority;
  }

  // poe_status - computed: true, optional: true, required: false
  private _poeStatus?: string; 
  public get poeStatus() {
    return this.getStringAttribute('poe_status');
  }
  public set poeStatus(value: string) {
    this._poeStatus = value;
  }
  public resetPoeStatus() {
    this._poeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeStatusInput() {
    return this._poeStatus;
  }

  // port_index - computed: true, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }

  // priority_based_flow_control - computed: true, optional: true, required: false
  private _priorityBasedFlowControl?: string; 
  public get priorityBasedFlowControl() {
    return this.getStringAttribute('priority_based_flow_control');
  }
  public set priorityBasedFlowControl(value: string) {
    this._priorityBasedFlowControl = value;
  }
  public resetPriorityBasedFlowControl() {
    this._priorityBasedFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityBasedFlowControlInput() {
    return this._priorityBasedFlowControl;
  }

  // qsfp_low_power_mode - computed: true, optional: true, required: false
  private _qsfpLowPowerMode?: string; 
  public get qsfpLowPowerMode() {
    return this.getStringAttribute('qsfp_low_power_mode');
  }
  public set qsfpLowPowerMode(value: string) {
    this._qsfpLowPowerMode = value;
  }
  public resetQsfpLowPowerMode() {
    this._qsfpLowPowerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qsfpLowPowerModeInput() {
    return this._qsfpLowPowerMode;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // storm_control_mode - computed: true, optional: true, required: false
  private _stormControlMode?: string; 
  public get stormControlMode() {
    return this.getStringAttribute('storm_control_mode');
  }
  public set stormControlMode(value: string) {
    this._stormControlMode = value;
  }
  public resetStormControlMode() {
    this._stormControlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlModeInput() {
    return this._stormControlMode;
  }

  // storm_control - computed: false, optional: true, required: false
  private _stormControl = new SwitchPhysicalportStormControlOutputReference(this, "storm_control");
  public get stormControl() {
    return this._stormControl;
  }
  public putStormControl(value: SwitchPhysicalportStormControl) {
    this._stormControl.internalValue = value;
  }
  public resetStormControl() {
    this._stormControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlInput() {
    return this._stormControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdp_status: cdktf.stringToTerraform(this._cdpStatus),
      description: cdktf.stringToTerraform(this._description),
      dmi_status: cdktf.stringToTerraform(this._dmiStatus),
      eee_tx_idle_time: cdktf.numberToTerraform(this._eeeTxIdleTime),
      eee_tx_wake_time: cdktf.numberToTerraform(this._eeeTxWakeTime),
      egress_drop_mode: cdktf.stringToTerraform(this._egressDropMode),
      energy_efficient_ethernet: cdktf.stringToTerraform(this._energyEfficientEthernet),
      flap_duration: cdktf.numberToTerraform(this._flapDuration),
      flap_rate: cdktf.numberToTerraform(this._flapRate),
      flap_timeout: cdktf.numberToTerraform(this._flapTimeout),
      flap_trig: cdktf.numberToTerraform(this._flapTrig),
      flapguard: cdktf.stringToTerraform(this._flapguard),
      flapguard_state: cdktf.stringToTerraform(this._flapguardState),
      flow_control: cdktf.stringToTerraform(this._flowControl),
      fortilink_p2p: cdktf.stringToTerraform(this._fortilinkP2P),
      id: cdktf.stringToTerraform(this._id),
      l2_learning: cdktf.stringToTerraform(this._l2Learning),
      l2_sa_unknown: cdktf.stringToTerraform(this._l2SaUnknown),
      link_status: cdktf.stringToTerraform(this._linkStatus),
      lldp_profile: cdktf.stringToTerraform(this._lldpProfile),
      lldp_status: cdktf.stringToTerraform(this._lldpStatus),
      loopback: cdktf.stringToTerraform(this._loopback),
      macsec_pae_mode: cdktf.stringToTerraform(this._macsecPaeMode),
      macsec_profile: cdktf.stringToTerraform(this._macsecProfile),
      max_frame_size: cdktf.numberToTerraform(this._maxFrameSize),
      medium: cdktf.stringToTerraform(this._medium),
      name: cdktf.stringToTerraform(this._name),
      owning_interface: cdktf.stringToTerraform(this._owningInterface),
      pause_meter_rate: cdktf.numberToTerraform(this._pauseMeterRate),
      pause_resume: cdktf.stringToTerraform(this._pauseResume),
      poe_max_power_mode: cdktf.stringToTerraform(this._poeMaxPowerMode),
      poe_port_mode: cdktf.stringToTerraform(this._poePortMode),
      poe_port_priority: cdktf.stringToTerraform(this._poePortPriority),
      poe_status: cdktf.stringToTerraform(this._poeStatus),
      port_index: cdktf.numberToTerraform(this._portIndex),
      priority_based_flow_control: cdktf.stringToTerraform(this._priorityBasedFlowControl),
      qsfp_low_power_mode: cdktf.stringToTerraform(this._qsfpLowPowerMode),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      speed: cdktf.stringToTerraform(this._speed),
      status: cdktf.stringToTerraform(this._status),
      storm_control_mode: cdktf.stringToTerraform(this._stormControlMode),
      storm_control: switchPhysicalportStormControlToTerraform(this._stormControl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdp_status: {
        value: cdktf.stringToHclTerraform(this._cdpStatus),
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
      dmi_status: {
        value: cdktf.stringToHclTerraform(this._dmiStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eee_tx_idle_time: {
        value: cdktf.numberToHclTerraform(this._eeeTxIdleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eee_tx_wake_time: {
        value: cdktf.numberToHclTerraform(this._eeeTxWakeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_drop_mode: {
        value: cdktf.stringToHclTerraform(this._egressDropMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      energy_efficient_ethernet: {
        value: cdktf.stringToHclTerraform(this._energyEfficientEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flap_duration: {
        value: cdktf.numberToHclTerraform(this._flapDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_rate: {
        value: cdktf.numberToHclTerraform(this._flapRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_timeout: {
        value: cdktf.numberToHclTerraform(this._flapTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_trig: {
        value: cdktf.numberToHclTerraform(this._flapTrig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flapguard: {
        value: cdktf.stringToHclTerraform(this._flapguard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flapguard_state: {
        value: cdktf.stringToHclTerraform(this._flapguardState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_control: {
        value: cdktf.stringToHclTerraform(this._flowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink_p2p: {
        value: cdktf.stringToHclTerraform(this._fortilinkP2P),
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
      l2_learning: {
        value: cdktf.stringToHclTerraform(this._l2Learning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_sa_unknown: {
        value: cdktf.stringToHclTerraform(this._l2SaUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_status: {
        value: cdktf.stringToHclTerraform(this._linkStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_profile: {
        value: cdktf.stringToHclTerraform(this._lldpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_status: {
        value: cdktf.stringToHclTerraform(this._lldpStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback: {
        value: cdktf.stringToHclTerraform(this._loopback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_pae_mode: {
        value: cdktf.stringToHclTerraform(this._macsecPaeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_profile: {
        value: cdktf.stringToHclTerraform(this._macsecProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_frame_size: {
        value: cdktf.numberToHclTerraform(this._maxFrameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      medium: {
        value: cdktf.stringToHclTerraform(this._medium),
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
      owning_interface: {
        value: cdktf.stringToHclTerraform(this._owningInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_meter_rate: {
        value: cdktf.numberToHclTerraform(this._pauseMeterRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pause_resume: {
        value: cdktf.stringToHclTerraform(this._pauseResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_max_power_mode: {
        value: cdktf.stringToHclTerraform(this._poeMaxPowerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_port_mode: {
        value: cdktf.stringToHclTerraform(this._poePortMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_port_priority: {
        value: cdktf.stringToHclTerraform(this._poePortPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_status: {
        value: cdktf.stringToHclTerraform(this._poeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_index: {
        value: cdktf.numberToHclTerraform(this._portIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_based_flow_control: {
        value: cdktf.stringToHclTerraform(this._priorityBasedFlowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qsfp_low_power_mode: {
        value: cdktf.stringToHclTerraform(this._qsfpLowPowerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control_mode: {
        value: cdktf.stringToHclTerraform(this._stormControlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control: {
        value: switchPhysicalportStormControlToHclTerraform(this._stormControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchPhysicalportStormControlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
