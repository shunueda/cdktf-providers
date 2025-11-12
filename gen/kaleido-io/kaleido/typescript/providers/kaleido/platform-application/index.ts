// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Grant the application the ability to act as an administrator of the platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#admin_enabled PlatformApplication#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#name PlatformApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#oauth PlatformApplication#oauth}
  */
  readonly oauth?: PlatformApplicationOauth;
  /**
  * Default true. An Identity Provider can be bound to an application to allow it to federate its own OAuth 2.0 authentication realm into the APIs of the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#oauth_enabled PlatformApplication#oauth_enabled}
  */
  readonly oauthEnabled?: boolean | cdktf.IResolvable;
}
export interface PlatformApplicationOauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#aud PlatformApplication#aud}
  */
  readonly aud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#azp PlatformApplication#azp}
  */
  readonly azp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#ca_certificate PlatformApplication#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#issuer PlatformApplication#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#jwks PlatformApplication#jwks}
  */
  readonly jwks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#jwks_endpoint PlatformApplication#jwks_endpoint}
  */
  readonly jwksEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#oidc_config_url PlatformApplication#oidc_config_url}
  */
  readonly oidcConfigUrl?: string;
}

export function platformApplicationOauthToTerraform(struct?: PlatformApplicationOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aud: cdktf.stringToTerraform(struct!.aud),
    azp: cdktf.stringToTerraform(struct!.azp),
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    jwks_endpoint: cdktf.stringToTerraform(struct!.jwksEndpoint),
    oidc_config_url: cdktf.stringToTerraform(struct!.oidcConfigUrl),
  }
}


export function platformApplicationOauthToHclTerraform(struct?: PlatformApplicationOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aud: {
      value: cdktf.stringToHclTerraform(struct!.aud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azp: {
      value: cdktf.stringToHclTerraform(struct!.azp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.jwksEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_config_url: {
      value: cdktf.stringToHclTerraform(struct!.oidcConfigUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformApplicationOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformApplicationOauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aud !== undefined) {
      hasAnyValues = true;
      internalValueResult.aud = this._aud;
    }
    if (this._azp !== undefined) {
      hasAnyValues = true;
      internalValueResult.azp = this._azp;
    }
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._jwksEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksEndpoint = this._jwksEndpoint;
    }
    if (this._oidcConfigUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcConfigUrl = this._oidcConfigUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformApplicationOauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aud = undefined;
      this._azp = undefined;
      this._caCertificate = undefined;
      this._issuer = undefined;
      this._jwks = undefined;
      this._jwksEndpoint = undefined;
      this._oidcConfigUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aud = value.aud;
      this._azp = value.azp;
      this._caCertificate = value.caCertificate;
      this._issuer = value.issuer;
      this._jwks = value.jwks;
      this._jwksEndpoint = value.jwksEndpoint;
      this._oidcConfigUrl = value.oidcConfigUrl;
    }
  }

  // aud - computed: true, optional: true, required: false
  private _aud?: string; 
  public get aud() {
    return this.getStringAttribute('aud');
  }
  public set aud(value: string) {
    this._aud = value;
  }
  public resetAud() {
    this._aud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audInput() {
    return this._aud;
  }

  // azp - computed: true, optional: true, required: false
  private _azp?: string; 
  public get azp() {
    return this.getStringAttribute('azp');
  }
  public set azp(value: string) {
    this._azp = value;
  }
  public resetAzp() {
    this._azp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azpInput() {
    return this._azp;
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
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

  // jwks - computed: true, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // jwks_endpoint - computed: true, optional: true, required: false
  private _jwksEndpoint?: string; 
  public get jwksEndpoint() {
    return this.getStringAttribute('jwks_endpoint');
  }
  public set jwksEndpoint(value: string) {
    this._jwksEndpoint = value;
  }
  public resetJwksEndpoint() {
    this._jwksEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksEndpointInput() {
    return this._jwksEndpoint;
  }

  // oidc_config_url - computed: true, optional: true, required: false
  private _oidcConfigUrl?: string; 
  public get oidcConfigUrl() {
    return this.getStringAttribute('oidc_config_url');
  }
  public set oidcConfigUrl(value: string) {
    this._oidcConfigUrl = value;
  }
  public resetOidcConfigUrl() {
    this._oidcConfigUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigUrlInput() {
    return this._oidcConfigUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application kaleido_platform_application}
*/
export class PlatformApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformApplication to import
  * @param importFromId The id of the existing PlatformApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_application kaleido_platform_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_application',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminEnabled = config.adminEnabled;
    this._name = config.name;
    this._oauth.internalValue = config.oauth;
    this._oauthEnabled = config.oauthEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: true, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oauth - computed: true, optional: true, required: false
  private _oauth = new PlatformApplicationOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: PlatformApplicationOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }

  // oauth_enabled - computed: true, optional: true, required: false
  private _oauthEnabled?: boolean | cdktf.IResolvable; 
  public get oauthEnabled() {
    return this.getBooleanAttribute('oauth_enabled');
  }
  public set oauthEnabled(value: boolean | cdktf.IResolvable) {
    this._oauthEnabled = value;
  }
  public resetOauthEnabled() {
    this._oauthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthEnabledInput() {
    return this._oauthEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      name: cdktf.stringToTerraform(this._name),
      oauth: platformApplicationOauthToTerraform(this._oauth.internalValue),
      oauth_enabled: cdktf.booleanToTerraform(this._oauthEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_enabled: {
        value: cdktf.booleanToHclTerraform(this._adminEnabled),
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
      oauth: {
        value: platformApplicationOauthToHclTerraform(this._oauth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlatformApplicationOauth",
      },
      oauth_enabled: {
        value: cdktf.booleanToHclTerraform(this._oauthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
