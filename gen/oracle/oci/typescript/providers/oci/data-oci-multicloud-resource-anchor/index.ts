// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMulticloudResourceAnchorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor#resource_anchor_id DataOciMulticloudResourceAnchor#resource_anchor_id}
  */
  readonly resourceAnchorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor#should_fetch_compartment_name DataOciMulticloudResourceAnchor#should_fetch_compartment_name}
  */
  readonly shouldFetchCompartmentName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor#subscription_id DataOciMulticloudResourceAnchor#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor#subscription_service_name DataOciMulticloudResourceAnchor#subscription_service_name}
  */
  readonly subscriptionServiceName: string;
}
export interface DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItem {
}

export function dataOciMulticloudResourceAnchorCloudServiceProviderMetadataItemToTerraform(struct?: DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudResourceAnchorCloudServiceProviderMetadataItemToHclTerraform(struct?: DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // csp_additional_properties - computed: true, optional: false, required: false
  private _cspAdditionalProperties = new cdktf.StringMap(this, "csp_additional_properties");
  public get cspAdditionalProperties() {
    return this._cspAdditionalProperties;
  }

  // csp_resource_anchor_id - computed: true, optional: false, required: false
  public get cspResourceAnchorId() {
    return this.getStringAttribute('csp_resource_anchor_id');
  }

  // csp_resource_anchor_name - computed: true, optional: false, required: false
  public get cspResourceAnchorName() {
    return this.getStringAttribute('csp_resource_anchor_name');
  }

  // project_number - computed: true, optional: false, required: false
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_anchor_name - computed: true, optional: false, required: false
  public get resourceAnchorName() {
    return this.getStringAttribute('resource_anchor_name');
  }

  // resource_anchor_uri - computed: true, optional: false, required: false
  public get resourceAnchorUri() {
    return this.getStringAttribute('resource_anchor_uri');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }

  // subscription_type - computed: true, optional: false, required: false
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
}

export class DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItemList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItemOutputReference {
    return new DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor oci_multicloud_resource_anchor}
*/
export class DataOciMulticloudResourceAnchor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_multicloud_resource_anchor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMulticloudResourceAnchor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMulticloudResourceAnchor to import
  * @param importFromId The id of the existing DataOciMulticloudResourceAnchor that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMulticloudResourceAnchor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_multicloud_resource_anchor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_resource_anchor oci_multicloud_resource_anchor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMulticloudResourceAnchorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMulticloudResourceAnchorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_multicloud_resource_anchor',
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
    this._resourceAnchorId = config.resourceAnchorId;
    this._shouldFetchCompartmentName = config.shouldFetchCompartmentName;
    this._subscriptionId = config.subscriptionId;
    this._subscriptionServiceName = config.subscriptionServiceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_service_provider_metadata_item - computed: true, optional: false, required: false
  private _cloudServiceProviderMetadataItem = new DataOciMulticloudResourceAnchorCloudServiceProviderMetadataItemList(this, "cloud_service_provider_metadata_item", false);
  public get cloudServiceProviderMetadataItem() {
    return this._cloudServiceProviderMetadataItem;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: false
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
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

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // linked_compartment_id - computed: true, optional: false, required: false
  public get linkedCompartmentId() {
    return this.getStringAttribute('linked_compartment_id');
  }

  // linked_compartment_name - computed: true, optional: false, required: false
  public get linkedCompartmentName() {
    return this.getStringAttribute('linked_compartment_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_anchor_id - computed: false, optional: false, required: true
  private _resourceAnchorId?: string; 
  public get resourceAnchorId() {
    return this.getStringAttribute('resource_anchor_id');
  }
  public set resourceAnchorId(value: string) {
    this._resourceAnchorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAnchorIdInput() {
    return this._resourceAnchorId;
  }

  // resource_anchor_subscription_id - computed: true, optional: false, required: false
  public get resourceAnchorSubscriptionId() {
    return this.getStringAttribute('resource_anchor_subscription_id');
  }

  // setup_mode - computed: true, optional: false, required: false
  public get setupMode() {
    return this.getStringAttribute('setup_mode');
  }

  // should_fetch_compartment_name - computed: false, optional: true, required: false
  private _shouldFetchCompartmentName?: boolean | cdktf.IResolvable; 
  public get shouldFetchCompartmentName() {
    return this.getBooleanAttribute('should_fetch_compartment_name');
  }
  public set shouldFetchCompartmentName(value: boolean | cdktf.IResolvable) {
    this._shouldFetchCompartmentName = value;
  }
  public resetShouldFetchCompartmentName() {
    this._shouldFetchCompartmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldFetchCompartmentNameInput() {
    return this._shouldFetchCompartmentName;
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
      resource_anchor_id: cdktf.stringToTerraform(this._resourceAnchorId),
      should_fetch_compartment_name: cdktf.booleanToTerraform(this._shouldFetchCompartmentName),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_service_name: cdktf.stringToTerraform(this._subscriptionServiceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_anchor_id: {
        value: cdktf.stringToHclTerraform(this._resourceAnchorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_fetch_compartment_name: {
        value: cdktf.booleanToHclTerraform(this._shouldFetchCompartmentName),
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
