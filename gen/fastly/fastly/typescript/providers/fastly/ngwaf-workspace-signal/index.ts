// https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgwafWorkspaceSignalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal#description NgwafWorkspaceSignal#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal#id NgwafWorkspaceSignal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the signal. Special characters and periods are not accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal#name NgwafWorkspaceSignal#name}
  */
  readonly name: string;
  /**
  * The ID of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal#workspace_id NgwafWorkspaceSignal#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal fastly_ngwaf_workspace_signal}
*/
export class NgwafWorkspaceSignal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_ngwaf_workspace_signal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgwafWorkspaceSignal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgwafWorkspaceSignal to import
  * @param importFromId The id of the existing NgwafWorkspaceSignal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgwafWorkspaceSignal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_ngwaf_workspace_signal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace_signal fastly_ngwaf_workspace_signal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgwafWorkspaceSignalConfig
  */
  public constructor(scope: Construct, id: string, config: NgwafWorkspaceSignalConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_ngwaf_workspace_signal',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
