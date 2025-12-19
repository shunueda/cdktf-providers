// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAccessListIpv6OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#id DataThunderAccessListIpv6Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#oper DataThunderAccessListIpv6Oper#oper}
  */
  readonly oper?: DataThunderAccessListIpv6OperOper;
}
export interface DataThunderAccessListIpv6OperOperAclListRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#action DataThunderAccessListIpv6Oper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#data_plane_hits DataThunderAccessListIpv6Oper#data_plane_hits}
  */
  readonly dataPlaneHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#dscp DataThunderAccessListIpv6Oper#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#dst_host DataThunderAccessListIpv6Oper#dst_host}
  */
  readonly dstHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#dst_host_mask DataThunderAccessListIpv6Oper#dst_host_mask}
  */
  readonly dstHostMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#dst_obj_id DataThunderAccessListIpv6Oper#dst_obj_id}
  */
  readonly dstObjId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#dst_port_end DataThunderAccessListIpv6Oper#dst_port_end}
  */
  readonly dstPortEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#dst_port_start DataThunderAccessListIpv6Oper#dst_port_start}
  */
  readonly dstPortStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#eth DataThunderAccessListIpv6Oper#eth}
  */
  readonly eth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#geo_location_name DataThunderAccessListIpv6Oper#geo_location_name}
  */
  readonly geoLocationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#icmp_code DataThunderAccessListIpv6Oper#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#icmp_type DataThunderAccessListIpv6Oper#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#ip_frag DataThunderAccessListIpv6Oper#ip_frag}
  */
  readonly ipFrag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#log DataThunderAccessListIpv6Oper#log}
  */
  readonly log?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#log_transparent_sess_only DataThunderAccessListIpv6Oper#log_transparent_sess_only}
  */
  readonly logTransparentSessOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#mgmt_plane_hits DataThunderAccessListIpv6Oper#mgmt_plane_hits}
  */
  readonly mgmtPlaneHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#proto DataThunderAccessListIpv6Oper#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#remark DataThunderAccessListIpv6Oper#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#sequence_num DataThunderAccessListIpv6Oper#sequence_num}
  */
  readonly sequenceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#src_host DataThunderAccessListIpv6Oper#src_host}
  */
  readonly srcHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#src_host_mask DataThunderAccessListIpv6Oper#src_host_mask}
  */
  readonly srcHostMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#src_obj_id DataThunderAccessListIpv6Oper#src_obj_id}
  */
  readonly srcObjId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#src_port_end DataThunderAccessListIpv6Oper#src_port_end}
  */
  readonly srcPortEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#src_port_start DataThunderAccessListIpv6Oper#src_port_start}
  */
  readonly srcPortStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#svc_obj_id DataThunderAccessListIpv6Oper#svc_obj_id}
  */
  readonly svcObjId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#tcp_established DataThunderAccessListIpv6Oper#tcp_established}
  */
  readonly tcpEstablished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#trunk DataThunderAccessListIpv6Oper#trunk}
  */
  readonly trunk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#vlan_id DataThunderAccessListIpv6Oper#vlan_id}
  */
  readonly vlanId?: number;
}

export function dataThunderAccessListIpv6OperOperAclListRuleListStructToTerraform(struct?: DataThunderAccessListIpv6OperOperAclListRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    data_plane_hits: cdktf.numberToTerraform(struct!.dataPlaneHits),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    dst_host: cdktf.stringToTerraform(struct!.dstHost),
    dst_host_mask: cdktf.stringToTerraform(struct!.dstHostMask),
    dst_obj_id: cdktf.stringToTerraform(struct!.dstObjId),
    dst_port_end: cdktf.numberToTerraform(struct!.dstPortEnd),
    dst_port_start: cdktf.numberToTerraform(struct!.dstPortStart),
    eth: cdktf.numberToTerraform(struct!.eth),
    geo_location_name: cdktf.stringToTerraform(struct!.geoLocationName),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    ip_frag: cdktf.numberToTerraform(struct!.ipFrag),
    log: cdktf.numberToTerraform(struct!.log),
    log_transparent_sess_only: cdktf.numberToTerraform(struct!.logTransparentSessOnly),
    mgmt_plane_hits: cdktf.numberToTerraform(struct!.mgmtPlaneHits),
    proto: cdktf.stringToTerraform(struct!.proto),
    remark: cdktf.stringToTerraform(struct!.remark),
    sequence_num: cdktf.numberToTerraform(struct!.sequenceNum),
    src_host: cdktf.stringToTerraform(struct!.srcHost),
    src_host_mask: cdktf.stringToTerraform(struct!.srcHostMask),
    src_obj_id: cdktf.stringToTerraform(struct!.srcObjId),
    src_port_end: cdktf.numberToTerraform(struct!.srcPortEnd),
    src_port_start: cdktf.numberToTerraform(struct!.srcPortStart),
    svc_obj_id: cdktf.stringToTerraform(struct!.svcObjId),
    tcp_established: cdktf.numberToTerraform(struct!.tcpEstablished),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function dataThunderAccessListIpv6OperOperAclListRuleListStructToHclTerraform(struct?: DataThunderAccessListIpv6OperOperAclListRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_plane_hits: {
      value: cdktf.numberToHclTerraform(struct!.dataPlaneHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_host: {
      value: cdktf.stringToHclTerraform(struct!.dstHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_host_mask: {
      value: cdktf.stringToHclTerraform(struct!.dstHostMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_obj_id: {
      value: cdktf.stringToHclTerraform(struct!.dstObjId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dstPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_start: {
      value: cdktf.numberToHclTerraform(struct!.dstPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth: {
      value: cdktf.numberToHclTerraform(struct!.eth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_name: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_frag: {
      value: cdktf.numberToHclTerraform(struct!.ipFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_transparent_sess_only: {
      value: cdktf.numberToHclTerraform(struct!.logTransparentSessOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgmt_plane_hits: {
      value: cdktf.numberToHclTerraform(struct!.mgmtPlaneHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_num: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_host: {
      value: cdktf.stringToHclTerraform(struct!.srcHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_host_mask: {
      value: cdktf.stringToHclTerraform(struct!.srcHostMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_obj_id: {
      value: cdktf.stringToHclTerraform(struct!.srcObjId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svc_obj_id: {
      value: cdktf.stringToHclTerraform(struct!.svcObjId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_established: {
      value: cdktf.numberToHclTerraform(struct!.tcpEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAccessListIpv6OperOperAclListRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAccessListIpv6OperOperAclListRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dataPlaneHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPlaneHits = this._dataPlaneHits;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._dstHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHost = this._dstHost;
    }
    if (this._dstHostMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHostMask = this._dstHostMask;
    }
    if (this._dstObjId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstObjId = this._dstObjId;
    }
    if (this._dstPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortEnd = this._dstPortEnd;
    }
    if (this._dstPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortStart = this._dstPortStart;
    }
    if (this._eth !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth = this._eth;
    }
    if (this._geoLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationName = this._geoLocationName;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._ipFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFrag = this._ipFrag;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logTransparentSessOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTransparentSessOnly = this._logTransparentSessOnly;
    }
    if (this._mgmtPlaneHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtPlaneHits = this._mgmtPlaneHits;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    if (this._sequenceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNum = this._sequenceNum;
    }
    if (this._srcHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHost = this._srcHost;
    }
    if (this._srcHostMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHostMask = this._srcHostMask;
    }
    if (this._srcObjId !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcObjId = this._srcObjId;
    }
    if (this._srcPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortEnd = this._srcPortEnd;
    }
    if (this._srcPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortStart = this._srcPortStart;
    }
    if (this._svcObjId !== undefined) {
      hasAnyValues = true;
      internalValueResult.svcObjId = this._svcObjId;
    }
    if (this._tcpEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEstablished = this._tcpEstablished;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAccessListIpv6OperOperAclListRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dataPlaneHits = undefined;
      this._dscp = undefined;
      this._dstHost = undefined;
      this._dstHostMask = undefined;
      this._dstObjId = undefined;
      this._dstPortEnd = undefined;
      this._dstPortStart = undefined;
      this._eth = undefined;
      this._geoLocationName = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._ipFrag = undefined;
      this._log = undefined;
      this._logTransparentSessOnly = undefined;
      this._mgmtPlaneHits = undefined;
      this._proto = undefined;
      this._remark = undefined;
      this._sequenceNum = undefined;
      this._srcHost = undefined;
      this._srcHostMask = undefined;
      this._srcObjId = undefined;
      this._srcPortEnd = undefined;
      this._srcPortStart = undefined;
      this._svcObjId = undefined;
      this._tcpEstablished = undefined;
      this._trunk = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dataPlaneHits = value.dataPlaneHits;
      this._dscp = value.dscp;
      this._dstHost = value.dstHost;
      this._dstHostMask = value.dstHostMask;
      this._dstObjId = value.dstObjId;
      this._dstPortEnd = value.dstPortEnd;
      this._dstPortStart = value.dstPortStart;
      this._eth = value.eth;
      this._geoLocationName = value.geoLocationName;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._ipFrag = value.ipFrag;
      this._log = value.log;
      this._logTransparentSessOnly = value.logTransparentSessOnly;
      this._mgmtPlaneHits = value.mgmtPlaneHits;
      this._proto = value.proto;
      this._remark = value.remark;
      this._sequenceNum = value.sequenceNum;
      this._srcHost = value.srcHost;
      this._srcHostMask = value.srcHostMask;
      this._srcObjId = value.srcObjId;
      this._srcPortEnd = value.srcPortEnd;
      this._srcPortStart = value.srcPortStart;
      this._svcObjId = value.svcObjId;
      this._tcpEstablished = value.tcpEstablished;
      this._trunk = value.trunk;
      this._vlanId = value.vlanId;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // data_plane_hits - computed: false, optional: true, required: false
  private _dataPlaneHits?: number; 
  public get dataPlaneHits() {
    return this.getNumberAttribute('data_plane_hits');
  }
  public set dataPlaneHits(value: number) {
    this._dataPlaneHits = value;
  }
  public resetDataPlaneHits() {
    this._dataPlaneHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneHitsInput() {
    return this._dataPlaneHits;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dst_host - computed: false, optional: true, required: false
  private _dstHost?: string; 
  public get dstHost() {
    return this.getStringAttribute('dst_host');
  }
  public set dstHost(value: string) {
    this._dstHost = value;
  }
  public resetDstHost() {
    this._dstHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHostInput() {
    return this._dstHost;
  }

  // dst_host_mask - computed: false, optional: true, required: false
  private _dstHostMask?: string; 
  public get dstHostMask() {
    return this.getStringAttribute('dst_host_mask');
  }
  public set dstHostMask(value: string) {
    this._dstHostMask = value;
  }
  public resetDstHostMask() {
    this._dstHostMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHostMaskInput() {
    return this._dstHostMask;
  }

  // dst_obj_id - computed: false, optional: true, required: false
  private _dstObjId?: string; 
  public get dstObjId() {
    return this.getStringAttribute('dst_obj_id');
  }
  public set dstObjId(value: string) {
    this._dstObjId = value;
  }
  public resetDstObjId() {
    this._dstObjId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstObjIdInput() {
    return this._dstObjId;
  }

  // dst_port_end - computed: false, optional: true, required: false
  private _dstPortEnd?: number; 
  public get dstPortEnd() {
    return this.getNumberAttribute('dst_port_end');
  }
  public set dstPortEnd(value: number) {
    this._dstPortEnd = value;
  }
  public resetDstPortEnd() {
    this._dstPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortEndInput() {
    return this._dstPortEnd;
  }

  // dst_port_start - computed: false, optional: true, required: false
  private _dstPortStart?: number; 
  public get dstPortStart() {
    return this.getNumberAttribute('dst_port_start');
  }
  public set dstPortStart(value: number) {
    this._dstPortStart = value;
  }
  public resetDstPortStart() {
    this._dstPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortStartInput() {
    return this._dstPortStart;
  }

  // eth - computed: false, optional: true, required: false
  private _eth?: number; 
  public get eth() {
    return this.getNumberAttribute('eth');
  }
  public set eth(value: number) {
    this._eth = value;
  }
  public resetEth() {
    this._eth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethInput() {
    return this._eth;
  }

  // geo_location_name - computed: false, optional: true, required: false
  private _geoLocationName?: string; 
  public get geoLocationName() {
    return this.getStringAttribute('geo_location_name');
  }
  public set geoLocationName(value: string) {
    this._geoLocationName = value;
  }
  public resetGeoLocationName() {
    this._geoLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationNameInput() {
    return this._geoLocationName;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // ip_frag - computed: false, optional: true, required: false
  private _ipFrag?: number; 
  public get ipFrag() {
    return this.getNumberAttribute('ip_frag');
  }
  public set ipFrag(value: number) {
    this._ipFrag = value;
  }
  public resetIpFrag() {
    this._ipFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragInput() {
    return this._ipFrag;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_transparent_sess_only - computed: false, optional: true, required: false
  private _logTransparentSessOnly?: number; 
  public get logTransparentSessOnly() {
    return this.getNumberAttribute('log_transparent_sess_only');
  }
  public set logTransparentSessOnly(value: number) {
    this._logTransparentSessOnly = value;
  }
  public resetLogTransparentSessOnly() {
    this._logTransparentSessOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTransparentSessOnlyInput() {
    return this._logTransparentSessOnly;
  }

  // mgmt_plane_hits - computed: false, optional: true, required: false
  private _mgmtPlaneHits?: number; 
  public get mgmtPlaneHits() {
    return this.getNumberAttribute('mgmt_plane_hits');
  }
  public set mgmtPlaneHits(value: number) {
    this._mgmtPlaneHits = value;
  }
  public resetMgmtPlaneHits() {
    this._mgmtPlaneHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPlaneHitsInput() {
    return this._mgmtPlaneHits;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // sequence_num - computed: false, optional: true, required: false
  private _sequenceNum?: number; 
  public get sequenceNum() {
    return this.getNumberAttribute('sequence_num');
  }
  public set sequenceNum(value: number) {
    this._sequenceNum = value;
  }
  public resetSequenceNum() {
    this._sequenceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumInput() {
    return this._sequenceNum;
  }

  // src_host - computed: false, optional: true, required: false
  private _srcHost?: string; 
  public get srcHost() {
    return this.getStringAttribute('src_host');
  }
  public set srcHost(value: string) {
    this._srcHost = value;
  }
  public resetSrcHost() {
    this._srcHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHostInput() {
    return this._srcHost;
  }

  // src_host_mask - computed: false, optional: true, required: false
  private _srcHostMask?: string; 
  public get srcHostMask() {
    return this.getStringAttribute('src_host_mask');
  }
  public set srcHostMask(value: string) {
    this._srcHostMask = value;
  }
  public resetSrcHostMask() {
    this._srcHostMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHostMaskInput() {
    return this._srcHostMask;
  }

  // src_obj_id - computed: false, optional: true, required: false
  private _srcObjId?: string; 
  public get srcObjId() {
    return this.getStringAttribute('src_obj_id');
  }
  public set srcObjId(value: string) {
    this._srcObjId = value;
  }
  public resetSrcObjId() {
    this._srcObjId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcObjIdInput() {
    return this._srcObjId;
  }

  // src_port_end - computed: false, optional: true, required: false
  private _srcPortEnd?: number; 
  public get srcPortEnd() {
    return this.getNumberAttribute('src_port_end');
  }
  public set srcPortEnd(value: number) {
    this._srcPortEnd = value;
  }
  public resetSrcPortEnd() {
    this._srcPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortEndInput() {
    return this._srcPortEnd;
  }

  // src_port_start - computed: false, optional: true, required: false
  private _srcPortStart?: number; 
  public get srcPortStart() {
    return this.getNumberAttribute('src_port_start');
  }
  public set srcPortStart(value: number) {
    this._srcPortStart = value;
  }
  public resetSrcPortStart() {
    this._srcPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortStartInput() {
    return this._srcPortStart;
  }

  // svc_obj_id - computed: false, optional: true, required: false
  private _svcObjId?: string; 
  public get svcObjId() {
    return this.getStringAttribute('svc_obj_id');
  }
  public set svcObjId(value: string) {
    this._svcObjId = value;
  }
  public resetSvcObjId() {
    this._svcObjId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svcObjIdInput() {
    return this._svcObjId;
  }

  // tcp_established - computed: false, optional: true, required: false
  private _tcpEstablished?: number; 
  public get tcpEstablished() {
    return this.getNumberAttribute('tcp_established');
  }
  public set tcpEstablished(value: number) {
    this._tcpEstablished = value;
  }
  public resetTcpEstablished() {
    this._tcpEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedInput() {
    return this._tcpEstablished;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class DataThunderAccessListIpv6OperOperAclListRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAccessListIpv6OperOperAclListRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAccessListIpv6OperOperAclListRuleListStructOutputReference {
    return new DataThunderAccessListIpv6OperOperAclListRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAccessListIpv6OperOperAclListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#id1 DataThunderAccessListIpv6Oper#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#mgmt_pkt_hit_count DataThunderAccessListIpv6Oper#mgmt_pkt_hit_count}
  */
  readonly mgmtPktHitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#name DataThunderAccessListIpv6Oper#name}
  */
  readonly name?: string;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#rule_list DataThunderAccessListIpv6Oper#rule_list}
  */
  readonly ruleList?: DataThunderAccessListIpv6OperOperAclListRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderAccessListIpv6OperOperAclListStructToTerraform(struct?: DataThunderAccessListIpv6OperOperAclListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id1: cdktf.numberToTerraform(struct!.id1),
    mgmt_pkt_hit_count: cdktf.numberToTerraform(struct!.mgmtPktHitCount),
    name: cdktf.stringToTerraform(struct!.name),
    rule_list: cdktf.listMapper(dataThunderAccessListIpv6OperOperAclListRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderAccessListIpv6OperOperAclListStructToHclTerraform(struct?: DataThunderAccessListIpv6OperOperAclListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgmt_pkt_hit_count: {
      value: cdktf.numberToHclTerraform(struct!.mgmtPktHitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderAccessListIpv6OperOperAclListRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAccessListIpv6OperOperAclListRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAccessListIpv6OperOperAclListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAccessListIpv6OperOperAclListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._mgmtPktHitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtPktHitCount = this._mgmtPktHitCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAccessListIpv6OperOperAclListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id1 = undefined;
      this._mgmtPktHitCount = undefined;
      this._name = undefined;
      this._ruleList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id1 = value.id1;
      this._mgmtPktHitCount = value.mgmtPktHitCount;
      this._name = value.name;
      this._ruleList.internalValue = value.ruleList;
    }
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // mgmt_pkt_hit_count - computed: false, optional: true, required: false
  private _mgmtPktHitCount?: number; 
  public get mgmtPktHitCount() {
    return this.getNumberAttribute('mgmt_pkt_hit_count');
  }
  public set mgmtPktHitCount(value: number) {
    this._mgmtPktHitCount = value;
  }
  public resetMgmtPktHitCount() {
    this._mgmtPktHitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPktHitCountInput() {
    return this._mgmtPktHitCount;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderAccessListIpv6OperOperAclListRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderAccessListIpv6OperOperAclListRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }
}

export class DataThunderAccessListIpv6OperOperAclListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAccessListIpv6OperOperAclListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAccessListIpv6OperOperAclListStructOutputReference {
    return new DataThunderAccessListIpv6OperOperAclListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAccessListIpv6OperOper {
  /**
  * acl_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#acl_list DataThunderAccessListIpv6Oper#acl_list}
  */
  readonly aclList?: DataThunderAccessListIpv6OperOperAclListStruct[] | cdktf.IResolvable;
}

export function dataThunderAccessListIpv6OperOperToTerraform(struct?: DataThunderAccessListIpv6OperOperOutputReference | DataThunderAccessListIpv6OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_list: cdktf.listMapper(dataThunderAccessListIpv6OperOperAclListStructToTerraform, true)(struct!.aclList),
  }
}


export function dataThunderAccessListIpv6OperOperToHclTerraform(struct?: DataThunderAccessListIpv6OperOperOutputReference | DataThunderAccessListIpv6OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_list: {
      value: cdktf.listMapperHcl(dataThunderAccessListIpv6OperOperAclListStructToHclTerraform, true)(struct!.aclList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAccessListIpv6OperOperAclListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAccessListIpv6OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAccessListIpv6OperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclList = this._aclList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAccessListIpv6OperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclList.internalValue = value.aclList;
    }
  }

  // acl_list - computed: false, optional: true, required: false
  private _aclList = new DataThunderAccessListIpv6OperOperAclListStructList(this, "acl_list", false);
  public get aclList() {
    return this._aclList;
  }
  public putAclList(value: DataThunderAccessListIpv6OperOperAclListStruct[] | cdktf.IResolvable) {
    this._aclList.internalValue = value;
  }
  public resetAclList() {
    this._aclList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclListInput() {
    return this._aclList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper thunder_access_list_ipv6_oper}
*/
export class DataThunderAccessListIpv6Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_access_list_ipv6_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAccessListIpv6Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAccessListIpv6Oper to import
  * @param importFromId The id of the existing DataThunderAccessListIpv6Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAccessListIpv6Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_access_list_ipv6_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/access_list_ipv6_oper thunder_access_list_ipv6_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAccessListIpv6OperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAccessListIpv6OperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_access_list_ipv6_oper',
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
  private _oper = new DataThunderAccessListIpv6OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAccessListIpv6OperOper) {
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
      oper: dataThunderAccessListIpv6OperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAccessListIpv6OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAccessListIpv6OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
