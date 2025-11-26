// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpFilteringProfileListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#device DataScmBgpFilteringProfileList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#folder DataScmBgpFilteringProfileList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#limit DataScmBgpFilteringProfileList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#name DataScmBgpFilteringProfileList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#offset DataScmBgpFilteringProfileList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#snippet DataScmBgpFilteringProfileList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExist {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExistToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExistToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_map - computed: true, optional: false, required: false
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }

  // exist_map - computed: true, optional: false, required: false
  public get existMap() {
    return this.getStringAttribute('exist_map');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExist {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExistToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_map - computed: true, optional: false, required: false
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }

  // non_exist_map - computed: true, optional: false, required: false
  public get nonExistMap() {
    return this.getStringAttribute('non_exist_map');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisement {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exist - computed: true, optional: false, required: false
  private _exist = new DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }

  // non_exist - computed: true, optional: false, required: false
  private _nonExist = new DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4MulticastFilterListStruct {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastFilterListStructToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastFilterListStructToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4MulticastFilterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4MulticastFilterListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound - computed: true, optional: false, required: false
  public get inbound() {
    return this.getStringAttribute('inbound');
  }

  // outbound - computed: true, optional: false, required: false
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFilters {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distribute_list - computed: true, optional: false, required: false
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFilters {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distribute_list - computed: true, optional: false, required: false
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4MulticastRouteMaps {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastRouteMapsToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastRouteMapsToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4MulticastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4MulticastRouteMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4MulticastRouteMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound - computed: true, optional: false, required: false
  public get inbound() {
    return this.getStringAttribute('inbound');
  }

  // outbound - computed: true, optional: false, required: false
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4Multicast {
}

export function dataScmBgpFilteringProfileListDataIpv4MulticastToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4MulticastToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4Multicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4Multicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_advertisement - computed: true, optional: false, required: false
  private _conditionalAdvertisement = new DataScmBgpFilteringProfileListDataIpv4MulticastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }

  // filter_list - computed: true, optional: false, required: false
  private _filterList = new DataScmBgpFilteringProfileListDataIpv4MulticastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }

  // inbound_network_filters - computed: true, optional: false, required: false
  private _inboundNetworkFilters = new DataScmBgpFilteringProfileListDataIpv4MulticastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }

  // inherit - computed: true, optional: false, required: false
  public get inherit() {
    return this.getBooleanAttribute('inherit');
  }

  // outbound_network_filters - computed: true, optional: false, required: false
  private _outboundNetworkFilters = new DataScmBgpFilteringProfileListDataIpv4MulticastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }

  // route_maps - computed: true, optional: false, required: false
  private _routeMaps = new DataScmBgpFilteringProfileListDataIpv4MulticastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExist {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExistToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExistToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_map - computed: true, optional: false, required: false
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }

  // exist_map - computed: true, optional: false, required: false
  public get existMap() {
    return this.getStringAttribute('exist_map');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExist {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExistToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_map - computed: true, optional: false, required: false
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }

  // non_exist_map - computed: true, optional: false, required: false
  public get nonExistMap() {
    return this.getStringAttribute('non_exist_map');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisement {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exist - computed: true, optional: false, required: false
  private _exist = new DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }

  // non_exist - computed: true, optional: false, required: false
  private _nonExist = new DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4UnicastFilterListStruct {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastFilterListStructToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastFilterListStructToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4UnicastFilterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4UnicastFilterListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound - computed: true, optional: false, required: false
  public get inbound() {
    return this.getStringAttribute('inbound');
  }

  // outbound - computed: true, optional: false, required: false
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFilters {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distribute_list - computed: true, optional: false, required: false
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFilters {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distribute_list - computed: true, optional: false, required: false
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4UnicastRouteMaps {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastRouteMapsToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastRouteMapsToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4UnicastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4UnicastRouteMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4UnicastRouteMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound - computed: true, optional: false, required: false
  public get inbound() {
    return this.getStringAttribute('inbound');
  }

  // outbound - computed: true, optional: false, required: false
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4Unicast {
}

export function dataScmBgpFilteringProfileListDataIpv4UnicastToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4UnicastToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4Unicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4Unicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_advertisement - computed: true, optional: false, required: false
  private _conditionalAdvertisement = new DataScmBgpFilteringProfileListDataIpv4UnicastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }

  // filter_list - computed: true, optional: false, required: false
  private _filterList = new DataScmBgpFilteringProfileListDataIpv4UnicastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }

  // inbound_network_filters - computed: true, optional: false, required: false
  private _inboundNetworkFilters = new DataScmBgpFilteringProfileListDataIpv4UnicastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }

  // outbound_network_filters - computed: true, optional: false, required: false
  private _outboundNetworkFilters = new DataScmBgpFilteringProfileListDataIpv4UnicastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }

  // route_maps - computed: true, optional: false, required: false
  private _routeMaps = new DataScmBgpFilteringProfileListDataIpv4UnicastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
}
export interface DataScmBgpFilteringProfileListDataIpv4 {
}

export function dataScmBgpFilteringProfileListDataIpv4ToTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileListDataIpv4ToHclTerraform(struct?: DataScmBgpFilteringProfileListDataIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileListDataIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileListDataIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListDataIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmBgpFilteringProfileListDataIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmBgpFilteringProfileListDataIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}
export interface DataScmBgpFilteringProfileListData {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#id DataScmBgpFilteringProfileList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#name DataScmBgpFilteringProfileList#name}
  */
  readonly name?: string;
}

export function dataScmBgpFilteringProfileListDataToTerraform(struct?: DataScmBgpFilteringProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmBgpFilteringProfileListDataToHclTerraform(struct?: DataScmBgpFilteringProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmBgpFilteringProfileListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpFilteringProfileListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpFilteringProfileListDataIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
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

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }
}

export class DataScmBgpFilteringProfileListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmBgpFilteringProfileListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmBgpFilteringProfileListDataOutputReference {
    return new DataScmBgpFilteringProfileListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list scm_bgp_filtering_profile_list}
*/
export class DataScmBgpFilteringProfileList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_filtering_profile_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmBgpFilteringProfileList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmBgpFilteringProfileList to import
  * @param importFromId The id of the existing DataScmBgpFilteringProfileList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpFilteringProfileList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_filtering_profile_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_filtering_profile_list scm_bgp_filtering_profile_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmBgpFilteringProfileListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmBgpFilteringProfileListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_filtering_profile_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmBgpFilteringProfileListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
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
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
