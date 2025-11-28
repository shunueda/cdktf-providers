// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpFilteringRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe BGP Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#description BgpFilteringRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#ipv4 BgpFilteringRoutingProfile#ipv4}
  */
  readonly ipv4?: BgpFilteringRoutingProfileIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#ipv6 BgpFilteringRoutingProfile#ipv6}
  */
  readonly ipv6?: BgpFilteringRoutingProfileIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#location BgpFilteringRoutingProfile#location}
  */
  readonly location: BgpFilteringRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#name BgpFilteringRoutingProfile#name}
  */
  readonly name: string;
}
export interface BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#advertise_map BgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to Match existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#exist_map BgpFilteringRoutingProfile#exist_map}
  */
  readonly existMap?: string;
}

export function bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
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

  // advertise_map - computed: false, optional: true, required: false
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

  // exist_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#advertise_map BgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to match non-existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#non_exist_map BgpFilteringRoutingProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
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

  // advertise_map - computed: false, optional: true, required: false
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

  // non_exist_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#exist BgpFilteringRoutingProfile#exist}
  */
  readonly exist?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#non_exist BgpFilteringRoutingProfile#non_exist}
  */
  readonly nonExist?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist;
}

export function bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist",
    },
    non_exist: {
      value: bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement | cdktf.IResolvable | undefined) {
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

  // exist - computed: false, optional: true, required: false
  private _exist = new BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementExist) {
    this._exist.internalValue = value;
  }
  public resetExist() {
    this._exist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInput() {
    return this._exist.internalValue;
  }

  // non_exist - computed: false, optional: true, required: false
  private _nonExist = new BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementNonExist) {
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
export interface BgpFilteringRoutingProfileIpv4MulticastFilterListStruct {
  /**
  * Incoming AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound BgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound BgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringRoutingProfileIpv4MulticastFilterListStructToTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastFilterListStructToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4MulticastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4MulticastFilterListStruct | cdktf.IResolvable | undefined) {
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

  // inbound - computed: false, optional: true, required: false
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

  // outbound - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters {
  /**
  * Incoming Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#distribute_list BgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Incoming Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#prefix_list BgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters | cdktf.IResolvable | undefined) {
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

  // prefix_list - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters {
  /**
  * Outgoing Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#distribute_list BgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Outgoing Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#prefix_list BgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
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

  // prefix_list - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4MulticastRouteMaps {
  /**
  * Incoming Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound BgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound BgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringRoutingProfileIpv4MulticastRouteMapsToTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastRouteMapsToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4MulticastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4MulticastRouteMaps | cdktf.IResolvable | undefined) {
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

  // inbound - computed: false, optional: true, required: false
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

  // outbound - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4Multicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#conditional_advertisement BgpFilteringRoutingProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#filter_list BgpFilteringRoutingProfile#filter_list}
  */
  readonly filterList?: BgpFilteringRoutingProfileIpv4MulticastFilterListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound_network_filters BgpFilteringRoutingProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters;
  /**
  * Either Configure or Inherit Filtering Profile from Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inherit BgpFilteringRoutingProfile#inherit}
  */
  readonly inherit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound_network_filters BgpFilteringRoutingProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#route_maps BgpFilteringRoutingProfile#route_maps}
  */
  readonly routeMaps?: BgpFilteringRoutingProfileIpv4MulticastRouteMaps;
  /**
  * Route-Map selectively unsuppress suppressed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#unsuppress_map BgpFilteringRoutingProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function bgpFilteringRoutingProfileIpv4MulticastToTerraform(struct?: BgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: bgpFilteringRoutingProfileIpv4MulticastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: bgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    inherit: cdktf.booleanToTerraform(struct!.inherit),
    outbound_network_filters: bgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: bgpFilteringRoutingProfileIpv4MulticastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function bgpFilteringRoutingProfileIpv4MulticastToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: bgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement",
    },
    filter_list: {
      value: bgpFilteringRoutingProfileIpv4MulticastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4MulticastFilterListStruct",
    },
    inbound_network_filters: {
      value: bgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters",
    },
    inherit: {
      value: cdktf.booleanToHclTerraform(struct!.inherit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound_network_filters: {
      value: bgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters",
    },
    route_maps: {
      value: bgpFilteringRoutingProfileIpv4MulticastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4MulticastRouteMaps",
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

export class BgpFilteringRoutingProfileIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined) {
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

  // conditional_advertisement - computed: false, optional: true, required: false
  private _conditionalAdvertisement = new BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: BgpFilteringRoutingProfileIpv4MulticastConditionalAdvertisement) {
    this._conditionalAdvertisement.internalValue = value;
  }
  public resetConditionalAdvertisement() {
    this._conditionalAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertisementInput() {
    return this._conditionalAdvertisement.internalValue;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new BgpFilteringRoutingProfileIpv4MulticastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: BgpFilteringRoutingProfileIpv4MulticastFilterListStruct) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // inbound_network_filters - computed: false, optional: true, required: false
  private _inboundNetworkFilters = new BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: BgpFilteringRoutingProfileIpv4MulticastInboundNetworkFilters) {
    this._inboundNetworkFilters.internalValue = value;
  }
  public resetInboundNetworkFilters() {
    this._inboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworkFiltersInput() {
    return this._inboundNetworkFilters.internalValue;
  }

  // inherit - computed: false, optional: true, required: false
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

  // outbound_network_filters - computed: false, optional: true, required: false
  private _outboundNetworkFilters = new BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: BgpFilteringRoutingProfileIpv4MulticastOutboundNetworkFilters) {
    this._outboundNetworkFilters.internalValue = value;
  }
  public resetOutboundNetworkFilters() {
    this._outboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkFiltersInput() {
    return this._outboundNetworkFilters.internalValue;
  }

  // route_maps - computed: false, optional: true, required: false
  private _routeMaps = new BgpFilteringRoutingProfileIpv4MulticastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpFilteringRoutingProfileIpv4MulticastRouteMaps) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // unsuppress_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#advertise_map BgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to Match existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#exist_map BgpFilteringRoutingProfile#exist_map}
  */
  readonly existMap?: string;
}

export function bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
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

  // advertise_map - computed: false, optional: true, required: false
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

  // exist_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#advertise_map BgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to match non-existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#non_exist_map BgpFilteringRoutingProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
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

  // advertise_map - computed: false, optional: true, required: false
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

  // non_exist_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#exist BgpFilteringRoutingProfile#exist}
  */
  readonly exist?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#non_exist BgpFilteringRoutingProfile#non_exist}
  */
  readonly nonExist?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist;
}

export function bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist",
    },
    non_exist: {
      value: bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement | cdktf.IResolvable | undefined) {
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

  // exist - computed: false, optional: true, required: false
  private _exist = new BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementExist) {
    this._exist.internalValue = value;
  }
  public resetExist() {
    this._exist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInput() {
    return this._exist.internalValue;
  }

  // non_exist - computed: false, optional: true, required: false
  private _nonExist = new BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementNonExist) {
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
export interface BgpFilteringRoutingProfileIpv4UnicastFilterListStruct {
  /**
  * Incoming AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound BgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound BgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringRoutingProfileIpv4UnicastFilterListStructToTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastFilterListStructToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4UnicastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4UnicastFilterListStruct | cdktf.IResolvable | undefined) {
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

  // inbound - computed: false, optional: true, required: false
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

  // outbound - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters {
  /**
  * Incoming Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#distribute_list BgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Incoming Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#prefix_list BgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters | cdktf.IResolvable | undefined) {
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

  // prefix_list - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters {
  /**
  * Outgoing Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#distribute_list BgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Outgoing Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#prefix_list BgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
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

  // prefix_list - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4UnicastRouteMaps {
  /**
  * Incoming Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound BgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound BgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringRoutingProfileIpv4UnicastRouteMapsToTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastRouteMapsToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv4UnicastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4UnicastRouteMaps | cdktf.IResolvable | undefined) {
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

  // inbound - computed: false, optional: true, required: false
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

  // outbound - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#conditional_advertisement BgpFilteringRoutingProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#filter_list BgpFilteringRoutingProfile#filter_list}
  */
  readonly filterList?: BgpFilteringRoutingProfileIpv4UnicastFilterListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound_network_filters BgpFilteringRoutingProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound_network_filters BgpFilteringRoutingProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#route_maps BgpFilteringRoutingProfile#route_maps}
  */
  readonly routeMaps?: BgpFilteringRoutingProfileIpv4UnicastRouteMaps;
  /**
  * Route-Map selectively unsuppress suppressed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#unsuppress_map BgpFilteringRoutingProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function bgpFilteringRoutingProfileIpv4UnicastToTerraform(struct?: BgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: bgpFilteringRoutingProfileIpv4UnicastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: bgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    outbound_network_filters: bgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: bgpFilteringRoutingProfileIpv4UnicastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function bgpFilteringRoutingProfileIpv4UnicastToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: bgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement",
    },
    filter_list: {
      value: bgpFilteringRoutingProfileIpv4UnicastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4UnicastFilterListStruct",
    },
    inbound_network_filters: {
      value: bgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters",
    },
    outbound_network_filters: {
      value: bgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters",
    },
    route_maps: {
      value: bgpFilteringRoutingProfileIpv4UnicastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4UnicastRouteMaps",
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

export class BgpFilteringRoutingProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined) {
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

  // conditional_advertisement - computed: false, optional: true, required: false
  private _conditionalAdvertisement = new BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: BgpFilteringRoutingProfileIpv4UnicastConditionalAdvertisement) {
    this._conditionalAdvertisement.internalValue = value;
  }
  public resetConditionalAdvertisement() {
    this._conditionalAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertisementInput() {
    return this._conditionalAdvertisement.internalValue;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new BgpFilteringRoutingProfileIpv4UnicastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: BgpFilteringRoutingProfileIpv4UnicastFilterListStruct) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // inbound_network_filters - computed: false, optional: true, required: false
  private _inboundNetworkFilters = new BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: BgpFilteringRoutingProfileIpv4UnicastInboundNetworkFilters) {
    this._inboundNetworkFilters.internalValue = value;
  }
  public resetInboundNetworkFilters() {
    this._inboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworkFiltersInput() {
    return this._inboundNetworkFilters.internalValue;
  }

  // outbound_network_filters - computed: false, optional: true, required: false
  private _outboundNetworkFilters = new BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: BgpFilteringRoutingProfileIpv4UnicastOutboundNetworkFilters) {
    this._outboundNetworkFilters.internalValue = value;
  }
  public resetOutboundNetworkFilters() {
    this._outboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkFiltersInput() {
    return this._outboundNetworkFilters.internalValue;
  }

  // route_maps - computed: false, optional: true, required: false
  private _routeMaps = new BgpFilteringRoutingProfileIpv4UnicastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpFilteringRoutingProfileIpv4UnicastRouteMaps) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // unsuppress_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#multicast BgpFilteringRoutingProfile#multicast}
  */
  readonly multicast?: BgpFilteringRoutingProfileIpv4Multicast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#unicast BgpFilteringRoutingProfile#unicast}
  */
  readonly unicast?: BgpFilteringRoutingProfileIpv4Unicast;
}

export function bgpFilteringRoutingProfileIpv4ToTerraform(struct?: BgpFilteringRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast: bgpFilteringRoutingProfileIpv4MulticastToTerraform(struct!.multicast),
    unicast: bgpFilteringRoutingProfileIpv4UnicastToTerraform(struct!.unicast),
  }
}


export function bgpFilteringRoutingProfileIpv4ToHclTerraform(struct?: BgpFilteringRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast: {
      value: bgpFilteringRoutingProfileIpv4MulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4Multicast",
    },
    unicast: {
      value: bgpFilteringRoutingProfileIpv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringRoutingProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv4 | cdktf.IResolvable | undefined) {
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

  // multicast - computed: false, optional: true, required: false
  private _multicast = new BgpFilteringRoutingProfileIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: BgpFilteringRoutingProfileIpv4Multicast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new BgpFilteringRoutingProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpFilteringRoutingProfileIpv4Unicast) {
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
export interface BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#advertise_map BgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to Match existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#exist_map BgpFilteringRoutingProfile#exist_map}
  */
  readonly existMap?: string;
}

export function bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
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

  // advertise_map - computed: false, optional: true, required: false
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

  // exist_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist {
  /**
  * Specify Route-Map match criteria to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#advertise_map BgpFilteringRoutingProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Specify Route-Map to match non-existing routes in BGP local-rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#non_exist_map BgpFilteringRoutingProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
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

  // advertise_map - computed: false, optional: true, required: false
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

  // non_exist_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#exist BgpFilteringRoutingProfile#exist}
  */
  readonly exist?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#non_exist BgpFilteringRoutingProfile#non_exist}
  */
  readonly nonExist?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist;
}

export function bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist",
    },
    non_exist: {
      value: bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement | cdktf.IResolvable | undefined) {
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

  // exist - computed: false, optional: true, required: false
  private _exist = new BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementExist) {
    this._exist.internalValue = value;
  }
  public resetExist() {
    this._exist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInput() {
    return this._exist.internalValue;
  }

  // non_exist - computed: false, optional: true, required: false
  private _nonExist = new BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementNonExist) {
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
export interface BgpFilteringRoutingProfileIpv6UnicastFilterListStruct {
  /**
  * Incoming AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound BgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing AS-Path Access-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound BgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringRoutingProfileIpv6UnicastFilterListStructToTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastFilterListStructToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv6UnicastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6UnicastFilterListStruct | cdktf.IResolvable | undefined) {
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

  // inbound - computed: false, optional: true, required: false
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

  // outbound - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters {
  /**
  * Incoming Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#distribute_list BgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Incoming Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#prefix_list BgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters | cdktf.IResolvable | undefined) {
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

  // prefix_list - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters {
  /**
  * Outgoing Distribute-List (Access-List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#distribute_list BgpFilteringRoutingProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Outgoing Prefix-List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#prefix_list BgpFilteringRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
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

  // prefix_list - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv6UnicastRouteMaps {
  /**
  * Incoming Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound BgpFilteringRoutingProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outgoing Route-Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound BgpFilteringRoutingProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringRoutingProfileIpv6UnicastRouteMapsToTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastRouteMapsToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileIpv6UnicastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6UnicastRouteMaps | cdktf.IResolvable | undefined) {
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

  // inbound - computed: false, optional: true, required: false
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

  // outbound - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv6Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#conditional_advertisement BgpFilteringRoutingProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#filter_list BgpFilteringRoutingProfile#filter_list}
  */
  readonly filterList?: BgpFilteringRoutingProfileIpv6UnicastFilterListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#inbound_network_filters BgpFilteringRoutingProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#outbound_network_filters BgpFilteringRoutingProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#route_maps BgpFilteringRoutingProfile#route_maps}
  */
  readonly routeMaps?: BgpFilteringRoutingProfileIpv6UnicastRouteMaps;
  /**
  * Route-Map selectively unsuppress suppressed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#unsuppress_map BgpFilteringRoutingProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function bgpFilteringRoutingProfileIpv6UnicastToTerraform(struct?: BgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: bgpFilteringRoutingProfileIpv6UnicastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: bgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    outbound_network_filters: bgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: bgpFilteringRoutingProfileIpv6UnicastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function bgpFilteringRoutingProfileIpv6UnicastToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: bgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement",
    },
    filter_list: {
      value: bgpFilteringRoutingProfileIpv6UnicastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6UnicastFilterListStruct",
    },
    inbound_network_filters: {
      value: bgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters",
    },
    outbound_network_filters: {
      value: bgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters",
    },
    route_maps: {
      value: bgpFilteringRoutingProfileIpv6UnicastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6UnicastRouteMaps",
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

export class BgpFilteringRoutingProfileIpv6UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined) {
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

  // conditional_advertisement - computed: false, optional: true, required: false
  private _conditionalAdvertisement = new BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: BgpFilteringRoutingProfileIpv6UnicastConditionalAdvertisement) {
    this._conditionalAdvertisement.internalValue = value;
  }
  public resetConditionalAdvertisement() {
    this._conditionalAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertisementInput() {
    return this._conditionalAdvertisement.internalValue;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new BgpFilteringRoutingProfileIpv6UnicastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: BgpFilteringRoutingProfileIpv6UnicastFilterListStruct) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // inbound_network_filters - computed: false, optional: true, required: false
  private _inboundNetworkFilters = new BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: BgpFilteringRoutingProfileIpv6UnicastInboundNetworkFilters) {
    this._inboundNetworkFilters.internalValue = value;
  }
  public resetInboundNetworkFilters() {
    this._inboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworkFiltersInput() {
    return this._inboundNetworkFilters.internalValue;
  }

  // outbound_network_filters - computed: false, optional: true, required: false
  private _outboundNetworkFilters = new BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: BgpFilteringRoutingProfileIpv6UnicastOutboundNetworkFilters) {
    this._outboundNetworkFilters.internalValue = value;
  }
  public resetOutboundNetworkFilters() {
    this._outboundNetworkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkFiltersInput() {
    return this._outboundNetworkFilters.internalValue;
  }

  // route_maps - computed: false, optional: true, required: false
  private _routeMaps = new BgpFilteringRoutingProfileIpv6UnicastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpFilteringRoutingProfileIpv6UnicastRouteMaps) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // unsuppress_map - computed: false, optional: true, required: false
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
export interface BgpFilteringRoutingProfileIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#unicast BgpFilteringRoutingProfile#unicast}
  */
  readonly unicast?: BgpFilteringRoutingProfileIpv6Unicast;
}

export function bgpFilteringRoutingProfileIpv6ToTerraform(struct?: BgpFilteringRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: bgpFilteringRoutingProfileIpv6UnicastToTerraform(struct!.unicast),
  }
}


export function bgpFilteringRoutingProfileIpv6ToHclTerraform(struct?: BgpFilteringRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: bgpFilteringRoutingProfileIpv6UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileIpv6Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringRoutingProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileIpv6 | cdktf.IResolvable | undefined) {
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

  // unicast - computed: false, optional: true, required: false
  private _unicast = new BgpFilteringRoutingProfileIpv6UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpFilteringRoutingProfileIpv6Unicast) {
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
export interface BgpFilteringRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#ngfw_device BgpFilteringRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function bgpFilteringRoutingProfileLocationNgfwToTerraform(struct?: BgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function bgpFilteringRoutingProfileLocationNgfwToHclTerraform(struct?: BgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#name BgpFilteringRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#ngfw_device BgpFilteringRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#panorama_device BgpFilteringRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function bgpFilteringRoutingProfileLocationTemplateToTerraform(struct?: BgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function bgpFilteringRoutingProfileLocationTemplateToHclTerraform(struct?: BgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#name BgpFilteringRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#ngfw_device BgpFilteringRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#panorama_device BgpFilteringRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function bgpFilteringRoutingProfileLocationTemplateStackToTerraform(struct?: BgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function bgpFilteringRoutingProfileLocationTemplateStackToHclTerraform(struct?: BgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class BgpFilteringRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#ngfw BgpFilteringRoutingProfile#ngfw}
  */
  readonly ngfw?: BgpFilteringRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#template BgpFilteringRoutingProfile#template}
  */
  readonly template?: BgpFilteringRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#template_stack BgpFilteringRoutingProfile#template_stack}
  */
  readonly templateStack?: BgpFilteringRoutingProfileLocationTemplateStack;
}

export function bgpFilteringRoutingProfileLocationToTerraform(struct?: BgpFilteringRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: bgpFilteringRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: bgpFilteringRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: bgpFilteringRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function bgpFilteringRoutingProfileLocationToHclTerraform(struct?: BgpFilteringRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: bgpFilteringRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileLocationNgfw",
    },
    template: {
      value: bgpFilteringRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: bgpFilteringRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringRoutingProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringRoutingProfileLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new BgpFilteringRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: BgpFilteringRoutingProfileLocationNgfw) {
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
  private _template = new BgpFilteringRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: BgpFilteringRoutingProfileLocationTemplate) {
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
  private _templateStack = new BgpFilteringRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: BgpFilteringRoutingProfileLocationTemplateStack) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile panos_bgp_filtering_routing_profile}
*/
export class BgpFilteringRoutingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_bgp_filtering_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpFilteringRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpFilteringRoutingProfile to import
  * @param importFromId The id of the existing BgpFilteringRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpFilteringRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_bgp_filtering_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_filtering_routing_profile panos_bgp_filtering_routing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpFilteringRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BgpFilteringRoutingProfileConfig) {
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpFilteringRoutingProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpFilteringRoutingProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new BgpFilteringRoutingProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: BgpFilteringRoutingProfileIpv6) {
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
  private _location = new BgpFilteringRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: BgpFilteringRoutingProfileLocation) {
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
      ipv4: bgpFilteringRoutingProfileIpv4ToTerraform(this._ipv4.internalValue),
      ipv6: bgpFilteringRoutingProfileIpv6ToTerraform(this._ipv6.internalValue),
      location: bgpFilteringRoutingProfileLocationToTerraform(this._location.internalValue),
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
        value: bgpFilteringRoutingProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpFilteringRoutingProfileIpv4",
      },
      ipv6: {
        value: bgpFilteringRoutingProfileIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpFilteringRoutingProfileIpv6",
      },
      location: {
        value: bgpFilteringRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpFilteringRoutingProfileLocation",
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
