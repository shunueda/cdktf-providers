// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRouteRedistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address Family.
  *   - Choices: `ipv4-ucast`, `ipv4-mcast`, `vpnv4-ucast`, `ipv6-ucast`, `ipv6-mcast`, `vpnv6-ucast`, `vpnv6-mcast`, `l2vpn-evpn`, `ipv4-lucast`, `ipv6-lucast`, `lnkstate`, `ipv4-mvpn`, `ipv6-mvpn`, `l2vpn-vpls`, `ipv4-mdt`
  *   - Default value: `ipv4-ucast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#address_family BgpRouteRedistribution#address_family}
  */
  readonly addressFamily: string;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#asn BgpRouteRedistribution#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#device BgpRouteRedistribution#device}
  */
  readonly device?: string;
  /**
  * The list of protocols to match.
  *   - Choices: `unspecified`, `static`, `direct`, `bgp`, `isis`, `ospf`, `ospfv3`, `eigrp`, `host`, `rip`, `amt`, `lisp`, `hmm`, `am`, `srv6`
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#protocol BgpRouteRedistribution#protocol}
  */
  readonly protocol: string;
  /**
  * The inter protocol route leak policy instance (Use `none` for `static` and `direct` protocols).
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#protocol_instance BgpRouteRedistribution#protocol_instance}
  */
  readonly protocolInstance: string;
  /**
  * The name of the default route leak policy route map. This route map name is used to control distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#route_map BgpRouteRedistribution#route_map}
  */
  readonly routeMap?: string;
  /**
  * The domain applicable to the capability.
  *   - Choices: `intra`, `inter`, `defrt`
  *   - Default value: `inter`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#scope BgpRouteRedistribution#scope}
  */
  readonly scope?: string;
  /**
  * SRv6 Prefix Type; Valid only when proto is srv6.
  *   - Choices: `unspecified`, `locator`
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#srv6_prefix_type BgpRouteRedistribution#srv6_prefix_type}
  */
  readonly srv6PrefixType?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#vrf BgpRouteRedistribution#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution nxos_bgp_route_redistribution}
*/
export class BgpRouteRedistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_route_redistribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRouteRedistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRouteRedistribution to import
  * @param importFromId The id of the existing BgpRouteRedistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRouteRedistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_route_redistribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_route_redistribution nxos_bgp_route_redistribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRouteRedistributionConfig
  */
  public constructor(scope: Construct, id: string, config: BgpRouteRedistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_route_redistribution',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamily = config.addressFamily;
    this._asn = config.asn;
    this._device = config.device;
    this._protocol = config.protocol;
    this._protocolInstance = config.protocolInstance;
    this._routeMap = config.routeMap;
    this._scope = config.scope;
    this._srv6PrefixType = config.srv6PrefixType;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_instance - computed: false, optional: false, required: true
  private _protocolInstance?: string; 
  public get protocolInstance() {
    return this.getStringAttribute('protocol_instance');
  }
  public set protocolInstance(value: string) {
    this._protocolInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInstanceInput() {
    return this._protocolInstance;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // srv6_prefix_type - computed: true, optional: true, required: false
  private _srv6PrefixType?: string; 
  public get srv6PrefixType() {
    return this.getStringAttribute('srv6_prefix_type');
  }
  public set srv6PrefixType(value: string) {
    this._srv6PrefixType = value;
  }
  public resetSrv6PrefixType() {
    this._srv6PrefixType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6PrefixTypeInput() {
    return this._srv6PrefixType;
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
      address_family: cdktf.stringToTerraform(this._addressFamily),
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_instance: cdktf.stringToTerraform(this._protocolInstance),
      route_map: cdktf.stringToTerraform(this._routeMap),
      scope: cdktf.stringToTerraform(this._scope),
      srv6_prefix_type: cdktf.stringToTerraform(this._srv6PrefixType),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_instance: {
        value: cdktf.stringToHclTerraform(this._protocolInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map: {
        value: cdktf.stringToHclTerraform(this._routeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srv6_prefix_type: {
        value: cdktf.stringToHclTerraform(this._srv6PrefixType),
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
