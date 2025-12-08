// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NlbLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#address_ip_version NlbLoadBalancer#address_ip_version}
  */
  readonly addressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#address_type NlbLoadBalancer#address_type}
  */
  readonly addressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#bandwidth_package_id NlbLoadBalancer#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#cps NlbLoadBalancer#cps}
  */
  readonly cps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#cross_zone_enabled NlbLoadBalancer#cross_zone_enabled}
  */
  readonly crossZoneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#deletion_protection_enabled NlbLoadBalancer#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#deletion_protection_reason NlbLoadBalancer#deletion_protection_reason}
  */
  readonly deletionProtectionReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#id NlbLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#ipv6_address_type NlbLoadBalancer#ipv6_address_type}
  */
  readonly ipv6AddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#load_balancer_name NlbLoadBalancer#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#load_balancer_type NlbLoadBalancer#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#modification_protection_reason NlbLoadBalancer#modification_protection_reason}
  */
  readonly modificationProtectionReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#modification_protection_status NlbLoadBalancer#modification_protection_status}
  */
  readonly modificationProtectionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#payment_type NlbLoadBalancer#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#resource_group_id NlbLoadBalancer#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#security_group_ids NlbLoadBalancer#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#tags NlbLoadBalancer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#vpc_id NlbLoadBalancer#vpc_id}
  */
  readonly vpcId: string;
  /**
  * deletion_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#deletion_protection_config NlbLoadBalancer#deletion_protection_config}
  */
  readonly deletionProtectionConfig?: NlbLoadBalancerDeletionProtectionConfig;
  /**
  * modification_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#modification_protection_config NlbLoadBalancer#modification_protection_config}
  */
  readonly modificationProtectionConfig?: NlbLoadBalancerModificationProtectionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#timeouts NlbLoadBalancer#timeouts}
  */
  readonly timeouts?: NlbLoadBalancerTimeouts;
  /**
  * zone_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#zone_mappings NlbLoadBalancer#zone_mappings}
  */
  readonly zoneMappings: NlbLoadBalancerZoneMappings[] | cdktf.IResolvable;
}
export interface NlbLoadBalancerDeletionProtectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#enabled NlbLoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#reason NlbLoadBalancer#reason}
  */
  readonly reason?: string;
}

export function nlbLoadBalancerDeletionProtectionConfigToTerraform(struct?: NlbLoadBalancerDeletionProtectionConfigOutputReference | NlbLoadBalancerDeletionProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function nlbLoadBalancerDeletionProtectionConfigToHclTerraform(struct?: NlbLoadBalancerDeletionProtectionConfigOutputReference | NlbLoadBalancerDeletionProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NlbLoadBalancerDeletionProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NlbLoadBalancerDeletionProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NlbLoadBalancerDeletionProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._reason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._reason = value.reason;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface NlbLoadBalancerModificationProtectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#reason NlbLoadBalancer#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#status NlbLoadBalancer#status}
  */
  readonly status?: string;
}

export function nlbLoadBalancerModificationProtectionConfigToTerraform(struct?: NlbLoadBalancerModificationProtectionConfigOutputReference | NlbLoadBalancerModificationProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function nlbLoadBalancerModificationProtectionConfigToHclTerraform(struct?: NlbLoadBalancerModificationProtectionConfigOutputReference | NlbLoadBalancerModificationProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NlbLoadBalancerModificationProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NlbLoadBalancerModificationProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NlbLoadBalancerModificationProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reason = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reason = value.reason;
      this._status = value.status;
    }
  }

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface NlbLoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#create NlbLoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#delete NlbLoadBalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#update NlbLoadBalancer#update}
  */
  readonly update?: string;
}

export function nlbLoadBalancerTimeoutsToTerraform(struct?: NlbLoadBalancerTimeouts | cdktf.IResolvable): any {
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


export function nlbLoadBalancerTimeoutsToHclTerraform(struct?: NlbLoadBalancerTimeouts | cdktf.IResolvable): any {
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

export class NlbLoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NlbLoadBalancerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NlbLoadBalancerTimeouts | cdktf.IResolvable | undefined) {
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
export interface NlbLoadBalancerZoneMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#allocation_id NlbLoadBalancer#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#ipv4_local_addresses NlbLoadBalancer#ipv4_local_addresses}
  */
  readonly ipv4LocalAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#ipv6_address NlbLoadBalancer#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#ipv6_local_addresses NlbLoadBalancer#ipv6_local_addresses}
  */
  readonly ipv6LocalAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#private_ipv4_address NlbLoadBalancer#private_ipv4_address}
  */
  readonly privateIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#vswitch_id NlbLoadBalancer#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#zone_id NlbLoadBalancer#zone_id}
  */
  readonly zoneId: string;
}

export function nlbLoadBalancerZoneMappingsToTerraform(struct?: NlbLoadBalancerZoneMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_id: cdktf.stringToTerraform(struct!.allocationId),
    ipv4_local_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4LocalAddresses),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_local_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6LocalAddresses),
    private_ipv4_address: cdktf.stringToTerraform(struct!.privateIpv4Address),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function nlbLoadBalancerZoneMappingsToHclTerraform(struct?: NlbLoadBalancerZoneMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_id: {
      value: cdktf.stringToHclTerraform(struct!.allocationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_local_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4LocalAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_local_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6LocalAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
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

export class NlbLoadBalancerZoneMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NlbLoadBalancerZoneMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationId = this._allocationId;
    }
    if (this._ipv4LocalAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4LocalAddresses = this._ipv4LocalAddresses;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6LocalAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LocalAddresses = this._ipv6LocalAddresses;
    }
    if (this._privateIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpv4Address = this._privateIpv4Address;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NlbLoadBalancerZoneMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationId = undefined;
      this._ipv4LocalAddresses = undefined;
      this._ipv6Address = undefined;
      this._ipv6LocalAddresses = undefined;
      this._privateIpv4Address = undefined;
      this._vswitchId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationId = value.allocationId;
      this._ipv4LocalAddresses = value.ipv4LocalAddresses;
      this._ipv6Address = value.ipv6Address;
      this._ipv6LocalAddresses = value.ipv6LocalAddresses;
      this._privateIpv4Address = value.privateIpv4Address;
      this._vswitchId = value.vswitchId;
      this._zoneId = value.zoneId;
    }
  }

  // allocation_id - computed: true, optional: true, required: false
  private _allocationId?: string; 
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string) {
    this._allocationId = value;
  }
  public resetAllocationId() {
    this._allocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdInput() {
    return this._allocationId;
  }

  // eni_id - computed: true, optional: false, required: false
  public get eniId() {
    return this.getStringAttribute('eni_id');
  }

  // ipv4_local_addresses - computed: true, optional: true, required: false
  private _ipv4LocalAddresses?: string[]; 
  public get ipv4LocalAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_local_addresses'));
  }
  public set ipv4LocalAddresses(value: string[]) {
    this._ipv4LocalAddresses = value;
  }
  public resetIpv4LocalAddresses() {
    this._ipv4LocalAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LocalAddressesInput() {
    return this._ipv4LocalAddresses;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_local_addresses - computed: true, optional: true, required: false
  private _ipv6LocalAddresses?: string[]; 
  public get ipv6LocalAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_local_addresses'));
  }
  public set ipv6LocalAddresses(value: string[]) {
    this._ipv6LocalAddresses = value;
  }
  public resetIpv6LocalAddresses() {
    this._ipv6LocalAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LocalAddressesInput() {
    return this._ipv6LocalAddresses;
  }

  // private_ipv4_address - computed: true, optional: true, required: false
  private _privateIpv4Address?: string; 
  public get privateIpv4Address() {
    return this.getStringAttribute('private_ipv4_address');
  }
  public set privateIpv4Address(value: string) {
    this._privateIpv4Address = value;
  }
  public resetPrivateIpv4Address() {
    this._privateIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4AddressInput() {
    return this._privateIpv4Address;
  }

  // public_ipv4_address - computed: true, optional: false, required: false
  public get publicIpv4Address() {
    return this.getStringAttribute('public_ipv4_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
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

export class NlbLoadBalancerZoneMappingsList extends cdktf.ComplexList {
  public internalValue? : NlbLoadBalancerZoneMappings[] | cdktf.IResolvable

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
  public get(index: number): NlbLoadBalancerZoneMappingsOutputReference {
    return new NlbLoadBalancerZoneMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer alicloud_nlb_load_balancer}
*/
export class NlbLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nlb_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NlbLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NlbLoadBalancer to import
  * @param importFromId The id of the existing NlbLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NlbLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nlb_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_load_balancer alicloud_nlb_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NlbLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: NlbLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nlb_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIpVersion = config.addressIpVersion;
    this._addressType = config.addressType;
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._cps = config.cps;
    this._crossZoneEnabled = config.crossZoneEnabled;
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._deletionProtectionReason = config.deletionProtectionReason;
    this._id = config.id;
    this._ipv6AddressType = config.ipv6AddressType;
    this._loadBalancerName = config.loadBalancerName;
    this._loadBalancerType = config.loadBalancerType;
    this._modificationProtectionReason = config.modificationProtectionReason;
    this._modificationProtectionStatus = config.modificationProtectionStatus;
    this._paymentType = config.paymentType;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._deletionProtectionConfig.internalValue = config.deletionProtectionConfig;
    this._modificationProtectionConfig.internalValue = config.modificationProtectionConfig;
    this._timeouts.internalValue = config.timeouts;
    this._zoneMappings.internalValue = config.zoneMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip_version - computed: true, optional: true, required: false
  private _addressIpVersion?: string; 
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }
  public set addressIpVersion(value: string) {
    this._addressIpVersion = value;
  }
  public resetAddressIpVersion() {
    this._addressIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpVersionInput() {
    return this._addressIpVersion;
  }

  // address_type - computed: false, optional: false, required: true
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // bandwidth_package_id - computed: true, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // cps - computed: false, optional: true, required: false
  private _cps?: number; 
  public get cps() {
    return this.getNumberAttribute('cps');
  }
  public set cps(value: number) {
    this._cps = value;
  }
  public resetCps() {
    this._cps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsInput() {
    return this._cps;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_zone_enabled - computed: true, optional: true, required: false
  private _crossZoneEnabled?: boolean | cdktf.IResolvable; 
  public get crossZoneEnabled() {
    return this.getBooleanAttribute('cross_zone_enabled');
  }
  public set crossZoneEnabled(value: boolean | cdktf.IResolvable) {
    this._crossZoneEnabled = value;
  }
  public resetCrossZoneEnabled() {
    this._crossZoneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossZoneEnabledInput() {
    return this._crossZoneEnabled;
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // deletion_protection_reason - computed: true, optional: true, required: false
  private _deletionProtectionReason?: string; 
  public get deletionProtectionReason() {
    return this.getStringAttribute('deletion_protection_reason');
  }
  public set deletionProtectionReason(value: string) {
    this._deletionProtectionReason = value;
  }
  public resetDeletionProtectionReason() {
    this._deletionProtectionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionReasonInput() {
    return this._deletionProtectionReason;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // ipv6_address_type - computed: true, optional: true, required: false
  private _ipv6AddressType?: string; 
  public get ipv6AddressType() {
    return this.getStringAttribute('ipv6_address_type');
  }
  public set ipv6AddressType(value: string) {
    this._ipv6AddressType = value;
  }
  public resetIpv6AddressType() {
    this._ipv6AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressTypeInput() {
    return this._ipv6AddressType;
  }

  // load_balancer_business_status - computed: true, optional: false, required: false
  public get loadBalancerBusinessStatus() {
    return this.getStringAttribute('load_balancer_business_status');
  }

  // load_balancer_name - computed: false, optional: true, required: false
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  public resetLoadBalancerName() {
    this._loadBalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // load_balancer_type - computed: true, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // modification_protection_reason - computed: true, optional: true, required: false
  private _modificationProtectionReason?: string; 
  public get modificationProtectionReason() {
    return this.getStringAttribute('modification_protection_reason');
  }
  public set modificationProtectionReason(value: string) {
    this._modificationProtectionReason = value;
  }
  public resetModificationProtectionReason() {
    this._modificationProtectionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modificationProtectionReasonInput() {
    return this._modificationProtectionReason;
  }

  // modification_protection_status - computed: true, optional: true, required: false
  private _modificationProtectionStatus?: string; 
  public get modificationProtectionStatus() {
    return this.getStringAttribute('modification_protection_status');
  }
  public set modificationProtectionStatus(value: string) {
    this._modificationProtectionStatus = value;
  }
  public resetModificationProtectionStatus() {
    this._modificationProtectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modificationProtectionStatusInput() {
    return this._modificationProtectionStatus;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_group_ids - computed: true, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // deletion_protection_config - computed: false, optional: true, required: false
  private _deletionProtectionConfig = new NlbLoadBalancerDeletionProtectionConfigOutputReference(this, "deletion_protection_config");
  public get deletionProtectionConfig() {
    return this._deletionProtectionConfig;
  }
  public putDeletionProtectionConfig(value: NlbLoadBalancerDeletionProtectionConfig) {
    this._deletionProtectionConfig.internalValue = value;
  }
  public resetDeletionProtectionConfig() {
    this._deletionProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionConfigInput() {
    return this._deletionProtectionConfig.internalValue;
  }

  // modification_protection_config - computed: false, optional: true, required: false
  private _modificationProtectionConfig = new NlbLoadBalancerModificationProtectionConfigOutputReference(this, "modification_protection_config");
  public get modificationProtectionConfig() {
    return this._modificationProtectionConfig;
  }
  public putModificationProtectionConfig(value: NlbLoadBalancerModificationProtectionConfig) {
    this._modificationProtectionConfig.internalValue = value;
  }
  public resetModificationProtectionConfig() {
    this._modificationProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modificationProtectionConfigInput() {
    return this._modificationProtectionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NlbLoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NlbLoadBalancerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // zone_mappings - computed: false, optional: false, required: true
  private _zoneMappings = new NlbLoadBalancerZoneMappingsList(this, "zone_mappings", true);
  public get zoneMappings() {
    return this._zoneMappings;
  }
  public putZoneMappings(value: NlbLoadBalancerZoneMappings[] | cdktf.IResolvable) {
    this._zoneMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMappingsInput() {
    return this._zoneMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_ip_version: cdktf.stringToTerraform(this._addressIpVersion),
      address_type: cdktf.stringToTerraform(this._addressType),
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      cps: cdktf.numberToTerraform(this._cps),
      cross_zone_enabled: cdktf.booleanToTerraform(this._crossZoneEnabled),
      deletion_protection_enabled: cdktf.booleanToTerraform(this._deletionProtectionEnabled),
      deletion_protection_reason: cdktf.stringToTerraform(this._deletionProtectionReason),
      id: cdktf.stringToTerraform(this._id),
      ipv6_address_type: cdktf.stringToTerraform(this._ipv6AddressType),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      modification_protection_reason: cdktf.stringToTerraform(this._modificationProtectionReason),
      modification_protection_status: cdktf.stringToTerraform(this._modificationProtectionStatus),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      deletion_protection_config: nlbLoadBalancerDeletionProtectionConfigToTerraform(this._deletionProtectionConfig.internalValue),
      modification_protection_config: nlbLoadBalancerModificationProtectionConfigToTerraform(this._modificationProtectionConfig.internalValue),
      timeouts: nlbLoadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
      zone_mappings: cdktf.listMapper(nlbLoadBalancerZoneMappingsToTerraform, true)(this._zoneMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip_version: {
        value: cdktf.stringToHclTerraform(this._addressIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cps: {
        value: cdktf.numberToHclTerraform(this._cps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cross_zone_enabled: {
        value: cdktf.booleanToHclTerraform(this._crossZoneEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection_reason: {
        value: cdktf.stringToHclTerraform(this._deletionProtectionReason),
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
      ipv6_address_type: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_type: {
        value: cdktf.stringToHclTerraform(this._loadBalancerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modification_protection_reason: {
        value: cdktf.stringToHclTerraform(this._modificationProtectionReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modification_protection_status: {
        value: cdktf.stringToHclTerraform(this._modificationProtectionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection_config: {
        value: nlbLoadBalancerDeletionProtectionConfigToHclTerraform(this._deletionProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NlbLoadBalancerDeletionProtectionConfigList",
      },
      modification_protection_config: {
        value: nlbLoadBalancerModificationProtectionConfigToHclTerraform(this._modificationProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NlbLoadBalancerModificationProtectionConfigList",
      },
      timeouts: {
        value: nlbLoadBalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NlbLoadBalancerTimeouts",
      },
      zone_mappings: {
        value: cdktf.listMapperHcl(nlbLoadBalancerZoneMappingsToHclTerraform, true)(this._zoneMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NlbLoadBalancerZoneMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
