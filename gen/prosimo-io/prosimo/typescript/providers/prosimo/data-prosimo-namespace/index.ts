// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom filters to scope specific results. Usage: filter = region==us-west-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/namespace#filter DataProsimoNamespace#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/namespace#id DataProsimoNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined) {
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

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettings {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettings | undefined) {
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
  private _bandwidthrange = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList(this, "bandwidthrange", true);
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

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnets {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnetsToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnetsToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnets | undefined) {
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

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworks {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworks | undefined) {
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
  private _connectorsettings = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksConnectorsettingsList(this, "connectorsettings", true);
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
  private _subnets = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksSubnetsList(this, "subnets", true);
  public get subnets() {
    return this._subnets;
  }
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloud {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloud | undefined) {
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
  private _cloudnetworks = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudCloudnetworksList(this, "cloudnetworks", true);
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

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPolicies {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPoliciesToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPoliciesToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPolicies | undefined) {
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

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPoliciesOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurity {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworksNetworks {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksNetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworksNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworksNetworks | undefined) {
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

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getBooleanAttribute('deployed');
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespaceid - computed: true, optional: false, required: false
  public get namespaceid() {
    return this.getStringAttribute('namespaceid');
  }

  // namespacename - computed: true, optional: false, required: false
  public get namespacename() {
    return this.getStringAttribute('namespacename');
  }

  // namespacenid - computed: true, optional: false, required: false
  public get namespacenid() {
    return this.getNumberAttribute('namespacenid');
  }

  // pamcname - computed: true, optional: false, required: false
  public get pamcname() {
    return this.getStringAttribute('pamcname');
  }

  // policyupdated - computed: true, optional: false, required: false
  public get policyupdated() {
    return this.getBooleanAttribute('policyupdated');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // publiccloud - computed: true, optional: false, required: false
  private _publiccloud = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksPubliccloudList(this, "publiccloud", true);
  public get publiccloud() {
    return this._publiccloud;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksSecurityList(this, "security", true);
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

export class DataProsimoNamespaceNamespaceListAssignednetworksNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksNetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListAssignednetworks {
}

export function dataProsimoNamespaceNamespaceListAssignednetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListAssignednetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListAssignednetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListAssignednetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListAssignednetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListAssignednetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataProsimoNamespaceNamespaceListAssignednetworksNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
}

export class DataProsimoNamespaceNamespaceListAssignednetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListAssignednetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListAssignednetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined) {
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

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettings {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettings | undefined) {
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
  private _bandwidthrange = new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList(this, "bandwidthrange", true);
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

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnets {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnetsToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnetsToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnets | undefined) {
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

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworks {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworks | undefined) {
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
  private _connectorsettings = new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsList(this, "connectorsettings", true);
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
  private _subnets = new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksSubnetsList(this, "subnets", true);
  public get subnets() {
    return this._subnets;
  }
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloud {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloud | undefined) {
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
  private _cloudnetworks = new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudCloudnetworksList(this, "cloudnetworks", true);
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

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPolicies {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPoliciesToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPoliciesToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPolicies | undefined) {
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

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPoliciesOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurity {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworksNetworks {
}

export function dataProsimoNamespaceNamespaceListExportednetworksNetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksNetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworksNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworksNetworks | undefined) {
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

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getBooleanAttribute('deployed');
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespaceid - computed: true, optional: false, required: false
  public get namespaceid() {
    return this.getStringAttribute('namespaceid');
  }

  // namespacename - computed: true, optional: false, required: false
  public get namespacename() {
    return this.getStringAttribute('namespacename');
  }

  // namespacenid - computed: true, optional: false, required: false
  public get namespacenid() {
    return this.getNumberAttribute('namespacenid');
  }

  // pamcname - computed: true, optional: false, required: false
  public get pamcname() {
    return this.getStringAttribute('pamcname');
  }

  // policyupdated - computed: true, optional: false, required: false
  public get policyupdated() {
    return this.getBooleanAttribute('policyupdated');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // publiccloud - computed: true, optional: false, required: false
  private _publiccloud = new DataProsimoNamespaceNamespaceListExportednetworksNetworksPubliccloudList(this, "publiccloud", true);
  public get publiccloud() {
    return this._publiccloud;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataProsimoNamespaceNamespaceListExportednetworksNetworksSecurityList(this, "security", true);
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

export class DataProsimoNamespaceNamespaceListExportednetworksNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksNetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListExportednetworks {
}

export function dataProsimoNamespaceNamespaceListExportednetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListExportednetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListExportednetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListExportednetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListExportednetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListExportednetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataProsimoNamespaceNamespaceListExportednetworksNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
}

export class DataProsimoNamespaceNamespaceListExportednetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListExportednetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListExportednetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrange | undefined) {
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

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettings {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettings | undefined) {
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
  private _bandwidthrange = new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsBandwidthrangeList(this, "bandwidthrange", true);
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

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnets {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnetsToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnetsToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnets | undefined) {
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

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworks {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworks | undefined) {
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
  private _connectorsettings = new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksConnectorsettingsList(this, "connectorsettings", true);
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
  private _subnets = new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksSubnetsList(this, "subnets", true);
  public get subnets() {
    return this._subnets;
  }
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloud {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloud | undefined) {
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
  private _cloudnetworks = new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudCloudnetworksList(this, "cloudnetworks", true);
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

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPolicies {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPoliciesToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPoliciesToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPolicies | undefined) {
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

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPoliciesOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurity {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworksNetworks {
}

export function dataProsimoNamespaceNamespaceListImportednetworksNetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksNetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworksNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworksNetworks | undefined) {
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

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getBooleanAttribute('deployed');
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespaceid - computed: true, optional: false, required: false
  public get namespaceid() {
    return this.getStringAttribute('namespaceid');
  }

  // namespacename - computed: true, optional: false, required: false
  public get namespacename() {
    return this.getStringAttribute('namespacename');
  }

  // namespacenid - computed: true, optional: false, required: false
  public get namespacenid() {
    return this.getNumberAttribute('namespacenid');
  }

  // pamcname - computed: true, optional: false, required: false
  public get pamcname() {
    return this.getStringAttribute('pamcname');
  }

  // policyupdated - computed: true, optional: false, required: false
  public get policyupdated() {
    return this.getBooleanAttribute('policyupdated');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // publiccloud - computed: true, optional: false, required: false
  private _publiccloud = new DataProsimoNamespaceNamespaceListImportednetworksNetworksPubliccloudList(this, "publiccloud", true);
  public get publiccloud() {
    return this._publiccloud;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataProsimoNamespaceNamespaceListImportednetworksNetworksSecurityList(this, "security", true);
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

export class DataProsimoNamespaceNamespaceListImportednetworksNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksNetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListImportednetworks {
}

export function dataProsimoNamespaceNamespaceListImportednetworksToTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListImportednetworksToHclTerraform(struct?: DataProsimoNamespaceNamespaceListImportednetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListImportednetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListImportednetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListImportednetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataProsimoNamespaceNamespaceListImportednetworksNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
}

export class DataProsimoNamespaceNamespaceListImportednetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListImportednetworksOutputReference {
    return new DataProsimoNamespaceNamespaceListImportednetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNamespaceNamespaceListStruct {
}

export function dataProsimoNamespaceNamespaceListStructToTerraform(struct?: DataProsimoNamespaceNamespaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNamespaceNamespaceListStructToHclTerraform(struct?: DataProsimoNamespaceNamespaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNamespaceNamespaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNamespaceNamespaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNamespaceNamespaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignednetworks - computed: true, optional: false, required: false
  private _assignednetworks = new DataProsimoNamespaceNamespaceListAssignednetworksList(this, "assignednetworks", true);
  public get assignednetworks() {
    return this._assignednetworks;
  }

  // createdtime - computed: true, optional: false, required: false
  public get createdtime() {
    return this.getStringAttribute('createdtime');
  }

  // exportednetworks - computed: true, optional: false, required: false
  private _exportednetworks = new DataProsimoNamespaceNamespaceListExportednetworksList(this, "exportednetworks", true);
  public get exportednetworks() {
    return this._exportednetworks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // importednetworks - computed: true, optional: false, required: false
  private _importednetworks = new DataProsimoNamespaceNamespaceListImportednetworksList(this, "importednetworks", true);
  public get importednetworks() {
    return this._importednetworks;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nid - computed: true, optional: false, required: false
  public get nid() {
    return this.getNumberAttribute('nid');
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

export class DataProsimoNamespaceNamespaceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNamespaceNamespaceListStructOutputReference {
    return new DataProsimoNamespaceNamespaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/namespace prosimo_namespace}
*/
export class DataProsimoNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoNamespace to import
  * @param importFromId The id of the existing DataProsimoNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/namespace prosimo_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoNamespaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoNamespaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_namespace',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
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

  // namespace_count - computed: true, optional: false, required: false
  public get namespaceCount() {
    return this.getNumberAttribute('namespace_count');
  }

  // namespace_list - computed: true, optional: false, required: false
  private _namespaceList = new DataProsimoNamespaceNamespaceListStructList(this, "namespace_list", true);
  public get namespaceList() {
    return this._namespaceList;
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
