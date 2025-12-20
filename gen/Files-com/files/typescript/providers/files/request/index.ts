// https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request#destination Request#destination}
  */
  readonly destination: string;
  /**
  * A list of group IDs to request the file from. If sent as a string, it should be comma-delimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request#group_ids Request#group_ids}
  */
  readonly groupIds?: string;
  /**
  * Folder path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request#path Request#path}
  */
  readonly path: string;
  /**
  * A list of user IDs to request the file from. If sent as a string, it should be comma-delimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request#user_ids Request#user_ids}
  */
  readonly userIds?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request files_request}
*/
export class Request extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Request resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Request to import
  * @param importFromId The id of the existing Request that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Request to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/request files_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestConfig
  */
  public constructor(scope: Construct, id: string, config: RequestConfig) {
    super(scope, id, {
      terraformResourceType: 'files_request',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.419',
        providerVersionConstraint: '0.1.419'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destination = config.destination;
    this._groupIds = config.groupIds;
    this._path = config.path;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_id - computed: true, optional: false, required: false
  public get automationId() {
    return this.getNumberAttribute('automation_id');
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string; 
  public get groupIds() {
    return this.getStringAttribute('group_ids');
  }
  public set groupIds(value: string) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // user_display_name - computed: true, optional: false, required: false
  public get userDisplayName() {
    return this.getStringAttribute('user_display_name');
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string; 
  public get userIds() {
    return this.getStringAttribute('user_ids');
  }
  public set userIds(value: string) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      group_ids: cdktf.stringToTerraform(this._groupIds),
      path: cdktf.stringToTerraform(this._path),
      user_ids: cdktf.stringToTerraform(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ids: {
        value: cdktf.stringToHclTerraform(this._groupIds),
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
      user_ids: {
        value: cdktf.stringToHclTerraform(this._userIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
