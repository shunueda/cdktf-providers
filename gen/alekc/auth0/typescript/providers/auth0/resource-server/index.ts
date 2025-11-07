// https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether or not refresh tokens can be issued for this resource server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#allow_offline_access ResourceServer#allow_offline_access}
  */
  readonly allowOfflineAccess?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not authorization polices are enforced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#enforce_policies ResourceServer#enforce_policies}
  */
  readonly enforcePolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#id ResourceServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier for the resource server. Used as the audience parameter for authorization calls. Can not be changed once set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#identifier ResourceServer#identifier}
  */
  readonly identifier?: string;
  /**
  * Friendly name for the resource server. Cannot include `<` or `>` characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#name ResourceServer#name}
  */
  readonly name?: string;
  /**
  * Used to store additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#options ResourceServer#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Algorithm used to sign JWTs. Options include `HS256` and `RS256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#signing_alg ResourceServer#signing_alg}
  */
  readonly signingAlg?: string;
  /**
  * Secret used to sign tokens when using symmetric algorithms (HS256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#signing_secret ResourceServer#signing_secret}
  */
  readonly signingSecret?: string;
  /**
  * Indicates whether or not to skip user consent for applications flagged as first party
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#skip_consent_for_verifiable_first_party_clients ResourceServer#skip_consent_for_verifiable_first_party_clients}
  */
  readonly skipConsentForVerifiableFirstPartyClients?: boolean | cdktf.IResolvable;
  /**
  * Dialect of access tokens that should be issued for this resource server. Options include `access_token` or `access_token_authz` (includes permissions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#token_dialect ResourceServer#token_dialect}
  */
  readonly tokenDialect?: string;
  /**
  * Number of seconds during which access tokens issued for this resource server from the token endpoint remain valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#token_lifetime ResourceServer#token_lifetime}
  */
  readonly tokenLifetime?: number;
  /**
  * Number of seconds during which access tokens issued for this resource server via implicit or hybrid flows remain valid. Cannot be greater than the `token_lifetime` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#token_lifetime_for_web ResourceServer#token_lifetime_for_web}
  */
  readonly tokenLifetimeForWeb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#verification_location ResourceServer#verification_location}
  */
  readonly verificationLocation?: string;
  /**
  * scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#scopes ResourceServer#scopes}
  */
  readonly scopes?: ResourceServerScopes[] | cdktf.IResolvable;
}
export interface ResourceServerScopes {
  /**
  * Description of the permission (scope)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#description ResourceServer#description}
  */
  readonly description?: string;
  /**
  * Name of the permission (scope). Examples include `read:appointments` or `delete:appointments`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#value ResourceServer#value}
  */
  readonly value: string;
}

export function resourceServerScopesToTerraform(struct?: ResourceServerScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function resourceServerScopesToHclTerraform(struct?: ResourceServerScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ResourceServerScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ResourceServerScopesList extends cdktf.ComplexList {
  public internalValue? : ResourceServerScopes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ResourceServerScopesOutputReference {
    return new ResourceServerScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server auth0_resource_server}
*/
export class ResourceServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_resource_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceServer to import
  * @param importFromId The id of the existing ResourceServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_resource_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/resource_server auth0_resource_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ResourceServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_resource_server',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOfflineAccess = config.allowOfflineAccess;
    this._enforcePolicies = config.enforcePolicies;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._options = config.options;
    this._signingAlg = config.signingAlg;
    this._signingSecret = config.signingSecret;
    this._skipConsentForVerifiableFirstPartyClients = config.skipConsentForVerifiableFirstPartyClients;
    this._tokenDialect = config.tokenDialect;
    this._tokenLifetime = config.tokenLifetime;
    this._tokenLifetimeForWeb = config.tokenLifetimeForWeb;
    this._verificationLocation = config.verificationLocation;
    this._scopes.internalValue = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_offline_access - computed: false, optional: true, required: false
  private _allowOfflineAccess?: boolean | cdktf.IResolvable; 
  public get allowOfflineAccess() {
    return this.getBooleanAttribute('allow_offline_access');
  }
  public set allowOfflineAccess(value: boolean | cdktf.IResolvable) {
    this._allowOfflineAccess = value;
  }
  public resetAllowOfflineAccess() {
    this._allowOfflineAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOfflineAccessInput() {
    return this._allowOfflineAccess;
  }

  // enforce_policies - computed: false, optional: true, required: false
  private _enforcePolicies?: boolean | cdktf.IResolvable; 
  public get enforcePolicies() {
    return this.getBooleanAttribute('enforce_policies');
  }
  public set enforcePolicies(value: boolean | cdktf.IResolvable) {
    this._enforcePolicies = value;
  }
  public resetEnforcePolicies() {
    this._enforcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePoliciesInput() {
    return this._enforcePolicies;
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // signing_alg - computed: true, optional: true, required: false
  private _signingAlg?: string; 
  public get signingAlg() {
    return this.getStringAttribute('signing_alg');
  }
  public set signingAlg(value: string) {
    this._signingAlg = value;
  }
  public resetSigningAlg() {
    this._signingAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgInput() {
    return this._signingAlg;
  }

  // signing_secret - computed: true, optional: true, required: false
  private _signingSecret?: string; 
  public get signingSecret() {
    return this.getStringAttribute('signing_secret');
  }
  public set signingSecret(value: string) {
    this._signingSecret = value;
  }
  public resetSigningSecret() {
    this._signingSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingSecretInput() {
    return this._signingSecret;
  }

  // skip_consent_for_verifiable_first_party_clients - computed: false, optional: true, required: false
  private _skipConsentForVerifiableFirstPartyClients?: boolean | cdktf.IResolvable; 
  public get skipConsentForVerifiableFirstPartyClients() {
    return this.getBooleanAttribute('skip_consent_for_verifiable_first_party_clients');
  }
  public set skipConsentForVerifiableFirstPartyClients(value: boolean | cdktf.IResolvable) {
    this._skipConsentForVerifiableFirstPartyClients = value;
  }
  public resetSkipConsentForVerifiableFirstPartyClients() {
    this._skipConsentForVerifiableFirstPartyClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConsentForVerifiableFirstPartyClientsInput() {
    return this._skipConsentForVerifiableFirstPartyClients;
  }

  // token_dialect - computed: false, optional: true, required: false
  private _tokenDialect?: string; 
  public get tokenDialect() {
    return this.getStringAttribute('token_dialect');
  }
  public set tokenDialect(value: string) {
    this._tokenDialect = value;
  }
  public resetTokenDialect() {
    this._tokenDialect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDialectInput() {
    return this._tokenDialect;
  }

  // token_lifetime - computed: true, optional: true, required: false
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

  // token_lifetime_for_web - computed: true, optional: true, required: false
  private _tokenLifetimeForWeb?: number; 
  public get tokenLifetimeForWeb() {
    return this.getNumberAttribute('token_lifetime_for_web');
  }
  public set tokenLifetimeForWeb(value: number) {
    this._tokenLifetimeForWeb = value;
  }
  public resetTokenLifetimeForWeb() {
    this._tokenLifetimeForWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeForWebInput() {
    return this._tokenLifetimeForWeb;
  }

  // verification_location - computed: false, optional: true, required: false
  private _verificationLocation?: string; 
  public get verificationLocation() {
    return this.getStringAttribute('verification_location');
  }
  public set verificationLocation(value: string) {
    this._verificationLocation = value;
  }
  public resetVerificationLocation() {
    this._verificationLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationLocationInput() {
    return this._verificationLocation;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new ResourceServerScopesList(this, "scopes", true);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: ResourceServerScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_offline_access: cdktf.booleanToTerraform(this._allowOfflineAccess),
      enforce_policies: cdktf.booleanToTerraform(this._enforcePolicies),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      signing_alg: cdktf.stringToTerraform(this._signingAlg),
      signing_secret: cdktf.stringToTerraform(this._signingSecret),
      skip_consent_for_verifiable_first_party_clients: cdktf.booleanToTerraform(this._skipConsentForVerifiableFirstPartyClients),
      token_dialect: cdktf.stringToTerraform(this._tokenDialect),
      token_lifetime: cdktf.numberToTerraform(this._tokenLifetime),
      token_lifetime_for_web: cdktf.numberToTerraform(this._tokenLifetimeForWeb),
      verification_location: cdktf.stringToTerraform(this._verificationLocation),
      scopes: cdktf.listMapper(resourceServerScopesToTerraform, true)(this._scopes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_offline_access: {
        value: cdktf.booleanToHclTerraform(this._allowOfflineAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_policies: {
        value: cdktf.booleanToHclTerraform(this._enforcePolicies),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      signing_alg: {
        value: cdktf.stringToHclTerraform(this._signingAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_secret: {
        value: cdktf.stringToHclTerraform(this._signingSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_consent_for_verifiable_first_party_clients: {
        value: cdktf.booleanToHclTerraform(this._skipConsentForVerifiableFirstPartyClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_dialect: {
        value: cdktf.stringToHclTerraform(this._tokenDialect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_lifetime: {
        value: cdktf.numberToHclTerraform(this._tokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_lifetime_for_web: {
        value: cdktf.numberToHclTerraform(this._tokenLifetimeForWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verification_location: {
        value: cdktf.stringToHclTerraform(this._verificationLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(resourceServerScopesToHclTerraform, true)(this._scopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceServerScopesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
