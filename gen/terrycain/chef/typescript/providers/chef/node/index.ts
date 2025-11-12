// https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#automatic_attributes_json Node#automatic_attributes_json}
  */
  readonly automaticAttributesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#default_attributes_json Node#default_attributes_json}
  */
  readonly defaultAttributesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#environment_name Node#environment_name}
  */
  readonly environmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#id Node#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#name Node#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#normal_attributes_json Node#normal_attributes_json}
  */
  readonly normalAttributesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#override_attributes_json Node#override_attributes_json}
  */
  readonly overrideAttributesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#run_list Node#run_list}
  */
  readonly runList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node chef_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chef_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Node resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Node to import
  * @param importFromId The id of the existing Node that should be imported. Refer to the {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Node to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chef_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terrycain/chef/0.3.2/docs/resources/node chef_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
    super(scope, id, {
      terraformResourceType: 'chef_node',
      terraformGeneratorMetadata: {
        providerName: 'chef',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticAttributesJson = config.automaticAttributesJson;
    this._defaultAttributesJson = config.defaultAttributesJson;
    this._environmentName = config.environmentName;
    this._id = config.id;
    this._name = config.name;
    this._normalAttributesJson = config.normalAttributesJson;
    this._overrideAttributesJson = config.overrideAttributesJson;
    this._runList = config.runList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_attributes_json - computed: false, optional: true, required: false
  private _automaticAttributesJson?: string; 
  public get automaticAttributesJson() {
    return this.getStringAttribute('automatic_attributes_json');
  }
  public set automaticAttributesJson(value: string) {
    this._automaticAttributesJson = value;
  }
  public resetAutomaticAttributesJson() {
    this._automaticAttributesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticAttributesJsonInput() {
    return this._automaticAttributesJson;
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

  // environment_name - computed: false, optional: true, required: false
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  public resetEnvironmentName() {
    this._environmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
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

  // normal_attributes_json - computed: false, optional: true, required: false
  private _normalAttributesJson?: string; 
  public get normalAttributesJson() {
    return this.getStringAttribute('normal_attributes_json');
  }
  public set normalAttributesJson(value: string) {
    this._normalAttributesJson = value;
  }
  public resetNormalAttributesJson() {
    this._normalAttributesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalAttributesJsonInput() {
    return this._normalAttributesJson;
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
      automatic_attributes_json: cdktf.stringToTerraform(this._automaticAttributesJson),
      default_attributes_json: cdktf.stringToTerraform(this._defaultAttributesJson),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      normal_attributes_json: cdktf.stringToTerraform(this._normalAttributesJson),
      override_attributes_json: cdktf.stringToTerraform(this._overrideAttributesJson),
      run_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_attributes_json: {
        value: cdktf.stringToHclTerraform(this._automaticAttributesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_attributes_json: {
        value: cdktf.stringToHclTerraform(this._defaultAttributesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
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
      normal_attributes_json: {
        value: cdktf.stringToHclTerraform(this._normalAttributesJson),
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
