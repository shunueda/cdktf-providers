// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether application load balancer is available to zonal shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#allow_zonal_shift AlbLoadBalancer#allow_zonal_shift}
  */
  readonly allowZonalShift?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#description AlbLoadBalancer#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#folder_id AlbLoadBalancer#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#id AlbLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#labels AlbLoadBalancer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#name AlbLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#network_id AlbLoadBalancer#network_id}
  */
  readonly networkId: string;
  /**
  * The region ID where Load Balancer is located at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#region_id AlbLoadBalancer#region_id}
  */
  readonly regionId?: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#security_group_ids AlbLoadBalancer#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * allocation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#allocation_policy AlbLoadBalancer#allocation_policy}
  */
  readonly allocationPolicy: AlbLoadBalancerAllocationPolicy;
  /**
  * auto_scale_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#auto_scale_policy AlbLoadBalancer#auto_scale_policy}
  */
  readonly autoScalePolicy?: AlbLoadBalancerAutoScalePolicy;
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#listener AlbLoadBalancer#listener}
  */
  readonly listener?: AlbLoadBalancerListener[] | cdktf.IResolvable;
  /**
  * log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#log_options AlbLoadBalancer#log_options}
  */
  readonly logOptions?: AlbLoadBalancerLogOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#timeouts AlbLoadBalancer#timeouts}
  */
  readonly timeouts?: AlbLoadBalancerTimeouts;
}
export interface AlbLoadBalancerAllocationPolicyLocation {
  /**
  * If set, will disable all L7 instances in the zone for request handling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#disable_traffic AlbLoadBalancer#disable_traffic}
  */
  readonly disableTraffic?: boolean | cdktf.IResolvable;
  /**
  * ID of the subnet that location is located at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#subnet_id AlbLoadBalancer#subnet_id}
  */
  readonly subnetId: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#zone_id AlbLoadBalancer#zone_id}
  */
  readonly zoneId: string;
}

export function albLoadBalancerAllocationPolicyLocationToTerraform(struct?: AlbLoadBalancerAllocationPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_traffic: cdktf.booleanToTerraform(struct!.disableTraffic),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function albLoadBalancerAllocationPolicyLocationToHclTerraform(struct?: AlbLoadBalancerAllocationPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerAllocationPolicyLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerAllocationPolicyLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTraffic = this._disableTraffic;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerAllocationPolicyLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableTraffic = undefined;
      this._subnetId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableTraffic = value.disableTraffic;
      this._subnetId = value.subnetId;
      this._zoneId = value.zoneId;
    }
  }

  // disable_traffic - computed: false, optional: true, required: false
  private _disableTraffic?: boolean | cdktf.IResolvable; 
  public get disableTraffic() {
    return this.getBooleanAttribute('disable_traffic');
  }
  public set disableTraffic(value: boolean | cdktf.IResolvable) {
    this._disableTraffic = value;
  }
  public resetDisableTraffic() {
    this._disableTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTrafficInput() {
    return this._disableTraffic;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class AlbLoadBalancerAllocationPolicyLocationList extends cdktf.ComplexList {
  public internalValue? : AlbLoadBalancerAllocationPolicyLocation[] | cdktf.IResolvable

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
  public get(index: number): AlbLoadBalancerAllocationPolicyLocationOutputReference {
    return new AlbLoadBalancerAllocationPolicyLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbLoadBalancerAllocationPolicy {
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#location AlbLoadBalancer#location}
  */
  readonly location: AlbLoadBalancerAllocationPolicyLocation[] | cdktf.IResolvable;
}

export function albLoadBalancerAllocationPolicyToTerraform(struct?: AlbLoadBalancerAllocationPolicyOutputReference | AlbLoadBalancerAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(albLoadBalancerAllocationPolicyLocationToTerraform, true)(struct!.location),
  }
}


export function albLoadBalancerAllocationPolicyToHclTerraform(struct?: AlbLoadBalancerAllocationPolicyOutputReference | AlbLoadBalancerAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.listMapperHcl(albLoadBalancerAllocationPolicyLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "AlbLoadBalancerAllocationPolicyLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location.internalValue = value.location;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location = new AlbLoadBalancerAllocationPolicyLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: AlbLoadBalancerAllocationPolicyLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface AlbLoadBalancerAutoScalePolicy {
  /**
  * Upper limit for total instance count (across all zones)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#max_size AlbLoadBalancer#max_size}
  */
  readonly maxSize?: number;
  /**
  * Lower limit for instance count in each zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#min_zone_size AlbLoadBalancer#min_zone_size}
  */
  readonly minZoneSize?: number;
}

export function albLoadBalancerAutoScalePolicyToTerraform(struct?: AlbLoadBalancerAutoScalePolicyOutputReference | AlbLoadBalancerAutoScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_zone_size: cdktf.numberToTerraform(struct!.minZoneSize),
  }
}


export function albLoadBalancerAutoScalePolicyToHclTerraform(struct?: AlbLoadBalancerAutoScalePolicyOutputReference | AlbLoadBalancerAutoScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_zone_size: {
      value: cdktf.numberToHclTerraform(struct!.minZoneSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerAutoScalePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerAutoScalePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minZoneSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minZoneSize = this._minZoneSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerAutoScalePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSize = undefined;
      this._minZoneSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSize = value.maxSize;
      this._minZoneSize = value.minZoneSize;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_zone_size - computed: false, optional: true, required: false
  private _minZoneSize?: number; 
  public get minZoneSize() {
    return this.getNumberAttribute('min_zone_size');
  }
  public set minZoneSize(value: number) {
    this._minZoneSize = value;
  }
  public resetMinZoneSize() {
    this._minZoneSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minZoneSizeInput() {
    return this._minZoneSize;
  }
}
export interface AlbLoadBalancerListenerEndpointAddressExternalIpv4Address {
  /**
  * Provided by the client or computed automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address?: string;
}

export function albLoadBalancerListenerEndpointAddressExternalIpv4AddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference | AlbLoadBalancerListenerEndpointAddressExternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function albLoadBalancerListenerEndpointAddressExternalIpv4AddressToHclTerraform(struct?: AlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference | AlbLoadBalancerListenerEndpointAddressExternalIpv4Address): any {
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

export class AlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerEndpointAddressExternalIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpointAddressExternalIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
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
export interface AlbLoadBalancerListenerEndpointAddressExternalIpv6Address {
  /**
  * Provided by the client or computed automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address?: string;
}

export function albLoadBalancerListenerEndpointAddressExternalIpv6AddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference | AlbLoadBalancerListenerEndpointAddressExternalIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function albLoadBalancerListenerEndpointAddressExternalIpv6AddressToHclTerraform(struct?: AlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference | AlbLoadBalancerListenerEndpointAddressExternalIpv6Address): any {
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

export class AlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerEndpointAddressExternalIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpointAddressExternalIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
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
export interface AlbLoadBalancerListenerEndpointAddressInternalIpv4Address {
  /**
  * Provided by the client or computed automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address?: string;
  /**
  * ID of the subnet that the address belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#subnet_id AlbLoadBalancer#subnet_id}
  */
  readonly subnetId?: string;
}

export function albLoadBalancerListenerEndpointAddressInternalIpv4AddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference | AlbLoadBalancerListenerEndpointAddressInternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function albLoadBalancerListenerEndpointAddressInternalIpv4AddressToHclTerraform(struct?: AlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference | AlbLoadBalancerListenerEndpointAddressInternalIpv4Address): any {
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
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerEndpointAddressInternalIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpointAddressInternalIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._subnetId = value.subnetId;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface AlbLoadBalancerListenerEndpointAddress {
  /**
  * external_ipv4_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#external_ipv4_address AlbLoadBalancer#external_ipv4_address}
  */
  readonly externalIpv4Address?: AlbLoadBalancerListenerEndpointAddressExternalIpv4Address;
  /**
  * external_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#external_ipv6_address AlbLoadBalancer#external_ipv6_address}
  */
  readonly externalIpv6Address?: AlbLoadBalancerListenerEndpointAddressExternalIpv6Address;
  /**
  * internal_ipv4_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#internal_ipv4_address AlbLoadBalancer#internal_ipv4_address}
  */
  readonly internalIpv4Address?: AlbLoadBalancerListenerEndpointAddressInternalIpv4Address;
}

export function albLoadBalancerListenerEndpointAddressToTerraform(struct?: AlbLoadBalancerListenerEndpointAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ipv4_address: albLoadBalancerListenerEndpointAddressExternalIpv4AddressToTerraform(struct!.externalIpv4Address),
    external_ipv6_address: albLoadBalancerListenerEndpointAddressExternalIpv6AddressToTerraform(struct!.externalIpv6Address),
    internal_ipv4_address: albLoadBalancerListenerEndpointAddressInternalIpv4AddressToTerraform(struct!.internalIpv4Address),
  }
}


export function albLoadBalancerListenerEndpointAddressToHclTerraform(struct?: AlbLoadBalancerListenerEndpointAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ipv4_address: {
      value: albLoadBalancerListenerEndpointAddressExternalIpv4AddressToHclTerraform(struct!.externalIpv4Address),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerEndpointAddressExternalIpv4AddressList",
    },
    external_ipv6_address: {
      value: albLoadBalancerListenerEndpointAddressExternalIpv6AddressToHclTerraform(struct!.externalIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerEndpointAddressExternalIpv6AddressList",
    },
    internal_ipv4_address: {
      value: albLoadBalancerListenerEndpointAddressInternalIpv4AddressToHclTerraform(struct!.internalIpv4Address),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerEndpointAddressInternalIpv4AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerEndpointAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerListenerEndpointAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIpv4Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv4Address = this._externalIpv4Address?.internalValue;
    }
    if (this._externalIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6Address = this._externalIpv6Address?.internalValue;
    }
    if (this._internalIpv4Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpv4Address = this._internalIpv4Address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpointAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIpv4Address.internalValue = undefined;
      this._externalIpv6Address.internalValue = undefined;
      this._internalIpv4Address.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIpv4Address.internalValue = value.externalIpv4Address;
      this._externalIpv6Address.internalValue = value.externalIpv6Address;
      this._internalIpv4Address.internalValue = value.internalIpv4Address;
    }
  }

  // external_ipv4_address - computed: false, optional: true, required: false
  private _externalIpv4Address = new AlbLoadBalancerListenerEndpointAddressExternalIpv4AddressOutputReference(this, "external_ipv4_address");
  public get externalIpv4Address() {
    return this._externalIpv4Address;
  }
  public putExternalIpv4Address(value: AlbLoadBalancerListenerEndpointAddressExternalIpv4Address) {
    this._externalIpv4Address.internalValue = value;
  }
  public resetExternalIpv4Address() {
    this._externalIpv4Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv4AddressInput() {
    return this._externalIpv4Address.internalValue;
  }

  // external_ipv6_address - computed: false, optional: true, required: false
  private _externalIpv6Address = new AlbLoadBalancerListenerEndpointAddressExternalIpv6AddressOutputReference(this, "external_ipv6_address");
  public get externalIpv6Address() {
    return this._externalIpv6Address;
  }
  public putExternalIpv6Address(value: AlbLoadBalancerListenerEndpointAddressExternalIpv6Address) {
    this._externalIpv6Address.internalValue = value;
  }
  public resetExternalIpv6Address() {
    this._externalIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6AddressInput() {
    return this._externalIpv6Address.internalValue;
  }

  // internal_ipv4_address - computed: false, optional: true, required: false
  private _internalIpv4Address = new AlbLoadBalancerListenerEndpointAddressInternalIpv4AddressOutputReference(this, "internal_ipv4_address");
  public get internalIpv4Address() {
    return this._internalIpv4Address;
  }
  public putInternalIpv4Address(value: AlbLoadBalancerListenerEndpointAddressInternalIpv4Address) {
    this._internalIpv4Address.internalValue = value;
  }
  public resetInternalIpv4Address() {
    this._internalIpv4Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpv4AddressInput() {
    return this._internalIpv4Address.internalValue;
  }
}

export class AlbLoadBalancerListenerEndpointAddressList extends cdktf.ComplexList {
  public internalValue? : AlbLoadBalancerListenerEndpointAddress[] | cdktf.IResolvable

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
  public get(index: number): AlbLoadBalancerListenerEndpointAddressOutputReference {
    return new AlbLoadBalancerListenerEndpointAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbLoadBalancerListenerEndpoint {
  /**
  * One or more ports to listen on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#ports AlbLoadBalancer#ports}
  */
  readonly ports: number[];
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#address AlbLoadBalancer#address}
  */
  readonly address: AlbLoadBalancerListenerEndpointAddress[] | cdktf.IResolvable;
}

export function albLoadBalancerListenerEndpointToTerraform(struct?: AlbLoadBalancerListenerEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    address: cdktf.listMapper(albLoadBalancerListenerEndpointAddressToTerraform, true)(struct!.address),
  }
}


export function albLoadBalancerListenerEndpointToHclTerraform(struct?: AlbLoadBalancerListenerEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    address: {
      value: cdktf.listMapperHcl(albLoadBalancerListenerEndpointAddressToHclTerraform, true)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerEndpointAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerListenerEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports = undefined;
      this._address.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports = value.ports;
      this._address.internalValue = value.address;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // address - computed: false, optional: false, required: true
  private _address = new AlbLoadBalancerListenerEndpointAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: AlbLoadBalancerListenerEndpointAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }
}

export class AlbLoadBalancerListenerEndpointList extends cdktf.ComplexList {
  public internalValue? : AlbLoadBalancerListenerEndpoint[] | cdktf.IResolvable

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
  public get(index: number): AlbLoadBalancerListenerEndpointOutputReference {
    return new AlbLoadBalancerListenerEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbLoadBalancerListenerHttpHandlerHttp2Options {
  /**
  * Maximum number of concurrent streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#max_concurrent_streams AlbLoadBalancer#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
}

export function albLoadBalancerListenerHttpHandlerHttp2OptionsToTerraform(struct?: AlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
  }
}


export function albLoadBalancerListenerHttpHandlerHttp2OptionsToHclTerraform(struct?: AlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentStreams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
    }
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }
}
export interface AlbLoadBalancerListenerHttpHandler {
  /**
  * If set, will enable only HTTP1 protocol with HTTP1.0 support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#allow_http10 AlbLoadBalancer#allow_http10}
  */
  readonly allowHttp10?: boolean | cdktf.IResolvable;
  /**
  * HTTP router id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_router_id AlbLoadBalancer#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * When unset, will preserve the incoming `x-request-id` header, otherwise would rewrite it with a new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#rewrite_request_id AlbLoadBalancer#rewrite_request_id}
  */
  readonly rewriteRequestId?: boolean | cdktf.IResolvable;
  /**
  * http2_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http2_options AlbLoadBalancer#http2_options}
  */
  readonly http2Options?: AlbLoadBalancerListenerHttpHandlerHttp2Options;
}

export function albLoadBalancerListenerHttpHandlerToTerraform(struct?: AlbLoadBalancerListenerHttpHandlerOutputReference | AlbLoadBalancerListenerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http10: cdktf.booleanToTerraform(struct!.allowHttp10),
    http_router_id: cdktf.stringToTerraform(struct!.httpRouterId),
    rewrite_request_id: cdktf.booleanToTerraform(struct!.rewriteRequestId),
    http2_options: albLoadBalancerListenerHttpHandlerHttp2OptionsToTerraform(struct!.http2Options),
  }
}


export function albLoadBalancerListenerHttpHandlerToHclTerraform(struct?: AlbLoadBalancerListenerHttpHandlerOutputReference | AlbLoadBalancerListenerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_http10: {
      value: cdktf.booleanToHclTerraform(struct!.allowHttp10),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_router_id: {
      value: cdktf.stringToHclTerraform(struct!.httpRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_request_id: {
      value: cdktf.booleanToHclTerraform(struct!.rewriteRequestId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2_options: {
      value: albLoadBalancerListenerHttpHandlerHttp2OptionsToHclTerraform(struct!.http2Options),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerHttpHandlerHttp2OptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttp10 = this._allowHttp10;
    }
    if (this._httpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouterId = this._httpRouterId;
    }
    if (this._rewriteRequestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteRequestId = this._rewriteRequestId;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttp10 = undefined;
      this._httpRouterId = undefined;
      this._rewriteRequestId = undefined;
      this._http2Options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttp10 = value.allowHttp10;
      this._httpRouterId = value.httpRouterId;
      this._rewriteRequestId = value.rewriteRequestId;
      this._http2Options.internalValue = value.http2Options;
    }
  }

  // allow_http10 - computed: false, optional: true, required: false
  private _allowHttp10?: boolean | cdktf.IResolvable; 
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }
  public set allowHttp10(value: boolean | cdktf.IResolvable) {
    this._allowHttp10 = value;
  }
  public resetAllowHttp10() {
    this._allowHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttp10Input() {
    return this._allowHttp10;
  }

  // http_router_id - computed: false, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
  }

  // rewrite_request_id - computed: false, optional: true, required: false
  private _rewriteRequestId?: boolean | cdktf.IResolvable; 
  public get rewriteRequestId() {
    return this.getBooleanAttribute('rewrite_request_id');
  }
  public set rewriteRequestId(value: boolean | cdktf.IResolvable) {
    this._rewriteRequestId = value;
  }
  public resetRewriteRequestId() {
    this._rewriteRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRequestIdInput() {
    return this._rewriteRequestId;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new AlbLoadBalancerListenerHttpHandlerHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: AlbLoadBalancerListenerHttpHandlerHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }
}
export interface AlbLoadBalancerListenerHttpRedirects {
  /**
  * If set redirects all unencrypted HTTP requests to the same URI with scheme changed to `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_to_https AlbLoadBalancer#http_to_https}
  */
  readonly httpToHttps?: boolean | cdktf.IResolvable;
}

export function albLoadBalancerListenerHttpRedirectsToTerraform(struct?: AlbLoadBalancerListenerHttpRedirectsOutputReference | AlbLoadBalancerListenerHttpRedirects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_to_https: cdktf.booleanToTerraform(struct!.httpToHttps),
  }
}


export function albLoadBalancerListenerHttpRedirectsToHclTerraform(struct?: AlbLoadBalancerListenerHttpRedirectsOutputReference | AlbLoadBalancerListenerHttpRedirects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_to_https: {
      value: cdktf.booleanToHclTerraform(struct!.httpToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerHttpRedirectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttpRedirects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpToHttps = this._httpToHttps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttpRedirects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpToHttps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpToHttps = value.httpToHttps;
    }
  }

  // http_to_https - computed: false, optional: true, required: false
  private _httpToHttps?: boolean | cdktf.IResolvable; 
  public get httpToHttps() {
    return this.getBooleanAttribute('http_to_https');
  }
  public set httpToHttps(value: boolean | cdktf.IResolvable) {
    this._httpToHttps = value;
  }
  public resetHttpToHttps() {
    this._httpToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpToHttpsInput() {
    return this._httpToHttps;
  }
}
export interface AlbLoadBalancerListenerHttp {
  /**
  * handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#handler AlbLoadBalancer#handler}
  */
  readonly handler?: AlbLoadBalancerListenerHttpHandler;
  /**
  * redirects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#redirects AlbLoadBalancer#redirects}
  */
  readonly redirects?: AlbLoadBalancerListenerHttpRedirects;
}

export function albLoadBalancerListenerHttpToTerraform(struct?: AlbLoadBalancerListenerHttpOutputReference | AlbLoadBalancerListenerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: albLoadBalancerListenerHttpHandlerToTerraform(struct!.handler),
    redirects: albLoadBalancerListenerHttpRedirectsToTerraform(struct!.redirects),
  }
}


export function albLoadBalancerListenerHttpToHclTerraform(struct?: AlbLoadBalancerListenerHttpOutputReference | AlbLoadBalancerListenerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handler: {
      value: albLoadBalancerListenerHttpHandlerToHclTerraform(struct!.handler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerHttpHandlerList",
    },
    redirects: {
      value: albLoadBalancerListenerHttpRedirectsToHclTerraform(struct!.redirects),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerHttpRedirectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler?.internalValue;
    }
    if (this._redirects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirects = this._redirects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler.internalValue = undefined;
      this._redirects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler.internalValue = value.handler;
      this._redirects.internalValue = value.redirects;
    }
  }

  // handler - computed: false, optional: true, required: false
  private _handler = new AlbLoadBalancerListenerHttpHandlerOutputReference(this, "handler");
  public get handler() {
    return this._handler;
  }
  public putHandler(value: AlbLoadBalancerListenerHttpHandler) {
    this._handler.internalValue = value;
  }
  public resetHandler() {
    this._handler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler.internalValue;
  }

  // redirects - computed: false, optional: true, required: false
  private _redirects = new AlbLoadBalancerListenerHttpRedirectsOutputReference(this, "redirects");
  public get redirects() {
    return this._redirects;
  }
  public putRedirects(value: AlbLoadBalancerListenerHttpRedirects) {
    this._redirects.internalValue = value;
  }
  public resetRedirects() {
    this._redirects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectsInput() {
    return this._redirects.internalValue;
  }
}
export interface AlbLoadBalancerListenerStreamHandler {
  /**
  * Backend Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#backend_group_id AlbLoadBalancer#backend_group_id}
  */
  readonly backendGroupId?: string;
  /**
  * The idle timeout is the interval after which the connection will be forcibly closed if no data has been transmitted or received on either the upstream or downstream connection. If not configured, the default idle timeout is 1 hour. Setting it to 0 disables the timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#idle_timeout AlbLoadBalancer#idle_timeout}
  */
  readonly idleTimeout?: string;
}

export function albLoadBalancerListenerStreamHandlerToTerraform(struct?: AlbLoadBalancerListenerStreamHandlerOutputReference | AlbLoadBalancerListenerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function albLoadBalancerListenerStreamHandlerToHclTerraform(struct?: AlbLoadBalancerListenerStreamHandlerOutputReference | AlbLoadBalancerListenerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_group_id: {
      value: cdktf.stringToHclTerraform(struct!.backendGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendGroupId = undefined;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendGroupId = value.backendGroupId;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // backend_group_id - computed: false, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface AlbLoadBalancerListenerStream {
  /**
  * handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#handler AlbLoadBalancer#handler}
  */
  readonly handler?: AlbLoadBalancerListenerStreamHandler;
}

export function albLoadBalancerListenerStreamToTerraform(struct?: AlbLoadBalancerListenerStreamOutputReference | AlbLoadBalancerListenerStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: albLoadBalancerListenerStreamHandlerToTerraform(struct!.handler),
  }
}


export function albLoadBalancerListenerStreamToHclTerraform(struct?: AlbLoadBalancerListenerStreamOutputReference | AlbLoadBalancerListenerStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handler: {
      value: albLoadBalancerListenerStreamHandlerToHclTerraform(struct!.handler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerStreamHandlerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler.internalValue = value.handler;
    }
  }

  // handler - computed: false, optional: true, required: false
  private _handler = new AlbLoadBalancerListenerStreamHandlerOutputReference(this, "handler");
  public get handler() {
    return this._handler;
  }
  public putHandler(value: AlbLoadBalancerListenerStreamHandler) {
    this._handler.internalValue = value;
  }
  public resetHandler() {
    this._handler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options {
  /**
  * Maximum number of concurrent streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#max_concurrent_streams AlbLoadBalancer#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
}

export function albLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
  }
}


export function albLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsToHclTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentStreams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
    }
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler {
  /**
  * If set, will enable only HTTP1 protocol with HTTP1.0 support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#allow_http10 AlbLoadBalancer#allow_http10}
  */
  readonly allowHttp10?: boolean | cdktf.IResolvable;
  /**
  * HTTP router id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_router_id AlbLoadBalancer#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * When unset, will preserve the incoming `x-request-id` header, otherwise would rewrite it with a new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#rewrite_request_id AlbLoadBalancer#rewrite_request_id}
  */
  readonly rewriteRequestId?: boolean | cdktf.IResolvable;
  /**
  * http2_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http2_options AlbLoadBalancer#http2_options}
  */
  readonly http2Options?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options;
}

export function albLoadBalancerListenerTlsDefaultHandlerHttpHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http10: cdktf.booleanToTerraform(struct!.allowHttp10),
    http_router_id: cdktf.stringToTerraform(struct!.httpRouterId),
    rewrite_request_id: cdktf.booleanToTerraform(struct!.rewriteRequestId),
    http2_options: albLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsToTerraform(struct!.http2Options),
  }
}


export function albLoadBalancerListenerTlsDefaultHandlerHttpHandlerToHclTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_http10: {
      value: cdktf.booleanToHclTerraform(struct!.allowHttp10),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_router_id: {
      value: cdktf.stringToHclTerraform(struct!.httpRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_request_id: {
      value: cdktf.booleanToHclTerraform(struct!.rewriteRequestId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2_options: {
      value: albLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsToHclTerraform(struct!.http2Options),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttp10 = this._allowHttp10;
    }
    if (this._httpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouterId = this._httpRouterId;
    }
    if (this._rewriteRequestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteRequestId = this._rewriteRequestId;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttp10 = undefined;
      this._httpRouterId = undefined;
      this._rewriteRequestId = undefined;
      this._http2Options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttp10 = value.allowHttp10;
      this._httpRouterId = value.httpRouterId;
      this._rewriteRequestId = value.rewriteRequestId;
      this._http2Options.internalValue = value.http2Options;
    }
  }

  // allow_http10 - computed: false, optional: true, required: false
  private _allowHttp10?: boolean | cdktf.IResolvable; 
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }
  public set allowHttp10(value: boolean | cdktf.IResolvable) {
    this._allowHttp10 = value;
  }
  public resetAllowHttp10() {
    this._allowHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttp10Input() {
    return this._allowHttp10;
  }

  // http_router_id - computed: false, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
  }

  // rewrite_request_id - computed: false, optional: true, required: false
  private _rewriteRequestId?: boolean | cdktf.IResolvable; 
  public get rewriteRequestId() {
    return this.getBooleanAttribute('rewrite_request_id');
  }
  public set rewriteRequestId(value: boolean | cdktf.IResolvable) {
    this._rewriteRequestId = value;
  }
  public resetRewriteRequestId() {
    this._rewriteRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRequestIdInput() {
    return this._rewriteRequestId;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler {
  /**
  * Backend Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#backend_group_id AlbLoadBalancer#backend_group_id}
  */
  readonly backendGroupId?: string;
  /**
  * The idle timeout is the interval after which the connection will be forcibly closed if no data has been transmitted or received on either the upstream or downstream connection. If not configured, the default idle timeout is 1 hour. Setting it to 0 disables the timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#idle_timeout AlbLoadBalancer#idle_timeout}
  */
  readonly idleTimeout?: string;
}

export function albLoadBalancerListenerTlsDefaultHandlerStreamHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function albLoadBalancerListenerTlsDefaultHandlerStreamHandlerToHclTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_group_id: {
      value: cdktf.stringToHclTerraform(struct!.backendGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendGroupId = undefined;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendGroupId = value.backendGroupId;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // backend_group_id - computed: false, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface AlbLoadBalancerListenerTlsDefaultHandler {
  /**
  * Certificate IDs in the Certificate Manager. Multiple TLS certificates can be associated with the same context to allow both RSA and ECDSA certificates. Only the first certificate of each type will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#certificate_ids AlbLoadBalancer#certificate_ids}
  */
  readonly certificateIds: string[];
  /**
  * http_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_handler AlbLoadBalancer#http_handler}
  */
  readonly httpHandler?: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler;
  /**
  * stream_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#stream_handler AlbLoadBalancer#stream_handler}
  */
  readonly streamHandler?: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler;
}

export function albLoadBalancerListenerTlsDefaultHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
    http_handler: albLoadBalancerListenerTlsDefaultHandlerHttpHandlerToTerraform(struct!.httpHandler),
    stream_handler: albLoadBalancerListenerTlsDefaultHandlerStreamHandlerToTerraform(struct!.streamHandler),
  }
}


export function albLoadBalancerListenerTlsDefaultHandlerToHclTerraform(struct?: AlbLoadBalancerListenerTlsDefaultHandlerOutputReference | AlbLoadBalancerListenerTlsDefaultHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    http_handler: {
      value: albLoadBalancerListenerTlsDefaultHandlerHttpHandlerToHclTerraform(struct!.httpHandler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerList",
    },
    stream_handler: {
      value: albLoadBalancerListenerTlsDefaultHandlerStreamHandlerToHclTerraform(struct!.streamHandler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsDefaultHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsDefaultHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._httpHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHandler = this._httpHandler?.internalValue;
    }
    if (this._streamHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHandler = this._streamHandler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsDefaultHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._httpHandler.internalValue = undefined;
      this._streamHandler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._httpHandler.internalValue = value.httpHandler;
      this._streamHandler.internalValue = value.streamHandler;
    }
  }

  // certificate_ids - computed: false, optional: false, required: true
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // http_handler - computed: false, optional: true, required: false
  private _httpHandler = new AlbLoadBalancerListenerTlsDefaultHandlerHttpHandlerOutputReference(this, "http_handler");
  public get httpHandler() {
    return this._httpHandler;
  }
  public putHttpHandler(value: AlbLoadBalancerListenerTlsDefaultHandlerHttpHandler) {
    this._httpHandler.internalValue = value;
  }
  public resetHttpHandler() {
    this._httpHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHandlerInput() {
    return this._httpHandler.internalValue;
  }

  // stream_handler - computed: false, optional: true, required: false
  private _streamHandler = new AlbLoadBalancerListenerTlsDefaultHandlerStreamHandlerOutputReference(this, "stream_handler");
  public get streamHandler() {
    return this._streamHandler;
  }
  public putStreamHandler(value: AlbLoadBalancerListenerTlsDefaultHandlerStreamHandler) {
    this._streamHandler.internalValue = value;
  }
  public resetStreamHandler() {
    this._streamHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHandlerInput() {
    return this._streamHandler.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options {
  /**
  * Maximum number of concurrent streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#max_concurrent_streams AlbLoadBalancer#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
  }
}


export function albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsToHclTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentStreams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
    }
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler {
  /**
  * If set, will enable only HTTP1 protocol with HTTP1.0 support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#allow_http10 AlbLoadBalancer#allow_http10}
  */
  readonly allowHttp10?: boolean | cdktf.IResolvable;
  /**
  * HTTP router id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_router_id AlbLoadBalancer#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * When unset, will preserve the incoming `x-request-id` header, otherwise would rewrite it with a new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#rewrite_request_id AlbLoadBalancer#rewrite_request_id}
  */
  readonly rewriteRequestId?: boolean | cdktf.IResolvable;
  /**
  * http2_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http2_options AlbLoadBalancer#http2_options}
  */
  readonly http2Options?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http10: cdktf.booleanToTerraform(struct!.allowHttp10),
    http_router_id: cdktf.stringToTerraform(struct!.httpRouterId),
    rewrite_request_id: cdktf.booleanToTerraform(struct!.rewriteRequestId),
    http2_options: albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsToTerraform(struct!.http2Options),
  }
}


export function albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerToHclTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_http10: {
      value: cdktf.booleanToHclTerraform(struct!.allowHttp10),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_router_id: {
      value: cdktf.stringToHclTerraform(struct!.httpRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_request_id: {
      value: cdktf.booleanToHclTerraform(struct!.rewriteRequestId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2_options: {
      value: albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsToHclTerraform(struct!.http2Options),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttp10 = this._allowHttp10;
    }
    if (this._httpRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouterId = this._httpRouterId;
    }
    if (this._rewriteRequestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteRequestId = this._rewriteRequestId;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttp10 = undefined;
      this._httpRouterId = undefined;
      this._rewriteRequestId = undefined;
      this._http2Options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttp10 = value.allowHttp10;
      this._httpRouterId = value.httpRouterId;
      this._rewriteRequestId = value.rewriteRequestId;
      this._http2Options.internalValue = value.http2Options;
    }
  }

  // allow_http10 - computed: false, optional: true, required: false
  private _allowHttp10?: boolean | cdktf.IResolvable; 
  public get allowHttp10() {
    return this.getBooleanAttribute('allow_http10');
  }
  public set allowHttp10(value: boolean | cdktf.IResolvable) {
    this._allowHttp10 = value;
  }
  public resetAllowHttp10() {
    this._allowHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttp10Input() {
    return this._allowHttp10;
  }

  // http_router_id - computed: false, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
  }

  // rewrite_request_id - computed: false, optional: true, required: false
  private _rewriteRequestId?: boolean | cdktf.IResolvable; 
  public get rewriteRequestId() {
    return this.getBooleanAttribute('rewrite_request_id');
  }
  public set rewriteRequestId(value: boolean | cdktf.IResolvable) {
    this._rewriteRequestId = value;
  }
  public resetRewriteRequestId() {
    this._rewriteRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRequestIdInput() {
    return this._rewriteRequestId;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler {
  /**
  * Backend Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#backend_group_id AlbLoadBalancer#backend_group_id}
  */
  readonly backendGroupId?: string;
  /**
  * The idle timeout is the interval after which the connection will be forcibly closed if no data has been transmitted or received on either the upstream or downstream connection. If not configured, the default idle timeout is 1 hour. Setting it to 0 disables the timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#idle_timeout AlbLoadBalancer#idle_timeout}
  */
  readonly idleTimeout?: string;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_group_id: cdktf.stringToTerraform(struct!.backendGroupId),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function albLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerToHclTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_group_id: {
      value: cdktf.stringToHclTerraform(struct!.backendGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroupId = this._backendGroupId;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendGroupId = undefined;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendGroupId = value.backendGroupId;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // backend_group_id - computed: false, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandlerHandler {
  /**
  * Certificate IDs in the Certificate Manager. Multiple TLS certificates can be associated with the same context to allow both RSA and ECDSA certificates. Only the first certificate of each type will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#certificate_ids AlbLoadBalancer#certificate_ids}
  */
  readonly certificateIds: string[];
  /**
  * http_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_handler AlbLoadBalancer#http_handler}
  */
  readonly httpHandler?: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler;
  /**
  * stream_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#stream_handler AlbLoadBalancer#stream_handler}
  */
  readonly streamHandler?: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler;
}

export function albLoadBalancerListenerTlsSniHandlerHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
    http_handler: albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerToTerraform(struct!.httpHandler),
    stream_handler: albLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerToTerraform(struct!.streamHandler),
  }
}


export function albLoadBalancerListenerTlsSniHandlerHandlerToHclTerraform(struct?: AlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference | AlbLoadBalancerListenerTlsSniHandlerHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    http_handler: {
      value: albLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerToHclTerraform(struct!.httpHandler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerList",
    },
    stream_handler: {
      value: albLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerToHclTerraform(struct!.streamHandler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandlerHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._httpHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHandler = this._httpHandler?.internalValue;
    }
    if (this._streamHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHandler = this._streamHandler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandlerHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._httpHandler.internalValue = undefined;
      this._streamHandler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._httpHandler.internalValue = value.httpHandler;
      this._streamHandler.internalValue = value.streamHandler;
    }
  }

  // certificate_ids - computed: false, optional: false, required: true
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // http_handler - computed: false, optional: true, required: false
  private _httpHandler = new AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandlerOutputReference(this, "http_handler");
  public get httpHandler() {
    return this._httpHandler;
  }
  public putHttpHandler(value: AlbLoadBalancerListenerTlsSniHandlerHandlerHttpHandler) {
    this._httpHandler.internalValue = value;
  }
  public resetHttpHandler() {
    this._httpHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHandlerInput() {
    return this._httpHandler.internalValue;
  }

  // stream_handler - computed: false, optional: true, required: false
  private _streamHandler = new AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandlerOutputReference(this, "stream_handler");
  public get streamHandler() {
    return this._streamHandler;
  }
  public putStreamHandler(value: AlbLoadBalancerListenerTlsSniHandlerHandlerStreamHandler) {
    this._streamHandler.internalValue = value;
  }
  public resetStreamHandler() {
    this._streamHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHandlerInput() {
    return this._streamHandler.internalValue;
  }
}
export interface AlbLoadBalancerListenerTlsSniHandler {
  /**
  * Name of the SNI handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#name AlbLoadBalancer#name}
  */
  readonly name: string;
  /**
  * Server names that are matched by the SNI handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#server_names AlbLoadBalancer#server_names}
  */
  readonly serverNames: string[];
  /**
  * handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#handler AlbLoadBalancer#handler}
  */
  readonly handler: AlbLoadBalancerListenerTlsSniHandlerHandler;
}

export function albLoadBalancerListenerTlsSniHandlerToTerraform(struct?: AlbLoadBalancerListenerTlsSniHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    server_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverNames),
    handler: albLoadBalancerListenerTlsSniHandlerHandlerToTerraform(struct!.handler),
  }
}


export function albLoadBalancerListenerTlsSniHandlerToHclTerraform(struct?: AlbLoadBalancerListenerTlsSniHandler | cdktf.IResolvable): any {
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
    server_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    handler: {
      value: albLoadBalancerListenerTlsSniHandlerHandlerToHclTerraform(struct!.handler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsSniHandlerHandlerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsSniHandlerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerListenerTlsSniHandler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames;
    }
    if (this._handler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTlsSniHandler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serverNames = undefined;
      this._handler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serverNames = value.serverNames;
      this._handler.internalValue = value.handler;
    }
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

  // server_names - computed: false, optional: false, required: true
  private _serverNames?: string[]; 
  public get serverNames() {
    return cdktf.Fn.tolist(this.getListAttribute('server_names'));
  }
  public set serverNames(value: string[]) {
    this._serverNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames;
  }

  // handler - computed: false, optional: false, required: true
  private _handler = new AlbLoadBalancerListenerTlsSniHandlerHandlerOutputReference(this, "handler");
  public get handler() {
    return this._handler;
  }
  public putHandler(value: AlbLoadBalancerListenerTlsSniHandlerHandler) {
    this._handler.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler.internalValue;
  }
}

export class AlbLoadBalancerListenerTlsSniHandlerList extends cdktf.ComplexList {
  public internalValue? : AlbLoadBalancerListenerTlsSniHandler[] | cdktf.IResolvable

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
  public get(index: number): AlbLoadBalancerListenerTlsSniHandlerOutputReference {
    return new AlbLoadBalancerListenerTlsSniHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbLoadBalancerListenerTls {
  /**
  * default_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#default_handler AlbLoadBalancer#default_handler}
  */
  readonly defaultHandler: AlbLoadBalancerListenerTlsDefaultHandler;
  /**
  * sni_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#sni_handler AlbLoadBalancer#sni_handler}
  */
  readonly sniHandler?: AlbLoadBalancerListenerTlsSniHandler[] | cdktf.IResolvable;
}

export function albLoadBalancerListenerTlsToTerraform(struct?: AlbLoadBalancerListenerTlsOutputReference | AlbLoadBalancerListenerTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_handler: albLoadBalancerListenerTlsDefaultHandlerToTerraform(struct!.defaultHandler),
    sni_handler: cdktf.listMapper(albLoadBalancerListenerTlsSniHandlerToTerraform, true)(struct!.sniHandler),
  }
}


export function albLoadBalancerListenerTlsToHclTerraform(struct?: AlbLoadBalancerListenerTlsOutputReference | AlbLoadBalancerListenerTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_handler: {
      value: albLoadBalancerListenerTlsDefaultHandlerToHclTerraform(struct!.defaultHandler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsDefaultHandlerList",
    },
    sni_handler: {
      value: cdktf.listMapperHcl(albLoadBalancerListenerTlsSniHandlerToHclTerraform, true)(struct!.sniHandler),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsSniHandlerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerListenerTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHandler = this._defaultHandler?.internalValue;
    }
    if (this._sniHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniHandler = this._sniHandler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListenerTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHandler.internalValue = undefined;
      this._sniHandler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHandler.internalValue = value.defaultHandler;
      this._sniHandler.internalValue = value.sniHandler;
    }
  }

  // default_handler - computed: false, optional: false, required: true
  private _defaultHandler = new AlbLoadBalancerListenerTlsDefaultHandlerOutputReference(this, "default_handler");
  public get defaultHandler() {
    return this._defaultHandler;
  }
  public putDefaultHandler(value: AlbLoadBalancerListenerTlsDefaultHandler) {
    this._defaultHandler.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHandlerInput() {
    return this._defaultHandler.internalValue;
  }

  // sni_handler - computed: false, optional: true, required: false
  private _sniHandler = new AlbLoadBalancerListenerTlsSniHandlerList(this, "sni_handler", false);
  public get sniHandler() {
    return this._sniHandler;
  }
  public putSniHandler(value: AlbLoadBalancerListenerTlsSniHandler[] | cdktf.IResolvable) {
    this._sniHandler.internalValue = value;
  }
  public resetSniHandler() {
    this._sniHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHandlerInput() {
    return this._sniHandler.internalValue;
  }
}
export interface AlbLoadBalancerListener {
  /**
  * Name of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#name AlbLoadBalancer#name}
  */
  readonly name: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#endpoint AlbLoadBalancer#endpoint}
  */
  readonly endpoint?: AlbLoadBalancerListenerEndpoint[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http AlbLoadBalancer#http}
  */
  readonly http?: AlbLoadBalancerListenerHttp;
  /**
  * stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#stream AlbLoadBalancer#stream}
  */
  readonly stream?: AlbLoadBalancerListenerStream;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#tls AlbLoadBalancer#tls}
  */
  readonly tls?: AlbLoadBalancerListenerTls;
}

export function albLoadBalancerListenerToTerraform(struct?: AlbLoadBalancerListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    endpoint: cdktf.listMapper(albLoadBalancerListenerEndpointToTerraform, true)(struct!.endpoint),
    http: albLoadBalancerListenerHttpToTerraform(struct!.http),
    stream: albLoadBalancerListenerStreamToTerraform(struct!.stream),
    tls: albLoadBalancerListenerTlsToTerraform(struct!.tls),
  }
}


export function albLoadBalancerListenerToHclTerraform(struct?: AlbLoadBalancerListener | cdktf.IResolvable): any {
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
    endpoint: {
      value: cdktf.listMapperHcl(albLoadBalancerListenerEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerEndpointList",
    },
    http: {
      value: albLoadBalancerListenerHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerHttpList",
    },
    stream: {
      value: albLoadBalancerListenerStreamToHclTerraform(struct!.stream),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerStreamList",
    },
    tls: {
      value: albLoadBalancerListenerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerListenerTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerListenerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._stream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._endpoint.internalValue = undefined;
      this._http.internalValue = undefined;
      this._stream.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._endpoint.internalValue = value.endpoint;
      this._http.internalValue = value.http;
      this._stream.internalValue = value.stream;
      this._tls.internalValue = value.tls;
    }
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new AlbLoadBalancerListenerEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: AlbLoadBalancerListenerEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new AlbLoadBalancerListenerHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: AlbLoadBalancerListenerHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // stream - computed: false, optional: true, required: false
  private _stream = new AlbLoadBalancerListenerStreamOutputReference(this, "stream");
  public get stream() {
    return this._stream;
  }
  public putStream(value: AlbLoadBalancerListenerStream) {
    this._stream.internalValue = value;
  }
  public resetStream() {
    this._stream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new AlbLoadBalancerListenerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AlbLoadBalancerListenerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class AlbLoadBalancerListenerList extends cdktf.ComplexList {
  public internalValue? : AlbLoadBalancerListener[] | cdktf.IResolvable

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
  public get(index: number): AlbLoadBalancerListenerOutputReference {
    return new AlbLoadBalancerListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbLoadBalancerLogOptionsDiscardRule {
  /**
  * The percent of logs which will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#discard_percent AlbLoadBalancer#discard_percent}
  */
  readonly discardPercent?: number;
  /**
  * list of grpc codes by name, e.g, [**NOT_FOUND**, **RESOURCE_EXHAUSTED**].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#grpc_codes AlbLoadBalancer#grpc_codes}
  */
  readonly grpcCodes?: string[];
  /**
  * List of http code intervals *1XX*-*5XX* or *ALL*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_code_intervals AlbLoadBalancer#http_code_intervals}
  */
  readonly httpCodeIntervals?: string[];
  /**
  * List of http codes *100*-*599*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#http_codes AlbLoadBalancer#http_codes}
  */
  readonly httpCodes?: number[];
}

export function albLoadBalancerLogOptionsDiscardRuleToTerraform(struct?: AlbLoadBalancerLogOptionsDiscardRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard_percent: cdktf.numberToTerraform(struct!.discardPercent),
    grpc_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grpcCodes),
    http_code_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodeIntervals),
    http_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpCodes),
  }
}


export function albLoadBalancerLogOptionsDiscardRuleToHclTerraform(struct?: AlbLoadBalancerLogOptionsDiscardRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard_percent: {
      value: cdktf.numberToHclTerraform(struct!.discardPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grpcCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_code_intervals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodeIntervals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerLogOptionsDiscardRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerLogOptionsDiscardRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discardPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.discardPercent = this._discardPercent;
    }
    if (this._grpcCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcCodes = this._grpcCodes;
    }
    if (this._httpCodeIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodeIntervals = this._httpCodeIntervals;
    }
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerLogOptionsDiscardRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discardPercent = undefined;
      this._grpcCodes = undefined;
      this._httpCodeIntervals = undefined;
      this._httpCodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discardPercent = value.discardPercent;
      this._grpcCodes = value.grpcCodes;
      this._httpCodeIntervals = value.httpCodeIntervals;
      this._httpCodes = value.httpCodes;
    }
  }

  // discard_percent - computed: false, optional: true, required: false
  private _discardPercent?: number; 
  public get discardPercent() {
    return this.getNumberAttribute('discard_percent');
  }
  public set discardPercent(value: number) {
    this._discardPercent = value;
  }
  public resetDiscardPercent() {
    this._discardPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardPercentInput() {
    return this._discardPercent;
  }

  // grpc_codes - computed: false, optional: true, required: false
  private _grpcCodes?: string[]; 
  public get grpcCodes() {
    return this.getListAttribute('grpc_codes');
  }
  public set grpcCodes(value: string[]) {
    this._grpcCodes = value;
  }
  public resetGrpcCodes() {
    this._grpcCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcCodesInput() {
    return this._grpcCodes;
  }

  // http_code_intervals - computed: false, optional: true, required: false
  private _httpCodeIntervals?: string[]; 
  public get httpCodeIntervals() {
    return this.getListAttribute('http_code_intervals');
  }
  public set httpCodeIntervals(value: string[]) {
    this._httpCodeIntervals = value;
  }
  public resetHttpCodeIntervals() {
    this._httpCodeIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeIntervalsInput() {
    return this._httpCodeIntervals;
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: number[]; 
  public get httpCodes() {
    return this.getNumberListAttribute('http_codes');
  }
  public set httpCodes(value: number[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }
}

export class AlbLoadBalancerLogOptionsDiscardRuleList extends cdktf.ComplexList {
  public internalValue? : AlbLoadBalancerLogOptionsDiscardRule[] | cdktf.IResolvable

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
  public get(index: number): AlbLoadBalancerLogOptionsDiscardRuleOutputReference {
    return new AlbLoadBalancerLogOptionsDiscardRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbLoadBalancerLogOptions {
  /**
  * Set to `true` to disable Cloud Logging for the balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#disable AlbLoadBalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Cloud Logging group ID to send logs to. Leave empty to use the balancer folder default log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#log_group_id AlbLoadBalancer#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * discard_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#discard_rule AlbLoadBalancer#discard_rule}
  */
  readonly discardRule?: AlbLoadBalancerLogOptionsDiscardRule[] | cdktf.IResolvable;
}

export function albLoadBalancerLogOptionsToTerraform(struct?: AlbLoadBalancerLogOptionsOutputReference | AlbLoadBalancerLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    discard_rule: cdktf.listMapper(albLoadBalancerLogOptionsDiscardRuleToTerraform, true)(struct!.discardRule),
  }
}


export function albLoadBalancerLogOptionsToHclTerraform(struct?: AlbLoadBalancerLogOptionsOutputReference | AlbLoadBalancerLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discard_rule: {
      value: cdktf.listMapperHcl(albLoadBalancerLogOptionsDiscardRuleToHclTerraform, true)(struct!.discardRule),
      isBlock: true,
      type: "list",
      storageClassType: "AlbLoadBalancerLogOptionsDiscardRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._discardRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discardRule = this._discardRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._logGroupId = undefined;
      this._discardRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._logGroupId = value.logGroupId;
      this._discardRule.internalValue = value.discardRule;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // discard_rule - computed: false, optional: true, required: false
  private _discardRule = new AlbLoadBalancerLogOptionsDiscardRuleList(this, "discard_rule", false);
  public get discardRule() {
    return this._discardRule;
  }
  public putDiscardRule(value: AlbLoadBalancerLogOptionsDiscardRule[] | cdktf.IResolvable) {
    this._discardRule.internalValue = value;
  }
  public resetDiscardRule() {
    this._discardRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardRuleInput() {
    return this._discardRule.internalValue;
  }
}
export interface AlbLoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#create AlbLoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#delete AlbLoadBalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#update AlbLoadBalancer#update}
  */
  readonly update?: string;
}

export function albLoadBalancerTimeoutsToTerraform(struct?: AlbLoadBalancerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function albLoadBalancerTimeoutsToHclTerraform(struct?: AlbLoadBalancerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlbLoadBalancerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer yandex_alb_load_balancer}
*/
export class AlbLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbLoadBalancer to import
  * @param importFromId The id of the existing AlbLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_alb_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/alb_load_balancer yandex_alb_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: AlbLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowZonalShift = config.allowZonalShift;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._regionId = config.regionId;
    this._securityGroupIds = config.securityGroupIds;
    this._allocationPolicy.internalValue = config.allocationPolicy;
    this._autoScalePolicy.internalValue = config.autoScalePolicy;
    this._listener.internalValue = config.listener;
    this._logOptions.internalValue = config.logOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_zonal_shift - computed: false, optional: true, required: false
  private _allowZonalShift?: boolean | cdktf.IResolvable; 
  public get allowZonalShift() {
    return this.getBooleanAttribute('allow_zonal_shift');
  }
  public set allowZonalShift(value: boolean | cdktf.IResolvable) {
    this._allowZonalShift = value;
  }
  public resetAllowZonalShift() {
    this._allowZonalShift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowZonalShiftInput() {
    return this._allowZonalShift;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // allocation_policy - computed: false, optional: false, required: true
  private _allocationPolicy = new AlbLoadBalancerAllocationPolicyOutputReference(this, "allocation_policy");
  public get allocationPolicy() {
    return this._allocationPolicy;
  }
  public putAllocationPolicy(value: AlbLoadBalancerAllocationPolicy) {
    this._allocationPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPolicyInput() {
    return this._allocationPolicy.internalValue;
  }

  // auto_scale_policy - computed: false, optional: true, required: false
  private _autoScalePolicy = new AlbLoadBalancerAutoScalePolicyOutputReference(this, "auto_scale_policy");
  public get autoScalePolicy() {
    return this._autoScalePolicy;
  }
  public putAutoScalePolicy(value: AlbLoadBalancerAutoScalePolicy) {
    this._autoScalePolicy.internalValue = value;
  }
  public resetAutoScalePolicy() {
    this._autoScalePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalePolicyInput() {
    return this._autoScalePolicy.internalValue;
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new AlbLoadBalancerListenerList(this, "listener", false);
  public get listener() {
    return this._listener;
  }
  public putListener(value: AlbLoadBalancerListener[] | cdktf.IResolvable) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // log_options - computed: false, optional: true, required: false
  private _logOptions = new AlbLoadBalancerLogOptionsOutputReference(this, "log_options");
  public get logOptions() {
    return this._logOptions;
  }
  public putLogOptions(value: AlbLoadBalancerLogOptions) {
    this._logOptions.internalValue = value;
  }
  public resetLogOptions() {
    this._logOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptionsInput() {
    return this._logOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbLoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbLoadBalancerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_zonal_shift: cdktf.booleanToTerraform(this._allowZonalShift),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      region_id: cdktf.stringToTerraform(this._regionId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      allocation_policy: albLoadBalancerAllocationPolicyToTerraform(this._allocationPolicy.internalValue),
      auto_scale_policy: albLoadBalancerAutoScalePolicyToTerraform(this._autoScalePolicy.internalValue),
      listener: cdktf.listMapper(albLoadBalancerListenerToTerraform, true)(this._listener.internalValue),
      log_options: albLoadBalancerLogOptionsToTerraform(this._logOptions.internalValue),
      timeouts: albLoadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_zonal_shift: {
        value: cdktf.booleanToHclTerraform(this._allowZonalShift),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allocation_policy: {
        value: albLoadBalancerAllocationPolicyToHclTerraform(this._allocationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbLoadBalancerAllocationPolicyList",
      },
      auto_scale_policy: {
        value: albLoadBalancerAutoScalePolicyToHclTerraform(this._autoScalePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbLoadBalancerAutoScalePolicyList",
      },
      listener: {
        value: cdktf.listMapperHcl(albLoadBalancerListenerToHclTerraform, true)(this._listener.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbLoadBalancerListenerList",
      },
      log_options: {
        value: albLoadBalancerLogOptionsToHclTerraform(this._logOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbLoadBalancerLogOptionsList",
      },
      timeouts: {
        value: albLoadBalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlbLoadBalancerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
