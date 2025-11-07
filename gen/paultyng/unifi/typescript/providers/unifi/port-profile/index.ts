// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable link auto negotiation for the port profile. When set to `true` this overrides `speed`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#autoneg PortProfile#autoneg}
  */
  readonly autoneg?: boolean | cdktf.IResolvable;
  /**
  * The type of 802.1X control to use. Can be `auto`, `force_authorized`, `force_unauthorized`, `mac_based` or `multi_host`. Defaults to `force_authorized`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#dot1x_ctrl PortProfile#dot1x_ctrl}
  */
  readonly dot1XCtrl?: string;
  /**
  * The timeout, in seconds, to use when using the MAC Based 802.1X control. Can be between 0 and 65535 Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#dot1x_idle_timeout PortProfile#dot1x_idle_timeout}
  */
  readonly dot1XIdleTimeout?: number;
  /**
  * The egress rate limit, in kpbs, for the port profile. Can be between `64` and `9999999`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#egress_rate_limit_kbps PortProfile#egress_rate_limit_kbps}
  */
  readonly egressRateLimitKbps?: number;
  /**
  * Enable egress rate limiting for the port profile. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#egress_rate_limit_kbps_enabled PortProfile#egress_rate_limit_kbps_enabled}
  */
  readonly egressRateLimitKbpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The type forwarding to use for the port profile. Can be `all`, `native`, `customize` or `disabled`. Defaults to `native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#forward PortProfile#forward}
  */
  readonly forward?: string;
  /**
  * Enable full duplex for the port profile. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#full_duplex PortProfile#full_duplex}
  */
  readonly fullDuplex?: boolean | cdktf.IResolvable;
  /**
  * Enable port isolation for the port profile. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#isolation PortProfile#isolation}
  */
  readonly isolation?: boolean | cdktf.IResolvable;
  /**
  * Enable LLDP-MED for the port profile. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#lldpmed_enabled PortProfile#lldpmed_enabled}
  */
  readonly lldpmedEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable LLDP-MED topology change notifications for the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#lldpmed_notify_enabled PortProfile#lldpmed_notify_enabled}
  */
  readonly lldpmedNotifyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#name PortProfile#name}
  */
  readonly name?: string;
  /**
  * The ID of network to use as the main network on the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#native_networkconf_id PortProfile#native_networkconf_id}
  */
  readonly nativeNetworkconfId?: string;
  /**
  * The operation mode for the port profile. Can only be `switch` Defaults to `switch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#op_mode PortProfile#op_mode}
  */
  readonly opMode?: string;
  /**
  * The POE mode for the port profile. Can be one of `auto`, `passv24`, `passthrough` or `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#poe_mode PortProfile#poe_mode}
  */
  readonly poeMode?: string;
  /**
  * Enable port security for the port profile. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#port_security_enabled PortProfile#port_security_enabled}
  */
  readonly portSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * The MAC addresses associated with the port security for the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#port_security_mac_address PortProfile#port_security_mac_address}
  */
  readonly portSecurityMacAddress?: string[];
  /**
  * The priority queue 1 level for the port profile. Can be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#priority_queue1_level PortProfile#priority_queue1_level}
  */
  readonly priorityQueue1Level?: number;
  /**
  * The priority queue 2 level for the port profile. Can be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#priority_queue2_level PortProfile#priority_queue2_level}
  */
  readonly priorityQueue2Level?: number;
  /**
  * The priority queue 3 level for the port profile. Can be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#priority_queue3_level PortProfile#priority_queue3_level}
  */
  readonly priorityQueue3Level?: number;
  /**
  * The priority queue 4 level for the port profile. Can be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#priority_queue4_level PortProfile#priority_queue4_level}
  */
  readonly priorityQueue4Level?: number;
  /**
  * The name of the site to associate the port profile with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#site PortProfile#site}
  */
  readonly site?: string;
  /**
  * The link speed to set for the port profile. Can be one of `10`, `100`, `1000`, `2500`, `5000`, `10000`, `20000`, `25000`, `40000`, `50000` or `100000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#speed PortProfile#speed}
  */
  readonly speed?: number;
  /**
  * Enable broadcast Storm Control for the port profile. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_bcast_enabled PortProfile#stormctrl_bcast_enabled}
  */
  readonly stormctrlBcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The broadcast Storm Control level for the port profile. Can be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_bcast_level PortProfile#stormctrl_bcast_level}
  */
  readonly stormctrlBcastLevel?: number;
  /**
  * The broadcast Storm Control rate for the port profile. Can be between 0 and 14880000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_bcast_rate PortProfile#stormctrl_bcast_rate}
  */
  readonly stormctrlBcastRate?: number;
  /**
  * Enable multicast Storm Control for the port profile. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_mcast_enabled PortProfile#stormctrl_mcast_enabled}
  */
  readonly stormctrlMcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The multicast Storm Control level for the port profile. Can be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_mcast_level PortProfile#stormctrl_mcast_level}
  */
  readonly stormctrlMcastLevel?: number;
  /**
  * The multicast Storm Control rate for the port profile. Can be between 0 and 14880000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_mcast_rate PortProfile#stormctrl_mcast_rate}
  */
  readonly stormctrlMcastRate?: number;
  /**
  * The type of Storm Control to use for the port profile. Can be one of `level` or `rate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_type PortProfile#stormctrl_type}
  */
  readonly stormctrlType?: string;
  /**
  * Enable unknown unicast Storm Control for the port profile. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_ucast_enabled PortProfile#stormctrl_ucast_enabled}
  */
  readonly stormctrlUcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The unknown unicast Storm Control level for the port profile. Can be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_ucast_level PortProfile#stormctrl_ucast_level}
  */
  readonly stormctrlUcastLevel?: number;
  /**
  * The unknown unicast Storm Control rate for the port profile. Can be between 0 and 14880000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stormctrl_ucast_rate PortProfile#stormctrl_ucast_rate}
  */
  readonly stormctrlUcastRate?: number;
  /**
  * Enable spanning tree protocol on the port profile. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#stp_port_mode PortProfile#stp_port_mode}
  */
  readonly stpPortMode?: boolean | cdktf.IResolvable;
  /**
  * The IDs of networks to tag traffic with for the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#tagged_networkconf_ids PortProfile#tagged_networkconf_ids}
  */
  readonly taggedNetworkconfIds?: string[];
  /**
  * The ID of network to use as the voice network on the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#voice_networkconf_id PortProfile#voice_networkconf_id}
  */
  readonly voiceNetworkconfId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile unifi_port_profile}
*/
export class PortProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_port_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortProfile to import
  * @param importFromId The id of the existing PortProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_port_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/port_profile unifi_port_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PortProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unifi_port_profile',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoneg = config.autoneg;
    this._dot1XCtrl = config.dot1XCtrl;
    this._dot1XIdleTimeout = config.dot1XIdleTimeout;
    this._egressRateLimitKbps = config.egressRateLimitKbps;
    this._egressRateLimitKbpsEnabled = config.egressRateLimitKbpsEnabled;
    this._forward = config.forward;
    this._fullDuplex = config.fullDuplex;
    this._isolation = config.isolation;
    this._lldpmedEnabled = config.lldpmedEnabled;
    this._lldpmedNotifyEnabled = config.lldpmedNotifyEnabled;
    this._name = config.name;
    this._nativeNetworkconfId = config.nativeNetworkconfId;
    this._opMode = config.opMode;
    this._poeMode = config.poeMode;
    this._portSecurityEnabled = config.portSecurityEnabled;
    this._portSecurityMacAddress = config.portSecurityMacAddress;
    this._priorityQueue1Level = config.priorityQueue1Level;
    this._priorityQueue2Level = config.priorityQueue2Level;
    this._priorityQueue3Level = config.priorityQueue3Level;
    this._priorityQueue4Level = config.priorityQueue4Level;
    this._site = config.site;
    this._speed = config.speed;
    this._stormctrlBcastEnabled = config.stormctrlBcastEnabled;
    this._stormctrlBcastLevel = config.stormctrlBcastLevel;
    this._stormctrlBcastRate = config.stormctrlBcastRate;
    this._stormctrlMcastEnabled = config.stormctrlMcastEnabled;
    this._stormctrlMcastLevel = config.stormctrlMcastLevel;
    this._stormctrlMcastRate = config.stormctrlMcastRate;
    this._stormctrlType = config.stormctrlType;
    this._stormctrlUcastEnabled = config.stormctrlUcastEnabled;
    this._stormctrlUcastLevel = config.stormctrlUcastLevel;
    this._stormctrlUcastRate = config.stormctrlUcastRate;
    this._stpPortMode = config.stpPortMode;
    this._taggedNetworkconfIds = config.taggedNetworkconfIds;
    this._voiceNetworkconfId = config.voiceNetworkconfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoneg - computed: false, optional: true, required: false
  private _autoneg?: boolean | cdktf.IResolvable; 
  public get autoneg() {
    return this.getBooleanAttribute('autoneg');
  }
  public set autoneg(value: boolean | cdktf.IResolvable) {
    this._autoneg = value;
  }
  public resetAutoneg() {
    this._autoneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonegInput() {
    return this._autoneg;
  }

  // dot1x_ctrl - computed: false, optional: true, required: false
  private _dot1XCtrl?: string; 
  public get dot1XCtrl() {
    return this.getStringAttribute('dot1x_ctrl');
  }
  public set dot1XCtrl(value: string) {
    this._dot1XCtrl = value;
  }
  public resetDot1XCtrl() {
    this._dot1XCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XCtrlInput() {
    return this._dot1XCtrl;
  }

  // dot1x_idle_timeout - computed: false, optional: true, required: false
  private _dot1XIdleTimeout?: number; 
  public get dot1XIdleTimeout() {
    return this.getNumberAttribute('dot1x_idle_timeout');
  }
  public set dot1XIdleTimeout(value: number) {
    this._dot1XIdleTimeout = value;
  }
  public resetDot1XIdleTimeout() {
    this._dot1XIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XIdleTimeoutInput() {
    return this._dot1XIdleTimeout;
  }

  // egress_rate_limit_kbps - computed: false, optional: true, required: false
  private _egressRateLimitKbps?: number; 
  public get egressRateLimitKbps() {
    return this.getNumberAttribute('egress_rate_limit_kbps');
  }
  public set egressRateLimitKbps(value: number) {
    this._egressRateLimitKbps = value;
  }
  public resetEgressRateLimitKbps() {
    this._egressRateLimitKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRateLimitKbpsInput() {
    return this._egressRateLimitKbps;
  }

  // egress_rate_limit_kbps_enabled - computed: false, optional: true, required: false
  private _egressRateLimitKbpsEnabled?: boolean | cdktf.IResolvable; 
  public get egressRateLimitKbpsEnabled() {
    return this.getBooleanAttribute('egress_rate_limit_kbps_enabled');
  }
  public set egressRateLimitKbpsEnabled(value: boolean | cdktf.IResolvable) {
    this._egressRateLimitKbpsEnabled = value;
  }
  public resetEgressRateLimitKbpsEnabled() {
    this._egressRateLimitKbpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRateLimitKbpsEnabledInput() {
    return this._egressRateLimitKbpsEnabled;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // full_duplex - computed: false, optional: true, required: false
  private _fullDuplex?: boolean | cdktf.IResolvable; 
  public get fullDuplex() {
    return this.getBooleanAttribute('full_duplex');
  }
  public set fullDuplex(value: boolean | cdktf.IResolvable) {
    this._fullDuplex = value;
  }
  public resetFullDuplex() {
    this._fullDuplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDuplexInput() {
    return this._fullDuplex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // isolation - computed: false, optional: true, required: false
  private _isolation?: boolean | cdktf.IResolvable; 
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }
  public set isolation(value: boolean | cdktf.IResolvable) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation;
  }

  // lldpmed_enabled - computed: false, optional: true, required: false
  private _lldpmedEnabled?: boolean | cdktf.IResolvable; 
  public get lldpmedEnabled() {
    return this.getBooleanAttribute('lldpmed_enabled');
  }
  public set lldpmedEnabled(value: boolean | cdktf.IResolvable) {
    this._lldpmedEnabled = value;
  }
  public resetLldpmedEnabled() {
    this._lldpmedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpmedEnabledInput() {
    return this._lldpmedEnabled;
  }

  // lldpmed_notify_enabled - computed: false, optional: true, required: false
  private _lldpmedNotifyEnabled?: boolean | cdktf.IResolvable; 
  public get lldpmedNotifyEnabled() {
    return this.getBooleanAttribute('lldpmed_notify_enabled');
  }
  public set lldpmedNotifyEnabled(value: boolean | cdktf.IResolvable) {
    this._lldpmedNotifyEnabled = value;
  }
  public resetLldpmedNotifyEnabled() {
    this._lldpmedNotifyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpmedNotifyEnabledInput() {
    return this._lldpmedNotifyEnabled;
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

  // native_networkconf_id - computed: false, optional: true, required: false
  private _nativeNetworkconfId?: string; 
  public get nativeNetworkconfId() {
    return this.getStringAttribute('native_networkconf_id');
  }
  public set nativeNetworkconfId(value: string) {
    this._nativeNetworkconfId = value;
  }
  public resetNativeNetworkconfId() {
    this._nativeNetworkconfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeNetworkconfIdInput() {
    return this._nativeNetworkconfId;
  }

  // op_mode - computed: false, optional: true, required: false
  private _opMode?: string; 
  public get opMode() {
    return this.getStringAttribute('op_mode');
  }
  public set opMode(value: string) {
    this._opMode = value;
  }
  public resetOpMode() {
    this._opMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opModeInput() {
    return this._opMode;
  }

  // poe_mode - computed: false, optional: true, required: false
  private _poeMode?: string; 
  public get poeMode() {
    return this.getStringAttribute('poe_mode');
  }
  public set poeMode(value: string) {
    this._poeMode = value;
  }
  public resetPoeMode() {
    this._poeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeModeInput() {
    return this._poeMode;
  }

  // port_security_enabled - computed: false, optional: true, required: false
  private _portSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get portSecurityEnabled() {
    return this.getBooleanAttribute('port_security_enabled');
  }
  public set portSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._portSecurityEnabled = value;
  }
  public resetPortSecurityEnabled() {
    this._portSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityEnabledInput() {
    return this._portSecurityEnabled;
  }

  // port_security_mac_address - computed: false, optional: true, required: false
  private _portSecurityMacAddress?: string[]; 
  public get portSecurityMacAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('port_security_mac_address'));
  }
  public set portSecurityMacAddress(value: string[]) {
    this._portSecurityMacAddress = value;
  }
  public resetPortSecurityMacAddress() {
    this._portSecurityMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityMacAddressInput() {
    return this._portSecurityMacAddress;
  }

  // priority_queue1_level - computed: false, optional: true, required: false
  private _priorityQueue1Level?: number; 
  public get priorityQueue1Level() {
    return this.getNumberAttribute('priority_queue1_level');
  }
  public set priorityQueue1Level(value: number) {
    this._priorityQueue1Level = value;
  }
  public resetPriorityQueue1Level() {
    this._priorityQueue1Level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityQueue1LevelInput() {
    return this._priorityQueue1Level;
  }

  // priority_queue2_level - computed: false, optional: true, required: false
  private _priorityQueue2Level?: number; 
  public get priorityQueue2Level() {
    return this.getNumberAttribute('priority_queue2_level');
  }
  public set priorityQueue2Level(value: number) {
    this._priorityQueue2Level = value;
  }
  public resetPriorityQueue2Level() {
    this._priorityQueue2Level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityQueue2LevelInput() {
    return this._priorityQueue2Level;
  }

  // priority_queue3_level - computed: false, optional: true, required: false
  private _priorityQueue3Level?: number; 
  public get priorityQueue3Level() {
    return this.getNumberAttribute('priority_queue3_level');
  }
  public set priorityQueue3Level(value: number) {
    this._priorityQueue3Level = value;
  }
  public resetPriorityQueue3Level() {
    this._priorityQueue3Level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityQueue3LevelInput() {
    return this._priorityQueue3Level;
  }

  // priority_queue4_level - computed: false, optional: true, required: false
  private _priorityQueue4Level?: number; 
  public get priorityQueue4Level() {
    return this.getNumberAttribute('priority_queue4_level');
  }
  public set priorityQueue4Level(value: number) {
    this._priorityQueue4Level = value;
  }
  public resetPriorityQueue4Level() {
    this._priorityQueue4Level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityQueue4LevelInput() {
    return this._priorityQueue4Level;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: number; 
  public get speed() {
    return this.getNumberAttribute('speed');
  }
  public set speed(value: number) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // stormctrl_bcast_enabled - computed: false, optional: true, required: false
  private _stormctrlBcastEnabled?: boolean | cdktf.IResolvable; 
  public get stormctrlBcastEnabled() {
    return this.getBooleanAttribute('stormctrl_bcast_enabled');
  }
  public set stormctrlBcastEnabled(value: boolean | cdktf.IResolvable) {
    this._stormctrlBcastEnabled = value;
  }
  public resetStormctrlBcastEnabled() {
    this._stormctrlBcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlBcastEnabledInput() {
    return this._stormctrlBcastEnabled;
  }

  // stormctrl_bcast_level - computed: false, optional: true, required: false
  private _stormctrlBcastLevel?: number; 
  public get stormctrlBcastLevel() {
    return this.getNumberAttribute('stormctrl_bcast_level');
  }
  public set stormctrlBcastLevel(value: number) {
    this._stormctrlBcastLevel = value;
  }
  public resetStormctrlBcastLevel() {
    this._stormctrlBcastLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlBcastLevelInput() {
    return this._stormctrlBcastLevel;
  }

  // stormctrl_bcast_rate - computed: false, optional: true, required: false
  private _stormctrlBcastRate?: number; 
  public get stormctrlBcastRate() {
    return this.getNumberAttribute('stormctrl_bcast_rate');
  }
  public set stormctrlBcastRate(value: number) {
    this._stormctrlBcastRate = value;
  }
  public resetStormctrlBcastRate() {
    this._stormctrlBcastRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlBcastRateInput() {
    return this._stormctrlBcastRate;
  }

  // stormctrl_mcast_enabled - computed: false, optional: true, required: false
  private _stormctrlMcastEnabled?: boolean | cdktf.IResolvable; 
  public get stormctrlMcastEnabled() {
    return this.getBooleanAttribute('stormctrl_mcast_enabled');
  }
  public set stormctrlMcastEnabled(value: boolean | cdktf.IResolvable) {
    this._stormctrlMcastEnabled = value;
  }
  public resetStormctrlMcastEnabled() {
    this._stormctrlMcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlMcastEnabledInput() {
    return this._stormctrlMcastEnabled;
  }

  // stormctrl_mcast_level - computed: false, optional: true, required: false
  private _stormctrlMcastLevel?: number; 
  public get stormctrlMcastLevel() {
    return this.getNumberAttribute('stormctrl_mcast_level');
  }
  public set stormctrlMcastLevel(value: number) {
    this._stormctrlMcastLevel = value;
  }
  public resetStormctrlMcastLevel() {
    this._stormctrlMcastLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlMcastLevelInput() {
    return this._stormctrlMcastLevel;
  }

  // stormctrl_mcast_rate - computed: false, optional: true, required: false
  private _stormctrlMcastRate?: number; 
  public get stormctrlMcastRate() {
    return this.getNumberAttribute('stormctrl_mcast_rate');
  }
  public set stormctrlMcastRate(value: number) {
    this._stormctrlMcastRate = value;
  }
  public resetStormctrlMcastRate() {
    this._stormctrlMcastRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlMcastRateInput() {
    return this._stormctrlMcastRate;
  }

  // stormctrl_type - computed: false, optional: true, required: false
  private _stormctrlType?: string; 
  public get stormctrlType() {
    return this.getStringAttribute('stormctrl_type');
  }
  public set stormctrlType(value: string) {
    this._stormctrlType = value;
  }
  public resetStormctrlType() {
    this._stormctrlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlTypeInput() {
    return this._stormctrlType;
  }

  // stormctrl_ucast_enabled - computed: false, optional: true, required: false
  private _stormctrlUcastEnabled?: boolean | cdktf.IResolvable; 
  public get stormctrlUcastEnabled() {
    return this.getBooleanAttribute('stormctrl_ucast_enabled');
  }
  public set stormctrlUcastEnabled(value: boolean | cdktf.IResolvable) {
    this._stormctrlUcastEnabled = value;
  }
  public resetStormctrlUcastEnabled() {
    this._stormctrlUcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlUcastEnabledInput() {
    return this._stormctrlUcastEnabled;
  }

  // stormctrl_ucast_level - computed: false, optional: true, required: false
  private _stormctrlUcastLevel?: number; 
  public get stormctrlUcastLevel() {
    return this.getNumberAttribute('stormctrl_ucast_level');
  }
  public set stormctrlUcastLevel(value: number) {
    this._stormctrlUcastLevel = value;
  }
  public resetStormctrlUcastLevel() {
    this._stormctrlUcastLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlUcastLevelInput() {
    return this._stormctrlUcastLevel;
  }

  // stormctrl_ucast_rate - computed: false, optional: true, required: false
  private _stormctrlUcastRate?: number; 
  public get stormctrlUcastRate() {
    return this.getNumberAttribute('stormctrl_ucast_rate');
  }
  public set stormctrlUcastRate(value: number) {
    this._stormctrlUcastRate = value;
  }
  public resetStormctrlUcastRate() {
    this._stormctrlUcastRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormctrlUcastRateInput() {
    return this._stormctrlUcastRate;
  }

  // stp_port_mode - computed: false, optional: true, required: false
  private _stpPortMode?: boolean | cdktf.IResolvable; 
  public get stpPortMode() {
    return this.getBooleanAttribute('stp_port_mode');
  }
  public set stpPortMode(value: boolean | cdktf.IResolvable) {
    this._stpPortMode = value;
  }
  public resetStpPortMode() {
    this._stpPortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpPortModeInput() {
    return this._stpPortMode;
  }

  // tagged_networkconf_ids - computed: false, optional: true, required: false
  private _taggedNetworkconfIds?: string[]; 
  public get taggedNetworkconfIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tagged_networkconf_ids'));
  }
  public set taggedNetworkconfIds(value: string[]) {
    this._taggedNetworkconfIds = value;
  }
  public resetTaggedNetworkconfIds() {
    this._taggedNetworkconfIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedNetworkconfIdsInput() {
    return this._taggedNetworkconfIds;
  }

  // voice_networkconf_id - computed: false, optional: true, required: false
  private _voiceNetworkconfId?: string; 
  public get voiceNetworkconfId() {
    return this.getStringAttribute('voice_networkconf_id');
  }
  public set voiceNetworkconfId(value: string) {
    this._voiceNetworkconfId = value;
  }
  public resetVoiceNetworkconfId() {
    this._voiceNetworkconfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceNetworkconfIdInput() {
    return this._voiceNetworkconfId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoneg: cdktf.booleanToTerraform(this._autoneg),
      dot1x_ctrl: cdktf.stringToTerraform(this._dot1XCtrl),
      dot1x_idle_timeout: cdktf.numberToTerraform(this._dot1XIdleTimeout),
      egress_rate_limit_kbps: cdktf.numberToTerraform(this._egressRateLimitKbps),
      egress_rate_limit_kbps_enabled: cdktf.booleanToTerraform(this._egressRateLimitKbpsEnabled),
      forward: cdktf.stringToTerraform(this._forward),
      full_duplex: cdktf.booleanToTerraform(this._fullDuplex),
      isolation: cdktf.booleanToTerraform(this._isolation),
      lldpmed_enabled: cdktf.booleanToTerraform(this._lldpmedEnabled),
      lldpmed_notify_enabled: cdktf.booleanToTerraform(this._lldpmedNotifyEnabled),
      name: cdktf.stringToTerraform(this._name),
      native_networkconf_id: cdktf.stringToTerraform(this._nativeNetworkconfId),
      op_mode: cdktf.stringToTerraform(this._opMode),
      poe_mode: cdktf.stringToTerraform(this._poeMode),
      port_security_enabled: cdktf.booleanToTerraform(this._portSecurityEnabled),
      port_security_mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portSecurityMacAddress),
      priority_queue1_level: cdktf.numberToTerraform(this._priorityQueue1Level),
      priority_queue2_level: cdktf.numberToTerraform(this._priorityQueue2Level),
      priority_queue3_level: cdktf.numberToTerraform(this._priorityQueue3Level),
      priority_queue4_level: cdktf.numberToTerraform(this._priorityQueue4Level),
      site: cdktf.stringToTerraform(this._site),
      speed: cdktf.numberToTerraform(this._speed),
      stormctrl_bcast_enabled: cdktf.booleanToTerraform(this._stormctrlBcastEnabled),
      stormctrl_bcast_level: cdktf.numberToTerraform(this._stormctrlBcastLevel),
      stormctrl_bcast_rate: cdktf.numberToTerraform(this._stormctrlBcastRate),
      stormctrl_mcast_enabled: cdktf.booleanToTerraform(this._stormctrlMcastEnabled),
      stormctrl_mcast_level: cdktf.numberToTerraform(this._stormctrlMcastLevel),
      stormctrl_mcast_rate: cdktf.numberToTerraform(this._stormctrlMcastRate),
      stormctrl_type: cdktf.stringToTerraform(this._stormctrlType),
      stormctrl_ucast_enabled: cdktf.booleanToTerraform(this._stormctrlUcastEnabled),
      stormctrl_ucast_level: cdktf.numberToTerraform(this._stormctrlUcastLevel),
      stormctrl_ucast_rate: cdktf.numberToTerraform(this._stormctrlUcastRate),
      stp_port_mode: cdktf.booleanToTerraform(this._stpPortMode),
      tagged_networkconf_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taggedNetworkconfIds),
      voice_networkconf_id: cdktf.stringToTerraform(this._voiceNetworkconfId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoneg: {
        value: cdktf.booleanToHclTerraform(this._autoneg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_ctrl: {
        value: cdktf.stringToHclTerraform(this._dot1XCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._dot1XIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_rate_limit_kbps: {
        value: cdktf.numberToHclTerraform(this._egressRateLimitKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_rate_limit_kbps_enabled: {
        value: cdktf.booleanToHclTerraform(this._egressRateLimitKbpsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_duplex: {
        value: cdktf.booleanToHclTerraform(this._fullDuplex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isolation: {
        value: cdktf.booleanToHclTerraform(this._isolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lldpmed_enabled: {
        value: cdktf.booleanToHclTerraform(this._lldpmedEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lldpmed_notify_enabled: {
        value: cdktf.booleanToHclTerraform(this._lldpmedNotifyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_networkconf_id: {
        value: cdktf.stringToHclTerraform(this._nativeNetworkconfId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      op_mode: {
        value: cdktf.stringToHclTerraform(this._opMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_mode: {
        value: cdktf.stringToHclTerraform(this._poeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_security_enabled: {
        value: cdktf.booleanToHclTerraform(this._portSecurityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_security_mac_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portSecurityMacAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority_queue1_level: {
        value: cdktf.numberToHclTerraform(this._priorityQueue1Level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_queue2_level: {
        value: cdktf.numberToHclTerraform(this._priorityQueue2Level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_queue3_level: {
        value: cdktf.numberToHclTerraform(this._priorityQueue3Level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_queue4_level: {
        value: cdktf.numberToHclTerraform(this._priorityQueue4Level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.numberToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stormctrl_bcast_enabled: {
        value: cdktf.booleanToHclTerraform(this._stormctrlBcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stormctrl_bcast_level: {
        value: cdktf.numberToHclTerraform(this._stormctrlBcastLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stormctrl_bcast_rate: {
        value: cdktf.numberToHclTerraform(this._stormctrlBcastRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stormctrl_mcast_enabled: {
        value: cdktf.booleanToHclTerraform(this._stormctrlMcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stormctrl_mcast_level: {
        value: cdktf.numberToHclTerraform(this._stormctrlMcastLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stormctrl_mcast_rate: {
        value: cdktf.numberToHclTerraform(this._stormctrlMcastRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stormctrl_type: {
        value: cdktf.stringToHclTerraform(this._stormctrlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stormctrl_ucast_enabled: {
        value: cdktf.booleanToHclTerraform(this._stormctrlUcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stormctrl_ucast_level: {
        value: cdktf.numberToHclTerraform(this._stormctrlUcastLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stormctrl_ucast_rate: {
        value: cdktf.numberToHclTerraform(this._stormctrlUcastRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_port_mode: {
        value: cdktf.booleanToHclTerraform(this._stpPortMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tagged_networkconf_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taggedNetworkconfIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      voice_networkconf_id: {
        value: cdktf.stringToHclTerraform(this._voiceNetworkconfId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
