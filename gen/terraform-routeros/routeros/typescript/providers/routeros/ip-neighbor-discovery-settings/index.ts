// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNeighborDiscoverySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#___path___ IpNeighborDiscoverySettings#___path___}
  */
  readonly path?: string;
  /**
  * Interface list on which members the discovery protocol will run on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#discover_interface_list IpNeighborDiscoverySettings#discover_interface_list}
  */
  readonly discoverInterfaceList?: string;
  /**
  * An option to adjust the frequency at which neighbor discovery packets are transmitted. The setting is available since RouterOS version 7.16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#discover_interval IpNeighborDiscoverySettings#discover_interval}
  */
  readonly discoverInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#id IpNeighborDiscoverySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to send Data Center Bridging Capabilities Exchange Protocol (DCBX) TLVs, which allows to communicate switch QoS settings and capabilities with other neighboring devices using LLDP. **Only applies to CRS3xx, CRS5xx, CCR2116 and CCR2216 devices.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#lldp_dcbx IpNeighborDiscoverySettings#lldp_dcbx}
  */
  readonly lldpDcbx?: boolean | cdktf.IResolvable;
  /**
  * Whether to send MAC/PHY Configuration/Status TLV in LLDP, which indicates the interface capabilities, current setting of the duplex status, bit rate, and auto-negotiation. Only applies to the Ethernet interfaces. While TLV is optional in LLDP, it is mandatory when sending LLDP-MED, meaning this TLV will be included when necessary even though the property is configured as disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#lldp_mac_phy_config IpNeighborDiscoverySettings#lldp_mac_phy_config}
  */
  readonly lldpMacPhyConfig?: boolean | cdktf.IResolvable;
  /**
  * Whether to send Maximum Frame Size TLV in LLDP, which indicates the maximum frame size capability of the interface in bytes (`l2mtu + 18`). Only applies to the Ethernet interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#lldp_max_frame_size IpNeighborDiscoverySettings#lldp_max_frame_size}
  */
  readonly lldpMaxFrameSize?: boolean | cdktf.IResolvable;
  /**
  * Advertised VLAN ID for LLDP-MED Network Policy TLV. This allows assigning a VLAN ID for LLDP-MED capable devices, such as VoIP phones. The TLV will only be added to interfaces where LLDP-MED capable devices are discovered. Other TLV values are predefined and cannot be changed:
  *   * Application Type - Voice
  *   * VLAN Type - Tagged
  *   * L2 Priority - 0
  *   * DSCP Priority - 0
  * When used together with the bridge interface, the (R/M)STP protocol should be enabled with protocol-mode setting.
  * Additionally, other neighbor discovery protocols (e.g. CDP) should be excluded using protocol setting to avoid LLDP-MED misconfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#lldp_med_net_policy_vlan IpNeighborDiscoverySettings#lldp_med_net_policy_vlan}
  */
  readonly lldpMedNetPolicyVlan?: string;
  /**
  * Two specific TLVs facilitate Power over Ethernet (PoE) management between Power Sourcing Equipment (PSE) and Powered Devices (PD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#lldp_poe_power IpNeighborDiscoverySettings#lldp_poe_power}
  */
  readonly lldpPoePower?: boolean | cdktf.IResolvable;
  /**
  * An option whether to send IEEE 802.1 Organizationally Specific TLVs in LLDP related to VLANs. The setting is available since RouterOS version 7.16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#lldp_vlan_info IpNeighborDiscoverySettings#lldp_vlan_info}
  */
  readonly lldpVlanInfo?: boolean | cdktf.IResolvable;
  /**
  * Selects the neighbor discovery packet sending and receiving mode. The setting is available since RouterOS version 7.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#mode IpNeighborDiscoverySettings#mode}
  */
  readonly mode?: string;
  /**
  * List of used discovery protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#protocol IpNeighborDiscoverySettings#protocol}
  */
  readonly protocol?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings routeros_ip_neighbor_discovery_settings}
*/
export class IpNeighborDiscoverySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_neighbor_discovery_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNeighborDiscoverySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNeighborDiscoverySettings to import
  * @param importFromId The id of the existing IpNeighborDiscoverySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNeighborDiscoverySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_neighbor_discovery_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_neighbor_discovery_settings routeros_ip_neighbor_discovery_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNeighborDiscoverySettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpNeighborDiscoverySettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_neighbor_discovery_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._discoverInterfaceList = config.discoverInterfaceList;
    this._discoverInterval = config.discoverInterval;
    this._id = config.id;
    this._lldpDcbx = config.lldpDcbx;
    this._lldpMacPhyConfig = config.lldpMacPhyConfig;
    this._lldpMaxFrameSize = config.lldpMaxFrameSize;
    this._lldpMedNetPolicyVlan = config.lldpMedNetPolicyVlan;
    this._lldpPoePower = config.lldpPoePower;
    this._lldpVlanInfo = config.lldpVlanInfo;
    this._mode = config.mode;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // discover_interface_list - computed: false, optional: true, required: false
  private _discoverInterfaceList?: string; 
  public get discoverInterfaceList() {
    return this.getStringAttribute('discover_interface_list');
  }
  public set discoverInterfaceList(value: string) {
    this._discoverInterfaceList = value;
  }
  public resetDiscoverInterfaceList() {
    this._discoverInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverInterfaceListInput() {
    return this._discoverInterfaceList;
  }

  // discover_interval - computed: false, optional: true, required: false
  private _discoverInterval?: string; 
  public get discoverInterval() {
    return this.getStringAttribute('discover_interval');
  }
  public set discoverInterval(value: string) {
    this._discoverInterval = value;
  }
  public resetDiscoverInterval() {
    this._discoverInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverIntervalInput() {
    return this._discoverInterval;
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

  // lldp_dcbx - computed: false, optional: true, required: false
  private _lldpDcbx?: boolean | cdktf.IResolvable; 
  public get lldpDcbx() {
    return this.getBooleanAttribute('lldp_dcbx');
  }
  public set lldpDcbx(value: boolean | cdktf.IResolvable) {
    this._lldpDcbx = value;
  }
  public resetLldpDcbx() {
    this._lldpDcbx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpDcbxInput() {
    return this._lldpDcbx;
  }

  // lldp_mac_phy_config - computed: false, optional: true, required: false
  private _lldpMacPhyConfig?: boolean | cdktf.IResolvable; 
  public get lldpMacPhyConfig() {
    return this.getBooleanAttribute('lldp_mac_phy_config');
  }
  public set lldpMacPhyConfig(value: boolean | cdktf.IResolvable) {
    this._lldpMacPhyConfig = value;
  }
  public resetLldpMacPhyConfig() {
    this._lldpMacPhyConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpMacPhyConfigInput() {
    return this._lldpMacPhyConfig;
  }

  // lldp_max_frame_size - computed: false, optional: true, required: false
  private _lldpMaxFrameSize?: boolean | cdktf.IResolvable; 
  public get lldpMaxFrameSize() {
    return this.getBooleanAttribute('lldp_max_frame_size');
  }
  public set lldpMaxFrameSize(value: boolean | cdktf.IResolvable) {
    this._lldpMaxFrameSize = value;
  }
  public resetLldpMaxFrameSize() {
    this._lldpMaxFrameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpMaxFrameSizeInput() {
    return this._lldpMaxFrameSize;
  }

  // lldp_med_net_policy_vlan - computed: false, optional: true, required: false
  private _lldpMedNetPolicyVlan?: string; 
  public get lldpMedNetPolicyVlan() {
    return this.getStringAttribute('lldp_med_net_policy_vlan');
  }
  public set lldpMedNetPolicyVlan(value: string) {
    this._lldpMedNetPolicyVlan = value;
  }
  public resetLldpMedNetPolicyVlan() {
    this._lldpMedNetPolicyVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpMedNetPolicyVlanInput() {
    return this._lldpMedNetPolicyVlan;
  }

  // lldp_poe_power - computed: false, optional: true, required: false
  private _lldpPoePower?: boolean | cdktf.IResolvable; 
  public get lldpPoePower() {
    return this.getBooleanAttribute('lldp_poe_power');
  }
  public set lldpPoePower(value: boolean | cdktf.IResolvable) {
    this._lldpPoePower = value;
  }
  public resetLldpPoePower() {
    this._lldpPoePower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpPoePowerInput() {
    return this._lldpPoePower;
  }

  // lldp_vlan_info - computed: false, optional: true, required: false
  private _lldpVlanInfo?: boolean | cdktf.IResolvable; 
  public get lldpVlanInfo() {
    return this.getBooleanAttribute('lldp_vlan_info');
  }
  public set lldpVlanInfo(value: boolean | cdktf.IResolvable) {
    this._lldpVlanInfo = value;
  }
  public resetLldpVlanInfo() {
    this._lldpVlanInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpVlanInfoInput() {
    return this._lldpVlanInfo;
  }

  // mode - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      discover_interface_list: cdktf.stringToTerraform(this._discoverInterfaceList),
      discover_interval: cdktf.stringToTerraform(this._discoverInterval),
      id: cdktf.stringToTerraform(this._id),
      lldp_dcbx: cdktf.booleanToTerraform(this._lldpDcbx),
      lldp_mac_phy_config: cdktf.booleanToTerraform(this._lldpMacPhyConfig),
      lldp_max_frame_size: cdktf.booleanToTerraform(this._lldpMaxFrameSize),
      lldp_med_net_policy_vlan: cdktf.stringToTerraform(this._lldpMedNetPolicyVlan),
      lldp_poe_power: cdktf.booleanToTerraform(this._lldpPoePower),
      lldp_vlan_info: cdktf.booleanToTerraform(this._lldpVlanInfo),
      mode: cdktf.stringToTerraform(this._mode),
      protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discover_interface_list: {
        value: cdktf.stringToHclTerraform(this._discoverInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discover_interval: {
        value: cdktf.stringToHclTerraform(this._discoverInterval),
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
      lldp_dcbx: {
        value: cdktf.booleanToHclTerraform(this._lldpDcbx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lldp_mac_phy_config: {
        value: cdktf.booleanToHclTerraform(this._lldpMacPhyConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lldp_max_frame_size: {
        value: cdktf.booleanToHclTerraform(this._lldpMaxFrameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lldp_med_net_policy_vlan: {
        value: cdktf.stringToHclTerraform(this._lldpMedNetPolicyVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_poe_power: {
        value: cdktf.booleanToHclTerraform(this._lldpPoePower),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lldp_vlan_info: {
        value: cdktf.booleanToHclTerraform(this._lldpVlanInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
