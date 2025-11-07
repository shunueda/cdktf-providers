// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_keychain_area RouterIsis#auth_keychain_area}
  */
  readonly authKeychainArea?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_keychain_domain RouterIsis#auth_keychain_domain}
  */
  readonly authKeychainDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_mode_area RouterIsis#auth_mode_area}
  */
  readonly authModeArea?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_mode_domain RouterIsis#auth_mode_domain}
  */
  readonly authModeDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_password_area RouterIsis#auth_password_area}
  */
  readonly authPasswordArea?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_password_domain RouterIsis#auth_password_domain}
  */
  readonly authPasswordDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_sendonly_area RouterIsis#auth_sendonly_area}
  */
  readonly authSendonlyArea?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_sendonly_domain RouterIsis#auth_sendonly_domain}
  */
  readonly authSendonlyDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#default_information_level RouterIsis#default_information_level}
  */
  readonly defaultInformationLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#default_information_level6 RouterIsis#default_information_level6}
  */
  readonly defaultInformationLevel6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#default_information_metric RouterIsis#default_information_metric}
  */
  readonly defaultInformationMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#default_information_metric6 RouterIsis#default_information_metric6}
  */
  readonly defaultInformationMetric6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#default_information_originate RouterIsis#default_information_originate}
  */
  readonly defaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#default_information_originate6 RouterIsis#default_information_originate6}
  */
  readonly defaultInformationOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#dynamic_sort_subtable RouterIsis#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#ignore_attached_bit RouterIsis#ignore_attached_bit}
  */
  readonly ignoreAttachedBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#is_type RouterIsis#is_type}
  */
  readonly isType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#log_neighbour_changes RouterIsis#log_neighbour_changes}
  */
  readonly logNeighbourChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#lsp_gen_interval_l1 RouterIsis#lsp_gen_interval_l1}
  */
  readonly lspGenIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#lsp_gen_interval_l2 RouterIsis#lsp_gen_interval_l2}
  */
  readonly lspGenIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#lsp_refresh_interval RouterIsis#lsp_refresh_interval}
  */
  readonly lspRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#max_lsp_lifetime RouterIsis#max_lsp_lifetime}
  */
  readonly maxLspLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#metric_style RouterIsis#metric_style}
  */
  readonly metricStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#overload_bit RouterIsis#overload_bit}
  */
  readonly overloadBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#redistribute6_l1 RouterIsis#redistribute6_l1}
  */
  readonly redistribute6L1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#redistribute6_l1_list RouterIsis#redistribute6_l1_list}
  */
  readonly redistribute6L1List?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#redistribute_l1 RouterIsis#redistribute_l1}
  */
  readonly redistributeL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#redistribute_l1_list RouterIsis#redistribute_l1_list}
  */
  readonly redistributeL1List?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#router_id RouterIsis#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#spf_interval_exp_l1 RouterIsis#spf_interval_exp_l1}
  */
  readonly spfIntervalExpL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#spf_interval_exp_l2 RouterIsis#spf_interval_exp_l2}
  */
  readonly spfIntervalExpL2?: number;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#interface RouterIsis#interface}
  */
  readonly interface?: RouterIsisInterface[] | cdktf.IResolvable;
  /**
  * net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#net RouterIsis#net}
  */
  readonly net?: RouterIsisNet[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#redistribute RouterIsis#redistribute}
  */
  readonly redistribute?: RouterIsisRedistribute[] | cdktf.IResolvable;
  /**
  * redistribute6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#redistribute6 RouterIsis#redistribute6}
  */
  readonly redistribute6?: RouterIsisRedistribute6[] | cdktf.IResolvable;
  /**
  * summary_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#summary_address RouterIsis#summary_address}
  */
  readonly summaryAddress?: RouterIsisSummaryAddress[] | cdktf.IResolvable;
  /**
  * summary_address6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#summary_address6 RouterIsis#summary_address6}
  */
  readonly summaryAddress6?: RouterIsisSummaryAddress6[] | cdktf.IResolvable;
}
export interface RouterIsisInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_keychain_hello RouterIsis#auth_keychain_hello}
  */
  readonly authKeychainHello?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_mode_hello RouterIsis#auth_mode_hello}
  */
  readonly authModeHello?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#auth_password_hello RouterIsis#auth_password_hello}
  */
  readonly authPasswordHello?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#bfd RouterIsis#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#bfd6 RouterIsis#bfd6}
  */
  readonly bfd6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#circuit_type RouterIsis#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#csnp_interval_l1 RouterIsis#csnp_interval_l1}
  */
  readonly csnpIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#csnp_interval_l2 RouterIsis#csnp_interval_l2}
  */
  readonly csnpIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#hello_interval_l1 RouterIsis#hello_interval_l1}
  */
  readonly helloIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#hello_interval_l2 RouterIsis#hello_interval_l2}
  */
  readonly helloIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#hello_multiplier_l1 RouterIsis#hello_multiplier_l1}
  */
  readonly helloMultiplierL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#hello_multiplier_l2 RouterIsis#hello_multiplier_l2}
  */
  readonly helloMultiplierL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#hello_padding RouterIsis#hello_padding}
  */
  readonly helloPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#metric_l1 RouterIsis#metric_l1}
  */
  readonly metricL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#metric_l2 RouterIsis#metric_l2}
  */
  readonly metricL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#name RouterIsis#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#passive RouterIsis#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#priority_l1 RouterIsis#priority_l1}
  */
  readonly priorityL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#priority_l2 RouterIsis#priority_l2}
  */
  readonly priorityL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#status RouterIsis#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#status6 RouterIsis#status6}
  */
  readonly status6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#wide_metric_l1 RouterIsis#wide_metric_l1}
  */
  readonly wideMetricL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#wide_metric_l2 RouterIsis#wide_metric_l2}
  */
  readonly wideMetricL2?: number;
}

export function routerIsisInterfaceToTerraform(struct?: RouterIsisInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_keychain_hello: cdktf.stringToTerraform(struct!.authKeychainHello),
    auth_mode_hello: cdktf.stringToTerraform(struct!.authModeHello),
    auth_password_hello: cdktf.stringToTerraform(struct!.authPasswordHello),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    bfd6: cdktf.stringToTerraform(struct!.bfd6),
    circuit_type: cdktf.stringToTerraform(struct!.circuitType),
    csnp_interval_l1: cdktf.numberToTerraform(struct!.csnpIntervalL1),
    csnp_interval_l2: cdktf.numberToTerraform(struct!.csnpIntervalL2),
    hello_interval_l1: cdktf.numberToTerraform(struct!.helloIntervalL1),
    hello_interval_l2: cdktf.numberToTerraform(struct!.helloIntervalL2),
    hello_multiplier_l1: cdktf.numberToTerraform(struct!.helloMultiplierL1),
    hello_multiplier_l2: cdktf.numberToTerraform(struct!.helloMultiplierL2),
    hello_padding: cdktf.stringToTerraform(struct!.helloPadding),
    metric_l1: cdktf.numberToTerraform(struct!.metricL1),
    metric_l2: cdktf.numberToTerraform(struct!.metricL2),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.stringToTerraform(struct!.passive),
    priority_l1: cdktf.numberToTerraform(struct!.priorityL1),
    priority_l2: cdktf.numberToTerraform(struct!.priorityL2),
    status: cdktf.stringToTerraform(struct!.status),
    status6: cdktf.stringToTerraform(struct!.status6),
    wide_metric_l1: cdktf.numberToTerraform(struct!.wideMetricL1),
    wide_metric_l2: cdktf.numberToTerraform(struct!.wideMetricL2),
  }
}


export function routerIsisInterfaceToHclTerraform(struct?: RouterIsisInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_keychain_hello: {
      value: cdktf.stringToHclTerraform(struct!.authKeychainHello),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_mode_hello: {
      value: cdktf.stringToHclTerraform(struct!.authModeHello),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password_hello: {
      value: cdktf.stringToHclTerraform(struct!.authPasswordHello),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd6: {
      value: cdktf.stringToHclTerraform(struct!.bfd6),
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
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.stringToHclTerraform(struct!.passive),
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

export class RouterIsisInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKeychainHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeychainHello = this._authKeychainHello;
    }
    if (this._authModeHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.authModeHello = this._authModeHello;
    }
    if (this._authPasswordHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPasswordHello = this._authPasswordHello;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bfd6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd6 = this._bfd6;
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
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
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

  public set internalValue(value: RouterIsisInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKeychainHello = undefined;
      this._authModeHello = undefined;
      this._authPasswordHello = undefined;
      this._bfd = undefined;
      this._bfd6 = undefined;
      this._circuitType = undefined;
      this._csnpIntervalL1 = undefined;
      this._csnpIntervalL2 = undefined;
      this._helloIntervalL1 = undefined;
      this._helloIntervalL2 = undefined;
      this._helloMultiplierL1 = undefined;
      this._helloMultiplierL2 = undefined;
      this._helloPadding = undefined;
      this._metricL1 = undefined;
      this._metricL2 = undefined;
      this._name = undefined;
      this._passive = undefined;
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
      this._authKeychainHello = value.authKeychainHello;
      this._authModeHello = value.authModeHello;
      this._authPasswordHello = value.authPasswordHello;
      this._bfd = value.bfd;
      this._bfd6 = value.bfd6;
      this._circuitType = value.circuitType;
      this._csnpIntervalL1 = value.csnpIntervalL1;
      this._csnpIntervalL2 = value.csnpIntervalL2;
      this._helloIntervalL1 = value.helloIntervalL1;
      this._helloIntervalL2 = value.helloIntervalL2;
      this._helloMultiplierL1 = value.helloMultiplierL1;
      this._helloMultiplierL2 = value.helloMultiplierL2;
      this._helloPadding = value.helloPadding;
      this._metricL1 = value.metricL1;
      this._metricL2 = value.metricL2;
      this._name = value.name;
      this._passive = value.passive;
      this._priorityL1 = value.priorityL1;
      this._priorityL2 = value.priorityL2;
      this._status = value.status;
      this._status6 = value.status6;
      this._wideMetricL1 = value.wideMetricL1;
      this._wideMetricL2 = value.wideMetricL2;
    }
  }

  // auth_keychain_hello - computed: true, optional: true, required: false
  private _authKeychainHello?: string; 
  public get authKeychainHello() {
    return this.getStringAttribute('auth_keychain_hello');
  }
  public set authKeychainHello(value: string) {
    this._authKeychainHello = value;
  }
  public resetAuthKeychainHello() {
    this._authKeychainHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainHelloInput() {
    return this._authKeychainHello;
  }

  // auth_mode_hello - computed: true, optional: true, required: false
  private _authModeHello?: string; 
  public get authModeHello() {
    return this.getStringAttribute('auth_mode_hello');
  }
  public set authModeHello(value: string) {
    this._authModeHello = value;
  }
  public resetAuthModeHello() {
    this._authModeHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeHelloInput() {
    return this._authModeHello;
  }

  // auth_password_hello - computed: false, optional: true, required: false
  private _authPasswordHello?: string; 
  public get authPasswordHello() {
    return this.getStringAttribute('auth_password_hello');
  }
  public set authPasswordHello(value: string) {
    this._authPasswordHello = value;
  }
  public resetAuthPasswordHello() {
    this._authPasswordHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordHelloInput() {
    return this._authPasswordHello;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd6 - computed: true, optional: true, required: false
  private _bfd6?: string; 
  public get bfd6() {
    return this.getStringAttribute('bfd6');
  }
  public set bfd6(value: string) {
    this._bfd6 = value;
  }
  public resetBfd6() {
    this._bfd6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfd6Input() {
    return this._bfd6;
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

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
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

export class RouterIsisInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceOutputReference {
    return new RouterIsisInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisNet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#net RouterIsis#net}
  */
  readonly net?: string;
}

export function routerIsisNetToTerraform(struct?: RouterIsisNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net: cdktf.stringToTerraform(struct!.net),
  }
}


export function routerIsisNetToHclTerraform(struct?: RouterIsisNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class RouterIsisNetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisNet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisNet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._net = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._net = value.net;
    }
  }

  // net - computed: true, optional: true, required: false
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

export class RouterIsisNetList extends cdktf.ComplexList {
  public internalValue? : RouterIsisNet[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisNetOutputReference {
    return new RouterIsisNetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisRedistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#metric RouterIsis#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#metric_type RouterIsis#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#protocol RouterIsis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#routemap RouterIsis#routemap}
  */
  readonly routemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#status RouterIsis#status}
  */
  readonly status?: string;
}

export function routerIsisRedistributeToTerraform(struct?: RouterIsisRedistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    routemap: cdktf.stringToTerraform(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerIsisRedistributeToHclTerraform(struct?: RouterIsisRedistribute | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.routemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

  public get internalValue(): RouterIsisRedistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RouterIsisRedistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._protocol = undefined;
      this._routemap = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // metric - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
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
  private _routemap?: string; 
  public get routemap() {
    return this.getStringAttribute('routemap');
  }
  public set routemap(value: string) {
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

export class RouterIsisRedistributeList extends cdktf.ComplexList {
  public internalValue? : RouterIsisRedistribute[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisRedistributeOutputReference {
    return new RouterIsisRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisRedistribute6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#metric RouterIsis#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#protocol RouterIsis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#routemap RouterIsis#routemap}
  */
  readonly routemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#status RouterIsis#status}
  */
  readonly status?: string;
}

export function routerIsisRedistribute6ToTerraform(struct?: RouterIsisRedistribute6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    routemap: cdktf.stringToTerraform(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerIsisRedistribute6ToHclTerraform(struct?: RouterIsisRedistribute6 | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routemap: {
      value: cdktf.stringToHclTerraform(struct!.routemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

  public get internalValue(): RouterIsisRedistribute6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RouterIsisRedistribute6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._metric = undefined;
      this._protocol = undefined;
      this._routemap = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._metric = value.metric;
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

  // metric - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
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
  private _routemap?: string; 
  public get routemap() {
    return this.getStringAttribute('routemap');
  }
  public set routemap(value: string) {
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

export class RouterIsisRedistribute6List extends cdktf.ComplexList {
  public internalValue? : RouterIsisRedistribute6[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisRedistribute6OutputReference {
    return new RouterIsisRedistribute6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisSummaryAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#prefix RouterIsis#prefix}
  */
  readonly prefix?: string;
}

export function routerIsisSummaryAddressToTerraform(struct?: RouterIsisSummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    level: cdktf.stringToTerraform(struct!.level),
    prefix: cdktf.stringToTerraform(struct!.prefix),
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
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

  // id - computed: true, optional: true, required: false
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
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#prefix6 RouterIsis#prefix6}
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

  // id - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis fortiswitch_router_isis}
*/
export class RouterIsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsis to import
  * @param importFromId The id of the existing RouterIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_isis fortiswitch_router_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterIsisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_isis',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authKeychainArea = config.authKeychainArea;
    this._authKeychainDomain = config.authKeychainDomain;
    this._authModeArea = config.authModeArea;
    this._authModeDomain = config.authModeDomain;
    this._authPasswordArea = config.authPasswordArea;
    this._authPasswordDomain = config.authPasswordDomain;
    this._authSendonlyArea = config.authSendonlyArea;
    this._authSendonlyDomain = config.authSendonlyDomain;
    this._defaultInformationLevel = config.defaultInformationLevel;
    this._defaultInformationLevel6 = config.defaultInformationLevel6;
    this._defaultInformationMetric = config.defaultInformationMetric;
    this._defaultInformationMetric6 = config.defaultInformationMetric6;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultInformationOriginate6 = config.defaultInformationOriginate6;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._ignoreAttachedBit = config.ignoreAttachedBit;
    this._isType = config.isType;
    this._logNeighbourChanges = config.logNeighbourChanges;
    this._lspGenIntervalL1 = config.lspGenIntervalL1;
    this._lspGenIntervalL2 = config.lspGenIntervalL2;
    this._lspRefreshInterval = config.lspRefreshInterval;
    this._maxLspLifetime = config.maxLspLifetime;
    this._metricStyle = config.metricStyle;
    this._overloadBit = config.overloadBit;
    this._redistribute6L1 = config.redistribute6L1;
    this._redistribute6L1List = config.redistribute6L1List;
    this._redistributeL1 = config.redistributeL1;
    this._redistributeL1List = config.redistributeL1List;
    this._routerId = config.routerId;
    this._spfIntervalExpL1 = config.spfIntervalExpL1;
    this._spfIntervalExpL2 = config.spfIntervalExpL2;
    this._interface.internalValue = config.interface;
    this._net.internalValue = config.net;
    this._redistribute.internalValue = config.redistribute;
    this._redistribute6.internalValue = config.redistribute6;
    this._summaryAddress.internalValue = config.summaryAddress;
    this._summaryAddress6.internalValue = config.summaryAddress6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_keychain_area - computed: true, optional: true, required: false
  private _authKeychainArea?: string; 
  public get authKeychainArea() {
    return this.getStringAttribute('auth_keychain_area');
  }
  public set authKeychainArea(value: string) {
    this._authKeychainArea = value;
  }
  public resetAuthKeychainArea() {
    this._authKeychainArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainAreaInput() {
    return this._authKeychainArea;
  }

  // auth_keychain_domain - computed: true, optional: true, required: false
  private _authKeychainDomain?: string; 
  public get authKeychainDomain() {
    return this.getStringAttribute('auth_keychain_domain');
  }
  public set authKeychainDomain(value: string) {
    this._authKeychainDomain = value;
  }
  public resetAuthKeychainDomain() {
    this._authKeychainDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainDomainInput() {
    return this._authKeychainDomain;
  }

  // auth_mode_area - computed: true, optional: true, required: false
  private _authModeArea?: string; 
  public get authModeArea() {
    return this.getStringAttribute('auth_mode_area');
  }
  public set authModeArea(value: string) {
    this._authModeArea = value;
  }
  public resetAuthModeArea() {
    this._authModeArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeAreaInput() {
    return this._authModeArea;
  }

  // auth_mode_domain - computed: true, optional: true, required: false
  private _authModeDomain?: string; 
  public get authModeDomain() {
    return this.getStringAttribute('auth_mode_domain');
  }
  public set authModeDomain(value: string) {
    this._authModeDomain = value;
  }
  public resetAuthModeDomain() {
    this._authModeDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeDomainInput() {
    return this._authModeDomain;
  }

  // auth_password_area - computed: false, optional: true, required: false
  private _authPasswordArea?: string; 
  public get authPasswordArea() {
    return this.getStringAttribute('auth_password_area');
  }
  public set authPasswordArea(value: string) {
    this._authPasswordArea = value;
  }
  public resetAuthPasswordArea() {
    this._authPasswordArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordAreaInput() {
    return this._authPasswordArea;
  }

  // auth_password_domain - computed: false, optional: true, required: false
  private _authPasswordDomain?: string; 
  public get authPasswordDomain() {
    return this.getStringAttribute('auth_password_domain');
  }
  public set authPasswordDomain(value: string) {
    this._authPasswordDomain = value;
  }
  public resetAuthPasswordDomain() {
    this._authPasswordDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordDomainInput() {
    return this._authPasswordDomain;
  }

  // auth_sendonly_area - computed: true, optional: true, required: false
  private _authSendonlyArea?: string; 
  public get authSendonlyArea() {
    return this.getStringAttribute('auth_sendonly_area');
  }
  public set authSendonlyArea(value: string) {
    this._authSendonlyArea = value;
  }
  public resetAuthSendonlyArea() {
    this._authSendonlyArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendonlyAreaInput() {
    return this._authSendonlyArea;
  }

  // auth_sendonly_domain - computed: true, optional: true, required: false
  private _authSendonlyDomain?: string; 
  public get authSendonlyDomain() {
    return this.getStringAttribute('auth_sendonly_domain');
  }
  public set authSendonlyDomain(value: string) {
    this._authSendonlyDomain = value;
  }
  public resetAuthSendonlyDomain() {
    this._authSendonlyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendonlyDomainInput() {
    return this._authSendonlyDomain;
  }

  // default_information_level - computed: true, optional: true, required: false
  private _defaultInformationLevel?: string; 
  public get defaultInformationLevel() {
    return this.getStringAttribute('default_information_level');
  }
  public set defaultInformationLevel(value: string) {
    this._defaultInformationLevel = value;
  }
  public resetDefaultInformationLevel() {
    this._defaultInformationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationLevelInput() {
    return this._defaultInformationLevel;
  }

  // default_information_level6 - computed: true, optional: true, required: false
  private _defaultInformationLevel6?: string; 
  public get defaultInformationLevel6() {
    return this.getStringAttribute('default_information_level6');
  }
  public set defaultInformationLevel6(value: string) {
    this._defaultInformationLevel6 = value;
  }
  public resetDefaultInformationLevel6() {
    this._defaultInformationLevel6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationLevel6Input() {
    return this._defaultInformationLevel6;
  }

  // default_information_metric - computed: true, optional: true, required: false
  private _defaultInformationMetric?: number; 
  public get defaultInformationMetric() {
    return this.getNumberAttribute('default_information_metric');
  }
  public set defaultInformationMetric(value: number) {
    this._defaultInformationMetric = value;
  }
  public resetDefaultInformationMetric() {
    this._defaultInformationMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetricInput() {
    return this._defaultInformationMetric;
  }

  // default_information_metric6 - computed: true, optional: true, required: false
  private _defaultInformationMetric6?: number; 
  public get defaultInformationMetric6() {
    return this.getNumberAttribute('default_information_metric6');
  }
  public set defaultInformationMetric6(value: number) {
    this._defaultInformationMetric6 = value;
  }
  public resetDefaultInformationMetric6() {
    this._defaultInformationMetric6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetric6Input() {
    return this._defaultInformationMetric6;
  }

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate?: string; 
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: string) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // default_information_originate6 - computed: true, optional: true, required: false
  private _defaultInformationOriginate6?: string; 
  public get defaultInformationOriginate6() {
    return this.getStringAttribute('default_information_originate6');
  }
  public set defaultInformationOriginate6(value: string) {
    this._defaultInformationOriginate6 = value;
  }
  public resetDefaultInformationOriginate6() {
    this._defaultInformationOriginate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginate6Input() {
    return this._defaultInformationOriginate6;
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

  // ignore_attached_bit - computed: true, optional: true, required: false
  private _ignoreAttachedBit?: string; 
  public get ignoreAttachedBit() {
    return this.getStringAttribute('ignore_attached_bit');
  }
  public set ignoreAttachedBit(value: string) {
    this._ignoreAttachedBit = value;
  }
  public resetIgnoreAttachedBit() {
    this._ignoreAttachedBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAttachedBitInput() {
    return this._ignoreAttachedBit;
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

  // log_neighbour_changes - computed: true, optional: true, required: false
  private _logNeighbourChanges?: string; 
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
  }
  public set logNeighbourChanges(value: string) {
    this._logNeighbourChanges = value;
  }
  public resetLogNeighbourChanges() {
    this._logNeighbourChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighbourChangesInput() {
    return this._logNeighbourChanges;
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
  private _redistribute6L1List?: string; 
  public get redistribute6L1List() {
    return this.getStringAttribute('redistribute6_l1_list');
  }
  public set redistribute6L1List(value: string) {
    this._redistribute6L1List = value;
  }
  public resetRedistribute6L1List() {
    this._redistribute6L1List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribute6L1ListInput() {
    return this._redistribute6L1List;
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
  private _redistributeL1List?: string; 
  public get redistributeL1List() {
    return this.getStringAttribute('redistribute_l1_list');
  }
  public set redistributeL1List(value: string) {
    this._redistributeL1List = value;
  }
  public resetRedistributeL1List() {
    this._redistributeL1List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeL1ListInput() {
    return this._redistributeL1List;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // spf_interval_exp_l1 - computed: true, optional: true, required: false
  private _spfIntervalExpL1?: number; 
  public get spfIntervalExpL1() {
    return this.getNumberAttribute('spf_interval_exp_l1');
  }
  public set spfIntervalExpL1(value: number) {
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
  private _spfIntervalExpL2?: number; 
  public get spfIntervalExpL2() {
    return this.getNumberAttribute('spf_interval_exp_l2');
  }
  public set spfIntervalExpL2(value: number) {
    this._spfIntervalExpL2 = value;
  }
  public resetSpfIntervalExpL2() {
    this._spfIntervalExpL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalExpL2Input() {
    return this._spfIntervalExpL2;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterIsisInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterIsisInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // net - computed: false, optional: true, required: false
  private _net = new RouterIsisNetList(this, "net", false);
  public get net() {
    return this._net;
  }
  public putNet(value: RouterIsisNet[] | cdktf.IResolvable) {
    this._net.internalValue = value;
  }
  public resetNet() {
    this._net.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterIsisRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterIsisRedistribute[] | cdktf.IResolvable) {
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
  private _redistribute6 = new RouterIsisRedistribute6List(this, "redistribute6", false);
  public get redistribute6() {
    return this._redistribute6;
  }
  public putRedistribute6(value: RouterIsisRedistribute6[] | cdktf.IResolvable) {
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
      auth_keychain_area: cdktf.stringToTerraform(this._authKeychainArea),
      auth_keychain_domain: cdktf.stringToTerraform(this._authKeychainDomain),
      auth_mode_area: cdktf.stringToTerraform(this._authModeArea),
      auth_mode_domain: cdktf.stringToTerraform(this._authModeDomain),
      auth_password_area: cdktf.stringToTerraform(this._authPasswordArea),
      auth_password_domain: cdktf.stringToTerraform(this._authPasswordDomain),
      auth_sendonly_area: cdktf.stringToTerraform(this._authSendonlyArea),
      auth_sendonly_domain: cdktf.stringToTerraform(this._authSendonlyDomain),
      default_information_level: cdktf.stringToTerraform(this._defaultInformationLevel),
      default_information_level6: cdktf.stringToTerraform(this._defaultInformationLevel6),
      default_information_metric: cdktf.numberToTerraform(this._defaultInformationMetric),
      default_information_metric6: cdktf.numberToTerraform(this._defaultInformationMetric6),
      default_information_originate: cdktf.stringToTerraform(this._defaultInformationOriginate),
      default_information_originate6: cdktf.stringToTerraform(this._defaultInformationOriginate6),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      ignore_attached_bit: cdktf.stringToTerraform(this._ignoreAttachedBit),
      is_type: cdktf.stringToTerraform(this._isType),
      log_neighbour_changes: cdktf.stringToTerraform(this._logNeighbourChanges),
      lsp_gen_interval_l1: cdktf.numberToTerraform(this._lspGenIntervalL1),
      lsp_gen_interval_l2: cdktf.numberToTerraform(this._lspGenIntervalL2),
      lsp_refresh_interval: cdktf.numberToTerraform(this._lspRefreshInterval),
      max_lsp_lifetime: cdktf.numberToTerraform(this._maxLspLifetime),
      metric_style: cdktf.stringToTerraform(this._metricStyle),
      overload_bit: cdktf.stringToTerraform(this._overloadBit),
      redistribute6_l1: cdktf.stringToTerraform(this._redistribute6L1),
      redistribute6_l1_list: cdktf.stringToTerraform(this._redistribute6L1List),
      redistribute_l1: cdktf.stringToTerraform(this._redistributeL1),
      redistribute_l1_list: cdktf.stringToTerraform(this._redistributeL1List),
      router_id: cdktf.stringToTerraform(this._routerId),
      spf_interval_exp_l1: cdktf.numberToTerraform(this._spfIntervalExpL1),
      spf_interval_exp_l2: cdktf.numberToTerraform(this._spfIntervalExpL2),
      interface: cdktf.listMapper(routerIsisInterfaceToTerraform, true)(this._interface.internalValue),
      net: cdktf.listMapper(routerIsisNetToTerraform, true)(this._net.internalValue),
      redistribute: cdktf.listMapper(routerIsisRedistributeToTerraform, true)(this._redistribute.internalValue),
      redistribute6: cdktf.listMapper(routerIsisRedistribute6ToTerraform, true)(this._redistribute6.internalValue),
      summary_address: cdktf.listMapper(routerIsisSummaryAddressToTerraform, true)(this._summaryAddress.internalValue),
      summary_address6: cdktf.listMapper(routerIsisSummaryAddress6ToTerraform, true)(this._summaryAddress6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_keychain_area: {
        value: cdktf.stringToHclTerraform(this._authKeychainArea),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_keychain_domain: {
        value: cdktf.stringToHclTerraform(this._authKeychainDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode_area: {
        value: cdktf.stringToHclTerraform(this._authModeArea),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode_domain: {
        value: cdktf.stringToHclTerraform(this._authModeDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password_area: {
        value: cdktf.stringToHclTerraform(this._authPasswordArea),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password_domain: {
        value: cdktf.stringToHclTerraform(this._authPasswordDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_sendonly_area: {
        value: cdktf.stringToHclTerraform(this._authSendonlyArea),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_sendonly_domain: {
        value: cdktf.stringToHclTerraform(this._authSendonlyDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_level: {
        value: cdktf.stringToHclTerraform(this._defaultInformationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_level6: {
        value: cdktf.stringToHclTerraform(this._defaultInformationLevel6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_metric: {
        value: cdktf.numberToHclTerraform(this._defaultInformationMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_information_metric6: {
        value: cdktf.numberToHclTerraform(this._defaultInformationMetric6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_information_originate: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate6: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginate6),
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
      ignore_attached_bit: {
        value: cdktf.stringToHclTerraform(this._ignoreAttachedBit),
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
      log_neighbour_changes: {
        value: cdktf.stringToHclTerraform(this._logNeighbourChanges),
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
      redistribute6_l1: {
        value: cdktf.stringToHclTerraform(this._redistribute6L1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute6_l1_list: {
        value: cdktf.stringToHclTerraform(this._redistribute6L1List),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_l1: {
        value: cdktf.stringToHclTerraform(this._redistributeL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_l1_list: {
        value: cdktf.stringToHclTerraform(this._redistributeL1List),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_interval_exp_l1: {
        value: cdktf.numberToHclTerraform(this._spfIntervalExpL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_exp_l2: {
        value: cdktf.numberToHclTerraform(this._spfIntervalExpL2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface: {
        value: cdktf.listMapperHcl(routerIsisInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceList",
      },
      net: {
        value: cdktf.listMapperHcl(routerIsisNetToHclTerraform, true)(this._net.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisNetList",
      },
      redistribute: {
        value: cdktf.listMapperHcl(routerIsisRedistributeToHclTerraform, true)(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisRedistributeList",
      },
      redistribute6: {
        value: cdktf.listMapperHcl(routerIsisRedistribute6ToHclTerraform, true)(this._redistribute6.internalValue),
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
