// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_auth_saml_idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeleteAuthSamlIdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_auth_saml_idp#id DeleteAuthSamlIdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local IDP metadata name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_auth_saml_idp#saml_idp_name DeleteAuthSamlIdp#saml_idp_name}
  */
  readonly samlIdpName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_auth_saml_idp thunder_delete_auth_saml_idp}
*/
export class DeleteAuthSamlIdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_delete_auth_saml_idp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeleteAuthSamlIdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeleteAuthSamlIdp to import
  * @param importFromId The id of the existing DeleteAuthSamlIdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_auth_saml_idp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeleteAuthSamlIdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_delete_auth_saml_idp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_auth_saml_idp thunder_delete_auth_saml_idp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeleteAuthSamlIdpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeleteAuthSamlIdpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_delete_auth_saml_idp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._samlIdpName = config.samlIdpName;
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

  // saml_idp_name - computed: false, optional: true, required: false
  private _samlIdpName?: string; 
  public get samlIdpName() {
    return this.getStringAttribute('saml_idp_name');
  }
  public set samlIdpName(value: string) {
    this._samlIdpName = value;
  }
  public resetSamlIdpName() {
    this._samlIdpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpNameInput() {
    return this._samlIdpName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      saml_idp_name: cdktf.stringToTerraform(this._samlIdpName),
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
      saml_idp_name: {
        value: cdktf.stringToHclTerraform(this._samlIdpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
