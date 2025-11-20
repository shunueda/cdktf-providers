// https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentHaresourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The comment associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#comment VirtualEnvironmentHaresource#comment}
  */
  readonly comment?: string;
  /**
  * The identifier of the High Availability group this resource is a member of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#group VirtualEnvironmentHaresource#group}
  */
  readonly group?: string;
  /**
  * The maximal number of relocation attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#max_relocate VirtualEnvironmentHaresource#max_relocate}
  */
  readonly maxRelocate?: number;
  /**
  * The maximal number of restart attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#max_restart VirtualEnvironmentHaresource#max_restart}
  */
  readonly maxRestart?: number;
  /**
  * The Proxmox HA resource identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#resource_id VirtualEnvironmentHaresource#resource_id}
  */
  readonly resourceId: string;
  /**
  * The desired state of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#state VirtualEnvironmentHaresource#state}
  */
  readonly state?: string;
  /**
  * The type of HA resources to create. If unset, it will be deduced from the `resource_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#type VirtualEnvironmentHaresource#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource proxmox_virtual_environment_haresource}
*/
export class VirtualEnvironmentHaresource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_haresource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentHaresource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentHaresource to import
  * @param importFromId The id of the existing VirtualEnvironmentHaresource that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentHaresource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_haresource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_haresource proxmox_virtual_environment_haresource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentHaresourceConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentHaresourceConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_haresource',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.87.0',
        providerVersionConstraint: '0.87.0'
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
    this._maxRelocate = config.maxRelocate;
    this._maxRestart = config.maxRestart;
    this._resourceId = config.resourceId;
    this._state = config.state;
    this._type = config.type;
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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_relocate - computed: false, optional: true, required: false
  private _maxRelocate?: number; 
  public get maxRelocate() {
    return this.getNumberAttribute('max_relocate');
  }
  public set maxRelocate(value: number) {
    this._maxRelocate = value;
  }
  public resetMaxRelocate() {
    this._maxRelocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRelocateInput() {
    return this._maxRelocate;
  }

  // max_restart - computed: false, optional: true, required: false
  private _maxRestart?: number; 
  public get maxRestart() {
    return this.getNumberAttribute('max_restart');
  }
  public set maxRestart(value: number) {
    this._maxRestart = value;
  }
  public resetMaxRestart() {
    this._maxRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestartInput() {
    return this._maxRestart;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      group: cdktf.stringToTerraform(this._group),
      max_relocate: cdktf.numberToTerraform(this._maxRelocate),
      max_restart: cdktf.numberToTerraform(this._maxRestart),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
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
      max_relocate: {
        value: cdktf.numberToHclTerraform(this._maxRelocate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_restart: {
        value: cdktf.numberToHclTerraform(this._maxRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
