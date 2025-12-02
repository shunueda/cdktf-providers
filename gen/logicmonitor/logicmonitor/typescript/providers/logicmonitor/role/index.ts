// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#custom_help_label Role#custom_help_label}
  */
  readonly customHelpLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#custom_help_url Role#custom_help_url}
  */
  readonly customHelpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#privileges Role#privileges}
  */
  readonly privileges: RolePrivileges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#require_e_u_l_a Role#require_e_u_l_a}
  */
  readonly requireEULA?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#role_group_id Role#role_group_id}
  */
  readonly roleGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#two_f_a_required Role#two_f_a_required}
  */
  readonly twoFARequired?: boolean | cdktf.IResolvable;
}
export interface RolePrivileges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#object_id Role#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#object_name Role#object_name}
  */
  readonly objectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#object_type Role#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#operation Role#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#sub_operation Role#sub_operation}
  */
  readonly subOperation: string;
}

export function rolePrivilegesToTerraform(struct?: RolePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id: cdktf.stringToTerraform(struct!.objectId),
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    operation: cdktf.stringToTerraform(struct!.operation),
    sub_operation: cdktf.stringToTerraform(struct!.subOperation),
  }
}


export function rolePrivilegesToHclTerraform(struct?: RolePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_operation: {
      value: cdktf.stringToHclTerraform(struct!.subOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RolePrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RolePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._subOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.subOperation = this._subOperation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectId = undefined;
      this._objectName = undefined;
      this._objectType = undefined;
      this._operation = undefined;
      this._subOperation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectId = value.objectId;
      this._objectName = value.objectName;
      this._objectType = value.objectType;
      this._operation = value.operation;
      this._subOperation = value.subOperation;
    }
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // sub_operation - computed: false, optional: false, required: true
  private _subOperation?: string; 
  public get subOperation() {
    return this.getStringAttribute('sub_operation');
  }
  public set subOperation(value: string) {
    this._subOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subOperationInput() {
    return this._subOperation;
  }
}

export class RolePrivilegesList extends cdktf.ComplexList {
  public internalValue? : RolePrivileges[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RolePrivilegesOutputReference {
    return new RolePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role logicmonitor_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/role logicmonitor_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_role',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.27',
        providerVersionConstraint: '2.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customHelpLabel = config.customHelpLabel;
    this._customHelpUrl = config.customHelpUrl;
    this._description = config.description;
    this._name = config.name;
    this._privileges.internalValue = config.privileges;
    this._requireEULA = config.requireEULA;
    this._roleGroupId = config.roleGroupId;
    this._twoFARequired = config.twoFARequired;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_require_two_f_a - computed: true, optional: false, required: false
  public get acctRequireTwoFA() {
    return this.getBooleanAttribute('acct_require_two_f_a');
  }

  // associated_user_count - computed: true, optional: false, required: false
  public get associatedUserCount() {
    return this.getNumberAttribute('associated_user_count');
  }

  // custom_help_label - computed: false, optional: true, required: false
  private _customHelpLabel?: string; 
  public get customHelpLabel() {
    return this.getStringAttribute('custom_help_label');
  }
  public set customHelpLabel(value: string) {
    this._customHelpLabel = value;
  }
  public resetCustomHelpLabel() {
    this._customHelpLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHelpLabelInput() {
    return this._customHelpLabel;
  }

  // custom_help_url - computed: false, optional: true, required: false
  private _customHelpUrl?: string; 
  public get customHelpUrl() {
    return this.getStringAttribute('custom_help_url');
  }
  public set customHelpUrl(value: string) {
    this._customHelpUrl = value;
  }
  public resetCustomHelpUrl() {
    this._customHelpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHelpUrlInput() {
    return this._customHelpUrl;
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

  // enable_remote_session_in_company_level - computed: true, optional: false, required: false
  public get enableRemoteSessionInCompanyLevel() {
    return this.getBooleanAttribute('enable_remote_session_in_company_level');
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

  // privileges - computed: false, optional: false, required: true
  private _privileges = new RolePrivilegesList(this, "privileges", false);
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: RolePrivileges[] | cdktf.IResolvable) {
    this._privileges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges.internalValue;
  }

  // require_e_u_l_a - computed: false, optional: true, required: false
  private _requireEULA?: boolean | cdktf.IResolvable; 
  public get requireEULA() {
    return this.getBooleanAttribute('require_e_u_l_a');
  }
  public set requireEULA(value: boolean | cdktf.IResolvable) {
    this._requireEULA = value;
  }
  public resetRequireEULA() {
    this._requireEULA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEULAInput() {
    return this._requireEULA;
  }

  // role_group_id - computed: false, optional: true, required: false
  private _roleGroupId?: number; 
  public get roleGroupId() {
    return this.getNumberAttribute('role_group_id');
  }
  public set roleGroupId(value: number) {
    this._roleGroupId = value;
  }
  public resetRoleGroupId() {
    this._roleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupIdInput() {
    return this._roleGroupId;
  }

  // two_f_a_required - computed: false, optional: true, required: false
  private _twoFARequired?: boolean | cdktf.IResolvable; 
  public get twoFARequired() {
    return this.getBooleanAttribute('two_f_a_required');
  }
  public set twoFARequired(value: boolean | cdktf.IResolvable) {
    this._twoFARequired = value;
  }
  public resetTwoFARequired() {
    this._twoFARequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFARequiredInput() {
    return this._twoFARequired;
  }

  // user_permission - computed: true, optional: false, required: false
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_help_label: cdktf.stringToTerraform(this._customHelpLabel),
      custom_help_url: cdktf.stringToTerraform(this._customHelpUrl),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      privileges: cdktf.listMapper(rolePrivilegesToTerraform, false)(this._privileges.internalValue),
      require_e_u_l_a: cdktf.booleanToTerraform(this._requireEULA),
      role_group_id: cdktf.numberToTerraform(this._roleGroupId),
      two_f_a_required: cdktf.booleanToTerraform(this._twoFARequired),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_help_label: {
        value: cdktf.stringToHclTerraform(this._customHelpLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_help_url: {
        value: cdktf.stringToHclTerraform(this._customHelpUrl),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(rolePrivilegesToHclTerraform, false)(this._privileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RolePrivilegesList",
      },
      require_e_u_l_a: {
        value: cdktf.booleanToHclTerraform(this._requireEULA),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_group_id: {
        value: cdktf.numberToHclTerraform(this._roleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      two_f_a_required: {
        value: cdktf.booleanToHclTerraform(this._twoFARequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
