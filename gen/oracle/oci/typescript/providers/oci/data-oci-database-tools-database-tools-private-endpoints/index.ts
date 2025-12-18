// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}
  */
  readonly endpointServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#filter DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#filter}
  */
  readonly filter?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks {
}

export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksToTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksToHclTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference {
    return new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps {
}

export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsToTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsToHclTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference {
    return new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration {
}

export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationToTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationToHclTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reverse_connections_source_ips - computed: true, optional: false, required: false
  private _reverseConnectionsSourceIps = new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList(this, "reverse_connections_source_ips", false);
  public get reverseConnectionsSourceIps() {
    return this._reverseConnectionsSourceIps;
  }
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference {
    return new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems {
}

export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsToTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsToHclTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_fqdns - computed: true, optional: false, required: false
  public get additionalFqdns() {
    return this.getListAttribute('additional_fqdns');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoint_fqdn - computed: true, optional: false, required: false
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
  }

  // endpoint_service_id - computed: true, optional: false, required: false
  public get endpointServiceId() {
    return this.getStringAttribute('endpoint_service_id');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // private_endpoint_vnic_id - computed: true, optional: false, required: false
  public get privateEndpointVnicId() {
    return this.getStringAttribute('private_endpoint_vnic_id');
  }

  // reverse_connection_configuration - computed: true, optional: false, required: false
  private _reverseConnectionConfiguration = new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList(this, "reverse_connection_configuration", false);
  public get reverseConnectionConfiguration() {
    return this._reverseConnectionConfiguration;
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference {
    return new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection {
}

export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionToTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionToHclTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference {
    return new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterToTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterToHclTerraform(struct?: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference {
    return new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints oci_database_tools_database_tools_private_endpoints}
*/
export class DataOciDatabaseToolsDatabaseToolsPrivateEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_tools_database_tools_private_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import
  * @param importFromId The id of the existing DataOciDatabaseToolsDatabaseToolsPrivateEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_tools_database_tools_private_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_tools_database_tools_private_endpoints oci_database_tools_database_tools_private_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_tools_database_tools_private_endpoints',
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
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._endpointServiceId = config.endpointServiceId;
    this._id = config.id;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._filter.internalValue = config.filter;
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

  // database_tools_private_endpoint_collection - computed: true, optional: false, required: false
  private _databaseToolsPrivateEndpointCollection = new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList(this, "database_tools_private_endpoint_collection", false);
  public get databaseToolsPrivateEndpointCollection() {
    return this._databaseToolsPrivateEndpointCollection;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // endpoint_service_id - computed: false, optional: true, required: false
  private _endpointServiceId?: string; 
  public get endpointServiceId() {
    return this.getStringAttribute('endpoint_service_id');
  }
  public set endpointServiceId(value: string) {
    this._endpointServiceId = value;
  }
  public resetEndpointServiceId() {
    this._endpointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceIdInput() {
    return this._endpointServiceId;
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

  // subnet_id - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      endpoint_service_id: cdktf.stringToTerraform(this._endpointServiceId),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      filter: cdktf.listMapper(dataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_service_id: {
        value: cdktf.stringToHclTerraform(this._endpointServiceId),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
