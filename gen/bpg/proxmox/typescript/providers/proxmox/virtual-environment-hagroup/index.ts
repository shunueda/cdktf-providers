// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentHagroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The comment associated with this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup#comment VirtualEnvironmentHagroup#comment}
  */
  readonly comment?: string;
  /**
  * The identifier of the High Availability group to manage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup#group VirtualEnvironmentHagroup#group}
  */
  readonly group: string;
  /**
  * A flag that indicates that failing back to a higher priority node is disabled for this HA group. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup#no_failback VirtualEnvironmentHagroup#no_failback}
  */
  readonly noFailback?: boolean | cdktf.IResolvable;
  /**
  * The member nodes for this group. They are provided as a map, where the keys are the node names and the values represent their priority: integers for known priorities or `null` for unset priorities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup#nodes VirtualEnvironmentHagroup#nodes}
  */
  readonly nodes: { [key: string]: number };
  /**
  * A flag that indicates that other nodes may not be used to run resources associated to this HA group. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup#restricted VirtualEnvironmentHagroup#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup proxmox_virtual_environment_hagroup}
*/
export class VirtualEnvironmentHagroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_hagroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentHagroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentHagroup to import
  * @param importFromId The id of the existing VirtualEnvironmentHagroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentHagroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_hagroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_hagroup proxmox_virtual_environment_hagroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentHagroupConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentHagroupConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_hagroup',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._group = config.group;
    this._noFailback = config.noFailback;
    this._nodes = config.nodes;
    this._restricted = config.restricted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // no_failback - computed: true, optional: true, required: false
  private _noFailback?: boolean | cdktf.IResolvable; 
  public get noFailback() {
    return this.getBooleanAttribute('no_failback');
  }
  public set noFailback(value: boolean | cdktf.IResolvable) {
    this._noFailback = value;
  }
  public resetNoFailback() {
    this._noFailback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFailbackInput() {
    return this._noFailback;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes?: { [key: string]: number }; 
  public get nodes() {
    return this.getNumberMapAttribute('nodes');
  }
  public set nodes(value: { [key: string]: number }) {
    this._nodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // restricted - computed: true, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      group: cdktf.stringToTerraform(this._group),
      no_failback: cdktf.booleanToTerraform(this._noFailback),
      nodes: cdktf.hashMapper(cdktf.numberToTerraform)(this._nodes),
      restricted: cdktf.booleanToTerraform(this._restricted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_failback: {
        value: cdktf.booleanToHclTerraform(this._noFailback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodes: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._nodes),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      restricted: {
        value: cdktf.booleanToHclTerraform(this._restricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
