// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6NatSharedPoolGroupMembersOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper#id DataThunderCgnv6NatSharedPoolGroupMembersOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper#oper DataThunderCgnv6NatSharedPoolGroupMembersOper#oper}
  */
  readonly oper?: DataThunderCgnv6NatSharedPoolGroupMembersOperOper;
}
export interface DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper#pool_name DataThunderCgnv6NatSharedPoolGroupMembersOper#pool_name}
  */
  readonly poolName?: string;
}

export function dataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructToTerraform(struct?: DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_name: cdktf.stringToTerraform(struct!.poolName),
  }
}


export function dataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructToHclTerraform(struct?: DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolName = value.poolName;
    }
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }
}

export class DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructOutputReference {
    return new DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6NatSharedPoolGroupMembersOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper#pool_group_name DataThunderCgnv6NatSharedPoolGroupMembersOper#pool_group_name}
  */
  readonly poolGroupName?: string;
  /**
  * member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper#member_list DataThunderCgnv6NatSharedPoolGroupMembersOper#member_list}
  */
  readonly memberList?: DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6NatSharedPoolGroupMembersOperOperToTerraform(struct?: DataThunderCgnv6NatSharedPoolGroupMembersOperOperOutputReference | DataThunderCgnv6NatSharedPoolGroupMembersOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_group_name: cdktf.stringToTerraform(struct!.poolGroupName),
    member_list: cdktf.listMapper(dataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructToTerraform, true)(struct!.memberList),
  }
}


export function dataThunderCgnv6NatSharedPoolGroupMembersOperOperToHclTerraform(struct?: DataThunderCgnv6NatSharedPoolGroupMembersOperOperOutputReference | DataThunderCgnv6NatSharedPoolGroupMembersOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_group_name: {
      value: cdktf.stringToHclTerraform(struct!.poolGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructToHclTerraform, true)(struct!.memberList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatSharedPoolGroupMembersOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6NatSharedPoolGroupMembersOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolGroupName = this._poolGroupName;
    }
    if (this._memberList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberList = this._memberList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatSharedPoolGroupMembersOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._poolGroupName = undefined;
      this._memberList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._poolGroupName = value.poolGroupName;
      this._memberList.internalValue = value.memberList;
    }
  }

  // pool_group_name - computed: false, optional: true, required: false
  private _poolGroupName?: string; 
  public get poolGroupName() {
    return this.getStringAttribute('pool_group_name');
  }
  public set poolGroupName(value: string) {
    this._poolGroupName = value;
  }
  public resetPoolGroupName() {
    this._poolGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupNameInput() {
    return this._poolGroupName;
  }

  // member_list - computed: false, optional: true, required: false
  private _memberList = new DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStructList(this, "member_list", false);
  public get memberList() {
    return this._memberList;
  }
  public putMemberList(value: DataThunderCgnv6NatSharedPoolGroupMembersOperOperMemberListStruct[] | cdktf.IResolvable) {
    this._memberList.internalValue = value;
  }
  public resetMemberList() {
    this._memberList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberListInput() {
    return this._memberList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper thunder_cgnv6_nat_shared_pool_group_members_oper}
*/
export class DataThunderCgnv6NatSharedPoolGroupMembersOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_shared_pool_group_members_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6NatSharedPoolGroupMembersOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6NatSharedPoolGroupMembersOper to import
  * @param importFromId The id of the existing DataThunderCgnv6NatSharedPoolGroupMembersOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6NatSharedPoolGroupMembersOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_shared_pool_group_members_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_group_members_oper thunder_cgnv6_nat_shared_pool_group_members_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6NatSharedPoolGroupMembersOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6NatSharedPoolGroupMembersOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_shared_pool_group_members_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderCgnv6NatSharedPoolGroupMembersOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6NatSharedPoolGroupMembersOperOper) {
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
      oper: dataThunderCgnv6NatSharedPoolGroupMembersOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6NatSharedPoolGroupMembersOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6NatSharedPoolGroupMembersOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
