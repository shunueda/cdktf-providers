// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Notification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/notification#name DataSonarrNotification#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/notification sonarr_notification}
*/
export class DataSonarrNotification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrNotification to import
  * @param importFromId The id of the existing DataSonarrNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/notification sonarr_notification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: DataSonarrNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_notification',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
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

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // access_token_secret - computed: true, optional: false, required: false
  public get accessTokenSecret() {
    return this.getStringAttribute('access_token_secret');
  }

  // always_update - computed: true, optional: false, required: false
  public get alwaysUpdate() {
    return this.getBooleanAttribute('always_update');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // app_token - computed: true, optional: false, required: false
  public get appToken() {
    return this.getStringAttribute('app_token');
  }

  // arguments - computed: true, optional: false, required: false
  public get arguments() {
    return this.getStringAttribute('arguments');
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // auth_user - computed: true, optional: false, required: false
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }

  // auth_username - computed: true, optional: false, required: false
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // avatar - computed: true, optional: false, required: false
  public get avatar() {
    return this.getStringAttribute('avatar');
  }

  // bcc - computed: true, optional: false, required: false
  public get bcc() {
    return cdktf.Fn.tolist(this.getListAttribute('bcc'));
  }

  // bot_token - computed: true, optional: false, required: false
  public get botToken() {
    return this.getStringAttribute('bot_token');
  }

  // cc - computed: true, optional: false, required: false
  public get cc() {
    return cdktf.Fn.tolist(this.getListAttribute('cc'));
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // channel_tags - computed: true, optional: false, required: false
  public get channelTags() {
    return cdktf.Fn.tolist(this.getListAttribute('channel_tags'));
  }

  // chat_id - computed: true, optional: false, required: false
  public get chatId() {
    return this.getStringAttribute('chat_id');
  }

  // clean_library - computed: true, optional: false, required: false
  public get cleanLibrary() {
    return this.getBooleanAttribute('clean_library');
  }

  // click_url - computed: true, optional: false, required: false
  public get clickUrl() {
    return this.getStringAttribute('click_url');
  }

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // configuration_key - computed: true, optional: false, required: false
  public get configurationKey() {
    return this.getStringAttribute('configuration_key');
  }

  // consumer_key - computed: true, optional: false, required: false
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }

  // consumer_secret - computed: true, optional: false, required: false
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }

  // device_ids - computed: true, optional: false, required: false
  public get deviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('device_ids'));
  }

  // device_names - computed: true, optional: false, required: false
  public get deviceNames() {
    return this.getStringAttribute('device_names');
  }

  // devices - computed: true, optional: false, required: false
  public get devices() {
    return cdktf.Fn.tolist(this.getListAttribute('devices'));
  }

  // direct_message - computed: true, optional: false, required: false
  public get directMessage() {
    return this.getBooleanAttribute('direct_message');
  }

  // display_time - computed: true, optional: false, required: false
  public get displayTime() {
    return this.getNumberAttribute('display_time');
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getStringAttribute('event');
  }

  // expire - computed: true, optional: false, required: false
  public get expire() {
    return this.getNumberAttribute('expire');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // field_tags - computed: true, optional: false, required: false
  public get fieldTags() {
    return cdktf.Fn.tolist(this.getListAttribute('field_tags'));
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // grab_fields - computed: true, optional: false, required: false
  public get grabFields() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('grab_fields')));
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
  }

  // import_fields - computed: true, optional: false, required: false
  public get importFields() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('import_fields')));
  }

  // include_health_warnings - computed: true, optional: false, required: false
  public get includeHealthWarnings() {
    return this.getBooleanAttribute('include_health_warnings');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mention - computed: true, optional: false, required: false
  public get mention() {
    return this.getStringAttribute('mention');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getNumberAttribute('method');
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

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getNumberAttribute('notification_type');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getBooleanAttribute('notify');
  }

  // on_application_update - computed: true, optional: false, required: false
  public get onApplicationUpdate() {
    return this.getBooleanAttribute('on_application_update');
  }

  // on_download - computed: true, optional: false, required: false
  public get onDownload() {
    return this.getBooleanAttribute('on_download');
  }

  // on_episode_file_delete - computed: true, optional: false, required: false
  public get onEpisodeFileDelete() {
    return this.getBooleanAttribute('on_episode_file_delete');
  }

  // on_episode_file_delete_for_upgrade - computed: true, optional: false, required: false
  public get onEpisodeFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_episode_file_delete_for_upgrade');
  }

  // on_grab - computed: true, optional: false, required: false
  public get onGrab() {
    return this.getBooleanAttribute('on_grab');
  }

  // on_health_issue - computed: true, optional: false, required: false
  public get onHealthIssue() {
    return this.getBooleanAttribute('on_health_issue');
  }

  // on_health_restored - computed: true, optional: false, required: false
  public get onHealthRestored() {
    return this.getBooleanAttribute('on_health_restored');
  }

  // on_import_complete - computed: true, optional: false, required: false
  public get onImportComplete() {
    return this.getBooleanAttribute('on_import_complete');
  }

  // on_manual_interaction_required - computed: true, optional: false, required: false
  public get onManualInteractionRequired() {
    return this.getBooleanAttribute('on_manual_interaction_required');
  }

  // on_rename - computed: true, optional: false, required: false
  public get onRename() {
    return this.getBooleanAttribute('on_rename');
  }

  // on_series_add - computed: true, optional: false, required: false
  public get onSeriesAdd() {
    return this.getBooleanAttribute('on_series_add');
  }

  // on_series_delete - computed: true, optional: false, required: false
  public get onSeriesDelete() {
    return this.getBooleanAttribute('on_series_delete');
  }

  // on_upgrade - computed: true, optional: false, required: false
  public get onUpgrade() {
    return this.getBooleanAttribute('on_upgrade');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // receiver_id - computed: true, optional: false, required: false
  public get receiverId() {
    return this.getStringAttribute('receiver_id');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getNumberAttribute('retry');
  }

  // send_silently - computed: true, optional: false, required: false
  public get sendSilently() {
    return this.getBooleanAttribute('send_silently');
  }

  // sender_domain - computed: true, optional: false, required: false
  public get senderDomain() {
    return this.getStringAttribute('sender_domain');
  }

  // sender_id - computed: true, optional: false, required: false
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }

  // sender_number - computed: true, optional: false, required: false
  public get senderNumber() {
    return this.getStringAttribute('sender_number');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // sign_in - computed: true, optional: false, required: false
  public get signIn() {
    return this.getStringAttribute('sign_in');
  }

  // sound - computed: true, optional: false, required: false
  public get sound() {
    return this.getStringAttribute('sound');
  }

  // stateless_urls - computed: true, optional: false, required: false
  public get statelessUrls() {
    return this.getStringAttribute('stateless_urls');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return cdktf.Fn.tolist(this.getListAttribute('to'));
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }

  // update_library - computed: true, optional: false, required: false
  public get updateLibrary() {
    return this.getBooleanAttribute('update_library');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // use_encryption - computed: true, optional: false, required: false
  public get useEncryption() {
    return this.getNumberAttribute('use_encryption');
  }

  // use_eu_endpoint - computed: true, optional: false, required: false
  public get useEuEndpoint() {
    return this.getBooleanAttribute('use_eu_endpoint');
  }

  // use_ssl - computed: true, optional: false, required: false
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }

  // user_key - computed: true, optional: false, required: false
  public get userKey() {
    return this.getStringAttribute('user_key');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // web_hook_url - computed: true, optional: false, required: false
  public get webHookUrl() {
    return this.getStringAttribute('web_hook_url');
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
