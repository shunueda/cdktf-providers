// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemSessionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#id DataThunderSystemSessionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#oper DataThunderSystemSessionOper#oper}
  */
  readonly oper?: DataThunderSystemSessionOperOper;
}
export interface DataThunderSystemSessionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#all DataThunderSystemSessionOper#all}
  */
  readonly all?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#dest_port DataThunderSystemSessionOper#dest_port}
  */
  readonly destPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#dest_v4_addr DataThunderSystemSessionOper#dest_v4_addr}
  */
  readonly destV4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#dest_v6_addr DataThunderSystemSessionOper#dest_v6_addr}
  */
  readonly destV6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#filter_name DataThunderSystemSessionOper#filter_name}
  */
  readonly filterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#fw DataThunderSystemSessionOper#fw}
  */
  readonly fw?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#fw_ipv4 DataThunderSystemSessionOper#fw_ipv4}
  */
  readonly fwIpv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#fw_ipv6 DataThunderSystemSessionOper#fw_ipv6}
  */
  readonly fwIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#helper_sessions DataThunderSystemSessionOper#helper_sessions}
  */
  readonly helperSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#ipv4 DataThunderSystemSessionOper#ipv4}
  */
  readonly ipv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#ipv6 DataThunderSystemSessionOper#ipv6}
  */
  readonly ipv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist DataThunderSystemSessionOper#persist}
  */
  readonly persist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_dest_port DataThunderSystemSessionOper#persist_dest_port}
  */
  readonly persistDestPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_dest_v4_addr DataThunderSystemSessionOper#persist_dest_v4_addr}
  */
  readonly persistDestV4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_dest_v6_addr DataThunderSystemSessionOper#persist_dest_v6_addr}
  */
  readonly persistDestV6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_ipv6 DataThunderSystemSessionOper#persist_ipv6}
  */
  readonly persistIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_ipv6_type DataThunderSystemSessionOper#persist_ipv6_type}
  */
  readonly persistIpv6Type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_source_port DataThunderSystemSessionOper#persist_source_port}
  */
  readonly persistSourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_source_v4_addr DataThunderSystemSessionOper#persist_source_v4_addr}
  */
  readonly persistSourceV4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_source_v6_addr DataThunderSystemSessionOper#persist_source_v6_addr}
  */
  readonly persistSourceV6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_type DataThunderSystemSessionOper#persist_type}
  */
  readonly persistType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_v6_dest_addr DataThunderSystemSessionOper#persist_v6_dest_addr}
  */
  readonly persistV6DestAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_v6_dest_port DataThunderSystemSessionOper#persist_v6_dest_port}
  */
  readonly persistV6DestPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_v6_source_addr DataThunderSystemSessionOper#persist_v6_source_addr}
  */
  readonly persistV6SourceAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#persist_v6_source_port DataThunderSystemSessionOper#persist_v6_source_port}
  */
  readonly persistV6SourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#sip DataThunderSystemSessionOper#sip}
  */
  readonly sip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#sip_dest_port DataThunderSystemSessionOper#sip_dest_port}
  */
  readonly sipDestPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#sip_dest_v4_addr DataThunderSystemSessionOper#sip_dest_v4_addr}
  */
  readonly sipDestV4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#sip_dest_v6_addr DataThunderSystemSessionOper#sip_dest_v6_addr}
  */
  readonly sipDestV6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#sip_source_port DataThunderSystemSessionOper#sip_source_port}
  */
  readonly sipSourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#sip_source_v4_addr DataThunderSystemSessionOper#sip_source_v4_addr}
  */
  readonly sipSourceV4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#sip_source_v6_addr DataThunderSystemSessionOper#sip_source_v6_addr}
  */
  readonly sipSourceV6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#source_port DataThunderSystemSessionOper#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#source_v4_addr DataThunderSystemSessionOper#source_v4_addr}
  */
  readonly sourceV4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#source_v6_addr DataThunderSystemSessionOper#source_v6_addr}
  */
  readonly sourceV6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#uie DataThunderSystemSessionOper#uie}
  */
  readonly uie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#v6_dest_port DataThunderSystemSessionOper#v6_dest_port}
  */
  readonly v6DestPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#v6_source_port DataThunderSystemSessionOper#v6_source_port}
  */
  readonly v6SourcePort?: number;
}

export function dataThunderSystemSessionOperOperToTerraform(struct?: DataThunderSystemSessionOperOperOutputReference | DataThunderSystemSessionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    dest_port: cdktf.numberToTerraform(struct!.destPort),
    dest_v4_addr: cdktf.stringToTerraform(struct!.destV4Addr),
    dest_v6_addr: cdktf.stringToTerraform(struct!.destV6Addr),
    filter_name: cdktf.stringToTerraform(struct!.filterName),
    fw: cdktf.numberToTerraform(struct!.fw),
    fw_ipv4: cdktf.numberToTerraform(struct!.fwIpv4),
    fw_ipv6: cdktf.numberToTerraform(struct!.fwIpv6),
    helper_sessions: cdktf.numberToTerraform(struct!.helperSessions),
    ipv4: cdktf.numberToTerraform(struct!.ipv4),
    ipv6: cdktf.numberToTerraform(struct!.ipv6),
    persist: cdktf.numberToTerraform(struct!.persist),
    persist_dest_port: cdktf.numberToTerraform(struct!.persistDestPort),
    persist_dest_v4_addr: cdktf.stringToTerraform(struct!.persistDestV4Addr),
    persist_dest_v6_addr: cdktf.stringToTerraform(struct!.persistDestV6Addr),
    persist_ipv6: cdktf.numberToTerraform(struct!.persistIpv6),
    persist_ipv6_type: cdktf.stringToTerraform(struct!.persistIpv6Type),
    persist_source_port: cdktf.numberToTerraform(struct!.persistSourcePort),
    persist_source_v4_addr: cdktf.stringToTerraform(struct!.persistSourceV4Addr),
    persist_source_v6_addr: cdktf.stringToTerraform(struct!.persistSourceV6Addr),
    persist_type: cdktf.stringToTerraform(struct!.persistType),
    persist_v6_dest_addr: cdktf.stringToTerraform(struct!.persistV6DestAddr),
    persist_v6_dest_port: cdktf.numberToTerraform(struct!.persistV6DestPort),
    persist_v6_source_addr: cdktf.stringToTerraform(struct!.persistV6SourceAddr),
    persist_v6_source_port: cdktf.numberToTerraform(struct!.persistV6SourcePort),
    sip: cdktf.numberToTerraform(struct!.sip),
    sip_dest_port: cdktf.numberToTerraform(struct!.sipDestPort),
    sip_dest_v4_addr: cdktf.stringToTerraform(struct!.sipDestV4Addr),
    sip_dest_v6_addr: cdktf.stringToTerraform(struct!.sipDestV6Addr),
    sip_source_port: cdktf.numberToTerraform(struct!.sipSourcePort),
    sip_source_v4_addr: cdktf.stringToTerraform(struct!.sipSourceV4Addr),
    sip_source_v6_addr: cdktf.stringToTerraform(struct!.sipSourceV6Addr),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_v4_addr: cdktf.stringToTerraform(struct!.sourceV4Addr),
    source_v6_addr: cdktf.stringToTerraform(struct!.sourceV6Addr),
    uie: cdktf.numberToTerraform(struct!.uie),
    v6_dest_port: cdktf.numberToTerraform(struct!.v6DestPort),
    v6_source_port: cdktf.numberToTerraform(struct!.v6SourcePort),
  }
}


export function dataThunderSystemSessionOperOperToHclTerraform(struct?: DataThunderSystemSessionOperOperOutputReference | DataThunderSystemSessionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_port: {
      value: cdktf.numberToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_v4_addr: {
      value: cdktf.stringToHclTerraform(struct!.destV4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.destV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_name: {
      value: cdktf.stringToHclTerraform(struct!.filterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw: {
      value: cdktf.numberToHclTerraform(struct!.fw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.fwIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.fwIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    helper_sessions: {
      value: cdktf.numberToHclTerraform(struct!.helperSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4: {
      value: cdktf.numberToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.numberToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist: {
      value: cdktf.numberToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_dest_port: {
      value: cdktf.numberToHclTerraform(struct!.persistDestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_dest_v4_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistDestV4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_dest_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistDestV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.persistIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_ipv6_type: {
      value: cdktf.stringToHclTerraform(struct!.persistIpv6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_source_port: {
      value: cdktf.numberToHclTerraform(struct!.persistSourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_source_v4_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistSourceV4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_source_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistSourceV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_type: {
      value: cdktf.stringToHclTerraform(struct!.persistType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_v6_dest_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistV6DestAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_v6_dest_port: {
      value: cdktf.numberToHclTerraform(struct!.persistV6DestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_v6_source_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistV6SourceAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_v6_source_port: {
      value: cdktf.numberToHclTerraform(struct!.persistV6SourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip: {
      value: cdktf.numberToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_dest_port: {
      value: cdktf.numberToHclTerraform(struct!.sipDestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_dest_v4_addr: {
      value: cdktf.stringToHclTerraform(struct!.sipDestV4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_dest_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.sipDestV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_source_port: {
      value: cdktf.numberToHclTerraform(struct!.sipSourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_source_v4_addr: {
      value: cdktf.stringToHclTerraform(struct!.sipSourceV4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_source_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.sipSourceV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_v4_addr: {
      value: cdktf.stringToHclTerraform(struct!.sourceV4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.sourceV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uie: {
      value: cdktf.numberToHclTerraform(struct!.uie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_dest_port: {
      value: cdktf.numberToHclTerraform(struct!.v6DestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_source_port: {
      value: cdktf.numberToHclTerraform(struct!.v6SourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemSessionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemSessionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._destV4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destV4Addr = this._destV4Addr;
    }
    if (this._destV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destV6Addr = this._destV6Addr;
    }
    if (this._filterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterName = this._filterName;
    }
    if (this._fw !== undefined) {
      hasAnyValues = true;
      internalValueResult.fw = this._fw;
    }
    if (this._fwIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwIpv4 = this._fwIpv4;
    }
    if (this._fwIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwIpv6 = this._fwIpv6;
    }
    if (this._helperSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperSessions = this._helperSessions;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    if (this._persistDestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistDestPort = this._persistDestPort;
    }
    if (this._persistDestV4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistDestV4Addr = this._persistDestV4Addr;
    }
    if (this._persistDestV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistDestV6Addr = this._persistDestV6Addr;
    }
    if (this._persistIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistIpv6 = this._persistIpv6;
    }
    if (this._persistIpv6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistIpv6Type = this._persistIpv6Type;
    }
    if (this._persistSourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSourcePort = this._persistSourcePort;
    }
    if (this._persistSourceV4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSourceV4Addr = this._persistSourceV4Addr;
    }
    if (this._persistSourceV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSourceV6Addr = this._persistSourceV6Addr;
    }
    if (this._persistType !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistType = this._persistType;
    }
    if (this._persistV6DestAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6DestAddr = this._persistV6DestAddr;
    }
    if (this._persistV6DestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6DestPort = this._persistV6DestPort;
    }
    if (this._persistV6SourceAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6SourceAddr = this._persistV6SourceAddr;
    }
    if (this._persistV6SourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6SourcePort = this._persistV6SourcePort;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sipDestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipDestPort = this._sipDestPort;
    }
    if (this._sipDestV4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipDestV4Addr = this._sipDestV4Addr;
    }
    if (this._sipDestV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipDestV6Addr = this._sipDestV6Addr;
    }
    if (this._sipSourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipSourcePort = this._sipSourcePort;
    }
    if (this._sipSourceV4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipSourceV4Addr = this._sipSourceV4Addr;
    }
    if (this._sipSourceV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipSourceV6Addr = this._sipSourceV6Addr;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceV4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceV4Addr = this._sourceV4Addr;
    }
    if (this._sourceV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceV6Addr = this._sourceV6Addr;
    }
    if (this._uie !== undefined) {
      hasAnyValues = true;
      internalValueResult.uie = this._uie;
    }
    if (this._v6DestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6DestPort = this._v6DestPort;
    }
    if (this._v6SourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6SourcePort = this._v6SourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemSessionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._destPort = undefined;
      this._destV4Addr = undefined;
      this._destV6Addr = undefined;
      this._filterName = undefined;
      this._fw = undefined;
      this._fwIpv4 = undefined;
      this._fwIpv6 = undefined;
      this._helperSessions = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._persist = undefined;
      this._persistDestPort = undefined;
      this._persistDestV4Addr = undefined;
      this._persistDestV6Addr = undefined;
      this._persistIpv6 = undefined;
      this._persistIpv6Type = undefined;
      this._persistSourcePort = undefined;
      this._persistSourceV4Addr = undefined;
      this._persistSourceV6Addr = undefined;
      this._persistType = undefined;
      this._persistV6DestAddr = undefined;
      this._persistV6DestPort = undefined;
      this._persistV6SourceAddr = undefined;
      this._persistV6SourcePort = undefined;
      this._sip = undefined;
      this._sipDestPort = undefined;
      this._sipDestV4Addr = undefined;
      this._sipDestV6Addr = undefined;
      this._sipSourcePort = undefined;
      this._sipSourceV4Addr = undefined;
      this._sipSourceV6Addr = undefined;
      this._sourcePort = undefined;
      this._sourceV4Addr = undefined;
      this._sourceV6Addr = undefined;
      this._uie = undefined;
      this._v6DestPort = undefined;
      this._v6SourcePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._destPort = value.destPort;
      this._destV4Addr = value.destV4Addr;
      this._destV6Addr = value.destV6Addr;
      this._filterName = value.filterName;
      this._fw = value.fw;
      this._fwIpv4 = value.fwIpv4;
      this._fwIpv6 = value.fwIpv6;
      this._helperSessions = value.helperSessions;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._persist = value.persist;
      this._persistDestPort = value.persistDestPort;
      this._persistDestV4Addr = value.persistDestV4Addr;
      this._persistDestV6Addr = value.persistDestV6Addr;
      this._persistIpv6 = value.persistIpv6;
      this._persistIpv6Type = value.persistIpv6Type;
      this._persistSourcePort = value.persistSourcePort;
      this._persistSourceV4Addr = value.persistSourceV4Addr;
      this._persistSourceV6Addr = value.persistSourceV6Addr;
      this._persistType = value.persistType;
      this._persistV6DestAddr = value.persistV6DestAddr;
      this._persistV6DestPort = value.persistV6DestPort;
      this._persistV6SourceAddr = value.persistV6SourceAddr;
      this._persistV6SourcePort = value.persistV6SourcePort;
      this._sip = value.sip;
      this._sipDestPort = value.sipDestPort;
      this._sipDestV4Addr = value.sipDestV4Addr;
      this._sipDestV6Addr = value.sipDestV6Addr;
      this._sipSourcePort = value.sipSourcePort;
      this._sipSourceV4Addr = value.sipSourceV4Addr;
      this._sipSourceV6Addr = value.sipSourceV6Addr;
      this._sourcePort = value.sourcePort;
      this._sourceV4Addr = value.sourceV4Addr;
      this._sourceV6Addr = value.sourceV6Addr;
      this._uie = value.uie;
      this._v6DestPort = value.v6DestPort;
      this._v6SourcePort = value.v6SourcePort;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_v4_addr - computed: false, optional: true, required: false
  private _destV4Addr?: string; 
  public get destV4Addr() {
    return this.getStringAttribute('dest_v4_addr');
  }
  public set destV4Addr(value: string) {
    this._destV4Addr = value;
  }
  public resetDestV4Addr() {
    this._destV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destV4AddrInput() {
    return this._destV4Addr;
  }

  // dest_v6_addr - computed: false, optional: true, required: false
  private _destV6Addr?: string; 
  public get destV6Addr() {
    return this.getStringAttribute('dest_v6_addr');
  }
  public set destV6Addr(value: string) {
    this._destV6Addr = value;
  }
  public resetDestV6Addr() {
    this._destV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destV6AddrInput() {
    return this._destV6Addr;
  }

  // filter_name - computed: false, optional: true, required: false
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  public resetFilterName() {
    this._filterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // fw - computed: false, optional: true, required: false
  private _fw?: number; 
  public get fw() {
    return this.getNumberAttribute('fw');
  }
  public set fw(value: number) {
    this._fw = value;
  }
  public resetFw() {
    this._fw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInput() {
    return this._fw;
  }

  // fw_ipv4 - computed: false, optional: true, required: false
  private _fwIpv4?: number; 
  public get fwIpv4() {
    return this.getNumberAttribute('fw_ipv4');
  }
  public set fwIpv4(value: number) {
    this._fwIpv4 = value;
  }
  public resetFwIpv4() {
    this._fwIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwIpv4Input() {
    return this._fwIpv4;
  }

  // fw_ipv6 - computed: false, optional: true, required: false
  private _fwIpv6?: number; 
  public get fwIpv6() {
    return this.getNumberAttribute('fw_ipv6');
  }
  public set fwIpv6(value: number) {
    this._fwIpv6 = value;
  }
  public resetFwIpv6() {
    this._fwIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwIpv6Input() {
    return this._fwIpv6;
  }

  // helper_sessions - computed: false, optional: true, required: false
  private _helperSessions?: number; 
  public get helperSessions() {
    return this.getNumberAttribute('helper_sessions');
  }
  public set helperSessions(value: number) {
    this._helperSessions = value;
  }
  public resetHelperSessions() {
    this._helperSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperSessionsInput() {
    return this._helperSessions;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: number; 
  public get ipv4() {
    return this.getNumberAttribute('ipv4');
  }
  public set ipv4(value: number) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: number; 
  public get ipv6() {
    return this.getNumberAttribute('ipv6');
  }
  public set ipv6(value: number) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // persist - computed: false, optional: true, required: false
  private _persist?: number; 
  public get persist() {
    return this.getNumberAttribute('persist');
  }
  public set persist(value: number) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }

  // persist_dest_port - computed: false, optional: true, required: false
  private _persistDestPort?: number; 
  public get persistDestPort() {
    return this.getNumberAttribute('persist_dest_port');
  }
  public set persistDestPort(value: number) {
    this._persistDestPort = value;
  }
  public resetPersistDestPort() {
    this._persistDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistDestPortInput() {
    return this._persistDestPort;
  }

  // persist_dest_v4_addr - computed: false, optional: true, required: false
  private _persistDestV4Addr?: string; 
  public get persistDestV4Addr() {
    return this.getStringAttribute('persist_dest_v4_addr');
  }
  public set persistDestV4Addr(value: string) {
    this._persistDestV4Addr = value;
  }
  public resetPersistDestV4Addr() {
    this._persistDestV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistDestV4AddrInput() {
    return this._persistDestV4Addr;
  }

  // persist_dest_v6_addr - computed: false, optional: true, required: false
  private _persistDestV6Addr?: string; 
  public get persistDestV6Addr() {
    return this.getStringAttribute('persist_dest_v6_addr');
  }
  public set persistDestV6Addr(value: string) {
    this._persistDestV6Addr = value;
  }
  public resetPersistDestV6Addr() {
    this._persistDestV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistDestV6AddrInput() {
    return this._persistDestV6Addr;
  }

  // persist_ipv6 - computed: false, optional: true, required: false
  private _persistIpv6?: number; 
  public get persistIpv6() {
    return this.getNumberAttribute('persist_ipv6');
  }
  public set persistIpv6(value: number) {
    this._persistIpv6 = value;
  }
  public resetPersistIpv6() {
    this._persistIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistIpv6Input() {
    return this._persistIpv6;
  }

  // persist_ipv6_type - computed: false, optional: true, required: false
  private _persistIpv6Type?: string; 
  public get persistIpv6Type() {
    return this.getStringAttribute('persist_ipv6_type');
  }
  public set persistIpv6Type(value: string) {
    this._persistIpv6Type = value;
  }
  public resetPersistIpv6Type() {
    this._persistIpv6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistIpv6TypeInput() {
    return this._persistIpv6Type;
  }

  // persist_source_port - computed: false, optional: true, required: false
  private _persistSourcePort?: number; 
  public get persistSourcePort() {
    return this.getNumberAttribute('persist_source_port');
  }
  public set persistSourcePort(value: number) {
    this._persistSourcePort = value;
  }
  public resetPersistSourcePort() {
    this._persistSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSourcePortInput() {
    return this._persistSourcePort;
  }

  // persist_source_v4_addr - computed: false, optional: true, required: false
  private _persistSourceV4Addr?: string; 
  public get persistSourceV4Addr() {
    return this.getStringAttribute('persist_source_v4_addr');
  }
  public set persistSourceV4Addr(value: string) {
    this._persistSourceV4Addr = value;
  }
  public resetPersistSourceV4Addr() {
    this._persistSourceV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSourceV4AddrInput() {
    return this._persistSourceV4Addr;
  }

  // persist_source_v6_addr - computed: false, optional: true, required: false
  private _persistSourceV6Addr?: string; 
  public get persistSourceV6Addr() {
    return this.getStringAttribute('persist_source_v6_addr');
  }
  public set persistSourceV6Addr(value: string) {
    this._persistSourceV6Addr = value;
  }
  public resetPersistSourceV6Addr() {
    this._persistSourceV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSourceV6AddrInput() {
    return this._persistSourceV6Addr;
  }

  // persist_type - computed: false, optional: true, required: false
  private _persistType?: string; 
  public get persistType() {
    return this.getStringAttribute('persist_type');
  }
  public set persistType(value: string) {
    this._persistType = value;
  }
  public resetPersistType() {
    this._persistType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistTypeInput() {
    return this._persistType;
  }

  // persist_v6_dest_addr - computed: false, optional: true, required: false
  private _persistV6DestAddr?: string; 
  public get persistV6DestAddr() {
    return this.getStringAttribute('persist_v6_dest_addr');
  }
  public set persistV6DestAddr(value: string) {
    this._persistV6DestAddr = value;
  }
  public resetPersistV6DestAddr() {
    this._persistV6DestAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6DestAddrInput() {
    return this._persistV6DestAddr;
  }

  // persist_v6_dest_port - computed: false, optional: true, required: false
  private _persistV6DestPort?: number; 
  public get persistV6DestPort() {
    return this.getNumberAttribute('persist_v6_dest_port');
  }
  public set persistV6DestPort(value: number) {
    this._persistV6DestPort = value;
  }
  public resetPersistV6DestPort() {
    this._persistV6DestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6DestPortInput() {
    return this._persistV6DestPort;
  }

  // persist_v6_source_addr - computed: false, optional: true, required: false
  private _persistV6SourceAddr?: string; 
  public get persistV6SourceAddr() {
    return this.getStringAttribute('persist_v6_source_addr');
  }
  public set persistV6SourceAddr(value: string) {
    this._persistV6SourceAddr = value;
  }
  public resetPersistV6SourceAddr() {
    this._persistV6SourceAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6SourceAddrInput() {
    return this._persistV6SourceAddr;
  }

  // persist_v6_source_port - computed: false, optional: true, required: false
  private _persistV6SourcePort?: number; 
  public get persistV6SourcePort() {
    return this.getNumberAttribute('persist_v6_source_port');
  }
  public set persistV6SourcePort(value: number) {
    this._persistV6SourcePort = value;
  }
  public resetPersistV6SourcePort() {
    this._persistV6SourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6SourcePortInput() {
    return this._persistV6SourcePort;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: number; 
  public get sip() {
    return this.getNumberAttribute('sip');
  }
  public set sip(value: number) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // sip_dest_port - computed: false, optional: true, required: false
  private _sipDestPort?: number; 
  public get sipDestPort() {
    return this.getNumberAttribute('sip_dest_port');
  }
  public set sipDestPort(value: number) {
    this._sipDestPort = value;
  }
  public resetSipDestPort() {
    this._sipDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipDestPortInput() {
    return this._sipDestPort;
  }

  // sip_dest_v4_addr - computed: false, optional: true, required: false
  private _sipDestV4Addr?: string; 
  public get sipDestV4Addr() {
    return this.getStringAttribute('sip_dest_v4_addr');
  }
  public set sipDestV4Addr(value: string) {
    this._sipDestV4Addr = value;
  }
  public resetSipDestV4Addr() {
    this._sipDestV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipDestV4AddrInput() {
    return this._sipDestV4Addr;
  }

  // sip_dest_v6_addr - computed: false, optional: true, required: false
  private _sipDestV6Addr?: string; 
  public get sipDestV6Addr() {
    return this.getStringAttribute('sip_dest_v6_addr');
  }
  public set sipDestV6Addr(value: string) {
    this._sipDestV6Addr = value;
  }
  public resetSipDestV6Addr() {
    this._sipDestV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipDestV6AddrInput() {
    return this._sipDestV6Addr;
  }

  // sip_source_port - computed: false, optional: true, required: false
  private _sipSourcePort?: number; 
  public get sipSourcePort() {
    return this.getNumberAttribute('sip_source_port');
  }
  public set sipSourcePort(value: number) {
    this._sipSourcePort = value;
  }
  public resetSipSourcePort() {
    this._sipSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipSourcePortInput() {
    return this._sipSourcePort;
  }

  // sip_source_v4_addr - computed: false, optional: true, required: false
  private _sipSourceV4Addr?: string; 
  public get sipSourceV4Addr() {
    return this.getStringAttribute('sip_source_v4_addr');
  }
  public set sipSourceV4Addr(value: string) {
    this._sipSourceV4Addr = value;
  }
  public resetSipSourceV4Addr() {
    this._sipSourceV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipSourceV4AddrInput() {
    return this._sipSourceV4Addr;
  }

  // sip_source_v6_addr - computed: false, optional: true, required: false
  private _sipSourceV6Addr?: string; 
  public get sipSourceV6Addr() {
    return this.getStringAttribute('sip_source_v6_addr');
  }
  public set sipSourceV6Addr(value: string) {
    this._sipSourceV6Addr = value;
  }
  public resetSipSourceV6Addr() {
    this._sipSourceV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipSourceV6AddrInput() {
    return this._sipSourceV6Addr;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_v4_addr - computed: false, optional: true, required: false
  private _sourceV4Addr?: string; 
  public get sourceV4Addr() {
    return this.getStringAttribute('source_v4_addr');
  }
  public set sourceV4Addr(value: string) {
    this._sourceV4Addr = value;
  }
  public resetSourceV4Addr() {
    this._sourceV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceV4AddrInput() {
    return this._sourceV4Addr;
  }

  // source_v6_addr - computed: false, optional: true, required: false
  private _sourceV6Addr?: string; 
  public get sourceV6Addr() {
    return this.getStringAttribute('source_v6_addr');
  }
  public set sourceV6Addr(value: string) {
    this._sourceV6Addr = value;
  }
  public resetSourceV6Addr() {
    this._sourceV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceV6AddrInput() {
    return this._sourceV6Addr;
  }

  // uie - computed: false, optional: true, required: false
  private _uie?: number; 
  public get uie() {
    return this.getNumberAttribute('uie');
  }
  public set uie(value: number) {
    this._uie = value;
  }
  public resetUie() {
    this._uie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uieInput() {
    return this._uie;
  }

  // v6_dest_port - computed: false, optional: true, required: false
  private _v6DestPort?: number; 
  public get v6DestPort() {
    return this.getNumberAttribute('v6_dest_port');
  }
  public set v6DestPort(value: number) {
    this._v6DestPort = value;
  }
  public resetV6DestPort() {
    this._v6DestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DestPortInput() {
    return this._v6DestPort;
  }

  // v6_source_port - computed: false, optional: true, required: false
  private _v6SourcePort?: number; 
  public get v6SourcePort() {
    return this.getNumberAttribute('v6_source_port');
  }
  public set v6SourcePort(value: number) {
    this._v6SourcePort = value;
  }
  public resetV6SourcePort() {
    this._v6SourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6SourcePortInput() {
    return this._v6SourcePort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper thunder_system_session_oper}
*/
export class DataThunderSystemSessionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_session_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemSessionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemSessionOper to import
  * @param importFromId The id of the existing DataThunderSystemSessionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemSessionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_session_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_oper thunder_system_session_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemSessionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemSessionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_session_oper',
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
  private _oper = new DataThunderSystemSessionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemSessionOperOper) {
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
      oper: dataThunderSystemSessionOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemSessionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemSessionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
