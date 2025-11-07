// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'permit': Route map permits set operations; 'deny': Route map denies set operations;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#action RouteMap#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#id RouteMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sequence to insert to/delete from existing route-map entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#sequence RouteMap#sequence}
  */
  readonly sequence: number;
  /**
  * Route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#tag RouteMap#tag}
  */
  readonly tag: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#user_tag RouteMap#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#uuid RouteMap#uuid}
  */
  readonly uuid?: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#match RouteMap#match}
  */
  readonly match?: RouteMapMatch;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#set RouteMap#set}
  */
  readonly set?: RouteMapSet;
}
export interface RouteMapMatchAsPath {
  /**
  * AS path access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchAsPathToTerraform(struct?: RouteMapMatchAsPathOutputReference | RouteMapMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchAsPathToHclTerraform(struct?: RouteMapMatchAsPathOutputReference | RouteMapMatchAsPath): any {
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

export class RouteMapMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchAsPath | undefined) {
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
export interface RouteMapMatchCommunityNameCfg {
  /**
  * Do exact matching of communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#exact_match RouteMap#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * One or more Community Lists (numbered or named)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchCommunityNameCfgToTerraform(struct?: RouteMapMatchCommunityNameCfgOutputReference | RouteMapMatchCommunityNameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchCommunityNameCfgToHclTerraform(struct?: RouteMapMatchCommunityNameCfgOutputReference | RouteMapMatchCommunityNameCfg): any {
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

export class RouteMapMatchCommunityNameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchCommunityNameCfg | undefined {
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

  public set internalValue(value: RouteMapMatchCommunityNameCfg | undefined) {
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
export interface RouteMapMatchCommunity {
  /**
  * name_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name_cfg RouteMap#name_cfg}
  */
  readonly nameCfg?: RouteMapMatchCommunityNameCfg;
}

export function routeMapMatchCommunityToTerraform(struct?: RouteMapMatchCommunityOutputReference | RouteMapMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_cfg: routeMapMatchCommunityNameCfgToTerraform(struct!.nameCfg),
  }
}


export function routeMapMatchCommunityToHclTerraform(struct?: RouteMapMatchCommunityOutputReference | RouteMapMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_cfg: {
      value: routeMapMatchCommunityNameCfgToHclTerraform(struct!.nameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchCommunityNameCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameCfg = this._nameCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchCommunity | undefined) {
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
  private _nameCfg = new RouteMapMatchCommunityNameCfgOutputReference(this, "name_cfg");
  public get nameCfg() {
    return this._nameCfg;
  }
  public putNameCfg(value: RouteMapMatchCommunityNameCfg) {
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
export interface RouteMapMatchExtcommunityExtcommunityLName {
  /**
  * Do exact matching of ecommunities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#exact_match RouteMap#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * One or more Extended Community Lists (numbered or named)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchExtcommunityExtcommunityLNameToTerraform(struct?: RouteMapMatchExtcommunityExtcommunityLNameOutputReference | RouteMapMatchExtcommunityExtcommunityLName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchExtcommunityExtcommunityLNameToHclTerraform(struct?: RouteMapMatchExtcommunityExtcommunityLNameOutputReference | RouteMapMatchExtcommunityExtcommunityLName): any {
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

export class RouteMapMatchExtcommunityExtcommunityLNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchExtcommunityExtcommunityLName | undefined {
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

  public set internalValue(value: RouteMapMatchExtcommunityExtcommunityLName | undefined) {
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
export interface RouteMapMatchExtcommunity {
  /**
  * extcommunity_l_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#extcommunity_l_name RouteMap#extcommunity_l_name}
  */
  readonly extcommunityLName?: RouteMapMatchExtcommunityExtcommunityLName;
}

export function routeMapMatchExtcommunityToTerraform(struct?: RouteMapMatchExtcommunityOutputReference | RouteMapMatchExtcommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extcommunity_l_name: routeMapMatchExtcommunityExtcommunityLNameToTerraform(struct!.extcommunityLName),
  }
}


export function routeMapMatchExtcommunityToHclTerraform(struct?: RouteMapMatchExtcommunityOutputReference | RouteMapMatchExtcommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extcommunity_l_name: {
      value: routeMapMatchExtcommunityExtcommunityLNameToHclTerraform(struct!.extcommunityLName),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchExtcommunityExtcommunityLNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchExtcommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchExtcommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extcommunityLName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extcommunityLName = this._extcommunityLName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchExtcommunity | undefined) {
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
  private _extcommunityLName = new RouteMapMatchExtcommunityExtcommunityLNameOutputReference(this, "extcommunity_l_name");
  public get extcommunityLName() {
    return this._extcommunityLName;
  }
  public putExtcommunityLName(value: RouteMapMatchExtcommunityExtcommunityLName) {
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
export interface RouteMapMatchGroup {
  /**
  * HA or VRRP-A group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#group_id RouteMap#group_id}
  */
  readonly groupId?: number;
  /**
  * 'active': HA or VRRP-A in Active State; 'standby': HA or VRRP-A in Standby State;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ha_state RouteMap#ha_state}
  */
  readonly haState?: string;
}

export function routeMapMatchGroupToTerraform(struct?: RouteMapMatchGroupOutputReference | RouteMapMatchGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    ha_state: cdktf.stringToTerraform(struct!.haState),
  }
}


export function routeMapMatchGroupToHclTerraform(struct?: RouteMapMatchGroupOutputReference | RouteMapMatchGroup): any {
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

export class RouteMapMatchGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchGroup | undefined {
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

  public set internalValue(value: RouteMapMatchGroup | undefined) {
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
export interface RouteMapMatchInterface {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ethernet RouteMap#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#loopback RouteMap#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#trunk RouteMap#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#tunnel RouteMap#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ve RouteMap#ve}
  */
  readonly ve?: number;
}

export function routeMapMatchInterfaceToTerraform(struct?: RouteMapMatchInterfaceOutputReference | RouteMapMatchInterface): any {
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


export function routeMapMatchInterfaceToHclTerraform(struct?: RouteMapMatchInterfaceOutputReference | RouteMapMatchInterface): any {
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

export class RouteMapMatchInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchInterface | undefined {
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

  public set internalValue(value: RouteMapMatchInterface | undefined) {
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
export interface RouteMapMatchIpAddressPrefixListStruct {
  /**
  * IP prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpAddressPrefixListStructToTerraform(struct?: RouteMapMatchIpAddressPrefixListStructOutputReference | RouteMapMatchIpAddressPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpAddressPrefixListStructToHclTerraform(struct?: RouteMapMatchIpAddressPrefixListStructOutputReference | RouteMapMatchIpAddressPrefixListStruct): any {
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

export class RouteMapMatchIpAddressPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpAddressPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpAddressPrefixListStruct | undefined) {
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
export interface RouteMapMatchIpAddress {
  /**
  * IP access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl1 RouteMap#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl2 RouteMap#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#prefix_list RouteMap#prefix_list}
  */
  readonly prefixList?: RouteMapMatchIpAddressPrefixListStruct;
}

export function routeMapMatchIpAddressToTerraform(struct?: RouteMapMatchIpAddressOutputReference | RouteMapMatchIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl1: cdktf.numberToTerraform(struct!.acl1),
    acl2: cdktf.numberToTerraform(struct!.acl2),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_list: routeMapMatchIpAddressPrefixListStructToTerraform(struct!.prefixList),
  }
}


export function routeMapMatchIpAddressToHclTerraform(struct?: RouteMapMatchIpAddressOutputReference | RouteMapMatchIpAddress): any {
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
      value: routeMapMatchIpAddressPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpAddressPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpAddress | undefined {
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

  public set internalValue(value: RouteMapMatchIpAddress | undefined) {
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
  private _prefixList = new RouteMapMatchIpAddressPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: RouteMapMatchIpAddressPrefixListStruct) {
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
export interface RouteMapMatchIpNextHopPrefixList1 {
  /**
  * IP prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpNextHopPrefixList1ToTerraform(struct?: RouteMapMatchIpNextHopPrefixList1OutputReference | RouteMapMatchIpNextHopPrefixList1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpNextHopPrefixList1ToHclTerraform(struct?: RouteMapMatchIpNextHopPrefixList1OutputReference | RouteMapMatchIpNextHopPrefixList1): any {
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

export class RouteMapMatchIpNextHopPrefixList1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpNextHopPrefixList1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpNextHopPrefixList1 | undefined) {
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
export interface RouteMapMatchIpNextHop {
  /**
  * IP access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl1 RouteMap#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl2 RouteMap#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
  /**
  * prefix_list_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#prefix_list_1 RouteMap#prefix_list_1}
  */
  readonly prefixList1?: RouteMapMatchIpNextHopPrefixList1;
}

export function routeMapMatchIpNextHopToTerraform(struct?: RouteMapMatchIpNextHopOutputReference | RouteMapMatchIpNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl1: cdktf.numberToTerraform(struct!.acl1),
    acl2: cdktf.numberToTerraform(struct!.acl2),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_list_1: routeMapMatchIpNextHopPrefixList1ToTerraform(struct!.prefixList1),
  }
}


export function routeMapMatchIpNextHopToHclTerraform(struct?: RouteMapMatchIpNextHopOutputReference | RouteMapMatchIpNextHop): any {
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
      value: routeMapMatchIpNextHopPrefixList1ToHclTerraform(struct!.prefixList1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpNextHopPrefixList1List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpNextHop | undefined {
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

  public set internalValue(value: RouteMapMatchIpNextHop | undefined) {
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
  private _prefixList1 = new RouteMapMatchIpNextHopPrefixList1OutputReference(this, "prefix_list_1");
  public get prefixList1() {
    return this._prefixList1;
  }
  public putPrefixList1(value: RouteMapMatchIpNextHopPrefixList1) {
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
export interface RouteMapMatchIpPeer {
  /**
  * IP access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl1 RouteMap#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl2 RouteMap#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpPeerToTerraform(struct?: RouteMapMatchIpPeerOutputReference | RouteMapMatchIpPeer): any {
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


export function routeMapMatchIpPeerToHclTerraform(struct?: RouteMapMatchIpPeerOutputReference | RouteMapMatchIpPeer): any {
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

export class RouteMapMatchIpPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpPeer | undefined {
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

  public set internalValue(value: RouteMapMatchIpPeer | undefined) {
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
export interface RouteMapMatchIpRib {
  /**
  * Exact match a prefix (Prefix IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#exact RouteMap#exact}
  */
  readonly exact?: string;
  /**
  * IP address is reachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#reachable RouteMap#reachable}
  */
  readonly reachable?: string;
  /**
  * IP address is unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#unreachable RouteMap#unreachable}
  */
  readonly unreachable?: string;
}

export function routeMapMatchIpRibToTerraform(struct?: RouteMapMatchIpRibOutputReference | RouteMapMatchIpRib): any {
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


export function routeMapMatchIpRibToHclTerraform(struct?: RouteMapMatchIpRibOutputReference | RouteMapMatchIpRib): any {
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

export class RouteMapMatchIpRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpRib | undefined {
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

  public set internalValue(value: RouteMapMatchIpRib | undefined) {
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
export interface RouteMapMatchIp {
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#address RouteMap#address}
  */
  readonly address?: RouteMapMatchIpAddress;
  /**
  * next_hop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#next_hop RouteMap#next_hop}
  */
  readonly nextHop?: RouteMapMatchIpNextHop;
  /**
  * peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#peer RouteMap#peer}
  */
  readonly peer?: RouteMapMatchIpPeer;
  /**
  * rib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#rib RouteMap#rib}
  */
  readonly rib?: RouteMapMatchIpRib;
}

export function routeMapMatchIpToTerraform(struct?: RouteMapMatchIpOutputReference | RouteMapMatchIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: routeMapMatchIpAddressToTerraform(struct!.address),
    next_hop: routeMapMatchIpNextHopToTerraform(struct!.nextHop),
    peer: routeMapMatchIpPeerToTerraform(struct!.peer),
    rib: routeMapMatchIpRibToTerraform(struct!.rib),
  }
}


export function routeMapMatchIpToHclTerraform(struct?: RouteMapMatchIpOutputReference | RouteMapMatchIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: routeMapMatchIpAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpAddressList",
    },
    next_hop: {
      value: routeMapMatchIpNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpNextHopList",
    },
    peer: {
      value: routeMapMatchIpPeerToHclTerraform(struct!.peer),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpPeerList",
    },
    rib: {
      value: routeMapMatchIpRibToHclTerraform(struct!.rib),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpRibList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIp | undefined {
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

  public set internalValue(value: RouteMapMatchIp | undefined) {
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
  private _address = new RouteMapMatchIpAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: RouteMapMatchIpAddress) {
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
  private _nextHop = new RouteMapMatchIpNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: RouteMapMatchIpNextHop) {
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
  private _peer = new RouteMapMatchIpPeerOutputReference(this, "peer");
  public get peer() {
    return this._peer;
  }
  public putPeer(value: RouteMapMatchIpPeer) {
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
  private _rib = new RouteMapMatchIpRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
  public putRib(value: RouteMapMatchIpRib) {
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
export interface RouteMapMatchIpv6Address1PrefixList2 {
  /**
  * IPv6 prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpv6Address1PrefixList2ToTerraform(struct?: RouteMapMatchIpv6Address1PrefixList2OutputReference | RouteMapMatchIpv6Address1PrefixList2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchIpv6Address1PrefixList2ToHclTerraform(struct?: RouteMapMatchIpv6Address1PrefixList2OutputReference | RouteMapMatchIpv6Address1PrefixList2): any {
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

export class RouteMapMatchIpv6Address1PrefixList2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6Address1PrefixList2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchIpv6Address1PrefixList2 | undefined) {
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
export interface RouteMapMatchIpv6Address1 {
  /**
  * IPv6 access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
  /**
  * prefix_list_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#prefix_list_2 RouteMap#prefix_list_2}
  */
  readonly prefixList2?: RouteMapMatchIpv6Address1PrefixList2;
}

export function routeMapMatchIpv6Address1ToTerraform(struct?: RouteMapMatchIpv6Address1OutputReference | RouteMapMatchIpv6Address1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    prefix_list_2: routeMapMatchIpv6Address1PrefixList2ToTerraform(struct!.prefixList2),
  }
}


export function routeMapMatchIpv6Address1ToHclTerraform(struct?: RouteMapMatchIpv6Address1OutputReference | RouteMapMatchIpv6Address1): any {
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
      value: routeMapMatchIpv6Address1PrefixList2ToHclTerraform(struct!.prefixList2),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6Address1PrefixList2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6Address1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6Address1 | undefined {
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

  public set internalValue(value: RouteMapMatchIpv6Address1 | undefined) {
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
  private _prefixList2 = new RouteMapMatchIpv6Address1PrefixList2OutputReference(this, "prefix_list_2");
  public get prefixList2() {
    return this._prefixList2;
  }
  public putPrefixList2(value: RouteMapMatchIpv6Address1PrefixList2) {
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
export interface RouteMapMatchIpv6NextHop1 {
  /**
  * IPv6 access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#next_hop_acl_name RouteMap#next_hop_acl_name}
  */
  readonly nextHopAclName?: string;
  /**
  * IPv6 prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#prefix_list_name RouteMap#prefix_list_name}
  */
  readonly prefixListName?: string;
  /**
  * IPv6 address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#v6_addr RouteMap#v6_addr}
  */
  readonly v6Addr?: string;
}

export function routeMapMatchIpv6NextHop1ToTerraform(struct?: RouteMapMatchIpv6NextHop1OutputReference | RouteMapMatchIpv6NextHop1): any {
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


export function routeMapMatchIpv6NextHop1ToHclTerraform(struct?: RouteMapMatchIpv6NextHop1OutputReference | RouteMapMatchIpv6NextHop1): any {
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

export class RouteMapMatchIpv6NextHop1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6NextHop1 | undefined {
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

  public set internalValue(value: RouteMapMatchIpv6NextHop1 | undefined) {
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
export interface RouteMapMatchIpv6Peer1 {
  /**
  * IPv6 access-list number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl1 RouteMap#acl1}
  */
  readonly acl1?: number;
  /**
  * IP access-list number (expanded range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#acl2 RouteMap#acl2}
  */
  readonly acl2?: number;
  /**
  * IP access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchIpv6Peer1ToTerraform(struct?: RouteMapMatchIpv6Peer1OutputReference | RouteMapMatchIpv6Peer1): any {
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


export function routeMapMatchIpv6Peer1ToHclTerraform(struct?: RouteMapMatchIpv6Peer1OutputReference | RouteMapMatchIpv6Peer1): any {
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

export class RouteMapMatchIpv6Peer1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6Peer1 | undefined {
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

  public set internalValue(value: RouteMapMatchIpv6Peer1 | undefined) {
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
export interface RouteMapMatchIpv6Rib {
  /**
  * Exact match a prefix (Prefix IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#exact RouteMap#exact}
  */
  readonly exact?: string;
  /**
  * IPv6 address is reachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#reachable RouteMap#reachable}
  */
  readonly reachable?: string;
  /**
  * IPv6 address is unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#unreachable RouteMap#unreachable}
  */
  readonly unreachable?: string;
}

export function routeMapMatchIpv6RibToTerraform(struct?: RouteMapMatchIpv6RibOutputReference | RouteMapMatchIpv6Rib): any {
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


export function routeMapMatchIpv6RibToHclTerraform(struct?: RouteMapMatchIpv6RibOutputReference | RouteMapMatchIpv6Rib): any {
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

export class RouteMapMatchIpv6RibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6Rib | undefined {
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

  public set internalValue(value: RouteMapMatchIpv6Rib | undefined) {
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
export interface RouteMapMatchIpv6 {
  /**
  * address_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#address_1 RouteMap#address_1}
  */
  readonly address1?: RouteMapMatchIpv6Address1;
  /**
  * next_hop_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#next_hop_1 RouteMap#next_hop_1}
  */
  readonly nextHop1?: RouteMapMatchIpv6NextHop1;
  /**
  * peer_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#peer_1 RouteMap#peer_1}
  */
  readonly peer1?: RouteMapMatchIpv6Peer1;
  /**
  * rib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#rib RouteMap#rib}
  */
  readonly rib?: RouteMapMatchIpv6Rib;
}

export function routeMapMatchIpv6ToTerraform(struct?: RouteMapMatchIpv6OutputReference | RouteMapMatchIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_1: routeMapMatchIpv6Address1ToTerraform(struct!.address1),
    next_hop_1: routeMapMatchIpv6NextHop1ToTerraform(struct!.nextHop1),
    peer_1: routeMapMatchIpv6Peer1ToTerraform(struct!.peer1),
    rib: routeMapMatchIpv6RibToTerraform(struct!.rib),
  }
}


export function routeMapMatchIpv6ToHclTerraform(struct?: RouteMapMatchIpv6OutputReference | RouteMapMatchIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_1: {
      value: routeMapMatchIpv6Address1ToHclTerraform(struct!.address1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6Address1List",
    },
    next_hop_1: {
      value: routeMapMatchIpv6NextHop1ToHclTerraform(struct!.nextHop1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6NextHop1List",
    },
    peer_1: {
      value: routeMapMatchIpv6Peer1ToHclTerraform(struct!.peer1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6Peer1List",
    },
    rib: {
      value: routeMapMatchIpv6RibToHclTerraform(struct!.rib),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6RibList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchIpv6 | undefined {
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

  public set internalValue(value: RouteMapMatchIpv6 | undefined) {
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
  private _address1 = new RouteMapMatchIpv6Address1OutputReference(this, "address_1");
  public get address1() {
    return this._address1;
  }
  public putAddress1(value: RouteMapMatchIpv6Address1) {
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
  private _nextHop1 = new RouteMapMatchIpv6NextHop1OutputReference(this, "next_hop_1");
  public get nextHop1() {
    return this._nextHop1;
  }
  public putNextHop1(value: RouteMapMatchIpv6NextHop1) {
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
  private _peer1 = new RouteMapMatchIpv6Peer1OutputReference(this, "peer_1");
  public get peer1() {
    return this._peer1;
  }
  public putPeer1(value: RouteMapMatchIpv6Peer1) {
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
  private _rib = new RouteMapMatchIpv6RibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
  public putRib(value: RouteMapMatchIpv6Rib) {
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
export interface RouteMapMatchLargeCommunityLNameCfg {
  /**
  * Do exact matching of large-communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#exact_match RouteMap#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * One or more Large Community Lists (numbered or named)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
}

export function routeMapMatchLargeCommunityLNameCfgToTerraform(struct?: RouteMapMatchLargeCommunityLNameCfgOutputReference | RouteMapMatchLargeCommunityLNameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeMapMatchLargeCommunityLNameCfgToHclTerraform(struct?: RouteMapMatchLargeCommunityLNameCfgOutputReference | RouteMapMatchLargeCommunityLNameCfg): any {
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

export class RouteMapMatchLargeCommunityLNameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchLargeCommunityLNameCfg | undefined {
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

  public set internalValue(value: RouteMapMatchLargeCommunityLNameCfg | undefined) {
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
export interface RouteMapMatchLargeCommunity {
  /**
  * l_name_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#l_name_cfg RouteMap#l_name_cfg}
  */
  readonly lNameCfg?: RouteMapMatchLargeCommunityLNameCfg;
}

export function routeMapMatchLargeCommunityToTerraform(struct?: RouteMapMatchLargeCommunityOutputReference | RouteMapMatchLargeCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l_name_cfg: routeMapMatchLargeCommunityLNameCfgToTerraform(struct!.lNameCfg),
  }
}


export function routeMapMatchLargeCommunityToHclTerraform(struct?: RouteMapMatchLargeCommunityOutputReference | RouteMapMatchLargeCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l_name_cfg: {
      value: routeMapMatchLargeCommunityLNameCfgToHclTerraform(struct!.lNameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchLargeCommunityLNameCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchLargeCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchLargeCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lNameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lNameCfg = this._lNameCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchLargeCommunity | undefined) {
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
  private _lNameCfg = new RouteMapMatchLargeCommunityLNameCfgOutputReference(this, "l_name_cfg");
  public get lNameCfg() {
    return this._lNameCfg;
  }
  public putLNameCfg(value: RouteMapMatchLargeCommunityLNameCfg) {
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
export interface RouteMapMatchLocalPreference {
  /**
  * Preference value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#val RouteMap#val}
  */
  readonly val?: number;
}

export function routeMapMatchLocalPreferenceToTerraform(struct?: RouteMapMatchLocalPreferenceOutputReference | RouteMapMatchLocalPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    val: cdktf.numberToTerraform(struct!.val),
  }
}


export function routeMapMatchLocalPreferenceToHclTerraform(struct?: RouteMapMatchLocalPreferenceOutputReference | RouteMapMatchLocalPreference): any {
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

export class RouteMapMatchLocalPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchLocalPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchLocalPreference | undefined) {
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
export interface RouteMapMatchMetric {
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: number;
}

export function routeMapMatchMetricToTerraform(struct?: RouteMapMatchMetricOutputReference | RouteMapMatchMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function routeMapMatchMetricToHclTerraform(struct?: RouteMapMatchMetricOutputReference | RouteMapMatchMetric): any {
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

export class RouteMapMatchMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchMetric | undefined) {
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
export interface RouteMapMatchOrigin {
  /**
  * remote EGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#egp RouteMap#egp}
  */
  readonly egp?: number;
  /**
  * local IGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#igp RouteMap#igp}
  */
  readonly igp?: number;
  /**
  * unknown heritage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#incomplete RouteMap#incomplete}
  */
  readonly incomplete?: number;
}

export function routeMapMatchOriginToTerraform(struct?: RouteMapMatchOriginOutputReference | RouteMapMatchOrigin): any {
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


export function routeMapMatchOriginToHclTerraform(struct?: RouteMapMatchOriginOutputReference | RouteMapMatchOrigin): any {
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

export class RouteMapMatchOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchOrigin | undefined {
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

  public set internalValue(value: RouteMapMatchOrigin | undefined) {
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
export interface RouteMapMatchRouteTypeExternal {
  /**
  * 'type-1': Match OSPF External Type 1 metrics; 'type-2': Match OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: string;
}

export function routeMapMatchRouteTypeExternalToTerraform(struct?: RouteMapMatchRouteTypeExternalOutputReference | RouteMapMatchRouteTypeExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapMatchRouteTypeExternalToHclTerraform(struct?: RouteMapMatchRouteTypeExternalOutputReference | RouteMapMatchRouteTypeExternal): any {
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

export class RouteMapMatchRouteTypeExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchRouteTypeExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchRouteTypeExternal | undefined) {
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
export interface RouteMapMatchRouteType {
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#external RouteMap#external}
  */
  readonly external?: RouteMapMatchRouteTypeExternal;
}

export function routeMapMatchRouteTypeToTerraform(struct?: RouteMapMatchRouteTypeOutputReference | RouteMapMatchRouteType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: routeMapMatchRouteTypeExternalToTerraform(struct!.external),
  }
}


export function routeMapMatchRouteTypeToHclTerraform(struct?: RouteMapMatchRouteTypeOutputReference | RouteMapMatchRouteType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: routeMapMatchRouteTypeExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchRouteTypeExternalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchRouteTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchRouteType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchRouteType | undefined) {
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
  private _external = new RouteMapMatchRouteTypeExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: RouteMapMatchRouteTypeExternal) {
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
export interface RouteMapMatchScaleout {
  /**
  * Scaleout Cluster-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#cluster_id RouteMap#cluster_id}
  */
  readonly clusterId?: number;
  /**
  * 'up': Scaleout is up and running; 'down': Scaleout is down or disabled;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#operational_state RouteMap#operational_state}
  */
  readonly operationalState?: string;
}

export function routeMapMatchScaleoutToTerraform(struct?: RouteMapMatchScaleoutOutputReference | RouteMapMatchScaleout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.numberToTerraform(struct!.clusterId),
    operational_state: cdktf.stringToTerraform(struct!.operationalState),
  }
}


export function routeMapMatchScaleoutToHclTerraform(struct?: RouteMapMatchScaleoutOutputReference | RouteMapMatchScaleout): any {
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

export class RouteMapMatchScaleoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchScaleout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._operationalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalState = this._operationalState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchScaleout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._operationalState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
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
export interface RouteMapMatchTag {
  /**
  * Tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: number;
}

export function routeMapMatchTagToTerraform(struct?: RouteMapMatchTagOutputReference | RouteMapMatchTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function routeMapMatchTagToHclTerraform(struct?: RouteMapMatchTagOutputReference | RouteMapMatchTag): any {
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

export class RouteMapMatchTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatchTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatchTag | undefined) {
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
export interface RouteMapMatch {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#uuid RouteMap#uuid}
  */
  readonly uuid?: string;
  /**
  * as_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#as_path RouteMap#as_path}
  */
  readonly asPath?: RouteMapMatchAsPath;
  /**
  * community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#community RouteMap#community}
  */
  readonly community?: RouteMapMatchCommunity;
  /**
  * extcommunity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#extcommunity RouteMap#extcommunity}
  */
  readonly extcommunity?: RouteMapMatchExtcommunity;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#group RouteMap#group}
  */
  readonly group?: RouteMapMatchGroup;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#interface RouteMap#interface}
  */
  readonly interface?: RouteMapMatchInterface;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ip RouteMap#ip}
  */
  readonly ip?: RouteMapMatchIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ipv6 RouteMap#ipv6}
  */
  readonly ipv6?: RouteMapMatchIpv6;
  /**
  * large_community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#large_community RouteMap#large_community}
  */
  readonly largeCommunity?: RouteMapMatchLargeCommunity;
  /**
  * local_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#local_preference RouteMap#local_preference}
  */
  readonly localPreference?: RouteMapMatchLocalPreference;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#metric RouteMap#metric}
  */
  readonly metric?: RouteMapMatchMetric;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#origin RouteMap#origin}
  */
  readonly origin?: RouteMapMatchOrigin;
  /**
  * route_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#route_type RouteMap#route_type}
  */
  readonly routeType?: RouteMapMatchRouteType;
  /**
  * scaleout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#scaleout RouteMap#scaleout}
  */
  readonly scaleout?: RouteMapMatchScaleout;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#tag RouteMap#tag}
  */
  readonly tag?: RouteMapMatchTag;
}

export function routeMapMatchToTerraform(struct?: RouteMapMatchOutputReference | RouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    as_path: routeMapMatchAsPathToTerraform(struct!.asPath),
    community: routeMapMatchCommunityToTerraform(struct!.community),
    extcommunity: routeMapMatchExtcommunityToTerraform(struct!.extcommunity),
    group: routeMapMatchGroupToTerraform(struct!.group),
    interface: routeMapMatchInterfaceToTerraform(struct!.interface),
    ip: routeMapMatchIpToTerraform(struct!.ip),
    ipv6: routeMapMatchIpv6ToTerraform(struct!.ipv6),
    large_community: routeMapMatchLargeCommunityToTerraform(struct!.largeCommunity),
    local_preference: routeMapMatchLocalPreferenceToTerraform(struct!.localPreference),
    metric: routeMapMatchMetricToTerraform(struct!.metric),
    origin: routeMapMatchOriginToTerraform(struct!.origin),
    route_type: routeMapMatchRouteTypeToTerraform(struct!.routeType),
    scaleout: routeMapMatchScaleoutToTerraform(struct!.scaleout),
    tag: routeMapMatchTagToTerraform(struct!.tag),
  }
}


export function routeMapMatchToHclTerraform(struct?: RouteMapMatchOutputReference | RouteMapMatch): any {
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
    as_path: {
      value: routeMapMatchAsPathToHclTerraform(struct!.asPath),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchAsPathList",
    },
    community: {
      value: routeMapMatchCommunityToHclTerraform(struct!.community),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchCommunityList",
    },
    extcommunity: {
      value: routeMapMatchExtcommunityToHclTerraform(struct!.extcommunity),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchExtcommunityList",
    },
    group: {
      value: routeMapMatchGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchGroupList",
    },
    interface: {
      value: routeMapMatchInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchInterfaceList",
    },
    ip: {
      value: routeMapMatchIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpList",
    },
    ipv6: {
      value: routeMapMatchIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchIpv6List",
    },
    large_community: {
      value: routeMapMatchLargeCommunityToHclTerraform(struct!.largeCommunity),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchLargeCommunityList",
    },
    local_preference: {
      value: routeMapMatchLocalPreferenceToHclTerraform(struct!.localPreference),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchLocalPreferenceList",
    },
    metric: {
      value: routeMapMatchMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchMetricList",
    },
    origin: {
      value: routeMapMatchOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchOriginList",
    },
    route_type: {
      value: routeMapMatchRouteTypeToHclTerraform(struct!.routeType),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchRouteTypeList",
    },
    scaleout: {
      value: routeMapMatchScaleoutToHclTerraform(struct!.scaleout),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchScaleoutList",
    },
    tag: {
      value: routeMapMatchTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapMatchTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._asPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPath = this._asPath?.internalValue;
    }
    if (this._community?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community?.internalValue;
    }
    if (this._extcommunity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extcommunity = this._extcommunity?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._largeCommunity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity?.internalValue;
    }
    if (this._localPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    if (this._routeType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType?.internalValue;
    }
    if (this._scaleout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleout = this._scaleout?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._asPath.internalValue = undefined;
      this._community.internalValue = undefined;
      this._extcommunity.internalValue = undefined;
      this._group.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._largeCommunity.internalValue = undefined;
      this._localPreference.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._origin.internalValue = undefined;
      this._routeType.internalValue = undefined;
      this._scaleout.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._asPath.internalValue = value.asPath;
      this._community.internalValue = value.community;
      this._extcommunity.internalValue = value.extcommunity;
      this._group.internalValue = value.group;
      this._interface.internalValue = value.interface;
      this._ip.internalValue = value.ip;
      this._ipv6.internalValue = value.ipv6;
      this._largeCommunity.internalValue = value.largeCommunity;
      this._localPreference.internalValue = value.localPreference;
      this._metric.internalValue = value.metric;
      this._origin.internalValue = value.origin;
      this._routeType.internalValue = value.routeType;
      this._scaleout.internalValue = value.scaleout;
      this._tag.internalValue = value.tag;
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

  // as_path - computed: false, optional: true, required: false
  private _asPath = new RouteMapMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }
  public putAsPath(value: RouteMapMatchAsPath) {
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
  private _community = new RouteMapMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }
  public putCommunity(value: RouteMapMatchCommunity) {
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
  private _extcommunity = new RouteMapMatchExtcommunityOutputReference(this, "extcommunity");
  public get extcommunity() {
    return this._extcommunity;
  }
  public putExtcommunity(value: RouteMapMatchExtcommunity) {
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
  private _group = new RouteMapMatchGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: RouteMapMatchGroup) {
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
  private _interface = new RouteMapMatchInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouteMapMatchInterface) {
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
  private _ip = new RouteMapMatchIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: RouteMapMatchIp) {
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
  private _ipv6 = new RouteMapMatchIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RouteMapMatchIpv6) {
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
  private _largeCommunity = new RouteMapMatchLargeCommunityOutputReference(this, "large_community");
  public get largeCommunity() {
    return this._largeCommunity;
  }
  public putLargeCommunity(value: RouteMapMatchLargeCommunity) {
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
  private _localPreference = new RouteMapMatchLocalPreferenceOutputReference(this, "local_preference");
  public get localPreference() {
    return this._localPreference;
  }
  public putLocalPreference(value: RouteMapMatchLocalPreference) {
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
  private _metric = new RouteMapMatchMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: RouteMapMatchMetric) {
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
  private _origin = new RouteMapMatchOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: RouteMapMatchOrigin) {
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
  private _routeType = new RouteMapMatchRouteTypeOutputReference(this, "route_type");
  public get routeType() {
    return this._routeType;
  }
  public putRouteType(value: RouteMapMatchRouteType) {
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
  private _scaleout = new RouteMapMatchScaleoutOutputReference(this, "scaleout");
  public get scaleout() {
    return this._scaleout;
  }
  public putScaleout(value: RouteMapMatchScaleout) {
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
  private _tag = new RouteMapMatchTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: RouteMapMatchTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface RouteMapSetAggregatorAggregatorAs {
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#asn RouteMap#asn}
  */
  readonly asn?: number;
  /**
  * IP address of aggregator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ip RouteMap#ip}
  */
  readonly ip?: string;
}

export function routeMapSetAggregatorAggregatorAsToTerraform(struct?: RouteMapSetAggregatorAggregatorAsOutputReference | RouteMapSetAggregatorAggregatorAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function routeMapSetAggregatorAggregatorAsToHclTerraform(struct?: RouteMapSetAggregatorAggregatorAsOutputReference | RouteMapSetAggregatorAggregatorAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetAggregatorAggregatorAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetAggregatorAggregatorAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetAggregatorAggregatorAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._ip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._ip = value.ip;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface RouteMapSetAggregator {
  /**
  * aggregator_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#aggregator_as RouteMap#aggregator_as}
  */
  readonly aggregatorAs?: RouteMapSetAggregatorAggregatorAs;
}

export function routeMapSetAggregatorToTerraform(struct?: RouteMapSetAggregatorOutputReference | RouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator_as: routeMapSetAggregatorAggregatorAsToTerraform(struct!.aggregatorAs),
  }
}


export function routeMapSetAggregatorToHclTerraform(struct?: RouteMapSetAggregatorOutputReference | RouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator_as: {
      value: routeMapSetAggregatorAggregatorAsToHclTerraform(struct!.aggregatorAs),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetAggregatorAggregatorAsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatorAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorAs = this._aggregatorAs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregatorAs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregatorAs.internalValue = value.aggregatorAs;
    }
  }

  // aggregator_as - computed: false, optional: true, required: false
  private _aggregatorAs = new RouteMapSetAggregatorAggregatorAsOutputReference(this, "aggregator_as");
  public get aggregatorAs() {
    return this._aggregatorAs;
  }
  public putAggregatorAs(value: RouteMapSetAggregatorAggregatorAs) {
    this._aggregatorAs.internalValue = value;
  }
  public resetAggregatorAs() {
    this._aggregatorAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorAsInput() {
    return this._aggregatorAs.internalValue;
  }
}
export interface RouteMapSetAsPath {
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#num RouteMap#num}
  */
  readonly num?: string;
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#num2 RouteMap#num2}
  */
  readonly num2?: string;
  /**
  * Prepend to the as-path (AS number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#prepend RouteMap#prepend}
  */
  readonly prepend?: string;
}

export function routeMapSetAsPathToTerraform(struct?: RouteMapSetAsPathOutputReference | RouteMapSetAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num: cdktf.stringToTerraform(struct!.num),
    num2: cdktf.stringToTerraform(struct!.num2),
    prepend: cdktf.stringToTerraform(struct!.prepend),
  }
}


export function routeMapSetAsPathToHclTerraform(struct?: RouteMapSetAsPathOutputReference | RouteMapSetAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num: {
      value: cdktf.stringToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num2: {
      value: cdktf.stringToHclTerraform(struct!.num2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepend: {
      value: cdktf.stringToHclTerraform(struct!.prepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._num2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.num2 = this._num2;
    }
    if (this._prepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepend = this._prepend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._num = undefined;
      this._num2 = undefined;
      this._prepend = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._num = value.num;
      this._num2 = value.num2;
      this._prepend = value.prepend;
    }
  }

  // num - computed: false, optional: true, required: false
  private _num?: string; 
  public get num() {
    return this.getStringAttribute('num');
  }
  public set num(value: string) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // num2 - computed: false, optional: true, required: false
  private _num2?: string; 
  public get num2() {
    return this.getStringAttribute('num2');
  }
  public set num2(value: string) {
    this._num2 = value;
  }
  public resetNum2() {
    this._num2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get num2Input() {
    return this._num2;
  }

  // prepend - computed: false, optional: true, required: false
  private _prepend?: string; 
  public get prepend() {
    return this.getStringAttribute('prepend');
  }
  public set prepend(value: string) {
    this._prepend = value;
  }
  public resetPrepend() {
    this._prepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependInput() {
    return this._prepend;
  }
}
export interface RouteMapSetCommListStruct {
  /**
  * Delete matching communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#delete RouteMap#delete}
  */
  readonly delete?: number;
  /**
  * Community-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name RouteMap#name}
  */
  readonly name?: string;
  /**
  * Delete matching communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#name_delete RouteMap#name_delete}
  */
  readonly nameDelete?: number;
  /**
  * Community-list number (expanded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#v_exp RouteMap#v_exp}
  */
  readonly vExp?: number;
  /**
  * Delete matching communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#v_exp_delete RouteMap#v_exp_delete}
  */
  readonly vExpDelete?: number;
  /**
  * Community-list number (standard)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#v_std RouteMap#v_std}
  */
  readonly vStd?: number;
}

export function routeMapSetCommListStructToTerraform(struct?: RouteMapSetCommListStructOutputReference | RouteMapSetCommListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    name: cdktf.stringToTerraform(struct!.name),
    name_delete: cdktf.numberToTerraform(struct!.nameDelete),
    v_exp: cdktf.numberToTerraform(struct!.vExp),
    v_exp_delete: cdktf.numberToTerraform(struct!.vExpDelete),
    v_std: cdktf.numberToTerraform(struct!.vStd),
  }
}


export function routeMapSetCommListStructToHclTerraform(struct?: RouteMapSetCommListStructOutputReference | RouteMapSetCommListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
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
    name_delete: {
      value: cdktf.numberToHclTerraform(struct!.nameDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_exp: {
      value: cdktf.numberToHclTerraform(struct!.vExp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_exp_delete: {
      value: cdktf.numberToHclTerraform(struct!.vExpDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_std: {
      value: cdktf.numberToHclTerraform(struct!.vStd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetCommListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetCommListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameDelete = this._nameDelete;
    }
    if (this._vExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vExp = this._vExp;
    }
    if (this._vExpDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.vExpDelete = this._vExpDelete;
    }
    if (this._vStd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vStd = this._vStd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetCommListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._name = undefined;
      this._nameDelete = undefined;
      this._vExp = undefined;
      this._vExpDelete = undefined;
      this._vStd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._name = value.name;
      this._nameDelete = value.nameDelete;
      this._vExp = value.vExp;
      this._vExpDelete = value.vExpDelete;
      this._vStd = value.vStd;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // name_delete - computed: false, optional: true, required: false
  private _nameDelete?: number; 
  public get nameDelete() {
    return this.getNumberAttribute('name_delete');
  }
  public set nameDelete(value: number) {
    this._nameDelete = value;
  }
  public resetNameDelete() {
    this._nameDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDeleteInput() {
    return this._nameDelete;
  }

  // v_exp - computed: false, optional: true, required: false
  private _vExp?: number; 
  public get vExp() {
    return this.getNumberAttribute('v_exp');
  }
  public set vExp(value: number) {
    this._vExp = value;
  }
  public resetVExp() {
    this._vExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vExpInput() {
    return this._vExp;
  }

  // v_exp_delete - computed: false, optional: true, required: false
  private _vExpDelete?: number; 
  public get vExpDelete() {
    return this.getNumberAttribute('v_exp_delete');
  }
  public set vExpDelete(value: number) {
    this._vExpDelete = value;
  }
  public resetVExpDelete() {
    this._vExpDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vExpDeleteInput() {
    return this._vExpDelete;
  }

  // v_std - computed: false, optional: true, required: false
  private _vStd?: number; 
  public get vStd() {
    return this.getNumberAttribute('v_std');
  }
  public set vStd(value: number) {
    this._vStd = value;
  }
  public resetVStd() {
    this._vStd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vStdInput() {
    return this._vStd;
  }
}
export interface RouteMapSetDampeningCfg {
  /**
  * Enable route-flap dampening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#dampening RouteMap#dampening}
  */
  readonly dampening?: number;
  /**
  * Reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#dampening_half_time RouteMap#dampening_half_time}
  */
  readonly dampeningHalfTime?: number;
  /**
  * Maximum duration to suppress a stable route(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#dampening_max_supress RouteMap#dampening_max_supress}
  */
  readonly dampeningMaxSupress?: number;
  /**
  * Un-reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#dampening_penalty RouteMap#dampening_penalty}
  */
  readonly dampeningPenalty?: number;
  /**
  * Value to start reusing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#dampening_reuse RouteMap#dampening_reuse}
  */
  readonly dampeningReuse?: number;
  /**
  * Value to start suppressing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#dampening_supress RouteMap#dampening_supress}
  */
  readonly dampeningSupress?: number;
}

export function routeMapSetDampeningCfgToTerraform(struct?: RouteMapSetDampeningCfgOutputReference | RouteMapSetDampeningCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dampening: cdktf.numberToTerraform(struct!.dampening),
    dampening_half_time: cdktf.numberToTerraform(struct!.dampeningHalfTime),
    dampening_max_supress: cdktf.numberToTerraform(struct!.dampeningMaxSupress),
    dampening_penalty: cdktf.numberToTerraform(struct!.dampeningPenalty),
    dampening_reuse: cdktf.numberToTerraform(struct!.dampeningReuse),
    dampening_supress: cdktf.numberToTerraform(struct!.dampeningSupress),
  }
}


export function routeMapSetDampeningCfgToHclTerraform(struct?: RouteMapSetDampeningCfgOutputReference | RouteMapSetDampeningCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dampening: {
      value: cdktf.numberToHclTerraform(struct!.dampening),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_half_time: {
      value: cdktf.numberToHclTerraform(struct!.dampeningHalfTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_max_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningMaxSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_penalty: {
      value: cdktf.numberToHclTerraform(struct!.dampeningPenalty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_reuse: {
      value: cdktf.numberToHclTerraform(struct!.dampeningReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetDampeningCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetDampeningCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dampening !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampening = this._dampening;
    }
    if (this._dampeningHalfTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningHalfTime = this._dampeningHalfTime;
    }
    if (this._dampeningMaxSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningMaxSupress = this._dampeningMaxSupress;
    }
    if (this._dampeningPenalty !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningPenalty = this._dampeningPenalty;
    }
    if (this._dampeningReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningReuse = this._dampeningReuse;
    }
    if (this._dampeningSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningSupress = this._dampeningSupress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetDampeningCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dampening = undefined;
      this._dampeningHalfTime = undefined;
      this._dampeningMaxSupress = undefined;
      this._dampeningPenalty = undefined;
      this._dampeningReuse = undefined;
      this._dampeningSupress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dampening = value.dampening;
      this._dampeningHalfTime = value.dampeningHalfTime;
      this._dampeningMaxSupress = value.dampeningMaxSupress;
      this._dampeningPenalty = value.dampeningPenalty;
      this._dampeningReuse = value.dampeningReuse;
      this._dampeningSupress = value.dampeningSupress;
    }
  }

  // dampening - computed: false, optional: true, required: false
  private _dampening?: number; 
  public get dampening() {
    return this.getNumberAttribute('dampening');
  }
  public set dampening(value: number) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // dampening_half_time - computed: false, optional: true, required: false
  private _dampeningHalfTime?: number; 
  public get dampeningHalfTime() {
    return this.getNumberAttribute('dampening_half_time');
  }
  public set dampeningHalfTime(value: number) {
    this._dampeningHalfTime = value;
  }
  public resetDampeningHalfTime() {
    this._dampeningHalfTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningHalfTimeInput() {
    return this._dampeningHalfTime;
  }

  // dampening_max_supress - computed: false, optional: true, required: false
  private _dampeningMaxSupress?: number; 
  public get dampeningMaxSupress() {
    return this.getNumberAttribute('dampening_max_supress');
  }
  public set dampeningMaxSupress(value: number) {
    this._dampeningMaxSupress = value;
  }
  public resetDampeningMaxSupress() {
    this._dampeningMaxSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaxSupressInput() {
    return this._dampeningMaxSupress;
  }

  // dampening_penalty - computed: false, optional: true, required: false
  private _dampeningPenalty?: number; 
  public get dampeningPenalty() {
    return this.getNumberAttribute('dampening_penalty');
  }
  public set dampeningPenalty(value: number) {
    this._dampeningPenalty = value;
  }
  public resetDampeningPenalty() {
    this._dampeningPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningPenaltyInput() {
    return this._dampeningPenalty;
  }

  // dampening_reuse - computed: false, optional: true, required: false
  private _dampeningReuse?: number; 
  public get dampeningReuse() {
    return this.getNumberAttribute('dampening_reuse');
  }
  public set dampeningReuse(value: number) {
    this._dampeningReuse = value;
  }
  public resetDampeningReuse() {
    this._dampeningReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningReuseInput() {
    return this._dampeningReuse;
  }

  // dampening_supress - computed: false, optional: true, required: false
  private _dampeningSupress?: number; 
  public get dampeningSupress() {
    return this.getNumberAttribute('dampening_supress');
  }
  public set dampeningSupress(value: number) {
    this._dampeningSupress = value;
  }
  public resetDampeningSupress() {
    this._dampeningSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningSupressInput() {
    return this._dampeningSupress;
  }
}
export interface RouteMapSetDdos {
  /**
  * Class-List Cid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#class_list_cid RouteMap#class_list_cid}
  */
  readonly classListCid?: number;
  /**
  * Class-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#class_list_name RouteMap#class_list_name}
  */
  readonly classListName?: string;
  /**
  * Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#zone RouteMap#zone}
  */
  readonly zone?: string;
}

export function routeMapSetDdosToTerraform(struct?: RouteMapSetDdosOutputReference | RouteMapSetDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list_cid: cdktf.numberToTerraform(struct!.classListCid),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function routeMapSetDdosToHclTerraform(struct?: RouteMapSetDdosOutputReference | RouteMapSetDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list_cid: {
      value: cdktf.numberToHclTerraform(struct!.classListCid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetDdosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetDdos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classListCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCid = this._classListCid;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetDdos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classListCid = undefined;
      this._classListName = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classListCid = value.classListCid;
      this._classListName = value.classListName;
      this._zone = value.zone;
    }
  }

  // class_list_cid - computed: false, optional: true, required: false
  private _classListCid?: number; 
  public get classListCid() {
    return this.getNumberAttribute('class_list_cid');
  }
  public set classListCid(value: number) {
    this._classListCid = value;
  }
  public resetClassListCid() {
    this._classListCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCidInput() {
    return this._classListCid;
  }

  // class_list_name - computed: false, optional: true, required: false
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  public resetClassListName() {
    this._classListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface RouteMapSetExtcommunityRt {
  /**
  * VPN extended community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: string;
}

export function routeMapSetExtcommunityRtToTerraform(struct?: RouteMapSetExtcommunityRtOutputReference | RouteMapSetExtcommunityRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetExtcommunityRtToHclTerraform(struct?: RouteMapSetExtcommunityRtOutputReference | RouteMapSetExtcommunityRt): any {
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

export class RouteMapSetExtcommunityRtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetExtcommunityRt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetExtcommunityRt | undefined) {
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
export interface RouteMapSetExtcommunitySoo {
  /**
  * VPN extended community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: string;
}

export function routeMapSetExtcommunitySooToTerraform(struct?: RouteMapSetExtcommunitySooOutputReference | RouteMapSetExtcommunitySoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetExtcommunitySooToHclTerraform(struct?: RouteMapSetExtcommunitySooOutputReference | RouteMapSetExtcommunitySoo): any {
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

export class RouteMapSetExtcommunitySooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetExtcommunitySoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetExtcommunitySoo | undefined) {
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
export interface RouteMapSetExtcommunity {
  /**
  * rt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#rt RouteMap#rt}
  */
  readonly rt?: RouteMapSetExtcommunityRt;
  /**
  * soo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#soo RouteMap#soo}
  */
  readonly soo?: RouteMapSetExtcommunitySoo;
}

export function routeMapSetExtcommunityToTerraform(struct?: RouteMapSetExtcommunityOutputReference | RouteMapSetExtcommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rt: routeMapSetExtcommunityRtToTerraform(struct!.rt),
    soo: routeMapSetExtcommunitySooToTerraform(struct!.soo),
  }
}


export function routeMapSetExtcommunityToHclTerraform(struct?: RouteMapSetExtcommunityOutputReference | RouteMapSetExtcommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rt: {
      value: routeMapSetExtcommunityRtToHclTerraform(struct!.rt),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetExtcommunityRtList",
    },
    soo: {
      value: routeMapSetExtcommunitySooToHclTerraform(struct!.soo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetExtcommunitySooList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetExtcommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetExtcommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rt = this._rt?.internalValue;
    }
    if (this._soo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soo = this._soo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetExtcommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rt.internalValue = undefined;
      this._soo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rt.internalValue = value.rt;
      this._soo.internalValue = value.soo;
    }
  }

  // rt - computed: false, optional: true, required: false
  private _rt = new RouteMapSetExtcommunityRtOutputReference(this, "rt");
  public get rt() {
    return this._rt;
  }
  public putRt(value: RouteMapSetExtcommunityRt) {
    this._rt.internalValue = value;
  }
  public resetRt() {
    this._rt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtInput() {
    return this._rt.internalValue;
  }

  // soo - computed: false, optional: true, required: false
  private _soo = new RouteMapSetExtcommunitySooOutputReference(this, "soo");
  public get soo() {
    return this._soo;
  }
  public putSoo(value: RouteMapSetExtcommunitySoo) {
    this._soo.internalValue = value;
  }
  public resetSoo() {
    this._soo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sooInput() {
    return this._soo.internalValue;
  }
}
export interface RouteMapSetIpNextHop {
  /**
  * IP address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#address RouteMap#address}
  */
  readonly address?: string;
}

export function routeMapSetIpNextHopToTerraform(struct?: RouteMapSetIpNextHopOutputReference | RouteMapSetIpNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routeMapSetIpNextHopToHclTerraform(struct?: RouteMapSetIpNextHopOutputReference | RouteMapSetIpNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface RouteMapSetIp {
  /**
  * next_hop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#next_hop RouteMap#next_hop}
  */
  readonly nextHop?: RouteMapSetIpNextHop;
}

export function routeMapSetIpToTerraform(struct?: RouteMapSetIpOutputReference | RouteMapSetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: routeMapSetIpNextHopToTerraform(struct!.nextHop),
  }
}


export function routeMapSetIpToHclTerraform(struct?: RouteMapSetIpOutputReference | RouteMapSetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: routeMapSetIpNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpNextHopList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHop.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHop.internalValue = value.nextHop;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new RouteMapSetIpNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: RouteMapSetIpNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }
}
export interface RouteMapSetIpv6NextHop1Local {
  /**
  * IPv6 address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#address RouteMap#address}
  */
  readonly address?: string;
}

export function routeMapSetIpv6NextHop1LocalToTerraform(struct?: RouteMapSetIpv6NextHop1LocalOutputReference | RouteMapSetIpv6NextHop1Local): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routeMapSetIpv6NextHop1LocalToHclTerraform(struct?: RouteMapSetIpv6NextHop1LocalOutputReference | RouteMapSetIpv6NextHop1Local): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpv6NextHop1LocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpv6NextHop1Local | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpv6NextHop1Local | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface RouteMapSetIpv6NextHop1 {
  /**
  * global address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#address RouteMap#address}
  */
  readonly address?: string;
  /**
  * local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#local RouteMap#local}
  */
  readonly local?: RouteMapSetIpv6NextHop1Local;
}

export function routeMapSetIpv6NextHop1ToTerraform(struct?: RouteMapSetIpv6NextHop1OutputReference | RouteMapSetIpv6NextHop1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    local: routeMapSetIpv6NextHop1LocalToTerraform(struct!.local),
  }
}


export function routeMapSetIpv6NextHop1ToHclTerraform(struct?: RouteMapSetIpv6NextHop1OutputReference | RouteMapSetIpv6NextHop1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local: {
      value: routeMapSetIpv6NextHop1LocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpv6NextHop1LocalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpv6NextHop1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpv6NextHop1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpv6NextHop1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._local.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._local.internalValue = value.local;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // local - computed: false, optional: true, required: false
  private _local = new RouteMapSetIpv6NextHop1LocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: RouteMapSetIpv6NextHop1Local) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }
}
export interface RouteMapSetIpv6 {
  /**
  * next_hop_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#next_hop_1 RouteMap#next_hop_1}
  */
  readonly nextHop1?: RouteMapSetIpv6NextHop1;
}

export function routeMapSetIpv6ToTerraform(struct?: RouteMapSetIpv6OutputReference | RouteMapSetIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop_1: routeMapSetIpv6NextHop1ToTerraform(struct!.nextHop1),
  }
}


export function routeMapSetIpv6ToHclTerraform(struct?: RouteMapSetIpv6OutputReference | RouteMapSetIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop_1: {
      value: routeMapSetIpv6NextHop1ToHclTerraform(struct!.nextHop1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpv6NextHop1List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop1 = this._nextHop1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHop1.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHop1.internalValue = value.nextHop1;
    }
  }

  // next_hop_1 - computed: false, optional: true, required: false
  private _nextHop1 = new RouteMapSetIpv6NextHop1OutputReference(this, "next_hop_1");
  public get nextHop1() {
    return this._nextHop1;
  }
  public putNextHop1(value: RouteMapSetIpv6NextHop1) {
    this._nextHop1.internalValue = value;
  }
  public resetNextHop1() {
    this._nextHop1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHop1Input() {
    return this._nextHop1.internalValue;
  }
}
export interface RouteMapSetLargeCommListStruct {
  /**
  * Large Community-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#l_name RouteMap#l_name}
  */
  readonly lName?: string;
  /**
  * Large Community-list number (expanded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#l_v_exp RouteMap#l_v_exp}
  */
  readonly lVExp?: number;
  /**
  * Delete matching large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#l_v_exp_delete RouteMap#l_v_exp_delete}
  */
  readonly lVExpDelete?: number;
  /**
  * Large Community-list number (standard)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#l_v_std RouteMap#l_v_std}
  */
  readonly lVStd?: number;
  /**
  * Delete matching large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#l_v_std_delete RouteMap#l_v_std_delete}
  */
  readonly lVStdDelete?: number;
  /**
  * Delete matching large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#large_name_delete RouteMap#large_name_delete}
  */
  readonly largeNameDelete?: number;
}

export function routeMapSetLargeCommListStructToTerraform(struct?: RouteMapSetLargeCommListStructOutputReference | RouteMapSetLargeCommListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l_name: cdktf.stringToTerraform(struct!.lName),
    l_v_exp: cdktf.numberToTerraform(struct!.lVExp),
    l_v_exp_delete: cdktf.numberToTerraform(struct!.lVExpDelete),
    l_v_std: cdktf.numberToTerraform(struct!.lVStd),
    l_v_std_delete: cdktf.numberToTerraform(struct!.lVStdDelete),
    large_name_delete: cdktf.numberToTerraform(struct!.largeNameDelete),
  }
}


export function routeMapSetLargeCommListStructToHclTerraform(struct?: RouteMapSetLargeCommListStructOutputReference | RouteMapSetLargeCommListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l_name: {
      value: cdktf.stringToHclTerraform(struct!.lName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l_v_exp: {
      value: cdktf.numberToHclTerraform(struct!.lVExp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l_v_exp_delete: {
      value: cdktf.numberToHclTerraform(struct!.lVExpDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l_v_std: {
      value: cdktf.numberToHclTerraform(struct!.lVStd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l_v_std_delete: {
      value: cdktf.numberToHclTerraform(struct!.lVStdDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    large_name_delete: {
      value: cdktf.numberToHclTerraform(struct!.largeNameDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetLargeCommListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetLargeCommListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lName = this._lName;
    }
    if (this._lVExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVExp = this._lVExp;
    }
    if (this._lVExpDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVExpDelete = this._lVExpDelete;
    }
    if (this._lVStd !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVStd = this._lVStd;
    }
    if (this._lVStdDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVStdDelete = this._lVStdDelete;
    }
    if (this._largeNameDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeNameDelete = this._largeNameDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetLargeCommListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lName = undefined;
      this._lVExp = undefined;
      this._lVExpDelete = undefined;
      this._lVStd = undefined;
      this._lVStdDelete = undefined;
      this._largeNameDelete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lName = value.lName;
      this._lVExp = value.lVExp;
      this._lVExpDelete = value.lVExpDelete;
      this._lVStd = value.lVStd;
      this._lVStdDelete = value.lVStdDelete;
      this._largeNameDelete = value.largeNameDelete;
    }
  }

  // l_name - computed: false, optional: true, required: false
  private _lName?: string; 
  public get lName() {
    return this.getStringAttribute('l_name');
  }
  public set lName(value: string) {
    this._lName = value;
  }
  public resetLName() {
    this._lName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lNameInput() {
    return this._lName;
  }

  // l_v_exp - computed: false, optional: true, required: false
  private _lVExp?: number; 
  public get lVExp() {
    return this.getNumberAttribute('l_v_exp');
  }
  public set lVExp(value: number) {
    this._lVExp = value;
  }
  public resetLVExp() {
    this._lVExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVExpInput() {
    return this._lVExp;
  }

  // l_v_exp_delete - computed: false, optional: true, required: false
  private _lVExpDelete?: number; 
  public get lVExpDelete() {
    return this.getNumberAttribute('l_v_exp_delete');
  }
  public set lVExpDelete(value: number) {
    this._lVExpDelete = value;
  }
  public resetLVExpDelete() {
    this._lVExpDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVExpDeleteInput() {
    return this._lVExpDelete;
  }

  // l_v_std - computed: false, optional: true, required: false
  private _lVStd?: number; 
  public get lVStd() {
    return this.getNumberAttribute('l_v_std');
  }
  public set lVStd(value: number) {
    this._lVStd = value;
  }
  public resetLVStd() {
    this._lVStd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVStdInput() {
    return this._lVStd;
  }

  // l_v_std_delete - computed: false, optional: true, required: false
  private _lVStdDelete?: number; 
  public get lVStdDelete() {
    return this.getNumberAttribute('l_v_std_delete');
  }
  public set lVStdDelete(value: number) {
    this._lVStdDelete = value;
  }
  public resetLVStdDelete() {
    this._lVStdDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVStdDeleteInput() {
    return this._lVStdDelete;
  }

  // large_name_delete - computed: false, optional: true, required: false
  private _largeNameDelete?: number; 
  public get largeNameDelete() {
    return this.getNumberAttribute('large_name_delete');
  }
  public set largeNameDelete(value: number) {
    this._largeNameDelete = value;
  }
  public resetLargeNameDelete() {
    this._largeNameDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeNameDeleteInput() {
    return this._largeNameDelete;
  }
}
export interface RouteMapSetLevel {
  /**
  * 'level-1': Export into a level-1 area; 'level-1-2': Export into level-1 and level-2; 'level-2': Export into level-2 sub-domain;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: string;
}

export function routeMapSetLevelToTerraform(struct?: RouteMapSetLevelOutputReference | RouteMapSetLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetLevelToHclTerraform(struct?: RouteMapSetLevelOutputReference | RouteMapSetLevel): any {
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

export class RouteMapSetLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetLevel | undefined) {
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
export interface RouteMapSetLocalPreference {
  /**
  * Preference value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#val RouteMap#val}
  */
  readonly val?: number;
}

export function routeMapSetLocalPreferenceToTerraform(struct?: RouteMapSetLocalPreferenceOutputReference | RouteMapSetLocalPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    val: cdktf.numberToTerraform(struct!.val),
  }
}


export function routeMapSetLocalPreferenceToHclTerraform(struct?: RouteMapSetLocalPreferenceOutputReference | RouteMapSetLocalPreference): any {
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

export class RouteMapSetLocalPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetLocalPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetLocalPreference | undefined) {
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
export interface RouteMapSetMetric {
  /**
  * Metric Value (from -4294967295 to 4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: string;
}

export function routeMapSetMetricToTerraform(struct?: RouteMapSetMetricOutputReference | RouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetMetricToHclTerraform(struct?: RouteMapSetMetricOutputReference | RouteMapSetMetric): any {
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

export class RouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetMetric | undefined) {
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
export interface RouteMapSetMetricType {
  /**
  * 'external': IS-IS external metric type; 'internal': IS-IS internal metric type; 'type-1': OSPF external type 1 metric; 'type-2': OSPF external type 2 metric;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: string;
}

export function routeMapSetMetricTypeToTerraform(struct?: RouteMapSetMetricTypeOutputReference | RouteMapSetMetricType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetMetricTypeToHclTerraform(struct?: RouteMapSetMetricTypeOutputReference | RouteMapSetMetricType): any {
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

export class RouteMapSetMetricTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetMetricType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetMetricType | undefined) {
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
export interface RouteMapSetOrigin {
  /**
  * remote EGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#egp RouteMap#egp}
  */
  readonly egp?: number;
  /**
  * local IGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#igp RouteMap#igp}
  */
  readonly igp?: number;
  /**
  * unknown heritage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#incomplete RouteMap#incomplete}
  */
  readonly incomplete?: number;
}

export function routeMapSetOriginToTerraform(struct?: RouteMapSetOriginOutputReference | RouteMapSetOrigin): any {
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


export function routeMapSetOriginToHclTerraform(struct?: RouteMapSetOriginOutputReference | RouteMapSetOrigin): any {
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

export class RouteMapSetOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetOrigin | undefined {
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

  public set internalValue(value: RouteMapSetOrigin | undefined) {
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
export interface RouteMapSetOriginatorId {
  /**
  * IP address of originator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#originator_ip RouteMap#originator_ip}
  */
  readonly originatorIp?: string;
}

export function routeMapSetOriginatorIdToTerraform(struct?: RouteMapSetOriginatorIdOutputReference | RouteMapSetOriginatorId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    originator_ip: cdktf.stringToTerraform(struct!.originatorIp),
  }
}


export function routeMapSetOriginatorIdToHclTerraform(struct?: RouteMapSetOriginatorIdOutputReference | RouteMapSetOriginatorId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    originator_ip: {
      value: cdktf.stringToHclTerraform(struct!.originatorIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetOriginatorIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetOriginatorId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originatorIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatorIp = this._originatorIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetOriginatorId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originatorIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originatorIp = value.originatorIp;
    }
  }

  // originator_ip - computed: false, optional: true, required: false
  private _originatorIp?: string; 
  public get originatorIp() {
    return this.getStringAttribute('originator_ip');
  }
  public set originatorIp(value: string) {
    this._originatorIp = value;
  }
  public resetOriginatorIp() {
    this._originatorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIpInput() {
    return this._originatorIp;
  }
}
export interface RouteMapSetTag {
  /**
  * Tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#value RouteMap#value}
  */
  readonly value?: number;
}

export function routeMapSetTagToTerraform(struct?: RouteMapSetTagOutputReference | RouteMapSetTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function routeMapSetTagToHclTerraform(struct?: RouteMapSetTagOutputReference | RouteMapSetTag): any {
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

export class RouteMapSetTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetTag | undefined) {
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
export interface RouteMapSetWeight {
  /**
  * Weight value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#weight_val RouteMap#weight_val}
  */
  readonly weightVal?: number;
}

export function routeMapSetWeightToTerraform(struct?: RouteMapSetWeightOutputReference | RouteMapSetWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight_val: cdktf.numberToTerraform(struct!.weightVal),
  }
}


export function routeMapSetWeightToHclTerraform(struct?: RouteMapSetWeightOutputReference | RouteMapSetWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight_val: {
      value: cdktf.numberToHclTerraform(struct!.weightVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightVal = this._weightVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightVal = value.weightVal;
    }
  }

  // weight_val - computed: false, optional: true, required: false
  private _weightVal?: number; 
  public get weightVal() {
    return this.getNumberAttribute('weight_val');
  }
  public set weightVal(value: number) {
    this._weightVal = value;
  }
  public resetWeightVal() {
    this._weightVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightValInput() {
    return this._weightVal;
  }
}
export interface RouteMapSet {
  /**
  * BGP atomic aggregate attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#atomic_aggregate RouteMap#atomic_aggregate}
  */
  readonly atomicAggregate?: number;
  /**
  * BGP community attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#community RouteMap#community}
  */
  readonly community?: string;
  /**
  * BGP large community attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#large_community RouteMap#large_community}
  */
  readonly largeCommunity?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#uuid RouteMap#uuid}
  */
  readonly uuid?: string;
  /**
  * aggregator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#aggregator RouteMap#aggregator}
  */
  readonly aggregator?: RouteMapSetAggregator;
  /**
  * as_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#as_path RouteMap#as_path}
  */
  readonly asPath?: RouteMapSetAsPath;
  /**
  * comm_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#comm_list RouteMap#comm_list}
  */
  readonly commList?: RouteMapSetCommListStruct;
  /**
  * dampening_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#dampening_cfg RouteMap#dampening_cfg}
  */
  readonly dampeningCfg?: RouteMapSetDampeningCfg;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ddos RouteMap#ddos}
  */
  readonly ddos?: RouteMapSetDdos;
  /**
  * extcommunity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#extcommunity RouteMap#extcommunity}
  */
  readonly extcommunity?: RouteMapSetExtcommunity;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ip RouteMap#ip}
  */
  readonly ip?: RouteMapSetIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#ipv6 RouteMap#ipv6}
  */
  readonly ipv6?: RouteMapSetIpv6;
  /**
  * large_comm_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#large_comm_list RouteMap#large_comm_list}
  */
  readonly largeCommList?: RouteMapSetLargeCommListStruct;
  /**
  * level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#level RouteMap#level}
  */
  readonly level?: RouteMapSetLevel;
  /**
  * local_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#local_preference RouteMap#local_preference}
  */
  readonly localPreference?: RouteMapSetLocalPreference;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#metric RouteMap#metric}
  */
  readonly metric?: RouteMapSetMetric;
  /**
  * metric_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#metric_type RouteMap#metric_type}
  */
  readonly metricType?: RouteMapSetMetricType;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#origin RouteMap#origin}
  */
  readonly origin?: RouteMapSetOrigin;
  /**
  * originator_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#originator_id RouteMap#originator_id}
  */
  readonly originatorId?: RouteMapSetOriginatorId;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#tag RouteMap#tag}
  */
  readonly tag?: RouteMapSetTag;
  /**
  * weight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#weight RouteMap#weight}
  */
  readonly weight?: RouteMapSetWeight;
}

export function routeMapSetToTerraform(struct?: RouteMapSetOutputReference | RouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atomic_aggregate: cdktf.numberToTerraform(struct!.atomicAggregate),
    community: cdktf.stringToTerraform(struct!.community),
    large_community: cdktf.stringToTerraform(struct!.largeCommunity),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    aggregator: routeMapSetAggregatorToTerraform(struct!.aggregator),
    as_path: routeMapSetAsPathToTerraform(struct!.asPath),
    comm_list: routeMapSetCommListStructToTerraform(struct!.commList),
    dampening_cfg: routeMapSetDampeningCfgToTerraform(struct!.dampeningCfg),
    ddos: routeMapSetDdosToTerraform(struct!.ddos),
    extcommunity: routeMapSetExtcommunityToTerraform(struct!.extcommunity),
    ip: routeMapSetIpToTerraform(struct!.ip),
    ipv6: routeMapSetIpv6ToTerraform(struct!.ipv6),
    large_comm_list: routeMapSetLargeCommListStructToTerraform(struct!.largeCommList),
    level: routeMapSetLevelToTerraform(struct!.level),
    local_preference: routeMapSetLocalPreferenceToTerraform(struct!.localPreference),
    metric: routeMapSetMetricToTerraform(struct!.metric),
    metric_type: routeMapSetMetricTypeToTerraform(struct!.metricType),
    origin: routeMapSetOriginToTerraform(struct!.origin),
    originator_id: routeMapSetOriginatorIdToTerraform(struct!.originatorId),
    tag: routeMapSetTagToTerraform(struct!.tag),
    weight: routeMapSetWeightToTerraform(struct!.weight),
  }
}


export function routeMapSetToHclTerraform(struct?: RouteMapSetOutputReference | RouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atomic_aggregate: {
      value: cdktf.numberToHclTerraform(struct!.atomicAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_community: {
      value: cdktf.stringToHclTerraform(struct!.largeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregator: {
      value: routeMapSetAggregatorToHclTerraform(struct!.aggregator),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetAggregatorList",
    },
    as_path: {
      value: routeMapSetAsPathToHclTerraform(struct!.asPath),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetAsPathList",
    },
    comm_list: {
      value: routeMapSetCommListStructToHclTerraform(struct!.commList),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetCommListStructList",
    },
    dampening_cfg: {
      value: routeMapSetDampeningCfgToHclTerraform(struct!.dampeningCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetDampeningCfgList",
    },
    ddos: {
      value: routeMapSetDdosToHclTerraform(struct!.ddos),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetDdosList",
    },
    extcommunity: {
      value: routeMapSetExtcommunityToHclTerraform(struct!.extcommunity),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetExtcommunityList",
    },
    ip: {
      value: routeMapSetIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpList",
    },
    ipv6: {
      value: routeMapSetIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpv6List",
    },
    large_comm_list: {
      value: routeMapSetLargeCommListStructToHclTerraform(struct!.largeCommList),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetLargeCommListStructList",
    },
    level: {
      value: routeMapSetLevelToHclTerraform(struct!.level),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetLevelList",
    },
    local_preference: {
      value: routeMapSetLocalPreferenceToHclTerraform(struct!.localPreference),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetLocalPreferenceList",
    },
    metric: {
      value: routeMapSetMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetMetricList",
    },
    metric_type: {
      value: routeMapSetMetricTypeToHclTerraform(struct!.metricType),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetMetricTypeList",
    },
    origin: {
      value: routeMapSetOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetOriginList",
    },
    originator_id: {
      value: routeMapSetOriginatorIdToHclTerraform(struct!.originatorId),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetOriginatorIdList",
    },
    tag: {
      value: routeMapSetTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetTagList",
    },
    weight: {
      value: routeMapSetWeightToHclTerraform(struct!.weight),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetWeightList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atomicAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atomicAggregate = this._atomicAggregate;
    }
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._largeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._aggregator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator?.internalValue;
    }
    if (this._asPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPath = this._asPath?.internalValue;
    }
    if (this._commList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commList = this._commList?.internalValue;
    }
    if (this._dampeningCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningCfg = this._dampeningCfg?.internalValue;
    }
    if (this._ddos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddos = this._ddos?.internalValue;
    }
    if (this._extcommunity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extcommunity = this._extcommunity?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._largeCommList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommList = this._largeCommList?.internalValue;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    if (this._localPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._metricType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType?.internalValue;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    if (this._originatorId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatorId = this._originatorId?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._weight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atomicAggregate = undefined;
      this._community = undefined;
      this._largeCommunity = undefined;
      this._uuid = undefined;
      this._aggregator.internalValue = undefined;
      this._asPath.internalValue = undefined;
      this._commList.internalValue = undefined;
      this._dampeningCfg.internalValue = undefined;
      this._ddos.internalValue = undefined;
      this._extcommunity.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._largeCommList.internalValue = undefined;
      this._level.internalValue = undefined;
      this._localPreference.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._metricType.internalValue = undefined;
      this._origin.internalValue = undefined;
      this._originatorId.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._weight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atomicAggregate = value.atomicAggregate;
      this._community = value.community;
      this._largeCommunity = value.largeCommunity;
      this._uuid = value.uuid;
      this._aggregator.internalValue = value.aggregator;
      this._asPath.internalValue = value.asPath;
      this._commList.internalValue = value.commList;
      this._dampeningCfg.internalValue = value.dampeningCfg;
      this._ddos.internalValue = value.ddos;
      this._extcommunity.internalValue = value.extcommunity;
      this._ip.internalValue = value.ip;
      this._ipv6.internalValue = value.ipv6;
      this._largeCommList.internalValue = value.largeCommList;
      this._level.internalValue = value.level;
      this._localPreference.internalValue = value.localPreference;
      this._metric.internalValue = value.metric;
      this._metricType.internalValue = value.metricType;
      this._origin.internalValue = value.origin;
      this._originatorId.internalValue = value.originatorId;
      this._tag.internalValue = value.tag;
      this._weight.internalValue = value.weight;
    }
  }

  // atomic_aggregate - computed: false, optional: true, required: false
  private _atomicAggregate?: number; 
  public get atomicAggregate() {
    return this.getNumberAttribute('atomic_aggregate');
  }
  public set atomicAggregate(value: number) {
    this._atomicAggregate = value;
  }
  public resetAtomicAggregate() {
    this._atomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicAggregateInput() {
    return this._atomicAggregate;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string; 
  public get largeCommunity() {
    return this.getStringAttribute('large_community');
  }
  public set largeCommunity(value: string) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
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

  // aggregator - computed: false, optional: true, required: false
  private _aggregator = new RouteMapSetAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }
  public putAggregator(value: RouteMapSetAggregator) {
    this._aggregator.internalValue = value;
  }
  public resetAggregator() {
    this._aggregator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator.internalValue;
  }

  // as_path - computed: false, optional: true, required: false
  private _asPath = new RouteMapSetAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }
  public putAsPath(value: RouteMapSetAsPath) {
    this._asPath.internalValue = value;
  }
  public resetAsPath() {
    this._asPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathInput() {
    return this._asPath.internalValue;
  }

  // comm_list - computed: false, optional: true, required: false
  private _commList = new RouteMapSetCommListStructOutputReference(this, "comm_list");
  public get commList() {
    return this._commList;
  }
  public putCommList(value: RouteMapSetCommListStruct) {
    this._commList.internalValue = value;
  }
  public resetCommList() {
    this._commList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commListInput() {
    return this._commList.internalValue;
  }

  // dampening_cfg - computed: false, optional: true, required: false
  private _dampeningCfg = new RouteMapSetDampeningCfgOutputReference(this, "dampening_cfg");
  public get dampeningCfg() {
    return this._dampeningCfg;
  }
  public putDampeningCfg(value: RouteMapSetDampeningCfg) {
    this._dampeningCfg.internalValue = value;
  }
  public resetDampeningCfg() {
    this._dampeningCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningCfgInput() {
    return this._dampeningCfg.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new RouteMapSetDdosOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: RouteMapSetDdos) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }

  // extcommunity - computed: false, optional: true, required: false
  private _extcommunity = new RouteMapSetExtcommunityOutputReference(this, "extcommunity");
  public get extcommunity() {
    return this._extcommunity;
  }
  public putExtcommunity(value: RouteMapSetExtcommunity) {
    this._extcommunity.internalValue = value;
  }
  public resetExtcommunity() {
    this._extcommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extcommunityInput() {
    return this._extcommunity.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new RouteMapSetIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: RouteMapSetIp) {
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
  private _ipv6 = new RouteMapSetIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RouteMapSetIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // large_comm_list - computed: false, optional: true, required: false
  private _largeCommList = new RouteMapSetLargeCommListStructOutputReference(this, "large_comm_list");
  public get largeCommList() {
    return this._largeCommList;
  }
  public putLargeCommList(value: RouteMapSetLargeCommListStruct) {
    this._largeCommList.internalValue = value;
  }
  public resetLargeCommList() {
    this._largeCommList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommListInput() {
    return this._largeCommList.internalValue;
  }

  // level - computed: false, optional: true, required: false
  private _level = new RouteMapSetLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: RouteMapSetLevel) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference = new RouteMapSetLocalPreferenceOutputReference(this, "local_preference");
  public get localPreference() {
    return this._localPreference;
  }
  public putLocalPreference(value: RouteMapSetLocalPreference) {
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
  private _metric = new RouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: RouteMapSetMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType = new RouteMapSetMetricTypeOutputReference(this, "metric_type");
  public get metricType() {
    return this._metricType;
  }
  public putMetricType(value: RouteMapSetMetricType) {
    this._metricType.internalValue = value;
  }
  public resetMetricType() {
    this._metricType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new RouteMapSetOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: RouteMapSetOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // originator_id - computed: false, optional: true, required: false
  private _originatorId = new RouteMapSetOriginatorIdOutputReference(this, "originator_id");
  public get originatorId() {
    return this._originatorId;
  }
  public putOriginatorId(value: RouteMapSetOriginatorId) {
    this._originatorId.internalValue = value;
  }
  public resetOriginatorId() {
    this._originatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIdInput() {
    return this._originatorId.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new RouteMapSetTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: RouteMapSetTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight = new RouteMapSetWeightOutputReference(this, "weight");
  public get weight() {
    return this._weight;
  }
  public putWeight(value: RouteMapSetWeight) {
    this._weight.internalValue = value;
  }
  public resetWeight() {
    this._weight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map thunder_route_map}
*/
export class RouteMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_route_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteMap to import
  * @param importFromId The id of the existing RouteMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_route_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/route_map thunder_route_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteMapConfig
  */
  public constructor(scope: Construct, id: string, config: RouteMapConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_route_map',
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
    this._action = config.action;
    this._id = config.id;
    this._sequence = config.sequence;
    this._tag = config.tag;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._match.internalValue = config.match;
    this._set.internalValue = config.set;
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
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
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

  // match - computed: false, optional: true, required: false
  private _match = new RouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: RouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new RouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: RouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      sequence: cdktf.numberToTerraform(this._sequence),
      tag: cdktf.stringToTerraform(this._tag),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      match: routeMapMatchToTerraform(this._match.internalValue),
      set: routeMapSetToTerraform(this._set.internalValue),
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
        value: cdktf.numberToHclTerraform(this._sequence),
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
      match: {
        value: routeMapMatchToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapMatchList",
      },
      set: {
        value: routeMapSetToHclTerraform(this._set.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
