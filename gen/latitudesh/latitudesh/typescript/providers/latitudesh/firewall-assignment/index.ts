// https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/firewall_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/firewall_assignment#firewall_id FirewallAssignment#firewall_id}
  */
  readonly firewallId?: string;
  /**
  * The ID of the server to assign the firewall to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/firewall_assignment#server_id FirewallAssignment#server_id}
  */
  readonly serverId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/firewall_assignment latitudesh_firewall_assignment}
*/
export class FirewallAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "latitudesh_firewall_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallAssignment to import
  * @param importFromId The id of the existing FirewallAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/firewall_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "latitudesh_firewall_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/firewall_assignment latitudesh_firewall_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallAssignmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallAssignmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'latitudesh_firewall_assignment',
      terraformGeneratorMetadata: {
        providerName: 'latitudesh',
        providerVersion: '2.8.7',
        providerVersionConstraint: '2.8.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallId = config.firewallId;
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_id - computed: true, optional: true, required: false
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  public resetFirewallId() {
    this._firewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_id - computed: true, optional: true, required: false
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  public resetServerId() {
    this._serverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_id: cdktf.stringToTerraform(this._firewallId),
      server_id: cdktf.stringToTerraform(this._serverId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_id: {
        value: cdktf.stringToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
