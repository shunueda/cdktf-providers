// https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBritiveSupportedConstraintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of constraints supported for the given profile permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints#constraint_types DataBritiveSupportedConstraints#constraint_types}
  */
  readonly constraintTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints#id DataBritiveSupportedConstraints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the permission associated with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints#permission_name DataBritiveSupportedConstraints#permission_name}
  */
  readonly permissionName: string;
  /**
  * The type of permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints#permission_type DataBritiveSupportedConstraints#permission_type}
  */
  readonly permissionType?: string;
  /**
  * The identifier of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints#profile_id DataBritiveSupportedConstraints#profile_id}
  */
  readonly profileId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints britive_supported_constraints}
*/
export class DataBritiveSupportedConstraints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_supported_constraints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBritiveSupportedConstraints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBritiveSupportedConstraints to import
  * @param importFromId The id of the existing DataBritiveSupportedConstraints that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBritiveSupportedConstraints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_supported_constraints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/supported_constraints britive_supported_constraints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBritiveSupportedConstraintsConfig
  */
  public constructor(scope: Construct, id: string, config: DataBritiveSupportedConstraintsConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_supported_constraints',
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
    this._constraintTypes = config.constraintTypes;
    this._id = config.id;
    this._permissionName = config.permissionName;
    this._permissionType = config.permissionType;
    this._profileId = config.profileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraint_types - computed: true, optional: true, required: false
  private _constraintTypes?: string[]; 
  public get constraintTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('constraint_types'));
  }
  public set constraintTypes(value: string[]) {
    this._constraintTypes = value;
  }
  public resetConstraintTypes() {
    this._constraintTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintTypesInput() {
    return this._constraintTypes;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._constraintTypes),
      id: cdktf.stringToTerraform(this._id),
      permission_name: cdktf.stringToTerraform(this._permissionName),
      permission_type: cdktf.stringToTerraform(this._permissionType),
      profile_id: cdktf.stringToTerraform(this._profileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      constraint_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._constraintTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
