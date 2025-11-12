// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#adjacency_check RouterIsis#adjacency_check}
  */
  readonly adjacencyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#adjacency_check6 RouterIsis#adjacency_check6}
  */
  readonly adjacencyCheck6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#adv_passive_only RouterIsis#adv_passive_only}
  */
  readonly advPassiveOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#adv_passive_only6 RouterIsis#adv_passive_only6}
  */
  readonly advPassiveOnly6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_keychain_l1 RouterIsis#auth_keychain_l1}
  */
  readonly authKeychainL1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_keychain_l2 RouterIsis#auth_keychain_l2}
  */
  readonly authKeychainL2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_mode_l1 RouterIsis#auth_mode_l1}
  */
  readonly authModeL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_mode_l2 RouterIsis#auth_mode_l2}
  */
  readonly authModeL2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_password_l1 RouterIsis#auth_password_l1}
  */
  readonly authPasswordL1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_password_l2 RouterIsis#auth_password_l2}
  */
  readonly authPasswordL2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_sendonly_l1 RouterIsis#auth_sendonly_l1}
  */
  readonly authSendonlyL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_sendonly_l2 RouterIsis#auth_sendonly_l2}
  */
  readonly authSendonlyL2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#default_originate RouterIsis#default_originate}
  */
  readonly defaultOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#default_originate6 RouterIsis#default_originate6}
  */
  readonly defaultOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#device_name RouterIsis#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#device_vdom RouterIsis#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#dynamic_hostname RouterIsis#dynamic_hostname}
  */
  readonly dynamicHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#dynamic_sort_subtable RouterIsis#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#ignore_lsp_errors RouterIsis#ignore_lsp_errors}
  */
  readonly ignoreLspErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#is_type RouterIsis#is_type}
  */
  readonly isType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#lsp_gen_interval_l1 RouterIsis#lsp_gen_interval_l1}
  */
  readonly lspGenIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#lsp_gen_interval_l2 RouterIsis#lsp_gen_interval_l2}
  */
  readonly lspGenIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#lsp_refresh_interval RouterIsis#lsp_refresh_interval}
  */
  readonly lspRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#max_lsp_lifetime RouterIsis#max_lsp_lifetime}
  */
  readonly maxLspLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#metric_style RouterIsis#metric_style}
  */
  readonly metricStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#overload_bit RouterIsis#overload_bit}
  */
  readonly overloadBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#overload_bit_on_startup RouterIsis#overload_bit_on_startup}
  */
  readonly overloadBitOnStartup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#overload_bit_suppress RouterIsis#overload_bit_suppress}
  */
  readonly overloadBitSuppress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute6_l1 RouterIsis#redistribute6_l1}
  */
  readonly redistribute6L1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute6_l1_list RouterIsis#redistribute6_l1_list}
  */
  readonly redistribute6L1List?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute6_l2 RouterIsis#redistribute6_l2}
  */
  readonly redistribute6L2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute6_l2_list RouterIsis#redistribute6_l2_list}
  */
  readonly redistribute6L2List?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute_l1 RouterIsis#redistribute_l1}
  */
  readonly redistributeL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute_l1_list RouterIsis#redistribute_l1_list}
  */
  readonly redistributeL1List?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute_l2 RouterIsis#redistribute_l2}
  */
  readonly redistributeL2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute_l2_list RouterIsis#redistribute_l2_list}
  */
  readonly redistributeL2List?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#spf_interval_exp_l1 RouterIsis#spf_interval_exp_l1}
  */
  readonly spfIntervalExpL1?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#spf_interval_exp_l2 RouterIsis#spf_interval_exp_l2}
  */
  readonly spfIntervalExpL2?: number[];
  /**
  * isis_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#isis_interface RouterIsis#isis_interface}
  */
  readonly isisInterface?: RouterIsisIsisInterface[] | cdktf.IResolvable;
  /**
  * isis_net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#isis_net RouterIsis#isis_net}
  */
  readonly isisNet?: RouterIsisIsisNet[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute RouterIsis#redistribute}
  */
  readonly redistribute?: RouterIsisRedistribute;
  /**
  * redistribute6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#redistribute6 RouterIsis#redistribute6}
  */
  readonly redistribute6?: RouterIsisRedistribute6;
  /**
  * summary_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#summary_address RouterIsis#summary_address}
  */
  readonly summaryAddress?: RouterIsisSummaryAddress[] | cdktf.IResolvable;
  /**
  * summary_address6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#summary_address6 RouterIsis#summary_address6}
  */
  readonly summaryAddress6?: RouterIsisSummaryAddress6[] | cdktf.IResolvable;
}
export interface RouterIsisIsisInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_keychain_l1 RouterIsis#auth_keychain_l1}
  */
  readonly authKeychainL1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_keychain_l2 RouterIsis#auth_keychain_l2}
  */
  readonly authKeychainL2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_mode_l1 RouterIsis#auth_mode_l1}
  */
  readonly authModeL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_mode_l2 RouterIsis#auth_mode_l2}
  */
  readonly authModeL2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_password_l1 RouterIsis#auth_password_l1}
  */
  readonly authPasswordL1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_password_l2 RouterIsis#auth_password_l2}
  */
  readonly authPasswordL2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_send_only_l1 RouterIsis#auth_send_only_l1}
  */
  readonly authSendOnlyL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#auth_send_only_l2 RouterIsis#auth_send_only_l2}
  */
  readonly authSendOnlyL2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#circuit_type RouterIsis#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#csnp_interval_l1 RouterIsis#csnp_interval_l1}
  */
  readonly csnpIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#csnp_interval_l2 RouterIsis#csnp_interval_l2}
  */
  readonly csnpIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#hello_interval_l1 RouterIsis#hello_interval_l1}
  */
  readonly helloIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#hello_interval_l2 RouterIsis#hello_interval_l2}
  */
  readonly helloIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#hello_multiplier_l1 RouterIsis#hello_multiplier_l1}
  */
  readonly helloMultiplierL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#hello_multiplier_l2 RouterIsis#hello_multiplier_l2}
  */
  readonly helloMultiplierL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#hello_padding RouterIsis#hello_padding}
  */
  readonly helloPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#lsp_interval RouterIsis#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#lsp_retransmit_interval RouterIsis#lsp_retransmit_interval}
  */
  readonly lspRetransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#mesh_group RouterIsis#mesh_group}
  */
  readonly meshGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#mesh_group_id RouterIsis#mesh_group_id}
  */
  readonly meshGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#metric_l1 RouterIsis#metric_l1}
  */
  readonly metricL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#metric_l2 RouterIsis#metric_l2}
  */
  readonly metricL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#name RouterIsis#name}
  */
  readonly name?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#network_type RouterIsis#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#priority_l1 RouterIsis#priority_l1}
  */
  readonly priorityL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#priority_l2 RouterIsis#priority_l2}
  */
  readonly priorityL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#status RouterIsis#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#status6 RouterIsis#status6}
  */
  readonly status6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#wide_metric_l1 RouterIsis#wide_metric_l1}
  */
  readonly wideMetricL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#wide_metric_l2 RouterIsis#wide_metric_l2}
  */
  readonly wideMetricL2?: number;
}

export function routerIsisIsisInterfaceToTerraform(struct?: RouterIsisIsisInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_keychain_l1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authKeychainL1),
    auth_keychain_l2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authKeychainL2),
    auth_mode_l1: cdktf.stringToTerraform(struct!.authModeL1),
    auth_mode_l2: cdktf.stringToTerraform(struct!.authModeL2),
    auth_password_l1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authPasswordL1),
    auth_password_l2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authPasswordL2),
    auth_send_only_l1: cdktf.stringToTerraform(struct!.authSendOnlyL1),
    auth_send_only_l2: cdktf.stringToTerraform(struct!.authSendOnlyL2),
    circuit_type: cdktf.stringToTerraform(struct!.circuitType),
    csnp_interval_l1: cdktf.numberToTerraform(struct!.csnpIntervalL1),
    csnp_interval_l2: cdktf.numberToTerraform(struct!.csnpIntervalL2),
    hello_interval_l1: cdktf.numberToTerraform(struct!.helloIntervalL1),
    hello_interval_l2: cdktf.numberToTerraform(struct!.helloIntervalL2),
    hello_multiplier_l1: cdktf.numberToTerraform(struct!.helloMultiplierL1),
    hello_multiplier_l2: cdktf.numberToTerraform(struct!.helloMultiplierL2),
    hello_padding: cdktf.stringToTerraform(struct!.helloPadding),
    lsp_interval: cdktf.numberToTerraform(struct!.lspInterval),
    lsp_retransmit_interval: cdktf.numberToTerraform(struct!.lspRetransmitInterval),
    mesh_group: cdktf.stringToTerraform(struct!.meshGroup),
    mesh_group_id: cdktf.numberToTerraform(struct!.meshGroupId),
    metric_l1: cdktf.numberToTerraform(struct!.metricL1),
    metric_l2: cdktf.numberToTerraform(struct!.metricL2),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    priority_l1: cdktf.numberToTerraform(struct!.priorityL1),
    priority_l2: cdktf.numberToTerraform(struct!.priorityL2),
    status: cdktf.stringToTerraform(struct!.status),
    status6: cdktf.stringToTerraform(struct!.status6),
    wide_metric_l1: cdktf.numberToTerraform(struct!.wideMetricL1),
    wide_metric_l2: cdktf.numberToTerraform(struct!.wideMetricL2),
  }
}


export function routerIsisIsisInterfaceToHclTerraform(struct?: RouterIsisIsisInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_keychain_l1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authKeychainL1),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auth_keychain_l2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authKeychainL2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auth_mode_l1: {
      value: cdktf.stringToHclTerraform(struct!.authModeL1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_mode_l2: {
      value: cdktf.stringToHclTerraform(struct!.authModeL2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password_l1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authPasswordL1),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auth_password_l2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authPasswordL2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auth_send_only_l1: {
      value: cdktf.stringToHclTerraform(struct!.authSendOnlyL1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_send_only_l2: {
      value: cdktf.stringToHclTerraform(struct!.authSendOnlyL2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csnp_interval_l1: {
      value: cdktf.numberToHclTerraform(struct!.csnpIntervalL1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    csnp_interval_l2: {
      value: cdktf.numberToHclTerraform(struct!.csnpIntervalL2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval_l1: {
      value: cdktf.numberToHclTerraform(struct!.helloIntervalL1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval_l2: {
      value: cdktf.numberToHclTerraform(struct!.helloIntervalL2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_multiplier_l1: {
      value: cdktf.numberToHclTerraform(struct!.helloMultiplierL1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_multiplier_l2: {
      value: cdktf.numberToHclTerraform(struct!.helloMultiplierL2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_padding: {
      value: cdktf.stringToHclTerraform(struct!.helloPadding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lsp_interval: {
      value: cdktf.numberToHclTerraform(struct!.lspInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsp_retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.lspRetransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mesh_group: {
      value: cdktf.stringToHclTerraform(struct!.meshGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mesh_group_id: {
      value: cdktf.numberToHclTerraform(struct!.meshGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_l1: {
      value: cdktf.numberToHclTerraform(struct!.metricL1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_l2: {
      value: cdktf.numberToHclTerraform(struct!.metricL2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_l1: {
      value: cdktf.numberToHclTerraform(struct!.priorityL1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_l2: {
      value: cdktf.numberToHclTerraform(struct!.priorityL2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status6: {
      value: cdktf.stringToHclTerraform(struct!.status6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wide_metric_l1: {
      value: cdktf.numberToHclTerraform(struct!.wideMetricL1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wide_metric_l2: {
      value: cdktf.numberToHclTerraform(struct!.wideMetricL2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisIsisInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisIsisInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKeychainL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeychainL1 = this._authKeychainL1;
    }
    if (this._authKeychainL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeychainL2 = this._authKeychainL2;
    }
    if (this._authModeL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authModeL1 = this._authModeL1;
    }
    if (this._authModeL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authModeL2 = this._authModeL2;
    }
    if (this._authPasswordL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPasswordL1 = this._authPasswordL1;
    }
    if (this._authPasswordL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPasswordL2 = this._authPasswordL2;
    }
    if (this._authSendOnlyL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSendOnlyL1 = this._authSendOnlyL1;
    }
    if (this._authSendOnlyL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSendOnlyL2 = this._authSendOnlyL2;
    }
    if (this._circuitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitType = this._circuitType;
    }
    if (this._csnpIntervalL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpIntervalL1 = this._csnpIntervalL1;
    }
    if (this._csnpIntervalL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpIntervalL2 = this._csnpIntervalL2;
    }
    if (this._helloIntervalL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalL1 = this._helloIntervalL1;
    }
    if (this._helloIntervalL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalL2 = this._helloIntervalL2;
    }
    if (this._helloMultiplierL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplierL1 = this._helloMultiplierL1;
    }
    if (this._helloMultiplierL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplierL2 = this._helloMultiplierL2;
    }
    if (this._helloPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloPadding = this._helloPadding;
    }
    if (this._lspInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lspInterval = this._lspInterval;
    }
    if (this._lspRetransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lspRetransmitInterval = this._lspRetransmitInterval;
    }
    if (this._meshGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGroup = this._meshGroup;
    }
    if (this._meshGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGroupId = this._meshGroupId;
    }
    if (this._metricL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricL1 = this._metricL1;
    }
    if (this._metricL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricL2 = this._metricL2;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._priorityL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityL1 = this._priorityL1;
    }
    if (this._priorityL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityL2 = this._priorityL2;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._status6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status6 = this._status6;
    }
    if (this._wideMetricL1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetricL1 = this._wideMetricL1;
    }
    if (this._wideMetricL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetricL2 = this._wideMetricL2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisIsisInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKeychainL1 = undefined;
      this._authKeychainL2 = undefined;
      this._authModeL1 = undefined;
      this._authModeL2 = undefined;
      this._authPasswordL1 = undefined;
      this._authPasswordL2 = undefined;
      this._authSendOnlyL1 = undefined;
      this._authSendOnlyL2 = undefined;
      this._circuitType = undefined;
      this._csnpIntervalL1 = undefined;
      this._csnpIntervalL2 = undefined;
      this._helloIntervalL1 = undefined;
      this._helloIntervalL2 = undefined;
      this._helloMultiplierL1 = undefined;
      this._helloMultiplierL2 = undefined;
      this._helloPadding = undefined;
      this._lspInterval = undefined;
      this._lspRetransmitInterval = undefined;
      this._meshGroup = undefined;
      this._meshGroupId = undefined;
      this._metricL1 = undefined;
      this._metricL2 = undefined;
      this._name = undefined;
      this._networkType = undefined;
      this._priorityL1 = undefined;
      this._priorityL2 = undefined;
      this._status = undefined;
      this._status6 = undefined;
      this._wideMetricL1 = undefined;
      this._wideMetricL2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKeychainL1 = value.authKeychainL1;
      this._authKeychainL2 = value.authKeychainL2;
      this._authModeL1 = value.authModeL1;
      this._authModeL2 = value.authModeL2;
      this._authPasswordL1 = value.authPasswordL1;
      this._authPasswordL2 = value.authPasswordL2;
      this._authSendOnlyL1 = value.authSendOnlyL1;
      this._authSendOnlyL2 = value.authSendOnlyL2;
      this._circuitType = value.circuitType;
      this._csnpIntervalL1 = value.csnpIntervalL1;
      this._csnpIntervalL2 = value.csnpIntervalL2;
      this._helloIntervalL1 = value.helloIntervalL1;
      this._helloIntervalL2 = value.helloIntervalL2;
      this._helloMultiplierL1 = value.helloMultiplierL1;
      this._helloMultiplierL2 = value.helloMultiplierL2;
      this._helloPadding = value.helloPadding;
      this._lspInterval = value.lspInterval;
      this._lspRetransmitInterval = value.lspRetransmitInterval;
      this._meshGroup = value.meshGroup;
      this._meshGroupId = value.meshGroupId;
      this._metricL1 = value.metricL1;
      this._metricL2 = value.metricL2;
      this._name = value.name;
      this._networkType = value.networkType;
      this._priorityL1 = value.priorityL1;
      this._priorityL2 = value.priorityL2;
      this._status = value.status;
      this._status6 = value.status6;
      this._wideMetricL1 = value.wideMetricL1;
      this._wideMetricL2 = value.wideMetricL2;
    }
  }

  // auth_keychain_l1 - computed: true, optional: true, required: false
  private _authKeychainL1?: string[]; 
  public get authKeychainL1() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain_l1'));
  }
  public set authKeychainL1(value: string[]) {
    this._authKeychainL1 = value;
  }
  public resetAuthKeychainL1() {
    this._authKeychainL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainL1Input() {
    return this._authKeychainL1;
  }

  // auth_keychain_l2 - computed: true, optional: true, required: false
  private _authKeychainL2?: string[]; 
  public get authKeychainL2() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain_l2'));
  }
  public set authKeychainL2(value: string[]) {
    this._authKeychainL2 = value;
  }
  public resetAuthKeychainL2() {
    this._authKeychainL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainL2Input() {
    return this._authKeychainL2;
  }

  // auth_mode_l1 - computed: true, optional: true, required: false
  private _authModeL1?: string; 
  public get authModeL1() {
    return this.getStringAttribute('auth_mode_l1');
  }
  public set authModeL1(value: string) {
    this._authModeL1 = value;
  }
  public resetAuthModeL1() {
    this._authModeL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeL1Input() {
    return this._authModeL1;
  }

  // auth_mode_l2 - computed: true, optional: true, required: false
  private _authModeL2?: string; 
  public get authModeL2() {
    return this.getStringAttribute('auth_mode_l2');
  }
  public set authModeL2(value: string) {
    this._authModeL2 = value;
  }
  public resetAuthModeL2() {
    this._authModeL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeL2Input() {
    return this._authModeL2;
  }

  // auth_password_l1 - computed: true, optional: true, required: false
  private _authPasswordL1?: string[]; 
  public get authPasswordL1() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_password_l1'));
  }
  public set authPasswordL1(value: string[]) {
    this._authPasswordL1 = value;
  }
  public resetAuthPasswordL1() {
    this._authPasswordL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordL1Input() {
    return this._authPasswordL1;
  }

  // auth_password_l2 - computed: true, optional: true, required: false
  private _authPasswordL2?: string[]; 
  public get authPasswordL2() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_password_l2'));
  }
  public set authPasswordL2(value: string[]) {
    this._authPasswordL2 = value;
  }
  public resetAuthPasswordL2() {
    this._authPasswordL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordL2Input() {
    return this._authPasswordL2;
  }

  // auth_send_only_l1 - computed: true, optional: true, required: false
  private _authSendOnlyL1?: string; 
  public get authSendOnlyL1() {
    return this.getStringAttribute('auth_send_only_l1');
  }
  public set authSendOnlyL1(value: string) {
    this._authSendOnlyL1 = value;
  }
  public resetAuthSendOnlyL1() {
    this._authSendOnlyL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendOnlyL1Input() {
    return this._authSendOnlyL1;
  }

  // auth_send_only_l2 - computed: true, optional: true, required: false
  private _authSendOnlyL2?: string; 
  public get authSendOnlyL2() {
    return this.getStringAttribute('auth_send_only_l2');
  }
  public set authSendOnlyL2(value: string) {
    this._authSendOnlyL2 = value;
  }
  public resetAuthSendOnlyL2() {
    this._authSendOnlyL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendOnlyL2Input() {
    return this._authSendOnlyL2;
  }

  // circuit_type - computed: true, optional: true, required: false
  private _circuitType?: string; 
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }
  public set circuitType(value: string) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // csnp_interval_l1 - computed: true, optional: true, required: false
  private _csnpIntervalL1?: number; 
  public get csnpIntervalL1() {
    return this.getNumberAttribute('csnp_interval_l1');
  }
  public set csnpIntervalL1(value: number) {
    this._csnpIntervalL1 = value;
  }
  public resetCsnpIntervalL1() {
    this._csnpIntervalL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalL1Input() {
    return this._csnpIntervalL1;
  }

  // csnp_interval_l2 - computed: true, optional: true, required: false
  private _csnpIntervalL2?: number; 
  public get csnpIntervalL2() {
    return this.getNumberAttribute('csnp_interval_l2');
  }
  public set csnpIntervalL2(value: number) {
    this._csnpIntervalL2 = value;
  }
  public resetCsnpIntervalL2() {
    this._csnpIntervalL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalL2Input() {
    return this._csnpIntervalL2;
  }

  // hello_interval_l1 - computed: true, optional: true, required: false
  private _helloIntervalL1?: number; 
  public get helloIntervalL1() {
    return this.getNumberAttribute('hello_interval_l1');
  }
  public set helloIntervalL1(value: number) {
    this._helloIntervalL1 = value;
  }
  public resetHelloIntervalL1() {
    this._helloIntervalL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalL1Input() {
    return this._helloIntervalL1;
  }

  // hello_interval_l2 - computed: true, optional: true, required: false
  private _helloIntervalL2?: number; 
  public get helloIntervalL2() {
    return this.getNumberAttribute('hello_interval_l2');
  }
  public set helloIntervalL2(value: number) {
    this._helloIntervalL2 = value;
  }
  public resetHelloIntervalL2() {
    this._helloIntervalL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalL2Input() {
    return this._helloIntervalL2;
  }

  // hello_multiplier_l1 - computed: true, optional: true, required: false
  private _helloMultiplierL1?: number; 
  public get helloMultiplierL1() {
    return this.getNumberAttribute('hello_multiplier_l1');
  }
  public set helloMultiplierL1(value: number) {
    this._helloMultiplierL1 = value;
  }
  public resetHelloMultiplierL1() {
    this._helloMultiplierL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierL1Input() {
    return this._helloMultiplierL1;
  }

  // hello_multiplier_l2 - computed: true, optional: true, required: false
  private _helloMultiplierL2?: number; 
  public get helloMultiplierL2() {
    return this.getNumberAttribute('hello_multiplier_l2');
  }
  public set helloMultiplierL2(value: number) {
    this._helloMultiplierL2 = value;
  }
  public resetHelloMultiplierL2() {
    this._helloMultiplierL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierL2Input() {
    return this._helloMultiplierL2;
  }

  // hello_padding - computed: true, optional: true, required: false
  private _helloPadding?: string; 
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }
  public set helloPadding(value: string) {
    this._helloPadding = value;
  }
  public resetHelloPadding() {
    this._helloPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPaddingInput() {
    return this._helloPadding;
  }

  // lsp_interval - computed: true, optional: true, required: false
  private _lspInterval?: number; 
  public get lspInterval() {
    return this.getNumberAttribute('lsp_interval');
  }
  public set lspInterval(value: number) {
    this._lspInterval = value;
  }
  public resetLspInterval() {
    this._lspInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspIntervalInput() {
    return this._lspInterval;
  }

  // lsp_retransmit_interval - computed: true, optional: true, required: false
  private _lspRetransmitInterval?: number; 
  public get lspRetransmitInterval() {
    return this.getNumberAttribute('lsp_retransmit_interval');
  }
  public set lspRetransmitInterval(value: number) {
    this._lspRetransmitInterval = value;
  }
  public resetLspRetransmitInterval() {
    this._lspRetransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspRetransmitIntervalInput() {
    return this._lspRetransmitInterval;
  }

  // mesh_group - computed: true, optional: true, required: false
  private _meshGroup?: string; 
  public get meshGroup() {
    return this.getStringAttribute('mesh_group');
  }
  public set meshGroup(value: string) {
    this._meshGroup = value;
  }
  public resetMeshGroup() {
    this._meshGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupInput() {
    return this._meshGroup;
  }

  // mesh_group_id - computed: false, optional: true, required: false
  private _meshGroupId?: number; 
  public get meshGroupId() {
    return this.getNumberAttribute('mesh_group_id');
  }
  public set meshGroupId(value: number) {
    this._meshGroupId = value;
  }
  public resetMeshGroupId() {
    this._meshGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupIdInput() {
    return this._meshGroupId;
  }

  // metric_l1 - computed: true, optional: true, required: false
  private _metricL1?: number; 
  public get metricL1() {
    return this.getNumberAttribute('metric_l1');
  }
  public set metricL1(value: number) {
    this._metricL1 = value;
  }
  public resetMetricL1() {
    this._metricL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricL1Input() {
    return this._metricL1;
  }

  // metric_l2 - computed: true, optional: true, required: false
  private _metricL2?: number; 
  public get metricL2() {
    return this.getNumberAttribute('metric_l2');
  }
  public set metricL2(value: number) {
    this._metricL2 = value;
  }
  public resetMetricL2() {
    this._metricL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricL2Input() {
    return this._metricL2;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // priority_l1 - computed: true, optional: true, required: false
  private _priorityL1?: number; 
  public get priorityL1() {
    return this.getNumberAttribute('priority_l1');
  }
  public set priorityL1(value: number) {
    this._priorityL1 = value;
  }
  public resetPriorityL1() {
    this._priorityL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityL1Input() {
    return this._priorityL1;
  }

  // priority_l2 - computed: true, optional: true, required: false
  private _priorityL2?: number; 
  public get priorityL2() {
    return this.getNumberAttribute('priority_l2');
  }
  public set priorityL2(value: number) {
    this._priorityL2 = value;
  }
  public resetPriorityL2() {
    this._priorityL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityL2Input() {
    return this._priorityL2;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status6 - computed: true, optional: true, required: false
  private _status6?: string; 
  public get status6() {
    return this.getStringAttribute('status6');
  }
  public set status6(value: string) {
    this._status6 = value;
  }
  public resetStatus6() {
    this._status6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status6Input() {
    return this._status6;
  }

  // wide_metric_l1 - computed: true, optional: true, required: false
  private _wideMetricL1?: number; 
  public get wideMetricL1() {
    return this.getNumberAttribute('wide_metric_l1');
  }
  public set wideMetricL1(value: number) {
    this._wideMetricL1 = value;
  }
  public resetWideMetricL1() {
    this._wideMetricL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricL1Input() {
    return this._wideMetricL1;
  }

  // wide_metric_l2 - computed: true, optional: true, required: false
  private _wideMetricL2?: number; 
  public get wideMetricL2() {
    return this.getNumberAttribute('wide_metric_l2');
  }
  public set wideMetricL2(value: number) {
    this._wideMetricL2 = value;
  }
  public resetWideMetricL2() {
    this._wideMetricL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricL2Input() {
    return this._wideMetricL2;
  }
}

export class RouterIsisIsisInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterIsisIsisInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisIsisInterfaceOutputReference {
    return new RouterIsisIsisInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisIsisNet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#net RouterIsis#net}
  */
  readonly net?: string;
}

export function routerIsisIsisNetToTerraform(struct?: RouterIsisIsisNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    net: cdktf.stringToTerraform(struct!.net),
  }
}


export function routerIsisIsisNetToHclTerraform(struct?: RouterIsisIsisNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net: {
      value: cdktf.stringToHclTerraform(struct!.net),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisIsisNetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisIsisNet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisIsisNet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._net = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._net = value.net;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // net - computed: false, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }
}

export class RouterIsisIsisNetList extends cdktf.ComplexList {
  public internalValue? : RouterIsisIsisNet[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisIsisNetOutputReference {
    return new RouterIsisIsisNetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisRedistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#metric RouterIsis#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#metric_type RouterIsis#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#protocol RouterIsis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#routemap RouterIsis#routemap}
  */
  readonly routemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#status RouterIsis#status}
  */
  readonly status?: string;
}

export function routerIsisRedistributeToTerraform(struct?: RouterIsisRedistributeOutputReference | RouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerIsisRedistributeToHclTerraform(struct?: RouterIsisRedistributeOutputReference | RouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routemap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routemap = this._routemap;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._protocol = undefined;
      this._routemap = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._protocol = value.protocol;
      this._routemap = value.routemap;
      this._status = value.status;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // routemap - computed: true, optional: true, required: false
  private _routemap?: string[]; 
  public get routemap() {
    return cdktf.Fn.tolist(this.getListAttribute('routemap'));
  }
  public set routemap(value: string[]) {
    this._routemap = value;
  }
  public resetRoutemap() {
    this._routemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routemapInput() {
    return this._routemap;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface RouterIsisRedistribute6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#metric RouterIsis#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#metric_type RouterIsis#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#protocol RouterIsis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#routemap RouterIsis#routemap}
  */
  readonly routemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#status RouterIsis#status}
  */
  readonly status?: string;
}

export function routerIsisRedistribute6ToTerraform(struct?: RouterIsisRedistribute6OutputReference | RouterIsisRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerIsisRedistribute6ToHclTerraform(struct?: RouterIsisRedistribute6OutputReference | RouterIsisRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routemap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistribute6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisRedistribute6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routemap = this._routemap;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistribute6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._protocol = undefined;
      this._routemap = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._protocol = value.protocol;
      this._routemap = value.routemap;
      this._status = value.status;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // routemap - computed: true, optional: true, required: false
  private _routemap?: string[]; 
  public get routemap() {
    return cdktf.Fn.tolist(this.getListAttribute('routemap'));
  }
  public set routemap(value: string[]) {
    this._routemap = value;
  }
  public resetRoutemap() {
    this._routemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routemapInput() {
    return this._routemap;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface RouterIsisSummaryAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#prefix RouterIsis#prefix}
  */
  readonly prefix?: string[];
}

export function routerIsisSummaryAddressToTerraform(struct?: RouterIsisSummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    level: cdktf.stringToTerraform(struct!.level),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function routerIsisSummaryAddressToHclTerraform(struct?: RouterIsisSummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisSummaryAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisSummaryAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._level = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._level = value.level;
      this._prefix = value.prefix;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class RouterIsisSummaryAddressList extends cdktf.ComplexList {
  public internalValue? : RouterIsisSummaryAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisSummaryAddressOutputReference {
    return new RouterIsisSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisSummaryAddress6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#prefix6 RouterIsis#prefix6}
  */
  readonly prefix6?: string;
}

export function routerIsisSummaryAddress6ToTerraform(struct?: RouterIsisSummaryAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    level: cdktf.stringToTerraform(struct!.level),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
  }
}


export function routerIsisSummaryAddress6ToHclTerraform(struct?: RouterIsisSummaryAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisSummaryAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisSummaryAddress6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._prefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix6 = this._prefix6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisSummaryAddress6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._level = undefined;
      this._prefix6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._level = value.level;
      this._prefix6 = value.prefix6;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // prefix6 - computed: true, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }
}

export class RouterIsisSummaryAddress6List extends cdktf.ComplexList {
  public internalValue? : RouterIsisSummaryAddress6[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisSummaryAddress6OutputReference {
    return new RouterIsisSummaryAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis fmgdevice_router_isis}
*/
export class RouterIsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsis to import
  * @param importFromId The id of the existing RouterIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis fmgdevice_router_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterIsisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_isis',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adjacencyCheck = config.adjacencyCheck;
    this._adjacencyCheck6 = config.adjacencyCheck6;
    this._advPassiveOnly = config.advPassiveOnly;
    this._advPassiveOnly6 = config.advPassiveOnly6;
    this._authKeychainL1 = config.authKeychainL1;
    this._authKeychainL2 = config.authKeychainL2;
    this._authModeL1 = config.authModeL1;
    this._authModeL2 = config.authModeL2;
    this._authPasswordL1 = config.authPasswordL1;
    this._authPasswordL2 = config.authPasswordL2;
    this._authSendonlyL1 = config.authSendonlyL1;
    this._authSendonlyL2 = config.authSendonlyL2;
    this._defaultOriginate = config.defaultOriginate;
    this._defaultOriginate6 = config.defaultOriginate6;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicHostname = config.dynamicHostname;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._ignoreLspErrors = config.ignoreLspErrors;
    this._isType = config.isType;
    this._lspGenIntervalL1 = config.lspGenIntervalL1;
    this._lspGenIntervalL2 = config.lspGenIntervalL2;
    this._lspRefreshInterval = config.lspRefreshInterval;
    this._maxLspLifetime = config.maxLspLifetime;
    this._metricStyle = config.metricStyle;
    this._overloadBit = config.overloadBit;
    this._overloadBitOnStartup = config.overloadBitOnStartup;
    this._overloadBitSuppress = config.overloadBitSuppress;
    this._redistribute6L1 = config.redistribute6L1;
    this._redistribute6L1List = config.redistribute6L1List;
    this._redistribute6L2 = config.redistribute6L2;
    this._redistribute6L2List = config.redistribute6L2List;
    this._redistributeL1 = config.redistributeL1;
    this._redistributeL1List = config.redistributeL1List;
    this._redistributeL2 = config.redistributeL2;
    this._redistributeL2List = config.redistributeL2List;
    this._spfIntervalExpL1 = config.spfIntervalExpL1;
    this._spfIntervalExpL2 = config.spfIntervalExpL2;
    this._isisInterface.internalValue = config.isisInterface;
    this._isisNet.internalValue = config.isisNet;
    this._redistribute.internalValue = config.redistribute;
    this._redistribute6.internalValue = config.redistribute6;
    this._summaryAddress.internalValue = config.summaryAddress;
    this._summaryAddress6.internalValue = config.summaryAddress6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjacency_check - computed: false, optional: true, required: false
  private _adjacencyCheck?: string; 
  public get adjacencyCheck() {
    return this.getStringAttribute('adjacency_check');
  }
  public set adjacencyCheck(value: string) {
    this._adjacencyCheck = value;
  }
  public resetAdjacencyCheck() {
    this._adjacencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacencyCheckInput() {
    return this._adjacencyCheck;
  }

  // adjacency_check6 - computed: true, optional: true, required: false
  private _adjacencyCheck6?: string; 
  public get adjacencyCheck6() {
    return this.getStringAttribute('adjacency_check6');
  }
  public set adjacencyCheck6(value: string) {
    this._adjacencyCheck6 = value;
  }
  public resetAdjacencyCheck6() {
    this._adjacencyCheck6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacencyCheck6Input() {
    return this._adjacencyCheck6;
  }

  // adv_passive_only - computed: true, optional: true, required: false
  private _advPassiveOnly?: string; 
  public get advPassiveOnly() {
    return this.getStringAttribute('adv_passive_only');
  }
  public set advPassiveOnly(value: string) {
    this._advPassiveOnly = value;
  }
  public resetAdvPassiveOnly() {
    this._advPassiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advPassiveOnlyInput() {
    return this._advPassiveOnly;
  }

  // adv_passive_only6 - computed: true, optional: true, required: false
  private _advPassiveOnly6?: string; 
  public get advPassiveOnly6() {
    return this.getStringAttribute('adv_passive_only6');
  }
  public set advPassiveOnly6(value: string) {
    this._advPassiveOnly6 = value;
  }
  public resetAdvPassiveOnly6() {
    this._advPassiveOnly6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advPassiveOnly6Input() {
    return this._advPassiveOnly6;
  }

  // auth_keychain_l1 - computed: true, optional: true, required: false
  private _authKeychainL1?: string[]; 
  public get authKeychainL1() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain_l1'));
  }
  public set authKeychainL1(value: string[]) {
    this._authKeychainL1 = value;
  }
  public resetAuthKeychainL1() {
    this._authKeychainL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainL1Input() {
    return this._authKeychainL1;
  }

  // auth_keychain_l2 - computed: true, optional: true, required: false
  private _authKeychainL2?: string[]; 
  public get authKeychainL2() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain_l2'));
  }
  public set authKeychainL2(value: string[]) {
    this._authKeychainL2 = value;
  }
  public resetAuthKeychainL2() {
    this._authKeychainL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainL2Input() {
    return this._authKeychainL2;
  }

  // auth_mode_l1 - computed: true, optional: true, required: false
  private _authModeL1?: string; 
  public get authModeL1() {
    return this.getStringAttribute('auth_mode_l1');
  }
  public set authModeL1(value: string) {
    this._authModeL1 = value;
  }
  public resetAuthModeL1() {
    this._authModeL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeL1Input() {
    return this._authModeL1;
  }

  // auth_mode_l2 - computed: true, optional: true, required: false
  private _authModeL2?: string; 
  public get authModeL2() {
    return this.getStringAttribute('auth_mode_l2');
  }
  public set authModeL2(value: string) {
    this._authModeL2 = value;
  }
  public resetAuthModeL2() {
    this._authModeL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeL2Input() {
    return this._authModeL2;
  }

  // auth_password_l1 - computed: true, optional: true, required: false
  private _authPasswordL1?: string[]; 
  public get authPasswordL1() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_password_l1'));
  }
  public set authPasswordL1(value: string[]) {
    this._authPasswordL1 = value;
  }
  public resetAuthPasswordL1() {
    this._authPasswordL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordL1Input() {
    return this._authPasswordL1;
  }

  // auth_password_l2 - computed: true, optional: true, required: false
  private _authPasswordL2?: string[]; 
  public get authPasswordL2() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_password_l2'));
  }
  public set authPasswordL2(value: string[]) {
    this._authPasswordL2 = value;
  }
  public resetAuthPasswordL2() {
    this._authPasswordL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordL2Input() {
    return this._authPasswordL2;
  }

  // auth_sendonly_l1 - computed: true, optional: true, required: false
  private _authSendonlyL1?: string; 
  public get authSendonlyL1() {
    return this.getStringAttribute('auth_sendonly_l1');
  }
  public set authSendonlyL1(value: string) {
    this._authSendonlyL1 = value;
  }
  public resetAuthSendonlyL1() {
    this._authSendonlyL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendonlyL1Input() {
    return this._authSendonlyL1;
  }

  // auth_sendonly_l2 - computed: true, optional: true, required: false
  private _authSendonlyL2?: string; 
  public get authSendonlyL2() {
    return this.getStringAttribute('auth_sendonly_l2');
  }
  public set authSendonlyL2(value: string) {
    this._authSendonlyL2 = value;
  }
  public resetAuthSendonlyL2() {
    this._authSendonlyL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendonlyL2Input() {
    return this._authSendonlyL2;
  }

  // default_originate - computed: true, optional: true, required: false
  private _defaultOriginate?: string; 
  public get defaultOriginate() {
    return this.getStringAttribute('default_originate');
  }
  public set defaultOriginate(value: string) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // default_originate6 - computed: true, optional: true, required: false
  private _defaultOriginate6?: string; 
  public get defaultOriginate6() {
    return this.getStringAttribute('default_originate6');
  }
  public set defaultOriginate6(value: string) {
    this._defaultOriginate6 = value;
  }
  public resetDefaultOriginate6() {
    this._defaultOriginate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginate6Input() {
    return this._defaultOriginate6;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dynamic_hostname - computed: true, optional: true, required: false
  private _dynamicHostname?: string; 
  public get dynamicHostname() {
    return this.getStringAttribute('dynamic_hostname');
  }
  public set dynamicHostname(value: string) {
    this._dynamicHostname = value;
  }
  public resetDynamicHostname() {
    this._dynamicHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicHostnameInput() {
    return this._dynamicHostname;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // ignore_lsp_errors - computed: true, optional: true, required: false
  private _ignoreLspErrors?: string; 
  public get ignoreLspErrors() {
    return this.getStringAttribute('ignore_lsp_errors');
  }
  public set ignoreLspErrors(value: string) {
    this._ignoreLspErrors = value;
  }
  public resetIgnoreLspErrors() {
    this._ignoreLspErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLspErrorsInput() {
    return this._ignoreLspErrors;
  }

  // is_type - computed: true, optional: true, required: false
  private _isType?: string; 
  public get isType() {
    return this.getStringAttribute('is_type');
  }
  public set isType(value: string) {
    this._isType = value;
  }
  public resetIsType() {
    this._isType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTypeInput() {
    return this._isType;
  }

  // lsp_gen_interval_l1 - computed: true, optional: true, required: false
  private _lspGenIntervalL1?: number; 
  public get lspGenIntervalL1() {
    return this.getNumberAttribute('lsp_gen_interval_l1');
  }
  public set lspGenIntervalL1(value: number) {
    this._lspGenIntervalL1 = value;
  }
  public resetLspGenIntervalL1() {
    this._lspGenIntervalL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenIntervalL1Input() {
    return this._lspGenIntervalL1;
  }

  // lsp_gen_interval_l2 - computed: true, optional: true, required: false
  private _lspGenIntervalL2?: number; 
  public get lspGenIntervalL2() {
    return this.getNumberAttribute('lsp_gen_interval_l2');
  }
  public set lspGenIntervalL2(value: number) {
    this._lspGenIntervalL2 = value;
  }
  public resetLspGenIntervalL2() {
    this._lspGenIntervalL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenIntervalL2Input() {
    return this._lspGenIntervalL2;
  }

  // lsp_refresh_interval - computed: true, optional: true, required: false
  private _lspRefreshInterval?: number; 
  public get lspRefreshInterval() {
    return this.getNumberAttribute('lsp_refresh_interval');
  }
  public set lspRefreshInterval(value: number) {
    this._lspRefreshInterval = value;
  }
  public resetLspRefreshInterval() {
    this._lspRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspRefreshIntervalInput() {
    return this._lspRefreshInterval;
  }

  // max_lsp_lifetime - computed: true, optional: true, required: false
  private _maxLspLifetime?: number; 
  public get maxLspLifetime() {
    return this.getNumberAttribute('max_lsp_lifetime');
  }
  public set maxLspLifetime(value: number) {
    this._maxLspLifetime = value;
  }
  public resetMaxLspLifetime() {
    this._maxLspLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLspLifetimeInput() {
    return this._maxLspLifetime;
  }

  // metric_style - computed: true, optional: true, required: false
  private _metricStyle?: string; 
  public get metricStyle() {
    return this.getStringAttribute('metric_style');
  }
  public set metricStyle(value: string) {
    this._metricStyle = value;
  }
  public resetMetricStyle() {
    this._metricStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleInput() {
    return this._metricStyle;
  }

  // overload_bit - computed: true, optional: true, required: false
  private _overloadBit?: string; 
  public get overloadBit() {
    return this.getStringAttribute('overload_bit');
  }
  public set overloadBit(value: string) {
    this._overloadBit = value;
  }
  public resetOverloadBit() {
    this._overloadBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadBitInput() {
    return this._overloadBit;
  }

  // overload_bit_on_startup - computed: false, optional: true, required: false
  private _overloadBitOnStartup?: number; 
  public get overloadBitOnStartup() {
    return this.getNumberAttribute('overload_bit_on_startup');
  }
  public set overloadBitOnStartup(value: number) {
    this._overloadBitOnStartup = value;
  }
  public resetOverloadBitOnStartup() {
    this._overloadBitOnStartup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadBitOnStartupInput() {
    return this._overloadBitOnStartup;
  }

  // overload_bit_suppress - computed: true, optional: true, required: false
  private _overloadBitSuppress?: string[]; 
  public get overloadBitSuppress() {
    return cdktf.Fn.tolist(this.getListAttribute('overload_bit_suppress'));
  }
  public set overloadBitSuppress(value: string[]) {
    this._overloadBitSuppress = value;
  }
  public resetOverloadBitSuppress() {
    this._overloadBitSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadBitSuppressInput() {
    return this._overloadBitSuppress;
  }

  // redistribute6_l1 - computed: true, optional: true, required: false
  private _redistribute6L1?: string; 
  public get redistribute6L1() {
    return this.getStringAttribute('redistribute6_l1');
  }
  public set redistribute6L1(value: string) {
    this._redistribute6L1 = value;
  }
  public resetRedistribute6L1() {
    this._redistribute6L1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribute6L1Input() {
    return this._redistribute6L1;
  }

  // redistribute6_l1_list - computed: true, optional: true, required: false
  private _redistribute6L1List?: string[]; 
  public get redistribute6L1List() {
    return cdktf.Fn.tolist(this.getListAttribute('redistribute6_l1_list'));
  }
  public set redistribute6L1List(value: string[]) {
    this._redistribute6L1List = value;
  }
  public resetRedistribute6L1List() {
    this._redistribute6L1List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribute6L1ListInput() {
    return this._redistribute6L1List;
  }

  // redistribute6_l2 - computed: true, optional: true, required: false
  private _redistribute6L2?: string; 
  public get redistribute6L2() {
    return this.getStringAttribute('redistribute6_l2');
  }
  public set redistribute6L2(value: string) {
    this._redistribute6L2 = value;
  }
  public resetRedistribute6L2() {
    this._redistribute6L2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribute6L2Input() {
    return this._redistribute6L2;
  }

  // redistribute6_l2_list - computed: true, optional: true, required: false
  private _redistribute6L2List?: string[]; 
  public get redistribute6L2List() {
    return cdktf.Fn.tolist(this.getListAttribute('redistribute6_l2_list'));
  }
  public set redistribute6L2List(value: string[]) {
    this._redistribute6L2List = value;
  }
  public resetRedistribute6L2List() {
    this._redistribute6L2List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribute6L2ListInput() {
    return this._redistribute6L2List;
  }

  // redistribute_l1 - computed: true, optional: true, required: false
  private _redistributeL1?: string; 
  public get redistributeL1() {
    return this.getStringAttribute('redistribute_l1');
  }
  public set redistributeL1(value: string) {
    this._redistributeL1 = value;
  }
  public resetRedistributeL1() {
    this._redistributeL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeL1Input() {
    return this._redistributeL1;
  }

  // redistribute_l1_list - computed: true, optional: true, required: false
  private _redistributeL1List?: string[]; 
  public get redistributeL1List() {
    return cdktf.Fn.tolist(this.getListAttribute('redistribute_l1_list'));
  }
  public set redistributeL1List(value: string[]) {
    this._redistributeL1List = value;
  }
  public resetRedistributeL1List() {
    this._redistributeL1List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeL1ListInput() {
    return this._redistributeL1List;
  }

  // redistribute_l2 - computed: true, optional: true, required: false
  private _redistributeL2?: string; 
  public get redistributeL2() {
    return this.getStringAttribute('redistribute_l2');
  }
  public set redistributeL2(value: string) {
    this._redistributeL2 = value;
  }
  public resetRedistributeL2() {
    this._redistributeL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeL2Input() {
    return this._redistributeL2;
  }

  // redistribute_l2_list - computed: true, optional: true, required: false
  private _redistributeL2List?: string[]; 
  public get redistributeL2List() {
    return cdktf.Fn.tolist(this.getListAttribute('redistribute_l2_list'));
  }
  public set redistributeL2List(value: string[]) {
    this._redistributeL2List = value;
  }
  public resetRedistributeL2List() {
    this._redistributeL2List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeL2ListInput() {
    return this._redistributeL2List;
  }

  // spf_interval_exp_l1 - computed: true, optional: true, required: false
  private _spfIntervalExpL1?: number[]; 
  public get spfIntervalExpL1() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('spf_interval_exp_l1')));
  }
  public set spfIntervalExpL1(value: number[]) {
    this._spfIntervalExpL1 = value;
  }
  public resetSpfIntervalExpL1() {
    this._spfIntervalExpL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalExpL1Input() {
    return this._spfIntervalExpL1;
  }

  // spf_interval_exp_l2 - computed: true, optional: true, required: false
  private _spfIntervalExpL2?: number[]; 
  public get spfIntervalExpL2() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('spf_interval_exp_l2')));
  }
  public set spfIntervalExpL2(value: number[]) {
    this._spfIntervalExpL2 = value;
  }
  public resetSpfIntervalExpL2() {
    this._spfIntervalExpL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalExpL2Input() {
    return this._spfIntervalExpL2;
  }

  // isis_interface - computed: false, optional: true, required: false
  private _isisInterface = new RouterIsisIsisInterfaceList(this, "isis_interface", false);
  public get isisInterface() {
    return this._isisInterface;
  }
  public putIsisInterface(value: RouterIsisIsisInterface[] | cdktf.IResolvable) {
    this._isisInterface.internalValue = value;
  }
  public resetIsisInterface() {
    this._isisInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInterfaceInput() {
    return this._isisInterface.internalValue;
  }

  // isis_net - computed: false, optional: true, required: false
  private _isisNet = new RouterIsisIsisNetList(this, "isis_net", false);
  public get isisNet() {
    return this._isisNet;
  }
  public putIsisNet(value: RouterIsisIsisNet[] | cdktf.IResolvable) {
    this._isisNet.internalValue = value;
  }
  public resetIsisNet() {
    this._isisNet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisNetInput() {
    return this._isisNet.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterIsisRedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterIsisRedistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // redistribute6 - computed: false, optional: true, required: false
  private _redistribute6 = new RouterIsisRedistribute6OutputReference(this, "redistribute6");
  public get redistribute6() {
    return this._redistribute6;
  }
  public putRedistribute6(value: RouterIsisRedistribute6) {
    this._redistribute6.internalValue = value;
  }
  public resetRedistribute6() {
    this._redistribute6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribute6Input() {
    return this._redistribute6.internalValue;
  }

  // summary_address - computed: false, optional: true, required: false
  private _summaryAddress = new RouterIsisSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }
  public putSummaryAddress(value: RouterIsisSummaryAddress[] | cdktf.IResolvable) {
    this._summaryAddress.internalValue = value;
  }
  public resetSummaryAddress() {
    this._summaryAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressInput() {
    return this._summaryAddress.internalValue;
  }

  // summary_address6 - computed: false, optional: true, required: false
  private _summaryAddress6 = new RouterIsisSummaryAddress6List(this, "summary_address6", false);
  public get summaryAddress6() {
    return this._summaryAddress6;
  }
  public putSummaryAddress6(value: RouterIsisSummaryAddress6[] | cdktf.IResolvable) {
    this._summaryAddress6.internalValue = value;
  }
  public resetSummaryAddress6() {
    this._summaryAddress6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddress6Input() {
    return this._summaryAddress6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjacency_check: cdktf.stringToTerraform(this._adjacencyCheck),
      adjacency_check6: cdktf.stringToTerraform(this._adjacencyCheck6),
      adv_passive_only: cdktf.stringToTerraform(this._advPassiveOnly),
      adv_passive_only6: cdktf.stringToTerraform(this._advPassiveOnly6),
      auth_keychain_l1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authKeychainL1),
      auth_keychain_l2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authKeychainL2),
      auth_mode_l1: cdktf.stringToTerraform(this._authModeL1),
      auth_mode_l2: cdktf.stringToTerraform(this._authModeL2),
      auth_password_l1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authPasswordL1),
      auth_password_l2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authPasswordL2),
      auth_sendonly_l1: cdktf.stringToTerraform(this._authSendonlyL1),
      auth_sendonly_l2: cdktf.stringToTerraform(this._authSendonlyL2),
      default_originate: cdktf.stringToTerraform(this._defaultOriginate),
      default_originate6: cdktf.stringToTerraform(this._defaultOriginate6),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_hostname: cdktf.stringToTerraform(this._dynamicHostname),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      ignore_lsp_errors: cdktf.stringToTerraform(this._ignoreLspErrors),
      is_type: cdktf.stringToTerraform(this._isType),
      lsp_gen_interval_l1: cdktf.numberToTerraform(this._lspGenIntervalL1),
      lsp_gen_interval_l2: cdktf.numberToTerraform(this._lspGenIntervalL2),
      lsp_refresh_interval: cdktf.numberToTerraform(this._lspRefreshInterval),
      max_lsp_lifetime: cdktf.numberToTerraform(this._maxLspLifetime),
      metric_style: cdktf.stringToTerraform(this._metricStyle),
      overload_bit: cdktf.stringToTerraform(this._overloadBit),
      overload_bit_on_startup: cdktf.numberToTerraform(this._overloadBitOnStartup),
      overload_bit_suppress: cdktf.listMapper(cdktf.stringToTerraform, false)(this._overloadBitSuppress),
      redistribute6_l1: cdktf.stringToTerraform(this._redistribute6L1),
      redistribute6_l1_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redistribute6L1List),
      redistribute6_l2: cdktf.stringToTerraform(this._redistribute6L2),
      redistribute6_l2_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redistribute6L2List),
      redistribute_l1: cdktf.stringToTerraform(this._redistributeL1),
      redistribute_l1_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redistributeL1List),
      redistribute_l2: cdktf.stringToTerraform(this._redistributeL2),
      redistribute_l2_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redistributeL2List),
      spf_interval_exp_l1: cdktf.listMapper(cdktf.numberToTerraform, false)(this._spfIntervalExpL1),
      spf_interval_exp_l2: cdktf.listMapper(cdktf.numberToTerraform, false)(this._spfIntervalExpL2),
      isis_interface: cdktf.listMapper(routerIsisIsisInterfaceToTerraform, true)(this._isisInterface.internalValue),
      isis_net: cdktf.listMapper(routerIsisIsisNetToTerraform, true)(this._isisNet.internalValue),
      redistribute: routerIsisRedistributeToTerraform(this._redistribute.internalValue),
      redistribute6: routerIsisRedistribute6ToTerraform(this._redistribute6.internalValue),
      summary_address: cdktf.listMapper(routerIsisSummaryAddressToTerraform, true)(this._summaryAddress.internalValue),
      summary_address6: cdktf.listMapper(routerIsisSummaryAddress6ToTerraform, true)(this._summaryAddress6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjacency_check: {
        value: cdktf.stringToHclTerraform(this._adjacencyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adjacency_check6: {
        value: cdktf.stringToHclTerraform(this._adjacencyCheck6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adv_passive_only: {
        value: cdktf.stringToHclTerraform(this._advPassiveOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adv_passive_only6: {
        value: cdktf.stringToHclTerraform(this._advPassiveOnly6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_keychain_l1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authKeychainL1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_keychain_l2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authKeychainL2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_mode_l1: {
        value: cdktf.stringToHclTerraform(this._authModeL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode_l2: {
        value: cdktf.stringToHclTerraform(this._authModeL2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password_l1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authPasswordL1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_password_l2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authPasswordL2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_sendonly_l1: {
        value: cdktf.stringToHclTerraform(this._authSendonlyL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_sendonly_l2: {
        value: cdktf.stringToHclTerraform(this._authSendonlyL2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_originate: {
        value: cdktf.stringToHclTerraform(this._defaultOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_originate6: {
        value: cdktf.stringToHclTerraform(this._defaultOriginate6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_hostname: {
        value: cdktf.stringToHclTerraform(this._dynamicHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      ignore_lsp_errors: {
        value: cdktf.stringToHclTerraform(this._ignoreLspErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_type: {
        value: cdktf.stringToHclTerraform(this._isType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_gen_interval_l1: {
        value: cdktf.numberToHclTerraform(this._lspGenIntervalL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsp_gen_interval_l2: {
        value: cdktf.numberToHclTerraform(this._lspGenIntervalL2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsp_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._lspRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_lsp_lifetime: {
        value: cdktf.numberToHclTerraform(this._maxLspLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_style: {
        value: cdktf.stringToHclTerraform(this._metricStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overload_bit: {
        value: cdktf.stringToHclTerraform(this._overloadBit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overload_bit_on_startup: {
        value: cdktf.numberToHclTerraform(this._overloadBitOnStartup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overload_bit_suppress: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._overloadBitSuppress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redistribute6_l1: {
        value: cdktf.stringToHclTerraform(this._redistribute6L1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute6_l1_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redistribute6L1List),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redistribute6_l2: {
        value: cdktf.stringToHclTerraform(this._redistribute6L2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute6_l2_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redistribute6L2List),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redistribute_l1: {
        value: cdktf.stringToHclTerraform(this._redistributeL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_l1_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redistributeL1List),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redistribute_l2: {
        value: cdktf.stringToHclTerraform(this._redistributeL2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_l2_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redistributeL2List),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spf_interval_exp_l1: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._spfIntervalExpL1),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      spf_interval_exp_l2: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._spfIntervalExpL2),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      isis_interface: {
        value: cdktf.listMapperHcl(routerIsisIsisInterfaceToHclTerraform, true)(this._isisInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisIsisInterfaceList",
      },
      isis_net: {
        value: cdktf.listMapperHcl(routerIsisIsisNetToHclTerraform, true)(this._isisNet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisIsisNetList",
      },
      redistribute: {
        value: routerIsisRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisRedistributeList",
      },
      redistribute6: {
        value: routerIsisRedistribute6ToHclTerraform(this._redistribute6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisRedistribute6List",
      },
      summary_address: {
        value: cdktf.listMapperHcl(routerIsisSummaryAddressToHclTerraform, true)(this._summaryAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisSummaryAddressList",
      },
      summary_address6: {
        value: cdktf.listMapperHcl(routerIsisSummaryAddress6ToHclTerraform, true)(this._summaryAddress6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisSummaryAddress6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
