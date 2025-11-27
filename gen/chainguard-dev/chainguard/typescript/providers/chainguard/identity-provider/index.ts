// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the role new users are bound to on first login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#default_role IdentityProvider#default_role}
  */
  readonly defaultRole: string;
  /**
  * A longer description of the purpose of this identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#description IdentityProvider#description}
  */
  readonly description?: string;
  /**
  * The name of this identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#name IdentityProvider#name}
  */
  readonly name: string;
  /**
  * The group containing this identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#parent_id IdentityProvider#parent_id}
  */
  readonly parentId: string;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#oidc IdentityProvider#oidc}
  */
  readonly oidc?: IdentityProviderOidc;
}
export interface IdentityProviderOidc {
  /**
  * List of scopes to request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#additional_scopes IdentityProvider#additional_scopes}
  */
  readonly additionalScopes?: string[];
  /**
  * Client ID for OIDC identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret for OIDC identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Issuer URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#issuer IdentityProvider#issuer}
  */
  readonly issuer?: string;
}

export function identityProviderOidcToTerraform(struct?: IdentityProviderOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalScopes),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function identityProviderOidcToHclTerraform(struct?: IdentityProviderOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalScopes = this._additionalScopes;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalScopes = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalScopes = value.additionalScopes;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
    }
  }

  // additional_scopes - computed: false, optional: true, required: false
  private _additionalScopes?: string[]; 
  public get additionalScopes() {
    return this.getListAttribute('additional_scopes');
  }
  public set additionalScopes(value: string[]) {
    this._additionalScopes = value;
  }
  public resetAdditionalScopes() {
    this._additionalScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalScopesInput() {
    return this._additionalScopes;
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider chainguard_identity_provider}
*/
export class IdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProvider to import
  * @param importFromId The id of the existing IdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/identity_provider chainguard_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.42',
        providerVersionConstraint: '0.1.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRole = config.defaultRole;
    this._description = config.description;
    this._name = config.name;
    this._parentId = config.parentId;
    this._oidc.internalValue = config.oidc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_role - computed: false, optional: false, required: true
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new IdentityProviderOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: IdentityProviderOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_role: cdktf.stringToTerraform(this._defaultRole),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      oidc: identityProviderOidcToTerraform(this._oidc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_role: {
        value: cdktf.stringToHclTerraform(this._defaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc: {
        value: identityProviderOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderOidc",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
