// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bcc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#bcc NotificationEmail#bcc}
  */
  readonly bcc?: string[];
  /**
  * Cc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#cc NotificationEmail#cc}
  */
  readonly cc?: string[];
  /**
  * From.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#from NotificationEmail#from}
  */
  readonly from: string;
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#include_health_warnings NotificationEmail#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * NotificationEmail name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#name NotificationEmail#name}
  */
  readonly name: string;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_application_update NotificationEmail#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_download NotificationEmail#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_episode_file_delete NotificationEmail#on_episode_file_delete}
  */
  readonly onEpisodeFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_episode_file_delete_for_upgrade NotificationEmail#on_episode_file_delete_for_upgrade}
  */
  readonly onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_grab NotificationEmail#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_health_issue NotificationEmail#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_health_restored NotificationEmail#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * On import complete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_import_complete NotificationEmail#on_import_complete}
  */
  readonly onImportComplete?: boolean | cdktf.IResolvable;
  /**
  * On manual interaction required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_manual_interaction_required NotificationEmail#on_manual_interaction_required}
  */
  readonly onManualInteractionRequired?: boolean | cdktf.IResolvable;
  /**
  * On series add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_series_add NotificationEmail#on_series_add}
  */
  readonly onSeriesAdd?: boolean | cdktf.IResolvable;
  /**
  * On series delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_series_delete NotificationEmail#on_series_delete}
  */
  readonly onSeriesDelete?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#on_upgrade NotificationEmail#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#password NotificationEmail#password}
  */
  readonly password?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#port NotificationEmail#port}
  */
  readonly port?: number;
  /**
  * Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#server NotificationEmail#server}
  */
  readonly server: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#tags NotificationEmail#tags}
  */
  readonly tags?: number[];
  /**
  * To.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#to NotificationEmail#to}
  */
  readonly to: string[];
  /**
  * Require encryption. `0` Preferred, `1` Always, `2` Never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#use_encryption NotificationEmail#use_encryption}
  */
  readonly useEncryption?: number;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#username NotificationEmail#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email sonarr_notification_email}
*/
export class NotificationEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_notification_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationEmail to import
  * @param importFromId The id of the existing NotificationEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_notification_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_email sonarr_notification_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationEmailConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_notification_email',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bcc = config.bcc;
    this._cc = config.cc;
    this._from = config.from;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._name = config.name;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onDownload = config.onDownload;
    this._onEpisodeFileDelete = config.onEpisodeFileDelete;
    this._onEpisodeFileDeleteForUpgrade = config.onEpisodeFileDeleteForUpgrade;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._onImportComplete = config.onImportComplete;
    this._onManualInteractionRequired = config.onManualInteractionRequired;
    this._onSeriesAdd = config.onSeriesAdd;
    this._onSeriesDelete = config.onSeriesDelete;
    this._onUpgrade = config.onUpgrade;
    this._password = config.password;
    this._port = config.port;
    this._server = config.server;
    this._tags = config.tags;
    this._to = config.to;
    this._useEncryption = config.useEncryption;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // on_episode_file_delete - computed: true, optional: true, required: false
  private _onEpisodeFileDelete?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDelete() {
    return this.getBooleanAttribute('on_episode_file_delete');
  }
  public set onEpisodeFileDelete(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDelete = value;
  }
  public resetOnEpisodeFileDelete() {
    this._onEpisodeFileDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteInput() {
    return this._onEpisodeFileDelete;
  }

  // on_episode_file_delete_for_upgrade - computed: true, optional: true, required: false
  private _onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_episode_file_delete_for_upgrade');
  }
  public set onEpisodeFileDeleteForUpgrade(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDeleteForUpgrade = value;
  }
  public resetOnEpisodeFileDeleteForUpgrade() {
    this._onEpisodeFileDeleteForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteForUpgradeInput() {
    return this._onEpisodeFileDeleteForUpgrade;
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

  // on_import_complete - computed: true, optional: true, required: false
  private _onImportComplete?: boolean | cdktf.IResolvable; 
  public get onImportComplete() {
    return this.getBooleanAttribute('on_import_complete');
  }
  public set onImportComplete(value: boolean | cdktf.IResolvable) {
    this._onImportComplete = value;
  }
  public resetOnImportComplete() {
    this._onImportComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onImportCompleteInput() {
    return this._onImportComplete;
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

  // on_series_add - computed: true, optional: true, required: false
  private _onSeriesAdd?: boolean | cdktf.IResolvable; 
  public get onSeriesAdd() {
    return this.getBooleanAttribute('on_series_add');
  }
  public set onSeriesAdd(value: boolean | cdktf.IResolvable) {
    this._onSeriesAdd = value;
  }
  public resetOnSeriesAdd() {
    this._onSeriesAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesAddInput() {
    return this._onSeriesAdd;
  }

  // on_series_delete - computed: true, optional: true, required: false
  private _onSeriesDelete?: boolean | cdktf.IResolvable; 
  public get onSeriesDelete() {
    return this.getBooleanAttribute('on_series_delete');
  }
  public set onSeriesDelete(value: boolean | cdktf.IResolvable) {
    this._onSeriesDelete = value;
  }
  public resetOnSeriesDelete() {
    this._onSeriesDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesDeleteInput() {
    return this._onSeriesDelete;
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
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

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return cdktf.Fn.tolist(this.getListAttribute('to'));
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bcc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bcc),
      cc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cc),
      from: cdktf.stringToTerraform(this._from),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      name: cdktf.stringToTerraform(this._name),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_episode_file_delete: cdktf.booleanToTerraform(this._onEpisodeFileDelete),
      on_episode_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onEpisodeFileDeleteForUpgrade),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      on_import_complete: cdktf.booleanToTerraform(this._onImportComplete),
      on_manual_interaction_required: cdktf.booleanToTerraform(this._onManualInteractionRequired),
      on_series_add: cdktf.booleanToTerraform(this._onSeriesAdd),
      on_series_delete: cdktf.booleanToTerraform(this._onSeriesDelete),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
      use_encryption: cdktf.numberToTerraform(this._useEncryption),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bcc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bcc),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cc),
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
      include_health_warnings: {
        value: cdktf.booleanToHclTerraform(this._includeHealthWarnings),
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
      on_episode_file_delete: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_episode_file_delete_for_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDeleteForUpgrade),
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
      on_import_complete: {
        value: cdktf.booleanToHclTerraform(this._onImportComplete),
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
      on_series_add: {
        value: cdktf.booleanToHclTerraform(this._onSeriesAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_series_delete: {
        value: cdktf.booleanToHclTerraform(this._onSeriesDelete),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
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
      use_encryption: {
        value: cdktf.numberToHclTerraform(this._useEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
