// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the dashboard to share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share#dashboard_id DashboardShare#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * If false, sharing of the dashboard is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share#enabled DashboardShare#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If false, the dashboard will be accessible to anyone with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share#require_authentication DashboardShare#require_authentication}
  */
  readonly requireAuthentication: boolean | cdktf.IResolvable;
  /**
  * The ID of the workspace where the dashboard is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share#workspace_id DashboardShare#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share squaredup_dashboard_share}
*/
export class DashboardShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_dashboard_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardShare to import
  * @param importFromId The id of the existing DashboardShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_dashboard_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_share squaredup_dashboard_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardShareConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardShareConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_dashboard_share',
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
    this._enabled = config.enabled;
    this._requireAuthentication = config.requireAuthentication;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // require_authentication - computed: false, optional: false, required: true
  private _requireAuthentication?: boolean | cdktf.IResolvable; 
  public get requireAuthentication() {
    return this.getBooleanAttribute('require_authentication');
  }
  public set requireAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAuthenticationInput() {
    return this._requireAuthentication;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      require_authentication: cdktf.booleanToTerraform(this._requireAuthentication),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_authentication: {
        value: cdktf.booleanToHclTerraform(this._requireAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
