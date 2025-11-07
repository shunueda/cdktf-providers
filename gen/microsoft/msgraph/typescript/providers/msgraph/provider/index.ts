// https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgraphProviderConfig {
  /**
  * A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#client_certificate MsgraphProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#client_certificate_password MsgraphProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal which should be used. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#client_certificate_path MsgraphProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#client_id MsgraphProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The path to a file containing the Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#client_id_file_path MsgraphProvider#client_id_file_path}
  */
  readonly clientIdFilePath?: string;
  /**
  * The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#client_secret MsgraphProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to a file containing the Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#client_secret_file_path MsgraphProvider#client_secret_file_path}
  */
  readonly clientSecretFilePath?: string;
  /**
  * The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#custom_correlation_request_id MsgraphProvider#custom_correlation_request_id}
  */
  readonly customCorrelationRequestId?: string;
  /**
  * This will disable the x-ms-correlation-request-id header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#disable_correlation_request_id MsgraphProvider#disable_correlation_request_id}
  */
  readonly disableCorrelationRequestId?: boolean | cdktf.IResolvable;
  /**
  * Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#disable_terraform_partner_id MsgraphProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktf.IResolvable;
  /**
  * The Azure Pipelines Service Connection ID to use for authentication. This can also be sourced from the `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#oidc_azure_service_connection_id MsgraphProvider#oidc_azure_service_connection_id}
  */
  readonly oidcAzureServiceConnectionId?: string;
  /**
  * The bearer token for the request to the OIDC provider. This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN` or `ACTIONS_ID_TOKEN_REQUEST_TOKEN` Environment Variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#oidc_request_token MsgraphProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. This can also be sourced from the `ARM_OIDC_REQUEST_URL` or `ACTIONS_ID_TOKEN_REQUEST_URL` Environment Variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#oidc_request_url MsgraphProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#oidc_token MsgraphProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH` environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#oidc_token_file_path MsgraphProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#partner_id MsgraphProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#tenant_id MsgraphProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Should AKS Workload Identity be used for Authentication? This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#use_aks_workload_identity MsgraphProvider#use_aks_workload_identity}
  */
  readonly useAksWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Should Azure CLI be used for authentication? This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#use_cli MsgraphProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Should Managed Identity be used for Authentication? This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#use_msi MsgraphProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#use_oidc MsgraphProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#alias MsgraphProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs msgraph}
*/
export class MsgraphProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "msgraph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgraphProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgraphProvider to import
  * @param importFromId The id of the existing MsgraphProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgraphProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "msgraph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs msgraph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgraphProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MsgraphProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'msgraph',
      terraformGeneratorMetadata: {
        providerName: 'msgraph',
        providerVersion: '0.2.0'
      },
      terraformProviderSource: 'microsoft/msgraph'
    });
    this._clientCertificate = config.clientCertificate;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientIdFilePath = config.clientIdFilePath;
    this._clientSecret = config.clientSecret;
    this._clientSecretFilePath = config.clientSecretFilePath;
    this._customCorrelationRequestId = config.customCorrelationRequestId;
    this._disableCorrelationRequestId = config.disableCorrelationRequestId;
    this._disableTerraformPartnerId = config.disableTerraformPartnerId;
    this._oidcAzureServiceConnectionId = config.oidcAzureServiceConnectionId;
    this._oidcRequestToken = config.oidcRequestToken;
    this._oidcRequestUrl = config.oidcRequestUrl;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFilePath = config.oidcTokenFilePath;
    this._partnerId = config.partnerId;
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

  // custom_correlation_request_id - computed: false, optional: true, required: false
  private _customCorrelationRequestId?: string; 
  public get customCorrelationRequestId() {
    return this._customCorrelationRequestId;
  }
  public set customCorrelationRequestId(value: string | undefined) {
    this._customCorrelationRequestId = value;
  }
  public resetCustomCorrelationRequestId() {
    this._customCorrelationRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCorrelationRequestIdInput() {
    return this._customCorrelationRequestId;
  }

  // disable_correlation_request_id - computed: false, optional: true, required: false
  private _disableCorrelationRequestId?: boolean | cdktf.IResolvable; 
  public get disableCorrelationRequestId() {
    return this._disableCorrelationRequestId;
  }
  public set disableCorrelationRequestId(value: boolean | cdktf.IResolvable | undefined) {
    this._disableCorrelationRequestId = value;
  }
  public resetDisableCorrelationRequestId() {
    this._disableCorrelationRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorrelationRequestIdInput() {
    return this._disableCorrelationRequestId;
  }

  // disable_terraform_partner_id - computed: false, optional: true, required: false
  private _disableTerraformPartnerId?: boolean | cdktf.IResolvable; 
  public get disableTerraformPartnerId() {
    return this._disableTerraformPartnerId;
  }
  public set disableTerraformPartnerId(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTerraformPartnerId = value;
  }
  public resetDisableTerraformPartnerId() {
    this._disableTerraformPartnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerraformPartnerIdInput() {
    return this._disableTerraformPartnerId;
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

  // partner_id - computed: false, optional: true, required: false
  private _partnerId?: string; 
  public get partnerId() {
    return this._partnerId;
  }
  public set partnerId(value: string | undefined) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId;
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
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      client_certificate_path: cdktf.stringToTerraform(this._clientCertificatePath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_id_file_path: cdktf.stringToTerraform(this._clientIdFilePath),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_file_path: cdktf.stringToTerraform(this._clientSecretFilePath),
      custom_correlation_request_id: cdktf.stringToTerraform(this._customCorrelationRequestId),
      disable_correlation_request_id: cdktf.booleanToTerraform(this._disableCorrelationRequestId),
      disable_terraform_partner_id: cdktf.booleanToTerraform(this._disableTerraformPartnerId),
      oidc_azure_service_connection_id: cdktf.stringToTerraform(this._oidcAzureServiceConnectionId),
      oidc_request_token: cdktf.stringToTerraform(this._oidcRequestToken),
      oidc_request_url: cdktf.stringToTerraform(this._oidcRequestUrl),
      oidc_token: cdktf.stringToTerraform(this._oidcToken),
      oidc_token_file_path: cdktf.stringToTerraform(this._oidcTokenFilePath),
      partner_id: cdktf.stringToTerraform(this._partnerId),
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
      custom_correlation_request_id: {
        value: cdktf.stringToHclTerraform(this._customCorrelationRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_correlation_request_id: {
        value: cdktf.booleanToHclTerraform(this._disableCorrelationRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_terraform_partner_id: {
        value: cdktf.booleanToHclTerraform(this._disableTerraformPartnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      partner_id: {
        value: cdktf.stringToHclTerraform(this._partnerId),
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
