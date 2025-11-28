// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerNetworkAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional IPs to assign to the Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network#alias_ips ServerNetworkA#alias_ips}
  */
  readonly aliasIps?: string[];
  /**
  * IP to assign to the Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network#ip ServerNetworkA#ip}
  */
  readonly ip?: string;
  /**
  * ID of the Network to attach the Server to. Using `subnet_id` is preferred. Required if `subnet_id` is not set. If `subnet_id` or `ip` are not set, the Server will be attached to the last subnet (ordered by `ip_range`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network#network_id ServerNetworkA#network_id}
  */
  readonly networkId?: number;
  /**
  * ID of the Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network#server_id ServerNetworkA#server_id}
  */
  readonly serverId: number;
  /**
  * ID of the Subnet to attach the Server to. Required if `network_id` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network#subnet_id ServerNetworkA#subnet_id}
  */
  readonly subnetId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network hcloud_server_network}
*/
export class ServerNetworkA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_server_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerNetworkA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerNetworkA to import
  * @param importFromId The id of the existing ServerNetworkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerNetworkA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_server_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/server_network hcloud_server_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerNetworkAConfig
  */
  public constructor(scope: Construct, id: string, config: ServerNetworkAConfig) {
    super(scope, id, {
      terraformResourceType: 'hcloud_server_network',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliasIps = config.aliasIps;
    this._ip = config.ip;
    this._networkId = config.networkId;
    this._serverId = config.serverId;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_ips - computed: true, optional: true, required: false
  private _aliasIps?: string[]; 
  public get aliasIps() {
    return cdktf.Fn.tolist(this.getListAttribute('alias_ips'));
  }
  public set aliasIps(value: string[]) {
    this._aliasIps = value;
  }
  public resetAliasIps() {
    this._aliasIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIpsInput() {
    return this._aliasIps;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: number; 
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }
  public set serverId(value: number) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliasIps),
      ip: cdktf.stringToTerraform(this._ip),
      network_id: cdktf.numberToTerraform(this._networkId),
      server_id: cdktf.numberToTerraform(this._serverId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliasIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.numberToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_id: {
        value: cdktf.numberToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
