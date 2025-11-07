// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbFastHttpProxyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#id DataThunderSlbFastHttpProxyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#stats DataThunderSlbFastHttpProxyStats#stats}
  */
  readonly stats?: DataThunderSlbFastHttpProxyStatsStats;
}
export interface DataThunderSlbFastHttpProxyStatsStats {
  /**
  * Client RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#client_rst DataThunderSlbFastHttpProxyStats#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Close on DDoS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#close_on_ddos DataThunderSlbFastHttpProxyStats#close_on_ddos}
  */
  readonly closeOnDdos?: number;
  /**
  * Curr Proxy Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#curr_proxy DataThunderSlbFastHttpProxyStats#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Full proxy tot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#full_proxy DataThunderSlbFastHttpProxyStats#full_proxy}
  */
  readonly fullProxy?: number;
  /**
  * Full proxy fpga err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#full_proxy_fpga_err DataThunderSlbFastHttpProxyStats#full_proxy_fpga_err}
  */
  readonly fullProxyFpgaErr?: number;
  /**
  * Full proxy pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#full_proxy_pipeline DataThunderSlbFastHttpProxyStats#full_proxy_pipeline}
  */
  readonly fullProxyPipeline?: number;
  /**
  * Full proxy POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#full_proxy_post DataThunderSlbFastHttpProxyStats#full_proxy_post}
  */
  readonly fullProxyPost?: number;
  /**
  * Full proxy PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#full_proxy_put DataThunderSlbFastHttpProxyStats#full_proxy_put}
  */
  readonly fullProxyPut?: number;
  /**
  * Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#fwdreq_fail DataThunderSlbFastHttpProxyStats#fwdreq_fail}
  */
  readonly fwdreqFail?: number;
  /**
  * Fwd req data fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#fwdreqdata_fail DataThunderSlbFastHttpProxyStats#fwdreqdata_fail}
  */
  readonly fwdreqdataFail?: number;
  /**
  * Server conn made
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#new_svrconn DataThunderSlbFastHttpProxyStats#new_svrconn}
  */
  readonly newSvrconn?: number;
  /**
  * No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#noproxy DataThunderSlbFastHttpProxyStats#noproxy}
  */
  readonly noproxy?: number;
  /**
  * No tuple error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#notuple DataThunderSlbFastHttpProxyStats#notuple}
  */
  readonly notuple?: number;
  /**
  * Parse req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#parsereq_fail DataThunderSlbFastHttpProxyStats#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * HTTP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#req DataThunderSlbFastHttpProxyStats#req}
  */
  readonly req?: number;
  /**
  * Packets ofo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#req_ofo DataThunderSlbFastHttpProxyStats#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Request over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#req_over_limit DataThunderSlbFastHttpProxyStats#req_over_limit}
  */
  readonly reqOverLimit?: number;
  /**
  * Request rate over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#req_rate_over_limit DataThunderSlbFastHttpProxyStats#req_rate_over_limit}
  */
  readonly reqRateOverLimit?: number;
  /**
  * Packets retrans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#req_retran DataThunderSlbFastHttpProxyStats#req_retran}
  */
  readonly reqRetran?: number;
  /**
  * HTTP requests(succ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#req_succ DataThunderSlbFastHttpProxyStats#req_succ}
  */
  readonly reqSucc?: number;
  /**
  * Server reselection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#server_resel DataThunderSlbFastHttpProxyStats#server_resel}
  */
  readonly serverResel?: number;
  /**
  * Server RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#server_rst DataThunderSlbFastHttpProxyStats#server_rst}
  */
  readonly serverRst?: number;
  /**
  * Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#snat_fail DataThunderSlbFastHttpProxyStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Server premature close
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#svr_prem_close DataThunderSlbFastHttpProxyStats#svr_prem_close}
  */
  readonly svrPremClose?: number;
  /**
  * Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#svrsel_fail DataThunderSlbFastHttpProxyStats#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Out RSTs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#tcpoutrst DataThunderSlbFastHttpProxyStats#tcpoutrst}
  */
  readonly tcpoutrst?: number;
  /**
  * Total Proxy Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#total_proxy DataThunderSlbFastHttpProxyStats#total_proxy}
  */
  readonly totalProxy?: number;
}

export function dataThunderSlbFastHttpProxyStatsStatsToTerraform(struct?: DataThunderSlbFastHttpProxyStatsStatsOutputReference | DataThunderSlbFastHttpProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    close_on_ddos: cdktf.numberToTerraform(struct!.closeOnDdos),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    full_proxy: cdktf.numberToTerraform(struct!.fullProxy),
    full_proxy_fpga_err: cdktf.numberToTerraform(struct!.fullProxyFpgaErr),
    full_proxy_pipeline: cdktf.numberToTerraform(struct!.fullProxyPipeline),
    full_proxy_post: cdktf.numberToTerraform(struct!.fullProxyPost),
    full_proxy_put: cdktf.numberToTerraform(struct!.fullProxyPut),
    fwdreq_fail: cdktf.numberToTerraform(struct!.fwdreqFail),
    fwdreqdata_fail: cdktf.numberToTerraform(struct!.fwdreqdataFail),
    new_svrconn: cdktf.numberToTerraform(struct!.newSvrconn),
    noproxy: cdktf.numberToTerraform(struct!.noproxy),
    notuple: cdktf.numberToTerraform(struct!.notuple),
    parsereq_fail: cdktf.numberToTerraform(struct!.parsereqFail),
    req: cdktf.numberToTerraform(struct!.req),
    req_ofo: cdktf.numberToTerraform(struct!.reqOfo),
    req_over_limit: cdktf.numberToTerraform(struct!.reqOverLimit),
    req_rate_over_limit: cdktf.numberToTerraform(struct!.reqRateOverLimit),
    req_retran: cdktf.numberToTerraform(struct!.reqRetran),
    req_succ: cdktf.numberToTerraform(struct!.reqSucc),
    server_resel: cdktf.numberToTerraform(struct!.serverResel),
    server_rst: cdktf.numberToTerraform(struct!.serverRst),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svr_prem_close: cdktf.numberToTerraform(struct!.svrPremClose),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    tcpoutrst: cdktf.numberToTerraform(struct!.tcpoutrst),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
  }
}


export function dataThunderSlbFastHttpProxyStatsStatsToHclTerraform(struct?: DataThunderSlbFastHttpProxyStatsStatsOutputReference | DataThunderSlbFastHttpProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_rst: {
      value: cdktf.numberToHclTerraform(struct!.clientRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_on_ddos: {
      value: cdktf.numberToHclTerraform(struct!.closeOnDdos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy: {
      value: cdktf.numberToHclTerraform(struct!.fullProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_fpga_err: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyFpgaErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_pipeline: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_post: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_put: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreqdata_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqdataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_svrconn: {
      value: cdktf.numberToHclTerraform(struct!.newSvrconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noproxy: {
      value: cdktf.numberToHclTerraform(struct!.noproxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notuple: {
      value: cdktf.numberToHclTerraform(struct!.notuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parsereq_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsereqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req: {
      value: cdktf.numberToHclTerraform(struct!.req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_ofo: {
      value: cdktf.numberToHclTerraform(struct!.reqOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqOverLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_rate_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqRateOverLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_retran: {
      value: cdktf.numberToHclTerraform(struct!.reqRetran),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_succ: {
      value: cdktf.numberToHclTerraform(struct!.reqSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_resel: {
      value: cdktf.numberToHclTerraform(struct!.serverResel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst: {
      value: cdktf.numberToHclTerraform(struct!.serverRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svr_prem_close: {
      value: cdktf.numberToHclTerraform(struct!.svrPremClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcpoutrst: {
      value: cdktf.numberToHclTerraform(struct!.tcpoutrst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFastHttpProxyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbFastHttpProxyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._closeOnDdos !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeOnDdos = this._closeOnDdos;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._fullProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxy = this._fullProxy;
    }
    if (this._fullProxyFpgaErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyFpgaErr = this._fullProxyFpgaErr;
    }
    if (this._fullProxyPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyPipeline = this._fullProxyPipeline;
    }
    if (this._fullProxyPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyPost = this._fullProxyPost;
    }
    if (this._fullProxyPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyPut = this._fullProxyPut;
    }
    if (this._fwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFail = this._fwdreqFail;
    }
    if (this._fwdreqdataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqdataFail = this._fwdreqdataFail;
    }
    if (this._newSvrconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSvrconn = this._newSvrconn;
    }
    if (this._noproxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noproxy = this._noproxy;
    }
    if (this._notuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.notuple = this._notuple;
    }
    if (this._parsereqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsereqFail = this._parsereqFail;
    }
    if (this._req !== undefined) {
      hasAnyValues = true;
      internalValueResult.req = this._req;
    }
    if (this._reqOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOfo = this._reqOfo;
    }
    if (this._reqOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOverLimit = this._reqOverLimit;
    }
    if (this._reqRateOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRateOverLimit = this._reqRateOverLimit;
    }
    if (this._reqRetran !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetran = this._reqRetran;
    }
    if (this._reqSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSucc = this._reqSucc;
    }
    if (this._serverResel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResel = this._serverResel;
    }
    if (this._serverRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRst = this._serverRst;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrPremClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrPremClose = this._svrPremClose;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._tcpoutrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpoutrst = this._tcpoutrst;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFastHttpProxyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientRst = undefined;
      this._closeOnDdos = undefined;
      this._currProxy = undefined;
      this._fullProxy = undefined;
      this._fullProxyFpgaErr = undefined;
      this._fullProxyPipeline = undefined;
      this._fullProxyPost = undefined;
      this._fullProxyPut = undefined;
      this._fwdreqFail = undefined;
      this._fwdreqdataFail = undefined;
      this._newSvrconn = undefined;
      this._noproxy = undefined;
      this._notuple = undefined;
      this._parsereqFail = undefined;
      this._req = undefined;
      this._reqOfo = undefined;
      this._reqOverLimit = undefined;
      this._reqRateOverLimit = undefined;
      this._reqRetran = undefined;
      this._reqSucc = undefined;
      this._serverResel = undefined;
      this._serverRst = undefined;
      this._snatFail = undefined;
      this._svrPremClose = undefined;
      this._svrselFail = undefined;
      this._tcpoutrst = undefined;
      this._totalProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientRst = value.clientRst;
      this._closeOnDdos = value.closeOnDdos;
      this._currProxy = value.currProxy;
      this._fullProxy = value.fullProxy;
      this._fullProxyFpgaErr = value.fullProxyFpgaErr;
      this._fullProxyPipeline = value.fullProxyPipeline;
      this._fullProxyPost = value.fullProxyPost;
      this._fullProxyPut = value.fullProxyPut;
      this._fwdreqFail = value.fwdreqFail;
      this._fwdreqdataFail = value.fwdreqdataFail;
      this._newSvrconn = value.newSvrconn;
      this._noproxy = value.noproxy;
      this._notuple = value.notuple;
      this._parsereqFail = value.parsereqFail;
      this._req = value.req;
      this._reqOfo = value.reqOfo;
      this._reqOverLimit = value.reqOverLimit;
      this._reqRateOverLimit = value.reqRateOverLimit;
      this._reqRetran = value.reqRetran;
      this._reqSucc = value.reqSucc;
      this._serverResel = value.serverResel;
      this._serverRst = value.serverRst;
      this._snatFail = value.snatFail;
      this._svrPremClose = value.svrPremClose;
      this._svrselFail = value.svrselFail;
      this._tcpoutrst = value.tcpoutrst;
      this._totalProxy = value.totalProxy;
    }
  }

  // client_rst - computed: false, optional: true, required: false
  private _clientRst?: number; 
  public get clientRst() {
    return this.getNumberAttribute('client_rst');
  }
  public set clientRst(value: number) {
    this._clientRst = value;
  }
  public resetClientRst() {
    this._clientRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstInput() {
    return this._clientRst;
  }

  // close_on_ddos - computed: false, optional: true, required: false
  private _closeOnDdos?: number; 
  public get closeOnDdos() {
    return this.getNumberAttribute('close_on_ddos');
  }
  public set closeOnDdos(value: number) {
    this._closeOnDdos = value;
  }
  public resetCloseOnDdos() {
    this._closeOnDdos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeOnDdosInput() {
    return this._closeOnDdos;
  }

  // curr_proxy - computed: false, optional: true, required: false
  private _currProxy?: number; 
  public get currProxy() {
    return this.getNumberAttribute('curr_proxy');
  }
  public set currProxy(value: number) {
    this._currProxy = value;
  }
  public resetCurrProxy() {
    this._currProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyInput() {
    return this._currProxy;
  }

  // full_proxy - computed: false, optional: true, required: false
  private _fullProxy?: number; 
  public get fullProxy() {
    return this.getNumberAttribute('full_proxy');
  }
  public set fullProxy(value: number) {
    this._fullProxy = value;
  }
  public resetFullProxy() {
    this._fullProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyInput() {
    return this._fullProxy;
  }

  // full_proxy_fpga_err - computed: false, optional: true, required: false
  private _fullProxyFpgaErr?: number; 
  public get fullProxyFpgaErr() {
    return this.getNumberAttribute('full_proxy_fpga_err');
  }
  public set fullProxyFpgaErr(value: number) {
    this._fullProxyFpgaErr = value;
  }
  public resetFullProxyFpgaErr() {
    this._fullProxyFpgaErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyFpgaErrInput() {
    return this._fullProxyFpgaErr;
  }

  // full_proxy_pipeline - computed: false, optional: true, required: false
  private _fullProxyPipeline?: number; 
  public get fullProxyPipeline() {
    return this.getNumberAttribute('full_proxy_pipeline');
  }
  public set fullProxyPipeline(value: number) {
    this._fullProxyPipeline = value;
  }
  public resetFullProxyPipeline() {
    this._fullProxyPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyPipelineInput() {
    return this._fullProxyPipeline;
  }

  // full_proxy_post - computed: false, optional: true, required: false
  private _fullProxyPost?: number; 
  public get fullProxyPost() {
    return this.getNumberAttribute('full_proxy_post');
  }
  public set fullProxyPost(value: number) {
    this._fullProxyPost = value;
  }
  public resetFullProxyPost() {
    this._fullProxyPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyPostInput() {
    return this._fullProxyPost;
  }

  // full_proxy_put - computed: false, optional: true, required: false
  private _fullProxyPut?: number; 
  public get fullProxyPut() {
    return this.getNumberAttribute('full_proxy_put');
  }
  public set fullProxyPut(value: number) {
    this._fullProxyPut = value;
  }
  public resetFullProxyPut() {
    this._fullProxyPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyPutInput() {
    return this._fullProxyPut;
  }

  // fwdreq_fail - computed: false, optional: true, required: false
  private _fwdreqFail?: number; 
  public get fwdreqFail() {
    return this.getNumberAttribute('fwdreq_fail');
  }
  public set fwdreqFail(value: number) {
    this._fwdreqFail = value;
  }
  public resetFwdreqFail() {
    this._fwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailInput() {
    return this._fwdreqFail;
  }

  // fwdreqdata_fail - computed: false, optional: true, required: false
  private _fwdreqdataFail?: number; 
  public get fwdreqdataFail() {
    return this.getNumberAttribute('fwdreqdata_fail');
  }
  public set fwdreqdataFail(value: number) {
    this._fwdreqdataFail = value;
  }
  public resetFwdreqdataFail() {
    this._fwdreqdataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqdataFailInput() {
    return this._fwdreqdataFail;
  }

  // new_svrconn - computed: false, optional: true, required: false
  private _newSvrconn?: number; 
  public get newSvrconn() {
    return this.getNumberAttribute('new_svrconn');
  }
  public set newSvrconn(value: number) {
    this._newSvrconn = value;
  }
  public resetNewSvrconn() {
    this._newSvrconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSvrconnInput() {
    return this._newSvrconn;
  }

  // noproxy - computed: false, optional: true, required: false
  private _noproxy?: number; 
  public get noproxy() {
    return this.getNumberAttribute('noproxy');
  }
  public set noproxy(value: number) {
    this._noproxy = value;
  }
  public resetNoproxy() {
    this._noproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noproxyInput() {
    return this._noproxy;
  }

  // notuple - computed: false, optional: true, required: false
  private _notuple?: number; 
  public get notuple() {
    return this.getNumberAttribute('notuple');
  }
  public set notuple(value: number) {
    this._notuple = value;
  }
  public resetNotuple() {
    this._notuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notupleInput() {
    return this._notuple;
  }

  // parsereq_fail - computed: false, optional: true, required: false
  private _parsereqFail?: number; 
  public get parsereqFail() {
    return this.getNumberAttribute('parsereq_fail');
  }
  public set parsereqFail(value: number) {
    this._parsereqFail = value;
  }
  public resetParsereqFail() {
    this._parsereqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsereqFailInput() {
    return this._parsereqFail;
  }

  // req - computed: false, optional: true, required: false
  private _req?: number; 
  public get req() {
    return this.getNumberAttribute('req');
  }
  public set req(value: number) {
    this._req = value;
  }
  public resetReq() {
    this._req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqInput() {
    return this._req;
  }

  // req_ofo - computed: false, optional: true, required: false
  private _reqOfo?: number; 
  public get reqOfo() {
    return this.getNumberAttribute('req_ofo');
  }
  public set reqOfo(value: number) {
    this._reqOfo = value;
  }
  public resetReqOfo() {
    this._reqOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOfoInput() {
    return this._reqOfo;
  }

  // req_over_limit - computed: false, optional: true, required: false
  private _reqOverLimit?: number; 
  public get reqOverLimit() {
    return this.getNumberAttribute('req_over_limit');
  }
  public set reqOverLimit(value: number) {
    this._reqOverLimit = value;
  }
  public resetReqOverLimit() {
    this._reqOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOverLimitInput() {
    return this._reqOverLimit;
  }

  // req_rate_over_limit - computed: false, optional: true, required: false
  private _reqRateOverLimit?: number; 
  public get reqRateOverLimit() {
    return this.getNumberAttribute('req_rate_over_limit');
  }
  public set reqRateOverLimit(value: number) {
    this._reqRateOverLimit = value;
  }
  public resetReqRateOverLimit() {
    this._reqRateOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRateOverLimitInput() {
    return this._reqRateOverLimit;
  }

  // req_retran - computed: false, optional: true, required: false
  private _reqRetran?: number; 
  public get reqRetran() {
    return this.getNumberAttribute('req_retran');
  }
  public set reqRetran(value: number) {
    this._reqRetran = value;
  }
  public resetReqRetran() {
    this._reqRetran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRetranInput() {
    return this._reqRetran;
  }

  // req_succ - computed: false, optional: true, required: false
  private _reqSucc?: number; 
  public get reqSucc() {
    return this.getNumberAttribute('req_succ');
  }
  public set reqSucc(value: number) {
    this._reqSucc = value;
  }
  public resetReqSucc() {
    this._reqSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSuccInput() {
    return this._reqSucc;
  }

  // server_resel - computed: false, optional: true, required: false
  private _serverResel?: number; 
  public get serverResel() {
    return this.getNumberAttribute('server_resel');
  }
  public set serverResel(value: number) {
    this._serverResel = value;
  }
  public resetServerResel() {
    this._serverResel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReselInput() {
    return this._serverResel;
  }

  // server_rst - computed: false, optional: true, required: false
  private _serverRst?: number; 
  public get serverRst() {
    return this.getNumberAttribute('server_rst');
  }
  public set serverRst(value: number) {
    this._serverRst = value;
  }
  public resetServerRst() {
    this._serverRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstInput() {
    return this._serverRst;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // svr_prem_close - computed: false, optional: true, required: false
  private _svrPremClose?: number; 
  public get svrPremClose() {
    return this.getNumberAttribute('svr_prem_close');
  }
  public set svrPremClose(value: number) {
    this._svrPremClose = value;
  }
  public resetSvrPremClose() {
    this._svrPremClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPremCloseInput() {
    return this._svrPremClose;
  }

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
  }

  // tcpoutrst - computed: false, optional: true, required: false
  private _tcpoutrst?: number; 
  public get tcpoutrst() {
    return this.getNumberAttribute('tcpoutrst');
  }
  public set tcpoutrst(value: number) {
    this._tcpoutrst = value;
  }
  public resetTcpoutrst() {
    this._tcpoutrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpoutrstInput() {
    return this._tcpoutrst;
  }

  // total_proxy - computed: false, optional: true, required: false
  private _totalProxy?: number; 
  public get totalProxy() {
    return this.getNumberAttribute('total_proxy');
  }
  public set totalProxy(value: number) {
    this._totalProxy = value;
  }
  public resetTotalProxy() {
    this._totalProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyInput() {
    return this._totalProxy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats thunder_slb_fast_http_proxy_stats}
*/
export class DataThunderSlbFastHttpProxyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_fast_http_proxy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbFastHttpProxyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbFastHttpProxyStats to import
  * @param importFromId The id of the existing DataThunderSlbFastHttpProxyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbFastHttpProxyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_fast_http_proxy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_stats thunder_slb_fast_http_proxy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbFastHttpProxyStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbFastHttpProxyStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_fast_http_proxy_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbFastHttpProxyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbFastHttpProxyStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSlbFastHttpProxyStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbFastHttpProxyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbFastHttpProxyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
