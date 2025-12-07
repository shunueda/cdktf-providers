// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentFirewallAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP/CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#cidr VirtualEnvironmentFirewallAlias#cidr}
  */
  readonly cidr: string;
  /**
  * Alias comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#comment VirtualEnvironmentFirewallAlias#comment}
  */
  readonly comment?: string;
  /**
  * The ID of the container to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#container_id VirtualEnvironmentFirewallAlias#container_id}
  */
  readonly containerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#id VirtualEnvironmentFirewallAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#name VirtualEnvironmentFirewallAlias#name}
  */
  readonly name: string;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#node_name VirtualEnvironmentFirewallAlias#node_name}
  */
  readonly nodeName?: string;
  /**
  * The ID of the VM to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#vm_id VirtualEnvironmentFirewallAlias#vm_id}
  */
  readonly vmId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias proxmox_virtual_environment_firewall_alias}
*/
export class VirtualEnvironmentFirewallAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_firewall_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentFirewallAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentFirewallAlias to import
  * @param importFromId The id of the existing VirtualEnvironmentFirewallAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentFirewallAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_firewall_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_firewall_alias proxmox_virtual_environment_firewall_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentFirewallAliasConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentFirewallAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_firewall_alias',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.0',
        providerVersionConstraint: '0.89.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._comment = config.comment;
    this._containerId = config.containerId;
    this._id = config.id;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
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

  // container_id - computed: false, optional: true, required: false
  private _containerId?: number; 
  public get containerId() {
    return this.getNumberAttribute('container_id');
  }
  public set containerId(value: number) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      comment: cdktf.stringToTerraform(this._comment),
      container_id: cdktf.numberToTerraform(this._containerId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      vm_id: cdktf.numberToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      container_id: {
        value: cdktf.numberToHclTerraform(this._containerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.numberToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
