// https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/usergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSlackUsergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/usergroup#id DataSlackUsergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/usergroup#name DataSlackUsergroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/usergroup#usergroup_id DataSlackUsergroup#usergroup_id}
  */
  readonly usergroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/usergroup slack_usergroup}
*/
export class DataSlackUsergroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "slack_usergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSlackUsergroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSlackUsergroup to import
  * @param importFromId The id of the existing DataSlackUsergroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/usergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSlackUsergroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "slack_usergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/usergroup slack_usergroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSlackUsergroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSlackUsergroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'slack_usergroup',
      terraformGeneratorMetadata: {
        providerName: 'slack',
        providerVersion: '1.2.2'
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
    this._name = config.name;
    this._usergroupId = config.usergroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channels - computed: true, optional: false, required: false
  public get channels() {
    return cdktf.Fn.tolist(this.getListAttribute('channels'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // handle - computed: true, optional: false, required: false
  public get handle() {
    return this.getStringAttribute('handle');
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

  // name - computed: false, optional: true, required: false
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

  // usergroup_id - computed: false, optional: true, required: false
  private _usergroupId?: string; 
  public get usergroupId() {
    return this.getStringAttribute('usergroup_id');
  }
  public set usergroupId(value: string) {
    this._usergroupId = value;
  }
  public resetUsergroupId() {
    this._usergroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupIdInput() {
    return this._usergroupId;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      usergroup_id: cdktf.stringToTerraform(this._usergroupId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usergroup_id: {
        value: cdktf.stringToHclTerraform(this._usergroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
