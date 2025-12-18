// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMulticloudNetworkAnchorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor#external_location DataOciMulticloudNetworkAnchor#external_location}
  */
  readonly externalLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor#network_anchor_id DataOciMulticloudNetworkAnchor#network_anchor_id}
  */
  readonly networkAnchorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor#should_fetch_vcn_name DataOciMulticloudNetworkAnchor#should_fetch_vcn_name}
  */
  readonly shouldFetchVcnName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor#subscription_id DataOciMulticloudNetworkAnchor#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor#subscription_service_name DataOciMulticloudNetworkAnchor#subscription_service_name}
  */
  readonly subscriptionServiceName: string;
}
export interface DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItem {
}

export function dataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItemToTerraform(struct?: DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItemToHclTerraform(struct?: DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // csp_additional_properties - computed: true, optional: false, required: false
  private _cspAdditionalProperties = new cdktf.StringMap(this, "csp_additional_properties");
  public get cspAdditionalProperties() {
    return this._cspAdditionalProperties;
  }

  // dns_forwarding_config - computed: true, optional: false, required: false
  public get dnsForwardingConfig() {
    return this.getListAttribute('dns_forwarding_config');
  }

  // network_anchor_uri - computed: true, optional: false, required: false
  public get networkAnchorUri() {
    return this.getStringAttribute('network_anchor_uri');
  }

  // odb_network_id - computed: true, optional: false, required: false
  public get odbNetworkId() {
    return this.getStringAttribute('odb_network_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItemList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItemOutputReference {
    return new DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudNetworkAnchorOciMetadataItemDns {
}

export function dataOciMulticloudNetworkAnchorOciMetadataItemDnsToTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItemDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudNetworkAnchorOciMetadataItemDnsToHclTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItemDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudNetworkAnchorOciMetadataItemDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudNetworkAnchorOciMetadataItemDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_domain_name - computed: true, optional: false, required: false
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudNetworkAnchorOciMetadataItemDnsOutputReference {
    return new DataOciMulticloudNetworkAnchorOciMetadataItemDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudNetworkAnchorOciMetadataItemSubnets {
}

export function dataOciMulticloudNetworkAnchorOciMetadataItemSubnetsToTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItemSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudNetworkAnchorOciMetadataItemSubnetsToHclTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItemSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudNetworkAnchorOciMetadataItemSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudNetworkAnchorOciMetadataItemSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudNetworkAnchorOciMetadataItemSubnetsOutputReference {
    return new DataOciMulticloudNetworkAnchorOciMetadataItemSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudNetworkAnchorOciMetadataItemVcn {
}

export function dataOciMulticloudNetworkAnchorOciMetadataItemVcnToTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItemVcn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudNetworkAnchorOciMetadataItemVcnToHclTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItemVcn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemVcnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudNetworkAnchorOciMetadataItemVcn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudNetworkAnchorOciMetadataItemVcn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_cidr_blocks - computed: true, optional: false, required: false
  public get backupCidrBlocks() {
    return this.getListAttribute('backup_cidr_blocks');
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // dns_label - computed: true, optional: false, required: false
  public get dnsLabel() {
    return this.getStringAttribute('dns_label');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // vcn_name - computed: true, optional: false, required: false
  public get vcnName() {
    return this.getStringAttribute('vcn_name');
  }
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemVcnList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudNetworkAnchorOciMetadataItemVcnOutputReference {
    return new DataOciMulticloudNetworkAnchorOciMetadataItemVcnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudNetworkAnchorOciMetadataItem {
}

export function dataOciMulticloudNetworkAnchorOciMetadataItemToTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudNetworkAnchorOciMetadataItemToHclTerraform(struct?: DataOciMulticloudNetworkAnchorOciMetadataItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudNetworkAnchorOciMetadataItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudNetworkAnchorOciMetadataItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataOciMulticloudNetworkAnchorOciMetadataItemDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // dns_forwarding_config - computed: true, optional: false, required: false
  public get dnsForwardingConfig() {
    return this.getListAttribute('dns_forwarding_config');
  }

  // dns_forwarding_endpoint_ip_address - computed: true, optional: false, required: false
  public get dnsForwardingEndpointIpAddress() {
    return this.getStringAttribute('dns_forwarding_endpoint_ip_address');
  }

  // dns_listening_endpoint_ip_address - computed: true, optional: false, required: false
  public get dnsListeningEndpointIpAddress() {
    return this.getStringAttribute('dns_listening_endpoint_ip_address');
  }

  // network_anchor_connection_status - computed: true, optional: false, required: false
  public get networkAnchorConnectionStatus() {
    return this.getStringAttribute('network_anchor_connection_status');
  }

  // subnets - computed: true, optional: false, required: false
  private _subnets = new DataOciMulticloudNetworkAnchorOciMetadataItemSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }

  // vcn - computed: true, optional: false, required: false
  private _vcn = new DataOciMulticloudNetworkAnchorOciMetadataItemVcnList(this, "vcn", false);
  public get vcn() {
    return this._vcn;
  }
}

export class DataOciMulticloudNetworkAnchorOciMetadataItemList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudNetworkAnchorOciMetadataItemOutputReference {
    return new DataOciMulticloudNetworkAnchorOciMetadataItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor oci_multicloud_network_anchor}
*/
export class DataOciMulticloudNetworkAnchor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_multicloud_network_anchor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMulticloudNetworkAnchor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMulticloudNetworkAnchor to import
  * @param importFromId The id of the existing DataOciMulticloudNetworkAnchor that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMulticloudNetworkAnchor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_multicloud_network_anchor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_network_anchor oci_multicloud_network_anchor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMulticloudNetworkAnchorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMulticloudNetworkAnchorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_multicloud_network_anchor',
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
    this._externalLocation = config.externalLocation;
    this._networkAnchorId = config.networkAnchorId;
    this._shouldFetchVcnName = config.shouldFetchVcnName;
    this._subscriptionId = config.subscriptionId;
    this._subscriptionServiceName = config.subscriptionServiceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_service_provider_metadata_item - computed: true, optional: false, required: false
  private _cloudServiceProviderMetadataItem = new DataOciMulticloudNetworkAnchorCloudServiceProviderMetadataItemList(this, "cloud_service_provider_metadata_item", false);
  public get cloudServiceProviderMetadataItem() {
    return this._cloudServiceProviderMetadataItem;
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_location - computed: false, optional: true, required: false
  private _externalLocation?: string; 
  public get externalLocation() {
    return this.getStringAttribute('external_location');
  }
  public set externalLocation(value: string) {
    this._externalLocation = value;
  }
  public resetExternalLocation() {
    this._externalLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLocationInput() {
    return this._externalLocation;
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

  // network_anchor_id - computed: false, optional: false, required: true
  private _networkAnchorId?: string; 
  public get networkAnchorId() {
    return this.getStringAttribute('network_anchor_id');
  }
  public set networkAnchorId(value: string) {
    this._networkAnchorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAnchorIdInput() {
    return this._networkAnchorId;
  }

  // network_anchor_lifecycle_state - computed: true, optional: false, required: false
  public get networkAnchorLifecycleState() {
    return this.getStringAttribute('network_anchor_lifecycle_state');
  }

  // oci_metadata_item - computed: true, optional: false, required: false
  private _ociMetadataItem = new DataOciMulticloudNetworkAnchorOciMetadataItemList(this, "oci_metadata_item", false);
  public get ociMetadataItem() {
    return this._ociMetadataItem;
  }

  // resource_anchor_id - computed: true, optional: false, required: false
  public get resourceAnchorId() {
    return this.getStringAttribute('resource_anchor_id');
  }

  // setup_mode - computed: true, optional: false, required: false
  public get setupMode() {
    return this.getStringAttribute('setup_mode');
  }

  // should_fetch_vcn_name - computed: false, optional: true, required: false
  private _shouldFetchVcnName?: boolean | cdktf.IResolvable; 
  public get shouldFetchVcnName() {
    return this.getBooleanAttribute('should_fetch_vcn_name');
  }
  public set shouldFetchVcnName(value: boolean | cdktf.IResolvable) {
    this._shouldFetchVcnName = value;
  }
  public resetShouldFetchVcnName() {
    this._shouldFetchVcnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldFetchVcnNameInput() {
    return this._shouldFetchVcnName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // subscription_service_name - computed: false, optional: false, required: true
  private _subscriptionServiceName?: string; 
  public get subscriptionServiceName() {
    return this.getStringAttribute('subscription_service_name');
  }
  public set subscriptionServiceName(value: string) {
    this._subscriptionServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionServiceNameInput() {
    return this._subscriptionServiceName;
  }

  // subscription_type - computed: true, optional: false, required: false
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_location: cdktf.stringToTerraform(this._externalLocation),
      network_anchor_id: cdktf.stringToTerraform(this._networkAnchorId),
      should_fetch_vcn_name: cdktf.booleanToTerraform(this._shouldFetchVcnName),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_service_name: cdktf.stringToTerraform(this._subscriptionServiceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_location: {
        value: cdktf.stringToHclTerraform(this._externalLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_anchor_id: {
        value: cdktf.stringToHclTerraform(this._networkAnchorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_fetch_vcn_name: {
        value: cdktf.booleanToHclTerraform(this._shouldFetchVcnName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_service_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
