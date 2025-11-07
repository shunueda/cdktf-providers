// https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The grace period for deleting the subscription. If not set, will default to immediate deletion grace period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#customer_managed_key_deletion_grace_period Subscription#customer_managed_key_deletion_grace_period}
  */
  readonly customerManagedKeyDeletionGracePeriod?: string;
  /**
  * Whether to enable CMK (customer managed key) for the subscription. If this is true, then the subscription will be put in a pending state until you supply the CMEK. See documentation for further details on this process. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#customer_managed_key_enabled Subscription#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#id Subscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Memory storage preference: either ‘ram’ or a combination of 'ram-and-flash’
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#memory_storage Subscription#memory_storage}
  */
  readonly memoryStorage?: string;
  /**
  * A meaningful name to identify the subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#name Subscription#name}
  */
  readonly name?: string;
  /**
  * Payment method for the requested subscription. If credit card is specified, the payment method id must be defined. This information is only used when creating a new subscription and any changes will be ignored after this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#payment_method Subscription#payment_method}
  */
  readonly paymentMethod?: string;
  /**
  * A valid payment method pre-defined in the current account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#payment_method_id Subscription#payment_method_id}
  */
  readonly paymentMethodId?: string;
  /**
  * Whether databases in the subscription should have public endpoints. When set to false, databases will only have private endpoints. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#public_endpoint_access Subscription#public_endpoint_access}
  */
  readonly publicEndpointAccess?: boolean | cdktf.IResolvable;
  /**
  * Version of Redis to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#redis_version Subscription#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * allowlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#allowlist Subscription#allowlist}
  */
  readonly allowlist?: SubscriptionAllowlistStruct;
  /**
  * cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#cloud_provider Subscription#cloud_provider}
  */
  readonly cloudProvider: SubscriptionCloudProvider;
  /**
  * creation_plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#creation_plan Subscription#creation_plan}
  */
  readonly creationPlan?: SubscriptionCreationPlan;
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#customer_managed_key Subscription#customer_managed_key}
  */
  readonly customerManagedKey?: SubscriptionCustomerManagedKey[] | cdktf.IResolvable;
  /**
  * maintenance_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#maintenance_windows Subscription#maintenance_windows}
  */
  readonly maintenanceWindows?: SubscriptionMaintenanceWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#timeouts Subscription#timeouts}
  */
  readonly timeouts?: SubscriptionTimeouts;
}
export interface SubscriptionPricing {
}

export function subscriptionPricingToTerraform(struct?: SubscriptionPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function subscriptionPricingToHclTerraform(struct?: SubscriptionPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SubscriptionPricingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionPricing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionPricing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // price_currency - computed: true, optional: false, required: false
  public get priceCurrency() {
    return this.getStringAttribute('price_currency');
  }

  // price_per_unit - computed: true, optional: false, required: false
  public get pricePerUnit() {
    return this.getNumberAttribute('price_per_unit');
  }

  // price_period - computed: true, optional: false, required: false
  public get pricePeriod() {
    return this.getStringAttribute('price_period');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // quantity_measurement - computed: true, optional: false, required: false
  public get quantityMeasurement() {
    return this.getStringAttribute('quantity_measurement');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_details - computed: true, optional: false, required: false
  public get typeDetails() {
    return this.getStringAttribute('type_details');
  }
}

export class SubscriptionPricingList extends cdktf.ComplexList {

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
  public get(index: number): SubscriptionPricingOutputReference {
    return new SubscriptionPricingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionAllowlistStruct {
  /**
  * Set of CIDR ranges that are allowed to access the databases associated with this subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#cidrs Subscription#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Set of security groups that are allowed to access the databases associated with this subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#security_group_ids Subscription#security_group_ids}
  */
  readonly securityGroupIds: string[];
}

export function subscriptionAllowlistStructToTerraform(struct?: SubscriptionAllowlistStructOutputReference | SubscriptionAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function subscriptionAllowlistStructToHclTerraform(struct?: SubscriptionAllowlistStructOutputReference | SubscriptionAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionAllowlistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubscriptionAllowlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionAllowlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
      this._securityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
      this._securityGroupIds = value.securityGroupIds;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }
}
export interface SubscriptionCloudProviderRegionNetworks {
}

export function subscriptionCloudProviderRegionNetworksToTerraform(struct?: SubscriptionCloudProviderRegionNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function subscriptionCloudProviderRegionNetworksToHclTerraform(struct?: SubscriptionCloudProviderRegionNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SubscriptionCloudProviderRegionNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionCloudProviderRegionNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCloudProviderRegionNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // networking_deployment_cidr - computed: true, optional: false, required: false
  public get networkingDeploymentCidr() {
    return this.getStringAttribute('networking_deployment_cidr');
  }

  // networking_subnet_id - computed: true, optional: false, required: false
  public get networkingSubnetId() {
    return this.getStringAttribute('networking_subnet_id');
  }

  // networking_vpc_id - computed: true, optional: false, required: false
  public get networkingVpcId() {
    return this.getStringAttribute('networking_vpc_id');
  }
}

export class SubscriptionCloudProviderRegionNetworksList extends cdktf.ComplexList {

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
  public get(index: number): SubscriptionCloudProviderRegionNetworksOutputReference {
    return new SubscriptionCloudProviderRegionNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionCloudProviderRegion {
  /**
  * Support deployment on multiple availability zones within the selected region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#multiple_availability_zones Subscription#multiple_availability_zones}
  */
  readonly multipleAvailabilityZones?: boolean | cdktf.IResolvable;
  /**
  * Deployment CIDR mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#networking_deployment_cidr Subscription#networking_deployment_cidr}
  */
  readonly networkingDeploymentCidr: string;
  /**
  * Either an existing VPC Id (already exists in the specific region) or create a new VPC (if no VPC is specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#networking_vpc_id Subscription#networking_vpc_id}
  */
  readonly networkingVpcId?: string;
  /**
  * List of availability zones used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#preferred_availability_zones Subscription#preferred_availability_zones}
  */
  readonly preferredAvailabilityZones?: string[];
  /**
  * Deployment region as defined by cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#region Subscription#region}
  */
  readonly region: string;
}

export function subscriptionCloudProviderRegionToTerraform(struct?: SubscriptionCloudProviderRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiple_availability_zones: cdktf.booleanToTerraform(struct!.multipleAvailabilityZones),
    networking_deployment_cidr: cdktf.stringToTerraform(struct!.networkingDeploymentCidr),
    networking_vpc_id: cdktf.stringToTerraform(struct!.networkingVpcId),
    preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredAvailabilityZones),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function subscriptionCloudProviderRegionToHclTerraform(struct?: SubscriptionCloudProviderRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiple_availability_zones: {
      value: cdktf.booleanToHclTerraform(struct!.multipleAvailabilityZones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    networking_deployment_cidr: {
      value: cdktf.stringToHclTerraform(struct!.networkingDeploymentCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networking_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.networkingVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredAvailabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionCloudProviderRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionCloudProviderRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multipleAvailabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleAvailabilityZones = this._multipleAvailabilityZones;
    }
    if (this._networkingDeploymentCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkingDeploymentCidr = this._networkingDeploymentCidr;
    }
    if (this._networkingVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkingVpcId = this._networkingVpcId;
    }
    if (this._preferredAvailabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredAvailabilityZones = this._preferredAvailabilityZones;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCloudProviderRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multipleAvailabilityZones = undefined;
      this._networkingDeploymentCidr = undefined;
      this._networkingVpcId = undefined;
      this._preferredAvailabilityZones = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multipleAvailabilityZones = value.multipleAvailabilityZones;
      this._networkingDeploymentCidr = value.networkingDeploymentCidr;
      this._networkingVpcId = value.networkingVpcId;
      this._preferredAvailabilityZones = value.preferredAvailabilityZones;
      this._region = value.region;
    }
  }

  // multiple_availability_zones - computed: false, optional: true, required: false
  private _multipleAvailabilityZones?: boolean | cdktf.IResolvable; 
  public get multipleAvailabilityZones() {
    return this.getBooleanAttribute('multiple_availability_zones');
  }
  public set multipleAvailabilityZones(value: boolean | cdktf.IResolvable) {
    this._multipleAvailabilityZones = value;
  }
  public resetMultipleAvailabilityZones() {
    this._multipleAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleAvailabilityZonesInput() {
    return this._multipleAvailabilityZones;
  }

  // networking_deployment_cidr - computed: false, optional: false, required: true
  private _networkingDeploymentCidr?: string; 
  public get networkingDeploymentCidr() {
    return this.getStringAttribute('networking_deployment_cidr');
  }
  public set networkingDeploymentCidr(value: string) {
    this._networkingDeploymentCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingDeploymentCidrInput() {
    return this._networkingDeploymentCidr;
  }

  // networking_vpc_id - computed: false, optional: true, required: false
  private _networkingVpcId?: string; 
  public get networkingVpcId() {
    return this.getStringAttribute('networking_vpc_id');
  }
  public set networkingVpcId(value: string) {
    this._networkingVpcId = value;
  }
  public resetNetworkingVpcId() {
    this._networkingVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingVpcIdInput() {
    return this._networkingVpcId;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new SubscriptionCloudProviderRegionNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // preferred_availability_zones - computed: true, optional: true, required: false
  private _preferredAvailabilityZones?: string[]; 
  public get preferredAvailabilityZones() {
    return this.getListAttribute('preferred_availability_zones');
  }
  public set preferredAvailabilityZones(value: string[]) {
    this._preferredAvailabilityZones = value;
  }
  public resetPreferredAvailabilityZones() {
    this._preferredAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAvailabilityZonesInput() {
    return this._preferredAvailabilityZones;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SubscriptionCloudProviderRegionList extends cdktf.ComplexList {
  public internalValue? : SubscriptionCloudProviderRegion[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionCloudProviderRegionOutputReference {
    return new SubscriptionCloudProviderRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionCloudProvider {
  /**
  * Cloud account identifier. Default: Redis Labs internal cloud account (using Cloud Account Id = 1 implies using Redis Labs internal cloud account). Note that a GCP subscription can be created only with Redis Labs internal cloud account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#cloud_account_id Subscription#cloud_account_id}
  */
  readonly cloudAccountId?: string;
  /**
  * The cloud provider to use with the subscription, (either `AWS` or `GCP`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#provider Subscription#provider}
  */
  readonly provider?: string;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#region Subscription#region}
  */
  readonly region: SubscriptionCloudProviderRegion[] | cdktf.IResolvable;
}

export function subscriptionCloudProviderToTerraform(struct?: SubscriptionCloudProviderOutputReference | SubscriptionCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_id: cdktf.stringToTerraform(struct!.cloudAccountId),
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.listMapper(subscriptionCloudProviderRegionToTerraform, true)(struct!.region),
  }
}


export function subscriptionCloudProviderToHclTerraform(struct?: SubscriptionCloudProviderOutputReference | SubscriptionCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.listMapperHcl(subscriptionCloudProviderRegionToHclTerraform, true)(struct!.region),
      isBlock: true,
      type: "set",
      storageClassType: "SubscriptionCloudProviderRegionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubscriptionCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountId = this._cloudAccountId;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudAccountId = undefined;
      this._provider = undefined;
      this._region.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudAccountId = value.cloudAccountId;
      this._provider = value.provider;
      this._region.internalValue = value.region;
    }
  }

  // cloud_account_id - computed: false, optional: true, required: false
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  public resetCloudAccountId() {
    this._cloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: false, optional: false, required: true
  private _region = new SubscriptionCloudProviderRegionList(this, "region", true);
  public get region() {
    return this._region;
  }
  public putRegion(value: SubscriptionCloudProviderRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface SubscriptionCreationPlan {
  /**
  * Relevant only to ram-and-flash clusters. Estimated average size (measured in bytes) of the items stored in the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#average_item_size_in_bytes Subscription#average_item_size_in_bytes}
  */
  readonly averageItemSizeInBytes?: number;
  /**
  * Maximum amount of data in the dataset for this specific database in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#dataset_size_in_gb Subscription#dataset_size_in_gb}
  */
  readonly datasetSizeInGb?: number;
  /**
  * (Deprecated) Maximum memory usage for each database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#memory_limit_in_gb Subscription#memory_limit_in_gb}
  */
  readonly memoryLimitInGb?: number;
  /**
  * Modules that will be used by the databases in this subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#modules Subscription#modules}
  */
  readonly modules?: string[];
  /**
  * The planned number of databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#quantity Subscription#quantity}
  */
  readonly quantity: number;
  /**
  * Query performance factor for this specific database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#query_performance_factor Subscription#query_performance_factor}
  */
  readonly queryPerformanceFactor?: string;
  /**
  * Databases replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#replication Subscription#replication}
  */
  readonly replication: boolean | cdktf.IResolvable;
  /**
  * Support Redis open-source (OSS) Cluster API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#support_oss_cluster_api Subscription#support_oss_cluster_api}
  */
  readonly supportOssClusterApi?: boolean | cdktf.IResolvable;
  /**
  * Throughput measurement method, (either ‘number-of-shards’ or ‘operations-per-second’)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#throughput_measurement_by Subscription#throughput_measurement_by}
  */
  readonly throughputMeasurementBy: string;
  /**
  * Throughput value (as applies to selected measurement method)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#throughput_measurement_value Subscription#throughput_measurement_value}
  */
  readonly throughputMeasurementValue: number;
}

export function subscriptionCreationPlanToTerraform(struct?: SubscriptionCreationPlanOutputReference | SubscriptionCreationPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_item_size_in_bytes: cdktf.numberToTerraform(struct!.averageItemSizeInBytes),
    dataset_size_in_gb: cdktf.numberToTerraform(struct!.datasetSizeInGb),
    memory_limit_in_gb: cdktf.numberToTerraform(struct!.memoryLimitInGb),
    modules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modules),
    quantity: cdktf.numberToTerraform(struct!.quantity),
    query_performance_factor: cdktf.stringToTerraform(struct!.queryPerformanceFactor),
    replication: cdktf.booleanToTerraform(struct!.replication),
    support_oss_cluster_api: cdktf.booleanToTerraform(struct!.supportOssClusterApi),
    throughput_measurement_by: cdktf.stringToTerraform(struct!.throughputMeasurementBy),
    throughput_measurement_value: cdktf.numberToTerraform(struct!.throughputMeasurementValue),
  }
}


export function subscriptionCreationPlanToHclTerraform(struct?: SubscriptionCreationPlanOutputReference | SubscriptionCreationPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_item_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.averageItemSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dataset_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.datasetSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimitInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    modules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_performance_factor: {
      value: cdktf.stringToHclTerraform(struct!.queryPerformanceFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication: {
      value: cdktf.booleanToHclTerraform(struct!.replication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    support_oss_cluster_api: {
      value: cdktf.booleanToHclTerraform(struct!.supportOssClusterApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    throughput_measurement_by: {
      value: cdktf.stringToHclTerraform(struct!.throughputMeasurementBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput_measurement_value: {
      value: cdktf.numberToHclTerraform(struct!.throughputMeasurementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionCreationPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubscriptionCreationPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageItemSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageItemSizeInBytes = this._averageItemSizeInBytes;
    }
    if (this._datasetSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetSizeInGb = this._datasetSizeInGb;
    }
    if (this._memoryLimitInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitInGb = this._memoryLimitInGb;
    }
    if (this._modules !== undefined) {
      hasAnyValues = true;
      internalValueResult.modules = this._modules;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._queryPerformanceFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPerformanceFactor = this._queryPerformanceFactor;
    }
    if (this._replication !== undefined) {
      hasAnyValues = true;
      internalValueResult.replication = this._replication;
    }
    if (this._supportOssClusterApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportOssClusterApi = this._supportOssClusterApi;
    }
    if (this._throughputMeasurementBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputMeasurementBy = this._throughputMeasurementBy;
    }
    if (this._throughputMeasurementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputMeasurementValue = this._throughputMeasurementValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCreationPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageItemSizeInBytes = undefined;
      this._datasetSizeInGb = undefined;
      this._memoryLimitInGb = undefined;
      this._modules = undefined;
      this._quantity = undefined;
      this._queryPerformanceFactor = undefined;
      this._replication = undefined;
      this._supportOssClusterApi = undefined;
      this._throughputMeasurementBy = undefined;
      this._throughputMeasurementValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageItemSizeInBytes = value.averageItemSizeInBytes;
      this._datasetSizeInGb = value.datasetSizeInGb;
      this._memoryLimitInGb = value.memoryLimitInGb;
      this._modules = value.modules;
      this._quantity = value.quantity;
      this._queryPerformanceFactor = value.queryPerformanceFactor;
      this._replication = value.replication;
      this._supportOssClusterApi = value.supportOssClusterApi;
      this._throughputMeasurementBy = value.throughputMeasurementBy;
      this._throughputMeasurementValue = value.throughputMeasurementValue;
    }
  }

  // average_item_size_in_bytes - computed: true, optional: true, required: false
  private _averageItemSizeInBytes?: number; 
  public get averageItemSizeInBytes() {
    return this.getNumberAttribute('average_item_size_in_bytes');
  }
  public set averageItemSizeInBytes(value: number) {
    this._averageItemSizeInBytes = value;
  }
  public resetAverageItemSizeInBytes() {
    this._averageItemSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageItemSizeInBytesInput() {
    return this._averageItemSizeInBytes;
  }

  // dataset_size_in_gb - computed: false, optional: true, required: false
  private _datasetSizeInGb?: number; 
  public get datasetSizeInGb() {
    return this.getNumberAttribute('dataset_size_in_gb');
  }
  public set datasetSizeInGb(value: number) {
    this._datasetSizeInGb = value;
  }
  public resetDatasetSizeInGb() {
    this._datasetSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetSizeInGbInput() {
    return this._datasetSizeInGb;
  }

  // memory_limit_in_gb - computed: false, optional: true, required: false
  private _memoryLimitInGb?: number; 
  public get memoryLimitInGb() {
    return this.getNumberAttribute('memory_limit_in_gb');
  }
  public set memoryLimitInGb(value: number) {
    this._memoryLimitInGb = value;
  }
  public resetMemoryLimitInGb() {
    this._memoryLimitInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInGbInput() {
    return this._memoryLimitInGb;
  }

  // modules - computed: true, optional: true, required: false
  private _modules?: string[]; 
  public get modules() {
    return this.getListAttribute('modules');
  }
  public set modules(value: string[]) {
    this._modules = value;
  }
  public resetModules() {
    this._modules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules;
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // query_performance_factor - computed: true, optional: true, required: false
  private _queryPerformanceFactor?: string; 
  public get queryPerformanceFactor() {
    return this.getStringAttribute('query_performance_factor');
  }
  public set queryPerformanceFactor(value: string) {
    this._queryPerformanceFactor = value;
  }
  public resetQueryPerformanceFactor() {
    this._queryPerformanceFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPerformanceFactorInput() {
    return this._queryPerformanceFactor;
  }

  // replication - computed: false, optional: false, required: true
  private _replication?: boolean | cdktf.IResolvable; 
  public get replication() {
    return this.getBooleanAttribute('replication');
  }
  public set replication(value: boolean | cdktf.IResolvable) {
    this._replication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication;
  }

  // support_oss_cluster_api - computed: false, optional: true, required: false
  private _supportOssClusterApi?: boolean | cdktf.IResolvable; 
  public get supportOssClusterApi() {
    return this.getBooleanAttribute('support_oss_cluster_api');
  }
  public set supportOssClusterApi(value: boolean | cdktf.IResolvable) {
    this._supportOssClusterApi = value;
  }
  public resetSupportOssClusterApi() {
    this._supportOssClusterApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportOssClusterApiInput() {
    return this._supportOssClusterApi;
  }

  // throughput_measurement_by - computed: false, optional: false, required: true
  private _throughputMeasurementBy?: string; 
  public get throughputMeasurementBy() {
    return this.getStringAttribute('throughput_measurement_by');
  }
  public set throughputMeasurementBy(value: string) {
    this._throughputMeasurementBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputMeasurementByInput() {
    return this._throughputMeasurementBy;
  }

  // throughput_measurement_value - computed: false, optional: false, required: true
  private _throughputMeasurementValue?: number; 
  public get throughputMeasurementValue() {
    return this.getNumberAttribute('throughput_measurement_value');
  }
  public set throughputMeasurementValue(value: number) {
    this._throughputMeasurementValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputMeasurementValueInput() {
    return this._throughputMeasurementValue;
  }
}
export interface SubscriptionCustomerManagedKey {
  /**
  * Resource name of the customer managed key as defined by the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#resource_name Subscription#resource_name}
  */
  readonly resourceName: string;
}

export function subscriptionCustomerManagedKeyToTerraform(struct?: SubscriptionCustomerManagedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function subscriptionCustomerManagedKeyToHclTerraform(struct?: SubscriptionCustomerManagedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionCustomerManagedKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCustomerManagedKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceName = value.resourceName;
    }
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

export class SubscriptionCustomerManagedKeyList extends cdktf.ComplexList {
  public internalValue? : SubscriptionCustomerManagedKey[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionCustomerManagedKeyOutputReference {
    return new SubscriptionCustomerManagedKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionMaintenanceWindowsWindow {
  /**
  * A list of days on which the window is open ('Monday', 'Tuesday' etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#days Subscription#days}
  */
  readonly days: string[];
  /**
  * How long maintenance may take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#duration_in_hours Subscription#duration_in_hours}
  */
  readonly durationInHours: number;
  /**
  * What hour in the day (0-23) may maintenance start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#start_hour Subscription#start_hour}
  */
  readonly startHour: number;
}

export function subscriptionMaintenanceWindowsWindowToTerraform(struct?: SubscriptionMaintenanceWindowsWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    duration_in_hours: cdktf.numberToTerraform(struct!.durationInHours),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
  }
}


export function subscriptionMaintenanceWindowsWindowToHclTerraform(struct?: SubscriptionMaintenanceWindowsWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.durationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionMaintenanceWindowsWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionMaintenanceWindowsWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._durationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInHours = this._durationInHours;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionMaintenanceWindowsWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._durationInHours = undefined;
      this._startHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._durationInHours = value.durationInHours;
      this._startHour = value.startHour;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // duration_in_hours - computed: false, optional: false, required: true
  private _durationInHours?: number; 
  public get durationInHours() {
    return this.getNumberAttribute('duration_in_hours');
  }
  public set durationInHours(value: number) {
    this._durationInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInHoursInput() {
    return this._durationInHours;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }
}

export class SubscriptionMaintenanceWindowsWindowList extends cdktf.ComplexList {
  public internalValue? : SubscriptionMaintenanceWindowsWindow[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionMaintenanceWindowsWindowOutputReference {
    return new SubscriptionMaintenanceWindowsWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionMaintenanceWindows {
  /**
  * Either automatic (Redis specified) or manual (User specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#mode Subscription#mode}
  */
  readonly mode: string;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#window Subscription#window}
  */
  readonly window?: SubscriptionMaintenanceWindowsWindow[] | cdktf.IResolvable;
}

export function subscriptionMaintenanceWindowsToTerraform(struct?: SubscriptionMaintenanceWindowsOutputReference | SubscriptionMaintenanceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    window: cdktf.listMapper(subscriptionMaintenanceWindowsWindowToTerraform, true)(struct!.window),
  }
}


export function subscriptionMaintenanceWindowsToHclTerraform(struct?: SubscriptionMaintenanceWindowsOutputReference | SubscriptionMaintenanceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: cdktf.listMapperHcl(subscriptionMaintenanceWindowsWindowToHclTerraform, true)(struct!.window),
      isBlock: true,
      type: "list",
      storageClassType: "SubscriptionMaintenanceWindowsWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionMaintenanceWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubscriptionMaintenanceWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionMaintenanceWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._window.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._window.internalValue = value.window;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // window - computed: false, optional: true, required: false
  private _window = new SubscriptionMaintenanceWindowsWindowList(this, "window", false);
  public get window() {
    return this._window;
  }
  public putWindow(value: SubscriptionMaintenanceWindowsWindow[] | cdktf.IResolvable) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}
export interface SubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#create Subscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#delete Subscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#read Subscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#update Subscription#update}
  */
  readonly update?: string;
}

export function subscriptionTimeoutsToTerraform(struct?: SubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function subscriptionTimeoutsToHclTerraform(struct?: SubscriptionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class SubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubscriptionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription rediscloud_subscription}
*/
export class Subscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subscription to import
  * @param importFromId The id of the existing Subscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription rediscloud_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: SubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_subscription',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerManagedKeyDeletionGracePeriod = config.customerManagedKeyDeletionGracePeriod;
    this._customerManagedKeyEnabled = config.customerManagedKeyEnabled;
    this._id = config.id;
    this._memoryStorage = config.memoryStorage;
    this._name = config.name;
    this._paymentMethod = config.paymentMethod;
    this._paymentMethodId = config.paymentMethodId;
    this._publicEndpointAccess = config.publicEndpointAccess;
    this._redisVersion = config.redisVersion;
    this._allowlist.internalValue = config.allowlist;
    this._cloudProvider.internalValue = config.cloudProvider;
    this._creationPlan.internalValue = config.creationPlan;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._maintenanceWindows.internalValue = config.maintenanceWindows;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_key_deletion_grace_period - computed: false, optional: true, required: false
  private _customerManagedKeyDeletionGracePeriod?: string; 
  public get customerManagedKeyDeletionGracePeriod() {
    return this.getStringAttribute('customer_managed_key_deletion_grace_period');
  }
  public set customerManagedKeyDeletionGracePeriod(value: string) {
    this._customerManagedKeyDeletionGracePeriod = value;
  }
  public resetCustomerManagedKeyDeletionGracePeriod() {
    this._customerManagedKeyDeletionGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyDeletionGracePeriodInput() {
    return this._customerManagedKeyDeletionGracePeriod;
  }

  // customer_managed_key_enabled - computed: false, optional: true, required: false
  private _customerManagedKeyEnabled?: boolean | cdktf.IResolvable; 
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }
  public set customerManagedKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._customerManagedKeyEnabled = value;
  }
  public resetCustomerManagedKeyEnabled() {
    this._customerManagedKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyEnabledInput() {
    return this._customerManagedKeyEnabled;
  }

  // customer_managed_key_redis_service_account - computed: true, optional: false, required: false
  public get customerManagedKeyRedisServiceAccount() {
    return this.getStringAttribute('customer_managed_key_redis_service_account');
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

  // memory_storage - computed: false, optional: true, required: false
  private _memoryStorage?: string; 
  public get memoryStorage() {
    return this.getStringAttribute('memory_storage');
  }
  public set memoryStorage(value: string) {
    this._memoryStorage = value;
  }
  public resetMemoryStorage() {
    this._memoryStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStorageInput() {
    return this._memoryStorage;
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

  // payment_method - computed: false, optional: true, required: false
  private _paymentMethod?: string; 
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }
  public resetPaymentMethod() {
    this._paymentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMethodInput() {
    return this._paymentMethod;
  }

  // payment_method_id - computed: true, optional: true, required: false
  private _paymentMethodId?: string; 
  public get paymentMethodId() {
    return this.getStringAttribute('payment_method_id');
  }
  public set paymentMethodId(value: string) {
    this._paymentMethodId = value;
  }
  public resetPaymentMethodId() {
    this._paymentMethodId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMethodIdInput() {
    return this._paymentMethodId;
  }

  // pricing - computed: true, optional: false, required: false
  private _pricing = new SubscriptionPricingList(this, "pricing", false);
  public get pricing() {
    return this._pricing;
  }

  // public_endpoint_access - computed: false, optional: true, required: false
  private _publicEndpointAccess?: boolean | cdktf.IResolvable; 
  public get publicEndpointAccess() {
    return this.getBooleanAttribute('public_endpoint_access');
  }
  public set publicEndpointAccess(value: boolean | cdktf.IResolvable) {
    this._publicEndpointAccess = value;
  }
  public resetPublicEndpointAccess() {
    this._publicEndpointAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointAccessInput() {
    return this._publicEndpointAccess;
  }

  // redis_version - computed: false, optional: true, required: false
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // allowlist - computed: false, optional: true, required: false
  private _allowlist = new SubscriptionAllowlistStructOutputReference(this, "allowlist");
  public get allowlist() {
    return this._allowlist;
  }
  public putAllowlist(value: SubscriptionAllowlistStruct) {
    this._allowlist.internalValue = value;
  }
  public resetAllowlist() {
    this._allowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist.internalValue;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider = new SubscriptionCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }
  public putCloudProvider(value: SubscriptionCloudProvider) {
    this._cloudProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider.internalValue;
  }

  // creation_plan - computed: false, optional: true, required: false
  private _creationPlan = new SubscriptionCreationPlanOutputReference(this, "creation_plan");
  public get creationPlan() {
    return this._creationPlan;
  }
  public putCreationPlan(value: SubscriptionCreationPlan) {
    this._creationPlan.internalValue = value;
  }
  public resetCreationPlan() {
    this._creationPlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationPlanInput() {
    return this._creationPlan.internalValue;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new SubscriptionCustomerManagedKeyList(this, "customer_managed_key", false);
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: SubscriptionCustomerManagedKey[] | cdktf.IResolvable) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // maintenance_windows - computed: false, optional: true, required: false
  private _maintenanceWindows = new SubscriptionMaintenanceWindowsOutputReference(this, "maintenance_windows");
  public get maintenanceWindows() {
    return this._maintenanceWindows;
  }
  public putMaintenanceWindows(value: SubscriptionMaintenanceWindows) {
    this._maintenanceWindows.internalValue = value;
  }
  public resetMaintenanceWindows() {
    this._maintenanceWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowsInput() {
    return this._maintenanceWindows.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubscriptionTimeouts) {
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
      customer_managed_key_deletion_grace_period: cdktf.stringToTerraform(this._customerManagedKeyDeletionGracePeriod),
      customer_managed_key_enabled: cdktf.booleanToTerraform(this._customerManagedKeyEnabled),
      id: cdktf.stringToTerraform(this._id),
      memory_storage: cdktf.stringToTerraform(this._memoryStorage),
      name: cdktf.stringToTerraform(this._name),
      payment_method: cdktf.stringToTerraform(this._paymentMethod),
      payment_method_id: cdktf.stringToTerraform(this._paymentMethodId),
      public_endpoint_access: cdktf.booleanToTerraform(this._publicEndpointAccess),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      allowlist: subscriptionAllowlistStructToTerraform(this._allowlist.internalValue),
      cloud_provider: subscriptionCloudProviderToTerraform(this._cloudProvider.internalValue),
      creation_plan: subscriptionCreationPlanToTerraform(this._creationPlan.internalValue),
      customer_managed_key: cdktf.listMapper(subscriptionCustomerManagedKeyToTerraform, true)(this._customerManagedKey.internalValue),
      maintenance_windows: subscriptionMaintenanceWindowsToTerraform(this._maintenanceWindows.internalValue),
      timeouts: subscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_managed_key_deletion_grace_period: {
        value: cdktf.stringToHclTerraform(this._customerManagedKeyDeletionGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._customerManagedKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_storage: {
        value: cdktf.stringToHclTerraform(this._memoryStorage),
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
      payment_method: {
        value: cdktf.stringToHclTerraform(this._paymentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_method_id: {
        value: cdktf.stringToHclTerraform(this._paymentMethodId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_endpoint_access: {
        value: cdktf.booleanToHclTerraform(this._publicEndpointAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redis_version: {
        value: cdktf.stringToHclTerraform(this._redisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowlist: {
        value: subscriptionAllowlistStructToHclTerraform(this._allowlist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionAllowlistStructList",
      },
      cloud_provider: {
        value: subscriptionCloudProviderToHclTerraform(this._cloudProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionCloudProviderList",
      },
      creation_plan: {
        value: subscriptionCreationPlanToHclTerraform(this._creationPlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionCreationPlanList",
      },
      customer_managed_key: {
        value: cdktf.listMapperHcl(subscriptionCustomerManagedKeyToHclTerraform, true)(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionCustomerManagedKeyList",
      },
      maintenance_windows: {
        value: subscriptionMaintenanceWindowsToHclTerraform(this._maintenanceWindows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionMaintenanceWindowsList",
      },
      timeouts: {
        value: subscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
