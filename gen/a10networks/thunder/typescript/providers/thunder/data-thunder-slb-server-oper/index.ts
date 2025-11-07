// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#id DataThunderSlbServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#name DataThunderSlbServerOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#oper DataThunderSlbServerOper#oper}
  */
  readonly oper?: DataThunderSlbServerOperOper;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#port_list DataThunderSlbServerOper#port_list}
  */
  readonly portList?: DataThunderSlbServerOperPortListStruct[] | cdktf.IResolvable;
}
export interface DataThunderSlbServerOperOperDrsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_conn_rate_unit DataThunderSlbServerOper#drs_conn_rate_unit}
  */
  readonly drsConnRateUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_creation_type DataThunderSlbServerOper#drs_creation_type}
  */
  readonly drsCreationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_curr_conn DataThunderSlbServerOper#drs_curr_conn}
  */
  readonly drsCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_curr_conn_rate DataThunderSlbServerOper#drs_curr_conn_rate}
  */
  readonly drsCurrConnRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_curr_observe_rate DataThunderSlbServerOper#drs_curr_observe_rate}
  */
  readonly drsCurrObserveRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_curr_req DataThunderSlbServerOper#drs_curr_req}
  */
  readonly drsCurrReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_disable DataThunderSlbServerOper#drs_disable}
  */
  readonly drsDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_dns_update_time DataThunderSlbServerOper#drs_dns_update_time}
  */
  readonly drsDnsUpdateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_host DataThunderSlbServerOper#drs_host}
  */
  readonly drsHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_is_autocreate DataThunderSlbServerOper#drs_is_autocreate}
  */
  readonly drsIsAutocreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_name DataThunderSlbServerOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_peak_conn DataThunderSlbServerOper#drs_peak_conn}
  */
  readonly drsPeakConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_server_ipv6_addr DataThunderSlbServerOper#drs_server_ipv6_addr}
  */
  readonly drsServerIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_server_ttl DataThunderSlbServerOper#drs_server_ttl}
  */
  readonly drsServerTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_slow_start_conn_limit DataThunderSlbServerOper#drs_slow_start_conn_limit}
  */
  readonly drsSlowStartConnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_srv_gateway_arp DataThunderSlbServerOper#drs_srv_gateway_arp}
  */
  readonly drsSrvGatewayArp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_state DataThunderSlbServerOper#drs_state}
  */
  readonly drsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_tot_conn DataThunderSlbServerOper#drs_tot_conn}
  */
  readonly drsTotConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_tot_fwd_bytes DataThunderSlbServerOper#drs_tot_fwd_bytes}
  */
  readonly drsTotFwdBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_tot_fwd_pkts DataThunderSlbServerOper#drs_tot_fwd_pkts}
  */
  readonly drsTotFwdPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_tot_req DataThunderSlbServerOper#drs_tot_req}
  */
  readonly drsTotReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_tot_req_suc DataThunderSlbServerOper#drs_tot_req_suc}
  */
  readonly drsTotReqSuc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_tot_rev_bytes DataThunderSlbServerOper#drs_tot_rev_bytes}
  */
  readonly drsTotRevBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_tot_rev_pkts DataThunderSlbServerOper#drs_tot_rev_pkts}
  */
  readonly drsTotRevPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_weight DataThunderSlbServerOper#drs_weight}
  */
  readonly drsWeight?: number;
}

export function dataThunderSlbServerOperOperDrsListStructToTerraform(struct?: DataThunderSlbServerOperOperDrsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drs_conn_rate_unit: cdktf.stringToTerraform(struct!.drsConnRateUnit),
    drs_creation_type: cdktf.stringToTerraform(struct!.drsCreationType),
    drs_curr_conn: cdktf.numberToTerraform(struct!.drsCurrConn),
    drs_curr_conn_rate: cdktf.numberToTerraform(struct!.drsCurrConnRate),
    drs_curr_observe_rate: cdktf.numberToTerraform(struct!.drsCurrObserveRate),
    drs_curr_req: cdktf.numberToTerraform(struct!.drsCurrReq),
    drs_disable: cdktf.numberToTerraform(struct!.drsDisable),
    drs_dns_update_time: cdktf.stringToTerraform(struct!.drsDnsUpdateTime),
    drs_host: cdktf.stringToTerraform(struct!.drsHost),
    drs_is_autocreate: cdktf.numberToTerraform(struct!.drsIsAutocreate),
    drs_name: cdktf.stringToTerraform(struct!.drsName),
    drs_peak_conn: cdktf.numberToTerraform(struct!.drsPeakConn),
    drs_server_ipv6_addr: cdktf.stringToTerraform(struct!.drsServerIpv6Addr),
    drs_server_ttl: cdktf.numberToTerraform(struct!.drsServerTtl),
    drs_slow_start_conn_limit: cdktf.numberToTerraform(struct!.drsSlowStartConnLimit),
    drs_srv_gateway_arp: cdktf.stringToTerraform(struct!.drsSrvGatewayArp),
    drs_state: cdktf.stringToTerraform(struct!.drsState),
    drs_tot_conn: cdktf.numberToTerraform(struct!.drsTotConn),
    drs_tot_fwd_bytes: cdktf.numberToTerraform(struct!.drsTotFwdBytes),
    drs_tot_fwd_pkts: cdktf.numberToTerraform(struct!.drsTotFwdPkts),
    drs_tot_req: cdktf.numberToTerraform(struct!.drsTotReq),
    drs_tot_req_suc: cdktf.numberToTerraform(struct!.drsTotReqSuc),
    drs_tot_rev_bytes: cdktf.numberToTerraform(struct!.drsTotRevBytes),
    drs_tot_rev_pkts: cdktf.numberToTerraform(struct!.drsTotRevPkts),
    drs_weight: cdktf.numberToTerraform(struct!.drsWeight),
  }
}


export function dataThunderSlbServerOperOperDrsListStructToHclTerraform(struct?: DataThunderSlbServerOperOperDrsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drs_conn_rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.drsConnRateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_creation_type: {
      value: cdktf.stringToHclTerraform(struct!.drsCreationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.drsCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_curr_conn_rate: {
      value: cdktf.numberToHclTerraform(struct!.drsCurrConnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_curr_observe_rate: {
      value: cdktf.numberToHclTerraform(struct!.drsCurrObserveRate),
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
    drs_disable: {
      value: cdktf.numberToHclTerraform(struct!.drsDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_dns_update_time: {
      value: cdktf.stringToHclTerraform(struct!.drsDnsUpdateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_host: {
      value: cdktf.stringToHclTerraform(struct!.drsHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_is_autocreate: {
      value: cdktf.numberToHclTerraform(struct!.drsIsAutocreate),
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
    drs_server_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.drsServerIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_server_ttl: {
      value: cdktf.numberToHclTerraform(struct!.drsServerTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_slow_start_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.drsSlowStartConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_srv_gateway_arp: {
      value: cdktf.stringToHclTerraform(struct!.drsSrvGatewayArp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_state: {
      value: cdktf.stringToHclTerraform(struct!.drsState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_tot_conn: {
      value: cdktf.numberToHclTerraform(struct!.drsTotConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_tot_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.drsTotFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_tot_fwd_pkts: {
      value: cdktf.numberToHclTerraform(struct!.drsTotFwdPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_tot_req: {
      value: cdktf.numberToHclTerraform(struct!.drsTotReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_tot_req_suc: {
      value: cdktf.numberToHclTerraform(struct!.drsTotReqSuc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_tot_rev_bytes: {
      value: cdktf.numberToHclTerraform(struct!.drsTotRevBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_tot_rev_pkts: {
      value: cdktf.numberToHclTerraform(struct!.drsTotRevPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_weight: {
      value: cdktf.numberToHclTerraform(struct!.drsWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperOperDrsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperOperDrsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drsConnRateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsConnRateUnit = this._drsConnRateUnit;
    }
    if (this._drsCreationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsCreationType = this._drsCreationType;
    }
    if (this._drsCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsCurrConn = this._drsCurrConn;
    }
    if (this._drsCurrConnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsCurrConnRate = this._drsCurrConnRate;
    }
    if (this._drsCurrObserveRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsCurrObserveRate = this._drsCurrObserveRate;
    }
    if (this._drsCurrReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsCurrReq = this._drsCurrReq;
    }
    if (this._drsDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsDisable = this._drsDisable;
    }
    if (this._drsDnsUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsDnsUpdateTime = this._drsDnsUpdateTime;
    }
    if (this._drsHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsHost = this._drsHost;
    }
    if (this._drsIsAutocreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsIsAutocreate = this._drsIsAutocreate;
    }
    if (this._drsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsName = this._drsName;
    }
    if (this._drsPeakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPeakConn = this._drsPeakConn;
    }
    if (this._drsServerIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsServerIpv6Addr = this._drsServerIpv6Addr;
    }
    if (this._drsServerTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsServerTtl = this._drsServerTtl;
    }
    if (this._drsSlowStartConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsSlowStartConnLimit = this._drsSlowStartConnLimit;
    }
    if (this._drsSrvGatewayArp !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsSrvGatewayArp = this._drsSrvGatewayArp;
    }
    if (this._drsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsState = this._drsState;
    }
    if (this._drsTotConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotConn = this._drsTotConn;
    }
    if (this._drsTotFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotFwdBytes = this._drsTotFwdBytes;
    }
    if (this._drsTotFwdPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotFwdPkts = this._drsTotFwdPkts;
    }
    if (this._drsTotReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotReq = this._drsTotReq;
    }
    if (this._drsTotReqSuc !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotReqSuc = this._drsTotReqSuc;
    }
    if (this._drsTotRevBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotRevBytes = this._drsTotRevBytes;
    }
    if (this._drsTotRevPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsTotRevPkts = this._drsTotRevPkts;
    }
    if (this._drsWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsWeight = this._drsWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperOperDrsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drsConnRateUnit = undefined;
      this._drsCreationType = undefined;
      this._drsCurrConn = undefined;
      this._drsCurrConnRate = undefined;
      this._drsCurrObserveRate = undefined;
      this._drsCurrReq = undefined;
      this._drsDisable = undefined;
      this._drsDnsUpdateTime = undefined;
      this._drsHost = undefined;
      this._drsIsAutocreate = undefined;
      this._drsName = undefined;
      this._drsPeakConn = undefined;
      this._drsServerIpv6Addr = undefined;
      this._drsServerTtl = undefined;
      this._drsSlowStartConnLimit = undefined;
      this._drsSrvGatewayArp = undefined;
      this._drsState = undefined;
      this._drsTotConn = undefined;
      this._drsTotFwdBytes = undefined;
      this._drsTotFwdPkts = undefined;
      this._drsTotReq = undefined;
      this._drsTotReqSuc = undefined;
      this._drsTotRevBytes = undefined;
      this._drsTotRevPkts = undefined;
      this._drsWeight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drsConnRateUnit = value.drsConnRateUnit;
      this._drsCreationType = value.drsCreationType;
      this._drsCurrConn = value.drsCurrConn;
      this._drsCurrConnRate = value.drsCurrConnRate;
      this._drsCurrObserveRate = value.drsCurrObserveRate;
      this._drsCurrReq = value.drsCurrReq;
      this._drsDisable = value.drsDisable;
      this._drsDnsUpdateTime = value.drsDnsUpdateTime;
      this._drsHost = value.drsHost;
      this._drsIsAutocreate = value.drsIsAutocreate;
      this._drsName = value.drsName;
      this._drsPeakConn = value.drsPeakConn;
      this._drsServerIpv6Addr = value.drsServerIpv6Addr;
      this._drsServerTtl = value.drsServerTtl;
      this._drsSlowStartConnLimit = value.drsSlowStartConnLimit;
      this._drsSrvGatewayArp = value.drsSrvGatewayArp;
      this._drsState = value.drsState;
      this._drsTotConn = value.drsTotConn;
      this._drsTotFwdBytes = value.drsTotFwdBytes;
      this._drsTotFwdPkts = value.drsTotFwdPkts;
      this._drsTotReq = value.drsTotReq;
      this._drsTotReqSuc = value.drsTotReqSuc;
      this._drsTotRevBytes = value.drsTotRevBytes;
      this._drsTotRevPkts = value.drsTotRevPkts;
      this._drsWeight = value.drsWeight;
    }
  }

  // drs_conn_rate_unit - computed: false, optional: true, required: false
  private _drsConnRateUnit?: string; 
  public get drsConnRateUnit() {
    return this.getStringAttribute('drs_conn_rate_unit');
  }
  public set drsConnRateUnit(value: string) {
    this._drsConnRateUnit = value;
  }
  public resetDrsConnRateUnit() {
    this._drsConnRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsConnRateUnitInput() {
    return this._drsConnRateUnit;
  }

  // drs_creation_type - computed: false, optional: true, required: false
  private _drsCreationType?: string; 
  public get drsCreationType() {
    return this.getStringAttribute('drs_creation_type');
  }
  public set drsCreationType(value: string) {
    this._drsCreationType = value;
  }
  public resetDrsCreationType() {
    this._drsCreationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsCreationTypeInput() {
    return this._drsCreationType;
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

  // drs_curr_conn_rate - computed: false, optional: true, required: false
  private _drsCurrConnRate?: number; 
  public get drsCurrConnRate() {
    return this.getNumberAttribute('drs_curr_conn_rate');
  }
  public set drsCurrConnRate(value: number) {
    this._drsCurrConnRate = value;
  }
  public resetDrsCurrConnRate() {
    this._drsCurrConnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsCurrConnRateInput() {
    return this._drsCurrConnRate;
  }

  // drs_curr_observe_rate - computed: false, optional: true, required: false
  private _drsCurrObserveRate?: number; 
  public get drsCurrObserveRate() {
    return this.getNumberAttribute('drs_curr_observe_rate');
  }
  public set drsCurrObserveRate(value: number) {
    this._drsCurrObserveRate = value;
  }
  public resetDrsCurrObserveRate() {
    this._drsCurrObserveRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsCurrObserveRateInput() {
    return this._drsCurrObserveRate;
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

  // drs_disable - computed: false, optional: true, required: false
  private _drsDisable?: number; 
  public get drsDisable() {
    return this.getNumberAttribute('drs_disable');
  }
  public set drsDisable(value: number) {
    this._drsDisable = value;
  }
  public resetDrsDisable() {
    this._drsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsDisableInput() {
    return this._drsDisable;
  }

  // drs_dns_update_time - computed: false, optional: true, required: false
  private _drsDnsUpdateTime?: string; 
  public get drsDnsUpdateTime() {
    return this.getStringAttribute('drs_dns_update_time');
  }
  public set drsDnsUpdateTime(value: string) {
    this._drsDnsUpdateTime = value;
  }
  public resetDrsDnsUpdateTime() {
    this._drsDnsUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsDnsUpdateTimeInput() {
    return this._drsDnsUpdateTime;
  }

  // drs_host - computed: false, optional: true, required: false
  private _drsHost?: string; 
  public get drsHost() {
    return this.getStringAttribute('drs_host');
  }
  public set drsHost(value: string) {
    this._drsHost = value;
  }
  public resetDrsHost() {
    this._drsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsHostInput() {
    return this._drsHost;
  }

  // drs_is_autocreate - computed: false, optional: true, required: false
  private _drsIsAutocreate?: number; 
  public get drsIsAutocreate() {
    return this.getNumberAttribute('drs_is_autocreate');
  }
  public set drsIsAutocreate(value: number) {
    this._drsIsAutocreate = value;
  }
  public resetDrsIsAutocreate() {
    this._drsIsAutocreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsIsAutocreateInput() {
    return this._drsIsAutocreate;
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

  // drs_server_ipv6_addr - computed: false, optional: true, required: false
  private _drsServerIpv6Addr?: string; 
  public get drsServerIpv6Addr() {
    return this.getStringAttribute('drs_server_ipv6_addr');
  }
  public set drsServerIpv6Addr(value: string) {
    this._drsServerIpv6Addr = value;
  }
  public resetDrsServerIpv6Addr() {
    this._drsServerIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsServerIpv6AddrInput() {
    return this._drsServerIpv6Addr;
  }

  // drs_server_ttl - computed: false, optional: true, required: false
  private _drsServerTtl?: number; 
  public get drsServerTtl() {
    return this.getNumberAttribute('drs_server_ttl');
  }
  public set drsServerTtl(value: number) {
    this._drsServerTtl = value;
  }
  public resetDrsServerTtl() {
    this._drsServerTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsServerTtlInput() {
    return this._drsServerTtl;
  }

  // drs_slow_start_conn_limit - computed: false, optional: true, required: false
  private _drsSlowStartConnLimit?: number; 
  public get drsSlowStartConnLimit() {
    return this.getNumberAttribute('drs_slow_start_conn_limit');
  }
  public set drsSlowStartConnLimit(value: number) {
    this._drsSlowStartConnLimit = value;
  }
  public resetDrsSlowStartConnLimit() {
    this._drsSlowStartConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsSlowStartConnLimitInput() {
    return this._drsSlowStartConnLimit;
  }

  // drs_srv_gateway_arp - computed: false, optional: true, required: false
  private _drsSrvGatewayArp?: string; 
  public get drsSrvGatewayArp() {
    return this.getStringAttribute('drs_srv_gateway_arp');
  }
  public set drsSrvGatewayArp(value: string) {
    this._drsSrvGatewayArp = value;
  }
  public resetDrsSrvGatewayArp() {
    this._drsSrvGatewayArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsSrvGatewayArpInput() {
    return this._drsSrvGatewayArp;
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

  // drs_tot_conn - computed: false, optional: true, required: false
  private _drsTotConn?: number; 
  public get drsTotConn() {
    return this.getNumberAttribute('drs_tot_conn');
  }
  public set drsTotConn(value: number) {
    this._drsTotConn = value;
  }
  public resetDrsTotConn() {
    this._drsTotConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotConnInput() {
    return this._drsTotConn;
  }

  // drs_tot_fwd_bytes - computed: false, optional: true, required: false
  private _drsTotFwdBytes?: number; 
  public get drsTotFwdBytes() {
    return this.getNumberAttribute('drs_tot_fwd_bytes');
  }
  public set drsTotFwdBytes(value: number) {
    this._drsTotFwdBytes = value;
  }
  public resetDrsTotFwdBytes() {
    this._drsTotFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotFwdBytesInput() {
    return this._drsTotFwdBytes;
  }

  // drs_tot_fwd_pkts - computed: false, optional: true, required: false
  private _drsTotFwdPkts?: number; 
  public get drsTotFwdPkts() {
    return this.getNumberAttribute('drs_tot_fwd_pkts');
  }
  public set drsTotFwdPkts(value: number) {
    this._drsTotFwdPkts = value;
  }
  public resetDrsTotFwdPkts() {
    this._drsTotFwdPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotFwdPktsInput() {
    return this._drsTotFwdPkts;
  }

  // drs_tot_req - computed: false, optional: true, required: false
  private _drsTotReq?: number; 
  public get drsTotReq() {
    return this.getNumberAttribute('drs_tot_req');
  }
  public set drsTotReq(value: number) {
    this._drsTotReq = value;
  }
  public resetDrsTotReq() {
    this._drsTotReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotReqInput() {
    return this._drsTotReq;
  }

  // drs_tot_req_suc - computed: false, optional: true, required: false
  private _drsTotReqSuc?: number; 
  public get drsTotReqSuc() {
    return this.getNumberAttribute('drs_tot_req_suc');
  }
  public set drsTotReqSuc(value: number) {
    this._drsTotReqSuc = value;
  }
  public resetDrsTotReqSuc() {
    this._drsTotReqSuc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotReqSucInput() {
    return this._drsTotReqSuc;
  }

  // drs_tot_rev_bytes - computed: false, optional: true, required: false
  private _drsTotRevBytes?: number; 
  public get drsTotRevBytes() {
    return this.getNumberAttribute('drs_tot_rev_bytes');
  }
  public set drsTotRevBytes(value: number) {
    this._drsTotRevBytes = value;
  }
  public resetDrsTotRevBytes() {
    this._drsTotRevBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotRevBytesInput() {
    return this._drsTotRevBytes;
  }

  // drs_tot_rev_pkts - computed: false, optional: true, required: false
  private _drsTotRevPkts?: number; 
  public get drsTotRevPkts() {
    return this.getNumberAttribute('drs_tot_rev_pkts');
  }
  public set drsTotRevPkts(value: number) {
    this._drsTotRevPkts = value;
  }
  public resetDrsTotRevPkts() {
    this._drsTotRevPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsTotRevPktsInput() {
    return this._drsTotRevPkts;
  }

  // drs_weight - computed: false, optional: true, required: false
  private _drsWeight?: number; 
  public get drsWeight() {
    return this.getNumberAttribute('drs_weight');
  }
  public set drsWeight(value: number) {
    this._drsWeight = value;
  }
  public resetDrsWeight() {
    this._drsWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsWeightInput() {
    return this._drsWeight;
  }
}

export class DataThunderSlbServerOperOperDrsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperOperDrsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperOperDrsListStructOutputReference {
    return new DataThunderSlbServerOperOperDrsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServerOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#conn_rate_unit DataThunderSlbServerOper#conn_rate_unit}
  */
  readonly connRateUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#creation_type DataThunderSlbServerOper#creation_type}
  */
  readonly creationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#curr_conn_rate DataThunderSlbServerOper#curr_conn_rate}
  */
  readonly currConnRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#curr_observe_rate DataThunderSlbServerOper#curr_observe_rate}
  */
  readonly currObserveRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#disable DataThunderSlbServerOper#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#dns_update_time DataThunderSlbServerOper#dns_update_time}
  */
  readonly dnsUpdateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#is_autocreate DataThunderSlbServerOper#is_autocreate}
  */
  readonly isAutocreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#server_ttl DataThunderSlbServerOper#server_ttl}
  */
  readonly serverTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#slow_start_conn_limit DataThunderSlbServerOper#slow_start_conn_limit}
  */
  readonly slowStartConnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#srv_gateway_arp DataThunderSlbServerOper#srv_gateway_arp}
  */
  readonly srvGatewayArp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#state DataThunderSlbServerOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#weight DataThunderSlbServerOper#weight}
  */
  readonly weight?: number;
  /**
  * drs_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_list DataThunderSlbServerOper#drs_list}
  */
  readonly drsList?: DataThunderSlbServerOperOperDrsListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbServerOperOperToTerraform(struct?: DataThunderSlbServerOperOperOutputReference | DataThunderSlbServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_rate_unit: cdktf.stringToTerraform(struct!.connRateUnit),
    creation_type: cdktf.stringToTerraform(struct!.creationType),
    curr_conn_rate: cdktf.numberToTerraform(struct!.currConnRate),
    curr_observe_rate: cdktf.numberToTerraform(struct!.currObserveRate),
    disable: cdktf.numberToTerraform(struct!.disable),
    dns_update_time: cdktf.stringToTerraform(struct!.dnsUpdateTime),
    is_autocreate: cdktf.numberToTerraform(struct!.isAutocreate),
    server_ttl: cdktf.numberToTerraform(struct!.serverTtl),
    slow_start_conn_limit: cdktf.numberToTerraform(struct!.slowStartConnLimit),
    srv_gateway_arp: cdktf.stringToTerraform(struct!.srvGatewayArp),
    state: cdktf.stringToTerraform(struct!.state),
    weight: cdktf.numberToTerraform(struct!.weight),
    drs_list: cdktf.listMapper(dataThunderSlbServerOperOperDrsListStructToTerraform, true)(struct!.drsList),
  }
}


export function dataThunderSlbServerOperOperToHclTerraform(struct?: DataThunderSlbServerOperOperOutputReference | DataThunderSlbServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.connRateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation_type: {
      value: cdktf.stringToHclTerraform(struct!.creationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_conn_rate: {
      value: cdktf.numberToHclTerraform(struct!.currConnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_observe_rate: {
      value: cdktf.numberToHclTerraform(struct!.currObserveRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_update_time: {
      value: cdktf.stringToHclTerraform(struct!.dnsUpdateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_autocreate: {
      value: cdktf.numberToHclTerraform(struct!.isAutocreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ttl: {
      value: cdktf.numberToHclTerraform(struct!.serverTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_start_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.slowStartConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv_gateway_arp: {
      value: cdktf.stringToHclTerraform(struct!.srvGatewayArp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_list: {
      value: cdktf.listMapperHcl(dataThunderSlbServerOperOperDrsListStructToHclTerraform, true)(struct!.drsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperOperDrsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connRateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateUnit = this._connRateUnit;
    }
    if (this._creationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationType = this._creationType;
    }
    if (this._currConnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConnRate = this._currConnRate;
    }
    if (this._currObserveRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currObserveRate = this._currObserveRate;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._dnsUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsUpdateTime = this._dnsUpdateTime;
    }
    if (this._isAutocreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutocreate = this._isAutocreate;
    }
    if (this._serverTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTtl = this._serverTtl;
    }
    if (this._slowStartConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartConnLimit = this._slowStartConnLimit;
    }
    if (this._srvGatewayArp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvGatewayArp = this._srvGatewayArp;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._drsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsList = this._drsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connRateUnit = undefined;
      this._creationType = undefined;
      this._currConnRate = undefined;
      this._currObserveRate = undefined;
      this._disable = undefined;
      this._dnsUpdateTime = undefined;
      this._isAutocreate = undefined;
      this._serverTtl = undefined;
      this._slowStartConnLimit = undefined;
      this._srvGatewayArp = undefined;
      this._state = undefined;
      this._weight = undefined;
      this._drsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connRateUnit = value.connRateUnit;
      this._creationType = value.creationType;
      this._currConnRate = value.currConnRate;
      this._currObserveRate = value.currObserveRate;
      this._disable = value.disable;
      this._dnsUpdateTime = value.dnsUpdateTime;
      this._isAutocreate = value.isAutocreate;
      this._serverTtl = value.serverTtl;
      this._slowStartConnLimit = value.slowStartConnLimit;
      this._srvGatewayArp = value.srvGatewayArp;
      this._state = value.state;
      this._weight = value.weight;
      this._drsList.internalValue = value.drsList;
    }
  }

  // conn_rate_unit - computed: false, optional: true, required: false
  private _connRateUnit?: string; 
  public get connRateUnit() {
    return this.getStringAttribute('conn_rate_unit');
  }
  public set connRateUnit(value: string) {
    this._connRateUnit = value;
  }
  public resetConnRateUnit() {
    this._connRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateUnitInput() {
    return this._connRateUnit;
  }

  // creation_type - computed: false, optional: true, required: false
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  public resetCreationType() {
    this._creationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
  }

  // curr_conn_rate - computed: false, optional: true, required: false
  private _currConnRate?: number; 
  public get currConnRate() {
    return this.getNumberAttribute('curr_conn_rate');
  }
  public set currConnRate(value: number) {
    this._currConnRate = value;
  }
  public resetCurrConnRate() {
    this._currConnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnRateInput() {
    return this._currConnRate;
  }

  // curr_observe_rate - computed: false, optional: true, required: false
  private _currObserveRate?: number; 
  public get currObserveRate() {
    return this.getNumberAttribute('curr_observe_rate');
  }
  public set currObserveRate(value: number) {
    this._currObserveRate = value;
  }
  public resetCurrObserveRate() {
    this._currObserveRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currObserveRateInput() {
    return this._currObserveRate;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_update_time - computed: false, optional: true, required: false
  private _dnsUpdateTime?: string; 
  public get dnsUpdateTime() {
    return this.getStringAttribute('dns_update_time');
  }
  public set dnsUpdateTime(value: string) {
    this._dnsUpdateTime = value;
  }
  public resetDnsUpdateTime() {
    this._dnsUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUpdateTimeInput() {
    return this._dnsUpdateTime;
  }

  // is_autocreate - computed: false, optional: true, required: false
  private _isAutocreate?: number; 
  public get isAutocreate() {
    return this.getNumberAttribute('is_autocreate');
  }
  public set isAutocreate(value: number) {
    this._isAutocreate = value;
  }
  public resetIsAutocreate() {
    this._isAutocreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutocreateInput() {
    return this._isAutocreate;
  }

  // server_ttl - computed: false, optional: true, required: false
  private _serverTtl?: number; 
  public get serverTtl() {
    return this.getNumberAttribute('server_ttl');
  }
  public set serverTtl(value: number) {
    this._serverTtl = value;
  }
  public resetServerTtl() {
    this._serverTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTtlInput() {
    return this._serverTtl;
  }

  // slow_start_conn_limit - computed: false, optional: true, required: false
  private _slowStartConnLimit?: number; 
  public get slowStartConnLimit() {
    return this.getNumberAttribute('slow_start_conn_limit');
  }
  public set slowStartConnLimit(value: number) {
    this._slowStartConnLimit = value;
  }
  public resetSlowStartConnLimit() {
    this._slowStartConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartConnLimitInput() {
    return this._slowStartConnLimit;
  }

  // srv_gateway_arp - computed: false, optional: true, required: false
  private _srvGatewayArp?: string; 
  public get srvGatewayArp() {
    return this.getStringAttribute('srv_gateway_arp');
  }
  public set srvGatewayArp(value: string) {
    this._srvGatewayArp = value;
  }
  public resetSrvGatewayArp() {
    this._srvGatewayArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvGatewayArpInput() {
    return this._srvGatewayArp;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // drs_list - computed: false, optional: true, required: false
  private _drsList = new DataThunderSlbServerOperOperDrsListStructList(this, "drs_list", false);
  public get drsList() {
    return this._drsList;
  }
  public putDrsList(value: DataThunderSlbServerOperOperDrsListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderSlbServerOperPortListOperAutoNatAddrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#alloc_failed DataThunderSlbServerOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#auto_nat_ip DataThunderSlbServerOper#auto_nat_ip}
  */
  readonly autoNatIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ha_group_id DataThunderSlbServerOper#ha_group_id}
  */
  readonly haGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ip_rr DataThunderSlbServerOper#ip_rr}
  */
  readonly ipRr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed DataThunderSlbServerOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed_total DataThunderSlbServerOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_freed_total DataThunderSlbServerOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#vrid DataThunderSlbServerOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderSlbServerOperPortListOperAutoNatAddrListStructToTerraform(struct?: DataThunderSlbServerOperPortListOperAutoNatAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    auto_nat_ip: cdktf.stringToTerraform(struct!.autoNatIp),
    ha_group_id: cdktf.numberToTerraform(struct!.haGroupId),
    ip_rr: cdktf.numberToTerraform(struct!.ipRr),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderSlbServerOperPortListOperAutoNatAddrListStructToHclTerraform(struct?: DataThunderSlbServerOperPortListOperAutoNatAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.autoNatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_group_id: {
      value: cdktf.numberToHclTerraform(struct!.haGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rr: {
      value: cdktf.numberToHclTerraform(struct!.ipRr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListOperAutoNatAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperPortListOperAutoNatAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._autoNatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNatIp = this._autoNatIp;
    }
    if (this._haGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.haGroupId = this._haGroupId;
    }
    if (this._ipRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRr = this._ipRr;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListOperAutoNatAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._autoNatIp = undefined;
      this._haGroupId = undefined;
      this._ipRr = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._autoNatIp = value.autoNatIp;
      this._haGroupId = value.haGroupId;
      this._ipRr = value.ipRr;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
      this._vrid = value.vrid;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
  }

  // auto_nat_ip - computed: false, optional: true, required: false
  private _autoNatIp?: string; 
  public get autoNatIp() {
    return this.getStringAttribute('auto_nat_ip');
  }
  public set autoNatIp(value: string) {
    this._autoNatIp = value;
  }
  public resetAutoNatIp() {
    this._autoNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNatIpInput() {
    return this._autoNatIp;
  }

  // ha_group_id - computed: false, optional: true, required: false
  private _haGroupId?: number; 
  public get haGroupId() {
    return this.getNumberAttribute('ha_group_id');
  }
  public set haGroupId(value: number) {
    this._haGroupId = value;
  }
  public resetHaGroupId() {
    this._haGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupIdInput() {
    return this._haGroupId;
  }

  // ip_rr - computed: false, optional: true, required: false
  private _ipRr?: number; 
  public get ipRr() {
    return this.getNumberAttribute('ip_rr');
  }
  public set ipRr(value: number) {
    this._ipRr = value;
  }
  public resetIpRr() {
    this._ipRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRrInput() {
    return this._ipRr;
  }

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class DataThunderSlbServerOperPortListOperAutoNatAddrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperPortListOperAutoNatAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperPortListOperAutoNatAddrListStructOutputReference {
    return new DataThunderSlbServerOperPortListOperAutoNatAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#alloc_failed DataThunderSlbServerOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#auto_nat_ip DataThunderSlbServerOper#auto_nat_ip}
  */
  readonly autoNatIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ha_group_id DataThunderSlbServerOper#ha_group_id}
  */
  readonly haGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ip_rr DataThunderSlbServerOper#ip_rr}
  */
  readonly ipRr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed DataThunderSlbServerOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed_total DataThunderSlbServerOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_freed_total DataThunderSlbServerOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#vrid DataThunderSlbServerOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructToTerraform(struct?: DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    auto_nat_ip: cdktf.stringToTerraform(struct!.autoNatIp),
    ha_group_id: cdktf.numberToTerraform(struct!.haGroupId),
    ip_rr: cdktf.numberToTerraform(struct!.ipRr),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructToHclTerraform(struct?: DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.autoNatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_group_id: {
      value: cdktf.numberToHclTerraform(struct!.haGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rr: {
      value: cdktf.numberToHclTerraform(struct!.ipRr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._autoNatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNatIp = this._autoNatIp;
    }
    if (this._haGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.haGroupId = this._haGroupId;
    }
    if (this._ipRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRr = this._ipRr;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._autoNatIp = undefined;
      this._haGroupId = undefined;
      this._ipRr = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._autoNatIp = value.autoNatIp;
      this._haGroupId = value.haGroupId;
      this._ipRr = value.ipRr;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
      this._vrid = value.vrid;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
  }

  // auto_nat_ip - computed: false, optional: true, required: false
  private _autoNatIp?: string; 
  public get autoNatIp() {
    return this.getStringAttribute('auto_nat_ip');
  }
  public set autoNatIp(value: string) {
    this._autoNatIp = value;
  }
  public resetAutoNatIp() {
    this._autoNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNatIpInput() {
    return this._autoNatIp;
  }

  // ha_group_id - computed: false, optional: true, required: false
  private _haGroupId?: number; 
  public get haGroupId() {
    return this.getNumberAttribute('ha_group_id');
  }
  public set haGroupId(value: number) {
    this._haGroupId = value;
  }
  public resetHaGroupId() {
    this._haGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupIdInput() {
    return this._haGroupId;
  }

  // ip_rr - computed: false, optional: true, required: false
  private _ipRr?: number; 
  public get ipRr() {
    return this.getNumberAttribute('ip_rr');
  }
  public set ipRr(value: number) {
    this._ipRr = value;
  }
  public resetIpRr() {
    this._ipRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRrInput() {
    return this._ipRr;
  }

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructOutputReference {
    return new DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServerOperPortListOperDrsAutoNatListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_name DataThunderSlbServerOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_port DataThunderSlbServerOper#drs_port}
  */
  readonly drsPort?: number;
  /**
  * drs_auto_nat_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_auto_nat_address_list DataThunderSlbServerOper#drs_auto_nat_address_list}
  */
  readonly drsAutoNatAddressList?: DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbServerOperPortListOperDrsAutoNatListStructToTerraform(struct?: DataThunderSlbServerOperPortListOperDrsAutoNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drs_name: cdktf.stringToTerraform(struct!.drsName),
    drs_port: cdktf.numberToTerraform(struct!.drsPort),
    drs_auto_nat_address_list: cdktf.listMapper(dataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructToTerraform, true)(struct!.drsAutoNatAddressList),
  }
}


export function dataThunderSlbServerOperPortListOperDrsAutoNatListStructToHclTerraform(struct?: DataThunderSlbServerOperPortListOperDrsAutoNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drs_name: {
      value: cdktf.stringToHclTerraform(struct!.drsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_port: {
      value: cdktf.numberToHclTerraform(struct!.drsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_auto_nat_address_list: {
      value: cdktf.listMapperHcl(dataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructToHclTerraform, true)(struct!.drsAutoNatAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListOperDrsAutoNatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperPortListOperDrsAutoNatListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsName = this._drsName;
    }
    if (this._drsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPort = this._drsPort;
    }
    if (this._drsAutoNatAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsAutoNatAddressList = this._drsAutoNatAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListOperDrsAutoNatListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drsName = undefined;
      this._drsPort = undefined;
      this._drsAutoNatAddressList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drsName = value.drsName;
      this._drsPort = value.drsPort;
      this._drsAutoNatAddressList.internalValue = value.drsAutoNatAddressList;
    }
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

  // drs_auto_nat_address_list - computed: false, optional: true, required: false
  private _drsAutoNatAddressList = new DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStructList(this, "drs_auto_nat_address_list", false);
  public get drsAutoNatAddressList() {
    return this._drsAutoNatAddressList;
  }
  public putDrsAutoNatAddressList(value: DataThunderSlbServerOperPortListOperDrsAutoNatListDrsAutoNatAddressListStruct[] | cdktf.IResolvable) {
    this._drsAutoNatAddressList.internalValue = value;
  }
  public resetDrsAutoNatAddressList() {
    this._drsAutoNatAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsAutoNatAddressListInput() {
    return this._drsAutoNatAddressList.internalValue;
  }
}

export class DataThunderSlbServerOperPortListOperDrsAutoNatListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperPortListOperDrsAutoNatListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperPortListOperDrsAutoNatListStructOutputReference {
    return new DataThunderSlbServerOperPortListOperDrsAutoNatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#alloc_failed DataThunderSlbServerOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#nat_ip DataThunderSlbServerOper#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed DataThunderSlbServerOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed_total DataThunderSlbServerOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_freed_total DataThunderSlbServerOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
}

export function dataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructToTerraform(struct?: DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
  }
}


export function dataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructToHclTerraform(struct?: DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._natIp = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._natIp = value.natIp;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
  }

  // nat_ip - computed: false, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }
}

export class DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructOutputReference {
    return new DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServerOperPortListOperDrsIpNatListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_name DataThunderSlbServerOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_port DataThunderSlbServerOper#drs_port}
  */
  readonly drsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#pool_name DataThunderSlbServerOper#pool_name}
  */
  readonly poolName?: string;
  /**
  * nat_pool_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#nat_pool_addr_list DataThunderSlbServerOper#nat_pool_addr_list}
  */
  readonly natPoolAddrList?: DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbServerOperPortListOperDrsIpNatListStructToTerraform(struct?: DataThunderSlbServerOperPortListOperDrsIpNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drs_name: cdktf.stringToTerraform(struct!.drsName),
    drs_port: cdktf.numberToTerraform(struct!.drsPort),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    nat_pool_addr_list: cdktf.listMapper(dataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructToTerraform, true)(struct!.natPoolAddrList),
  }
}


export function dataThunderSlbServerOperPortListOperDrsIpNatListStructToHclTerraform(struct?: DataThunderSlbServerOperPortListOperDrsIpNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drs_name: {
      value: cdktf.stringToHclTerraform(struct!.drsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_port: {
      value: cdktf.numberToHclTerraform(struct!.drsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool_addr_list: {
      value: cdktf.listMapperHcl(dataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructToHclTerraform, true)(struct!.natPoolAddrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListOperDrsIpNatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperPortListOperDrsIpNatListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsName = this._drsName;
    }
    if (this._drsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPort = this._drsPort;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._natPoolAddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrList = this._natPoolAddrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListOperDrsIpNatListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drsName = undefined;
      this._drsPort = undefined;
      this._poolName = undefined;
      this._natPoolAddrList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drsName = value.drsName;
      this._drsPort = value.drsPort;
      this._poolName = value.poolName;
      this._natPoolAddrList.internalValue = value.natPoolAddrList;
    }
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

  // nat_pool_addr_list - computed: false, optional: true, required: false
  private _natPoolAddrList = new DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStructList(this, "nat_pool_addr_list", false);
  public get natPoolAddrList() {
    return this._natPoolAddrList;
  }
  public putNatPoolAddrList(value: DataThunderSlbServerOperPortListOperDrsIpNatListNatPoolAddrListStruct[] | cdktf.IResolvable) {
    this._natPoolAddrList.internalValue = value;
  }
  public resetNatPoolAddrList() {
    this._natPoolAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrListInput() {
    return this._natPoolAddrList.internalValue;
  }
}

export class DataThunderSlbServerOperPortListOperDrsIpNatListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperPortListOperDrsIpNatListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperPortListOperDrsIpNatListStructOutputReference {
    return new DataThunderSlbServerOperPortListOperDrsIpNatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServerOperPortListOperNatPoolAddrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#alloc_failed DataThunderSlbServerOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#nat_ip DataThunderSlbServerOper#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed DataThunderSlbServerOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_consumed_total DataThunderSlbServerOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#ports_freed_total DataThunderSlbServerOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
}

export function dataThunderSlbServerOperPortListOperNatPoolAddrListStructToTerraform(struct?: DataThunderSlbServerOperPortListOperNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
  }
}


export function dataThunderSlbServerOperPortListOperNatPoolAddrListStructToHclTerraform(struct?: DataThunderSlbServerOperPortListOperNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListOperNatPoolAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperPortListOperNatPoolAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListOperNatPoolAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._natIp = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._natIp = value.natIp;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
  }

  // nat_ip - computed: false, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }
}

export class DataThunderSlbServerOperPortListOperNatPoolAddrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperPortListOperNatPoolAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperPortListOperNatPoolAddrListStructOutputReference {
    return new DataThunderSlbServerOperPortListOperNatPoolAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbServerOperPortListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#aflow_conn_limit DataThunderSlbServerOper#aflow_conn_limit}
  */
  readonly aflowConnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#aflow_queue_size DataThunderSlbServerOper#aflow_queue_size}
  */
  readonly aflowQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#conn_rate_unit DataThunderSlbServerOper#conn_rate_unit}
  */
  readonly connRateUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#curr_conn_rate DataThunderSlbServerOper#curr_conn_rate}
  */
  readonly currConnRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#curr_observe_rate DataThunderSlbServerOper#curr_observe_rate}
  */
  readonly currObserveRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#current_time DataThunderSlbServerOper#current_time}
  */
  readonly currentTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#diameter_enabled DataThunderSlbServerOper#diameter_enabled}
  */
  readonly diameterEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#disable DataThunderSlbServerOper#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#down_grace_period_allowed DataThunderSlbServerOper#down_grace_period_allowed}
  */
  readonly downGracePeriodAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#down_time_grace_period DataThunderSlbServerOper#down_time_grace_period}
  */
  readonly downTimeGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#es_resp_time DataThunderSlbServerOper#es_resp_time}
  */
  readonly esRespTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#hm_index DataThunderSlbServerOper#hm_index}
  */
  readonly hmIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#hm_key DataThunderSlbServerOper#hm_key}
  */
  readonly hmKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#inband_hm_reassign_num DataThunderSlbServerOper#inband_hm_reassign_num}
  */
  readonly inbandHmReassignNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#pool_name DataThunderSlbServerOper#pool_name}
  */
  readonly poolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#resv_conn DataThunderSlbServerOper#resv_conn}
  */
  readonly resvConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#slow_start_conn_limit DataThunderSlbServerOper#slow_start_conn_limit}
  */
  readonly slowStartConnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#soft_down_time DataThunderSlbServerOper#soft_down_time}
  */
  readonly softDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#state DataThunderSlbServerOper#state}
  */
  readonly state?: string;
  /**
  * auto_nat_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#auto_nat_addr_list DataThunderSlbServerOper#auto_nat_addr_list}
  */
  readonly autoNatAddrList?: DataThunderSlbServerOperPortListOperAutoNatAddrListStruct[] | cdktf.IResolvable;
  /**
  * drs_auto_nat_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_auto_nat_list DataThunderSlbServerOper#drs_auto_nat_list}
  */
  readonly drsAutoNatList?: DataThunderSlbServerOperPortListOperDrsAutoNatListStruct[] | cdktf.IResolvable;
  /**
  * drs_ip_nat_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#drs_ip_nat_list DataThunderSlbServerOper#drs_ip_nat_list}
  */
  readonly drsIpNatList?: DataThunderSlbServerOperPortListOperDrsIpNatListStruct[] | cdktf.IResolvable;
  /**
  * nat_pool_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#nat_pool_addr_list DataThunderSlbServerOper#nat_pool_addr_list}
  */
  readonly natPoolAddrList?: DataThunderSlbServerOperPortListOperNatPoolAddrListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbServerOperPortListOperToTerraform(struct?: DataThunderSlbServerOperPortListOperOutputReference | DataThunderSlbServerOperPortListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflow_conn_limit: cdktf.numberToTerraform(struct!.aflowConnLimit),
    aflow_queue_size: cdktf.numberToTerraform(struct!.aflowQueueSize),
    conn_rate_unit: cdktf.stringToTerraform(struct!.connRateUnit),
    curr_conn_rate: cdktf.numberToTerraform(struct!.currConnRate),
    curr_observe_rate: cdktf.numberToTerraform(struct!.currObserveRate),
    current_time: cdktf.numberToTerraform(struct!.currentTime),
    diameter_enabled: cdktf.numberToTerraform(struct!.diameterEnabled),
    disable: cdktf.numberToTerraform(struct!.disable),
    down_grace_period_allowed: cdktf.numberToTerraform(struct!.downGracePeriodAllowed),
    down_time_grace_period: cdktf.numberToTerraform(struct!.downTimeGracePeriod),
    es_resp_time: cdktf.numberToTerraform(struct!.esRespTime),
    hm_index: cdktf.numberToTerraform(struct!.hmIndex),
    hm_key: cdktf.numberToTerraform(struct!.hmKey),
    inband_hm_reassign_num: cdktf.numberToTerraform(struct!.inbandHmReassignNum),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    resv_conn: cdktf.numberToTerraform(struct!.resvConn),
    slow_start_conn_limit: cdktf.numberToTerraform(struct!.slowStartConnLimit),
    soft_down_time: cdktf.numberToTerraform(struct!.softDownTime),
    state: cdktf.stringToTerraform(struct!.state),
    auto_nat_addr_list: cdktf.listMapper(dataThunderSlbServerOperPortListOperAutoNatAddrListStructToTerraform, true)(struct!.autoNatAddrList),
    drs_auto_nat_list: cdktf.listMapper(dataThunderSlbServerOperPortListOperDrsAutoNatListStructToTerraform, true)(struct!.drsAutoNatList),
    drs_ip_nat_list: cdktf.listMapper(dataThunderSlbServerOperPortListOperDrsIpNatListStructToTerraform, true)(struct!.drsIpNatList),
    nat_pool_addr_list: cdktf.listMapper(dataThunderSlbServerOperPortListOperNatPoolAddrListStructToTerraform, true)(struct!.natPoolAddrList),
  }
}


export function dataThunderSlbServerOperPortListOperToHclTerraform(struct?: DataThunderSlbServerOperPortListOperOutputReference | DataThunderSlbServerOperPortListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflow_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.aflowConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflow_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.aflowQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.connRateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_conn_rate: {
      value: cdktf.numberToHclTerraform(struct!.currConnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_observe_rate: {
      value: cdktf.numberToHclTerraform(struct!.currObserveRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_time: {
      value: cdktf.numberToHclTerraform(struct!.currentTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diameter_enabled: {
      value: cdktf.numberToHclTerraform(struct!.diameterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_grace_period_allowed: {
      value: cdktf.numberToHclTerraform(struct!.downGracePeriodAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_time_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.downTimeGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_time: {
      value: cdktf.numberToHclTerraform(struct!.esRespTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    inband_hm_reassign_num: {
      value: cdktf.numberToHclTerraform(struct!.inbandHmReassignNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resv_conn: {
      value: cdktf.numberToHclTerraform(struct!.resvConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_start_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.slowStartConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soft_down_time: {
      value: cdktf.numberToHclTerraform(struct!.softDownTime),
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
    auto_nat_addr_list: {
      value: cdktf.listMapperHcl(dataThunderSlbServerOperPortListOperAutoNatAddrListStructToHclTerraform, true)(struct!.autoNatAddrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperPortListOperAutoNatAddrListStructList",
    },
    drs_auto_nat_list: {
      value: cdktf.listMapperHcl(dataThunderSlbServerOperPortListOperDrsAutoNatListStructToHclTerraform, true)(struct!.drsAutoNatList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperPortListOperDrsAutoNatListStructList",
    },
    drs_ip_nat_list: {
      value: cdktf.listMapperHcl(dataThunderSlbServerOperPortListOperDrsIpNatListStructToHclTerraform, true)(struct!.drsIpNatList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperPortListOperDrsIpNatListStructList",
    },
    nat_pool_addr_list: {
      value: cdktf.listMapperHcl(dataThunderSlbServerOperPortListOperNatPoolAddrListStructToHclTerraform, true)(struct!.natPoolAddrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperPortListOperNatPoolAddrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbServerOperPortListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflowConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflowConnLimit = this._aflowConnLimit;
    }
    if (this._aflowQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflowQueueSize = this._aflowQueueSize;
    }
    if (this._connRateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateUnit = this._connRateUnit;
    }
    if (this._currConnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConnRate = this._currConnRate;
    }
    if (this._currObserveRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currObserveRate = this._currObserveRate;
    }
    if (this._currentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentTime = this._currentTime;
    }
    if (this._diameterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diameterEnabled = this._diameterEnabled;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._downGracePeriodAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.downGracePeriodAllowed = this._downGracePeriodAllowed;
    }
    if (this._downTimeGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.downTimeGracePeriod = this._downTimeGracePeriod;
    }
    if (this._esRespTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.esRespTime = this._esRespTime;
    }
    if (this._hmIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmIndex = this._hmIndex;
    }
    if (this._hmKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmKey = this._hmKey;
    }
    if (this._inbandHmReassignNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbandHmReassignNum = this._inbandHmReassignNum;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._resvConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resvConn = this._resvConn;
    }
    if (this._slowStartConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartConnLimit = this._slowStartConnLimit;
    }
    if (this._softDownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.softDownTime = this._softDownTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._autoNatAddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNatAddrList = this._autoNatAddrList?.internalValue;
    }
    if (this._drsAutoNatList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsAutoNatList = this._drsAutoNatList?.internalValue;
    }
    if (this._drsIpNatList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsIpNatList = this._drsIpNatList?.internalValue;
    }
    if (this._natPoolAddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrList = this._natPoolAddrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflowConnLimit = undefined;
      this._aflowQueueSize = undefined;
      this._connRateUnit = undefined;
      this._currConnRate = undefined;
      this._currObserveRate = undefined;
      this._currentTime = undefined;
      this._diameterEnabled = undefined;
      this._disable = undefined;
      this._downGracePeriodAllowed = undefined;
      this._downTimeGracePeriod = undefined;
      this._esRespTime = undefined;
      this._hmIndex = undefined;
      this._hmKey = undefined;
      this._inbandHmReassignNum = undefined;
      this._poolName = undefined;
      this._resvConn = undefined;
      this._slowStartConnLimit = undefined;
      this._softDownTime = undefined;
      this._state = undefined;
      this._autoNatAddrList.internalValue = undefined;
      this._drsAutoNatList.internalValue = undefined;
      this._drsIpNatList.internalValue = undefined;
      this._natPoolAddrList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflowConnLimit = value.aflowConnLimit;
      this._aflowQueueSize = value.aflowQueueSize;
      this._connRateUnit = value.connRateUnit;
      this._currConnRate = value.currConnRate;
      this._currObserveRate = value.currObserveRate;
      this._currentTime = value.currentTime;
      this._diameterEnabled = value.diameterEnabled;
      this._disable = value.disable;
      this._downGracePeriodAllowed = value.downGracePeriodAllowed;
      this._downTimeGracePeriod = value.downTimeGracePeriod;
      this._esRespTime = value.esRespTime;
      this._hmIndex = value.hmIndex;
      this._hmKey = value.hmKey;
      this._inbandHmReassignNum = value.inbandHmReassignNum;
      this._poolName = value.poolName;
      this._resvConn = value.resvConn;
      this._slowStartConnLimit = value.slowStartConnLimit;
      this._softDownTime = value.softDownTime;
      this._state = value.state;
      this._autoNatAddrList.internalValue = value.autoNatAddrList;
      this._drsAutoNatList.internalValue = value.drsAutoNatList;
      this._drsIpNatList.internalValue = value.drsIpNatList;
      this._natPoolAddrList.internalValue = value.natPoolAddrList;
    }
  }

  // aflow_conn_limit - computed: false, optional: true, required: false
  private _aflowConnLimit?: number; 
  public get aflowConnLimit() {
    return this.getNumberAttribute('aflow_conn_limit');
  }
  public set aflowConnLimit(value: number) {
    this._aflowConnLimit = value;
  }
  public resetAflowConnLimit() {
    this._aflowConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflowConnLimitInput() {
    return this._aflowConnLimit;
  }

  // aflow_queue_size - computed: false, optional: true, required: false
  private _aflowQueueSize?: number; 
  public get aflowQueueSize() {
    return this.getNumberAttribute('aflow_queue_size');
  }
  public set aflowQueueSize(value: number) {
    this._aflowQueueSize = value;
  }
  public resetAflowQueueSize() {
    this._aflowQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflowQueueSizeInput() {
    return this._aflowQueueSize;
  }

  // conn_rate_unit - computed: false, optional: true, required: false
  private _connRateUnit?: string; 
  public get connRateUnit() {
    return this.getStringAttribute('conn_rate_unit');
  }
  public set connRateUnit(value: string) {
    this._connRateUnit = value;
  }
  public resetConnRateUnit() {
    this._connRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateUnitInput() {
    return this._connRateUnit;
  }

  // curr_conn_rate - computed: false, optional: true, required: false
  private _currConnRate?: number; 
  public get currConnRate() {
    return this.getNumberAttribute('curr_conn_rate');
  }
  public set currConnRate(value: number) {
    this._currConnRate = value;
  }
  public resetCurrConnRate() {
    this._currConnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnRateInput() {
    return this._currConnRate;
  }

  // curr_observe_rate - computed: false, optional: true, required: false
  private _currObserveRate?: number; 
  public get currObserveRate() {
    return this.getNumberAttribute('curr_observe_rate');
  }
  public set currObserveRate(value: number) {
    this._currObserveRate = value;
  }
  public resetCurrObserveRate() {
    this._currObserveRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currObserveRateInput() {
    return this._currObserveRate;
  }

  // current_time - computed: false, optional: true, required: false
  private _currentTime?: number; 
  public get currentTime() {
    return this.getNumberAttribute('current_time');
  }
  public set currentTime(value: number) {
    this._currentTime = value;
  }
  public resetCurrentTime() {
    this._currentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentTimeInput() {
    return this._currentTime;
  }

  // diameter_enabled - computed: false, optional: true, required: false
  private _diameterEnabled?: number; 
  public get diameterEnabled() {
    return this.getNumberAttribute('diameter_enabled');
  }
  public set diameterEnabled(value: number) {
    this._diameterEnabled = value;
  }
  public resetDiameterEnabled() {
    this._diameterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diameterEnabledInput() {
    return this._diameterEnabled;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // down_grace_period_allowed - computed: false, optional: true, required: false
  private _downGracePeriodAllowed?: number; 
  public get downGracePeriodAllowed() {
    return this.getNumberAttribute('down_grace_period_allowed');
  }
  public set downGracePeriodAllowed(value: number) {
    this._downGracePeriodAllowed = value;
  }
  public resetDownGracePeriodAllowed() {
    this._downGracePeriodAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downGracePeriodAllowedInput() {
    return this._downGracePeriodAllowed;
  }

  // down_time_grace_period - computed: false, optional: true, required: false
  private _downTimeGracePeriod?: number; 
  public get downTimeGracePeriod() {
    return this.getNumberAttribute('down_time_grace_period');
  }
  public set downTimeGracePeriod(value: number) {
    this._downTimeGracePeriod = value;
  }
  public resetDownTimeGracePeriod() {
    this._downTimeGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downTimeGracePeriodInput() {
    return this._downTimeGracePeriod;
  }

  // es_resp_time - computed: false, optional: true, required: false
  private _esRespTime?: number; 
  public get esRespTime() {
    return this.getNumberAttribute('es_resp_time');
  }
  public set esRespTime(value: number) {
    this._esRespTime = value;
  }
  public resetEsRespTime() {
    this._esRespTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRespTimeInput() {
    return this._esRespTime;
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

  // inband_hm_reassign_num - computed: false, optional: true, required: false
  private _inbandHmReassignNum?: number; 
  public get inbandHmReassignNum() {
    return this.getNumberAttribute('inband_hm_reassign_num');
  }
  public set inbandHmReassignNum(value: number) {
    this._inbandHmReassignNum = value;
  }
  public resetInbandHmReassignNum() {
    this._inbandHmReassignNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandHmReassignNumInput() {
    return this._inbandHmReassignNum;
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

  // resv_conn - computed: false, optional: true, required: false
  private _resvConn?: number; 
  public get resvConn() {
    return this.getNumberAttribute('resv_conn');
  }
  public set resvConn(value: number) {
    this._resvConn = value;
  }
  public resetResvConn() {
    this._resvConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resvConnInput() {
    return this._resvConn;
  }

  // slow_start_conn_limit - computed: false, optional: true, required: false
  private _slowStartConnLimit?: number; 
  public get slowStartConnLimit() {
    return this.getNumberAttribute('slow_start_conn_limit');
  }
  public set slowStartConnLimit(value: number) {
    this._slowStartConnLimit = value;
  }
  public resetSlowStartConnLimit() {
    this._slowStartConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartConnLimitInput() {
    return this._slowStartConnLimit;
  }

  // soft_down_time - computed: false, optional: true, required: false
  private _softDownTime?: number; 
  public get softDownTime() {
    return this.getNumberAttribute('soft_down_time');
  }
  public set softDownTime(value: number) {
    this._softDownTime = value;
  }
  public resetSoftDownTime() {
    this._softDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDownTimeInput() {
    return this._softDownTime;
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

  // auto_nat_addr_list - computed: false, optional: true, required: false
  private _autoNatAddrList = new DataThunderSlbServerOperPortListOperAutoNatAddrListStructList(this, "auto_nat_addr_list", false);
  public get autoNatAddrList() {
    return this._autoNatAddrList;
  }
  public putAutoNatAddrList(value: DataThunderSlbServerOperPortListOperAutoNatAddrListStruct[] | cdktf.IResolvable) {
    this._autoNatAddrList.internalValue = value;
  }
  public resetAutoNatAddrList() {
    this._autoNatAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNatAddrListInput() {
    return this._autoNatAddrList.internalValue;
  }

  // drs_auto_nat_list - computed: false, optional: true, required: false
  private _drsAutoNatList = new DataThunderSlbServerOperPortListOperDrsAutoNatListStructList(this, "drs_auto_nat_list", false);
  public get drsAutoNatList() {
    return this._drsAutoNatList;
  }
  public putDrsAutoNatList(value: DataThunderSlbServerOperPortListOperDrsAutoNatListStruct[] | cdktf.IResolvable) {
    this._drsAutoNatList.internalValue = value;
  }
  public resetDrsAutoNatList() {
    this._drsAutoNatList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsAutoNatListInput() {
    return this._drsAutoNatList.internalValue;
  }

  // drs_ip_nat_list - computed: false, optional: true, required: false
  private _drsIpNatList = new DataThunderSlbServerOperPortListOperDrsIpNatListStructList(this, "drs_ip_nat_list", false);
  public get drsIpNatList() {
    return this._drsIpNatList;
  }
  public putDrsIpNatList(value: DataThunderSlbServerOperPortListOperDrsIpNatListStruct[] | cdktf.IResolvable) {
    this._drsIpNatList.internalValue = value;
  }
  public resetDrsIpNatList() {
    this._drsIpNatList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsIpNatListInput() {
    return this._drsIpNatList.internalValue;
  }

  // nat_pool_addr_list - computed: false, optional: true, required: false
  private _natPoolAddrList = new DataThunderSlbServerOperPortListOperNatPoolAddrListStructList(this, "nat_pool_addr_list", false);
  public get natPoolAddrList() {
    return this._natPoolAddrList;
  }
  public putNatPoolAddrList(value: DataThunderSlbServerOperPortListOperNatPoolAddrListStruct[] | cdktf.IResolvable) {
    this._natPoolAddrList.internalValue = value;
  }
  public resetNatPoolAddrList() {
    this._natPoolAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrListInput() {
    return this._natPoolAddrList.internalValue;
  }
}
export interface DataThunderSlbServerOperPortListStruct {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#port_number DataThunderSlbServerOper#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#protocol DataThunderSlbServerOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#oper DataThunderSlbServerOper#oper}
  */
  readonly oper?: DataThunderSlbServerOperPortListOper;
}

export function dataThunderSlbServerOperPortListStructToTerraform(struct?: DataThunderSlbServerOperPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    oper: dataThunderSlbServerOperPortListOperToTerraform(struct!.oper),
  }
}


export function dataThunderSlbServerOperPortListStructToHclTerraform(struct?: DataThunderSlbServerOperPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderSlbServerOperPortListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbServerOperPortListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerOperPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbServerOperPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerOperPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
      this._protocol = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
      this._protocol = value.protocol;
      this._oper.internalValue = value.oper;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbServerOperPortListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbServerOperPortListOper) {
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

export class DataThunderSlbServerOperPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbServerOperPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbServerOperPortListStructOutputReference {
    return new DataThunderSlbServerOperPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper thunder_slb_server_oper}
*/
export class DataThunderSlbServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbServerOper to import
  * @param importFromId The id of the existing DataThunderSlbServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_oper thunder_slb_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbServerOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbServerOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_server_oper',
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
    this._name = config.name;
    this._oper.internalValue = config.oper;
    this._portList.internalValue = config.portList;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbServerOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new DataThunderSlbServerOperPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DataThunderSlbServerOperPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderSlbServerOperOperToTerraform(this._oper.internalValue),
      port_list: cdktf.listMapper(dataThunderSlbServerOperPortListStructToTerraform, true)(this._portList.internalValue),
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
      oper: {
        value: dataThunderSlbServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbServerOperOperList",
      },
      port_list: {
        value: cdktf.listMapperHcl(dataThunderSlbServerOperPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbServerOperPortListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
