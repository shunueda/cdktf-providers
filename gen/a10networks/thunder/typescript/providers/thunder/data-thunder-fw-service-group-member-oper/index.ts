// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwServiceGroupMemberOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#id DataThunderFwServiceGroupMemberOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#name DataThunderFwServiceGroupMemberOper#name}
  */
  readonly name: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#port DataThunderFwServiceGroupMemberOper#port}
  */
  readonly port: number;
  /**
  * Service_group_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#service_group_name DataThunderFwServiceGroupMemberOper#service_group_name}
  */
  readonly serviceGroupName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#oper DataThunderFwServiceGroupMemberOper#oper}
  */
  readonly oper?: DataThunderFwServiceGroupMemberOperOper;
}
export interface DataThunderFwServiceGroupMemberOperOperAltListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_curr_conn DataThunderFwServiceGroupMemberOper#alt_curr_conn}
  */
  readonly altCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_fwd_pkts DataThunderFwServiceGroupMemberOper#alt_fwd_pkts}
  */
  readonly altFwdPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_name DataThunderFwServiceGroupMemberOper#alt_name}
  */
  readonly altName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_peak_conn DataThunderFwServiceGroupMemberOper#alt_peak_conn}
  */
  readonly altPeakConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_port DataThunderFwServiceGroupMemberOper#alt_port}
  */
  readonly altPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_rev_pkts DataThunderFwServiceGroupMemberOper#alt_rev_pkts}
  */
  readonly altRevPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_state DataThunderFwServiceGroupMemberOper#alt_state}
  */
  readonly altState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_total_conn DataThunderFwServiceGroupMemberOper#alt_total_conn}
  */
  readonly altTotalConn?: number;
}

export function dataThunderFwServiceGroupMemberOperOperAltListStructToTerraform(struct?: DataThunderFwServiceGroupMemberOperOperAltListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alt_curr_conn: cdktf.numberToTerraform(struct!.altCurrConn),
    alt_fwd_pkts: cdktf.numberToTerraform(struct!.altFwdPkts),
    alt_name: cdktf.stringToTerraform(struct!.altName),
    alt_peak_conn: cdktf.numberToTerraform(struct!.altPeakConn),
    alt_port: cdktf.numberToTerraform(struct!.altPort),
    alt_rev_pkts: cdktf.numberToTerraform(struct!.altRevPkts),
    alt_state: cdktf.stringToTerraform(struct!.altState),
    alt_total_conn: cdktf.numberToTerraform(struct!.altTotalConn),
  }
}


export function dataThunderFwServiceGroupMemberOperOperAltListStructToHclTerraform(struct?: DataThunderFwServiceGroupMemberOperOperAltListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alt_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.altCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alt_fwd_pkts: {
      value: cdktf.numberToHclTerraform(struct!.altFwdPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alt_name: {
      value: cdktf.stringToHclTerraform(struct!.altName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alt_peak_conn: {
      value: cdktf.numberToHclTerraform(struct!.altPeakConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alt_port: {
      value: cdktf.numberToHclTerraform(struct!.altPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alt_rev_pkts: {
      value: cdktf.numberToHclTerraform(struct!.altRevPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alt_state: {
      value: cdktf.stringToHclTerraform(struct!.altState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alt_total_conn: {
      value: cdktf.numberToHclTerraform(struct!.altTotalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwServiceGroupMemberOperOperAltListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwServiceGroupMemberOperOperAltListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._altCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.altCurrConn = this._altCurrConn;
    }
    if (this._altFwdPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.altFwdPkts = this._altFwdPkts;
    }
    if (this._altName !== undefined) {
      hasAnyValues = true;
      internalValueResult.altName = this._altName;
    }
    if (this._altPeakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.altPeakConn = this._altPeakConn;
    }
    if (this._altPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.altPort = this._altPort;
    }
    if (this._altRevPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.altRevPkts = this._altRevPkts;
    }
    if (this._altState !== undefined) {
      hasAnyValues = true;
      internalValueResult.altState = this._altState;
    }
    if (this._altTotalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.altTotalConn = this._altTotalConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwServiceGroupMemberOperOperAltListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._altCurrConn = undefined;
      this._altFwdPkts = undefined;
      this._altName = undefined;
      this._altPeakConn = undefined;
      this._altPort = undefined;
      this._altRevPkts = undefined;
      this._altState = undefined;
      this._altTotalConn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._altCurrConn = value.altCurrConn;
      this._altFwdPkts = value.altFwdPkts;
      this._altName = value.altName;
      this._altPeakConn = value.altPeakConn;
      this._altPort = value.altPort;
      this._altRevPkts = value.altRevPkts;
      this._altState = value.altState;
      this._altTotalConn = value.altTotalConn;
    }
  }

  // alt_curr_conn - computed: false, optional: true, required: false
  private _altCurrConn?: number; 
  public get altCurrConn() {
    return this.getNumberAttribute('alt_curr_conn');
  }
  public set altCurrConn(value: number) {
    this._altCurrConn = value;
  }
  public resetAltCurrConn() {
    this._altCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altCurrConnInput() {
    return this._altCurrConn;
  }

  // alt_fwd_pkts - computed: false, optional: true, required: false
  private _altFwdPkts?: number; 
  public get altFwdPkts() {
    return this.getNumberAttribute('alt_fwd_pkts');
  }
  public set altFwdPkts(value: number) {
    this._altFwdPkts = value;
  }
  public resetAltFwdPkts() {
    this._altFwdPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altFwdPktsInput() {
    return this._altFwdPkts;
  }

  // alt_name - computed: false, optional: true, required: false
  private _altName?: string; 
  public get altName() {
    return this.getStringAttribute('alt_name');
  }
  public set altName(value: string) {
    this._altName = value;
  }
  public resetAltName() {
    this._altName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNameInput() {
    return this._altName;
  }

  // alt_peak_conn - computed: false, optional: true, required: false
  private _altPeakConn?: number; 
  public get altPeakConn() {
    return this.getNumberAttribute('alt_peak_conn');
  }
  public set altPeakConn(value: number) {
    this._altPeakConn = value;
  }
  public resetAltPeakConn() {
    this._altPeakConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altPeakConnInput() {
    return this._altPeakConn;
  }

  // alt_port - computed: false, optional: true, required: false
  private _altPort?: number; 
  public get altPort() {
    return this.getNumberAttribute('alt_port');
  }
  public set altPort(value: number) {
    this._altPort = value;
  }
  public resetAltPort() {
    this._altPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altPortInput() {
    return this._altPort;
  }

  // alt_rev_pkts - computed: false, optional: true, required: false
  private _altRevPkts?: number; 
  public get altRevPkts() {
    return this.getNumberAttribute('alt_rev_pkts');
  }
  public set altRevPkts(value: number) {
    this._altRevPkts = value;
  }
  public resetAltRevPkts() {
    this._altRevPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altRevPktsInput() {
    return this._altRevPkts;
  }

  // alt_state - computed: false, optional: true, required: false
  private _altState?: string; 
  public get altState() {
    return this.getStringAttribute('alt_state');
  }
  public set altState(value: string) {
    this._altState = value;
  }
  public resetAltState() {
    this._altState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altStateInput() {
    return this._altState;
  }

  // alt_total_conn - computed: false, optional: true, required: false
  private _altTotalConn?: number; 
  public get altTotalConn() {
    return this.getNumberAttribute('alt_total_conn');
  }
  public set altTotalConn(value: number) {
    this._altTotalConn = value;
  }
  public resetAltTotalConn() {
    this._altTotalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altTotalConnInput() {
    return this._altTotalConn;
  }
}

export class DataThunderFwServiceGroupMemberOperOperAltListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwServiceGroupMemberOperOperAltListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwServiceGroupMemberOperOperAltListStructOutputReference {
    return new DataThunderFwServiceGroupMemberOperOperAltListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwServiceGroupMemberOperOperDrsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_curr_conn DataThunderFwServiceGroupMemberOper#drs_curr_conn}
  */
  readonly drsCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_curr_req DataThunderFwServiceGroupMemberOper#drs_curr_req}
  */
  readonly drsCurrReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_frsp_time DataThunderFwServiceGroupMemberOper#drs_frsp_time}
  */
  readonly drsFrspTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_fwd_bts DataThunderFwServiceGroupMemberOper#drs_fwd_bts}
  */
  readonly drsFwdBts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_fwd_pkts DataThunderFwServiceGroupMemberOper#drs_fwd_pkts}
  */
  readonly drsFwdPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_hm_index DataThunderFwServiceGroupMemberOper#drs_hm_index}
  */
  readonly drsHmIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_hm_key DataThunderFwServiceGroupMemberOper#drs_hm_key}
  */
  readonly drsHmKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_name DataThunderFwServiceGroupMemberOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_peak_conn DataThunderFwServiceGroupMemberOper#drs_peak_conn}
  */
  readonly drsPeakConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_pers_conn DataThunderFwServiceGroupMemberOper#drs_pers_conn}
  */
  readonly drsPersConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_port DataThunderFwServiceGroupMemberOper#drs_port}
  */
  readonly drsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_priority DataThunderFwServiceGroupMemberOper#drs_priority}
  */
  readonly drsPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_rev_bts DataThunderFwServiceGroupMemberOper#drs_rev_bts}
  */
  readonly drsRevBts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_rev_pkts DataThunderFwServiceGroupMemberOper#drs_rev_pkts}
  */
  readonly drsRevPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_rsp_time DataThunderFwServiceGroupMemberOper#drs_rsp_time}
  */
  readonly drsRspTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_srsp_time DataThunderFwServiceGroupMemberOper#drs_srsp_time}
  */
  readonly drsSrspTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_state DataThunderFwServiceGroupMemberOper#drs_state}
  */
  readonly drsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_total_conn DataThunderFwServiceGroupMemberOper#drs_total_conn}
  */
  readonly drsTotalConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_total_req DataThunderFwServiceGroupMemberOper#drs_total_req}
  */
  readonly drsTotalReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_total_req_succ DataThunderFwServiceGroupMemberOper#drs_total_req_succ}
  */
  readonly drsTotalReqSucc?: number;
}

export function dataThunderFwServiceGroupMemberOperOperDrsListStructToTerraform(struct?: DataThunderFwServiceGroupMemberOperOperDrsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drs_curr_conn: cdktf.numberToTerraform(struct!.drsCurrConn),
    drs_curr_req: cdktf.numberToTerraform(struct!.drsCurrReq),
    drs_frsp_time: cdktf.numberToTerraform(struct!.drsFrspTime),
    drs_fwd_bts: cdktf.numberToTerraform(struct!.drsFwdBts),
    drs_fwd_pkts: cdktf.numberToTerraform(struct!.drsFwdPkts),
    drs_hm_index: cdktf.numberToTerraform(struct!.drsHmIndex),
    drs_hm_key: cdktf.numberToTerraform(struct!.drsHmKey),
    drs_name: cdktf.stringToTerraform(struct!.drsName),
    drs_peak_conn: cdktf.numberToTerraform(struct!.drsPeakConn),
    drs_pers_conn: cdktf.numberToTerraform(struct!.drsPersConn),
    drs_port: cdktf.numberToTerraform(struct!.drsPort),
    drs_priority: cdktf.numberToTerraform(struct!.drsPriority),
    drs_rev_bts: cdktf.numberToTerraform(struct!.drsRevBts),
    drs_rev_pkts: cdktf.numberToTerraform(struct!.drsRevPkts),
    drs_rsp_time: cdktf.numberToTerraform(struct!.drsRspTime),
    drs_srsp_time: cdktf.numberToTerraform(struct!.drsSrspTime),
    drs_state: cdktf.stringToTerraform(struct!.drsState),
    drs_total_conn: cdktf.numberToTerraform(struct!.drsTotalConn),
    drs_total_req: cdktf.numberToTerraform(struct!.drsTotalReq),
    drs_total_req_succ: cdktf.numberToTerraform(struct!.drsTotalReqSucc),
  }
}


export function dataThunderFwServiceGroupMemberOperOperDrsListStructToHclTerraform(struct?: DataThunderFwServiceGroupMemberOperOperDrsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drs_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.drsCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_curr_req: {
      value: cdktf.numberToHclTerraform(struct!.drsCurrReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_frsp_time: {
      value: cdktf.numberToHclTerraform(struct!.drsFrspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_fwd_bts: {
      value: cdktf.numberToHclTerraform(struct!.drsFwdBts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_fwd_pkts: {
      value: cdktf.numberToHclTerraform(struct!.drsFwdPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_hm_index: {
      value: cdktf.numberToHclTerraform(struct!.drsHmIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_hm_key: {
      value: cdktf.numberToHclTerraform(struct!.drsHmKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_name: {
      value: cdktf.stringToHclTerraform(struct!.drsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_peak_conn: {
      value: cdktf.numberToHclTerraform(struct!.drsPeakConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_pers_conn: {
      value: cdktf.numberToHclTerraform(struct!.drsPersConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_port: {
      value: cdktf.numberToHclTerraform(struct!.drsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_priority: {
      value: cdktf.numberToHclTerraform(struct!.drsPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_rev_bts: {
      value: cdktf.numberToHclTerraform(struct!.drsRevBts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_rev_pkts: {
      value: cdktf.numberToHclTerraform(struct!.drsRevPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.drsRspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_srsp_time: {
      value: cdktf.numberToHclTerraform(struct!.drsSrspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_state: {
      value: cdktf.stringToHclTerraform(struct!.drsState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_total_conn: {
      value: cdktf.numberToHclTerraform(struct!.drsTotalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_total_req: {
      value: cdktf.numberToHclTerraform(struct!.drsTotalReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_total_req_succ: {
      value: cdktf.numberToHclTerraform(struct!.drsTotalReqSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwServiceGroupMemberOperOperDrsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwServiceGroupMemberOperOperDrsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drsCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsCurrConn = this._drsCurrConn;
    }
    if (this._drsCurrReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsCurrReq = this._drsCurrReq;
    }
    if (this._drsFrspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsFrspTime = this._drsFrspTime;
    }
    if (this._drsFwdBts !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsFwdBts = this._drsFwdBts;
    }
    if (this._drsFwdPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsFwdPkts = this._drsFwdPkts;
    }
    if (this._drsHmIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsHmIndex = this._drsHmIndex;
    }
    if (this._drsHmKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsHmKey = this._drsHmKey;
    }
    if (this._drsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsName = this._drsName;
    }
    if (this._drsPeakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPeakConn = this._drsPeakConn;
    }
    if (this._drsPersConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPersConn = this._drsPersConn;
    }
    if (this._drsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPort = this._drsPort;
    }
    if (this._drsPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPriority = this._drsPriority;
    }
    if (this._drsRevBts !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsRevBts = this._drsRevBts;
    }
    if (this._drsRevPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsRevPkts = this._drsRevPkts;
    }
    if (this._drsRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsRspTime = this._drsRspTime;
    }
    if (this._drsSrspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsSrspTime = this._drsSrspTime;
    }
    if (this._drsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsState = this._drsState;
    }
    if (this._drsTotalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotalConn = this._drsTotalConn;
    }
    if (this._drsTotalReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotalReq = this._drsTotalReq;
    }
    if (this._drsTotalReqSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotalReqSucc = this._drsTotalReqSucc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwServiceGroupMemberOperOperDrsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drsCurrConn = undefined;
      this._drsCurrReq = undefined;
      this._drsFrspTime = undefined;
      this._drsFwdBts = undefined;
      this._drsFwdPkts = undefined;
      this._drsHmIndex = undefined;
      this._drsHmKey = undefined;
      this._drsName = undefined;
      this._drsPeakConn = undefined;
      this._drsPersConn = undefined;
      this._drsPort = undefined;
      this._drsPriority = undefined;
      this._drsRevBts = undefined;
      this._drsRevPkts = undefined;
      this._drsRspTime = undefined;
      this._drsSrspTime = undefined;
      this._drsState = undefined;
      this._drsTotalConn = undefined;
      this._drsTotalReq = undefined;
      this._drsTotalReqSucc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drsCurrConn = value.drsCurrConn;
      this._drsCurrReq = value.drsCurrReq;
      this._drsFrspTime = value.drsFrspTime;
      this._drsFwdBts = value.drsFwdBts;
      this._drsFwdPkts = value.drsFwdPkts;
      this._drsHmIndex = value.drsHmIndex;
      this._drsHmKey = value.drsHmKey;
      this._drsName = value.drsName;
      this._drsPeakConn = value.drsPeakConn;
      this._drsPersConn = value.drsPersConn;
      this._drsPort = value.drsPort;
      this._drsPriority = value.drsPriority;
      this._drsRevBts = value.drsRevBts;
      this._drsRevPkts = value.drsRevPkts;
      this._drsRspTime = value.drsRspTime;
      this._drsSrspTime = value.drsSrspTime;
      this._drsState = value.drsState;
      this._drsTotalConn = value.drsTotalConn;
      this._drsTotalReq = value.drsTotalReq;
      this._drsTotalReqSucc = value.drsTotalReqSucc;
    }
  }

  // drs_curr_conn - computed: false, optional: true, required: false
  private _drsCurrConn?: number; 
  public get drsCurrConn() {
    return this.getNumberAttribute('drs_curr_conn');
  }
  public set drsCurrConn(value: number) {
    this._drsCurrConn = value;
  }
  public resetDrsCurrConn() {
    this._drsCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsCurrConnInput() {
    return this._drsCurrConn;
  }

  // drs_curr_req - computed: false, optional: true, required: false
  private _drsCurrReq?: number; 
  public get drsCurrReq() {
    return this.getNumberAttribute('drs_curr_req');
  }
  public set drsCurrReq(value: number) {
    this._drsCurrReq = value;
  }
  public resetDrsCurrReq() {
    this._drsCurrReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsCurrReqInput() {
    return this._drsCurrReq;
  }

  // drs_frsp_time - computed: false, optional: true, required: false
  private _drsFrspTime?: number; 
  public get drsFrspTime() {
    return this.getNumberAttribute('drs_frsp_time');
  }
  public set drsFrspTime(value: number) {
    this._drsFrspTime = value;
  }
  public resetDrsFrspTime() {
    this._drsFrspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsFrspTimeInput() {
    return this._drsFrspTime;
  }

  // drs_fwd_bts - computed: false, optional: true, required: false
  private _drsFwdBts?: number; 
  public get drsFwdBts() {
    return this.getNumberAttribute('drs_fwd_bts');
  }
  public set drsFwdBts(value: number) {
    this._drsFwdBts = value;
  }
  public resetDrsFwdBts() {
    this._drsFwdBts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsFwdBtsInput() {
    return this._drsFwdBts;
  }

  // drs_fwd_pkts - computed: false, optional: true, required: false
  private _drsFwdPkts?: number; 
  public get drsFwdPkts() {
    return this.getNumberAttribute('drs_fwd_pkts');
  }
  public set drsFwdPkts(value: number) {
    this._drsFwdPkts = value;
  }
  public resetDrsFwdPkts() {
    this._drsFwdPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsFwdPktsInput() {
    return this._drsFwdPkts;
  }

  // drs_hm_index - computed: false, optional: true, required: false
  private _drsHmIndex?: number; 
  public get drsHmIndex() {
    return this.getNumberAttribute('drs_hm_index');
  }
  public set drsHmIndex(value: number) {
    this._drsHmIndex = value;
  }
  public resetDrsHmIndex() {
    this._drsHmIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsHmIndexInput() {
    return this._drsHmIndex;
  }

  // drs_hm_key - computed: false, optional: true, required: false
  private _drsHmKey?: number; 
  public get drsHmKey() {
    return this.getNumberAttribute('drs_hm_key');
  }
  public set drsHmKey(value: number) {
    this._drsHmKey = value;
  }
  public resetDrsHmKey() {
    this._drsHmKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsHmKeyInput() {
    return this._drsHmKey;
  }

  // drs_name - computed: false, optional: true, required: false
  private _drsName?: string; 
  public get drsName() {
    return this.getStringAttribute('drs_name');
  }
  public set drsName(value: string) {
    this._drsName = value;
  }
  public resetDrsName() {
    this._drsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsNameInput() {
    return this._drsName;
  }

  // drs_peak_conn - computed: false, optional: true, required: false
  private _drsPeakConn?: number; 
  public get drsPeakConn() {
    return this.getNumberAttribute('drs_peak_conn');
  }
  public set drsPeakConn(value: number) {
    this._drsPeakConn = value;
  }
  public resetDrsPeakConn() {
    this._drsPeakConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPeakConnInput() {
    return this._drsPeakConn;
  }

  // drs_pers_conn - computed: false, optional: true, required: false
  private _drsPersConn?: number; 
  public get drsPersConn() {
    return this.getNumberAttribute('drs_pers_conn');
  }
  public set drsPersConn(value: number) {
    this._drsPersConn = value;
  }
  public resetDrsPersConn() {
    this._drsPersConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPersConnInput() {
    return this._drsPersConn;
  }

  // drs_port - computed: false, optional: true, required: false
  private _drsPort?: number; 
  public get drsPort() {
    return this.getNumberAttribute('drs_port');
  }
  public set drsPort(value: number) {
    this._drsPort = value;
  }
  public resetDrsPort() {
    this._drsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPortInput() {
    return this._drsPort;
  }

  // drs_priority - computed: false, optional: true, required: false
  private _drsPriority?: number; 
  public get drsPriority() {
    return this.getNumberAttribute('drs_priority');
  }
  public set drsPriority(value: number) {
    this._drsPriority = value;
  }
  public resetDrsPriority() {
    this._drsPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPriorityInput() {
    return this._drsPriority;
  }

  // drs_rev_bts - computed: false, optional: true, required: false
  private _drsRevBts?: number; 
  public get drsRevBts() {
    return this.getNumberAttribute('drs_rev_bts');
  }
  public set drsRevBts(value: number) {
    this._drsRevBts = value;
  }
  public resetDrsRevBts() {
    this._drsRevBts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsRevBtsInput() {
    return this._drsRevBts;
  }

  // drs_rev_pkts - computed: false, optional: true, required: false
  private _drsRevPkts?: number; 
  public get drsRevPkts() {
    return this.getNumberAttribute('drs_rev_pkts');
  }
  public set drsRevPkts(value: number) {
    this._drsRevPkts = value;
  }
  public resetDrsRevPkts() {
    this._drsRevPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsRevPktsInput() {
    return this._drsRevPkts;
  }

  // drs_rsp_time - computed: false, optional: true, required: false
  private _drsRspTime?: number; 
  public get drsRspTime() {
    return this.getNumberAttribute('drs_rsp_time');
  }
  public set drsRspTime(value: number) {
    this._drsRspTime = value;
  }
  public resetDrsRspTime() {
    this._drsRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsRspTimeInput() {
    return this._drsRspTime;
  }

  // drs_srsp_time - computed: false, optional: true, required: false
  private _drsSrspTime?: number; 
  public get drsSrspTime() {
    return this.getNumberAttribute('drs_srsp_time');
  }
  public set drsSrspTime(value: number) {
    this._drsSrspTime = value;
  }
  public resetDrsSrspTime() {
    this._drsSrspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsSrspTimeInput() {
    return this._drsSrspTime;
  }

  // drs_state - computed: false, optional: true, required: false
  private _drsState?: string; 
  public get drsState() {
    return this.getStringAttribute('drs_state');
  }
  public set drsState(value: string) {
    this._drsState = value;
  }
  public resetDrsState() {
    this._drsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsStateInput() {
    return this._drsState;
  }

  // drs_total_conn - computed: false, optional: true, required: false
  private _drsTotalConn?: number; 
  public get drsTotalConn() {
    return this.getNumberAttribute('drs_total_conn');
  }
  public set drsTotalConn(value: number) {
    this._drsTotalConn = value;
  }
  public resetDrsTotalConn() {
    this._drsTotalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotalConnInput() {
    return this._drsTotalConn;
  }

  // drs_total_req - computed: false, optional: true, required: false
  private _drsTotalReq?: number; 
  public get drsTotalReq() {
    return this.getNumberAttribute('drs_total_req');
  }
  public set drsTotalReq(value: number) {
    this._drsTotalReq = value;
  }
  public resetDrsTotalReq() {
    this._drsTotalReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotalReqInput() {
    return this._drsTotalReq;
  }

  // drs_total_req_succ - computed: false, optional: true, required: false
  private _drsTotalReqSucc?: number; 
  public get drsTotalReqSucc() {
    return this.getNumberAttribute('drs_total_req_succ');
  }
  public set drsTotalReqSucc(value: number) {
    this._drsTotalReqSucc = value;
  }
  public resetDrsTotalReqSucc() {
    this._drsTotalReqSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotalReqSuccInput() {
    return this._drsTotalReqSucc;
  }
}

export class DataThunderFwServiceGroupMemberOperOperDrsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwServiceGroupMemberOperOperDrsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwServiceGroupMemberOperOperDrsListStructOutputReference {
    return new DataThunderFwServiceGroupMemberOperOperDrsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwServiceGroupMemberOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#hm_index DataThunderFwServiceGroupMemberOper#hm_index}
  */
  readonly hmIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#hm_key DataThunderFwServiceGroupMemberOper#hm_key}
  */
  readonly hmKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#state DataThunderFwServiceGroupMemberOper#state}
  */
  readonly state?: string;
  /**
  * alt_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#alt_list DataThunderFwServiceGroupMemberOper#alt_list}
  */
  readonly altList?: DataThunderFwServiceGroupMemberOperOperAltListStruct[] | cdktf.IResolvable;
  /**
  * drs_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#drs_list DataThunderFwServiceGroupMemberOper#drs_list}
  */
  readonly drsList?: DataThunderFwServiceGroupMemberOperOperDrsListStruct[] | cdktf.IResolvable;
}

export function dataThunderFwServiceGroupMemberOperOperToTerraform(struct?: DataThunderFwServiceGroupMemberOperOperOutputReference | DataThunderFwServiceGroupMemberOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hm_index: cdktf.numberToTerraform(struct!.hmIndex),
    hm_key: cdktf.numberToTerraform(struct!.hmKey),
    state: cdktf.stringToTerraform(struct!.state),
    alt_list: cdktf.listMapper(dataThunderFwServiceGroupMemberOperOperAltListStructToTerraform, true)(struct!.altList),
    drs_list: cdktf.listMapper(dataThunderFwServiceGroupMemberOperOperDrsListStructToTerraform, true)(struct!.drsList),
  }
}


export function dataThunderFwServiceGroupMemberOperOperToHclTerraform(struct?: DataThunderFwServiceGroupMemberOperOperOutputReference | DataThunderFwServiceGroupMemberOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hm_index: {
      value: cdktf.numberToHclTerraform(struct!.hmIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hm_key: {
      value: cdktf.numberToHclTerraform(struct!.hmKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alt_list: {
      value: cdktf.listMapperHcl(dataThunderFwServiceGroupMemberOperOperAltListStructToHclTerraform, true)(struct!.altList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwServiceGroupMemberOperOperAltListStructList",
    },
    drs_list: {
      value: cdktf.listMapperHcl(dataThunderFwServiceGroupMemberOperOperDrsListStructToHclTerraform, true)(struct!.drsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwServiceGroupMemberOperOperDrsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwServiceGroupMemberOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwServiceGroupMemberOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmIndex = this._hmIndex;
    }
    if (this._hmKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmKey = this._hmKey;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._altList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.altList = this._altList?.internalValue;
    }
    if (this._drsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsList = this._drsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwServiceGroupMemberOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hmIndex = undefined;
      this._hmKey = undefined;
      this._state = undefined;
      this._altList.internalValue = undefined;
      this._drsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hmIndex = value.hmIndex;
      this._hmKey = value.hmKey;
      this._state = value.state;
      this._altList.internalValue = value.altList;
      this._drsList.internalValue = value.drsList;
    }
  }

  // hm_index - computed: false, optional: true, required: false
  private _hmIndex?: number; 
  public get hmIndex() {
    return this.getNumberAttribute('hm_index');
  }
  public set hmIndex(value: number) {
    this._hmIndex = value;
  }
  public resetHmIndex() {
    this._hmIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmIndexInput() {
    return this._hmIndex;
  }

  // hm_key - computed: false, optional: true, required: false
  private _hmKey?: number; 
  public get hmKey() {
    return this.getNumberAttribute('hm_key');
  }
  public set hmKey(value: number) {
    this._hmKey = value;
  }
  public resetHmKey() {
    this._hmKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmKeyInput() {
    return this._hmKey;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // alt_list - computed: false, optional: true, required: false
  private _altList = new DataThunderFwServiceGroupMemberOperOperAltListStructList(this, "alt_list", false);
  public get altList() {
    return this._altList;
  }
  public putAltList(value: DataThunderFwServiceGroupMemberOperOperAltListStruct[] | cdktf.IResolvable) {
    this._altList.internalValue = value;
  }
  public resetAltList() {
    this._altList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altListInput() {
    return this._altList.internalValue;
  }

  // drs_list - computed: false, optional: true, required: false
  private _drsList = new DataThunderFwServiceGroupMemberOperOperDrsListStructList(this, "drs_list", false);
  public get drsList() {
    return this._drsList;
  }
  public putDrsList(value: DataThunderFwServiceGroupMemberOperOperDrsListStruct[] | cdktf.IResolvable) {
    this._drsList.internalValue = value;
  }
  public resetDrsList() {
    this._drsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsListInput() {
    return this._drsList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper thunder_fw_service_group_member_oper}
*/
export class DataThunderFwServiceGroupMemberOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_service_group_member_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwServiceGroupMemberOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwServiceGroupMemberOper to import
  * @param importFromId The id of the existing DataThunderFwServiceGroupMemberOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwServiceGroupMemberOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_service_group_member_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_service_group_member_oper thunder_fw_service_group_member_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwServiceGroupMemberOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwServiceGroupMemberOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_service_group_member_oper',
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
    this._name = config.name;
    this._port = config.port;
    this._serviceGroupName = config.serviceGroupName;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFwServiceGroupMemberOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwServiceGroupMemberOperOper) {
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
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      oper: dataThunderFwServiceGroupMemberOperOperToTerraform(this._oper.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderFwServiceGroupMemberOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwServiceGroupMemberOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
