// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzuredevopsProviderConfig {
  /**
  * List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#auxiliary_tenant_ids AzuredevopsProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * Base64 encoded certificate to use to authenticate to the service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#client_certificate AzuredevopsProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Password for a client certificate password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#client_certificate_password AzuredevopsProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * Path to a certificate to use to authenticate to the service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#client_certificate_path AzuredevopsProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The service principal client id which should be used for AAD auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#client_id AzuredevopsProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The path to a file containing the Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#client_id_file_path AzuredevopsProvider#client_id_file_path}
  */
  readonly clientIdFilePath?: string;
  /**
  * Client secret for authenticating to  a service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#client_secret AzuredevopsProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Path to a file containing a client secret for authenticating to  a service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#client_secret_path AzuredevopsProvider#client_secret_path}
  */
  readonly clientSecretPath?: string;
  /**
  * The Azure Pipelines Service Connection ID to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#oidc_azure_service_connection_id AzuredevopsProvider#oidc_azure_service_connection_id}
  */
  readonly oidcAzureServiceConnectionId?: string;
  /**
  * The bearer token for the request to the OIDC provider. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#oidc_request_token AzuredevopsProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#oidc_request_url AzuredevopsProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * OIDC token to authenticate as a service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#oidc_token AzuredevopsProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * OIDC token from file to authenticate as a service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#oidc_token_file_path AzuredevopsProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * The url of the Azure DevOps instance which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#org_service_url AzuredevopsProvider#org_service_url}
  */
  readonly orgServiceUrl?: string;
  /**
  * The personal access token which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#personal_access_token AzuredevopsProvider#personal_access_token}
  */
  readonly personalAccessToken?: string;
  /**
  * The service principal tenant id which should be used for AAD auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#tenant_id AzuredevopsProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Use Azure CLI to authenticate. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#use_cli AzuredevopsProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Use an Azure Managed Service Identity. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#use_msi AzuredevopsProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Use an OIDC token to authenticate to a service principal. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#use_oidc AzuredevopsProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#alias AzuredevopsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs azuredevops}
*/
export class AzuredevopsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzuredevopsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzuredevopsProvider to import
  * @param importFromId The id of the existing AzuredevopsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzuredevopsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs azuredevops} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzuredevopsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AzuredevopsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuredevops',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
      },
      terraformProviderSource: 'microsoft/azuredevops'
    });
    this._auxiliaryTenantIds = config.auxiliaryTenantIds;
    this._clientCertificate = config.clientCertificate;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientIdFilePath = config.clientIdFilePath;
    this._clientSecret = config.clientSecret;
    this._clientSecretPath = config.clientSecretPath;
    this._oidcAzureServiceConnectionId = config.oidcAzureServiceConnectionId;
    this._oidcRequestToken = config.oidcRequestToken;
    this._oidcRequestUrl = config.oidcRequestUrl;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFilePath = config.oidcTokenFilePath;
    this._orgServiceUrl = config.orgServiceUrl;
    this._personalAccessToken = config.personalAccessToken;
    this._tenantId = config.tenantId;
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

  // client_secret_path - computed: false, optional: true, required: false
  private _clientSecretPath?: string; 
  public get clientSecretPath() {
    return this._clientSecretPath;
  }
  public set clientSecretPath(value: string | undefined) {
    this._clientSecretPath = value;
  }
  public resetClientSecretPath() {
    this._clientSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretPathInput() {
    return this._clientSecretPath;
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

  // org_service_url - computed: false, optional: true, required: false
  private _orgServiceUrl?: string; 
  public get orgServiceUrl() {
    return this._orgServiceUrl;
  }
  public set orgServiceUrl(value: string | undefined) {
    this._orgServiceUrl = value;
  }
  public resetOrgServiceUrl() {
    this._orgServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgServiceUrlInput() {
    return this._orgServiceUrl;
  }

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this._personalAccessToken;
  }
  public set personalAccessToken(value: string | undefined) {
    this._personalAccessToken = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
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
      client_secret_path: cdktf.stringToTerraform(this._clientSecretPath),
      oidc_azure_service_connection_id: cdktf.stringToTerraform(this._oidcAzureServiceConnectionId),
      oidc_request_token: cdktf.stringToTerraform(this._oidcRequestToken),
      oidc_request_url: cdktf.stringToTerraform(this._oidcRequestUrl),
      oidc_token: cdktf.stringToTerraform(this._oidcToken),
      oidc_token_file_path: cdktf.stringToTerraform(this._oidcTokenFilePath),
      org_service_url: cdktf.stringToTerraform(this._orgServiceUrl),
      personal_access_token: cdktf.stringToTerraform(this._personalAccessToken),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      client_secret_path: {
        value: cdktf.stringToHclTerraform(this._clientSecretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      org_service_url: {
        value: cdktf.stringToHclTerraform(this._orgServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_access_token: {
        value: cdktf.stringToHclTerraform(this._personalAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
