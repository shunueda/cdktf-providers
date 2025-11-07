// https://registry.terraform.io/providers/azure/alz/0.20.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlzProviderConfig {
  /**
  * List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#auxiliary_tenant_ids AlzProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#client_certificate AlzProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#client_certificate_password AlzProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal which should be used. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#client_certificate_path AlzProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#client_id AlzProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The path to a file containing the Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#client_id_file_path AlzProvider#client_id_file_path}
  */
  readonly clientIdFilePath?: string;
  /**
  * The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#client_secret AlzProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to a file containing the Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#client_secret_file_path AlzProvider#client_secret_file_path}
  */
  readonly clientSecretFilePath?: string;
  /**
  * The Cloud Environment which should be used. Possible values are `public`, `usgovernment` and `china`. Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` or `AZURE_ENVIRONMENT` Environment Variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#environment AlzProvider#environment}
  */
  readonly environment?: string;
  /**
  * Whether to automatically fetch dependencies for the library. This option reads the `alz_library_metadata.json` file in any supplied library and will recursively download dependent libraries. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#library_fetch_dependencies AlzProvider#library_fetch_dependencies}
  */
  readonly libraryFetchDependencies?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow overwriting of the library by other lib directories. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#library_overwrite_enabled AlzProvider#library_overwrite_enabled}
  */
  readonly libraryOverwriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * A list of references to the [ALZ library](https://aka.ms/alz/library) to use. Each reference should either contain the `path` (e.g. `platform/alz`) and the `ref` (e.g. `2024.03.5`), or a `custom_url` to be supplied to go-getter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#library_references AlzProvider#library_references}
  */
  readonly libraryReferences: AlzProviderLibraryReferences[] | cdktf.IResolvable;
  /**
  * The Azure Pipelines Service Connection ID to use for authentication. This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#oidc_azure_service_connection_id AlzProvider#oidc_azure_service_connection_id}
  */
  readonly oidcAzureServiceConnectionId?: string;
  /**
  * The bearer token for the request to the OIDC provider. This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#oidc_request_token AlzProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#oidc_request_url AlzProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#oidc_token AlzProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#oidc_token_file_path AlzProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * Whether to allow using the Name and RoleName supplied in the library directly for a predictable ID. Default behaviour is to update them to unique values per management group. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#role_definitions_use_supplied_names_enabled AlzProvider#role_definitions_use_supplied_names_enabled}
  */
  readonly roleDefinitionsUseSuppliedNamesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Should the provider skip registering all of the resource providers that it supports, if they're not already registered? Default is `false`. If not specified, value will be attempted to be read from the `ARM_SKIP_PROVIDER_REGISTRATION` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#skip_provider_registration AlzProvider#skip_provider_registration}
  */
  readonly skipProviderRegistration?: boolean | cdktf.IResolvable;
  /**
  * The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#subscription_id AlzProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Should the provider omit the warning if it cannot create the full list of policy role assignments? Default is `false`. If not specified, value will be attempted to be read from the `ALZ_PROVIDER_SUPPRESS_WARNING_POLICY_ROLE_ASSIGNMENTS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#suppress_warning_policy_role_assignments AlzProvider#suppress_warning_policy_role_assignments}
  */
  readonly suppressWarningPolicyRoleAssignments?: boolean | cdktf.IResolvable;
  /**
  * The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#tenant_id AlzProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Should AKS Workload Identity be used for Authentication? This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#use_aks_workload_identity AlzProvider#use_aks_workload_identity}
  */
  readonly useAksWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Should Azure CLI be used for authentication? This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#use_cli AlzProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Should Managed Identity be used for Authentication? This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#use_msi AlzProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#use_oidc AlzProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#alias AlzProvider#alias}
  */
  readonly alias?: string;
}
export interface AlzProviderLibraryReferences {
  /**
  * A custom path/URL to the library to use. Conflicts with `path` and `ref`. For supported protocols, see [go-getter](https://pkg.go.dev/github.com/hashicorp/go-getter/v2). Value is marked sensitive as may contain secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#custom_url AlzProvider#custom_url}
  */
  readonly customUrl?: string;
  /**
  * The path in the ALZ Library, e.g. `platform/alz`. Also requires `ref`. Conflicts with `custom_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#path AlzProvider#path}
  */
  readonly path?: string;
  /**
  * This is the version of the library to use, e.g. `2024.07.5`. Also requires `path`. Conflicts with `custom_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#ref AlzProvider#ref}
  */
  readonly ref?: string;
}

export function alzProviderLibraryReferencesToTerraform(struct?: AlzProviderLibraryReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_url: cdktf.stringToTerraform(struct!.customUrl),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function alzProviderLibraryReferencesToHclTerraform(struct?: AlzProviderLibraryReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_url: {
      value: cdktf.stringToHclTerraform(struct!.customUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs alz}
*/
export class AlzProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alz";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlzProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlzProvider to import
  * @param importFromId The id of the existing AlzProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlzProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alz", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs alz} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlzProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AlzProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'alz',
      terraformGeneratorMetadata: {
        providerName: 'alz',
        providerVersion: '0.20.0'
      },
      terraformProviderSource: 'Azure/alz'
    });
    this._auxiliaryTenantIds = config.auxiliaryTenantIds;
    this._clientCertificate = config.clientCertificate;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientIdFilePath = config.clientIdFilePath;
    this._clientSecret = config.clientSecret;
    this._clientSecretFilePath = config.clientSecretFilePath;
    this._environment = config.environment;
    this._libraryFetchDependencies = config.libraryFetchDependencies;
    this._libraryOverwriteEnabled = config.libraryOverwriteEnabled;
    this._libraryReferences = config.libraryReferences;
    this._oidcAzureServiceConnectionId = config.oidcAzureServiceConnectionId;
    this._oidcRequestToken = config.oidcRequestToken;
    this._oidcRequestUrl = config.oidcRequestUrl;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFilePath = config.oidcTokenFilePath;
    this._roleDefinitionsUseSuppliedNamesEnabled = config.roleDefinitionsUseSuppliedNamesEnabled;
    this._skipProviderRegistration = config.skipProviderRegistration;
    this._subscriptionId = config.subscriptionId;
    this._suppressWarningPolicyRoleAssignments = config.suppressWarningPolicyRoleAssignments;
    this._tenantId = config.tenantId;
    this._useAksWorkloadIdentity = config.useAksWorkloadIdentity;
    this._useCli = config.useCli;
    this._useMsi = config.useMsi;
    this._useOidc = config.useOidc;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_tenant_ids - computed: false, optional: true, required: false
  private _auxiliaryTenantIds?: string[]; 
  public get auxiliaryTenantIds() {
    return this._auxiliaryTenantIds;
  }
  public set auxiliaryTenantIds(value: string[] | undefined) {
    this._auxiliaryTenantIds = value;
  }
  public resetAuxiliaryTenantIds() {
    this._auxiliaryTenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryTenantIdsInput() {
    return this._auxiliaryTenantIds;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this._clientCertificatePassword;
  }
  public set clientCertificatePassword(value: string | undefined) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
  }

  // client_certificate_path - computed: false, optional: true, required: false
  private _clientCertificatePath?: string; 
  public get clientCertificatePath() {
    return this._clientCertificatePath;
  }
  public set clientCertificatePath(value: string | undefined) {
    this._clientCertificatePath = value;
  }
  public resetClientCertificatePath() {
    this._clientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePathInput() {
    return this._clientCertificatePath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_id_file_path - computed: false, optional: true, required: false
  private _clientIdFilePath?: string; 
  public get clientIdFilePath() {
    return this._clientIdFilePath;
  }
  public set clientIdFilePath(value: string | undefined) {
    this._clientIdFilePath = value;
  }
  public resetClientIdFilePath() {
    this._clientIdFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdFilePathInput() {
    return this._clientIdFilePath;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_file_path - computed: false, optional: true, required: false
  private _clientSecretFilePath?: string; 
  public get clientSecretFilePath() {
    return this._clientSecretFilePath;
  }
  public set clientSecretFilePath(value: string | undefined) {
    this._clientSecretFilePath = value;
  }
  public resetClientSecretFilePath() {
    this._clientSecretFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretFilePathInput() {
    return this._clientSecretFilePath;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // library_fetch_dependencies - computed: false, optional: true, required: false
  private _libraryFetchDependencies?: boolean | cdktf.IResolvable; 
  public get libraryFetchDependencies() {
    return this._libraryFetchDependencies;
  }
  public set libraryFetchDependencies(value: boolean | cdktf.IResolvable | undefined) {
    this._libraryFetchDependencies = value;
  }
  public resetLibraryFetchDependencies() {
    this._libraryFetchDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryFetchDependenciesInput() {
    return this._libraryFetchDependencies;
  }

  // library_overwrite_enabled - computed: false, optional: true, required: false
  private _libraryOverwriteEnabled?: boolean | cdktf.IResolvable; 
  public get libraryOverwriteEnabled() {
    return this._libraryOverwriteEnabled;
  }
  public set libraryOverwriteEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._libraryOverwriteEnabled = value;
  }
  public resetLibraryOverwriteEnabled() {
    this._libraryOverwriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryOverwriteEnabledInput() {
    return this._libraryOverwriteEnabled;
  }

  // library_references - computed: false, optional: false, required: true
  private _libraryReferences?: AlzProviderLibraryReferences[] | cdktf.IResolvable; 
  public get libraryReferences() {
    return this._libraryReferences;
  }
  public set libraryReferences(value: AlzProviderLibraryReferences[] | cdktf.IResolvable | undefined) {
    this._libraryReferences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryReferencesInput() {
    return this._libraryReferences;
  }

  // oidc_azure_service_connection_id - computed: false, optional: true, required: false
  private _oidcAzureServiceConnectionId?: string; 
  public get oidcAzureServiceConnectionId() {
    return this._oidcAzureServiceConnectionId;
  }
  public set oidcAzureServiceConnectionId(value: string | undefined) {
    this._oidcAzureServiceConnectionId = value;
  }
  public resetOidcAzureServiceConnectionId() {
    this._oidcAzureServiceConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAzureServiceConnectionIdInput() {
    return this._oidcAzureServiceConnectionId;
  }

  // oidc_request_token - computed: false, optional: true, required: false
  private _oidcRequestToken?: string; 
  public get oidcRequestToken() {
    return this._oidcRequestToken;
  }
  public set oidcRequestToken(value: string | undefined) {
    this._oidcRequestToken = value;
  }
  public resetOidcRequestToken() {
    this._oidcRequestToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestTokenInput() {
    return this._oidcRequestToken;
  }

  // oidc_request_url - computed: false, optional: true, required: false
  private _oidcRequestUrl?: string; 
  public get oidcRequestUrl() {
    return this._oidcRequestUrl;
  }
  public set oidcRequestUrl(value: string | undefined) {
    this._oidcRequestUrl = value;
  }
  public resetOidcRequestUrl() {
    this._oidcRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestUrlInput() {
    return this._oidcRequestUrl;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken?: string; 
  public get oidcToken() {
    return this._oidcToken;
  }
  public set oidcToken(value: string | undefined) {
    this._oidcToken = value;
  }
  public resetOidcToken() {
    this._oidcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken;
  }

  // oidc_token_file_path - computed: false, optional: true, required: false
  private _oidcTokenFilePath?: string; 
  public get oidcTokenFilePath() {
    return this._oidcTokenFilePath;
  }
  public set oidcTokenFilePath(value: string | undefined) {
    this._oidcTokenFilePath = value;
  }
  public resetOidcTokenFilePath() {
    this._oidcTokenFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenFilePathInput() {
    return this._oidcTokenFilePath;
  }

  // role_definitions_use_supplied_names_enabled - computed: false, optional: true, required: false
  private _roleDefinitionsUseSuppliedNamesEnabled?: boolean | cdktf.IResolvable; 
  public get roleDefinitionsUseSuppliedNamesEnabled() {
    return this._roleDefinitionsUseSuppliedNamesEnabled;
  }
  public set roleDefinitionsUseSuppliedNamesEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._roleDefinitionsUseSuppliedNamesEnabled = value;
  }
  public resetRoleDefinitionsUseSuppliedNamesEnabled() {
    this._roleDefinitionsUseSuppliedNamesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionsUseSuppliedNamesEnabledInput() {
    return this._roleDefinitionsUseSuppliedNamesEnabled;
  }

  // skip_provider_registration - computed: false, optional: true, required: false
  private _skipProviderRegistration?: boolean | cdktf.IResolvable; 
  public get skipProviderRegistration() {
    return this._skipProviderRegistration;
  }
  public set skipProviderRegistration(value: boolean | cdktf.IResolvable | undefined) {
    this._skipProviderRegistration = value;
  }
  public resetSkipProviderRegistration() {
    this._skipProviderRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProviderRegistrationInput() {
    return this._skipProviderRegistration;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this._subscriptionId;
  }
  public set subscriptionId(value: string | undefined) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // suppress_warning_policy_role_assignments - computed: false, optional: true, required: false
  private _suppressWarningPolicyRoleAssignments?: boolean | cdktf.IResolvable; 
  public get suppressWarningPolicyRoleAssignments() {
    return this._suppressWarningPolicyRoleAssignments;
  }
  public set suppressWarningPolicyRoleAssignments(value: boolean | cdktf.IResolvable | undefined) {
    this._suppressWarningPolicyRoleAssignments = value;
  }
  public resetSuppressWarningPolicyRoleAssignments() {
    this._suppressWarningPolicyRoleAssignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressWarningPolicyRoleAssignmentsInput() {
    return this._suppressWarningPolicyRoleAssignments;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_aks_workload_identity - computed: false, optional: true, required: false
  private _useAksWorkloadIdentity?: boolean | cdktf.IResolvable; 
  public get useAksWorkloadIdentity() {
    return this._useAksWorkloadIdentity;
  }
  public set useAksWorkloadIdentity(value: boolean | cdktf.IResolvable | undefined) {
    this._useAksWorkloadIdentity = value;
  }
  public resetUseAksWorkloadIdentity() {
    this._useAksWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAksWorkloadIdentityInput() {
    return this._useAksWorkloadIdentity;
  }

  // use_cli - computed: false, optional: true, required: false
  private _useCli?: boolean | cdktf.IResolvable; 
  public get useCli() {
    return this._useCli;
  }
  public set useCli(value: boolean | cdktf.IResolvable | undefined) {
    this._useCli = value;
  }
  public resetUseCli() {
    this._useCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCliInput() {
    return this._useCli;
  }

  // use_msi - computed: false, optional: true, required: false
  private _useMsi?: boolean | cdktf.IResolvable; 
  public get useMsi() {
    return this._useMsi;
  }
  public set useMsi(value: boolean | cdktf.IResolvable | undefined) {
    this._useMsi = value;
  }
  public resetUseMsi() {
    this._useMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsiInput() {
    return this._useMsi;
  }

  // use_oidc - computed: false, optional: true, required: false
  private _useOidc?: boolean | cdktf.IResolvable; 
  public get useOidc() {
    return this._useOidc;
  }
  public set useOidc(value: boolean | cdktf.IResolvable | undefined) {
    this._useOidc = value;
  }
  public resetUseOidc() {
    this._useOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOidcInput() {
    return this._useOidc;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auxiliary_tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auxiliaryTenantIds),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      client_certificate_path: cdktf.stringToTerraform(this._clientCertificatePath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_id_file_path: cdktf.stringToTerraform(this._clientIdFilePath),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_file_path: cdktf.stringToTerraform(this._clientSecretFilePath),
      environment: cdktf.stringToTerraform(this._environment),
      library_fetch_dependencies: cdktf.booleanToTerraform(this._libraryFetchDependencies),
      library_overwrite_enabled: cdktf.booleanToTerraform(this._libraryOverwriteEnabled),
      library_references: cdktf.listMapper(alzProviderLibraryReferencesToTerraform, false)(this._libraryReferences),
      oidc_azure_service_connection_id: cdktf.stringToTerraform(this._oidcAzureServiceConnectionId),
      oidc_request_token: cdktf.stringToTerraform(this._oidcRequestToken),
      oidc_request_url: cdktf.stringToTerraform(this._oidcRequestUrl),
      oidc_token: cdktf.stringToTerraform(this._oidcToken),
      oidc_token_file_path: cdktf.stringToTerraform(this._oidcTokenFilePath),
      role_definitions_use_supplied_names_enabled: cdktf.booleanToTerraform(this._roleDefinitionsUseSuppliedNamesEnabled),
      skip_provider_registration: cdktf.booleanToTerraform(this._skipProviderRegistration),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      suppress_warning_policy_role_assignments: cdktf.booleanToTerraform(this._suppressWarningPolicyRoleAssignments),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_aks_workload_identity: cdktf.booleanToTerraform(this._useAksWorkloadIdentity),
      use_cli: cdktf.booleanToTerraform(this._useCli),
      use_msi: cdktf.booleanToTerraform(this._useMsi),
      use_oidc: cdktf.booleanToTerraform(this._useOidc),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auxiliary_tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auxiliaryTenantIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_password: {
        value: cdktf.stringToHclTerraform(this._clientCertificatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_path: {
        value: cdktf.stringToHclTerraform(this._clientCertificatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id_file_path: {
        value: cdktf.stringToHclTerraform(this._clientIdFilePath),
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
      client_secret_file_path: {
        value: cdktf.stringToHclTerraform(this._clientSecretFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      library_fetch_dependencies: {
        value: cdktf.booleanToHclTerraform(this._libraryFetchDependencies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      library_overwrite_enabled: {
        value: cdktf.booleanToHclTerraform(this._libraryOverwriteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      library_references: {
        value: cdktf.listMapperHcl(alzProviderLibraryReferencesToHclTerraform, false)(this._libraryReferences),
        isBlock: true,
        type: "list",
        storageClassType: "AlzProviderLibraryReferencesList",
      },
      oidc_azure_service_connection_id: {
        value: cdktf.stringToHclTerraform(this._oidcAzureServiceConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_request_token: {
        value: cdktf.stringToHclTerraform(this._oidcRequestToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_request_url: {
        value: cdktf.stringToHclTerraform(this._oidcRequestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token: {
        value: cdktf.stringToHclTerraform(this._oidcToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token_file_path: {
        value: cdktf.stringToHclTerraform(this._oidcTokenFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_definitions_use_supplied_names_enabled: {
        value: cdktf.booleanToHclTerraform(this._roleDefinitionsUseSuppliedNamesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_provider_registration: {
        value: cdktf.booleanToHclTerraform(this._skipProviderRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_warning_policy_role_assignments: {
        value: cdktf.booleanToHclTerraform(this._suppressWarningPolicyRoleAssignments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_aks_workload_identity: {
        value: cdktf.booleanToHclTerraform(this._useAksWorkloadIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_cli: {
        value: cdktf.booleanToHclTerraform(this._useCli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_msi: {
        value: cdktf.booleanToHclTerraform(this._useMsi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_oidc: {
        value: cdktf.booleanToHclTerraform(this._useOidc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
