// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6InterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv6 Stateless address auto configuration.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#auto_configuration Ipv6Interface#auto_configuration}
  */
  readonly autoConfiguration?: string;
  /**
  * Default Route Addition with Nexthop as RA Source Address
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#default_route Ipv6Interface#default_route}
  */
  readonly defaultRoute?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#device Ipv6Interface#device}
  */
  readonly device?: string;
  /**
  * ip forward enabled/disabled.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#forward Ipv6Interface#forward}
  */
  readonly forward?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#interface_id Ipv6Interface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * IPv6 forward.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#ipv6_forward Ipv6Interface#ipv6_forward}
  */
  readonly ipv6Forward?: string;
  /**
  * IPv6 Link Local Use BIA
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#link_address_use_bia Ipv6Interface#link_address_use_bia}
  */
  readonly linkAddressUseBia?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#link_local_address Ipv6Interface#link_local_address}
  */
  readonly linkLocalAddress?: string;
  /**
  * URPF (unicast Reverse Path Forwarding).
  *   - Choices: `disabled`, `strict`, `loose`, `loose-allow-default`, `strict-allow-vni-hosts`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#urpf Ipv6Interface#urpf}
  */
  readonly urpf?: string;
  /**
  * IPv6 Address Use Link Local Address
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#use_link_local_address Ipv6Interface#use_link_local_address}
  */
  readonly useLinkLocalAddress?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#vrf Ipv6Interface#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface nxos_ipv6_interface}
*/
export class Ipv6Interface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ipv6_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Interface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Interface to import
  * @param importFromId The id of the existing Ipv6Interface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Interface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ipv6_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv6_interface nxos_ipv6_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6InterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6InterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ipv6_interface',
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
    this._autoConfiguration = config.autoConfiguration;
    this._defaultRoute = config.defaultRoute;
    this._device = config.device;
    this._forward = config.forward;
    this._interfaceId = config.interfaceId;
    this._ipv6Forward = config.ipv6Forward;
    this._linkAddressUseBia = config.linkAddressUseBia;
    this._linkLocalAddress = config.linkLocalAddress;
    this._urpf = config.urpf;
    this._useLinkLocalAddress = config.useLinkLocalAddress;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_configuration - computed: true, optional: true, required: false
  private _autoConfiguration?: string; 
  public get autoConfiguration() {
    return this.getStringAttribute('auto_configuration');
  }
  public set autoConfiguration(value: string) {
    this._autoConfiguration = value;
  }
  public resetAutoConfiguration() {
    this._autoConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigurationInput() {
    return this._autoConfiguration;
  }

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute?: string; 
  public get defaultRoute() {
    return this.getStringAttribute('default_route');
  }
  public set defaultRoute(value: string) {
    this._defaultRoute = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute;
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

  // forward - computed: true, optional: true, required: false
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

  // ipv6_forward - computed: true, optional: true, required: false
  private _ipv6Forward?: string; 
  public get ipv6Forward() {
    return this.getStringAttribute('ipv6_forward');
  }
  public set ipv6Forward(value: string) {
    this._ipv6Forward = value;
  }
  public resetIpv6Forward() {
    this._ipv6Forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ForwardInput() {
    return this._ipv6Forward;
  }

  // link_address_use_bia - computed: true, optional: true, required: false
  private _linkAddressUseBia?: string; 
  public get linkAddressUseBia() {
    return this.getStringAttribute('link_address_use_bia');
  }
  public set linkAddressUseBia(value: string) {
    this._linkAddressUseBia = value;
  }
  public resetLinkAddressUseBia() {
    this._linkAddressUseBia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAddressUseBiaInput() {
    return this._linkAddressUseBia;
  }

  // link_local_address - computed: false, optional: true, required: false
  private _linkLocalAddress?: string; 
  public get linkLocalAddress() {
    return this.getStringAttribute('link_local_address');
  }
  public set linkLocalAddress(value: string) {
    this._linkLocalAddress = value;
  }
  public resetLinkLocalAddress() {
    this._linkLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalAddressInput() {
    return this._linkLocalAddress;
  }

  // urpf - computed: true, optional: true, required: false
  private _urpf?: string; 
  public get urpf() {
    return this.getStringAttribute('urpf');
  }
  public set urpf(value: string) {
    this._urpf = value;
  }
  public resetUrpf() {
    this._urpf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urpfInput() {
    return this._urpf;
  }

  // use_link_local_address - computed: true, optional: true, required: false
  private _useLinkLocalAddress?: string; 
  public get useLinkLocalAddress() {
    return this.getStringAttribute('use_link_local_address');
  }
  public set useLinkLocalAddress(value: string) {
    this._useLinkLocalAddress = value;
  }
  public resetUseLinkLocalAddress() {
    this._useLinkLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLinkLocalAddressInput() {
    return this._useLinkLocalAddress;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_configuration: cdktf.stringToTerraform(this._autoConfiguration),
      default_route: cdktf.stringToTerraform(this._defaultRoute),
      device: cdktf.stringToTerraform(this._device),
      forward: cdktf.stringToTerraform(this._forward),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      ipv6_forward: cdktf.stringToTerraform(this._ipv6Forward),
      link_address_use_bia: cdktf.stringToTerraform(this._linkAddressUseBia),
      link_local_address: cdktf.stringToTerraform(this._linkLocalAddress),
      urpf: cdktf.stringToTerraform(this._urpf),
      use_link_local_address: cdktf.stringToTerraform(this._useLinkLocalAddress),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_configuration: {
        value: cdktf.stringToHclTerraform(this._autoConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route: {
        value: cdktf.stringToHclTerraform(this._defaultRoute),
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
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
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
      ipv6_forward: {
        value: cdktf.stringToHclTerraform(this._ipv6Forward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_address_use_bia: {
        value: cdktf.stringToHclTerraform(this._linkAddressUseBia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_local_address: {
        value: cdktf.stringToHclTerraform(this._linkLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urpf: {
        value: cdktf.stringToHclTerraform(this._urpf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_link_local_address: {
        value: cdktf.stringToHclTerraform(this._useLinkLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
