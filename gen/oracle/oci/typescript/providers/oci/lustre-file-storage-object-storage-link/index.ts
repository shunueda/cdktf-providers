// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LustreFileStorageObjectStorageLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#availability_domain LustreFileStorageObjectStorageLink#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#compartment_id LustreFileStorageObjectStorageLink#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#defined_tags LustreFileStorageObjectStorageLink#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#display_name LustreFileStorageObjectStorageLink#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#file_system_path LustreFileStorageObjectStorageLink#file_system_path}
  */
  readonly fileSystemPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#freeform_tags LustreFileStorageObjectStorageLink#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#id LustreFileStorageObjectStorageLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#is_overwrite LustreFileStorageObjectStorageLink#is_overwrite}
  */
  readonly isOverwrite: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#lustre_file_system_id LustreFileStorageObjectStorageLink#lustre_file_system_id}
  */
  readonly lustreFileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#object_storage_prefix LustreFileStorageObjectStorageLink#object_storage_prefix}
  */
  readonly objectStoragePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#start_export_to_object_trigger LustreFileStorageObjectStorageLink#start_export_to_object_trigger}
  */
  readonly startExportToObjectTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#start_import_from_object_trigger LustreFileStorageObjectStorageLink#start_import_from_object_trigger}
  */
  readonly startImportFromObjectTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#stop_export_to_object_trigger LustreFileStorageObjectStorageLink#stop_export_to_object_trigger}
  */
  readonly stopExportToObjectTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#stop_import_from_object_trigger LustreFileStorageObjectStorageLink#stop_import_from_object_trigger}
  */
  readonly stopImportFromObjectTrigger?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#timeouts LustreFileStorageObjectStorageLink#timeouts}
  */
  readonly timeouts?: LustreFileStorageObjectStorageLinkTimeouts;
}
export interface LustreFileStorageObjectStorageLinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#create LustreFileStorageObjectStorageLink#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#delete LustreFileStorageObjectStorageLink#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#update LustreFileStorageObjectStorageLink#update}
  */
  readonly update?: string;
}

export function lustreFileStorageObjectStorageLinkTimeoutsToTerraform(struct?: LustreFileStorageObjectStorageLinkTimeouts | cdktf.IResolvable): any {
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


export function lustreFileStorageObjectStorageLinkTimeoutsToHclTerraform(struct?: LustreFileStorageObjectStorageLinkTimeouts | cdktf.IResolvable): any {
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

export class LustreFileStorageObjectStorageLinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LustreFileStorageObjectStorageLinkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LustreFileStorageObjectStorageLinkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link oci_lustre_file_storage_object_storage_link}
*/
export class LustreFileStorageObjectStorageLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_lustre_file_storage_object_storage_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LustreFileStorageObjectStorageLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LustreFileStorageObjectStorageLink to import
  * @param importFromId The id of the existing LustreFileStorageObjectStorageLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LustreFileStorageObjectStorageLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_lustre_file_storage_object_storage_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/lustre_file_storage_object_storage_link oci_lustre_file_storage_object_storage_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LustreFileStorageObjectStorageLinkConfig
  */
  public constructor(scope: Construct, id: string, config: LustreFileStorageObjectStorageLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_lustre_file_storage_object_storage_link',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._fileSystemPath = config.fileSystemPath;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isOverwrite = config.isOverwrite;
    this._lustreFileSystemId = config.lustreFileSystemId;
    this._objectStoragePrefix = config.objectStoragePrefix;
    this._startExportToObjectTrigger = config.startExportToObjectTrigger;
    this._startImportFromObjectTrigger = config.startImportFromObjectTrigger;
    this._stopExportToObjectTrigger = config.stopExportToObjectTrigger;
    this._stopImportFromObjectTrigger = config.stopImportFromObjectTrigger;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
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

  // current_job_id - computed: true, optional: false, required: false
  public get currentJobId() {
    return this.getStringAttribute('current_job_id');
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

  // file_system_path - computed: false, optional: false, required: true
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
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

  // is_overwrite - computed: false, optional: false, required: true
  private _isOverwrite?: boolean | cdktf.IResolvable; 
  public get isOverwrite() {
    return this.getBooleanAttribute('is_overwrite');
  }
  public set isOverwrite(value: boolean | cdktf.IResolvable) {
    this._isOverwrite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverwriteInput() {
    return this._isOverwrite;
  }

  // last_job_id - computed: true, optional: false, required: false
  public get lastJobId() {
    return this.getStringAttribute('last_job_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lustre_file_system_id - computed: false, optional: false, required: true
  private _lustreFileSystemId?: string; 
  public get lustreFileSystemId() {
    return this.getStringAttribute('lustre_file_system_id');
  }
  public set lustreFileSystemId(value: string) {
    this._lustreFileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreFileSystemIdInput() {
    return this._lustreFileSystemId;
  }

  // object_storage_prefix - computed: false, optional: false, required: true
  private _objectStoragePrefix?: string; 
  public get objectStoragePrefix() {
    return this.getStringAttribute('object_storage_prefix');
  }
  public set objectStoragePrefix(value: string) {
    this._objectStoragePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStoragePrefixInput() {
    return this._objectStoragePrefix;
  }

  // start_export_to_object_trigger - computed: false, optional: true, required: false
  private _startExportToObjectTrigger?: number; 
  public get startExportToObjectTrigger() {
    return this.getNumberAttribute('start_export_to_object_trigger');
  }
  public set startExportToObjectTrigger(value: number) {
    this._startExportToObjectTrigger = value;
  }
  public resetStartExportToObjectTrigger() {
    this._startExportToObjectTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startExportToObjectTriggerInput() {
    return this._startExportToObjectTrigger;
  }

  // start_import_from_object_trigger - computed: false, optional: true, required: false
  private _startImportFromObjectTrigger?: number; 
  public get startImportFromObjectTrigger() {
    return this.getNumberAttribute('start_import_from_object_trigger');
  }
  public set startImportFromObjectTrigger(value: number) {
    this._startImportFromObjectTrigger = value;
  }
  public resetStartImportFromObjectTrigger() {
    this._startImportFromObjectTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startImportFromObjectTriggerInput() {
    return this._startImportFromObjectTrigger;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stop_export_to_object_trigger - computed: false, optional: true, required: false
  private _stopExportToObjectTrigger?: number; 
  public get stopExportToObjectTrigger() {
    return this.getNumberAttribute('stop_export_to_object_trigger');
  }
  public set stopExportToObjectTrigger(value: number) {
    this._stopExportToObjectTrigger = value;
  }
  public resetStopExportToObjectTrigger() {
    this._stopExportToObjectTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopExportToObjectTriggerInput() {
    return this._stopExportToObjectTrigger;
  }

  // stop_import_from_object_trigger - computed: false, optional: true, required: false
  private _stopImportFromObjectTrigger?: number; 
  public get stopImportFromObjectTrigger() {
    return this.getNumberAttribute('stop_import_from_object_trigger');
  }
  public set stopImportFromObjectTrigger(value: number) {
    this._stopImportFromObjectTrigger = value;
  }
  public resetStopImportFromObjectTrigger() {
    this._stopImportFromObjectTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopImportFromObjectTriggerInput() {
    return this._stopImportFromObjectTrigger;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LustreFileStorageObjectStorageLinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LustreFileStorageObjectStorageLinkTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      file_system_path: cdktf.stringToTerraform(this._fileSystemPath),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_overwrite: cdktf.booleanToTerraform(this._isOverwrite),
      lustre_file_system_id: cdktf.stringToTerraform(this._lustreFileSystemId),
      object_storage_prefix: cdktf.stringToTerraform(this._objectStoragePrefix),
      start_export_to_object_trigger: cdktf.numberToTerraform(this._startExportToObjectTrigger),
      start_import_from_object_trigger: cdktf.numberToTerraform(this._startImportFromObjectTrigger),
      stop_export_to_object_trigger: cdktf.numberToTerraform(this._stopExportToObjectTrigger),
      stop_import_from_object_trigger: cdktf.numberToTerraform(this._stopImportFromObjectTrigger),
      timeouts: lustreFileStorageObjectStorageLinkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
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
      file_system_path: {
        value: cdktf.stringToHclTerraform(this._fileSystemPath),
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
      is_overwrite: {
        value: cdktf.booleanToHclTerraform(this._isOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lustre_file_system_id: {
        value: cdktf.stringToHclTerraform(this._lustreFileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_prefix: {
        value: cdktf.stringToHclTerraform(this._objectStoragePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_export_to_object_trigger: {
        value: cdktf.numberToHclTerraform(this._startExportToObjectTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_import_from_object_trigger: {
        value: cdktf.numberToHclTerraform(this._startImportFromObjectTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stop_export_to_object_trigger: {
        value: cdktf.numberToHclTerraform(this._stopExportToObjectTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stop_import_from_object_trigger: {
        value: cdktf.numberToHclTerraform(this._stopImportFromObjectTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: lustreFileStorageObjectStorageLinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LustreFileStorageObjectStorageLinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
