// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#description Control#description}
  */
  readonly description?: string;
  /**
  * Whether to enable the Control. This has a known defect where if set to false, it will be created as true because the API to create Controls does not accept this parameter.
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#enabled Control#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the Control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#name Control#name}
  */
  readonly name: string;
  /**
  * Project scope of the control. Use '*' for all projects.
  *     - Defaults to `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#project_id Control#project_id}
  */
  readonly projectId?: string;
  /**
  * The query that the control runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#query Control#query}
  */
  readonly query: string;
  /**
  * Guidance on how the user should address an issue that was created by this control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#resolution_recommendation Control#resolution_recommendation}
  */
  readonly resolutionRecommendation?: string;
  /**
  * The query that represents the control's scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#scope_query Control#scope_query}
  */
  readonly scopeQuery: string;
  /**
  * Severity that will be set for this control.
  *     - Allowed values: 
  *         - INFORMATIONAL
  *         - LOW
  *         - MEDIUM
  *         - HIGH
  *         - CRITICAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#severity Control#severity}
  */
  readonly severity: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control wiz_control}
*/
export class Control extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Control resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Control to import
  * @param importFromId The id of the existing Control that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Control to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control wiz_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControlConfig
  */
  public constructor(scope: Construct, id: string, config: ControlConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_control',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._projectId = config.projectId;
    this._query = config.query;
    this._resolutionRecommendation = config.resolutionRecommendation;
    this._scopeQuery = config.scopeQuery;
    this._severity = config.severity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // resolution_recommendation - computed: false, optional: true, required: false
  private _resolutionRecommendation?: string; 
  public get resolutionRecommendation() {
    return this.getStringAttribute('resolution_recommendation');
  }
  public set resolutionRecommendation(value: string) {
    this._resolutionRecommendation = value;
  }
  public resetResolutionRecommendation() {
    this._resolutionRecommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionRecommendationInput() {
    return this._resolutionRecommendation;
  }

  // scope_query - computed: false, optional: false, required: true
  private _scopeQuery?: string; 
  public get scopeQuery() {
    return this.getStringAttribute('scope_query');
  }
  public set scopeQuery(value: string) {
    this._scopeQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeQueryInput() {
    return this._scopeQuery;
  }

  // security_sub_categories - computed: true, optional: false, required: false
  public get securitySubCategories() {
    return this.getListAttribute('security_sub_categories');
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      query: cdktf.stringToTerraform(this._query),
      resolution_recommendation: cdktf.stringToTerraform(this._resolutionRecommendation),
      scope_query: cdktf.stringToTerraform(this._scopeQuery),
      severity: cdktf.stringToTerraform(this._severity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution_recommendation: {
        value: cdktf.stringToHclTerraform(this._resolutionRecommendation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_query: {
        value: cdktf.stringToHclTerraform(this._scopeQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
