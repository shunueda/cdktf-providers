// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#access_token Notification#access_token}
  */
  readonly accessToken?: string;
  /**
  * Access token secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#access_token_secret Notification#access_token_secret}
  */
  readonly accessTokenSecret?: string;
  /**
  * Always update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#always_update Notification#always_update}
  */
  readonly alwaysUpdate?: boolean | cdktf.IResolvable;
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#api_key Notification#api_key}
  */
  readonly apiKey?: string;
  /**
  * App token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#app_token Notification#app_token}
  */
  readonly appToken?: string;
  /**
  * Arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#arguments Notification#arguments}
  */
  readonly arguments?: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#auth_password Notification#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Auth token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#auth_token Notification#auth_token}
  */
  readonly authToken?: string;
  /**
  * Auth user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#auth_user Notification#auth_user}
  */
  readonly authUser?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#auth_username Notification#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Author.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#author Notification#author}
  */
  readonly author?: string;
  /**
  * Avatar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#avatar Notification#avatar}
  */
  readonly avatar?: string;
  /**
  * Bcc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#bcc Notification#bcc}
  */
  readonly bcc?: string[];
  /**
  * Bot token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#bot_token Notification#bot_token}
  */
  readonly botToken?: string;
  /**
  * Cc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#cc Notification#cc}
  */
  readonly cc?: string[];
  /**
  * Channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#channel Notification#channel}
  */
  readonly channel?: string;
  /**
  * Channel tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#channel_tags Notification#channel_tags}
  */
  readonly channelTags?: string[];
  /**
  * Chat ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#chat_id Notification#chat_id}
  */
  readonly chatId?: string;
  /**
  * Clean library flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#clean_library Notification#clean_library}
  */
  readonly cleanLibrary?: boolean | cdktf.IResolvable;
  /**
  * Click URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#click_url Notification#click_url}
  */
  readonly clickUrl?: string;
  /**
  * Notification configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#config_contract Notification#config_contract}
  */
  readonly configContract: string;
  /**
  * Configuration key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#configuration_key Notification#configuration_key}
  */
  readonly configurationKey?: string;
  /**
  * Consumer key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#consumer_key Notification#consumer_key}
  */
  readonly consumerKey?: string;
  /**
  * Consumer secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#consumer_secret Notification#consumer_secret}
  */
  readonly consumerSecret?: string;
  /**
  * Device IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#device_ids Notification#device_ids}
  */
  readonly deviceIds?: string[];
  /**
  * Device names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#device_names Notification#device_names}
  */
  readonly deviceNames?: string;
  /**
  * Devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#devices Notification#devices}
  */
  readonly devices?: string[];
  /**
  * Direct message flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#direct_message Notification#direct_message}
  */
  readonly directMessage?: boolean | cdktf.IResolvable;
  /**
  * Display time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#display_time Notification#display_time}
  */
  readonly displayTime?: number;
  /**
  * Event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#event Notification#event}
  */
  readonly event?: string;
  /**
  * Expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#expire Notification#expire}
  */
  readonly expire?: number;
  /**
  * Expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#expires Notification#expires}
  */
  readonly expires?: string;
  /**
  * Specific tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#field_tags Notification#field_tags}
  */
  readonly fieldTags?: string[];
  /**
  * From.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#from Notification#from}
  */
  readonly from?: string;
  /**
  * Grab fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Group, `5` Size, `6` Links, `7` Release, `8` Poster, `9` Fanart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#grab_fields Notification#grab_fields}
  */
  readonly grabFields?: number[];
  /**
  * Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#host Notification#host}
  */
  readonly host?: string;
  /**
  * Icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#icon Notification#icon}
  */
  readonly icon?: string;
  /**
  * Notification implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#implementation Notification#implementation}
  */
  readonly implementation: string;
  /**
  * Import fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Codecs, `5` Group, `6` Size, `7` Languages, `8` Subtitles, `9` Links, `10` Release, `11` Poster, `12` Fanart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#import_fields Notification#import_fields}
  */
  readonly importFields?: number[];
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#include_health_warnings Notification#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#instance_name Notification#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#key Notification#key}
  */
  readonly key?: string;
  /**
  * Map From.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#map_from Notification#map_from}
  */
  readonly mapFrom?: string;
  /**
  * Map To.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#map_to Notification#map_to}
  */
  readonly mapTo?: string;
  /**
  * Mention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#mention Notification#mention}
  */
  readonly mention?: string;
  /**
  * Method. `1` POST, `2` PUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#method Notification#method}
  */
  readonly method?: number;
  /**
  * Notification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * Notification type. `0` Info, `1` Success, `2` Warning, `3` Failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#notification_type Notification#notification_type}
  */
  readonly notificationType?: number;
  /**
  * Notify flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#notify Notification#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_application_update Notification#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_download Notification#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_grab Notification#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_health_issue Notification#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_health_restored Notification#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * On manual interaction required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_manual_interaction_required Notification#on_manual_interaction_required}
  */
  readonly onManualInteractionRequired?: boolean | cdktf.IResolvable;
  /**
  * On movie added flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_movie_added Notification#on_movie_added}
  */
  readonly onMovieAdded?: boolean | cdktf.IResolvable;
  /**
  * On movie delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_movie_delete Notification#on_movie_delete}
  */
  readonly onMovieDelete: boolean | cdktf.IResolvable;
  /**
  * On movie file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_movie_file_delete Notification#on_movie_file_delete}
  */
  readonly onMovieFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On movie file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_movie_file_delete_for_upgrade Notification#on_movie_file_delete_for_upgrade}
  */
  readonly onMovieFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On rename flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_rename Notification#on_rename}
  */
  readonly onRename?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#on_upgrade Notification#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#password Notification#password}
  */
  readonly password?: string;
  /**
  * Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#path Notification#path}
  */
  readonly path?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#port Notification#port}
  */
  readonly port?: number;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#priority Notification#priority}
  */
  readonly priority?: number;
  /**
  * Recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#recipients Notification#recipients}
  */
  readonly recipients?: string[];
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#refresh_token Notification#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#retry Notification#retry}
  */
  readonly retry?: number;
  /**
  * Add silently flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#send_silently Notification#send_silently}
  */
  readonly sendSilently?: boolean | cdktf.IResolvable;
  /**
  * Sender domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#sender_domain Notification#sender_domain}
  */
  readonly senderDomain?: string;
  /**
  * Sender ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#sender_id Notification#sender_id}
  */
  readonly senderId?: string;
  /**
  * server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#server Notification#server}
  */
  readonly server?: string;
  /**
  * Server url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#server_url Notification#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Sign in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#sign_in Notification#sign_in}
  */
  readonly signIn?: string;
  /**
  * Sound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#sound Notification#sound}
  */
  readonly sound?: string;
  /**
  * Stateless URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#stateless_urls Notification#stateless_urls}
  */
  readonly statelessUrls?: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#tags Notification#tags}
  */
  readonly tags?: number[];
  /**
  * To.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#to Notification#to}
  */
  readonly to?: string[];
  /**
  * Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#token Notification#token}
  */
  readonly token?: string;
  /**
  * Topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#topic_id Notification#topic_id}
  */
  readonly topicId?: string;
  /**
  * Topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#topics Notification#topics}
  */
  readonly topics?: string[];
  /**
  * Update library flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#update_library Notification#update_library}
  */
  readonly updateLibrary?: boolean | cdktf.IResolvable;
  /**
  * URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#url Notification#url}
  */
  readonly url?: string;
  /**
  * Require encryption. `0` Preferred, `1` Always, `2` Never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#use_encryption Notification#use_encryption}
  */
  readonly useEncryption?: number;
  /**
  * Use EU endpoint flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#use_eu_endpoint Notification#use_eu_endpoint}
  */
  readonly useEuEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Use SSL flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#use_ssl Notification#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * User key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#user_key Notification#user_key}
  */
  readonly userKey?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#username Notification#username}
  */
  readonly username?: string;
  /**
  * Web hook url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#web_hook_url Notification#web_hook_url}
  */
  readonly webHookUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification radarr_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/notification radarr_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_notification',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessToken = config.accessToken;
    this._accessTokenSecret = config.accessTokenSecret;
    this._alwaysUpdate = config.alwaysUpdate;
    this._apiKey = config.apiKey;
    this._appToken = config.appToken;
    this._arguments = config.arguments;
    this._authPassword = config.authPassword;
    this._authToken = config.authToken;
    this._authUser = config.authUser;
    this._authUsername = config.authUsername;
    this._author = config.author;
    this._avatar = config.avatar;
    this._bcc = config.bcc;
    this._botToken = config.botToken;
    this._cc = config.cc;
    this._channel = config.channel;
    this._channelTags = config.channelTags;
    this._chatId = config.chatId;
    this._cleanLibrary = config.cleanLibrary;
    this._clickUrl = config.clickUrl;
    this._configContract = config.configContract;
    this._configurationKey = config.configurationKey;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._deviceIds = config.deviceIds;
    this._deviceNames = config.deviceNames;
    this._devices = config.devices;
    this._directMessage = config.directMessage;
    this._displayTime = config.displayTime;
    this._event = config.event;
    this._expire = config.expire;
    this._expires = config.expires;
    this._fieldTags = config.fieldTags;
    this._from = config.from;
    this._grabFields = config.grabFields;
    this._host = config.host;
    this._icon = config.icon;
    this._implementation = config.implementation;
    this._importFields = config.importFields;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._instanceName = config.instanceName;
    this._key = config.key;
    this._mapFrom = config.mapFrom;
    this._mapTo = config.mapTo;
    this._mention = config.mention;
    this._method = config.method;
    this._name = config.name;
    this._notificationType = config.notificationType;
    this._notify = config.notify;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onDownload = config.onDownload;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._onManualInteractionRequired = config.onManualInteractionRequired;
    this._onMovieAdded = config.onMovieAdded;
    this._onMovieDelete = config.onMovieDelete;
    this._onMovieFileDelete = config.onMovieFileDelete;
    this._onMovieFileDeleteForUpgrade = config.onMovieFileDeleteForUpgrade;
    this._onRename = config.onRename;
    this._onUpgrade = config.onUpgrade;
    this._password = config.password;
    this._path = config.path;
    this._port = config.port;
    this._priority = config.priority;
    this._recipients = config.recipients;
    this._refreshToken = config.refreshToken;
    this._retry = config.retry;
    this._sendSilently = config.sendSilently;
    this._senderDomain = config.senderDomain;
    this._senderId = config.senderId;
    this._server = config.server;
    this._serverUrl = config.serverUrl;
    this._signIn = config.signIn;
    this._sound = config.sound;
    this._statelessUrls = config.statelessUrls;
    this._tags = config.tags;
    this._to = config.to;
    this._token = config.token;
    this._topicId = config.topicId;
    this._topics = config.topics;
    this._updateLibrary = config.updateLibrary;
    this._url = config.url;
    this._useEncryption = config.useEncryption;
    this._useEuEndpoint = config.useEuEndpoint;
    this._useSsl = config.useSsl;
    this._userKey = config.userKey;
    this._username = config.username;
    this._webHookUrl = config.webHookUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // access_token_secret - computed: true, optional: true, required: false
  private _accessTokenSecret?: string; 
  public get accessTokenSecret() {
    return this.getStringAttribute('access_token_secret');
  }
  public set accessTokenSecret(value: string) {
    this._accessTokenSecret = value;
  }
  public resetAccessTokenSecret() {
    this._accessTokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSecretInput() {
    return this._accessTokenSecret;
  }

  // always_update - computed: true, optional: true, required: false
  private _alwaysUpdate?: boolean | cdktf.IResolvable; 
  public get alwaysUpdate() {
    return this.getBooleanAttribute('always_update');
  }
  public set alwaysUpdate(value: boolean | cdktf.IResolvable) {
    this._alwaysUpdate = value;
  }
  public resetAlwaysUpdate() {
    this._alwaysUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUpdateInput() {
    return this._alwaysUpdate;
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // app_token - computed: true, optional: true, required: false
  private _appToken?: string; 
  public get appToken() {
    return this.getStringAttribute('app_token');
  }
  public set appToken(value: string) {
    this._appToken = value;
  }
  public resetAppToken() {
    this._appToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTokenInput() {
    return this._appToken;
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // auth_password - computed: true, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_token - computed: true, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // auth_user - computed: true, optional: true, required: false
  private _authUser?: string; 
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }
  public set authUser(value: string) {
    this._authUser = value;
  }
  public resetAuthUser() {
    this._authUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserInput() {
    return this._authUser;
  }

  // auth_username - computed: true, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // author - computed: true, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // avatar - computed: true, optional: true, required: false
  private _avatar?: string; 
  public get avatar() {
    return this.getStringAttribute('avatar');
  }
  public set avatar(value: string) {
    this._avatar = value;
  }
  public resetAvatar() {
    this._avatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar;
  }

  // bcc - computed: true, optional: true, required: false
  private _bcc?: string[]; 
  public get bcc() {
    return cdktf.Fn.tolist(this.getListAttribute('bcc'));
  }
  public set bcc(value: string[]) {
    this._bcc = value;
  }
  public resetBcc() {
    this._bcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccInput() {
    return this._bcc;
  }

  // bot_token - computed: true, optional: true, required: false
  private _botToken?: string; 
  public get botToken() {
    return this.getStringAttribute('bot_token');
  }
  public set botToken(value: string) {
    this._botToken = value;
  }
  public resetBotToken() {
    this._botToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botTokenInput() {
    return this._botToken;
  }

  // cc - computed: true, optional: true, required: false
  private _cc?: string[]; 
  public get cc() {
    return cdktf.Fn.tolist(this.getListAttribute('cc'));
  }
  public set cc(value: string[]) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channel_tags - computed: true, optional: true, required: false
  private _channelTags?: string[]; 
  public get channelTags() {
    return cdktf.Fn.tolist(this.getListAttribute('channel_tags'));
  }
  public set channelTags(value: string[]) {
    this._channelTags = value;
  }
  public resetChannelTags() {
    this._channelTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTagsInput() {
    return this._channelTags;
  }

  // chat_id - computed: true, optional: true, required: false
  private _chatId?: string; 
  public get chatId() {
    return this.getStringAttribute('chat_id');
  }
  public set chatId(value: string) {
    this._chatId = value;
  }
  public resetChatId() {
    this._chatId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatIdInput() {
    return this._chatId;
  }

  // clean_library - computed: true, optional: true, required: false
  private _cleanLibrary?: boolean | cdktf.IResolvable; 
  public get cleanLibrary() {
    return this.getBooleanAttribute('clean_library');
  }
  public set cleanLibrary(value: boolean | cdktf.IResolvable) {
    this._cleanLibrary = value;
  }
  public resetCleanLibrary() {
    this._cleanLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanLibraryInput() {
    return this._cleanLibrary;
  }

  // click_url - computed: true, optional: true, required: false
  private _clickUrl?: string; 
  public get clickUrl() {
    return this.getStringAttribute('click_url');
  }
  public set clickUrl(value: string) {
    this._clickUrl = value;
  }
  public resetClickUrl() {
    this._clickUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickUrlInput() {
    return this._clickUrl;
  }

  // config_contract - computed: false, optional: false, required: true
  private _configContract?: string; 
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }
  public set configContract(value: string) {
    this._configContract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configContractInput() {
    return this._configContract;
  }

  // configuration_key - computed: true, optional: true, required: false
  private _configurationKey?: string; 
  public get configurationKey() {
    return this.getStringAttribute('configuration_key');
  }
  public set configurationKey(value: string) {
    this._configurationKey = value;
  }
  public resetConfigurationKey() {
    this._configurationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationKeyInput() {
    return this._configurationKey;
  }

  // consumer_key - computed: true, optional: true, required: false
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  public resetConsumerKey() {
    this._consumerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: true, optional: true, required: false
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  public resetConsumerSecret() {
    this._consumerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // device_ids - computed: true, optional: true, required: false
  private _deviceIds?: string[]; 
  public get deviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('device_ids'));
  }
  public set deviceIds(value: string[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // device_names - computed: true, optional: true, required: false
  private _deviceNames?: string; 
  public get deviceNames() {
    return this.getStringAttribute('device_names');
  }
  public set deviceNames(value: string) {
    this._deviceNames = value;
  }
  public resetDeviceNames() {
    this._deviceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNamesInput() {
    return this._deviceNames;
  }

  // devices - computed: true, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return cdktf.Fn.tolist(this.getListAttribute('devices'));
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // direct_message - computed: true, optional: true, required: false
  private _directMessage?: boolean | cdktf.IResolvable; 
  public get directMessage() {
    return this.getBooleanAttribute('direct_message');
  }
  public set directMessage(value: boolean | cdktf.IResolvable) {
    this._directMessage = value;
  }
  public resetDirectMessage() {
    this._directMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directMessageInput() {
    return this._directMessage;
  }

  // display_time - computed: true, optional: true, required: false
  private _displayTime?: number; 
  public get displayTime() {
    return this.getNumberAttribute('display_time');
  }
  public set displayTime(value: number) {
    this._displayTime = value;
  }
  public resetDisplayTime() {
    this._displayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTimeInput() {
    return this._displayTime;
  }

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // expire - computed: true, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // expires - computed: true, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // field_tags - computed: true, optional: true, required: false
  private _fieldTags?: string[]; 
  public get fieldTags() {
    return cdktf.Fn.tolist(this.getListAttribute('field_tags'));
  }
  public set fieldTags(value: string[]) {
    this._fieldTags = value;
  }
  public resetFieldTags() {
    this._fieldTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTagsInput() {
    return this._fieldTags;
  }

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // grab_fields - computed: true, optional: true, required: false
  private _grabFields?: number[]; 
  public get grabFields() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('grab_fields')));
  }
  public set grabFields(value: number[]) {
    this._grabFields = value;
  }
  public resetGrabFields() {
    this._grabFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grabFieldsInput() {
    return this._grabFields;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
  }

  // import_fields - computed: true, optional: true, required: false
  private _importFields?: number[]; 
  public get importFields() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('import_fields')));
  }
  public set importFields(value: number[]) {
    this._importFields = value;
  }
  public resetImportFields() {
    this._importFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFieldsInput() {
    return this._importFields;
  }

  // include_health_warnings - computed: true, optional: true, required: false
  private _includeHealthWarnings?: boolean | cdktf.IResolvable; 
  public get includeHealthWarnings() {
    return this.getBooleanAttribute('include_health_warnings');
  }
  public set includeHealthWarnings(value: boolean | cdktf.IResolvable) {
    this._includeHealthWarnings = value;
  }
  public resetIncludeHealthWarnings() {
    this._includeHealthWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHealthWarningsInput() {
    return this._includeHealthWarnings;
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // map_from - computed: true, optional: true, required: false
  private _mapFrom?: string; 
  public get mapFrom() {
    return this.getStringAttribute('map_from');
  }
  public set mapFrom(value: string) {
    this._mapFrom = value;
  }
  public resetMapFrom() {
    this._mapFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapFromInput() {
    return this._mapFrom;
  }

  // map_to - computed: true, optional: true, required: false
  private _mapTo?: string; 
  public get mapTo() {
    return this.getStringAttribute('map_to');
  }
  public set mapTo(value: string) {
    this._mapTo = value;
  }
  public resetMapTo() {
    this._mapTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapToInput() {
    return this._mapTo;
  }

  // mention - computed: true, optional: true, required: false
  private _mention?: string; 
  public get mention() {
    return this.getStringAttribute('mention');
  }
  public set mention(value: string) {
    this._mention = value;
  }
  public resetMention() {
    this._mention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionInput() {
    return this._mention;
  }

  // method - computed: true, optional: true, required: false
  private _method?: number; 
  public get method() {
    return this.getNumberAttribute('method');
  }
  public set method(value: number) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // notification_type - computed: true, optional: true, required: false
  private _notificationType?: number; 
  public get notificationType() {
    return this.getNumberAttribute('notification_type');
  }
  public set notificationType(value: number) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // notify - computed: true, optional: true, required: false
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // on_application_update - computed: true, optional: true, required: false
  private _onApplicationUpdate?: boolean | cdktf.IResolvable; 
  public get onApplicationUpdate() {
    return this.getBooleanAttribute('on_application_update');
  }
  public set onApplicationUpdate(value: boolean | cdktf.IResolvable) {
    this._onApplicationUpdate = value;
  }
  public resetOnApplicationUpdate() {
    this._onApplicationUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onApplicationUpdateInput() {
    return this._onApplicationUpdate;
  }

  // on_download - computed: true, optional: true, required: false
  private _onDownload?: boolean | cdktf.IResolvable; 
  public get onDownload() {
    return this.getBooleanAttribute('on_download');
  }
  public set onDownload(value: boolean | cdktf.IResolvable) {
    this._onDownload = value;
  }
  public resetOnDownload() {
    this._onDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDownloadInput() {
    return this._onDownload;
  }

  // on_grab - computed: true, optional: true, required: false
  private _onGrab?: boolean | cdktf.IResolvable; 
  public get onGrab() {
    return this.getBooleanAttribute('on_grab');
  }
  public set onGrab(value: boolean | cdktf.IResolvable) {
    this._onGrab = value;
  }
  public resetOnGrab() {
    this._onGrab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onGrabInput() {
    return this._onGrab;
  }

  // on_health_issue - computed: true, optional: true, required: false
  private _onHealthIssue?: boolean | cdktf.IResolvable; 
  public get onHealthIssue() {
    return this.getBooleanAttribute('on_health_issue');
  }
  public set onHealthIssue(value: boolean | cdktf.IResolvable) {
    this._onHealthIssue = value;
  }
  public resetOnHealthIssue() {
    this._onHealthIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHealthIssueInput() {
    return this._onHealthIssue;
  }

  // on_health_restored - computed: true, optional: true, required: false
  private _onHealthRestored?: boolean | cdktf.IResolvable; 
  public get onHealthRestored() {
    return this.getBooleanAttribute('on_health_restored');
  }
  public set onHealthRestored(value: boolean | cdktf.IResolvable) {
    this._onHealthRestored = value;
  }
  public resetOnHealthRestored() {
    this._onHealthRestored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHealthRestoredInput() {
    return this._onHealthRestored;
  }

  // on_manual_interaction_required - computed: true, optional: true, required: false
  private _onManualInteractionRequired?: boolean | cdktf.IResolvable; 
  public get onManualInteractionRequired() {
    return this.getBooleanAttribute('on_manual_interaction_required');
  }
  public set onManualInteractionRequired(value: boolean | cdktf.IResolvable) {
    this._onManualInteractionRequired = value;
  }
  public resetOnManualInteractionRequired() {
    this._onManualInteractionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onManualInteractionRequiredInput() {
    return this._onManualInteractionRequired;
  }

  // on_movie_added - computed: true, optional: true, required: false
  private _onMovieAdded?: boolean | cdktf.IResolvable; 
  public get onMovieAdded() {
    return this.getBooleanAttribute('on_movie_added');
  }
  public set onMovieAdded(value: boolean | cdktf.IResolvable) {
    this._onMovieAdded = value;
  }
  public resetOnMovieAdded() {
    this._onMovieAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieAddedInput() {
    return this._onMovieAdded;
  }

  // on_movie_delete - computed: false, optional: false, required: true
  private _onMovieDelete?: boolean | cdktf.IResolvable; 
  public get onMovieDelete() {
    return this.getBooleanAttribute('on_movie_delete');
  }
  public set onMovieDelete(value: boolean | cdktf.IResolvable) {
    this._onMovieDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieDeleteInput() {
    return this._onMovieDelete;
  }

  // on_movie_file_delete - computed: true, optional: true, required: false
  private _onMovieFileDelete?: boolean | cdktf.IResolvable; 
  public get onMovieFileDelete() {
    return this.getBooleanAttribute('on_movie_file_delete');
  }
  public set onMovieFileDelete(value: boolean | cdktf.IResolvable) {
    this._onMovieFileDelete = value;
  }
  public resetOnMovieFileDelete() {
    this._onMovieFileDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieFileDeleteInput() {
    return this._onMovieFileDelete;
  }

  // on_movie_file_delete_for_upgrade - computed: true, optional: true, required: false
  private _onMovieFileDeleteForUpgrade?: boolean | cdktf.IResolvable; 
  public get onMovieFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_movie_file_delete_for_upgrade');
  }
  public set onMovieFileDeleteForUpgrade(value: boolean | cdktf.IResolvable) {
    this._onMovieFileDeleteForUpgrade = value;
  }
  public resetOnMovieFileDeleteForUpgrade() {
    this._onMovieFileDeleteForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieFileDeleteForUpgradeInput() {
    return this._onMovieFileDeleteForUpgrade;
  }

  // on_rename - computed: true, optional: true, required: false
  private _onRename?: boolean | cdktf.IResolvable; 
  public get onRename() {
    return this.getBooleanAttribute('on_rename');
  }
  public set onRename(value: boolean | cdktf.IResolvable) {
    this._onRename = value;
  }
  public resetOnRename() {
    this._onRename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRenameInput() {
    return this._onRename;
  }

  // on_upgrade - computed: true, optional: true, required: false
  private _onUpgrade?: boolean | cdktf.IResolvable; 
  public get onUpgrade() {
    return this.getBooleanAttribute('on_upgrade');
  }
  public set onUpgrade(value: boolean | cdktf.IResolvable) {
    this._onUpgrade = value;
  }
  public resetOnUpgrade() {
    this._onUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpgradeInput() {
    return this._onUpgrade;
  }

  // password - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // recipients - computed: true, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // send_silently - computed: true, optional: true, required: false
  private _sendSilently?: boolean | cdktf.IResolvable; 
  public get sendSilently() {
    return this.getBooleanAttribute('send_silently');
  }
  public set sendSilently(value: boolean | cdktf.IResolvable) {
    this._sendSilently = value;
  }
  public resetSendSilently() {
    this._sendSilently = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSilentlyInput() {
    return this._sendSilently;
  }

  // sender_domain - computed: true, optional: true, required: false
  private _senderDomain?: string; 
  public get senderDomain() {
    return this.getStringAttribute('sender_domain');
  }
  public set senderDomain(value: string) {
    this._senderDomain = value;
  }
  public resetSenderDomain() {
    this._senderDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderDomainInput() {
    return this._senderDomain;
  }

  // sender_id - computed: true, optional: true, required: false
  private _senderId?: string; 
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string) {
    this._senderId = value;
  }
  public resetSenderId() {
    this._senderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_url - computed: true, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // sign_in - computed: true, optional: true, required: false
  private _signIn?: string; 
  public get signIn() {
    return this.getStringAttribute('sign_in');
  }
  public set signIn(value: string) {
    this._signIn = value;
  }
  public resetSignIn() {
    this._signIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInInput() {
    return this._signIn;
  }

  // sound - computed: true, optional: true, required: false
  private _sound?: string; 
  public get sound() {
    return this.getStringAttribute('sound');
  }
  public set sound(value: string) {
    this._sound = value;
  }
  public resetSound() {
    this._sound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soundInput() {
    return this._sound;
  }

  // stateless_urls - computed: true, optional: true, required: false
  private _statelessUrls?: string; 
  public get statelessUrls() {
    return this.getStringAttribute('stateless_urls');
  }
  public set statelessUrls(value: string) {
    this._statelessUrls = value;
  }
  public resetStatelessUrls() {
    this._statelessUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessUrlsInput() {
    return this._statelessUrls;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // to - computed: true, optional: true, required: false
  private _to?: string[]; 
  public get to() {
    return cdktf.Fn.tolist(this.getListAttribute('to'));
  }
  public set to(value: string[]) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // topic_id - computed: true, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // topics - computed: true, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // update_library - computed: true, optional: true, required: false
  private _updateLibrary?: boolean | cdktf.IResolvable; 
  public get updateLibrary() {
    return this.getBooleanAttribute('update_library');
  }
  public set updateLibrary(value: boolean | cdktf.IResolvable) {
    this._updateLibrary = value;
  }
  public resetUpdateLibrary() {
    this._updateLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLibraryInput() {
    return this._updateLibrary;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_encryption - computed: true, optional: true, required: false
  private _useEncryption?: number; 
  public get useEncryption() {
    return this.getNumberAttribute('use_encryption');
  }
  public set useEncryption(value: number) {
    this._useEncryption = value;
  }
  public resetUseEncryption() {
    this._useEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEncryptionInput() {
    return this._useEncryption;
  }

  // use_eu_endpoint - computed: true, optional: true, required: false
  private _useEuEndpoint?: boolean | cdktf.IResolvable; 
  public get useEuEndpoint() {
    return this.getBooleanAttribute('use_eu_endpoint');
  }
  public set useEuEndpoint(value: boolean | cdktf.IResolvable) {
    this._useEuEndpoint = value;
  }
  public resetUseEuEndpoint() {
    this._useEuEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEuEndpointInput() {
    return this._useEuEndpoint;
  }

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // user_key - computed: true, optional: true, required: false
  private _userKey?: string; 
  public get userKey() {
    return this.getStringAttribute('user_key');
  }
  public set userKey(value: string) {
    this._userKey = value;
  }
  public resetUserKey() {
    this._userKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userKeyInput() {
    return this._userKey;
  }

  // username - computed: true, optional: true, required: false
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

  // web_hook_url - computed: true, optional: true, required: false
  private _webHookUrl?: string; 
  public get webHookUrl() {
    return this.getStringAttribute('web_hook_url');
  }
  public set webHookUrl(value: string) {
    this._webHookUrl = value;
  }
  public resetWebHookUrl() {
    this._webHookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHookUrlInput() {
    return this._webHookUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      access_token_secret: cdktf.stringToTerraform(this._accessTokenSecret),
      always_update: cdktf.booleanToTerraform(this._alwaysUpdate),
      api_key: cdktf.stringToTerraform(this._apiKey),
      app_token: cdktf.stringToTerraform(this._appToken),
      arguments: cdktf.stringToTerraform(this._arguments),
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_token: cdktf.stringToTerraform(this._authToken),
      auth_user: cdktf.stringToTerraform(this._authUser),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      author: cdktf.stringToTerraform(this._author),
      avatar: cdktf.stringToTerraform(this._avatar),
      bcc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bcc),
      bot_token: cdktf.stringToTerraform(this._botToken),
      cc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cc),
      channel: cdktf.stringToTerraform(this._channel),
      channel_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channelTags),
      chat_id: cdktf.stringToTerraform(this._chatId),
      clean_library: cdktf.booleanToTerraform(this._cleanLibrary),
      click_url: cdktf.stringToTerraform(this._clickUrl),
      config_contract: cdktf.stringToTerraform(this._configContract),
      configuration_key: cdktf.stringToTerraform(this._configurationKey),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
      device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceIds),
      device_names: cdktf.stringToTerraform(this._deviceNames),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      direct_message: cdktf.booleanToTerraform(this._directMessage),
      display_time: cdktf.numberToTerraform(this._displayTime),
      event: cdktf.stringToTerraform(this._event),
      expire: cdktf.numberToTerraform(this._expire),
      expires: cdktf.stringToTerraform(this._expires),
      field_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldTags),
      from: cdktf.stringToTerraform(this._from),
      grab_fields: cdktf.listMapper(cdktf.numberToTerraform, false)(this._grabFields),
      host: cdktf.stringToTerraform(this._host),
      icon: cdktf.stringToTerraform(this._icon),
      implementation: cdktf.stringToTerraform(this._implementation),
      import_fields: cdktf.listMapper(cdktf.numberToTerraform, false)(this._importFields),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      key: cdktf.stringToTerraform(this._key),
      map_from: cdktf.stringToTerraform(this._mapFrom),
      map_to: cdktf.stringToTerraform(this._mapTo),
      mention: cdktf.stringToTerraform(this._mention),
      method: cdktf.numberToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      notification_type: cdktf.numberToTerraform(this._notificationType),
      notify: cdktf.booleanToTerraform(this._notify),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      on_manual_interaction_required: cdktf.booleanToTerraform(this._onManualInteractionRequired),
      on_movie_added: cdktf.booleanToTerraform(this._onMovieAdded),
      on_movie_delete: cdktf.booleanToTerraform(this._onMovieDelete),
      on_movie_file_delete: cdktf.booleanToTerraform(this._onMovieFileDelete),
      on_movie_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onMovieFileDeleteForUpgrade),
      on_rename: cdktf.booleanToTerraform(this._onRename),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      password: cdktf.stringToTerraform(this._password),
      path: cdktf.stringToTerraform(this._path),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipients),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      retry: cdktf.numberToTerraform(this._retry),
      send_silently: cdktf.booleanToTerraform(this._sendSilently),
      sender_domain: cdktf.stringToTerraform(this._senderDomain),
      sender_id: cdktf.stringToTerraform(this._senderId),
      server: cdktf.stringToTerraform(this._server),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      sign_in: cdktf.stringToTerraform(this._signIn),
      sound: cdktf.stringToTerraform(this._sound),
      stateless_urls: cdktf.stringToTerraform(this._statelessUrls),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
      token: cdktf.stringToTerraform(this._token),
      topic_id: cdktf.stringToTerraform(this._topicId),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
      update_library: cdktf.booleanToTerraform(this._updateLibrary),
      url: cdktf.stringToTerraform(this._url),
      use_encryption: cdktf.numberToTerraform(this._useEncryption),
      use_eu_endpoint: cdktf.booleanToTerraform(this._useEuEndpoint),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      user_key: cdktf.stringToTerraform(this._userKey),
      username: cdktf.stringToTerraform(this._username),
      web_hook_url: cdktf.stringToTerraform(this._webHookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token_secret: {
        value: cdktf.stringToHclTerraform(this._accessTokenSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      always_update: {
        value: cdktf.booleanToHclTerraform(this._alwaysUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_token: {
        value: cdktf.stringToHclTerraform(this._appToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arguments: {
        value: cdktf.stringToHclTerraform(this._arguments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_user: {
        value: cdktf.stringToHclTerraform(this._authUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar: {
        value: cdktf.stringToHclTerraform(this._avatar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bcc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bcc),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bot_token: {
        value: cdktf.stringToHclTerraform(this._botToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cc),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channelTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      chat_id: {
        value: cdktf.stringToHclTerraform(this._chatId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clean_library: {
        value: cdktf.booleanToHclTerraform(this._cleanLibrary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      click_url: {
        value: cdktf.stringToHclTerraform(this._clickUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_contract: {
        value: cdktf.stringToHclTerraform(this._configContract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_key: {
        value: cdktf.stringToHclTerraform(this._configurationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktf.stringToHclTerraform(this._consumerSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_names: {
        value: cdktf.stringToHclTerraform(this._deviceNames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      direct_message: {
        value: cdktf.booleanToHclTerraform(this._directMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_time: {
        value: cdktf.numberToHclTerraform(this._displayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event: {
        value: cdktf.stringToHclTerraform(this._event),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expires: {
        value: cdktf.stringToHclTerraform(this._expires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grab_fields: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._grabFields),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_fields: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._importFields),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      include_health_warnings: {
        value: cdktf.booleanToHclTerraform(this._includeHealthWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map_from: {
        value: cdktf.stringToHclTerraform(this._mapFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map_to: {
        value: cdktf.stringToHclTerraform(this._mapTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mention: {
        value: cdktf.stringToHclTerraform(this._mention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.numberToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_type: {
        value: cdktf.numberToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify: {
        value: cdktf.booleanToHclTerraform(this._notify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_application_update: {
        value: cdktf.booleanToHclTerraform(this._onApplicationUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_download: {
        value: cdktf.booleanToHclTerraform(this._onDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_grab: {
        value: cdktf.booleanToHclTerraform(this._onGrab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_health_issue: {
        value: cdktf.booleanToHclTerraform(this._onHealthIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_health_restored: {
        value: cdktf.booleanToHclTerraform(this._onHealthRestored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_manual_interaction_required: {
        value: cdktf.booleanToHclTerraform(this._onManualInteractionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_added: {
        value: cdktf.booleanToHclTerraform(this._onMovieAdded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_delete: {
        value: cdktf.booleanToHclTerraform(this._onMovieDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_file_delete: {
        value: cdktf.booleanToHclTerraform(this._onMovieFileDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_file_delete_for_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onMovieFileDeleteForUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_rename: {
        value: cdktf.booleanToHclTerraform(this._onRename),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_token: {
        value: cdktf.stringToHclTerraform(this._refreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_silently: {
        value: cdktf.booleanToHclTerraform(this._sendSilently),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sender_domain: {
        value: cdktf.stringToHclTerraform(this._senderDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sender_id: {
        value: cdktf.stringToHclTerraform(this._senderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_in: {
        value: cdktf.stringToHclTerraform(this._signIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sound: {
        value: cdktf.stringToHclTerraform(this._sound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateless_urls: {
        value: cdktf.stringToHclTerraform(this._statelessUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      update_library: {
        value: cdktf.booleanToHclTerraform(this._updateLibrary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_encryption: {
        value: cdktf.numberToHclTerraform(this._useEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_eu_endpoint: {
        value: cdktf.booleanToHclTerraform(this._useEuEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_key: {
        value: cdktf.stringToHclTerraform(this._userKey),
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
      web_hook_url: {
        value: cdktf.stringToHclTerraform(this._webHookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
