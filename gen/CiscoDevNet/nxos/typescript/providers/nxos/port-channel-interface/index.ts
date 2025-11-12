// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortChannelInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`.
  *   - Default value: `vlan-1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#access_vlan PortChannelInterface#access_vlan}
  */
  readonly accessVlan?: string;
  /**
  * Administrative port state.
  *   - Choices: `up`, `down`
  *   - Default value: `up`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#admin_state PortChannelInterface#admin_state}
  */
  readonly adminState?: string;
  /**
  * Administrative port auto-negotiation.
  *   - Choices: `on`, `off`, `25G`
  *   - Default value: `on`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#auto_negotiation PortChannelInterface#auto_negotiation}
  */
  readonly autoNegotiation?: string;
  /**
  * The bandwidth parameter for a routed interface, port channel, or subinterface.
  *   - Range: `0`-`3200000000`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#bandwidth PortChannelInterface#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * The administrative port delay time.
  *   - Range: `1`-`16777215`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#delay PortChannelInterface#delay}
  */
  readonly delay?: number;
  /**
  * Interface description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#description PortChannelInterface#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#device PortChannelInterface#device}
  */
  readonly device?: string;
  /**
  * Duplex.
  *   - Choices: `auto`, `full`, `half`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#duplex PortChannelInterface#duplex}
  */
  readonly duplex?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `po1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#interface_id PortChannelInterface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Administrative port layer.
  *   - Choices: `Layer2`, `Layer3`
  *   - Default value: `Layer2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#layer PortChannelInterface#layer}
  */
  readonly layer?: string;
  /**
  * Administrative link logging.
  *   - Choices: `default`, `enable`, `disable`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#link_logging PortChannelInterface#link_logging}
  */
  readonly linkLogging?: string;
  /**
  * Maximum links.
  *   - Range: `1`-`32`
  *   - Default value: `32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#maximum_links PortChannelInterface#maximum_links}
  */
  readonly maximumLinks?: number;
  /**
  * The administrative port medium type.
  *   - Choices: `broadcast`, `p2p`
  *   - Default value: `broadcast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#medium PortChannelInterface#medium}
  */
  readonly medium?: string;
  /**
  * Minimum links.
  *   - Range: `1`-`32`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#minimum_links PortChannelInterface#minimum_links}
  */
  readonly minimumLinks?: number;
  /**
  * Administrative port mode.
  *   - Choices: `access`, `trunk`, `fex-fabric`, `dot1q-tunnel`, `promiscuous`, `host`, `trunk_secondary`, `trunk_promiscuous`, `vntag`
  *   - Default value: `access`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#mode PortChannelInterface#mode}
  */
  readonly mode?: string;
  /**
  * Administrative port MTU.
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#mtu PortChannelInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Native VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`.
  *   - Default value: `vlan-1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#native_vlan PortChannelInterface#native_vlan}
  */
  readonly nativeVlan?: string;
  /**
  * The aggregated interface protocol channel mode.
  *   - Choices: `on`, `static`, `active`, `passive`, `mac-pin`
  *   - Default value: `on`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#port_channel_mode PortChannelInterface#port_channel_mode}
  */
  readonly portChannelMode?: string;
  /**
  * Administrative port speed.
  *   - Choices: `unknown`, `100M`, `1G`, `10G`, `40G`, `auto`, `auto 100M`, `auto 100M 1G`, `100G`, `25G`, `10M`, `50G`, `200G`, `400G`, `2.5G`, `5G`, `auto 2.5G 5G 10G`, `auto 100M 1G 2.5G 5G`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#speed PortChannelInterface#speed}
  */
  readonly speed?: string;
  /**
  * Suspend Individual Port.
  *   - Choices: `enable`, `disable`
  *   - Default value: `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#suspend_individual PortChannelInterface#suspend_individual}
  */
  readonly suspendIndividual?: string;
  /**
  * List of trunk VLANs.
  *   - Default value: `1-4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#trunk_vlans PortChannelInterface#trunk_vlans}
  */
  readonly trunkVlans?: string;
  /**
  * Port User Config Flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#user_configured_flags PortChannelInterface#user_configured_flags}
  */
  readonly userConfiguredFlags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface nxos_port_channel_interface}
*/
export class PortChannelInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_port_channel_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortChannelInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortChannelInterface to import
  * @param importFromId The id of the existing PortChannelInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortChannelInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_port_channel_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/port_channel_interface nxos_port_channel_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortChannelInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: PortChannelInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_port_channel_interface',
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
    this._interfaceId = config.interfaceId;
    this._layer = config.layer;
    this._linkLogging = config.linkLogging;
    this._maximumLinks = config.maximumLinks;
    this._medium = config.medium;
    this._minimumLinks = config.minimumLinks;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._nativeVlan = config.nativeVlan;
    this._portChannelMode = config.portChannelMode;
    this._speed = config.speed;
    this._suspendIndividual = config.suspendIndividual;
    this._trunkVlans = config.trunkVlans;
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

  // maximum_links - computed: true, optional: true, required: false
  private _maximumLinks?: number; 
  public get maximumLinks() {
    return this.getNumberAttribute('maximum_links');
  }
  public set maximumLinks(value: number) {
    this._maximumLinks = value;
  }
  public resetMaximumLinks() {
    this._maximumLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLinksInput() {
    return this._maximumLinks;
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

  // minimum_links - computed: true, optional: true, required: false
  private _minimumLinks?: number; 
  public get minimumLinks() {
    return this.getNumberAttribute('minimum_links');
  }
  public set minimumLinks(value: number) {
    this._minimumLinks = value;
  }
  public resetMinimumLinks() {
    this._minimumLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLinksInput() {
    return this._minimumLinks;
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

  // port_channel_mode - computed: true, optional: true, required: false
  private _portChannelMode?: string; 
  public get portChannelMode() {
    return this.getStringAttribute('port_channel_mode');
  }
  public set portChannelMode(value: string) {
    this._portChannelMode = value;
  }
  public resetPortChannelMode() {
    this._portChannelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelModeInput() {
    return this._portChannelMode;
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

  // suspend_individual - computed: true, optional: true, required: false
  private _suspendIndividual?: string; 
  public get suspendIndividual() {
    return this.getStringAttribute('suspend_individual');
  }
  public set suspendIndividual(value: string) {
    this._suspendIndividual = value;
  }
  public resetSuspendIndividual() {
    this._suspendIndividual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendIndividualInput() {
    return this._suspendIndividual;
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
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      layer: cdktf.stringToTerraform(this._layer),
      link_logging: cdktf.stringToTerraform(this._linkLogging),
      maximum_links: cdktf.numberToTerraform(this._maximumLinks),
      medium: cdktf.stringToTerraform(this._medium),
      minimum_links: cdktf.numberToTerraform(this._minimumLinks),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      native_vlan: cdktf.stringToTerraform(this._nativeVlan),
      port_channel_mode: cdktf.stringToTerraform(this._portChannelMode),
      speed: cdktf.stringToTerraform(this._speed),
      suspend_individual: cdktf.stringToTerraform(this._suspendIndividual),
      trunk_vlans: cdktf.stringToTerraform(this._trunkVlans),
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
      link_logging: {
        value: cdktf.stringToHclTerraform(this._linkLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_links: {
        value: cdktf.numberToHclTerraform(this._maximumLinks),
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
      minimum_links: {
        value: cdktf.numberToHclTerraform(this._minimumLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      port_channel_mode: {
        value: cdktf.stringToHclTerraform(this._portChannelMode),
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
      suspend_individual: {
        value: cdktf.stringToHclTerraform(this._suspendIndividual),
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
