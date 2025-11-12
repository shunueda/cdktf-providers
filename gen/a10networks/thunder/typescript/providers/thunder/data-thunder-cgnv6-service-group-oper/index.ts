// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6ServiceGroupOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#id DataThunderCgnv6ServiceGroupOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CGNV6 Service Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#name DataThunderCgnv6ServiceGroupOper#name}
  */
  readonly name: string;
  /**
  * member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#member_list DataThunderCgnv6ServiceGroupOper#member_list}
  */
  readonly memberList?: DataThunderCgnv6ServiceGroupOperMemberListStruct[] | cdktf.IResolvable;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#oper DataThunderCgnv6ServiceGroupOper#oper}
  */
  readonly oper?: DataThunderCgnv6ServiceGroupOperOper;
}
export interface DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_curr_conn DataThunderCgnv6ServiceGroupOper#alt_curr_conn}
  */
  readonly altCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_fwd_pkts DataThunderCgnv6ServiceGroupOper#alt_fwd_pkts}
  */
  readonly altFwdPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_name DataThunderCgnv6ServiceGroupOper#alt_name}
  */
  readonly altName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_peak_conn DataThunderCgnv6ServiceGroupOper#alt_peak_conn}
  */
  readonly altPeakConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_port DataThunderCgnv6ServiceGroupOper#alt_port}
  */
  readonly altPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_rev_pkts DataThunderCgnv6ServiceGroupOper#alt_rev_pkts}
  */
  readonly altRevPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_state DataThunderCgnv6ServiceGroupOper#alt_state}
  */
  readonly altState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_total_conn DataThunderCgnv6ServiceGroupOper#alt_total_conn}
  */
  readonly altTotalConn?: number;
}

export function dataThunderCgnv6ServiceGroupOperMemberListOperAltListStructToTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct | cdktf.IResolvable): any {
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


export function dataThunderCgnv6ServiceGroupOperMemberListOperAltListStructToHclTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct | cdktf.IResolvable): any {
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

export class DataThunderCgnv6ServiceGroupOperMemberListOperAltListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderCgnv6ServiceGroupOperMemberListOperAltListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServiceGroupOperMemberListOperAltListStructOutputReference {
    return new DataThunderCgnv6ServiceGroupOperMemberListOperAltListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_curr_conn DataThunderCgnv6ServiceGroupOper#drs_curr_conn}
  */
  readonly drsCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_curr_req DataThunderCgnv6ServiceGroupOper#drs_curr_req}
  */
  readonly drsCurrReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_frsp_time DataThunderCgnv6ServiceGroupOper#drs_frsp_time}
  */
  readonly drsFrspTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_fwd_bts DataThunderCgnv6ServiceGroupOper#drs_fwd_bts}
  */
  readonly drsFwdBts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_fwd_pkts DataThunderCgnv6ServiceGroupOper#drs_fwd_pkts}
  */
  readonly drsFwdPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_hm_index DataThunderCgnv6ServiceGroupOper#drs_hm_index}
  */
  readonly drsHmIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_hm_key DataThunderCgnv6ServiceGroupOper#drs_hm_key}
  */
  readonly drsHmKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_name DataThunderCgnv6ServiceGroupOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_peak_conn DataThunderCgnv6ServiceGroupOper#drs_peak_conn}
  */
  readonly drsPeakConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_pers_conn DataThunderCgnv6ServiceGroupOper#drs_pers_conn}
  */
  readonly drsPersConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_port DataThunderCgnv6ServiceGroupOper#drs_port}
  */
  readonly drsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_priority DataThunderCgnv6ServiceGroupOper#drs_priority}
  */
  readonly drsPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_rev_bts DataThunderCgnv6ServiceGroupOper#drs_rev_bts}
  */
  readonly drsRevBts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_rev_pkts DataThunderCgnv6ServiceGroupOper#drs_rev_pkts}
  */
  readonly drsRevPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_rsp_time DataThunderCgnv6ServiceGroupOper#drs_rsp_time}
  */
  readonly drsRspTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_srsp_time DataThunderCgnv6ServiceGroupOper#drs_srsp_time}
  */
  readonly drsSrspTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_state DataThunderCgnv6ServiceGroupOper#drs_state}
  */
  readonly drsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_total_conn DataThunderCgnv6ServiceGroupOper#drs_total_conn}
  */
  readonly drsTotalConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_total_req DataThunderCgnv6ServiceGroupOper#drs_total_req}
  */
  readonly drsTotalReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_total_req_succ DataThunderCgnv6ServiceGroupOper#drs_total_req_succ}
  */
  readonly drsTotalReqSucc?: number;
}

export function dataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructToTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct | cdktf.IResolvable): any {
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


export function dataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructToHclTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct | cdktf.IResolvable): any {
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

export class DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructOutputReference {
    return new DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServiceGroupOperMemberListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#hm_index DataThunderCgnv6ServiceGroupOper#hm_index}
  */
  readonly hmIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#hm_key DataThunderCgnv6ServiceGroupOper#hm_key}
  */
  readonly hmKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#state DataThunderCgnv6ServiceGroupOper#state}
  */
  readonly state?: string;
  /**
  * alt_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#alt_list DataThunderCgnv6ServiceGroupOper#alt_list}
  */
  readonly altList?: DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct[] | cdktf.IResolvable;
  /**
  * drs_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#drs_list DataThunderCgnv6ServiceGroupOper#drs_list}
  */
  readonly drsList?: DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6ServiceGroupOperMemberListOperToTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListOperOutputReference | DataThunderCgnv6ServiceGroupOperMemberListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hm_index: cdktf.numberToTerraform(struct!.hmIndex),
    hm_key: cdktf.numberToTerraform(struct!.hmKey),
    state: cdktf.stringToTerraform(struct!.state),
    alt_list: cdktf.listMapper(dataThunderCgnv6ServiceGroupOperMemberListOperAltListStructToTerraform, true)(struct!.altList),
    drs_list: cdktf.listMapper(dataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructToTerraform, true)(struct!.drsList),
  }
}


export function dataThunderCgnv6ServiceGroupOperMemberListOperToHclTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListOperOutputReference | DataThunderCgnv6ServiceGroupOperMemberListOper): any {
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
      value: cdktf.listMapperHcl(dataThunderCgnv6ServiceGroupOperMemberListOperAltListStructToHclTerraform, true)(struct!.altList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServiceGroupOperMemberListOperAltListStructList",
    },
    drs_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructToHclTerraform, true)(struct!.drsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServiceGroupOperMemberListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ServiceGroupOperMemberListOper | undefined {
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

  public set internalValue(value: DataThunderCgnv6ServiceGroupOperMemberListOper | undefined) {
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
  private _altList = new DataThunderCgnv6ServiceGroupOperMemberListOperAltListStructList(this, "alt_list", false);
  public get altList() {
    return this._altList;
  }
  public putAltList(value: DataThunderCgnv6ServiceGroupOperMemberListOperAltListStruct[] | cdktf.IResolvable) {
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
  private _drsList = new DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStructList(this, "drs_list", false);
  public get drsList() {
    return this._drsList;
  }
  public putDrsList(value: DataThunderCgnv6ServiceGroupOperMemberListOperDrsListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderCgnv6ServiceGroupOperMemberListStruct {
  /**
  * Member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#name DataThunderCgnv6ServiceGroupOper#name}
  */
  readonly name: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#port DataThunderCgnv6ServiceGroupOper#port}
  */
  readonly port: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#oper DataThunderCgnv6ServiceGroupOper#oper}
  */
  readonly oper?: DataThunderCgnv6ServiceGroupOperMemberListOper;
}

export function dataThunderCgnv6ServiceGroupOperMemberListStructToTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    oper: dataThunderCgnv6ServiceGroupOperMemberListOperToTerraform(struct!.oper),
  }
}


export function dataThunderCgnv6ServiceGroupOperMemberListStructToHclTerraform(struct?: DataThunderCgnv6ServiceGroupOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oper: {
      value: dataThunderCgnv6ServiceGroupOperMemberListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServiceGroupOperMemberListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServiceGroupOperMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServiceGroupOperMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServiceGroupOperMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._oper.internalValue = value.oper;
    }
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6ServiceGroupOperMemberListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6ServiceGroupOperMemberListOper) {
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

export class DataThunderCgnv6ServiceGroupOperMemberListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServiceGroupOperMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServiceGroupOperMemberListStructOutputReference {
    return new DataThunderCgnv6ServiceGroupOperMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServiceGroupOperOperSgmListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#sgm_name DataThunderCgnv6ServiceGroupOper#sgm_name}
  */
  readonly sgmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#sgm_port DataThunderCgnv6ServiceGroupOper#sgm_port}
  */
  readonly sgmPort?: number;
}

export function dataThunderCgnv6ServiceGroupOperOperSgmListStructToTerraform(struct?: DataThunderCgnv6ServiceGroupOperOperSgmListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sgm_name: cdktf.stringToTerraform(struct!.sgmName),
    sgm_port: cdktf.numberToTerraform(struct!.sgmPort),
  }
}


export function dataThunderCgnv6ServiceGroupOperOperSgmListStructToHclTerraform(struct?: DataThunderCgnv6ServiceGroupOperOperSgmListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sgm_name: {
      value: cdktf.stringToHclTerraform(struct!.sgmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sgm_port: {
      value: cdktf.numberToHclTerraform(struct!.sgmPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServiceGroupOperOperSgmListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServiceGroupOperOperSgmListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sgmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgmName = this._sgmName;
    }
    if (this._sgmPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgmPort = this._sgmPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServiceGroupOperOperSgmListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sgmName = undefined;
      this._sgmPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sgmName = value.sgmName;
      this._sgmPort = value.sgmPort;
    }
  }

  // sgm_name - computed: false, optional: true, required: false
  private _sgmName?: string; 
  public get sgmName() {
    return this.getStringAttribute('sgm_name');
  }
  public set sgmName(value: string) {
    this._sgmName = value;
  }
  public resetSgmName() {
    this._sgmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgmNameInput() {
    return this._sgmName;
  }

  // sgm_port - computed: false, optional: true, required: false
  private _sgmPort?: number; 
  public get sgmPort() {
    return this.getNumberAttribute('sgm_port');
  }
  public set sgmPort(value: number) {
    this._sgmPort = value;
  }
  public resetSgmPort() {
    this._sgmPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgmPortInput() {
    return this._sgmPort;
  }
}

export class DataThunderCgnv6ServiceGroupOperOperSgmListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServiceGroupOperOperSgmListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServiceGroupOperOperSgmListStructOutputReference {
    return new DataThunderCgnv6ServiceGroupOperOperSgmListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServiceGroupOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#filter DataThunderCgnv6ServiceGroupOper#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#hm_dsr_enable_all_vip DataThunderCgnv6ServiceGroupOper#hm_dsr_enable_all_vip}
  */
  readonly hmDsrEnableAllVip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#pri_affinity_priority DataThunderCgnv6ServiceGroupOper#pri_affinity_priority}
  */
  readonly priAffinityPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#servers_disable DataThunderCgnv6ServiceGroupOper#servers_disable}
  */
  readonly serversDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#servers_down DataThunderCgnv6ServiceGroupOper#servers_down}
  */
  readonly serversDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#servers_total DataThunderCgnv6ServiceGroupOper#servers_total}
  */
  readonly serversTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#servers_up DataThunderCgnv6ServiceGroupOper#servers_up}
  */
  readonly serversUp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#state DataThunderCgnv6ServiceGroupOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#stateless_current_rate DataThunderCgnv6ServiceGroupOper#stateless_current_rate}
  */
  readonly statelessCurrentRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#stateless_current_usage DataThunderCgnv6ServiceGroupOper#stateless_current_usage}
  */
  readonly statelessCurrentUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#stateless_state DataThunderCgnv6ServiceGroupOper#stateless_state}
  */
  readonly statelessState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#stateless_type DataThunderCgnv6ServiceGroupOper#stateless_type}
  */
  readonly statelessType?: number;
  /**
  * sgm_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#sgm_list DataThunderCgnv6ServiceGroupOper#sgm_list}
  */
  readonly sgmList?: DataThunderCgnv6ServiceGroupOperOperSgmListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6ServiceGroupOperOperToTerraform(struct?: DataThunderCgnv6ServiceGroupOperOperOutputReference | DataThunderCgnv6ServiceGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    hm_dsr_enable_all_vip: cdktf.numberToTerraform(struct!.hmDsrEnableAllVip),
    pri_affinity_priority: cdktf.numberToTerraform(struct!.priAffinityPriority),
    servers_disable: cdktf.numberToTerraform(struct!.serversDisable),
    servers_down: cdktf.numberToTerraform(struct!.serversDown),
    servers_total: cdktf.numberToTerraform(struct!.serversTotal),
    servers_up: cdktf.numberToTerraform(struct!.serversUp),
    state: cdktf.stringToTerraform(struct!.state),
    stateless_current_rate: cdktf.numberToTerraform(struct!.statelessCurrentRate),
    stateless_current_usage: cdktf.numberToTerraform(struct!.statelessCurrentUsage),
    stateless_state: cdktf.numberToTerraform(struct!.statelessState),
    stateless_type: cdktf.numberToTerraform(struct!.statelessType),
    sgm_list: cdktf.listMapper(dataThunderCgnv6ServiceGroupOperOperSgmListStructToTerraform, true)(struct!.sgmList),
  }
}


export function dataThunderCgnv6ServiceGroupOperOperToHclTerraform(struct?: DataThunderCgnv6ServiceGroupOperOperOutputReference | DataThunderCgnv6ServiceGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hm_dsr_enable_all_vip: {
      value: cdktf.numberToHclTerraform(struct!.hmDsrEnableAllVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pri_affinity_priority: {
      value: cdktf.numberToHclTerraform(struct!.priAffinityPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servers_disable: {
      value: cdktf.numberToHclTerraform(struct!.serversDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servers_down: {
      value: cdktf.numberToHclTerraform(struct!.serversDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servers_total: {
      value: cdktf.numberToHclTerraform(struct!.serversTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servers_up: {
      value: cdktf.numberToHclTerraform(struct!.serversUp),
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
    stateless_current_rate: {
      value: cdktf.numberToHclTerraform(struct!.statelessCurrentRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateless_current_usage: {
      value: cdktf.numberToHclTerraform(struct!.statelessCurrentUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateless_state: {
      value: cdktf.numberToHclTerraform(struct!.statelessState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateless_type: {
      value: cdktf.numberToHclTerraform(struct!.statelessType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sgm_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServiceGroupOperOperSgmListStructToHclTerraform, true)(struct!.sgmList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServiceGroupOperOperSgmListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServiceGroupOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ServiceGroupOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._hmDsrEnableAllVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmDsrEnableAllVip = this._hmDsrEnableAllVip;
    }
    if (this._priAffinityPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priAffinityPriority = this._priAffinityPriority;
    }
    if (this._serversDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversDisable = this._serversDisable;
    }
    if (this._serversDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversDown = this._serversDown;
    }
    if (this._serversTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversTotal = this._serversTotal;
    }
    if (this._serversUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversUp = this._serversUp;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._statelessCurrentRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessCurrentRate = this._statelessCurrentRate;
    }
    if (this._statelessCurrentUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessCurrentUsage = this._statelessCurrentUsage;
    }
    if (this._statelessState !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessState = this._statelessState;
    }
    if (this._statelessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessType = this._statelessType;
    }
    if (this._sgmList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgmList = this._sgmList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServiceGroupOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._hmDsrEnableAllVip = undefined;
      this._priAffinityPriority = undefined;
      this._serversDisable = undefined;
      this._serversDown = undefined;
      this._serversTotal = undefined;
      this._serversUp = undefined;
      this._state = undefined;
      this._statelessCurrentRate = undefined;
      this._statelessCurrentUsage = undefined;
      this._statelessState = undefined;
      this._statelessType = undefined;
      this._sgmList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._hmDsrEnableAllVip = value.hmDsrEnableAllVip;
      this._priAffinityPriority = value.priAffinityPriority;
      this._serversDisable = value.serversDisable;
      this._serversDown = value.serversDown;
      this._serversTotal = value.serversTotal;
      this._serversUp = value.serversUp;
      this._state = value.state;
      this._statelessCurrentRate = value.statelessCurrentRate;
      this._statelessCurrentUsage = value.statelessCurrentUsage;
      this._statelessState = value.statelessState;
      this._statelessType = value.statelessType;
      this._sgmList.internalValue = value.sgmList;
    }
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

  // hm_dsr_enable_all_vip - computed: false, optional: true, required: false
  private _hmDsrEnableAllVip?: number; 
  public get hmDsrEnableAllVip() {
    return this.getNumberAttribute('hm_dsr_enable_all_vip');
  }
  public set hmDsrEnableAllVip(value: number) {
    this._hmDsrEnableAllVip = value;
  }
  public resetHmDsrEnableAllVip() {
    this._hmDsrEnableAllVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmDsrEnableAllVipInput() {
    return this._hmDsrEnableAllVip;
  }

  // pri_affinity_priority - computed: false, optional: true, required: false
  private _priAffinityPriority?: number; 
  public get priAffinityPriority() {
    return this.getNumberAttribute('pri_affinity_priority');
  }
  public set priAffinityPriority(value: number) {
    this._priAffinityPriority = value;
  }
  public resetPriAffinityPriority() {
    this._priAffinityPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priAffinityPriorityInput() {
    return this._priAffinityPriority;
  }

  // servers_disable - computed: false, optional: true, required: false
  private _serversDisable?: number; 
  public get serversDisable() {
    return this.getNumberAttribute('servers_disable');
  }
  public set serversDisable(value: number) {
    this._serversDisable = value;
  }
  public resetServersDisable() {
    this._serversDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversDisableInput() {
    return this._serversDisable;
  }

  // servers_down - computed: false, optional: true, required: false
  private _serversDown?: number; 
  public get serversDown() {
    return this.getNumberAttribute('servers_down');
  }
  public set serversDown(value: number) {
    this._serversDown = value;
  }
  public resetServersDown() {
    this._serversDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversDownInput() {
    return this._serversDown;
  }

  // servers_total - computed: false, optional: true, required: false
  private _serversTotal?: number; 
  public get serversTotal() {
    return this.getNumberAttribute('servers_total');
  }
  public set serversTotal(value: number) {
    this._serversTotal = value;
  }
  public resetServersTotal() {
    this._serversTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversTotalInput() {
    return this._serversTotal;
  }

  // servers_up - computed: false, optional: true, required: false
  private _serversUp?: number; 
  public get serversUp() {
    return this.getNumberAttribute('servers_up');
  }
  public set serversUp(value: number) {
    this._serversUp = value;
  }
  public resetServersUp() {
    this._serversUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversUpInput() {
    return this._serversUp;
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

  // stateless_current_rate - computed: false, optional: true, required: false
  private _statelessCurrentRate?: number; 
  public get statelessCurrentRate() {
    return this.getNumberAttribute('stateless_current_rate');
  }
  public set statelessCurrentRate(value: number) {
    this._statelessCurrentRate = value;
  }
  public resetStatelessCurrentRate() {
    this._statelessCurrentRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessCurrentRateInput() {
    return this._statelessCurrentRate;
  }

  // stateless_current_usage - computed: false, optional: true, required: false
  private _statelessCurrentUsage?: number; 
  public get statelessCurrentUsage() {
    return this.getNumberAttribute('stateless_current_usage');
  }
  public set statelessCurrentUsage(value: number) {
    this._statelessCurrentUsage = value;
  }
  public resetStatelessCurrentUsage() {
    this._statelessCurrentUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessCurrentUsageInput() {
    return this._statelessCurrentUsage;
  }

  // stateless_state - computed: false, optional: true, required: false
  private _statelessState?: number; 
  public get statelessState() {
    return this.getNumberAttribute('stateless_state');
  }
  public set statelessState(value: number) {
    this._statelessState = value;
  }
  public resetStatelessState() {
    this._statelessState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessStateInput() {
    return this._statelessState;
  }

  // stateless_type - computed: false, optional: true, required: false
  private _statelessType?: number; 
  public get statelessType() {
    return this.getNumberAttribute('stateless_type');
  }
  public set statelessType(value: number) {
    this._statelessType = value;
  }
  public resetStatelessType() {
    this._statelessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessTypeInput() {
    return this._statelessType;
  }

  // sgm_list - computed: false, optional: true, required: false
  private _sgmList = new DataThunderCgnv6ServiceGroupOperOperSgmListStructList(this, "sgm_list", false);
  public get sgmList() {
    return this._sgmList;
  }
  public putSgmList(value: DataThunderCgnv6ServiceGroupOperOperSgmListStruct[] | cdktf.IResolvable) {
    this._sgmList.internalValue = value;
  }
  public resetSgmList() {
    this._sgmList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgmListInput() {
    return this._sgmList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper thunder_cgnv6_service_group_oper}
*/
export class DataThunderCgnv6ServiceGroupOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_service_group_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6ServiceGroupOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6ServiceGroupOper to import
  * @param importFromId The id of the existing DataThunderCgnv6ServiceGroupOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6ServiceGroupOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_service_group_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_service_group_oper thunder_cgnv6_service_group_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6ServiceGroupOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6ServiceGroupOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_service_group_oper',
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
    this._name = config.name;
    this._memberList.internalValue = config.memberList;
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

  // member_list - computed: false, optional: true, required: false
  private _memberList = new DataThunderCgnv6ServiceGroupOperMemberListStructList(this, "member_list", false);
  public get memberList() {
    return this._memberList;
  }
  public putMemberList(value: DataThunderCgnv6ServiceGroupOperMemberListStruct[] | cdktf.IResolvable) {
    this._memberList.internalValue = value;
  }
  public resetMemberList() {
    this._memberList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberListInput() {
    return this._memberList.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6ServiceGroupOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6ServiceGroupOperOper) {
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
      member_list: cdktf.listMapper(dataThunderCgnv6ServiceGroupOperMemberListStructToTerraform, true)(this._memberList.internalValue),
      oper: dataThunderCgnv6ServiceGroupOperOperToTerraform(this._oper.internalValue),
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
      member_list: {
        value: cdktf.listMapperHcl(dataThunderCgnv6ServiceGroupOperMemberListStructToHclTerraform, true)(this._memberList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ServiceGroupOperMemberListStructList",
      },
      oper: {
        value: dataThunderCgnv6ServiceGroupOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ServiceGroupOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
