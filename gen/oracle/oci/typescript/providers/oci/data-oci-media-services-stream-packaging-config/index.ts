// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_packaging_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMediaServicesStreamPackagingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_packaging_config#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfig#stream_packaging_config_id}
  */
  readonly streamPackagingConfigId: string;
}
export interface DataOciMediaServicesStreamPackagingConfigEncryption {
}

export function dataOciMediaServicesStreamPackagingConfigEncryptionToTerraform(struct?: DataOciMediaServicesStreamPackagingConfigEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesStreamPackagingConfigEncryptionToHclTerraform(struct?: DataOciMediaServicesStreamPackagingConfigEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesStreamPackagingConfigEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesStreamPackagingConfigEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}

export class DataOciMediaServicesStreamPackagingConfigEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference {
    return new DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMediaServicesStreamPackagingConfigLocks {
}

export function dataOciMediaServicesStreamPackagingConfigLocksToTerraform(struct?: DataOciMediaServicesStreamPackagingConfigLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesStreamPackagingConfigLocksToHclTerraform(struct?: DataOciMediaServicesStreamPackagingConfigLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesStreamPackagingConfigLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesStreamPackagingConfigLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesStreamPackagingConfigLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

export class DataOciMediaServicesStreamPackagingConfigLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesStreamPackagingConfigLocksOutputReference {
    return new DataOciMediaServicesStreamPackagingConfigLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_packaging_config oci_media_services_stream_packaging_config}
*/
export class DataOciMediaServicesStreamPackagingConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_media_services_stream_packaging_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMediaServicesStreamPackagingConfig to import
  * @param importFromId The id of the existing DataOciMediaServicesStreamPackagingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_packaging_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMediaServicesStreamPackagingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_media_services_stream_packaging_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_packaging_config oci_media_services_stream_packaging_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMediaServicesStreamPackagingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMediaServicesStreamPackagingConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_media_services_stream_packaging_config',
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
    this._streamPackagingConfigId = config.streamPackagingConfigId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // distribution_channel_id - computed: true, optional: false, required: false
  public get distributionChannelId() {
    return this.getStringAttribute('distribution_channel_id');
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataOciMediaServicesStreamPackagingConfigEncryptionList(this, "encryption", false);
  public get encryption() {
    return this._encryption;
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

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciMediaServicesStreamPackagingConfigLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // segment_time_in_seconds - computed: true, optional: false, required: false
  public get segmentTimeInSeconds() {
    return this.getNumberAttribute('segment_time_in_seconds');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_packaging_config_id - computed: false, optional: false, required: true
  private _streamPackagingConfigId?: string; 
  public get streamPackagingConfigId() {
    return this.getStringAttribute('stream_packaging_config_id');
  }
  public set streamPackagingConfigId(value: string) {
    this._streamPackagingConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPackagingConfigIdInput() {
    return this._streamPackagingConfigId;
  }

  // stream_packaging_format - computed: true, optional: false, required: false
  public get streamPackagingFormat() {
    return this.getStringAttribute('stream_packaging_format');
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
      stream_packaging_config_id: cdktf.stringToTerraform(this._streamPackagingConfigId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      stream_packaging_config_id: {
        value: cdktf.stringToHclTerraform(this._streamPackagingConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
