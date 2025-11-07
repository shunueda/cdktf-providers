// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAnalyticsAnalyticsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance#analytics_instance_id DataOciAnalyticsAnalyticsInstance#analytics_instance_id}
  */
  readonly analyticsInstanceId: string;
}
export interface DataOciAnalyticsAnalyticsInstanceCapacity {
}

export function dataOciAnalyticsAnalyticsInstanceCapacityToTerraform(struct?: DataOciAnalyticsAnalyticsInstanceCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstanceCapacityToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstanceCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstanceCapacityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstanceCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstanceCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // capacity_value - computed: true, optional: false, required: false
  public get capacityValue() {
    return this.getNumberAttribute('capacity_value');
  }
}

export class DataOciAnalyticsAnalyticsInstanceCapacityList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstanceCapacityOutputReference {
    return new DataOciAnalyticsAnalyticsInstanceCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns {
}

export function dataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsToTerraform(struct?: DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns | undefined) {
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

  // whitelisted_ips - computed: true, optional: false, required: false
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }
}

export class DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference {
    return new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails {
}

export function dataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsToTerraform(struct?: DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_endpoint_type - computed: true, optional: false, required: false
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }

  // network_security_group_ids - computed: true, optional: false, required: false
  public get networkSecurityGroupIds() {
    return this.getListAttribute('network_security_group_ids');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // whitelisted_ips - computed: true, optional: false, required: false
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }

  // whitelisted_services - computed: true, optional: false, required: false
  public get whitelistedServices() {
    return this.getListAttribute('whitelisted_services');
  }

  // whitelisted_vcns - computed: true, optional: false, required: false
  private _whitelistedVcns = new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList(this, "whitelisted_vcns", false);
  public get whitelistedVcns() {
    return this._whitelistedVcns;
  }
}

export class DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference {
    return new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance oci_analytics_analytics_instance}
*/
export class DataOciAnalyticsAnalyticsInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_analytics_analytics_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstance to import
  * @param importFromId The id of the existing DataOciAnalyticsAnalyticsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_analytics_analytics_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance oci_analytics_analytics_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAnalyticsAnalyticsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAnalyticsAnalyticsInstanceConfig) {
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
    this._analyticsInstanceId = config.analyticsInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_user - computed: true, optional: false, required: false
  public get adminUser() {
    return this.getStringAttribute('admin_user');
  }

  // analytics_instance_id - computed: false, optional: false, required: true
  private _analyticsInstanceId?: string; 
  public get analyticsInstanceId() {
    return this.getStringAttribute('analytics_instance_id');
  }
  public set analyticsInstanceId(value: string) {
    this._analyticsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsInstanceIdInput() {
    return this._analyticsInstanceId;
  }

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataOciAnalyticsAnalyticsInstanceCapacityList(this, "capacity", false);
  public get capacity() {
    return this._capacity;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // email_notification - computed: true, optional: false, required: false
  public get emailNotification() {
    return this.getStringAttribute('email_notification');
  }

  // feature_bundle - computed: true, optional: false, required: false
  public get featureBundle() {
    return this.getStringAttribute('feature_bundle');
  }

  // feature_set - computed: true, optional: false, required: false
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: false
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_endpoint_details - computed: true, optional: false, required: false
  private _networkEndpointDetails = new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList(this, "network_endpoint_details", false);
  public get networkEndpointDetails() {
    return this._networkEndpointDetails;
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // update_channel - computed: true, optional: false, required: false
  public get updateChannel() {
    return this.getStringAttribute('update_channel');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_instance_id: cdktf.stringToTerraform(this._analyticsInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_instance_id: {
        value: cdktf.stringToHclTerraform(this._analyticsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
