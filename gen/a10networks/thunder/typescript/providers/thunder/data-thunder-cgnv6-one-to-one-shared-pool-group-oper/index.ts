// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6OneToOneSharedPoolGroupOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#id DataThunderCgnv6OneToOneSharedPoolGroupOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#members DataThunderCgnv6OneToOneSharedPoolGroupOper#members}
  */
  readonly members?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembers;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#oper DataThunderCgnv6OneToOneSharedPoolGroupOper#oper}
  */
  readonly oper?: DataThunderCgnv6OneToOneSharedPoolGroupOperOper;
}
export interface DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#pool_name DataThunderCgnv6OneToOneSharedPoolGroupOper#pool_name}
  */
  readonly poolName?: string;
}

export function dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructToTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_name: cdktf.stringToTerraform(struct!.poolName),
  }
}


export function dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructToHclTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct | cdktf.IResolvable): any {
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

export class DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructOutputReference {
    return new DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#pool_group_name DataThunderCgnv6OneToOneSharedPoolGroupOper#pool_group_name}
  */
  readonly poolGroupName?: string;
  /**
  * member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#member_list DataThunderCgnv6OneToOneSharedPoolGroupOper#member_list}
  */
  readonly memberList?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperToTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperOutputReference | DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_group_name: cdktf.stringToTerraform(struct!.poolGroupName),
    member_list: cdktf.listMapper(dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructToTerraform, true)(struct!.memberList),
  }
}


export function dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperToHclTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperOutputReference | DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOper): any {
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
      value: cdktf.listMapperHcl(dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructToHclTerraform, true)(struct!.memberList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOper | undefined {
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

  public set internalValue(value: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOper | undefined) {
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
  private _memberList = new DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStructList(this, "member_list", false);
  public get memberList() {
    return this._memberList;
  }
  public putMemberList(value: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperMemberListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderCgnv6OneToOneSharedPoolGroupOperMembers {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#oper DataThunderCgnv6OneToOneSharedPoolGroupOper#oper}
  */
  readonly oper?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOper;
}

export function dataThunderCgnv6OneToOneSharedPoolGroupOperMembersToTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOutputReference | DataThunderCgnv6OneToOneSharedPoolGroupOperMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperToTerraform(struct!.oper),
  }
}


export function dataThunderCgnv6OneToOneSharedPoolGroupOperMembersToHclTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOutputReference | DataThunderCgnv6OneToOneSharedPoolGroupOperMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6OneToOneSharedPoolGroupOperMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6OneToOneSharedPoolGroupOperMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#pool_group_name DataThunderCgnv6OneToOneSharedPoolGroupOper#pool_group_name}
  */
  readonly poolGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#vird DataThunderCgnv6OneToOneSharedPoolGroupOper#vird}
  */
  readonly vird?: number;
}

export function dataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructToTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_group_name: cdktf.stringToTerraform(struct!.poolGroupName),
    vird: cdktf.numberToTerraform(struct!.vird),
  }
}


export function dataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructToHclTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct | cdktf.IResolvable): any {
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
    vird: {
      value: cdktf.numberToHclTerraform(struct!.vird),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolGroupName = this._poolGroupName;
    }
    if (this._vird !== undefined) {
      hasAnyValues = true;
      internalValueResult.vird = this._vird;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolGroupName = undefined;
      this._vird = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolGroupName = value.poolGroupName;
      this._vird = value.vird;
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

  // vird - computed: false, optional: true, required: false
  private _vird?: number; 
  public get vird() {
    return this.getNumberAttribute('vird');
  }
  public set vird(value: number) {
    this._vird = value;
  }
  public resetVird() {
    this._vird = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virdInput() {
    return this._vird;
  }
}

export class DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructOutputReference {
    return new DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6OneToOneSharedPoolGroupOperOper {
  /**
  * shared_pool_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#shared_pool_group_list DataThunderCgnv6OneToOneSharedPoolGroupOper#shared_pool_group_list}
  */
  readonly sharedPoolGroupList?: DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6OneToOneSharedPoolGroupOperOperToTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperOperOutputReference | DataThunderCgnv6OneToOneSharedPoolGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared_pool_group_list: cdktf.listMapper(dataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructToTerraform, true)(struct!.sharedPoolGroupList),
  }
}


export function dataThunderCgnv6OneToOneSharedPoolGroupOperOperToHclTerraform(struct?: DataThunderCgnv6OneToOneSharedPoolGroupOperOperOutputReference | DataThunderCgnv6OneToOneSharedPoolGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shared_pool_group_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructToHclTerraform, true)(struct!.sharedPoolGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOneSharedPoolGroupOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6OneToOneSharedPoolGroupOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sharedPoolGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPoolGroupList = this._sharedPoolGroupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6OneToOneSharedPoolGroupOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sharedPoolGroupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sharedPoolGroupList.internalValue = value.sharedPoolGroupList;
    }
  }

  // shared_pool_group_list - computed: false, optional: true, required: false
  private _sharedPoolGroupList = new DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStructList(this, "shared_pool_group_list", false);
  public get sharedPoolGroupList() {
    return this._sharedPoolGroupList;
  }
  public putSharedPoolGroupList(value: DataThunderCgnv6OneToOneSharedPoolGroupOperOperSharedPoolGroupListStruct[] | cdktf.IResolvable) {
    this._sharedPoolGroupList.internalValue = value;
  }
  public resetSharedPoolGroupList() {
    this._sharedPoolGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPoolGroupListInput() {
    return this._sharedPoolGroupList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper thunder_cgnv6_one_to_one_shared_pool_group_oper}
*/
export class DataThunderCgnv6OneToOneSharedPoolGroupOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_one_to_one_shared_pool_group_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6OneToOneSharedPoolGroupOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6OneToOneSharedPoolGroupOper to import
  * @param importFromId The id of the existing DataThunderCgnv6OneToOneSharedPoolGroupOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6OneToOneSharedPoolGroupOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_one_to_one_shared_pool_group_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_shared_pool_group_oper thunder_cgnv6_one_to_one_shared_pool_group_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6OneToOneSharedPoolGroupOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6OneToOneSharedPoolGroupOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_one_to_one_shared_pool_group_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._members.internalValue = config.members;
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

  // members - computed: false, optional: true, required: false
  private _members = new DataThunderCgnv6OneToOneSharedPoolGroupOperMembersOutputReference(this, "members");
  public get members() {
    return this._members;
  }
  public putMembers(value: DataThunderCgnv6OneToOneSharedPoolGroupOperMembers) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6OneToOneSharedPoolGroupOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6OneToOneSharedPoolGroupOperOper) {
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
      members: dataThunderCgnv6OneToOneSharedPoolGroupOperMembersToTerraform(this._members.internalValue),
      oper: dataThunderCgnv6OneToOneSharedPoolGroupOperOperToTerraform(this._oper.internalValue),
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
      members: {
        value: dataThunderCgnv6OneToOneSharedPoolGroupOperMembersToHclTerraform(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6OneToOneSharedPoolGroupOperMembersList",
      },
      oper: {
        value: dataThunderCgnv6OneToOneSharedPoolGroupOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6OneToOneSharedPoolGroupOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
