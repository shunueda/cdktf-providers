// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterSiteHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health#id DataDnacenterSiteHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter. The max number of sites in the returned data set.  Default is 25, and max at 50
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health#limit DataDnacenterSiteHealth#limit}
  */
  readonly limit?: number;
  /**
  * offset query parameter. The offset value, starting from 1, of the first returned site entry.  Default is 1.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health#offset DataDnacenterSiteHealth#offset}
  */
  readonly offset?: number;
  /**
  * siteType query parameter. Type of the site to return.  AREA or BUILDING.  Default to AREA
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health#site_type DataDnacenterSiteHealth#site_type}
  */
  readonly siteType?: string;
  /**
  * timestamp query parameter. Epoch time(in milliseconds) when the Site Hierarchy data is required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health#timestamp DataDnacenterSiteHealth#timestamp}
  */
  readonly timestamp?: string;
}
export interface DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCount {
}

export function dataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCountToTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCountToHclTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fair - computed: true, optional: false, required: false
  public get fair() {
    return this.getNumberAttribute('fair');
  }

  // good - computed: true, optional: false, required: false
  public get good() {
    return this.getNumberAttribute('good');
  }

  // poor - computed: true, optional: false, required: false
  public get poor() {
    return this.getNumberAttribute('poor');
  }
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCountList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCountOutputReference {
    return new DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCount {
}

export function dataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCountToTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCountToHclTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fair - computed: true, optional: false, required: false
  public get fair() {
    return this.getNumberAttribute('fair');
  }

  // good - computed: true, optional: false, required: false
  public get good() {
    return this.getNumberAttribute('good');
  }

  // poor - computed: true, optional: false, required: false
  public get poor() {
    return this.getNumberAttribute('poor');
  }
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCountList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCountOutputReference {
    return new DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCount {
}

export function dataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCountToTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCountToHclTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fair - computed: true, optional: false, required: false
  public get fair() {
    return this.getNumberAttribute('fair');
  }

  // good - computed: true, optional: false, required: false
  public get good() {
    return this.getNumberAttribute('good');
  }

  // poor - computed: true, optional: false, required: false
  public get poor() {
    return this.getNumberAttribute('poor');
  }
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCountList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCountOutputReference {
    return new DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSiteHealthItemsApplicationHealthStats {
}

export function dataDnacenterSiteHealthItemsApplicationHealthStatsToTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSiteHealthItemsApplicationHealthStatsToHclTerraform(struct?: DataDnacenterSiteHealthItemsApplicationHealthStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSiteHealthItemsApplicationHealthStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSiteHealthItemsApplicationHealthStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_total_count - computed: true, optional: false, required: false
  public get appTotalCount() {
    return this.getNumberAttribute('app_total_count');
  }

  // business_irrelevant_app_count - computed: true, optional: false, required: false
  private _businessIrrelevantAppCount = new DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessIrrelevantAppCountList(this, "business_irrelevant_app_count", false);
  public get businessIrrelevantAppCount() {
    return this._businessIrrelevantAppCount;
  }

  // business_relevant_app_count - computed: true, optional: false, required: false
  private _businessRelevantAppCount = new DataDnacenterSiteHealthItemsApplicationHealthStatsBusinessRelevantAppCountList(this, "business_relevant_app_count", false);
  public get businessRelevantAppCount() {
    return this._businessRelevantAppCount;
  }

  // default_health_app_count - computed: true, optional: false, required: false
  private _defaultHealthAppCount = new DataDnacenterSiteHealthItemsApplicationHealthStatsDefaultHealthAppCountList(this, "default_health_app_count", false);
  public get defaultHealthAppCount() {
    return this._defaultHealthAppCount;
  }
}

export class DataDnacenterSiteHealthItemsApplicationHealthStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSiteHealthItemsApplicationHealthStatsOutputReference {
    return new DataDnacenterSiteHealthItemsApplicationHealthStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSiteHealthItems {
}

export function dataDnacenterSiteHealthItemsToTerraform(struct?: DataDnacenterSiteHealthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSiteHealthItemsToHclTerraform(struct?: DataDnacenterSiteHealthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSiteHealthItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSiteHealthItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSiteHealthItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_good_count - computed: true, optional: false, required: false
  public get accessGoodCount() {
    return this.getStringAttribute('access_good_count');
  }

  // access_total_count - computed: true, optional: false, required: false
  public get accessTotalCount() {
    return this.getStringAttribute('access_total_count');
  }

  // application_bytes_total_count - computed: true, optional: false, required: false
  public get applicationBytesTotalCount() {
    return this.getStringAttribute('application_bytes_total_count');
  }

  // application_good_count - computed: true, optional: false, required: false
  public get applicationGoodCount() {
    return this.getStringAttribute('application_good_count');
  }

  // application_health - computed: true, optional: false, required: false
  public get applicationHealth() {
    return this.getStringAttribute('application_health');
  }

  // application_health_stats - computed: true, optional: false, required: false
  private _applicationHealthStats = new DataDnacenterSiteHealthItemsApplicationHealthStatsList(this, "application_health_stats", false);
  public get applicationHealthStats() {
    return this._applicationHealthStats;
  }

  // application_total_count - computed: true, optional: false, required: false
  public get applicationTotalCount() {
    return this.getStringAttribute('application_total_count');
  }

  // client_health_wired - computed: true, optional: false, required: false
  public get clientHealthWired() {
    return this.getStringAttribute('client_health_wired');
  }

  // client_health_wireless - computed: true, optional: false, required: false
  public get clientHealthWireless() {
    return this.getStringAttribute('client_health_wireless');
  }

  // core_good_count - computed: true, optional: false, required: false
  public get coreGoodCount() {
    return this.getStringAttribute('core_good_count');
  }

  // core_total_count - computed: true, optional: false, required: false
  public get coreTotalCount() {
    return this.getStringAttribute('core_total_count');
  }

  // distribution_good_count - computed: true, optional: false, required: false
  public get distributionGoodCount() {
    return this.getStringAttribute('distribution_good_count');
  }

  // distribution_total_count - computed: true, optional: false, required: false
  public get distributionTotalCount() {
    return this.getStringAttribute('distribution_total_count');
  }

  // dnac_info - computed: true, optional: false, required: false
  public get dnacInfo() {
    return this.getStringAttribute('dnac_info');
  }

  // healthy_clients_percentage - computed: true, optional: false, required: false
  public get healthyClientsPercentage() {
    return this.getStringAttribute('healthy_clients_percentage');
  }

  // healthy_network_device_percentage - computed: true, optional: false, required: false
  public get healthyNetworkDevicePercentage() {
    return this.getStringAttribute('healthy_network_device_percentage');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // network_health_access - computed: true, optional: false, required: false
  public get networkHealthAccess() {
    return this.getStringAttribute('network_health_access');
  }

  // network_health_average - computed: true, optional: false, required: false
  public get networkHealthAverage() {
    return this.getStringAttribute('network_health_average');
  }

  // network_health_core - computed: true, optional: false, required: false
  public get networkHealthCore() {
    return this.getStringAttribute('network_health_core');
  }

  // network_health_distribution - computed: true, optional: false, required: false
  public get networkHealthDistribution() {
    return this.getStringAttribute('network_health_distribution');
  }

  // network_health_others - computed: true, optional: false, required: false
  public get networkHealthOthers() {
    return this.getStringAttribute('network_health_others');
  }

  // network_health_router - computed: true, optional: false, required: false
  public get networkHealthRouter() {
    return this.getStringAttribute('network_health_router');
  }

  // network_health_wireless - computed: true, optional: false, required: false
  public get networkHealthWireless() {
    return this.getStringAttribute('network_health_wireless');
  }

  // number_of_clients - computed: true, optional: false, required: false
  public get numberOfClients() {
    return this.getStringAttribute('number_of_clients');
  }

  // number_of_network_device - computed: true, optional: false, required: false
  public get numberOfNetworkDevice() {
    return this.getStringAttribute('number_of_network_device');
  }

  // number_of_wired_clients - computed: true, optional: false, required: false
  public get numberOfWiredClients() {
    return this.getStringAttribute('number_of_wired_clients');
  }

  // number_of_wireless_clients - computed: true, optional: false, required: false
  public get numberOfWirelessClients() {
    return this.getStringAttribute('number_of_wireless_clients');
  }

  // overall_good_devices - computed: true, optional: false, required: false
  public get overallGoodDevices() {
    return this.getStringAttribute('overall_good_devices');
  }

  // parent_site_id - computed: true, optional: false, required: false
  public get parentSiteId() {
    return this.getStringAttribute('parent_site_id');
  }

  // parent_site_name - computed: true, optional: false, required: false
  public get parentSiteName() {
    return this.getStringAttribute('parent_site_name');
  }

  // router_good_count - computed: true, optional: false, required: false
  public get routerGoodCount() {
    return this.getStringAttribute('router_good_count');
  }

  // router_total_count - computed: true, optional: false, required: false
  public get routerTotalCount() {
    return this.getStringAttribute('router_total_count');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // site_type - computed: true, optional: false, required: false
  public get siteType() {
    return this.getStringAttribute('site_type');
  }

  // total_number_of_active_wireless_clients - computed: true, optional: false, required: false
  public get totalNumberOfActiveWirelessClients() {
    return this.getStringAttribute('total_number_of_active_wireless_clients');
  }

  // total_number_of_connected_wired_clients - computed: true, optional: false, required: false
  public get totalNumberOfConnectedWiredClients() {
    return this.getStringAttribute('total_number_of_connected_wired_clients');
  }

  // wired_good_clients - computed: true, optional: false, required: false
  public get wiredGoodClients() {
    return this.getStringAttribute('wired_good_clients');
  }

  // wireless_device_good_count - computed: true, optional: false, required: false
  public get wirelessDeviceGoodCount() {
    return this.getStringAttribute('wireless_device_good_count');
  }

  // wireless_device_total_count - computed: true, optional: false, required: false
  public get wirelessDeviceTotalCount() {
    return this.getStringAttribute('wireless_device_total_count');
  }

  // wireless_good_clients - computed: true, optional: false, required: false
  public get wirelessGoodClients() {
    return this.getStringAttribute('wireless_good_clients');
  }
}

export class DataDnacenterSiteHealthItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSiteHealthItemsOutputReference {
    return new DataDnacenterSiteHealthItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health dnacenter_site_health}
*/
export class DataDnacenterSiteHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_site_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterSiteHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterSiteHealth to import
  * @param importFromId The id of the existing DataDnacenterSiteHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterSiteHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_site_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/site_health dnacenter_site_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterSiteHealthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterSiteHealthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_site_health',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._limit = config.limit;
    this._offset = config.offset;
    this._siteType = config.siteType;
    this._timestamp = config.timestamp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterSiteHealthItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // site_type - computed: false, optional: true, required: false
  private _siteType?: string; 
  public get siteType() {
    return this.getStringAttribute('site_type');
  }
  public set siteType(value: string) {
    this._siteType = value;
  }
  public resetSiteType() {
    this._siteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypeInput() {
    return this._siteType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      site_type: cdktf.stringToTerraform(this._siteType),
      timestamp: cdktf.stringToTerraform(this._timestamp),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_type: {
        value: cdktf.stringToHclTerraform(this._siteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
