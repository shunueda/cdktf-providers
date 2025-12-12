// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#can_be_deleted UserRole#can_be_deleted}
  */
  readonly canBeDeleted?: boolean | cdktf.IResolvable;
  /**
  * The description of this user role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#description UserRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#granted_space_permissions UserRole#granted_space_permissions}
  */
  readonly grantedSpacePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#granted_system_permissions UserRole#granted_system_permissions}
  */
  readonly grantedSystemPermissions?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#id UserRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#name UserRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#space_permission_descriptions UserRole#space_permission_descriptions}
  */
  readonly spacePermissionDescriptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#supported_restrictions UserRole#supported_restrictions}
  */
  readonly supportedRestrictions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#system_permission_descriptions UserRole#system_permission_descriptions}
  */
  readonly systemPermissionDescriptions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role octopusdeploy_user_role}
*/
export class UserRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRole to import
  * @param importFromId The id of the existing UserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user_role octopusdeploy_user_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRoleConfig
  */
  public constructor(scope: Construct, id: string, config: UserRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_user_role',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canBeDeleted = config.canBeDeleted;
    this._description = config.description;
    this._grantedSpacePermissions = config.grantedSpacePermissions;
    this._grantedSystemPermissions = config.grantedSystemPermissions;
    this._id = config.id;
    this._name = config.name;
    this._spacePermissionDescriptions = config.spacePermissionDescriptions;
    this._supportedRestrictions = config.supportedRestrictions;
    this._systemPermissionDescriptions = config.systemPermissionDescriptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_be_deleted - computed: true, optional: true, required: false
  private _canBeDeleted?: boolean | cdktf.IResolvable; 
  public get canBeDeleted() {
    return this.getBooleanAttribute('can_be_deleted');
  }
  public set canBeDeleted(value: boolean | cdktf.IResolvable) {
    this._canBeDeleted = value;
  }
  public resetCanBeDeleted() {
    this._canBeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeDeletedInput() {
    return this._canBeDeleted;
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

  // granted_space_permissions - computed: false, optional: true, required: false
  private _grantedSpacePermissions?: string[]; 
  public get grantedSpacePermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('granted_space_permissions'));
  }
  public set grantedSpacePermissions(value: string[]) {
    this._grantedSpacePermissions = value;
  }
  public resetGrantedSpacePermissions() {
    this._grantedSpacePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantedSpacePermissionsInput() {
    return this._grantedSpacePermissions;
  }

  // granted_system_permissions - computed: false, optional: true, required: false
  private _grantedSystemPermissions?: string[]; 
  public get grantedSystemPermissions() {
    return this.getListAttribute('granted_system_permissions');
  }
  public set grantedSystemPermissions(value: string[]) {
    this._grantedSystemPermissions = value;
  }
  public resetGrantedSystemPermissions() {
    this._grantedSystemPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantedSystemPermissionsInput() {
    return this._grantedSystemPermissions;
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

  // space_permission_descriptions - computed: true, optional: true, required: false
  private _spacePermissionDescriptions?: string[]; 
  public get spacePermissionDescriptions() {
    return this.getListAttribute('space_permission_descriptions');
  }
  public set spacePermissionDescriptions(value: string[]) {
    this._spacePermissionDescriptions = value;
  }
  public resetSpacePermissionDescriptions() {
    this._spacePermissionDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spacePermissionDescriptionsInput() {
    return this._spacePermissionDescriptions;
  }

  // supported_restrictions - computed: false, optional: true, required: false
  private _supportedRestrictions?: string[]; 
  public get supportedRestrictions() {
    return this.getListAttribute('supported_restrictions');
  }
  public set supportedRestrictions(value: string[]) {
    this._supportedRestrictions = value;
  }
  public resetSupportedRestrictions() {
    this._supportedRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRestrictionsInput() {
    return this._supportedRestrictions;
  }

  // system_permission_descriptions - computed: true, optional: true, required: false
  private _systemPermissionDescriptions?: string[]; 
  public get systemPermissionDescriptions() {
    return this.getListAttribute('system_permission_descriptions');
  }
  public set systemPermissionDescriptions(value: string[]) {
    this._systemPermissionDescriptions = value;
  }
  public resetSystemPermissionDescriptions() {
    this._systemPermissionDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPermissionDescriptionsInput() {
    return this._systemPermissionDescriptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_be_deleted: cdktf.booleanToTerraform(this._canBeDeleted),
      description: cdktf.stringToTerraform(this._description),
      granted_space_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantedSpacePermissions),
      granted_system_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantedSystemPermissions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      space_permission_descriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spacePermissionDescriptions),
      supported_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedRestrictions),
      system_permission_descriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemPermissionDescriptions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_be_deleted: {
        value: cdktf.booleanToHclTerraform(this._canBeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granted_space_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantedSpacePermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      granted_system_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantedSystemPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      space_permission_descriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spacePermissionDescriptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      supported_restrictions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedRestrictions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      system_permission_descriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemPermissionDescriptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
