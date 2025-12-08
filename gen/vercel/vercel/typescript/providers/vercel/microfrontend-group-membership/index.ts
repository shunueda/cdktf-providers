// https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MicrofrontendGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default route for the project. Used for the screenshot of deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership#default_route MicrofrontendGroupMembership#default_route}
  */
  readonly defaultRoute?: string;
  /**
  * The ID of the microfrontend group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership#microfrontend_group_id MicrofrontendGroupMembership#microfrontend_group_id}
  */
  readonly microfrontendGroupId: string;
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership#project_id MicrofrontendGroupMembership#project_id}
  */
  readonly projectId: string;
  /**
  * Whether the project is route observability for this project. If dalse, the project will be route observability for all projects to the default project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership#route_observability_to_this_project MicrofrontendGroupMembership#route_observability_to_this_project}
  */
  readonly routeObservabilityToThisProject?: boolean | cdktf.IResolvable;
  /**
  * The team ID to add the microfrontend group to. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership#team_id MicrofrontendGroupMembership#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership vercel_microfrontend_group_membership}
*/
export class MicrofrontendGroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_microfrontend_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MicrofrontendGroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MicrofrontendGroupMembership to import
  * @param importFromId The id of the existing MicrofrontendGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MicrofrontendGroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_microfrontend_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/microfrontend_group_membership vercel_microfrontend_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MicrofrontendGroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: MicrofrontendGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_microfrontend_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.2',
        providerVersionConstraint: '4.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRoute = config.defaultRoute;
    this._microfrontendGroupId = config.microfrontendGroupId;
    this._projectId = config.projectId;
    this._routeObservabilityToThisProject = config.routeObservabilityToThisProject;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute?: string; 
  public get defaultRoute() {
    return this.getStringAttribute('default_route');
  }
  public set defaultRoute(value: string) {
    this._defaultRoute = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute;
  }

  // microfrontend_group_id - computed: false, optional: false, required: true
  private _microfrontendGroupId?: string; 
  public get microfrontendGroupId() {
    return this.getStringAttribute('microfrontend_group_id');
  }
  public set microfrontendGroupId(value: string) {
    this._microfrontendGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microfrontendGroupIdInput() {
    return this._microfrontendGroupId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // route_observability_to_this_project - computed: true, optional: true, required: false
  private _routeObservabilityToThisProject?: boolean | cdktf.IResolvable; 
  public get routeObservabilityToThisProject() {
    return this.getBooleanAttribute('route_observability_to_this_project');
  }
  public set routeObservabilityToThisProject(value: boolean | cdktf.IResolvable) {
    this._routeObservabilityToThisProject = value;
  }
  public resetRouteObservabilityToThisProject() {
    this._routeObservabilityToThisProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeObservabilityToThisProjectInput() {
    return this._routeObservabilityToThisProject;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_route: cdktf.stringToTerraform(this._defaultRoute),
      microfrontend_group_id: cdktf.stringToTerraform(this._microfrontendGroupId),
      project_id: cdktf.stringToTerraform(this._projectId),
      route_observability_to_this_project: cdktf.booleanToTerraform(this._routeObservabilityToThisProject),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_route: {
        value: cdktf.stringToHclTerraform(this._defaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microfrontend_group_id: {
        value: cdktf.stringToHclTerraform(this._microfrontendGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_observability_to_this_project: {
        value: cdktf.booleanToHclTerraform(this._routeObservabilityToThisProject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
