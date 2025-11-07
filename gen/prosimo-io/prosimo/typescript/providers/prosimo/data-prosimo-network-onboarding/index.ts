// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoNetworkOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom filters to scope specific results. Usage: filter = app_access_type==agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_onboarding#filter DataProsimoNetworkOnboarding#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_onboarding#id DataProsimoNetworkOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettings {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // bandwidthname - computed: true, optional: false, required: false
  public get bandwidthname() {
    return this.getStringAttribute('bandwidthname');
  }

  // bandwidthrange - computed: true, optional: false, required: false
  private _bandwidthrange = new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList(this, "bandwidthrange", true);
  public get bandwidthrange() {
    return this._bandwidthrange;
  }

  // cloudnetworkid - computed: true, optional: false, required: false
  public get cloudnetworkid() {
    return this.getStringAttribute('cloudnetworkid');
  }

  // instancetype - computed: true, optional: false, required: false
  public get instancetype() {
    return this.getStringAttribute('instancetype');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // updatestatus - computed: true, optional: false, required: false
  public get updatestatus() {
    return this.getStringAttribute('updatestatus');
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnets {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnetsToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnetsToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // virtual_subnet - computed: true, optional: false, required: false
  public get virtualSubnet() {
    return this.getStringAttribute('virtual_subnet');
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnetsOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworks {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudnetworkid - computed: true, optional: false, required: false
  public get cloudnetworkid() {
    return this.getStringAttribute('cloudnetworkid');
  }

  // connectivitytype - computed: true, optional: false, required: false
  public get connectivitytype() {
    return this.getStringAttribute('connectivitytype');
  }

  // connectorgrpid - computed: true, optional: false, required: false
  public get connectorgrpid() {
    return this.getStringAttribute('connectorgrpid');
  }

  // connectorplacement - computed: true, optional: false, required: false
  public get connectorplacement() {
    return this.getStringAttribute('connectorplacement');
  }

  // connectorsettings - computed: true, optional: false, required: false
  private _connectorsettings = new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksConnectorsettingsList(this, "connectorsettings", true);
  public get connectorsettings() {
    return this._connectorsettings;
  }

  // edgeconnectivityid - computed: true, optional: false, required: false
  public get edgeconnectivityid() {
    return this.getStringAttribute('edgeconnectivityid');
  }

  // hubid - computed: true, optional: false, required: false
  public get hubid() {
    return this.getStringAttribute('hubid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subnets - computed: true, optional: false, required: false
  private _subnets = new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksSubnetsList(this, "subnets", true);
  public get subnets() {
    return this._subnets;
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkOnboardingOnboardedNetworksPubliccloud {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksPubliccloudToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworksPubliccloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // cloudkeyid - computed: true, optional: false, required: false
  public get cloudkeyid() {
    return this.getStringAttribute('cloudkeyid');
  }

  // cloudnetworks - computed: true, optional: false, required: false
  private _cloudnetworks = new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudCloudnetworksList(this, "cloudnetworks", true);
  public get cloudnetworks() {
    return this._cloudnetworks;
  }

  // cloudregion - computed: true, optional: false, required: false
  public get cloudregion() {
    return this.getStringAttribute('cloudregion');
  }

  // cloudtype - computed: true, optional: false, required: false
  public get cloudtype() {
    return this.getStringAttribute('cloudtype');
  }

  // connectionoption - computed: true, optional: false, required: false
  public get connectionoption() {
    return this.getStringAttribute('connectionoption');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkOnboardingOnboardedNetworksSecurityPolicies {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksSecurityPoliciesToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksSecurityPoliciesToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksSecurityPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworksSecurityPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworksSecurityPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksSecurityPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksSecurityPoliciesOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksSecurityPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkOnboardingOnboardedNetworksSecurity {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksSecurityToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksSecurityToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworksSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworksSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataProsimoNetworkOnboardingOnboardedNetworksSecurityPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksSecurityOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkOnboardingOnboardedNetworks {
}

export function dataProsimoNetworkOnboardingOnboardedNetworksToTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkOnboardingOnboardedNetworksToHclTerraform(struct?: DataProsimoNetworkOnboardingOnboardedNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkOnboardingOnboardedNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkOnboardingOnboardedNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkOnboardingOnboardedNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // createdtime - computed: true, optional: false, required: false
  public get createdtime() {
    return this.getStringAttribute('createdtime');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // namespace_nid - computed: true, optional: false, required: false
  public get namespaceNid() {
    return this.getNumberAttribute('namespace_nid');
  }

  // pamcname - computed: true, optional: false, required: false
  public get pamcname() {
    return this.getStringAttribute('pamcname');
  }

  // policy_updated - computed: true, optional: false, required: false
  public get policyUpdated() {
    return this.getBooleanAttribute('policy_updated');
  }

  // publiccloud - computed: true, optional: false, required: false
  private _publiccloud = new DataProsimoNetworkOnboardingOnboardedNetworksPubliccloudList(this, "publiccloud", true);
  public get publiccloud() {
    return this._publiccloud;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataProsimoNetworkOnboardingOnboardedNetworksSecurityList(this, "security", true);
  public get security() {
    return this._security;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }

  // updatedtime - computed: true, optional: false, required: false
  public get updatedtime() {
    return this.getStringAttribute('updatedtime');
  }
}

export class DataProsimoNetworkOnboardingOnboardedNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkOnboardingOnboardedNetworksOutputReference {
    return new DataProsimoNetworkOnboardingOnboardedNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_onboarding prosimo_network_onboarding}
*/
export class DataProsimoNetworkOnboarding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_network_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoNetworkOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoNetworkOnboarding to import
  * @param importFromId The id of the existing DataProsimoNetworkOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoNetworkOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_network_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_onboarding prosimo_network_onboarding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoNetworkOnboardingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoNetworkOnboardingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_network_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // network_count - computed: true, optional: false, required: false
  public get networkCount() {
    return this.getNumberAttribute('network_count');
  }

  // onboarded_networks - computed: true, optional: false, required: false
  private _onboardedNetworks = new DataProsimoNetworkOnboardingOnboardedNetworksList(this, "onboarded_networks", true);
  public get onboardedNetworks() {
    return this._onboardedNetworks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
