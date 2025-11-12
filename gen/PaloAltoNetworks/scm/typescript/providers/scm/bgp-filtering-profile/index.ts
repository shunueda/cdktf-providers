// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpFilteringProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#description BgpFilteringProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#device BgpFilteringProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#folder BgpFilteringProfile#folder}
  */
  readonly folder?: string;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#ipv4 BgpFilteringProfile#ipv4}
  */
  readonly ipv4?: BgpFilteringProfileIpv4;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#name BgpFilteringProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#snippet BgpFilteringProfile#snippet}
  */
  readonly snippet?: string;
}
export interface BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist {
  /**
  * Advertise map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#advertise_map BgpFilteringProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Exist map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#exist_map BgpFilteringProfile#exist_map}
  */
  readonly existMap?: string;
}

export function bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExistToTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExistToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist {
  /**
  * Advertise map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#advertise_map BgpFilteringProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Non exist map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#non_exist_map BgpFilteringProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExistToTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement {
  /**
  * Exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#exist BgpFilteringProfile#exist}
  */
  readonly exist?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist;
  /**
  * Non exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#non_exist BgpFilteringProfile#non_exist}
  */
  readonly nonExist?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist;
}

export function bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementToTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist",
    },
    non_exist: {
      value: bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement | cdktf.IResolvable | undefined) {
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
  private _exist = new BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementExist) {
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
  private _nonExist = new BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementNonExist) {
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
export interface BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct {
  /**
  * Inbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#inbound BgpFilteringProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#outbound BgpFilteringProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringProfileIpv4Ipv4MulticastFilterListStructToTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastFilterListStructToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4MulticastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters {
  /**
  * Distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#distribute_list BgpFilteringProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#prefix_list BgpFilteringProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFiltersToTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFiltersToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters {
  /**
  * Distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#distribute_list BgpFilteringProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#prefix_list BgpFilteringProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFiltersToTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFiltersToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4MulticastRouteMaps {
  /**
  * Inbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#inbound BgpFilteringProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#outbound BgpFilteringProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringProfileIpv4Ipv4MulticastRouteMapsToTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastRouteMapsToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4MulticastRouteMaps | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4MulticastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4MulticastRouteMaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4MulticastRouteMaps | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4Multicast {
  /**
  * Conditional advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#conditional_advertisement BgpFilteringProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement;
  /**
  * Filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#filter_list BgpFilteringProfile#filter_list}
  */
  readonly filterList?: BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct;
  /**
  * Inbound network filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#inbound_network_filters BgpFilteringProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters;
  /**
  * Inherit from unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#inherit BgpFilteringProfile#inherit}
  */
  readonly inherit?: boolean | cdktf.IResolvable;
  /**
  * Outbound network filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#outbound_network_filters BgpFilteringProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters;
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#route_maps BgpFilteringProfile#route_maps}
  */
  readonly routeMaps?: BgpFilteringProfileIpv4Ipv4MulticastRouteMaps;
  /**
  * Unsuppress map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#unsuppress_map BgpFilteringProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function bgpFilteringProfileIpv4Ipv4MulticastToTerraform(struct?: BgpFilteringProfileIpv4Ipv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: bgpFilteringProfileIpv4Ipv4MulticastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: bgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    inherit: cdktf.booleanToTerraform(struct!.inherit),
    outbound_network_filters: bgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: bgpFilteringProfileIpv4Ipv4MulticastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function bgpFilteringProfileIpv4Ipv4MulticastToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: bgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement",
    },
    filter_list: {
      value: bgpFilteringProfileIpv4Ipv4MulticastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct",
    },
    inbound_network_filters: {
      value: bgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters",
    },
    inherit: {
      value: cdktf.booleanToHclTerraform(struct!.inherit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound_network_filters: {
      value: bgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters",
    },
    route_maps: {
      value: bgpFilteringProfileIpv4Ipv4MulticastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4MulticastRouteMaps",
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

export class BgpFilteringProfileIpv4Ipv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4Multicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4Multicast | cdktf.IResolvable | undefined) {
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
  private _conditionalAdvertisement = new BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: BgpFilteringProfileIpv4Ipv4MulticastConditionalAdvertisement) {
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
  private _filterList = new BgpFilteringProfileIpv4Ipv4MulticastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: BgpFilteringProfileIpv4Ipv4MulticastFilterListStruct) {
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
  private _inboundNetworkFilters = new BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: BgpFilteringProfileIpv4Ipv4MulticastInboundNetworkFilters) {
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
  private _outboundNetworkFilters = new BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: BgpFilteringProfileIpv4Ipv4MulticastOutboundNetworkFilters) {
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
  private _routeMaps = new BgpFilteringProfileIpv4Ipv4MulticastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpFilteringProfileIpv4Ipv4MulticastRouteMaps) {
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
export interface BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist {
  /**
  * Advertise map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#advertise_map BgpFilteringProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Exist map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#exist_map BgpFilteringProfile#exist_map}
  */
  readonly existMap?: string;
}

export function bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExistToTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    exist_map: cdktf.stringToTerraform(struct!.existMap),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExistToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist {
  /**
  * Advertise map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#advertise_map BgpFilteringProfile#advertise_map}
  */
  readonly advertiseMap?: string;
  /**
  * Non exist map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#non_exist_map BgpFilteringProfile#non_exist_map}
  */
  readonly nonExistMap?: string;
}

export function bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExistToTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_map: cdktf.stringToTerraform(struct!.advertiseMap),
    non_exist_map: cdktf.stringToTerraform(struct!.nonExistMap),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement {
  /**
  * Exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#exist BgpFilteringProfile#exist}
  */
  readonly exist?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist;
  /**
  * Non exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#non_exist BgpFilteringProfile#non_exist}
  */
  readonly nonExist?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist;
}

export function bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementToTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist: bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExistToTerraform(struct!.exist),
    non_exist: bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExistToTerraform(struct!.nonExist),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist: {
      value: bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExistToHclTerraform(struct!.exist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist",
    },
    non_exist: {
      value: bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExistToHclTerraform(struct!.nonExist),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement | cdktf.IResolvable | undefined) {
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
  private _exist = new BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExistOutputReference(this, "exist");
  public get exist() {
    return this._exist;
  }
  public putExist(value: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementExist) {
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
  private _nonExist = new BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExistOutputReference(this, "non_exist");
  public get nonExist() {
    return this._nonExist;
  }
  public putNonExist(value: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementNonExist) {
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
export interface BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct {
  /**
  * Inbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#inbound BgpFilteringProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#outbound BgpFilteringProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringProfileIpv4Ipv4UnicastFilterListStructToTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastFilterListStructToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4UnicastFilterListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters {
  /**
  * Distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#distribute_list BgpFilteringProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#prefix_list BgpFilteringProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFiltersToTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFiltersToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters {
  /**
  * Distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#distribute_list BgpFilteringProfile#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#prefix_list BgpFilteringProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFiltersToTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFiltersToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4UnicastRouteMaps {
  /**
  * Inbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#inbound BgpFilteringProfile#inbound}
  */
  readonly inbound?: string;
  /**
  * Outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#outbound BgpFilteringProfile#outbound}
  */
  readonly outbound?: string;
}

export function bgpFilteringProfileIpv4Ipv4UnicastRouteMapsToTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastRouteMapsToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4UnicastRouteMaps | cdktf.IResolvable): any {
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

export class BgpFilteringProfileIpv4Ipv4UnicastRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4UnicastRouteMaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4UnicastRouteMaps | cdktf.IResolvable | undefined) {
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
export interface BgpFilteringProfileIpv4Ipv4Unicast {
  /**
  * Conditional advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#conditional_advertisement BgpFilteringProfile#conditional_advertisement}
  */
  readonly conditionalAdvertisement?: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement;
  /**
  * Filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#filter_list BgpFilteringProfile#filter_list}
  */
  readonly filterList?: BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct;
  /**
  * Inbound network filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#inbound_network_filters BgpFilteringProfile#inbound_network_filters}
  */
  readonly inboundNetworkFilters?: BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters;
  /**
  * Outbound network filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#outbound_network_filters BgpFilteringProfile#outbound_network_filters}
  */
  readonly outboundNetworkFilters?: BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters;
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#route_maps BgpFilteringProfile#route_maps}
  */
  readonly routeMaps?: BgpFilteringProfileIpv4Ipv4UnicastRouteMaps;
  /**
  * Unsuppress map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#unsuppress_map BgpFilteringProfile#unsuppress_map}
  */
  readonly unsuppressMap?: string;
}

export function bgpFilteringProfileIpv4Ipv4UnicastToTerraform(struct?: BgpFilteringProfileIpv4Ipv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_advertisement: bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementToTerraform(struct!.conditionalAdvertisement),
    filter_list: bgpFilteringProfileIpv4Ipv4UnicastFilterListStructToTerraform(struct!.filterList),
    inbound_network_filters: bgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFiltersToTerraform(struct!.inboundNetworkFilters),
    outbound_network_filters: bgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFiltersToTerraform(struct!.outboundNetworkFilters),
    route_maps: bgpFilteringProfileIpv4Ipv4UnicastRouteMapsToTerraform(struct!.routeMaps),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
  }
}


export function bgpFilteringProfileIpv4Ipv4UnicastToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_advertisement: {
      value: bgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementToHclTerraform(struct!.conditionalAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement",
    },
    filter_list: {
      value: bgpFilteringProfileIpv4Ipv4UnicastFilterListStructToHclTerraform(struct!.filterList),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct",
    },
    inbound_network_filters: {
      value: bgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFiltersToHclTerraform(struct!.inboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters",
    },
    outbound_network_filters: {
      value: bgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFiltersToHclTerraform(struct!.outboundNetworkFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters",
    },
    route_maps: {
      value: bgpFilteringProfileIpv4Ipv4UnicastRouteMapsToHclTerraform(struct!.routeMaps),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4UnicastRouteMaps",
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

export class BgpFilteringProfileIpv4Ipv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4Unicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4Unicast | cdktf.IResolvable | undefined) {
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
  private _conditionalAdvertisement = new BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }
  public putConditionalAdvertisement(value: BgpFilteringProfileIpv4Ipv4UnicastConditionalAdvertisement) {
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
  private _filterList = new BgpFilteringProfileIpv4Ipv4UnicastFilterListStructOutputReference(this, "filter_list");
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: BgpFilteringProfileIpv4Ipv4UnicastFilterListStruct) {
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
  private _inboundNetworkFilters = new BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFiltersOutputReference(this, "inbound_network_filters");
  public get inboundNetworkFilters() {
    return this._inboundNetworkFilters;
  }
  public putInboundNetworkFilters(value: BgpFilteringProfileIpv4Ipv4UnicastInboundNetworkFilters) {
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
  private _outboundNetworkFilters = new BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFiltersOutputReference(this, "outbound_network_filters");
  public get outboundNetworkFilters() {
    return this._outboundNetworkFilters;
  }
  public putOutboundNetworkFilters(value: BgpFilteringProfileIpv4Ipv4UnicastOutboundNetworkFilters) {
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
  private _routeMaps = new BgpFilteringProfileIpv4Ipv4UnicastRouteMapsOutputReference(this, "route_maps");
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpFilteringProfileIpv4Ipv4UnicastRouteMaps) {
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
export interface BgpFilteringProfileIpv4Ipv4 {
  /**
  * Multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#multicast BgpFilteringProfile#multicast}
  */
  readonly multicast?: BgpFilteringProfileIpv4Ipv4Multicast;
  /**
  * Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#unicast BgpFilteringProfile#unicast}
  */
  readonly unicast?: BgpFilteringProfileIpv4Ipv4Unicast;
}

export function bgpFilteringProfileIpv4Ipv4ToTerraform(struct?: BgpFilteringProfileIpv4Ipv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast: bgpFilteringProfileIpv4Ipv4MulticastToTerraform(struct!.multicast),
    unicast: bgpFilteringProfileIpv4Ipv4UnicastToTerraform(struct!.unicast),
  }
}


export function bgpFilteringProfileIpv4Ipv4ToHclTerraform(struct?: BgpFilteringProfileIpv4Ipv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast: {
      value: bgpFilteringProfileIpv4Ipv4MulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4Multicast",
    },
    unicast: {
      value: bgpFilteringProfileIpv4Ipv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringProfileIpv4Ipv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4Ipv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpFilteringProfileIpv4Ipv4 | cdktf.IResolvable | undefined) {
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
  private _multicast = new BgpFilteringProfileIpv4Ipv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: BgpFilteringProfileIpv4Ipv4Multicast) {
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
  private _unicast = new BgpFilteringProfileIpv4Ipv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpFilteringProfileIpv4Ipv4Unicast) {
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
export interface BgpFilteringProfileIpv4 {
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#ipv4 BgpFilteringProfile#ipv4}
  */
  readonly ipv4: BgpFilteringProfileIpv4Ipv4;
}

export function bgpFilteringProfileIpv4ToTerraform(struct?: BgpFilteringProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: bgpFilteringProfileIpv4Ipv4ToTerraform(struct!.ipv4),
  }
}


export function bgpFilteringProfileIpv4ToHclTerraform(struct?: BgpFilteringProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: bgpFilteringProfileIpv4Ipv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpFilteringProfileIpv4Ipv4",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpFilteringProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpFilteringProfileIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpFilteringProfileIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4 = new BgpFilteringProfileIpv4Ipv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpFilteringProfileIpv4Ipv4) {
    this._ipv4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile scm_bgp_filtering_profile}
*/
export class BgpFilteringProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_filtering_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpFilteringProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpFilteringProfile to import
  * @param importFromId The id of the existing BgpFilteringProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpFilteringProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_filtering_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/bgp_filtering_profile scm_bgp_filtering_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpFilteringProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BgpFilteringProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_filtering_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
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
    this._device = config.device;
    this._folder = config.folder;
    this._ipv4.internalValue = config.ipv4;
    this._name = config.name;
    this._snippet = config.snippet;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpFilteringProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpFilteringProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      ipv4: bgpFilteringProfileIpv4ToTerraform(this._ipv4.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
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
      ipv4: {
        value: bgpFilteringProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpFilteringProfileIpv4",
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
