// https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LifecycleMilestoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#auto_assign_timestamp_on_create LifecycleMilestone#auto_assign_timestamp_on_create}
  */
  readonly autoAssignTimestampOnCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#description LifecycleMilestone#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#id LifecycleMilestone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#name LifecycleMilestone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#phase_id LifecycleMilestone#phase_id}
  */
  readonly phaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#position LifecycleMilestone#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#slug LifecycleMilestone#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone firehydrant_lifecycle_milestone}
*/
export class LifecycleMilestone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_lifecycle_milestone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LifecycleMilestone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LifecycleMilestone to import
  * @param importFromId The id of the existing LifecycleMilestone that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LifecycleMilestone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_lifecycle_milestone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/lifecycle_milestone firehydrant_lifecycle_milestone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LifecycleMilestoneConfig
  */
  public constructor(scope: Construct, id: string, config: LifecycleMilestoneConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_lifecycle_milestone',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAssignTimestampOnCreate = config.autoAssignTimestampOnCreate;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._phaseId = config.phaseId;
    this._position = config.position;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_assign_timestamp_on_create - computed: false, optional: true, required: false
  private _autoAssignTimestampOnCreate?: string; 
  public get autoAssignTimestampOnCreate() {
    return this.getStringAttribute('auto_assign_timestamp_on_create');
  }
  public set autoAssignTimestampOnCreate(value: string) {
    this._autoAssignTimestampOnCreate = value;
  }
  public resetAutoAssignTimestampOnCreate() {
    this._autoAssignTimestampOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignTimestampOnCreateInput() {
    return this._autoAssignTimestampOnCreate;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // phase_id - computed: false, optional: false, required: true
  private _phaseId?: string; 
  public get phaseId() {
    return this.getStringAttribute('phase_id');
  }
  public set phaseId(value: string) {
    this._phaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseIdInput() {
    return this._phaseId;
  }

  // position - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_assign_timestamp_on_create: cdktf.stringToTerraform(this._autoAssignTimestampOnCreate),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      phase_id: cdktf.stringToTerraform(this._phaseId),
      position: cdktf.numberToTerraform(this._position),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_assign_timestamp_on_create: {
        value: cdktf.stringToHclTerraform(this._autoAssignTimestampOnCreate),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase_id: {
        value: cdktf.stringToHclTerraform(this._phaseId),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
