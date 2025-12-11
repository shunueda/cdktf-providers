// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#distribution_channel_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#distribution_channel_id}
  */
  readonly distributionChannelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#id DataOciMediaServicesMediaAssetDistributionChannelAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#is_lock_override DataOciMediaServicesMediaAssetDistributionChannelAttachment#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#media_asset_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#media_asset_id}
  */
  readonly mediaAssetId: string;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#locks DataOciMediaServicesMediaAssetDistributionChannelAttachment#locks}
  */
  readonly locks?: DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks[] | cdktf.IResolvable;
}
export interface DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#message DataOciMediaServicesMediaAssetDistributionChannelAttachment#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#related_resource_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#time_created DataOciMediaServicesMediaAssetDistributionChannelAttachment#time_created}
  */
  readonly timeCreated?: string;
}

export function dataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksToTerraform(struct?: DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
  }
}


export function dataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksToHclTerraform(struct?: DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._relatedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedResourceId = this._relatedResourceId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: true, required: false
  private _relatedResourceId?: string; 
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }
  public set relatedResourceId(value: string) {
    this._relatedResourceId = value;
  }
  public resetRelatedResourceId() {
    this._relatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceIdInput() {
    return this._relatedResourceId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList extends cdktf.ComplexList {
  public internalValue? : DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks[] | cdktf.IResolvable

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
  public get(index: number): DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference {
    return new DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment oci_media_services_media_asset_distribution_channel_attachment}
*/
export class DataOciMediaServicesMediaAssetDistributionChannelAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_media_services_media_asset_distribution_channel_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMediaServicesMediaAssetDistributionChannelAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMediaServicesMediaAssetDistributionChannelAttachment to import
  * @param importFromId The id of the existing DataOciMediaServicesMediaAssetDistributionChannelAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMediaServicesMediaAssetDistributionChannelAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_media_services_media_asset_distribution_channel_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment oci_media_services_media_asset_distribution_channel_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_media_services_media_asset_distribution_channel_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._distributionChannelId = config.distributionChannelId;
    this._id = config.id;
    this._isLockOverride = config.isLockOverride;
    this._mediaAssetId = config.mediaAssetId;
    this._locks.internalValue = config.locks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // distribution_channel_id - computed: false, optional: false, required: true
  private _distributionChannelId?: string; 
  public get distributionChannelId() {
    return this.getStringAttribute('distribution_channel_id');
  }
  public set distributionChannelId(value: string) {
    this._distributionChannelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionChannelIdInput() {
    return this._distributionChannelId;
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

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // media_asset_id - computed: false, optional: false, required: true
  private _mediaAssetId?: string; 
  public get mediaAssetId() {
    return this.getStringAttribute('media_asset_id');
  }
  public set mediaAssetId(value: string) {
    this._mediaAssetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaAssetIdInput() {
    return this._mediaAssetId;
  }

  // media_workflow_job_id - computed: true, optional: false, required: false
  public get mediaWorkflowJobId() {
    return this.getStringAttribute('media_workflow_job_id');
  }

  // metadata_ref - computed: true, optional: false, required: false
  public get metadataRef() {
    return this.getStringAttribute('metadata_ref');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distribution_channel_id: cdktf.stringToTerraform(this._distributionChannelId),
      id: cdktf.stringToTerraform(this._id),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      media_asset_id: cdktf.stringToTerraform(this._mediaAssetId),
      locks: cdktf.listMapper(dataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksToTerraform, true)(this._locks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distribution_channel_id: {
        value: cdktf.stringToHclTerraform(this._distributionChannelId),
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
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      media_asset_id: {
        value: cdktf.stringToHclTerraform(this._mediaAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locks: {
        value: cdktf.listMapperHcl(dataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
