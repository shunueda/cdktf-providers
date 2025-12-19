// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkTrunkOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#id DataThunderNetworkTrunkOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#oper DataThunderNetworkTrunkOper#oper}
  */
  readonly oper?: DataThunderNetworkTrunkOperOper;
}
export interface DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#cfg_status DataThunderNetworkTrunkOper#cfg_status}
  */
  readonly cfgStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#members DataThunderNetworkTrunkOper#members}
  */
  readonly members?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#oper_status DataThunderNetworkTrunkOper#oper_status}
  */
  readonly operStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#rx_ts_interval DataThunderNetworkTrunkOper#rx_ts_interval}
  */
  readonly rxTsInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#tx_ts_interval DataThunderNetworkTrunkOper#tx_ts_interval}
  */
  readonly txTsInterval?: string;
}

export function dataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusToTerraform(struct?: DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfg_status: cdktf.stringToTerraform(struct!.cfgStatus),
    members: cdktf.numberToTerraform(struct!.members),
    oper_status: cdktf.stringToTerraform(struct!.operStatus),
    rx_ts_interval: cdktf.stringToTerraform(struct!.rxTsInterval),
    tx_ts_interval: cdktf.stringToTerraform(struct!.txTsInterval),
  }
}


export function dataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusToHclTerraform(struct?: DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfg_status: {
      value: cdktf.stringToHclTerraform(struct!.cfgStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.numberToHclTerraform(struct!.members),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oper_status: {
      value: cdktf.stringToHclTerraform(struct!.operStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rx_ts_interval: {
      value: cdktf.stringToHclTerraform(struct!.rxTsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tx_ts_interval: {
      value: cdktf.stringToHclTerraform(struct!.txTsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfgStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgStatus = this._cfgStatus;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._operStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus;
    }
    if (this._rxTsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxTsInterval = this._rxTsInterval;
    }
    if (this._txTsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTsInterval = this._txTsInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfgStatus = undefined;
      this._members = undefined;
      this._operStatus = undefined;
      this._rxTsInterval = undefined;
      this._txTsInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfgStatus = value.cfgStatus;
      this._members = value.members;
      this._operStatus = value.operStatus;
      this._rxTsInterval = value.rxTsInterval;
      this._txTsInterval = value.txTsInterval;
    }
  }

  // cfg_status - computed: false, optional: true, required: false
  private _cfgStatus?: string; 
  public get cfgStatus() {
    return this.getStringAttribute('cfg_status');
  }
  public set cfgStatus(value: string) {
    this._cfgStatus = value;
  }
  public resetCfgStatus() {
    this._cfgStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgStatusInput() {
    return this._cfgStatus;
  }

  // members - computed: false, optional: true, required: false
  private _members?: number; 
  public get members() {
    return this.getNumberAttribute('members');
  }
  public set members(value: number) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus?: string; 
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }
  public set operStatus(value: string) {
    this._operStatus = value;
  }
  public resetOperStatus() {
    this._operStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus;
  }

  // rx_ts_interval - computed: false, optional: true, required: false
  private _rxTsInterval?: string; 
  public get rxTsInterval() {
    return this.getStringAttribute('rx_ts_interval');
  }
  public set rxTsInterval(value: string) {
    this._rxTsInterval = value;
  }
  public resetRxTsInterval() {
    this._rxTsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxTsIntervalInput() {
    return this._rxTsInterval;
  }

  // tx_ts_interval - computed: false, optional: true, required: false
  private _txTsInterval?: string; 
  public get txTsInterval() {
    return this.getStringAttribute('tx_ts_interval');
  }
  public set txTsInterval(value: string) {
    this._txTsInterval = value;
  }
  public resetTxTsInterval() {
    this._txTsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTsIntervalInput() {
    return this._txTsInterval;
  }
}

export class DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusOutputReference {
    return new DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkTrunkOperOperTrunk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#admin_key DataThunderNetworkTrunkOper#admin_key}
  */
  readonly adminKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#member_count DataThunderNetworkTrunkOper#member_count}
  */
  readonly memberCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#ports_threshold DataThunderNetworkTrunkOper#ports_threshold}
  */
  readonly portsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#ports_threshold_block DataThunderNetworkTrunkOper#ports_threshold_block}
  */
  readonly portsThresholdBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#timer DataThunderNetworkTrunkOper#timer}
  */
  readonly timer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#timer_running DataThunderNetworkTrunkOper#timer_running}
  */
  readonly timerRunning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#trunk_id DataThunderNetworkTrunkOper#trunk_id}
  */
  readonly trunkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#trunk_name DataThunderNetworkTrunkOper#trunk_name}
  */
  readonly trunkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#trunk_status DataThunderNetworkTrunkOper#trunk_status}
  */
  readonly trunkStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#trunk_type DataThunderNetworkTrunkOper#trunk_type}
  */
  readonly trunkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#working_lead DataThunderNetworkTrunkOper#working_lead}
  */
  readonly workingLead?: number;
  /**
  * trunk_member_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#trunk_member_status DataThunderNetworkTrunkOper#trunk_member_status}
  */
  readonly trunkMemberStatus?: DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus[] | cdktf.IResolvable;
}

export function dataThunderNetworkTrunkOperOperTrunkToTerraform(struct?: DataThunderNetworkTrunkOperOperTrunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_key: cdktf.numberToTerraform(struct!.adminKey),
    member_count: cdktf.numberToTerraform(struct!.memberCount),
    ports_threshold: cdktf.numberToTerraform(struct!.portsThreshold),
    ports_threshold_block: cdktf.stringToTerraform(struct!.portsThresholdBlock),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_running: cdktf.stringToTerraform(struct!.timerRunning),
    trunk_id: cdktf.numberToTerraform(struct!.trunkId),
    trunk_name: cdktf.stringToTerraform(struct!.trunkName),
    trunk_status: cdktf.stringToTerraform(struct!.trunkStatus),
    trunk_type: cdktf.stringToTerraform(struct!.trunkType),
    working_lead: cdktf.numberToTerraform(struct!.workingLead),
    trunk_member_status: cdktf.listMapper(dataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusToTerraform, true)(struct!.trunkMemberStatus),
  }
}


export function dataThunderNetworkTrunkOperOperTrunkToHclTerraform(struct?: DataThunderNetworkTrunkOperOperTrunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_key: {
      value: cdktf.numberToHclTerraform(struct!.adminKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member_count: {
      value: cdktf.numberToHclTerraform(struct!.memberCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_threshold: {
      value: cdktf.numberToHclTerraform(struct!.portsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_threshold_block: {
      value: cdktf.stringToHclTerraform(struct!.portsThresholdBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer: {
      value: cdktf.numberToHclTerraform(struct!.timer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_running: {
      value: cdktf.stringToHclTerraform(struct!.timerRunning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk_id: {
      value: cdktf.numberToHclTerraform(struct!.trunkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_name: {
      value: cdktf.stringToHclTerraform(struct!.trunkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk_status: {
      value: cdktf.stringToHclTerraform(struct!.trunkStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk_type: {
      value: cdktf.stringToHclTerraform(struct!.trunkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_lead: {
      value: cdktf.numberToHclTerraform(struct!.workingLead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_member_status: {
      value: cdktf.listMapperHcl(dataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusToHclTerraform, true)(struct!.trunkMemberStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkTrunkOperOperTrunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkTrunkOperOperTrunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminKey = this._adminKey;
    }
    if (this._memberCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberCount = this._memberCount;
    }
    if (this._portsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsThreshold = this._portsThreshold;
    }
    if (this._portsThresholdBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsThresholdBlock = this._portsThresholdBlock;
    }
    if (this._timer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer;
    }
    if (this._timerRunning !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerRunning = this._timerRunning;
    }
    if (this._trunkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkId = this._trunkId;
    }
    if (this._trunkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkName = this._trunkName;
    }
    if (this._trunkStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkStatus = this._trunkStatus;
    }
    if (this._trunkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkType = this._trunkType;
    }
    if (this._workingLead !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingLead = this._workingLead;
    }
    if (this._trunkMemberStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkMemberStatus = this._trunkMemberStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkTrunkOperOperTrunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminKey = undefined;
      this._memberCount = undefined;
      this._portsThreshold = undefined;
      this._portsThresholdBlock = undefined;
      this._timer = undefined;
      this._timerRunning = undefined;
      this._trunkId = undefined;
      this._trunkName = undefined;
      this._trunkStatus = undefined;
      this._trunkType = undefined;
      this._workingLead = undefined;
      this._trunkMemberStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminKey = value.adminKey;
      this._memberCount = value.memberCount;
      this._portsThreshold = value.portsThreshold;
      this._portsThresholdBlock = value.portsThresholdBlock;
      this._timer = value.timer;
      this._timerRunning = value.timerRunning;
      this._trunkId = value.trunkId;
      this._trunkName = value.trunkName;
      this._trunkStatus = value.trunkStatus;
      this._trunkType = value.trunkType;
      this._workingLead = value.workingLead;
      this._trunkMemberStatus.internalValue = value.trunkMemberStatus;
    }
  }

  // admin_key - computed: false, optional: true, required: false
  private _adminKey?: number; 
  public get adminKey() {
    return this.getNumberAttribute('admin_key');
  }
  public set adminKey(value: number) {
    this._adminKey = value;
  }
  public resetAdminKey() {
    this._adminKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKeyInput() {
    return this._adminKey;
  }

  // member_count - computed: false, optional: true, required: false
  private _memberCount?: number; 
  public get memberCount() {
    return this.getNumberAttribute('member_count');
  }
  public set memberCount(value: number) {
    this._memberCount = value;
  }
  public resetMemberCount() {
    this._memberCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberCountInput() {
    return this._memberCount;
  }

  // ports_threshold - computed: false, optional: true, required: false
  private _portsThreshold?: number; 
  public get portsThreshold() {
    return this.getNumberAttribute('ports_threshold');
  }
  public set portsThreshold(value: number) {
    this._portsThreshold = value;
  }
  public resetPortsThreshold() {
    this._portsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsThresholdInput() {
    return this._portsThreshold;
  }

  // ports_threshold_block - computed: false, optional: true, required: false
  private _portsThresholdBlock?: string; 
  public get portsThresholdBlock() {
    return this.getStringAttribute('ports_threshold_block');
  }
  public set portsThresholdBlock(value: string) {
    this._portsThresholdBlock = value;
  }
  public resetPortsThresholdBlock() {
    this._portsThresholdBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsThresholdBlockInput() {
    return this._portsThresholdBlock;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // timer_running - computed: false, optional: true, required: false
  private _timerRunning?: string; 
  public get timerRunning() {
    return this.getStringAttribute('timer_running');
  }
  public set timerRunning(value: string) {
    this._timerRunning = value;
  }
  public resetTimerRunning() {
    this._timerRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerRunningInput() {
    return this._timerRunning;
  }

  // trunk_id - computed: false, optional: true, required: false
  private _trunkId?: number; 
  public get trunkId() {
    return this.getNumberAttribute('trunk_id');
  }
  public set trunkId(value: number) {
    this._trunkId = value;
  }
  public resetTrunkId() {
    this._trunkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkIdInput() {
    return this._trunkId;
  }

  // trunk_name - computed: false, optional: true, required: false
  private _trunkName?: string; 
  public get trunkName() {
    return this.getStringAttribute('trunk_name');
  }
  public set trunkName(value: string) {
    this._trunkName = value;
  }
  public resetTrunkName() {
    this._trunkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNameInput() {
    return this._trunkName;
  }

  // trunk_status - computed: false, optional: true, required: false
  private _trunkStatus?: string; 
  public get trunkStatus() {
    return this.getStringAttribute('trunk_status');
  }
  public set trunkStatus(value: string) {
    this._trunkStatus = value;
  }
  public resetTrunkStatus() {
    this._trunkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkStatusInput() {
    return this._trunkStatus;
  }

  // trunk_type - computed: false, optional: true, required: false
  private _trunkType?: string; 
  public get trunkType() {
    return this.getStringAttribute('trunk_type');
  }
  public set trunkType(value: string) {
    this._trunkType = value;
  }
  public resetTrunkType() {
    this._trunkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkTypeInput() {
    return this._trunkType;
  }

  // working_lead - computed: false, optional: true, required: false
  private _workingLead?: number; 
  public get workingLead() {
    return this.getNumberAttribute('working_lead');
  }
  public set workingLead(value: number) {
    this._workingLead = value;
  }
  public resetWorkingLead() {
    this._workingLead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingLeadInput() {
    return this._workingLead;
  }

  // trunk_member_status - computed: false, optional: true, required: false
  private _trunkMemberStatus = new DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatusList(this, "trunk_member_status", false);
  public get trunkMemberStatus() {
    return this._trunkMemberStatus;
  }
  public putTrunkMemberStatus(value: DataThunderNetworkTrunkOperOperTrunkTrunkMemberStatus[] | cdktf.IResolvable) {
    this._trunkMemberStatus.internalValue = value;
  }
  public resetTrunkMemberStatus() {
    this._trunkMemberStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMemberStatusInput() {
    return this._trunkMemberStatus.internalValue;
  }
}

export class DataThunderNetworkTrunkOperOperTrunkList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkTrunkOperOperTrunk[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkTrunkOperOperTrunkOutputReference {
    return new DataThunderNetworkTrunkOperOperTrunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkTrunkOperOper {
  /**
  * trunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#trunk DataThunderNetworkTrunkOper#trunk}
  */
  readonly trunk?: DataThunderNetworkTrunkOperOperTrunk[] | cdktf.IResolvable;
}

export function dataThunderNetworkTrunkOperOperToTerraform(struct?: DataThunderNetworkTrunkOperOperOutputReference | DataThunderNetworkTrunkOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.listMapper(dataThunderNetworkTrunkOperOperTrunkToTerraform, true)(struct!.trunk),
  }
}


export function dataThunderNetworkTrunkOperOperToHclTerraform(struct?: DataThunderNetworkTrunkOperOperOutputReference | DataThunderNetworkTrunkOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk: {
      value: cdktf.listMapperHcl(dataThunderNetworkTrunkOperOperTrunkToHclTerraform, true)(struct!.trunk),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkTrunkOperOperTrunkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkTrunkOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkTrunkOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkTrunkOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trunk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trunk.internalValue = value.trunk;
    }
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk = new DataThunderNetworkTrunkOperOperTrunkList(this, "trunk", false);
  public get trunk() {
    return this._trunk;
  }
  public putTrunk(value: DataThunderNetworkTrunkOperOperTrunk[] | cdktf.IResolvable) {
    this._trunk.internalValue = value;
  }
  public resetTrunk() {
    this._trunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper thunder_network_trunk_oper}
*/
export class DataThunderNetworkTrunkOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_trunk_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkTrunkOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkTrunkOper to import
  * @param importFromId The id of the existing DataThunderNetworkTrunkOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkTrunkOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_trunk_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_trunk_oper thunder_network_trunk_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkTrunkOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkTrunkOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_trunk_oper',
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
  private _oper = new DataThunderNetworkTrunkOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkTrunkOperOper) {
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
      oper: dataThunderNetworkTrunkOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNetworkTrunkOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkTrunkOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
