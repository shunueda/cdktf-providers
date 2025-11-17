// https://registry.terraform.io/providers/britive/britive/2.2.5/docs/data-sources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBritiveConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/data-sources/connection#id DataBritiveConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/data-sources/connection#name DataBritiveConnection#name}
  */
  readonly name: string;
  /**
  * Advanced Setting Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/data-sources/connection#setting_type DataBritiveConnection#setting_type}
  */
  readonly settingType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/data-sources/connection britive_connection}
*/
export class DataBritiveConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBritiveConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBritiveConnection to import
  * @param importFromId The id of the existing DataBritiveConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/data-sources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBritiveConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/data-sources/connection britive_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBritiveConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataBritiveConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_connection',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.5',
        providerVersionConstraint: '2.2.5'
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
    this._settingType = config.settingType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
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

  // setting_type - computed: false, optional: true, required: false
  private _settingType?: string; 
  public get settingType() {
    return this.getStringAttribute('setting_type');
  }
  public set settingType(value: string) {
    this._settingType = value;
  }
  public resetSettingType() {
    this._settingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingTypeInput() {
    return this._settingType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      setting_type: cdktf.stringToTerraform(this._settingType),
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
      setting_type: {
        value: cdktf.stringToHclTerraform(this._settingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
