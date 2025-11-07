// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayDhcpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * A set of DNS Servers (only applicable for 'SLAAC' mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6#dns_servers NsxtEdgegatewayDhcpv6#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * A set of domain names (only applicable for 'SLAAC' mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6#domain_names NsxtEdgegatewayDhcpv6#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Edge gateway ID for Rate limiting (DHCPv6) configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6#edge_gateway_id NsxtEdgegatewayDhcpv6#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6#id NsxtEdgegatewayDhcpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DHCPv6 configuration mode. One of 'SLAAC', 'DHCPv6', 'DISABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6#mode NsxtEdgegatewayDhcpv6#mode}
  */
  readonly mode: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6#org NsxtEdgegatewayDhcpv6#org}
  */
  readonly org?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6 vcd_nsxt_edgegateway_dhcpv6}
*/
export class NsxtEdgegatewayDhcpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_dhcpv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayDhcpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayDhcpv6 to import
  * @param importFromId The id of the existing NsxtEdgegatewayDhcpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayDhcpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_dhcpv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcpv6 vcd_nsxt_edgegateway_dhcpv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayDhcpv6Config
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayDhcpv6Config) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_dhcpv6',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsServers = config.dnsServers;
    this._domainNames = config.domainNames;
    this._edgeGatewayId = config.edgeGatewayId;
    this._id = config.id;
    this._mode = config.mode;
    this._org = config.org;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_servers'));
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      org: cdktf.stringToTerraform(this._org),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
