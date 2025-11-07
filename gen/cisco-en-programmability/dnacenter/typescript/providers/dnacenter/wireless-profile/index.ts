// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#id WirelessProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#parameters WirelessProfile#parameters}
  */
  readonly parameters?: WirelessProfileParameters[] | cdktf.IResolvable;
}
export interface WirelessProfileItemProfileDetailsSsidDetailsFlexConnect {
}

export function wirelessProfileItemProfileDetailsSsidDetailsFlexConnectToTerraform(struct?: WirelessProfileItemProfileDetailsSsidDetailsFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProfileItemProfileDetailsSsidDetailsFlexConnectToHclTerraform(struct?: WirelessProfileItemProfileDetailsSsidDetailsFlexConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProfileItemProfileDetailsSsidDetailsFlexConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessProfileItemProfileDetailsSsidDetailsFlexConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileItemProfileDetailsSsidDetailsFlexConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_flex_connect - computed: true, optional: false, required: false
  public get enableFlexConnect() {
    return this.getStringAttribute('enable_flex_connect');
  }

  // local_to_vlan - computed: true, optional: false, required: false
  public get localToVlan() {
    return this.getNumberAttribute('local_to_vlan');
  }
}

export class WirelessProfileItemProfileDetailsSsidDetailsFlexConnectList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProfileItemProfileDetailsSsidDetailsFlexConnectOutputReference {
    return new WirelessProfileItemProfileDetailsSsidDetailsFlexConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileItemProfileDetailsSsidDetails {
}

export function wirelessProfileItemProfileDetailsSsidDetailsToTerraform(struct?: WirelessProfileItemProfileDetailsSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProfileItemProfileDetailsSsidDetailsToHclTerraform(struct?: WirelessProfileItemProfileDetailsSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProfileItemProfileDetailsSsidDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessProfileItemProfileDetailsSsidDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileItemProfileDetailsSsidDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_fabric - computed: true, optional: false, required: false
  public get enableFabric() {
    return this.getStringAttribute('enable_fabric');
  }

  // flex_connect - computed: true, optional: false, required: false
  private _flexConnect = new WirelessProfileItemProfileDetailsSsidDetailsFlexConnectList(this, "flex_connect", false);
  public get flexConnect() {
    return this._flexConnect;
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class WirelessProfileItemProfileDetailsSsidDetailsList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProfileItemProfileDetailsSsidDetailsOutputReference {
    return new WirelessProfileItemProfileDetailsSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileItemProfileDetails {
}

export function wirelessProfileItemProfileDetailsToTerraform(struct?: WirelessProfileItemProfileDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProfileItemProfileDetailsToHclTerraform(struct?: WirelessProfileItemProfileDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProfileItemProfileDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessProfileItemProfileDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileItemProfileDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sites - computed: true, optional: false, required: false
  public get sites() {
    return this.getListAttribute('sites');
  }

  // ssid_details - computed: true, optional: false, required: false
  private _ssidDetails = new WirelessProfileItemProfileDetailsSsidDetailsList(this, "ssid_details", false);
  public get ssidDetails() {
    return this._ssidDetails;
  }
}

export class WirelessProfileItemProfileDetailsList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProfileItemProfileDetailsOutputReference {
    return new WirelessProfileItemProfileDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileItem {
}

export function wirelessProfileItemToTerraform(struct?: WirelessProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProfileItemToHclTerraform(struct?: WirelessProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProfileItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessProfileItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile_details - computed: true, optional: false, required: false
  private _profileDetails = new WirelessProfileItemProfileDetailsList(this, "profile_details", false);
  public get profileDetails() {
    return this._profileDetails;
  }
}

export class WirelessProfileItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProfileItemOutputReference {
    return new WirelessProfileItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect {
  /**
  * true if flex connect is enabled else false
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#enable_flex_connect WirelessProfile#enable_flex_connect}
  */
  readonly enableFlexConnect?: string;
  /**
  * Local To Vlan Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#local_to_vlan WirelessProfile#local_to_vlan}
  */
  readonly localToVlan?: number;
}

export function wirelessProfileParametersProfileDetailsSsidDetailsFlexConnectToTerraform(struct?: WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_flex_connect: cdktf.stringToTerraform(struct!.enableFlexConnect),
    local_to_vlan: cdktf.numberToTerraform(struct!.localToVlan),
  }
}


export function wirelessProfileParametersProfileDetailsSsidDetailsFlexConnectToHclTerraform(struct?: WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_flex_connect: {
      value: cdktf.stringToHclTerraform(struct!.enableFlexConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_to_vlan: {
      value: cdktf.numberToHclTerraform(struct!.localToVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProfileParametersProfileDetailsSsidDetailsFlexConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFlexConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFlexConnect = this._enableFlexConnect;
    }
    if (this._localToVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.localToVlan = this._localToVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableFlexConnect = undefined;
      this._localToVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableFlexConnect = value.enableFlexConnect;
      this._localToVlan = value.localToVlan;
    }
  }

  // enable_flex_connect - computed: true, optional: true, required: false
  private _enableFlexConnect?: string; 
  public get enableFlexConnect() {
    return this.getStringAttribute('enable_flex_connect');
  }
  public set enableFlexConnect(value: string) {
    this._enableFlexConnect = value;
  }
  public resetEnableFlexConnect() {
    this._enableFlexConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlexConnectInput() {
    return this._enableFlexConnect;
  }

  // local_to_vlan - computed: true, optional: true, required: false
  private _localToVlan?: number; 
  public get localToVlan() {
    return this.getNumberAttribute('local_to_vlan');
  }
  public set localToVlan(value: number) {
    this._localToVlan = value;
  }
  public resetLocalToVlan() {
    this._localToVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localToVlanInput() {
    return this._localToVlan;
  }
}

export class WirelessProfileParametersProfileDetailsSsidDetailsFlexConnectList extends cdktf.ComplexList {
  public internalValue? : WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect[] | cdktf.IResolvable

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
  public get(index: number): WirelessProfileParametersProfileDetailsSsidDetailsFlexConnectOutputReference {
    return new WirelessProfileParametersProfileDetailsSsidDetailsFlexConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileParametersProfileDetailsSsidDetails {
  /**
  * true if ssid is fabric else false
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#enable_fabric WirelessProfile#enable_fabric}
  */
  readonly enableFabric?: string;
  /**
  * Interface Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#interface_name WirelessProfile#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Ssid Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#name WirelessProfile#name}
  */
  readonly name?: string;
  /**
  * Policy Profile Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#policy_profile_name WirelessProfile#policy_profile_name}
  */
  readonly policyProfileName?: string;
  /**
  * Ssid Type(enum: Enterprise/Guest)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#type WirelessProfile#type}
  */
  readonly type?: string;
  /**
  * WLAN Profile Name 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#wlan_profile_name WirelessProfile#wlan_profile_name}
  */
  readonly wlanProfileName?: string;
  /**
  * flex_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#flex_connect WirelessProfile#flex_connect}
  */
  readonly flexConnect?: WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect[] | cdktf.IResolvable;
}

export function wirelessProfileParametersProfileDetailsSsidDetailsToTerraform(struct?: WirelessProfileParametersProfileDetailsSsidDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_fabric: cdktf.stringToTerraform(struct!.enableFabric),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    name: cdktf.stringToTerraform(struct!.name),
    policy_profile_name: cdktf.stringToTerraform(struct!.policyProfileName),
    type: cdktf.stringToTerraform(struct!.type),
    wlan_profile_name: cdktf.stringToTerraform(struct!.wlanProfileName),
    flex_connect: cdktf.listMapper(wirelessProfileParametersProfileDetailsSsidDetailsFlexConnectToTerraform, true)(struct!.flexConnect),
  }
}


export function wirelessProfileParametersProfileDetailsSsidDetailsToHclTerraform(struct?: WirelessProfileParametersProfileDetailsSsidDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_fabric: {
      value: cdktf.stringToHclTerraform(struct!.enableFabric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
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
    policy_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.policyProfileName),
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
    wlan_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.wlanProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flex_connect: {
      value: cdktf.listMapperHcl(wirelessProfileParametersProfileDetailsSsidDetailsFlexConnectToHclTerraform, true)(struct!.flexConnect),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProfileParametersProfileDetailsSsidDetailsFlexConnectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProfileParametersProfileDetailsSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProfileParametersProfileDetailsSsidDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFabric !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFabric = this._enableFabric;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyProfileName = this._policyProfileName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wlanProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wlanProfileName = this._wlanProfileName;
    }
    if (this._flexConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexConnect = this._flexConnect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileParametersProfileDetailsSsidDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableFabric = undefined;
      this._interfaceName = undefined;
      this._name = undefined;
      this._policyProfileName = undefined;
      this._type = undefined;
      this._wlanProfileName = undefined;
      this._flexConnect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableFabric = value.enableFabric;
      this._interfaceName = value.interfaceName;
      this._name = value.name;
      this._policyProfileName = value.policyProfileName;
      this._type = value.type;
      this._wlanProfileName = value.wlanProfileName;
      this._flexConnect.internalValue = value.flexConnect;
    }
  }

  // enable_fabric - computed: true, optional: true, required: false
  private _enableFabric?: string; 
  public get enableFabric() {
    return this.getStringAttribute('enable_fabric');
  }
  public set enableFabric(value: string) {
    this._enableFabric = value;
  }
  public resetEnableFabric() {
    this._enableFabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFabricInput() {
    return this._enableFabric;
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
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

  // policy_profile_name - computed: true, optional: true, required: false
  private _policyProfileName?: string; 
  public get policyProfileName() {
    return this.getStringAttribute('policy_profile_name');
  }
  public set policyProfileName(value: string) {
    this._policyProfileName = value;
  }
  public resetPolicyProfileName() {
    this._policyProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyProfileNameInput() {
    return this._policyProfileName;
  }

  // type - computed: true, optional: true, required: false
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

  // wlan_profile_name - computed: true, optional: true, required: false
  private _wlanProfileName?: string; 
  public get wlanProfileName() {
    return this.getStringAttribute('wlan_profile_name');
  }
  public set wlanProfileName(value: string) {
    this._wlanProfileName = value;
  }
  public resetWlanProfileName() {
    this._wlanProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanProfileNameInput() {
    return this._wlanProfileName;
  }

  // flex_connect - computed: false, optional: true, required: false
  private _flexConnect = new WirelessProfileParametersProfileDetailsSsidDetailsFlexConnectList(this, "flex_connect", false);
  public get flexConnect() {
    return this._flexConnect;
  }
  public putFlexConnect(value: WirelessProfileParametersProfileDetailsSsidDetailsFlexConnect[] | cdktf.IResolvable) {
    this._flexConnect.internalValue = value;
  }
  public resetFlexConnect() {
    this._flexConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexConnectInput() {
    return this._flexConnect.internalValue;
  }
}

export class WirelessProfileParametersProfileDetailsSsidDetailsList extends cdktf.ComplexList {
  public internalValue? : WirelessProfileParametersProfileDetailsSsidDetails[] | cdktf.IResolvable

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
  public get(index: number): WirelessProfileParametersProfileDetailsSsidDetailsOutputReference {
    return new WirelessProfileParametersProfileDetailsSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileParametersProfileDetails {
  /**
  * Profile Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#name WirelessProfile#name}
  */
  readonly name?: string;
  /**
  * array of site name hierarchies(eg: ["Global/aaa/zzz", "Global/aaa/zzz"])
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#sites WirelessProfile#sites}
  */
  readonly sites?: string[];
  /**
  * ssid_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#ssid_details WirelessProfile#ssid_details}
  */
  readonly ssidDetails?: WirelessProfileParametersProfileDetailsSsidDetails[] | cdktf.IResolvable;
}

export function wirelessProfileParametersProfileDetailsToTerraform(struct?: WirelessProfileParametersProfileDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sites),
    ssid_details: cdktf.listMapper(wirelessProfileParametersProfileDetailsSsidDetailsToTerraform, true)(struct!.ssidDetails),
  }
}


export function wirelessProfileParametersProfileDetailsToHclTerraform(struct?: WirelessProfileParametersProfileDetails | cdktf.IResolvable): any {
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
    sites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssid_details: {
      value: cdktf.listMapperHcl(wirelessProfileParametersProfileDetailsSsidDetailsToHclTerraform, true)(struct!.ssidDetails),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProfileParametersProfileDetailsSsidDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProfileParametersProfileDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProfileParametersProfileDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sites !== undefined) {
      hasAnyValues = true;
      internalValueResult.sites = this._sites;
    }
    if (this._ssidDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidDetails = this._ssidDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileParametersProfileDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sites = undefined;
      this._ssidDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sites = value.sites;
      this._ssidDetails.internalValue = value.ssidDetails;
    }
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

  // sites - computed: true, optional: true, required: false
  private _sites?: string[]; 
  public get sites() {
    return this.getListAttribute('sites');
  }
  public set sites(value: string[]) {
    this._sites = value;
  }
  public resetSites() {
    this._sites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitesInput() {
    return this._sites;
  }

  // ssid_details - computed: false, optional: true, required: false
  private _ssidDetails = new WirelessProfileParametersProfileDetailsSsidDetailsList(this, "ssid_details", false);
  public get ssidDetails() {
    return this._ssidDetails;
  }
  public putSsidDetails(value: WirelessProfileParametersProfileDetailsSsidDetails[] | cdktf.IResolvable) {
    this._ssidDetails.internalValue = value;
  }
  public resetSsidDetails() {
    this._ssidDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidDetailsInput() {
    return this._ssidDetails.internalValue;
  }
}

export class WirelessProfileParametersProfileDetailsList extends cdktf.ComplexList {
  public internalValue? : WirelessProfileParametersProfileDetails[] | cdktf.IResolvable

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
  public get(index: number): WirelessProfileParametersProfileDetailsOutputReference {
    return new WirelessProfileParametersProfileDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileParameters {
  /**
  * wirelessProfileName path parameter. Wireless Profile Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#wireless_profile_name WirelessProfile#wireless_profile_name}
  */
  readonly wirelessProfileName?: string;
  /**
  * profile_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#profile_details WirelessProfile#profile_details}
  */
  readonly profileDetails?: WirelessProfileParametersProfileDetails[] | cdktf.IResolvable;
}

export function wirelessProfileParametersToTerraform(struct?: WirelessProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    wireless_profile_name: cdktf.stringToTerraform(struct!.wirelessProfileName),
    profile_details: cdktf.listMapper(wirelessProfileParametersProfileDetailsToTerraform, true)(struct!.profileDetails),
  }
}


export function wirelessProfileParametersToHclTerraform(struct?: WirelessProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    wireless_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.wirelessProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_details: {
      value: cdktf.listMapperHcl(wirelessProfileParametersProfileDetailsToHclTerraform, true)(struct!.profileDetails),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProfileParametersProfileDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProfileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProfileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wirelessProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wirelessProfileName = this._wirelessProfileName;
    }
    if (this._profileDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileDetails = this._profileDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._wirelessProfileName = undefined;
      this._profileDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._wirelessProfileName = value.wirelessProfileName;
      this._profileDetails.internalValue = value.profileDetails;
    }
  }

  // wireless_profile_name - computed: false, optional: true, required: false
  private _wirelessProfileName?: string; 
  public get wirelessProfileName() {
    return this.getStringAttribute('wireless_profile_name');
  }
  public set wirelessProfileName(value: string) {
    this._wirelessProfileName = value;
  }
  public resetWirelessProfileName() {
    this._wirelessProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessProfileNameInput() {
    return this._wirelessProfileName;
  }

  // profile_details - computed: false, optional: true, required: false
  private _profileDetails = new WirelessProfileParametersProfileDetailsList(this, "profile_details", false);
  public get profileDetails() {
    return this._profileDetails;
  }
  public putProfileDetails(value: WirelessProfileParametersProfileDetails[] | cdktf.IResolvable) {
    this._profileDetails.internalValue = value;
  }
  public resetProfileDetails() {
    this._profileDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileDetailsInput() {
    return this._profileDetails.internalValue;
  }
}

export class WirelessProfileParametersList extends cdktf.ComplexList {
  public internalValue? : WirelessProfileParameters[] | cdktf.IResolvable

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
  public get(index: number): WirelessProfileParametersOutputReference {
    return new WirelessProfileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile dnacenter_wireless_profile}
*/
export class WirelessProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessProfile to import
  * @param importFromId The id of the existing WirelessProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_profile dnacenter_wireless_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelessProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_profile',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new WirelessProfileItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new WirelessProfileParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessProfileParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(wirelessProfileParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(wirelessProfileParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessProfileParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
