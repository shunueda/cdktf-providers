// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstDynamicEntryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#id DataThunderDdosDstDynamicEntryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#oper DataThunderDdosDstDynamicEntryOper#oper}
  */
  readonly oper?: DataThunderDdosDstDynamicEntryOperOper;
}
export interface DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#age_str DataThunderDdosDstDynamicEntryOper#age_str}
  */
  readonly ageStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat1_limit DataThunderDdosDstDynamicEntryOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat2_limit DataThunderDdosDstDynamicEntryOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat3_limit DataThunderDdosDstDynamicEntryOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat4_limit DataThunderDdosDstDynamicEntryOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat5_limit DataThunderDdosDstDynamicEntryOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat6_limit DataThunderDdosDstDynamicEntryOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat7_limit DataThunderDdosDstDynamicEntryOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat8_limit DataThunderDdosDstDynamicEntryOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#connection_limit DataThunderDdosDstDynamicEntryOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#connection_rate_limit DataThunderDdosDstDynamicEntryOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat1 DataThunderDdosDstDynamicEntryOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat2 DataThunderDdosDstDynamicEntryOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat3 DataThunderDdosDstDynamicEntryOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat4 DataThunderDdosDstDynamicEntryOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat5 DataThunderDdosDstDynamicEntryOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat6 DataThunderDdosDstDynamicEntryOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat7 DataThunderDdosDstDynamicEntryOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_app_stat8 DataThunderDdosDstDynamicEntryOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_connection_rate DataThunderDdosDstDynamicEntryOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_connections DataThunderDdosDstDynamicEntryOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_frag_packet_rate DataThunderDdosDstDynamicEntryOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_kbit_rate DataThunderDdosDstDynamicEntryOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#current_packet_rate DataThunderDdosDstDynamicEntryOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#debug_str DataThunderDdosDstDynamicEntryOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#dst_address_str DataThunderDdosDstDynamicEntryOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#dynamic_entry_count DataThunderDdosDstDynamicEntryOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#dynamic_entry_limit DataThunderDdosDstDynamicEntryOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#frag_packet_rate_limit DataThunderDdosDstDynamicEntryOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#kbit_rate_limit DataThunderDdosDstDynamicEntryOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#level_str DataThunderDdosDstDynamicEntryOper#level_str}
  */
  readonly levelStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#lockup_time_str DataThunderDdosDstDynamicEntryOper#lockup_time_str}
  */
  readonly lockupTimeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#packet_rate_limit DataThunderDdosDstDynamicEntryOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#port_str DataThunderDdosDstDynamicEntryOper#port_str}
  */
  readonly portStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#sflow_source_id DataThunderDdosDstDynamicEntryOper#sflow_source_id}
  */
  readonly sflowSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#src_address_str DataThunderDdosDstDynamicEntryOper#src_address_str}
  */
  readonly srcAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#state_str DataThunderDdosDstDynamicEntryOper#state_str}
  */
  readonly stateStr?: string;
}

export function dataThunderDdosDstDynamicEntryOperOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age_str: cdktf.stringToTerraform(struct!.ageStr),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_app_stat1: cdktf.stringToTerraform(struct!.currentAppStat1),
    current_app_stat2: cdktf.stringToTerraform(struct!.currentAppStat2),
    current_app_stat3: cdktf.stringToTerraform(struct!.currentAppStat3),
    current_app_stat4: cdktf.stringToTerraform(struct!.currentAppStat4),
    current_app_stat5: cdktf.stringToTerraform(struct!.currentAppStat5),
    current_app_stat6: cdktf.stringToTerraform(struct!.currentAppStat6),
    current_app_stat7: cdktf.stringToTerraform(struct!.currentAppStat7),
    current_app_stat8: cdktf.stringToTerraform(struct!.currentAppStat8),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    dst_address_str: cdktf.stringToTerraform(struct!.dstAddressStr),
    dynamic_entry_count: cdktf.stringToTerraform(struct!.dynamicEntryCount),
    dynamic_entry_limit: cdktf.stringToTerraform(struct!.dynamicEntryLimit),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level_str: cdktf.stringToTerraform(struct!.levelStr),
    lockup_time_str: cdktf.stringToTerraform(struct!.lockupTimeStr),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    port_str: cdktf.stringToTerraform(struct!.portStr),
    sflow_source_id: cdktf.stringToTerraform(struct!.sflowSourceId),
    src_address_str: cdktf.stringToTerraform(struct!.srcAddressStr),
    state_str: cdktf.stringToTerraform(struct!.stateStr),
  }
}


export function dataThunderDdosDstDynamicEntryOperOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age_str: {
      value: cdktf.stringToHclTerraform(struct!.ageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat1_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat1Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat2_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat2Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat3_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat3Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat4_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat5_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat5Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat6_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat7_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat7Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat8_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat8Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat1: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat2: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat3: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat4: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat5: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat6: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat7: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat8: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_address_str: {
      value: cdktf.stringToHclTerraform(struct!.dstAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_count: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_str: {
      value: cdktf.stringToHclTerraform(struct!.levelStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockup_time_str: {
      value: cdktf.stringToHclTerraform(struct!.lockupTimeStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_str: {
      value: cdktf.stringToHclTerraform(struct!.portStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_address_str: {
      value: cdktf.stringToHclTerraform(struct!.srcAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_str: {
      value: cdktf.stringToHclTerraform(struct!.stateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstDynamicEntryOperOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageStr = this._ageStr;
    }
    if (this._appStat1Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat1Limit = this._appStat1Limit;
    }
    if (this._appStat2Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat2Limit = this._appStat2Limit;
    }
    if (this._appStat3Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat3Limit = this._appStat3Limit;
    }
    if (this._appStat4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat4Limit = this._appStat4Limit;
    }
    if (this._appStat5Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat5Limit = this._appStat5Limit;
    }
    if (this._appStat6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat6Limit = this._appStat6Limit;
    }
    if (this._appStat7Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat7Limit = this._appStat7Limit;
    }
    if (this._appStat8Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat8Limit = this._appStat8Limit;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentAppStat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat1 = this._currentAppStat1;
    }
    if (this._currentAppStat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat2 = this._currentAppStat2;
    }
    if (this._currentAppStat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat3 = this._currentAppStat3;
    }
    if (this._currentAppStat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat4 = this._currentAppStat4;
    }
    if (this._currentAppStat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat5 = this._currentAppStat5;
    }
    if (this._currentAppStat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat6 = this._currentAppStat6;
    }
    if (this._currentAppStat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat7 = this._currentAppStat7;
    }
    if (this._currentAppStat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat8 = this._currentAppStat8;
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
    if (this._dstAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddressStr = this._dstAddressStr;
    }
    if (this._dynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryCount = this._dynamicEntryCount;
    }
    if (this._dynamicEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryLimit = this._dynamicEntryLimit;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._levelStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelStr = this._levelStr;
    }
    if (this._lockupTimeStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTimeStr = this._lockupTimeStr;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._portStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStr = this._portStr;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._srcAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddressStr = this._srcAddressStr;
    }
    if (this._stateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateStr = this._stateStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ageStr = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentAppStat1 = undefined;
      this._currentAppStat2 = undefined;
      this._currentAppStat3 = undefined;
      this._currentAppStat4 = undefined;
      this._currentAppStat5 = undefined;
      this._currentAppStat6 = undefined;
      this._currentAppStat7 = undefined;
      this._currentAppStat8 = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._dstAddressStr = undefined;
      this._dynamicEntryCount = undefined;
      this._dynamicEntryLimit = undefined;
      this._fragPacketRateLimit = undefined;
      this._kbitRateLimit = undefined;
      this._levelStr = undefined;
      this._lockupTimeStr = undefined;
      this._packetRateLimit = undefined;
      this._portStr = undefined;
      this._sflowSourceId = undefined;
      this._srcAddressStr = undefined;
      this._stateStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ageStr = value.ageStr;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentAppStat1 = value.currentAppStat1;
      this._currentAppStat2 = value.currentAppStat2;
      this._currentAppStat3 = value.currentAppStat3;
      this._currentAppStat4 = value.currentAppStat4;
      this._currentAppStat5 = value.currentAppStat5;
      this._currentAppStat6 = value.currentAppStat6;
      this._currentAppStat7 = value.currentAppStat7;
      this._currentAppStat8 = value.currentAppStat8;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._dstAddressStr = value.dstAddressStr;
      this._dynamicEntryCount = value.dynamicEntryCount;
      this._dynamicEntryLimit = value.dynamicEntryLimit;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._kbitRateLimit = value.kbitRateLimit;
      this._levelStr = value.levelStr;
      this._lockupTimeStr = value.lockupTimeStr;
      this._packetRateLimit = value.packetRateLimit;
      this._portStr = value.portStr;
      this._sflowSourceId = value.sflowSourceId;
      this._srcAddressStr = value.srcAddressStr;
      this._stateStr = value.stateStr;
    }
  }

  // age_str - computed: false, optional: true, required: false
  private _ageStr?: string; 
  public get ageStr() {
    return this.getStringAttribute('age_str');
  }
  public set ageStr(value: string) {
    this._ageStr = value;
  }
  public resetAgeStr() {
    this._ageStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageStrInput() {
    return this._ageStr;
  }

  // app_stat1_limit - computed: false, optional: true, required: false
  private _appStat1Limit?: string; 
  public get appStat1Limit() {
    return this.getStringAttribute('app_stat1_limit');
  }
  public set appStat1Limit(value: string) {
    this._appStat1Limit = value;
  }
  public resetAppStat1Limit() {
    this._appStat1Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat1LimitInput() {
    return this._appStat1Limit;
  }

  // app_stat2_limit - computed: false, optional: true, required: false
  private _appStat2Limit?: string; 
  public get appStat2Limit() {
    return this.getStringAttribute('app_stat2_limit');
  }
  public set appStat2Limit(value: string) {
    this._appStat2Limit = value;
  }
  public resetAppStat2Limit() {
    this._appStat2Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat2LimitInput() {
    return this._appStat2Limit;
  }

  // app_stat3_limit - computed: false, optional: true, required: false
  private _appStat3Limit?: string; 
  public get appStat3Limit() {
    return this.getStringAttribute('app_stat3_limit');
  }
  public set appStat3Limit(value: string) {
    this._appStat3Limit = value;
  }
  public resetAppStat3Limit() {
    this._appStat3Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat3LimitInput() {
    return this._appStat3Limit;
  }

  // app_stat4_limit - computed: false, optional: true, required: false
  private _appStat4Limit?: string; 
  public get appStat4Limit() {
    return this.getStringAttribute('app_stat4_limit');
  }
  public set appStat4Limit(value: string) {
    this._appStat4Limit = value;
  }
  public resetAppStat4Limit() {
    this._appStat4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat4LimitInput() {
    return this._appStat4Limit;
  }

  // app_stat5_limit - computed: false, optional: true, required: false
  private _appStat5Limit?: string; 
  public get appStat5Limit() {
    return this.getStringAttribute('app_stat5_limit');
  }
  public set appStat5Limit(value: string) {
    this._appStat5Limit = value;
  }
  public resetAppStat5Limit() {
    this._appStat5Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat5LimitInput() {
    return this._appStat5Limit;
  }

  // app_stat6_limit - computed: false, optional: true, required: false
  private _appStat6Limit?: string; 
  public get appStat6Limit() {
    return this.getStringAttribute('app_stat6_limit');
  }
  public set appStat6Limit(value: string) {
    this._appStat6Limit = value;
  }
  public resetAppStat6Limit() {
    this._appStat6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat6LimitInput() {
    return this._appStat6Limit;
  }

  // app_stat7_limit - computed: false, optional: true, required: false
  private _appStat7Limit?: string; 
  public get appStat7Limit() {
    return this.getStringAttribute('app_stat7_limit');
  }
  public set appStat7Limit(value: string) {
    this._appStat7Limit = value;
  }
  public resetAppStat7Limit() {
    this._appStat7Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat7LimitInput() {
    return this._appStat7Limit;
  }

  // app_stat8_limit - computed: false, optional: true, required: false
  private _appStat8Limit?: string; 
  public get appStat8Limit() {
    return this.getStringAttribute('app_stat8_limit');
  }
  public set appStat8Limit(value: string) {
    this._appStat8Limit = value;
  }
  public resetAppStat8Limit() {
    this._appStat8Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat8LimitInput() {
    return this._appStat8Limit;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
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
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_app_stat1 - computed: false, optional: true, required: false
  private _currentAppStat1?: string; 
  public get currentAppStat1() {
    return this.getStringAttribute('current_app_stat1');
  }
  public set currentAppStat1(value: string) {
    this._currentAppStat1 = value;
  }
  public resetCurrentAppStat1() {
    this._currentAppStat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat1Input() {
    return this._currentAppStat1;
  }

  // current_app_stat2 - computed: false, optional: true, required: false
  private _currentAppStat2?: string; 
  public get currentAppStat2() {
    return this.getStringAttribute('current_app_stat2');
  }
  public set currentAppStat2(value: string) {
    this._currentAppStat2 = value;
  }
  public resetCurrentAppStat2() {
    this._currentAppStat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat2Input() {
    return this._currentAppStat2;
  }

  // current_app_stat3 - computed: false, optional: true, required: false
  private _currentAppStat3?: string; 
  public get currentAppStat3() {
    return this.getStringAttribute('current_app_stat3');
  }
  public set currentAppStat3(value: string) {
    this._currentAppStat3 = value;
  }
  public resetCurrentAppStat3() {
    this._currentAppStat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat3Input() {
    return this._currentAppStat3;
  }

  // current_app_stat4 - computed: false, optional: true, required: false
  private _currentAppStat4?: string; 
  public get currentAppStat4() {
    return this.getStringAttribute('current_app_stat4');
  }
  public set currentAppStat4(value: string) {
    this._currentAppStat4 = value;
  }
  public resetCurrentAppStat4() {
    this._currentAppStat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat4Input() {
    return this._currentAppStat4;
  }

  // current_app_stat5 - computed: false, optional: true, required: false
  private _currentAppStat5?: string; 
  public get currentAppStat5() {
    return this.getStringAttribute('current_app_stat5');
  }
  public set currentAppStat5(value: string) {
    this._currentAppStat5 = value;
  }
  public resetCurrentAppStat5() {
    this._currentAppStat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat5Input() {
    return this._currentAppStat5;
  }

  // current_app_stat6 - computed: false, optional: true, required: false
  private _currentAppStat6?: string; 
  public get currentAppStat6() {
    return this.getStringAttribute('current_app_stat6');
  }
  public set currentAppStat6(value: string) {
    this._currentAppStat6 = value;
  }
  public resetCurrentAppStat6() {
    this._currentAppStat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat6Input() {
    return this._currentAppStat6;
  }

  // current_app_stat7 - computed: false, optional: true, required: false
  private _currentAppStat7?: string; 
  public get currentAppStat7() {
    return this.getStringAttribute('current_app_stat7');
  }
  public set currentAppStat7(value: string) {
    this._currentAppStat7 = value;
  }
  public resetCurrentAppStat7() {
    this._currentAppStat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat7Input() {
    return this._currentAppStat7;
  }

  // current_app_stat8 - computed: false, optional: true, required: false
  private _currentAppStat8?: string; 
  public get currentAppStat8() {
    return this.getStringAttribute('current_app_stat8');
  }
  public set currentAppStat8(value: string) {
    this._currentAppStat8 = value;
  }
  public resetCurrentAppStat8() {
    this._currentAppStat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat8Input() {
    return this._currentAppStat8;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
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
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
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
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
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
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
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
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
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

  // dst_address_str - computed: false, optional: true, required: false
  private _dstAddressStr?: string; 
  public get dstAddressStr() {
    return this.getStringAttribute('dst_address_str');
  }
  public set dstAddressStr(value: string) {
    this._dstAddressStr = value;
  }
  public resetDstAddressStr() {
    this._dstAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressStrInput() {
    return this._dstAddressStr;
  }

  // dynamic_entry_count - computed: false, optional: true, required: false
  private _dynamicEntryCount?: string; 
  public get dynamicEntryCount() {
    return this.getStringAttribute('dynamic_entry_count');
  }
  public set dynamicEntryCount(value: string) {
    this._dynamicEntryCount = value;
  }
  public resetDynamicEntryCount() {
    this._dynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryCountInput() {
    return this._dynamicEntryCount;
  }

  // dynamic_entry_limit - computed: false, optional: true, required: false
  private _dynamicEntryLimit?: string; 
  public get dynamicEntryLimit() {
    return this.getStringAttribute('dynamic_entry_limit');
  }
  public set dynamicEntryLimit(value: string) {
    this._dynamicEntryLimit = value;
  }
  public resetDynamicEntryLimit() {
    this._dynamicEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryLimitInput() {
    return this._dynamicEntryLimit;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
  }

  // level_str - computed: false, optional: true, required: false
  private _levelStr?: string; 
  public get levelStr() {
    return this.getStringAttribute('level_str');
  }
  public set levelStr(value: string) {
    this._levelStr = value;
  }
  public resetLevelStr() {
    this._levelStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelStrInput() {
    return this._levelStr;
  }

  // lockup_time_str - computed: false, optional: true, required: false
  private _lockupTimeStr?: string; 
  public get lockupTimeStr() {
    return this.getStringAttribute('lockup_time_str');
  }
  public set lockupTimeStr(value: string) {
    this._lockupTimeStr = value;
  }
  public resetLockupTimeStr() {
    this._lockupTimeStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeStrInput() {
    return this._lockupTimeStr;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // port_str - computed: false, optional: true, required: false
  private _portStr?: string; 
  public get portStr() {
    return this.getStringAttribute('port_str');
  }
  public set portStr(value: string) {
    this._portStr = value;
  }
  public resetPortStr() {
    this._portStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStrInput() {
    return this._portStr;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: string; 
  public get sflowSourceId() {
    return this.getStringAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: string) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // src_address_str - computed: false, optional: true, required: false
  private _srcAddressStr?: string; 
  public get srcAddressStr() {
    return this.getStringAttribute('src_address_str');
  }
  public set srcAddressStr(value: string) {
    this._srcAddressStr = value;
  }
  public resetSrcAddressStr() {
    this._srcAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressStrInput() {
    return this._srcAddressStr;
  }

  // state_str - computed: false, optional: true, required: false
  private _stateStr?: string; 
  public get stateStr() {
    return this.getStringAttribute('state_str');
  }
  public set stateStr(value: string) {
    this._stateStr = value;
  }
  public resetStateStr() {
    this._stateStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateStrInput() {
    return this._stateStr;
  }
}

export class DataThunderDdosDstDynamicEntryOperOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstDynamicEntryOperOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstDynamicEntryOperOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstDynamicEntryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#all_entries DataThunderDdosDstDynamicEntryOper#all_entries}
  */
  readonly allEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#all_ip_protos DataThunderDdosDstDynamicEntryOper#all_ip_protos}
  */
  readonly allIpProtos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#all_l4_types DataThunderDdosDstDynamicEntryOper#all_l4_types}
  */
  readonly allL4Types?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#all_ports DataThunderDdosDstDynamicEntryOper#all_ports}
  */
  readonly allPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#all_src_ports DataThunderDdosDstDynamicEntryOper#all_src_ports}
  */
  readonly allSrcPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#app_stat DataThunderDdosDstDynamicEntryOper#app_stat}
  */
  readonly appStat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#black_holed DataThunderDdosDstDynamicEntryOper#black_holed}
  */
  readonly blackHoled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#entry_displayed_count DataThunderDdosDstDynamicEntryOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#exceeded DataThunderDdosDstDynamicEntryOper#exceeded}
  */
  readonly exceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#hw_blacklisted DataThunderDdosDstDynamicEntryOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#ip_conn_total DataThunderDdosDstDynamicEntryOper#ip_conn_total}
  */
  readonly ipConnTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#ip_proto_num DataThunderDdosDstDynamicEntryOper#ip_proto_num}
  */
  readonly ipProtoNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#ipv6 DataThunderDdosDstDynamicEntryOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#ipv6_conn_total DataThunderDdosDstDynamicEntryOper#ipv6_conn_total}
  */
  readonly ipv6ConnTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#l4_type_str DataThunderDdosDstDynamicEntryOper#l4_type_str}
  */
  readonly l4TypeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#max_count DataThunderDdosDstDynamicEntryOper#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#overflow_policy DataThunderDdosDstDynamicEntryOper#overflow_policy}
  */
  readonly overflowPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#port_num DataThunderDdosDstDynamicEntryOper#port_num}
  */
  readonly portNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#port_range_end DataThunderDdosDstDynamicEntryOper#port_range_end}
  */
  readonly portRangeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#port_range_start DataThunderDdosDstDynamicEntryOper#port_range_start}
  */
  readonly portRangeStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#protocol DataThunderDdosDstDynamicEntryOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#resource_usage DataThunderDdosDstDynamicEntryOper#resource_usage}
  */
  readonly resourceUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#service_displayed_count DataThunderDdosDstDynamicEntryOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#sport_protocol DataThunderDdosDstDynamicEntryOper#sport_protocol}
  */
  readonly sportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#src_port_num DataThunderDdosDstDynamicEntryOper#src_port_num}
  */
  readonly srcPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#src_port_range_end DataThunderDdosDstDynamicEntryOper#src_port_range_end}
  */
  readonly srcPortRangeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#src_port_range_start DataThunderDdosDstDynamicEntryOper#src_port_range_start}
  */
  readonly srcPortRangeStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#subnet_ip_addr DataThunderDdosDstDynamicEntryOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#subnet_ipv6_addr DataThunderDdosDstDynamicEntryOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#ddos_entry_list DataThunderDdosDstDynamicEntryOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstDynamicEntryOperOperToTerraform(struct?: DataThunderDdosDstDynamicEntryOperOperOutputReference | DataThunderDdosDstDynamicEntryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_entries: cdktf.numberToTerraform(struct!.allEntries),
    all_ip_protos: cdktf.numberToTerraform(struct!.allIpProtos),
    all_l4_types: cdktf.numberToTerraform(struct!.allL4Types),
    all_ports: cdktf.numberToTerraform(struct!.allPorts),
    all_src_ports: cdktf.numberToTerraform(struct!.allSrcPorts),
    app_stat: cdktf.numberToTerraform(struct!.appStat),
    black_holed: cdktf.numberToTerraform(struct!.blackHoled),
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    exceeded: cdktf.numberToTerraform(struct!.exceeded),
    hw_blacklisted: cdktf.numberToTerraform(struct!.hwBlacklisted),
    ip_conn_total: cdktf.numberToTerraform(struct!.ipConnTotal),
    ip_proto_num: cdktf.numberToTerraform(struct!.ipProtoNum),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    ipv6_conn_total: cdktf.numberToTerraform(struct!.ipv6ConnTotal),
    l4_type_str: cdktf.stringToTerraform(struct!.l4TypeStr),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    overflow_policy: cdktf.stringToTerraform(struct!.overflowPolicy),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    resource_usage: cdktf.numberToTerraform(struct!.resourceUsage),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sport_protocol: cdktf.stringToTerraform(struct!.sportProtocol),
    src_port_num: cdktf.numberToTerraform(struct!.srcPortNum),
    src_port_range_end: cdktf.numberToTerraform(struct!.srcPortRangeEnd),
    src_port_range_start: cdktf.numberToTerraform(struct!.srcPortRangeStart),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstDynamicEntryOperOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstDynamicEntryOperOperToHclTerraform(struct?: DataThunderDdosDstDynamicEntryOperOperOutputReference | DataThunderDdosDstDynamicEntryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_entries: {
      value: cdktf.numberToHclTerraform(struct!.allEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_ip_protos: {
      value: cdktf.numberToHclTerraform(struct!.allIpProtos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_l4_types: {
      value: cdktf.numberToHclTerraform(struct!.allL4Types),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_ports: {
      value: cdktf.numberToHclTerraform(struct!.allPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_src_ports: {
      value: cdktf.numberToHclTerraform(struct!.allSrcPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_stat: {
      value: cdktf.numberToHclTerraform(struct!.appStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    black_holed: {
      value: cdktf.numberToHclTerraform(struct!.blackHoled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.entryDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceeded: {
      value: cdktf.numberToHclTerraform(struct!.exceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_conn_total: {
      value: cdktf.numberToHclTerraform(struct!.ipConnTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_num: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_conn_total: {
      value: cdktf.numberToHclTerraform(struct!.ipv6ConnTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_type_str: {
      value: cdktf.stringToHclTerraform(struct!.l4TypeStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overflow_policy: {
      value: cdktf.stringToHclTerraform(struct!.overflowPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
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
    resource_usage: {
      value: cdktf.numberToHclTerraform(struct!.resourceUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_protocol: {
      value: cdktf.stringToHclTerraform(struct!.sportProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port_num: {
      value: cdktf.numberToHclTerraform(struct!.srcPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstDynamicEntryOperOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstDynamicEntryOperOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstDynamicEntryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstDynamicEntryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEntries = this._allEntries;
    }
    if (this._allIpProtos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allIpProtos = this._allIpProtos;
    }
    if (this._allL4Types !== undefined) {
      hasAnyValues = true;
      internalValueResult.allL4Types = this._allL4Types;
    }
    if (this._allPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPorts = this._allPorts;
    }
    if (this._allSrcPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSrcPorts = this._allSrcPorts;
    }
    if (this._appStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat = this._appStat;
    }
    if (this._blackHoled !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackHoled = this._blackHoled;
    }
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._exceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceeded = this._exceeded;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._ipConnTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConnTotal = this._ipConnTotal;
    }
    if (this._ipProtoNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoNum = this._ipProtoNum;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6ConnTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ConnTotal = this._ipv6ConnTotal;
    }
    if (this._l4TypeStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeStr = this._l4TypeStr;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._overflowPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowPolicy = this._overflowPolicy;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._resourceUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUsage = this._resourceUsage;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
    }
    if (this._sportProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportProtocol = this._sportProtocol;
    }
    if (this._srcPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortNum = this._srcPortNum;
    }
    if (this._srcPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeEnd = this._srcPortRangeEnd;
    }
    if (this._srcPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeStart = this._srcPortRangeStart;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstDynamicEntryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEntries = undefined;
      this._allIpProtos = undefined;
      this._allL4Types = undefined;
      this._allPorts = undefined;
      this._allSrcPorts = undefined;
      this._appStat = undefined;
      this._blackHoled = undefined;
      this._entryDisplayedCount = undefined;
      this._exceeded = undefined;
      this._hwBlacklisted = undefined;
      this._ipConnTotal = undefined;
      this._ipProtoNum = undefined;
      this._ipv6 = undefined;
      this._ipv6ConnTotal = undefined;
      this._l4TypeStr = undefined;
      this._maxCount = undefined;
      this._overflowPolicy = undefined;
      this._portNum = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._resourceUsage = undefined;
      this._serviceDisplayedCount = undefined;
      this._sportProtocol = undefined;
      this._srcPortNum = undefined;
      this._srcPortRangeEnd = undefined;
      this._srcPortRangeStart = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEntries = value.allEntries;
      this._allIpProtos = value.allIpProtos;
      this._allL4Types = value.allL4Types;
      this._allPorts = value.allPorts;
      this._allSrcPorts = value.allSrcPorts;
      this._appStat = value.appStat;
      this._blackHoled = value.blackHoled;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._exceeded = value.exceeded;
      this._hwBlacklisted = value.hwBlacklisted;
      this._ipConnTotal = value.ipConnTotal;
      this._ipProtoNum = value.ipProtoNum;
      this._ipv6 = value.ipv6;
      this._ipv6ConnTotal = value.ipv6ConnTotal;
      this._l4TypeStr = value.l4TypeStr;
      this._maxCount = value.maxCount;
      this._overflowPolicy = value.overflowPolicy;
      this._portNum = value.portNum;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._resourceUsage = value.resourceUsage;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sportProtocol = value.sportProtocol;
      this._srcPortNum = value.srcPortNum;
      this._srcPortRangeEnd = value.srcPortRangeEnd;
      this._srcPortRangeStart = value.srcPortRangeStart;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // all_entries - computed: false, optional: true, required: false
  private _allEntries?: number; 
  public get allEntries() {
    return this.getNumberAttribute('all_entries');
  }
  public set allEntries(value: number) {
    this._allEntries = value;
  }
  public resetAllEntries() {
    this._allEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEntriesInput() {
    return this._allEntries;
  }

  // all_ip_protos - computed: false, optional: true, required: false
  private _allIpProtos?: number; 
  public get allIpProtos() {
    return this.getNumberAttribute('all_ip_protos');
  }
  public set allIpProtos(value: number) {
    this._allIpProtos = value;
  }
  public resetAllIpProtos() {
    this._allIpProtos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpProtosInput() {
    return this._allIpProtos;
  }

  // all_l4_types - computed: false, optional: true, required: false
  private _allL4Types?: number; 
  public get allL4Types() {
    return this.getNumberAttribute('all_l4_types');
  }
  public set allL4Types(value: number) {
    this._allL4Types = value;
  }
  public resetAllL4Types() {
    this._allL4Types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allL4TypesInput() {
    return this._allL4Types;
  }

  // all_ports - computed: false, optional: true, required: false
  private _allPorts?: number; 
  public get allPorts() {
    return this.getNumberAttribute('all_ports');
  }
  public set allPorts(value: number) {
    this._allPorts = value;
  }
  public resetAllPorts() {
    this._allPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPortsInput() {
    return this._allPorts;
  }

  // all_src_ports - computed: false, optional: true, required: false
  private _allSrcPorts?: number; 
  public get allSrcPorts() {
    return this.getNumberAttribute('all_src_ports');
  }
  public set allSrcPorts(value: number) {
    this._allSrcPorts = value;
  }
  public resetAllSrcPorts() {
    this._allSrcPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSrcPortsInput() {
    return this._allSrcPorts;
  }

  // app_stat - computed: false, optional: true, required: false
  private _appStat?: number; 
  public get appStat() {
    return this.getNumberAttribute('app_stat');
  }
  public set appStat(value: number) {
    this._appStat = value;
  }
  public resetAppStat() {
    this._appStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStatInput() {
    return this._appStat;
  }

  // black_holed - computed: false, optional: true, required: false
  private _blackHoled?: number; 
  public get blackHoled() {
    return this.getNumberAttribute('black_holed');
  }
  public set blackHoled(value: number) {
    this._blackHoled = value;
  }
  public resetBlackHoled() {
    this._blackHoled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackHoledInput() {
    return this._blackHoled;
  }

  // entry_displayed_count - computed: false, optional: true, required: false
  private _entryDisplayedCount?: number; 
  public get entryDisplayedCount() {
    return this.getNumberAttribute('entry_displayed_count');
  }
  public set entryDisplayedCount(value: number) {
    this._entryDisplayedCount = value;
  }
  public resetEntryDisplayedCount() {
    this._entryDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayedCountInput() {
    return this._entryDisplayedCount;
  }

  // exceeded - computed: false, optional: true, required: false
  private _exceeded?: number; 
  public get exceeded() {
    return this.getNumberAttribute('exceeded');
  }
  public set exceeded(value: number) {
    this._exceeded = value;
  }
  public resetExceeded() {
    this._exceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceededInput() {
    return this._exceeded;
  }

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: number; 
  public get hwBlacklisted() {
    return this.getNumberAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: number) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
  }

  // ip_conn_total - computed: false, optional: true, required: false
  private _ipConnTotal?: number; 
  public get ipConnTotal() {
    return this.getNumberAttribute('ip_conn_total');
  }
  public set ipConnTotal(value: number) {
    this._ipConnTotal = value;
  }
  public resetIpConnTotal() {
    this._ipConnTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConnTotalInput() {
    return this._ipConnTotal;
  }

  // ip_proto_num - computed: false, optional: true, required: false
  private _ipProtoNum?: number; 
  public get ipProtoNum() {
    return this.getNumberAttribute('ip_proto_num');
  }
  public set ipProtoNum(value: number) {
    this._ipProtoNum = value;
  }
  public resetIpProtoNum() {
    this._ipProtoNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoNumInput() {
    return this._ipProtoNum;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_conn_total - computed: false, optional: true, required: false
  private _ipv6ConnTotal?: number; 
  public get ipv6ConnTotal() {
    return this.getNumberAttribute('ipv6_conn_total');
  }
  public set ipv6ConnTotal(value: number) {
    this._ipv6ConnTotal = value;
  }
  public resetIpv6ConnTotal() {
    this._ipv6ConnTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ConnTotalInput() {
    return this._ipv6ConnTotal;
  }

  // l4_type_str - computed: false, optional: true, required: false
  private _l4TypeStr?: string; 
  public get l4TypeStr() {
    return this.getStringAttribute('l4_type_str');
  }
  public set l4TypeStr(value: string) {
    this._l4TypeStr = value;
  }
  public resetL4TypeStr() {
    this._l4TypeStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeStrInput() {
    return this._l4TypeStr;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // overflow_policy - computed: false, optional: true, required: false
  private _overflowPolicy?: string; 
  public get overflowPolicy() {
    return this.getStringAttribute('overflow_policy');
  }
  public set overflowPolicy(value: string) {
    this._overflowPolicy = value;
  }
  public resetOverflowPolicy() {
    this._overflowPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowPolicyInput() {
    return this._overflowPolicy;
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_range_end - computed: false, optional: true, required: false
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  public resetPortRangeEnd() {
    this._portRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: true, required: false
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  public resetPortRangeStart() {
    this._portRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // resource_usage - computed: false, optional: true, required: false
  private _resourceUsage?: number; 
  public get resourceUsage() {
    return this.getNumberAttribute('resource_usage');
  }
  public set resourceUsage(value: number) {
    this._resourceUsage = value;
  }
  public resetResourceUsage() {
    this._resourceUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageInput() {
    return this._resourceUsage;
  }

  // service_displayed_count - computed: false, optional: true, required: false
  private _serviceDisplayedCount?: number; 
  public get serviceDisplayedCount() {
    return this.getNumberAttribute('service_displayed_count');
  }
  public set serviceDisplayedCount(value: number) {
    this._serviceDisplayedCount = value;
  }
  public resetServiceDisplayedCount() {
    this._serviceDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDisplayedCountInput() {
    return this._serviceDisplayedCount;
  }

  // sport_protocol - computed: false, optional: true, required: false
  private _sportProtocol?: string; 
  public get sportProtocol() {
    return this.getStringAttribute('sport_protocol');
  }
  public set sportProtocol(value: string) {
    this._sportProtocol = value;
  }
  public resetSportProtocol() {
    this._sportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportProtocolInput() {
    return this._sportProtocol;
  }

  // src_port_num - computed: false, optional: true, required: false
  private _srcPortNum?: number; 
  public get srcPortNum() {
    return this.getNumberAttribute('src_port_num');
  }
  public set srcPortNum(value: number) {
    this._srcPortNum = value;
  }
  public resetSrcPortNum() {
    this._srcPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortNumInput() {
    return this._srcPortNum;
  }

  // src_port_range_end - computed: false, optional: true, required: false
  private _srcPortRangeEnd?: number; 
  public get srcPortRangeEnd() {
    return this.getNumberAttribute('src_port_range_end');
  }
  public set srcPortRangeEnd(value: number) {
    this._srcPortRangeEnd = value;
  }
  public resetSrcPortRangeEnd() {
    this._srcPortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeEndInput() {
    return this._srcPortRangeEnd;
  }

  // src_port_range_start - computed: false, optional: true, required: false
  private _srcPortRangeStart?: number; 
  public get srcPortRangeStart() {
    return this.getNumberAttribute('src_port_range_start');
  }
  public set srcPortRangeStart(value: number) {
    this._srcPortRangeStart = value;
  }
  public resetSrcPortRangeStart() {
    this._srcPortRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeStartInput() {
    return this._srcPortRangeStart;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstDynamicEntryOperOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstDynamicEntryOperOperDdosEntryListStruct[] | cdktf.IResolvable) {
    this._ddosEntryList.internalValue = value;
  }
  public resetDdosEntryList() {
    this._ddosEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryListInput() {
    return this._ddosEntryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper thunder_ddos_dst_dynamic_entry_oper}
*/
export class DataThunderDdosDstDynamicEntryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_dynamic_entry_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstDynamicEntryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstDynamicEntryOper to import
  * @param importFromId The id of the existing DataThunderDdosDstDynamicEntryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstDynamicEntryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_dynamic_entry_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entry_oper thunder_ddos_dst_dynamic_entry_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstDynamicEntryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstDynamicEntryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_dynamic_entry_oper',
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
  private _oper = new DataThunderDdosDstDynamicEntryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstDynamicEntryOperOper) {
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
      oper: dataThunderDdosDstDynamicEntryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosDstDynamicEntryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstDynamicEntryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
