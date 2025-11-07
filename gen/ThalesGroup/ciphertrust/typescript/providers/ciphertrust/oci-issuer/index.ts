// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updatedable) Client ID of the CipherTrust Manager application as registered on third-party IDP. Required if jwks_uri_protected is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#client_id OciIssuer#client_id}
  */
  readonly clientId?: string;
  /**
  * (Updatedable) Client secret of the CipherTrust Manager application as registered on third-party IDP. Required if jwks_uri_protected is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#client_secret OciIssuer#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Issuer URL for the issuer. Either openid_config_url or (issuer and jwks_uri) is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#issuer OciIssuer#issuer}
  */
  readonly issuer?: string;
  /**
  * (Updatedable) URI of JWKS, for example, https://abc.auth0.com/.well-known/jwks.json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#jwks_uri OciIssuer#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Set true for a protected JWSK URI. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#jwks_uri_protected OciIssuer#jwks_uri_protected}
  */
  readonly jwksUriProtected?: boolean | cdktf.IResolvable;
  /**
  * (Updatedable) Name of the issuer. It should be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#name OciIssuer#name}
  */
  readonly name: string;
  /**
  * OpenID configuration URL for the issuer. Either openid_config_url or (issuer and jwks_uri) is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#openid_config_url OciIssuer#openid_config_url}
  */
  readonly openidConfigUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer ciphertrust_oci_issuer}
*/
export class OciIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciIssuer to import
  * @param importFromId The id of the existing OciIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_issuer ciphertrust_oci_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: OciIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_issuer',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._issuer = config.issuer;
    this._jwksUri = config.jwksUri;
    this._jwksUriProtected = config.jwksUriProtected;
    this._name = config.name;
    this._openidConfigUrl = config.openidConfigUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: true, required: false
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

  // jwks_uri - computed: true, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // jwks_uri_protected - computed: true, optional: true, required: false
  private _jwksUriProtected?: boolean | cdktf.IResolvable; 
  public get jwksUriProtected() {
    return this.getBooleanAttribute('jwks_uri_protected');
  }
  public set jwksUriProtected(value: boolean | cdktf.IResolvable) {
    this._jwksUriProtected = value;
  }
  public resetJwksUriProtected() {
    this._jwksUriProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriProtectedInput() {
    return this._jwksUriProtected;
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

  // openid_config_url - computed: false, optional: true, required: false
  private _openidConfigUrl?: string; 
  public get openidConfigUrl() {
    return this.getStringAttribute('openid_config_url');
  }
  public set openidConfigUrl(value: string) {
    this._openidConfigUrl = value;
  }
  public resetOpenidConfigUrl() {
    this._openidConfigUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConfigUrlInput() {
    return this._openidConfigUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
      jwks_uri_protected: cdktf.booleanToTerraform(this._jwksUriProtected),
      name: cdktf.stringToTerraform(this._name),
      openid_config_url: cdktf.stringToTerraform(this._openidConfigUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      jwks_uri: {
        value: cdktf.stringToHclTerraform(this._jwksUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri_protected: {
        value: cdktf.booleanToHclTerraform(this._jwksUriProtected),
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
      openid_config_url: {
        value: cdktf.stringToHclTerraform(this._openidConfigUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
