// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RetrospectiveStepConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#description RetrospectiveStep#description}
  */
  readonly description?: string;
  /**
  * Due date in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#due_after_days RetrospectiveStep#due_after_days}
  */
  readonly dueAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#id RetrospectiveStep#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Users assigned to the selected incident role will be the default owners for this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#incident_role_id RetrospectiveStep#incident_role_id}
  */
  readonly incidentRoleId?: string;
  /**
  * Position of the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#position RetrospectiveStep#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#retrospective_process_id RetrospectiveStep#retrospective_process_id}
  */
  readonly retrospectiveProcessId?: string;
  /**
  * Is the step skippable?. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#skippable RetrospectiveStep#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
  /**
  * The slug of the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#slug RetrospectiveStep#slug}
  */
  readonly slug?: string;
  /**
  * The name of the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#title RetrospectiveStep#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step rootly_retrospective_step}
*/
export class RetrospectiveStep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_retrospective_step";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RetrospectiveStep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RetrospectiveStep to import
  * @param importFromId The id of the existing RetrospectiveStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RetrospectiveStep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_retrospective_step", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/retrospective_step rootly_retrospective_step} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RetrospectiveStepConfig
  */
  public constructor(scope: Construct, id: string, config: RetrospectiveStepConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_retrospective_step',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
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
    this._dueAfterDays = config.dueAfterDays;
    this._id = config.id;
    this._incidentRoleId = config.incidentRoleId;
    this._position = config.position;
    this._retrospectiveProcessId = config.retrospectiveProcessId;
    this._skippable = config.skippable;
    this._slug = config.slug;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // due_after_days - computed: true, optional: true, required: false
  private _dueAfterDays?: number; 
  public get dueAfterDays() {
    return this.getNumberAttribute('due_after_days');
  }
  public set dueAfterDays(value: number) {
    this._dueAfterDays = value;
  }
  public resetDueAfterDays() {
    this._dueAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dueAfterDaysInput() {
    return this._dueAfterDays;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // incident_role_id - computed: true, optional: true, required: false
  private _incidentRoleId?: string; 
  public get incidentRoleId() {
    return this.getStringAttribute('incident_role_id');
  }
  public set incidentRoleId(value: string) {
    this._incidentRoleId = value;
  }
  public resetIncidentRoleId() {
    this._incidentRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentRoleIdInput() {
    return this._incidentRoleId;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // retrospective_process_id - computed: true, optional: true, required: false
  private _retrospectiveProcessId?: string; 
  public get retrospectiveProcessId() {
    return this.getStringAttribute('retrospective_process_id');
  }
  public set retrospectiveProcessId(value: string) {
    this._retrospectiveProcessId = value;
  }
  public resetRetrospectiveProcessId() {
    this._retrospectiveProcessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrospectiveProcessIdInput() {
    return this._retrospectiveProcessId;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      due_after_days: cdktf.numberToTerraform(this._dueAfterDays),
      id: cdktf.stringToTerraform(this._id),
      incident_role_id: cdktf.stringToTerraform(this._incidentRoleId),
      position: cdktf.numberToTerraform(this._position),
      retrospective_process_id: cdktf.stringToTerraform(this._retrospectiveProcessId),
      skippable: cdktf.booleanToTerraform(this._skippable),
      slug: cdktf.stringToTerraform(this._slug),
      title: cdktf.stringToTerraform(this._title),
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
      due_after_days: {
        value: cdktf.numberToHclTerraform(this._dueAfterDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_role_id: {
        value: cdktf.stringToHclTerraform(this._incidentRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrospective_process_id: {
        value: cdktf.stringToHclTerraform(this._retrospectiveProcessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skippable: {
        value: cdktf.booleanToHclTerraform(this._skippable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
