// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFirehydrantRotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/rotation#id DataFirehydrantRotation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/rotation#schedule_id DataFirehydrantRotation#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/rotation#team_id DataFirehydrantRotation#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/rotation firehydrant_rotation}
*/
export class DataFirehydrantRotation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFirehydrantRotation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFirehydrantRotation to import
  * @param importFromId The id of the existing DataFirehydrantRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFirehydrantRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/rotation firehydrant_rotation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFirehydrantRotationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFirehydrantRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_rotation',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.12',
        providerVersionConstraint: '0.14.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._scheduleId = config.scheduleId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schedule_id - computed: false, optional: false, required: true
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // slack_user_group_id - computed: true, optional: false, required: false
  public get slackUserGroupId() {
    return this.getStringAttribute('slack_user_group_id');
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
