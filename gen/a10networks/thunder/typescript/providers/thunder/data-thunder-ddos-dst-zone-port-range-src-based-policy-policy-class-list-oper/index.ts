// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#class_list_name DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#class_list_name}
  */
  readonly classListName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#id DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#port_range_end DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#port_range_start DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#protocol DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#protocol}
  */
  readonly protocol: string;
  /**
  * SrcBasedPolicyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#src_based_policy_name DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#zone_name DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#oper DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOper;
}
export interface DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#connection_limit DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#connection_rate_limit DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#current_connection_rate DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#current_connection_rate}
  */
  readonly currentConnectionRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#current_connections DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#current_connections}
  */
  readonly currentConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#current_frag_packet_rate DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#current_kbit_rate DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#current_kbit_rate}
  */
  readonly currentKbitRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#current_packet_rate DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#current_packet_rate}
  */
  readonly currentPacketRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#debug_str DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#frag_packet_rate_limit DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#is_connection_rate_exceed DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#is_connections_exceed DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#is_frag_packet_rate_exceed DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#is_kbit_rate_exceed DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#is_packet_rate_exceed DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#kbit_rate_limit DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#packet_rate_limit DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper#packet_rate_limit}
  */
  readonly packetRateLimit?: number;
}

export function dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperToTerraform(struct?: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperOutputReference | DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.numberToTerraform(struct!.connectionRateLimit),
    current_connection_rate: cdktf.numberToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.numberToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.numberToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.numberToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.numberToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    frag_packet_rate_limit: cdktf.numberToTerraform(struct!.fragPacketRateLimit),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.numberToTerraform(struct!.kbitRateLimit),
    packet_rate_limit: cdktf.numberToTerraform(struct!.packetRateLimit),
  }
}


export function dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperToHclTerraform(struct?: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperOutputReference | DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_connection_rate: {
      value: cdktf.numberToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_connections: {
      value: cdktf.numberToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_frag_packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_kbit_rate: {
      value: cdktf.numberToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._debugStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugStr = this._debugStr;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._fragPacketRateLimit = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._packetRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._packetRateLimit = value.packetRateLimit;
    }
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: number; 
  public get connectionRateLimit() {
    return this.getNumberAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: number) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: number; 
  public get currentConnectionRate() {
    return this.getNumberAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: number) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: number; 
  public get currentConnections() {
    return this.getNumberAttribute('current_connections');
  }
  public set currentConnections(value: number) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: number; 
  public get currentFragPacketRate() {
    return this.getNumberAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: number) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: number; 
  public get currentKbitRate() {
    return this.getNumberAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: number) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: number; 
  public get currentPacketRate() {
    return this.getNumberAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: number) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // debug_str - computed: false, optional: true, required: false
  private _debugStr?: string; 
  public get debugStr() {
    return this.getStringAttribute('debug_str');
  }
  public set debugStr(value: string) {
    this._debugStr = value;
  }
  public resetDebugStr() {
    this._debugStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStrInput() {
    return this._debugStr;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: number; 
  public get fragPacketRateLimit() {
    return this.getNumberAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: number) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: number; 
  public get kbitRateLimit() {
    return this.getNumberAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: number) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: number; 
  public get packetRateLimit() {
    return this.getNumberAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: number) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper}
*/
export class DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_oper',
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
    this._classListName = config.classListName;
    this._id = config.id;
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._protocol = config.protocol;
    this._srcBasedPolicyName = config.srcBasedPolicyName;
    this._zoneName = config.zoneName;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_list_name - computed: false, optional: false, required: true
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

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

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: string; 
  public get portRangeStart() {
    return this.getStringAttribute('port_range_start');
  }
  public set portRangeStart(value: string) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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

  // src_based_policy_name - computed: false, optional: false, required: true
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOper) {
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
      class_list_name: cdktf.stringToTerraform(this._classListName),
      id: cdktf.stringToTerraform(this._id),
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_based_policy_name: cdktf.stringToTerraform(this._srcBasedPolicyName),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_list_name: {
        value: cdktf.stringToHclTerraform(this._classListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_end: {
        value: cdktf.stringToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_start: {
        value: cdktf.stringToHclTerraform(this._portRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_based_policy_name: {
        value: cdktf.stringToHclTerraform(this._srcBasedPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
