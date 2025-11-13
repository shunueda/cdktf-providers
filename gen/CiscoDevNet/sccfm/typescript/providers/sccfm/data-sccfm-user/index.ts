// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSccfmUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * CDO has two kinds of users: actual users with email addresses and API-only users for programmatic access. This boolean indicates what type of user this is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/user#is_api_only_user DataSccfmUser#is_api_only_user}
  */
  readonly isApiOnlyUser: boolean | cdktf.IResolvable;
  /**
  * Name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/user#name DataSccfmUser#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/user sccfm_user}
*/
export class DataSccfmUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSccfmUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSccfmUser to import
  * @param importFromId The id of the existing DataSccfmUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSccfmUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/user sccfm_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSccfmUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataSccfmUserConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_user',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isApiOnlyUser = config.isApiOnlyUser;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_api_only_user - computed: false, optional: false, required: true
  private _isApiOnlyUser?: boolean | cdktf.IResolvable; 
  public get isApiOnlyUser() {
    return this.getBooleanAttribute('is_api_only_user');
  }
  public set isApiOnlyUser(value: boolean | cdktf.IResolvable) {
    this._isApiOnlyUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isApiOnlyUserInput() {
    return this._isApiOnlyUser;
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

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_api_only_user: cdktf.booleanToTerraform(this._isApiOnlyUser),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_api_only_user: {
        value: cdktf.booleanToHclTerraform(this._isApiOnlyUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
