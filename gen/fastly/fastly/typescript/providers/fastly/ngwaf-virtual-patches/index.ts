// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgwafVirtualPatchesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to take when a signal for virtual patch is detected. Accepted values are `log` and `block`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches#action NgwafVirtualPatches#action}
  */
  readonly action: string;
  /**
  * Control for enabling and disabling a virtual patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches#enabled NgwafVirtualPatches#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches#id NgwafVirtualPatches#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the virtual patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches#virtual_patch_id NgwafVirtualPatches#virtual_patch_id}
  */
  readonly virtualPatchId: string;
  /**
  * The ID of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches#workspace_id NgwafVirtualPatches#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches fastly_ngwaf_virtual_patches}
*/
export class NgwafVirtualPatches extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_ngwaf_virtual_patches";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgwafVirtualPatches resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgwafVirtualPatches to import
  * @param importFromId The id of the existing NgwafVirtualPatches that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgwafVirtualPatches to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_ngwaf_virtual_patches", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/ngwaf_virtual_patches fastly_ngwaf_virtual_patches} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgwafVirtualPatchesConfig
  */
  public constructor(scope: Construct, id: string, config: NgwafVirtualPatchesConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_ngwaf_virtual_patches',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._enabled = config.enabled;
    this._id = config.id;
    this._virtualPatchId = config.virtualPatchId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // virtual_patch_id - computed: false, optional: false, required: true
  private _virtualPatchId?: string; 
  public get virtualPatchId() {
    return this.getStringAttribute('virtual_patch_id');
  }
  public set virtualPatchId(value: string) {
    this._virtualPatchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPatchIdInput() {
    return this._virtualPatchId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      virtual_patch_id: cdktf.stringToTerraform(this._virtualPatchId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      virtual_patch_id: {
        value: cdktf.stringToHclTerraform(this._virtualPatchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
