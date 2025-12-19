// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisAddressFamilyIpv6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Check ISIS neighbor protocol support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#adjacency_check RouterIsisAddressFamilyIpv6A#adjacency_check}
  */
  readonly adjacencyCheck?: number;
  /**
  * 'originate': Distribute a default route;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#default_information RouterIsisAddressFamilyIpv6A#default_information}
  */
  readonly defaultInformation?: string;
  /**
  * ISIS Administrative Distance (Distance value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#distance RouterIsisAddressFamilyIpv6A#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#id RouterIsisAddressFamilyIpv6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#tag RouterIsisAddressFamilyIpv6A#tag}
  */
  readonly tag: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#uuid RouterIsisAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * multi_topology_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#multi_topology_cfg RouterIsisAddressFamilyIpv6A#multi_topology_cfg}
  */
  readonly multiTopologyCfg?: RouterIsisAddressFamilyIpv6MultiTopologyCfgA;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#redistribute RouterIsisAddressFamilyIpv6A#redistribute}
  */
  readonly redistribute?: RouterIsisAddressFamilyIpv6RedistributeA;
  /**
  * summary_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#summary_prefix_list RouterIsisAddressFamilyIpv6A#summary_prefix_list}
  */
  readonly summaryPrefixList?: RouterIsisAddressFamilyIpv6SummaryPrefixListStructA[] | cdktf.IResolvable;
}
export interface RouterIsisAddressFamilyIpv6MultiTopologyCfgA {
  /**
  * 'level-1': Level-1 only; 'level-1-2': Level-1-2; 'level-2': Level-2 only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level RouterIsisAddressFamilyIpv6A#level}
  */
  readonly level?: string;
  /**
  * Accept and generate both IS-IS IPv6 and Multi-topology IPV6 TLVs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level_transition RouterIsisAddressFamilyIpv6A#level_transition}
  */
  readonly levelTransition?: number;
  /**
  * Enable multi-topology mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#multi_topology RouterIsisAddressFamilyIpv6A#multi_topology}
  */
  readonly multiTopology?: number;
  /**
  * Accept and generate both IS-IS IPv6 and Multi-topology IPV6 TLVs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#transition RouterIsisAddressFamilyIpv6A#transition}
  */
  readonly transition?: number;
}

export function routerIsisAddressFamilyIpv6MultiTopologyCfgAToTerraform(struct?: RouterIsisAddressFamilyIpv6MultiTopologyCfgAOutputReference | RouterIsisAddressFamilyIpv6MultiTopologyCfgA): any {
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


export function routerIsisAddressFamilyIpv6MultiTopologyCfgAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6MultiTopologyCfgAOutputReference | RouterIsisAddressFamilyIpv6MultiTopologyCfgA): any {
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

export class RouterIsisAddressFamilyIpv6MultiTopologyCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6MultiTopologyCfgA | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6MultiTopologyCfgA | undefined) {
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
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A {
  /**
  * Select routes (Access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#distribute_list RouterIsisAddressFamilyIpv6A#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level_2 RouterIsisAddressFamilyIpv6A#level_2}
  */
  readonly level2?: number;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    level_2: cdktf.numberToTerraform(struct!.level2),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A): any {
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

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A | undefined) {
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
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA {
  /**
  * into_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#into_1 RouterIsisAddressFamilyIpv6A#into_1}
  */
  readonly into1?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromAToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromAOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    into_1: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AToTerraform(struct!.into1),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromAOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    into_1: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AToHclTerraform(struct!.into1),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._into1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.into1 = this._into1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA | undefined) {
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
  private _into1 = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1AOutputReference(this, "into_1");
  public get into1() {
    return this._into1;
  }
  public putInto1(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A) {
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
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2A {
  /**
  * Select routes (Access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#distribute_list RouterIsisAddressFamilyIpv6A#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level_1 RouterIsisAddressFamilyIpv6A#level_1}
  */
  readonly level1?: number;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    level_1: cdktf.numberToTerraform(struct!.level1),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2A): any {
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

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2A | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2A | undefined) {
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
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromA {
  /**
  * into_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#into_2 RouterIsisAddressFamilyIpv6A#into_2}
  */
  readonly into2?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2A;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromAToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromAOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    into_2: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AToTerraform(struct!.into2),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromAOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    into_2: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AToHclTerraform(struct!.into2),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._into2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.into2 = this._into2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromA | undefined) {
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
  private _into2 = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2AOutputReference(this, "into_2");
  public get into2() {
    return this._into2;
  }
  public putInto2(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromInto2A) {
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
export interface RouterIsisAddressFamilyIpv6RedistributeIsisA {
  /**
  * level_1_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level_1_from RouterIsisAddressFamilyIpv6A#level_1_from}
  */
  readonly level1From?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA;
  /**
  * level_2_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level_2_from RouterIsisAddressFamilyIpv6A#level_2_from}
  */
  readonly level2From?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromA;
}

export function routerIsisAddressFamilyIpv6RedistributeIsisAToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisAOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_1_from: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromAToTerraform(struct!.level1From),
    level_2_from: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromAToTerraform(struct!.level2From),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeIsisAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeIsisAOutputReference | RouterIsisAddressFamilyIpv6RedistributeIsisA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_1_from: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel1FromAToHclTerraform(struct!.level1From),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromAList",
    },
    level_2_from: {
      value: routerIsisAddressFamilyIpv6RedistributeIsisLevel2FromAToHclTerraform(struct!.level2From),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeIsisAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeIsisA | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeIsisA | undefined) {
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
  private _level1From = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromAOutputReference(this, "level_1_from");
  public get level1From() {
    return this._level1From;
  }
  public putLevel1From(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA) {
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
  private _level2From = new RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromAOutputReference(this, "level_2_from");
  public get level2From() {
    return this._level2From;
  }
  public putLevel2From(value: RouterIsisAddressFamilyIpv6RedistributeIsisLevel2FromA) {
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
export interface RouterIsisAddressFamilyIpv6RedistributeRedistListStructA {
  /**
  * 'level-1': IS-IS level-1 routes only; 'level-1-2': IS-IS level-1 and level-2 routes; 'level-2': IS-IS level-2 routes only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level RouterIsisAddressFamilyIpv6A#level}
  */
  readonly level?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#metric RouterIsisAddressFamilyIpv6A#metric}
  */
  readonly metric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#metric_type RouterIsisAddressFamilyIpv6A#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#route_map RouterIsisAddressFamilyIpv6A#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'ip-nat': IP NAT; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'public-ip': Public IPv6/IPv4 Prefixes; 'nat64': NAT64 Prefix; 'ospf': Open Shortest Path First (OSPF); 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#type RouterIsisAddressFamilyIpv6A#type}
  */
  readonly type?: string;
}

export function routerIsisAddressFamilyIpv6RedistributeRedistListStructAToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeRedistListStructA | cdktf.IResolvable): any {
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


export function routerIsisAddressFamilyIpv6RedistributeRedistListStructAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeRedistListStructA | cdktf.IResolvable): any {
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

export class RouterIsisAddressFamilyIpv6RedistributeRedistListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeRedistListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeRedistListStructA | cdktf.IResolvable | undefined) {
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

export class RouterIsisAddressFamilyIpv6RedistributeRedistListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyIpv6RedistributeRedistListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyIpv6RedistributeRedistListStructAOutputReference {
    return new RouterIsisAddressFamilyIpv6RedistributeRedistListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeVipListStructA {
  /**
  * 'level-1': IS-IS level-1 routes only; 'level-1-2': IS-IS level-1 and level-2 routes; 'level-2': IS-IS level-2 routes only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#vip_level RouterIsisAddressFamilyIpv6A#vip_level}
  */
  readonly vipLevel?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#vip_metric RouterIsisAddressFamilyIpv6A#vip_metric}
  */
  readonly vipMetric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#vip_metric_type RouterIsisAddressFamilyIpv6A#vip_metric_type}
  */
  readonly vipMetricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#vip_route_map RouterIsisAddressFamilyIpv6A#vip_route_map}
  */
  readonly vipRouteMap?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#vip_type RouterIsisAddressFamilyIpv6A#vip_type}
  */
  readonly vipType?: string;
}

export function routerIsisAddressFamilyIpv6RedistributeVipListStructAToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeVipListStructA | cdktf.IResolvable): any {
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


export function routerIsisAddressFamilyIpv6RedistributeVipListStructAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeVipListStructA | cdktf.IResolvable): any {
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

export class RouterIsisAddressFamilyIpv6RedistributeVipListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeVipListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeVipListStructA | cdktf.IResolvable | undefined) {
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

export class RouterIsisAddressFamilyIpv6RedistributeVipListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyIpv6RedistributeVipListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyIpv6RedistributeVipListStructAOutputReference {
    return new RouterIsisAddressFamilyIpv6RedistributeVipListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyIpv6RedistributeA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#uuid RouterIsisAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#isis RouterIsisAddressFamilyIpv6A#isis}
  */
  readonly isis?: RouterIsisAddressFamilyIpv6RedistributeIsisA;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#redist_list RouterIsisAddressFamilyIpv6A#redist_list}
  */
  readonly redistList?: RouterIsisAddressFamilyIpv6RedistributeRedistListStructA[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#vip_list RouterIsisAddressFamilyIpv6A#vip_list}
  */
  readonly vipList?: RouterIsisAddressFamilyIpv6RedistributeVipListStructA[] | cdktf.IResolvable;
}

export function routerIsisAddressFamilyIpv6RedistributeAToTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeAOutputReference | RouterIsisAddressFamilyIpv6RedistributeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    isis: routerIsisAddressFamilyIpv6RedistributeIsisAToTerraform(struct!.isis),
    redist_list: cdktf.listMapper(routerIsisAddressFamilyIpv6RedistributeRedistListStructAToTerraform, true)(struct!.redistList),
    vip_list: cdktf.listMapper(routerIsisAddressFamilyIpv6RedistributeVipListStructAToTerraform, true)(struct!.vipList),
  }
}


export function routerIsisAddressFamilyIpv6RedistributeAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6RedistributeAOutputReference | RouterIsisAddressFamilyIpv6RedistributeA): any {
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
      value: routerIsisAddressFamilyIpv6RedistributeIsisAToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisAList",
    },
    redist_list: {
      value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6RedistributeRedistListStructAToHclTerraform, true)(struct!.redistList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeRedistListStructAList",
    },
    vip_list: {
      value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6RedistributeVipListStructAToHclTerraform, true)(struct!.vipList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilyIpv6RedistributeVipListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyIpv6RedistributeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIsisAddressFamilyIpv6RedistributeA | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6RedistributeA | undefined) {
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
  private _isis = new RouterIsisAddressFamilyIpv6RedistributeIsisAOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: RouterIsisAddressFamilyIpv6RedistributeIsisA) {
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
  private _redistList = new RouterIsisAddressFamilyIpv6RedistributeRedistListStructAList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterIsisAddressFamilyIpv6RedistributeRedistListStructA[] | cdktf.IResolvable) {
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
  private _vipList = new RouterIsisAddressFamilyIpv6RedistributeVipListStructAList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterIsisAddressFamilyIpv6RedistributeVipListStructA[] | cdktf.IResolvable) {
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
export interface RouterIsisAddressFamilyIpv6SummaryPrefixListStructA {
  /**
  * 'level-1': Summarize into level-1 area; 'level-1-2': Summarize into both area and sub-domain; 'level-2': Summarize into level-2 sub-domain;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#level RouterIsisAddressFamilyIpv6A#level}
  */
  readonly level?: string;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#prefix RouterIsisAddressFamilyIpv6A#prefix}
  */
  readonly prefix?: string;
}

export function routerIsisAddressFamilyIpv6SummaryPrefixListStructAToTerraform(struct?: RouterIsisAddressFamilyIpv6SummaryPrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function routerIsisAddressFamilyIpv6SummaryPrefixListStructAToHclTerraform(struct?: RouterIsisAddressFamilyIpv6SummaryPrefixListStructA | cdktf.IResolvable): any {
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

export class RouterIsisAddressFamilyIpv6SummaryPrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyIpv6SummaryPrefixListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIsisAddressFamilyIpv6SummaryPrefixListStructA | cdktf.IResolvable | undefined) {
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

export class RouterIsisAddressFamilyIpv6SummaryPrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyIpv6SummaryPrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyIpv6SummaryPrefixListStructAOutputReference {
    return new RouterIsisAddressFamilyIpv6SummaryPrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6 thunder_router_isis_address_family_ipv6}
*/
export class RouterIsisAddressFamilyIpv6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_isis_address_family_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsisAddressFamilyIpv6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsisAddressFamilyIpv6A to import
  * @param importFromId The id of the existing RouterIsisAddressFamilyIpv6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsisAddressFamilyIpv6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_isis_address_family_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6 thunder_router_isis_address_family_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisAddressFamilyIpv6AConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIsisAddressFamilyIpv6AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_isis_address_family_ipv6',
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
    this._adjacencyCheck = config.adjacencyCheck;
    this._defaultInformation = config.defaultInformation;
    this._distance = config.distance;
    this._id = config.id;
    this._tag = config.tag;
    this._uuid = config.uuid;
    this._multiTopologyCfg.internalValue = config.multiTopologyCfg;
    this._redistribute.internalValue = config.redistribute;
    this._summaryPrefixList.internalValue = config.summaryPrefixList;
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
  private _multiTopologyCfg = new RouterIsisAddressFamilyIpv6MultiTopologyCfgAOutputReference(this, "multi_topology_cfg");
  public get multiTopologyCfg() {
    return this._multiTopologyCfg;
  }
  public putMultiTopologyCfg(value: RouterIsisAddressFamilyIpv6MultiTopologyCfgA) {
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
  private _redistribute = new RouterIsisAddressFamilyIpv6RedistributeAOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterIsisAddressFamilyIpv6RedistributeA) {
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
  private _summaryPrefixList = new RouterIsisAddressFamilyIpv6SummaryPrefixListStructAList(this, "summary_prefix_list", false);
  public get summaryPrefixList() {
    return this._summaryPrefixList;
  }
  public putSummaryPrefixList(value: RouterIsisAddressFamilyIpv6SummaryPrefixListStructA[] | cdktf.IResolvable) {
    this._summaryPrefixList.internalValue = value;
  }
  public resetSummaryPrefixList() {
    this._summaryPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryPrefixListInput() {
    return this._summaryPrefixList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjacency_check: cdktf.numberToTerraform(this._adjacencyCheck),
      default_information: cdktf.stringToTerraform(this._defaultInformation),
      distance: cdktf.numberToTerraform(this._distance),
      id: cdktf.stringToTerraform(this._id),
      tag: cdktf.stringToTerraform(this._tag),
      uuid: cdktf.stringToTerraform(this._uuid),
      multi_topology_cfg: routerIsisAddressFamilyIpv6MultiTopologyCfgAToTerraform(this._multiTopologyCfg.internalValue),
      redistribute: routerIsisAddressFamilyIpv6RedistributeAToTerraform(this._redistribute.internalValue),
      summary_prefix_list: cdktf.listMapper(routerIsisAddressFamilyIpv6SummaryPrefixListStructAToTerraform, true)(this._summaryPrefixList.internalValue),
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
      default_information: {
        value: cdktf.stringToHclTerraform(this._defaultInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
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
      multi_topology_cfg: {
        value: routerIsisAddressFamilyIpv6MultiTopologyCfgAToHclTerraform(this._multiTopologyCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyIpv6MultiTopologyCfgAList",
      },
      redistribute: {
        value: routerIsisAddressFamilyIpv6RedistributeAToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyIpv6RedistributeAList",
      },
      summary_prefix_list: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6SummaryPrefixListStructAToHclTerraform, true)(this._summaryPrefixList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyIpv6SummaryPrefixListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
