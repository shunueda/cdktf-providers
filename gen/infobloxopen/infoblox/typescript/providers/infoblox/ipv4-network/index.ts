// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the parameter's value > 0 to allocate next available network with corresponding prefix length from the network container defined by 'parent_cidr'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#allocate_prefix_len Ipv4Network#allocate_prefix_len}
  */
  readonly allocatePrefixLen?: number;
  /**
  * The network block in cidr format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#cidr Ipv4Network#cidr}
  */
  readonly cidr?: string;
  /**
  * A string describing the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#comment Ipv4Network#comment}
  */
  readonly comment?: string;
  /**
  * The Extensible attributes of the Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#ext_attrs Ipv4Network#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The parent network/network-container block's extensible attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#filter_params Ipv4Network#filter_params}
  */
  readonly filterParams?: string;
  /**
  * Gateway's IP address of the network. By default, the first IP address is set as gateway address; if the value is 'none' then the network has no gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#gateway Ipv4Network#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#id Ipv4Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network view name available in NIOS Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#network_view Ipv4Network#network_view}
  */
  readonly networkView?: string;
  /**
  * The parent object from which the network will be allocated. Valid values are 'networkcontainer' and 'network'. Default value is 'networkcontainer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#object Ipv4Network#object}
  */
  readonly object?: string;
  /**
  * The parent network container block in cidr format to allocate from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#parent_cidr Ipv4Network#parent_cidr}
  */
  readonly parentCidr?: string;
  /**
  * The number of IP's you want to reserve in IPv4 Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#reserve_ip Ipv4Network#reserve_ip}
  */
  readonly reserveIp?: number;
  /**
  * The number of IP's you want to reserve in IPv6 Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#reserve_ipv6 Ipv4Network#reserve_ipv6}
  */
  readonly reserveIpv6?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network infoblox_ipv4_network}
*/
export class Ipv4Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ipv4_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4Network to import
  * @param importFromId The id of the existing Ipv4Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ipv4_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_network infoblox_ipv4_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4NetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv4NetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ipv4_network',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatePrefixLen = config.allocatePrefixLen;
    this._cidr = config.cidr;
    this._comment = config.comment;
    this._extAttrs = config.extAttrs;
    this._filterParams = config.filterParams;
    this._gateway = config.gateway;
    this._id = config.id;
    this._networkView = config.networkView;
    this._object = config.object;
    this._parentCidr = config.parentCidr;
    this._reserveIp = config.reserveIp;
    this._reserveIpv6 = config.reserveIpv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_prefix_len - computed: false, optional: true, required: false
  private _allocatePrefixLen?: number; 
  public get allocatePrefixLen() {
    return this.getNumberAttribute('allocate_prefix_len');
  }
  public set allocatePrefixLen(value: number) {
    this._allocatePrefixLen = value;
  }
  public resetAllocatePrefixLen() {
    this._allocatePrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePrefixLenInput() {
    return this._allocatePrefixLen;
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
  }

  // filter_params - computed: false, optional: true, required: false
  private _filterParams?: string; 
  public get filterParams() {
    return this.getStringAttribute('filter_params');
  }
  public set filterParams(value: string) {
    this._filterParams = value;
  }
  public resetFilterParams() {
    this._filterParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamsInput() {
    return this._filterParams;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // network_view - computed: false, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // parent_cidr - computed: false, optional: true, required: false
  private _parentCidr?: string; 
  public get parentCidr() {
    return this.getStringAttribute('parent_cidr');
  }
  public set parentCidr(value: string) {
    this._parentCidr = value;
  }
  public resetParentCidr() {
    this._parentCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCidrInput() {
    return this._parentCidr;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // reserve_ip - computed: true, optional: true, required: false
  private _reserveIp?: number; 
  public get reserveIp() {
    return this.getNumberAttribute('reserve_ip');
  }
  public set reserveIp(value: number) {
    this._reserveIp = value;
  }
  public resetReserveIp() {
    this._reserveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveIpInput() {
    return this._reserveIp;
  }

  // reserve_ipv6 - computed: true, optional: true, required: false
  private _reserveIpv6?: number; 
  public get reserveIpv6() {
    return this.getNumberAttribute('reserve_ipv6');
  }
  public set reserveIpv6(value: number) {
    this._reserveIpv6 = value;
  }
  public resetReserveIpv6() {
    this._reserveIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveIpv6Input() {
    return this._reserveIpv6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_prefix_len: cdktf.numberToTerraform(this._allocatePrefixLen),
      cidr: cdktf.stringToTerraform(this._cidr),
      comment: cdktf.stringToTerraform(this._comment),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      filter_params: cdktf.stringToTerraform(this._filterParams),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      network_view: cdktf.stringToTerraform(this._networkView),
      object: cdktf.stringToTerraform(this._object),
      parent_cidr: cdktf.stringToTerraform(this._parentCidr),
      reserve_ip: cdktf.numberToTerraform(this._reserveIp),
      reserve_ipv6: cdktf.numberToTerraform(this._reserveIpv6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_prefix_len: {
        value: cdktf.numberToHclTerraform(this._allocatePrefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_params: {
        value: cdktf.stringToHclTerraform(this._filterParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.stringToHclTerraform(this._object),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_cidr: {
        value: cdktf.stringToHclTerraform(this._parentCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve_ip: {
        value: cdktf.numberToHclTerraform(this._reserveIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserve_ipv6: {
        value: cdktf.numberToHclTerraform(this._reserveIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
