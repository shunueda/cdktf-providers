// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_saml_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSamlKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_saml_key#id IdpSamlKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * base64-encoded X.509 certificate chain with DER encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_saml_key#x5c IdpSamlKey#x5c}
  */
  readonly x5C: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_saml_key okta_idp_saml_key}
*/
export class IdpSamlKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_saml_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSamlKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSamlKey to import
  * @param importFromId The id of the existing IdpSamlKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_saml_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSamlKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_idp_saml_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/idp_saml_key okta_idp_saml_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSamlKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSamlKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_saml_key',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
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
    this._x5C = config.x5C;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }

  // x5c - computed: false, optional: false, required: true
  private _x5C?: string[]; 
  public get x5C() {
    return cdktf.Fn.tolist(this.getListAttribute('x5c'));
  }
  public set x5C(value: string[]) {
    this._x5C = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x5CInput() {
    return this._x5C;
  }

  // x5t_s256 - computed: true, optional: false, required: false
  public get x5TS256() {
    return this.getStringAttribute('x5t_s256');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      x5c: cdktf.listMapper(cdktf.stringToTerraform, false)(this._x5C),
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
      x5c: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._x5C),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
