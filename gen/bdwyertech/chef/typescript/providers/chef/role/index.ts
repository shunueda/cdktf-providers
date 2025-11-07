// https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role#default_attributes_json Role#default_attributes_json}
  */
  readonly defaultAttributesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role#override_attributes_json Role#override_attributes_json}
  */
  readonly overrideAttributesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role#run_list Role#run_list}
  */
  readonly runList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role chef_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chef_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chef_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/role chef_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'chef_role',
      terraformGeneratorMetadata: {
        providerName: 'chef',
        providerVersion: '0.3.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAttributesJson = config.defaultAttributesJson;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._overrideAttributesJson = config.overrideAttributesJson;
    this._runList = config.runList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_attributes_json - computed: false, optional: true, required: false
  private _defaultAttributesJson?: string; 
  public get defaultAttributesJson() {
    return this.getStringAttribute('default_attributes_json');
  }
  public set defaultAttributesJson(value: string) {
    this._defaultAttributesJson = value;
  }
  public resetDefaultAttributesJson() {
    this._defaultAttributesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAttributesJsonInput() {
    return this._defaultAttributesJson;
  }

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

  // override_attributes_json - computed: false, optional: true, required: false
  private _overrideAttributesJson?: string; 
  public get overrideAttributesJson() {
    return this.getStringAttribute('override_attributes_json');
  }
  public set overrideAttributesJson(value: string) {
    this._overrideAttributesJson = value;
  }
  public resetOverrideAttributesJson() {
    this._overrideAttributesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAttributesJsonInput() {
    return this._overrideAttributesJson;
  }

  // run_list - computed: false, optional: true, required: false
  private _runList?: string[]; 
  public get runList() {
    return this.getListAttribute('run_list');
  }
  public set runList(value: string[]) {
    this._runList = value;
  }
  public resetRunList() {
    this._runList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runListInput() {
    return this._runList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_attributes_json: cdktf.stringToTerraform(this._defaultAttributesJson),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      override_attributes_json: cdktf.stringToTerraform(this._overrideAttributesJson),
      run_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_attributes_json: {
        value: cdktf.stringToHclTerraform(this._defaultAttributesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      override_attributes_json: {
        value: cdktf.stringToHclTerraform(this._overrideAttributesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
