// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMulticloudNetworkAnchorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#compartment_id DataOciMulticloudNetworkAnchors#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#display_name DataOciMulticloudNetworkAnchors#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#external_location DataOciMulticloudNetworkAnchors#external_location}
  */
  readonly externalLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#id DataOciMulticloudNetworkAnchors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#limit DataOciMulticloudNetworkAnchors#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#network_anchor_lifecycle_state DataOciMulticloudNetworkAnchors#network_anchor_lifecycle_state}
  */
  readonly networkAnchorLifecycleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#network_anchor_oci_subnet_id DataOciMulticloudNetworkAnchors#network_anchor_oci_subnet_id}
  */
  readonly networkAnchorOciSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#network_anchor_oci_vcn_id DataOciMulticloudNetworkAnchors#network_anchor_oci_vcn_id}
  */
  readonly networkAnchorOciVcnId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#subscription_id DataOciMulticloudNetworkAnchors#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#subscription_service_name DataOciMulticloudNetworkAnchors#subscription_service_name}
  */
  readonly subscriptionServiceName: string;
}
export interface DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItems {
}

export function dataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItemsToTerraform(struct?: DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItemsToHclTerraform(struct?: DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // network_anchor_lifecycle_state - computed: true, optional: false, required: false
  public get networkAnchorLifecycleState() {
    return this.getStringAttribute('network_anchor_lifecycle_state');
  }

  // resource_anchor_id - computed: true, optional: false, required: false
  public get resourceAnchorId() {
    return this.getStringAttribute('resource_anchor_id');
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

export class DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItemsOutputReference {
    return new DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudNetworkAnchorsNetworkAnchorCollection {
}

export function dataOciMulticloudNetworkAnchorsNetworkAnchorCollectionToTerraform(struct?: DataOciMulticloudNetworkAnchorsNetworkAnchorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudNetworkAnchorsNetworkAnchorCollectionToHclTerraform(struct?: DataOciMulticloudNetworkAnchorsNetworkAnchorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudNetworkAnchorsNetworkAnchorCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudNetworkAnchorsNetworkAnchorCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionOutputReference {
    return new DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors oci_multicloud_network_anchors}
*/
export class DataOciMulticloudNetworkAnchors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_multicloud_network_anchors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMulticloudNetworkAnchors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMulticloudNetworkAnchors to import
  * @param importFromId The id of the existing DataOciMulticloudNetworkAnchors that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMulticloudNetworkAnchors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_multicloud_network_anchors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_network_anchors oci_multicloud_network_anchors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMulticloudNetworkAnchorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMulticloudNetworkAnchorsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_multicloud_network_anchors',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._externalLocation = config.externalLocation;
    this._id = config.id;
    this._limit = config.limit;
    this._networkAnchorLifecycleState = config.networkAnchorLifecycleState;
    this._networkAnchorOciSubnetId = config.networkAnchorOciSubnetId;
    this._networkAnchorOciVcnId = config.networkAnchorOciVcnId;
    this._subscriptionId = config.subscriptionId;
    this._subscriptionServiceName = config.subscriptionServiceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // external_location - computed: false, optional: false, required: true
  private _externalLocation?: string; 
  public get externalLocation() {
    return this.getStringAttribute('external_location');
  }
  public set externalLocation(value: string) {
    this._externalLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLocationInput() {
    return this._externalLocation;
  }

  // id - computed: false, optional: true, required: false
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

  // network_anchor_collection - computed: true, optional: false, required: false
  private _networkAnchorCollection = new DataOciMulticloudNetworkAnchorsNetworkAnchorCollectionList(this, "network_anchor_collection", false);
  public get networkAnchorCollection() {
    return this._networkAnchorCollection;
  }

  // network_anchor_lifecycle_state - computed: false, optional: true, required: false
  private _networkAnchorLifecycleState?: string; 
  public get networkAnchorLifecycleState() {
    return this.getStringAttribute('network_anchor_lifecycle_state');
  }
  public set networkAnchorLifecycleState(value: string) {
    this._networkAnchorLifecycleState = value;
  }
  public resetNetworkAnchorLifecycleState() {
    this._networkAnchorLifecycleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAnchorLifecycleStateInput() {
    return this._networkAnchorLifecycleState;
  }

  // network_anchor_oci_subnet_id - computed: false, optional: true, required: false
  private _networkAnchorOciSubnetId?: string; 
  public get networkAnchorOciSubnetId() {
    return this.getStringAttribute('network_anchor_oci_subnet_id');
  }
  public set networkAnchorOciSubnetId(value: string) {
    this._networkAnchorOciSubnetId = value;
  }
  public resetNetworkAnchorOciSubnetId() {
    this._networkAnchorOciSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAnchorOciSubnetIdInput() {
    return this._networkAnchorOciSubnetId;
  }

  // network_anchor_oci_vcn_id - computed: false, optional: true, required: false
  private _networkAnchorOciVcnId?: string; 
  public get networkAnchorOciVcnId() {
    return this.getStringAttribute('network_anchor_oci_vcn_id');
  }
  public set networkAnchorOciVcnId(value: string) {
    this._networkAnchorOciVcnId = value;
  }
  public resetNetworkAnchorOciVcnId() {
    this._networkAnchorOciVcnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAnchorOciVcnIdInput() {
    return this._networkAnchorOciVcnId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_location: cdktf.stringToTerraform(this._externalLocation),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      network_anchor_lifecycle_state: cdktf.stringToTerraform(this._networkAnchorLifecycleState),
      network_anchor_oci_subnet_id: cdktf.stringToTerraform(this._networkAnchorOciSubnetId),
      network_anchor_oci_vcn_id: cdktf.stringToTerraform(this._networkAnchorOciVcnId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_service_name: cdktf.stringToTerraform(this._subscriptionServiceName),
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
      external_location: {
        value: cdktf.stringToHclTerraform(this._externalLocation),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_anchor_lifecycle_state: {
        value: cdktf.stringToHclTerraform(this._networkAnchorLifecycleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_anchor_oci_subnet_id: {
        value: cdktf.stringToHclTerraform(this._networkAnchorOciSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_anchor_oci_vcn_id: {
        value: cdktf.stringToHclTerraform(this._networkAnchorOciVcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
