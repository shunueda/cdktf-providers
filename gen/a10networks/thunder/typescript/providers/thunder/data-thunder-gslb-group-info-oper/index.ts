// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbGroupInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#id DataThunderGslbGroupInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#oper DataThunderGslbGroupInfoOper#oper}
  */
  readonly oper?: DataThunderGslbGroupInfoOperOper;
}
export interface DataThunderGslbGroupInfoOperOperMemberListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#address DataThunderGslbGroupInfoOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#connect_fail DataThunderGslbGroupInfoOper#connect_fail}
  */
  readonly connectFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#connect_success DataThunderGslbGroupInfoOper#connect_success}
  */
  readonly connectSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#group_name DataThunderGslbGroupInfoOper#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#ipv6_address DataThunderGslbGroupInfoOper#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#is_master DataThunderGslbGroupInfoOper#is_master}
  */
  readonly isMaster?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#learn DataThunderGslbGroupInfoOper#learn}
  */
  readonly learn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#member_name DataThunderGslbGroupInfoOper#member_name}
  */
  readonly memberName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#open_in DataThunderGslbGroupInfoOper#open_in}
  */
  readonly openIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#open_out DataThunderGslbGroupInfoOper#open_out}
  */
  readonly openOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#open_success DataThunderGslbGroupInfoOper#open_success}
  */
  readonly openSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#passive DataThunderGslbGroupInfoOper#passive}
  */
  readonly passive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#priority DataThunderGslbGroupInfoOper#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#status DataThunderGslbGroupInfoOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#sync_sequence_number DataThunderGslbGroupInfoOper#sync_sequence_number}
  */
  readonly syncSequenceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#sys_id DataThunderGslbGroupInfoOper#sys_id}
  */
  readonly sysId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#update_in DataThunderGslbGroupInfoOper#update_in}
  */
  readonly updateIn?: number;
}

export function dataThunderGslbGroupInfoOperOperMemberListStructToTerraform(struct?: DataThunderGslbGroupInfoOperOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    connect_fail: cdktf.numberToTerraform(struct!.connectFail),
    connect_success: cdktf.numberToTerraform(struct!.connectSuccess),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    is_master: cdktf.numberToTerraform(struct!.isMaster),
    learn: cdktf.numberToTerraform(struct!.learn),
    member_name: cdktf.stringToTerraform(struct!.memberName),
    open_in: cdktf.numberToTerraform(struct!.openIn),
    open_out: cdktf.numberToTerraform(struct!.openOut),
    open_success: cdktf.numberToTerraform(struct!.openSuccess),
    passive: cdktf.numberToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    sync_sequence_number: cdktf.numberToTerraform(struct!.syncSequenceNumber),
    sys_id: cdktf.numberToTerraform(struct!.sysId),
    update_in: cdktf.numberToTerraform(struct!.updateIn),
  }
}


export function dataThunderGslbGroupInfoOperOperMemberListStructToHclTerraform(struct?: DataThunderGslbGroupInfoOperOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_fail: {
      value: cdktf.numberToHclTerraform(struct!.connectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_success: {
      value: cdktf.numberToHclTerraform(struct!.connectSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_master: {
      value: cdktf.numberToHclTerraform(struct!.isMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learn: {
      value: cdktf.numberToHclTerraform(struct!.learn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_in: {
      value: cdktf.numberToHclTerraform(struct!.openIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_out: {
      value: cdktf.numberToHclTerraform(struct!.openOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_success: {
      value: cdktf.numberToHclTerraform(struct!.openSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passive: {
      value: cdktf.numberToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.syncSequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sys_id: {
      value: cdktf.numberToHclTerraform(struct!.sysId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_in: {
      value: cdktf.numberToHclTerraform(struct!.updateIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbGroupInfoOperOperMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbGroupInfoOperOperMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._connectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectFail = this._connectFail;
    }
    if (this._connectSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectSuccess = this._connectSuccess;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._isMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaster = this._isMaster;
    }
    if (this._learn !== undefined) {
      hasAnyValues = true;
      internalValueResult.learn = this._learn;
    }
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    if (this._openIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIn = this._openIn;
    }
    if (this._openOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.openOut = this._openOut;
    }
    if (this._openSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSuccess = this._openSuccess;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._syncSequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSequenceNumber = this._syncSequenceNumber;
    }
    if (this._sysId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysId = this._sysId;
    }
    if (this._updateIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateIn = this._updateIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbGroupInfoOperOperMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._connectFail = undefined;
      this._connectSuccess = undefined;
      this._groupName = undefined;
      this._ipv6Address = undefined;
      this._isMaster = undefined;
      this._learn = undefined;
      this._memberName = undefined;
      this._openIn = undefined;
      this._openOut = undefined;
      this._openSuccess = undefined;
      this._passive = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._syncSequenceNumber = undefined;
      this._sysId = undefined;
      this._updateIn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._connectFail = value.connectFail;
      this._connectSuccess = value.connectSuccess;
      this._groupName = value.groupName;
      this._ipv6Address = value.ipv6Address;
      this._isMaster = value.isMaster;
      this._learn = value.learn;
      this._memberName = value.memberName;
      this._openIn = value.openIn;
      this._openOut = value.openOut;
      this._openSuccess = value.openSuccess;
      this._passive = value.passive;
      this._priority = value.priority;
      this._status = value.status;
      this._syncSequenceNumber = value.syncSequenceNumber;
      this._sysId = value.sysId;
      this._updateIn = value.updateIn;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // connect_fail - computed: false, optional: true, required: false
  private _connectFail?: number; 
  public get connectFail() {
    return this.getNumberAttribute('connect_fail');
  }
  public set connectFail(value: number) {
    this._connectFail = value;
  }
  public resetConnectFail() {
    this._connectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectFailInput() {
    return this._connectFail;
  }

  // connect_success - computed: false, optional: true, required: false
  private _connectSuccess?: number; 
  public get connectSuccess() {
    return this.getNumberAttribute('connect_success');
  }
  public set connectSuccess(value: number) {
    this._connectSuccess = value;
  }
  public resetConnectSuccess() {
    this._connectSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectSuccessInput() {
    return this._connectSuccess;
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

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // is_master - computed: false, optional: true, required: false
  private _isMaster?: number; 
  public get isMaster() {
    return this.getNumberAttribute('is_master');
  }
  public set isMaster(value: number) {
    this._isMaster = value;
  }
  public resetIsMaster() {
    this._isMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMasterInput() {
    return this._isMaster;
  }

  // learn - computed: false, optional: true, required: false
  private _learn?: number; 
  public get learn() {
    return this.getNumberAttribute('learn');
  }
  public set learn(value: number) {
    this._learn = value;
  }
  public resetLearn() {
    this._learn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnInput() {
    return this._learn;
  }

  // member_name - computed: false, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }

  // open_in - computed: false, optional: true, required: false
  private _openIn?: number; 
  public get openIn() {
    return this.getNumberAttribute('open_in');
  }
  public set openIn(value: number) {
    this._openIn = value;
  }
  public resetOpenIn() {
    this._openIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInInput() {
    return this._openIn;
  }

  // open_out - computed: false, optional: true, required: false
  private _openOut?: number; 
  public get openOut() {
    return this.getNumberAttribute('open_out');
  }
  public set openOut(value: number) {
    this._openOut = value;
  }
  public resetOpenOut() {
    this._openOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openOutInput() {
    return this._openOut;
  }

  // open_success - computed: false, optional: true, required: false
  private _openSuccess?: number; 
  public get openSuccess() {
    return this.getNumberAttribute('open_success');
  }
  public set openSuccess(value: number) {
    this._openSuccess = value;
  }
  public resetOpenSuccess() {
    this._openSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSuccessInput() {
    return this._openSuccess;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: number; 
  public get passive() {
    return this.getNumberAttribute('passive');
  }
  public set passive(value: number) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
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

  // sync_sequence_number - computed: false, optional: true, required: false
  private _syncSequenceNumber?: number; 
  public get syncSequenceNumber() {
    return this.getNumberAttribute('sync_sequence_number');
  }
  public set syncSequenceNumber(value: number) {
    this._syncSequenceNumber = value;
  }
  public resetSyncSequenceNumber() {
    this._syncSequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSequenceNumberInput() {
    return this._syncSequenceNumber;
  }

  // sys_id - computed: false, optional: true, required: false
  private _sysId?: number; 
  public get sysId() {
    return this.getNumberAttribute('sys_id');
  }
  public set sysId(value: number) {
    this._sysId = value;
  }
  public resetSysId() {
    this._sysId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysIdInput() {
    return this._sysId;
  }

  // update_in - computed: false, optional: true, required: false
  private _updateIn?: number; 
  public get updateIn() {
    return this.getNumberAttribute('update_in');
  }
  public set updateIn(value: number) {
    this._updateIn = value;
  }
  public resetUpdateIn() {
    this._updateIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInInput() {
    return this._updateIn;
  }
}

export class DataThunderGslbGroupInfoOperOperMemberListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbGroupInfoOperOperMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbGroupInfoOperOperMemberListStructOutputReference {
    return new DataThunderGslbGroupInfoOperOperMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbGroupInfoOperOper {
  /**
  * member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#member_list DataThunderGslbGroupInfoOper#member_list}
  */
  readonly memberList?: DataThunderGslbGroupInfoOperOperMemberListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbGroupInfoOperOperToTerraform(struct?: DataThunderGslbGroupInfoOperOperOutputReference | DataThunderGslbGroupInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_list: cdktf.listMapper(dataThunderGslbGroupInfoOperOperMemberListStructToTerraform, true)(struct!.memberList),
  }
}


export function dataThunderGslbGroupInfoOperOperToHclTerraform(struct?: DataThunderGslbGroupInfoOperOperOutputReference | DataThunderGslbGroupInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_list: {
      value: cdktf.listMapperHcl(dataThunderGslbGroupInfoOperOperMemberListStructToHclTerraform, true)(struct!.memberList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbGroupInfoOperOperMemberListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbGroupInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbGroupInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberList = this._memberList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbGroupInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memberList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memberList.internalValue = value.memberList;
    }
  }

  // member_list - computed: false, optional: true, required: false
  private _memberList = new DataThunderGslbGroupInfoOperOperMemberListStructList(this, "member_list", false);
  public get memberList() {
    return this._memberList;
  }
  public putMemberList(value: DataThunderGslbGroupInfoOperOperMemberListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper thunder_gslb_group_info_oper}
*/
export class DataThunderGslbGroupInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_group_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbGroupInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbGroupInfoOper to import
  * @param importFromId The id of the existing DataThunderGslbGroupInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbGroupInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_group_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_group_info_oper thunder_gslb_group_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbGroupInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbGroupInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_group_info_oper',
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
  private _oper = new DataThunderGslbGroupInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbGroupInfoOperOper) {
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
      oper: dataThunderGslbGroupInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderGslbGroupInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbGroupInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
