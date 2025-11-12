// https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/data-sources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataChefNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/data-sources/node#id DataChefNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/data-sources/node#name DataChefNode#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/data-sources/node chef_node}
*/
export class DataChefNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chef_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataChefNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataChefNode to import
  * @param importFromId The id of the existing DataChefNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/data-sources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataChefNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chef_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/data-sources/node chef_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataChefNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataChefNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'chef_node',
      terraformGeneratorMetadata: {
        providerName: 'chef',
        providerVersion: '0.3.17',
        providerVersionConstraint: '0.3.17'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_attributes_json - computed: true, optional: false, required: false
  public get automaticAttributesJson() {
    return this.getStringAttribute('automatic_attributes_json');
  }

  // default_attributes_json - computed: true, optional: false, required: false
  public get defaultAttributesJson() {
    return this.getStringAttribute('default_attributes_json');
  }

  // environment_name - computed: true, optional: false, required: false
  public get environmentName() {
    return this.getStringAttribute('environment_name');
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

  // normal_attributes_json - computed: true, optional: false, required: false
  public get normalAttributesJson() {
    return this.getStringAttribute('normal_attributes_json');
  }

  // override_attributes_json - computed: true, optional: false, required: false
  public get overrideAttributesJson() {
    return this.getStringAttribute('override_attributes_json');
  }

  // run_list - computed: true, optional: false, required: false
  public get runList() {
    return this.getListAttribute('run_list');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
