// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationloginschemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#authenticationschema Authenticationloginschema#authenticationschema}
  */
  readonly authenticationschema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#authenticationstrength Authenticationloginschema#authenticationstrength}
  */
  readonly authenticationstrength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#id Authenticationloginschema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#name Authenticationloginschema#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#passwdexpression Authenticationloginschema#passwdexpression}
  */
  readonly passwdexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#passwordcredentialindex Authenticationloginschema#passwordcredentialindex}
  */
  readonly passwordcredentialindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#ssocredentials Authenticationloginschema#ssocredentials}
  */
  readonly ssocredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#usercredentialindex Authenticationloginschema#usercredentialindex}
  */
  readonly usercredentialindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#userexpression Authenticationloginschema#userexpression}
  */
  readonly userexpression?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema citrixadc_authenticationloginschema}
*/
export class Authenticationloginschema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationloginschema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationloginschema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationloginschema to import
  * @param importFromId The id of the existing Authenticationloginschema that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationloginschema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationloginschema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationloginschema citrixadc_authenticationloginschema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationloginschemaConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationloginschemaConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationloginschema',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationschema = config.authenticationschema;
    this._authenticationstrength = config.authenticationstrength;
    this._id = config.id;
    this._name = config.name;
    this._passwdexpression = config.passwdexpression;
    this._passwordcredentialindex = config.passwordcredentialindex;
    this._ssocredentials = config.ssocredentials;
    this._usercredentialindex = config.usercredentialindex;
    this._userexpression = config.userexpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticationschema - computed: false, optional: false, required: true
  private _authenticationschema?: string; 
  public get authenticationschema() {
    return this.getStringAttribute('authenticationschema');
  }
  public set authenticationschema(value: string) {
    this._authenticationschema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationschemaInput() {
    return this._authenticationschema;
  }

  // authenticationstrength - computed: true, optional: true, required: false
  private _authenticationstrength?: number; 
  public get authenticationstrength() {
    return this.getNumberAttribute('authenticationstrength');
  }
  public set authenticationstrength(value: number) {
    this._authenticationstrength = value;
  }
  public resetAuthenticationstrength() {
    this._authenticationstrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationstrengthInput() {
    return this._authenticationstrength;
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

  // passwdexpression - computed: true, optional: true, required: false
  private _passwdexpression?: string; 
  public get passwdexpression() {
    return this.getStringAttribute('passwdexpression');
  }
  public set passwdexpression(value: string) {
    this._passwdexpression = value;
  }
  public resetPasswdexpression() {
    this._passwdexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdexpressionInput() {
    return this._passwdexpression;
  }

  // passwordcredentialindex - computed: true, optional: true, required: false
  private _passwordcredentialindex?: number; 
  public get passwordcredentialindex() {
    return this.getNumberAttribute('passwordcredentialindex');
  }
  public set passwordcredentialindex(value: number) {
    this._passwordcredentialindex = value;
  }
  public resetPasswordcredentialindex() {
    this._passwordcredentialindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordcredentialindexInput() {
    return this._passwordcredentialindex;
  }

  // ssocredentials - computed: true, optional: true, required: false
  private _ssocredentials?: string; 
  public get ssocredentials() {
    return this.getStringAttribute('ssocredentials');
  }
  public set ssocredentials(value: string) {
    this._ssocredentials = value;
  }
  public resetSsocredentials() {
    this._ssocredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssocredentialsInput() {
    return this._ssocredentials;
  }

  // usercredentialindex - computed: true, optional: true, required: false
  private _usercredentialindex?: number; 
  public get usercredentialindex() {
    return this.getNumberAttribute('usercredentialindex');
  }
  public set usercredentialindex(value: number) {
    this._usercredentialindex = value;
  }
  public resetUsercredentialindex() {
    this._usercredentialindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usercredentialindexInput() {
    return this._usercredentialindex;
  }

  // userexpression - computed: true, optional: true, required: false
  private _userexpression?: string; 
  public get userexpression() {
    return this.getStringAttribute('userexpression');
  }
  public set userexpression(value: string) {
    this._userexpression = value;
  }
  public resetUserexpression() {
    this._userexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userexpressionInput() {
    return this._userexpression;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticationschema: cdktf.stringToTerraform(this._authenticationschema),
      authenticationstrength: cdktf.numberToTerraform(this._authenticationstrength),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passwdexpression: cdktf.stringToTerraform(this._passwdexpression),
      passwordcredentialindex: cdktf.numberToTerraform(this._passwordcredentialindex),
      ssocredentials: cdktf.stringToTerraform(this._ssocredentials),
      usercredentialindex: cdktf.numberToTerraform(this._usercredentialindex),
      userexpression: cdktf.stringToTerraform(this._userexpression),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticationschema: {
        value: cdktf.stringToHclTerraform(this._authenticationschema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticationstrength: {
        value: cdktf.numberToHclTerraform(this._authenticationstrength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      passwdexpression: {
        value: cdktf.stringToHclTerraform(this._passwdexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwordcredentialindex: {
        value: cdktf.numberToHclTerraform(this._passwordcredentialindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssocredentials: {
        value: cdktf.stringToHclTerraform(this._ssocredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usercredentialindex: {
        value: cdktf.numberToHclTerraform(this._usercredentialindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      userexpression: {
        value: cdktf.stringToHclTerraform(this._userexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
