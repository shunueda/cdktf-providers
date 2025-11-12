// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NveInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#admin_state NveInterface#admin_state}
  */
  readonly adminState?: string;
  /**
  * Enable or disable Virtual MAC Advertisement in VPC mode.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#advertise_virtual_mac NveInterface#advertise_virtual_mac}
  */
  readonly advertiseVirtualMac?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#device NveInterface#device}
  */
  readonly device?: string;
  /**
  * Hold Down Time.
  *   - Range: `1`-`1500`
  *   - Default value: `180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#hold_down_time NveInterface#hold_down_time}
  */
  readonly holdDownTime?: number;
  /**
  * Host Reachability Protocol.
  *   - Choices: `Flood-and-learn`, `bgp`, `controller`, `openflow`, `openflowIR`
  *   - Default value: `Flood-and-learn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#host_reachability_protocol NveInterface#host_reachability_protocol}
  */
  readonly hostReachabilityProtocol?: string;
  /**
  * VxLAN Ingress Replication Protocol BGP.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#ingress_replication_protocol_bgp NveInterface#ingress_replication_protocol_bgp}
  */
  readonly ingressReplicationProtocolBgp?: boolean | cdktf.IResolvable;
  /**
  * Base multicast group address for L2.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#multicast_group_l2 NveInterface#multicast_group_l2}
  */
  readonly multicastGroupL2?: string;
  /**
  * Base multicast group address for L3.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#multicast_group_l3 NveInterface#multicast_group_l3}
  */
  readonly multicastGroupL3?: string;
  /**
  * Interface representing the Multisite Border Gateway. Must match first field in the output of `show int brief`.
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#multisite_source_interface NveInterface#multisite_source_interface}
  */
  readonly multisiteSourceInterface?: string;
  /**
  * Source Interface associated with the NVE. Must match first field in the output of `show int brief`.
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#source_interface NveInterface#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Suppress ARP.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#suppress_arp NveInterface#suppress_arp}
  */
  readonly suppressArp?: boolean | cdktf.IResolvable;
  /**
  * Suppress MAC Route.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#suppress_mac_route NveInterface#suppress_mac_route}
  */
  readonly suppressMacRoute?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface nxos_nve_interface}
*/
export class NveInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_nve_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NveInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NveInterface to import
  * @param importFromId The id of the existing NveInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NveInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_nve_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/nve_interface nxos_nve_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NveInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NveInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nxos_nve_interface',
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
    this._adminState = config.adminState;
    this._advertiseVirtualMac = config.advertiseVirtualMac;
    this._device = config.device;
    this._holdDownTime = config.holdDownTime;
    this._hostReachabilityProtocol = config.hostReachabilityProtocol;
    this._ingressReplicationProtocolBgp = config.ingressReplicationProtocolBgp;
    this._multicastGroupL2 = config.multicastGroupL2;
    this._multicastGroupL3 = config.multicastGroupL3;
    this._multisiteSourceInterface = config.multisiteSourceInterface;
    this._sourceInterface = config.sourceInterface;
    this._suppressArp = config.suppressArp;
    this._suppressMacRoute = config.suppressMacRoute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // advertise_virtual_mac - computed: true, optional: true, required: false
  private _advertiseVirtualMac?: boolean | cdktf.IResolvable; 
  public get advertiseVirtualMac() {
    return this.getBooleanAttribute('advertise_virtual_mac');
  }
  public set advertiseVirtualMac(value: boolean | cdktf.IResolvable) {
    this._advertiseVirtualMac = value;
  }
  public resetAdvertiseVirtualMac() {
    this._advertiseVirtualMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseVirtualMacInput() {
    return this._advertiseVirtualMac;
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

  // hold_down_time - computed: true, optional: true, required: false
  private _holdDownTime?: number; 
  public get holdDownTime() {
    return this.getNumberAttribute('hold_down_time');
  }
  public set holdDownTime(value: number) {
    this._holdDownTime = value;
  }
  public resetHoldDownTime() {
    this._holdDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownTimeInput() {
    return this._holdDownTime;
  }

  // host_reachability_protocol - computed: true, optional: true, required: false
  private _hostReachabilityProtocol?: string; 
  public get hostReachabilityProtocol() {
    return this.getStringAttribute('host_reachability_protocol');
  }
  public set hostReachabilityProtocol(value: string) {
    this._hostReachabilityProtocol = value;
  }
  public resetHostReachabilityProtocol() {
    this._hostReachabilityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostReachabilityProtocolInput() {
    return this._hostReachabilityProtocol;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_replication_protocol_bgp - computed: true, optional: true, required: false
  private _ingressReplicationProtocolBgp?: boolean | cdktf.IResolvable; 
  public get ingressReplicationProtocolBgp() {
    return this.getBooleanAttribute('ingress_replication_protocol_bgp');
  }
  public set ingressReplicationProtocolBgp(value: boolean | cdktf.IResolvable) {
    this._ingressReplicationProtocolBgp = value;
  }
  public resetIngressReplicationProtocolBgp() {
    this._ingressReplicationProtocolBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressReplicationProtocolBgpInput() {
    return this._ingressReplicationProtocolBgp;
  }

  // multicast_group_l2 - computed: true, optional: true, required: false
  private _multicastGroupL2?: string; 
  public get multicastGroupL2() {
    return this.getStringAttribute('multicast_group_l2');
  }
  public set multicastGroupL2(value: string) {
    this._multicastGroupL2 = value;
  }
  public resetMulticastGroupL2() {
    this._multicastGroupL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupL2Input() {
    return this._multicastGroupL2;
  }

  // multicast_group_l3 - computed: true, optional: true, required: false
  private _multicastGroupL3?: string; 
  public get multicastGroupL3() {
    return this.getStringAttribute('multicast_group_l3');
  }
  public set multicastGroupL3(value: string) {
    this._multicastGroupL3 = value;
  }
  public resetMulticastGroupL3() {
    this._multicastGroupL3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupL3Input() {
    return this._multicastGroupL3;
  }

  // multisite_source_interface - computed: true, optional: true, required: false
  private _multisiteSourceInterface?: string; 
  public get multisiteSourceInterface() {
    return this.getStringAttribute('multisite_source_interface');
  }
  public set multisiteSourceInterface(value: string) {
    this._multisiteSourceInterface = value;
  }
  public resetMultisiteSourceInterface() {
    this._multisiteSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multisiteSourceInterfaceInput() {
    return this._multisiteSourceInterface;
  }

  // source_interface - computed: true, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // suppress_arp - computed: true, optional: true, required: false
  private _suppressArp?: boolean | cdktf.IResolvable; 
  public get suppressArp() {
    return this.getBooleanAttribute('suppress_arp');
  }
  public set suppressArp(value: boolean | cdktf.IResolvable) {
    this._suppressArp = value;
  }
  public resetSuppressArp() {
    this._suppressArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressArpInput() {
    return this._suppressArp;
  }

  // suppress_mac_route - computed: true, optional: true, required: false
  private _suppressMacRoute?: boolean | cdktf.IResolvable; 
  public get suppressMacRoute() {
    return this.getBooleanAttribute('suppress_mac_route');
  }
  public set suppressMacRoute(value: boolean | cdktf.IResolvable) {
    this._suppressMacRoute = value;
  }
  public resetSuppressMacRoute() {
    this._suppressMacRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressMacRouteInput() {
    return this._suppressMacRoute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      advertise_virtual_mac: cdktf.booleanToTerraform(this._advertiseVirtualMac),
      device: cdktf.stringToTerraform(this._device),
      hold_down_time: cdktf.numberToTerraform(this._holdDownTime),
      host_reachability_protocol: cdktf.stringToTerraform(this._hostReachabilityProtocol),
      ingress_replication_protocol_bgp: cdktf.booleanToTerraform(this._ingressReplicationProtocolBgp),
      multicast_group_l2: cdktf.stringToTerraform(this._multicastGroupL2),
      multicast_group_l3: cdktf.stringToTerraform(this._multicastGroupL3),
      multisite_source_interface: cdktf.stringToTerraform(this._multisiteSourceInterface),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
      suppress_arp: cdktf.booleanToTerraform(this._suppressArp),
      suppress_mac_route: cdktf.booleanToTerraform(this._suppressMacRoute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_virtual_mac: {
        value: cdktf.booleanToHclTerraform(this._advertiseVirtualMac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_down_time: {
        value: cdktf.numberToHclTerraform(this._holdDownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_reachability_protocol: {
        value: cdktf.stringToHclTerraform(this._hostReachabilityProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_replication_protocol_bgp: {
        value: cdktf.booleanToHclTerraform(this._ingressReplicationProtocolBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multicast_group_l2: {
        value: cdktf.stringToHclTerraform(this._multicastGroupL2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_group_l3: {
        value: cdktf.stringToHclTerraform(this._multicastGroupL3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multisite_source_interface: {
        value: cdktf.stringToHclTerraform(this._multisiteSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_arp: {
        value: cdktf.booleanToHclTerraform(this._suppressArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_mac_route: {
        value: cdktf.booleanToHclTerraform(this._suppressMacRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
