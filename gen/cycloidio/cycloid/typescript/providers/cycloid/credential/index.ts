// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credential values, use the fields related to the credential `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#body Credential#body}
  */
  readonly body?: CredentialBody;
  /**
  * The canonical of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#canonical Credential#canonical}
  */
  readonly canonical?: string;
  /**
  * The description of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#description Credential#description}
  */
  readonly description?: string;
  /**
  * The name displayed in the UI of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#name Credential#name}
  */
  readonly name: string;
  /**
  * A canonical of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#organization_canonical Credential#organization_canonical}
  */
  readonly organizationCanonical?: string;
  /**
  * User canonical that owns this credential. If omitted then the person creating this
  * credential will be assigned as owner. When a user is the owner of a credential he has
  * all the permissions on it.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#owner Credential#owner}
  */
  readonly owner?: string;
  /**
  * The credential path written in vault and use for `pipelines`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#path Credential#path}
  */
  readonly path: string;
  /**
  * The type of the credential, see [the docs](https://docs.cycloid.io/reference/credentials/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#type Credential#type}
  */
  readonly type: string;
}
export interface CredentialBody {
  /**
  * An AWS access key or Azure Storage Access key, required for type `aws` or `azure_storage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#access_key Credential#access_key}
  */
  readonly accessKey?: string;
  /**
  * Account name required for `azure_storage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#account_name Credential#account_name}
  */
  readonly accountName?: string;
  /**
  * Required for type `swift`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#auth_url Credential#auth_url}
  */
  readonly authUrl?: string;
  /**
  * For type `elasticsearch`, you must fill either:
  *   - `ca_cert`
  *   - `username` + `password`
  *   - `username` + `password` + `cacert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#ca_cert Credential#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Required for type `azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#client_id Credential#client_id}
  */
  readonly clientId?: string;
  /**
  * Required for type `azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#client_secret Credential#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Required for type `swift`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#domain_id Credential#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#environment Credential#environment}
  */
  readonly environment?: string;
  /**
  * Required for type `gcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#json_key Credential#json_key}
  */
  readonly jsonKey?: string;
  /**
  * Required for type `basic_auth`, `swift`, `vmware` or `elasticsearch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#password Credential#password}
  */
  readonly password?: string;
  /**
  * Credential fields required for type `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#raw Credential#raw}
  */
  readonly raw?: { [key: string]: string };
  /**
  * An AWS secret key, required for type AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#secret_key Credential#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Required for type `ssh`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#ssh_key Credential#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Required for type `azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#subscription_id Credential#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Required for type `swift`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#tenant_id Credential#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Required for type `basic_auth`, `swift`, `vmware` or `elasticsearch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#username Credential#username}
  */
  readonly username?: string;
}

export function credentialBodyToTerraform(struct?: CredentialBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    environment: cdktf.stringToTerraform(struct!.environment),
    json_key: cdktf.stringToTerraform(struct!.jsonKey),
    password: cdktf.stringToTerraform(struct!.password),
    raw: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.raw),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function credentialBodyToHclTerraform(struct?: CredentialBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_key: {
      value: cdktf.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.raw),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._accountName = undefined;
      this._authUrl = undefined;
      this._caCert = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._domainId = undefined;
      this._environment = undefined;
      this._jsonKey = undefined;
      this._password = undefined;
      this._raw = undefined;
      this._secretKey = undefined;
      this._sshKey = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._accountName = value.accountName;
      this._authUrl = value.authUrl;
      this._caCert = value.caCert;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._domainId = value.domainId;
      this._environment = value.environment;
      this._jsonKey = value.jsonKey;
      this._password = value.password;
      this._raw = value.raw;
      this._secretKey = value.secretKey;
      this._sshKey = value.sshKey;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._username = value.username;
    }
  }

  // access_key - computed: true, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // auth_url - computed: true, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // ca_cert - computed: true, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_secret - computed: true, optional: true, required: false
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

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string; 
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: { [key: string]: string }; 
  public get raw() {
    return this.getStringMapAttribute('raw');
  }
  public set raw(value: { [key: string]: string }) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }

  // secret_key - computed: true, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // ssh_key - computed: true, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential cycloid_credential}
*/
export class Credential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Credential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Credential to import
  * @param importFromId The id of the existing Credential that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Credential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/credential cycloid_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_credential',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.24',
        providerVersionConstraint: '0.0.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body.internalValue = config.body;
    this._canonical = config.canonical;
    this._description = config.description;
    this._name = config.name;
    this._organizationCanonical = config.organizationCanonical;
    this._owner = config.owner;
    this._path = config.path;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: true, required: false
  private _body = new CredentialBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: CredentialBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // canonical - computed: true, optional: true, required: false
  private _canonical?: string; 
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
  public set canonical(value: string) {
    this._canonical = value;
  }
  public resetCanonical() {
    this._canonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical;
  }

  // description - computed: true, optional: true, required: false
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

  // organization_canonical - computed: true, optional: true, required: false
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  public resetOrganizationCanonical() {
    this._organizationCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
      body: credentialBodyToTerraform(this._body.internalValue),
      canonical: cdktf.stringToTerraform(this._canonical),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
      owner: cdktf.stringToTerraform(this._owner),
      path: cdktf.stringToTerraform(this._path),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: credentialBodyToHclTerraform(this._body.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialBody",
      },
      canonical: {
        value: cdktf.stringToHclTerraform(this._canonical),
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
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
