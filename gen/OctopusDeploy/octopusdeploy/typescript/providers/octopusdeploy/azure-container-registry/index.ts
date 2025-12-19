// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#api_version AzureContainerRegistry#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The number of times a deployment should attempt to download a package from this feed before failing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#download_attempts AzureContainerRegistry#download_attempts}
  */
  readonly downloadAttempts?: number;
  /**
  * The number of seconds to apply as a linear back off between download attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#download_retry_backoff_seconds AzureContainerRegistry#download_retry_backoff_seconds}
  */
  readonly downloadRetryBackoffSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#feed_uri AzureContainerRegistry#feed_uri}
  */
  readonly feedUri: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#name AzureContainerRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#oidc_authentication AzureContainerRegistry#oidc_authentication}
  */
  readonly oidcAuthentication?: AzureContainerRegistryOidcAuthentication;
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#password AzureContainerRegistry#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#registry_path AzureContainerRegistry#registry_path}
  */
  readonly registryPath?: string;
  /**
  * The space ID associated with this Azure container registry feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#space_id AzureContainerRegistry#space_id}
  */
  readonly spaceId?: string;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#username AzureContainerRegistry#username}
  */
  readonly username?: string;
}
export interface AzureContainerRegistryOidcAuthentication {
  /**
  * Audience representing the intended recipient of the OIDC token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#audience AzureContainerRegistry#audience}
  */
  readonly audience?: string;
  /**
  * Unique identifier representing the application requesting authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#client_id AzureContainerRegistry#client_id}
  */
  readonly clientId?: string;
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `feed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#subject_keys AzureContainerRegistry#subject_keys}
  */
  readonly subjectKeys?: string[];
  /**
  * Unique identifier representing the Azure AD instance hosting the authenticating application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#tenant_id AzureContainerRegistry#tenant_id}
  */
  readonly tenantId?: string;
}

export function azureContainerRegistryOidcAuthenticationToTerraform(struct?: AzureContainerRegistryOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectKeys),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function azureContainerRegistryOidcAuthenticationToHclTerraform(struct?: AzureContainerRegistryOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
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
    subject_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class AzureContainerRegistryOidcAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureContainerRegistryOidcAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._subjectKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKeys = this._subjectKeys;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureContainerRegistryOidcAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._clientId = undefined;
      this._subjectKeys = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._clientId = value.clientId;
      this._subjectKeys = value.subjectKeys;
      this._tenantId = value.tenantId;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // subject_keys - computed: false, optional: true, required: false
  private _subjectKeys?: string[]; 
  public get subjectKeys() {
    return this.getListAttribute('subject_keys');
  }
  public set subjectKeys(value: string[]) {
    this._subjectKeys = value;
  }
  public resetSubjectKeys() {
    this._subjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeysInput() {
    return this._subjectKeys;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry octopusdeploy_azure_container_registry}
*/
export class AzureContainerRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_azure_container_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureContainerRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureContainerRegistry to import
  * @param importFromId The id of the existing AzureContainerRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureContainerRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_azure_container_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/azure_container_registry octopusdeploy_azure_container_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureContainerRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: AzureContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_azure_container_registry',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._downloadAttempts = config.downloadAttempts;
    this._downloadRetryBackoffSeconds = config.downloadRetryBackoffSeconds;
    this._feedUri = config.feedUri;
    this._name = config.name;
    this._oidcAuthentication.internalValue = config.oidcAuthentication;
    this._password = config.password;
    this._registryPath = config.registryPath;
    this._spaceId = config.spaceId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // download_attempts - computed: true, optional: true, required: false
  private _downloadAttempts?: number; 
  public get downloadAttempts() {
    return this.getNumberAttribute('download_attempts');
  }
  public set downloadAttempts(value: number) {
    this._downloadAttempts = value;
  }
  public resetDownloadAttempts() {
    this._downloadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadAttemptsInput() {
    return this._downloadAttempts;
  }

  // download_retry_backoff_seconds - computed: true, optional: true, required: false
  private _downloadRetryBackoffSeconds?: number; 
  public get downloadRetryBackoffSeconds() {
    return this.getNumberAttribute('download_retry_backoff_seconds');
  }
  public set downloadRetryBackoffSeconds(value: number) {
    this._downloadRetryBackoffSeconds = value;
  }
  public resetDownloadRetryBackoffSeconds() {
    this._downloadRetryBackoffSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadRetryBackoffSecondsInput() {
    return this._downloadRetryBackoffSeconds;
  }

  // feed_uri - computed: false, optional: false, required: true
  private _feedUri?: string; 
  public get feedUri() {
    return this.getStringAttribute('feed_uri');
  }
  public set feedUri(value: string) {
    this._feedUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedUriInput() {
    return this._feedUri;
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

  // oidc_authentication - computed: false, optional: true, required: false
  private _oidcAuthentication = new AzureContainerRegistryOidcAuthenticationOutputReference(this, "oidc_authentication");
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: AzureContainerRegistryOidcAuthentication) {
    this._oidcAuthentication.internalValue = value;
  }
  public resetOidcAuthentication() {
    this._oidcAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthenticationInput() {
    return this._oidcAuthentication.internalValue;
  }

  // password - computed: false, optional: true, required: false
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

  // registry_path - computed: false, optional: true, required: false
  private _registryPath?: string; 
  public get registryPath() {
    return this.getStringAttribute('registry_path');
  }
  public set registryPath(value: string) {
    this._registryPath = value;
  }
  public resetRegistryPath() {
    this._registryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryPathInput() {
    return this._registryPath;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // username - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      download_attempts: cdktf.numberToTerraform(this._downloadAttempts),
      download_retry_backoff_seconds: cdktf.numberToTerraform(this._downloadRetryBackoffSeconds),
      feed_uri: cdktf.stringToTerraform(this._feedUri),
      name: cdktf.stringToTerraform(this._name),
      oidc_authentication: azureContainerRegistryOidcAuthenticationToTerraform(this._oidcAuthentication.internalValue),
      password: cdktf.stringToTerraform(this._password),
      registry_path: cdktf.stringToTerraform(this._registryPath),
      space_id: cdktf.stringToTerraform(this._spaceId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_attempts: {
        value: cdktf.numberToHclTerraform(this._downloadAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      download_retry_backoff_seconds: {
        value: cdktf.numberToHclTerraform(this._downloadRetryBackoffSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feed_uri: {
        value: cdktf.stringToHclTerraform(this._feedUri),
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
      oidc_authentication: {
        value: azureContainerRegistryOidcAuthenticationToHclTerraform(this._oidcAuthentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureContainerRegistryOidcAuthentication",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_path: {
        value: cdktf.stringToHclTerraform(this._registryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
