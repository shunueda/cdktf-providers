// https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether SSO is enabled or not. If enabled, users will be redirected to the SSO endpoint for authentication. The configuration needs to be valid for SSO to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#enabled SsoConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#id SsoConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The client ID of the OIDC application. This is used to identify the application to the OIDC service. This is required if the type is OIDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#oidc_client_id SsoConfig#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * The client secret of the OIDC application. This is used to authenticate the application to the OIDC service. This is required if the type is OIDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#oidc_secret SsoConfig#oidc_secret}
  */
  readonly oidcSecret?: string;
  /**
  * The public certificate of the SSO service. This is used to verify the SSO response. The certificate must be in PEM format. The certificate must be accessible from the browser. If the certificate is not accessible from the browser, you can use the public certificate of the Identity Provider (IdP) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#public_certificate SsoConfig#public_certificate}
  */
  readonly publicCertificate: string;
  /**
  * Indicates whether the SSO request needs to be digitally signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#sign_request SsoConfig#sign_request}
  */
  readonly signRequest: boolean | cdktf.IResolvable;
  /**
  * The URL endpoint for the SSO service. This is the URL that users will be redirected to for authentication. The URL must be accessible from the browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#sso_endpoint SsoConfig#sso_endpoint}
  */
  readonly ssoEndpoint: string;
  /**
  * Defines the type of SSO protocol being used (e.g., saml, oidc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#type SsoConfig#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config materialize_sso_config}
*/
export class SsoConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_sso_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoConfig to import
  * @param importFromId The id of the existing SsoConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_sso_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sso_config materialize_sso_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SsoConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_sso_config',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.3',
        providerVersionConstraint: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._oidcClientId = config.oidcClientId;
    this._oidcSecret = config.oidcSecret;
    this._publicCertificate = config.publicCertificate;
    this._signRequest = config.signRequest;
    this._ssoEndpoint = config.ssoEndpoint;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // oidc_client_id - computed: false, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_secret - computed: false, optional: true, required: false
  private _oidcSecret?: string; 
  public get oidcSecret() {
    return this.getStringAttribute('oidc_secret');
  }
  public set oidcSecret(value: string) {
    this._oidcSecret = value;
  }
  public resetOidcSecret() {
    this._oidcSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcSecretInput() {
    return this._oidcSecret;
  }

  // public_certificate - computed: false, optional: false, required: true
  private _publicCertificate?: string; 
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string) {
    this._publicCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate;
  }

  // sign_request - computed: false, optional: false, required: true
  private _signRequest?: boolean | cdktf.IResolvable; 
  public get signRequest() {
    return this.getBooleanAttribute('sign_request');
  }
  public set signRequest(value: boolean | cdktf.IResolvable) {
    this._signRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signRequestInput() {
    return this._signRequest;
  }

  // sso_endpoint - computed: false, optional: false, required: true
  private _ssoEndpoint?: string; 
  public get ssoEndpoint() {
    return this.getStringAttribute('sso_endpoint');
  }
  public set ssoEndpoint(value: string) {
    this._ssoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoEndpointInput() {
    return this._ssoEndpoint;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      oidc_secret: cdktf.stringToTerraform(this._oidcSecret),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
      sign_request: cdktf.booleanToTerraform(this._signRequest),
      sso_endpoint: cdktf.stringToTerraform(this._ssoEndpoint),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_secret: {
        value: cdktf.stringToHclTerraform(this._oidcSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_certificate: {
        value: cdktf.stringToHclTerraform(this._publicCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_request: {
        value: cdktf.booleanToHclTerraform(this._signRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sso_endpoint: {
        value: cdktf.stringToHclTerraform(this._ssoEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
