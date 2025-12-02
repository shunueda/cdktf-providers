// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#acct_require_two_f_a DataLogicmonitorRole#acct_require_two_f_a}
  */
  readonly acctRequireTwoFA?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#associated_user_count DataLogicmonitorRole#associated_user_count}
  */
  readonly associatedUserCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#custom_help_label DataLogicmonitorRole#custom_help_label}
  */
  readonly customHelpLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#custom_help_url DataLogicmonitorRole#custom_help_url}
  */
  readonly customHelpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#description DataLogicmonitorRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#enable_remote_session_in_company_level DataLogicmonitorRole#enable_remote_session_in_company_level}
  */
  readonly enableRemoteSessionInCompanyLevel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#filter DataLogicmonitorRole#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#id DataLogicmonitorRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#name DataLogicmonitorRole#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#privileges DataLogicmonitorRole#privileges}
  */
  readonly privileges?: DataLogicmonitorRolePrivileges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#require_e_u_l_a DataLogicmonitorRole#require_e_u_l_a}
  */
  readonly requireEULA?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#role_group_id DataLogicmonitorRole#role_group_id}
  */
  readonly roleGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#two_f_a_required DataLogicmonitorRole#two_f_a_required}
  */
  readonly twoFARequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#user_permission DataLogicmonitorRole#user_permission}
  */
  readonly userPermission?: string;
}
export interface DataLogicmonitorRolePrivileges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#object_id DataLogicmonitorRole#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#object_name DataLogicmonitorRole#object_name}
  */
  readonly objectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#object_type DataLogicmonitorRole#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#operation DataLogicmonitorRole#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#sub_operation DataLogicmonitorRole#sub_operation}
  */
  readonly subOperation?: string;
}

export function dataLogicmonitorRolePrivilegesToTerraform(struct?: DataLogicmonitorRolePrivileges | cdktf.IResolvable): any {
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


export function dataLogicmonitorRolePrivilegesToHclTerraform(struct?: DataLogicmonitorRolePrivileges | cdktf.IResolvable): any {
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

export class DataLogicmonitorRolePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorRolePrivileges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLogicmonitorRolePrivileges | cdktf.IResolvable | undefined) {
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

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // sub_operation - computed: false, optional: true, required: false
  private _subOperation?: string; 
  public get subOperation() {
    return this.getStringAttribute('sub_operation');
  }
  public set subOperation(value: string) {
    this._subOperation = value;
  }
  public resetSubOperation() {
    this._subOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subOperationInput() {
    return this._subOperation;
  }
}

export class DataLogicmonitorRolePrivilegesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorRolePrivileges[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorRolePrivilegesOutputReference {
    return new DataLogicmonitorRolePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role logicmonitor_role}
*/
export class DataLogicmonitorRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorRole to import
  * @param importFromId The id of the existing DataLogicmonitorRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/role logicmonitor_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorRoleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorRoleConfig = {}) {
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
    this._acctRequireTwoFA = config.acctRequireTwoFA;
    this._associatedUserCount = config.associatedUserCount;
    this._customHelpLabel = config.customHelpLabel;
    this._customHelpUrl = config.customHelpUrl;
    this._description = config.description;
    this._enableRemoteSessionInCompanyLevel = config.enableRemoteSessionInCompanyLevel;
    this._filter = config.filter;
    this._id = config.id;
    this._name = config.name;
    this._privileges.internalValue = config.privileges;
    this._requireEULA = config.requireEULA;
    this._roleGroupId = config.roleGroupId;
    this._twoFARequired = config.twoFARequired;
    this._userPermission = config.userPermission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_require_two_f_a - computed: false, optional: true, required: false
  private _acctRequireTwoFA?: boolean | cdktf.IResolvable; 
  public get acctRequireTwoFA() {
    return this.getBooleanAttribute('acct_require_two_f_a');
  }
  public set acctRequireTwoFA(value: boolean | cdktf.IResolvable) {
    this._acctRequireTwoFA = value;
  }
  public resetAcctRequireTwoFA() {
    this._acctRequireTwoFA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctRequireTwoFAInput() {
    return this._acctRequireTwoFA;
  }

  // associated_user_count - computed: false, optional: true, required: false
  private _associatedUserCount?: number; 
  public get associatedUserCount() {
    return this.getNumberAttribute('associated_user_count');
  }
  public set associatedUserCount(value: number) {
    this._associatedUserCount = value;
  }
  public resetAssociatedUserCount() {
    this._associatedUserCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedUserCountInput() {
    return this._associatedUserCount;
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

  // enable_remote_session_in_company_level - computed: false, optional: true, required: false
  private _enableRemoteSessionInCompanyLevel?: boolean | cdktf.IResolvable; 
  public get enableRemoteSessionInCompanyLevel() {
    return this.getBooleanAttribute('enable_remote_session_in_company_level');
  }
  public set enableRemoteSessionInCompanyLevel(value: boolean | cdktf.IResolvable) {
    this._enableRemoteSessionInCompanyLevel = value;
  }
  public resetEnableRemoteSessionInCompanyLevel() {
    this._enableRemoteSessionInCompanyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteSessionInCompanyLevelInput() {
    return this._enableRemoteSessionInCompanyLevel;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // privileges - computed: false, optional: true, required: false
  private _privileges = new DataLogicmonitorRolePrivilegesList(this, "privileges", false);
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: DataLogicmonitorRolePrivileges[] | cdktf.IResolvable) {
    this._privileges.internalValue = value;
  }
  public resetPrivileges() {
    this._privileges.internalValue = undefined;
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

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acct_require_two_f_a: cdktf.booleanToTerraform(this._acctRequireTwoFA),
      associated_user_count: cdktf.numberToTerraform(this._associatedUserCount),
      custom_help_label: cdktf.stringToTerraform(this._customHelpLabel),
      custom_help_url: cdktf.stringToTerraform(this._customHelpUrl),
      description: cdktf.stringToTerraform(this._description),
      enable_remote_session_in_company_level: cdktf.booleanToTerraform(this._enableRemoteSessionInCompanyLevel),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      privileges: cdktf.listMapper(dataLogicmonitorRolePrivilegesToTerraform, false)(this._privileges.internalValue),
      require_e_u_l_a: cdktf.booleanToTerraform(this._requireEULA),
      role_group_id: cdktf.numberToTerraform(this._roleGroupId),
      two_f_a_required: cdktf.booleanToTerraform(this._twoFARequired),
      user_permission: cdktf.stringToTerraform(this._userPermission),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_require_two_f_a: {
        value: cdktf.booleanToHclTerraform(this._acctRequireTwoFA),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      associated_user_count: {
        value: cdktf.numberToHclTerraform(this._associatedUserCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      enable_remote_session_in_company_level: {
        value: cdktf.booleanToHclTerraform(this._enableRemoteSessionInCompanyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(dataLogicmonitorRolePrivilegesToHclTerraform, false)(this._privileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorRolePrivilegesList",
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
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
