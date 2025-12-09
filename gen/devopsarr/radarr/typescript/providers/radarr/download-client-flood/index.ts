// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadClientFloodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add paused flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#add_paused DownloadClientFlood#add_paused}
  */
  readonly addPaused?: boolean | cdktf.IResolvable;
  /**
  * Additional tags, `0` TitleSlug, `1` Quality, `2` Language, `3` ReleaseGroup, `4` Year, `5` Indexer, `6` Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#additional_tags DownloadClientFlood#additional_tags}
  */
  readonly additionalTags?: number[];
  /**
  * Destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#destination DownloadClientFlood#destination}
  */
  readonly destination?: string;
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#enable DownloadClientFlood#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Field tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#field_tags DownloadClientFlood#field_tags}
  */
  readonly fieldTags?: string[];
  /**
  * host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#host DownloadClientFlood#host}
  */
  readonly host?: string;
  /**
  * Download Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#name DownloadClientFlood#name}
  */
  readonly name: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#password DownloadClientFlood#password}
  */
  readonly password?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#port DownloadClientFlood#port}
  */
  readonly port?: number;
  /**
  * Post import tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#post_import_tags DownloadClientFlood#post_import_tags}
  */
  readonly postImportTags?: string[];
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#priority DownloadClientFlood#priority}
  */
  readonly priority?: number;
  /**
  * Remove completed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#remove_completed_downloads DownloadClientFlood#remove_completed_downloads}
  */
  readonly removeCompletedDownloads?: boolean | cdktf.IResolvable;
  /**
  * Remove failed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#remove_failed_downloads DownloadClientFlood#remove_failed_downloads}
  */
  readonly removeFailedDownloads?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#tags DownloadClientFlood#tags}
  */
  readonly tags?: number[];
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#url_base DownloadClientFlood#url_base}
  */
  readonly urlBase?: string;
  /**
  * Use SSL flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#use_ssl DownloadClientFlood#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#username DownloadClientFlood#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood radarr_download_client_flood}
*/
export class DownloadClientFlood extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_download_client_flood";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadClientFlood resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadClientFlood to import
  * @param importFromId The id of the existing DownloadClientFlood that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadClientFlood to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_download_client_flood", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/download_client_flood radarr_download_client_flood} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadClientFloodConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadClientFloodConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_download_client_flood',
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
    this._addPaused = config.addPaused;
    this._additionalTags = config.additionalTags;
    this._destination = config.destination;
    this._enable = config.enable;
    this._fieldTags = config.fieldTags;
    this._host = config.host;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._postImportTags = config.postImportTags;
    this._priority = config.priority;
    this._removeCompletedDownloads = config.removeCompletedDownloads;
    this._removeFailedDownloads = config.removeFailedDownloads;
    this._tags = config.tags;
    this._urlBase = config.urlBase;
    this._useSsl = config.useSsl;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_paused - computed: true, optional: true, required: false
  private _addPaused?: boolean | cdktf.IResolvable; 
  public get addPaused() {
    return this.getBooleanAttribute('add_paused');
  }
  public set addPaused(value: boolean | cdktf.IResolvable) {
    this._addPaused = value;
  }
  public resetAddPaused() {
    this._addPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPausedInput() {
    return this._addPaused;
  }

  // additional_tags - computed: true, optional: true, required: false
  private _additionalTags?: number[]; 
  public get additionalTags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('additional_tags')));
  }
  public set additionalTags(value: number[]) {
    this._additionalTags = value;
  }
  public resetAdditionalTags() {
    this._additionalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTagsInput() {
    return this._additionalTags;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // post_import_tags - computed: true, optional: true, required: false
  private _postImportTags?: string[]; 
  public get postImportTags() {
    return cdktf.Fn.tolist(this.getListAttribute('post_import_tags'));
  }
  public set postImportTags(value: string[]) {
    this._postImportTags = value;
  }
  public resetPostImportTags() {
    this._postImportTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postImportTagsInput() {
    return this._postImportTags;
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

  // remove_completed_downloads - computed: true, optional: true, required: false
  private _removeCompletedDownloads?: boolean | cdktf.IResolvable; 
  public get removeCompletedDownloads() {
    return this.getBooleanAttribute('remove_completed_downloads');
  }
  public set removeCompletedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeCompletedDownloads = value;
  }
  public resetRemoveCompletedDownloads() {
    this._removeCompletedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCompletedDownloadsInput() {
    return this._removeCompletedDownloads;
  }

  // remove_failed_downloads - computed: true, optional: true, required: false
  private _removeFailedDownloads?: boolean | cdktf.IResolvable; 
  public get removeFailedDownloads() {
    return this.getBooleanAttribute('remove_failed_downloads');
  }
  public set removeFailedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeFailedDownloads = value;
  }
  public resetRemoveFailedDownloads() {
    this._removeFailedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFailedDownloadsInput() {
    return this._removeFailedDownloads;
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

  // url_base - computed: true, optional: true, required: false
  private _urlBase?: string; 
  public get urlBase() {
    return this.getStringAttribute('url_base');
  }
  public set urlBase(value: string) {
    this._urlBase = value;
  }
  public resetUrlBase() {
    this._urlBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBaseInput() {
    return this._urlBase;
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
      add_paused: cdktf.booleanToTerraform(this._addPaused),
      additional_tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._additionalTags),
      destination: cdktf.stringToTerraform(this._destination),
      enable: cdktf.booleanToTerraform(this._enable),
      field_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldTags),
      host: cdktf.stringToTerraform(this._host),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      post_import_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postImportTags),
      priority: cdktf.numberToTerraform(this._priority),
      remove_completed_downloads: cdktf.booleanToTerraform(this._removeCompletedDownloads),
      remove_failed_downloads: cdktf.booleanToTerraform(this._removeFailedDownloads),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      url_base: cdktf.stringToTerraform(this._urlBase),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_paused: {
        value: cdktf.booleanToHclTerraform(this._addPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._additionalTags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      field_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      post_import_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postImportTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_completed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeCompletedDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_failed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeFailedDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      url_base: {
        value: cdktf.stringToHclTerraform(this._urlBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
