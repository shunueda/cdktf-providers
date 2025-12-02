// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * latest version of app profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#latest_version AppProfile#latest_version}
  */
  readonly latestVersion?: number;
  /**
  * user defined name for the App profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * status of the app profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#status AppProfile#status}
  */
  readonly status?: string;
  /**
  * user defined title for the app profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#title AppProfile#title}
  */
  readonly title?: string;
  /**
  * app_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#app_policies AppProfile#app_policies}
  */
  readonly appPolicies?: AppProfileAppPolicies[] | cdktf.IResolvable;
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#network_policies AppProfile#network_policies}
  */
  readonly networkPolicies?: AppProfileNetworkPolicies[] | cdktf.IResolvable;
  /**
  * volume_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#volume_policies AppProfile#volume_policies}
  */
  readonly volumePolicies?: AppProfileVolumePolicies[] | cdktf.IResolvable;
}
export interface AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams {
  /**
  * Application port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#port AppProfile#port}
  */
  readonly port?: number;
}

export function appProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigInterfacesAclsActions {
  /**
  * ACE drop flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#drop AppProfile#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * ACE limit flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limit AppProfile#limit}
  */
  readonly limit?: boolean | cdktf.IResolvable;
  /**
  * ACE limit burst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitburst AppProfile#limitburst}
  */
  readonly limitburst?: number;
  /**
  * ACE limit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitrate AppProfile#limitrate}
  */
  readonly limitrate?: number;
  /**
  * ACE limit unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitunit AppProfile#limitunit}
  */
  readonly limitunit?: string;
  /**
  * application port map flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#portmap AppProfile#portmap}
  */
  readonly portmap?: boolean | cdktf.IResolvable;
  /**
  * mapparams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#mapparams AppProfile#mapparams}
  */
  readonly mapparams?: AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigInterfacesAclsActionsToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.booleanToTerraform(struct!.drop),
    limit: cdktf.booleanToTerraform(struct!.limit),
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
    portmap: cdktf.booleanToTerraform(struct!.portmap),
    mapparams: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsToTerraform, true)(struct!.mapparams),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesAclsActionsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.booleanToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmap: {
      value: cdktf.booleanToHclTerraform(struct!.portmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapparams: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsToHclTerraform, true)(struct!.mapparams),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfacesAclsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    if (this._portmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmap = this._portmap;
    }
    if (this._mapparams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapparams = this._mapparams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfacesAclsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drop = undefined;
      this._limit = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
      this._portmap = undefined;
      this._mapparams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drop = value.drop;
      this._limit = value.limit;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
      this._portmap = value.portmap;
      this._mapparams.internalValue = value.mapparams;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: boolean | cdktf.IResolvable; 
  public get limit() {
    return this.getBooleanAttribute('limit');
  }
  public set limit(value: boolean | cdktf.IResolvable) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }

  // portmap - computed: false, optional: true, required: false
  private _portmap?: boolean | cdktf.IResolvable; 
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
  public set portmap(value: boolean | cdktf.IResolvable) {
    this._portmap = value;
  }
  public resetPortmap() {
    this._portmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmapInput() {
    return this._portmap;
  }

  // mapparams - computed: false, optional: true, required: false
  private _mapparams = new AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }
  public putMapparams(value: AppProfileAppPoliciesAppConfigInterfacesAclsActionsMapparams[] | cdktf.IResolvable) {
    this._mapparams.internalValue = value;
  }
  public resetMapparams() {
    this._mapparams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapparamsInput() {
    return this._mapparams.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigInterfacesAclsActionsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfacesAclsActions[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesAclsActionsOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigInterfacesAclsMatches {
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#value AppProfile#value}
  */
  readonly value?: string;
}

export function appProfileAppPoliciesAppConfigInterfacesAclsMatchesToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesAclsMatchesToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class AppProfileAppPoliciesAppConfigInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfacesAclsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfacesAclsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

export class AppProfileAppPoliciesAppConfigInterfacesAclsMatchesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfacesAclsMatches[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesAclsMatchesOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigInterfacesAcls {
  /**
  * User defined name of the app ACE, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#actions AppProfile#actions}
  */
  readonly actions?: AppProfileAppPoliciesAppConfigInterfacesAclsActions[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#matches AppProfile#matches}
  */
  readonly matches?: AppProfileAppPoliciesAppConfigInterfacesAclsMatches[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigInterfacesAclsToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesAclsActionsToTerraform, true)(struct!.actions),
    matches: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesAclsMatchesToTerraform, true)(struct!.matches),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesAclsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesAcls | cdktf.IResolvable): any {
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
    actions: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesAclsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesAclsActionsList",
    },
    matches: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesAclsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesAclsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfacesAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfacesAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matches.internalValue = value.matches;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // actions - computed: false, optional: true, required: false
  private _actions = new AppProfileAppPoliciesAppConfigInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: AppProfileAppPoliciesAppConfigInterfacesAclsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new AppProfileAppPoliciesAppConfigInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: AppProfileAppPoliciesAppConfigInterfacesAclsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigInterfacesAclsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfacesAcls[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesAclsOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers {
  /**
  * lisp credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#credential AppProfile#credential}
  */
  readonly credential: string;
  /**
  * name/IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name_or_ip AppProfile#name_or_ip}
  */
  readonly nameOrIp: string;
}

export function appProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: false, required: true
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
  }
}

export class AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigInterfacesEidregister {
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#display_name AppProfile#display_name}
  */
  readonly displayName: string;
  /**
  * EID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#e_id AppProfile#e_id}
  */
  readonly eId: string;
  /**
  * EID hash length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#e_id_hash_len AppProfile#e_id_hash_len}
  */
  readonly eIdHashLen: number;
  /**
  * Lisp Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#lisp_instance AppProfile#lisp_instance}
  */
  readonly lispInstance: number;
  /**
  * Lisp Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#lisp_signature AppProfile#lisp_signature}
  */
  readonly lispSignature: string;
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#uuid AppProfile#uuid}
  */
  readonly uuid: string;
  /**
  * lisp_map_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#lisp_map_servers AppProfile#lisp_map_servers}
  */
  readonly lispMapServers: AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigInterfacesEidregisterToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesEidregister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    e_id: cdktf.stringToTerraform(struct!.eId),
    e_id_hash_len: cdktf.numberToTerraform(struct!.eIdHashLen),
    lisp_instance: cdktf.numberToTerraform(struct!.lispInstance),
    lisp_signature: cdktf.stringToTerraform(struct!.lispSignature),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lisp_map_servers: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersToTerraform, true)(struct!.lispMapServers),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesEidregisterToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesEidregister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id: {
      value: cdktf.stringToHclTerraform(struct!.eId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id_hash_len: {
      value: cdktf.numberToHclTerraform(struct!.eIdHashLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_instance: {
      value: cdktf.numberToHclTerraform(struct!.lispInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_signature: {
      value: cdktf.stringToHclTerraform(struct!.lispSignature),
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
    lisp_map_servers: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersToHclTerraform, true)(struct!.lispMapServers),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfacesEidregister | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._eId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eId = this._eId;
    }
    if (this._eIdHashLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eIdHashLen = this._eIdHashLen;
    }
    if (this._lispInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispInstance = this._lispInstance;
    }
    if (this._lispSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispSignature = this._lispSignature;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lispMapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispMapServers = this._lispMapServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfacesEidregister | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._eId = undefined;
      this._eIdHashLen = undefined;
      this._lispInstance = undefined;
      this._lispSignature = undefined;
      this._uuid = undefined;
      this._lispMapServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._eId = value.eId;
      this._eIdHashLen = value.eIdHashLen;
      this._lispInstance = value.lispInstance;
      this._lispSignature = value.lispSignature;
      this._uuid = value.uuid;
      this._lispMapServers.internalValue = value.lispMapServers;
    }
  }

  // app_cert - computed: true, optional: false, required: false
  public get appCert() {
    return this.getStringAttribute('app_cert');
  }

  // app_private_key - computed: true, optional: false, required: false
  public get appPrivateKey() {
    return this.getStringAttribute('app_private_key');
  }

  // app_public_key - computed: true, optional: false, required: false
  public get appPublicKey() {
    return this.getStringAttribute('app_public_key');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // e_id - computed: false, optional: false, required: true
  private _eId?: string; 
  public get eId() {
    return this.getStringAttribute('e_id');
  }
  public set eId(value: string) {
    this._eId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdInput() {
    return this._eId;
  }

  // e_id_hash_len - computed: false, optional: false, required: true
  private _eIdHashLen?: number; 
  public get eIdHashLen() {
    return this.getNumberAttribute('e_id_hash_len');
  }
  public set eIdHashLen(value: number) {
    this._eIdHashLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdHashLenInput() {
    return this._eIdHashLen;
  }

  // lisp_instance - computed: false, optional: false, required: true
  private _lispInstance?: number; 
  public get lispInstance() {
    return this.getNumberAttribute('lisp_instance');
  }
  public set lispInstance(value: number) {
    this._lispInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInstanceInput() {
    return this._lispInstance;
  }

  // lisp_signature - computed: false, optional: false, required: true
  private _lispSignature?: string; 
  public get lispSignature() {
    return this.getStringAttribute('lisp_signature');
  }
  public set lispSignature(value: string) {
    this._lispSignature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispSignatureInput() {
    return this._lispSignature;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // lisp_map_servers - computed: false, optional: false, required: true
  private _lispMapServers = new AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
  public get lispMapServers() {
    return this._lispMapServers;
  }
  public putLispMapServers(value: AppProfileAppPoliciesAppConfigInterfacesEidregisterLispMapServers[] | cdktf.IResolvable) {
    this._lispMapServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispMapServersInput() {
    return this._lispMapServers.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigInterfacesEidregisterList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfacesEidregister[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesEidregisterOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigInterfacesIo {
  /**
  * Physical Adapter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#tags AppProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * IoType specifies the type of the Input output of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
}

export function appProfileAppPoliciesAppConfigInterfacesIoToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesIoToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfacesIo | cdktf.IResolvable): any {
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class AppProfileAppPoliciesAppConfigInterfacesIoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfacesIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfacesIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._type = value.type;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

export class AppProfileAppPoliciesAppConfigInterfacesIoList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfacesIo[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesIoOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigInterfaces {
  /**
  * access port VLAN ID, vlan id of zero will be treated as trunk port and vlan id 1 is implicitly used by linux bridges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#access_vlan_id AppProfile#access_vlan_id}
  */
  readonly accessVlanId?: number;
  /**
  * default instance flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#default_net_instance AppProfile#default_net_instance}
  */
  readonly defaultNetInstance?: boolean | cdktf.IResolvable;
  /**
  * direct attach flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#directattach AppProfile#directattach}
  */
  readonly directattach?: boolean | cdktf.IResolvable;
  /**
  * intf Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#intfname AppProfile#intfname}
  */
  readonly intfname: string;
  /**
  * intforder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#intforder AppProfile#intforder}
  */
  readonly intforder?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#ipaddr AppProfile#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#macaddr AppProfile#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Network Instance name to be matched for interface assignment. Applicable only when "direct attach" flag is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#netinstname AppProfile#netinstname}
  */
  readonly netinstname: string;
  /**
  * Network Instance tag to be matched for interface assignment. Applicable only when "direct attach" flag is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#netinsttag AppProfile#netinsttag}
  */
  readonly netinsttag?: { [key: string]: string };
  /**
  * network name: will be deprecated in future, use netinstname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#netname AppProfile#netname}
  */
  readonly netname?: string;
  /**
  * Private IP flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#privateip AppProfile#privateip}
  */
  readonly privateip: boolean | cdktf.IResolvable;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#acls AppProfile#acls}
  */
  readonly acls?: AppProfileAppPoliciesAppConfigInterfacesAcls[] | cdktf.IResolvable;
  /**
  * eidregister block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#eidregister AppProfile#eidregister}
  */
  readonly eidregister?: AppProfileAppPoliciesAppConfigInterfacesEidregister[] | cdktf.IResolvable;
  /**
  * io block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#io AppProfile#io}
  */
  readonly io?: AppProfileAppPoliciesAppConfigInterfacesIo[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigInterfacesToTerraform(struct?: AppProfileAppPoliciesAppConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_vlan_id: cdktf.numberToTerraform(struct!.accessVlanId),
    default_net_instance: cdktf.booleanToTerraform(struct!.defaultNetInstance),
    directattach: cdktf.booleanToTerraform(struct!.directattach),
    intfname: cdktf.stringToTerraform(struct!.intfname),
    intforder: cdktf.numberToTerraform(struct!.intforder),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    netinstname: cdktf.stringToTerraform(struct!.netinstname),
    netinsttag: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.netinsttag),
    netname: cdktf.stringToTerraform(struct!.netname),
    privateip: cdktf.booleanToTerraform(struct!.privateip),
    acls: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesAclsToTerraform, true)(struct!.acls),
    eidregister: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesEidregisterToTerraform, true)(struct!.eidregister),
    io: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesIoToTerraform, true)(struct!.io),
  }
}


export function appProfileAppPoliciesAppConfigInterfacesToHclTerraform(struct?: AppProfileAppPoliciesAppConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.accessVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_net_instance: {
      value: cdktf.booleanToHclTerraform(struct!.defaultNetInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    directattach: {
      value: cdktf.booleanToHclTerraform(struct!.directattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intfname: {
      value: cdktf.stringToHclTerraform(struct!.intfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intforder: {
      value: cdktf.numberToHclTerraform(struct!.intforder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netinstname: {
      value: cdktf.stringToHclTerraform(struct!.netinstname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netinsttag: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.netinsttag),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    netname: {
      value: cdktf.stringToHclTerraform(struct!.netname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privateip: {
      value: cdktf.booleanToHclTerraform(struct!.privateip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    acls: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesAclsToHclTerraform, true)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesAclsList",
    },
    eidregister: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesEidregisterToHclTerraform, true)(struct!.eidregister),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesEidregisterList",
    },
    io: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesIoToHclTerraform, true)(struct!.io),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesIoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessVlanId = this._accessVlanId;
    }
    if (this._defaultNetInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNetInstance = this._defaultNetInstance;
    }
    if (this._directattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.directattach = this._directattach;
    }
    if (this._intfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfname = this._intfname;
    }
    if (this._intforder !== undefined) {
      hasAnyValues = true;
      internalValueResult.intforder = this._intforder;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._netinstname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netinstname = this._netinstname;
    }
    if (this._netinsttag !== undefined) {
      hasAnyValues = true;
      internalValueResult.netinsttag = this._netinsttag;
    }
    if (this._netname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netname = this._netname;
    }
    if (this._privateip !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateip = this._privateip;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    if (this._eidregister?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidregister = this._eidregister?.internalValue;
    }
    if (this._io?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.io = this._io?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessVlanId = undefined;
      this._defaultNetInstance = undefined;
      this._directattach = undefined;
      this._intfname = undefined;
      this._intforder = undefined;
      this._ipaddr = undefined;
      this._macaddr = undefined;
      this._netinstname = undefined;
      this._netinsttag = undefined;
      this._netname = undefined;
      this._privateip = undefined;
      this._acls.internalValue = undefined;
      this._eidregister.internalValue = undefined;
      this._io.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessVlanId = value.accessVlanId;
      this._defaultNetInstance = value.defaultNetInstance;
      this._directattach = value.directattach;
      this._intfname = value.intfname;
      this._intforder = value.intforder;
      this._ipaddr = value.ipaddr;
      this._macaddr = value.macaddr;
      this._netinstname = value.netinstname;
      this._netinsttag = value.netinsttag;
      this._netname = value.netname;
      this._privateip = value.privateip;
      this._acls.internalValue = value.acls;
      this._eidregister.internalValue = value.eidregister;
      this._io.internalValue = value.io;
    }
  }

  // access_vlan_id - computed: false, optional: true, required: false
  private _accessVlanId?: number; 
  public get accessVlanId() {
    return this.getNumberAttribute('access_vlan_id');
  }
  public set accessVlanId(value: number) {
    this._accessVlanId = value;
  }
  public resetAccessVlanId() {
    this._accessVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanIdInput() {
    return this._accessVlanId;
  }

  // default_net_instance - computed: false, optional: true, required: false
  private _defaultNetInstance?: boolean | cdktf.IResolvable; 
  public get defaultNetInstance() {
    return this.getBooleanAttribute('default_net_instance');
  }
  public set defaultNetInstance(value: boolean | cdktf.IResolvable) {
    this._defaultNetInstance = value;
  }
  public resetDefaultNetInstance() {
    this._defaultNetInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetInstanceInput() {
    return this._defaultNetInstance;
  }

  // directattach - computed: false, optional: true, required: false
  private _directattach?: boolean | cdktf.IResolvable; 
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }
  public set directattach(value: boolean | cdktf.IResolvable) {
    this._directattach = value;
  }
  public resetDirectattach() {
    this._directattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directattachInput() {
    return this._directattach;
  }

  // intfname - computed: false, optional: false, required: true
  private _intfname?: string; 
  public get intfname() {
    return this.getStringAttribute('intfname');
  }
  public set intfname(value: string) {
    this._intfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfnameInput() {
    return this._intfname;
  }

  // intforder - computed: false, optional: true, required: false
  private _intforder?: number; 
  public get intforder() {
    return this.getNumberAttribute('intforder');
  }
  public set intforder(value: number) {
    this._intforder = value;
  }
  public resetIntforder() {
    this._intforder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intforderInput() {
    return this._intforder;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // netinstid - computed: true, optional: false, required: false
  public get netinstid() {
    return this.getStringAttribute('netinstid');
  }

  // netinstname - computed: false, optional: false, required: true
  private _netinstname?: string; 
  public get netinstname() {
    return this.getStringAttribute('netinstname');
  }
  public set netinstname(value: string) {
    this._netinstname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netinstnameInput() {
    return this._netinstname;
  }

  // netinsttag - computed: false, optional: true, required: false
  private _netinsttag?: { [key: string]: string }; 
  public get netinsttag() {
    return this.getStringMapAttribute('netinsttag');
  }
  public set netinsttag(value: { [key: string]: string }) {
    this._netinsttag = value;
  }
  public resetNetinsttag() {
    this._netinsttag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netinsttagInput() {
    return this._netinsttag;
  }

  // netname - computed: false, optional: true, required: false
  private _netname?: string; 
  public get netname() {
    return this.getStringAttribute('netname');
  }
  public set netname(value: string) {
    this._netname = value;
  }
  public resetNetname() {
    this._netname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netnameInput() {
    return this._netname;
  }

  // privateip - computed: false, optional: false, required: true
  private _privateip?: boolean | cdktf.IResolvable; 
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
  public set privateip(value: boolean | cdktf.IResolvable) {
    this._privateip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
  }

  // acls - computed: false, optional: true, required: false
  private _acls = new AppProfileAppPoliciesAppConfigInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: AppProfileAppPoliciesAppConfigInterfacesAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // eidregister - computed: false, optional: true, required: false
  private _eidregister = new AppProfileAppPoliciesAppConfigInterfacesEidregisterList(this, "eidregister", false);
  public get eidregister() {
    return this._eidregister;
  }
  public putEidregister(value: AppProfileAppPoliciesAppConfigInterfacesEidregister[] | cdktf.IResolvable) {
    this._eidregister.internalValue = value;
  }
  public resetEidregister() {
    this._eidregister.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eidregisterInput() {
    return this._eidregister.internalValue;
  }

  // io - computed: false, optional: true, required: false
  private _io = new AppProfileAppPoliciesAppConfigInterfacesIoList(this, "io", false);
  public get io() {
    return this._io;
  }
  public putIo(value: AppProfileAppPoliciesAppConfigInterfacesIo[] | cdktf.IResolvable) {
    this._io.internalValue = value;
  }
  public resetIo() {
    this._io.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioInput() {
    return this._io.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigInterfacesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigInterfaces[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigInterfacesOutputReference {
    return new AppProfileAppPoliciesAppConfigInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigLogs {
  /**
  * Flags to enable / disable sending of logs generated by app instance to zedcloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#access AppProfile#access}
  */
  readonly access: boolean | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigLogsToTerraform(struct?: AppProfileAppPoliciesAppConfigLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.booleanToTerraform(struct!.access),
  }
}


export function appProfileAppPoliciesAppConfigLogsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.booleanToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: boolean | cdktf.IResolvable; 
  public get access() {
    return this.getBooleanAttribute('access');
  }
  public set access(value: boolean | cdktf.IResolvable) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}

export class AppProfileAppPoliciesAppConfigLogsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigLogs[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigLogsOutputReference {
    return new AppProfileAppPoliciesAppConfigLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#operator AppProfile#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#value AppProfile#value}
  */
  readonly value?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
  /**
  * Display label of the key in User-Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#label AppProfile#label}
  */
  readonly label?: string;
  /**
  * Value of the key to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#value AppProfile#value}
  */
  readonly value?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables {
  /**
  * Default value of the variable. (Optional. Default: <Default value based on type>)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#default AppProfile#default}
  */
  readonly default?: string;
  /**
  * Encoding of file content. Applicable if format is VARIABLE_FORMAT_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#encode AppProfile#encode}
  */
  readonly encode?: string;
  /**
  * Format of the user variable. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#format AppProfile#format}
  */
  readonly format: string;
  /**
  * Label for the variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#label AppProfile#label}
  */
  readonly label: string;
  /**
  * Max length of the value of the variable(Optional. Default: 1024)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#max_length AppProfile#max_length}
  */
  readonly maxLength?: string;
  /**
  * Name of the Variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#process_input AppProfile#process_input}
  */
  readonly processInput?: string;
  /**
  * This variable MUST be specified when creating an App Instance. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#required AppProfile#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
  /**
  * User-specified value of the variable.(Required if required is true. Optional otherwise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#value AppProfile#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#options AppProfile#options}
  */
  readonly options?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    encode: cdktf.stringToTerraform(struct!.encode),
    format: cdktf.stringToTerraform(struct!.format),
    label: cdktf.stringToTerraform(struct!.label),
    max_length: cdktf.stringToTerraform(struct!.maxLength),
    name: cdktf.stringToTerraform(struct!.name),
    process_input: cdktf.stringToTerraform(struct!.processInput),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform, true)(struct!.options),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encode: {
      value: cdktf.stringToHclTerraform(struct!.encode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.stringToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_input: {
      value: cdktf.stringToHclTerraform(struct!.processInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._encode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encode = this._encode;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInput = this._processInput;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._encode = undefined;
      this._format = undefined;
      this._label = undefined;
      this._maxLength = undefined;
      this._name = undefined;
      this._processInput = undefined;
      this._required = undefined;
      this._type = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._encode = value.encode;
      this._format = value.format;
      this._label = value.label;
      this._maxLength = value.maxLength;
      this._name = value.name;
      this._processInput = value.processInput;
      this._required = value.required;
      this._type = value.type;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // encode - computed: false, optional: true, required: false
  private _encode?: string; 
  public get encode() {
    return this.getStringAttribute('encode');
  }
  public set encode(value: string) {
    this._encode = value;
  }
  public resetEncode() {
    this._encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeInput() {
    return this._encode;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // process_input - computed: false, optional: true, required: false
  private _processInput?: string; 
  public get processInput() {
    return this.getStringAttribute('process_input');
  }
  public set processInput(value: string) {
    this._processInput = value;
  }
  public resetProcessInput() {
    this._processInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInputInput() {
    return this._processInput;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // options - computed: false, optional: true, required: false
  private _options = new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups {
  /**
  * Name of the Variable Group(Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * Indicates if the variable group is required to be specified for the App Instance. (Optional. Default:False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#required AppProfile#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#condition AppProfile#condition}
  */
  readonly condition?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#variables AppProfile#variables}
  */
  readonly variables?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    condition: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform, true)(struct!.condition),
    variables: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform, true)(struct!.variables),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionList",
    },
    variables: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._condition.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
      this._condition.internalValue = value.condition;
      this._variables.internalValue = value.variables;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig {
  /**
  * Add the Custom Config to App Instance (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#add AppProfile#add}
  */
  readonly add?: boolean | cdktf.IResolvable;
  /**
  * Allow Appinstance storage to be resized after app instance is created. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#allow_storage_resize AppProfile#allow_storage_resize}
  */
  readonly allowStorageResize?: boolean | cdktf.IResolvable;
  /**
  * Field delimiter used in specifying variables in template. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#field_delimiter AppProfile#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Name of CustomConfig (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * Override existing custom config from App Bundle Manifest (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#override AppProfile#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * base64 encrypted template string. (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#template AppProfile#template}
  */
  readonly template?: string;
  /**
  * variable_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#variable_groups AppProfile#variable_groups}
  */
  readonly variableGroups?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    allow_storage_resize: cdktf.booleanToTerraform(struct!.allowStorageResize),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    template: cdktf.stringToTerraform(struct!.template),
    variable_groups: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsToTerraform, true)(struct!.variableGroups),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.booleanToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_storage_resize: {
      value: cdktf.booleanToHclTerraform(struct!.allowStorageResize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_groups: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform, true)(struct!.variableGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._allowStorageResize !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStorageResize = this._allowStorageResize;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._variableGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableGroups = this._variableGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._allowStorageResize = undefined;
      this._fieldDelimiter = undefined;
      this._name = undefined;
      this._override = undefined;
      this._template = undefined;
      this._variableGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._allowStorageResize = value.allowStorageResize;
      this._fieldDelimiter = value.fieldDelimiter;
      this._name = value.name;
      this._override = value.override;
      this._template = value.template;
      this._variableGroups.internalValue = value.variableGroups;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: boolean | cdktf.IResolvable; 
  public get add() {
    return this.getBooleanAttribute('add');
  }
  public set add(value: boolean | cdktf.IResolvable) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // allow_storage_resize - computed: false, optional: true, required: false
  private _allowStorageResize?: boolean | cdktf.IResolvable; 
  public get allowStorageResize() {
    return this.getBooleanAttribute('allow_storage_resize');
  }
  public set allowStorageResize(value: boolean | cdktf.IResolvable) {
    this._allowStorageResize = value;
  }
  public resetAllowStorageResize() {
    this._allowStorageResize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStorageResizeInput() {
    return this._allowStorageResize;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // variable_groups - computed: false, optional: true, required: false
  private _variableGroups = new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
  public putVariableGroups(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable) {
    this._variableGroups.internalValue = value;
  }
  public resetVariableGroups() {
    this._variableGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableGroupsInput() {
    return this._variableGroups.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonConfiguration {
  /**
  * custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#custom_config AppProfile#custom_config}
  */
  readonly customConfig?: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonConfigurationToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_config: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigToTerraform, true)(struct!.customConfig),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonConfigurationToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_config: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigToHclTerraform, true)(struct!.customConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = value.customConfig;
    }
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: AppProfileAppPoliciesAppConfigManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonConfigurationList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonConfiguration[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonConfigurationOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonContainerDetail {
  /**
  * Create options direct the creation of the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#container_create_option AppProfile#container_create_option}
  */
  readonly containerCreateOption?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonContainerDetailToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_create_option: cdktf.stringToTerraform(struct!.containerCreateOption),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonContainerDetailToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_create_option: {
      value: cdktf.stringToHclTerraform(struct!.containerCreateOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonContainerDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerCreateOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerCreateOption = this._containerCreateOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonContainerDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerCreateOption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerCreateOption = value.containerCreateOption;
    }
  }

  // container_create_option - computed: false, optional: true, required: false
  private _containerCreateOption?: string; 
  public get containerCreateOption() {
    return this.getStringAttribute('container_create_option');
  }
  public set containerCreateOption(value: string) {
    this._containerCreateOption = value;
  }
  public resetContainerCreateOption() {
    this._containerCreateOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCreateOptionInput() {
    return this._containerCreateOption;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonContainerDetailList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonContainerDetail[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonContainerDetailOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonDesc {
  /**
  * UI map: AppEditPage:DeveloperPane:Developer_Agreement_Field, AppDetailsPage:DeveloperPane:Developer_Agreement_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#agreement_list AppProfile#agreement_list}
  */
  readonly agreementList?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#app_category AppProfile#app_category}
  */
  readonly appCategory: string;
  /**
  * UI map: AppMarketplacePage:AppCard:DescriptionField, AppEditPage:IdentityPane:CategoryField, AppDetailsPage:IdentityPane:CategoryField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#category AppProfile#category}
  */
  readonly category?: string;
  /**
  * UI map: AppMarketplacePage:AppCard:License, AppEditPage:IdentityPane:License, AppDetailsPage:IdentityPane:License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#license_list AppProfile#license_list}
  */
  readonly licenseList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:IdentityPane:Logo, AppDetailsPage:IdentityPane:Logo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#logo AppProfile#logo}
  */
  readonly logo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#os AppProfile#os}
  */
  readonly os?: string;
  /**
  * UI map: AppEditPage:IdentityPane:Screenshot_Fields, AppDetailsPage:IdentityPane:Screenshot_Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#screenshot_list AppProfile#screenshot_list}
  */
  readonly screenshotList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:DeveloperPane:Support_Description_Field, AppDetailsPage:DeveloperPane:Support_Description_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#support AppProfile#support}
  */
  readonly support?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonDescToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agreement_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.agreementList),
    app_category: cdktf.stringToTerraform(struct!.appCategory),
    category: cdktf.stringToTerraform(struct!.category),
    license_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.licenseList),
    logo: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logo),
    os: cdktf.stringToTerraform(struct!.os),
    screenshot_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.screenshotList),
    support: cdktf.stringToTerraform(struct!.support),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonDescToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agreement_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.agreementList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_category: {
      value: cdktf.stringToHclTerraform(struct!.appCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.licenseList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logo: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    screenshot_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.screenshotList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    support: {
      value: cdktf.stringToHclTerraform(struct!.support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonDescOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonDesc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agreementList !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreementList = this._agreementList;
    }
    if (this._appCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCategory = this._appCategory;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._licenseList !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseList = this._licenseList;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._screenshotList !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenshotList = this._screenshotList;
    }
    if (this._support !== undefined) {
      hasAnyValues = true;
      internalValueResult.support = this._support;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonDesc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agreementList = undefined;
      this._appCategory = undefined;
      this._category = undefined;
      this._licenseList = undefined;
      this._logo = undefined;
      this._os = undefined;
      this._screenshotList = undefined;
      this._support = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agreementList = value.agreementList;
      this._appCategory = value.appCategory;
      this._category = value.category;
      this._licenseList = value.licenseList;
      this._logo = value.logo;
      this._os = value.os;
      this._screenshotList = value.screenshotList;
      this._support = value.support;
    }
  }

  // agreement_list - computed: false, optional: true, required: false
  private _agreementList?: { [key: string]: string }; 
  public get agreementList() {
    return this.getStringMapAttribute('agreement_list');
  }
  public set agreementList(value: { [key: string]: string }) {
    this._agreementList = value;
  }
  public resetAgreementList() {
    this._agreementList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementListInput() {
    return this._agreementList;
  }

  // app_category - computed: false, optional: false, required: true
  private _appCategory?: string; 
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }
  public set appCategory(value: string) {
    this._appCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // license_list - computed: false, optional: true, required: false
  private _licenseList?: { [key: string]: string }; 
  public get licenseList() {
    return this.getStringMapAttribute('license_list');
  }
  public set licenseList(value: { [key: string]: string }) {
    this._licenseList = value;
  }
  public resetLicenseList() {
    this._licenseList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseListInput() {
    return this._licenseList;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: { [key: string]: string }; 
  public get logo() {
    return this.getStringMapAttribute('logo');
  }
  public set logo(value: { [key: string]: string }) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // screenshot_list - computed: false, optional: true, required: false
  private _screenshotList?: { [key: string]: string }; 
  public get screenshotList() {
    return this.getStringMapAttribute('screenshot_list');
  }
  public set screenshotList(value: { [key: string]: string }) {
    this._screenshotList = value;
  }
  public resetScreenshotList() {
    this._screenshotList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenshotListInput() {
    return this._screenshotList;
  }

  // support - computed: false, optional: true, required: false
  private _support?: string; 
  public get support() {
    return this.getStringAttribute('support');
  }
  public set support(value: string) {
    this._support = value;
  }
  public resetSupport() {
    this._support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonDescList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonDesc[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonDescOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonImagesParams {
  /**
  * Name of the Parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * Value of the parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#value AppProfile#value}
  */
  readonly value?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonImagesParamsToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonImagesParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonImagesParamsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonImagesParams | cdktf.IResolvable): any {
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

export class AppProfileAppPoliciesAppConfigManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonImagesParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonImagesParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class AppProfileAppPoliciesAppConfigManifestJsonImagesParamsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonImagesParams[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonImagesParamsOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonImages {
  /**
  * UI map: AppEditPage:DrivesPane:Cleartext, AppDetailsPage:DrivesPane:ClearText_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#cleartext AppProfile#cleartext}
  */
  readonly cleartext?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Drive_Type_Field, AppDetailsPage:DrivesPane:Drive_Type_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#drvtype AppProfile#drvtype}
  */
  readonly drvtype?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Ignorepurge, AppDetailsPage:DrivesPane:Ignorepurgee_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#ignorepurge AppProfile#ignorepurge}
  */
  readonly ignorepurge?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Format_Field, AppDetailsPage:DrivesPane:Image_Format_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#imageformat AppProfile#imageformat}
  */
  readonly imageformat?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_ID_Field, AppDetailsPage:DrivesPane:Image_ID_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#imageid AppProfile#imageid}
  */
  readonly imageid?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Name_Field, AppDetailsPage:DrivesPane:Image_Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#imagename AppProfile#imagename}
  */
  readonly imagename?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Max_Size_Field, AppDetailsPage:DrivesPane:Max_Size_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#maxsize AppProfile#maxsize}
  */
  readonly maxsize?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Mountpath, AppDetailsPage:DrivesPane:Mountpath_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#mountpath AppProfile#mountpath}
  */
  readonly mountpath?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Preserve_Field, AppDetailsPage:DrivesPane:Preserve_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#preserve AppProfile#preserve}
  */
  readonly preserve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#readonly AppProfile#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Target_Field, AppDetailsPage:DrivesPane:Target_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#target AppProfile#target}
  */
  readonly target?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Volume_Label, AppDetailsPage:DrivesPane:Volume_Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#volumelabel AppProfile#volumelabel}
  */
  readonly volumelabel?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#params AppProfile#params}
  */
  readonly params?: AppProfileAppPoliciesAppConfigManifestJsonImagesParams[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonImagesToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.booleanToTerraform(struct!.cleartext),
    drvtype: cdktf.stringToTerraform(struct!.drvtype),
    ignorepurge: cdktf.booleanToTerraform(struct!.ignorepurge),
    imageformat: cdktf.stringToTerraform(struct!.imageformat),
    imageid: cdktf.stringToTerraform(struct!.imageid),
    imagename: cdktf.stringToTerraform(struct!.imagename),
    maxsize: cdktf.stringToTerraform(struct!.maxsize),
    mountpath: cdktf.stringToTerraform(struct!.mountpath),
    preserve: cdktf.booleanToTerraform(struct!.preserve),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    target: cdktf.stringToTerraform(struct!.target),
    volumelabel: cdktf.stringToTerraform(struct!.volumelabel),
    params: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonImagesParamsToTerraform, true)(struct!.params),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonImagesToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleartext: {
      value: cdktf.booleanToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drvtype: {
      value: cdktf.stringToHclTerraform(struct!.drvtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignorepurge: {
      value: cdktf.booleanToHclTerraform(struct!.ignorepurge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imageformat: {
      value: cdktf.stringToHclTerraform(struct!.imageformat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imageid: {
      value: cdktf.stringToHclTerraform(struct!.imageid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagename: {
      value: cdktf.stringToHclTerraform(struct!.imagename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxsize: {
      value: cdktf.stringToHclTerraform(struct!.maxsize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mountpath: {
      value: cdktf.stringToHclTerraform(struct!.mountpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve: {
      value: cdktf.booleanToHclTerraform(struct!.preserve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumelabel: {
      value: cdktf.stringToHclTerraform(struct!.volumelabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonImagesParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonImagesParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    if (this._drvtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.drvtype = this._drvtype;
    }
    if (this._ignorepurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorepurge = this._ignorepurge;
    }
    if (this._imageformat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageformat = this._imageformat;
    }
    if (this._imageid !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageid = this._imageid;
    }
    if (this._imagename !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagename = this._imagename;
    }
    if (this._maxsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxsize = this._maxsize;
    }
    if (this._mountpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountpath = this._mountpath;
    }
    if (this._preserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserve = this._preserve;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._volumelabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumelabel = this._volumelabel;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleartext = undefined;
      this._drvtype = undefined;
      this._ignorepurge = undefined;
      this._imageformat = undefined;
      this._imageid = undefined;
      this._imagename = undefined;
      this._maxsize = undefined;
      this._mountpath = undefined;
      this._preserve = undefined;
      this._readonly = undefined;
      this._target = undefined;
      this._volumelabel = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleartext = value.cleartext;
      this._drvtype = value.drvtype;
      this._ignorepurge = value.ignorepurge;
      this._imageformat = value.imageformat;
      this._imageid = value.imageid;
      this._imagename = value.imagename;
      this._maxsize = value.maxsize;
      this._mountpath = value.mountpath;
      this._preserve = value.preserve;
      this._readonly = value.readonly;
      this._target = value.target;
      this._volumelabel = value.volumelabel;
      this._params.internalValue = value.params;
    }
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: boolean | cdktf.IResolvable; 
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }
  public set cleartext(value: boolean | cdktf.IResolvable) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // drvtype - computed: false, optional: true, required: false
  private _drvtype?: string; 
  public get drvtype() {
    return this.getStringAttribute('drvtype');
  }
  public set drvtype(value: string) {
    this._drvtype = value;
  }
  public resetDrvtype() {
    this._drvtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drvtypeInput() {
    return this._drvtype;
  }

  // ignorepurge - computed: false, optional: true, required: false
  private _ignorepurge?: boolean | cdktf.IResolvable; 
  public get ignorepurge() {
    return this.getBooleanAttribute('ignorepurge');
  }
  public set ignorepurge(value: boolean | cdktf.IResolvable) {
    this._ignorepurge = value;
  }
  public resetIgnorepurge() {
    this._ignorepurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorepurgeInput() {
    return this._ignorepurge;
  }

  // imageformat - computed: false, optional: true, required: false
  private _imageformat?: string; 
  public get imageformat() {
    return this.getStringAttribute('imageformat');
  }
  public set imageformat(value: string) {
    this._imageformat = value;
  }
  public resetImageformat() {
    this._imageformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageformatInput() {
    return this._imageformat;
  }

  // imageid - computed: true, optional: true, required: false
  private _imageid?: string; 
  public get imageid() {
    return this.getStringAttribute('imageid');
  }
  public set imageid(value: string) {
    this._imageid = value;
  }
  public resetImageid() {
    this._imageid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageidInput() {
    return this._imageid;
  }

  // imagename - computed: false, optional: true, required: false
  private _imagename?: string; 
  public get imagename() {
    return this.getStringAttribute('imagename');
  }
  public set imagename(value: string) {
    this._imagename = value;
  }
  public resetImagename() {
    this._imagename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagenameInput() {
    return this._imagename;
  }

  // maxsize - computed: false, optional: true, required: false
  private _maxsize?: string; 
  public get maxsize() {
    return this.getStringAttribute('maxsize');
  }
  public set maxsize(value: string) {
    this._maxsize = value;
  }
  public resetMaxsize() {
    this._maxsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsizeInput() {
    return this._maxsize;
  }

  // mountpath - computed: false, optional: true, required: false
  private _mountpath?: string; 
  public get mountpath() {
    return this.getStringAttribute('mountpath');
  }
  public set mountpath(value: string) {
    this._mountpath = value;
  }
  public resetMountpath() {
    this._mountpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountpathInput() {
    return this._mountpath;
  }

  // preserve - computed: false, optional: true, required: false
  private _preserve?: boolean | cdktf.IResolvable; 
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }
  public set preserve(value: boolean | cdktf.IResolvable) {
    this._preserve = value;
  }
  public resetPreserve() {
    this._preserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveInput() {
    return this._preserve;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // volumelabel - computed: false, optional: true, required: false
  private _volumelabel?: string; 
  public get volumelabel() {
    return this.getStringAttribute('volumelabel');
  }
  public set volumelabel(value: string) {
    this._volumelabel = value;
  }
  public resetVolumelabel() {
    this._volumelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumelabelInput() {
    return this._volumelabel;
  }

  // params - computed: false, optional: true, required: false
  private _params = new AppProfileAppPoliciesAppConfigManifestJsonImagesParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: AppProfileAppPoliciesAppConfigManifestJsonImagesParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonImagesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonImages[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonImagesOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue {
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitburst AppProfile#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitrate AppProfile#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitunit AppProfile#limitunit}
  */
  readonly limitunit?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
    }
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto {
  /**
  * Application Port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#app_port AppProfile#app_port}
  */
  readonly appPort?: number;
}

export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_port: cdktf.numberToTerraform(struct!.appPort),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_port: {
      value: cdktf.numberToHclTerraform(struct!.appPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPort = this._appPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appPort = value.appPort;
    }
  }

  // app_port - computed: false, optional: true, required: false
  private _appPort?: number; 
  public get appPort() {
    return this.getNumberAttribute('app_port');
  }
  public set appPort(value: number) {
    this._appPort = value;
  }
  public resetAppPort() {
    this._appPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPortInput() {
    return this._appPort;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions {
  /**
  * Drop the packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#drop AppProfile#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limit AppProfile#limit}
  */
  readonly limit?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitburst AppProfile#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitrate AppProfile#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limitunit AppProfile#limitunit}
  */
  readonly limitunit?: string;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#portmap AppProfile#portmap}
  */
  readonly portmap?: boolean | cdktf.IResolvable;
  /**
  * limit_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#limit_value AppProfile#limit_value}
  */
  readonly limitValue?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable;
  /**
  * portmapto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#portmapto AppProfile#portmapto}
  */
  readonly portmapto?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.booleanToTerraform(struct!.drop),
    limit: cdktf.booleanToTerraform(struct!.limit),
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
    portmap: cdktf.booleanToTerraform(struct!.portmap),
    limit_value: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueToTerraform, true)(struct!.limitValue),
    portmapto: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoToTerraform, true)(struct!.portmapto),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.booleanToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmap: {
      value: cdktf.booleanToHclTerraform(struct!.portmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_value: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueToHclTerraform, true)(struct!.limitValue),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueList",
    },
    portmapto: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform, true)(struct!.portmapto),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    if (this._portmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmap = this._portmap;
    }
    if (this._limitValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitValue = this._limitValue?.internalValue;
    }
    if (this._portmapto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmapto = this._portmapto?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drop = undefined;
      this._limit = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
      this._portmap = undefined;
      this._limitValue.internalValue = undefined;
      this._portmapto.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drop = value.drop;
      this._limit = value.limit;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
      this._portmap = value.portmap;
      this._limitValue.internalValue = value.limitValue;
      this._portmapto.internalValue = value.portmapto;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: boolean | cdktf.IResolvable; 
  public get limit() {
    return this.getBooleanAttribute('limit');
  }
  public set limit(value: boolean | cdktf.IResolvable) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }

  // portmap - computed: false, optional: true, required: false
  private _portmap?: boolean | cdktf.IResolvable; 
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
  public set portmap(value: boolean | cdktf.IResolvable) {
    this._portmap = value;
  }
  public resetPortmap() {
    this._portmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmapInput() {
    return this._portmap;
  }

  // limit_value - computed: false, optional: true, required: false
  private _limitValue = new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
  public get limitValue() {
    return this._limitValue;
  }
  public putLimitValue(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable) {
    this._limitValue.internalValue = value;
  }
  public resetLimitValue() {
    this._limitValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitValueInput() {
    return this._limitValue.internalValue;
  }

  // portmapto - computed: false, optional: true, required: false
  private _portmapto = new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
  public putPortmapto(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable) {
    this._portmapto.internalValue = value;
  }
  public resetPortmapto() {
    this._portmapto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmaptoInput() {
    return this._portmapto.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches {
  /**
  * Type of Match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
  /**
  * Value of match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#value AppProfile#value}
  */
  readonly value?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls {
  /**
  * Name of the Access Control List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#actions AppProfile#actions}
  */
  readonly actions?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#matches AppProfile#matches}
  */
  readonly matches?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsToTerraform, true)(struct!.actions),
    matches: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesToTerraform, true)(struct!.matches),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls | cdktf.IResolvable): any {
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
    actions: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsList",
    },
    matches: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matches.internalValue = value.matches;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonInterfaces {
  /**
  * If true, a physical adapter is assigned to the edge application directly. If false, a network instance is assigned to the edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#directattach AppProfile#directattach}
  */
  readonly directattach?: boolean | cdktf.IResolvable;
  /**
  * Interface name used by the edge application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * Indicates if the interface is optional for edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#optional AppProfile#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * If true, DHCP network can't be assigned and user needs to provide a static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#privateip AppProfile#privateip}
  */
  readonly privateip?: boolean | cdktf.IResolvable;
  /**
  * Physical Adapter type for this interface. Applicable only when "direct attach" flag is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#acls AppProfile#acls}
  */
  readonly acls?: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonInterfacesToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directattach: cdktf.booleanToTerraform(struct!.directattach),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    privateip: cdktf.booleanToTerraform(struct!.privateip),
    type: cdktf.stringToTerraform(struct!.type),
    acls: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsToTerraform, true)(struct!.acls),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonInterfacesToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directattach: {
      value: cdktf.booleanToHclTerraform(struct!.directattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privateip: {
      value: cdktf.booleanToHclTerraform(struct!.privateip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acls: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonInterfacesAclsToHclTerraform, true)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.directattach = this._directattach;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._privateip !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateip = this._privateip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directattach = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._privateip = undefined;
      this._type = undefined;
      this._acls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directattach = value.directattach;
      this._name = value.name;
      this._optional = value.optional;
      this._privateip = value.privateip;
      this._type = value.type;
      this._acls.internalValue = value.acls;
    }
  }

  // directattach - computed: false, optional: true, required: false
  private _directattach?: boolean | cdktf.IResolvable; 
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }
  public set directattach(value: boolean | cdktf.IResolvable) {
    this._directattach = value;
  }
  public resetDirectattach() {
    this._directattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directattachInput() {
    return this._directattach;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // privateip - computed: false, optional: true, required: false
  private _privateip?: boolean | cdktf.IResolvable; 
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
  public set privateip(value: boolean | cdktf.IResolvable) {
    this._privateip = value;
  }
  public resetPrivateip() {
    this._privateip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
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

  // acls - computed: false, optional: true, required: false
  private _acls = new AppProfileAppPoliciesAppConfigManifestJsonInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: AppProfileAppPoliciesAppConfigManifestJsonInterfacesAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonInterfacesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonInterfaces[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonInterfacesOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonModule {
  /**
  * Extra information to module to make configuration easier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#environment AppProfile#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Type of modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#module_type AppProfile#module_type}
  */
  readonly moduleType?: string;
  /**
  * Send messages between modules or send messages from modules to iot hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#routes AppProfile#routes}
  */
  readonly routes?: { [key: string]: string };
  /**
  * Base64 encoded module twin details, desired properties of the module will be updated to reflect these values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#twin_detail AppProfile#twin_detail}
  */
  readonly twinDetail?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonModuleToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    module_type: cdktf.stringToTerraform(struct!.moduleType),
    routes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routes),
    twin_detail: cdktf.stringToTerraform(struct!.twinDetail),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonModuleToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    module_type: {
      value: cdktf.stringToHclTerraform(struct!.moduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    twin_detail: {
      value: cdktf.stringToHclTerraform(struct!.twinDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._moduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleType = this._moduleType;
    }
    if (this._routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes;
    }
    if (this._twinDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.twinDetail = this._twinDetail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._moduleType = undefined;
      this._routes = undefined;
      this._twinDetail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._moduleType = value.moduleType;
      this._routes = value.routes;
      this._twinDetail = value.twinDetail;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // module_type - computed: false, optional: true, required: false
  private _moduleType?: string; 
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }
  public set moduleType(value: string) {
    this._moduleType = value;
  }
  public resetModuleType() {
    this._moduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTypeInput() {
    return this._moduleType;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: { [key: string]: string }; 
  public get routes() {
    return this.getStringMapAttribute('routes');
  }
  public set routes(value: { [key: string]: string }) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // twin_detail - computed: false, optional: true, required: false
  private _twinDetail?: string; 
  public get twinDetail() {
    return this.getStringAttribute('twin_detail');
  }
  public set twinDetail(value: string) {
    this._twinDetail = value;
  }
  public resetTwinDetail() {
    this._twinDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twinDetailInput() {
    return this._twinDetail;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonModuleList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonModule[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonModuleOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonOwner {
  /**
  * UI map: AppEditPage:IdentityPane:Category_Field, AppDetailsPage:IdentityPane:Category_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#company AppProfile#company}
  */
  readonly company?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Email_Field, AppDetailsPage:DeveloperPane:Email_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#email AppProfile#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#group AppProfile#group}
  */
  readonly group?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Name_Field, AppDetailsPage:DeveloperPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#user AppProfile#user}
  */
  readonly user?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Website_Field, AppDetailsPage:DeveloperPane:Website_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#website AppProfile#website}
  */
  readonly website?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonOwnerToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    group: cdktf.stringToTerraform(struct!.group),
    user: cdktf.stringToTerraform(struct!.user),
    website: cdktf.stringToTerraform(struct!.website),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonOwnerToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company: {
      value: cdktf.stringToHclTerraform(struct!.company),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website: {
      value: cdktf.stringToHclTerraform(struct!.website),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._website !== undefined) {
      hasAnyValues = true;
      internalValueResult.website = this._website;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._company = undefined;
      this._email = undefined;
      this._group = undefined;
      this._user = undefined;
      this._website = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._company = value.company;
      this._email = value.email;
      this._group = value.group;
      this._user = value.user;
      this._website = value.website;
    }
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonOwnerList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonOwner[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonOwnerOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonPermissions {
}

export function appProfileAppPoliciesAppConfigManifestJsonPermissionsToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonPermissionsToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppProfileAppPoliciesAppConfigManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonPermissionsList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonPermissions[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonPermissionsOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJsonResources {
  /**
  * Name of the Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * Value of Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#value AppProfile#value}
  */
  readonly value?: string;
}

export function appProfileAppPoliciesAppConfigManifestJsonResourcesToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonResourcesToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJsonResources | cdktf.IResolvable): any {
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

export class AppProfileAppPoliciesAppConfigManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJsonResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJsonResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class AppProfileAppPoliciesAppConfigManifestJsonResourcesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJsonResources[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonResourcesOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigManifestJson {
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#ac_kind AppProfile#ac_kind}
  */
  readonly acKind: string;
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#ac_version AppProfile#ac_version}
  */
  readonly acVersion: string;
  /**
  * App (bundle) type. The correct values are: "APP_TYPE_UNSPECIFIED","APP_TYPE_VM","APP_TYPE_VM_RUNTIME","APP_TYPE_CONTAINER","APP_TYPE_MODULE", "APP_TYPE_DOCKER_COMPOSE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#app_type AppProfile#app_type}
  */
  readonly appType?: string;
  /**
  * Enable CpuPinning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#cpu_pinning_enabled AppProfile#cpu_pinning_enabled}
  */
  readonly cpuPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Deployment type for the app. The correct values are: "DEPLOYMENT_TYPE_UNSPECIFIED","DEPLOYMENT_TYPE_STAND_ALONE","DEPLOYMENT_TYPE_AZURE","DEPLOYMENT_TYPE_K3S","DEPLOYMENT_TYPE_AWS","DEPLOYMENT_TYPE_K3S_AZURE","DEPLOYMENT_TYPE_K3S_AWS","DEPLOYMENT_TYPE_VMWARE_VCE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#deployment_type AppProfile#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * UI map: AppDetailsPage:IdentityPane:DescriptionField, AppMarketplacePage:AppCard:DescriptionField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#description AppProfile#description}
  */
  readonly description?: string;
  /**
  * UI map: AppEditPage:IdentityPane:DISABLEVTPM_Field, AppDetailsPage:IdentityPane:DISABLEVTPM_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#disable_v_t_p_m AppProfile#disable_v_t_p_m}
  */
  readonly disableVTPM?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Title_Field, AppDetailsPage:IdentityPane:Title_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#display_name AppProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docker compose tar image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#docker_compose_tar_image_name AppProfile#docker_compose_tar_image_name}
  */
  readonly dockerComposeTarImageName?: string;
  /**
  * Docker compose base64 encoded plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#docker_compose_yaml_text AppProfile#docker_compose_yaml_text}
  */
  readonly dockerComposeYamlText?: string;
  /**
  * UI map: AppEditPage:IdentityPane:ENABLEVMCONFIG_Field, AppDetailsPage:IdentityPane:ENABLEVMCONFIG_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#enable_oem_win_license_key AppProfile#enable_oem_win_license_key}
  */
  readonly enableOemWinLicenseKey?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:VNC_Field, AppDetailsPage:IdentityPane:VNC_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#enablevnc AppProfile#enablevnc}
  */
  readonly enablevnc?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Name_Field, AppDetailsPage:IdentityPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name: string;
  /**
  * Size of persistent blank storage for runtime in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#persistent_runtime_size_bytes AppProfile#persistent_runtime_size_bytes}
  */
  readonly persistentRuntimeSizeBytes?: string;
  /**
  * Indicates the internal communication protocol to pass configuration between Zedcloud and docker-compose runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#runtime_protocol_version AppProfile#runtime_protocol_version}
  */
  readonly runtimeProtocolVersion?: string;
  /**
  * Indicates the version of container orchestration software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#runtime_version AppProfile#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * UI map: AppEditPage:IdentityPane:VM_Mode_Field, AppDetailsPage:IdentityPane:VM_Mode_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#vmmode AppProfile#vmmode}
  */
  readonly vmmode?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#configuration AppProfile#configuration}
  */
  readonly configuration?: AppProfileAppPoliciesAppConfigManifestJsonConfiguration[] | cdktf.IResolvable;
  /**
  * container_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#container_detail AppProfile#container_detail}
  */
  readonly containerDetail?: AppProfileAppPoliciesAppConfigManifestJsonContainerDetail[] | cdktf.IResolvable;
  /**
  * desc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#desc AppProfile#desc}
  */
  readonly desc?: AppProfileAppPoliciesAppConfigManifestJsonDesc[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#images AppProfile#images}
  */
  readonly images?: AppProfileAppPoliciesAppConfigManifestJsonImages[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#interfaces AppProfile#interfaces}
  */
  readonly interfaces?: AppProfileAppPoliciesAppConfigManifestJsonInterfaces[] | cdktf.IResolvable;
  /**
  * module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#module AppProfile#module}
  */
  readonly module?: AppProfileAppPoliciesAppConfigManifestJsonModule[] | cdktf.IResolvable;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#owner AppProfile#owner}
  */
  readonly owner?: AppProfileAppPoliciesAppConfigManifestJsonOwner[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#permissions AppProfile#permissions}
  */
  readonly permissions?: AppProfileAppPoliciesAppConfigManifestJsonPermissions[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#resources AppProfile#resources}
  */
  readonly resources?: AppProfileAppPoliciesAppConfigManifestJsonResources[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigManifestJsonToTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_kind: cdktf.stringToTerraform(struct!.acKind),
    ac_version: cdktf.stringToTerraform(struct!.acVersion),
    app_type: cdktf.stringToTerraform(struct!.appType),
    cpu_pinning_enabled: cdktf.booleanToTerraform(struct!.cpuPinningEnabled),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    description: cdktf.stringToTerraform(struct!.description),
    disable_v_t_p_m: cdktf.booleanToTerraform(struct!.disableVTPM),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    docker_compose_tar_image_name: cdktf.stringToTerraform(struct!.dockerComposeTarImageName),
    docker_compose_yaml_text: cdktf.stringToTerraform(struct!.dockerComposeYamlText),
    enable_oem_win_license_key: cdktf.booleanToTerraform(struct!.enableOemWinLicenseKey),
    enablevnc: cdktf.booleanToTerraform(struct!.enablevnc),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_runtime_size_bytes: cdktf.stringToTerraform(struct!.persistentRuntimeSizeBytes),
    runtime_protocol_version: cdktf.stringToTerraform(struct!.runtimeProtocolVersion),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    vmmode: cdktf.stringToTerraform(struct!.vmmode),
    configuration: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonConfigurationToTerraform, true)(struct!.configuration),
    container_detail: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonContainerDetailToTerraform, true)(struct!.containerDetail),
    desc: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonDescToTerraform, true)(struct!.desc),
    images: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonImagesToTerraform, true)(struct!.images),
    interfaces: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonInterfacesToTerraform, true)(struct!.interfaces),
    module: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonModuleToTerraform, true)(struct!.module),
    owner: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonOwnerToTerraform, true)(struct!.owner),
    permissions: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonPermissionsToTerraform, true)(struct!.permissions),
    resources: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonResourcesToTerraform, true)(struct!.resources),
  }
}


export function appProfileAppPoliciesAppConfigManifestJsonToHclTerraform(struct?: AppProfileAppPoliciesAppConfigManifestJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_kind: {
      value: cdktf.stringToHclTerraform(struct!.acKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_version: {
      value: cdktf.stringToHclTerraform(struct!.acVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_pinning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuPinningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_v_t_p_m: {
      value: cdktf.booleanToHclTerraform(struct!.disableVTPM),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_tar_image_name: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeTarImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_yaml_text: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeYamlText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_oem_win_license_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableOemWinLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablevnc: {
      value: cdktf.booleanToHclTerraform(struct!.enablevnc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_runtime_size_bytes: {
      value: cdktf.stringToHclTerraform(struct!.persistentRuntimeSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmmode: {
      value: cdktf.stringToHclTerraform(struct!.vmmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonConfigurationList",
    },
    container_detail: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonContainerDetailToHclTerraform, true)(struct!.containerDetail),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonContainerDetailList",
    },
    desc: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonDescToHclTerraform, true)(struct!.desc),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonDescList",
    },
    images: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonImagesToHclTerraform, true)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonImagesList",
    },
    interfaces: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonInterfacesList",
    },
    module: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonModuleToHclTerraform, true)(struct!.module),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonModuleList",
    },
    owner: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonOwnerList",
    },
    permissions: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonPermissionsToHclTerraform, true)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonPermissionsList",
    },
    resources: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigManifestJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigManifestJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.acKind = this._acKind;
    }
    if (this._acVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.acVersion = this._acVersion;
    }
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._cpuPinningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPinningEnabled = this._cpuPinningEnabled;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableVTPM !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVTPM = this._disableVTPM;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._dockerComposeTarImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeTarImageName = this._dockerComposeTarImageName;
    }
    if (this._dockerComposeYamlText !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeYamlText = this._dockerComposeYamlText;
    }
    if (this._enableOemWinLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOemWinLicenseKey = this._enableOemWinLicenseKey;
    }
    if (this._enablevnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablevnc = this._enablevnc;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentRuntimeSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentRuntimeSizeBytes = this._persistentRuntimeSizeBytes;
    }
    if (this._runtimeProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProtocolVersion = this._runtimeProtocolVersion;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._vmmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmmode = this._vmmode;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._containerDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDetail = this._containerDetail?.internalValue;
    }
    if (this._desc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc?.internalValue;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._module?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigManifestJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acKind = undefined;
      this._acVersion = undefined;
      this._appType = undefined;
      this._cpuPinningEnabled = undefined;
      this._deploymentType = undefined;
      this._description = undefined;
      this._disableVTPM = undefined;
      this._displayName = undefined;
      this._dockerComposeTarImageName = undefined;
      this._dockerComposeYamlText = undefined;
      this._enableOemWinLicenseKey = undefined;
      this._enablevnc = undefined;
      this._name = undefined;
      this._persistentRuntimeSizeBytes = undefined;
      this._runtimeProtocolVersion = undefined;
      this._runtimeVersion = undefined;
      this._vmmode = undefined;
      this._configuration.internalValue = undefined;
      this._containerDetail.internalValue = undefined;
      this._desc.internalValue = undefined;
      this._images.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._module.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._permissions.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acKind = value.acKind;
      this._acVersion = value.acVersion;
      this._appType = value.appType;
      this._cpuPinningEnabled = value.cpuPinningEnabled;
      this._deploymentType = value.deploymentType;
      this._description = value.description;
      this._disableVTPM = value.disableVTPM;
      this._displayName = value.displayName;
      this._dockerComposeTarImageName = value.dockerComposeTarImageName;
      this._dockerComposeYamlText = value.dockerComposeYamlText;
      this._enableOemWinLicenseKey = value.enableOemWinLicenseKey;
      this._enablevnc = value.enablevnc;
      this._name = value.name;
      this._persistentRuntimeSizeBytes = value.persistentRuntimeSizeBytes;
      this._runtimeProtocolVersion = value.runtimeProtocolVersion;
      this._runtimeVersion = value.runtimeVersion;
      this._vmmode = value.vmmode;
      this._configuration.internalValue = value.configuration;
      this._containerDetail.internalValue = value.containerDetail;
      this._desc.internalValue = value.desc;
      this._images.internalValue = value.images;
      this._interfaces.internalValue = value.interfaces;
      this._module.internalValue = value.module;
      this._owner.internalValue = value.owner;
      this._permissions.internalValue = value.permissions;
      this._resources.internalValue = value.resources;
    }
  }

  // ac_kind - computed: false, optional: false, required: true
  private _acKind?: string; 
  public get acKind() {
    return this.getStringAttribute('ac_kind');
  }
  public set acKind(value: string) {
    this._acKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acKindInput() {
    return this._acKind;
  }

  // ac_version - computed: false, optional: false, required: true
  private _acVersion?: string; 
  public get acVersion() {
    return this.getStringAttribute('ac_version');
  }
  public set acVersion(value: string) {
    this._acVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acVersionInput() {
    return this._acVersion;
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

  // cpu_pinning_enabled - computed: false, optional: true, required: false
  private _cpuPinningEnabled?: boolean | cdktf.IResolvable; 
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }
  public set cpuPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuPinningEnabled = value;
  }
  public resetCpuPinningEnabled() {
    this._cpuPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPinningEnabledInput() {
    return this._cpuPinningEnabled;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_v_t_p_m - computed: false, optional: true, required: false
  private _disableVTPM?: boolean | cdktf.IResolvable; 
  public get disableVTPM() {
    return this.getBooleanAttribute('disable_v_t_p_m');
  }
  public set disableVTPM(value: boolean | cdktf.IResolvable) {
    this._disableVTPM = value;
  }
  public resetDisableVTPM() {
    this._disableVTPM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVTPMInput() {
    return this._disableVTPM;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // docker_compose_tar_image_name - computed: false, optional: true, required: false
  private _dockerComposeTarImageName?: string; 
  public get dockerComposeTarImageName() {
    return this.getStringAttribute('docker_compose_tar_image_name');
  }
  public set dockerComposeTarImageName(value: string) {
    this._dockerComposeTarImageName = value;
  }
  public resetDockerComposeTarImageName() {
    this._dockerComposeTarImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeTarImageNameInput() {
    return this._dockerComposeTarImageName;
  }

  // docker_compose_yaml_text - computed: false, optional: true, required: false
  private _dockerComposeYamlText?: string; 
  public get dockerComposeYamlText() {
    return this.getStringAttribute('docker_compose_yaml_text');
  }
  public set dockerComposeYamlText(value: string) {
    this._dockerComposeYamlText = value;
  }
  public resetDockerComposeYamlText() {
    this._dockerComposeYamlText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeYamlTextInput() {
    return this._dockerComposeYamlText;
  }

  // enable_oem_win_license_key - computed: false, optional: true, required: false
  private _enableOemWinLicenseKey?: boolean | cdktf.IResolvable; 
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }
  public set enableOemWinLicenseKey(value: boolean | cdktf.IResolvable) {
    this._enableOemWinLicenseKey = value;
  }
  public resetEnableOemWinLicenseKey() {
    this._enableOemWinLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOemWinLicenseKeyInput() {
    return this._enableOemWinLicenseKey;
  }

  // enablevnc - computed: false, optional: true, required: false
  private _enablevnc?: boolean | cdktf.IResolvable; 
  public get enablevnc() {
    return this.getBooleanAttribute('enablevnc');
  }
  public set enablevnc(value: boolean | cdktf.IResolvable) {
    this._enablevnc = value;
  }
  public resetEnablevnc() {
    this._enablevnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablevncInput() {
    return this._enablevnc;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // persistent_runtime_size_bytes - computed: false, optional: true, required: false
  private _persistentRuntimeSizeBytes?: string; 
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }
  public set persistentRuntimeSizeBytes(value: string) {
    this._persistentRuntimeSizeBytes = value;
  }
  public resetPersistentRuntimeSizeBytes() {
    this._persistentRuntimeSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentRuntimeSizeBytesInput() {
    return this._persistentRuntimeSizeBytes;
  }

  // runtime_protocol_version - computed: false, optional: true, required: false
  private _runtimeProtocolVersion?: string; 
  public get runtimeProtocolVersion() {
    return this.getStringAttribute('runtime_protocol_version');
  }
  public set runtimeProtocolVersion(value: string) {
    this._runtimeProtocolVersion = value;
  }
  public resetRuntimeProtocolVersion() {
    this._runtimeProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeProtocolVersionInput() {
    return this._runtimeProtocolVersion;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // vmmode - computed: false, optional: true, required: false
  private _vmmode?: string; 
  public get vmmode() {
    return this.getStringAttribute('vmmode');
  }
  public set vmmode(value: string) {
    this._vmmode = value;
  }
  public resetVmmode() {
    this._vmmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmodeInput() {
    return this._vmmode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AppProfileAppPoliciesAppConfigManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AppProfileAppPoliciesAppConfigManifestJsonConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // container_detail - computed: false, optional: true, required: false
  private _containerDetail = new AppProfileAppPoliciesAppConfigManifestJsonContainerDetailList(this, "container_detail", false);
  public get containerDetail() {
    return this._containerDetail;
  }
  public putContainerDetail(value: AppProfileAppPoliciesAppConfigManifestJsonContainerDetail[] | cdktf.IResolvable) {
    this._containerDetail.internalValue = value;
  }
  public resetContainerDetail() {
    this._containerDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDetailInput() {
    return this._containerDetail.internalValue;
  }

  // desc - computed: false, optional: true, required: false
  private _desc = new AppProfileAppPoliciesAppConfigManifestJsonDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }
  public putDesc(value: AppProfileAppPoliciesAppConfigManifestJsonDesc[] | cdktf.IResolvable) {
    this._desc.internalValue = value;
  }
  public resetDesc() {
    this._desc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new AppProfileAppPoliciesAppConfigManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: AppProfileAppPoliciesAppConfigManifestJsonImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new AppProfileAppPoliciesAppConfigManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: AppProfileAppPoliciesAppConfigManifestJsonInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // module - computed: false, optional: true, required: false
  private _module = new AppProfileAppPoliciesAppConfigManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }
  public putModule(value: AppProfileAppPoliciesAppConfigManifestJsonModule[] | cdktf.IResolvable) {
    this._module.internalValue = value;
  }
  public resetModule() {
    this._module.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new AppProfileAppPoliciesAppConfigManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: AppProfileAppPoliciesAppConfigManifestJsonOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new AppProfileAppPoliciesAppConfigManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: AppProfileAppPoliciesAppConfigManifestJsonPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new AppProfileAppPoliciesAppConfigManifestJsonResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: AppProfileAppPoliciesAppConfigManifestJsonResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigManifestJsonList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigManifestJson[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigManifestJsonOutputReference {
    return new AppProfileAppPoliciesAppConfigManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfigVminfo {
  /**
  * Enable CpuPinning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#cpu_pinning_enabled AppProfile#cpu_pinning_enabled}
  */
  readonly cpuPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * CPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#cpus AppProfile#cpus}
  */
  readonly cpus: number;
  /**
  * Disable vTPM for virtual machines (VM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#disable_v_t_p_m AppProfile#disable_v_t_p_m}
  */
  readonly disableVTPM?: boolean | cdktf.IResolvable;
  /**
  * Enable device which has VM to receive the Windows license embedded in the ACPI tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#enable_oem_win_license_key AppProfile#enable_oem_win_license_key}
  */
  readonly enableOemWinLicenseKey?: boolean | cdktf.IResolvable;
  /**
  * Hardware Virtualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#mode AppProfile#mode}
  */
  readonly mode?: string;
  /**
  * VNC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#vnc AppProfile#vnc}
  */
  readonly vnc: boolean | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigVminfoToTerraform(struct?: AppProfileAppPoliciesAppConfigVminfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_pinning_enabled: cdktf.booleanToTerraform(struct!.cpuPinningEnabled),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    disable_v_t_p_m: cdktf.booleanToTerraform(struct!.disableVTPM),
    enable_oem_win_license_key: cdktf.booleanToTerraform(struct!.enableOemWinLicenseKey),
    mode: cdktf.stringToTerraform(struct!.mode),
    vnc: cdktf.booleanToTerraform(struct!.vnc),
  }
}


export function appProfileAppPoliciesAppConfigVminfoToHclTerraform(struct?: AppProfileAppPoliciesAppConfigVminfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_pinning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuPinningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_v_t_p_m: {
      value: cdktf.booleanToHclTerraform(struct!.disableVTPM),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_oem_win_license_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableOemWinLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnc: {
      value: cdktf.booleanToHclTerraform(struct!.vnc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigVminfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfigVminfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPinningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPinningEnabled = this._cpuPinningEnabled;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._disableVTPM !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVTPM = this._disableVTPM;
    }
    if (this._enableOemWinLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOemWinLicenseKey = this._enableOemWinLicenseKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnc = this._vnc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfigVminfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuPinningEnabled = undefined;
      this._cpus = undefined;
      this._disableVTPM = undefined;
      this._enableOemWinLicenseKey = undefined;
      this._mode = undefined;
      this._vnc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuPinningEnabled = value.cpuPinningEnabled;
      this._cpus = value.cpus;
      this._disableVTPM = value.disableVTPM;
      this._enableOemWinLicenseKey = value.enableOemWinLicenseKey;
      this._mode = value.mode;
      this._vnc = value.vnc;
    }
  }

  // cpu_pinning_enabled - computed: false, optional: true, required: false
  private _cpuPinningEnabled?: boolean | cdktf.IResolvable; 
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }
  public set cpuPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuPinningEnabled = value;
  }
  public resetCpuPinningEnabled() {
    this._cpuPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPinningEnabledInput() {
    return this._cpuPinningEnabled;
  }

  // cpus - computed: false, optional: false, required: true
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // disable_v_t_p_m - computed: false, optional: true, required: false
  private _disableVTPM?: boolean | cdktf.IResolvable; 
  public get disableVTPM() {
    return this.getBooleanAttribute('disable_v_t_p_m');
  }
  public set disableVTPM(value: boolean | cdktf.IResolvable) {
    this._disableVTPM = value;
  }
  public resetDisableVTPM() {
    this._disableVTPM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVTPMInput() {
    return this._disableVTPM;
  }

  // enable_oem_win_license_key - computed: false, optional: true, required: false
  private _enableOemWinLicenseKey?: boolean | cdktf.IResolvable; 
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }
  public set enableOemWinLicenseKey(value: boolean | cdktf.IResolvable) {
    this._enableOemWinLicenseKey = value;
  }
  public resetEnableOemWinLicenseKey() {
    this._enableOemWinLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOemWinLicenseKeyInput() {
    return this._enableOemWinLicenseKey;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // mode - computed: true, optional: true, required: false
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

  // vnc - computed: false, optional: false, required: true
  private _vnc?: boolean | cdktf.IResolvable; 
  public get vnc() {
    return this.getBooleanAttribute('vnc');
  }
  public set vnc(value: boolean | cdktf.IResolvable) {
    this._vnc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vncInput() {
    return this._vnc;
  }

  // vnc_display - computed: true, optional: false, required: false
  public get vncDisplay() {
    return this.getNumberAttribute('vnc_display');
  }
}

export class AppProfileAppPoliciesAppConfigVminfoList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfigVminfo[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigVminfoOutputReference {
    return new AppProfileAppPoliciesAppConfigVminfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesAppConfig {
  /**
  * current bundle version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#bundle_version AppProfile#bundle_version}
  */
  readonly bundleVersion?: number;
  /**
  * user defined cpus for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#cpus AppProfile#cpus}
  */
  readonly cpus?: number;
  /**
  * user defined memory for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#memory AppProfile#memory}
  */
  readonly memory?: number;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name_app_part AppProfile#name_app_part}
  */
  readonly nameAppPart?: string;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name_project_part AppProfile#name_project_part}
  */
  readonly nameProjectPart?: string;
  /**
  * network instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#net_inst_name AppProfile#net_inst_name}
  */
  readonly netInstName?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#net_inst_tags AppProfile#net_inst_tags}
  */
  readonly netInstTags?: { [key: string]: string };
  /**
  * user defined network options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#networks AppProfile#networks}
  */
  readonly networks?: number;
  /**
  * this flag denotes whether there is latest bundle available in the marketplace or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#new_bundle_version_available AppProfile#new_bundle_version_available}
  */
  readonly newBundleVersionAvailable?: boolean | cdktf.IResolvable;
  /**
  * Remote console flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#remote_console AppProfile#remote_console}
  */
  readonly remoteConsole?: boolean | cdktf.IResolvable;
  /**
  * start delay is the time in seconds EVE should wait after boot before starting the application instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#start_delay_in_seconds AppProfile#start_delay_in_seconds}
  */
  readonly startDelayInSeconds?: number;
  /**
  * user defined storage for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#storage AppProfile#storage}
  */
  readonly storage?: number;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#tags AppProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#interfaces AppProfile#interfaces}
  */
  readonly interfaces?: AppProfileAppPoliciesAppConfigInterfaces[] | cdktf.IResolvable;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#logs AppProfile#logs}
  */
  readonly logs?: AppProfileAppPoliciesAppConfigLogs[] | cdktf.IResolvable;
  /**
  * manifest_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#manifest_json AppProfile#manifest_json}
  */
  readonly manifestJson?: AppProfileAppPoliciesAppConfigManifestJson[] | cdktf.IResolvable;
  /**
  * vminfo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#vminfo AppProfile#vminfo}
  */
  readonly vminfo?: AppProfileAppPoliciesAppConfigVminfo[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesAppConfigToTerraform(struct?: AppProfileAppPoliciesAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_version: cdktf.numberToTerraform(struct!.bundleVersion),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    memory: cdktf.numberToTerraform(struct!.memory),
    name_app_part: cdktf.stringToTerraform(struct!.nameAppPart),
    name_project_part: cdktf.stringToTerraform(struct!.nameProjectPart),
    net_inst_name: cdktf.stringToTerraform(struct!.netInstName),
    net_inst_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.netInstTags),
    networks: cdktf.numberToTerraform(struct!.networks),
    new_bundle_version_available: cdktf.booleanToTerraform(struct!.newBundleVersionAvailable),
    remote_console: cdktf.booleanToTerraform(struct!.remoteConsole),
    start_delay_in_seconds: cdktf.numberToTerraform(struct!.startDelayInSeconds),
    storage: cdktf.numberToTerraform(struct!.storage),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    interfaces: cdktf.listMapper(appProfileAppPoliciesAppConfigInterfacesToTerraform, true)(struct!.interfaces),
    logs: cdktf.listMapper(appProfileAppPoliciesAppConfigLogsToTerraform, true)(struct!.logs),
    manifest_json: cdktf.listMapper(appProfileAppPoliciesAppConfigManifestJsonToTerraform, true)(struct!.manifestJson),
    vminfo: cdktf.listMapper(appProfileAppPoliciesAppConfigVminfoToTerraform, true)(struct!.vminfo),
  }
}


export function appProfileAppPoliciesAppConfigToHclTerraform(struct?: AppProfileAppPoliciesAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_version: {
      value: cdktf.numberToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_app_part: {
      value: cdktf.stringToHclTerraform(struct!.nameAppPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_project_part: {
      value: cdktf.stringToHclTerraform(struct!.nameProjectPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_inst_name: {
      value: cdktf.stringToHclTerraform(struct!.netInstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_inst_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.netInstTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    networks: {
      value: cdktf.numberToHclTerraform(struct!.networks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_bundle_version_available: {
      value: cdktf.booleanToHclTerraform(struct!.newBundleVersionAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_console: {
      value: cdktf.booleanToHclTerraform(struct!.remoteConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.startDelayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.numberToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    interfaces: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigInterfacesList",
    },
    logs: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigLogsToHclTerraform, true)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigLogsList",
    },
    manifest_json: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigManifestJsonToHclTerraform, true)(struct!.manifestJson),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigManifestJsonList",
    },
    vminfo: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigVminfoToHclTerraform, true)(struct!.vminfo),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigVminfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesAppConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._nameAppPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAppPart = this._nameAppPart;
    }
    if (this._nameProjectPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameProjectPart = this._nameProjectPart;
    }
    if (this._netInstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netInstName = this._netInstName;
    }
    if (this._netInstTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.netInstTags = this._netInstTags;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._newBundleVersionAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.newBundleVersionAvailable = this._newBundleVersionAvailable;
    }
    if (this._remoteConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteConsole = this._remoteConsole;
    }
    if (this._startDelayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDelayInSeconds = this._startDelayInSeconds;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._manifestJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestJson = this._manifestJson?.internalValue;
    }
    if (this._vminfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vminfo = this._vminfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesAppConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleVersion = undefined;
      this._cpus = undefined;
      this._memory = undefined;
      this._nameAppPart = undefined;
      this._nameProjectPart = undefined;
      this._netInstName = undefined;
      this._netInstTags = undefined;
      this._networks = undefined;
      this._newBundleVersionAvailable = undefined;
      this._remoteConsole = undefined;
      this._startDelayInSeconds = undefined;
      this._storage = undefined;
      this._tags = undefined;
      this._interfaces.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._manifestJson.internalValue = undefined;
      this._vminfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleVersion = value.bundleVersion;
      this._cpus = value.cpus;
      this._memory = value.memory;
      this._nameAppPart = value.nameAppPart;
      this._nameProjectPart = value.nameProjectPart;
      this._netInstName = value.netInstName;
      this._netInstTags = value.netInstTags;
      this._networks = value.networks;
      this._newBundleVersionAvailable = value.newBundleVersionAvailable;
      this._remoteConsole = value.remoteConsole;
      this._startDelayInSeconds = value.startDelayInSeconds;
      this._storage = value.storage;
      this._tags = value.tags;
      this._interfaces.internalValue = value.interfaces;
      this._logs.internalValue = value.logs;
      this._manifestJson.internalValue = value.manifestJson;
      this._vminfo.internalValue = value.vminfo;
    }
  }

  // bundle_version - computed: false, optional: true, required: false
  private _bundleVersion?: number; 
  public get bundleVersion() {
    return this.getNumberAttribute('bundle_version');
  }
  public set bundleVersion(value: number) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // drives - computed: true, optional: false, required: false
  public get drives() {
    return this.getNumberAttribute('drives');
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // name_app_part - computed: false, optional: true, required: false
  private _nameAppPart?: string; 
  public get nameAppPart() {
    return this.getStringAttribute('name_app_part');
  }
  public set nameAppPart(value: string) {
    this._nameAppPart = value;
  }
  public resetNameAppPart() {
    this._nameAppPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAppPartInput() {
    return this._nameAppPart;
  }

  // name_project_part - computed: false, optional: true, required: false
  private _nameProjectPart?: string; 
  public get nameProjectPart() {
    return this.getStringAttribute('name_project_part');
  }
  public set nameProjectPart(value: string) {
    this._nameProjectPart = value;
  }
  public resetNameProjectPart() {
    this._nameProjectPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameProjectPartInput() {
    return this._nameProjectPart;
  }

  // net_inst_name - computed: false, optional: true, required: false
  private _netInstName?: string; 
  public get netInstName() {
    return this.getStringAttribute('net_inst_name');
  }
  public set netInstName(value: string) {
    this._netInstName = value;
  }
  public resetNetInstName() {
    this._netInstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInstNameInput() {
    return this._netInstName;
  }

  // net_inst_tags - computed: false, optional: true, required: false
  private _netInstTags?: { [key: string]: string }; 
  public get netInstTags() {
    return this.getStringMapAttribute('net_inst_tags');
  }
  public set netInstTags(value: { [key: string]: string }) {
    this._netInstTags = value;
  }
  public resetNetInstTags() {
    this._netInstTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInstTagsInput() {
    return this._netInstTags;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: number; 
  public get networks() {
    return this.getNumberAttribute('networks');
  }
  public set networks(value: number) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // new_bundle_version_available - computed: false, optional: true, required: false
  private _newBundleVersionAvailable?: boolean | cdktf.IResolvable; 
  public get newBundleVersionAvailable() {
    return this.getBooleanAttribute('new_bundle_version_available');
  }
  public set newBundleVersionAvailable(value: boolean | cdktf.IResolvable) {
    this._newBundleVersionAvailable = value;
  }
  public resetNewBundleVersionAvailable() {
    this._newBundleVersionAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newBundleVersionAvailableInput() {
    return this._newBundleVersionAvailable;
  }

  // remote_console - computed: false, optional: true, required: false
  private _remoteConsole?: boolean | cdktf.IResolvable; 
  public get remoteConsole() {
    return this.getBooleanAttribute('remote_console');
  }
  public set remoteConsole(value: boolean | cdktf.IResolvable) {
    this._remoteConsole = value;
  }
  public resetRemoteConsole() {
    this._remoteConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteConsoleInput() {
    return this._remoteConsole;
  }

  // start_delay_in_seconds - computed: false, optional: true, required: false
  private _startDelayInSeconds?: number; 
  public get startDelayInSeconds() {
    return this.getNumberAttribute('start_delay_in_seconds');
  }
  public set startDelayInSeconds(value: number) {
    this._startDelayInSeconds = value;
  }
  public resetStartDelayInSeconds() {
    this._startDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInSecondsInput() {
    return this._startDelayInSeconds;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new AppProfileAppPoliciesAppConfigInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: AppProfileAppPoliciesAppConfigInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new AppProfileAppPoliciesAppConfigLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: AppProfileAppPoliciesAppConfigLogs[] | cdktf.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // manifest_json - computed: false, optional: true, required: false
  private _manifestJson = new AppProfileAppPoliciesAppConfigManifestJsonList(this, "manifest_json", false);
  public get manifestJson() {
    return this._manifestJson;
  }
  public putManifestJson(value: AppProfileAppPoliciesAppConfigManifestJson[] | cdktf.IResolvable) {
    this._manifestJson.internalValue = value;
  }
  public resetManifestJson() {
    this._manifestJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestJsonInput() {
    return this._manifestJson.internalValue;
  }

  // vminfo - computed: false, optional: true, required: false
  private _vminfo = new AppProfileAppPoliciesAppConfigVminfoList(this, "vminfo", false);
  public get vminfo() {
    return this._vminfo;
  }
  public putVminfo(value: AppProfileAppPoliciesAppConfigVminfo[] | cdktf.IResolvable) {
    this._vminfo.internalValue = value;
  }
  public resetVminfo() {
    this._vminfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vminfoInput() {
    return this._vminfo.internalValue;
  }
}

export class AppProfileAppPoliciesAppConfigList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesAppConfig[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesAppConfigOutputReference {
    return new AppProfileAppPoliciesAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPoliciesMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#tags AppProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#title AppProfile#title}
  */
  readonly title?: string;
}

export function appProfileAppPoliciesMetaDataToTerraform(struct?: AppProfileAppPoliciesMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function appProfileAppPoliciesMetaDataToHclTerraform(struct?: AppProfileAppPoliciesMetaData | cdktf.IResolvable): any {
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPoliciesMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPoliciesMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class AppProfileAppPoliciesMetaDataList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPoliciesMetaData[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesMetaDataOutputReference {
    return new AppProfileAppPoliciesMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileAppPolicies {
  /**
  * app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#app_config AppProfile#app_config}
  */
  readonly appConfig?: AppProfileAppPoliciesAppConfig[] | cdktf.IResolvable;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#meta_data AppProfile#meta_data}
  */
  readonly metaData?: AppProfileAppPoliciesMetaData[] | cdktf.IResolvable;
}

export function appProfileAppPoliciesToTerraform(struct?: AppProfileAppPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_config: cdktf.listMapper(appProfileAppPoliciesAppConfigToTerraform, true)(struct!.appConfig),
    meta_data: cdktf.listMapper(appProfileAppPoliciesMetaDataToTerraform, true)(struct!.metaData),
  }
}


export function appProfileAppPoliciesToHclTerraform(struct?: AppProfileAppPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_config: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesAppConfigToHclTerraform, true)(struct!.appConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesAppConfigList",
    },
    meta_data: {
      value: cdktf.listMapperHcl(appProfileAppPoliciesMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileAppPoliciesMetaDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileAppPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileAppPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appConfig = this._appConfig?.internalValue;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileAppPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appConfig.internalValue = undefined;
      this._metaData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appConfig.internalValue = value.appConfig;
      this._metaData.internalValue = value.metaData;
    }
  }

  // app_config - computed: false, optional: true, required: false
  private _appConfig = new AppProfileAppPoliciesAppConfigList(this, "app_config", false);
  public get appConfig() {
    return this._appConfig;
  }
  public putAppConfig(value: AppProfileAppPoliciesAppConfig[] | cdktf.IResolvable) {
    this._appConfig.internalValue = value;
  }
  public resetAppConfig() {
    this._appConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConfigInput() {
    return this._appConfig.internalValue;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new AppProfileAppPoliciesMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: AppProfileAppPoliciesMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }
}

export class AppProfileAppPoliciesList extends cdktf.ComplexList {
  public internalValue? : AppProfileAppPolicies[] | cdktf.IResolvable

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
  public get(index: number): AppProfileAppPoliciesOutputReference {
    return new AppProfileAppPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#tags AppProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#title AppProfile#title}
  */
  readonly title?: string;
}

export function appProfileNetworkPoliciesMetaDataToTerraform(struct?: AppProfileNetworkPoliciesMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function appProfileNetworkPoliciesMetaDataToHclTerraform(struct?: AppProfileNetworkPoliciesMetaData | cdktf.IResolvable): any {
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class AppProfileNetworkPoliciesMetaDataList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesMetaData[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesMetaDataOutputReference {
    return new AppProfileNetworkPoliciesMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#addrs AppProfile#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#hostname AppProfile#hostname}
  */
  readonly hostname?: string;
}

export function appProfileNetworkPoliciesNetworkConfigDnsListStructToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function appProfileNetworkPoliciesNetworkConfigDnsListStructToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigDnsListStructList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigDnsListStructOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#end AppProfile#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#start AppProfile#start}
  */
  readonly start?: string;
}

export function appProfileNetworkPoliciesNetworkConfigIpDhcpRangeToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function appProfileNetworkPoliciesNetworkConfigIpDhcpRangeToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigIpDhcpRange[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigIpDhcpRangeOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigIp {
  /**
  * IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#dns AppProfile#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#domain AppProfile#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#gateway AppProfile#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#mask AppProfile#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#ntp AppProfile#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#subnet AppProfile#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#dhcp_range AppProfile#dhcp_range}
  */
  readonly dhcpRange?: AppProfileNetworkPoliciesNetworkConfigIpDhcpRange[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesNetworkConfigIpToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function appProfileNetworkPoliciesNetworkConfigIpToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new AppProfileNetworkPoliciesNetworkConfigIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: AppProfileNetworkPoliciesNetworkConfigIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigIpList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigIp[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigIpOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp {
  /**
  * Service credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#credential AppProfile#credential}
  */
  readonly credential?: string;
  /**
  * Service name/ service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name_or_ip AppProfile#name_or_ip}
  */
  readonly nameOrIp?: string;
  /**
  * Service Point Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
}

export function appProfileNetworkPoliciesNetworkConfigOpaqueLispSpToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appProfileNetworkPoliciesNetworkConfigOpaqueLispSpToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
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

export class AppProfileNetworkPoliciesNetworkConfigOpaqueLispSpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
      this._type = value.type;
    }
  }

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: true, required: false
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  public resetNameOrIp() {
    this._nameOrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
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

export class AppProfileNetworkPoliciesNetworkConfigOpaqueLispSpList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigOpaqueLispSpOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigOpaqueLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigOpaqueLisp {
  /**
  * Allocate flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#allocate AppProfile#allocate}
  */
  readonly allocate?: boolean | cdktf.IResolvable;
  /**
  * Allocation Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#allocationprefix AppProfile#allocationprefix}
  */
  readonly allocationprefix?: string;
  /**
  * Allocation Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#allocationprefixlen AppProfile#allocationprefixlen}
  */
  readonly allocationprefixlen?: number;
  /**
  * Export Private flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#exportprivate AppProfile#exportprivate}
  */
  readonly exportprivate?: boolean | cdktf.IResolvable;
  /**
  * lisp id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#lispiid AppProfile#lispiid}
  */
  readonly lispiid?: number;
  /**
  * sp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#sp AppProfile#sp}
  */
  readonly sp?: AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesNetworkConfigOpaqueLispToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate: cdktf.booleanToTerraform(struct!.allocate),
    allocationprefix: cdktf.stringToTerraform(struct!.allocationprefix),
    allocationprefixlen: cdktf.numberToTerraform(struct!.allocationprefixlen),
    exportprivate: cdktf.booleanToTerraform(struct!.exportprivate),
    lispiid: cdktf.numberToTerraform(struct!.lispiid),
    sp: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigOpaqueLispSpToTerraform, true)(struct!.sp),
  }
}


export function appProfileNetworkPoliciesNetworkConfigOpaqueLispToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate: {
      value: cdktf.booleanToHclTerraform(struct!.allocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allocationprefix: {
      value: cdktf.stringToHclTerraform(struct!.allocationprefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocationprefixlen: {
      value: cdktf.numberToHclTerraform(struct!.allocationprefixlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exportprivate: {
      value: cdktf.booleanToHclTerraform(struct!.exportprivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lispiid: {
      value: cdktf.numberToHclTerraform(struct!.lispiid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigOpaqueLispSpToHclTerraform, true)(struct!.sp),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigOpaqueLispSpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigOpaqueLispOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigOpaqueLisp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocate = this._allocate;
    }
    if (this._allocationprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefix = this._allocationprefix;
    }
    if (this._allocationprefixlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefixlen = this._allocationprefixlen;
    }
    if (this._exportprivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportprivate = this._exportprivate;
    }
    if (this._lispiid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispiid = this._lispiid;
    }
    if (this._sp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigOpaqueLisp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocate = undefined;
      this._allocationprefix = undefined;
      this._allocationprefixlen = undefined;
      this._exportprivate = undefined;
      this._lispiid = undefined;
      this._sp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocate = value.allocate;
      this._allocationprefix = value.allocationprefix;
      this._allocationprefixlen = value.allocationprefixlen;
      this._exportprivate = value.exportprivate;
      this._lispiid = value.lispiid;
      this._sp.internalValue = value.sp;
    }
  }

  // allocate - computed: false, optional: true, required: false
  private _allocate?: boolean | cdktf.IResolvable; 
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }
  public set allocate(value: boolean | cdktf.IResolvable) {
    this._allocate = value;
  }
  public resetAllocate() {
    this._allocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateInput() {
    return this._allocate;
  }

  // allocationprefix - computed: false, optional: true, required: false
  private _allocationprefix?: string; 
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }
  public set allocationprefix(value: string) {
    this._allocationprefix = value;
  }
  public resetAllocationprefix() {
    this._allocationprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixInput() {
    return this._allocationprefix;
  }

  // allocationprefixlen - computed: false, optional: true, required: false
  private _allocationprefixlen?: number; 
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }
  public set allocationprefixlen(value: number) {
    this._allocationprefixlen = value;
  }
  public resetAllocationprefixlen() {
    this._allocationprefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixlenInput() {
    return this._allocationprefixlen;
  }

  // exportprivate - computed: false, optional: true, required: false
  private _exportprivate?: boolean | cdktf.IResolvable; 
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }
  public set exportprivate(value: boolean | cdktf.IResolvable) {
    this._exportprivate = value;
  }
  public resetExportprivate() {
    this._exportprivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportprivateInput() {
    return this._exportprivate;
  }

  // lispiid - computed: false, optional: true, required: false
  private _lispiid?: number; 
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }
  public set lispiid(value: number) {
    this._lispiid = value;
  }
  public resetLispiid() {
    this._lispiid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispiidInput() {
    return this._lispiid;
  }

  // sp - computed: false, optional: true, required: false
  private _sp = new AppProfileNetworkPoliciesNetworkConfigOpaqueLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
  public putSp(value: AppProfileNetworkPoliciesNetworkConfigOpaqueLispSp[] | cdktf.IResolvable) {
    this._sp.internalValue = value;
  }
  public resetSp() {
    this._sp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp.internalValue;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigOpaqueLispList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigOpaqueLisp[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigOpaqueLispOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigOpaqueLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigOpaque {
  /**
  * base64 encoded string of opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#oconfig AppProfile#oconfig}
  */
  readonly oconfig?: string;
  /**
  * type of Opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
  /**
  * lisp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#lisp AppProfile#lisp}
  */
  readonly lisp?: AppProfileNetworkPoliciesNetworkConfigOpaqueLisp[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesNetworkConfigOpaqueToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    type: cdktf.stringToTerraform(struct!.type),
    lisp: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigOpaqueLispToTerraform, true)(struct!.lisp),
  }
}


export function appProfileNetworkPoliciesNetworkConfigOpaqueToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
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
    lisp: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigOpaqueLispToHclTerraform, true)(struct!.lisp),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigOpaqueLispList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigOpaqueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigOpaque | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._lisp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lisp = this._lisp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigOpaque | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oconfig = undefined;
      this._type = undefined;
      this._lisp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oconfig = value.oconfig;
      this._type = value.type;
      this._lisp.internalValue = value.lisp;
    }
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
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

  // lisp - computed: false, optional: true, required: false
  private _lisp = new AppProfileNetworkPoliciesNetworkConfigOpaqueLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }
  public putLisp(value: AppProfileNetworkPoliciesNetworkConfigOpaqueLisp[] | cdktf.IResolvable) {
    this._lisp.internalValue = value;
  }
  public resetLisp() {
    this._lisp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInput() {
    return this._lisp.internalValue;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigOpaqueList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigOpaque[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigOpaqueOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint {
  /**
  * IP address or FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#host AppProfile#host}
  */
  readonly host?: string;
  /**
  * TCP port required for CONNECTIVITY_PROBE_METHOD_TCP.
  * Leave empty for CONNECTIVITY_PROBE_METHOD_ICMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#port AppProfile#port}
  */
  readonly port?: number;
}

export function appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig {
  /**
  * Method to use to determine the connectivity status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#probe_method AppProfile#probe_method}
  */
  readonly probeMethod?: string;
  /**
  * probe_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#probe_endpoint AppProfile#probe_endpoint}
  */
  readonly probeEndpoint?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe_method: cdktf.stringToTerraform(struct!.probeMethod),
    probe_endpoint: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform, true)(struct!.probeEndpoint),
  }
}


export function appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe_method: {
      value: cdktf.stringToHclTerraform(struct!.probeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_endpoint: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform, true)(struct!.probeEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeMethod = this._probeMethod;
    }
    if (this._probeEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeEndpoint = this._probeEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probeMethod = undefined;
      this._probeEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probeMethod = value.probeMethod;
      this._probeEndpoint.internalValue = value.probeEndpoint;
    }
  }

  // probe_method - computed: false, optional: true, required: false
  private _probeMethod?: string; 
  public get probeMethod() {
    return this.getStringAttribute('probe_method');
  }
  public set probeMethod(value: string) {
    this._probeMethod = value;
  }
  public resetProbeMethod() {
    this._probeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeMethodInput() {
    return this._probeMethod;
  }

  // probe_endpoint - computed: false, optional: true, required: false
  private _probeEndpoint = new AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList(this, "probe_endpoint", false);
  public get probeEndpoint() {
    return this._probeEndpoint;
  }
  public putProbeEndpoint(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable) {
    this._probeEndpoint.internalValue = value;
  }
  public resetProbeEndpoint() {
    this._probeEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeEndpointInput() {
    return this._probeEndpoint.internalValue;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig {
  /**
  * Enable gateway ping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#enable_gateway_ping AppProfile#enable_gateway_ping}
  */
  readonly enableGatewayPing?: boolean | cdktf.IResolvable;
  /**
  * Ping max cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#ping_max_cost AppProfile#ping_max_cost}
  */
  readonly pingMaxCost?: number;
  /**
  * Prefer lower cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#prefer_lower_cost AppProfile#prefer_lower_cost}
  */
  readonly preferLowerCost?: boolean | cdktf.IResolvable;
  /**
  * Prefer stronger WWAN signal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#prefer_stronger_wwan_signal AppProfile#prefer_stronger_wwan_signal}
  */
  readonly preferStrongerWwanSignal?: boolean | cdktf.IResolvable;
  /**
  * custom_probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#custom_probe_config AppProfile#custom_probe_config}
  */
  readonly customProbeConfig?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_gateway_ping: cdktf.booleanToTerraform(struct!.enableGatewayPing),
    ping_max_cost: cdktf.numberToTerraform(struct!.pingMaxCost),
    prefer_lower_cost: cdktf.booleanToTerraform(struct!.preferLowerCost),
    prefer_stronger_wwan_signal: cdktf.booleanToTerraform(struct!.preferStrongerWwanSignal),
    custom_probe_config: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigToTerraform, true)(struct!.customProbeConfig),
  }
}


export function appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_gateway_ping: {
      value: cdktf.booleanToHclTerraform(struct!.enableGatewayPing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping_max_cost: {
      value: cdktf.numberToHclTerraform(struct!.pingMaxCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_lower_cost: {
      value: cdktf.booleanToHclTerraform(struct!.preferLowerCost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_stronger_wwan_signal: {
      value: cdktf.booleanToHclTerraform(struct!.preferStrongerWwanSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_probe_config: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigToHclTerraform, true)(struct!.customProbeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGatewayPing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGatewayPing = this._enableGatewayPing;
    }
    if (this._pingMaxCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingMaxCost = this._pingMaxCost;
    }
    if (this._preferLowerCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferLowerCost = this._preferLowerCost;
    }
    if (this._preferStrongerWwanSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferStrongerWwanSignal = this._preferStrongerWwanSignal;
    }
    if (this._customProbeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProbeConfig = this._customProbeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableGatewayPing = undefined;
      this._pingMaxCost = undefined;
      this._preferLowerCost = undefined;
      this._preferStrongerWwanSignal = undefined;
      this._customProbeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableGatewayPing = value.enableGatewayPing;
      this._pingMaxCost = value.pingMaxCost;
      this._preferLowerCost = value.preferLowerCost;
      this._preferStrongerWwanSignal = value.preferStrongerWwanSignal;
      this._customProbeConfig.internalValue = value.customProbeConfig;
    }
  }

  // enable_gateway_ping - computed: false, optional: true, required: false
  private _enableGatewayPing?: boolean | cdktf.IResolvable; 
  public get enableGatewayPing() {
    return this.getBooleanAttribute('enable_gateway_ping');
  }
  public set enableGatewayPing(value: boolean | cdktf.IResolvable) {
    this._enableGatewayPing = value;
  }
  public resetEnableGatewayPing() {
    this._enableGatewayPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayPingInput() {
    return this._enableGatewayPing;
  }

  // ping_max_cost - computed: false, optional: true, required: false
  private _pingMaxCost?: number; 
  public get pingMaxCost() {
    return this.getNumberAttribute('ping_max_cost');
  }
  public set pingMaxCost(value: number) {
    this._pingMaxCost = value;
  }
  public resetPingMaxCost() {
    this._pingMaxCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingMaxCostInput() {
    return this._pingMaxCost;
  }

  // prefer_lower_cost - computed: false, optional: true, required: false
  private _preferLowerCost?: boolean | cdktf.IResolvable; 
  public get preferLowerCost() {
    return this.getBooleanAttribute('prefer_lower_cost');
  }
  public set preferLowerCost(value: boolean | cdktf.IResolvable) {
    this._preferLowerCost = value;
  }
  public resetPreferLowerCost() {
    this._preferLowerCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferLowerCostInput() {
    return this._preferLowerCost;
  }

  // prefer_stronger_wwan_signal - computed: false, optional: true, required: false
  private _preferStrongerWwanSignal?: boolean | cdktf.IResolvable; 
  public get preferStrongerWwanSignal() {
    return this.getBooleanAttribute('prefer_stronger_wwan_signal');
  }
  public set preferStrongerWwanSignal(value: boolean | cdktf.IResolvable) {
    this._preferStrongerWwanSignal = value;
  }
  public resetPreferStrongerWwanSignal() {
    this._preferStrongerWwanSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferStrongerWwanSignalInput() {
    return this._preferStrongerWwanSignal;
  }

  // custom_probe_config - computed: false, optional: true, required: false
  private _customProbeConfig = new AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfigList(this, "custom_probe_config", false);
  public get customProbeConfig() {
    return this._customProbeConfig;
  }
  public putCustomProbeConfig(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable) {
    this._customProbeConfig.internalValue = value;
  }
  public resetCustomProbeConfig() {
    this._customProbeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProbeConfigInput() {
    return this._customProbeConfig.internalValue;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfigStaticRoutes {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#gateway AppProfile#gateway}
  */
  readonly gateway?: string;
  /**
  * Output Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#output_port AppProfile#output_port}
  */
  readonly outputPort?: string;
  /**
  * IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#prefix AppProfile#prefix}
  */
  readonly prefix?: string;
  /**
  * probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#probe_config AppProfile#probe_config}
  */
  readonly probeConfig?: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesNetworkConfigStaticRoutesToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    output_port: cdktf.stringToTerraform(struct!.outputPort),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    probe_config: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigToTerraform, true)(struct!.probeConfig),
  }
}


export function appProfileNetworkPoliciesNetworkConfigStaticRoutesToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfigStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_port: {
      value: cdktf.stringToHclTerraform(struct!.outputPort),
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
    probe_config: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigToHclTerraform, true)(struct!.probeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfigStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._outputPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPort = this._outputPort;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._probeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeConfig = this._probeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._outputPort = undefined;
      this._prefix = undefined;
      this._probeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._outputPort = value.outputPort;
      this._prefix = value.prefix;
      this._probeConfig.internalValue = value.probeConfig;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // output_port - computed: false, optional: true, required: false
  private _outputPort?: string; 
  public get outputPort() {
    return this.getStringAttribute('output_port');
  }
  public set outputPort(value: string) {
    this._outputPort = value;
  }
  public resetOutputPort() {
    this._outputPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPortInput() {
    return this._outputPort;
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

  // probe_config - computed: false, optional: true, required: false
  private _probeConfig = new AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfigList(this, "probe_config", false);
  public get probeConfig() {
    return this._probeConfig;
  }
  public putProbeConfig(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutesProbeConfig[] | cdktf.IResolvable) {
    this._probeConfig.internalValue = value;
  }
  public resetProbeConfig() {
    this._probeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeConfigInput() {
    return this._probeConfig.internalValue;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfigStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigStaticRoutesOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPoliciesNetworkConfig {
  /**
  * flag to indicate if this is the default network instance for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#device_default AppProfile#device_default}
  */
  readonly deviceDefault?: boolean | cdktf.IResolvable;
  /**
  * Kind of Network Instance ( Local, Switch etc )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#kind AppProfile#kind}
  */
  readonly kind?: string;
  /**
  * name of port mapping in the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#port AppProfile#port}
  */
  readonly port?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#port_tags AppProfile#port_tags}
  */
  readonly portTags?: { [key: string]: string };
  /**
  * Automatically propagate connected routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#propagate_connected_routes AppProfile#propagate_connected_routes}
  */
  readonly propagateConnectedRoutes?: boolean | cdktf.IResolvable;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#tags AppProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of DHCP for this Network Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#dns_list AppProfile#dns_list}
  */
  readonly dnsList?: AppProfileNetworkPoliciesNetworkConfigDnsListStruct[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#ip AppProfile#ip}
  */
  readonly ip?: AppProfileNetworkPoliciesNetworkConfigIp[] | cdktf.IResolvable;
  /**
  * opaque block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#opaque AppProfile#opaque}
  */
  readonly opaque?: AppProfileNetworkPoliciesNetworkConfigOpaque[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#static_routes AppProfile#static_routes}
  */
  readonly staticRoutes?: AppProfileNetworkPoliciesNetworkConfigStaticRoutes[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesNetworkConfigToTerraform(struct?: AppProfileNetworkPoliciesNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_default: cdktf.booleanToTerraform(struct!.deviceDefault),
    kind: cdktf.stringToTerraform(struct!.kind),
    port: cdktf.stringToTerraform(struct!.port),
    port_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.portTags),
    propagate_connected_routes: cdktf.booleanToTerraform(struct!.propagateConnectedRoutes),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    dns_list: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigDnsListStructToTerraform, true)(struct!.dnsList),
    ip: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigIpToTerraform, true)(struct!.ip),
    opaque: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigOpaqueToTerraform, true)(struct!.opaque),
    static_routes: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function appProfileNetworkPoliciesNetworkConfigToHclTerraform(struct?: AppProfileNetworkPoliciesNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_default: {
      value: cdktf.booleanToHclTerraform(struct!.deviceDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.portTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    propagate_connected_routes: {
      value: cdktf.booleanToHclTerraform(struct!.propagateConnectedRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_list: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigDnsListStructList",
    },
    ip: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigIpList",
    },
    opaque: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigOpaqueToHclTerraform, true)(struct!.opaque),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigOpaqueList",
    },
    static_routes: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPoliciesNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefault = this._deviceDefault;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTags = this._portTags;
    }
    if (this._propagateConnectedRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateConnectedRoutes = this._propagateConnectedRoutes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._opaque?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaque = this._opaque?.internalValue;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPoliciesNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceDefault = undefined;
      this._kind = undefined;
      this._port = undefined;
      this._portTags = undefined;
      this._propagateConnectedRoutes = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._dnsList.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._opaque.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceDefault = value.deviceDefault;
      this._kind = value.kind;
      this._port = value.port;
      this._portTags = value.portTags;
      this._propagateConnectedRoutes = value.propagateConnectedRoutes;
      this._tags = value.tags;
      this._type = value.type;
      this._dnsList.internalValue = value.dnsList;
      this._ip.internalValue = value.ip;
      this._opaque.internalValue = value.opaque;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // device_default - computed: false, optional: true, required: false
  private _deviceDefault?: boolean | cdktf.IResolvable; 
  public get deviceDefault() {
    return this.getBooleanAttribute('device_default');
  }
  public set deviceDefault(value: boolean | cdktf.IResolvable) {
    this._deviceDefault = value;
  }
  public resetDeviceDefault() {
    this._deviceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefaultInput() {
    return this._deviceDefault;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_tags - computed: false, optional: true, required: false
  private _portTags?: { [key: string]: string }; 
  public get portTags() {
    return this.getStringMapAttribute('port_tags');
  }
  public set portTags(value: { [key: string]: string }) {
    this._portTags = value;
  }
  public resetPortTags() {
    this._portTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTagsInput() {
    return this._portTags;
  }

  // propagate_connected_routes - computed: false, optional: true, required: false
  private _propagateConnectedRoutes?: boolean | cdktf.IResolvable; 
  public get propagateConnectedRoutes() {
    return this.getBooleanAttribute('propagate_connected_routes');
  }
  public set propagateConnectedRoutes(value: boolean | cdktf.IResolvable) {
    this._propagateConnectedRoutes = value;
  }
  public resetPropagateConnectedRoutes() {
    this._propagateConnectedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateConnectedRoutesInput() {
    return this._propagateConnectedRoutes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new AppProfileNetworkPoliciesNetworkConfigDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: AppProfileNetworkPoliciesNetworkConfigDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new AppProfileNetworkPoliciesNetworkConfigIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: AppProfileNetworkPoliciesNetworkConfigIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // opaque - computed: false, optional: true, required: false
  private _opaque = new AppProfileNetworkPoliciesNetworkConfigOpaqueList(this, "opaque", false);
  public get opaque() {
    return this._opaque;
  }
  public putOpaque(value: AppProfileNetworkPoliciesNetworkConfigOpaque[] | cdktf.IResolvable) {
    this._opaque.internalValue = value;
  }
  public resetOpaque() {
    this._opaque.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueInput() {
    return this._opaque.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new AppProfileNetworkPoliciesNetworkConfigStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: AppProfileNetworkPoliciesNetworkConfigStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}

export class AppProfileNetworkPoliciesNetworkConfigList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPoliciesNetworkConfig[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesNetworkConfigOutputReference {
    return new AppProfileNetworkPoliciesNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileNetworkPolicies {
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#meta_data AppProfile#meta_data}
  */
  readonly metaData?: AppProfileNetworkPoliciesMetaData[] | cdktf.IResolvable;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#network_config AppProfile#network_config}
  */
  readonly networkConfig?: AppProfileNetworkPoliciesNetworkConfig[] | cdktf.IResolvable;
}

export function appProfileNetworkPoliciesToTerraform(struct?: AppProfileNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta_data: cdktf.listMapper(appProfileNetworkPoliciesMetaDataToTerraform, true)(struct!.metaData),
    network_config: cdktf.listMapper(appProfileNetworkPoliciesNetworkConfigToTerraform, true)(struct!.networkConfig),
  }
}


export function appProfileNetworkPoliciesToHclTerraform(struct?: AppProfileNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta_data: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesMetaDataList",
    },
    network_config: {
      value: cdktf.listMapperHcl(appProfileNetworkPoliciesNetworkConfigToHclTerraform, true)(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileNetworkPoliciesNetworkConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metaData.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metaData.internalValue = value.metaData;
      this._networkConfig.internalValue = value.networkConfig;
    }
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new AppProfileNetworkPoliciesMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: AppProfileNetworkPoliciesMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new AppProfileNetworkPoliciesNetworkConfigList(this, "network_config", false);
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: AppProfileNetworkPoliciesNetworkConfig[] | cdktf.IResolvable) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }
}

export class AppProfileNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AppProfileNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AppProfileNetworkPoliciesOutputReference {
    return new AppProfileNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileVolumePoliciesMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#name AppProfile#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#tags AppProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#title AppProfile#title}
  */
  readonly title?: string;
}

export function appProfileVolumePoliciesMetaDataToTerraform(struct?: AppProfileVolumePoliciesMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function appProfileVolumePoliciesMetaDataToHclTerraform(struct?: AppProfileVolumePoliciesMetaData | cdktf.IResolvable): any {
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileVolumePoliciesMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileVolumePoliciesMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileVolumePoliciesMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class AppProfileVolumePoliciesMetaDataList extends cdktf.ComplexList {
  public internalValue? : AppProfileVolumePoliciesMetaData[] | cdktf.IResolvable

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
  public get(index: number): AppProfileVolumePoliciesMetaDataOutputReference {
    return new AppProfileVolumePoliciesMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileVolumePoliciesVolumeConfigPurge {
  /**
  * counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#counter AppProfile#counter}
  */
  readonly counter?: number;
}

export function appProfileVolumePoliciesVolumeConfigPurgeToTerraform(struct?: AppProfileVolumePoliciesVolumeConfigPurge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter: cdktf.numberToTerraform(struct!.counter),
  }
}


export function appProfileVolumePoliciesVolumeConfigPurgeToHclTerraform(struct?: AppProfileVolumePoliciesVolumeConfigPurge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter: {
      value: cdktf.numberToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileVolumePoliciesVolumeConfigPurgeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileVolumePoliciesVolumeConfigPurge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileVolumePoliciesVolumeConfigPurge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counter = value.counter;
    }
  }

  // counter - computed: false, optional: true, required: false
  private _counter?: number; 
  public get counter() {
    return this.getNumberAttribute('counter');
  }
  public set counter(value: number) {
    this._counter = value;
  }
  public resetCounter() {
    this._counter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter;
  }
}

export class AppProfileVolumePoliciesVolumeConfigPurgeList extends cdktf.ComplexList {
  public internalValue? : AppProfileVolumePoliciesVolumeConfigPurge[] | cdktf.IResolvable

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
  public get(index: number): AppProfileVolumePoliciesVolumeConfigPurgeOutputReference {
    return new AppProfileVolumePoliciesVolumeConfigPurgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileVolumePoliciesVolumeConfig {
  /**
  * Access mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#accessmode AppProfile#accessmode}
  */
  readonly accessmode?: string;
  /**
  * user defined key-value pairs of a block storage, will be used for targeting content tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#block_storage_tags AppProfile#block_storage_tags}
  */
  readonly blockStorageTags?: { [key: string]: string };
  /**
  * flag to keep the contents of the volume unencrypted (in clear text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#cleartext AppProfile#cleartext}
  */
  readonly cleartext?: boolean | cdktf.IResolvable;
  /**
  * content tree ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#content_tree_id AppProfile#content_tree_id}
  */
  readonly contentTreeId?: string;
  /**
  * user defined key-value pairs of a content tree that will be used for targeting by block storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#content_tree_target_condition AppProfile#content_tree_target_condition}
  */
  readonly contentTreeTargetCondition?: { [key: string]: string };
  /**
  * name of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#image AppProfile#image}
  */
  readonly image?: string;
  /**
  * label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#label AppProfile#label}
  */
  readonly label?: string;
  /**
  * flag to enable the volume to be attached to multiple app instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#multiattach AppProfile#multiattach}
  */
  readonly multiattach?: boolean | cdktf.IResolvable;
  /**
  * size of volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#size_bytes AppProfile#size_bytes}
  */
  readonly sizeBytes?: number;
  /**
  * type of Volume Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#type AppProfile#type}
  */
  readonly type?: string;
  /**
  * purge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#purge AppProfile#purge}
  */
  readonly purge?: AppProfileVolumePoliciesVolumeConfigPurge[] | cdktf.IResolvable;
}

export function appProfileVolumePoliciesVolumeConfigToTerraform(struct?: AppProfileVolumePoliciesVolumeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessmode: cdktf.stringToTerraform(struct!.accessmode),
    block_storage_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.blockStorageTags),
    cleartext: cdktf.booleanToTerraform(struct!.cleartext),
    content_tree_id: cdktf.stringToTerraform(struct!.contentTreeId),
    content_tree_target_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.contentTreeTargetCondition),
    image: cdktf.stringToTerraform(struct!.image),
    label: cdktf.stringToTerraform(struct!.label),
    multiattach: cdktf.booleanToTerraform(struct!.multiattach),
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
    type: cdktf.stringToTerraform(struct!.type),
    purge: cdktf.listMapper(appProfileVolumePoliciesVolumeConfigPurgeToTerraform, true)(struct!.purge),
  }
}


export function appProfileVolumePoliciesVolumeConfigToHclTerraform(struct?: AppProfileVolumePoliciesVolumeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessmode: {
      value: cdktf.stringToHclTerraform(struct!.accessmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_storage_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.blockStorageTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cleartext: {
      value: cdktf.booleanToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_tree_id: {
      value: cdktf.stringToHclTerraform(struct!.contentTreeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_tree_target_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.contentTreeTargetCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiattach: {
      value: cdktf.booleanToHclTerraform(struct!.multiattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purge: {
      value: cdktf.listMapperHcl(appProfileVolumePoliciesVolumeConfigPurgeToHclTerraform, true)(struct!.purge),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileVolumePoliciesVolumeConfigPurgeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileVolumePoliciesVolumeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileVolumePoliciesVolumeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessmode = this._accessmode;
    }
    if (this._blockStorageTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageTags = this._blockStorageTags;
    }
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    if (this._contentTreeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTreeId = this._contentTreeId;
    }
    if (this._contentTreeTargetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTreeTargetCondition = this._contentTreeTargetCondition;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._multiattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiattach = this._multiattach;
    }
    if (this._sizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeBytes = this._sizeBytes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._purge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.purge = this._purge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileVolumePoliciesVolumeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessmode = undefined;
      this._blockStorageTags = undefined;
      this._cleartext = undefined;
      this._contentTreeId = undefined;
      this._contentTreeTargetCondition = undefined;
      this._image = undefined;
      this._label = undefined;
      this._multiattach = undefined;
      this._sizeBytes = undefined;
      this._type = undefined;
      this._purge.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessmode = value.accessmode;
      this._blockStorageTags = value.blockStorageTags;
      this._cleartext = value.cleartext;
      this._contentTreeId = value.contentTreeId;
      this._contentTreeTargetCondition = value.contentTreeTargetCondition;
      this._image = value.image;
      this._label = value.label;
      this._multiattach = value.multiattach;
      this._sizeBytes = value.sizeBytes;
      this._type = value.type;
      this._purge.internalValue = value.purge;
    }
  }

  // accessmode - computed: false, optional: true, required: false
  private _accessmode?: string; 
  public get accessmode() {
    return this.getStringAttribute('accessmode');
  }
  public set accessmode(value: string) {
    this._accessmode = value;
  }
  public resetAccessmode() {
    this._accessmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessmodeInput() {
    return this._accessmode;
  }

  // block_storage_tags - computed: false, optional: true, required: false
  private _blockStorageTags?: { [key: string]: string }; 
  public get blockStorageTags() {
    return this.getStringMapAttribute('block_storage_tags');
  }
  public set blockStorageTags(value: { [key: string]: string }) {
    this._blockStorageTags = value;
  }
  public resetBlockStorageTags() {
    this._blockStorageTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageTagsInput() {
    return this._blockStorageTags;
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: boolean | cdktf.IResolvable; 
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }
  public set cleartext(value: boolean | cdktf.IResolvable) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // content_tree_id - computed: false, optional: true, required: false
  private _contentTreeId?: string; 
  public get contentTreeId() {
    return this.getStringAttribute('content_tree_id');
  }
  public set contentTreeId(value: string) {
    this._contentTreeId = value;
  }
  public resetContentTreeId() {
    this._contentTreeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTreeIdInput() {
    return this._contentTreeId;
  }

  // content_tree_target_condition - computed: false, optional: true, required: false
  private _contentTreeTargetCondition?: { [key: string]: string }; 
  public get contentTreeTargetCondition() {
    return this.getStringMapAttribute('content_tree_target_condition');
  }
  public set contentTreeTargetCondition(value: { [key: string]: string }) {
    this._contentTreeTargetCondition = value;
  }
  public resetContentTreeTargetCondition() {
    this._contentTreeTargetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTreeTargetConditionInput() {
    return this._contentTreeTargetCondition;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // multiattach - computed: false, optional: true, required: false
  private _multiattach?: boolean | cdktf.IResolvable; 
  public get multiattach() {
    return this.getBooleanAttribute('multiattach');
  }
  public set multiattach(value: boolean | cdktf.IResolvable) {
    this._multiattach = value;
  }
  public resetMultiattach() {
    this._multiattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiattachInput() {
    return this._multiattach;
  }

  // size_bytes - computed: false, optional: true, required: false
  private _sizeBytes?: number; 
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
  public set sizeBytes(value: number) {
    this._sizeBytes = value;
  }
  public resetSizeBytes() {
    this._sizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
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

  // purge - computed: false, optional: true, required: false
  private _purge = new AppProfileVolumePoliciesVolumeConfigPurgeList(this, "purge", false);
  public get purge() {
    return this._purge;
  }
  public putPurge(value: AppProfileVolumePoliciesVolumeConfigPurge[] | cdktf.IResolvable) {
    this._purge.internalValue = value;
  }
  public resetPurge() {
    this._purge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeInput() {
    return this._purge.internalValue;
  }
}

export class AppProfileVolumePoliciesVolumeConfigList extends cdktf.ComplexList {
  public internalValue? : AppProfileVolumePoliciesVolumeConfig[] | cdktf.IResolvable

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
  public get(index: number): AppProfileVolumePoliciesVolumeConfigOutputReference {
    return new AppProfileVolumePoliciesVolumeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppProfileVolumePolicies {
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#meta_data AppProfile#meta_data}
  */
  readonly metaData: AppProfileVolumePoliciesMetaData[] | cdktf.IResolvable;
  /**
  * volume_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#volume_config AppProfile#volume_config}
  */
  readonly volumeConfig: AppProfileVolumePoliciesVolumeConfig[] | cdktf.IResolvable;
}

export function appProfileVolumePoliciesToTerraform(struct?: AppProfileVolumePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta_data: cdktf.listMapper(appProfileVolumePoliciesMetaDataToTerraform, true)(struct!.metaData),
    volume_config: cdktf.listMapper(appProfileVolumePoliciesVolumeConfigToTerraform, true)(struct!.volumeConfig),
  }
}


export function appProfileVolumePoliciesToHclTerraform(struct?: AppProfileVolumePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta_data: {
      value: cdktf.listMapperHcl(appProfileVolumePoliciesMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileVolumePoliciesMetaDataList",
    },
    volume_config: {
      value: cdktf.listMapperHcl(appProfileVolumePoliciesVolumeConfigToHclTerraform, true)(struct!.volumeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppProfileVolumePoliciesVolumeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppProfileVolumePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppProfileVolumePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    if (this._volumeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeConfig = this._volumeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppProfileVolumePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metaData.internalValue = undefined;
      this._volumeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metaData.internalValue = value.metaData;
      this._volumeConfig.internalValue = value.volumeConfig;
    }
  }

  // meta_data - computed: false, optional: false, required: true
  private _metaData = new AppProfileVolumePoliciesMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: AppProfileVolumePoliciesMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // volume_config - computed: false, optional: false, required: true
  private _volumeConfig = new AppProfileVolumePoliciesVolumeConfigList(this, "volume_config", false);
  public get volumeConfig() {
    return this._volumeConfig;
  }
  public putVolumeConfig(value: AppProfileVolumePoliciesVolumeConfig[] | cdktf.IResolvable) {
    this._volumeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeConfigInput() {
    return this._volumeConfig.internalValue;
  }
}

export class AppProfileVolumePoliciesList extends cdktf.ComplexList {
  public internalValue? : AppProfileVolumePolicies[] | cdktf.IResolvable

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
  public get(index: number): AppProfileVolumePoliciesOutputReference {
    return new AppProfileVolumePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile zedcloud_app_profile}
*/
export class AppProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_app_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppProfile to import
  * @param importFromId The id of the existing AppProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_app_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/app_profile zedcloud_app_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_app_profile',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._latestVersion = config.latestVersion;
    this._name = config.name;
    this._status = config.status;
    this._title = config.title;
    this._appPolicies.internalValue = config.appPolicies;
    this._networkPolicies.internalValue = config.networkPolicies;
    this._volumePolicies.internalValue = config.volumePolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_version - computed: false, optional: true, required: false
  private _latestVersion?: number; 
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }
  public set latestVersion(value: number) {
    this._latestVersion = value;
  }
  public resetLatestVersion() {
    this._latestVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestVersionInput() {
    return this._latestVersion;
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

  // status - computed: false, optional: true, required: false
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // app_policies - computed: false, optional: true, required: false
  private _appPolicies = new AppProfileAppPoliciesList(this, "app_policies", false);
  public get appPolicies() {
    return this._appPolicies;
  }
  public putAppPolicies(value: AppProfileAppPolicies[] | cdktf.IResolvable) {
    this._appPolicies.internalValue = value;
  }
  public resetAppPolicies() {
    this._appPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPoliciesInput() {
    return this._appPolicies.internalValue;
  }

  // network_policies - computed: false, optional: true, required: false
  private _networkPolicies = new AppProfileNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AppProfileNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  public resetNetworkPolicies() {
    this._networkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }

  // volume_policies - computed: false, optional: true, required: false
  private _volumePolicies = new AppProfileVolumePoliciesList(this, "volume_policies", false);
  public get volumePolicies() {
    return this._volumePolicies;
  }
  public putVolumePolicies(value: AppProfileVolumePolicies[] | cdktf.IResolvable) {
    this._volumePolicies.internalValue = value;
  }
  public resetVolumePolicies() {
    this._volumePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePoliciesInput() {
    return this._volumePolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      latest_version: cdktf.numberToTerraform(this._latestVersion),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      title: cdktf.stringToTerraform(this._title),
      app_policies: cdktf.listMapper(appProfileAppPoliciesToTerraform, true)(this._appPolicies.internalValue),
      network_policies: cdktf.listMapper(appProfileNetworkPoliciesToTerraform, true)(this._networkPolicies.internalValue),
      volume_policies: cdktf.listMapper(appProfileVolumePoliciesToTerraform, true)(this._volumePolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      latest_version: {
        value: cdktf.numberToHclTerraform(this._latestVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_policies: {
        value: cdktf.listMapperHcl(appProfileAppPoliciesToHclTerraform, true)(this._appPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppProfileAppPoliciesList",
      },
      network_policies: {
        value: cdktf.listMapperHcl(appProfileNetworkPoliciesToHclTerraform, true)(this._networkPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppProfileNetworkPoliciesList",
      },
      volume_policies: {
        value: cdktf.listMapperHcl(appProfileVolumePoliciesToHclTerraform, true)(this._volumePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppProfileVolumePoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
