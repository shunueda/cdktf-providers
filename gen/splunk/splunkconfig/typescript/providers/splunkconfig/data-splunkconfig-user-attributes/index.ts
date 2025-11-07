// https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/user_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSplunkconfigUserAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/user_attributes#id DataSplunkconfigUserAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/user_attributes#user_name DataSplunkconfigUserAttributes#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/user_attributes splunkconfig_user_attributes}
*/
export class DataSplunkconfigUserAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunkconfig_user_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSplunkconfigUserAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSplunkconfigUserAttributes to import
  * @param importFromId The id of the existing DataSplunkconfigUserAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/user_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSplunkconfigUserAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunkconfig_user_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/user_attributes splunkconfig_user_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSplunkconfigUserAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSplunkconfigUserAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunkconfig_user_attributes',
      terraformGeneratorMetadata: {
        providerName: 'splunkconfig',
        providerVersion: '1.7.4'
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
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // force_change_pass - computed: true, optional: false, required: false
  public get forceChangePass() {
    return this.getBooleanAttribute('force_change_pass');
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // realname - computed: true, optional: false, required: false
  public get realname() {
    return this.getStringAttribute('realname');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_name: cdktf.stringToTerraform(this._userName),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
