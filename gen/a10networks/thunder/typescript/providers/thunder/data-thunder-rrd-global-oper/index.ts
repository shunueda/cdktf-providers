// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdGlobalOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#id DataThunderRrdGlobalOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#oper DataThunderRrdGlobalOper#oper}
  */
  readonly oper?: DataThunderRrdGlobalOperOper;
}
export interface DataThunderRrdGlobalOperOperGlobalData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#conn_free_cnt DataThunderRrdGlobalOper#conn_free_cnt}
  */
  readonly connFreeCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#conn_get_cnt DataThunderRrdGlobalOper#conn_get_cnt}
  */
  readonly connGetCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#conn_smp_aged DataThunderRrdGlobalOper#conn_smp_aged}
  */
  readonly connSmpAged?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#conn_smp_alloc DataThunderRrdGlobalOper#conn_smp_alloc}
  */
  readonly connSmpAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#conn_smp_free DataThunderRrdGlobalOper#conn_smp_free}
  */
  readonly connSmpFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#curr_free_conn DataThunderRrdGlobalOper#curr_free_conn}
  */
  readonly currFreeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#free_buff_count DataThunderRrdGlobalOper#free_buff_count}
  */
  readonly freeBuffCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#ip_conn_count DataThunderRrdGlobalOper#ip_conn_count}
  */
  readonly ipConnCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#other_conn_count DataThunderRrdGlobalOper#other_conn_count}
  */
  readonly otherConnCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#snat_tcp_count DataThunderRrdGlobalOper#snat_tcp_count}
  */
  readonly snatTcpCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#snat_udp_count DataThunderRrdGlobalOper#snat_udp_count}
  */
  readonly snatUdpCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#syn_half_open DataThunderRrdGlobalOper#syn_half_open}
  */
  readonly synHalfOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#tcp_est_count DataThunderRrdGlobalOper#tcp_est_count}
  */
  readonly tcpEstCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#tcp_half_open DataThunderRrdGlobalOper#tcp_half_open}
  */
  readonly tcpHalfOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#time DataThunderRrdGlobalOper#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#udp_conn_count DataThunderRrdGlobalOper#udp_conn_count}
  */
  readonly udpConnCount?: number;
}

export function dataThunderRrdGlobalOperOperGlobalDataToTerraform(struct?: DataThunderRrdGlobalOperOperGlobalData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_free_cnt: cdktf.numberToTerraform(struct!.connFreeCnt),
    conn_get_cnt: cdktf.numberToTerraform(struct!.connGetCnt),
    conn_smp_aged: cdktf.numberToTerraform(struct!.connSmpAged),
    conn_smp_alloc: cdktf.numberToTerraform(struct!.connSmpAlloc),
    conn_smp_free: cdktf.numberToTerraform(struct!.connSmpFree),
    curr_free_conn: cdktf.numberToTerraform(struct!.currFreeConn),
    free_buff_count: cdktf.numberToTerraform(struct!.freeBuffCount),
    ip_conn_count: cdktf.numberToTerraform(struct!.ipConnCount),
    other_conn_count: cdktf.numberToTerraform(struct!.otherConnCount),
    snat_tcp_count: cdktf.numberToTerraform(struct!.snatTcpCount),
    snat_udp_count: cdktf.numberToTerraform(struct!.snatUdpCount),
    syn_half_open: cdktf.numberToTerraform(struct!.synHalfOpen),
    tcp_est_count: cdktf.numberToTerraform(struct!.tcpEstCount),
    tcp_half_open: cdktf.numberToTerraform(struct!.tcpHalfOpen),
    time: cdktf.numberToTerraform(struct!.time),
    udp_conn_count: cdktf.numberToTerraform(struct!.udpConnCount),
  }
}


export function dataThunderRrdGlobalOperOperGlobalDataToHclTerraform(struct?: DataThunderRrdGlobalOperOperGlobalData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_free_cnt: {
      value: cdktf.numberToHclTerraform(struct!.connFreeCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_get_cnt: {
      value: cdktf.numberToHclTerraform(struct!.connGetCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_aged: {
      value: cdktf.numberToHclTerraform(struct!.connSmpAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_alloc: {
      value: cdktf.numberToHclTerraform(struct!.connSmpAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_free: {
      value: cdktf.numberToHclTerraform(struct!.connSmpFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_free_conn: {
      value: cdktf.numberToHclTerraform(struct!.currFreeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_buff_count: {
      value: cdktf.numberToHclTerraform(struct!.freeBuffCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_conn_count: {
      value: cdktf.numberToHclTerraform(struct!.ipConnCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_conn_count: {
      value: cdktf.numberToHclTerraform(struct!.otherConnCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_tcp_count: {
      value: cdktf.numberToHclTerraform(struct!.snatTcpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_udp_count: {
      value: cdktf.numberToHclTerraform(struct!.snatUdpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_half_open: {
      value: cdktf.numberToHclTerraform(struct!.synHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_est_count: {
      value: cdktf.numberToHclTerraform(struct!.tcpEstCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_half_open: {
      value: cdktf.numberToHclTerraform(struct!.tcpHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_conn_count: {
      value: cdktf.numberToHclTerraform(struct!.udpConnCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdGlobalOperOperGlobalDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdGlobalOperOperGlobalData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connFreeCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.connFreeCnt = this._connFreeCnt;
    }
    if (this._connGetCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.connGetCnt = this._connGetCnt;
    }
    if (this._connSmpAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpAged = this._connSmpAged;
    }
    if (this._connSmpAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpAlloc = this._connSmpAlloc;
    }
    if (this._connSmpFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpFree = this._connSmpFree;
    }
    if (this._currFreeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currFreeConn = this._currFreeConn;
    }
    if (this._freeBuffCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeBuffCount = this._freeBuffCount;
    }
    if (this._ipConnCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConnCount = this._ipConnCount;
    }
    if (this._otherConnCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConnCount = this._otherConnCount;
    }
    if (this._snatTcpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatTcpCount = this._snatTcpCount;
    }
    if (this._snatUdpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatUdpCount = this._snatUdpCount;
    }
    if (this._synHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.synHalfOpen = this._synHalfOpen;
    }
    if (this._tcpEstCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEstCount = this._tcpEstCount;
    }
    if (this._tcpHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHalfOpen = this._tcpHalfOpen;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._udpConnCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpConnCount = this._udpConnCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdGlobalOperOperGlobalData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connFreeCnt = undefined;
      this._connGetCnt = undefined;
      this._connSmpAged = undefined;
      this._connSmpAlloc = undefined;
      this._connSmpFree = undefined;
      this._currFreeConn = undefined;
      this._freeBuffCount = undefined;
      this._ipConnCount = undefined;
      this._otherConnCount = undefined;
      this._snatTcpCount = undefined;
      this._snatUdpCount = undefined;
      this._synHalfOpen = undefined;
      this._tcpEstCount = undefined;
      this._tcpHalfOpen = undefined;
      this._time = undefined;
      this._udpConnCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connFreeCnt = value.connFreeCnt;
      this._connGetCnt = value.connGetCnt;
      this._connSmpAged = value.connSmpAged;
      this._connSmpAlloc = value.connSmpAlloc;
      this._connSmpFree = value.connSmpFree;
      this._currFreeConn = value.currFreeConn;
      this._freeBuffCount = value.freeBuffCount;
      this._ipConnCount = value.ipConnCount;
      this._otherConnCount = value.otherConnCount;
      this._snatTcpCount = value.snatTcpCount;
      this._snatUdpCount = value.snatUdpCount;
      this._synHalfOpen = value.synHalfOpen;
      this._tcpEstCount = value.tcpEstCount;
      this._tcpHalfOpen = value.tcpHalfOpen;
      this._time = value.time;
      this._udpConnCount = value.udpConnCount;
    }
  }

  // conn_free_cnt - computed: false, optional: true, required: false
  private _connFreeCnt?: number; 
  public get connFreeCnt() {
    return this.getNumberAttribute('conn_free_cnt');
  }
  public set connFreeCnt(value: number) {
    this._connFreeCnt = value;
  }
  public resetConnFreeCnt() {
    this._connFreeCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connFreeCntInput() {
    return this._connFreeCnt;
  }

  // conn_get_cnt - computed: false, optional: true, required: false
  private _connGetCnt?: number; 
  public get connGetCnt() {
    return this.getNumberAttribute('conn_get_cnt');
  }
  public set connGetCnt(value: number) {
    this._connGetCnt = value;
  }
  public resetConnGetCnt() {
    this._connGetCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connGetCntInput() {
    return this._connGetCnt;
  }

  // conn_smp_aged - computed: false, optional: true, required: false
  private _connSmpAged?: number; 
  public get connSmpAged() {
    return this.getNumberAttribute('conn_smp_aged');
  }
  public set connSmpAged(value: number) {
    this._connSmpAged = value;
  }
  public resetConnSmpAged() {
    this._connSmpAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpAgedInput() {
    return this._connSmpAged;
  }

  // conn_smp_alloc - computed: false, optional: true, required: false
  private _connSmpAlloc?: number; 
  public get connSmpAlloc() {
    return this.getNumberAttribute('conn_smp_alloc');
  }
  public set connSmpAlloc(value: number) {
    this._connSmpAlloc = value;
  }
  public resetConnSmpAlloc() {
    this._connSmpAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpAllocInput() {
    return this._connSmpAlloc;
  }

  // conn_smp_free - computed: false, optional: true, required: false
  private _connSmpFree?: number; 
  public get connSmpFree() {
    return this.getNumberAttribute('conn_smp_free');
  }
  public set connSmpFree(value: number) {
    this._connSmpFree = value;
  }
  public resetConnSmpFree() {
    this._connSmpFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpFreeInput() {
    return this._connSmpFree;
  }

  // curr_free_conn - computed: false, optional: true, required: false
  private _currFreeConn?: number; 
  public get currFreeConn() {
    return this.getNumberAttribute('curr_free_conn');
  }
  public set currFreeConn(value: number) {
    this._currFreeConn = value;
  }
  public resetCurrFreeConn() {
    this._currFreeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currFreeConnInput() {
    return this._currFreeConn;
  }

  // free_buff_count - computed: false, optional: true, required: false
  private _freeBuffCount?: number; 
  public get freeBuffCount() {
    return this.getNumberAttribute('free_buff_count');
  }
  public set freeBuffCount(value: number) {
    this._freeBuffCount = value;
  }
  public resetFreeBuffCount() {
    this._freeBuffCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeBuffCountInput() {
    return this._freeBuffCount;
  }

  // ip_conn_count - computed: false, optional: true, required: false
  private _ipConnCount?: number; 
  public get ipConnCount() {
    return this.getNumberAttribute('ip_conn_count');
  }
  public set ipConnCount(value: number) {
    this._ipConnCount = value;
  }
  public resetIpConnCount() {
    this._ipConnCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConnCountInput() {
    return this._ipConnCount;
  }

  // other_conn_count - computed: false, optional: true, required: false
  private _otherConnCount?: number; 
  public get otherConnCount() {
    return this.getNumberAttribute('other_conn_count');
  }
  public set otherConnCount(value: number) {
    this._otherConnCount = value;
  }
  public resetOtherConnCount() {
    this._otherConnCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConnCountInput() {
    return this._otherConnCount;
  }

  // snat_tcp_count - computed: false, optional: true, required: false
  private _snatTcpCount?: number; 
  public get snatTcpCount() {
    return this.getNumberAttribute('snat_tcp_count');
  }
  public set snatTcpCount(value: number) {
    this._snatTcpCount = value;
  }
  public resetSnatTcpCount() {
    this._snatTcpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatTcpCountInput() {
    return this._snatTcpCount;
  }

  // snat_udp_count - computed: false, optional: true, required: false
  private _snatUdpCount?: number; 
  public get snatUdpCount() {
    return this.getNumberAttribute('snat_udp_count');
  }
  public set snatUdpCount(value: number) {
    this._snatUdpCount = value;
  }
  public resetSnatUdpCount() {
    this._snatUdpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatUdpCountInput() {
    return this._snatUdpCount;
  }

  // syn_half_open - computed: false, optional: true, required: false
  private _synHalfOpen?: number; 
  public get synHalfOpen() {
    return this.getNumberAttribute('syn_half_open');
  }
  public set synHalfOpen(value: number) {
    this._synHalfOpen = value;
  }
  public resetSynHalfOpen() {
    this._synHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synHalfOpenInput() {
    return this._synHalfOpen;
  }

  // tcp_est_count - computed: false, optional: true, required: false
  private _tcpEstCount?: number; 
  public get tcpEstCount() {
    return this.getNumberAttribute('tcp_est_count');
  }
  public set tcpEstCount(value: number) {
    this._tcpEstCount = value;
  }
  public resetTcpEstCount() {
    this._tcpEstCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstCountInput() {
    return this._tcpEstCount;
  }

  // tcp_half_open - computed: false, optional: true, required: false
  private _tcpHalfOpen?: number; 
  public get tcpHalfOpen() {
    return this.getNumberAttribute('tcp_half_open');
  }
  public set tcpHalfOpen(value: number) {
    this._tcpHalfOpen = value;
  }
  public resetTcpHalfOpen() {
    this._tcpHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfOpenInput() {
    return this._tcpHalfOpen;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // udp_conn_count - computed: false, optional: true, required: false
  private _udpConnCount?: number; 
  public get udpConnCount() {
    return this.getNumberAttribute('udp_conn_count');
  }
  public set udpConnCount(value: number) {
    this._udpConnCount = value;
  }
  public resetUdpConnCount() {
    this._udpConnCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpConnCountInput() {
    return this._udpConnCount;
  }
}

export class DataThunderRrdGlobalOperOperGlobalDataList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdGlobalOperOperGlobalData[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdGlobalOperOperGlobalDataOutputReference {
    return new DataThunderRrdGlobalOperOperGlobalDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdGlobalOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#end_time DataThunderRrdGlobalOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#start_time DataThunderRrdGlobalOper#start_time}
  */
  readonly startTime?: number;
  /**
  * global_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#global_data DataThunderRrdGlobalOper#global_data}
  */
  readonly globalData?: DataThunderRrdGlobalOperOperGlobalData[] | cdktf.IResolvable;
}

export function dataThunderRrdGlobalOperOperToTerraform(struct?: DataThunderRrdGlobalOperOperOutputReference | DataThunderRrdGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    global_data: cdktf.listMapper(dataThunderRrdGlobalOperOperGlobalDataToTerraform, true)(struct!.globalData),
  }
}


export function dataThunderRrdGlobalOperOperToHclTerraform(struct?: DataThunderRrdGlobalOperOperOutputReference | DataThunderRrdGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_data: {
      value: cdktf.listMapperHcl(dataThunderRrdGlobalOperOperGlobalDataToHclTerraform, true)(struct!.globalData),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdGlobalOperOperGlobalDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdGlobalOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdGlobalOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._globalData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalData = this._globalData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdGlobalOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._globalData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._globalData.internalValue = value.globalData;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // global_data - computed: false, optional: true, required: false
  private _globalData = new DataThunderRrdGlobalOperOperGlobalDataList(this, "global_data", false);
  public get globalData() {
    return this._globalData;
  }
  public putGlobalData(value: DataThunderRrdGlobalOperOperGlobalData[] | cdktf.IResolvable) {
    this._globalData.internalValue = value;
  }
  public resetGlobalData() {
    this._globalData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDataInput() {
    return this._globalData.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper thunder_rrd_global_oper}
*/
export class DataThunderRrdGlobalOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_global_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdGlobalOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdGlobalOper to import
  * @param importFromId The id of the existing DataThunderRrdGlobalOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdGlobalOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_global_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_global_oper thunder_rrd_global_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdGlobalOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdGlobalOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_global_oper',
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
  private _oper = new DataThunderRrdGlobalOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdGlobalOperOper) {
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
      oper: dataThunderRrdGlobalOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderRrdGlobalOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdGlobalOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
