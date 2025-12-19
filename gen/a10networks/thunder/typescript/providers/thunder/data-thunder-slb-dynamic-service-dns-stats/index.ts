// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDynamicServiceDnsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#id DataThunderSlbDynamicServiceDnsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#stats DataThunderSlbDynamicServiceDnsStats#stats}
  */
  readonly stats?: DataThunderSlbDynamicServiceDnsStatsStats;
}
export interface DataThunderSlbDynamicServiceDnsStatsStats {
  /**
  * Number of queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_query DataThunderSlbDynamicServiceDnsStats#n_query}
  */
  readonly nQuery?: number;
  /**
  * Number of queries dropped due to full queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_query_drop DataThunderSlbDynamicServiceDnsStats#n_query_drop}
  */
  readonly nQueryDrop?: number;
  /**
  * Number of query errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_query_err DataThunderSlbDynamicServiceDnsStats#n_query_err}
  */
  readonly nQueryErr?: number;
  /**
  * Number of responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp DataThunderSlbDynamicServiceDnsStats#n_resp}
  */
  readonly nResp?: number;
  /**
  * Number of response errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_err DataThunderSlbDynamicServiceDnsStats#n_resp_err}
  */
  readonly nRespErr?: number;
  /**
  * Number of response failure with rcode BADALG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badalg DataThunderSlbDynamicServiceDnsStats#n_resp_f_badalg}
  */
  readonly nRespFBadalg?: number;
  /**
  * Number of response failure with rcode BADCOOKIE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badcookie DataThunderSlbDynamicServiceDnsStats#n_resp_f_badcookie}
  */
  readonly nRespFBadcookie?: number;
  /**
  * Number of response failure with rcode BADKEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badkey DataThunderSlbDynamicServiceDnsStats#n_resp_f_badkey}
  */
  readonly nRespFBadkey?: number;
  /**
  * Number of response failure with rcode BADMODE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badmode DataThunderSlbDynamicServiceDnsStats#n_resp_f_badmode}
  */
  readonly nRespFBadmode?: number;
  /**
  * Number of response failure with rcode BADNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badname DataThunderSlbDynamicServiceDnsStats#n_resp_f_badname}
  */
  readonly nRespFBadname?: number;
  /**
  * Number of response failure with rcode BADTIME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badtime DataThunderSlbDynamicServiceDnsStats#n_resp_f_badtime}
  */
  readonly nRespFBadtime?: number;
  /**
  * Number of response failure with rcode BADTRUNC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badtrunc DataThunderSlbDynamicServiceDnsStats#n_resp_f_badtrunc}
  */
  readonly nRespFBadtrunc?: number;
  /**
  * Number of response failure with rcode BADVERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_badvers DataThunderSlbDynamicServiceDnsStats#n_resp_f_badvers}
  */
  readonly nRespFBadvers?: number;
  /**
  * Number of response failure with rcode DSOTYPENI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_dsotypeni DataThunderSlbDynamicServiceDnsStats#n_resp_f_dsotypeni}
  */
  readonly nRespFDsotypeni?: number;
  /**
  * Number of response failure with rcode FormErr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_formerr DataThunderSlbDynamicServiceDnsStats#n_resp_f_formerr}
  */
  readonly nRespFFormerr?: number;
  /**
  * Number of response failure with invalid rcode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_invalid DataThunderSlbDynamicServiceDnsStats#n_resp_f_invalid}
  */
  readonly nRespFInvalid?: number;
  /**
  * Number of response failure with rcode NotAuth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_notauth DataThunderSlbDynamicServiceDnsStats#n_resp_f_notauth}
  */
  readonly nRespFNotauth?: number;
  /**
  * Number of response failure with rcode NotImp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_notimp DataThunderSlbDynamicServiceDnsStats#n_resp_f_notimp}
  */
  readonly nRespFNotimp?: number;
  /**
  * Number of response failure with rcode NotZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_notzone DataThunderSlbDynamicServiceDnsStats#n_resp_f_notzone}
  */
  readonly nRespFNotzone?: number;
  /**
  * Number of response failure with rcode NXDomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_nxdomain DataThunderSlbDynamicServiceDnsStats#n_resp_f_nxdomain}
  */
  readonly nRespFNxdomain?: number;
  /**
  * Number of response failure with rcode NXRRSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_nxrrset DataThunderSlbDynamicServiceDnsStats#n_resp_f_nxrrset}
  */
  readonly nRespFNxrrset?: number;
  /**
  * Number of response failure with rcode Refused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_refused DataThunderSlbDynamicServiceDnsStats#n_resp_f_refused}
  */
  readonly nRespFRefused?: number;
  /**
  * Number of response failure with rcode ServFail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_servfail DataThunderSlbDynamicServiceDnsStats#n_resp_f_servfail}
  */
  readonly nRespFServfail?: number;
  /**
  * Number of response failure with rcode YXDomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_yxdomain DataThunderSlbDynamicServiceDnsStats#n_resp_f_yxdomain}
  */
  readonly nRespFYxdomain?: number;
  /**
  * Number of response failure with rcode YXRRSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#n_resp_f_yxrrset DataThunderSlbDynamicServiceDnsStats#n_resp_f_yxrrset}
  */
  readonly nRespFYxrrset?: number;
}

export function dataThunderSlbDynamicServiceDnsStatsStatsToTerraform(struct?: DataThunderSlbDynamicServiceDnsStatsStatsOutputReference | DataThunderSlbDynamicServiceDnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    n_query: cdktf.numberToTerraform(struct!.nQuery),
    n_query_drop: cdktf.numberToTerraform(struct!.nQueryDrop),
    n_query_err: cdktf.numberToTerraform(struct!.nQueryErr),
    n_resp: cdktf.numberToTerraform(struct!.nResp),
    n_resp_err: cdktf.numberToTerraform(struct!.nRespErr),
    n_resp_f_badalg: cdktf.numberToTerraform(struct!.nRespFBadalg),
    n_resp_f_badcookie: cdktf.numberToTerraform(struct!.nRespFBadcookie),
    n_resp_f_badkey: cdktf.numberToTerraform(struct!.nRespFBadkey),
    n_resp_f_badmode: cdktf.numberToTerraform(struct!.nRespFBadmode),
    n_resp_f_badname: cdktf.numberToTerraform(struct!.nRespFBadname),
    n_resp_f_badtime: cdktf.numberToTerraform(struct!.nRespFBadtime),
    n_resp_f_badtrunc: cdktf.numberToTerraform(struct!.nRespFBadtrunc),
    n_resp_f_badvers: cdktf.numberToTerraform(struct!.nRespFBadvers),
    n_resp_f_dsotypeni: cdktf.numberToTerraform(struct!.nRespFDsotypeni),
    n_resp_f_formerr: cdktf.numberToTerraform(struct!.nRespFFormerr),
    n_resp_f_invalid: cdktf.numberToTerraform(struct!.nRespFInvalid),
    n_resp_f_notauth: cdktf.numberToTerraform(struct!.nRespFNotauth),
    n_resp_f_notimp: cdktf.numberToTerraform(struct!.nRespFNotimp),
    n_resp_f_notzone: cdktf.numberToTerraform(struct!.nRespFNotzone),
    n_resp_f_nxdomain: cdktf.numberToTerraform(struct!.nRespFNxdomain),
    n_resp_f_nxrrset: cdktf.numberToTerraform(struct!.nRespFNxrrset),
    n_resp_f_refused: cdktf.numberToTerraform(struct!.nRespFRefused),
    n_resp_f_servfail: cdktf.numberToTerraform(struct!.nRespFServfail),
    n_resp_f_yxdomain: cdktf.numberToTerraform(struct!.nRespFYxdomain),
    n_resp_f_yxrrset: cdktf.numberToTerraform(struct!.nRespFYxrrset),
  }
}


export function dataThunderSlbDynamicServiceDnsStatsStatsToHclTerraform(struct?: DataThunderSlbDynamicServiceDnsStatsStatsOutputReference | DataThunderSlbDynamicServiceDnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    n_query: {
      value: cdktf.numberToHclTerraform(struct!.nQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_query_drop: {
      value: cdktf.numberToHclTerraform(struct!.nQueryDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_query_err: {
      value: cdktf.numberToHclTerraform(struct!.nQueryErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp: {
      value: cdktf.numberToHclTerraform(struct!.nResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_err: {
      value: cdktf.numberToHclTerraform(struct!.nRespErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badalg: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadalg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badcookie: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadcookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badkey: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadkey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badmode: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadmode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badname: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badtime: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badtrunc: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadtrunc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_badvers: {
      value: cdktf.numberToHclTerraform(struct!.nRespFBadvers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_dsotypeni: {
      value: cdktf.numberToHclTerraform(struct!.nRespFDsotypeni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_formerr: {
      value: cdktf.numberToHclTerraform(struct!.nRespFFormerr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_invalid: {
      value: cdktf.numberToHclTerraform(struct!.nRespFInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_notauth: {
      value: cdktf.numberToHclTerraform(struct!.nRespFNotauth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_notimp: {
      value: cdktf.numberToHclTerraform(struct!.nRespFNotimp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_notzone: {
      value: cdktf.numberToHclTerraform(struct!.nRespFNotzone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_nxdomain: {
      value: cdktf.numberToHclTerraform(struct!.nRespFNxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_nxrrset: {
      value: cdktf.numberToHclTerraform(struct!.nRespFNxrrset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_refused: {
      value: cdktf.numberToHclTerraform(struct!.nRespFRefused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_servfail: {
      value: cdktf.numberToHclTerraform(struct!.nRespFServfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_yxdomain: {
      value: cdktf.numberToHclTerraform(struct!.nRespFYxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_resp_f_yxrrset: {
      value: cdktf.numberToHclTerraform(struct!.nRespFYxrrset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDynamicServiceDnsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDynamicServiceDnsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.nQuery = this._nQuery;
    }
    if (this._nQueryDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nQueryDrop = this._nQueryDrop;
    }
    if (this._nQueryErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nQueryErr = this._nQueryErr;
    }
    if (this._nResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nResp = this._nResp;
    }
    if (this._nRespErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespErr = this._nRespErr;
    }
    if (this._nRespFBadalg !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadalg = this._nRespFBadalg;
    }
    if (this._nRespFBadcookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadcookie = this._nRespFBadcookie;
    }
    if (this._nRespFBadkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadkey = this._nRespFBadkey;
    }
    if (this._nRespFBadmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadmode = this._nRespFBadmode;
    }
    if (this._nRespFBadname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadname = this._nRespFBadname;
    }
    if (this._nRespFBadtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadtime = this._nRespFBadtime;
    }
    if (this._nRespFBadtrunc !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadtrunc = this._nRespFBadtrunc;
    }
    if (this._nRespFBadvers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFBadvers = this._nRespFBadvers;
    }
    if (this._nRespFDsotypeni !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFDsotypeni = this._nRespFDsotypeni;
    }
    if (this._nRespFFormerr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFFormerr = this._nRespFFormerr;
    }
    if (this._nRespFInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFInvalid = this._nRespFInvalid;
    }
    if (this._nRespFNotauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFNotauth = this._nRespFNotauth;
    }
    if (this._nRespFNotimp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFNotimp = this._nRespFNotimp;
    }
    if (this._nRespFNotzone !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFNotzone = this._nRespFNotzone;
    }
    if (this._nRespFNxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFNxdomain = this._nRespFNxdomain;
    }
    if (this._nRespFNxrrset !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFNxrrset = this._nRespFNxrrset;
    }
    if (this._nRespFRefused !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFRefused = this._nRespFRefused;
    }
    if (this._nRespFServfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFServfail = this._nRespFServfail;
    }
    if (this._nRespFYxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFYxdomain = this._nRespFYxdomain;
    }
    if (this._nRespFYxrrset !== undefined) {
      hasAnyValues = true;
      internalValueResult.nRespFYxrrset = this._nRespFYxrrset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDynamicServiceDnsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nQuery = undefined;
      this._nQueryDrop = undefined;
      this._nQueryErr = undefined;
      this._nResp = undefined;
      this._nRespErr = undefined;
      this._nRespFBadalg = undefined;
      this._nRespFBadcookie = undefined;
      this._nRespFBadkey = undefined;
      this._nRespFBadmode = undefined;
      this._nRespFBadname = undefined;
      this._nRespFBadtime = undefined;
      this._nRespFBadtrunc = undefined;
      this._nRespFBadvers = undefined;
      this._nRespFDsotypeni = undefined;
      this._nRespFFormerr = undefined;
      this._nRespFInvalid = undefined;
      this._nRespFNotauth = undefined;
      this._nRespFNotimp = undefined;
      this._nRespFNotzone = undefined;
      this._nRespFNxdomain = undefined;
      this._nRespFNxrrset = undefined;
      this._nRespFRefused = undefined;
      this._nRespFServfail = undefined;
      this._nRespFYxdomain = undefined;
      this._nRespFYxrrset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nQuery = value.nQuery;
      this._nQueryDrop = value.nQueryDrop;
      this._nQueryErr = value.nQueryErr;
      this._nResp = value.nResp;
      this._nRespErr = value.nRespErr;
      this._nRespFBadalg = value.nRespFBadalg;
      this._nRespFBadcookie = value.nRespFBadcookie;
      this._nRespFBadkey = value.nRespFBadkey;
      this._nRespFBadmode = value.nRespFBadmode;
      this._nRespFBadname = value.nRespFBadname;
      this._nRespFBadtime = value.nRespFBadtime;
      this._nRespFBadtrunc = value.nRespFBadtrunc;
      this._nRespFBadvers = value.nRespFBadvers;
      this._nRespFDsotypeni = value.nRespFDsotypeni;
      this._nRespFFormerr = value.nRespFFormerr;
      this._nRespFInvalid = value.nRespFInvalid;
      this._nRespFNotauth = value.nRespFNotauth;
      this._nRespFNotimp = value.nRespFNotimp;
      this._nRespFNotzone = value.nRespFNotzone;
      this._nRespFNxdomain = value.nRespFNxdomain;
      this._nRespFNxrrset = value.nRespFNxrrset;
      this._nRespFRefused = value.nRespFRefused;
      this._nRespFServfail = value.nRespFServfail;
      this._nRespFYxdomain = value.nRespFYxdomain;
      this._nRespFYxrrset = value.nRespFYxrrset;
    }
  }

  // n_query - computed: false, optional: true, required: false
  private _nQuery?: number; 
  public get nQuery() {
    return this.getNumberAttribute('n_query');
  }
  public set nQuery(value: number) {
    this._nQuery = value;
  }
  public resetNQuery() {
    this._nQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nQueryInput() {
    return this._nQuery;
  }

  // n_query_drop - computed: false, optional: true, required: false
  private _nQueryDrop?: number; 
  public get nQueryDrop() {
    return this.getNumberAttribute('n_query_drop');
  }
  public set nQueryDrop(value: number) {
    this._nQueryDrop = value;
  }
  public resetNQueryDrop() {
    this._nQueryDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nQueryDropInput() {
    return this._nQueryDrop;
  }

  // n_query_err - computed: false, optional: true, required: false
  private _nQueryErr?: number; 
  public get nQueryErr() {
    return this.getNumberAttribute('n_query_err');
  }
  public set nQueryErr(value: number) {
    this._nQueryErr = value;
  }
  public resetNQueryErr() {
    this._nQueryErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nQueryErrInput() {
    return this._nQueryErr;
  }

  // n_resp - computed: false, optional: true, required: false
  private _nResp?: number; 
  public get nResp() {
    return this.getNumberAttribute('n_resp');
  }
  public set nResp(value: number) {
    this._nResp = value;
  }
  public resetNResp() {
    this._nResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespInput() {
    return this._nResp;
  }

  // n_resp_err - computed: false, optional: true, required: false
  private _nRespErr?: number; 
  public get nRespErr() {
    return this.getNumberAttribute('n_resp_err');
  }
  public set nRespErr(value: number) {
    this._nRespErr = value;
  }
  public resetNRespErr() {
    this._nRespErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespErrInput() {
    return this._nRespErr;
  }

  // n_resp_f_badalg - computed: false, optional: true, required: false
  private _nRespFBadalg?: number; 
  public get nRespFBadalg() {
    return this.getNumberAttribute('n_resp_f_badalg');
  }
  public set nRespFBadalg(value: number) {
    this._nRespFBadalg = value;
  }
  public resetNRespFBadalg() {
    this._nRespFBadalg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadalgInput() {
    return this._nRespFBadalg;
  }

  // n_resp_f_badcookie - computed: false, optional: true, required: false
  private _nRespFBadcookie?: number; 
  public get nRespFBadcookie() {
    return this.getNumberAttribute('n_resp_f_badcookie');
  }
  public set nRespFBadcookie(value: number) {
    this._nRespFBadcookie = value;
  }
  public resetNRespFBadcookie() {
    this._nRespFBadcookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadcookieInput() {
    return this._nRespFBadcookie;
  }

  // n_resp_f_badkey - computed: false, optional: true, required: false
  private _nRespFBadkey?: number; 
  public get nRespFBadkey() {
    return this.getNumberAttribute('n_resp_f_badkey');
  }
  public set nRespFBadkey(value: number) {
    this._nRespFBadkey = value;
  }
  public resetNRespFBadkey() {
    this._nRespFBadkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadkeyInput() {
    return this._nRespFBadkey;
  }

  // n_resp_f_badmode - computed: false, optional: true, required: false
  private _nRespFBadmode?: number; 
  public get nRespFBadmode() {
    return this.getNumberAttribute('n_resp_f_badmode');
  }
  public set nRespFBadmode(value: number) {
    this._nRespFBadmode = value;
  }
  public resetNRespFBadmode() {
    this._nRespFBadmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadmodeInput() {
    return this._nRespFBadmode;
  }

  // n_resp_f_badname - computed: false, optional: true, required: false
  private _nRespFBadname?: number; 
  public get nRespFBadname() {
    return this.getNumberAttribute('n_resp_f_badname');
  }
  public set nRespFBadname(value: number) {
    this._nRespFBadname = value;
  }
  public resetNRespFBadname() {
    this._nRespFBadname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadnameInput() {
    return this._nRespFBadname;
  }

  // n_resp_f_badtime - computed: false, optional: true, required: false
  private _nRespFBadtime?: number; 
  public get nRespFBadtime() {
    return this.getNumberAttribute('n_resp_f_badtime');
  }
  public set nRespFBadtime(value: number) {
    this._nRespFBadtime = value;
  }
  public resetNRespFBadtime() {
    this._nRespFBadtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadtimeInput() {
    return this._nRespFBadtime;
  }

  // n_resp_f_badtrunc - computed: false, optional: true, required: false
  private _nRespFBadtrunc?: number; 
  public get nRespFBadtrunc() {
    return this.getNumberAttribute('n_resp_f_badtrunc');
  }
  public set nRespFBadtrunc(value: number) {
    this._nRespFBadtrunc = value;
  }
  public resetNRespFBadtrunc() {
    this._nRespFBadtrunc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadtruncInput() {
    return this._nRespFBadtrunc;
  }

  // n_resp_f_badvers - computed: false, optional: true, required: false
  private _nRespFBadvers?: number; 
  public get nRespFBadvers() {
    return this.getNumberAttribute('n_resp_f_badvers');
  }
  public set nRespFBadvers(value: number) {
    this._nRespFBadvers = value;
  }
  public resetNRespFBadvers() {
    this._nRespFBadvers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFBadversInput() {
    return this._nRespFBadvers;
  }

  // n_resp_f_dsotypeni - computed: false, optional: true, required: false
  private _nRespFDsotypeni?: number; 
  public get nRespFDsotypeni() {
    return this.getNumberAttribute('n_resp_f_dsotypeni');
  }
  public set nRespFDsotypeni(value: number) {
    this._nRespFDsotypeni = value;
  }
  public resetNRespFDsotypeni() {
    this._nRespFDsotypeni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFDsotypeniInput() {
    return this._nRespFDsotypeni;
  }

  // n_resp_f_formerr - computed: false, optional: true, required: false
  private _nRespFFormerr?: number; 
  public get nRespFFormerr() {
    return this.getNumberAttribute('n_resp_f_formerr');
  }
  public set nRespFFormerr(value: number) {
    this._nRespFFormerr = value;
  }
  public resetNRespFFormerr() {
    this._nRespFFormerr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFFormerrInput() {
    return this._nRespFFormerr;
  }

  // n_resp_f_invalid - computed: false, optional: true, required: false
  private _nRespFInvalid?: number; 
  public get nRespFInvalid() {
    return this.getNumberAttribute('n_resp_f_invalid');
  }
  public set nRespFInvalid(value: number) {
    this._nRespFInvalid = value;
  }
  public resetNRespFInvalid() {
    this._nRespFInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFInvalidInput() {
    return this._nRespFInvalid;
  }

  // n_resp_f_notauth - computed: false, optional: true, required: false
  private _nRespFNotauth?: number; 
  public get nRespFNotauth() {
    return this.getNumberAttribute('n_resp_f_notauth');
  }
  public set nRespFNotauth(value: number) {
    this._nRespFNotauth = value;
  }
  public resetNRespFNotauth() {
    this._nRespFNotauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFNotauthInput() {
    return this._nRespFNotauth;
  }

  // n_resp_f_notimp - computed: false, optional: true, required: false
  private _nRespFNotimp?: number; 
  public get nRespFNotimp() {
    return this.getNumberAttribute('n_resp_f_notimp');
  }
  public set nRespFNotimp(value: number) {
    this._nRespFNotimp = value;
  }
  public resetNRespFNotimp() {
    this._nRespFNotimp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFNotimpInput() {
    return this._nRespFNotimp;
  }

  // n_resp_f_notzone - computed: false, optional: true, required: false
  private _nRespFNotzone?: number; 
  public get nRespFNotzone() {
    return this.getNumberAttribute('n_resp_f_notzone');
  }
  public set nRespFNotzone(value: number) {
    this._nRespFNotzone = value;
  }
  public resetNRespFNotzone() {
    this._nRespFNotzone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFNotzoneInput() {
    return this._nRespFNotzone;
  }

  // n_resp_f_nxdomain - computed: false, optional: true, required: false
  private _nRespFNxdomain?: number; 
  public get nRespFNxdomain() {
    return this.getNumberAttribute('n_resp_f_nxdomain');
  }
  public set nRespFNxdomain(value: number) {
    this._nRespFNxdomain = value;
  }
  public resetNRespFNxdomain() {
    this._nRespFNxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFNxdomainInput() {
    return this._nRespFNxdomain;
  }

  // n_resp_f_nxrrset - computed: false, optional: true, required: false
  private _nRespFNxrrset?: number; 
  public get nRespFNxrrset() {
    return this.getNumberAttribute('n_resp_f_nxrrset');
  }
  public set nRespFNxrrset(value: number) {
    this._nRespFNxrrset = value;
  }
  public resetNRespFNxrrset() {
    this._nRespFNxrrset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFNxrrsetInput() {
    return this._nRespFNxrrset;
  }

  // n_resp_f_refused - computed: false, optional: true, required: false
  private _nRespFRefused?: number; 
  public get nRespFRefused() {
    return this.getNumberAttribute('n_resp_f_refused');
  }
  public set nRespFRefused(value: number) {
    this._nRespFRefused = value;
  }
  public resetNRespFRefused() {
    this._nRespFRefused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFRefusedInput() {
    return this._nRespFRefused;
  }

  // n_resp_f_servfail - computed: false, optional: true, required: false
  private _nRespFServfail?: number; 
  public get nRespFServfail() {
    return this.getNumberAttribute('n_resp_f_servfail');
  }
  public set nRespFServfail(value: number) {
    this._nRespFServfail = value;
  }
  public resetNRespFServfail() {
    this._nRespFServfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFServfailInput() {
    return this._nRespFServfail;
  }

  // n_resp_f_yxdomain - computed: false, optional: true, required: false
  private _nRespFYxdomain?: number; 
  public get nRespFYxdomain() {
    return this.getNumberAttribute('n_resp_f_yxdomain');
  }
  public set nRespFYxdomain(value: number) {
    this._nRespFYxdomain = value;
  }
  public resetNRespFYxdomain() {
    this._nRespFYxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFYxdomainInput() {
    return this._nRespFYxdomain;
  }

  // n_resp_f_yxrrset - computed: false, optional: true, required: false
  private _nRespFYxrrset?: number; 
  public get nRespFYxrrset() {
    return this.getNumberAttribute('n_resp_f_yxrrset');
  }
  public set nRespFYxrrset(value: number) {
    this._nRespFYxrrset = value;
  }
  public resetNRespFYxrrset() {
    this._nRespFYxrrset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nRespFYxrrsetInput() {
    return this._nRespFYxrrset;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats thunder_slb_dynamic_service_dns_stats}
*/
export class DataThunderSlbDynamicServiceDnsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_dynamic_service_dns_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDynamicServiceDnsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDynamicServiceDnsStats to import
  * @param importFromId The id of the existing DataThunderSlbDynamicServiceDnsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDynamicServiceDnsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_dynamic_service_dns_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dynamic_service_dns_stats thunder_slb_dynamic_service_dns_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDynamicServiceDnsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDynamicServiceDnsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_dynamic_service_dns_stats',
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
  private _stats = new DataThunderSlbDynamicServiceDnsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbDynamicServiceDnsStatsStats) {
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
      stats: dataThunderSlbDynamicServiceDnsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbDynamicServiceDnsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDynamicServiceDnsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
