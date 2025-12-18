// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaServicesStreamPackagingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#defined_tags MediaServicesStreamPackagingConfig#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#display_name MediaServicesStreamPackagingConfig#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#distribution_channel_id MediaServicesStreamPackagingConfig#distribution_channel_id}
  */
  readonly distributionChannelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#freeform_tags MediaServicesStreamPackagingConfig#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#id MediaServicesStreamPackagingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#is_lock_override MediaServicesStreamPackagingConfig#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#segment_time_in_seconds MediaServicesStreamPackagingConfig#segment_time_in_seconds}
  */
  readonly segmentTimeInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#stream_packaging_format MediaServicesStreamPackagingConfig#stream_packaging_format}
  */
  readonly streamPackagingFormat: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#encryption MediaServicesStreamPackagingConfig#encryption}
  */
  readonly encryption?: MediaServicesStreamPackagingConfigEncryption;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#locks MediaServicesStreamPackagingConfig#locks}
  */
  readonly locks?: MediaServicesStreamPackagingConfigLocks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#timeouts MediaServicesStreamPackagingConfig#timeouts}
  */
  readonly timeouts?: MediaServicesStreamPackagingConfigTimeouts;
}
export interface MediaServicesStreamPackagingConfigEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#algorithm MediaServicesStreamPackagingConfig#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#kms_key_id MediaServicesStreamPackagingConfig#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function mediaServicesStreamPackagingConfigEncryptionToTerraform(struct?: MediaServicesStreamPackagingConfigEncryptionOutputReference | MediaServicesStreamPackagingConfigEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function mediaServicesStreamPackagingConfigEncryptionToHclTerraform(struct?: MediaServicesStreamPackagingConfigEncryptionOutputReference | MediaServicesStreamPackagingConfigEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaServicesStreamPackagingConfigEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesStreamPackagingConfigEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesStreamPackagingConfigEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface MediaServicesStreamPackagingConfigLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#compartment_id MediaServicesStreamPackagingConfig#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#message MediaServicesStreamPackagingConfig#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#related_resource_id MediaServicesStreamPackagingConfig#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#time_created MediaServicesStreamPackagingConfig#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#type MediaServicesStreamPackagingConfig#type}
  */
  readonly type: string;
}

export function mediaServicesStreamPackagingConfigLocksToTerraform(struct?: MediaServicesStreamPackagingConfigLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mediaServicesStreamPackagingConfigLocksToHclTerraform(struct?: MediaServicesStreamPackagingConfigLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaServicesStreamPackagingConfigLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaServicesStreamPackagingConfigLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesStreamPackagingConfigLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class MediaServicesStreamPackagingConfigLocksList extends cdktf.ComplexList {
  public internalValue? : MediaServicesStreamPackagingConfigLocks[] | cdktf.IResolvable

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
  public get(index: number): MediaServicesStreamPackagingConfigLocksOutputReference {
    return new MediaServicesStreamPackagingConfigLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaServicesStreamPackagingConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#create MediaServicesStreamPackagingConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#delete MediaServicesStreamPackagingConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#update MediaServicesStreamPackagingConfig#update}
  */
  readonly update?: string;
}

export function mediaServicesStreamPackagingConfigTimeoutsToTerraform(struct?: MediaServicesStreamPackagingConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mediaServicesStreamPackagingConfigTimeoutsToHclTerraform(struct?: MediaServicesStreamPackagingConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaServicesStreamPackagingConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaServicesStreamPackagingConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesStreamPackagingConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config oci_media_services_stream_packaging_config}
*/
export class MediaServicesStreamPackagingConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_media_services_stream_packaging_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaServicesStreamPackagingConfig to import
  * @param importFromId The id of the existing MediaServicesStreamPackagingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaServicesStreamPackagingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_media_services_stream_packaging_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/media_services_stream_packaging_config oci_media_services_stream_packaging_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaServicesStreamPackagingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MediaServicesStreamPackagingConfigConfig) {
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._distributionChannelId = config.distributionChannelId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isLockOverride = config.isLockOverride;
    this._segmentTimeInSeconds = config.segmentTimeInSeconds;
    this._streamPackagingFormat = config.streamPackagingFormat;
    this._encryption.internalValue = config.encryption;
    this._locks.internalValue = config.locks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // segment_time_in_seconds - computed: false, optional: false, required: true
  private _segmentTimeInSeconds?: number; 
  public get segmentTimeInSeconds() {
    return this.getNumberAttribute('segment_time_in_seconds');
  }
  public set segmentTimeInSeconds(value: number) {
    this._segmentTimeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentTimeInSecondsInput() {
    return this._segmentTimeInSeconds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_packaging_format - computed: false, optional: false, required: true
  private _streamPackagingFormat?: string; 
  public get streamPackagingFormat() {
    return this.getStringAttribute('stream_packaging_format');
  }
  public set streamPackagingFormat(value: string) {
    this._streamPackagingFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPackagingFormatInput() {
    return this._streamPackagingFormat;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption = new MediaServicesStreamPackagingConfigEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MediaServicesStreamPackagingConfigEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new MediaServicesStreamPackagingConfigLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: MediaServicesStreamPackagingConfigLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaServicesStreamPackagingConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaServicesStreamPackagingConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      distribution_channel_id: cdktf.stringToTerraform(this._distributionChannelId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      segment_time_in_seconds: cdktf.numberToTerraform(this._segmentTimeInSeconds),
      stream_packaging_format: cdktf.stringToTerraform(this._streamPackagingFormat),
      encryption: mediaServicesStreamPackagingConfigEncryptionToTerraform(this._encryption.internalValue),
      locks: cdktf.listMapper(mediaServicesStreamPackagingConfigLocksToTerraform, true)(this._locks.internalValue),
      timeouts: mediaServicesStreamPackagingConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_channel_id: {
        value: cdktf.stringToHclTerraform(this._distributionChannelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      segment_time_in_seconds: {
        value: cdktf.numberToHclTerraform(this._segmentTimeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_packaging_format: {
        value: cdktf.stringToHclTerraform(this._streamPackagingFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: mediaServicesStreamPackagingConfigEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaServicesStreamPackagingConfigEncryptionList",
      },
      locks: {
        value: cdktf.listMapperHcl(mediaServicesStreamPackagingConfigLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaServicesStreamPackagingConfigLocksList",
      },
      timeouts: {
        value: mediaServicesStreamPackagingConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaServicesStreamPackagingConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
