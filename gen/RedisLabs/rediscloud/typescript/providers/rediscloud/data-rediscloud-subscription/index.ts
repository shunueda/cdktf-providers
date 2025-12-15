// https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/subscription#id DataRediscloudSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the subscription to filter returned subscriptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/subscription#name DataRediscloudSubscription#name}
  */
  readonly name?: string;
}
export interface DataRediscloudSubscriptionCloudProviderRegionNetworks {
}

export function dataRediscloudSubscriptionCloudProviderRegionNetworksToTerraform(struct?: DataRediscloudSubscriptionCloudProviderRegionNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudSubscriptionCloudProviderRegionNetworksToHclTerraform(struct?: DataRediscloudSubscriptionCloudProviderRegionNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudSubscriptionCloudProviderRegionNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudSubscriptionCloudProviderRegionNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudSubscriptionCloudProviderRegionNetworks | undefined) {
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

export class DataRediscloudSubscriptionCloudProviderRegionNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudSubscriptionCloudProviderRegionNetworksOutputReference {
    return new DataRediscloudSubscriptionCloudProviderRegionNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudSubscriptionCloudProviderRegion {
}

export function dataRediscloudSubscriptionCloudProviderRegionToTerraform(struct?: DataRediscloudSubscriptionCloudProviderRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudSubscriptionCloudProviderRegionToHclTerraform(struct?: DataRediscloudSubscriptionCloudProviderRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudSubscriptionCloudProviderRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudSubscriptionCloudProviderRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudSubscriptionCloudProviderRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multiple_availability_zones - computed: true, optional: false, required: false
  public get multipleAvailabilityZones() {
    return this.getBooleanAttribute('multiple_availability_zones');
  }

  // networking_vpc_id - computed: true, optional: false, required: false
  public get networkingVpcId() {
    return this.getStringAttribute('networking_vpc_id');
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataRediscloudSubscriptionCloudProviderRegionNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // preferred_availability_zones - computed: true, optional: false, required: false
  public get preferredAvailabilityZones() {
    return this.getListAttribute('preferred_availability_zones');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataRediscloudSubscriptionCloudProviderRegionList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudSubscriptionCloudProviderRegionOutputReference {
    return new DataRediscloudSubscriptionCloudProviderRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudSubscriptionCloudProvider {
}

export function dataRediscloudSubscriptionCloudProviderToTerraform(struct?: DataRediscloudSubscriptionCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudSubscriptionCloudProviderToHclTerraform(struct?: DataRediscloudSubscriptionCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudSubscriptionCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudSubscriptionCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudSubscriptionCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // region - computed: true, optional: false, required: false
  private _region = new DataRediscloudSubscriptionCloudProviderRegionList(this, "region", true);
  public get region() {
    return this._region;
  }
}

export class DataRediscloudSubscriptionCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudSubscriptionCloudProviderOutputReference {
    return new DataRediscloudSubscriptionCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudSubscriptionMaintenanceWindowsWindow {
}

export function dataRediscloudSubscriptionMaintenanceWindowsWindowToTerraform(struct?: DataRediscloudSubscriptionMaintenanceWindowsWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudSubscriptionMaintenanceWindowsWindowToHclTerraform(struct?: DataRediscloudSubscriptionMaintenanceWindowsWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudSubscriptionMaintenanceWindowsWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudSubscriptionMaintenanceWindowsWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudSubscriptionMaintenanceWindowsWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getListAttribute('days');
  }

  // duration_in_hours - computed: true, optional: false, required: false
  public get durationInHours() {
    return this.getNumberAttribute('duration_in_hours');
  }

  // start_hour - computed: true, optional: false, required: false
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
}

export class DataRediscloudSubscriptionMaintenanceWindowsWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudSubscriptionMaintenanceWindowsWindowOutputReference {
    return new DataRediscloudSubscriptionMaintenanceWindowsWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudSubscriptionMaintenanceWindows {
}

export function dataRediscloudSubscriptionMaintenanceWindowsToTerraform(struct?: DataRediscloudSubscriptionMaintenanceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudSubscriptionMaintenanceWindowsToHclTerraform(struct?: DataRediscloudSubscriptionMaintenanceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudSubscriptionMaintenanceWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudSubscriptionMaintenanceWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudSubscriptionMaintenanceWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // window - computed: true, optional: false, required: false
  private _window = new DataRediscloudSubscriptionMaintenanceWindowsWindowList(this, "window", false);
  public get window() {
    return this._window;
  }
}

export class DataRediscloudSubscriptionMaintenanceWindowsList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudSubscriptionMaintenanceWindowsOutputReference {
    return new DataRediscloudSubscriptionMaintenanceWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudSubscriptionPricing {
}

export function dataRediscloudSubscriptionPricingToTerraform(struct?: DataRediscloudSubscriptionPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudSubscriptionPricingToHclTerraform(struct?: DataRediscloudSubscriptionPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudSubscriptionPricingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudSubscriptionPricing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudSubscriptionPricing | undefined) {
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

export class DataRediscloudSubscriptionPricingList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudSubscriptionPricingOutputReference {
    return new DataRediscloudSubscriptionPricingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/subscription rediscloud_subscription}
*/
export class DataRediscloudSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudSubscription to import
  * @param importFromId The id of the existing DataRediscloudSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/subscription rediscloud_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudSubscriptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudSubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_subscription',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: true, optional: false, required: false
  private _cloudProvider = new DataRediscloudSubscriptionCloudProviderList(this, "cloud_provider", false);
  public get cloudProvider() {
    return this._cloudProvider;
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

  // maintenance_windows - computed: true, optional: false, required: false
  private _maintenanceWindows = new DataRediscloudSubscriptionMaintenanceWindowsList(this, "maintenance_windows", false);
  public get maintenanceWindows() {
    return this._maintenanceWindows;
  }

  // memory_storage - computed: true, optional: false, required: false
  public get memoryStorage() {
    return this.getStringAttribute('memory_storage');
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

  // number_of_databases - computed: true, optional: false, required: false
  public get numberOfDatabases() {
    return this.getNumberAttribute('number_of_databases');
  }

  // payment_method - computed: true, optional: false, required: false
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }

  // payment_method_id - computed: true, optional: false, required: false
  public get paymentMethodId() {
    return this.getStringAttribute('payment_method_id');
  }

  // pricing - computed: true, optional: false, required: false
  private _pricing = new DataRediscloudSubscriptionPricingList(this, "pricing", false);
  public get pricing() {
    return this._pricing;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
