// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbLinkProbeEntryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#id DataThunderSlbLinkProbeEntryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#oper DataThunderSlbLinkProbeEntryOper#oper}
  */
  readonly oper?: DataThunderSlbLinkProbeEntryOperOper;
}
export interface DataThunderSlbLinkProbeEntryOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#curr_probe_count DataThunderSlbLinkProbeEntryOper#curr_probe_count}
  */
  readonly currProbeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#data_cpu_id DataThunderSlbLinkProbeEntryOper#data_cpu_id}
  */
  readonly dataCpuId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#domain_name DataThunderSlbLinkProbeEntryOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#ip_type DataThunderSlbLinkProbeEntryOper#ip_type}
  */
  readonly ipType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#ipv4_addr DataThunderSlbLinkProbeEntryOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#ipv6_addr DataThunderSlbLinkProbeEntryOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#last_status_code DataThunderSlbLinkProbeEntryOper#last_status_code}
  */
  readonly lastStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#probe_interval DataThunderSlbLinkProbeEntryOper#probe_interval}
  */
  readonly probeInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#probe_template_name DataThunderSlbLinkProbeEntryOper#probe_template_name}
  */
  readonly probeTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#probes_per_test DataThunderSlbLinkProbeEntryOper#probes_per_test}
  */
  readonly probesPerTest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#ref_count DataThunderSlbLinkProbeEntryOper#ref_count}
  */
  readonly refCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rserver_name DataThunderSlbLinkProbeEntryOper#rserver_name}
  */
  readonly rserverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_avg DataThunderSlbLinkProbeEntryOper#rtt_avg}
  */
  readonly rttAvg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_method DataThunderSlbLinkProbeEntryOper#rtt_method}
  */
  readonly rttMethod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples1 DataThunderSlbLinkProbeEntryOper#rtt_samples1}
  */
  readonly rttSamples1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples10 DataThunderSlbLinkProbeEntryOper#rtt_samples10}
  */
  readonly rttSamples10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples2 DataThunderSlbLinkProbeEntryOper#rtt_samples2}
  */
  readonly rttSamples2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples3 DataThunderSlbLinkProbeEntryOper#rtt_samples3}
  */
  readonly rttSamples3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples4 DataThunderSlbLinkProbeEntryOper#rtt_samples4}
  */
  readonly rttSamples4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples5 DataThunderSlbLinkProbeEntryOper#rtt_samples5}
  */
  readonly rttSamples5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples6 DataThunderSlbLinkProbeEntryOper#rtt_samples6}
  */
  readonly rttSamples6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples7 DataThunderSlbLinkProbeEntryOper#rtt_samples7}
  */
  readonly rttSamples7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples8 DataThunderSlbLinkProbeEntryOper#rtt_samples8}
  */
  readonly rttSamples8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#rtt_samples9 DataThunderSlbLinkProbeEntryOper#rtt_samples9}
  */
  readonly rttSamples9?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#sg_name DataThunderSlbLinkProbeEntryOper#sg_name}
  */
  readonly sgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#target_type DataThunderSlbLinkProbeEntryOper#target_type}
  */
  readonly targetType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#test_interval DataThunderSlbLinkProbeEntryOper#test_interval}
  */
  readonly testInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#url DataThunderSlbLinkProbeEntryOper#url}
  */
  readonly url?: string;
}

export function dataThunderSlbLinkProbeEntryOperOperEntryListStructToTerraform(struct?: DataThunderSlbLinkProbeEntryOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_probe_count: cdktf.numberToTerraform(struct!.currProbeCount),
    data_cpu_id: cdktf.numberToTerraform(struct!.dataCpuId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    ip_type: cdktf.numberToTerraform(struct!.ipType),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    last_status_code: cdktf.numberToTerraform(struct!.lastStatusCode),
    probe_interval: cdktf.numberToTerraform(struct!.probeInterval),
    probe_template_name: cdktf.stringToTerraform(struct!.probeTemplateName),
    probes_per_test: cdktf.numberToTerraform(struct!.probesPerTest),
    ref_count: cdktf.numberToTerraform(struct!.refCount),
    rserver_name: cdktf.stringToTerraform(struct!.rserverName),
    rtt_avg: cdktf.numberToTerraform(struct!.rttAvg),
    rtt_method: cdktf.numberToTerraform(struct!.rttMethod),
    rtt_samples1: cdktf.numberToTerraform(struct!.rttSamples1),
    rtt_samples10: cdktf.numberToTerraform(struct!.rttSamples10),
    rtt_samples2: cdktf.numberToTerraform(struct!.rttSamples2),
    rtt_samples3: cdktf.numberToTerraform(struct!.rttSamples3),
    rtt_samples4: cdktf.numberToTerraform(struct!.rttSamples4),
    rtt_samples5: cdktf.numberToTerraform(struct!.rttSamples5),
    rtt_samples6: cdktf.numberToTerraform(struct!.rttSamples6),
    rtt_samples7: cdktf.numberToTerraform(struct!.rttSamples7),
    rtt_samples8: cdktf.numberToTerraform(struct!.rttSamples8),
    rtt_samples9: cdktf.numberToTerraform(struct!.rttSamples9),
    sg_name: cdktf.stringToTerraform(struct!.sgName),
    target_type: cdktf.numberToTerraform(struct!.targetType),
    test_interval: cdktf.numberToTerraform(struct!.testInterval),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataThunderSlbLinkProbeEntryOperOperEntryListStructToHclTerraform(struct?: DataThunderSlbLinkProbeEntryOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_probe_count: {
      value: cdktf.numberToHclTerraform(struct!.currProbeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_cpu_id: {
      value: cdktf.numberToHclTerraform(struct!.dataCpuId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_type: {
      value: cdktf.numberToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_status_code: {
      value: cdktf.numberToHclTerraform(struct!.lastStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_interval: {
      value: cdktf.numberToHclTerraform(struct!.probeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_template_name: {
      value: cdktf.stringToHclTerraform(struct!.probeTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes_per_test: {
      value: cdktf.numberToHclTerraform(struct!.probesPerTest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref_count: {
      value: cdktf.numberToHclTerraform(struct!.refCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rserver_name: {
      value: cdktf.stringToHclTerraform(struct!.rserverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rtt_avg: {
      value: cdktf.numberToHclTerraform(struct!.rttAvg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_method: {
      value: cdktf.numberToHclTerraform(struct!.rttMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples1: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples10: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples2: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples3: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples4: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples5: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples6: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples7: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples8: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_samples9: {
      value: cdktf.numberToHclTerraform(struct!.rttSamples9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sg_name: {
      value: cdktf.stringToHclTerraform(struct!.sgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.numberToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_interval: {
      value: cdktf.numberToHclTerraform(struct!.testInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbLinkProbeEntryOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbLinkProbeEntryOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currProbeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProbeCount = this._currProbeCount;
    }
    if (this._dataCpuId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCpuId = this._dataCpuId;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._lastStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastStatusCode = this._lastStatusCode;
    }
    if (this._probeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeInterval = this._probeInterval;
    }
    if (this._probeTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTemplateName = this._probeTemplateName;
    }
    if (this._probesPerTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.probesPerTest = this._probesPerTest;
    }
    if (this._refCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.refCount = this._refCount;
    }
    if (this._rserverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rserverName = this._rserverName;
    }
    if (this._rttAvg !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttAvg = this._rttAvg;
    }
    if (this._rttMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttMethod = this._rttMethod;
    }
    if (this._rttSamples1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples1 = this._rttSamples1;
    }
    if (this._rttSamples10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples10 = this._rttSamples10;
    }
    if (this._rttSamples2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples2 = this._rttSamples2;
    }
    if (this._rttSamples3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples3 = this._rttSamples3;
    }
    if (this._rttSamples4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples4 = this._rttSamples4;
    }
    if (this._rttSamples5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples5 = this._rttSamples5;
    }
    if (this._rttSamples6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples6 = this._rttSamples6;
    }
    if (this._rttSamples7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples7 = this._rttSamples7;
    }
    if (this._rttSamples8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples8 = this._rttSamples8;
    }
    if (this._rttSamples9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttSamples9 = this._rttSamples9;
    }
    if (this._sgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgName = this._sgName;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._testInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.testInterval = this._testInterval;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbLinkProbeEntryOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currProbeCount = undefined;
      this._dataCpuId = undefined;
      this._domainName = undefined;
      this._ipType = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._lastStatusCode = undefined;
      this._probeInterval = undefined;
      this._probeTemplateName = undefined;
      this._probesPerTest = undefined;
      this._refCount = undefined;
      this._rserverName = undefined;
      this._rttAvg = undefined;
      this._rttMethod = undefined;
      this._rttSamples1 = undefined;
      this._rttSamples10 = undefined;
      this._rttSamples2 = undefined;
      this._rttSamples3 = undefined;
      this._rttSamples4 = undefined;
      this._rttSamples5 = undefined;
      this._rttSamples6 = undefined;
      this._rttSamples7 = undefined;
      this._rttSamples8 = undefined;
      this._rttSamples9 = undefined;
      this._sgName = undefined;
      this._targetType = undefined;
      this._testInterval = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currProbeCount = value.currProbeCount;
      this._dataCpuId = value.dataCpuId;
      this._domainName = value.domainName;
      this._ipType = value.ipType;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._lastStatusCode = value.lastStatusCode;
      this._probeInterval = value.probeInterval;
      this._probeTemplateName = value.probeTemplateName;
      this._probesPerTest = value.probesPerTest;
      this._refCount = value.refCount;
      this._rserverName = value.rserverName;
      this._rttAvg = value.rttAvg;
      this._rttMethod = value.rttMethod;
      this._rttSamples1 = value.rttSamples1;
      this._rttSamples10 = value.rttSamples10;
      this._rttSamples2 = value.rttSamples2;
      this._rttSamples3 = value.rttSamples3;
      this._rttSamples4 = value.rttSamples4;
      this._rttSamples5 = value.rttSamples5;
      this._rttSamples6 = value.rttSamples6;
      this._rttSamples7 = value.rttSamples7;
      this._rttSamples8 = value.rttSamples8;
      this._rttSamples9 = value.rttSamples9;
      this._sgName = value.sgName;
      this._targetType = value.targetType;
      this._testInterval = value.testInterval;
      this._url = value.url;
    }
  }

  // curr_probe_count - computed: false, optional: true, required: false
  private _currProbeCount?: number; 
  public get currProbeCount() {
    return this.getNumberAttribute('curr_probe_count');
  }
  public set currProbeCount(value: number) {
    this._currProbeCount = value;
  }
  public resetCurrProbeCount() {
    this._currProbeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProbeCountInput() {
    return this._currProbeCount;
  }

  // data_cpu_id - computed: false, optional: true, required: false
  private _dataCpuId?: number; 
  public get dataCpuId() {
    return this.getNumberAttribute('data_cpu_id');
  }
  public set dataCpuId(value: number) {
    this._dataCpuId = value;
  }
  public resetDataCpuId() {
    this._dataCpuId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCpuIdInput() {
    return this._dataCpuId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: number; 
  public get ipType() {
    return this.getNumberAttribute('ip_type');
  }
  public set ipType(value: number) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // last_status_code - computed: false, optional: true, required: false
  private _lastStatusCode?: number; 
  public get lastStatusCode() {
    return this.getNumberAttribute('last_status_code');
  }
  public set lastStatusCode(value: number) {
    this._lastStatusCode = value;
  }
  public resetLastStatusCode() {
    this._lastStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastStatusCodeInput() {
    return this._lastStatusCode;
  }

  // probe_interval - computed: false, optional: true, required: false
  private _probeInterval?: number; 
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
  public set probeInterval(value: number) {
    this._probeInterval = value;
  }
  public resetProbeInterval() {
    this._probeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIntervalInput() {
    return this._probeInterval;
  }

  // probe_template_name - computed: false, optional: true, required: false
  private _probeTemplateName?: string; 
  public get probeTemplateName() {
    return this.getStringAttribute('probe_template_name');
  }
  public set probeTemplateName(value: string) {
    this._probeTemplateName = value;
  }
  public resetProbeTemplateName() {
    this._probeTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTemplateNameInput() {
    return this._probeTemplateName;
  }

  // probes_per_test - computed: false, optional: true, required: false
  private _probesPerTest?: number; 
  public get probesPerTest() {
    return this.getNumberAttribute('probes_per_test');
  }
  public set probesPerTest(value: number) {
    this._probesPerTest = value;
  }
  public resetProbesPerTest() {
    this._probesPerTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesPerTestInput() {
    return this._probesPerTest;
  }

  // ref_count - computed: false, optional: true, required: false
  private _refCount?: number; 
  public get refCount() {
    return this.getNumberAttribute('ref_count');
  }
  public set refCount(value: number) {
    this._refCount = value;
  }
  public resetRefCount() {
    this._refCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refCountInput() {
    return this._refCount;
  }

  // rserver_name - computed: false, optional: true, required: false
  private _rserverName?: string; 
  public get rserverName() {
    return this.getStringAttribute('rserver_name');
  }
  public set rserverName(value: string) {
    this._rserverName = value;
  }
  public resetRserverName() {
    this._rserverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rserverNameInput() {
    return this._rserverName;
  }

  // rtt_avg - computed: false, optional: true, required: false
  private _rttAvg?: number; 
  public get rttAvg() {
    return this.getNumberAttribute('rtt_avg');
  }
  public set rttAvg(value: number) {
    this._rttAvg = value;
  }
  public resetRttAvg() {
    this._rttAvg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttAvgInput() {
    return this._rttAvg;
  }

  // rtt_method - computed: false, optional: true, required: false
  private _rttMethod?: number; 
  public get rttMethod() {
    return this.getNumberAttribute('rtt_method');
  }
  public set rttMethod(value: number) {
    this._rttMethod = value;
  }
  public resetRttMethod() {
    this._rttMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttMethodInput() {
    return this._rttMethod;
  }

  // rtt_samples1 - computed: false, optional: true, required: false
  private _rttSamples1?: number; 
  public get rttSamples1() {
    return this.getNumberAttribute('rtt_samples1');
  }
  public set rttSamples1(value: number) {
    this._rttSamples1 = value;
  }
  public resetRttSamples1() {
    this._rttSamples1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples1Input() {
    return this._rttSamples1;
  }

  // rtt_samples10 - computed: false, optional: true, required: false
  private _rttSamples10?: number; 
  public get rttSamples10() {
    return this.getNumberAttribute('rtt_samples10');
  }
  public set rttSamples10(value: number) {
    this._rttSamples10 = value;
  }
  public resetRttSamples10() {
    this._rttSamples10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples10Input() {
    return this._rttSamples10;
  }

  // rtt_samples2 - computed: false, optional: true, required: false
  private _rttSamples2?: number; 
  public get rttSamples2() {
    return this.getNumberAttribute('rtt_samples2');
  }
  public set rttSamples2(value: number) {
    this._rttSamples2 = value;
  }
  public resetRttSamples2() {
    this._rttSamples2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples2Input() {
    return this._rttSamples2;
  }

  // rtt_samples3 - computed: false, optional: true, required: false
  private _rttSamples3?: number; 
  public get rttSamples3() {
    return this.getNumberAttribute('rtt_samples3');
  }
  public set rttSamples3(value: number) {
    this._rttSamples3 = value;
  }
  public resetRttSamples3() {
    this._rttSamples3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples3Input() {
    return this._rttSamples3;
  }

  // rtt_samples4 - computed: false, optional: true, required: false
  private _rttSamples4?: number; 
  public get rttSamples4() {
    return this.getNumberAttribute('rtt_samples4');
  }
  public set rttSamples4(value: number) {
    this._rttSamples4 = value;
  }
  public resetRttSamples4() {
    this._rttSamples4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples4Input() {
    return this._rttSamples4;
  }

  // rtt_samples5 - computed: false, optional: true, required: false
  private _rttSamples5?: number; 
  public get rttSamples5() {
    return this.getNumberAttribute('rtt_samples5');
  }
  public set rttSamples5(value: number) {
    this._rttSamples5 = value;
  }
  public resetRttSamples5() {
    this._rttSamples5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples5Input() {
    return this._rttSamples5;
  }

  // rtt_samples6 - computed: false, optional: true, required: false
  private _rttSamples6?: number; 
  public get rttSamples6() {
    return this.getNumberAttribute('rtt_samples6');
  }
  public set rttSamples6(value: number) {
    this._rttSamples6 = value;
  }
  public resetRttSamples6() {
    this._rttSamples6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples6Input() {
    return this._rttSamples6;
  }

  // rtt_samples7 - computed: false, optional: true, required: false
  private _rttSamples7?: number; 
  public get rttSamples7() {
    return this.getNumberAttribute('rtt_samples7');
  }
  public set rttSamples7(value: number) {
    this._rttSamples7 = value;
  }
  public resetRttSamples7() {
    this._rttSamples7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples7Input() {
    return this._rttSamples7;
  }

  // rtt_samples8 - computed: false, optional: true, required: false
  private _rttSamples8?: number; 
  public get rttSamples8() {
    return this.getNumberAttribute('rtt_samples8');
  }
  public set rttSamples8(value: number) {
    this._rttSamples8 = value;
  }
  public resetRttSamples8() {
    this._rttSamples8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples8Input() {
    return this._rttSamples8;
  }

  // rtt_samples9 - computed: false, optional: true, required: false
  private _rttSamples9?: number; 
  public get rttSamples9() {
    return this.getNumberAttribute('rtt_samples9');
  }
  public set rttSamples9(value: number) {
    this._rttSamples9 = value;
  }
  public resetRttSamples9() {
    this._rttSamples9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttSamples9Input() {
    return this._rttSamples9;
  }

  // sg_name - computed: false, optional: true, required: false
  private _sgName?: string; 
  public get sgName() {
    return this.getStringAttribute('sg_name');
  }
  public set sgName(value: string) {
    this._sgName = value;
  }
  public resetSgName() {
    this._sgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgNameInput() {
    return this._sgName;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: number; 
  public get targetType() {
    return this.getNumberAttribute('target_type');
  }
  public set targetType(value: number) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // test_interval - computed: false, optional: true, required: false
  private _testInterval?: number; 
  public get testInterval() {
    return this.getNumberAttribute('test_interval');
  }
  public set testInterval(value: number) {
    this._testInterval = value;
  }
  public resetTestInterval() {
    this._testInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntervalInput() {
    return this._testInterval;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataThunderSlbLinkProbeEntryOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbLinkProbeEntryOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbLinkProbeEntryOperOperEntryListStructOutputReference {
    return new DataThunderSlbLinkProbeEntryOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbLinkProbeEntryOperOper {
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#entry_list DataThunderSlbLinkProbeEntryOper#entry_list}
  */
  readonly entryList?: DataThunderSlbLinkProbeEntryOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbLinkProbeEntryOperOperToTerraform(struct?: DataThunderSlbLinkProbeEntryOperOperOutputReference | DataThunderSlbLinkProbeEntryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_list: cdktf.listMapper(dataThunderSlbLinkProbeEntryOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderSlbLinkProbeEntryOperOperToHclTerraform(struct?: DataThunderSlbLinkProbeEntryOperOperOutputReference | DataThunderSlbLinkProbeEntryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderSlbLinkProbeEntryOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbLinkProbeEntryOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbLinkProbeEntryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbLinkProbeEntryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbLinkProbeEntryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryList.internalValue = value.entryList;
    }
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderSlbLinkProbeEntryOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderSlbLinkProbeEntryOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper thunder_slb_link_probe_entry_oper}
*/
export class DataThunderSlbLinkProbeEntryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_link_probe_entry_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbLinkProbeEntryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbLinkProbeEntryOper to import
  * @param importFromId The id of the existing DataThunderSlbLinkProbeEntryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbLinkProbeEntryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_link_probe_entry_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_link_probe_entry_oper thunder_slb_link_probe_entry_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbLinkProbeEntryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbLinkProbeEntryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_link_probe_entry_oper',
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
  private _oper = new DataThunderSlbLinkProbeEntryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbLinkProbeEntryOperOper) {
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
      oper: dataThunderSlbLinkProbeEntryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbLinkProbeEntryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbLinkProbeEntryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
