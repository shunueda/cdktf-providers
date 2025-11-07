// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/account_idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCodefreshAccountIdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/account_idp#client_name DataCodefreshAccountIdp#client_name}
  */
  readonly clientName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/account_idp#id DataCodefreshAccountIdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/account_idp codefresh_account_idp}
*/
export class DataCodefreshAccountIdp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_account_idp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCodefreshAccountIdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCodefreshAccountIdp to import
  * @param importFromId The id of the existing DataCodefreshAccountIdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/account_idp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCodefreshAccountIdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_account_idp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/data-sources/account_idp codefresh_account_idp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCodefreshAccountIdpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCodefreshAccountIdpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'codefresh_account_idp',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientName = config.clientName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_name - computed: false, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_type - computed: true, optional: false, required: false
  public get clientType() {
    return this.getStringAttribute('client_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // login_url - computed: true, optional: false, required: false
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }

  // redirect_ui_url - computed: true, optional: false, required: false
  public get redirectUiUrl() {
    return this.getStringAttribute('redirect_ui_url');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_name: cdktf.stringToTerraform(this._clientName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
