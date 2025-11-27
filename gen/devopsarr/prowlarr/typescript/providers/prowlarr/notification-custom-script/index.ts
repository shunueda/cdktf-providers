// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationCustomScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#arguments NotificationCustomScript#arguments}
  */
  readonly arguments?: string;
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#include_health_warnings NotificationCustomScript#include_health_warnings}
  */
  readonly includeHealthWarnings: boolean | cdktf.IResolvable;
  /**
  * NotificationCustomScript name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#name NotificationCustomScript#name}
  */
  readonly name: string;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#on_application_update NotificationCustomScript#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#on_health_issue NotificationCustomScript#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#on_health_restored NotificationCustomScript#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#path NotificationCustomScript#path}
  */
  readonly path: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#tags NotificationCustomScript#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script prowlarr_notification_custom_script}
*/
export class NotificationCustomScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_notification_custom_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationCustomScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationCustomScript to import
  * @param importFromId The id of the existing NotificationCustomScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationCustomScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_notification_custom_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/notification_custom_script prowlarr_notification_custom_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationCustomScriptConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationCustomScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_notification_custom_script',
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
    this._arguments = config.arguments;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._name = config.name;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._path = config.path;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_health_warnings - computed: false, optional: false, required: true
  private _includeHealthWarnings?: boolean | cdktf.IResolvable; 
  public get includeHealthWarnings() {
    return this.getBooleanAttribute('include_health_warnings');
  }
  public set includeHealthWarnings(value: boolean | cdktf.IResolvable) {
    this._includeHealthWarnings = value;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
      arguments: cdktf.stringToTerraform(this._arguments),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      name: cdktf.stringToTerraform(this._name),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      path: cdktf.stringToTerraform(this._path),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arguments: {
        value: cdktf.stringToHclTerraform(this._arguments),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
