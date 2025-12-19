// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisAddressFamilyIpv6RedistributeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#id RouterIsisAddressFamilyIpv6RedistributeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#tag RouterIsisAddressFamilyIpv6RedistributeA#tag}
  */
  readonly tag: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#uuid RouterIsisAddressFamilyIpv6RedistributeA#uuid}
  */
  readonly uuid?: string;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#isis RouterIsisAddressFamilyIpv6RedistributeA#isis}
  */
  readonly isis?: RouterIsisAddressFamilyIpv6RedistributeIsisA;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#redist_list RouterIsisAddressFamilyIpv6RedistributeA#redist_list}
  */
  readonly redistList?: RouterIsisAddressFamilyIpv6RedistributeRedistListStructA[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#vip_list RouterIsisAddressFamilyIpv6RedistributeA#vip_list}
  */
  readonly vipList?: RouterIsisAddressFamilyIpv6RedistributeVipListStructA[] | cdktf.IResolvable;
}
export interface RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromInto1A {
  /**
  * Select routes (Access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#distribute_list RouterIsisAddressFamilyIpv6RedistributeA#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#level_2 RouterIsisAddressFamilyIpv6RedistributeA#level_2}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#into_1 RouterIsisAddressFamilyIpv6RedistributeA#into_1}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#distribute_list RouterIsisAddressFamilyIpv6RedistributeA#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Inter-area routes into level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#level_1 RouterIsisAddressFamilyIpv6RedistributeA#level_1}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#into_2 RouterIsisAddressFamilyIpv6RedistributeA#into_2}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#level_1_from RouterIsisAddressFamilyIpv6RedistributeA#level_1_from}
  */
  readonly level1From?: RouterIsisAddressFamilyIpv6RedistributeIsisLevel1FromA;
  /**
  * level_2_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#level_2_from RouterIsisAddressFamilyIpv6RedistributeA#level_2_from}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#level RouterIsisAddressFamilyIpv6RedistributeA#level}
  */
  readonly level?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#metric RouterIsisAddressFamilyIpv6RedistributeA#metric}
  */
  readonly metric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#metric_type RouterIsisAddressFamilyIpv6RedistributeA#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#route_map RouterIsisAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'ip-nat': IP NAT; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'public-ip': Public IPv6/IPv4 Prefixes; 'nat64': NAT64 Prefix; 'ospf': Open Shortest Path First (OSPF); 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#type RouterIsisAddressFamilyIpv6RedistributeA#type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#vip_level RouterIsisAddressFamilyIpv6RedistributeA#vip_level}
  */
  readonly vipLevel?: string;
  /**
  * Metric for redistributed routes (IS-IS default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#vip_metric RouterIsisAddressFamilyIpv6RedistributeA#vip_metric}
  */
  readonly vipMetric?: number;
  /**
  * 'external': Set IS-IS External metric type; 'internal': Set IS-IS Internal metric type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#vip_metric_type RouterIsisAddressFamilyIpv6RedistributeA#vip_metric_type}
  */
  readonly vipMetricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#vip_route_map RouterIsisAddressFamilyIpv6RedistributeA#vip_route_map}
  */
  readonly vipRouteMap?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#vip_type RouterIsisAddressFamilyIpv6RedistributeA#vip_type}
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute thunder_router_isis_address_family_ipv6_redistribute}
*/
export class RouterIsisAddressFamilyIpv6RedistributeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_isis_address_family_ipv6_redistribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsisAddressFamilyIpv6RedistributeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsisAddressFamilyIpv6RedistributeA to import
  * @param importFromId The id of the existing RouterIsisAddressFamilyIpv6RedistributeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsisAddressFamilyIpv6RedistributeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_isis_address_family_ipv6_redistribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_isis_address_family_ipv6_redistribute thunder_router_isis_address_family_ipv6_redistribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisAddressFamilyIpv6RedistributeAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIsisAddressFamilyIpv6RedistributeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_isis_address_family_ipv6_redistribute',
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
    this._tag = config.tag;
    this._uuid = config.uuid;
    this._isis.internalValue = config.isis;
    this._redistList.internalValue = config.redistList;
    this._vipList.internalValue = config.vipList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tag: cdktf.stringToTerraform(this._tag),
      uuid: cdktf.stringToTerraform(this._uuid),
      isis: routerIsisAddressFamilyIpv6RedistributeIsisAToTerraform(this._isis.internalValue),
      redist_list: cdktf.listMapper(routerIsisAddressFamilyIpv6RedistributeRedistListStructAToTerraform, true)(this._redistList.internalValue),
      vip_list: cdktf.listMapper(routerIsisAddressFamilyIpv6RedistributeVipListStructAToTerraform, true)(this._vipList.internalValue),
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
      isis: {
        value: routerIsisAddressFamilyIpv6RedistributeIsisAToHclTerraform(this._isis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyIpv6RedistributeIsisAList",
      },
      redist_list: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6RedistributeRedistListStructAToHclTerraform, true)(this._redistList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyIpv6RedistributeRedistListStructAList",
      },
      vip_list: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyIpv6RedistributeVipListStructAToHclTerraform, true)(this._vipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyIpv6RedistributeVipListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
