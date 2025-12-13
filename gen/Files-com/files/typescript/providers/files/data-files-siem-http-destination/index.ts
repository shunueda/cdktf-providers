// https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/siem_http_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesSiemHttpDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * SIEM HTTP Destination ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/siem_http_destination#id DataFilesSiemHttpDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/siem_http_destination files_siem_http_destination}
*/
export class DataFilesSiemHttpDestination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_siem_http_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesSiemHttpDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesSiemHttpDestination to import
  * @param importFromId The id of the existing DataFilesSiemHttpDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/siem_http_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesSiemHttpDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_siem_http_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/siem_http_destination files_siem_http_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesSiemHttpDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesSiemHttpDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_siem_http_destination',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.412',
        providerVersionConstraint: '0.1.412'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_headers - computed: true, optional: false, required: false
  private _additionalHeaders = new cdktf.AnyMap(this, "additional_headers");
  public get additionalHeaders() {
    return this._additionalHeaders;
  }

  // api_request_entries_sent - computed: true, optional: false, required: false
  public get apiRequestEntriesSent() {
    return this.getNumberAttribute('api_request_entries_sent');
  }

  // api_request_send_enabled - computed: true, optional: false, required: false
  public get apiRequestSendEnabled() {
    return this.getBooleanAttribute('api_request_send_enabled');
  }

  // automation_entries_sent - computed: true, optional: false, required: false
  public get automationEntriesSent() {
    return this.getNumberAttribute('automation_entries_sent');
  }

  // automation_send_enabled - computed: true, optional: false, required: false
  public get automationSendEnabled() {
    return this.getBooleanAttribute('automation_send_enabled');
  }

  // azure_dcr_immutable_id - computed: true, optional: false, required: false
  public get azureDcrImmutableId() {
    return this.getStringAttribute('azure_dcr_immutable_id');
  }

  // azure_oauth_client_credentials_client_id - computed: true, optional: false, required: false
  public get azureOauthClientCredentialsClientId() {
    return this.getStringAttribute('azure_oauth_client_credentials_client_id');
  }

  // azure_oauth_client_credentials_client_secret_masked - computed: true, optional: false, required: false
  public get azureOauthClientCredentialsClientSecretMasked() {
    return this.getStringAttribute('azure_oauth_client_credentials_client_secret_masked');
  }

  // azure_oauth_client_credentials_tenant_id - computed: true, optional: false, required: false
  public get azureOauthClientCredentialsTenantId() {
    return this.getStringAttribute('azure_oauth_client_credentials_tenant_id');
  }

  // azure_stream_name - computed: true, optional: false, required: false
  public get azureStreamName() {
    return this.getStringAttribute('azure_stream_name');
  }

  // connection_test_entry - computed: true, optional: false, required: false
  public get connectionTestEntry() {
    return this.getStringAttribute('connection_test_entry');
  }

  // datadog_api_key_masked - computed: true, optional: false, required: false
  public get datadogApiKeyMasked() {
    return this.getStringAttribute('datadog_api_key_masked');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // destination_url - computed: true, optional: false, required: false
  public get destinationUrl() {
    return this.getStringAttribute('destination_url');
  }

  // email_entries_sent - computed: true, optional: false, required: false
  public get emailEntriesSent() {
    return this.getNumberAttribute('email_entries_sent');
  }

  // email_send_enabled - computed: true, optional: false, required: false
  public get emailSendEnabled() {
    return this.getBooleanAttribute('email_send_enabled');
  }

  // exavault_api_request_entries_sent - computed: true, optional: false, required: false
  public get exavaultApiRequestEntriesSent() {
    return this.getNumberAttribute('exavault_api_request_entries_sent');
  }

  // exavault_api_request_send_enabled - computed: true, optional: false, required: false
  public get exavaultApiRequestSendEnabled() {
    return this.getBooleanAttribute('exavault_api_request_send_enabled');
  }

  // file_destination_path - computed: true, optional: false, required: false
  public get fileDestinationPath() {
    return this.getStringAttribute('file_destination_path');
  }

  // file_format - computed: true, optional: false, required: false
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }

  // file_interval_minutes - computed: true, optional: false, required: false
  public get fileIntervalMinutes() {
    return this.getNumberAttribute('file_interval_minutes');
  }

  // ftp_action_entries_sent - computed: true, optional: false, required: false
  public get ftpActionEntriesSent() {
    return this.getNumberAttribute('ftp_action_entries_sent');
  }

  // ftp_action_send_enabled - computed: true, optional: false, required: false
  public get ftpActionSendEnabled() {
    return this.getBooleanAttribute('ftp_action_send_enabled');
  }

  // generic_payload_type - computed: true, optional: false, required: false
  public get genericPayloadType() {
    return this.getStringAttribute('generic_payload_type');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_relic_api_key_masked - computed: true, optional: false, required: false
  public get newRelicApiKeyMasked() {
    return this.getStringAttribute('new_relic_api_key_masked');
  }

  // outbound_connection_entries_sent - computed: true, optional: false, required: false
  public get outboundConnectionEntriesSent() {
    return this.getNumberAttribute('outbound_connection_entries_sent');
  }

  // outbound_connection_send_enabled - computed: true, optional: false, required: false
  public get outboundConnectionSendEnabled() {
    return this.getBooleanAttribute('outbound_connection_send_enabled');
  }

  // public_hosting_request_entries_sent - computed: true, optional: false, required: false
  public get publicHostingRequestEntriesSent() {
    return this.getNumberAttribute('public_hosting_request_entries_sent');
  }

  // public_hosting_request_send_enabled - computed: true, optional: false, required: false
  public get publicHostingRequestSendEnabled() {
    return this.getBooleanAttribute('public_hosting_request_send_enabled');
  }

  // qradar_password_masked - computed: true, optional: false, required: false
  public get qradarPasswordMasked() {
    return this.getStringAttribute('qradar_password_masked');
  }

  // qradar_username - computed: true, optional: false, required: false
  public get qradarUsername() {
    return this.getStringAttribute('qradar_username');
  }

  // sending_active - computed: true, optional: false, required: false
  public get sendingActive() {
    return this.getBooleanAttribute('sending_active');
  }

  // settings_change_entries_sent - computed: true, optional: false, required: false
  public get settingsChangeEntriesSent() {
    return this.getNumberAttribute('settings_change_entries_sent');
  }

  // settings_change_send_enabled - computed: true, optional: false, required: false
  public get settingsChangeSendEnabled() {
    return this.getBooleanAttribute('settings_change_send_enabled');
  }

  // sftp_action_entries_sent - computed: true, optional: false, required: false
  public get sftpActionEntriesSent() {
    return this.getNumberAttribute('sftp_action_entries_sent');
  }

  // sftp_action_send_enabled - computed: true, optional: false, required: false
  public get sftpActionSendEnabled() {
    return this.getBooleanAttribute('sftp_action_send_enabled');
  }

  // solar_winds_token_masked - computed: true, optional: false, required: false
  public get solarWindsTokenMasked() {
    return this.getStringAttribute('solar_winds_token_masked');
  }

  // splunk_token_masked - computed: true, optional: false, required: false
  public get splunkTokenMasked() {
    return this.getStringAttribute('splunk_token_masked');
  }

  // sync_entries_sent - computed: true, optional: false, required: false
  public get syncEntriesSent() {
    return this.getNumberAttribute('sync_entries_sent');
  }

  // sync_send_enabled - computed: true, optional: false, required: false
  public get syncSendEnabled() {
    return this.getBooleanAttribute('sync_send_enabled');
  }

  // web_dav_action_entries_sent - computed: true, optional: false, required: false
  public get webDavActionEntriesSent() {
    return this.getNumberAttribute('web_dav_action_entries_sent');
  }

  // web_dav_action_send_enabled - computed: true, optional: false, required: false
  public get webDavActionSendEnabled() {
    return this.getBooleanAttribute('web_dav_action_send_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
