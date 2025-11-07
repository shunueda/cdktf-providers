// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayDhcpForwardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP addresses of the DHCP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding#dhcp_servers NsxtEdgegatewayDhcpForwarding#dhcp_servers}
  */
  readonly dhcpServers: string[];
  /**
  * Edge gateway ID for DHCP forwarding configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding#edge_gateway_id NsxtEdgegatewayDhcpForwarding#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Status of DHCP Forwarding for the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding#enabled NsxtEdgegatewayDhcpForwarding#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding#id NsxtEdgegatewayDhcpForwarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding#org NsxtEdgegatewayDhcpForwarding#org}
  */
  readonly org?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding vcd_nsxt_edgegateway_dhcp_forwarding}
*/
export class NsxtEdgegatewayDhcpForwarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_dhcp_forwarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayDhcpForwarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayDhcpForwarding to import
  * @param importFromId The id of the existing NsxtEdgegatewayDhcpForwarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayDhcpForwarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_dhcp_forwarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dhcp_forwarding vcd_nsxt_edgegateway_dhcp_forwarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayDhcpForwardingConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayDhcpForwardingConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_dhcp_forwarding',
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
    this._dhcpServers = config.dhcpServers;
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._org = config.org;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_servers - computed: false, optional: false, required: true
  private _dhcpServers?: string[]; 
  public get dhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_servers'));
  }
  public set dhcpServers(value: string[]) {
    this._dhcpServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServersInput() {
    return this._dhcpServers;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
      dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpServers),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpServers),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
