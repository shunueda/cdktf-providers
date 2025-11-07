// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationEmbyConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#api_key NotificationEmby#api_key}
  */
  readonly apiKey: string;
  /**
  * Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#host NotificationEmby#host}
  */
  readonly host: string;
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#include_health_warnings NotificationEmby#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * NotificationEmby name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#name NotificationEmby#name}
  */
  readonly name: string;
  /**
  * Notify flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#notify NotificationEmby#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_application_update NotificationEmby#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_download NotificationEmby#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_grab NotificationEmby#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_health_issue NotificationEmby#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_health_restored NotificationEmby#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * On movie added flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_movie_added NotificationEmby#on_movie_added}
  */
  readonly onMovieAdded?: boolean | cdktf.IResolvable;
  /**
  * On movie delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_movie_delete NotificationEmby#on_movie_delete}
  */
  readonly onMovieDelete: boolean | cdktf.IResolvable;
  /**
  * On movie file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_movie_file_delete NotificationEmby#on_movie_file_delete}
  */
  readonly onMovieFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On movie file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_movie_file_delete_for_upgrade NotificationEmby#on_movie_file_delete_for_upgrade}
  */
  readonly onMovieFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On rename flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_rename NotificationEmby#on_rename}
  */
  readonly onRename?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#on_upgrade NotificationEmby#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#port NotificationEmby#port}
  */
  readonly port?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#tags NotificationEmby#tags}
  */
  readonly tags?: number[];
  /**
  * Update library flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#update_library NotificationEmby#update_library}
  */
  readonly updateLibrary?: boolean | cdktf.IResolvable;
  /**
  * Use SSL flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#use_ssl NotificationEmby#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby radarr_notification_emby}
*/
export class NotificationEmby extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_notification_emby";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationEmby resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationEmby to import
  * @param importFromId The id of the existing NotificationEmby that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationEmby to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_notification_emby", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_emby radarr_notification_emby} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationEmbyConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationEmbyConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_notification_emby',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._host = config.host;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._name = config.name;
    this._notify = config.notify;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onDownload = config.onDownload;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._onMovieAdded = config.onMovieAdded;
    this._onMovieDelete = config.onMovieDelete;
    this._onMovieFileDelete = config.onMovieFileDelete;
    this._onMovieFileDeleteForUpgrade = config.onMovieFileDeleteForUpgrade;
    this._onRename = config.onRename;
    this._onUpgrade = config.onUpgrade;
    this._port = config.port;
    this._tags = config.tags;
    this._updateLibrary = config.updateLibrary;
    this._useSsl = config.useSsl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      host: cdktf.stringToTerraform(this._host),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      name: cdktf.stringToTerraform(this._name),
      notify: cdktf.booleanToTerraform(this._notify),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      on_movie_added: cdktf.booleanToTerraform(this._onMovieAdded),
      on_movie_delete: cdktf.booleanToTerraform(this._onMovieDelete),
      on_movie_file_delete: cdktf.booleanToTerraform(this._onMovieFileDelete),
      on_movie_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onMovieFileDeleteForUpgrade),
      on_rename: cdktf.booleanToTerraform(this._onRename),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      port: cdktf.numberToTerraform(this._port),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      update_library: cdktf.booleanToTerraform(this._updateLibrary),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      update_library: {
        value: cdktf.booleanToHclTerraform(this._updateLibrary),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
