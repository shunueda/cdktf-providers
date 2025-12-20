// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpFilteringProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile#device DataScmBgpFilteringProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile#folder DataScmBgpFilteringProfile#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile#id DataScmBgpFilteringProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile#name DataScmBgpFilteringProfile#name}
  */
  readonly name?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile#snippet DataScmBgpFilteringProfile#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExist {
}

export function dataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExistToTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExistToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExist | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExist {
}

export function dataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExistToTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExist | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisement {
}

export function dataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementToTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exist - computed: true, optional: false, required: false
  private _exist = new DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }

  // non_exist - computed: true, optional: false, required: false
  private _nonExist = new DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
}
export interface DataScmBgpFilteringProfileIpv4MulticastFilterListStruct {
}

export function dataScmBgpFilteringProfileIpv4MulticastFilterListStructToTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastFilterListStructToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4MulticastFilterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4MulticastFilterListStruct | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4MulticastInboundNetworkFilters {
}

export function dataScmBgpFilteringProfileIpv4MulticastInboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastInboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4MulticastInboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4MulticastInboundNetworkFilters | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFilters {
}

export function dataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFilters | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4MulticastRouteMaps {
}

export function dataScmBgpFilteringProfileIpv4MulticastRouteMapsToTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastRouteMapsToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4MulticastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4MulticastRouteMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4MulticastRouteMaps | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4Multicast {
}

export function dataScmBgpFilteringProfileIpv4MulticastToTerraform(struct?: DataScmBgpFilteringProfileIpv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4MulticastToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4Multicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4Multicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_advertisement - computed: true, optional: false, required: false
  private _conditionalAdvertisement = new DataScmBgpFilteringProfileIpv4MulticastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }

  // filter_list - computed: true, optional: false, required: false
  private _filterList = new DataScmBgpFilteringProfileIpv4MulticastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }

  // inbound_network_filters - computed: true, optional: false, required: false
  private _inboundNetworkFilters = new DataScmBgpFilteringProfileIpv4MulticastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }

  // inherit - computed: true, optional: false, required: false
  public get inherit() {
    return this.getBooleanAttribute('inherit');
  }

  // outbound_network_filters - computed: true, optional: false, required: false
  private _outboundNetworkFilters = new DataScmBgpFilteringProfileIpv4MulticastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }

  // route_maps - computed: true, optional: false, required: false
  private _routeMaps = new DataScmBgpFilteringProfileIpv4MulticastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
}
export interface DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExist {
}

export function dataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExistToTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExistToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExist | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExist {
}

export function dataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExistToTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExist | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisement {
}

export function dataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementToTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exist - computed: true, optional: false, required: false
  private _exist = new DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }

  // non_exist - computed: true, optional: false, required: false
  private _nonExist = new DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
}
export interface DataScmBgpFilteringProfileIpv4UnicastFilterListStruct {
}

export function dataScmBgpFilteringProfileIpv4UnicastFilterListStructToTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastFilterListStructToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4UnicastFilterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4UnicastFilterListStruct | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4UnicastInboundNetworkFilters {
}

export function dataScmBgpFilteringProfileIpv4UnicastInboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastInboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastInboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4UnicastInboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4UnicastInboundNetworkFilters | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFilters {
}

export function dataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFiltersToTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFiltersToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFilters | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4UnicastRouteMaps {
}

export function dataScmBgpFilteringProfileIpv4UnicastRouteMapsToTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastRouteMapsToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4UnicastRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4UnicastRouteMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4UnicastRouteMaps | undefined) {
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
export interface DataScmBgpFilteringProfileIpv4Unicast {
}

export function dataScmBgpFilteringProfileIpv4UnicastToTerraform(struct?: DataScmBgpFilteringProfileIpv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4UnicastToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4Unicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4Unicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_advertisement - computed: true, optional: false, required: false
  private _conditionalAdvertisement = new DataScmBgpFilteringProfileIpv4UnicastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }

  // filter_list - computed: true, optional: false, required: false
  private _filterList = new DataScmBgpFilteringProfileIpv4UnicastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }

  // inbound_network_filters - computed: true, optional: false, required: false
  private _inboundNetworkFilters = new DataScmBgpFilteringProfileIpv4UnicastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }

  // outbound_network_filters - computed: true, optional: false, required: false
  private _outboundNetworkFilters = new DataScmBgpFilteringProfileIpv4UnicastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }

  // route_maps - computed: true, optional: false, required: false
  private _routeMaps = new DataScmBgpFilteringProfileIpv4UnicastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
}
export interface DataScmBgpFilteringProfileIpv4 {
}

export function dataScmBgpFilteringProfileIpv4ToTerraform(struct?: DataScmBgpFilteringProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpFilteringProfileIpv4ToHclTerraform(struct?: DataScmBgpFilteringProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpFilteringProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpFilteringProfileIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpFilteringProfileIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmBgpFilteringProfileIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmBgpFilteringProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile scm_bgp_filtering_profile}
*/
export class DataScmBgpFilteringProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_filtering_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmBgpFilteringProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmBgpFilteringProfile to import
  * @param importFromId The id of the existing DataScmBgpFilteringProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpFilteringProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_filtering_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_filtering_profile scm_bgp_filtering_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmBgpFilteringProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmBgpFilteringProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_filtering_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
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
    this._id = config.id;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: true, required: false
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

  // folder - computed: true, optional: true, required: false
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

  // id - computed: false, optional: false, required: true
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
  private _ipv4 = new DataScmBgpFilteringProfileIpv4OutputReference(this, "ipv4");
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

  // snippet - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
