// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationAppriseConfig extends cdktf.TerraformMetaArguments {
  /**
  * AuthPassword.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#auth_password NotificationApprise#auth_password}
  */
  readonly authPassword?: string;
  /**
  * AuthUsername.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#auth_username NotificationApprise#auth_username}
  */
  readonly authUsername?: string;
  /**
  * ConfigurationKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#configuration_key NotificationApprise#configuration_key}
  */
  readonly configurationKey?: string;
  /**
  * Tags and emojis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#field_tags NotificationApprise#field_tags}
  */
  readonly fieldTags?: string[];
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#include_health_warnings NotificationApprise#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * Include manual grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#include_manual_grabs NotificationApprise#include_manual_grabs}
  */
  readonly includeManualGrabs?: boolean | cdktf.IResolvable;
  /**
  * NotificationApprise name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#name NotificationApprise#name}
  */
  readonly name: string;
  /**
  * Notification type. `0` Info, `1` Success, `2` Warning, `3` Failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#notification_type NotificationApprise#notification_type}
  */
  readonly notificationType?: number;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#on_application_update NotificationApprise#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On release grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#on_grab NotificationApprise#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#on_health_issue NotificationApprise#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#on_health_restored NotificationApprise#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * Server URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#server_url NotificationApprise#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Comma separated stateless URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#stateless_urls NotificationApprise#stateless_urls}
  */
  readonly statelessUrls?: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#tags NotificationApprise#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise prowlarr_notification_apprise}
*/
export class NotificationApprise extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_notification_apprise";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationApprise resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationApprise to import
  * @param importFromId The id of the existing NotificationApprise that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationApprise to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_notification_apprise", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_apprise prowlarr_notification_apprise} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationAppriseConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationAppriseConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_notification_apprise',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPassword = config.authPassword;
    this._authUsername = config.authUsername;
    this._configurationKey = config.configurationKey;
    this._fieldTags = config.fieldTags;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._includeManualGrabs = config.includeManualGrabs;
    this._name = config.name;
    this._notificationType = config.notificationType;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._serverUrl = config.serverUrl;
    this._statelessUrls = config.statelessUrls;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // include_manual_grabs - computed: true, optional: true, required: false
  private _includeManualGrabs?: boolean | cdktf.IResolvable; 
  public get includeManualGrabs() {
    return this.getBooleanAttribute('include_manual_grabs');
  }
  public set includeManualGrabs(value: boolean | cdktf.IResolvable) {
    this._includeManualGrabs = value;
  }
  public resetIncludeManualGrabs() {
    this._includeManualGrabs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeManualGrabsInput() {
    return this._includeManualGrabs;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      configuration_key: cdktf.stringToTerraform(this._configurationKey),
      field_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldTags),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      include_manual_grabs: cdktf.booleanToTerraform(this._includeManualGrabs),
      name: cdktf.stringToTerraform(this._name),
      notification_type: cdktf.numberToTerraform(this._notificationType),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      stateless_urls: cdktf.stringToTerraform(this._statelessUrls),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
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
      configuration_key: {
        value: cdktf.stringToHclTerraform(this._configurationKey),
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
      include_health_warnings: {
        value: cdktf.booleanToHclTerraform(this._includeHealthWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_manual_grabs: {
        value: cdktf.booleanToHclTerraform(this._includeManualGrabs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      on_application_update: {
        value: cdktf.booleanToHclTerraform(this._onApplicationUpdate),
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
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
