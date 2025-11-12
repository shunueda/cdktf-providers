// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MicrofrontendGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default app for the project. Used as the entry point for the microfrontend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group#default_app MicrofrontendGroup#default_app}
  */
  readonly defaultApp: MicrofrontendGroupDefaultApp;
  /**
  * A human readable name for the microfrontends group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group#name MicrofrontendGroup#name}
  */
  readonly name: string;
  /**
  * The team ID to add the microfrontend group to. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group#team_id MicrofrontendGroup#team_id}
  */
  readonly teamId?: string;
}
export interface MicrofrontendGroupDefaultApp {
  /**
  * The default route for the project. Used for the screenshot of deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group#default_route MicrofrontendGroup#default_route}
  */
  readonly defaultRoute?: string;
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group#project_id MicrofrontendGroup#project_id}
  */
  readonly projectId: string;
}

export function microfrontendGroupDefaultAppToTerraform(struct?: MicrofrontendGroupDefaultApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_route: cdktf.stringToTerraform(struct!.defaultRoute),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function microfrontendGroupDefaultAppToHclTerraform(struct?: MicrofrontendGroupDefaultApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_route: {
      value: cdktf.stringToHclTerraform(struct!.defaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MicrofrontendGroupDefaultAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MicrofrontendGroupDefaultApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MicrofrontendGroupDefaultApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRoute = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRoute = value.defaultRoute;
      this._projectId = value.projectId;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group vercel_microfrontend_group}
*/
export class MicrofrontendGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_microfrontend_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MicrofrontendGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MicrofrontendGroup to import
  * @param importFromId The id of the existing MicrofrontendGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MicrofrontendGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_microfrontend_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/microfrontend_group vercel_microfrontend_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MicrofrontendGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MicrofrontendGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_microfrontend_group',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.0',
        providerVersionConstraint: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultApp.internalValue = config.defaultApp;
    this._name = config.name;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_app - computed: false, optional: false, required: true
  private _defaultApp = new MicrofrontendGroupDefaultAppOutputReference(this, "default_app");
  public get defaultApp() {
    return this._defaultApp;
  }
  public putDefaultApp(value: MicrofrontendGroupDefaultApp) {
    this._defaultApp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppInput() {
    return this._defaultApp.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
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
      default_app: microfrontendGroupDefaultAppToTerraform(this._defaultApp.internalValue),
      name: cdktf.stringToTerraform(this._name),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_app: {
        value: microfrontendGroupDefaultAppToHclTerraform(this._defaultApp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MicrofrontendGroupDefaultApp",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
