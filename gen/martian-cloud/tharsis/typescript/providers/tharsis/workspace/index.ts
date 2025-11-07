// https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace#description Workspace#description}
  */
  readonly description: string;
  /**
  * Path of the parent group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace#group_path Workspace#group_path}
  */
  readonly groupPath: string;
  /**
  * Maximum job duration in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace#max_job_duration Workspace#max_job_duration}
  */
  readonly maxJobDuration?: number;
  /**
  * The name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace#name Workspace#name}
  */
  readonly name: string;
  /**
  * Whether a destroy plan would be prevented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace#prevent_destroy_plan Workspace#prevent_destroy_plan}
  */
  readonly preventDestroyPlan?: boolean | cdktf.IResolvable;
  /**
  * Terraform version for this workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace#terraform_version Workspace#terraform_version}
  */
  readonly terraformVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace tharsis_workspace}
*/
export class Workspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workspace to import
  * @param importFromId The id of the existing Workspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace tharsis_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_workspace',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.14.1'
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
    this._groupPath = config.groupPath;
    this._maxJobDuration = config.maxJobDuration;
    this._name = config.name;
    this._preventDestroyPlan = config.preventDestroyPlan;
    this._terraformVersion = config.terraformVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // max_job_duration - computed: true, optional: true, required: false
  private _maxJobDuration?: number; 
  public get maxJobDuration() {
    return this.getNumberAttribute('max_job_duration');
  }
  public set maxJobDuration(value: number) {
    this._maxJobDuration = value;
  }
  public resetMaxJobDuration() {
    this._maxJobDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJobDurationInput() {
    return this._maxJobDuration;
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

  // prevent_destroy_plan - computed: true, optional: true, required: false
  private _preventDestroyPlan?: boolean | cdktf.IResolvable; 
  public get preventDestroyPlan() {
    return this.getBooleanAttribute('prevent_destroy_plan');
  }
  public set preventDestroyPlan(value: boolean | cdktf.IResolvable) {
    this._preventDestroyPlan = value;
  }
  public resetPreventDestroyPlan() {
    this._preventDestroyPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDestroyPlanInput() {
    return this._preventDestroyPlan;
  }

  // terraform_version - computed: true, optional: true, required: false
  private _terraformVersion?: string; 
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }
  public set terraformVersion(value: string) {
    this._terraformVersion = value;
  }
  public resetTerraformVersion() {
    this._terraformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVersionInput() {
    return this._terraformVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      group_path: cdktf.stringToTerraform(this._groupPath),
      max_job_duration: cdktf.numberToTerraform(this._maxJobDuration),
      name: cdktf.stringToTerraform(this._name),
      prevent_destroy_plan: cdktf.booleanToTerraform(this._preventDestroyPlan),
      terraform_version: cdktf.stringToTerraform(this._terraformVersion),
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
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_job_duration: {
        value: cdktf.numberToHclTerraform(this._maxJobDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_destroy_plan: {
        value: cdktf.booleanToHclTerraform(this._preventDestroyPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terraform_version: {
        value: cdktf.stringToHclTerraform(this._terraformVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
