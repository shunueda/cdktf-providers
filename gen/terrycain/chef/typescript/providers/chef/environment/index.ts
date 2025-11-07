// https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment#cookbook_constraints Environment#cookbook_constraints}
  */
  readonly cookbookConstraints?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment#default_attributes_json Environment#default_attributes_json}
  */
  readonly defaultAttributesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment#override_attributes_json Environment#override_attributes_json}
  */
  readonly overrideAttributesJson?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment chef_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chef_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chef_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/environment chef_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'chef_environment',
      terraformGeneratorMetadata: {
        providerName: 'chef',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookbookConstraints = config.cookbookConstraints;
    this._defaultAttributesJson = config.defaultAttributesJson;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._overrideAttributesJson = config.overrideAttributesJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookbook_constraints - computed: false, optional: true, required: false
  private _cookbookConstraints?: { [key: string]: string }; 
  public get cookbookConstraints() {
    return this.getStringMapAttribute('cookbook_constraints');
  }
  public set cookbookConstraints(value: { [key: string]: string }) {
    this._cookbookConstraints = value;
  }
  public resetCookbookConstraints() {
    this._cookbookConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookbookConstraintsInput() {
    return this._cookbookConstraints;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookbook_constraints: cdktf.hashMapper(cdktf.stringToTerraform)(this._cookbookConstraints),
      default_attributes_json: cdktf.stringToTerraform(this._defaultAttributesJson),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      override_attributes_json: cdktf.stringToTerraform(this._overrideAttributesJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookbook_constraints: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._cookbookConstraints),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
