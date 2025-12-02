// https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConstraintConfig extends cdktf.TerraformMetaArguments {
  /**
  * The constraint type for a given profile permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#constraint_type Constraint#constraint_type}
  */
  readonly constraintType: string;
  /**
  * Description of the condition constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#description Constraint#description}
  */
  readonly description?: string;
  /**
  * Expression of the condition constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#expression Constraint#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#id Constraint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#name Constraint#name}
  */
  readonly name?: string;
  /**
  * Name of the permission associated with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#permission_name Constraint#permission_name}
  */
  readonly permissionName: string;
  /**
  * The type of permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#permission_type Constraint#permission_type}
  */
  readonly permissionType?: string;
  /**
  * The identifier of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#profile_id Constraint#profile_id}
  */
  readonly profileId: string;
  /**
  * Title of the condition constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#title Constraint#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint britive_constraint}
*/
export class Constraint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_constraint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Constraint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Constraint to import
  * @param importFromId The id of the existing Constraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Constraint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_constraint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/constraint britive_constraint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConstraintConfig
  */
  public constructor(scope: Construct, id: string, config: ConstraintConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_constraint',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._constraintType = config.constraintType;
    this._description = config.description;
    this._expression = config.expression;
    this._id = config.id;
    this._name = config.name;
    this._permissionName = config.permissionName;
    this._permissionType = config.permissionType;
    this._profileId = config.profileId;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraint_type - computed: false, optional: false, required: true
  private _constraintType?: string; 
  public get constraintType() {
    return this.getStringAttribute('constraint_type');
  }
  public set constraintType(value: string) {
    this._constraintType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintTypeInput() {
    return this._constraintType;
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // permission_name - computed: false, optional: false, required: true
  private _permissionName?: string; 
  public get permissionName() {
    return this.getStringAttribute('permission_name');
  }
  public set permissionName(value: string) {
    this._permissionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionNameInput() {
    return this._permissionName;
  }

  // permission_type - computed: false, optional: true, required: false
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  public resetPermissionType() {
    this._permissionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint_type: cdktf.stringToTerraform(this._constraintType),
      description: cdktf.stringToTerraform(this._description),
      expression: cdktf.stringToTerraform(this._expression),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permission_name: cdktf.stringToTerraform(this._permissionName),
      permission_type: cdktf.stringToTerraform(this._permissionType),
      profile_id: cdktf.stringToTerraform(this._profileId),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      constraint_type: {
        value: cdktf.stringToHclTerraform(this._constraintType),
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
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
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
      permission_name: {
        value: cdktf.stringToHclTerraform(this._permissionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_type: {
        value: cdktf.stringToHclTerraform(this._permissionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
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
