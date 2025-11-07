// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alert_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryAlertHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alert_handler#name DataPingdirectoryAlertHandler#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alert_handler pingdirectory_alert_handler}
*/
export class DataPingdirectoryAlertHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_alert_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryAlertHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryAlertHandler to import
  * @param importFromId The id of the existing DataPingdirectoryAlertHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alert_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryAlertHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_alert_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alert_handler pingdirectory_alert_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryAlertHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryAlertHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_alert_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asynchronous - computed: true, optional: false, required: false
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // command_timeout - computed: true, optional: false, required: false
  public get commandTimeout() {
    return this.getStringAttribute('command_timeout');
  }

  // community_name - computed: true, optional: false, required: false
  public get communityName() {
    return this.getStringAttribute('community_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled_alert_type - computed: true, optional: false, required: false
  public get disabledAlertType() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_alert_type'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enabled_alert_severity - computed: true, optional: false, required: false
  public get enabledAlertSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_alert_severity'));
  }

  // enabled_alert_type - computed: true, optional: false, required: false
  public get enabledAlertType() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_alert_type'));
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_monitor_data_filter - computed: true, optional: false, required: false
  public get includeMonitorDataFilter() {
    return this.getStringAttribute('include_monitor_data_filter');
  }

  // long_message_behavior - computed: true, optional: false, required: false
  public get longMessageBehavior() {
    return this.getStringAttribute('long_message_behavior');
  }

  // message_body - computed: true, optional: false, required: false
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }

  // message_subject - computed: true, optional: false, required: false
  public get messageSubject() {
    return this.getStringAttribute('message_subject');
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

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }

  // recipient_address - computed: true, optional: false, required: false
  public get recipientAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_address'));
  }

  // recipient_phone_number - computed: true, optional: false, required: false
  public get recipientPhoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_phone_number'));
  }

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }

  // sender_address - computed: true, optional: false, required: false
  public get senderAddress() {
    return this.getStringAttribute('sender_address');
  }

  // sender_phone_number - computed: true, optional: false, required: false
  public get senderPhoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('sender_phone_number'));
  }

  // server_host_name - computed: true, optional: false, required: false
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // twilio_account_sid - computed: true, optional: false, required: false
  public get twilioAccountSid() {
    return this.getStringAttribute('twilio_account_sid');
  }

  // twilio_auth_token - computed: true, optional: false, required: false
  public get twilioAuthToken() {
    return this.getStringAttribute('twilio_auth_token');
  }

  // twilio_auth_token_passphrase_provider - computed: true, optional: false, required: false
  public get twilioAuthTokenPassphraseProvider() {
    return this.getStringAttribute('twilio_auth_token_passphrase_provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
