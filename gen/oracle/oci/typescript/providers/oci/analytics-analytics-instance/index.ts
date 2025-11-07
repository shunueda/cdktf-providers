// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnalyticsAnalyticsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#admin_user AnalyticsAnalyticsInstance#admin_user}
  */
  readonly adminUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#compartment_id AnalyticsAnalyticsInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#defined_tags AnalyticsAnalyticsInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#description AnalyticsAnalyticsInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#domain_id AnalyticsAnalyticsInstance#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#email_notification AnalyticsAnalyticsInstance#email_notification}
  */
  readonly emailNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#feature_bundle AnalyticsAnalyticsInstance#feature_bundle}
  */
  readonly featureBundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#feature_set AnalyticsAnalyticsInstance#feature_set}
  */
  readonly featureSet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#freeform_tags AnalyticsAnalyticsInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#idcs_access_token AnalyticsAnalyticsInstance#idcs_access_token}
  */
  readonly idcsAccessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#kms_key_id AnalyticsAnalyticsInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#license_type AnalyticsAnalyticsInstance#license_type}
  */
  readonly licenseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#name AnalyticsAnalyticsInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#state AnalyticsAnalyticsInstance#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#update_channel AnalyticsAnalyticsInstance#update_channel}
  */
  readonly updateChannel?: string;
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#capacity AnalyticsAnalyticsInstance#capacity}
  */
  readonly capacity: AnalyticsAnalyticsInstanceCapacity;
  /**
  * network_endpoint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#network_endpoint_details AnalyticsAnalyticsInstance#network_endpoint_details}
  */
  readonly networkEndpointDetails?: AnalyticsAnalyticsInstanceNetworkEndpointDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#timeouts AnalyticsAnalyticsInstance#timeouts}
  */
  readonly timeouts?: AnalyticsAnalyticsInstanceTimeouts;
}
export interface AnalyticsAnalyticsInstanceCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#capacity_type AnalyticsAnalyticsInstance#capacity_type}
  */
  readonly capacityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#capacity_value AnalyticsAnalyticsInstance#capacity_value}
  */
  readonly capacityValue: number;
}

export function analyticsAnalyticsInstanceCapacityToTerraform(struct?: AnalyticsAnalyticsInstanceCapacityOutputReference | AnalyticsAnalyticsInstanceCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_type: cdktf.stringToTerraform(struct!.capacityType),
    capacity_value: cdktf.numberToTerraform(struct!.capacityValue),
  }
}


export function analyticsAnalyticsInstanceCapacityToHclTerraform(struct?: AnalyticsAnalyticsInstanceCapacityOutputReference | AnalyticsAnalyticsInstanceCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_type: {
      value: cdktf.stringToHclTerraform(struct!.capacityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_value: {
      value: cdktf.numberToHclTerraform(struct!.capacityValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsAnalyticsInstanceCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AnalyticsAnalyticsInstanceCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityType = this._capacityType;
    }
    if (this._capacityValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityValue = this._capacityValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsAnalyticsInstanceCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityType = undefined;
      this._capacityValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityType = value.capacityType;
      this._capacityValue = value.capacityValue;
    }
  }

  // capacity_type - computed: false, optional: false, required: true
  private _capacityType?: string; 
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }
  public set capacityType(value: string) {
    this._capacityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTypeInput() {
    return this._capacityType;
  }

  // capacity_value - computed: false, optional: false, required: true
  private _capacityValue?: number; 
  public get capacityValue() {
    return this.getNumberAttribute('capacity_value');
  }
  public set capacityValue(value: number) {
    this._capacityValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityValueInput() {
    return this._capacityValue;
  }
}
export interface AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}
  */
  readonly whitelistedIps?: string[];
}

export function analyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsToTerraform(struct?: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    whitelisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistedIps),
  }
}


export function analyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsToHclTerraform(struct?: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns | cdktf.IResolvable): any {
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
    whitelisted_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._whitelistedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedIps = this._whitelistedIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._whitelistedIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._whitelistedIps = value.whitelistedIps;
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

  // whitelisted_ips - computed: true, optional: true, required: false
  private _whitelistedIps?: string[]; 
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }
  public set whitelistedIps(value: string[]) {
    this._whitelistedIps = value;
  }
  public resetWhitelistedIps() {
    this._whitelistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedIpsInput() {
    return this._whitelistedIps;
  }
}

export class AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList extends cdktf.ComplexList {
  public internalValue? : AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference {
    return new AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsAnalyticsInstanceNetworkEndpointDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#network_endpoint_type AnalyticsAnalyticsInstance#network_endpoint_type}
  */
  readonly networkEndpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#network_security_group_ids AnalyticsAnalyticsInstance#network_security_group_ids}
  */
  readonly networkSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#subnet_id AnalyticsAnalyticsInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#vcn_id AnalyticsAnalyticsInstance#vcn_id}
  */
  readonly vcnId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}
  */
  readonly whitelistedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#whitelisted_services AnalyticsAnalyticsInstance#whitelisted_services}
  */
  readonly whitelistedServices?: string[];
  /**
  * whitelisted_vcns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#whitelisted_vcns AnalyticsAnalyticsInstance#whitelisted_vcns}
  */
  readonly whitelistedVcns?: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[] | cdktf.IResolvable;
}

export function analyticsAnalyticsInstanceNetworkEndpointDetailsToTerraform(struct?: AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference | AnalyticsAnalyticsInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_endpoint_type: cdktf.stringToTerraform(struct!.networkEndpointType),
    network_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkSecurityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vcn_id: cdktf.stringToTerraform(struct!.vcnId),
    whitelisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistedIps),
    whitelisted_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistedServices),
    whitelisted_vcns: cdktf.listMapper(analyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsToTerraform, true)(struct!.whitelistedVcns),
  }
}


export function analyticsAnalyticsInstanceNetworkEndpointDetailsToHclTerraform(struct?: AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference | AnalyticsAnalyticsInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.networkEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_id: {
      value: cdktf.stringToHclTerraform(struct!.vcnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelisted_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    whitelisted_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistedServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    whitelisted_vcns: {
      value: cdktf.listMapperHcl(analyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsToHclTerraform, true)(struct!.whitelistedVcns),
      isBlock: true,
      type: "list",
      storageClassType: "AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AnalyticsAnalyticsInstanceNetworkEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkEndpointType = this._networkEndpointType;
    }
    if (this._networkSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroupIds = this._networkSecurityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vcnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnId = this._vcnId;
    }
    if (this._whitelistedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedIps = this._whitelistedIps;
    }
    if (this._whitelistedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedServices = this._whitelistedServices;
    }
    if (this._whitelistedVcns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedVcns = this._whitelistedVcns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsAnalyticsInstanceNetworkEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkEndpointType = undefined;
      this._networkSecurityGroupIds = undefined;
      this._subnetId = undefined;
      this._vcnId = undefined;
      this._whitelistedIps = undefined;
      this._whitelistedServices = undefined;
      this._whitelistedVcns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkEndpointType = value.networkEndpointType;
      this._networkSecurityGroupIds = value.networkSecurityGroupIds;
      this._subnetId = value.subnetId;
      this._vcnId = value.vcnId;
      this._whitelistedIps = value.whitelistedIps;
      this._whitelistedServices = value.whitelistedServices;
      this._whitelistedVcns.internalValue = value.whitelistedVcns;
    }
  }

  // network_endpoint_type - computed: false, optional: false, required: true
  private _networkEndpointType?: string; 
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }
  public set networkEndpointType(value: string) {
    this._networkEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointTypeInput() {
    return this._networkEndpointType;
  }

  // network_security_group_ids - computed: true, optional: true, required: false
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

  // vcn_id - computed: true, optional: true, required: false
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  public resetVcnId() {
    this._vcnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // whitelisted_ips - computed: true, optional: true, required: false
  private _whitelistedIps?: string[]; 
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }
  public set whitelistedIps(value: string[]) {
    this._whitelistedIps = value;
  }
  public resetWhitelistedIps() {
    this._whitelistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedIpsInput() {
    return this._whitelistedIps;
  }

  // whitelisted_services - computed: true, optional: true, required: false
  private _whitelistedServices?: string[]; 
  public get whitelistedServices() {
    return this.getListAttribute('whitelisted_services');
  }
  public set whitelistedServices(value: string[]) {
    this._whitelistedServices = value;
  }
  public resetWhitelistedServices() {
    this._whitelistedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedServicesInput() {
    return this._whitelistedServices;
  }

  // whitelisted_vcns - computed: false, optional: true, required: false
  private _whitelistedVcns = new AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList(this, "whitelisted_vcns", false);
  public get whitelistedVcns() {
    return this._whitelistedVcns;
  }
  public putWhitelistedVcns(value: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[] | cdktf.IResolvable) {
    this._whitelistedVcns.internalValue = value;
  }
  public resetWhitelistedVcns() {
    this._whitelistedVcns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedVcnsInput() {
    return this._whitelistedVcns.internalValue;
  }
}
export interface AnalyticsAnalyticsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#create AnalyticsAnalyticsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#delete AnalyticsAnalyticsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#update AnalyticsAnalyticsInstance#update}
  */
  readonly update?: string;
}

export function analyticsAnalyticsInstanceTimeoutsToTerraform(struct?: AnalyticsAnalyticsInstanceTimeouts | cdktf.IResolvable): any {
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


export function analyticsAnalyticsInstanceTimeoutsToHclTerraform(struct?: AnalyticsAnalyticsInstanceTimeouts | cdktf.IResolvable): any {
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

export class AnalyticsAnalyticsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnalyticsAnalyticsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AnalyticsAnalyticsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance oci_analytics_analytics_instance}
*/
export class AnalyticsAnalyticsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_analytics_analytics_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnalyticsAnalyticsInstance to import
  * @param importFromId The id of the existing AnalyticsAnalyticsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnalyticsAnalyticsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_analytics_analytics_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/analytics_analytics_instance oci_analytics_analytics_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnalyticsAnalyticsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AnalyticsAnalyticsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_analytics_analytics_instance',
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
    this._adminUser = config.adminUser;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._domainId = config.domainId;
    this._emailNotification = config.emailNotification;
    this._featureBundle = config.featureBundle;
    this._featureSet = config.featureSet;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idcsAccessToken = config.idcsAccessToken;
    this._kmsKeyId = config.kmsKeyId;
    this._licenseType = config.licenseType;
    this._name = config.name;
    this._state = config.state;
    this._updateChannel = config.updateChannel;
    this._capacity.internalValue = config.capacity;
    this._networkEndpointDetails.internalValue = config.networkEndpointDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_user - computed: true, optional: true, required: false
  private _adminUser?: string; 
  public get adminUser() {
    return this.getStringAttribute('admin_user');
  }
  public set adminUser(value: string) {
    this._adminUser = value;
  }
  public resetAdminUser() {
    this._adminUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserInput() {
    return this._adminUser;
  }

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

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // email_notification - computed: true, optional: true, required: false
  private _emailNotification?: string; 
  public get emailNotification() {
    return this.getStringAttribute('email_notification');
  }
  public set emailNotification(value: string) {
    this._emailNotification = value;
  }
  public resetEmailNotification() {
    this._emailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationInput() {
    return this._emailNotification;
  }

  // feature_bundle - computed: true, optional: true, required: false
  private _featureBundle?: string; 
  public get featureBundle() {
    return this.getStringAttribute('feature_bundle');
  }
  public set featureBundle(value: string) {
    this._featureBundle = value;
  }
  public resetFeatureBundle() {
    this._featureBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureBundleInput() {
    return this._featureBundle;
  }

  // feature_set - computed: false, optional: false, required: true
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
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

  // idcs_access_token - computed: false, optional: true, required: false
  private _idcsAccessToken?: string; 
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }
  public set idcsAccessToken(value: string) {
    this._idcsAccessToken = value;
  }
  public resetIdcsAccessToken() {
    this._idcsAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAccessTokenInput() {
    return this._idcsAccessToken;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // update_channel - computed: true, optional: true, required: false
  private _updateChannel?: string; 
  public get updateChannel() {
    return this.getStringAttribute('update_channel');
  }
  public set updateChannel(value: string) {
    this._updateChannel = value;
  }
  public resetUpdateChannel() {
    this._updateChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateChannelInput() {
    return this._updateChannel;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity = new AnalyticsAnalyticsInstanceCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: AnalyticsAnalyticsInstanceCapacity) {
    this._capacity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // network_endpoint_details - computed: false, optional: true, required: false
  private _networkEndpointDetails = new AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference(this, "network_endpoint_details");
  public get networkEndpointDetails() {
    return this._networkEndpointDetails;
  }
  public putNetworkEndpointDetails(value: AnalyticsAnalyticsInstanceNetworkEndpointDetails) {
    this._networkEndpointDetails.internalValue = value;
  }
  public resetNetworkEndpointDetails() {
    this._networkEndpointDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointDetailsInput() {
    return this._networkEndpointDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AnalyticsAnalyticsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AnalyticsAnalyticsInstanceTimeouts) {
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
      admin_user: cdktf.stringToTerraform(this._adminUser),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      email_notification: cdktf.stringToTerraform(this._emailNotification),
      feature_bundle: cdktf.stringToTerraform(this._featureBundle),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idcs_access_token: cdktf.stringToTerraform(this._idcsAccessToken),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      license_type: cdktf.stringToTerraform(this._licenseType),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      update_channel: cdktf.stringToTerraform(this._updateChannel),
      capacity: analyticsAnalyticsInstanceCapacityToTerraform(this._capacity.internalValue),
      network_endpoint_details: analyticsAnalyticsInstanceNetworkEndpointDetailsToTerraform(this._networkEndpointDetails.internalValue),
      timeouts: analyticsAnalyticsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_user: {
        value: cdktf.stringToHclTerraform(this._adminUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_notification: {
        value: cdktf.stringToHclTerraform(this._emailNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_bundle: {
        value: cdktf.stringToHclTerraform(this._featureBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
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
      idcs_access_token: {
        value: cdktf.stringToHclTerraform(this._idcsAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_channel: {
        value: cdktf.stringToHclTerraform(this._updateChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity: {
        value: analyticsAnalyticsInstanceCapacityToHclTerraform(this._capacity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnalyticsAnalyticsInstanceCapacityList",
      },
      network_endpoint_details: {
        value: analyticsAnalyticsInstanceNetworkEndpointDetailsToHclTerraform(this._networkEndpointDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnalyticsAnalyticsInstanceNetworkEndpointDetailsList",
      },
      timeouts: {
        value: analyticsAnalyticsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AnalyticsAnalyticsInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
