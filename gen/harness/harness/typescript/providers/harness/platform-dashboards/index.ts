// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformDashboardsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Created at timestamp of the Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#created_at PlatformDashboards#created_at}
  */
  readonly createdAt?: string;
  /**
  * Unique identifier of the Template Dashboard to create from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#dashboard_id PlatformDashboards#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Data Sources within the Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#data_source PlatformDashboards#data_source}
  */
  readonly dataSource?: string[];
  /**
  * Description of the Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#description PlatformDashboards#description}
  */
  readonly description?: string;
  /**
  * The Folder ID that the Dashboard belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#folder_id PlatformDashboards#folder_id}
  */
  readonly folderId?: string;
  /**
  * Data Models within the Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#models PlatformDashboards#models}
  */
  readonly models?: string[];
  /**
  * Name of the Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#name PlatformDashboards#name}
  */
  readonly name?: string;
  /**
  * The Folder ID that the Dashboard belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#resource_identifier PlatformDashboards#resource_identifier}
  */
  readonly resourceIdentifier: string;
  /**
  * Title of the Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#title PlatformDashboards#title}
  */
  readonly title?: string;
  /**
  * Type of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#type PlatformDashboards#type}
  */
  readonly type?: string;
  /**
  * View count of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#view_count PlatformDashboards#view_count}
  */
  readonly viewCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards harness_platform_dashboards}
*/
export class PlatformDashboards extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_dashboards";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformDashboards resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformDashboards to import
  * @param importFromId The id of the existing PlatformDashboards that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformDashboards to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_dashboards", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_dashboards harness_platform_dashboards} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformDashboardsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformDashboardsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_dashboards',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._dashboardId = config.dashboardId;
    this._dataSource = config.dataSource;
    this._description = config.description;
    this._folderId = config.folderId;
    this._models = config.models;
    this._name = config.name;
    this._resourceIdentifier = config.resourceIdentifier;
    this._title = config.title;
    this._type = config.type;
    this._viewCount = config.viewCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

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

  // data_source - computed: true, optional: true, required: false
  private _dataSource?: string[]; 
  public get dataSource() {
    return this.getListAttribute('data_source');
  }
  public set dataSource(value: string[]) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // favorite_count - computed: true, optional: false, required: false
  public get favoriteCount() {
    return this.getNumberAttribute('favorite_count');
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_accessed_at - computed: true, optional: false, required: false
  public get lastAccessedAt() {
    return this.getStringAttribute('last_accessed_at');
  }

  // models - computed: true, optional: true, required: false
  private _models?: string[]; 
  public get models() {
    return this.getListAttribute('models');
  }
  public set models(value: string[]) {
    this._models = value;
  }
  public resetModels() {
    this._models = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelsInput() {
    return this._models;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_identifier - computed: false, optional: false, required: true
  private _resourceIdentifier?: string; 
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // view_count - computed: true, optional: true, required: false
  private _viewCount?: number; 
  public get viewCount() {
    return this.getNumberAttribute('view_count');
  }
  public set viewCount(value: number) {
    this._viewCount = value;
  }
  public resetViewCount() {
    this._viewCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewCountInput() {
    return this._viewCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      data_source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataSource),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      models: cdktf.listMapper(cdktf.stringToTerraform, false)(this._models),
      name: cdktf.stringToTerraform(this._name),
      resource_identifier: cdktf.stringToTerraform(this._resourceIdentifier),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      view_count: cdktf.numberToTerraform(this._viewCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataSource),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      models: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._models),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_identifier: {
        value: cdktf.stringToHclTerraform(this._resourceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_count: {
        value: cdktf.numberToHclTerraform(this._viewCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
