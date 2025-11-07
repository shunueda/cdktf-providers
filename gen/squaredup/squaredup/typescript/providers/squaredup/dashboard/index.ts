// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dashboard template to use for the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#dashboard_template Dashboard#dashboard_template}
  */
  readonly dashboardTemplate: string;
  /**
  * ID of the dashboard variable to use for this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#dashboard_variable_id Dashboard#dashboard_variable_id}
  */
  readonly dashboardVariableId?: string;
  /**
  * The display name of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#display_name Dashboard#display_name}
  */
  readonly displayName: string;
  /**
  * The schema version of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#schema_version Dashboard#schema_version}
  */
  readonly schemaVersion?: string;
  /**
  * Template Bindings used for replacing mustache template in the dashboard template. Needs to be a JSON encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#template_bindings Dashboard#template_bindings}
  */
  readonly templateBindings?: string;
  /**
  * The timeframe of the dashboard. It should be one of the following: last1hour, last12hours, last24hours, last7days, last30days, thisMonth, thisQuarter, thisYear, lastMonth, lastQuarter, lastYear
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * The ID of the workspace where the dashboard is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#workspace_id Dashboard#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard squaredup_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard squaredup_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_dashboard',
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
    this._dashboardTemplate = config.dashboardTemplate;
    this._dashboardVariableId = config.dashboardVariableId;
    this._displayName = config.displayName;
    this._schemaVersion = config.schemaVersion;
    this._templateBindings = config.templateBindings;
    this._timeframe = config.timeframe;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_content - computed: true, optional: false, required: false
  public get dashboardContent() {
    return this.getStringAttribute('dashboard_content');
  }

  // dashboard_template - computed: false, optional: false, required: true
  private _dashboardTemplate?: string; 
  public get dashboardTemplate() {
    return this.getStringAttribute('dashboard_template');
  }
  public set dashboardTemplate(value: string) {
    this._dashboardTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTemplateInput() {
    return this._dashboardTemplate;
  }

  // dashboard_variable_id - computed: true, optional: true, required: false
  private _dashboardVariableId?: string; 
  public get dashboardVariableId() {
    return this.getStringAttribute('dashboard_variable_id');
  }
  public set dashboardVariableId(value: string) {
    this._dashboardVariableId = value;
  }
  public resetDashboardVariableId() {
    this._dashboardVariableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardVariableIdInput() {
    return this._dashboardVariableId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // schema_version - computed: true, optional: true, required: false
  private _schemaVersion?: string; 
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }
  public set schemaVersion(value: string) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // template_bindings - computed: true, optional: true, required: false
  private _templateBindings?: string; 
  public get templateBindings() {
    return this.getStringAttribute('template_bindings');
  }
  public set templateBindings(value: string) {
    this._templateBindings = value;
  }
  public resetTemplateBindings() {
    this._templateBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBindingsInput() {
    return this._templateBindings;
  }

  // timeframe - computed: true, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
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
      dashboard_template: cdktf.stringToTerraform(this._dashboardTemplate),
      dashboard_variable_id: cdktf.stringToTerraform(this._dashboardVariableId),
      display_name: cdktf.stringToTerraform(this._displayName),
      schema_version: cdktf.stringToTerraform(this._schemaVersion),
      template_bindings: cdktf.stringToTerraform(this._templateBindings),
      timeframe: cdktf.stringToTerraform(this._timeframe),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_template: {
        value: cdktf.stringToHclTerraform(this._dashboardTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_variable_id: {
        value: cdktf.stringToHclTerraform(this._dashboardVariableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_version: {
        value: cdktf.stringToHclTerraform(this._schemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_bindings: {
        value: cdktf.stringToHclTerraform(this._templateBindings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeframe: {
        value: cdktf.stringToHclTerraform(this._timeframe),
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
