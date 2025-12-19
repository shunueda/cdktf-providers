// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosSrcGeoLocationOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Geolocation Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#geolocation_name DataThunderDdosSrcGeoLocationOper#geolocation_name}
  */
  readonly geolocationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#id DataThunderDdosSrcGeoLocationOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#oper DataThunderDdosSrcGeoLocationOper#oper}
  */
  readonly oper?: DataThunderDdosSrcGeoLocationOperOper;
}
export interface DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#age_str DataThunderDdosSrcGeoLocationOper#age_str}
  */
  readonly ageStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat1_limit DataThunderDdosSrcGeoLocationOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat2_limit DataThunderDdosSrcGeoLocationOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat3_limit DataThunderDdosSrcGeoLocationOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat4_limit DataThunderDdosSrcGeoLocationOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat5_limit DataThunderDdosSrcGeoLocationOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat6_limit DataThunderDdosSrcGeoLocationOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat7_limit DataThunderDdosSrcGeoLocationOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_stat8_limit DataThunderDdosSrcGeoLocationOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#connection_limit DataThunderDdosSrcGeoLocationOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#connection_rate_limit DataThunderDdosSrcGeoLocationOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat1 DataThunderDdosSrcGeoLocationOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat2 DataThunderDdosSrcGeoLocationOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat3 DataThunderDdosSrcGeoLocationOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat4 DataThunderDdosSrcGeoLocationOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat5 DataThunderDdosSrcGeoLocationOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat6 DataThunderDdosSrcGeoLocationOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat7 DataThunderDdosSrcGeoLocationOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_app_stat8 DataThunderDdosSrcGeoLocationOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_connection_rate DataThunderDdosSrcGeoLocationOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_connections DataThunderDdosSrcGeoLocationOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_frag_packet_rate DataThunderDdosSrcGeoLocationOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_kbit_rate DataThunderDdosSrcGeoLocationOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#current_packet_rate DataThunderDdosSrcGeoLocationOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#debug_str DataThunderDdosSrcGeoLocationOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#dst_address_str DataThunderDdosSrcGeoLocationOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#dynamic_entry_count DataThunderDdosSrcGeoLocationOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#dynamic_entry_limit DataThunderDdosSrcGeoLocationOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#dynamic_entry_warn_state DataThunderDdosSrcGeoLocationOper#dynamic_entry_warn_state}
  */
  readonly dynamicEntryWarnState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#frag_packet_rate_limit DataThunderDdosSrcGeoLocationOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#kbit_rate_limit DataThunderDdosSrcGeoLocationOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#level_str DataThunderDdosSrcGeoLocationOper#level_str}
  */
  readonly levelStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#lockup_time_str DataThunderDdosSrcGeoLocationOper#lockup_time_str}
  */
  readonly lockupTimeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#packet_rate_limit DataThunderDdosSrcGeoLocationOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#port_str DataThunderDdosSrcGeoLocationOper#port_str}
  */
  readonly portStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#sflow_source_id DataThunderDdosSrcGeoLocationOper#sflow_source_id}
  */
  readonly sflowSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#src_address_str DataThunderDdosSrcGeoLocationOper#src_address_str}
  */
  readonly srcAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#state_str DataThunderDdosSrcGeoLocationOper#state_str}
  */
  readonly stateStr?: string;
}

export function dataThunderDdosSrcGeoLocationOperOperDdosEntryListStructToTerraform(struct?: DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct | cdktf.IResolvable): any {
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
    dynamic_entry_warn_state: cdktf.stringToTerraform(struct!.dynamicEntryWarnState),
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


export function dataThunderDdosSrcGeoLocationOperOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct | cdktf.IResolvable): any {
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
    dynamic_entry_warn_state: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryWarnState),
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

export class DataThunderDdosSrcGeoLocationOperOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct | cdktf.IResolvable | undefined {
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
    if (this._dynamicEntryWarnState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryWarnState = this._dynamicEntryWarnState;
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

  public set internalValue(value: DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
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
      this._dynamicEntryWarnState = undefined;
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
      this._dynamicEntryWarnState = value.dynamicEntryWarnState;
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

  // dynamic_entry_warn_state - computed: false, optional: true, required: false
  private _dynamicEntryWarnState?: string; 
  public get dynamicEntryWarnState() {
    return this.getStringAttribute('dynamic_entry_warn_state');
  }
  public set dynamicEntryWarnState(value: string) {
    this._dynamicEntryWarnState = value;
  }
  public resetDynamicEntryWarnState() {
    this._dynamicEntryWarnState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryWarnStateInput() {
    return this._dynamicEntryWarnState;
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

export class DataThunderDdosSrcGeoLocationOperOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosSrcGeoLocationOperOperDdosEntryListStructOutputReference {
    return new DataThunderDdosSrcGeoLocationOperOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosSrcGeoLocationOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#all_entries DataThunderDdosSrcGeoLocationOper#all_entries}
  */
  readonly allEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#all_l4_types DataThunderDdosSrcGeoLocationOper#all_l4_types}
  */
  readonly allL4Types?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#app_type DataThunderDdosSrcGeoLocationOper#app_type}
  */
  readonly appType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#authenticated DataThunderDdosSrcGeoLocationOper#authenticated}
  */
  readonly authenticated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#black_listed DataThunderDdosSrcGeoLocationOper#black_listed}
  */
  readonly blackListed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#entry_displayed_count DataThunderDdosSrcGeoLocationOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#exceeded DataThunderDdosSrcGeoLocationOper#exceeded}
  */
  readonly exceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#hw_blacklisted DataThunderDdosSrcGeoLocationOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#l4_ext_rate DataThunderDdosSrcGeoLocationOper#l4_ext_rate}
  */
  readonly l4ExtRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#l4_type_str DataThunderDdosSrcGeoLocationOper#l4_type_str}
  */
  readonly l4TypeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#service_displayed_count DataThunderDdosSrcGeoLocationOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#white_listed DataThunderDdosSrcGeoLocationOper#white_listed}
  */
  readonly whiteListed?: number;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#ddos_entry_list DataThunderDdosSrcGeoLocationOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosSrcGeoLocationOperOperToTerraform(struct?: DataThunderDdosSrcGeoLocationOperOperOutputReference | DataThunderDdosSrcGeoLocationOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_entries: cdktf.numberToTerraform(struct!.allEntries),
    all_l4_types: cdktf.numberToTerraform(struct!.allL4Types),
    app_type: cdktf.stringToTerraform(struct!.appType),
    authenticated: cdktf.numberToTerraform(struct!.authenticated),
    black_listed: cdktf.numberToTerraform(struct!.blackListed),
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    exceeded: cdktf.numberToTerraform(struct!.exceeded),
    hw_blacklisted: cdktf.stringToTerraform(struct!.hwBlacklisted),
    l4_ext_rate: cdktf.stringToTerraform(struct!.l4ExtRate),
    l4_type_str: cdktf.stringToTerraform(struct!.l4TypeStr),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    white_listed: cdktf.numberToTerraform(struct!.whiteListed),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosSrcGeoLocationOperOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosSrcGeoLocationOperOperToHclTerraform(struct?: DataThunderDdosSrcGeoLocationOperOperOutputReference | DataThunderDdosSrcGeoLocationOperOper): any {
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
    all_l4_types: {
      value: cdktf.numberToHclTerraform(struct!.allL4Types),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticated: {
      value: cdktf.numberToHclTerraform(struct!.authenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    black_listed: {
      value: cdktf.numberToHclTerraform(struct!.blackListed),
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
      value: cdktf.stringToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_ext_rate: {
      value: cdktf.stringToHclTerraform(struct!.l4ExtRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_type_str: {
      value: cdktf.stringToHclTerraform(struct!.l4TypeStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    white_listed: {
      value: cdktf.numberToHclTerraform(struct!.whiteListed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosSrcGeoLocationOperOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosSrcGeoLocationOperOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSrcGeoLocationOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosSrcGeoLocationOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEntries = this._allEntries;
    }
    if (this._allL4Types !== undefined) {
      hasAnyValues = true;
      internalValueResult.allL4Types = this._allL4Types;
    }
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._authenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticated = this._authenticated;
    }
    if (this._blackListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackListed = this._blackListed;
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
    if (this._l4ExtRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ExtRate = this._l4ExtRate;
    }
    if (this._l4TypeStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeStr = this._l4TypeStr;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
    }
    if (this._whiteListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListed = this._whiteListed;
    }
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSrcGeoLocationOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEntries = undefined;
      this._allL4Types = undefined;
      this._appType = undefined;
      this._authenticated = undefined;
      this._blackListed = undefined;
      this._entryDisplayedCount = undefined;
      this._exceeded = undefined;
      this._hwBlacklisted = undefined;
      this._l4ExtRate = undefined;
      this._l4TypeStr = undefined;
      this._serviceDisplayedCount = undefined;
      this._whiteListed = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEntries = value.allEntries;
      this._allL4Types = value.allL4Types;
      this._appType = value.appType;
      this._authenticated = value.authenticated;
      this._blackListed = value.blackListed;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._exceeded = value.exceeded;
      this._hwBlacklisted = value.hwBlacklisted;
      this._l4ExtRate = value.l4ExtRate;
      this._l4TypeStr = value.l4TypeStr;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._whiteListed = value.whiteListed;
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

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // authenticated - computed: false, optional: true, required: false
  private _authenticated?: number; 
  public get authenticated() {
    return this.getNumberAttribute('authenticated');
  }
  public set authenticated(value: number) {
    this._authenticated = value;
  }
  public resetAuthenticated() {
    this._authenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedInput() {
    return this._authenticated;
  }

  // black_listed - computed: false, optional: true, required: false
  private _blackListed?: number; 
  public get blackListed() {
    return this.getNumberAttribute('black_listed');
  }
  public set blackListed(value: number) {
    this._blackListed = value;
  }
  public resetBlackListed() {
    this._blackListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListedInput() {
    return this._blackListed;
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
  private _hwBlacklisted?: string; 
  public get hwBlacklisted() {
    return this.getStringAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: string) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
  }

  // l4_ext_rate - computed: false, optional: true, required: false
  private _l4ExtRate?: string; 
  public get l4ExtRate() {
    return this.getStringAttribute('l4_ext_rate');
  }
  public set l4ExtRate(value: string) {
    this._l4ExtRate = value;
  }
  public resetL4ExtRate() {
    this._l4ExtRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ExtRateInput() {
    return this._l4ExtRate;
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

  // white_listed - computed: false, optional: true, required: false
  private _whiteListed?: number; 
  public get whiteListed() {
    return this.getNumberAttribute('white_listed');
  }
  public set whiteListed(value: number) {
    this._whiteListed = value;
  }
  public resetWhiteListed() {
    this._whiteListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedInput() {
    return this._whiteListed;
  }

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosSrcGeoLocationOperOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosSrcGeoLocationOperOperDdosEntryListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper thunder_ddos_src_geo_location_oper}
*/
export class DataThunderDdosSrcGeoLocationOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_geo_location_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosSrcGeoLocationOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosSrcGeoLocationOper to import
  * @param importFromId The id of the existing DataThunderDdosSrcGeoLocationOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosSrcGeoLocationOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_geo_location_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_geo_location_oper thunder_ddos_src_geo_location_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosSrcGeoLocationOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosSrcGeoLocationOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_geo_location_oper',
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
    this._geolocationName = config.geolocationName;
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // geolocation_name - computed: false, optional: false, required: true
  private _geolocationName?: string; 
  public get geolocationName() {
    return this.getStringAttribute('geolocation_name');
  }
  public set geolocationName(value: string) {
    this._geolocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationNameInput() {
    return this._geolocationName;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosSrcGeoLocationOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosSrcGeoLocationOperOper) {
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
      geolocation_name: cdktf.stringToTerraform(this._geolocationName),
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDdosSrcGeoLocationOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      geolocation_name: {
        value: cdktf.stringToHclTerraform(this._geolocationName),
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
      oper: {
        value: dataThunderDdosSrcGeoLocationOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosSrcGeoLocationOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
