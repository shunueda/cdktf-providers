// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the dashboard which contains the tile where the image will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image#dashboard_id DashboardImage#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * The base64 data URI of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image#image_base64_data_uri DashboardImage#image_base64_data_uri}
  */
  readonly imageBase64DataUri: string;
  /**
  * The file name of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image#image_file_name DashboardImage#image_file_name}
  */
  readonly imageFileName: string;
  /**
  * The ID of the tile where the image will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image#tile_id DashboardImage#tile_id}
  */
  readonly tileId: string;
  /**
  * The ID of the workspace which contains the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image#workspace_id DashboardImage#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image squaredup_dashboard_image}
*/
export class DashboardImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_dashboard_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardImage to import
  * @param importFromId The id of the existing DashboardImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_dashboard_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_image squaredup_dashboard_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardImageConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardImageConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_dashboard_image',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
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
    this._dashboardId = config.dashboardId;
    this._imageBase64DataUri = config.imageBase64DataUri;
    this._imageFileName = config.imageFileName;
    this._tileId = config.tileId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_base64_data_uri - computed: false, optional: false, required: true
  private _imageBase64DataUri?: string; 
  public get imageBase64DataUri() {
    return this.getStringAttribute('image_base64_data_uri');
  }
  public set imageBase64DataUri(value: string) {
    this._imageBase64DataUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBase64DataUriInput() {
    return this._imageBase64DataUri;
  }

  // image_file_name - computed: false, optional: false, required: true
  private _imageFileName?: string; 
  public get imageFileName() {
    return this.getStringAttribute('image_file_name');
  }
  public set imageFileName(value: string) {
    this._imageFileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFileNameInput() {
    return this._imageFileName;
  }

  // tile_id - computed: false, optional: false, required: true
  private _tileId?: string; 
  public get tileId() {
    return this.getStringAttribute('tile_id');
  }
  public set tileId(value: string) {
    this._tileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tileIdInput() {
    return this._tileId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      image_base64_data_uri: cdktf.stringToTerraform(this._imageBase64DataUri),
      image_file_name: cdktf.stringToTerraform(this._imageFileName),
      tile_id: cdktf.stringToTerraform(this._tileId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_base64_data_uri: {
        value: cdktf.stringToHclTerraform(this._imageBase64DataUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_file_name: {
        value: cdktf.stringToHclTerraform(this._imageFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tile_id: {
        value: cdktf.stringToHclTerraform(this._tileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
