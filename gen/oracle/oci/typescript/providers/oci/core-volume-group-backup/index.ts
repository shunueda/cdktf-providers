// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreVolumeGroupBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}
  */
  readonly volumeGroupId?: string;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#source_details CoreVolumeGroupBackup#source_details}
  */
  readonly sourceDetails?: CoreVolumeGroupBackupSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#timeouts CoreVolumeGroupBackup#timeouts}
  */
  readonly timeouts?: CoreVolumeGroupBackupTimeouts;
}
export interface CoreVolumeGroupBackupSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#kms_key_id CoreVolumeGroupBackup#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#region CoreVolumeGroupBackup#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#volume_group_backup_id CoreVolumeGroupBackup#volume_group_backup_id}
  */
  readonly volumeGroupBackupId: string;
}

export function coreVolumeGroupBackupSourceDetailsToTerraform(struct?: CoreVolumeGroupBackupSourceDetailsOutputReference | CoreVolumeGroupBackupSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    region: cdktf.stringToTerraform(struct!.region),
    volume_group_backup_id: cdktf.stringToTerraform(struct!.volumeGroupBackupId),
  }
}


export function coreVolumeGroupBackupSourceDetailsToHclTerraform(struct?: CoreVolumeGroupBackupSourceDetailsOutputReference | CoreVolumeGroupBackupSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group_backup_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupBackupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVolumeGroupBackupSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreVolumeGroupBackupSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._volumeGroupBackupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupBackupId = this._volumeGroupBackupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVolumeGroupBackupSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._region = undefined;
      this._volumeGroupBackupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._region = value.region;
      this._volumeGroupBackupId = value.volumeGroupBackupId;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // volume_group_backup_id - computed: false, optional: false, required: true
  private _volumeGroupBackupId?: string; 
  public get volumeGroupBackupId() {
    return this.getStringAttribute('volume_group_backup_id');
  }
  public set volumeGroupBackupId(value: string) {
    this._volumeGroupBackupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupBackupIdInput() {
    return this._volumeGroupBackupId;
  }
}
export interface CoreVolumeGroupBackupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#create CoreVolumeGroupBackup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#delete CoreVolumeGroupBackup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#update CoreVolumeGroupBackup#update}
  */
  readonly update?: string;
}

export function coreVolumeGroupBackupTimeoutsToTerraform(struct?: CoreVolumeGroupBackupTimeouts | cdktf.IResolvable): any {
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


export function coreVolumeGroupBackupTimeoutsToHclTerraform(struct?: CoreVolumeGroupBackupTimeouts | cdktf.IResolvable): any {
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

export class CoreVolumeGroupBackupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreVolumeGroupBackupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreVolumeGroupBackupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup oci_core_volume_group_backup}
*/
export class CoreVolumeGroupBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_volume_group_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreVolumeGroupBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreVolumeGroupBackup to import
  * @param importFromId The id of the existing CoreVolumeGroupBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreVolumeGroupBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_volume_group_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_volume_group_backup oci_core_volume_group_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreVolumeGroupBackupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CoreVolumeGroupBackupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_group_backup',
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._type = config.type;
    this._volumeGroupId = config.volumeGroupId;
    this._sourceDetails.internalValue = config.sourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
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

  // size_in_gbs - computed: true, optional: false, required: false
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // size_in_mbs - computed: true, optional: false, required: false
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // source_volume_group_backup_id - computed: true, optional: false, required: false
  public get sourceVolumeGroupBackupId() {
    return this.getStringAttribute('source_volume_group_backup_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_request_received - computed: true, optional: false, required: false
  public get timeRequestReceived() {
    return this.getStringAttribute('time_request_received');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique_size_in_gbs - computed: true, optional: false, required: false
  public get uniqueSizeInGbs() {
    return this.getStringAttribute('unique_size_in_gbs');
  }

  // unique_size_in_mbs - computed: true, optional: false, required: false
  public get uniqueSizeInMbs() {
    return this.getStringAttribute('unique_size_in_mbs');
  }

  // volume_backup_ids - computed: true, optional: false, required: false
  public get volumeBackupIds() {
    return this.getListAttribute('volume_backup_ids');
  }

  // volume_group_id - computed: true, optional: true, required: false
  private _volumeGroupId?: string; 
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }
  public set volumeGroupId(value: string) {
    this._volumeGroupId = value;
  }
  public resetVolumeGroupId() {
    this._volumeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupIdInput() {
    return this._volumeGroupId;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CoreVolumeGroupBackupSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreVolumeGroupBackupSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreVolumeGroupBackupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreVolumeGroupBackupTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
      volume_group_id: cdktf.stringToTerraform(this._volumeGroupId),
      source_details: coreVolumeGroupBackupSourceDetailsToTerraform(this._sourceDetails.internalValue),
      timeouts: coreVolumeGroupBackupTimeoutsToTerraform(this._timeouts.internalValue),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_group_id: {
        value: cdktf.stringToHclTerraform(this._volumeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_details: {
        value: coreVolumeGroupBackupSourceDetailsToHclTerraform(this._sourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVolumeGroupBackupSourceDetailsList",
      },
      timeouts: {
        value: coreVolumeGroupBackupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreVolumeGroupBackupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
