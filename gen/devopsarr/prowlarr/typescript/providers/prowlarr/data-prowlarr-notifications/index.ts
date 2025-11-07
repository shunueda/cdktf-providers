// https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/notifications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProwlarrNotificationsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataProwlarrNotificationsNotifications {
}

export function dataProwlarrNotificationsNotificationsToTerraform(struct?: DataProwlarrNotificationsNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProwlarrNotificationsNotificationsToHclTerraform(struct?: DataProwlarrNotificationsNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProwlarrNotificationsNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataProwlarrNotificationsNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProwlarrNotificationsNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
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
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('device_ids')));
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

  // include_health_warnings - computed: true, optional: false, required: false
  public get includeHealthWarnings() {
    return this.getBooleanAttribute('include_health_warnings');
  }

  // include_manual_grabs - computed: true, optional: false, required: false
  public get includeManualGrabs() {
    return this.getBooleanAttribute('include_manual_grabs');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // map_from - computed: true, optional: false, required: false
  public get mapFrom() {
    return this.getStringAttribute('map_from');
  }

  // map_to - computed: true, optional: false, required: false
  public get mapTo() {
    return this.getStringAttribute('map_to');
  }

  // mention - computed: true, optional: false, required: false
  public get mention() {
    return this.getStringAttribute('mention');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getNumberAttribute('method');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
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
}

export class DataProwlarrNotificationsNotificationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProwlarrNotificationsNotificationsOutputReference {
    return new DataProwlarrNotificationsNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/notifications prowlarr_notifications}
*/
export class DataProwlarrNotifications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_notifications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProwlarrNotifications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProwlarrNotifications to import
  * @param importFromId The id of the existing DataProwlarrNotifications that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/notifications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProwlarrNotifications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_notifications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/data-sources/notifications prowlarr_notifications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProwlarrNotificationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProwlarrNotificationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_notifications',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new DataProwlarrNotificationsNotificationsList(this, "notifications", true);
  public get notifications() {
    return this._notifications;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
