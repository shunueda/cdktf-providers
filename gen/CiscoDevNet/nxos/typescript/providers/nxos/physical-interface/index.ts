// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PhysicalInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`.
  *   - Default value: `vlan-1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#access_vlan PhysicalInterface#access_vlan}
  */
  readonly accessVlan?: string;
  /**
  * Administrative port state.
  *   - Choices: `up`, `down`
  *   - Default value: `up`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#admin_state PhysicalInterface#admin_state}
  */
  readonly adminState?: string;
  /**
  * Administrative port auto-negotiation.
  *   - Choices: `on`, `off`, `25G`
  *   - Default value: `on`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#auto_negotiation PhysicalInterface#auto_negotiation}
  */
  readonly autoNegotiation?: string;
  /**
  * The bandwidth parameter for a routed interface, port channel, or subinterface.
  *   - Range: `0`-`3200000000`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#bandwidth PhysicalInterface#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * The administrative port delay time.
  *   - Range: `1`-`16777215`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#delay PhysicalInterface#delay}
  */
  readonly delay?: number;
  /**
  * Interface description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#description PhysicalInterface#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#device PhysicalInterface#device}
  */
  readonly device?: string;
  /**
  * Duplex.
  *   - Choices: `auto`, `full`, `half`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#duplex PhysicalInterface#duplex}
  */
  readonly duplex?: string;
  /**
  * FEC mode.
  *   - Choices: `fc-fec`, `rs-fec`, `fec-off`, `auto`, `rs-ieee`, `rs-cons16`, `kp-fec`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#fec_mode PhysicalInterface#fec_mode}
  */
  readonly fecMode?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#interface_id PhysicalInterface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Administrative port layer.
  *   - Choices: `Layer2`, `Layer3`
  *   - Default value: `Layer2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#layer PhysicalInterface#layer}
  */
  readonly layer?: string;
  /**
  * Administrative port link debounce interval.
  *   - Range: `0`-`20000`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#link_debounce_down PhysicalInterface#link_debounce_down}
  */
  readonly linkDebounceDown?: number;
  /**
  * Link Debounce Interval - LinkUp Event.
  *   - Range: `0`-`20000`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#link_debounce_up PhysicalInterface#link_debounce_up}
  */
  readonly linkDebounceUp?: number;
  /**
  * Administrative link logging.
  *   - Choices: `default`, `enable`, `disable`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#link_logging PhysicalInterface#link_logging}
  */
  readonly linkLogging?: string;
  /**
  * The administrative port medium type.
  *   - Choices: `broadcast`, `p2p`
  *   - Default value: `broadcast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#medium PhysicalInterface#medium}
  */
  readonly medium?: string;
  /**
  * Administrative port mode.
  *   - Choices: `access`, `trunk`, `fex-fabric`, `dot1q-tunnel`, `promiscuous`, `host`, `trunk_secondary`, `trunk_promiscuous`, `vntag`
  *   - Default value: `access`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#mode PhysicalInterface#mode}
  */
  readonly mode?: string;
  /**
  * Administrative port MTU.
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#mtu PhysicalInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Native VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`.
  *   - Default value: `vlan-1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#native_vlan PhysicalInterface#native_vlan}
  */
  readonly nativeVlan?: string;
  /**
  * Administrative port speed.
  *   - Choices: `unknown`, `100M`, `1G`, `10G`, `40G`, `auto`, `auto 100M`, `auto 100M 1G`, `100G`, `25G`, `10M`, `50G`, `200G`, `400G`, `2.5G`, `5G`, `auto 2.5G 5G 10G`, `auto 100M 1G 2.5G 5G`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#speed PhysicalInterface#speed}
  */
  readonly speed?: string;
  /**
  * Speed group.
  *   - Choices: `unknown`, `1000`, `10000`, `40000`, `auto`, `25000`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#speed_group PhysicalInterface#speed_group}
  */
  readonly speedGroup?: string;
  /**
  * List of trunk VLANs.
  *   - Default value: `1-4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#trunk_vlans PhysicalInterface#trunk_vlans}
  */
  readonly trunkVlans?: string;
  /**
  * UDE (Uni-Directional Ethernet).
  *   - Choices: `disable`, `send-only`, `receive-only`
  *   - Default value: `disable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#uni_directional_ethernet PhysicalInterface#uni_directional_ethernet}
  */
  readonly uniDirectionalEthernet?: string;
  /**
  * Port User Config Flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#user_configured_flags PhysicalInterface#user_configured_flags}
  */
  readonly userConfiguredFlags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface nxos_physical_interface}
*/
export class PhysicalInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_physical_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PhysicalInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PhysicalInterface to import
  * @param importFromId The id of the existing PhysicalInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PhysicalInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_physical_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/physical_interface nxos_physical_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PhysicalInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: PhysicalInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_physical_interface',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessVlan = config.accessVlan;
    this._adminState = config.adminState;
    this._autoNegotiation = config.autoNegotiation;
    this._bandwidth = config.bandwidth;
    this._delay = config.delay;
    this._description = config.description;
    this._device = config.device;
    this._duplex = config.duplex;
    this._fecMode = config.fecMode;
    this._interfaceId = config.interfaceId;
    this._layer = config.layer;
    this._linkDebounceDown = config.linkDebounceDown;
    this._linkDebounceUp = config.linkDebounceUp;
    this._linkLogging = config.linkLogging;
    this._medium = config.medium;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._nativeVlan = config.nativeVlan;
    this._speed = config.speed;
    this._speedGroup = config.speedGroup;
    this._trunkVlans = config.trunkVlans;
    this._uniDirectionalEthernet = config.uniDirectionalEthernet;
    this._userConfiguredFlags = config.userConfiguredFlags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan - computed: true, optional: true, required: false
  private _accessVlan?: string; 
  public get accessVlan() {
    return this.getStringAttribute('access_vlan');
  }
  public set accessVlan(value: string) {
    this._accessVlan = value;
  }
  public resetAccessVlan() {
    this._accessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanInput() {
    return this._accessVlan;
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // auto_negotiation - computed: true, optional: true, required: false
  private _autoNegotiation?: string; 
  public get autoNegotiation() {
    return this.getStringAttribute('auto_negotiation');
  }
  public set autoNegotiation(value: string) {
    this._autoNegotiation = value;
  }
  public resetAutoNegotiation() {
    this._autoNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiationInput() {
    return this._autoNegotiation;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // duplex - computed: true, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
  }

  // fec_mode - computed: true, optional: true, required: false
  private _fecMode?: string; 
  public get fecMode() {
    return this.getStringAttribute('fec_mode');
  }
  public set fecMode(value: string) {
    this._fecMode = value;
  }
  public resetFecMode() {
    this._fecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecModeInput() {
    return this._fecMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // layer - computed: true, optional: true, required: false
  private _layer?: string; 
  public get layer() {
    return this.getStringAttribute('layer');
  }
  public set layer(value: string) {
    this._layer = value;
  }
  public resetLayer() {
    this._layer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
  }

  // link_debounce_down - computed: true, optional: true, required: false
  private _linkDebounceDown?: number; 
  public get linkDebounceDown() {
    return this.getNumberAttribute('link_debounce_down');
  }
  public set linkDebounceDown(value: number) {
    this._linkDebounceDown = value;
  }
  public resetLinkDebounceDown() {
    this._linkDebounceDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDebounceDownInput() {
    return this._linkDebounceDown;
  }

  // link_debounce_up - computed: true, optional: true, required: false
  private _linkDebounceUp?: number; 
  public get linkDebounceUp() {
    return this.getNumberAttribute('link_debounce_up');
  }
  public set linkDebounceUp(value: number) {
    this._linkDebounceUp = value;
  }
  public resetLinkDebounceUp() {
    this._linkDebounceUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDebounceUpInput() {
    return this._linkDebounceUp;
  }

  // link_logging - computed: true, optional: true, required: false
  private _linkLogging?: string; 
  public get linkLogging() {
    return this.getStringAttribute('link_logging');
  }
  public set linkLogging(value: string) {
    this._linkLogging = value;
  }
  public resetLinkLogging() {
    this._linkLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLoggingInput() {
    return this._linkLogging;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // native_vlan - computed: true, optional: true, required: false
  private _nativeVlan?: string; 
  public get nativeVlan() {
    return this.getStringAttribute('native_vlan');
  }
  public set nativeVlan(value: string) {
    this._nativeVlan = value;
  }
  public resetNativeVlan() {
    this._nativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeVlanInput() {
    return this._nativeVlan;
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

  // speed_group - computed: true, optional: true, required: false
  private _speedGroup?: string; 
  public get speedGroup() {
    return this.getStringAttribute('speed_group');
  }
  public set speedGroup(value: string) {
    this._speedGroup = value;
  }
  public resetSpeedGroup() {
    this._speedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedGroupInput() {
    return this._speedGroup;
  }

  // trunk_vlans - computed: true, optional: true, required: false
  private _trunkVlans?: string; 
  public get trunkVlans() {
    return this.getStringAttribute('trunk_vlans');
  }
  public set trunkVlans(value: string) {
    this._trunkVlans = value;
  }
  public resetTrunkVlans() {
    this._trunkVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkVlansInput() {
    return this._trunkVlans;
  }

  // uni_directional_ethernet - computed: true, optional: true, required: false
  private _uniDirectionalEthernet?: string; 
  public get uniDirectionalEthernet() {
    return this.getStringAttribute('uni_directional_ethernet');
  }
  public set uniDirectionalEthernet(value: string) {
    this._uniDirectionalEthernet = value;
  }
  public resetUniDirectionalEthernet() {
    this._uniDirectionalEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniDirectionalEthernetInput() {
    return this._uniDirectionalEthernet;
  }

  // user_configured_flags - computed: false, optional: true, required: false
  private _userConfiguredFlags?: string; 
  public get userConfiguredFlags() {
    return this.getStringAttribute('user_configured_flags');
  }
  public set userConfiguredFlags(value: string) {
    this._userConfiguredFlags = value;
  }
  public resetUserConfiguredFlags() {
    this._userConfiguredFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConfiguredFlagsInput() {
    return this._userConfiguredFlags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vlan: cdktf.stringToTerraform(this._accessVlan),
      admin_state: cdktf.stringToTerraform(this._adminState),
      auto_negotiation: cdktf.stringToTerraform(this._autoNegotiation),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      delay: cdktf.numberToTerraform(this._delay),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      duplex: cdktf.stringToTerraform(this._duplex),
      fec_mode: cdktf.stringToTerraform(this._fecMode),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      layer: cdktf.stringToTerraform(this._layer),
      link_debounce_down: cdktf.numberToTerraform(this._linkDebounceDown),
      link_debounce_up: cdktf.numberToTerraform(this._linkDebounceUp),
      link_logging: cdktf.stringToTerraform(this._linkLogging),
      medium: cdktf.stringToTerraform(this._medium),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      native_vlan: cdktf.stringToTerraform(this._nativeVlan),
      speed: cdktf.stringToTerraform(this._speed),
      speed_group: cdktf.stringToTerraform(this._speedGroup),
      trunk_vlans: cdktf.stringToTerraform(this._trunkVlans),
      uni_directional_ethernet: cdktf.stringToTerraform(this._uniDirectionalEthernet),
      user_configured_flags: cdktf.stringToTerraform(this._userConfiguredFlags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlan: {
        value: cdktf.stringToHclTerraform(this._accessVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_negotiation: {
        value: cdktf.stringToHclTerraform(this._autoNegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplex: {
        value: cdktf.stringToHclTerraform(this._duplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_mode: {
        value: cdktf.stringToHclTerraform(this._fecMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer: {
        value: cdktf.stringToHclTerraform(this._layer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_debounce_down: {
        value: cdktf.numberToHclTerraform(this._linkDebounceDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_debounce_up: {
        value: cdktf.numberToHclTerraform(this._linkDebounceUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_logging: {
        value: cdktf.stringToHclTerraform(this._linkLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      medium: {
        value: cdktf.stringToHclTerraform(this._medium),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      native_vlan: {
        value: cdktf.stringToHclTerraform(this._nativeVlan),
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
      speed_group: {
        value: cdktf.stringToHclTerraform(this._speedGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_vlans: {
        value: cdktf.stringToHclTerraform(this._trunkVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uni_directional_ethernet: {
        value: cdktf.stringToHclTerraform(this._uniDirectionalEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_configured_flags: {
        value: cdktf.stringToHclTerraform(this._userConfiguredFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
