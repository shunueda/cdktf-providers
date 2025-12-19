// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteMapMatchAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#action RouteMapMatchA#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#id RouteMapMatchA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#sequence RouteMapMatchA#sequence}
  */
  readonly sequence: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#uuid RouteMapMatchA#uuid}
  */
  readonly uuid?: string;
  /**
  * as_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#as_path RouteMapMatchA#as_path}
  */
  readonly asPath?: RouteMapMatchAsPathA;
  /**
  * community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#community RouteMapMatchA#community}
  */
  readonly community?: RouteMapMatchCommunityA;
  /**
  * extcommunity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#extcommunity RouteMapMatchA#extcommunity}
  */
  readonly extcommunity?: RouteMapMatchExtcommunityA;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#group RouteMapMatchA#group}
  */
  readonly group?: RouteMapMatchGroupA;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#interface RouteMapMatchA#interface}
  */
  readonly interface?: RouteMapMatchInterfaceA;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#ip RouteMapMatchA#ip}
  */
  readonly ip?: RouteMapMatchIpA;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#ipv6 RouteMapMatchA#ipv6}
  */
  readonly ipv6?: RouteMapMatchIpv6A;
  /**
  * large_community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#large_community RouteMapMatchA#large_community}
  */
  readonly largeCommunity?: RouteMapMatchLargeCommunityA;
  /**
  * local_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#local_preference RouteMapMatchA#local_preference}
  */
  readonly localPreference?: RouteMapMatchLocalPreferenceA;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#metric RouteMapMatchA#metric}
  */
  readonly metric?: RouteMapMatchMetricA;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#origin RouteMapMatchA#origin}
  */
  readonly origin?: RouteMapMatchOriginA;
  /**
  * route_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#route_type RouteMapMatchA#route_type}
  */
  readonly routeType?: RouteMapMatchRouteTypeA;
  /**
  * scaleout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#scaleout RouteMapMatchA#scaleout}
  */
  readonly scaleout?: RouteMapMatchScaleoutA;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#tag RouteMapMatchA#tag}
  */
  readonly tag?: RouteMapMatchTagA;
}
export interface RouteMapMatchAsPathA {
  /**
  * AS path access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchAsPathAToTerraform(struct?: RouteMapMatchAsPathAOutputReference | RouteMapMatchAsPathA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchAsPathAToHclTerraform(struct?: RouteMapMatchAsPathAOutputReference | RouteMapMatchAsPathA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchAsPathAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchAsPathA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchAsPathA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteMapMatchCommunityNameCfgA {
  /**
  * Do exact matching of communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#exact_match RouteMapMatchA#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * One or more Community Lists (numbered or named)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchCommunityNameCfgAToTerraform(struct?: RouteMapMatchCommunityNameCfgAOutputReference | RouteMapMatchCommunityNameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchCommunityNameCfgAToHclTerraform(struct?: RouteMapMatchCommunityNameCfgAOutputReference | RouteMapMatchCommunityNameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.numberToHclTerraform(struct!.exactMatch),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchCommunityNameCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchCommunityNameCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchCommunityNameCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._name = value.name;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: number; 
  public get exactMatch() {
    return this.getNumberAttribute('exact_match');
  }
  public set exactMatch(value: number) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
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
}
export interface RouteMapMatchCommunityA {
  /**
  * name_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name_cfg RouteMapMatchA#name_cfg}
  */
  readonly nameCfg?: RouteMapMatchCommunityNameCfgA;
}

export function routeMapMatchCommunityAToTerraform(struct?: RouteMapMatchCommunityAOutputReference | RouteMapMatchCommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_cfg: routeMapMatchCommunityNameCfgAToTerraform(struct!.nameCfg),
  }
}


export function routeMapMatchCommunityAToHclTerraform(struct?: RouteMapMatchCommunityAOutputReference | RouteMapMatchCommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_cfg: {
      value: routeMapMatchCommunityNameCfgAToHclTerraform(struct!.nameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchCommunityNameCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchCommunityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchCommunityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameCfg = this._nameCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchCommunityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameCfg.internalValue = value.nameCfg;
    }
  }

  // name_cfg - computed: false, optional: true, required: false
  private _nameCfg = new RouteMapMatchCommunityNameCfgAOutputReference(this, "name_cfg");
  public get nameCfg() {
    return this._nameCfg;
  }
  public putNameCfg(value: RouteMapMatchCommunityNameCfgA) {
    this._nameCfg.internalValue = value;
  }
  public resetNameCfg() {
    this._nameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameCfgInput() {
    return this._nameCfg.internalValue;
  }
}
export interface RouteMapMatchExtcommunityExtcommunityLNameA {
  /**
  * Do exact matching of ecommunities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#exact_match RouteMapMatchA#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * One or more Extended Community Lists (numbered or named)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchExtcommunityExtcommunityLNameAToTerraform(struct?: RouteMapMatchExtcommunityExtcommunityLNameAOutputReference | RouteMapMatchExtcommunityExtcommunityLNameA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchExtcommunityExtcommunityLNameAToHclTerraform(struct?: RouteMapMatchExtcommunityExtcommunityLNameAOutputReference | RouteMapMatchExtcommunityExtcommunityLNameA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.numberToHclTerraform(struct!.exactMatch),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchExtcommunityExtcommunityLNameAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchExtcommunityExtcommunityLNameA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchExtcommunityExtcommunityLNameA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._name = value.name;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: number; 
  public get exactMatch() {
    return this.getNumberAttribute('exact_match');
  }
  public set exactMatch(value: number) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
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
}
export interface RouteMapMatchExtcommunityA {
  /**
  * extcommunity_l_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#extcommunity_l_name RouteMapMatchA#extcommunity_l_name}
  */
  readonly extcommunityLName?: RouteMapMatchExtcommunityExtcommunityLNameA;
}

export function routeMapMatchExtcommunityAToTerraform(struct?: RouteMapMatchExtcommunityAOutputReference | RouteMapMatchExtcommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extcommunity_l_name: routeMapMatchExtcommunityExtcommunityLNameAToTerraform(struct!.extcommunityLName),
  }
}


export function routeMapMatchExtcommunityAToHclTerraform(struct?: RouteMapMatchExtcommunityAOutputReference | RouteMapMatchExtcommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extcommunity_l_name: {
      value: routeMapMatchExtcommunityExtcommunityLNameAToHclTerraform(struct!.extcommunityLName),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchExtcommunityExtcommunityLNameAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchExtcommunityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchExtcommunityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extcommunityLName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extcommunityLName = this._extcommunityLName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchExtcommunityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extcommunityLName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extcommunityLName.internalValue = value.extcommunityLName;
    }
  }

  // extcommunity_l_name - computed: false, optional: true, required: false
  private _extcommunityLName = new RouteMapMatchExtcommunityExtcommunityLNameAOutputReference(this, "extcommunity_l_name");
  public get extcommunityLName() {
    return this._extcommunityLName;
  }
  public putExtcommunityLName(value: RouteMapMatchExtcommunityExtcommunityLNameA) {
    this._extcommunityLName.internalValue = value;
  }
  public resetExtcommunityLName() {
    this._extcommunityLName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extcommunityLNameInput() {
    return this._extcommunityLName.internalValue;
  }
}
export interface RouteMapMatchGroupA {
  /**
  * HA or VRRP-A group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#group_id RouteMapMatchA#group_id}
  */
  readonly groupId?: number;
  /**
  * 'active': HA or VRRP-A in Active State; 'standby': HA or VRRP-A in Standby State;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#ha_state RouteMapMatchA#ha_state}
  */
  readonly haState?: string;
}

export function routeMapMatchGroupAToTerraform(struct?: RouteMapMatchGroupAOutputReference | RouteMapMatchGroupA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    ha_state: cdktf.stringToTerraform(struct!.haState),
  }
}


export function routeMapMatchGroupAToHclTerraform(struct?: RouteMapMatchGroupAOutputReference | RouteMapMatchGroupA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_state: {
      value: cdktf.stringToHclTerraform(struct!.haState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchGroupAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchGroupA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._haState !== undefined) {
      hasAnyValues = true;
      internalValueResult.haState = this._haState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchGroupA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._haState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._haState = value.haState;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // ha_state - computed: false, optional: true, required: false
  private _haState?: string; 
  public get haState() {
    return this.getStringAttribute('ha_state');
  }
  public set haState(value: string) {
    this._haState = value;
  }
  public resetHaState() {
    this._haState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStateInput() {
    return this._haState;
  }
}
export interface RouteMapMatchInterfaceA {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#ethernet RouteMapMatchA#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#loopback RouteMapMatchA#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#trunk RouteMapMatchA#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#tunnel RouteMapMatchA#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#ve RouteMapMatchA#ve}
  */
  readonly ve?: number;
}

export function routeMapMatchInterfaceAToTerraform(struct?: RouteMapMatchInterfaceAOutputReference | RouteMapMatchInterfaceA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routeMapMatchInterfaceAToHclTerraform(struct?: RouteMapMatchInterfaceAOutputReference | RouteMapMatchInterfaceA): any {
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

export class RouteMapMatchInterfaceAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchInterfaceA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
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

  public set internalValue(value: RouteMapMatchInterfaceA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernet = undefined;
      this._loopback = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._ve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernet = value.ethernet;
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
export interface RouteMapMatchIpAddressPrefixListStructA {
  /**
  * IP prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpAddressPrefixListStructAToTerraform(struct?: RouteMapMatchIpAddressPrefixListStructAOutputReference | RouteMapMatchIpAddressPrefixListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpAddressPrefixListStructAToHclTerraform(struct?: RouteMapMatchIpAddressPrefixListStructAOutputReference | RouteMapMatchIpAddressPrefixListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpAddressPrefixListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpAddressPrefixListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpAddressPrefixListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteMapMatchIpAddressA {
  /**
  * IP access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl1 RouteMapMatchA#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl2 RouteMapMatchA#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#prefix_list RouteMapMatchA#prefix_list}
  */
  readonly prefixList?: RouteMapMatchIpAddressPrefixListStructA;
}

export function routeMapMatchIpAddressAToTerraform(struct?: RouteMapMatchIpAddressAOutputReference | RouteMapMatchIpAddressA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl1: cdktf.numberToTerraform(struct!.acl1),
    acl2: cdktf.numberToTerraform(struct!.acl2),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_list: routeMapMatchIpAddressPrefixListStructAToTerraform(struct!.prefixList),
  }
}


export function routeMapMatchIpAddressAToHclTerraform(struct?: RouteMapMatchIpAddressAOutputReference | RouteMapMatchIpAddressA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl1: {
      value: cdktf.numberToHclTerraform(struct!.acl1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl2: {
      value: cdktf.numberToHclTerraform(struct!.acl2),
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
    prefix_list: {
      value: routeMapMatchIpAddressPrefixListStructAToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpAddressPrefixListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpAddressAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpAddressA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl1 = this._acl1;
    }
    if (this._acl2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl2 = this._acl2;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpAddressA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl1 = undefined;
      this._acl2 = undefined;
      this._name = undefined;
      this._prefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl1 = value.acl1;
      this._acl2 = value.acl2;
      this._name = value.name;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // acl1 - computed: false, optional: true, required: false
  private _acl1?: number; 
  public get acl1() {
    return this.getNumberAttribute('acl1');
  }
  public set acl1(value: number) {
    this._acl1 = value;
  }
  public resetAcl1() {
    this._acl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl1Input() {
    return this._acl1;
  }

  // acl2 - computed: false, optional: true, required: false
  private _acl2?: number; 
  public get acl2() {
    return this.getNumberAttribute('acl2');
  }
  public set acl2(value: number) {
    this._acl2 = value;
  }
  public resetAcl2() {
    this._acl2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl2Input() {
    return this._acl2;
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

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new RouteMapMatchIpAddressPrefixListStructAOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: RouteMapMatchIpAddressPrefixListStructA) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}
export interface RouteMapMatchIpNextHopPrefixList1A {
  /**
  * IP prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpNextHopPrefixList1AToTerraform(struct?: RouteMapMatchIpNextHopPrefixList1AOutputReference | RouteMapMatchIpNextHopPrefixList1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpNextHopPrefixList1AToHclTerraform(struct?: RouteMapMatchIpNextHopPrefixList1AOutputReference | RouteMapMatchIpNextHopPrefixList1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpNextHopPrefixList1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpNextHopPrefixList1A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpNextHopPrefixList1A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteMapMatchIpNextHopA {
  /**
  * IP access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl1 RouteMapMatchA#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl2 RouteMapMatchA#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
  /**
  * prefix_list_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#prefix_list_1 RouteMapMatchA#prefix_list_1}
  */
  readonly prefixList1?: RouteMapMatchIpNextHopPrefixList1A;
}

export function routeMapMatchIpNextHopAToTerraform(struct?: RouteMapMatchIpNextHopAOutputReference | RouteMapMatchIpNextHopA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl1: cdktf.numberToTerraform(struct!.acl1),
    acl2: cdktf.numberToTerraform(struct!.acl2),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_list_1: routeMapMatchIpNextHopPrefixList1AToTerraform(struct!.prefixList1),
  }
}


export function routeMapMatchIpNextHopAToHclTerraform(struct?: RouteMapMatchIpNextHopAOutputReference | RouteMapMatchIpNextHopA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl1: {
      value: cdktf.numberToHclTerraform(struct!.acl1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl2: {
      value: cdktf.numberToHclTerraform(struct!.acl2),
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
    prefix_list_1: {
      value: routeMapMatchIpNextHopPrefixList1AToHclTerraform(struct!.prefixList1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpNextHopPrefixList1AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpNextHopAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpNextHopA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl1 = this._acl1;
    }
    if (this._acl2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl2 = this._acl2;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixList1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList1 = this._prefixList1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpNextHopA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl1 = undefined;
      this._acl2 = undefined;
      this._name = undefined;
      this._prefixList1.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl1 = value.acl1;
      this._acl2 = value.acl2;
      this._name = value.name;
      this._prefixList1.internalValue = value.prefixList1;
    }
  }

  // acl1 - computed: false, optional: true, required: false
  private _acl1?: number; 
  public get acl1() {
    return this.getNumberAttribute('acl1');
  }
  public set acl1(value: number) {
    this._acl1 = value;
  }
  public resetAcl1() {
    this._acl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl1Input() {
    return this._acl1;
  }

  // acl2 - computed: false, optional: true, required: false
  private _acl2?: number; 
  public get acl2() {
    return this.getNumberAttribute('acl2');
  }
  public set acl2(value: number) {
    this._acl2 = value;
  }
  public resetAcl2() {
    this._acl2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl2Input() {
    return this._acl2;
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

  // prefix_list_1 - computed: false, optional: true, required: false
  private _prefixList1 = new RouteMapMatchIpNextHopPrefixList1AOutputReference(this, "prefix_list_1");
  public get prefixList1() {
    return this._prefixList1;
  }
  public putPrefixList1(value: RouteMapMatchIpNextHopPrefixList1A) {
    this._prefixList1.internalValue = value;
  }
  public resetPrefixList1() {
    this._prefixList1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixList1Input() {
    return this._prefixList1.internalValue;
  }
}
export interface RouteMapMatchIpPeerA {
  /**
  * IP access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl1 RouteMapMatchA#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl2 RouteMapMatchA#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpPeerAToTerraform(struct?: RouteMapMatchIpPeerAOutputReference | RouteMapMatchIpPeerA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl1: cdktf.numberToTerraform(struct!.acl1),
    acl2: cdktf.numberToTerraform(struct!.acl2),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpPeerAToHclTerraform(struct?: RouteMapMatchIpPeerAOutputReference | RouteMapMatchIpPeerA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl1: {
      value: cdktf.numberToHclTerraform(struct!.acl1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl2: {
      value: cdktf.numberToHclTerraform(struct!.acl2),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpPeerAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpPeerA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl1 = this._acl1;
    }
    if (this._acl2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl2 = this._acl2;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpPeerA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl1 = undefined;
      this._acl2 = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl1 = value.acl1;
      this._acl2 = value.acl2;
      this._name = value.name;
    }
  }

  // acl1 - computed: false, optional: true, required: false
  private _acl1?: number; 
  public get acl1() {
    return this.getNumberAttribute('acl1');
  }
  public set acl1(value: number) {
    this._acl1 = value;
  }
  public resetAcl1() {
    this._acl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl1Input() {
    return this._acl1;
  }

  // acl2 - computed: false, optional: true, required: false
  private _acl2?: number; 
  public get acl2() {
    return this.getNumberAttribute('acl2');
  }
  public set acl2(value: number) {
    this._acl2 = value;
  }
  public resetAcl2() {
    this._acl2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl2Input() {
    return this._acl2;
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
}
export interface RouteMapMatchIpRibA {
  /**
  * Exact match a prefix (Prefix IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#exact RouteMapMatchA#exact}
  */
  readonly exact?: string;
  /**
  * IP address is reachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#reachable RouteMapMatchA#reachable}
  */
  readonly reachable?: string;
  /**
  * IP address is unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#unreachable RouteMapMatchA#unreachable}
  */
  readonly unreachable?: string;
}

export function routeMapMatchIpRibAToTerraform(struct?: RouteMapMatchIpRibAOutputReference | RouteMapMatchIpRibA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    reachable: cdktf.stringToTerraform(struct!.reachable),
    unreachable: cdktf.stringToTerraform(struct!.unreachable),
  }
}


export function routeMapMatchIpRibAToHclTerraform(struct?: RouteMapMatchIpRibAOutputReference | RouteMapMatchIpRibA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reachable: {
      value: cdktf.stringToHclTerraform(struct!.reachable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unreachable: {
      value: cdktf.stringToHclTerraform(struct!.unreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpRibAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpRibA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._reachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachable = this._reachable;
    }
    if (this._unreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreachable = this._unreachable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpRibA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._reachable = undefined;
      this._unreachable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._reachable = value.reachable;
      this._unreachable = value.unreachable;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // reachable - computed: false, optional: true, required: false
  private _reachable?: string; 
  public get reachable() {
    return this.getStringAttribute('reachable');
  }
  public set reachable(value: string) {
    this._reachable = value;
  }
  public resetReachable() {
    this._reachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableInput() {
    return this._reachable;
  }

  // unreachable - computed: false, optional: true, required: false
  private _unreachable?: string; 
  public get unreachable() {
    return this.getStringAttribute('unreachable');
  }
  public set unreachable(value: string) {
    this._unreachable = value;
  }
  public resetUnreachable() {
    this._unreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreachableInput() {
    return this._unreachable;
  }
}
export interface RouteMapMatchIpA {
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#address RouteMapMatchA#address}
  */
  readonly address?: RouteMapMatchIpAddressA;
  /**
  * next_hop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#next_hop RouteMapMatchA#next_hop}
  */
  readonly nextHop?: RouteMapMatchIpNextHopA;
  /**
  * peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#peer RouteMapMatchA#peer}
  */
  readonly peer?: RouteMapMatchIpPeerA;
  /**
  * rib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#rib RouteMapMatchA#rib}
  */
  readonly rib?: RouteMapMatchIpRibA;
}

export function routeMapMatchIpAToTerraform(struct?: RouteMapMatchIpAOutputReference | RouteMapMatchIpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: routeMapMatchIpAddressAToTerraform(struct!.address),
    next_hop: routeMapMatchIpNextHopAToTerraform(struct!.nextHop),
    peer: routeMapMatchIpPeerAToTerraform(struct!.peer),
    rib: routeMapMatchIpRibAToTerraform(struct!.rib),
  }
}


export function routeMapMatchIpAToHclTerraform(struct?: RouteMapMatchIpAOutputReference | RouteMapMatchIpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: routeMapMatchIpAddressAToHclTerraform(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpAddressAList",
    },
    next_hop: {
      value: routeMapMatchIpNextHopAToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpNextHopAList",
    },
    peer: {
      value: routeMapMatchIpPeerAToHclTerraform(struct!.peer),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpPeerAList",
    },
    rib: {
      value: routeMapMatchIpRibAToHclTerraform(struct!.rib),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpRibAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._peer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer?.internalValue;
    }
    if (this._rib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rib = this._rib?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._peer.internalValue = undefined;
      this._rib.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
      this._peer.internalValue = value.peer;
      this._rib.internalValue = value.rib;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new RouteMapMatchIpAddressAOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: RouteMapMatchIpAddressA) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new RouteMapMatchIpNextHopAOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: RouteMapMatchIpNextHopA) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // peer - computed: false, optional: true, required: false
  private _peer = new RouteMapMatchIpPeerAOutputReference(this, "peer");
  public get peer() {
    return this._peer;
  }
  public putPeer(value: RouteMapMatchIpPeerA) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // rib - computed: false, optional: true, required: false
  private _rib = new RouteMapMatchIpRibAOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
  public putRib(value: RouteMapMatchIpRibA) {
    this._rib.internalValue = value;
  }
  public resetRib() {
    this._rib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribInput() {
    return this._rib.internalValue;
  }
}
export interface RouteMapMatchIpv6Address1PrefixList2A {
  /**
  * IPv6 prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpv6Address1PrefixList2AToTerraform(struct?: RouteMapMatchIpv6Address1PrefixList2AOutputReference | RouteMapMatchIpv6Address1PrefixList2A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpv6Address1PrefixList2AToHclTerraform(struct?: RouteMapMatchIpv6Address1PrefixList2AOutputReference | RouteMapMatchIpv6Address1PrefixList2A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6Address1PrefixList2AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6Address1PrefixList2A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpv6Address1PrefixList2A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteMapMatchIpv6Address1A {
  /**
  * IPv6 access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
  /**
  * prefix_list_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#prefix_list_2 RouteMapMatchA#prefix_list_2}
  */
  readonly prefixList2?: RouteMapMatchIpv6Address1PrefixList2A;
}

export function routeMapMatchIpv6Address1AToTerraform(struct?: RouteMapMatchIpv6Address1AOutputReference | RouteMapMatchIpv6Address1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    prefix_list_2: routeMapMatchIpv6Address1PrefixList2AToTerraform(struct!.prefixList2),
  }
}


export function routeMapMatchIpv6Address1AToHclTerraform(struct?: RouteMapMatchIpv6Address1AOutputReference | RouteMapMatchIpv6Address1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_2: {
      value: routeMapMatchIpv6Address1PrefixList2AToHclTerraform(struct!.prefixList2),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6Address1PrefixList2AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6Address1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6Address1A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixList2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList2 = this._prefixList2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpv6Address1A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._prefixList2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._prefixList2.internalValue = value.prefixList2;
    }
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

  // prefix_list_2 - computed: false, optional: true, required: false
  private _prefixList2 = new RouteMapMatchIpv6Address1PrefixList2AOutputReference(this, "prefix_list_2");
  public get prefixList2() {
    return this._prefixList2;
  }
  public putPrefixList2(value: RouteMapMatchIpv6Address1PrefixList2A) {
    this._prefixList2.internalValue = value;
  }
  public resetPrefixList2() {
    this._prefixList2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixList2Input() {
    return this._prefixList2.internalValue;
  }
}
export interface RouteMapMatchIpv6NextHop1A {
  /**
  * IPv6 access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#next_hop_acl_name RouteMapMatchA#next_hop_acl_name}
  */
  readonly nextHopAclName?: string;
  /**
  * IPv6 prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#prefix_list_name RouteMapMatchA#prefix_list_name}
  */
  readonly prefixListName?: string;
  /**
  * IPv6 address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#v6_addr RouteMapMatchA#v6_addr}
  */
  readonly v6Addr?: string;
}

export function routeMapMatchIpv6NextHop1AToTerraform(struct?: RouteMapMatchIpv6NextHop1AOutputReference | RouteMapMatchIpv6NextHop1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop_acl_name: cdktf.stringToTerraform(struct!.nextHopAclName),
    prefix_list_name: cdktf.stringToTerraform(struct!.prefixListName),
    v6_addr: cdktf.stringToTerraform(struct!.v6Addr),
  }
}


export function routeMapMatchIpv6NextHop1AToHclTerraform(struct?: RouteMapMatchIpv6NextHop1AOutputReference | RouteMapMatchIpv6NextHop1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.nextHopAclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_name: {
      value: cdktf.stringToHclTerraform(struct!.prefixListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.v6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6NextHop1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6NextHop1A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHopAclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopAclName = this._nextHopAclName;
    }
    if (this._prefixListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListName = this._prefixListName;
    }
    if (this._v6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Addr = this._v6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpv6NextHop1A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHopAclName = undefined;
      this._prefixListName = undefined;
      this._v6Addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHopAclName = value.nextHopAclName;
      this._prefixListName = value.prefixListName;
      this._v6Addr = value.v6Addr;
    }
  }

  // next_hop_acl_name - computed: false, optional: true, required: false
  private _nextHopAclName?: string; 
  public get nextHopAclName() {
    return this.getStringAttribute('next_hop_acl_name');
  }
  public set nextHopAclName(value: string) {
    this._nextHopAclName = value;
  }
  public resetNextHopAclName() {
    this._nextHopAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopAclNameInput() {
    return this._nextHopAclName;
  }

  // prefix_list_name - computed: false, optional: true, required: false
  private _prefixListName?: string; 
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }
  public set prefixListName(value: string) {
    this._prefixListName = value;
  }
  public resetPrefixListName() {
    this._prefixListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListNameInput() {
    return this._prefixListName;
  }

  // v6_addr - computed: false, optional: true, required: false
  private _v6Addr?: string; 
  public get v6Addr() {
    return this.getStringAttribute('v6_addr');
  }
  public set v6Addr(value: string) {
    this._v6Addr = value;
  }
  public resetV6Addr() {
    this._v6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AddrInput() {
    return this._v6Addr;
  }
}
export interface RouteMapMatchIpv6Peer1A {
  /**
  * IPv6 access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl1 RouteMapMatchA#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#acl2 RouteMapMatchA#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpv6Peer1AToTerraform(struct?: RouteMapMatchIpv6Peer1AOutputReference | RouteMapMatchIpv6Peer1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl1: cdktf.numberToTerraform(struct!.acl1),
    acl2: cdktf.numberToTerraform(struct!.acl2),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpv6Peer1AToHclTerraform(struct?: RouteMapMatchIpv6Peer1AOutputReference | RouteMapMatchIpv6Peer1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl1: {
      value: cdktf.numberToHclTerraform(struct!.acl1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl2: {
      value: cdktf.numberToHclTerraform(struct!.acl2),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6Peer1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6Peer1A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl1 = this._acl1;
    }
    if (this._acl2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl2 = this._acl2;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpv6Peer1A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl1 = undefined;
      this._acl2 = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl1 = value.acl1;
      this._acl2 = value.acl2;
      this._name = value.name;
    }
  }

  // acl1 - computed: false, optional: true, required: false
  private _acl1?: number; 
  public get acl1() {
    return this.getNumberAttribute('acl1');
  }
  public set acl1(value: number) {
    this._acl1 = value;
  }
  public resetAcl1() {
    this._acl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl1Input() {
    return this._acl1;
  }

  // acl2 - computed: false, optional: true, required: false
  private _acl2?: number; 
  public get acl2() {
    return this.getNumberAttribute('acl2');
  }
  public set acl2(value: number) {
    this._acl2 = value;
  }
  public resetAcl2() {
    this._acl2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acl2Input() {
    return this._acl2;
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
}
export interface RouteMapMatchIpv6RibA {
  /**
  * Exact match a prefix (Prefix IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#exact RouteMapMatchA#exact}
  */
  readonly exact?: string;
  /**
  * IPv6 address is reachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#reachable RouteMapMatchA#reachable}
  */
  readonly reachable?: string;
  /**
  * IPv6 address is unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#unreachable RouteMapMatchA#unreachable}
  */
  readonly unreachable?: string;
}

export function routeMapMatchIpv6RibAToTerraform(struct?: RouteMapMatchIpv6RibAOutputReference | RouteMapMatchIpv6RibA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    reachable: cdktf.stringToTerraform(struct!.reachable),
    unreachable: cdktf.stringToTerraform(struct!.unreachable),
  }
}


export function routeMapMatchIpv6RibAToHclTerraform(struct?: RouteMapMatchIpv6RibAOutputReference | RouteMapMatchIpv6RibA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reachable: {
      value: cdktf.stringToHclTerraform(struct!.reachable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unreachable: {
      value: cdktf.stringToHclTerraform(struct!.unreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6RibAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6RibA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._reachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachable = this._reachable;
    }
    if (this._unreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreachable = this._unreachable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpv6RibA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._reachable = undefined;
      this._unreachable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._reachable = value.reachable;
      this._unreachable = value.unreachable;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // reachable - computed: false, optional: true, required: false
  private _reachable?: string; 
  public get reachable() {
    return this.getStringAttribute('reachable');
  }
  public set reachable(value: string) {
    this._reachable = value;
  }
  public resetReachable() {
    this._reachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableInput() {
    return this._reachable;
  }

  // unreachable - computed: false, optional: true, required: false
  private _unreachable?: string; 
  public get unreachable() {
    return this.getStringAttribute('unreachable');
  }
  public set unreachable(value: string) {
    this._unreachable = value;
  }
  public resetUnreachable() {
    this._unreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreachableInput() {
    return this._unreachable;
  }
}
export interface RouteMapMatchIpv6A {
  /**
  * address_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#address_1 RouteMapMatchA#address_1}
  */
  readonly address1?: RouteMapMatchIpv6Address1A;
  /**
  * next_hop_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#next_hop_1 RouteMapMatchA#next_hop_1}
  */
  readonly nextHop1?: RouteMapMatchIpv6NextHop1A;
  /**
  * peer_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#peer_1 RouteMapMatchA#peer_1}
  */
  readonly peer1?: RouteMapMatchIpv6Peer1A;
  /**
  * rib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#rib RouteMapMatchA#rib}
  */
  readonly rib?: RouteMapMatchIpv6RibA;
}

export function routeMapMatchIpv6AToTerraform(struct?: RouteMapMatchIpv6AOutputReference | RouteMapMatchIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_1: routeMapMatchIpv6Address1AToTerraform(struct!.address1),
    next_hop_1: routeMapMatchIpv6NextHop1AToTerraform(struct!.nextHop1),
    peer_1: routeMapMatchIpv6Peer1AToTerraform(struct!.peer1),
    rib: routeMapMatchIpv6RibAToTerraform(struct!.rib),
  }
}


export function routeMapMatchIpv6AToHclTerraform(struct?: RouteMapMatchIpv6AOutputReference | RouteMapMatchIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_1: {
      value: routeMapMatchIpv6Address1AToHclTerraform(struct!.address1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6Address1AList",
    },
    next_hop_1: {
      value: routeMapMatchIpv6NextHop1AToHclTerraform(struct!.nextHop1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6NextHop1AList",
    },
    peer_1: {
      value: routeMapMatchIpv6Peer1AToHclTerraform(struct!.peer1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6Peer1AList",
    },
    rib: {
      value: routeMapMatchIpv6RibAToHclTerraform(struct!.rib),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6RibAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1?.internalValue;
    }
    if (this._nextHop1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop1 = this._nextHop1?.internalValue;
    }
    if (this._peer1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer1 = this._peer1?.internalValue;
    }
    if (this._rib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rib = this._rib?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpv6A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address1.internalValue = undefined;
      this._nextHop1.internalValue = undefined;
      this._peer1.internalValue = undefined;
      this._rib.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address1.internalValue = value.address1;
      this._nextHop1.internalValue = value.nextHop1;
      this._peer1.internalValue = value.peer1;
      this._rib.internalValue = value.rib;
    }
  }

  // address_1 - computed: false, optional: true, required: false
  private _address1 = new RouteMapMatchIpv6Address1AOutputReference(this, "address_1");
  public get address1() {
    return this._address1;
  }
  public putAddress1(value: RouteMapMatchIpv6Address1A) {
    this._address1.internalValue = value;
  }
  public resetAddress1() {
    this._address1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1.internalValue;
  }

  // next_hop_1 - computed: false, optional: true, required: false
  private _nextHop1 = new RouteMapMatchIpv6NextHop1AOutputReference(this, "next_hop_1");
  public get nextHop1() {
    return this._nextHop1;
  }
  public putNextHop1(value: RouteMapMatchIpv6NextHop1A) {
    this._nextHop1.internalValue = value;
  }
  public resetNextHop1() {
    this._nextHop1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHop1Input() {
    return this._nextHop1.internalValue;
  }

  // peer_1 - computed: false, optional: true, required: false
  private _peer1 = new RouteMapMatchIpv6Peer1AOutputReference(this, "peer_1");
  public get peer1() {
    return this._peer1;
  }
  public putPeer1(value: RouteMapMatchIpv6Peer1A) {
    this._peer1.internalValue = value;
  }
  public resetPeer1() {
    this._peer1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer1Input() {
    return this._peer1.internalValue;
  }

  // rib - computed: false, optional: true, required: false
  private _rib = new RouteMapMatchIpv6RibAOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
  public putRib(value: RouteMapMatchIpv6RibA) {
    this._rib.internalValue = value;
  }
  public resetRib() {
    this._rib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribInput() {
    return this._rib.internalValue;
  }
}
export interface RouteMapMatchLargeCommunityLNameCfgA {
  /**
  * Do exact matching of large-communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#exact_match RouteMapMatchA#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * One or more Large Community Lists (numbered or named)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#name RouteMapMatchA#name}
  */
  readonly name?: string;
}

export function routeMapMatchLargeCommunityLNameCfgAToTerraform(struct?: RouteMapMatchLargeCommunityLNameCfgAOutputReference | RouteMapMatchLargeCommunityLNameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchLargeCommunityLNameCfgAToHclTerraform(struct?: RouteMapMatchLargeCommunityLNameCfgAOutputReference | RouteMapMatchLargeCommunityLNameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.numberToHclTerraform(struct!.exactMatch),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchLargeCommunityLNameCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchLargeCommunityLNameCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchLargeCommunityLNameCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._name = value.name;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: number; 
  public get exactMatch() {
    return this.getNumberAttribute('exact_match');
  }
  public set exactMatch(value: number) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
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
}
export interface RouteMapMatchLargeCommunityA {
  /**
  * l_name_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#l_name_cfg RouteMapMatchA#l_name_cfg}
  */
  readonly lNameCfg?: RouteMapMatchLargeCommunityLNameCfgA;
}

export function routeMapMatchLargeCommunityAToTerraform(struct?: RouteMapMatchLargeCommunityAOutputReference | RouteMapMatchLargeCommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l_name_cfg: routeMapMatchLargeCommunityLNameCfgAToTerraform(struct!.lNameCfg),
  }
}


export function routeMapMatchLargeCommunityAToHclTerraform(struct?: RouteMapMatchLargeCommunityAOutputReference | RouteMapMatchLargeCommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l_name_cfg: {
      value: routeMapMatchLargeCommunityLNameCfgAToHclTerraform(struct!.lNameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchLargeCommunityLNameCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchLargeCommunityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchLargeCommunityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lNameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lNameCfg = this._lNameCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchLargeCommunityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lNameCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lNameCfg.internalValue = value.lNameCfg;
    }
  }

  // l_name_cfg - computed: false, optional: true, required: false
  private _lNameCfg = new RouteMapMatchLargeCommunityLNameCfgAOutputReference(this, "l_name_cfg");
  public get lNameCfg() {
    return this._lNameCfg;
  }
  public putLNameCfg(value: RouteMapMatchLargeCommunityLNameCfgA) {
    this._lNameCfg.internalValue = value;
  }
  public resetLNameCfg() {
    this._lNameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lNameCfgInput() {
    return this._lNameCfg.internalValue;
  }
}
export interface RouteMapMatchLocalPreferenceA {
  /**
  * Preference value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#val RouteMapMatchA#val}
  */
  readonly val?: number;
}

export function routeMapMatchLocalPreferenceAToTerraform(struct?: RouteMapMatchLocalPreferenceAOutputReference | RouteMapMatchLocalPreferenceA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    val: cdktf.numberToTerraform(struct!.val),
  }
}


export function routeMapMatchLocalPreferenceAToHclTerraform(struct?: RouteMapMatchLocalPreferenceAOutputReference | RouteMapMatchLocalPreferenceA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    val: {
      value: cdktf.numberToHclTerraform(struct!.val),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchLocalPreferenceAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchLocalPreferenceA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchLocalPreferenceA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._val = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._val = value.val;
    }
  }

  // val - computed: false, optional: true, required: false
  private _val?: number; 
  public get val() {
    return this.getNumberAttribute('val');
  }
  public set val(value: number) {
    this._val = value;
  }
  public resetVal() {
    this._val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valInput() {
    return this._val;
  }
}
export interface RouteMapMatchMetricA {
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#value RouteMapMatchA#value}
  */
  readonly value?: number;
}

export function routeMapMatchMetricAToTerraform(struct?: RouteMapMatchMetricAOutputReference | RouteMapMatchMetricA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function routeMapMatchMetricAToHclTerraform(struct?: RouteMapMatchMetricAOutputReference | RouteMapMatchMetricA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchMetricAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchMetricA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchMetricA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapMatchOriginA {
  /**
  * remote EGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#egp RouteMapMatchA#egp}
  */
  readonly egp?: number;
  /**
  * local IGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#igp RouteMapMatchA#igp}
  */
  readonly igp?: number;
  /**
  * unknown heritage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#incomplete RouteMapMatchA#incomplete}
  */
  readonly incomplete?: number;
}

export function routeMapMatchOriginAToTerraform(struct?: RouteMapMatchOriginAOutputReference | RouteMapMatchOriginA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egp: cdktf.numberToTerraform(struct!.egp),
    igp: cdktf.numberToTerraform(struct!.igp),
    incomplete: cdktf.numberToTerraform(struct!.incomplete),
  }
}


export function routeMapMatchOriginAToHclTerraform(struct?: RouteMapMatchOriginAOutputReference | RouteMapMatchOriginA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egp: {
      value: cdktf.numberToHclTerraform(struct!.egp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igp: {
      value: cdktf.numberToHclTerraform(struct!.igp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incomplete: {
      value: cdktf.numberToHclTerraform(struct!.incomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchOriginAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchOriginA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egp !== undefined) {
      hasAnyValues = true;
      internalValueResult.egp = this._egp;
    }
    if (this._igp !== undefined) {
      hasAnyValues = true;
      internalValueResult.igp = this._igp;
    }
    if (this._incomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomplete = this._incomplete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchOriginA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egp = undefined;
      this._igp = undefined;
      this._incomplete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egp = value.egp;
      this._igp = value.igp;
      this._incomplete = value.incomplete;
    }
  }

  // egp - computed: false, optional: true, required: false
  private _egp?: number; 
  public get egp() {
    return this.getNumberAttribute('egp');
  }
  public set egp(value: number) {
    this._egp = value;
  }
  public resetEgp() {
    this._egp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egpInput() {
    return this._egp;
  }

  // igp - computed: false, optional: true, required: false
  private _igp?: number; 
  public get igp() {
    return this.getNumberAttribute('igp');
  }
  public set igp(value: number) {
    this._igp = value;
  }
  public resetIgp() {
    this._igp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igpInput() {
    return this._igp;
  }

  // incomplete - computed: false, optional: true, required: false
  private _incomplete?: number; 
  public get incomplete() {
    return this.getNumberAttribute('incomplete');
  }
  public set incomplete(value: number) {
    this._incomplete = value;
  }
  public resetIncomplete() {
    this._incomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incompleteInput() {
    return this._incomplete;
  }
}
export interface RouteMapMatchRouteTypeExternalA {
  /**
  * 'type-1': Match OSPF External Type 1 metrics; 'type-2': Match OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#value RouteMapMatchA#value}
  */
  readonly value?: string;
}

export function routeMapMatchRouteTypeExternalAToTerraform(struct?: RouteMapMatchRouteTypeExternalAOutputReference | RouteMapMatchRouteTypeExternalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapMatchRouteTypeExternalAToHclTerraform(struct?: RouteMapMatchRouteTypeExternalAOutputReference | RouteMapMatchRouteTypeExternalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchRouteTypeExternalAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchRouteTypeExternalA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchRouteTypeExternalA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapMatchRouteTypeA {
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#external RouteMapMatchA#external}
  */
  readonly external?: RouteMapMatchRouteTypeExternalA;
}

export function routeMapMatchRouteTypeAToTerraform(struct?: RouteMapMatchRouteTypeAOutputReference | RouteMapMatchRouteTypeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: routeMapMatchRouteTypeExternalAToTerraform(struct!.external),
  }
}


export function routeMapMatchRouteTypeAToHclTerraform(struct?: RouteMapMatchRouteTypeAOutputReference | RouteMapMatchRouteTypeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: routeMapMatchRouteTypeExternalAToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchRouteTypeExternalAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchRouteTypeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchRouteTypeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchRouteTypeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._external.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._external.internalValue = value.external;
    }
  }

  // external - computed: false, optional: true, required: false
  private _external = new RouteMapMatchRouteTypeExternalAOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: RouteMapMatchRouteTypeExternalA) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }
}
export interface RouteMapMatchScaleoutA {
  /**
  * Scaleout Cluster-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#cluster_id RouteMapMatchA#cluster_id}
  */
  readonly clusterId?: number;
  /**
  * 'up': Scaleout is up and running; 'down': Scaleout is down or disabled;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#ipv4 RouteMapMatchA#ipv4}
  */
  readonly ipv4?: string;
  /**
  * 'up': Scaleout is up and running; 'down': Scaleout is down or disabled;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#ipv6 RouteMapMatchA#ipv6}
  */
  readonly ipv6?: string;
  /**
  * 'up': Scaleout is up and running; 'down': Scaleout is down or disabled;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#operational_state RouteMapMatchA#operational_state}
  */
  readonly operationalState?: string;
}

export function routeMapMatchScaleoutAToTerraform(struct?: RouteMapMatchScaleoutAOutputReference | RouteMapMatchScaleoutA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.numberToTerraform(struct!.clusterId),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    operational_state: cdktf.stringToTerraform(struct!.operationalState),
  }
}


export function routeMapMatchScaleoutAToHclTerraform(struct?: RouteMapMatchScaleoutAOutputReference | RouteMapMatchScaleoutA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.numberToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operational_state: {
      value: cdktf.stringToHclTerraform(struct!.operationalState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchScaleoutAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchScaleoutA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._operationalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalState = this._operationalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchScaleoutA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._operationalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._operationalState = value.operationalState;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: number; 
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }
  public set clusterId(value: number) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
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

  // operational_state - computed: false, optional: true, required: false
  private _operationalState?: string; 
  public get operationalState() {
    return this.getStringAttribute('operational_state');
  }
  public set operationalState(value: string) {
    this._operationalState = value;
  }
  public resetOperationalState() {
    this._operationalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalStateInput() {
    return this._operationalState;
  }
}
export interface RouteMapMatchTagA {
  /**
  * Tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#value RouteMapMatchA#value}
  */
  readonly value?: number;
}

export function routeMapMatchTagAToTerraform(struct?: RouteMapMatchTagAOutputReference | RouteMapMatchTagA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function routeMapMatchTagAToHclTerraform(struct?: RouteMapMatchTagAOutputReference | RouteMapMatchTagA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchTagAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchTagA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchTagA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match thunder_route_map_match}
*/
export class RouteMapMatchA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_route_map_match";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteMapMatchA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteMapMatchA to import
  * @param importFromId The id of the existing RouteMapMatchA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteMapMatchA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_route_map_match", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_match thunder_route_map_match} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteMapMatchAConfig
  */
  public constructor(scope: Construct, id: string, config: RouteMapMatchAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_route_map_match',
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
    this._action = config.action;
    this._id = config.id;
    this._sequence = config.sequence;
    this._uuid = config.uuid;
    this._asPath.internalValue = config.asPath;
    this._community.internalValue = config.community;
    this._extcommunity.internalValue = config.extcommunity;
    this._group.internalValue = config.group;
    this._interface.internalValue = config.interface;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._largeCommunity.internalValue = config.largeCommunity;
    this._localPreference.internalValue = config.localPreference;
    this._metric.internalValue = config.metric;
    this._origin.internalValue = config.origin;
    this._routeType.internalValue = config.routeType;
    this._scaleout.internalValue = config.scaleout;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // sequence - computed: false, optional: false, required: true
  private _sequence?: string; 
  public get sequence() {
    return this.getStringAttribute('sequence');
  }
  public set sequence(value: string) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
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

  // as_path - computed: false, optional: true, required: false
  private _asPath = new RouteMapMatchAsPathAOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }
  public putAsPath(value: RouteMapMatchAsPathA) {
    this._asPath.internalValue = value;
  }
  public resetAsPath() {
    this._asPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathInput() {
    return this._asPath.internalValue;
  }

  // community - computed: false, optional: true, required: false
  private _community = new RouteMapMatchCommunityAOutputReference(this, "community");
  public get community() {
    return this._community;
  }
  public putCommunity(value: RouteMapMatchCommunityA) {
    this._community.internalValue = value;
  }
  public resetCommunity() {
    this._community.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community.internalValue;
  }

  // extcommunity - computed: false, optional: true, required: false
  private _extcommunity = new RouteMapMatchExtcommunityAOutputReference(this, "extcommunity");
  public get extcommunity() {
    return this._extcommunity;
  }
  public putExtcommunity(value: RouteMapMatchExtcommunityA) {
    this._extcommunity.internalValue = value;
  }
  public resetExtcommunity() {
    this._extcommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extcommunityInput() {
    return this._extcommunity.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new RouteMapMatchGroupAOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: RouteMapMatchGroupA) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouteMapMatchInterfaceAOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouteMapMatchInterfaceA) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new RouteMapMatchIpAOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: RouteMapMatchIpA) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new RouteMapMatchIpv6AOutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RouteMapMatchIpv6A) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity = new RouteMapMatchLargeCommunityAOutputReference(this, "large_community");
  public get largeCommunity() {
    return this._largeCommunity;
  }
  public putLargeCommunity(value: RouteMapMatchLargeCommunityA) {
    this._largeCommunity.internalValue = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity.internalValue;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference = new RouteMapMatchLocalPreferenceAOutputReference(this, "local_preference");
  public get localPreference() {
    return this._localPreference;
  }
  public putLocalPreference(value: RouteMapMatchLocalPreferenceA) {
    this._localPreference.internalValue = value;
  }
  public resetLocalPreference() {
    this._localPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new RouteMapMatchMetricAOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: RouteMapMatchMetricA) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new RouteMapMatchOriginAOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: RouteMapMatchOriginA) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // route_type - computed: false, optional: true, required: false
  private _routeType = new RouteMapMatchRouteTypeAOutputReference(this, "route_type");
  public get routeType() {
    return this._routeType;
  }
  public putRouteType(value: RouteMapMatchRouteTypeA) {
    this._routeType.internalValue = value;
  }
  public resetRouteType() {
    this._routeType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType.internalValue;
  }

  // scaleout - computed: false, optional: true, required: false
  private _scaleout = new RouteMapMatchScaleoutAOutputReference(this, "scaleout");
  public get scaleout() {
    return this._scaleout;
  }
  public putScaleout(value: RouteMapMatchScaleoutA) {
    this._scaleout.internalValue = value;
  }
  public resetScaleout() {
    this._scaleout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutInput() {
    return this._scaleout.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new RouteMapMatchTagAOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: RouteMapMatchTagA) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      sequence: cdktf.stringToTerraform(this._sequence),
      uuid: cdktf.stringToTerraform(this._uuid),
      as_path: routeMapMatchAsPathAToTerraform(this._asPath.internalValue),
      community: routeMapMatchCommunityAToTerraform(this._community.internalValue),
      extcommunity: routeMapMatchExtcommunityAToTerraform(this._extcommunity.internalValue),
      group: routeMapMatchGroupAToTerraform(this._group.internalValue),
      interface: routeMapMatchInterfaceAToTerraform(this._interface.internalValue),
      ip: routeMapMatchIpAToTerraform(this._ip.internalValue),
      ipv6: routeMapMatchIpv6AToTerraform(this._ipv6.internalValue),
      large_community: routeMapMatchLargeCommunityAToTerraform(this._largeCommunity.internalValue),
      local_preference: routeMapMatchLocalPreferenceAToTerraform(this._localPreference.internalValue),
      metric: routeMapMatchMetricAToTerraform(this._metric.internalValue),
      origin: routeMapMatchOriginAToTerraform(this._origin.internalValue),
      route_type: routeMapMatchRouteTypeAToTerraform(this._routeType.internalValue),
      scaleout: routeMapMatchScaleoutAToTerraform(this._scaleout.internalValue),
      tag: routeMapMatchTagAToTerraform(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      sequence: {
        value: cdktf.stringToHclTerraform(this._sequence),
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
      as_path: {
        value: routeMapMatchAsPathAToHclTerraform(this._asPath.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchAsPathAList",
      },
      community: {
        value: routeMapMatchCommunityAToHclTerraform(this._community.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchCommunityAList",
      },
      extcommunity: {
        value: routeMapMatchExtcommunityAToHclTerraform(this._extcommunity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchExtcommunityAList",
      },
      group: {
        value: routeMapMatchGroupAToHclTerraform(this._group.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchGroupAList",
      },
      interface: {
        value: routeMapMatchInterfaceAToHclTerraform(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchInterfaceAList",
      },
      ip: {
        value: routeMapMatchIpAToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchIpAList",
      },
      ipv6: {
        value: routeMapMatchIpv6AToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchIpv6AList",
      },
      large_community: {
        value: routeMapMatchLargeCommunityAToHclTerraform(this._largeCommunity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchLargeCommunityAList",
      },
      local_preference: {
        value: routeMapMatchLocalPreferenceAToHclTerraform(this._localPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchLocalPreferenceAList",
      },
      metric: {
        value: routeMapMatchMetricAToHclTerraform(this._metric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchMetricAList",
      },
      origin: {
        value: routeMapMatchOriginAToHclTerraform(this._origin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchOriginAList",
      },
      route_type: {
        value: routeMapMatchRouteTypeAToHclTerraform(this._routeType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchRouteTypeAList",
      },
      scaleout: {
        value: routeMapMatchScaleoutAToHclTerraform(this._scaleout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchScaleoutAList",
      },
      tag: {
        value: routeMapMatchTagAToHclTerraform(this._tag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchTagAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
