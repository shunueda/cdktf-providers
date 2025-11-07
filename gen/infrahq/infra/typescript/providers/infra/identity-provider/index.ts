// https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identity provider's OIDC client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The identity provider's OIDC client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The identity provider's full authorization server URL. Must start with `https://`. One of `issuer`, `google`, `azure`, `okta` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#issuer IdentityProvider#issuer}
  */
  readonly issuer?: string;
  /**
  * The identity provider's name. If omitted, a name will be automatically generated. Identity provider names may include letters (uppercase and lowercase), numbers, underscores `_`, hyphens `-`, and periods `.`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#name IdentityProvider#name}
  */
  readonly name?: string;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#azure IdentityProvider#azure}
  */
  readonly azure?: IdentityProviderAzure;
  /**
  * google block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#google IdentityProvider#google}
  */
  readonly google?: IdentityProviderGoogle;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#okta IdentityProvider#okta}
  */
  readonly okta?: IdentityProviderOkta;
}
export interface IdentityProviderAzure {
  /**
  * The Azure AD tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#tenant_id IdentityProvider#tenant_id}
  */
  readonly tenantId: string;
}

export function identityProviderAzureToTerraform(struct?: IdentityProviderAzureOutputReference | IdentityProviderAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function identityProviderAzureToHclTerraform(struct?: IdentityProviderAzureOutputReference | IdentityProviderAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityProviderAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tenantId = value.tenantId;
    }
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface IdentityProviderGoogle {
  /**
  * A Google workspace admin user email. Infra will impersonate this user when making API calls to retrieve Google groups. If set, `service_account_key` must also be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#admin_email IdentityProvider#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * A Google service account private key file. Must be a JSON-formatted string. If set, `admin_email` must also be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#service_account_key IdentityProvider#service_account_key}
  */
  readonly serviceAccountKey?: string;
}

export function identityProviderGoogleToTerraform(struct?: IdentityProviderGoogleOutputReference | IdentityProviderGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    service_account_key: cdktf.stringToTerraform(struct!.serviceAccountKey),
  }
}


export function identityProviderGoogleToHclTerraform(struct?: IdentityProviderGoogleOutputReference | IdentityProviderGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityProviderGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._serviceAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKey = this._serviceAccountKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderGoogle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmail = undefined;
      this._serviceAccountKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmail = value.adminEmail;
      this._serviceAccountKey = value.serviceAccountKey;
    }
  }

  // admin_email - computed: false, optional: true, required: false
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  public resetAdminEmail() {
    this._adminEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // service_account_key - computed: false, optional: true, required: false
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }
  public set serviceAccountKey(value: string) {
    this._serviceAccountKey = value;
  }
  public resetServiceAccountKey() {
    this._serviceAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }
}
export interface IdentityProviderOkta {
  /**
  * The full Okta authorization server URL. Must start with `https://`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#issuer IdentityProvider#issuer}
  */
  readonly issuer: string;
}

export function identityProviderOktaToTerraform(struct?: IdentityProviderOktaOutputReference | IdentityProviderOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function identityProviderOktaToHclTerraform(struct?: IdentityProviderOktaOutputReference | IdentityProviderOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityProviderOkta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderOkta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider infra_identity_provider}
*/
export class IdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infra_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProvider to import
  * @param importFromId The id of the existing IdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infra_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/identity_provider infra_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'infra_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'infra',
        providerVersion: '0.3.0'
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
    this._name = config.name;
    this._azure.internalValue = config.azure;
    this._google.internalValue = config.google;
    this._okta.internalValue = config.okta;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new IdentityProviderAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: IdentityProviderAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new IdentityProviderGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: IdentityProviderGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new IdentityProviderOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: IdentityProviderOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      azure: identityProviderAzureToTerraform(this._azure.internalValue),
      google: identityProviderGoogleToTerraform(this._google.internalValue),
      okta: identityProviderOktaToTerraform(this._okta.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure: {
        value: identityProviderAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityProviderAzureList",
      },
      google: {
        value: identityProviderGoogleToHclTerraform(this._google.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityProviderGoogleList",
      },
      okta: {
        value: identityProviderOktaToHclTerraform(this._okta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityProviderOktaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
