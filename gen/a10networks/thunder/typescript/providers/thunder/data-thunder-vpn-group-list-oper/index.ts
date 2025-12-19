// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnGroupListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#id DataThunderVpnGroupListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#oper DataThunderVpnGroupListOper#oper}
  */
  readonly oper?: DataThunderVpnGroupListOperOper;
}
export interface DataThunderVpnGroupListOperOperGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#grp_member_count DataThunderVpnGroupListOper#grp_member_count}
  */
  readonly grpMemberCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#ike_gateway_name DataThunderVpnGroupListOper#ike_gateway_name}
  */
  readonly ikeGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#ipsec_sa_name DataThunderVpnGroupListOper#ipsec_sa_name}
  */
  readonly ipsecSaName?: string;
  /**
  * a value of 1 indicates new group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#is_new_group DataThunderVpnGroupListOper#is_new_group}
  */
  readonly isNewGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#name DataThunderVpnGroupListOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#priority DataThunderVpnGroupListOper#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#role DataThunderVpnGroupListOper#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#status DataThunderVpnGroupListOper#status}
  */
  readonly status?: string;
}

export function dataThunderVpnGroupListOperOperGroupListStructToTerraform(struct?: DataThunderVpnGroupListOperOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grp_member_count: cdktf.numberToTerraform(struct!.grpMemberCount),
    ike_gateway_name: cdktf.stringToTerraform(struct!.ikeGatewayName),
    ipsec_sa_name: cdktf.stringToTerraform(struct!.ipsecSaName),
    is_new_group: cdktf.numberToTerraform(struct!.isNewGroup),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    role: cdktf.stringToTerraform(struct!.role),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderVpnGroupListOperOperGroupListStructToHclTerraform(struct?: DataThunderVpnGroupListOperOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grp_member_count: {
      value: cdktf.numberToHclTerraform(struct!.grpMemberCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.ikeGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_new_group: {
      value: cdktf.numberToHclTerraform(struct!.isNewGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnGroupListOperOperGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnGroupListOperOperGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpMemberCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpMemberCount = this._grpMemberCount;
    }
    if (this._ikeGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayName = this._ikeGatewayName;
    }
    if (this._ipsecSaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaName = this._ipsecSaName;
    }
    if (this._isNewGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNewGroup = this._isNewGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnGroupListOperOperGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpMemberCount = undefined;
      this._ikeGatewayName = undefined;
      this._ipsecSaName = undefined;
      this._isNewGroup = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._role = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpMemberCount = value.grpMemberCount;
      this._ikeGatewayName = value.ikeGatewayName;
      this._ipsecSaName = value.ipsecSaName;
      this._isNewGroup = value.isNewGroup;
      this._name = value.name;
      this._priority = value.priority;
      this._role = value.role;
      this._status = value.status;
    }
  }

  // grp_member_count - computed: false, optional: true, required: false
  private _grpMemberCount?: number; 
  public get grpMemberCount() {
    return this.getNumberAttribute('grp_member_count');
  }
  public set grpMemberCount(value: number) {
    this._grpMemberCount = value;
  }
  public resetGrpMemberCount() {
    this._grpMemberCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpMemberCountInput() {
    return this._grpMemberCount;
  }

  // ike_gateway_name - computed: false, optional: true, required: false
  private _ikeGatewayName?: string; 
  public get ikeGatewayName() {
    return this.getStringAttribute('ike_gateway_name');
  }
  public set ikeGatewayName(value: string) {
    this._ikeGatewayName = value;
  }
  public resetIkeGatewayName() {
    this._ikeGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayNameInput() {
    return this._ikeGatewayName;
  }

  // ipsec_sa_name - computed: false, optional: true, required: false
  private _ipsecSaName?: string; 
  public get ipsecSaName() {
    return this.getStringAttribute('ipsec_sa_name');
  }
  public set ipsecSaName(value: string) {
    this._ipsecSaName = value;
  }
  public resetIpsecSaName() {
    this._ipsecSaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNameInput() {
    return this._ipsecSaName;
  }

  // is_new_group - computed: false, optional: true, required: false
  private _isNewGroup?: number; 
  public get isNewGroup() {
    return this.getNumberAttribute('is_new_group');
  }
  public set isNewGroup(value: number) {
    this._isNewGroup = value;
  }
  public resetIsNewGroup() {
    this._isNewGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewGroupInput() {
    return this._isNewGroup;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
}

export class DataThunderVpnGroupListOperOperGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnGroupListOperOperGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnGroupListOperOperGroupListStructOutputReference {
    return new DataThunderVpnGroupListOperOperGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnGroupListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#group_name DataThunderVpnGroupListOper#group_name}
  */
  readonly groupName?: string;
  /**
  * group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#group_list DataThunderVpnGroupListOper#group_list}
  */
  readonly groupList?: DataThunderVpnGroupListOperOperGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnGroupListOperOperToTerraform(struct?: DataThunderVpnGroupListOperOperOutputReference | DataThunderVpnGroupListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    group_list: cdktf.listMapper(dataThunderVpnGroupListOperOperGroupListStructToTerraform, true)(struct!.groupList),
  }
}


export function dataThunderVpnGroupListOperOperToHclTerraform(struct?: DataThunderVpnGroupListOperOperOutputReference | DataThunderVpnGroupListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_list: {
      value: cdktf.listMapperHcl(dataThunderVpnGroupListOperOperGroupListStructToHclTerraform, true)(struct!.groupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnGroupListOperOperGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnGroupListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnGroupListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._groupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnGroupListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._groupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._groupList.internalValue = value.groupList;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList = new DataThunderVpnGroupListOperOperGroupListStructList(this, "group_list", false);
  public get groupList() {
    return this._groupList;
  }
  public putGroupList(value: DataThunderVpnGroupListOperOperGroupListStruct[] | cdktf.IResolvable) {
    this._groupList.internalValue = value;
  }
  public resetGroupList() {
    this._groupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper thunder_vpn_group_list_oper}
*/
export class DataThunderVpnGroupListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_group_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnGroupListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnGroupListOper to import
  * @param importFromId The id of the existing DataThunderVpnGroupListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnGroupListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_group_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_group_list_oper thunder_vpn_group_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnGroupListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnGroupListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_group_list_oper',
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
  private _oper = new DataThunderVpnGroupListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnGroupListOperOper) {
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
      oper: dataThunderVpnGroupListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnGroupListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnGroupListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
