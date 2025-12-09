// https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiemHttpDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional HTTP Headers included in calls to the destination URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#additional_headers SiemHttpDestination#additional_headers}
  */
  readonly additionalHeaders?: { [key: string]: any };
  /**
  * Whether or not sending is enabled for api_request logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#api_request_send_enabled SiemHttpDestination#api_request_send_enabled}
  */
  readonly apiRequestSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not sending is enabled for automation logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#automation_send_enabled SiemHttpDestination#automation_send_enabled}
  */
  readonly automationSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Applicable only for destination types: azure, azure_legacy. Immutable ID of the Data Collection Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#azure_dcr_immutable_id SiemHttpDestination#azure_dcr_immutable_id}
  */
  readonly azureDcrImmutableId?: string;
  /**
  * Applicable only for destination types: azure, azure_legacy. Client Credentials OAuth Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#azure_oauth_client_credentials_client_id SiemHttpDestination#azure_oauth_client_credentials_client_id}
  */
  readonly azureOauthClientCredentialsClientId?: string;
  /**
  * Applicable only for destination type: azure. Client Credentials OAuth Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#azure_oauth_client_credentials_client_secret SiemHttpDestination#azure_oauth_client_credentials_client_secret}
  */
  readonly azureOauthClientCredentialsClientSecret?: string;
  /**
  * Applicable only for destination types: azure, azure_legacy. Client Credentials OAuth Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#azure_oauth_client_credentials_tenant_id SiemHttpDestination#azure_oauth_client_credentials_tenant_id}
  */
  readonly azureOauthClientCredentialsTenantId?: string;
  /**
  * Applicable only for destination type: azure. Name of the stream in the DCR that represents the destination table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#azure_stream_name SiemHttpDestination#azure_stream_name}
  */
  readonly azureStreamName?: string;
  /**
  * Applicable only for destination type: datadog. API key provided by Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#datadog_api_key SiemHttpDestination#datadog_api_key}
  */
  readonly datadogApiKey?: string;
  /**
  * Destination Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#destination_type SiemHttpDestination#destination_type}
  */
  readonly destinationType: string;
  /**
  * Destination Url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#destination_url SiemHttpDestination#destination_url}
  */
  readonly destinationUrl?: string;
  /**
  * Whether or not sending is enabled for email logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#email_send_enabled SiemHttpDestination#email_send_enabled}
  */
  readonly emailSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not sending is enabled for exavault_api_request logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#exavault_api_request_send_enabled SiemHttpDestination#exavault_api_request_send_enabled}
  */
  readonly exavaultApiRequestSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Applicable only for destination type: file. Destination folder path on Files.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#file_destination_path SiemHttpDestination#file_destination_path}
  */
  readonly fileDestinationPath?: string;
  /**
  * Applicable only for destination type: file. Generated file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#file_format SiemHttpDestination#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Applicable only for destination type: file. Interval, in minutes, between file deliveries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#file_interval_minutes SiemHttpDestination#file_interval_minutes}
  */
  readonly fileIntervalMinutes?: number;
  /**
  * Whether or not sending is enabled for ftp_action logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#ftp_action_send_enabled SiemHttpDestination#ftp_action_send_enabled}
  */
  readonly ftpActionSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Applicable only for destination type: generic. Indicates the type of HTTP body. Can be json_newline or json_array. json_newline is multiple log entries as JSON separated by newlines. json_array is a single JSON array containing multiple log entries as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#generic_payload_type SiemHttpDestination#generic_payload_type}
  */
  readonly genericPayloadType?: string;
  /**
  * Name for this Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#name SiemHttpDestination#name}
  */
  readonly name?: string;
  /**
  * Applicable only for destination type: new_relic. API key provided by New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#new_relic_api_key SiemHttpDestination#new_relic_api_key}
  */
  readonly newRelicApiKey?: string;
  /**
  * Whether or not sending is enabled for outbound_connection logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#outbound_connection_send_enabled SiemHttpDestination#outbound_connection_send_enabled}
  */
  readonly outboundConnectionSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not sending is enabled for public_hosting_request logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#public_hosting_request_send_enabled SiemHttpDestination#public_hosting_request_send_enabled}
  */
  readonly publicHostingRequestSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Applicable only for destination type: qradar. Basic auth password provided by QRadar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#qradar_password SiemHttpDestination#qradar_password}
  */
  readonly qradarPassword?: string;
  /**
  * Applicable only for destination type: qradar. Basic auth username provided by QRadar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#qradar_username SiemHttpDestination#qradar_username}
  */
  readonly qradarUsername?: string;
  /**
  * Whether this SIEM HTTP Destination is currently being sent to or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#sending_active SiemHttpDestination#sending_active}
  */
  readonly sendingActive?: boolean | cdktf.IResolvable;
  /**
  * Whether or not sending is enabled for settings_change logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#settings_change_send_enabled SiemHttpDestination#settings_change_send_enabled}
  */
  readonly settingsChangeSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not sending is enabled for sftp_action logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#sftp_action_send_enabled SiemHttpDestination#sftp_action_send_enabled}
  */
  readonly sftpActionSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Applicable only for destination type: solar_winds. Authentication token provided by Solar Winds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#solar_winds_token SiemHttpDestination#solar_winds_token}
  */
  readonly solarWindsToken?: string;
  /**
  * Applicable only for destination type: splunk. Authentication token provided by Splunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#splunk_token SiemHttpDestination#splunk_token}
  */
  readonly splunkToken?: string;
  /**
  * Whether or not sending is enabled for sync logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#sync_send_enabled SiemHttpDestination#sync_send_enabled}
  */
  readonly syncSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not sending is enabled for web_dav_action logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#web_dav_action_send_enabled SiemHttpDestination#web_dav_action_send_enabled}
  */
  readonly webDavActionSendEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination files_siem_http_destination}
*/
export class SiemHttpDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_siem_http_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiemHttpDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiemHttpDestination to import
  * @param importFromId The id of the existing SiemHttpDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiemHttpDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_siem_http_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.403/docs/resources/siem_http_destination files_siem_http_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiemHttpDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SiemHttpDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_siem_http_destination',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.403',
        providerVersionConstraint: '0.1.403'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalHeaders = config.additionalHeaders;
    this._apiRequestSendEnabled = config.apiRequestSendEnabled;
    this._automationSendEnabled = config.automationSendEnabled;
    this._azureDcrImmutableId = config.azureDcrImmutableId;
    this._azureOauthClientCredentialsClientId = config.azureOauthClientCredentialsClientId;
    this._azureOauthClientCredentialsClientSecret = config.azureOauthClientCredentialsClientSecret;
    this._azureOauthClientCredentialsTenantId = config.azureOauthClientCredentialsTenantId;
    this._azureStreamName = config.azureStreamName;
    this._datadogApiKey = config.datadogApiKey;
    this._destinationType = config.destinationType;
    this._destinationUrl = config.destinationUrl;
    this._emailSendEnabled = config.emailSendEnabled;
    this._exavaultApiRequestSendEnabled = config.exavaultApiRequestSendEnabled;
    this._fileDestinationPath = config.fileDestinationPath;
    this._fileFormat = config.fileFormat;
    this._fileIntervalMinutes = config.fileIntervalMinutes;
    this._ftpActionSendEnabled = config.ftpActionSendEnabled;
    this._genericPayloadType = config.genericPayloadType;
    this._name = config.name;
    this._newRelicApiKey = config.newRelicApiKey;
    this._outboundConnectionSendEnabled = config.outboundConnectionSendEnabled;
    this._publicHostingRequestSendEnabled = config.publicHostingRequestSendEnabled;
    this._qradarPassword = config.qradarPassword;
    this._qradarUsername = config.qradarUsername;
    this._sendingActive = config.sendingActive;
    this._settingsChangeSendEnabled = config.settingsChangeSendEnabled;
    this._sftpActionSendEnabled = config.sftpActionSendEnabled;
    this._solarWindsToken = config.solarWindsToken;
    this._splunkToken = config.splunkToken;
    this._syncSendEnabled = config.syncSendEnabled;
    this._webDavActionSendEnabled = config.webDavActionSendEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_headers - computed: true, optional: true, required: false
  private _additionalHeaders?: { [key: string]: any }; 
  public get additionalHeaders() {
    return this.getAnyMapAttribute('additional_headers');
  }
  public set additionalHeaders(value: { [key: string]: any }) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

  // api_request_entries_sent - computed: true, optional: false, required: false
  public get apiRequestEntriesSent() {
    return this.getNumberAttribute('api_request_entries_sent');
  }

  // api_request_send_enabled - computed: true, optional: true, required: false
  private _apiRequestSendEnabled?: boolean | cdktf.IResolvable; 
  public get apiRequestSendEnabled() {
    return this.getBooleanAttribute('api_request_send_enabled');
  }
  public set apiRequestSendEnabled(value: boolean | cdktf.IResolvable) {
    this._apiRequestSendEnabled = value;
  }
  public resetApiRequestSendEnabled() {
    this._apiRequestSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRequestSendEnabledInput() {
    return this._apiRequestSendEnabled;
  }

  // automation_entries_sent - computed: true, optional: false, required: false
  public get automationEntriesSent() {
    return this.getNumberAttribute('automation_entries_sent');
  }

  // automation_send_enabled - computed: true, optional: true, required: false
  private _automationSendEnabled?: boolean | cdktf.IResolvable; 
  public get automationSendEnabled() {
    return this.getBooleanAttribute('automation_send_enabled');
  }
  public set automationSendEnabled(value: boolean | cdktf.IResolvable) {
    this._automationSendEnabled = value;
  }
  public resetAutomationSendEnabled() {
    this._automationSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationSendEnabledInput() {
    return this._automationSendEnabled;
  }

  // azure_dcr_immutable_id - computed: true, optional: true, required: false
  private _azureDcrImmutableId?: string; 
  public get azureDcrImmutableId() {
    return this.getStringAttribute('azure_dcr_immutable_id');
  }
  public set azureDcrImmutableId(value: string) {
    this._azureDcrImmutableId = value;
  }
  public resetAzureDcrImmutableId() {
    this._azureDcrImmutableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDcrImmutableIdInput() {
    return this._azureDcrImmutableId;
  }

  // azure_oauth_client_credentials_client_id - computed: true, optional: true, required: false
  private _azureOauthClientCredentialsClientId?: string; 
  public get azureOauthClientCredentialsClientId() {
    return this.getStringAttribute('azure_oauth_client_credentials_client_id');
  }
  public set azureOauthClientCredentialsClientId(value: string) {
    this._azureOauthClientCredentialsClientId = value;
  }
  public resetAzureOauthClientCredentialsClientId() {
    this._azureOauthClientCredentialsClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOauthClientCredentialsClientIdInput() {
    return this._azureOauthClientCredentialsClientId;
  }

  // azure_oauth_client_credentials_client_secret - computed: false, optional: true, required: false
  private _azureOauthClientCredentialsClientSecret?: string; 
  public get azureOauthClientCredentialsClientSecret() {
    return this.getStringAttribute('azure_oauth_client_credentials_client_secret');
  }
  public set azureOauthClientCredentialsClientSecret(value: string) {
    this._azureOauthClientCredentialsClientSecret = value;
  }
  public resetAzureOauthClientCredentialsClientSecret() {
    this._azureOauthClientCredentialsClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOauthClientCredentialsClientSecretInput() {
    return this._azureOauthClientCredentialsClientSecret;
  }

  // azure_oauth_client_credentials_client_secret_masked - computed: true, optional: false, required: false
  public get azureOauthClientCredentialsClientSecretMasked() {
    return this.getStringAttribute('azure_oauth_client_credentials_client_secret_masked');
  }

  // azure_oauth_client_credentials_tenant_id - computed: true, optional: true, required: false
  private _azureOauthClientCredentialsTenantId?: string; 
  public get azureOauthClientCredentialsTenantId() {
    return this.getStringAttribute('azure_oauth_client_credentials_tenant_id');
  }
  public set azureOauthClientCredentialsTenantId(value: string) {
    this._azureOauthClientCredentialsTenantId = value;
  }
  public resetAzureOauthClientCredentialsTenantId() {
    this._azureOauthClientCredentialsTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOauthClientCredentialsTenantIdInput() {
    return this._azureOauthClientCredentialsTenantId;
  }

  // azure_stream_name - computed: true, optional: true, required: false
  private _azureStreamName?: string; 
  public get azureStreamName() {
    return this.getStringAttribute('azure_stream_name');
  }
  public set azureStreamName(value: string) {
    this._azureStreamName = value;
  }
  public resetAzureStreamName() {
    this._azureStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStreamNameInput() {
    return this._azureStreamName;
  }

  // connection_test_entry - computed: true, optional: false, required: false
  public get connectionTestEntry() {
    return this.getStringAttribute('connection_test_entry');
  }

  // datadog_api_key - computed: false, optional: true, required: false
  private _datadogApiKey?: string; 
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }
  public set datadogApiKey(value: string) {
    this._datadogApiKey = value;
  }
  public resetDatadogApiKey() {
    this._datadogApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey;
  }

  // datadog_api_key_masked - computed: true, optional: false, required: false
  public get datadogApiKeyMasked() {
    return this.getStringAttribute('datadog_api_key_masked');
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // destination_url - computed: true, optional: true, required: false
  private _destinationUrl?: string; 
  public get destinationUrl() {
    return this.getStringAttribute('destination_url');
  }
  public set destinationUrl(value: string) {
    this._destinationUrl = value;
  }
  public resetDestinationUrl() {
    this._destinationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUrlInput() {
    return this._destinationUrl;
  }

  // email_entries_sent - computed: true, optional: false, required: false
  public get emailEntriesSent() {
    return this.getNumberAttribute('email_entries_sent');
  }

  // email_send_enabled - computed: true, optional: true, required: false
  private _emailSendEnabled?: boolean | cdktf.IResolvable; 
  public get emailSendEnabled() {
    return this.getBooleanAttribute('email_send_enabled');
  }
  public set emailSendEnabled(value: boolean | cdktf.IResolvable) {
    this._emailSendEnabled = value;
  }
  public resetEmailSendEnabled() {
    this._emailSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendEnabledInput() {
    return this._emailSendEnabled;
  }

  // exavault_api_request_entries_sent - computed: true, optional: false, required: false
  public get exavaultApiRequestEntriesSent() {
    return this.getNumberAttribute('exavault_api_request_entries_sent');
  }

  // exavault_api_request_send_enabled - computed: true, optional: true, required: false
  private _exavaultApiRequestSendEnabled?: boolean | cdktf.IResolvable; 
  public get exavaultApiRequestSendEnabled() {
    return this.getBooleanAttribute('exavault_api_request_send_enabled');
  }
  public set exavaultApiRequestSendEnabled(value: boolean | cdktf.IResolvable) {
    this._exavaultApiRequestSendEnabled = value;
  }
  public resetExavaultApiRequestSendEnabled() {
    this._exavaultApiRequestSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exavaultApiRequestSendEnabledInput() {
    return this._exavaultApiRequestSendEnabled;
  }

  // file_destination_path - computed: true, optional: true, required: false
  private _fileDestinationPath?: string; 
  public get fileDestinationPath() {
    return this.getStringAttribute('file_destination_path');
  }
  public set fileDestinationPath(value: string) {
    this._fileDestinationPath = value;
  }
  public resetFileDestinationPath() {
    this._fileDestinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDestinationPathInput() {
    return this._fileDestinationPath;
  }

  // file_format - computed: true, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // file_interval_minutes - computed: true, optional: true, required: false
  private _fileIntervalMinutes?: number; 
  public get fileIntervalMinutes() {
    return this.getNumberAttribute('file_interval_minutes');
  }
  public set fileIntervalMinutes(value: number) {
    this._fileIntervalMinutes = value;
  }
  public resetFileIntervalMinutes() {
    this._fileIntervalMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIntervalMinutesInput() {
    return this._fileIntervalMinutes;
  }

  // ftp_action_entries_sent - computed: true, optional: false, required: false
  public get ftpActionEntriesSent() {
    return this.getNumberAttribute('ftp_action_entries_sent');
  }

  // ftp_action_send_enabled - computed: true, optional: true, required: false
  private _ftpActionSendEnabled?: boolean | cdktf.IResolvable; 
  public get ftpActionSendEnabled() {
    return this.getBooleanAttribute('ftp_action_send_enabled');
  }
  public set ftpActionSendEnabled(value: boolean | cdktf.IResolvable) {
    this._ftpActionSendEnabled = value;
  }
  public resetFtpActionSendEnabled() {
    this._ftpActionSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpActionSendEnabledInput() {
    return this._ftpActionSendEnabled;
  }

  // generic_payload_type - computed: true, optional: true, required: false
  private _genericPayloadType?: string; 
  public get genericPayloadType() {
    return this.getStringAttribute('generic_payload_type');
  }
  public set genericPayloadType(value: string) {
    this._genericPayloadType = value;
  }
  public resetGenericPayloadType() {
    this._genericPayloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericPayloadTypeInput() {
    return this._genericPayloadType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_http_call_duration_ms - computed: true, optional: false, required: false
  public get lastHttpCallDurationMs() {
    return this.getNumberAttribute('last_http_call_duration_ms');
  }

  // last_http_call_error_message - computed: true, optional: false, required: false
  public get lastHttpCallErrorMessage() {
    return this.getStringAttribute('last_http_call_error_message');
  }

  // last_http_call_response_body - computed: true, optional: false, required: false
  public get lastHttpCallResponseBody() {
    return this.getStringAttribute('last_http_call_response_body');
  }

  // last_http_call_response_code - computed: true, optional: false, required: false
  public get lastHttpCallResponseCode() {
    return this.getNumberAttribute('last_http_call_response_code');
  }

  // last_http_call_success - computed: true, optional: false, required: false
  public get lastHttpCallSuccess() {
    return this.getBooleanAttribute('last_http_call_success');
  }

  // last_http_call_target_type - computed: true, optional: false, required: false
  public get lastHttpCallTargetType() {
    return this.getStringAttribute('last_http_call_target_type');
  }

  // last_http_call_time - computed: true, optional: false, required: false
  public get lastHttpCallTime() {
    return this.getStringAttribute('last_http_call_time');
  }

  // most_recent_http_call_success_time - computed: true, optional: false, required: false
  public get mostRecentHttpCallSuccessTime() {
    return this.getStringAttribute('most_recent_http_call_success_time');
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

  // new_relic_api_key - computed: false, optional: true, required: false
  private _newRelicApiKey?: string; 
  public get newRelicApiKey() {
    return this.getStringAttribute('new_relic_api_key');
  }
  public set newRelicApiKey(value: string) {
    this._newRelicApiKey = value;
  }
  public resetNewRelicApiKey() {
    this._newRelicApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicApiKeyInput() {
    return this._newRelicApiKey;
  }

  // new_relic_api_key_masked - computed: true, optional: false, required: false
  public get newRelicApiKeyMasked() {
    return this.getStringAttribute('new_relic_api_key_masked');
  }

  // outbound_connection_entries_sent - computed: true, optional: false, required: false
  public get outboundConnectionEntriesSent() {
    return this.getNumberAttribute('outbound_connection_entries_sent');
  }

  // outbound_connection_send_enabled - computed: true, optional: true, required: false
  private _outboundConnectionSendEnabled?: boolean | cdktf.IResolvable; 
  public get outboundConnectionSendEnabled() {
    return this.getBooleanAttribute('outbound_connection_send_enabled');
  }
  public set outboundConnectionSendEnabled(value: boolean | cdktf.IResolvable) {
    this._outboundConnectionSendEnabled = value;
  }
  public resetOutboundConnectionSendEnabled() {
    this._outboundConnectionSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundConnectionSendEnabledInput() {
    return this._outboundConnectionSendEnabled;
  }

  // public_hosting_request_entries_sent - computed: true, optional: false, required: false
  public get publicHostingRequestEntriesSent() {
    return this.getNumberAttribute('public_hosting_request_entries_sent');
  }

  // public_hosting_request_send_enabled - computed: true, optional: true, required: false
  private _publicHostingRequestSendEnabled?: boolean | cdktf.IResolvable; 
  public get publicHostingRequestSendEnabled() {
    return this.getBooleanAttribute('public_hosting_request_send_enabled');
  }
  public set publicHostingRequestSendEnabled(value: boolean | cdktf.IResolvable) {
    this._publicHostingRequestSendEnabled = value;
  }
  public resetPublicHostingRequestSendEnabled() {
    this._publicHostingRequestSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicHostingRequestSendEnabledInput() {
    return this._publicHostingRequestSendEnabled;
  }

  // qradar_password - computed: false, optional: true, required: false
  private _qradarPassword?: string; 
  public get qradarPassword() {
    return this.getStringAttribute('qradar_password');
  }
  public set qradarPassword(value: string) {
    this._qradarPassword = value;
  }
  public resetQradarPassword() {
    this._qradarPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qradarPasswordInput() {
    return this._qradarPassword;
  }

  // qradar_password_masked - computed: true, optional: false, required: false
  public get qradarPasswordMasked() {
    return this.getStringAttribute('qradar_password_masked');
  }

  // qradar_username - computed: true, optional: true, required: false
  private _qradarUsername?: string; 
  public get qradarUsername() {
    return this.getStringAttribute('qradar_username');
  }
  public set qradarUsername(value: string) {
    this._qradarUsername = value;
  }
  public resetQradarUsername() {
    this._qradarUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qradarUsernameInput() {
    return this._qradarUsername;
  }

  // sending_active - computed: true, optional: true, required: false
  private _sendingActive?: boolean | cdktf.IResolvable; 
  public get sendingActive() {
    return this.getBooleanAttribute('sending_active');
  }
  public set sendingActive(value: boolean | cdktf.IResolvable) {
    this._sendingActive = value;
  }
  public resetSendingActive() {
    this._sendingActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingActiveInput() {
    return this._sendingActive;
  }

  // settings_change_entries_sent - computed: true, optional: false, required: false
  public get settingsChangeEntriesSent() {
    return this.getNumberAttribute('settings_change_entries_sent');
  }

  // settings_change_send_enabled - computed: true, optional: true, required: false
  private _settingsChangeSendEnabled?: boolean | cdktf.IResolvable; 
  public get settingsChangeSendEnabled() {
    return this.getBooleanAttribute('settings_change_send_enabled');
  }
  public set settingsChangeSendEnabled(value: boolean | cdktf.IResolvable) {
    this._settingsChangeSendEnabled = value;
  }
  public resetSettingsChangeSendEnabled() {
    this._settingsChangeSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsChangeSendEnabledInput() {
    return this._settingsChangeSendEnabled;
  }

  // sftp_action_entries_sent - computed: true, optional: false, required: false
  public get sftpActionEntriesSent() {
    return this.getNumberAttribute('sftp_action_entries_sent');
  }

  // sftp_action_send_enabled - computed: true, optional: true, required: false
  private _sftpActionSendEnabled?: boolean | cdktf.IResolvable; 
  public get sftpActionSendEnabled() {
    return this.getBooleanAttribute('sftp_action_send_enabled');
  }
  public set sftpActionSendEnabled(value: boolean | cdktf.IResolvable) {
    this._sftpActionSendEnabled = value;
  }
  public resetSftpActionSendEnabled() {
    this._sftpActionSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpActionSendEnabledInput() {
    return this._sftpActionSendEnabled;
  }

  // solar_winds_token - computed: false, optional: true, required: false
  private _solarWindsToken?: string; 
  public get solarWindsToken() {
    return this.getStringAttribute('solar_winds_token');
  }
  public set solarWindsToken(value: string) {
    this._solarWindsToken = value;
  }
  public resetSolarWindsToken() {
    this._solarWindsToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solarWindsTokenInput() {
    return this._solarWindsToken;
  }

  // solar_winds_token_masked - computed: true, optional: false, required: false
  public get solarWindsTokenMasked() {
    return this.getStringAttribute('solar_winds_token_masked');
  }

  // splunk_token - computed: false, optional: true, required: false
  private _splunkToken?: string; 
  public get splunkToken() {
    return this.getStringAttribute('splunk_token');
  }
  public set splunkToken(value: string) {
    this._splunkToken = value;
  }
  public resetSplunkToken() {
    this._splunkToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTokenInput() {
    return this._splunkToken;
  }

  // splunk_token_masked - computed: true, optional: false, required: false
  public get splunkTokenMasked() {
    return this.getStringAttribute('splunk_token_masked');
  }

  // sync_entries_sent - computed: true, optional: false, required: false
  public get syncEntriesSent() {
    return this.getNumberAttribute('sync_entries_sent');
  }

  // sync_send_enabled - computed: true, optional: true, required: false
  private _syncSendEnabled?: boolean | cdktf.IResolvable; 
  public get syncSendEnabled() {
    return this.getBooleanAttribute('sync_send_enabled');
  }
  public set syncSendEnabled(value: boolean | cdktf.IResolvable) {
    this._syncSendEnabled = value;
  }
  public resetSyncSendEnabled() {
    this._syncSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSendEnabledInput() {
    return this._syncSendEnabled;
  }

  // web_dav_action_entries_sent - computed: true, optional: false, required: false
  public get webDavActionEntriesSent() {
    return this.getNumberAttribute('web_dav_action_entries_sent');
  }

  // web_dav_action_send_enabled - computed: true, optional: true, required: false
  private _webDavActionSendEnabled?: boolean | cdktf.IResolvable; 
  public get webDavActionSendEnabled() {
    return this.getBooleanAttribute('web_dav_action_send_enabled');
  }
  public set webDavActionSendEnabled(value: boolean | cdktf.IResolvable) {
    this._webDavActionSendEnabled = value;
  }
  public resetWebDavActionSendEnabled() {
    this._webDavActionSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webDavActionSendEnabledInput() {
    return this._webDavActionSendEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_headers: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalHeaders),
      api_request_send_enabled: cdktf.booleanToTerraform(this._apiRequestSendEnabled),
      automation_send_enabled: cdktf.booleanToTerraform(this._automationSendEnabled),
      azure_dcr_immutable_id: cdktf.stringToTerraform(this._azureDcrImmutableId),
      azure_oauth_client_credentials_client_id: cdktf.stringToTerraform(this._azureOauthClientCredentialsClientId),
      azure_oauth_client_credentials_client_secret: cdktf.stringToTerraform(this._azureOauthClientCredentialsClientSecret),
      azure_oauth_client_credentials_tenant_id: cdktf.stringToTerraform(this._azureOauthClientCredentialsTenantId),
      azure_stream_name: cdktf.stringToTerraform(this._azureStreamName),
      datadog_api_key: cdktf.stringToTerraform(this._datadogApiKey),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      destination_url: cdktf.stringToTerraform(this._destinationUrl),
      email_send_enabled: cdktf.booleanToTerraform(this._emailSendEnabled),
      exavault_api_request_send_enabled: cdktf.booleanToTerraform(this._exavaultApiRequestSendEnabled),
      file_destination_path: cdktf.stringToTerraform(this._fileDestinationPath),
      file_format: cdktf.stringToTerraform(this._fileFormat),
      file_interval_minutes: cdktf.numberToTerraform(this._fileIntervalMinutes),
      ftp_action_send_enabled: cdktf.booleanToTerraform(this._ftpActionSendEnabled),
      generic_payload_type: cdktf.stringToTerraform(this._genericPayloadType),
      name: cdktf.stringToTerraform(this._name),
      new_relic_api_key: cdktf.stringToTerraform(this._newRelicApiKey),
      outbound_connection_send_enabled: cdktf.booleanToTerraform(this._outboundConnectionSendEnabled),
      public_hosting_request_send_enabled: cdktf.booleanToTerraform(this._publicHostingRequestSendEnabled),
      qradar_password: cdktf.stringToTerraform(this._qradarPassword),
      qradar_username: cdktf.stringToTerraform(this._qradarUsername),
      sending_active: cdktf.booleanToTerraform(this._sendingActive),
      settings_change_send_enabled: cdktf.booleanToTerraform(this._settingsChangeSendEnabled),
      sftp_action_send_enabled: cdktf.booleanToTerraform(this._sftpActionSendEnabled),
      solar_winds_token: cdktf.stringToTerraform(this._solarWindsToken),
      splunk_token: cdktf.stringToTerraform(this._splunkToken),
      sync_send_enabled: cdktf.booleanToTerraform(this._syncSendEnabled),
      web_dav_action_send_enabled: cdktf.booleanToTerraform(this._webDavActionSendEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_headers: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._additionalHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      api_request_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._apiRequestSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automation_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._automationSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      azure_dcr_immutable_id: {
        value: cdktf.stringToHclTerraform(this._azureDcrImmutableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_oauth_client_credentials_client_id: {
        value: cdktf.stringToHclTerraform(this._azureOauthClientCredentialsClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_oauth_client_credentials_client_secret: {
        value: cdktf.stringToHclTerraform(this._azureOauthClientCredentialsClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_oauth_client_credentials_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureOauthClientCredentialsTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_stream_name: {
        value: cdktf.stringToHclTerraform(this._azureStreamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datadog_api_key: {
        value: cdktf.stringToHclTerraform(this._datadogApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_url: {
        value: cdktf.stringToHclTerraform(this._destinationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._emailSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exavault_api_request_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._exavaultApiRequestSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_destination_path: {
        value: cdktf.stringToHclTerraform(this._fileDestinationPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_format: {
        value: cdktf.stringToHclTerraform(this._fileFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_interval_minutes: {
        value: cdktf.numberToHclTerraform(this._fileIntervalMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftp_action_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._ftpActionSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generic_payload_type: {
        value: cdktf.stringToHclTerraform(this._genericPayloadType),
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
      new_relic_api_key: {
        value: cdktf.stringToHclTerraform(this._newRelicApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_connection_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._outboundConnectionSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_hosting_request_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicHostingRequestSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qradar_password: {
        value: cdktf.stringToHclTerraform(this._qradarPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qradar_username: {
        value: cdktf.stringToHclTerraform(this._qradarUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sending_active: {
        value: cdktf.booleanToHclTerraform(this._sendingActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      settings_change_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._settingsChangeSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sftp_action_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._sftpActionSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      solar_winds_token: {
        value: cdktf.stringToHclTerraform(this._solarWindsToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splunk_token: {
        value: cdktf.stringToHclTerraform(this._splunkToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._syncSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_dav_action_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._webDavActionSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
