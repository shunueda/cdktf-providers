// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/list_global_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlkiraListGlobalCidrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/list_global_cidr#id DataAlkiraListGlobalCidr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Global CIDR List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/list_global_cidr#name DataAlkiraListGlobalCidr#name}
  */
  readonly name: string;
  /**
  * The values of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/list_global_cidr#values DataAlkiraListGlobalCidr#values}
  */
  readonly values?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/list_global_cidr alkira_list_global_cidr}
*/
export class DataAlkiraListGlobalCidr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_list_global_cidr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlkiraListGlobalCidr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlkiraListGlobalCidr to import
  * @param importFromId The id of the existing DataAlkiraListGlobalCidr that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/list_global_cidr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlkiraListGlobalCidr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_list_global_cidr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/data-sources/list_global_cidr alkira_list_global_cidr} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlkiraListGlobalCidrConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlkiraListGlobalCidrConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_list_global_cidr',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
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
    this._values = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // values - computed: true, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      values: cdktf.stringToTerraform(this._values),
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
      values: {
        value: cdktf.stringToHclTerraform(this._values),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
