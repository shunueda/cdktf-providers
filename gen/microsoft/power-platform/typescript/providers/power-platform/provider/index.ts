// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerPlatformProviderConfig {
  /**
  * The IDs of the additional Entra tenants that Power Platform API uses to authenticate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#auxiliary_tenant_ids PowerPlatformProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * The service connection id of the Azure DevOps service connection. For use in workload identity federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#azdo_service_connection_id PowerPlatformProvider#azdo_service_connection_id}
  */
  readonly azdoServiceConnectionId?: string;
  /**
  * Base64 encoded PKCS#12 certificate bundle. For use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#client_certificate PowerPlatformProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#client_certificate_file_path PowerPlatformProvider#client_certificate_file_path}
  */
  readonly clientCertificateFilePath?: string;
  /**
  * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#client_certificate_password PowerPlatformProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The client id of the Power Platform API app registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#client_id PowerPlatformProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The secret of the Power Platform API app registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#client_secret PowerPlatformProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The cloud to use for authentication and Power Platform API requests. Default is `public`. Valid values are `public`, `gcc`, `gcchigh`, `china`, `dod`, `ex`, `rx`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#cloud PowerPlatformProvider#cloud}
  */
  readonly cloud?: string;
  /**
  * Disable sending the default Terraform partner ID when no custom partner_id is provided. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#disable_terraform_partner_id PowerPlatformProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktf.IResolvable;
  /**
  * Enables Continuous Access Evaluation (CAE) for authentication tokens. CAE allows for near real-time security policy enforcement such as user termination, password changes, and location policy changes. [Learn more about CAE](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-continuous-access-evaluation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#enable_continuous_access_evaluation PowerPlatformProvider#enable_continuous_access_evaluation}
  */
  readonly enableContinuousAccessEvaluation?: boolean | cdktf.IResolvable;
  /**
  * The bearer token for the request to the OIDC provider. For use When authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#oidc_request_token PowerPlatformProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. For use When authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#oidc_request_url PowerPlatformProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#oidc_token PowerPlatformProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#oidc_token_file_path PowerPlatformProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * The GUID of the partner for Customer Usage Attribution (CUA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#partner_id PowerPlatformProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * Flag to indicate whether to opt out of telemetry. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#telemetry_optout PowerPlatformProvider#telemetry_optout}
  */
  readonly telemetryOptout?: boolean | cdktf.IResolvable;
  /**
  * The id of the AAD tenant that Power Platform API uses to authenticate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#tenant_id PowerPlatformProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Flag to indicate whether to use the CLI for authentication. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#use_cli PowerPlatformProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether to use the Azure Developer CLI for authentication. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#use_dev_cli PowerPlatformProvider#use_dev_cli}
  */
  readonly useDevCli?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether to use managed identity for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#use_msi PowerPlatformProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Allow OpenID Connect to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#use_oidc PowerPlatformProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#alias PowerPlatformProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs power-platform}
*/
export class PowerPlatformProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "power-platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerPlatformProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerPlatformProvider to import
  * @param importFromId The id of the existing PowerPlatformProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerPlatformProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "power-platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs power-platform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerPlatformProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PowerPlatformProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'power-platform',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1'
      },
      terraformProviderSource: 'microsoft/power-platform'
    });
    this._auxiliaryTenantIds = config.auxiliaryTenantIds;
    this._azdoServiceConnectionId = config.azdoServiceConnectionId;
    this._clientCertificate = config.clientCertificate;
    this._clientCertificateFilePath = config.clientCertificateFilePath;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._cloud = config.cloud;
    this._disableTerraformPartnerId = config.disableTerraformPartnerId;
    this._enableContinuousAccessEvaluation = config.enableContinuousAccessEvaluation;
    this._oidcRequestToken = config.oidcRequestToken;
    this._oidcRequestUrl = config.oidcRequestUrl;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFilePath = config.oidcTokenFilePath;
    this._partnerId = config.partnerId;
    this._telemetryOptout = config.telemetryOptout;
    this._tenantId = config.tenantId;
    this._useCli = config.useCli;
    this._useDevCli = config.useDevCli;
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

  // azdo_service_connection_id - computed: false, optional: true, required: false
  private _azdoServiceConnectionId?: string; 
  public get azdoServiceConnectionId() {
    return this._azdoServiceConnectionId;
  }
  public set azdoServiceConnectionId(value: string | undefined) {
    this._azdoServiceConnectionId = value;
  }
  public resetAzdoServiceConnectionId() {
    this._azdoServiceConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azdoServiceConnectionIdInput() {
    return this._azdoServiceConnectionId;
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

  // client_certificate_file_path - computed: false, optional: true, required: false
  private _clientCertificateFilePath?: string; 
  public get clientCertificateFilePath() {
    return this._clientCertificateFilePath;
  }
  public set clientCertificateFilePath(value: string | undefined) {
    this._clientCertificateFilePath = value;
  }
  public resetClientCertificateFilePath() {
    this._clientCertificateFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateFilePathInput() {
    return this._clientCertificateFilePath;
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

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this._cloud;
  }
  public set cloud(value: string | undefined) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
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

  // enable_continuous_access_evaluation - computed: false, optional: true, required: false
  private _enableContinuousAccessEvaluation?: boolean | cdktf.IResolvable; 
  public get enableContinuousAccessEvaluation() {
    return this._enableContinuousAccessEvaluation;
  }
  public set enableContinuousAccessEvaluation(value: boolean | cdktf.IResolvable | undefined) {
    this._enableContinuousAccessEvaluation = value;
  }
  public resetEnableContinuousAccessEvaluation() {
    this._enableContinuousAccessEvaluation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContinuousAccessEvaluationInput() {
    return this._enableContinuousAccessEvaluation;
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

  // telemetry_optout - computed: false, optional: true, required: false
  private _telemetryOptout?: boolean | cdktf.IResolvable; 
  public get telemetryOptout() {
    return this._telemetryOptout;
  }
  public set telemetryOptout(value: boolean | cdktf.IResolvable | undefined) {
    this._telemetryOptout = value;
  }
  public resetTelemetryOptout() {
    this._telemetryOptout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryOptoutInput() {
    return this._telemetryOptout;
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

  // use_dev_cli - computed: false, optional: true, required: false
  private _useDevCli?: boolean | cdktf.IResolvable; 
  public get useDevCli() {
    return this._useDevCli;
  }
  public set useDevCli(value: boolean | cdktf.IResolvable | undefined) {
    this._useDevCli = value;
  }
  public resetUseDevCli() {
    this._useDevCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDevCliInput() {
    return this._useDevCli;
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
      azdo_service_connection_id: cdktf.stringToTerraform(this._azdoServiceConnectionId),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_certificate_file_path: cdktf.stringToTerraform(this._clientCertificateFilePath),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      cloud: cdktf.stringToTerraform(this._cloud),
      disable_terraform_partner_id: cdktf.booleanToTerraform(this._disableTerraformPartnerId),
      enable_continuous_access_evaluation: cdktf.booleanToTerraform(this._enableContinuousAccessEvaluation),
      oidc_request_token: cdktf.stringToTerraform(this._oidcRequestToken),
      oidc_request_url: cdktf.stringToTerraform(this._oidcRequestUrl),
      oidc_token: cdktf.stringToTerraform(this._oidcToken),
      oidc_token_file_path: cdktf.stringToTerraform(this._oidcTokenFilePath),
      partner_id: cdktf.stringToTerraform(this._partnerId),
      telemetry_optout: cdktf.booleanToTerraform(this._telemetryOptout),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_cli: cdktf.booleanToTerraform(this._useCli),
      use_dev_cli: cdktf.booleanToTerraform(this._useDevCli),
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
      azdo_service_connection_id: {
        value: cdktf.stringToHclTerraform(this._azdoServiceConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_file_path: {
        value: cdktf.stringToHclTerraform(this._clientCertificateFilePath),
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
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_terraform_partner_id: {
        value: cdktf.booleanToHclTerraform(this._disableTerraformPartnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_continuous_access_evaluation: {
        value: cdktf.booleanToHclTerraform(this._enableContinuousAccessEvaluation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      telemetry_optout: {
        value: cdktf.booleanToHclTerraform(this._telemetryOptout),
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
      use_cli: {
        value: cdktf.booleanToHclTerraform(this._useCli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_dev_cli: {
        value: cdktf.booleanToHclTerraform(this._useDevCli),
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
