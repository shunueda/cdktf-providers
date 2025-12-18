// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAnalyticsAnalyticsInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}
  */
  readonly capacityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#filter DataOciAnalyticsAnalyticsInstances#filter}
  */
  readonly filter?: DataOciAnalyticsAnalyticsInstancesFilter[] | cdktf.IResolvable;
}
export interface DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity {
}

export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityToTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity | undefined) {
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

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference {
    return new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns {
}

export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsToTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns | undefined) {
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

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference {
    return new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails {
}

export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsToTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails | undefined) {
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
  private _whitelistedVcns = new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList(this, "whitelisted_vcns", false);
  public get whitelistedVcns() {
    return this._whitelistedVcns;
  }
}

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference {
    return new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnalyticsAnalyticsInstancesAnalyticsInstances {
}

export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesToTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstancesAnalyticsInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstancesAnalyticsInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_user - computed: true, optional: false, required: false
  public get adminUser() {
    return this.getStringAttribute('admin_user');
  }

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList(this, "capacity", false);
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
  private _networkEndpointDetails = new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList(this, "network_endpoint_details", false);
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
}

export class DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference {
    return new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnalyticsAnalyticsInstancesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#regex DataOciAnalyticsAnalyticsInstances#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#values DataOciAnalyticsAnalyticsInstances#values}
  */
  readonly values: string[];
}

export function dataOciAnalyticsAnalyticsInstancesFilterToTerraform(struct?: DataOciAnalyticsAnalyticsInstancesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciAnalyticsAnalyticsInstancesFilterToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstancesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciAnalyticsAnalyticsInstancesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstancesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstancesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciAnalyticsAnalyticsInstancesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciAnalyticsAnalyticsInstancesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciAnalyticsAnalyticsInstancesFilterOutputReference {
    return new DataOciAnalyticsAnalyticsInstancesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances oci_analytics_analytics_instances}
*/
export class DataOciAnalyticsAnalyticsInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_analytics_analytics_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstances to import
  * @param importFromId The id of the existing DataOciAnalyticsAnalyticsInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_analytics_analytics_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/analytics_analytics_instances oci_analytics_analytics_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAnalyticsAnalyticsInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAnalyticsAnalyticsInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_analytics_analytics_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityType = config.capacityType;
    this._compartmentId = config.compartmentId;
    this._featureSet = config.featureSet;
    this._id = config.id;
    this._name = config.name;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_instances - computed: true, optional: false, required: false
  private _analyticsInstances = new DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList(this, "analytics_instances", false);
  public get analyticsInstances() {
    return this._analyticsInstances;
  }

  // capacity_type - computed: false, optional: true, required: false
  private _capacityType?: string; 
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }
  public set capacityType(value: string) {
    this._capacityType = value;
  }
  public resetCapacityType() {
    this._capacityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTypeInput() {
    return this._capacityType;
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

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
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

  // state - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciAnalyticsAnalyticsInstancesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciAnalyticsAnalyticsInstancesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_type: cdktf.stringToTerraform(this._capacityType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciAnalyticsAnalyticsInstancesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_type: {
        value: cdktf.stringToHclTerraform(this._capacityType),
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
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciAnalyticsAnalyticsInstancesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciAnalyticsAnalyticsInstancesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
