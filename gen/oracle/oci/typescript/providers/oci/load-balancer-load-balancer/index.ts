// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#ipv6subnet_cidr LoadBalancerLoadBalancer#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}
  */
  readonly isDeleteProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}
  */
  readonly isRequestIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}
  */
  readonly networkSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}
  */
  readonly requestIdHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#security_attributes LoadBalancerLoadBalancer#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * reserved_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#reserved_ips LoadBalancerLoadBalancer#reserved_ips}
  */
  readonly reservedIps?: LoadBalancerLoadBalancerReservedIps[] | cdktf.IResolvable;
  /**
  * shape_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#shape_details LoadBalancerLoadBalancer#shape_details}
  */
  readonly shapeDetails?: LoadBalancerLoadBalancerShapeDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#timeouts LoadBalancerLoadBalancer#timeouts}
  */
  readonly timeouts?: LoadBalancerLoadBalancerTimeouts;
}
export interface LoadBalancerLoadBalancerIpAddressDetailsReservedIp {
}

export function loadBalancerLoadBalancerIpAddressDetailsReservedIpToTerraform(struct?: LoadBalancerLoadBalancerIpAddressDetailsReservedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerLoadBalancerIpAddressDetailsReservedIpToHclTerraform(struct?: LoadBalancerLoadBalancerIpAddressDetailsReservedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerLoadBalancerIpAddressDetailsReservedIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerLoadBalancerIpAddressDetailsReservedIp | undefined) {
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
}

export class LoadBalancerLoadBalancerIpAddressDetailsReservedIpList extends cdktf.ComplexList {

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
  public get(index: number): LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference {
    return new LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerLoadBalancerIpAddressDetails {
}

export function loadBalancerLoadBalancerIpAddressDetailsToTerraform(struct?: LoadBalancerLoadBalancerIpAddressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerLoadBalancerIpAddressDetailsToHclTerraform(struct?: LoadBalancerLoadBalancerIpAddressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerLoadBalancerIpAddressDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerLoadBalancerIpAddressDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerLoadBalancerIpAddressDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // reserved_ip - computed: true, optional: false, required: false
  private _reservedIp = new LoadBalancerLoadBalancerIpAddressDetailsReservedIpList(this, "reserved_ip", false);
  public get reservedIp() {
    return this._reservedIp;
  }
}

export class LoadBalancerLoadBalancerIpAddressDetailsList extends cdktf.ComplexList {

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
  public get(index: number): LoadBalancerLoadBalancerIpAddressDetailsOutputReference {
    return new LoadBalancerLoadBalancerIpAddressDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerLoadBalancerReservedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function loadBalancerLoadBalancerReservedIpsToTerraform(struct?: LoadBalancerLoadBalancerReservedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function loadBalancerLoadBalancerReservedIpsToHclTerraform(struct?: LoadBalancerLoadBalancerReservedIps | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerLoadBalancerReservedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerLoadBalancerReservedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerLoadBalancerReservedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class LoadBalancerLoadBalancerReservedIpsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerLoadBalancerReservedIps[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerLoadBalancerReservedIpsOutputReference {
    return new LoadBalancerLoadBalancerReservedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerLoadBalancerShapeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}
  */
  readonly maximumBandwidthInMbps: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}
  */
  readonly minimumBandwidthInMbps: number;
}

export function loadBalancerLoadBalancerShapeDetailsToTerraform(struct?: LoadBalancerLoadBalancerShapeDetailsOutputReference | LoadBalancerLoadBalancerShapeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_bandwidth_in_mbps: cdktf.numberToTerraform(struct!.maximumBandwidthInMbps),
    minimum_bandwidth_in_mbps: cdktf.numberToTerraform(struct!.minimumBandwidthInMbps),
  }
}


export function loadBalancerLoadBalancerShapeDetailsToHclTerraform(struct?: LoadBalancerLoadBalancerShapeDetailsOutputReference | LoadBalancerLoadBalancerShapeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_bandwidth_in_mbps: {
      value: cdktf.numberToHclTerraform(struct!.maximumBandwidthInMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_bandwidth_in_mbps: {
      value: cdktf.numberToHclTerraform(struct!.minimumBandwidthInMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerLoadBalancerShapeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerLoadBalancerShapeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBandwidthInMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBandwidthInMbps = this._maximumBandwidthInMbps;
    }
    if (this._minimumBandwidthInMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBandwidthInMbps = this._minimumBandwidthInMbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerLoadBalancerShapeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBandwidthInMbps = undefined;
      this._minimumBandwidthInMbps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBandwidthInMbps = value.maximumBandwidthInMbps;
      this._minimumBandwidthInMbps = value.minimumBandwidthInMbps;
    }
  }

  // maximum_bandwidth_in_mbps - computed: false, optional: false, required: true
  private _maximumBandwidthInMbps?: number; 
  public get maximumBandwidthInMbps() {
    return this.getNumberAttribute('maximum_bandwidth_in_mbps');
  }
  public set maximumBandwidthInMbps(value: number) {
    this._maximumBandwidthInMbps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBandwidthInMbpsInput() {
    return this._maximumBandwidthInMbps;
  }

  // minimum_bandwidth_in_mbps - computed: false, optional: false, required: true
  private _minimumBandwidthInMbps?: number; 
  public get minimumBandwidthInMbps() {
    return this.getNumberAttribute('minimum_bandwidth_in_mbps');
  }
  public set minimumBandwidthInMbps(value: number) {
    this._minimumBandwidthInMbps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBandwidthInMbpsInput() {
    return this._minimumBandwidthInMbps;
  }
}
export interface LoadBalancerLoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}
  */
  readonly update?: string;
}

export function loadBalancerLoadBalancerTimeoutsToTerraform(struct?: LoadBalancerLoadBalancerTimeouts | cdktf.IResolvable): any {
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


export function loadBalancerLoadBalancerTimeoutsToHclTerraform(struct?: LoadBalancerLoadBalancerTimeouts | cdktf.IResolvable): any {
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

export class LoadBalancerLoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerLoadBalancerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LoadBalancerLoadBalancerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer oci_load_balancer_load_balancer}
*/
export class LoadBalancerLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_load_balancer_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerLoadBalancer to import
  * @param importFromId The id of the existing LoadBalancerLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_load_balancer_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/load_balancer_load_balancer oci_load_balancer_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._ipMode = config.ipMode;
    this._ipv6SubnetCidr = config.ipv6SubnetCidr;
    this._isDeleteProtectionEnabled = config.isDeleteProtectionEnabled;
    this._isPrivate = config.isPrivate;
    this._isRequestIdEnabled = config.isRequestIdEnabled;
    this._networkSecurityGroupIds = config.networkSecurityGroupIds;
    this._requestIdHeader = config.requestIdHeader;
    this._securityAttributes = config.securityAttributes;
    this._shape = config.shape;
    this._subnetIds = config.subnetIds;
    this._reservedIps.internalValue = config.reservedIps;
    this._shapeDetails.internalValue = config.shapeDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // ip_address_details - computed: true, optional: false, required: false
  private _ipAddressDetails = new LoadBalancerLoadBalancerIpAddressDetailsList(this, "ip_address_details", false);
  public get ipAddressDetails() {
    return this._ipAddressDetails;
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ip_mode - computed: true, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }

  // is_delete_protection_enabled - computed: true, optional: true, required: false
  private _isDeleteProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get isDeleteProtectionEnabled() {
    return this.getBooleanAttribute('is_delete_protection_enabled');
  }
  public set isDeleteProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isDeleteProtectionEnabled = value;
  }
  public resetIsDeleteProtectionEnabled() {
    this._isDeleteProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeleteProtectionEnabledInput() {
    return this._isDeleteProtectionEnabled;
  }

  // is_private - computed: true, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // is_request_id_enabled - computed: true, optional: true, required: false
  private _isRequestIdEnabled?: boolean | cdktf.IResolvable; 
  public get isRequestIdEnabled() {
    return this.getBooleanAttribute('is_request_id_enabled');
  }
  public set isRequestIdEnabled(value: boolean | cdktf.IResolvable) {
    this._isRequestIdEnabled = value;
  }
  public resetIsRequestIdEnabled() {
    this._isRequestIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequestIdEnabledInput() {
    return this._isRequestIdEnabled;
  }

  // network_security_group_ids - computed: false, optional: true, required: false
  private _networkSecurityGroupIds?: string[]; 
  public get networkSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_security_group_ids'));
  }
  public set networkSecurityGroupIds(value: string[]) {
    this._networkSecurityGroupIds = value;
  }
  public resetNetworkSecurityGroupIds() {
    this._networkSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdsInput() {
    return this._networkSecurityGroupIds;
  }

  // request_id_header - computed: true, optional: true, required: false
  private _requestIdHeader?: string; 
  public get requestIdHeader() {
    return this.getStringAttribute('request_id_header');
  }
  public set requestIdHeader(value: string) {
    this._requestIdHeader = value;
  }
  public resetRequestIdHeader() {
    this._requestIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdHeaderInput() {
    return this._requestIdHeader;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // reserved_ips - computed: false, optional: true, required: false
  private _reservedIps = new LoadBalancerLoadBalancerReservedIpsList(this, "reserved_ips", false);
  public get reservedIps() {
    return this._reservedIps;
  }
  public putReservedIps(value: LoadBalancerLoadBalancerReservedIps[] | cdktf.IResolvable) {
    this._reservedIps.internalValue = value;
  }
  public resetReservedIps() {
    this._reservedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpsInput() {
    return this._reservedIps.internalValue;
  }

  // shape_details - computed: false, optional: true, required: false
  private _shapeDetails = new LoadBalancerLoadBalancerShapeDetailsOutputReference(this, "shape_details");
  public get shapeDetails() {
    return this._shapeDetails;
  }
  public putShapeDetails(value: LoadBalancerLoadBalancerShapeDetails) {
    this._shapeDetails.internalValue = value;
  }
  public resetShapeDetails() {
    this._shapeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeDetailsInput() {
    return this._shapeDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoadBalancerLoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoadBalancerLoadBalancerTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ip_mode: cdktf.stringToTerraform(this._ipMode),
      ipv6subnet_cidr: cdktf.stringToTerraform(this._ipv6SubnetCidr),
      is_delete_protection_enabled: cdktf.booleanToTerraform(this._isDeleteProtectionEnabled),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      is_request_id_enabled: cdktf.booleanToTerraform(this._isRequestIdEnabled),
      network_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkSecurityGroupIds),
      request_id_header: cdktf.stringToTerraform(this._requestIdHeader),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shape: cdktf.stringToTerraform(this._shape),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      reserved_ips: cdktf.listMapper(loadBalancerLoadBalancerReservedIpsToTerraform, true)(this._reservedIps.internalValue),
      shape_details: loadBalancerLoadBalancerShapeDetailsToTerraform(this._shapeDetails.internalValue),
      timeouts: loadBalancerLoadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mode: {
        value: cdktf.stringToHclTerraform(this._ipMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._ipv6SubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_delete_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDeleteProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_request_id_enabled: {
        value: cdktf.booleanToHclTerraform(this._isRequestIdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      request_id_header: {
        value: cdktf.stringToHclTerraform(this._requestIdHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reserved_ips: {
        value: cdktf.listMapperHcl(loadBalancerLoadBalancerReservedIpsToHclTerraform, true)(this._reservedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerLoadBalancerReservedIpsList",
      },
      shape_details: {
        value: loadBalancerLoadBalancerShapeDetailsToHclTerraform(this._shapeDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerLoadBalancerShapeDetailsList",
      },
      timeouts: {
        value: loadBalancerLoadBalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerLoadBalancerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
