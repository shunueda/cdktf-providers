// https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveActiveSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A cloud provider string either GCP or AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#cloud_provider ActiveActiveSubscription#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * The grace period for deleting the subscription. If not set, will default to immediate deletion grace period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#customer_managed_key_deletion_grace_period ActiveActiveSubscription#customer_managed_key_deletion_grace_period}
  */
  readonly customerManagedKeyDeletionGracePeriod?: string;
  /**
  * Whether to enable CMK (customer managed key) for the subscription. If this is true, then the subscription will be put in a pending state until you supply the CMEK. See documentation for further details on this process. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#customer_managed_key_enabled ActiveActiveSubscription#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#id ActiveActiveSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A meaningful name to identify the subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#name ActiveActiveSubscription#name}
  */
  readonly name?: string;
  /**
  * Payment method for the requested subscription. If credit card is specified, the payment method id must be defined. This information is only used when creating a new subscription and any changes will be ignored after this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#payment_method ActiveActiveSubscription#payment_method}
  */
  readonly paymentMethod?: string;
  /**
  * A valid payment method pre-defined in the current account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#payment_method_id ActiveActiveSubscription#payment_method_id}
  */
  readonly paymentMethodId?: string;
  /**
  * Whether databases in the subscription should have public endpoints. When set to false, databases will only have private endpoints. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#public_endpoint_access ActiveActiveSubscription#public_endpoint_access}
  */
  readonly publicEndpointAccess?: boolean | cdktf.IResolvable;
  /**
  * Version of Redis to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#redis_version ActiveActiveSubscription#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * creation_plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#creation_plan ActiveActiveSubscription#creation_plan}
  */
  readonly creationPlan?: ActiveActiveSubscriptionCreationPlan;
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#customer_managed_key ActiveActiveSubscription#customer_managed_key}
  */
  readonly customerManagedKey?: ActiveActiveSubscriptionCustomerManagedKey[] | cdktf.IResolvable;
  /**
  * maintenance_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#maintenance_windows ActiveActiveSubscription#maintenance_windows}
  */
  readonly maintenanceWindows?: ActiveActiveSubscriptionMaintenanceWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#timeouts ActiveActiveSubscription#timeouts}
  */
  readonly timeouts?: ActiveActiveSubscriptionTimeouts;
}
export interface ActiveActiveSubscriptionPricing {
}

export function activeActiveSubscriptionPricingToTerraform(struct?: ActiveActiveSubscriptionPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function activeActiveSubscriptionPricingToHclTerraform(struct?: ActiveActiveSubscriptionPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ActiveActiveSubscriptionPricingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionPricing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionPricing | undefined) {
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

export class ActiveActiveSubscriptionPricingList extends cdktf.ComplexList {

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
  public get(index: number): ActiveActiveSubscriptionPricingOutputReference {
    return new ActiveActiveSubscriptionPricingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionCreationPlanRegion {
  /**
  * Deployment CIDR mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#networking_deployment_cidr ActiveActiveSubscription#networking_deployment_cidr}
  */
  readonly networkingDeploymentCidr: string;
  /**
  * Write operations per second for creation plan databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#read_operations_per_second ActiveActiveSubscription#read_operations_per_second}
  */
  readonly readOperationsPerSecond: number;
  /**
  * Deployment region as defined by cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#region ActiveActiveSubscription#region}
  */
  readonly region: string;
  /**
  * Write operations per second for creation plan databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#write_operations_per_second ActiveActiveSubscription#write_operations_per_second}
  */
  readonly writeOperationsPerSecond: number;
}

export function activeActiveSubscriptionCreationPlanRegionToTerraform(struct?: ActiveActiveSubscriptionCreationPlanRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networking_deployment_cidr: cdktf.stringToTerraform(struct!.networkingDeploymentCidr),
    read_operations_per_second: cdktf.numberToTerraform(struct!.readOperationsPerSecond),
    region: cdktf.stringToTerraform(struct!.region),
    write_operations_per_second: cdktf.numberToTerraform(struct!.writeOperationsPerSecond),
  }
}


export function activeActiveSubscriptionCreationPlanRegionToHclTerraform(struct?: ActiveActiveSubscriptionCreationPlanRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networking_deployment_cidr: {
      value: cdktf.stringToHclTerraform(struct!.networkingDeploymentCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_operations_per_second: {
      value: cdktf.numberToHclTerraform(struct!.readOperationsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_operations_per_second: {
      value: cdktf.numberToHclTerraform(struct!.writeOperationsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionCreationPlanRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionCreationPlanRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkingDeploymentCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkingDeploymentCidr = this._networkingDeploymentCidr;
    }
    if (this._readOperationsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOperationsPerSecond = this._readOperationsPerSecond;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._writeOperationsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationsPerSecond = this._writeOperationsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionCreationPlanRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkingDeploymentCidr = undefined;
      this._readOperationsPerSecond = undefined;
      this._region = undefined;
      this._writeOperationsPerSecond = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkingDeploymentCidr = value.networkingDeploymentCidr;
      this._readOperationsPerSecond = value.readOperationsPerSecond;
      this._region = value.region;
      this._writeOperationsPerSecond = value.writeOperationsPerSecond;
    }
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

  // read_operations_per_second - computed: false, optional: false, required: true
  private _readOperationsPerSecond?: number; 
  public get readOperationsPerSecond() {
    return this.getNumberAttribute('read_operations_per_second');
  }
  public set readOperationsPerSecond(value: number) {
    this._readOperationsPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOperationsPerSecondInput() {
    return this._readOperationsPerSecond;
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

  // write_operations_per_second - computed: false, optional: false, required: true
  private _writeOperationsPerSecond?: number; 
  public get writeOperationsPerSecond() {
    return this.getNumberAttribute('write_operations_per_second');
  }
  public set writeOperationsPerSecond(value: number) {
    this._writeOperationsPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationsPerSecondInput() {
    return this._writeOperationsPerSecond;
  }
}

export class ActiveActiveSubscriptionCreationPlanRegionList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionCreationPlanRegion[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionCreationPlanRegionOutputReference {
    return new ActiveActiveSubscriptionCreationPlanRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionCreationPlan {
  /**
  * Maximum amount of data in the dataset for this specific database in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#dataset_size_in_gb ActiveActiveSubscription#dataset_size_in_gb}
  */
  readonly datasetSizeInGb?: number;
  /**
  * (Deprecated) Maximum memory usage for this specific database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#memory_limit_in_gb ActiveActiveSubscription#memory_limit_in_gb}
  */
  readonly memoryLimitInGb?: number;
  /**
  * Modules that will be used by the databases in this subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#modules ActiveActiveSubscription#modules}
  */
  readonly modules?: string[];
  /**
  * The planned number of databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#quantity ActiveActiveSubscription#quantity}
  */
  readonly quantity: number;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#region ActiveActiveSubscription#region}
  */
  readonly region: ActiveActiveSubscriptionCreationPlanRegion[] | cdktf.IResolvable;
}

export function activeActiveSubscriptionCreationPlanToTerraform(struct?: ActiveActiveSubscriptionCreationPlanOutputReference | ActiveActiveSubscriptionCreationPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_size_in_gb: cdktf.numberToTerraform(struct!.datasetSizeInGb),
    memory_limit_in_gb: cdktf.numberToTerraform(struct!.memoryLimitInGb),
    modules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modules),
    quantity: cdktf.numberToTerraform(struct!.quantity),
    region: cdktf.listMapper(activeActiveSubscriptionCreationPlanRegionToTerraform, true)(struct!.region),
  }
}


export function activeActiveSubscriptionCreationPlanToHclTerraform(struct?: ActiveActiveSubscriptionCreationPlanOutputReference | ActiveActiveSubscriptionCreationPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    region: {
      value: cdktf.listMapperHcl(activeActiveSubscriptionCreationPlanRegionToHclTerraform, true)(struct!.region),
      isBlock: true,
      type: "set",
      storageClassType: "ActiveActiveSubscriptionCreationPlanRegionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionCreationPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveActiveSubscriptionCreationPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionCreationPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetSizeInGb = undefined;
      this._memoryLimitInGb = undefined;
      this._modules = undefined;
      this._quantity = undefined;
      this._region.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetSizeInGb = value.datasetSizeInGb;
      this._memoryLimitInGb = value.memoryLimitInGb;
      this._modules = value.modules;
      this._quantity = value.quantity;
      this._region.internalValue = value.region;
    }
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

  // modules - computed: false, optional: true, required: false
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

  // region - computed: false, optional: false, required: true
  private _region = new ActiveActiveSubscriptionCreationPlanRegionList(this, "region", true);
  public get region() {
    return this._region;
  }
  public putRegion(value: ActiveActiveSubscriptionCreationPlanRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface ActiveActiveSubscriptionCustomerManagedKey {
  /**
  * Name of region for the customer managed key as defined by the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#region ActiveActiveSubscription#region}
  */
  readonly region: string;
  /**
  * Resource name of the customer managed key as defined by the cloud provider, e.g. projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#resource_name ActiveActiveSubscription#resource_name}
  */
  readonly resourceName: string;
}

export function activeActiveSubscriptionCustomerManagedKeyToTerraform(struct?: ActiveActiveSubscriptionCustomerManagedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function activeActiveSubscriptionCustomerManagedKeyToHclTerraform(struct?: ActiveActiveSubscriptionCustomerManagedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ActiveActiveSubscriptionCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionCustomerManagedKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionCustomerManagedKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._resourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._resourceName = value.resourceName;
    }
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

export class ActiveActiveSubscriptionCustomerManagedKeyList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionCustomerManagedKey[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionCustomerManagedKeyOutputReference {
    return new ActiveActiveSubscriptionCustomerManagedKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionMaintenanceWindowsWindow {
  /**
  * A list of days on which the window is open ('Monday', 'Tuesday' etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#days ActiveActiveSubscription#days}
  */
  readonly days: string[];
  /**
  * How long maintenance may take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#duration_in_hours ActiveActiveSubscription#duration_in_hours}
  */
  readonly durationInHours: number;
  /**
  * What hour in the day (0-23) may maintenance start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#start_hour ActiveActiveSubscription#start_hour}
  */
  readonly startHour: number;
}

export function activeActiveSubscriptionMaintenanceWindowsWindowToTerraform(struct?: ActiveActiveSubscriptionMaintenanceWindowsWindow | cdktf.IResolvable): any {
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


export function activeActiveSubscriptionMaintenanceWindowsWindowToHclTerraform(struct?: ActiveActiveSubscriptionMaintenanceWindowsWindow | cdktf.IResolvable): any {
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

export class ActiveActiveSubscriptionMaintenanceWindowsWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionMaintenanceWindowsWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveActiveSubscriptionMaintenanceWindowsWindow | cdktf.IResolvable | undefined) {
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

export class ActiveActiveSubscriptionMaintenanceWindowsWindowList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionMaintenanceWindowsWindow[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionMaintenanceWindowsWindowOutputReference {
    return new ActiveActiveSubscriptionMaintenanceWindowsWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionMaintenanceWindows {
  /**
  * Either automatic (Redis specified) or manual (User specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#mode ActiveActiveSubscription#mode}
  */
  readonly mode: string;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#window ActiveActiveSubscription#window}
  */
  readonly window?: ActiveActiveSubscriptionMaintenanceWindowsWindow[] | cdktf.IResolvable;
}

export function activeActiveSubscriptionMaintenanceWindowsToTerraform(struct?: ActiveActiveSubscriptionMaintenanceWindowsOutputReference | ActiveActiveSubscriptionMaintenanceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    window: cdktf.listMapper(activeActiveSubscriptionMaintenanceWindowsWindowToTerraform, true)(struct!.window),
  }
}


export function activeActiveSubscriptionMaintenanceWindowsToHclTerraform(struct?: ActiveActiveSubscriptionMaintenanceWindowsOutputReference | ActiveActiveSubscriptionMaintenanceWindows): any {
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
      value: cdktf.listMapperHcl(activeActiveSubscriptionMaintenanceWindowsWindowToHclTerraform, true)(struct!.window),
      isBlock: true,
      type: "list",
      storageClassType: "ActiveActiveSubscriptionMaintenanceWindowsWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionMaintenanceWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveActiveSubscriptionMaintenanceWindows | undefined {
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

  public set internalValue(value: ActiveActiveSubscriptionMaintenanceWindows | undefined) {
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
  private _window = new ActiveActiveSubscriptionMaintenanceWindowsWindowList(this, "window", false);
  public get window() {
    return this._window;
  }
  public putWindow(value: ActiveActiveSubscriptionMaintenanceWindowsWindow[] | cdktf.IResolvable) {
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
export interface ActiveActiveSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#create ActiveActiveSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#delete ActiveActiveSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#read ActiveActiveSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#update ActiveActiveSubscription#update}
  */
  readonly update?: string;
}

export function activeActiveSubscriptionTimeoutsToTerraform(struct?: ActiveActiveSubscriptionTimeouts | cdktf.IResolvable): any {
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


export function activeActiveSubscriptionTimeoutsToHclTerraform(struct?: ActiveActiveSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class ActiveActiveSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActiveActiveSubscriptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveActiveSubscriptionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription rediscloud_active_active_subscription}
*/
export class ActiveActiveSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveActiveSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveActiveSubscription to import
  * @param importFromId The id of the existing ActiveActiveSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveActiveSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription rediscloud_active_active_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveActiveSubscriptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ActiveActiveSubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_subscription',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.8.0',
        providerVersionConstraint: '2.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._customerManagedKeyDeletionGracePeriod = config.customerManagedKeyDeletionGracePeriod;
    this._customerManagedKeyEnabled = config.customerManagedKeyEnabled;
    this._id = config.id;
    this._name = config.name;
    this._paymentMethod = config.paymentMethod;
    this._paymentMethodId = config.paymentMethodId;
    this._publicEndpointAccess = config.publicEndpointAccess;
    this._redisVersion = config.redisVersion;
    this._creationPlan.internalValue = config.creationPlan;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._maintenanceWindows.internalValue = config.maintenanceWindows;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

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
  private _pricing = new ActiveActiveSubscriptionPricingList(this, "pricing", false);
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

  // creation_plan - computed: false, optional: true, required: false
  private _creationPlan = new ActiveActiveSubscriptionCreationPlanOutputReference(this, "creation_plan");
  public get creationPlan() {
    return this._creationPlan;
  }
  public putCreationPlan(value: ActiveActiveSubscriptionCreationPlan) {
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
  private _customerManagedKey = new ActiveActiveSubscriptionCustomerManagedKeyList(this, "customer_managed_key", false);
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: ActiveActiveSubscriptionCustomerManagedKey[] | cdktf.IResolvable) {
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
  private _maintenanceWindows = new ActiveActiveSubscriptionMaintenanceWindowsOutputReference(this, "maintenance_windows");
  public get maintenanceWindows() {
    return this._maintenanceWindows;
  }
  public putMaintenanceWindows(value: ActiveActiveSubscriptionMaintenanceWindows) {
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
  private _timeouts = new ActiveActiveSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiveActiveSubscriptionTimeouts) {
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
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      customer_managed_key_deletion_grace_period: cdktf.stringToTerraform(this._customerManagedKeyDeletionGracePeriod),
      customer_managed_key_enabled: cdktf.booleanToTerraform(this._customerManagedKeyEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      payment_method: cdktf.stringToTerraform(this._paymentMethod),
      payment_method_id: cdktf.stringToTerraform(this._paymentMethodId),
      public_endpoint_access: cdktf.booleanToTerraform(this._publicEndpointAccess),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      creation_plan: activeActiveSubscriptionCreationPlanToTerraform(this._creationPlan.internalValue),
      customer_managed_key: cdktf.listMapper(activeActiveSubscriptionCustomerManagedKeyToTerraform, true)(this._customerManagedKey.internalValue),
      maintenance_windows: activeActiveSubscriptionMaintenanceWindowsToTerraform(this._maintenanceWindows.internalValue),
      timeouts: activeActiveSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      creation_plan: {
        value: activeActiveSubscriptionCreationPlanToHclTerraform(this._creationPlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveActiveSubscriptionCreationPlanList",
      },
      customer_managed_key: {
        value: cdktf.listMapperHcl(activeActiveSubscriptionCustomerManagedKeyToHclTerraform, true)(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveActiveSubscriptionCustomerManagedKeyList",
      },
      maintenance_windows: {
        value: activeActiveSubscriptionMaintenanceWindowsToHclTerraform(this._maintenanceWindows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveActiveSubscriptionMaintenanceWindowsList",
      },
      timeouts: {
        value: activeActiveSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActiveActiveSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
