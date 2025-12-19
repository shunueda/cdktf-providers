// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAdminDetailOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#id DataThunderAdminDetailOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#oper DataThunderAdminDetailOper#oper}
  */
  readonly oper?: DataThunderAdminDetailOperOper;
}
export interface DataThunderAdminDetailOperOperUserListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#access_type DataThunderAdminDetailOper#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#gui_role DataThunderAdminDetailOper#gui_role}
  */
  readonly guiRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#lock_status DataThunderAdminDetailOper#lock_status}
  */
  readonly lockStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#lock_time DataThunderAdminDetailOper#lock_time}
  */
  readonly lockTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#partition DataThunderAdminDetailOper#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#password_type DataThunderAdminDetailOper#password_type}
  */
  readonly passwordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#priviledge DataThunderAdminDetailOper#priviledge}
  */
  readonly priviledge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#status DataThunderAdminDetailOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#trusted_host DataThunderAdminDetailOper#trusted_host}
  */
  readonly trustedHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#unlock_time DataThunderAdminDetailOper#unlock_time}
  */
  readonly unlockTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#user_name DataThunderAdminDetailOper#user_name}
  */
  readonly userName?: string;
}

export function dataThunderAdminDetailOperOperUserListStructToTerraform(struct?: DataThunderAdminDetailOperOperUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    gui_role: cdktf.stringToTerraform(struct!.guiRole),
    lock_status: cdktf.stringToTerraform(struct!.lockStatus),
    lock_time: cdktf.stringToTerraform(struct!.lockTime),
    partition: cdktf.stringToTerraform(struct!.partition),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    priviledge: cdktf.stringToTerraform(struct!.priviledge),
    status: cdktf.stringToTerraform(struct!.status),
    trusted_host: cdktf.stringToTerraform(struct!.trustedHost),
    unlock_time: cdktf.stringToTerraform(struct!.unlockTime),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataThunderAdminDetailOperOperUserListStructToHclTerraform(struct?: DataThunderAdminDetailOperOperUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gui_role: {
      value: cdktf.stringToHclTerraform(struct!.guiRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lock_status: {
      value: cdktf.stringToHclTerraform(struct!.lockStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lock_time: {
      value: cdktf.stringToHclTerraform(struct!.lockTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priviledge: {
      value: cdktf.stringToHclTerraform(struct!.priviledge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_host: {
      value: cdktf.stringToHclTerraform(struct!.trustedHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unlock_time: {
      value: cdktf.stringToHclTerraform(struct!.unlockTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAdminDetailOperOperUserListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAdminDetailOperOperUserListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._guiRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiRole = this._guiRole;
    }
    if (this._lockStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockStatus = this._lockStatus;
    }
    if (this._lockTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockTime = this._lockTime;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._priviledge !== undefined) {
      hasAnyValues = true;
      internalValueResult.priviledge = this._priviledge;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trustedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedHost = this._trustedHost;
    }
    if (this._unlockTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockTime = this._unlockTime;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAdminDetailOperOperUserListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._guiRole = undefined;
      this._lockStatus = undefined;
      this._lockTime = undefined;
      this._partition = undefined;
      this._passwordType = undefined;
      this._priviledge = undefined;
      this._status = undefined;
      this._trustedHost = undefined;
      this._unlockTime = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._guiRole = value.guiRole;
      this._lockStatus = value.lockStatus;
      this._lockTime = value.lockTime;
      this._partition = value.partition;
      this._passwordType = value.passwordType;
      this._priviledge = value.priviledge;
      this._status = value.status;
      this._trustedHost = value.trustedHost;
      this._unlockTime = value.unlockTime;
      this._userName = value.userName;
    }
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // gui_role - computed: false, optional: true, required: false
  private _guiRole?: string; 
  public get guiRole() {
    return this.getStringAttribute('gui_role');
  }
  public set guiRole(value: string) {
    this._guiRole = value;
  }
  public resetGuiRole() {
    this._guiRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiRoleInput() {
    return this._guiRole;
  }

  // lock_status - computed: false, optional: true, required: false
  private _lockStatus?: string; 
  public get lockStatus() {
    return this.getStringAttribute('lock_status');
  }
  public set lockStatus(value: string) {
    this._lockStatus = value;
  }
  public resetLockStatus() {
    this._lockStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockStatusInput() {
    return this._lockStatus;
  }

  // lock_time - computed: false, optional: true, required: false
  private _lockTime?: string; 
  public get lockTime() {
    return this.getStringAttribute('lock_time');
  }
  public set lockTime(value: string) {
    this._lockTime = value;
  }
  public resetLockTime() {
    this._lockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeInput() {
    return this._lockTime;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // password_type - computed: false, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // priviledge - computed: false, optional: true, required: false
  private _priviledge?: string; 
  public get priviledge() {
    return this.getStringAttribute('priviledge');
  }
  public set priviledge(value: string) {
    this._priviledge = value;
  }
  public resetPriviledge() {
    this._priviledge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priviledgeInput() {
    return this._priviledge;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trusted_host - computed: false, optional: true, required: false
  private _trustedHost?: string; 
  public get trustedHost() {
    return this.getStringAttribute('trusted_host');
  }
  public set trustedHost(value: string) {
    this._trustedHost = value;
  }
  public resetTrustedHost() {
    this._trustedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostInput() {
    return this._trustedHost;
  }

  // unlock_time - computed: false, optional: true, required: false
  private _unlockTime?: string; 
  public get unlockTime() {
    return this.getStringAttribute('unlock_time');
  }
  public set unlockTime(value: string) {
    this._unlockTime = value;
  }
  public resetUnlockTime() {
    this._unlockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockTimeInput() {
    return this._unlockTime;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataThunderAdminDetailOperOperUserListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAdminDetailOperOperUserListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAdminDetailOperOperUserListStructOutputReference {
    return new DataThunderAdminDetailOperOperUserListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAdminDetailOperOper {
  /**
  * user_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#user_list DataThunderAdminDetailOper#user_list}
  */
  readonly userList?: DataThunderAdminDetailOperOperUserListStruct[] | cdktf.IResolvable;
}

export function dataThunderAdminDetailOperOperToTerraform(struct?: DataThunderAdminDetailOperOperOutputReference | DataThunderAdminDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_list: cdktf.listMapper(dataThunderAdminDetailOperOperUserListStructToTerraform, true)(struct!.userList),
  }
}


export function dataThunderAdminDetailOperOperToHclTerraform(struct?: DataThunderAdminDetailOperOperOutputReference | DataThunderAdminDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_list: {
      value: cdktf.listMapperHcl(dataThunderAdminDetailOperOperUserListStructToHclTerraform, true)(struct!.userList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAdminDetailOperOperUserListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAdminDetailOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAdminDetailOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userList = this._userList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAdminDetailOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userList.internalValue = value.userList;
    }
  }

  // user_list - computed: false, optional: true, required: false
  private _userList = new DataThunderAdminDetailOperOperUserListStructList(this, "user_list", false);
  public get userList() {
    return this._userList;
  }
  public putUserList(value: DataThunderAdminDetailOperOperUserListStruct[] | cdktf.IResolvable) {
    this._userList.internalValue = value;
  }
  public resetUserList() {
    this._userList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userListInput() {
    return this._userList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper thunder_admin_detail_oper}
*/
export class DataThunderAdminDetailOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_admin_detail_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAdminDetailOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAdminDetailOper to import
  * @param importFromId The id of the existing DataThunderAdminDetailOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAdminDetailOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_admin_detail_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/admin_detail_oper thunder_admin_detail_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAdminDetailOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAdminDetailOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_admin_detail_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAdminDetailOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAdminDetailOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderAdminDetailOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderAdminDetailOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAdminDetailOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
