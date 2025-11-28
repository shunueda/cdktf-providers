// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosBgpFilteringRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe BGP Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#description DataPanosBgpFilteringRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#ipv4 DataPanosBgpFilteringRoutingProfile#ipv4}
  */
  readonly ipv4?: DataPanosBgpFilteringRoutingProfileIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#ipv6 DataPanosBgpFilteringRoutingProfile#ipv6}
  */
  readonly ipv6?: DataPanosBgpFilteringRoutingProfileIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#location DataPanosBgpFilteringRoutingProfile#location}
  */
  readonly location: DataPanosBgpFilteringRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#name DataPanosBgpFilteringRoutingProfile#name}
  */
  readonly name: string;
}
export interface DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#advertise_map DataPanosBgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to Match existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#exist_map DataPanosBgpFilteringRoutingProfile#exist_map}
  */
  readonly existMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_map: {
      value: cdktf.stringToHclTerraform(struct!.advertiseMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exist_map: {
      value: cdktf.stringToHclTerraform(struct!.existMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseMap = this._advertiseMap;
    }
    if (this._existMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.existMap = this._existMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseMap = undefined;
      this._existMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseMap = value.advertiseMap;
      this._existMap = value.existMap;
    }
  }

  // advertise_map - computed: true, optional: true, required: false
  private _advertiseMap?: string; 
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }
  public set advertiseMap(value: string) {
    this._advertiseMap = value;
  }
  public resetAdvertiseMap() {
    this._advertiseMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseMapInput() {
    return this._advertiseMap;
  }

  // exist_map - computed: true, optional: true, required: false
  private _existMap?: string; 
  public get existMap() {
    return this.getStringAttribute('exist_map');
  }
  public set existMap(value: string) {
    this._existMap = value;
  }
  public resetExistMap() {
    this._existMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existMapInput() {
    return this._existMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#advertise_map DataPanosBgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to match non-existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#non_exist_map DataPanosBgpFilteringRoutingProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_map: {
      value: cdktf.stringToHclTerraform(struct!.advertiseMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_exist_map: {
      value: cdktf.stringToHclTerraform(struct!.nonExistMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseMap = this._advertiseMap;
    }
    if (this._nonExistMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExistMap = this._nonExistMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseMap = undefined;
      this._nonExistMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseMap = value.advertiseMap;
      this._nonExistMap = value.nonExistMap;
    }
  }

  // advertise_map - computed: true, optional: true, required: false
  private _advertiseMap?: string; 
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }
  public set advertiseMap(value: string) {
    this._advertiseMap = value;
  }
  public resetAdvertiseMap() {
    this._advertiseMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseMapInput() {
    return this._advertiseMap;
  }

  // non_exist_map - computed: true, optional: true, required: false
  private _nonExistMap?: string; 
  public get nonExistMap() {
    return this.getStringAttribute('non_exist_map');
  }
  public set nonExistMap(value: string) {
    this._nonExistMap = value;
  }
  public resetNonExistMap() {
    this._nonExistMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistMapInput() {
    return this._nonExistMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#exist DataPanosBgpFilteringRoutingProfile#exist}
  */
  readonly exist?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#non_exist DataPanosBgpFilteringRoutingProfile#non_exist}
  */
  readonly nonExist?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist",
    },
    non_exist: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exist = this._exist?.internalValue;
    }
    if (this._nonExist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExist = this._nonExist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exist.internalValue = undefined;
      this._nonExist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exist.internalValue = value.exist;
      this._nonExist.internalValue = value.nonExist;
    }
  }

  // exist - computed: true, optional: true, required: false
  private _exist = new DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist) {
    this._exist.internalValue = value;
  }
  public resetExist() {
    this._exist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInput() {
    return this._exist.internalValue;
  }

  // non_exist - computed: true, optional: true, required: false
  private _nonExist = new DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist) {
    this._nonExist.internalValue = value;
  }
  public resetNonExist() {
    this._nonExist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistInput() {
    return this._nonExist.internalValue;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct {
  /**
  * Incoming AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound DataPanosBgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound DataPanosBgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStructToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStructToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
    }
  }

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters {
  /**
  * Incoming Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#distribute_list DataPanosBgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Incoming Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#prefix_list DataPanosBgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._prefixList = value.prefixList;
    }
  }

  // distribute_list - computed: true, optional: true, required: false
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

  // prefix_list - computed: true, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters {
  /**
  * Outgoing Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#distribute_list DataPanosBgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Outgoing Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#prefix_list DataPanosBgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._prefixList = value.prefixList;
    }
  }

  // distribute_list - computed: true, optional: true, required: false
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

  // prefix_list - computed: true, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps {
  /**
  * Incoming Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound DataPanosBgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound DataPanosBgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMapsToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMapsToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
    }
  }

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4Multicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#conditional_advertisement DataPanosBgpFilteringRoutingProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#filter_list DataPanosBgpFilteringRoutingProfile#filter_list}
  */
  readonly filterList?: DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound_network_filters DataPanosBgpFilteringRoutingProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters;
  /**
  * Either Configure or Inherit Filtering Profile from Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inherit DataPanosBgpFilteringRoutingProfile#inherit}
  */
  readonly inherit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound_network_filters DataPanosBgpFilteringRoutingProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#route_maps DataPanosBgpFilteringRoutingProfile#route_maps}
  */
  readonly routeMaps?: DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps;
  /**
  * Route-Map selectively unsuppress suppressed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#unsuppress_map DataPanosBgpFilteringRoutingProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4MulticastToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: dataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: dataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    inherit: cdktf.booleanToTerraform(struct!.inherit),
    outbound_network_filters: dataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: dataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4MulticastToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement",
    },
    filter_list: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct",
    },
    inbound_network_filters: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters",
    },
    inherit: {
      value: cdktf.booleanToHclTerraform(struct!.inherit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound_network_filters: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters",
    },
    route_maps: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalAdvertisement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalAdvertisement = this._conditionalAdvertisement?.internalValue;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    if (this._inboundNetworkFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundNetworkFilters = this._inboundNetworkFilters?.internalValue;
    }
    if (this._inherit !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherit = this._inherit;
    }
    if (this._outboundNetworkFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundNetworkFilters = this._outboundNetworkFilters?.internalValue;
    }
    if (this._routeMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMaps = this._routeMaps?.internalValue;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalAdvertisement.internalValue = undefined;
      this._filterList.internalValue = undefined;
      this._inboundNetworkFilters.internalValue = undefined;
      this._inherit = undefined;
      this._outboundNetworkFilters.internalValue = undefined;
      this._routeMaps.internalValue = undefined;
      this._unsuppressMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalAdvertisement.internalValue = value.conditionalAdvertisement;
      this._filterList.internalValue = value.filterList;
      this._inboundNetworkFilters.internalValue = value.inboundNetworkFilters;
      this._inherit = value.inherit;
      this._outboundNetworkFilters.internalValue = value.outboundNetworkFilters;
      this._routeMaps.internalValue = value.routeMaps;
      this._unsuppressMap = value.unsuppressMap;
    }
  }

  // conditional_advertisement - computed: true, optional: true, required: false
  private _conditionalAdvertisement = new DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement) {
    this._conditionalAdvertisement.internalValue = value;
  }
  public resetConditionalAdvertisement() {
    this._conditionalAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertisementInput() {
    return this._conditionalAdvertisement.internalValue;
  }

  // filter_list - computed: true, optional: true, required: false
  private _filterList = new DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastFilterListStruct) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // inbound_network_filters - computed: true, optional: true, required: false
  private _inboundNetworkFilters = new DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters) {
    this._inboundNetworkFilters.internalValue = value;
  }
  public resetInboundNetworkFilters() {
    this._inboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworkFiltersInput() {
    return this._inboundNetworkFilters.internalValue;
  }

  // inherit - computed: true, optional: true, required: false
  private _inherit?: boolean | cdktf.IResolvable; 
  public get inherit() {
    return this.getBooleanAttribute('inherit');
  }
  public set inherit(value: boolean | cdktf.IResolvable) {
    this._inherit = value;
  }
  public resetInherit() {
    this._inherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritInput() {
    return this._inherit;
  }

  // outbound_network_filters - computed: true, optional: true, required: false
  private _outboundNetworkFilters = new DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters) {
    this._outboundNetworkFilters.internalValue = value;
  }
  public resetOutboundNetworkFilters() {
    this._outboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkFiltersInput() {
    return this._outboundNetworkFilters.internalValue;
  }

  // route_maps - computed: true, optional: true, required: false
  private _routeMaps = new DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: DataPanosBgpFilteringRoutingProfileIpv4MulticastRouteMaps) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // unsuppress_map - computed: true, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#advertise_map DataPanosBgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to Match existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#exist_map DataPanosBgpFilteringRoutingProfile#exist_map}
  */
  readonly existMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_map: {
      value: cdktf.stringToHclTerraform(struct!.advertiseMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exist_map: {
      value: cdktf.stringToHclTerraform(struct!.existMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseMap = this._advertiseMap;
    }
    if (this._existMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.existMap = this._existMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseMap = undefined;
      this._existMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseMap = value.advertiseMap;
      this._existMap = value.existMap;
    }
  }

  // advertise_map - computed: true, optional: true, required: false
  private _advertiseMap?: string; 
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }
  public set advertiseMap(value: string) {
    this._advertiseMap = value;
  }
  public resetAdvertiseMap() {
    this._advertiseMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseMapInput() {
    return this._advertiseMap;
  }

  // exist_map - computed: true, optional: true, required: false
  private _existMap?: string; 
  public get existMap() {
    return this.getStringAttribute('exist_map');
  }
  public set existMap(value: string) {
    this._existMap = value;
  }
  public resetExistMap() {
    this._existMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existMapInput() {
    return this._existMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#advertise_map DataPanosBgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to match non-existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#non_exist_map DataPanosBgpFilteringRoutingProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_map: {
      value: cdktf.stringToHclTerraform(struct!.advertiseMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_exist_map: {
      value: cdktf.stringToHclTerraform(struct!.nonExistMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseMap = this._advertiseMap;
    }
    if (this._nonExistMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExistMap = this._nonExistMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseMap = undefined;
      this._nonExistMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseMap = value.advertiseMap;
      this._nonExistMap = value.nonExistMap;
    }
  }

  // advertise_map - computed: true, optional: true, required: false
  private _advertiseMap?: string; 
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }
  public set advertiseMap(value: string) {
    this._advertiseMap = value;
  }
  public resetAdvertiseMap() {
    this._advertiseMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseMapInput() {
    return this._advertiseMap;
  }

  // non_exist_map - computed: true, optional: true, required: false
  private _nonExistMap?: string; 
  public get nonExistMap() {
    return this.getStringAttribute('non_exist_map');
  }
  public set nonExistMap(value: string) {
    this._nonExistMap = value;
  }
  public resetNonExistMap() {
    this._nonExistMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistMapInput() {
    return this._nonExistMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#exist DataPanosBgpFilteringRoutingProfile#exist}
  */
  readonly exist?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#non_exist DataPanosBgpFilteringRoutingProfile#non_exist}
  */
  readonly nonExist?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist",
    },
    non_exist: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exist = this._exist?.internalValue;
    }
    if (this._nonExist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExist = this._nonExist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exist.internalValue = undefined;
      this._nonExist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exist.internalValue = value.exist;
      this._nonExist.internalValue = value.nonExist;
    }
  }

  // exist - computed: true, optional: true, required: false
  private _exist = new DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist) {
    this._exist.internalValue = value;
  }
  public resetExist() {
    this._exist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInput() {
    return this._exist.internalValue;
  }

  // non_exist - computed: true, optional: true, required: false
  private _nonExist = new DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist) {
    this._nonExist.internalValue = value;
  }
  public resetNonExist() {
    this._nonExist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistInput() {
    return this._nonExist.internalValue;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct {
  /**
  * Incoming AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound DataPanosBgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound DataPanosBgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStructToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStructToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
    }
  }

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters {
  /**
  * Incoming Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#distribute_list DataPanosBgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Incoming Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#prefix_list DataPanosBgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._prefixList = value.prefixList;
    }
  }

  // distribute_list - computed: true, optional: true, required: false
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

  // prefix_list - computed: true, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters {
  /**
  * Outgoing Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#distribute_list DataPanosBgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Outgoing Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#prefix_list DataPanosBgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._prefixList = value.prefixList;
    }
  }

  // distribute_list - computed: true, optional: true, required: false
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

  // prefix_list - computed: true, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps {
  /**
  * Incoming Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound DataPanosBgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound DataPanosBgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMapsToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMapsToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
    }
  }

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#conditional_advertisement DataPanosBgpFilteringRoutingProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#filter_list DataPanosBgpFilteringRoutingProfile#filter_list}
  */
  readonly filterList?: DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound_network_filters DataPanosBgpFilteringRoutingProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound_network_filters DataPanosBgpFilteringRoutingProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#route_maps DataPanosBgpFilteringRoutingProfile#route_maps}
  */
  readonly routeMaps?: DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps;
  /**
  * Route-Map selectively unsuppress suppressed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#unsuppress_map DataPanosBgpFilteringRoutingProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv4UnicastToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: dataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: dataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    outbound_network_filters: dataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: dataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4UnicastToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement",
    },
    filter_list: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct",
    },
    inbound_network_filters: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters",
    },
    outbound_network_filters: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters",
    },
    route_maps: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalAdvertisement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalAdvertisement = this._conditionalAdvertisement?.internalValue;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    if (this._inboundNetworkFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundNetworkFilters = this._inboundNetworkFilters?.internalValue;
    }
    if (this._outboundNetworkFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundNetworkFilters = this._outboundNetworkFilters?.internalValue;
    }
    if (this._routeMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMaps = this._routeMaps?.internalValue;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalAdvertisement.internalValue = undefined;
      this._filterList.internalValue = undefined;
      this._inboundNetworkFilters.internalValue = undefined;
      this._outboundNetworkFilters.internalValue = undefined;
      this._routeMaps.internalValue = undefined;
      this._unsuppressMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalAdvertisement.internalValue = value.conditionalAdvertisement;
      this._filterList.internalValue = value.filterList;
      this._inboundNetworkFilters.internalValue = value.inboundNetworkFilters;
      this._outboundNetworkFilters.internalValue = value.outboundNetworkFilters;
      this._routeMaps.internalValue = value.routeMaps;
      this._unsuppressMap = value.unsuppressMap;
    }
  }

  // conditional_advertisement - computed: true, optional: true, required: false
  private _conditionalAdvertisement = new DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement) {
    this._conditionalAdvertisement.internalValue = value;
  }
  public resetConditionalAdvertisement() {
    this._conditionalAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertisementInput() {
    return this._conditionalAdvertisement.internalValue;
  }

  // filter_list - computed: true, optional: true, required: false
  private _filterList = new DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastFilterListStruct) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // inbound_network_filters - computed: true, optional: true, required: false
  private _inboundNetworkFilters = new DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters) {
    this._inboundNetworkFilters.internalValue = value;
  }
  public resetInboundNetworkFilters() {
    this._inboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworkFiltersInput() {
    return this._inboundNetworkFilters.internalValue;
  }

  // outbound_network_filters - computed: true, optional: true, required: false
  private _outboundNetworkFilters = new DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters) {
    this._outboundNetworkFilters.internalValue = value;
  }
  public resetOutboundNetworkFilters() {
    this._outboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkFiltersInput() {
    return this._outboundNetworkFilters.internalValue;
  }

  // route_maps - computed: true, optional: true, required: false
  private _routeMaps = new DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: DataPanosBgpFilteringRoutingProfileIpv4UnicastRouteMaps) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // unsuppress_map - computed: true, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#multicast DataPanosBgpFilteringRoutingProfile#multicast}
  */
  readonly multicast?: DataPanosBgpFilteringRoutingProfileIpv4Multicast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#unicast DataPanosBgpFilteringRoutingProfile#unicast}
  */
  readonly unicast?: DataPanosBgpFilteringRoutingProfileIpv4Unicast;
}

export function dataPanosBgpFilteringRoutingProfileIpv4ToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast: dataPanosBgpFilteringRoutingProfileIpv4MulticastToTerraform(struct!.multicast),
    unicast: dataPanosBgpFilteringRoutingProfileIpv4UnicastToTerraform(struct!.unicast),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv4ToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast: {
      value: dataPanosBgpFilteringRoutingProfileIpv4MulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4Multicast",
    },
    unicast: {
      value: dataPanosBgpFilteringRoutingProfileIpv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multicast.internalValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multicast.internalValue = value.multicast;
      this._unicast.internalValue = value.unicast;
    }
  }

  // multicast - computed: true, optional: true, required: false
  private _multicast = new DataPanosBgpFilteringRoutingProfileIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: DataPanosBgpFilteringRoutingProfileIpv4Multicast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // unicast - computed: true, optional: true, required: false
  private _unicast = new DataPanosBgpFilteringRoutingProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: DataPanosBgpFilteringRoutingProfileIpv4Unicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#advertise_map DataPanosBgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to Match existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#exist_map DataPanosBgpFilteringRoutingProfile#exist_map}
  */
  readonly existMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_map: {
      value: cdktf.stringToHclTerraform(struct!.advertiseMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exist_map: {
      value: cdktf.stringToHclTerraform(struct!.existMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseMap = this._advertiseMap;
    }
    if (this._existMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.existMap = this._existMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseMap = undefined;
      this._existMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseMap = value.advertiseMap;
      this._existMap = value.existMap;
    }
  }

  // advertise_map - computed: true, optional: true, required: false
  private _advertiseMap?: string; 
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }
  public set advertiseMap(value: string) {
    this._advertiseMap = value;
  }
  public resetAdvertiseMap() {
    this._advertiseMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseMapInput() {
    return this._advertiseMap;
  }

  // exist_map - computed: true, optional: true, required: false
  private _existMap?: string; 
  public get existMap() {
    return this.getStringAttribute('exist_map');
  }
  public set existMap(value: string) {
    this._existMap = value;
  }
  public resetExistMap() {
    this._existMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existMapInput() {
    return this._existMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#advertise_map DataPanosBgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to match non-existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#non_exist_map DataPanosBgpFilteringRoutingProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_map: {
      value: cdktf.stringToHclTerraform(struct!.advertiseMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_exist_map: {
      value: cdktf.stringToHclTerraform(struct!.nonExistMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseMap = this._advertiseMap;
    }
    if (this._nonExistMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExistMap = this._nonExistMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseMap = undefined;
      this._nonExistMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseMap = value.advertiseMap;
      this._nonExistMap = value.nonExistMap;
    }
  }

  // advertise_map - computed: true, optional: true, required: false
  private _advertiseMap?: string; 
  public get advertiseMap() {
    return this.getStringAttribute('advertise_map');
  }
  public set advertiseMap(value: string) {
    this._advertiseMap = value;
  }
  public resetAdvertiseMap() {
    this._advertiseMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseMapInput() {
    return this._advertiseMap;
  }

  // non_exist_map - computed: true, optional: true, required: false
  private _nonExistMap?: string; 
  public get nonExistMap() {
    return this.getStringAttribute('non_exist_map');
  }
  public set nonExistMap(value: string) {
    this._nonExistMap = value;
  }
  public resetNonExistMap() {
    this._nonExistMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistMapInput() {
    return this._nonExistMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#exist DataPanosBgpFilteringRoutingProfile#exist}
  */
  readonly exist?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#non_exist DataPanosBgpFilteringRoutingProfile#non_exist}
  */
  readonly nonExist?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist",
    },
    non_exist: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exist = this._exist?.internalValue;
    }
    if (this._nonExist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExist = this._nonExist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exist.internalValue = undefined;
      this._nonExist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exist.internalValue = value.exist;
      this._nonExist.internalValue = value.nonExist;
    }
  }

  // exist - computed: true, optional: true, required: false
  private _exist = new DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist) {
    this._exist.internalValue = value;
  }
  public resetExist() {
    this._exist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInput() {
    return this._exist.internalValue;
  }

  // non_exist - computed: true, optional: true, required: false
  private _nonExist = new DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist) {
    this._nonExist.internalValue = value;
  }
  public resetNonExist() {
    this._nonExist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistInput() {
    return this._nonExist.internalValue;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct {
  /**
  * Incoming AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound DataPanosBgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound DataPanosBgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStructToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStructToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
    }
  }

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters {
  /**
  * Incoming Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#distribute_list DataPanosBgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Incoming Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#prefix_list DataPanosBgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._prefixList = value.prefixList;
    }
  }

  // distribute_list - computed: true, optional: true, required: false
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

  // prefix_list - computed: true, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters {
  /**
  * Outgoing Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#distribute_list DataPanosBgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Outgoing Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#prefix_list DataPanosBgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._prefixList = value.prefixList;
    }
  }

  // distribute_list - computed: true, optional: true, required: false
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

  // prefix_list - computed: true, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps {
  /**
  * Incoming Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound DataPanosBgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound DataPanosBgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMapsToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMapsToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
    }
  }

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#conditional_advertisement DataPanosBgpFilteringRoutingProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#filter_list DataPanosBgpFilteringRoutingProfile#filter_list}
  */
  readonly filterList?: DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#inbound_network_filters DataPanosBgpFilteringRoutingProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#outbound_network_filters DataPanosBgpFilteringRoutingProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#route_maps DataPanosBgpFilteringRoutingProfile#route_maps}
  */
  readonly routeMaps?: DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps;
  /**
  * Route-Map selectively unsuppress suppressed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#unsuppress_map DataPanosBgpFilteringRoutingProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function dataPanosBgpFilteringRoutingProfileIpv6UnicastToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: dataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: dataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    outbound_network_filters: dataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: dataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6UnicastToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement",
    },
    filter_list: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct",
    },
    inbound_network_filters: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters",
    },
    outbound_network_filters: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters",
    },
    route_maps: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalAdvertisement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalAdvertisement = this._conditionalAdvertisement?.internalValue;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    if (this._inboundNetworkFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundNetworkFilters = this._inboundNetworkFilters?.internalValue;
    }
    if (this._outboundNetworkFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundNetworkFilters = this._outboundNetworkFilters?.internalValue;
    }
    if (this._routeMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMaps = this._routeMaps?.internalValue;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalAdvertisement.internalValue = undefined;
      this._filterList.internalValue = undefined;
      this._inboundNetworkFilters.internalValue = undefined;
      this._outboundNetworkFilters.internalValue = undefined;
      this._routeMaps.internalValue = undefined;
      this._unsuppressMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalAdvertisement.internalValue = value.conditionalAdvertisement;
      this._filterList.internalValue = value.filterList;
      this._inboundNetworkFilters.internalValue = value.inboundNetworkFilters;
      this._outboundNetworkFilters.internalValue = value.outboundNetworkFilters;
      this._routeMaps.internalValue = value.routeMaps;
      this._unsuppressMap = value.unsuppressMap;
    }
  }

  // conditional_advertisement - computed: true, optional: true, required: false
  private _conditionalAdvertisement = new DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement) {
    this._conditionalAdvertisement.internalValue = value;
  }
  public resetConditionalAdvertisement() {
    this._conditionalAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertisementInput() {
    return this._conditionalAdvertisement.internalValue;
  }

  // filter_list - computed: true, optional: true, required: false
  private _filterList = new DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastFilterListStruct) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // inbound_network_filters - computed: true, optional: true, required: false
  private _inboundNetworkFilters = new DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters) {
    this._inboundNetworkFilters.internalValue = value;
  }
  public resetInboundNetworkFilters() {
    this._inboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworkFiltersInput() {
    return this._inboundNetworkFilters.internalValue;
  }

  // outbound_network_filters - computed: true, optional: true, required: false
  private _outboundNetworkFilters = new DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters) {
    this._outboundNetworkFilters.internalValue = value;
  }
  public resetOutboundNetworkFilters() {
    this._outboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkFiltersInput() {
    return this._outboundNetworkFilters.internalValue;
  }

  // route_maps - computed: true, optional: true, required: false
  private _routeMaps = new DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: DataPanosBgpFilteringRoutingProfileIpv6UnicastRouteMaps) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // unsuppress_map - computed: true, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
  }
}
export interface DataPanosBgpFilteringRoutingProfileIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#unicast DataPanosBgpFilteringRoutingProfile#unicast}
  */
  readonly unicast?: DataPanosBgpFilteringRoutingProfileIpv6Unicast;
}

export function dataPanosBgpFilteringRoutingProfileIpv6ToTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: dataPanosBgpFilteringRoutingProfileIpv6UnicastToTerraform(struct!.unicast),
  }
}


export function dataPanosBgpFilteringRoutingProfileIpv6ToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: dataPanosBgpFilteringRoutingProfileIpv6UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unicast.internalValue = value.unicast;
    }
  }

  // unicast - computed: true, optional: true, required: false
  private _unicast = new DataPanosBgpFilteringRoutingProfileIpv6UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: DataPanosBgpFilteringRoutingProfileIpv6Unicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface DataPanosBgpFilteringRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#ngfw_device DataPanosBgpFilteringRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosBgpFilteringRoutingProfileLocationNgfwToTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosBgpFilteringRoutingProfileLocationNgfwToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface DataPanosBgpFilteringRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#name DataPanosBgpFilteringRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#ngfw_device DataPanosBgpFilteringRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#panorama_device DataPanosBgpFilteringRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosBgpFilteringRoutingProfileLocationTemplateToTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosBgpFilteringRoutingProfileLocationTemplateToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosBgpFilteringRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#name DataPanosBgpFilteringRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#ngfw_device DataPanosBgpFilteringRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#panorama_device DataPanosBgpFilteringRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosBgpFilteringRoutingProfileLocationTemplateStackToTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosBgpFilteringRoutingProfileLocationTemplateStackToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosBgpFilteringRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#ngfw DataPanosBgpFilteringRoutingProfile#ngfw}
  */
  readonly ngfw?: DataPanosBgpFilteringRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#template DataPanosBgpFilteringRoutingProfile#template}
  */
  readonly template?: DataPanosBgpFilteringRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#template_stack DataPanosBgpFilteringRoutingProfile#template_stack}
  */
  readonly templateStack?: DataPanosBgpFilteringRoutingProfileLocationTemplateStack;
}

export function dataPanosBgpFilteringRoutingProfileLocationToTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosBgpFilteringRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosBgpFilteringRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosBgpFilteringRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosBgpFilteringRoutingProfileLocationToHclTerraform(struct?: DataPanosBgpFilteringRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosBgpFilteringRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileLocationNgfw",
    },
    template: {
      value: dataPanosBgpFilteringRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosBgpFilteringRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpFilteringRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpFilteringRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpFilteringRoutingProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpFilteringRoutingProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new DataPanosBgpFilteringRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosBgpFilteringRoutingProfileLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosBgpFilteringRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosBgpFilteringRoutingProfileLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new DataPanosBgpFilteringRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosBgpFilteringRoutingProfileLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile panos_bgp_filtering_routing_profile}
*/
export class DataPanosBgpFilteringRoutingProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_bgp_filtering_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosBgpFilteringRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosBgpFilteringRoutingProfile to import
  * @param importFromId The id of the existing DataPanosBgpFilteringRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosBgpFilteringRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_bgp_filtering_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_filtering_routing_profile panos_bgp_filtering_routing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosBgpFilteringRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosBgpFilteringRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_bgp_filtering_routing_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._ipv4.internalValue = config.ipv4;
    this._ipv6.internalValue = config.ipv6;
    this._location.internalValue = config.location;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataPanosBgpFilteringRoutingProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosBgpFilteringRoutingProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosBgpFilteringRoutingProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosBgpFilteringRoutingProfileIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosBgpFilteringRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosBgpFilteringRoutingProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ipv4: dataPanosBgpFilteringRoutingProfileIpv4ToTerraform(this._ipv4.internalValue),
      ipv6: dataPanosBgpFilteringRoutingProfileIpv6ToTerraform(this._ipv6.internalValue),
      location: dataPanosBgpFilteringRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4: {
        value: dataPanosBgpFilteringRoutingProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosBgpFilteringRoutingProfileIpv4",
      },
      ipv6: {
        value: dataPanosBgpFilteringRoutingProfileIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosBgpFilteringRoutingProfileIpv6",
      },
      location: {
        value: dataPanosBgpFilteringRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosBgpFilteringRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
