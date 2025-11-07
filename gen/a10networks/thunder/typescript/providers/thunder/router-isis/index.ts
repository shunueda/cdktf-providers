// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Check ISIS neighbor protocol support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#adjacency_check RouterIsis#adjacency_check}
  */
  readonly adjacencyCheck?: number;
  /**
  * 'all-interfaces': Enable BFD on all interfaces;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#bfd RouterIsis#bfd}
  */
  readonly bfd?: string;
  /**
  * 'originate': Distribute a default route;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#default_information RouterIsis#default_information}
  */
  readonly defaultInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#id RouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore LSPs with bad checksums
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#ignore_lsp_errors RouterIsis#ignore_lsp_errors}
  */
  readonly ignoreLspErrors?: number;
  /**
  * 'level-1': Act as a station router only; 'level-1-2': Act as both a station router and an area router; 'level-2-only': Act as an area router only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#is_type RouterIsis#is_type}
  */
  readonly isType?: string;
  /**
  * Set LSP refresh interval (LSP refresh time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#lsp_refresh_interval RouterIsis#lsp_refresh_interval}
  */
  readonly lspRefreshInterval?: number;
  /**
  * Set maximum LSP lifetime (Maximum LSP lifetime in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#max_lsp_lifetime RouterIsis#max_lsp_lifetime}
  */
  readonly maxLspLifetime?: number;
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#tag RouterIsis#tag}
  */
  readonly tag: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#user_tag RouterIsis#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#uuid RouterIsis#uuid}
  */
  readonly uuid?: string;
  /**
  * address_family block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#address_family RouterIsis#address_family}
  */
  readonly addressFamily?: RouterIsisAddressFamily;
  /**
  * area_password_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#area_password_cfg RouterIsis#area_password_cfg}
  */
  readonly areaPasswordCfg?: RouterIsisAreaPasswordCfg;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#authentication RouterIsis#authentication}
  */
  readonly authentication?: RouterIsisAuthentication;
  /**
  * distance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#distance_list RouterIsis#distance_list}
  */
  readonly distanceList?: RouterIsisDistanceListStruct[] | cdktf.IResolvable;
  /**
  * domain_password_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#domain_password_cfg RouterIsis#domain_password_cfg}
  */
  readonly domainPasswordCfg?: RouterIsisDomainPasswordCfg;
  /**
  * ha_standby_extra_cost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#ha_standby_extra_cost RouterIsis#ha_standby_extra_cost}
  */
  readonly haStandbyExtraCost?: RouterIsisHaStandbyExtraCost[] | cdktf.IResolvable;
  /**
  * log_adjacency_changes_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#log_adjacency_changes_cfg RouterIsis#log_adjacency_changes_cfg}
  */
  readonly logAdjacencyChangesCfg?: RouterIsisLogAdjacencyChangesCfg;
  /**
  * lsp_gen_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#lsp_gen_interval_list RouterIsis#lsp_gen_interval_list}
  */
  readonly lspGenIntervalList?: RouterIsisLspGenIntervalListStruct[] | cdktf.IResolvable;
  /**
  * metric_style_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#metric_style_list RouterIsis#metric_style_list}
  */
  readonly metricStyleList?: RouterIsisMetricStyleListStruct[] | cdktf.IResolvable;
  /**
  * net_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#net_list RouterIsis#net_list}
  */
  readonly netList?: RouterIsisNetListStruct[] | cdktf.IResolvable;
  /**
  * passive_interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#passive_interface_list RouterIsis#passive_interface_list}
  */
  readonly passiveInterfaceList?: RouterIsisPassiveInterfaceListStruct[] | cdktf.IResolvable;
  /**
  * protocol_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#protocol_list RouterIsis#protocol_list}
  */
  readonly protocolList?: RouterIsisProtocolListStruct[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#redistribute RouterIsis#redistribute}
  */
  readonly redistribute?: RouterIsisRedistribute;
  /**
  * set_overload_bit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#set_overload_bit_cfg RouterIsis#set_overload_bit_cfg}
  */
  readonly setOverloadBitCfg?: RouterIsisSetOverloadBitCfg;
  /**
  * spf_interval_exp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#spf_interval_exp_list RouterIsis#spf_interval_exp_list}
  */
  readonly spfIntervalExpList?: RouterIsisSpfIntervalExpListStruct[] | cdktf.IResolvable;
  /**
  * summary_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#summary_address_list RouterIsis#summary_address_list}
  */
  readonly summaryAddressList?: RouterIsisSummaryAddressListStruct[] | cdktf.IResolvable;
}
export interface RouterIsisAddressFamilyIpv6MultiTopologyCfg {
  /**
  * 'level-1': Level-1 only; 'level-1-2': Level-1-2; 'level-2': Level-2 only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Accept and generate both IS-IS IPv6 and Multi-topology IPV6 TLVs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_transition RouterIsis#level_transition}
  */
  readonly levelTransition?: number;
  /**
  * Enable multi-topology mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#multi_topology RouterIsis#multi_topology}
  */
  readonly multiTopology?: number;
  /**
  * Accept and generate both IS-IS IPv6 and Multi-topology IPV6 TLVs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#transition RouterIsis#transition}
  */
  readonly transition?: number;
}

export function routerIsisAddressFamilyIpv6MultiTopologyCfgToTerraform(struct?: RouterIsisAddressFamilyIpv6MultiTopologyCfgOutputReference | RouterIsisAddressFamilyIpv6MultiTopologyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    level_transition: cdktf.numberToTerraform(struct!.levelTransition),
    multi_topology: cdktf.numberToTerraform(struct!.multiTopology),
    transition: cdktf.numberToTerraform(struct!.transition),
  }
}


export function routerIsisAddressFamilyIpv6MultiTopologyCfgToHclTerraform(struct?: RouterIsisAddressFamilyIpv6MultiTopologyCfgOutputReference | RouterIsisAddressFamilyIpv6MultiTopologyCfg): any {
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
    level_transition: {
      value: cdktf.numberToHclTerraform(struct!.levelTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_topology: {
      value: cdktf.numberToHclTerraform(struct!.multiTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transition: {
      value: cdktf.numberToHclTerraform(struct!.transition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6MultiTopologyCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6MultiTopologyCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._levelTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelTransition = this._levelTransition;
    }
    if (this._multiTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTopology = this._multiTopology;
    }
    if (this._transition !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6MultiTopologyCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._levelTransition = undefined;
      this._multiTopology = undefined;
      this._transition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._levelTransition = value.levelTransition;
      this._multiTopology = value.multiTopology;
      this._transition = value.transition;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // level_transition - computed: false, optional: true, required: false
  private _levelTransition?: number; 
  public get levelTransition() {
    return this.getNumberAttribute('level_transition');
  }
  public set levelTransition(value: number) {
    this._levelTransition = value;
  }
  public resetLevelTransition() {
    this._levelTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelTransitionInput() {
    return this._levelTransition;
  }

  // multi_topology - computed: false, optional: true, required: false
  private _multiTopology?: number; 
  public get multiTopology() {
    return this.getNumberAttribute('multi_topology');
  }
  public set multiTopology(value: number) {
    this._multiTopology = value;
  }
  public resetMultiTopology() {
    this._multiTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTopologyInput() {
    return this._multiTopology;
  }

  // transition - computed: false, optional: true, required: false
  private _transition?: number; 
  public get transition() {
    return this.getNumberAttribute('transition');
  }
  public set transition(value: number) {
    this._transition = value;
  }
  public resetTransition() {
    this._transition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition;
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1 {
  /**
  * Select routes (Access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#distribute_list RouterIsis#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_2 RouterIsis#level_2}
  */
  readonly level2?: number;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1ToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1OutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    level_2: cdktf.numberToTerraform(struct!.level2),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1ToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1OutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_list: {
      value: cdktf.stringToHclTerraform(struct!.distributeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_2: {
      value: cdktf.numberToHclTerraform(struct!.level2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._level2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level2 = this._level2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributeList = undefined;
      this._level2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributeList = value.distributeList;
      this._level2 = value.level2;
    }
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList?: string; 
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }
  public set distributeList(value: string) {
    this._distributeList = value;
  }
  public resetDistributeList() {
    this._distributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList;
  }

  // level_2 - computed: false, optional: true, required: false
  private _level2?: number; 
  public get level2() {
    return this.getNumberAttribute('level_2');
  }
  public set level2(value: number) {
    this._level2 = value;
  }
  public resetLevel2() {
    this._level2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level2Input() {
    return this._level2;
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel1From {
  /**
  * into_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#into_1 RouterIsis#into_1}
  */
  readonly into1?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    into_1: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1ToTerraform(struct!.into1),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    into_1: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1ToHclTerraform(struct!.into1),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel1From | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._into1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.into1 = this._into1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1From | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._into1.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._into1.internalValue = value.into1;
    }
  }

  // into_1 - computed: false, optional: true, required: false
  private _into1 = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1OutputReference(this, "into_1");
  public get into1() {
    return this._into1;
  }
  public putInto1(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1) {
    this._into1.internalValue = value;
  }
  public resetInto1() {
    this._into1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get into1Input() {
    return this._into1.internalValue;
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2 {
  /**
  * Select routes (Access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#distribute_list RouterIsis#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_1 RouterIsis#level_1}
  */
  readonly level1?: number;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2ToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2OutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    level_1: cdktf.numberToTerraform(struct!.level1),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2ToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2OutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_list: {
      value: cdktf.stringToHclTerraform(struct!.distributeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_1: {
      value: cdktf.numberToHclTerraform(struct!.level1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._level1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1 = this._level1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributeList = undefined;
      this._level1 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributeList = value.distributeList;
      this._level1 = value.level1;
    }
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList?: string; 
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }
  public set distributeList(value: string) {
    this._distributeList = value;
  }
  public resetDistributeList() {
    this._distributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList;
  }

  // level_1 - computed: false, optional: true, required: false
  private _level1?: number; 
  public get level1() {
    return this.getNumberAttribute('level_1');
  }
  public set level1(value: number) {
    this._level1 = value;
  }
  public resetLevel1() {
    this._level1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1Input() {
    return this._level1;
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel2From {
  /**
  * into_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#into_2 RouterIsis#into_2}
  */
  readonly into2?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    into_2: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2ToTerraform(struct!.into2),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    into_2: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2ToHclTerraform(struct!.into2),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel2From | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._into2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.into2 = this._into2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2From | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._into2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._into2.internalValue = value.into2;
    }
  }

  // into_2 - computed: false, optional: true, required: false
  private _into2 = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2OutputReference(this, "into_2");
  public get into2() {
    return this._into2;
  }
  public putInto2(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2) {
    this._into2.internalValue = value;
  }
  public resetInto2() {
    this._into2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get into2Input() {
    return this._into2.internalValue;
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeIsis {
  /**
  * level_1_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_1_from RouterIsis#level_1_from}
  */
  readonly level1From?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1From;
  /**
  * level_2_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_2_from RouterIsis#level_2_from}
  */
  readonly level2From?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2From;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_1_from: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromToTerraform(struct!.level1From),
    level_2_from: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromToTerraform(struct!.level2From),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_1_from: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromToHclTerraform(struct!.level1From),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromList",
    },
    level_2_from: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromToHclTerraform(struct!.level2From),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level1From?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1From = this._level1From?.internalValue;
    }
    if (this._level2From?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level2From = this._level2From?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level1From.internalValue = undefined;
      this._level2From.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level1From.internalValue = value.level1From;
      this._level2From.internalValue = value.level2From;
    }
  }

  // level_1_from - computed: false, optional: true, required: false
  private _level1From = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromOutputReference(this, "level_1_from");
  public get level1From() {
    return this._level1From;
  }
  public putLevel1From(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1From) {
    this._level1From.internalValue = value;
  }
  public resetLevel1From() {
    this._level1From.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1FromInput() {
    return this._level1From.internalValue;
  }

  // level_2_from - computed: false, optional: true, required: false
  private _level2From = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromOutputReference(this, "level_2_from");
  public get level2From() {
    return this._level2From;
  }
  public putLevel2From(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2From) {
    this._level2From.internalValue = value;
  }
  public resetLevel2From() {
    this._level2From.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level2FromInput() {
    return this._level2From.internalValue;
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeRedistListStruct {
  /**
  * 'level-1': IS-IS level-1 routes only; 'level-1-2': IS-IS level-1 and level-2 routes; 'level-2': IS-IS level-2 routes only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#metric RouterIsis#metric}
  */
  readonly metric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#metric_type RouterIsis#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#route_map RouterIsis#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'ip-nat': IP NAT; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'nat64': NAT64 Prefix; 'ospf': Open Shortest Path First (OSPF); 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#type RouterIsis#type}
  */
  readonly type?: string;
}

export function routerIsisAddressFamilyIpv6RedistributeRedistListStructToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeRedistListStructToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeRedistListStruct | cdktf.IResolvable): any {
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
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeRedistListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeRedistListStruct | cdktf.IResolvable | undefined {
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
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeRedistListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._routeMap = undefined;
      this._type = undefined;
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
      this._routeMap = value.routeMap;
      this._type = value.type;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // metric_type - computed: false, optional: true, required: false
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RouterIsisAddressFamilyIpv6RedistributeRedistListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyIpv6RedistributeRedistListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyIpv6RedistributeRedistListStructOutputReference {
    return new RouterIsisAddressFamilyIpv6RedistributeRedistListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeVipListStruct {
  /**
  * 'level-1': IS-IS level-1 routes only; 'level-1-2': IS-IS level-1 and level-2 routes; 'level-2': IS-IS level-2 routes only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_level RouterIsis#vip_level}
  */
  readonly vipLevel?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_metric RouterIsis#vip_metric}
  */
  readonly vipMetric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_metric_type RouterIsis#vip_metric_type}
  */
  readonly vipMetricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_route_map RouterIsis#vip_route_map}
  */
  readonly vipRouteMap?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_type RouterIsis#vip_type}
  */
  readonly vipType?: string;
}

export function routerIsisAddressFamilyIpv6RedistributeVipListStructToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_level: cdktf.stringToTerraform(struct!.vipLevel),
    vip_metric: cdktf.numberToTerraform(struct!.vipMetric),
    vip_metric_type: cdktf.stringToTerraform(struct!.vipMetricType),
    vip_route_map: cdktf.stringToTerraform(struct!.vipRouteMap),
    vip_type: cdktf.stringToTerraform(struct!.vipType),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeVipListStructToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_level: {
      value: cdktf.stringToHclTerraform(struct!.vipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_metric: {
      value: cdktf.numberToHclTerraform(struct!.vipMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.vipMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_route_map: {
      value: cdktf.stringToHclTerraform(struct!.vipRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_type: {
      value: cdktf.stringToHclTerraform(struct!.vipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeVipListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipLevel = this._vipLevel;
    }
    if (this._vipMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipMetric = this._vipMetric;
    }
    if (this._vipMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipMetricType = this._vipMetricType;
    }
    if (this._vipRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipRouteMap = this._vipRouteMap;
    }
    if (this._vipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipType = this._vipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeVipListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipLevel = undefined;
      this._vipMetric = undefined;
      this._vipMetricType = undefined;
      this._vipRouteMap = undefined;
      this._vipType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipLevel = value.vipLevel;
      this._vipMetric = value.vipMetric;
      this._vipMetricType = value.vipMetricType;
      this._vipRouteMap = value.vipRouteMap;
      this._vipType = value.vipType;
    }
  }

  // vip_level - computed: false, optional: true, required: false
  private _vipLevel?: string; 
  public get vipLevel() {
    return this.getStringAttribute('vip_level');
  }
  public set vipLevel(value: string) {
    this._vipLevel = value;
  }
  public resetVipLevel() {
    this._vipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipLevelInput() {
    return this._vipLevel;
  }

  // vip_metric - computed: false, optional: true, required: false
  private _vipMetric?: number; 
  public get vipMetric() {
    return this.getNumberAttribute('vip_metric');
  }
  public set vipMetric(value: number) {
    this._vipMetric = value;
  }
  public resetVipMetric() {
    this._vipMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipMetricInput() {
    return this._vipMetric;
  }

  // vip_metric_type - computed: false, optional: true, required: false
  private _vipMetricType?: string; 
  public get vipMetricType() {
    return this.getStringAttribute('vip_metric_type');
  }
  public set vipMetricType(value: string) {
    this._vipMetricType = value;
  }
  public resetVipMetricType() {
    this._vipMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipMetricTypeInput() {
    return this._vipMetricType;
  }

  // vip_route_map - computed: false, optional: true, required: false
  private _vipRouteMap?: string; 
  public get vipRouteMap() {
    return this.getStringAttribute('vip_route_map');
  }
  public set vipRouteMap(value: string) {
    this._vipRouteMap = value;
  }
  public resetVipRouteMap() {
    this._vipRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipRouteMapInput() {
    return this._vipRouteMap;
  }

  // vip_type - computed: false, optional: true, required: false
  private _vipType?: string; 
  public get vipType() {
    return this.getStringAttribute('vip_type');
  }
  public set vipType(value: string) {
    this._vipType = value;
  }
  public resetVipType() {
    this._vipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipTypeInput() {
    return this._vipType;
  }
}

export class RouterIsisAddressFamilyIpv6RedistributeVipListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyIpv6RedistributeVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyIpv6RedistributeVipListStructOutputReference {
    return new RouterIsisAddressFamilyIpv6RedistributeVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyIpv6Redistribute {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#uuid RouterIsis#uuid}
  */
  readonly uuid?: string;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#isis RouterIsis#isis}
  */
  readonly isis?: RouterIsisAddressFamilyIpv6RedistributeIsis;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#redist_list RouterIsis#redist_list}
  */
  readonly redistList?: RouterIsisAddressFamilyIpv6RedistributeRedistListStruct[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_list RouterIsis#vip_list}
  */
  readonly vipList?: RouterIsisAddressFamilyIpv6RedistributeVipListStruct[] | cdktf.IResolvable;
}

export function routerIsisAddressFamilyIpv6RedistributeToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeOutputReference | RouterIsisAddressFamilyIpv6Redistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    isis: routerIsisAddressFamilyIpv6RedistributeIsisToTerraform(struct!.isis),
    redist_list: cdktf.listMapper(routerIsisAddressFamilyIpv6RedistributeRedistListStructToTerraform, true)(struct!.redistList),
    vip_list: cdktf.listMapper(routerIsisAddressFamilyIpv6RedistributeVipListStructToTerraform, true)(struct!.vipList),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeOutputReference | RouterIsisAddressFamilyIpv6Redistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isis: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisList",
    },
    redist_list: {
      value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6RedistributeRedistListStructToHclTerraform, true)(struct!.redistList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeRedistListStructList",
    },
    vip_list: {
      value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6RedistributeVipListStructToHclTerraform, true)(struct!.vipList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeVipListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6Redistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    if (this._redistList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistList = this._redistList?.internalValue;
    }
    if (this._vipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipList = this._vipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6Redistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._isis.internalValue = undefined;
      this._redistList.internalValue = undefined;
      this._vipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._isis.internalValue = value.isis;
      this._redistList.internalValue = value.redistList;
      this._vipList.internalValue = value.vipList;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new RouterIsisAddressFamilyIpv6RedistributeIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: RouterIsisAddressFamilyIpv6RedistributeIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // redist_list - computed: false, optional: true, required: false
  private _redistList = new RouterIsisAddressFamilyIpv6RedistributeRedistListStructList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterIsisAddressFamilyIpv6RedistributeRedistListStruct[] | cdktf.IResolvable) {
    this._redistList.internalValue = value;
  }
  public resetRedistList() {
    this._redistList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistListInput() {
    return this._redistList.internalValue;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new RouterIsisAddressFamilyIpv6RedistributeVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterIsisAddressFamilyIpv6RedistributeVipListStruct[] | cdktf.IResolvable) {
    this._vipList.internalValue = value;
  }
  public resetVipList() {
    this._vipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipListInput() {
    return this._vipList.internalValue;
  }
}
export interface RouterIsisAddressFamilyIpv6SummaryPrefixListStruct {
  /**
  * 'level-1': Summarize into level-1 area; 'level-1-2': Summarize into both area and sub-domain; 'level-2': Summarize into level-2 sub-domain;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#prefix RouterIsis#prefix}
  */
  readonly prefix?: string;
}

export function routerIsisAddressFamilyIpv6SummaryPrefixListStructToTerraform(struct?: RouterIsisAddressFamilyIpv6SummaryPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function routerIsisAddressFamilyIpv6SummaryPrefixListStructToHclTerraform(struct?: RouterIsisAddressFamilyIpv6SummaryPrefixListStruct | cdktf.IResolvable): any {
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

export class RouterIsisAddressFamilyIpv6SummaryPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyIpv6SummaryPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6SummaryPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._level = value.level;
      this._prefix = value.prefix;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // prefix - computed: false, optional: true, required: false
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

export class RouterIsisAddressFamilyIpv6SummaryPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyIpv6SummaryPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyIpv6SummaryPrefixListStructOutputReference {
    return new RouterIsisAddressFamilyIpv6SummaryPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyIpv6 {
  /**
  * Check ISIS neighbor protocol support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#adjacency_check RouterIsis#adjacency_check}
  */
  readonly adjacencyCheck?: number;
  /**
  * 'originate': Distribute a default route;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#default_information RouterIsis#default_information}
  */
  readonly defaultInformation?: string;
  /**
  * ISIS Administrative Distance (Distance value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#distance RouterIsis#distance}
  */
  readonly distance?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#uuid RouterIsis#uuid}
  */
  readonly uuid?: string;
  /**
  * multi_topology_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#multi_topology_cfg RouterIsis#multi_topology_cfg}
  */
  readonly multiTopologyCfg?: RouterIsisAddressFamilyIpv6MultiTopologyCfg;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#redistribute RouterIsis#redistribute}
  */
  readonly redistribute?: RouterIsisAddressFamilyIpv6Redistribute;
  /**
  * summary_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#summary_prefix_list RouterIsis#summary_prefix_list}
  */
  readonly summaryPrefixList?: RouterIsisAddressFamilyIpv6SummaryPrefixListStruct[] | cdktf.IResolvable;
}

export function routerIsisAddressFamilyIpv6ToTerraform(struct?: RouterIsisAddressFamilyIpv6OutputReference | RouterIsisAddressFamilyIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjacency_check: cdktf.numberToTerraform(struct!.adjacencyCheck),
    default_information: cdktf.stringToTerraform(struct!.defaultInformation),
    distance: cdktf.numberToTerraform(struct!.distance),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    multi_topology_cfg: routerIsisAddressFamilyIpv6MultiTopologyCfgToTerraform(struct!.multiTopologyCfg),
    redistribute: routerIsisAddressFamilyIpv6RedistributeToTerraform(struct!.redistribute),
    summary_prefix_list: cdktf.listMapper(routerIsisAddressFamilyIpv6SummaryPrefixListStructToTerraform, true)(struct!.summaryPrefixList),
  }
}


export function routerIsisAddressFamilyIpv6ToHclTerraform(struct?: RouterIsisAddressFamilyIpv6OutputReference | RouterIsisAddressFamilyIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjacency_check: {
      value: cdktf.numberToHclTerraform(struct!.adjacencyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_information: {
      value: cdktf.stringToHclTerraform(struct!.defaultInformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_topology_cfg: {
      value: routerIsisAddressFamilyIpv6MultiTopologyCfgToHclTerraform(struct!.multiTopologyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6MultiTopologyCfgList",
    },
    redistribute: {
      value: routerIsisAddressFamilyIpv6RedistributeToHclTerraform(struct!.redistribute),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeList",
    },
    summary_prefix_list: {
      value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6SummaryPrefixListStructToHclTerraform, true)(struct!.summaryPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6SummaryPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjacencyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjacencyCheck = this._adjacencyCheck;
    }
    if (this._defaultInformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformation = this._defaultInformation;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._multiTopologyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTopologyCfg = this._multiTopologyCfg?.internalValue;
    }
    if (this._redistribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistribute = this._redistribute?.internalValue;
    }
    if (this._summaryPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryPrefixList = this._summaryPrefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjacencyCheck = undefined;
      this._defaultInformation = undefined;
      this._distance = undefined;
      this._uuid = undefined;
      this._multiTopologyCfg.internalValue = undefined;
      this._redistribute.internalValue = undefined;
      this._summaryPrefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjacencyCheck = value.adjacencyCheck;
      this._defaultInformation = value.defaultInformation;
      this._distance = value.distance;
      this._uuid = value.uuid;
      this._multiTopologyCfg.internalValue = value.multiTopologyCfg;
      this._redistribute.internalValue = value.redistribute;
      this._summaryPrefixList.internalValue = value.summaryPrefixList;
    }
  }

  // adjacency_check - computed: false, optional: true, required: false
  private _adjacencyCheck?: number; 
  public get adjacencyCheck() {
    return this.getNumberAttribute('adjacency_check');
  }
  public set adjacencyCheck(value: number) {
    this._adjacencyCheck = value;
  }
  public resetAdjacencyCheck() {
    this._adjacencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacencyCheckInput() {
    return this._adjacencyCheck;
  }

  // default_information - computed: false, optional: true, required: false
  private _defaultInformation?: string; 
  public get defaultInformation() {
    return this.getStringAttribute('default_information');
  }
  public set defaultInformation(value: string) {
    this._defaultInformation = value;
  }
  public resetDefaultInformation() {
    this._defaultInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationInput() {
    return this._defaultInformation;
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // multi_topology_cfg - computed: false, optional: true, required: false
  private _multiTopologyCfg = new RouterIsisAddressFamilyIpv6MultiTopologyCfgOutputReference(this, "multi_topology_cfg");
  public get multiTopologyCfg() {
    return this._multiTopologyCfg;
  }
  public putMultiTopologyCfg(value: RouterIsisAddressFamilyIpv6MultiTopologyCfg) {
    this._multiTopologyCfg.internalValue = value;
  }
  public resetMultiTopologyCfg() {
    this._multiTopologyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTopologyCfgInput() {
    return this._multiTopologyCfg.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterIsisAddressFamilyIpv6RedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterIsisAddressFamilyIpv6Redistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // summary_prefix_list - computed: false, optional: true, required: false
  private _summaryPrefixList = new RouterIsisAddressFamilyIpv6SummaryPrefixListStructList(this, "summary_prefix_list", false);
  public get summaryPrefixList() {
    return this._summaryPrefixList;
  }
  public putSummaryPrefixList(value: RouterIsisAddressFamilyIpv6SummaryPrefixListStruct[] | cdktf.IResolvable) {
    this._summaryPrefixList.internalValue = value;
  }
  public resetSummaryPrefixList() {
    this._summaryPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryPrefixListInput() {
    return this._summaryPrefixList.internalValue;
  }
}
export interface RouterIsisAddressFamily {
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#ipv6 RouterIsis#ipv6}
  */
  readonly ipv6?: RouterIsisAddressFamilyIpv6;
}

export function routerIsisAddressFamilyToTerraform(struct?: RouterIsisAddressFamilyOutputReference | RouterIsisAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: routerIsisAddressFamilyIpv6ToTerraform(struct!.ipv6),
  }
}


export function routerIsisAddressFamilyToHclTerraform(struct?: RouterIsisAddressFamilyOutputReference | RouterIsisAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: routerIsisAddressFamilyIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new RouterIsisAddressFamilyIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RouterIsisAddressFamilyIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface RouterIsisAreaPasswordCfgAuthenticate {
  /**
  * 'send-only': Send but do not check PDUs on receiving; 'validate': Send and check PDUs on receiving;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#snp RouterIsis#snp}
  */
  readonly snp?: string;
}

export function routerIsisAreaPasswordCfgAuthenticateToTerraform(struct?: RouterIsisAreaPasswordCfgAuthenticateOutputReference | RouterIsisAreaPasswordCfgAuthenticate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snp: cdktf.stringToTerraform(struct!.snp),
  }
}


export function routerIsisAreaPasswordCfgAuthenticateToHclTerraform(struct?: RouterIsisAreaPasswordCfgAuthenticateOutputReference | RouterIsisAreaPasswordCfgAuthenticate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snp: {
      value: cdktf.stringToHclTerraform(struct!.snp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAreaPasswordCfgAuthenticateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAreaPasswordCfgAuthenticate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snp !== undefined) {
      hasAnyValues = true;
      internalValueResult.snp = this._snp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAreaPasswordCfgAuthenticate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snp = value.snp;
    }
  }

  // snp - computed: false, optional: true, required: false
  private _snp?: string; 
  public get snp() {
    return this.getStringAttribute('snp');
  }
  public set snp(value: string) {
    this._snp = value;
  }
  public resetSnp() {
    this._snp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snpInput() {
    return this._snp;
  }
}
export interface RouterIsisAreaPasswordCfg {
  /**
  * Configure the authentication password for an area (Area password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#password RouterIsis#password}
  */
  readonly password?: string;
  /**
  * authenticate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#authenticate RouterIsis#authenticate}
  */
  readonly authenticate?: RouterIsisAreaPasswordCfgAuthenticate;
}

export function routerIsisAreaPasswordCfgToTerraform(struct?: RouterIsisAreaPasswordCfgOutputReference | RouterIsisAreaPasswordCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    authenticate: routerIsisAreaPasswordCfgAuthenticateToTerraform(struct!.authenticate),
  }
}


export function routerIsisAreaPasswordCfgToHclTerraform(struct?: RouterIsisAreaPasswordCfgOutputReference | RouterIsisAreaPasswordCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate: {
      value: routerIsisAreaPasswordCfgAuthenticateToHclTerraform(struct!.authenticate),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAreaPasswordCfgAuthenticateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAreaPasswordCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAreaPasswordCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._authenticate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticate = this._authenticate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAreaPasswordCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._authenticate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._authenticate.internalValue = value.authenticate;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // authenticate - computed: false, optional: true, required: false
  private _authenticate = new RouterIsisAreaPasswordCfgAuthenticateOutputReference(this, "authenticate");
  public get authenticate() {
    return this._authenticate;
  }
  public putAuthenticate(value: RouterIsisAreaPasswordCfgAuthenticate) {
    this._authenticate.internalValue = value;
  }
  public resetAuthenticate() {
    this._authenticate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate.internalValue;
  }
}
export interface RouterIsisAuthenticationKeyChainListStruct {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#key_chain RouterIsis#key_chain}
  */
  readonly keyChain?: string;
  /**
  * 'level-1': Specify authentication key-chain for level-1 PDUs; 'level-2': Specify authentication key-chain for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
}

export function routerIsisAuthenticationKeyChainListStructToTerraform(struct?: RouterIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function routerIsisAuthenticationKeyChainListStructToHclTerraform(struct?: RouterIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: cdktf.stringToHclTerraform(struct!.keyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAuthenticationKeyChainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyChain = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyChain = value.keyChain;
      this._level = value.level;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain?: string; 
  public get keyChain() {
    return this.getStringAttribute('key_chain');
  }
  public set keyChain(value: string) {
    this._keyChain = value;
  }
  public resetKeyChain() {
    this._keyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain;
  }

  // level - computed: false, optional: true, required: false
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
}

export class RouterIsisAuthenticationKeyChainListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAuthenticationKeyChainListStructOutputReference {
    return new RouterIsisAuthenticationKeyChainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAuthenticationModeListStruct {
  /**
  * 'level-1': Specify authentication mode for level-1 PDUs; 'level-2': Specify authentication mode for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * 'md5': Authentication mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#mode RouterIsis#mode}
  */
  readonly mode?: string;
}

export function routerIsisAuthenticationModeListStructToTerraform(struct?: RouterIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function routerIsisAuthenticationModeListStructToHclTerraform(struct?: RouterIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAuthenticationModeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._mode = value.mode;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class RouterIsisAuthenticationModeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAuthenticationModeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAuthenticationModeListStructOutputReference {
    return new RouterIsisAuthenticationModeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAuthenticationSendOnlyListStruct {
  /**
  * 'level-1': Specify authentication send-only for level-1 PDUs; 'level-2': Specify authentication send-only for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Authentication send-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#send_only RouterIsis#send_only}
  */
  readonly sendOnly?: number;
}

export function routerIsisAuthenticationSendOnlyListStructToTerraform(struct?: RouterIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    send_only: cdktf.numberToTerraform(struct!.sendOnly),
  }
}


export function routerIsisAuthenticationSendOnlyListStructToHclTerraform(struct?: RouterIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
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
    send_only: {
      value: cdktf.numberToHclTerraform(struct!.sendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAuthenticationSendOnlyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._sendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnly = this._sendOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._sendOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._sendOnly = value.sendOnly;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // send_only - computed: false, optional: true, required: false
  private _sendOnly?: number; 
  public get sendOnly() {
    return this.getNumberAttribute('send_only');
  }
  public set sendOnly(value: number) {
    this._sendOnly = value;
  }
  public resetSendOnly() {
    this._sendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyInput() {
    return this._sendOnly;
  }
}

export class RouterIsisAuthenticationSendOnlyListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAuthenticationSendOnlyListStructOutputReference {
    return new RouterIsisAuthenticationSendOnlyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAuthentication {
  /**
  * key_chain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#key_chain_list RouterIsis#key_chain_list}
  */
  readonly keyChainList?: RouterIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable;
  /**
  * mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#mode_list RouterIsis#mode_list}
  */
  readonly modeList?: RouterIsisAuthenticationModeListStruct[] | cdktf.IResolvable;
  /**
  * send_only_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#send_only_list RouterIsis#send_only_list}
  */
  readonly sendOnlyList?: RouterIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable;
}

export function routerIsisAuthenticationToTerraform(struct?: RouterIsisAuthenticationOutputReference | RouterIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_list: cdktf.listMapper(routerIsisAuthenticationKeyChainListStructToTerraform, true)(struct!.keyChainList),
    mode_list: cdktf.listMapper(routerIsisAuthenticationModeListStructToTerraform, true)(struct!.modeList),
    send_only_list: cdktf.listMapper(routerIsisAuthenticationSendOnlyListStructToTerraform, true)(struct!.sendOnlyList),
  }
}


export function routerIsisAuthenticationToHclTerraform(struct?: RouterIsisAuthenticationOutputReference | RouterIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_list: {
      value: cdktf.listMapperHcl(routerIsisAuthenticationKeyChainListStructToHclTerraform, true)(struct!.keyChainList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAuthenticationKeyChainListStructList",
    },
    mode_list: {
      value: cdktf.listMapperHcl(routerIsisAuthenticationModeListStructToHclTerraform, true)(struct!.modeList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAuthenticationModeListStructList",
    },
    send_only_list: {
      value: cdktf.listMapperHcl(routerIsisAuthenticationSendOnlyListStructToHclTerraform, true)(struct!.sendOnlyList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAuthenticationSendOnlyListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChainList = this._keyChainList?.internalValue;
    }
    if (this._modeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeList = this._modeList?.internalValue;
    }
    if (this._sendOnlyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnlyList = this._sendOnlyList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChainList.internalValue = undefined;
      this._modeList.internalValue = undefined;
      this._sendOnlyList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChainList.internalValue = value.keyChainList;
      this._modeList.internalValue = value.modeList;
      this._sendOnlyList.internalValue = value.sendOnlyList;
    }
  }

  // key_chain_list - computed: false, optional: true, required: false
  private _keyChainList = new RouterIsisAuthenticationKeyChainListStructList(this, "key_chain_list", false);
  public get keyChainList() {
    return this._keyChainList;
  }
  public putKeyChainList(value: RouterIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable) {
    this._keyChainList.internalValue = value;
  }
  public resetKeyChainList() {
    this._keyChainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainListInput() {
    return this._keyChainList.internalValue;
  }

  // mode_list - computed: false, optional: true, required: false
  private _modeList = new RouterIsisAuthenticationModeListStructList(this, "mode_list", false);
  public get modeList() {
    return this._modeList;
  }
  public putModeList(value: RouterIsisAuthenticationModeListStruct[] | cdktf.IResolvable) {
    this._modeList.internalValue = value;
  }
  public resetModeList() {
    this._modeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeListInput() {
    return this._modeList.internalValue;
  }

  // send_only_list - computed: false, optional: true, required: false
  private _sendOnlyList = new RouterIsisAuthenticationSendOnlyListStructList(this, "send_only_list", false);
  public get sendOnlyList() {
    return this._sendOnlyList;
  }
  public putSendOnlyList(value: RouterIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable) {
    this._sendOnlyList.internalValue = value;
  }
  public resetSendOnlyList() {
    this._sendOnlyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyListInput() {
    return this._sendOnlyList.internalValue;
  }
}
export interface RouterIsisDistanceListStruct {
  /**
  * Access list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#acl RouterIsis#acl}
  */
  readonly acl?: string;
  /**
  * ISIS Administrative Distance (Distance value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#distance RouterIsis#distance}
  */
  readonly distance?: number;
  /**
  * System-ID in XXXX.XXXX.XXXX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#system_id RouterIsis#system_id}
  */
  readonly systemId?: string;
}

export function routerIsisDistanceListStructToTerraform(struct?: RouterIsisDistanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    distance: cdktf.numberToTerraform(struct!.distance),
    system_id: cdktf.stringToTerraform(struct!.systemId),
  }
}


export function routerIsisDistanceListStructToHclTerraform(struct?: RouterIsisDistanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisDistanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisDistanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisDistanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._distance = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._distance = value.distance;
      this._systemId = value.systemId;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

export class RouterIsisDistanceListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisDistanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisDistanceListStructOutputReference {
    return new RouterIsisDistanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisDomainPasswordCfgAuthenticate {
  /**
  * 'send-only': Send but do not check PDUs on receiving; 'validate': Send and check PDUs on receiving;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#snp RouterIsis#snp}
  */
  readonly snp?: string;
}

export function routerIsisDomainPasswordCfgAuthenticateToTerraform(struct?: RouterIsisDomainPasswordCfgAuthenticateOutputReference | RouterIsisDomainPasswordCfgAuthenticate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snp: cdktf.stringToTerraform(struct!.snp),
  }
}


export function routerIsisDomainPasswordCfgAuthenticateToHclTerraform(struct?: RouterIsisDomainPasswordCfgAuthenticateOutputReference | RouterIsisDomainPasswordCfgAuthenticate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snp: {
      value: cdktf.stringToHclTerraform(struct!.snp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisDomainPasswordCfgAuthenticateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisDomainPasswordCfgAuthenticate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snp !== undefined) {
      hasAnyValues = true;
      internalValueResult.snp = this._snp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisDomainPasswordCfgAuthenticate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snp = value.snp;
    }
  }

  // snp - computed: false, optional: true, required: false
  private _snp?: string; 
  public get snp() {
    return this.getStringAttribute('snp');
  }
  public set snp(value: string) {
    this._snp = value;
  }
  public resetSnp() {
    this._snp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snpInput() {
    return this._snp;
  }
}
export interface RouterIsisDomainPasswordCfg {
  /**
  * Set the authentication password for a routing domain (Routing domain password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#password RouterIsis#password}
  */
  readonly password?: string;
  /**
  * authenticate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#authenticate RouterIsis#authenticate}
  */
  readonly authenticate?: RouterIsisDomainPasswordCfgAuthenticate;
}

export function routerIsisDomainPasswordCfgToTerraform(struct?: RouterIsisDomainPasswordCfgOutputReference | RouterIsisDomainPasswordCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    authenticate: routerIsisDomainPasswordCfgAuthenticateToTerraform(struct!.authenticate),
  }
}


export function routerIsisDomainPasswordCfgToHclTerraform(struct?: RouterIsisDomainPasswordCfgOutputReference | RouterIsisDomainPasswordCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate: {
      value: routerIsisDomainPasswordCfgAuthenticateToHclTerraform(struct!.authenticate),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisDomainPasswordCfgAuthenticateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisDomainPasswordCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisDomainPasswordCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._authenticate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticate = this._authenticate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisDomainPasswordCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._authenticate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._authenticate.internalValue = value.authenticate;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // authenticate - computed: false, optional: true, required: false
  private _authenticate = new RouterIsisDomainPasswordCfgAuthenticateOutputReference(this, "authenticate");
  public get authenticate() {
    return this._authenticate;
  }
  public putAuthenticate(value: RouterIsisDomainPasswordCfgAuthenticate) {
    this._authenticate.internalValue = value;
  }
  public resetAuthenticate() {
    this._authenticate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate.internalValue;
  }
}
export interface RouterIsisHaStandbyExtraCost {
  /**
  * The extra cost value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#extra_cost RouterIsis#extra_cost}
  */
  readonly extraCost?: number;
  /**
  * Group (Group ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#group RouterIsis#group}
  */
  readonly group?: number;
}

export function routerIsisHaStandbyExtraCostToTerraform(struct?: RouterIsisHaStandbyExtraCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_cost: cdktf.numberToTerraform(struct!.extraCost),
    group: cdktf.numberToTerraform(struct!.group),
  }
}


export function routerIsisHaStandbyExtraCostToHclTerraform(struct?: RouterIsisHaStandbyExtraCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_cost: {
      value: cdktf.numberToHclTerraform(struct!.extraCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisHaStandbyExtraCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisHaStandbyExtraCost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraCost = this._extraCost;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisHaStandbyExtraCost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraCost = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraCost = value.extraCost;
      this._group = value.group;
    }
  }

  // extra_cost - computed: false, optional: true, required: false
  private _extraCost?: number; 
  public get extraCost() {
    return this.getNumberAttribute('extra_cost');
  }
  public set extraCost(value: number) {
    this._extraCost = value;
  }
  public resetExtraCost() {
    this._extraCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraCostInput() {
    return this._extraCost;
  }

  // group - computed: false, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}

export class RouterIsisHaStandbyExtraCostList extends cdktf.ComplexList {
  public internalValue? : RouterIsisHaStandbyExtraCost[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisHaStandbyExtraCostOutputReference {
    return new RouterIsisHaStandbyExtraCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisLogAdjacencyChangesCfg {
  /**
  * 'detail': Log changes in adjacency state; 'disable': Disable logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#state RouterIsis#state}
  */
  readonly state?: string;
}

export function routerIsisLogAdjacencyChangesCfgToTerraform(struct?: RouterIsisLogAdjacencyChangesCfgOutputReference | RouterIsisLogAdjacencyChangesCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function routerIsisLogAdjacencyChangesCfgToHclTerraform(struct?: RouterIsisLogAdjacencyChangesCfgOutputReference | RouterIsisLogAdjacencyChangesCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisLogAdjacencyChangesCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisLogAdjacencyChangesCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisLogAdjacencyChangesCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface RouterIsisLspGenIntervalListStruct {
  /**
  * Minimum interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#interval RouterIsis#interval}
  */
  readonly interval?: number;
  /**
  * 'level-1': Set interval for level 1 only; 'level-2': Set interval for level 2 only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
}

export function routerIsisLspGenIntervalListStructToTerraform(struct?: RouterIsisLspGenIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function routerIsisLspGenIntervalListStructToHclTerraform(struct?: RouterIsisLspGenIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisLspGenIntervalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisLspGenIntervalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisLspGenIntervalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._level = value.level;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // level - computed: false, optional: true, required: false
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
}

export class RouterIsisLspGenIntervalListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisLspGenIntervalListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisLspGenIntervalListStructOutputReference {
    return new RouterIsisLspGenIntervalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisMetricStyleListStruct {
  /**
  * 'level-1': Level-1 only; 'level-1-2': Level-1-2; 'level-2': Level-2 only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * 'narrow': Use old style of TLVs with narrow metric; 'wide': Use new style of TLVs to carry wider metric; 'transition': Send and accept both styles of TLVs during transition; 'narrow-transition': Send old style of TLVs with narrow metric with accepting both styles of TLVs; 'wide-transition': Send new style of TLVs to carry wider metric with accepting both styles of TLVs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#type RouterIsis#type}
  */
  readonly type?: string;
}

export function routerIsisMetricStyleListStructToTerraform(struct?: RouterIsisMetricStyleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerIsisMetricStyleListStructToHclTerraform(struct?: RouterIsisMetricStyleListStruct | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisMetricStyleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisMetricStyleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisMetricStyleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._type = value.type;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RouterIsisMetricStyleListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisMetricStyleListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisMetricStyleListStructOutputReference {
    return new RouterIsisMetricStyleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisNetListStruct {
  /**
  * A Network Entity Title for this process (XX.XXXX. ... .XXXX.XX  Network entity title (NET))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#net RouterIsis#net}
  */
  readonly net?: string;
}

export function routerIsisNetListStructToTerraform(struct?: RouterIsisNetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net: cdktf.stringToTerraform(struct!.net),
  }
}


export function routerIsisNetListStructToHclTerraform(struct?: RouterIsisNetListStruct | cdktf.IResolvable): any {
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

export class RouterIsisNetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisNetListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIsisNetListStruct | cdktf.IResolvable | undefined) {
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

export class RouterIsisNetListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisNetListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisNetListStructOutputReference {
    return new RouterIsisNetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisPassiveInterfaceListStruct {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#ethernet RouterIsis#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Logical interface (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#lif RouterIsis#lif}
  */
  readonly lif?: string;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#loopback RouterIsis#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#trunk RouterIsis#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#tunnel RouterIsis#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#ve RouterIsis#ve}
  */
  readonly ve?: number;
}

export function routerIsisPassiveInterfaceListStructToTerraform(struct?: RouterIsisPassiveInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    lif: cdktf.stringToTerraform(struct!.lif),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIsisPassiveInterfaceListStructToHclTerraform(struct?: RouterIsisPassiveInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
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
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisPassiveInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisPassiveInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisPassiveInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._lif = undefined;
      this._loopback = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._lif = value.lif;
      this._loopback = value.loopback;
      this._trunk = value.trunk;
      this._tunnel = value.tunnel;
      this._ve = value.ve;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
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

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class RouterIsisPassiveInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisPassiveInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisPassiveInterfaceListStructOutputReference {
    return new RouterIsisPassiveInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisProtocolListStruct {
  /**
  * Protocol Topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#protocol_topology RouterIsis#protocol_topology}
  */
  readonly protocolTopology?: number;
}

export function routerIsisProtocolListStructToTerraform(struct?: RouterIsisProtocolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_topology: cdktf.numberToTerraform(struct!.protocolTopology),
  }
}


export function routerIsisProtocolListStructToHclTerraform(struct?: RouterIsisProtocolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_topology: {
      value: cdktf.numberToHclTerraform(struct!.protocolTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisProtocolListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisProtocolListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolTopology = this._protocolTopology;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisProtocolListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolTopology = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolTopology = value.protocolTopology;
    }
  }

  // protocol_topology - computed: false, optional: true, required: false
  private _protocolTopology?: number; 
  public get protocolTopology() {
    return this.getNumberAttribute('protocol_topology');
  }
  public set protocolTopology(value: number) {
    this._protocolTopology = value;
  }
  public resetProtocolTopology() {
    this._protocolTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTopologyInput() {
    return this._protocolTopology;
  }
}

export class RouterIsisProtocolListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisProtocolListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisProtocolListStructOutputReference {
    return new RouterIsisProtocolListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisRedistributeIsisLevel1FromInto1 {
  /**
  * Select routes (Access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#distribute_list RouterIsis#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_2 RouterIsis#level_2}
  */
  readonly level2?: number;
}

export function routerIsisRedistributeIsisLevel1FromInto1ToTerraform(struct?: RouterIsisRedistributeIsisLevel1FromInto1OutputReference | RouterIsisRedistributeIsisLevel1FromInto1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    level_2: cdktf.numberToTerraform(struct!.level2),
  }
}


export function routerIsisRedistributeIsisLevel1FromInto1ToHclTerraform(struct?: RouterIsisRedistributeIsisLevel1FromInto1OutputReference | RouterIsisRedistributeIsisLevel1FromInto1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_list: {
      value: cdktf.stringToHclTerraform(struct!.distributeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_2: {
      value: cdktf.numberToHclTerraform(struct!.level2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeIsisLevel1FromInto1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisRedistributeIsisLevel1FromInto1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._level2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level2 = this._level2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistributeIsisLevel1FromInto1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributeList = undefined;
      this._level2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributeList = value.distributeList;
      this._level2 = value.level2;
    }
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList?: string; 
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }
  public set distributeList(value: string) {
    this._distributeList = value;
  }
  public resetDistributeList() {
    this._distributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList;
  }

  // level_2 - computed: false, optional: true, required: false
  private _level2?: number; 
  public get level2() {
    return this.getNumberAttribute('level_2');
  }
  public set level2(value: number) {
    this._level2 = value;
  }
  public resetLevel2() {
    this._level2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level2Input() {
    return this._level2;
  }
}
export interface RouterIsisRedistributeIsisLevel1From {
  /**
  * into_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#into_1 RouterIsis#into_1}
  */
  readonly into1?: RouterIsisRedistributeIsisLevel1FromInto1;
}

export function routerIsisRedistributeIsisLevel1FromToTerraform(struct?: RouterIsisRedistributeIsisLevel1FromOutputReference | RouterIsisRedistributeIsisLevel1From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    into_1: routerIsisRedistributeIsisLevel1FromInto1ToTerraform(struct!.into1),
  }
}


export function routerIsisRedistributeIsisLevel1FromToHclTerraform(struct?: RouterIsisRedistributeIsisLevel1FromOutputReference | RouterIsisRedistributeIsisLevel1From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    into_1: {
      value: routerIsisRedistributeIsisLevel1FromInto1ToHclTerraform(struct!.into1),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisRedistributeIsisLevel1FromInto1List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeIsisLevel1FromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisRedistributeIsisLevel1From | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._into1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.into1 = this._into1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistributeIsisLevel1From | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._into1.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._into1.internalValue = value.into1;
    }
  }

  // into_1 - computed: false, optional: true, required: false
  private _into1 = new RouterIsisRedistributeIsisLevel1FromInto1OutputReference(this, "into_1");
  public get into1() {
    return this._into1;
  }
  public putInto1(value: RouterIsisRedistributeIsisLevel1FromInto1) {
    this._into1.internalValue = value;
  }
  public resetInto1() {
    this._into1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get into1Input() {
    return this._into1.internalValue;
  }
}
export interface RouterIsisRedistributeIsisLevel2FromInto2 {
  /**
  * Select routes (Access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#distribute_list RouterIsis#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_1 RouterIsis#level_1}
  */
  readonly level1?: number;
}

export function routerIsisRedistributeIsisLevel2FromInto2ToTerraform(struct?: RouterIsisRedistributeIsisLevel2FromInto2OutputReference | RouterIsisRedistributeIsisLevel2FromInto2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    level_1: cdktf.numberToTerraform(struct!.level1),
  }
}


export function routerIsisRedistributeIsisLevel2FromInto2ToHclTerraform(struct?: RouterIsisRedistributeIsisLevel2FromInto2OutputReference | RouterIsisRedistributeIsisLevel2FromInto2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_list: {
      value: cdktf.stringToHclTerraform(struct!.distributeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_1: {
      value: cdktf.numberToHclTerraform(struct!.level1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeIsisLevel2FromInto2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisRedistributeIsisLevel2FromInto2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._level1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1 = this._level1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistributeIsisLevel2FromInto2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributeList = undefined;
      this._level1 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributeList = value.distributeList;
      this._level1 = value.level1;
    }
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList?: string; 
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }
  public set distributeList(value: string) {
    this._distributeList = value;
  }
  public resetDistributeList() {
    this._distributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList;
  }

  // level_1 - computed: false, optional: true, required: false
  private _level1?: number; 
  public get level1() {
    return this.getNumberAttribute('level_1');
  }
  public set level1(value: number) {
    this._level1 = value;
  }
  public resetLevel1() {
    this._level1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1Input() {
    return this._level1;
  }
}
export interface RouterIsisRedistributeIsisLevel2From {
  /**
  * into_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#into_2 RouterIsis#into_2}
  */
  readonly into2?: RouterIsisRedistributeIsisLevel2FromInto2;
}

export function routerIsisRedistributeIsisLevel2FromToTerraform(struct?: RouterIsisRedistributeIsisLevel2FromOutputReference | RouterIsisRedistributeIsisLevel2From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    into_2: routerIsisRedistributeIsisLevel2FromInto2ToTerraform(struct!.into2),
  }
}


export function routerIsisRedistributeIsisLevel2FromToHclTerraform(struct?: RouterIsisRedistributeIsisLevel2FromOutputReference | RouterIsisRedistributeIsisLevel2From): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    into_2: {
      value: routerIsisRedistributeIsisLevel2FromInto2ToHclTerraform(struct!.into2),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisRedistributeIsisLevel2FromInto2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeIsisLevel2FromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisRedistributeIsisLevel2From | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._into2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.into2 = this._into2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistributeIsisLevel2From | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._into2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._into2.internalValue = value.into2;
    }
  }

  // into_2 - computed: false, optional: true, required: false
  private _into2 = new RouterIsisRedistributeIsisLevel2FromInto2OutputReference(this, "into_2");
  public get into2() {
    return this._into2;
  }
  public putInto2(value: RouterIsisRedistributeIsisLevel2FromInto2) {
    this._into2.internalValue = value;
  }
  public resetInto2() {
    this._into2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get into2Input() {
    return this._into2.internalValue;
  }
}
export interface RouterIsisRedistributeIsis {
  /**
  * level_1_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_1_from RouterIsis#level_1_from}
  */
  readonly level1From?: RouterIsisRedistributeIsisLevel1From;
  /**
  * level_2_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level_2_from RouterIsis#level_2_from}
  */
  readonly level2From?: RouterIsisRedistributeIsisLevel2From;
}

export function routerIsisRedistributeIsisToTerraform(struct?: RouterIsisRedistributeIsisOutputReference | RouterIsisRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_1_from: routerIsisRedistributeIsisLevel1FromToTerraform(struct!.level1From),
    level_2_from: routerIsisRedistributeIsisLevel2FromToTerraform(struct!.level2From),
  }
}


export function routerIsisRedistributeIsisToHclTerraform(struct?: RouterIsisRedistributeIsisOutputReference | RouterIsisRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_1_from: {
      value: routerIsisRedistributeIsisLevel1FromToHclTerraform(struct!.level1From),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisRedistributeIsisLevel1FromList",
    },
    level_2_from: {
      value: routerIsisRedistributeIsisLevel2FromToHclTerraform(struct!.level2From),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisRedistributeIsisLevel2FromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisRedistributeIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level1From?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1From = this._level1From?.internalValue;
    }
    if (this._level2From?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level2From = this._level2From?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistributeIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level1From.internalValue = undefined;
      this._level2From.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level1From.internalValue = value.level1From;
      this._level2From.internalValue = value.level2From;
    }
  }

  // level_1_from - computed: false, optional: true, required: false
  private _level1From = new RouterIsisRedistributeIsisLevel1FromOutputReference(this, "level_1_from");
  public get level1From() {
    return this._level1From;
  }
  public putLevel1From(value: RouterIsisRedistributeIsisLevel1From) {
    this._level1From.internalValue = value;
  }
  public resetLevel1From() {
    this._level1From.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1FromInput() {
    return this._level1From.internalValue;
  }

  // level_2_from - computed: false, optional: true, required: false
  private _level2From = new RouterIsisRedistributeIsisLevel2FromOutputReference(this, "level_2_from");
  public get level2From() {
    return this._level2From;
  }
  public putLevel2From(value: RouterIsisRedistributeIsisLevel2From) {
    this._level2From.internalValue = value;
  }
  public resetLevel2From() {
    this._level2From.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level2FromInput() {
    return this._level2From.internalValue;
  }
}
export interface RouterIsisRedistributeRedistListStruct {
  /**
  * 'level-1': IS-IS level-1 routes only; 'level-1-2': IS-IS level-1 and level-2 routes; 'level-2': IS-IS level-2 routes only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#metric RouterIsis#metric}
  */
  readonly metric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#metric_type RouterIsis#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#route_map RouterIsis#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'ip-nat': IP NAT; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'ospf': Open Shortest Path First (OSPF); 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#type RouterIsis#type}
  */
  readonly type?: string;
}

export function routerIsisRedistributeRedistListStructToTerraform(struct?: RouterIsisRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerIsisRedistributeRedistListStructToHclTerraform(struct?: RouterIsisRedistributeRedistListStruct | cdktf.IResolvable): any {
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
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeRedistListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisRedistributeRedistListStruct | cdktf.IResolvable | undefined {
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
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistributeRedistListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._routeMap = undefined;
      this._type = undefined;
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
      this._routeMap = value.routeMap;
      this._type = value.type;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // metric_type - computed: false, optional: true, required: false
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RouterIsisRedistributeRedistListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisRedistributeRedistListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisRedistributeRedistListStructOutputReference {
    return new RouterIsisRedistributeRedistListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisRedistributeVipListStruct {
  /**
  * 'level-1': IS-IS level-1 routes only; 'level-1-2': IS-IS level-1 and level-2 routes; 'level-2': IS-IS level-2 routes only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_level RouterIsis#vip_level}
  */
  readonly vipLevel?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_metric RouterIsis#vip_metric}
  */
  readonly vipMetric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_metric_type RouterIsis#vip_metric_type}
  */
  readonly vipMetricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_route_map RouterIsis#vip_route_map}
  */
  readonly vipRouteMap?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_type RouterIsis#vip_type}
  */
  readonly vipType?: string;
}

export function routerIsisRedistributeVipListStructToTerraform(struct?: RouterIsisRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_level: cdktf.stringToTerraform(struct!.vipLevel),
    vip_metric: cdktf.numberToTerraform(struct!.vipMetric),
    vip_metric_type: cdktf.stringToTerraform(struct!.vipMetricType),
    vip_route_map: cdktf.stringToTerraform(struct!.vipRouteMap),
    vip_type: cdktf.stringToTerraform(struct!.vipType),
  }
}


export function routerIsisRedistributeVipListStructToHclTerraform(struct?: RouterIsisRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_level: {
      value: cdktf.stringToHclTerraform(struct!.vipLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_metric: {
      value: cdktf.numberToHclTerraform(struct!.vipMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.vipMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_route_map: {
      value: cdktf.stringToHclTerraform(struct!.vipRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_type: {
      value: cdktf.stringToHclTerraform(struct!.vipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisRedistributeVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisRedistributeVipListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipLevel = this._vipLevel;
    }
    if (this._vipMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipMetric = this._vipMetric;
    }
    if (this._vipMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipMetricType = this._vipMetricType;
    }
    if (this._vipRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipRouteMap = this._vipRouteMap;
    }
    if (this._vipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipType = this._vipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistributeVipListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipLevel = undefined;
      this._vipMetric = undefined;
      this._vipMetricType = undefined;
      this._vipRouteMap = undefined;
      this._vipType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipLevel = value.vipLevel;
      this._vipMetric = value.vipMetric;
      this._vipMetricType = value.vipMetricType;
      this._vipRouteMap = value.vipRouteMap;
      this._vipType = value.vipType;
    }
  }

  // vip_level - computed: false, optional: true, required: false
  private _vipLevel?: string; 
  public get vipLevel() {
    return this.getStringAttribute('vip_level');
  }
  public set vipLevel(value: string) {
    this._vipLevel = value;
  }
  public resetVipLevel() {
    this._vipLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipLevelInput() {
    return this._vipLevel;
  }

  // vip_metric - computed: false, optional: true, required: false
  private _vipMetric?: number; 
  public get vipMetric() {
    return this.getNumberAttribute('vip_metric');
  }
  public set vipMetric(value: number) {
    this._vipMetric = value;
  }
  public resetVipMetric() {
    this._vipMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipMetricInput() {
    return this._vipMetric;
  }

  // vip_metric_type - computed: false, optional: true, required: false
  private _vipMetricType?: string; 
  public get vipMetricType() {
    return this.getStringAttribute('vip_metric_type');
  }
  public set vipMetricType(value: string) {
    this._vipMetricType = value;
  }
  public resetVipMetricType() {
    this._vipMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipMetricTypeInput() {
    return this._vipMetricType;
  }

  // vip_route_map - computed: false, optional: true, required: false
  private _vipRouteMap?: string; 
  public get vipRouteMap() {
    return this.getStringAttribute('vip_route_map');
  }
  public set vipRouteMap(value: string) {
    this._vipRouteMap = value;
  }
  public resetVipRouteMap() {
    this._vipRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipRouteMapInput() {
    return this._vipRouteMap;
  }

  // vip_type - computed: false, optional: true, required: false
  private _vipType?: string; 
  public get vipType() {
    return this.getStringAttribute('vip_type');
  }
  public set vipType(value: string) {
    this._vipType = value;
  }
  public resetVipType() {
    this._vipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipTypeInput() {
    return this._vipType;
  }
}

export class RouterIsisRedistributeVipListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisRedistributeVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisRedistributeVipListStructOutputReference {
    return new RouterIsisRedistributeVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisRedistribute {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#uuid RouterIsis#uuid}
  */
  readonly uuid?: string;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#isis RouterIsis#isis}
  */
  readonly isis?: RouterIsisRedistributeIsis;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#redist_list RouterIsis#redist_list}
  */
  readonly redistList?: RouterIsisRedistributeRedistListStruct[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#vip_list RouterIsis#vip_list}
  */
  readonly vipList?: RouterIsisRedistributeVipListStruct[] | cdktf.IResolvable;
}

export function routerIsisRedistributeToTerraform(struct?: RouterIsisRedistributeOutputReference | RouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    isis: routerIsisRedistributeIsisToTerraform(struct!.isis),
    redist_list: cdktf.listMapper(routerIsisRedistributeRedistListStructToTerraform, true)(struct!.redistList),
    vip_list: cdktf.listMapper(routerIsisRedistributeVipListStructToTerraform, true)(struct!.vipList),
  }
}


export function routerIsisRedistributeToHclTerraform(struct?: RouterIsisRedistributeOutputReference | RouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isis: {
      value: routerIsisRedistributeIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisRedistributeIsisList",
    },
    redist_list: {
      value: cdktf.listMapperHcl(routerIsisRedistributeRedistListStructToHclTerraform, true)(struct!.redistList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisRedistributeRedistListStructList",
    },
    vip_list: {
      value: cdktf.listMapperHcl(routerIsisRedistributeVipListStructToHclTerraform, true)(struct!.vipList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisRedistributeVipListStructList",
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    if (this._redistList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistList = this._redistList?.internalValue;
    }
    if (this._vipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipList = this._vipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._isis.internalValue = undefined;
      this._redistList.internalValue = undefined;
      this._vipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._isis.internalValue = value.isis;
      this._redistList.internalValue = value.redistList;
      this._vipList.internalValue = value.vipList;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new RouterIsisRedistributeIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: RouterIsisRedistributeIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // redist_list - computed: false, optional: true, required: false
  private _redistList = new RouterIsisRedistributeRedistListStructList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterIsisRedistributeRedistListStruct[] | cdktf.IResolvable) {
    this._redistList.internalValue = value;
  }
  public resetRedistList() {
    this._redistList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistListInput() {
    return this._redistList.internalValue;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new RouterIsisRedistributeVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterIsisRedistributeVipListStruct[] | cdktf.IResolvable) {
    this._vipList.internalValue = value;
  }
  public resetVipList() {
    this._vipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipListInput() {
    return this._vipList.internalValue;
  }
}
export interface RouterIsisSetOverloadBitCfgOnStartup {
  /**
  * Time in seconds to advertise ourself as overloaded after reboot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#delay RouterIsis#delay}
  */
  readonly delay?: number;
  /**
  * Let BGP decide when to unset the overload bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#wait_for_bgp RouterIsis#wait_for_bgp}
  */
  readonly waitForBgp?: number;
}

export function routerIsisSetOverloadBitCfgOnStartupToTerraform(struct?: RouterIsisSetOverloadBitCfgOnStartupOutputReference | RouterIsisSetOverloadBitCfgOnStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    wait_for_bgp: cdktf.numberToTerraform(struct!.waitForBgp),
  }
}


export function routerIsisSetOverloadBitCfgOnStartupToHclTerraform(struct?: RouterIsisSetOverloadBitCfgOnStartupOutputReference | RouterIsisSetOverloadBitCfgOnStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_bgp: {
      value: cdktf.numberToHclTerraform(struct!.waitForBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisSetOverloadBitCfgOnStartupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisSetOverloadBitCfgOnStartup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._waitForBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForBgp = this._waitForBgp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisSetOverloadBitCfgOnStartup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delay = undefined;
      this._waitForBgp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delay = value.delay;
      this._waitForBgp = value.waitForBgp;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // wait_for_bgp - computed: false, optional: true, required: false
  private _waitForBgp?: number; 
  public get waitForBgp() {
    return this.getNumberAttribute('wait_for_bgp');
  }
  public set waitForBgp(value: number) {
    this._waitForBgp = value;
  }
  public resetWaitForBgp() {
    this._waitForBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForBgpInput() {
    return this._waitForBgp;
  }
}
export interface RouterIsisSetOverloadBitCfgSuppressCfg {
  /**
  * If overload-bit set, don't advertise IP prefixes learned from other protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#external RouterIsis#external}
  */
  readonly external?: number;
  /**
  * If overload-bit set, don't advertise IP prefixes learned from another ISIS level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#interlevel RouterIsis#interlevel}
  */
  readonly interlevel?: number;
}

export function routerIsisSetOverloadBitCfgSuppressCfgToTerraform(struct?: RouterIsisSetOverloadBitCfgSuppressCfgOutputReference | RouterIsisSetOverloadBitCfgSuppressCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.numberToTerraform(struct!.external),
    interlevel: cdktf.numberToTerraform(struct!.interlevel),
  }
}


export function routerIsisSetOverloadBitCfgSuppressCfgToHclTerraform(struct?: RouterIsisSetOverloadBitCfgSuppressCfgOutputReference | RouterIsisSetOverloadBitCfgSuppressCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.numberToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interlevel: {
      value: cdktf.numberToHclTerraform(struct!.interlevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisSetOverloadBitCfgSuppressCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisSetOverloadBitCfgSuppressCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._interlevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.interlevel = this._interlevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisSetOverloadBitCfgSuppressCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._external = undefined;
      this._interlevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._external = value.external;
      this._interlevel = value.interlevel;
    }
  }

  // external - computed: false, optional: true, required: false
  private _external?: number; 
  public get external() {
    return this.getNumberAttribute('external');
  }
  public set external(value: number) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // interlevel - computed: false, optional: true, required: false
  private _interlevel?: number; 
  public get interlevel() {
    return this.getNumberAttribute('interlevel');
  }
  public set interlevel(value: number) {
    this._interlevel = value;
  }
  public resetInterlevel() {
    this._interlevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interlevelInput() {
    return this._interlevel;
  }
}
export interface RouterIsisSetOverloadBitCfg {
  /**
  * Signal other touers not to use us in SPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#set_overload_bit RouterIsis#set_overload_bit}
  */
  readonly setOverloadBit?: number;
  /**
  * on_startup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#on_startup RouterIsis#on_startup}
  */
  readonly onStartup?: RouterIsisSetOverloadBitCfgOnStartup;
  /**
  * suppress_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#suppress_cfg RouterIsis#suppress_cfg}
  */
  readonly suppressCfg?: RouterIsisSetOverloadBitCfgSuppressCfg;
}

export function routerIsisSetOverloadBitCfgToTerraform(struct?: RouterIsisSetOverloadBitCfgOutputReference | RouterIsisSetOverloadBitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_overload_bit: cdktf.numberToTerraform(struct!.setOverloadBit),
    on_startup: routerIsisSetOverloadBitCfgOnStartupToTerraform(struct!.onStartup),
    suppress_cfg: routerIsisSetOverloadBitCfgSuppressCfgToTerraform(struct!.suppressCfg),
  }
}


export function routerIsisSetOverloadBitCfgToHclTerraform(struct?: RouterIsisSetOverloadBitCfgOutputReference | RouterIsisSetOverloadBitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_overload_bit: {
      value: cdktf.numberToHclTerraform(struct!.setOverloadBit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_startup: {
      value: routerIsisSetOverloadBitCfgOnStartupToHclTerraform(struct!.onStartup),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisSetOverloadBitCfgOnStartupList",
    },
    suppress_cfg: {
      value: routerIsisSetOverloadBitCfgSuppressCfgToHclTerraform(struct!.suppressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisSetOverloadBitCfgSuppressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisSetOverloadBitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisSetOverloadBitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setOverloadBit !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOverloadBit = this._setOverloadBit;
    }
    if (this._onStartup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStartup = this._onStartup?.internalValue;
    }
    if (this._suppressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressCfg = this._suppressCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisSetOverloadBitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._setOverloadBit = undefined;
      this._onStartup.internalValue = undefined;
      this._suppressCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._setOverloadBit = value.setOverloadBit;
      this._onStartup.internalValue = value.onStartup;
      this._suppressCfg.internalValue = value.suppressCfg;
    }
  }

  // set_overload_bit - computed: false, optional: true, required: false
  private _setOverloadBit?: number; 
  public get setOverloadBit() {
    return this.getNumberAttribute('set_overload_bit');
  }
  public set setOverloadBit(value: number) {
    this._setOverloadBit = value;
  }
  public resetSetOverloadBit() {
    this._setOverloadBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitInput() {
    return this._setOverloadBit;
  }

  // on_startup - computed: false, optional: true, required: false
  private _onStartup = new RouterIsisSetOverloadBitCfgOnStartupOutputReference(this, "on_startup");
  public get onStartup() {
    return this._onStartup;
  }
  public putOnStartup(value: RouterIsisSetOverloadBitCfgOnStartup) {
    this._onStartup.internalValue = value;
  }
  public resetOnStartup() {
    this._onStartup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartupInput() {
    return this._onStartup.internalValue;
  }

  // suppress_cfg - computed: false, optional: true, required: false
  private _suppressCfg = new RouterIsisSetOverloadBitCfgSuppressCfgOutputReference(this, "suppress_cfg");
  public get suppressCfg() {
    return this._suppressCfg;
  }
  public putSuppressCfg(value: RouterIsisSetOverloadBitCfgSuppressCfg) {
    this._suppressCfg.internalValue = value;
  }
  public resetSuppressCfg() {
    this._suppressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressCfgInput() {
    return this._suppressCfg.internalValue;
  }
}
export interface RouterIsisSpfIntervalExpListStruct {
  /**
  * 'level-1': Set interval for level 1 only; 'level-2': Set interval for level 2 only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * Maximum Delay between receiving a change to SPF calculation in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#max RouterIsis#max}
  */
  readonly max?: number;
  /**
  * Minimum Delay between receiving a change to SPF calculation in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#min RouterIsis#min}
  */
  readonly min?: number;
}

export function routerIsisSpfIntervalExpListStructToTerraform(struct?: RouterIsisSpfIntervalExpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function routerIsisSpfIntervalExpListStructToHclTerraform(struct?: RouterIsisSpfIntervalExpListStruct | cdktf.IResolvable): any {
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
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisSpfIntervalExpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisSpfIntervalExpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisSpfIntervalExpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class RouterIsisSpfIntervalExpListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisSpfIntervalExpListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisSpfIntervalExpListStructOutputReference {
    return new RouterIsisSpfIntervalExpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisSummaryAddressListStruct {
  /**
  * 'level-1': Summarize into level-1 area; 'level-1-2': Summarize into both area and sub-domain; 'level-2': Summarize into level-2 sub-domain;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#level RouterIsis#level}
  */
  readonly level?: string;
  /**
  * IP network prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#prefix RouterIsis#prefix}
  */
  readonly prefix?: string;
}

export function routerIsisSummaryAddressListStructToTerraform(struct?: RouterIsisSummaryAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function routerIsisSummaryAddressListStructToHclTerraform(struct?: RouterIsisSummaryAddressListStruct | cdktf.IResolvable): any {
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

export class RouterIsisSummaryAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisSummaryAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: RouterIsisSummaryAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._level = value.level;
      this._prefix = value.prefix;
    }
  }

  // level - computed: false, optional: true, required: false
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

  // prefix - computed: false, optional: true, required: false
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

export class RouterIsisSummaryAddressListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIsisSummaryAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisSummaryAddressListStructOutputReference {
    return new RouterIsisSummaryAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis thunder_router_isis}
*/
export class RouterIsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsis to import
  * @param importFromId The id of the existing RouterIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_isis thunder_router_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIsisConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_isis',
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
    this._adjacencyCheck = config.adjacencyCheck;
    this._bfd = config.bfd;
    this._defaultInformation = config.defaultInformation;
    this._id = config.id;
    this._ignoreLspErrors = config.ignoreLspErrors;
    this._isType = config.isType;
    this._lspRefreshInterval = config.lspRefreshInterval;
    this._maxLspLifetime = config.maxLspLifetime;
    this._tag = config.tag;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._addressFamily.internalValue = config.addressFamily;
    this._areaPasswordCfg.internalValue = config.areaPasswordCfg;
    this._authentication.internalValue = config.authentication;
    this._distanceList.internalValue = config.distanceList;
    this._domainPasswordCfg.internalValue = config.domainPasswordCfg;
    this._haStandbyExtraCost.internalValue = config.haStandbyExtraCost;
    this._logAdjacencyChangesCfg.internalValue = config.logAdjacencyChangesCfg;
    this._lspGenIntervalList.internalValue = config.lspGenIntervalList;
    this._metricStyleList.internalValue = config.metricStyleList;
    this._netList.internalValue = config.netList;
    this._passiveInterfaceList.internalValue = config.passiveInterfaceList;
    this._protocolList.internalValue = config.protocolList;
    this._redistribute.internalValue = config.redistribute;
    this._setOverloadBitCfg.internalValue = config.setOverloadBitCfg;
    this._spfIntervalExpList.internalValue = config.spfIntervalExpList;
    this._summaryAddressList.internalValue = config.summaryAddressList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjacency_check - computed: false, optional: true, required: false
  private _adjacencyCheck?: number; 
  public get adjacencyCheck() {
    return this.getNumberAttribute('adjacency_check');
  }
  public set adjacencyCheck(value: number) {
    this._adjacencyCheck = value;
  }
  public resetAdjacencyCheck() {
    this._adjacencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacencyCheckInput() {
    return this._adjacencyCheck;
  }

  // bfd - computed: false, optional: true, required: false
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

  // default_information - computed: false, optional: true, required: false
  private _defaultInformation?: string; 
  public get defaultInformation() {
    return this.getStringAttribute('default_information');
  }
  public set defaultInformation(value: string) {
    this._defaultInformation = value;
  }
  public resetDefaultInformation() {
    this._defaultInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationInput() {
    return this._defaultInformation;
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

  // ignore_lsp_errors - computed: false, optional: true, required: false
  private _ignoreLspErrors?: number; 
  public get ignoreLspErrors() {
    return this.getNumberAttribute('ignore_lsp_errors');
  }
  public set ignoreLspErrors(value: number) {
    this._ignoreLspErrors = value;
  }
  public resetIgnoreLspErrors() {
    this._ignoreLspErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLspErrorsInput() {
    return this._ignoreLspErrors;
  }

  // is_type - computed: false, optional: true, required: false
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

  // lsp_refresh_interval - computed: false, optional: true, required: false
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

  // max_lsp_lifetime - computed: false, optional: true, required: false
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

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // address_family - computed: false, optional: true, required: false
  private _addressFamily = new RouterIsisAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }
  public putAddressFamily(value: RouterIsisAddressFamily) {
    this._addressFamily.internalValue = value;
  }
  public resetAddressFamily() {
    this._addressFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily.internalValue;
  }

  // area_password_cfg - computed: false, optional: true, required: false
  private _areaPasswordCfg = new RouterIsisAreaPasswordCfgOutputReference(this, "area_password_cfg");
  public get areaPasswordCfg() {
    return this._areaPasswordCfg;
  }
  public putAreaPasswordCfg(value: RouterIsisAreaPasswordCfg) {
    this._areaPasswordCfg.internalValue = value;
  }
  public resetAreaPasswordCfg() {
    this._areaPasswordCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPasswordCfgInput() {
    return this._areaPasswordCfg.internalValue;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new RouterIsisAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: RouterIsisAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // distance_list - computed: false, optional: true, required: false
  private _distanceList = new RouterIsisDistanceListStructList(this, "distance_list", false);
  public get distanceList() {
    return this._distanceList;
  }
  public putDistanceList(value: RouterIsisDistanceListStruct[] | cdktf.IResolvable) {
    this._distanceList.internalValue = value;
  }
  public resetDistanceList() {
    this._distanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceListInput() {
    return this._distanceList.internalValue;
  }

  // domain_password_cfg - computed: false, optional: true, required: false
  private _domainPasswordCfg = new RouterIsisDomainPasswordCfgOutputReference(this, "domain_password_cfg");
  public get domainPasswordCfg() {
    return this._domainPasswordCfg;
  }
  public putDomainPasswordCfg(value: RouterIsisDomainPasswordCfg) {
    this._domainPasswordCfg.internalValue = value;
  }
  public resetDomainPasswordCfg() {
    this._domainPasswordCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPasswordCfgInput() {
    return this._domainPasswordCfg.internalValue;
  }

  // ha_standby_extra_cost - computed: false, optional: true, required: false
  private _haStandbyExtraCost = new RouterIsisHaStandbyExtraCostList(this, "ha_standby_extra_cost", false);
  public get haStandbyExtraCost() {
    return this._haStandbyExtraCost;
  }
  public putHaStandbyExtraCost(value: RouterIsisHaStandbyExtraCost[] | cdktf.IResolvable) {
    this._haStandbyExtraCost.internalValue = value;
  }
  public resetHaStandbyExtraCost() {
    this._haStandbyExtraCost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStandbyExtraCostInput() {
    return this._haStandbyExtraCost.internalValue;
  }

  // log_adjacency_changes_cfg - computed: false, optional: true, required: false
  private _logAdjacencyChangesCfg = new RouterIsisLogAdjacencyChangesCfgOutputReference(this, "log_adjacency_changes_cfg");
  public get logAdjacencyChangesCfg() {
    return this._logAdjacencyChangesCfg;
  }
  public putLogAdjacencyChangesCfg(value: RouterIsisLogAdjacencyChangesCfg) {
    this._logAdjacencyChangesCfg.internalValue = value;
  }
  public resetLogAdjacencyChangesCfg() {
    this._logAdjacencyChangesCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesCfgInput() {
    return this._logAdjacencyChangesCfg.internalValue;
  }

  // lsp_gen_interval_list - computed: false, optional: true, required: false
  private _lspGenIntervalList = new RouterIsisLspGenIntervalListStructList(this, "lsp_gen_interval_list", false);
  public get lspGenIntervalList() {
    return this._lspGenIntervalList;
  }
  public putLspGenIntervalList(value: RouterIsisLspGenIntervalListStruct[] | cdktf.IResolvable) {
    this._lspGenIntervalList.internalValue = value;
  }
  public resetLspGenIntervalList() {
    this._lspGenIntervalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenIntervalListInput() {
    return this._lspGenIntervalList.internalValue;
  }

  // metric_style_list - computed: false, optional: true, required: false
  private _metricStyleList = new RouterIsisMetricStyleListStructList(this, "metric_style_list", false);
  public get metricStyleList() {
    return this._metricStyleList;
  }
  public putMetricStyleList(value: RouterIsisMetricStyleListStruct[] | cdktf.IResolvable) {
    this._metricStyleList.internalValue = value;
  }
  public resetMetricStyleList() {
    this._metricStyleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleListInput() {
    return this._metricStyleList.internalValue;
  }

  // net_list - computed: false, optional: true, required: false
  private _netList = new RouterIsisNetListStructList(this, "net_list", false);
  public get netList() {
    return this._netList;
  }
  public putNetList(value: RouterIsisNetListStruct[] | cdktf.IResolvable) {
    this._netList.internalValue = value;
  }
  public resetNetList() {
    this._netList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netListInput() {
    return this._netList.internalValue;
  }

  // passive_interface_list - computed: false, optional: true, required: false
  private _passiveInterfaceList = new RouterIsisPassiveInterfaceListStructList(this, "passive_interface_list", false);
  public get passiveInterfaceList() {
    return this._passiveInterfaceList;
  }
  public putPassiveInterfaceList(value: RouterIsisPassiveInterfaceListStruct[] | cdktf.IResolvable) {
    this._passiveInterfaceList.internalValue = value;
  }
  public resetPassiveInterfaceList() {
    this._passiveInterfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceListInput() {
    return this._passiveInterfaceList.internalValue;
  }

  // protocol_list - computed: false, optional: true, required: false
  private _protocolList = new RouterIsisProtocolListStructList(this, "protocol_list", false);
  public get protocolList() {
    return this._protocolList;
  }
  public putProtocolList(value: RouterIsisProtocolListStruct[] | cdktf.IResolvable) {
    this._protocolList.internalValue = value;
  }
  public resetProtocolList() {
    this._protocolList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolListInput() {
    return this._protocolList.internalValue;
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

  // set_overload_bit_cfg - computed: false, optional: true, required: false
  private _setOverloadBitCfg = new RouterIsisSetOverloadBitCfgOutputReference(this, "set_overload_bit_cfg");
  public get setOverloadBitCfg() {
    return this._setOverloadBitCfg;
  }
  public putSetOverloadBitCfg(value: RouterIsisSetOverloadBitCfg) {
    this._setOverloadBitCfg.internalValue = value;
  }
  public resetSetOverloadBitCfg() {
    this._setOverloadBitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitCfgInput() {
    return this._setOverloadBitCfg.internalValue;
  }

  // spf_interval_exp_list - computed: false, optional: true, required: false
  private _spfIntervalExpList = new RouterIsisSpfIntervalExpListStructList(this, "spf_interval_exp_list", false);
  public get spfIntervalExpList() {
    return this._spfIntervalExpList;
  }
  public putSpfIntervalExpList(value: RouterIsisSpfIntervalExpListStruct[] | cdktf.IResolvable) {
    this._spfIntervalExpList.internalValue = value;
  }
  public resetSpfIntervalExpList() {
    this._spfIntervalExpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalExpListInput() {
    return this._spfIntervalExpList.internalValue;
  }

  // summary_address_list - computed: false, optional: true, required: false
  private _summaryAddressList = new RouterIsisSummaryAddressListStructList(this, "summary_address_list", false);
  public get summaryAddressList() {
    return this._summaryAddressList;
  }
  public putSummaryAddressList(value: RouterIsisSummaryAddressListStruct[] | cdktf.IResolvable) {
    this._summaryAddressList.internalValue = value;
  }
  public resetSummaryAddressList() {
    this._summaryAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressListInput() {
    return this._summaryAddressList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjacency_check: cdktf.numberToTerraform(this._adjacencyCheck),
      bfd: cdktf.stringToTerraform(this._bfd),
      default_information: cdktf.stringToTerraform(this._defaultInformation),
      id: cdktf.stringToTerraform(this._id),
      ignore_lsp_errors: cdktf.numberToTerraform(this._ignoreLspErrors),
      is_type: cdktf.stringToTerraform(this._isType),
      lsp_refresh_interval: cdktf.numberToTerraform(this._lspRefreshInterval),
      max_lsp_lifetime: cdktf.numberToTerraform(this._maxLspLifetime),
      tag: cdktf.stringToTerraform(this._tag),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      address_family: routerIsisAddressFamilyToTerraform(this._addressFamily.internalValue),
      area_password_cfg: routerIsisAreaPasswordCfgToTerraform(this._areaPasswordCfg.internalValue),
      authentication: routerIsisAuthenticationToTerraform(this._authentication.internalValue),
      distance_list: cdktf.listMapper(routerIsisDistanceListStructToTerraform, true)(this._distanceList.internalValue),
      domain_password_cfg: routerIsisDomainPasswordCfgToTerraform(this._domainPasswordCfg.internalValue),
      ha_standby_extra_cost: cdktf.listMapper(routerIsisHaStandbyExtraCostToTerraform, true)(this._haStandbyExtraCost.internalValue),
      log_adjacency_changes_cfg: routerIsisLogAdjacencyChangesCfgToTerraform(this._logAdjacencyChangesCfg.internalValue),
      lsp_gen_interval_list: cdktf.listMapper(routerIsisLspGenIntervalListStructToTerraform, true)(this._lspGenIntervalList.internalValue),
      metric_style_list: cdktf.listMapper(routerIsisMetricStyleListStructToTerraform, true)(this._metricStyleList.internalValue),
      net_list: cdktf.listMapper(routerIsisNetListStructToTerraform, true)(this._netList.internalValue),
      passive_interface_list: cdktf.listMapper(routerIsisPassiveInterfaceListStructToTerraform, true)(this._passiveInterfaceList.internalValue),
      protocol_list: cdktf.listMapper(routerIsisProtocolListStructToTerraform, true)(this._protocolList.internalValue),
      redistribute: routerIsisRedistributeToTerraform(this._redistribute.internalValue),
      set_overload_bit_cfg: routerIsisSetOverloadBitCfgToTerraform(this._setOverloadBitCfg.internalValue),
      spf_interval_exp_list: cdktf.listMapper(routerIsisSpfIntervalExpListStructToTerraform, true)(this._spfIntervalExpList.internalValue),
      summary_address_list: cdktf.listMapper(routerIsisSummaryAddressListStructToTerraform, true)(this._summaryAddressList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjacency_check: {
        value: cdktf.numberToHclTerraform(this._adjacencyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information: {
        value: cdktf.stringToHclTerraform(this._defaultInformation),
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
        value: cdktf.numberToHclTerraform(this._ignoreLspErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_type: {
        value: cdktf.stringToHclTerraform(this._isType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_family: {
        value: routerIsisAddressFamilyToHclTerraform(this._addressFamily.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyList",
      },
      area_password_cfg: {
        value: routerIsisAreaPasswordCfgToHclTerraform(this._areaPasswordCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAreaPasswordCfgList",
      },
      authentication: {
        value: routerIsisAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAuthenticationList",
      },
      distance_list: {
        value: cdktf.listMapperHcl(routerIsisDistanceListStructToHclTerraform, true)(this._distanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisDistanceListStructList",
      },
      domain_password_cfg: {
        value: routerIsisDomainPasswordCfgToHclTerraform(this._domainPasswordCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisDomainPasswordCfgList",
      },
      ha_standby_extra_cost: {
        value: cdktf.listMapperHcl(routerIsisHaStandbyExtraCostToHclTerraform, true)(this._haStandbyExtraCost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisHaStandbyExtraCostList",
      },
      log_adjacency_changes_cfg: {
        value: routerIsisLogAdjacencyChangesCfgToHclTerraform(this._logAdjacencyChangesCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisLogAdjacencyChangesCfgList",
      },
      lsp_gen_interval_list: {
        value: cdktf.listMapperHcl(routerIsisLspGenIntervalListStructToHclTerraform, true)(this._lspGenIntervalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisLspGenIntervalListStructList",
      },
      metric_style_list: {
        value: cdktf.listMapperHcl(routerIsisMetricStyleListStructToHclTerraform, true)(this._metricStyleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisMetricStyleListStructList",
      },
      net_list: {
        value: cdktf.listMapperHcl(routerIsisNetListStructToHclTerraform, true)(this._netList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisNetListStructList",
      },
      passive_interface_list: {
        value: cdktf.listMapperHcl(routerIsisPassiveInterfaceListStructToHclTerraform, true)(this._passiveInterfaceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisPassiveInterfaceListStructList",
      },
      protocol_list: {
        value: cdktf.listMapperHcl(routerIsisProtocolListStructToHclTerraform, true)(this._protocolList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisProtocolListStructList",
      },
      redistribute: {
        value: routerIsisRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisRedistributeList",
      },
      set_overload_bit_cfg: {
        value: routerIsisSetOverloadBitCfgToHclTerraform(this._setOverloadBitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisSetOverloadBitCfgList",
      },
      spf_interval_exp_list: {
        value: cdktf.listMapperHcl(routerIsisSpfIntervalExpListStructToHclTerraform, true)(this._spfIntervalExpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisSpfIntervalExpListStructList",
      },
      summary_address_list: {
        value: cdktf.listMapperHcl(routerIsisSummaryAddressListStructToHclTerraform, true)(this._summaryAddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisSummaryAddressListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
