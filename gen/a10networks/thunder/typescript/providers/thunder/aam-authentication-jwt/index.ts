// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationJwtConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'redirect': redirect JWT to specific URI; 'relay': relay JWT to back-end;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#action AamAuthenticationJwt#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#id AamAuthenticationJwt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify JWT issuer claim value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#issuer AamAuthenticationJwt#issuer}
  */
  readonly issuer?: string;
  /**
  * Specify JWT relay URI (for relay action)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#jwt_relay_uri AamAuthenticationJwt#jwt_relay_uri}
  */
  readonly jwtRelayUri?: string;
  /**
  * Specify JWT issuer template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#name AamAuthenticationJwt#name}
  */
  readonly name: string;
  /**
  * The JWT signature secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#secret_string AamAuthenticationJwt#secret_string}
  */
  readonly secretString?: string;
  /**
  * Specify the JWT signature secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#signature_secret AamAuthenticationJwt#signature_secret}
  */
  readonly signatureSecret?: number;
  /**
  * Specify JWT token lifetime (Specify lifetime (in seconds), default is 300.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#token_lifetime AamAuthenticationJwt#token_lifetime}
  */
  readonly tokenLifetime?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#user_tag AamAuthenticationJwt#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#uuid AamAuthenticationJwt#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt thunder_aam_authentication_jwt}
*/
export class AamAuthenticationJwt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_jwt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationJwt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationJwt to import
  * @param importFromId The id of the existing AamAuthenticationJwt that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationJwt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_jwt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_jwt thunder_aam_authentication_jwt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationJwtConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationJwtConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_jwt',
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
    this._action = config.action;
    this._id = config.id;
    this._issuer = config.issuer;
    this._jwtRelayUri = config.jwtRelayUri;
    this._name = config.name;
    this._secretString = config.secretString;
    this._signatureSecret = config.signatureSecret;
    this._tokenLifetime = config.tokenLifetime;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwt_relay_uri - computed: false, optional: true, required: false
  private _jwtRelayUri?: string; 
  public get jwtRelayUri() {
    return this.getStringAttribute('jwt_relay_uri');
  }
  public set jwtRelayUri(value: string) {
    this._jwtRelayUri = value;
  }
  public resetJwtRelayUri() {
    this._jwtRelayUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtRelayUriInput() {
    return this._jwtRelayUri;
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

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // signature_secret - computed: false, optional: true, required: false
  private _signatureSecret?: number; 
  public get signatureSecret() {
    return this.getNumberAttribute('signature_secret');
  }
  public set signatureSecret(value: number) {
    this._signatureSecret = value;
  }
  public resetSignatureSecret() {
    this._signatureSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureSecretInput() {
    return this._signatureSecret;
  }

  // token_lifetime - computed: false, optional: true, required: false
  private _tokenLifetime?: number; 
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
  public set tokenLifetime(value: number) {
    this._tokenLifetime = value;
  }
  public resetTokenLifetime() {
    this._tokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeInput() {
    return this._tokenLifetime;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwt_relay_uri: cdktf.stringToTerraform(this._jwtRelayUri),
      name: cdktf.stringToTerraform(this._name),
      secret_string: cdktf.stringToTerraform(this._secretString),
      signature_secret: cdktf.numberToTerraform(this._signatureSecret),
      token_lifetime: cdktf.numberToTerraform(this._tokenLifetime),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_relay_uri: {
        value: cdktf.stringToHclTerraform(this._jwtRelayUri),
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
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_secret: {
        value: cdktf.numberToHclTerraform(this._signatureSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_lifetime: {
        value: cdktf.numberToHclTerraform(this._tokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
