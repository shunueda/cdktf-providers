// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/all_projects_spike_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllProjectsSpikeProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/all_projects_spike_protection#enabled AllProjectsSpikeProtection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/all_projects_spike_protection#organization AllProjectsSpikeProtection#organization}
  */
  readonly organization: string;
  /**
  * The slugs of the projects to enable or disable spike protection for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/all_projects_spike_protection#projects AllProjectsSpikeProtection#projects}
  */
  readonly projects: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/all_projects_spike_protection sentry_all_projects_spike_protection}
*/
export class AllProjectsSpikeProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_all_projects_spike_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AllProjectsSpikeProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AllProjectsSpikeProtection to import
  * @param importFromId The id of the existing AllProjectsSpikeProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/all_projects_spike_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AllProjectsSpikeProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_all_projects_spike_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/all_projects_spike_protection sentry_all_projects_spike_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllProjectsSpikeProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: AllProjectsSpikeProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_all_projects_spike_protection',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._organization = config.organization;
    this._projects = config.projects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // projects - computed: false, optional: false, required: true
  private _projects?: string[]; 
  public get projects() {
    return cdktf.Fn.tolist(this.getListAttribute('projects'));
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      organization: cdktf.stringToTerraform(this._organization),
      projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projects),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
