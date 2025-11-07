// generated from terraform resource schema

import { DashboardAnnotations, 
dashboardAnnotationsToTerraform, 
dashboardAnnotationsToHclTerraform, 
DashboardAnnotationsList, 
DashboardAutoRefresh, 
dashboardAutoRefreshToTerraform, 
dashboardAutoRefreshToHclTerraform, 
DashboardAutoRefreshOutputReference, 
DashboardFilters, 
dashboardFiltersToTerraform, 
dashboardFiltersToHclTerraform, 
DashboardFiltersList, 
DashboardFolder, 
dashboardFolderToTerraform, 
dashboardFolderToHclTerraform, 
DashboardFolderOutputReference, 
DashboardLayout, 
dashboardLayoutToTerraform, 
dashboardLayoutToHclTerraform, 
DashboardLayoutOutputReference, 
DashboardTimeFrame, 
dashboardTimeFrameToTerraform, 
dashboardTimeFrameToHclTerraform, 
DashboardTimeFrameOutputReference, 
DashboardVariables, 
dashboardVariablesToTerraform, 
dashboardVariablesToHclTerraform, 
DashboardVariablesList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#annotations Dashboard#annotations}
  */
  readonly annotations?: DashboardAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#auto_refresh Dashboard#auto_refresh}
  */
  readonly autoRefresh?: DashboardAutoRefresh;
  /**
  * an option to set the dashboard content from a json file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#content_json Dashboard#content_json}
  */
  readonly contentJson?: string;
  /**
  * Brief description or summary of the dashboard's purpose or content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * List of filters that can be applied to the dashboard's data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#filters Dashboard#filters}
  */
  readonly filters?: DashboardFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#folder Dashboard#folder}
  */
  readonly folder?: DashboardFolder;
  /**
  * Layout configuration for the dashboard's visual elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#layout Dashboard#layout}
  */
  readonly layout?: DashboardLayout;
  /**
  * Display name of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * Specifies the time frame. Can be either absolute or relative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#time_frame Dashboard#time_frame}
  */
  readonly timeFrame?: DashboardTimeFrame;
  /**
  * List of variables that can be used within the dashboard for dynamic content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#variables Dashboard#variables}
  */
  readonly variables?: DashboardVariables[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard coralogix_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/dashboard coralogix_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations.internalValue = config.annotations;
    this._autoRefresh.internalValue = config.autoRefresh;
    this._contentJson = config.contentJson;
    this._description = config.description;
    this._filters.internalValue = config.filters;
    this._folder.internalValue = config.folder;
    this._layout.internalValue = config.layout;
    this._name = config.name;
    this._timeFrame.internalValue = config.timeFrame;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations = new DashboardAnnotationsList(this, "annotations", false);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: DashboardAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // auto_refresh - computed: true, optional: true, required: false
  private _autoRefresh = new DashboardAutoRefreshOutputReference(this, "auto_refresh");
  public get autoRefresh() {
    return this._autoRefresh;
  }
  public putAutoRefresh(value: DashboardAutoRefresh) {
    this._autoRefresh.internalValue = value;
  }
  public resetAutoRefresh() {
    this._autoRefresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshInput() {
    return this._autoRefresh.internalValue;
  }

  // content_json - computed: false, optional: true, required: false
  private _contentJson?: string; 
  public get contentJson() {
    return this.getStringAttribute('content_json');
  }
  public set contentJson(value: string) {
    this._contentJson = value;
  }
  public resetContentJson() {
    this._contentJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentJsonInput() {
    return this._contentJson;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DashboardFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder = new DashboardFolderOutputReference(this, "folder");
  public get folder() {
    return this._folder;
  }
  public putFolder(value: DashboardFolder) {
    this._folder.internalValue = value;
  }
  public resetFolder() {
    this._folder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new DashboardLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: DashboardLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
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

  // time_frame - computed: false, optional: true, required: false
  private _timeFrame = new DashboardTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: DashboardTimeFrame) {
    this._timeFrame.internalValue = value;
  }
  public resetTimeFrame() {
    this._timeFrame.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DashboardVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DashboardVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.listMapper(dashboardAnnotationsToTerraform, false)(this._annotations.internalValue),
      auto_refresh: dashboardAutoRefreshToTerraform(this._autoRefresh.internalValue),
      content_json: cdktf.stringToTerraform(this._contentJson),
      description: cdktf.stringToTerraform(this._description),
      filters: cdktf.listMapper(dashboardFiltersToTerraform, false)(this._filters.internalValue),
      folder: dashboardFolderToTerraform(this._folder.internalValue),
      layout: dashboardLayoutToTerraform(this._layout.internalValue),
      name: cdktf.stringToTerraform(this._name),
      time_frame: dashboardTimeFrameToTerraform(this._timeFrame.internalValue),
      variables: cdktf.listMapper(dashboardVariablesToTerraform, false)(this._variables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.listMapperHcl(dashboardAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardAnnotationsList",
      },
      auto_refresh: {
        value: dashboardAutoRefreshToHclTerraform(this._autoRefresh.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardAutoRefresh",
      },
      content_json: {
        value: cdktf.stringToHclTerraform(this._contentJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dashboardFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardFiltersList",
      },
      folder: {
        value: dashboardFolderToHclTerraform(this._folder.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardFolder",
      },
      layout: {
        value: dashboardLayoutToHclTerraform(this._layout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardLayout",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_frame: {
        value: dashboardTimeFrameToHclTerraform(this._timeFrame.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardTimeFrame",
      },
      variables: {
        value: cdktf.listMapperHcl(dashboardVariablesToHclTerraform, false)(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
