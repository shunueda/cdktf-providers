// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of IP allocation aliases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#aliases IpAllocation#aliases}
  */
  readonly aliases?: string[];
  /**
  * Value which comes from 'ipv4_addr' (if specified) or from auto-allocation function (using 'ipv4_cidr' or 'filter_params').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#allocated_ipv4_addr IpAllocation#allocated_ipv4_addr}
  */
  readonly allocatedIpv4Addr?: string;
  /**
  * Value which comes from 'ipv6_addr' (if specified) or from auto-allocation function (using 'ipv6_cidr' or 'filter_params').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#allocated_ipv6_addr IpAllocation#allocated_ipv6_addr}
  */
  readonly allocatedIpv6Addr?: string;
  /**
  * A description of IP address allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#comment IpAllocation#comment}
  */
  readonly comment?: string;
  /**
  * Disables the Host record if set to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#disable IpAllocation#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * DNS view under which the zone has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#dns_view IpAllocation#dns_view}
  */
  readonly dnsView?: string;
  /**
  * flag that defines if the host record is to be used for DNS purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#enable_dns IpAllocation#enable_dns}
  */
  readonly enableDns?: boolean | cdktf.IResolvable;
  /**
  * The extensible attributes for IP address allocation, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#ext_attrs IpAllocation#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The parent network block's extensible attributes. This field is used for dynamic allocation along with 'ip_address_type' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#filter_params IpAllocation#filter_params}
  */
  readonly filterParams?: string;
  /**
  * The host name for Host Record in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#fqdn IpAllocation#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#id IpAllocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of IP address to allocate. This filed is used only when 'filter_params' field is used. Valid values are: IPV4, IPV6, Both. Default value is IPV4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#ip_address_type IpAllocation#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * IPv4 address of cloud instance.Set a valid IP address for static allocation and leave empty if dynamically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#ipv4_addr IpAllocation#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv4 cidr from which an IPv4 address will be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#ipv4_cidr IpAllocation#ipv4_cidr}
  */
  readonly ipv4Cidr?: string;
  /**
  * IPv6 address of cloud instance.Set a valid IP address for static allocation and leave empty if dynamically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#ipv6_addr IpAllocation#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The IPv6 cidr from which an IPv6 address will be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#ipv6_cidr IpAllocation#ipv6_cidr}
  */
  readonly ipv6Cidr?: string;
  /**
  * network view name on NIOS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#network_view IpAllocation#network_view}
  */
  readonly networkView?: string;
  /**
  * TTL attribute value for the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#ttl IpAllocation#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation infoblox_ip_allocation}
*/
export class IpAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ip_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAllocation to import
  * @param importFromId The id of the existing IpAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ip_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_allocation infoblox_ip_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: IpAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ip_allocation',
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
    this._aliases = config.aliases;
    this._allocatedIpv4Addr = config.allocatedIpv4Addr;
    this._allocatedIpv6Addr = config.allocatedIpv6Addr;
    this._comment = config.comment;
    this._disable = config.disable;
    this._dnsView = config.dnsView;
    this._enableDns = config.enableDns;
    this._extAttrs = config.extAttrs;
    this._filterParams = config.filterParams;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._ipAddressType = config.ipAddressType;
    this._ipv4Addr = config.ipv4Addr;
    this._ipv4Cidr = config.ipv4Cidr;
    this._ipv6Addr = config.ipv6Addr;
    this._ipv6Cidr = config.ipv6Cidr;
    this._networkView = config.networkView;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // allocated_ipv4_addr - computed: true, optional: true, required: false
  private _allocatedIpv4Addr?: string; 
  public get allocatedIpv4Addr() {
    return this.getStringAttribute('allocated_ipv4_addr');
  }
  public set allocatedIpv4Addr(value: string) {
    this._allocatedIpv4Addr = value;
  }
  public resetAllocatedIpv4Addr() {
    this._allocatedIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpv4AddrInput() {
    return this._allocatedIpv4Addr;
  }

  // allocated_ipv6_addr - computed: true, optional: true, required: false
  private _allocatedIpv6Addr?: string; 
  public get allocatedIpv6Addr() {
    return this.getStringAttribute('allocated_ipv6_addr');
  }
  public set allocatedIpv6Addr(value: string) {
    this._allocatedIpv6Addr = value;
  }
  public resetAllocatedIpv6Addr() {
    this._allocatedIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpv6AddrInput() {
    return this._allocatedIpv6Addr;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_view - computed: true, optional: true, required: false
  private _dnsView?: string; 
  public get dnsView() {
    return this.getStringAttribute('dns_view');
  }
  public set dnsView(value: string) {
    this._dnsView = value;
  }
  public resetDnsView() {
    this._dnsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewInput() {
    return this._dnsView;
  }

  // enable_dns - computed: false, optional: true, required: false
  private _enableDns?: boolean | cdktf.IResolvable; 
  public get enableDns() {
    return this.getBooleanAttribute('enable_dns');
  }
  public set enableDns(value: boolean | cdktf.IResolvable) {
    this._enableDns = value;
  }
  public resetEnableDns() {
    this._enableDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsInput() {
    return this._enableDns;
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

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv4_cidr - computed: false, optional: true, required: false
  private _ipv4Cidr?: string; 
  public get ipv4Cidr() {
    return this.getStringAttribute('ipv4_cidr');
  }
  public set ipv4Cidr(value: string) {
    this._ipv4Cidr = value;
  }
  public resetIpv4Cidr() {
    this._ipv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrInput() {
    return this._ipv4Cidr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // ipv6_cidr - computed: false, optional: true, required: false
  private _ipv6Cidr?: string; 
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }
  public set ipv6Cidr(value: string) {
    this._ipv6Cidr = value;
  }
  public resetIpv6Cidr() {
    this._ipv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrInput() {
    return this._ipv6Cidr;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      allocated_ipv4_addr: cdktf.stringToTerraform(this._allocatedIpv4Addr),
      allocated_ipv6_addr: cdktf.stringToTerraform(this._allocatedIpv6Addr),
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      dns_view: cdktf.stringToTerraform(this._dnsView),
      enable_dns: cdktf.booleanToTerraform(this._enableDns),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      filter_params: cdktf.stringToTerraform(this._filterParams),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      ipv4_addr: cdktf.stringToTerraform(this._ipv4Addr),
      ipv4_cidr: cdktf.stringToTerraform(this._ipv4Cidr),
      ipv6_addr: cdktf.stringToTerraform(this._ipv6Addr),
      ipv6_cidr: cdktf.stringToTerraform(this._ipv6Cidr),
      network_view: cdktf.stringToTerraform(this._networkView),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allocated_ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._allocatedIpv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocated_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._allocatedIpv6Addr),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_view: {
        value: cdktf.stringToHclTerraform(this._dnsView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dns: {
        value: cdktf.booleanToHclTerraform(this._enableDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      ip_address_type: {
        value: cdktf.stringToHclTerraform(this._ipAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._ipv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_cidr: {
        value: cdktf.stringToHclTerraform(this._ipv4Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._ipv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_cidr: {
        value: cdktf.stringToHclTerraform(this._ipv6Cidr),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
