// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeploySpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this resource, no more than 20 characters long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/space#name DataOctopusdeploySpace#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/space octopusdeploy_space}
*/
export class DataOctopusdeploySpace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeploySpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeploySpace to import
  * @param importFromId The id of the existing DataOctopusdeploySpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeploySpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/space octopusdeploy_space} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeploySpaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeploySpaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_space',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_task_queue_stopped - computed: true, optional: false, required: false
  public get isTaskQueueStopped() {
    return this.getBooleanAttribute('is_task_queue_stopped');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // space_managers_team_members - computed: true, optional: false, required: false
  public get spaceManagersTeamMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('space_managers_team_members'));
  }

  // space_managers_teams - computed: true, optional: false, required: false
  public get spaceManagersTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('space_managers_teams'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
