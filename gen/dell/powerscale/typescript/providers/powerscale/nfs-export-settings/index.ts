// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsExportSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * True if all directories under the specified paths are mountable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#all_dirs NfsExportSettings#all_dirs}
  */
  readonly allDirs?: boolean | cdktf.IResolvable;
  /**
  * Specifies the block size returned by the NFS statfs procedure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#block_size NfsExportSettings#block_size}
  */
  readonly blockSize?: number;
  /**
  * True if the client can set file times through the NFS set attribute request. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#can_set_time NfsExportSettings#can_set_time}
  */
  readonly canSetTime?: boolean | cdktf.IResolvable;
  /**
  * True if the case is ignored for file names. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#case_insensitive NfsExportSettings#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * True if the case is preserved for file names. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#case_preserving NfsExportSettings#case_preserving}
  */
  readonly casePreserving?: boolean | cdktf.IResolvable;
  /**
  * True if the superuser can change file ownership. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#chown_restricted NfsExportSettings#chown_restricted}
  */
  readonly chownRestricted?: boolean | cdktf.IResolvable;
  /**
  * True if NFS  commit  requests execute asynchronously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#commit_asynchronous NfsExportSettings#commit_asynchronous}
  */
  readonly commitAsynchronous?: boolean | cdktf.IResolvable;
  /**
  * Specifies the preferred size for directory read operations. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#directory_transfer_size NfsExportSettings#directory_transfer_size}
  */
  readonly directoryTransferSize?: number;
  /**
  * Specifies the default character set encoding of the clients connecting to the export, unless otherwise specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#encoding NfsExportSettings#encoding}
  */
  readonly encoding?: string;
  /**
  * Specifies the reported maximum number of links to a file. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#link_max NfsExportSettings#link_max}
  */
  readonly linkMax?: number;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#map_all NfsExportSettings#map_all}
  */
  readonly mapAll?: NfsExportSettingsMapAll;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#map_failure NfsExportSettings#map_failure}
  */
  readonly mapFailure?: NfsExportSettingsMapFailure;
  /**
  * True if user mappings query the OneFS user database. When set to false, user mappings only query local authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#map_full NfsExportSettings#map_full}
  */
  readonly mapFull?: boolean | cdktf.IResolvable;
  /**
  * True if incoming user IDs (UIDs) are mapped to users in the OneFS user database. When set to false, incoming UIDs are applied directly to file operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#map_lookup_uid NfsExportSettings#map_lookup_uid}
  */
  readonly mapLookupUid?: boolean | cdktf.IResolvable;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#map_non_root NfsExportSettings#map_non_root}
  */
  readonly mapNonRoot?: NfsExportSettingsMapNonRoot;
  /**
  * Determines whether searches for users specified in 'map_all', 'map_root' or 'map_nonroot' are retried if the search fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#map_retry NfsExportSettings#map_retry}
  */
  readonly mapRetry?: boolean | cdktf.IResolvable;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#map_root NfsExportSettings#map_root}
  */
  readonly mapRoot?: NfsExportSettingsMapRoot;
  /**
  * Specifies the maximum file size for any file accessed from the export. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#max_file_size NfsExportSettings#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Specifies the reported maximum length of a file name. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name_max_size NfsExportSettings#name_max_size}
  */
  readonly nameMaxSize?: number;
  /**
  * True if long file names result in an error. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#no_truncate NfsExportSettings#no_truncate}
  */
  readonly noTruncate?: boolean | cdktf.IResolvable;
  /**
  * True if the export is set to read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#read_only NfsExportSettings#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum buffer size that clients should use on NFS read requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#read_transfer_max_size NfsExportSettings#read_transfer_max_size}
  */
  readonly readTransferMaxSize?: number;
  /**
  * Specifies the preferred multiple size for NFS read requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#read_transfer_multiple NfsExportSettings#read_transfer_multiple}
  */
  readonly readTransferMultiple?: number;
  /**
  * Specifies the preferred size for NFS read requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#read_transfer_size NfsExportSettings#read_transfer_size}
  */
  readonly readTransferSize?: number;
  /**
  * True if 'readdirplus' requests are enabled. Enabling this property might improve network performance and is only available for NFSv3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#readdirplus NfsExportSettings#readdirplus}
  */
  readonly readdirplus?: boolean | cdktf.IResolvable;
  /**
  * Sets the number of directory entries that are prefetched when a 'readdirplus' request is processed. (Deprecated.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#readdirplus_prefetch NfsExportSettings#readdirplus_prefetch}
  */
  readonly readdirplusPrefetch?: number;
  /**
  * Limits the size of file identifiers returned by NFSv3+ to 32-bit values (may require remount).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#return_32bit_file_ids NfsExportSettings#return_32bit_file_ids}
  */
  readonly return32BitFileIds?: boolean | cdktf.IResolvable;
  /**
  * Specifies the authentication types that are supported for this export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#security_flavors NfsExportSettings#security_flavors}
  */
  readonly securityFlavors?: string[];
  /**
  * True if set attribute operations execute asynchronously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#setattr_asynchronous NfsExportSettings#setattr_asynchronous}
  */
  readonly setattrAsynchronous?: boolean | cdktf.IResolvable;
  /**
  * Specifies the snapshot for all mounts. Use "-" to set to default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#snapshot NfsExportSettings#snapshot}
  */
  readonly snapshot?: string;
  /**
  * True if symlinks are supported. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#symlinks NfsExportSettings#symlinks}
  */
  readonly symlinks?: boolean | cdktf.IResolvable;
  /**
  * Specifies the resolution of all time values that are returned to the clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#time_delta NfsExportSettings#time_delta}
  */
  readonly timeDelta?: number;
  /**
  * Specifies the action to be taken when an NFSv3+ datasync write is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_datasync_action NfsExportSettings#write_datasync_action}
  */
  readonly writeDatasyncAction?: string;
  /**
  * Specifies the stability disposition returned when an NFSv3+ datasync write is processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_datasync_reply NfsExportSettings#write_datasync_reply}
  */
  readonly writeDatasyncReply?: string;
  /**
  * Specifies the action to be taken when an NFSv3+ filesync write is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_filesync_action NfsExportSettings#write_filesync_action}
  */
  readonly writeFilesyncAction?: string;
  /**
  * Specifies the stability disposition returned when an NFSv3+ filesync write is processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_filesync_reply NfsExportSettings#write_filesync_reply}
  */
  readonly writeFilesyncReply?: string;
  /**
  * Specifies the maximum buffer size that clients should use on NFS write requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_transfer_max_size NfsExportSettings#write_transfer_max_size}
  */
  readonly writeTransferMaxSize?: number;
  /**
  * Specifies the preferred multiple size for NFS write requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_transfer_multiple NfsExportSettings#write_transfer_multiple}
  */
  readonly writeTransferMultiple?: number;
  /**
  * Specifies the preferred multiple size for NFS write requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_transfer_size NfsExportSettings#write_transfer_size}
  */
  readonly writeTransferSize?: number;
  /**
  * Specifies the action to be taken when an NFSv3+ unstable write is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_unstable_action NfsExportSettings#write_unstable_action}
  */
  readonly writeUnstableAction?: string;
  /**
  * Specifies the stability disposition returned when an NFSv3+ unstable write is processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#write_unstable_reply NfsExportSettings#write_unstable_reply}
  */
  readonly writeUnstableReply?: string;
  /**
  * Specifies the zone in which the export is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#zone NfsExportSettings#zone}
  */
  readonly zone?: string;
}
export interface NfsExportSettingsMapAllPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapAllPrimaryGroupToTerraform(struct?: NfsExportSettingsMapAllPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapAllPrimaryGroupToHclTerraform(struct?: NfsExportSettingsMapAllPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapAllPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapAllPrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapAllPrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapAllSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapAllSecondaryGroupsToTerraform(struct?: NfsExportSettingsMapAllSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapAllSecondaryGroupsToHclTerraform(struct?: NfsExportSettingsMapAllSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapAllSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportSettingsMapAllSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapAllSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class NfsExportSettingsMapAllSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportSettingsMapAllSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportSettingsMapAllSecondaryGroupsOutputReference {
    return new NfsExportSettingsMapAllSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportSettingsMapAllUser {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapAllUserToTerraform(struct?: NfsExportSettingsMapAllUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapAllUserToHclTerraform(struct?: NfsExportSettingsMapAllUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapAllUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapAllUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapAllUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapAll {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#enabled NfsExportSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#primary_group NfsExportSettings#primary_group}
  */
  readonly primaryGroup?: NfsExportSettingsMapAllPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#secondary_groups NfsExportSettings#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportSettingsMapAllSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#user NfsExportSettings#user}
  */
  readonly user?: NfsExportSettingsMapAllUser;
}

export function nfsExportSettingsMapAllToTerraform(struct?: NfsExportSettingsMapAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportSettingsMapAllPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportSettingsMapAllSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportSettingsMapAllUserToTerraform(struct!.user),
  }
}


export function nfsExportSettingsMapAllToHclTerraform(struct?: NfsExportSettingsMapAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_group: {
      value: nfsExportSettingsMapAllPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapAllPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportSettingsMapAllSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportSettingsMapAllSecondaryGroupsList",
    },
    user: {
      value: nfsExportSettingsMapAllUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapAllUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportSettingsMapAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new NfsExportSettingsMapAllPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportSettingsMapAllPrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new NfsExportSettingsMapAllSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportSettingsMapAllSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new NfsExportSettingsMapAllUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportSettingsMapAllUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface NfsExportSettingsMapFailurePrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapFailurePrimaryGroupToTerraform(struct?: NfsExportSettingsMapFailurePrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapFailurePrimaryGroupToHclTerraform(struct?: NfsExportSettingsMapFailurePrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapFailurePrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapFailurePrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapFailurePrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapFailureSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapFailureSecondaryGroupsToTerraform(struct?: NfsExportSettingsMapFailureSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapFailureSecondaryGroupsToHclTerraform(struct?: NfsExportSettingsMapFailureSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapFailureSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportSettingsMapFailureSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapFailureSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class NfsExportSettingsMapFailureSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportSettingsMapFailureSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportSettingsMapFailureSecondaryGroupsOutputReference {
    return new NfsExportSettingsMapFailureSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportSettingsMapFailureUser {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapFailureUserToTerraform(struct?: NfsExportSettingsMapFailureUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapFailureUserToHclTerraform(struct?: NfsExportSettingsMapFailureUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapFailureUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapFailureUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapFailureUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapFailure {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#enabled NfsExportSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#primary_group NfsExportSettings#primary_group}
  */
  readonly primaryGroup?: NfsExportSettingsMapFailurePrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#secondary_groups NfsExportSettings#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportSettingsMapFailureSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#user NfsExportSettings#user}
  */
  readonly user?: NfsExportSettingsMapFailureUser;
}

export function nfsExportSettingsMapFailureToTerraform(struct?: NfsExportSettingsMapFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportSettingsMapFailurePrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportSettingsMapFailureSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportSettingsMapFailureUserToTerraform(struct!.user),
  }
}


export function nfsExportSettingsMapFailureToHclTerraform(struct?: NfsExportSettingsMapFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_group: {
      value: nfsExportSettingsMapFailurePrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapFailurePrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportSettingsMapFailureSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportSettingsMapFailureSecondaryGroupsList",
    },
    user: {
      value: nfsExportSettingsMapFailureUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapFailureUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportSettingsMapFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new NfsExportSettingsMapFailurePrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportSettingsMapFailurePrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new NfsExportSettingsMapFailureSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportSettingsMapFailureSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new NfsExportSettingsMapFailureUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportSettingsMapFailureUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface NfsExportSettingsMapNonRootPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapNonRootPrimaryGroupToTerraform(struct?: NfsExportSettingsMapNonRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapNonRootPrimaryGroupToHclTerraform(struct?: NfsExportSettingsMapNonRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapNonRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapNonRootPrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapNonRootPrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapNonRootSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapNonRootSecondaryGroupsToTerraform(struct?: NfsExportSettingsMapNonRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapNonRootSecondaryGroupsToHclTerraform(struct?: NfsExportSettingsMapNonRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapNonRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportSettingsMapNonRootSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapNonRootSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class NfsExportSettingsMapNonRootSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportSettingsMapNonRootSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportSettingsMapNonRootSecondaryGroupsOutputReference {
    return new NfsExportSettingsMapNonRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportSettingsMapNonRootUser {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapNonRootUserToTerraform(struct?: NfsExportSettingsMapNonRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapNonRootUserToHclTerraform(struct?: NfsExportSettingsMapNonRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapNonRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapNonRootUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapNonRootUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapNonRoot {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#enabled NfsExportSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#primary_group NfsExportSettings#primary_group}
  */
  readonly primaryGroup?: NfsExportSettingsMapNonRootPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#secondary_groups NfsExportSettings#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportSettingsMapNonRootSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#user NfsExportSettings#user}
  */
  readonly user?: NfsExportSettingsMapNonRootUser;
}

export function nfsExportSettingsMapNonRootToTerraform(struct?: NfsExportSettingsMapNonRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportSettingsMapNonRootPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportSettingsMapNonRootSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportSettingsMapNonRootUserToTerraform(struct!.user),
  }
}


export function nfsExportSettingsMapNonRootToHclTerraform(struct?: NfsExportSettingsMapNonRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_group: {
      value: nfsExportSettingsMapNonRootPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapNonRootPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportSettingsMapNonRootSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportSettingsMapNonRootSecondaryGroupsList",
    },
    user: {
      value: nfsExportSettingsMapNonRootUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapNonRootUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportSettingsMapNonRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapNonRoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapNonRoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new NfsExportSettingsMapNonRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportSettingsMapNonRootPrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new NfsExportSettingsMapNonRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportSettingsMapNonRootSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new NfsExportSettingsMapNonRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportSettingsMapNonRootUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface NfsExportSettingsMapRootPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapRootPrimaryGroupToTerraform(struct?: NfsExportSettingsMapRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapRootPrimaryGroupToHclTerraform(struct?: NfsExportSettingsMapRootPrimaryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapRootPrimaryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapRootPrimaryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapRootSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapRootSecondaryGroupsToTerraform(struct?: NfsExportSettingsMapRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapRootSecondaryGroupsToHclTerraform(struct?: NfsExportSettingsMapRootSecondaryGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportSettingsMapRootSecondaryGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapRootSecondaryGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class NfsExportSettingsMapRootSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportSettingsMapRootSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportSettingsMapRootSecondaryGroupsOutputReference {
    return new NfsExportSettingsMapRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportSettingsMapRootUser {
  /**
  * Specifies the serialized form of a persona, which can be 'GID:0', 'GROUP:wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#id NfsExportSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#name NfsExportSettings#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#type NfsExportSettings#type}
  */
  readonly type?: string;
}

export function nfsExportSettingsMapRootUserToTerraform(struct?: NfsExportSettingsMapRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfsExportSettingsMapRootUserToHclTerraform(struct?: NfsExportSettingsMapRootUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NfsExportSettingsMapRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapRootUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapRootUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface NfsExportSettingsMapRoot {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#enabled NfsExportSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#primary_group NfsExportSettings#primary_group}
  */
  readonly primaryGroup?: NfsExportSettingsMapRootPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#secondary_groups NfsExportSettings#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportSettingsMapRootSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#user NfsExportSettings#user}
  */
  readonly user?: NfsExportSettingsMapRootUser;
}

export function nfsExportSettingsMapRootToTerraform(struct?: NfsExportSettingsMapRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportSettingsMapRootPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportSettingsMapRootSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportSettingsMapRootUserToTerraform(struct!.user),
  }
}


export function nfsExportSettingsMapRootToHclTerraform(struct?: NfsExportSettingsMapRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_group: {
      value: nfsExportSettingsMapRootPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapRootPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportSettingsMapRootSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportSettingsMapRootSecondaryGroupsList",
    },
    user: {
      value: nfsExportSettingsMapRootUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportSettingsMapRootUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportSettingsMapRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportSettingsMapRoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroup = this._primaryGroup?.internalValue;
    }
    if (this._secondaryGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGroups = this._secondaryGroups?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsExportSettingsMapRoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._primaryGroup.internalValue = undefined;
      this._secondaryGroups.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._primaryGroup.internalValue = value.primaryGroup;
      this._secondaryGroups.internalValue = value.secondaryGroups;
      this._user.internalValue = value.user;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup = new NfsExportSettingsMapRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportSettingsMapRootPrimaryGroup) {
    this._primaryGroup.internalValue = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup.internalValue;
  }

  // secondary_groups - computed: true, optional: true, required: false
  private _secondaryGroups = new NfsExportSettingsMapRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportSettingsMapRootSecondaryGroups[] | cdktf.IResolvable) {
    this._secondaryGroups.internalValue = value;
  }
  public resetSecondaryGroups() {
    this._secondaryGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGroupsInput() {
    return this._secondaryGroups.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new NfsExportSettingsMapRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportSettingsMapRootUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings powerscale_nfs_export_settings}
*/
export class NfsExportSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_export_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfsExportSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfsExportSettings to import
  * @param importFromId The id of the existing NfsExportSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfsExportSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_export_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export_settings powerscale_nfs_export_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfsExportSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NfsExportSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_export_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allDirs = config.allDirs;
    this._blockSize = config.blockSize;
    this._canSetTime = config.canSetTime;
    this._caseInsensitive = config.caseInsensitive;
    this._casePreserving = config.casePreserving;
    this._chownRestricted = config.chownRestricted;
    this._commitAsynchronous = config.commitAsynchronous;
    this._directoryTransferSize = config.directoryTransferSize;
    this._encoding = config.encoding;
    this._linkMax = config.linkMax;
    this._mapAll.internalValue = config.mapAll;
    this._mapFailure.internalValue = config.mapFailure;
    this._mapFull = config.mapFull;
    this._mapLookupUid = config.mapLookupUid;
    this._mapNonRoot.internalValue = config.mapNonRoot;
    this._mapRetry = config.mapRetry;
    this._mapRoot.internalValue = config.mapRoot;
    this._maxFileSize = config.maxFileSize;
    this._nameMaxSize = config.nameMaxSize;
    this._noTruncate = config.noTruncate;
    this._readOnly = config.readOnly;
    this._readTransferMaxSize = config.readTransferMaxSize;
    this._readTransferMultiple = config.readTransferMultiple;
    this._readTransferSize = config.readTransferSize;
    this._readdirplus = config.readdirplus;
    this._readdirplusPrefetch = config.readdirplusPrefetch;
    this._return32BitFileIds = config.return32BitFileIds;
    this._securityFlavors = config.securityFlavors;
    this._setattrAsynchronous = config.setattrAsynchronous;
    this._snapshot = config.snapshot;
    this._symlinks = config.symlinks;
    this._timeDelta = config.timeDelta;
    this._writeDatasyncAction = config.writeDatasyncAction;
    this._writeDatasyncReply = config.writeDatasyncReply;
    this._writeFilesyncAction = config.writeFilesyncAction;
    this._writeFilesyncReply = config.writeFilesyncReply;
    this._writeTransferMaxSize = config.writeTransferMaxSize;
    this._writeTransferMultiple = config.writeTransferMultiple;
    this._writeTransferSize = config.writeTransferSize;
    this._writeUnstableAction = config.writeUnstableAction;
    this._writeUnstableReply = config.writeUnstableReply;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_dirs - computed: true, optional: true, required: false
  private _allDirs?: boolean | cdktf.IResolvable; 
  public get allDirs() {
    return this.getBooleanAttribute('all_dirs');
  }
  public set allDirs(value: boolean | cdktf.IResolvable) {
    this._allDirs = value;
  }
  public resetAllDirs() {
    this._allDirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDirsInput() {
    return this._allDirs;
  }

  // block_size - computed: true, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
  }

  // can_set_time - computed: true, optional: true, required: false
  private _canSetTime?: boolean | cdktf.IResolvable; 
  public get canSetTime() {
    return this.getBooleanAttribute('can_set_time');
  }
  public set canSetTime(value: boolean | cdktf.IResolvable) {
    this._canSetTime = value;
  }
  public resetCanSetTime() {
    this._canSetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canSetTimeInput() {
    return this._canSetTime;
  }

  // case_insensitive - computed: true, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // case_preserving - computed: true, optional: true, required: false
  private _casePreserving?: boolean | cdktf.IResolvable; 
  public get casePreserving() {
    return this.getBooleanAttribute('case_preserving');
  }
  public set casePreserving(value: boolean | cdktf.IResolvable) {
    this._casePreserving = value;
  }
  public resetCasePreserving() {
    this._casePreserving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casePreservingInput() {
    return this._casePreserving;
  }

  // chown_restricted - computed: true, optional: true, required: false
  private _chownRestricted?: boolean | cdktf.IResolvable; 
  public get chownRestricted() {
    return this.getBooleanAttribute('chown_restricted');
  }
  public set chownRestricted(value: boolean | cdktf.IResolvable) {
    this._chownRestricted = value;
  }
  public resetChownRestricted() {
    this._chownRestricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chownRestrictedInput() {
    return this._chownRestricted;
  }

  // commit_asynchronous - computed: true, optional: true, required: false
  private _commitAsynchronous?: boolean | cdktf.IResolvable; 
  public get commitAsynchronous() {
    return this.getBooleanAttribute('commit_asynchronous');
  }
  public set commitAsynchronous(value: boolean | cdktf.IResolvable) {
    this._commitAsynchronous = value;
  }
  public resetCommitAsynchronous() {
    this._commitAsynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitAsynchronousInput() {
    return this._commitAsynchronous;
  }

  // directory_transfer_size - computed: true, optional: true, required: false
  private _directoryTransferSize?: number; 
  public get directoryTransferSize() {
    return this.getNumberAttribute('directory_transfer_size');
  }
  public set directoryTransferSize(value: number) {
    this._directoryTransferSize = value;
  }
  public resetDirectoryTransferSize() {
    this._directoryTransferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryTransferSizeInput() {
    return this._directoryTransferSize;
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_max - computed: true, optional: true, required: false
  private _linkMax?: number; 
  public get linkMax() {
    return this.getNumberAttribute('link_max');
  }
  public set linkMax(value: number) {
    this._linkMax = value;
  }
  public resetLinkMax() {
    this._linkMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMaxInput() {
    return this._linkMax;
  }

  // map_all - computed: true, optional: true, required: false
  private _mapAll = new NfsExportSettingsMapAllOutputReference(this, "map_all");
  public get mapAll() {
    return this._mapAll;
  }
  public putMapAll(value: NfsExportSettingsMapAll) {
    this._mapAll.internalValue = value;
  }
  public resetMapAll() {
    this._mapAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapAllInput() {
    return this._mapAll.internalValue;
  }

  // map_failure - computed: true, optional: true, required: false
  private _mapFailure = new NfsExportSettingsMapFailureOutputReference(this, "map_failure");
  public get mapFailure() {
    return this._mapFailure;
  }
  public putMapFailure(value: NfsExportSettingsMapFailure) {
    this._mapFailure.internalValue = value;
  }
  public resetMapFailure() {
    this._mapFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapFailureInput() {
    return this._mapFailure.internalValue;
  }

  // map_full - computed: true, optional: true, required: false
  private _mapFull?: boolean | cdktf.IResolvable; 
  public get mapFull() {
    return this.getBooleanAttribute('map_full');
  }
  public set mapFull(value: boolean | cdktf.IResolvable) {
    this._mapFull = value;
  }
  public resetMapFull() {
    this._mapFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapFullInput() {
    return this._mapFull;
  }

  // map_lookup_uid - computed: true, optional: true, required: false
  private _mapLookupUid?: boolean | cdktf.IResolvable; 
  public get mapLookupUid() {
    return this.getBooleanAttribute('map_lookup_uid');
  }
  public set mapLookupUid(value: boolean | cdktf.IResolvable) {
    this._mapLookupUid = value;
  }
  public resetMapLookupUid() {
    this._mapLookupUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapLookupUidInput() {
    return this._mapLookupUid;
  }

  // map_non_root - computed: true, optional: true, required: false
  private _mapNonRoot = new NfsExportSettingsMapNonRootOutputReference(this, "map_non_root");
  public get mapNonRoot() {
    return this._mapNonRoot;
  }
  public putMapNonRoot(value: NfsExportSettingsMapNonRoot) {
    this._mapNonRoot.internalValue = value;
  }
  public resetMapNonRoot() {
    this._mapNonRoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapNonRootInput() {
    return this._mapNonRoot.internalValue;
  }

  // map_retry - computed: true, optional: true, required: false
  private _mapRetry?: boolean | cdktf.IResolvable; 
  public get mapRetry() {
    return this.getBooleanAttribute('map_retry');
  }
  public set mapRetry(value: boolean | cdktf.IResolvable) {
    this._mapRetry = value;
  }
  public resetMapRetry() {
    this._mapRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapRetryInput() {
    return this._mapRetry;
  }

  // map_root - computed: true, optional: true, required: false
  private _mapRoot = new NfsExportSettingsMapRootOutputReference(this, "map_root");
  public get mapRoot() {
    return this._mapRoot;
  }
  public putMapRoot(value: NfsExportSettingsMapRoot) {
    this._mapRoot.internalValue = value;
  }
  public resetMapRoot() {
    this._mapRoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapRootInput() {
    return this._mapRoot.internalValue;
  }

  // max_file_size - computed: true, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // name_max_size - computed: true, optional: true, required: false
  private _nameMaxSize?: number; 
  public get nameMaxSize() {
    return this.getNumberAttribute('name_max_size');
  }
  public set nameMaxSize(value: number) {
    this._nameMaxSize = value;
  }
  public resetNameMaxSize() {
    this._nameMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameMaxSizeInput() {
    return this._nameMaxSize;
  }

  // no_truncate - computed: true, optional: true, required: false
  private _noTruncate?: boolean | cdktf.IResolvable; 
  public get noTruncate() {
    return this.getBooleanAttribute('no_truncate');
  }
  public set noTruncate(value: boolean | cdktf.IResolvable) {
    this._noTruncate = value;
  }
  public resetNoTruncate() {
    this._noTruncate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTruncateInput() {
    return this._noTruncate;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // read_transfer_max_size - computed: true, optional: true, required: false
  private _readTransferMaxSize?: number; 
  public get readTransferMaxSize() {
    return this.getNumberAttribute('read_transfer_max_size');
  }
  public set readTransferMaxSize(value: number) {
    this._readTransferMaxSize = value;
  }
  public resetReadTransferMaxSize() {
    this._readTransferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTransferMaxSizeInput() {
    return this._readTransferMaxSize;
  }

  // read_transfer_multiple - computed: true, optional: true, required: false
  private _readTransferMultiple?: number; 
  public get readTransferMultiple() {
    return this.getNumberAttribute('read_transfer_multiple');
  }
  public set readTransferMultiple(value: number) {
    this._readTransferMultiple = value;
  }
  public resetReadTransferMultiple() {
    this._readTransferMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTransferMultipleInput() {
    return this._readTransferMultiple;
  }

  // read_transfer_size - computed: true, optional: true, required: false
  private _readTransferSize?: number; 
  public get readTransferSize() {
    return this.getNumberAttribute('read_transfer_size');
  }
  public set readTransferSize(value: number) {
    this._readTransferSize = value;
  }
  public resetReadTransferSize() {
    this._readTransferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTransferSizeInput() {
    return this._readTransferSize;
  }

  // readdirplus - computed: true, optional: true, required: false
  private _readdirplus?: boolean | cdktf.IResolvable; 
  public get readdirplus() {
    return this.getBooleanAttribute('readdirplus');
  }
  public set readdirplus(value: boolean | cdktf.IResolvable) {
    this._readdirplus = value;
  }
  public resetReaddirplus() {
    this._readdirplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readdirplusInput() {
    return this._readdirplus;
  }

  // readdirplus_prefetch - computed: true, optional: true, required: false
  private _readdirplusPrefetch?: number; 
  public get readdirplusPrefetch() {
    return this.getNumberAttribute('readdirplus_prefetch');
  }
  public set readdirplusPrefetch(value: number) {
    this._readdirplusPrefetch = value;
  }
  public resetReaddirplusPrefetch() {
    this._readdirplusPrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readdirplusPrefetchInput() {
    return this._readdirplusPrefetch;
  }

  // return_32bit_file_ids - computed: true, optional: true, required: false
  private _return32BitFileIds?: boolean | cdktf.IResolvable; 
  public get return32BitFileIds() {
    return this.getBooleanAttribute('return_32bit_file_ids');
  }
  public set return32BitFileIds(value: boolean | cdktf.IResolvable) {
    this._return32BitFileIds = value;
  }
  public resetReturn32BitFileIds() {
    this._return32BitFileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get return32BitFileIdsInput() {
    return this._return32BitFileIds;
  }

  // security_flavors - computed: true, optional: true, required: false
  private _securityFlavors?: string[]; 
  public get securityFlavors() {
    return this.getListAttribute('security_flavors');
  }
  public set securityFlavors(value: string[]) {
    this._securityFlavors = value;
  }
  public resetSecurityFlavors() {
    this._securityFlavors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityFlavorsInput() {
    return this._securityFlavors;
  }

  // setattr_asynchronous - computed: true, optional: true, required: false
  private _setattrAsynchronous?: boolean | cdktf.IResolvable; 
  public get setattrAsynchronous() {
    return this.getBooleanAttribute('setattr_asynchronous');
  }
  public set setattrAsynchronous(value: boolean | cdktf.IResolvable) {
    this._setattrAsynchronous = value;
  }
  public resetSetattrAsynchronous() {
    this._setattrAsynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setattrAsynchronousInput() {
    return this._setattrAsynchronous;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // symlinks - computed: true, optional: true, required: false
  private _symlinks?: boolean | cdktf.IResolvable; 
  public get symlinks() {
    return this.getBooleanAttribute('symlinks');
  }
  public set symlinks(value: boolean | cdktf.IResolvable) {
    this._symlinks = value;
  }
  public resetSymlinks() {
    this._symlinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symlinksInput() {
    return this._symlinks;
  }

  // time_delta - computed: true, optional: true, required: false
  private _timeDelta?: number; 
  public get timeDelta() {
    return this.getNumberAttribute('time_delta');
  }
  public set timeDelta(value: number) {
    this._timeDelta = value;
  }
  public resetTimeDelta() {
    this._timeDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeDeltaInput() {
    return this._timeDelta;
  }

  // write_datasync_action - computed: true, optional: true, required: false
  private _writeDatasyncAction?: string; 
  public get writeDatasyncAction() {
    return this.getStringAttribute('write_datasync_action');
  }
  public set writeDatasyncAction(value: string) {
    this._writeDatasyncAction = value;
  }
  public resetWriteDatasyncAction() {
    this._writeDatasyncAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDatasyncActionInput() {
    return this._writeDatasyncAction;
  }

  // write_datasync_reply - computed: true, optional: true, required: false
  private _writeDatasyncReply?: string; 
  public get writeDatasyncReply() {
    return this.getStringAttribute('write_datasync_reply');
  }
  public set writeDatasyncReply(value: string) {
    this._writeDatasyncReply = value;
  }
  public resetWriteDatasyncReply() {
    this._writeDatasyncReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDatasyncReplyInput() {
    return this._writeDatasyncReply;
  }

  // write_filesync_action - computed: true, optional: true, required: false
  private _writeFilesyncAction?: string; 
  public get writeFilesyncAction() {
    return this.getStringAttribute('write_filesync_action');
  }
  public set writeFilesyncAction(value: string) {
    this._writeFilesyncAction = value;
  }
  public resetWriteFilesyncAction() {
    this._writeFilesyncAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeFilesyncActionInput() {
    return this._writeFilesyncAction;
  }

  // write_filesync_reply - computed: true, optional: true, required: false
  private _writeFilesyncReply?: string; 
  public get writeFilesyncReply() {
    return this.getStringAttribute('write_filesync_reply');
  }
  public set writeFilesyncReply(value: string) {
    this._writeFilesyncReply = value;
  }
  public resetWriteFilesyncReply() {
    this._writeFilesyncReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeFilesyncReplyInput() {
    return this._writeFilesyncReply;
  }

  // write_transfer_max_size - computed: true, optional: true, required: false
  private _writeTransferMaxSize?: number; 
  public get writeTransferMaxSize() {
    return this.getNumberAttribute('write_transfer_max_size');
  }
  public set writeTransferMaxSize(value: number) {
    this._writeTransferMaxSize = value;
  }
  public resetWriteTransferMaxSize() {
    this._writeTransferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTransferMaxSizeInput() {
    return this._writeTransferMaxSize;
  }

  // write_transfer_multiple - computed: true, optional: true, required: false
  private _writeTransferMultiple?: number; 
  public get writeTransferMultiple() {
    return this.getNumberAttribute('write_transfer_multiple');
  }
  public set writeTransferMultiple(value: number) {
    this._writeTransferMultiple = value;
  }
  public resetWriteTransferMultiple() {
    this._writeTransferMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTransferMultipleInput() {
    return this._writeTransferMultiple;
  }

  // write_transfer_size - computed: true, optional: true, required: false
  private _writeTransferSize?: number; 
  public get writeTransferSize() {
    return this.getNumberAttribute('write_transfer_size');
  }
  public set writeTransferSize(value: number) {
    this._writeTransferSize = value;
  }
  public resetWriteTransferSize() {
    this._writeTransferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTransferSizeInput() {
    return this._writeTransferSize;
  }

  // write_unstable_action - computed: true, optional: true, required: false
  private _writeUnstableAction?: string; 
  public get writeUnstableAction() {
    return this.getStringAttribute('write_unstable_action');
  }
  public set writeUnstableAction(value: string) {
    this._writeUnstableAction = value;
  }
  public resetWriteUnstableAction() {
    this._writeUnstableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUnstableActionInput() {
    return this._writeUnstableAction;
  }

  // write_unstable_reply - computed: true, optional: true, required: false
  private _writeUnstableReply?: string; 
  public get writeUnstableReply() {
    return this.getStringAttribute('write_unstable_reply');
  }
  public set writeUnstableReply(value: string) {
    this._writeUnstableReply = value;
  }
  public resetWriteUnstableReply() {
    this._writeUnstableReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUnstableReplyInput() {
    return this._writeUnstableReply;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_dirs: cdktf.booleanToTerraform(this._allDirs),
      block_size: cdktf.numberToTerraform(this._blockSize),
      can_set_time: cdktf.booleanToTerraform(this._canSetTime),
      case_insensitive: cdktf.booleanToTerraform(this._caseInsensitive),
      case_preserving: cdktf.booleanToTerraform(this._casePreserving),
      chown_restricted: cdktf.booleanToTerraform(this._chownRestricted),
      commit_asynchronous: cdktf.booleanToTerraform(this._commitAsynchronous),
      directory_transfer_size: cdktf.numberToTerraform(this._directoryTransferSize),
      encoding: cdktf.stringToTerraform(this._encoding),
      link_max: cdktf.numberToTerraform(this._linkMax),
      map_all: nfsExportSettingsMapAllToTerraform(this._mapAll.internalValue),
      map_failure: nfsExportSettingsMapFailureToTerraform(this._mapFailure.internalValue),
      map_full: cdktf.booleanToTerraform(this._mapFull),
      map_lookup_uid: cdktf.booleanToTerraform(this._mapLookupUid),
      map_non_root: nfsExportSettingsMapNonRootToTerraform(this._mapNonRoot.internalValue),
      map_retry: cdktf.booleanToTerraform(this._mapRetry),
      map_root: nfsExportSettingsMapRootToTerraform(this._mapRoot.internalValue),
      max_file_size: cdktf.numberToTerraform(this._maxFileSize),
      name_max_size: cdktf.numberToTerraform(this._nameMaxSize),
      no_truncate: cdktf.booleanToTerraform(this._noTruncate),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      read_transfer_max_size: cdktf.numberToTerraform(this._readTransferMaxSize),
      read_transfer_multiple: cdktf.numberToTerraform(this._readTransferMultiple),
      read_transfer_size: cdktf.numberToTerraform(this._readTransferSize),
      readdirplus: cdktf.booleanToTerraform(this._readdirplus),
      readdirplus_prefetch: cdktf.numberToTerraform(this._readdirplusPrefetch),
      return_32bit_file_ids: cdktf.booleanToTerraform(this._return32BitFileIds),
      security_flavors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityFlavors),
      setattr_asynchronous: cdktf.booleanToTerraform(this._setattrAsynchronous),
      snapshot: cdktf.stringToTerraform(this._snapshot),
      symlinks: cdktf.booleanToTerraform(this._symlinks),
      time_delta: cdktf.numberToTerraform(this._timeDelta),
      write_datasync_action: cdktf.stringToTerraform(this._writeDatasyncAction),
      write_datasync_reply: cdktf.stringToTerraform(this._writeDatasyncReply),
      write_filesync_action: cdktf.stringToTerraform(this._writeFilesyncAction),
      write_filesync_reply: cdktf.stringToTerraform(this._writeFilesyncReply),
      write_transfer_max_size: cdktf.numberToTerraform(this._writeTransferMaxSize),
      write_transfer_multiple: cdktf.numberToTerraform(this._writeTransferMultiple),
      write_transfer_size: cdktf.numberToTerraform(this._writeTransferSize),
      write_unstable_action: cdktf.stringToTerraform(this._writeUnstableAction),
      write_unstable_reply: cdktf.stringToTerraform(this._writeUnstableReply),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_dirs: {
        value: cdktf.booleanToHclTerraform(this._allDirs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_size: {
        value: cdktf.numberToHclTerraform(this._blockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      can_set_time: {
        value: cdktf.booleanToHclTerraform(this._canSetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      case_insensitive: {
        value: cdktf.booleanToHclTerraform(this._caseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      case_preserving: {
        value: cdktf.booleanToHclTerraform(this._casePreserving),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chown_restricted: {
        value: cdktf.booleanToHclTerraform(this._chownRestricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      commit_asynchronous: {
        value: cdktf.booleanToHclTerraform(this._commitAsynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory_transfer_size: {
        value: cdktf.numberToHclTerraform(this._directoryTransferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encoding: {
        value: cdktf.stringToHclTerraform(this._encoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_max: {
        value: cdktf.numberToHclTerraform(this._linkMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      map_all: {
        value: nfsExportSettingsMapAllToHclTerraform(this._mapAll.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportSettingsMapAll",
      },
      map_failure: {
        value: nfsExportSettingsMapFailureToHclTerraform(this._mapFailure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportSettingsMapFailure",
      },
      map_full: {
        value: cdktf.booleanToHclTerraform(this._mapFull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      map_lookup_uid: {
        value: cdktf.booleanToHclTerraform(this._mapLookupUid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      map_non_root: {
        value: nfsExportSettingsMapNonRootToHclTerraform(this._mapNonRoot.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportSettingsMapNonRoot",
      },
      map_retry: {
        value: cdktf.booleanToHclTerraform(this._mapRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      map_root: {
        value: nfsExportSettingsMapRootToHclTerraform(this._mapRoot.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportSettingsMapRoot",
      },
      max_file_size: {
        value: cdktf.numberToHclTerraform(this._maxFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_max_size: {
        value: cdktf.numberToHclTerraform(this._nameMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_truncate: {
        value: cdktf.booleanToHclTerraform(this._noTruncate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_transfer_max_size: {
        value: cdktf.numberToHclTerraform(this._readTransferMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_transfer_multiple: {
        value: cdktf.numberToHclTerraform(this._readTransferMultiple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_transfer_size: {
        value: cdktf.numberToHclTerraform(this._readTransferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      readdirplus: {
        value: cdktf.booleanToHclTerraform(this._readdirplus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      readdirplus_prefetch: {
        value: cdktf.numberToHclTerraform(this._readdirplusPrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      return_32bit_file_ids: {
        value: cdktf.booleanToHclTerraform(this._return32BitFileIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_flavors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityFlavors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      setattr_asynchronous: {
        value: cdktf.booleanToHclTerraform(this._setattrAsynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot: {
        value: cdktf.stringToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      symlinks: {
        value: cdktf.booleanToHclTerraform(this._symlinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_delta: {
        value: cdktf.numberToHclTerraform(this._timeDelta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_datasync_action: {
        value: cdktf.stringToHclTerraform(this._writeDatasyncAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_datasync_reply: {
        value: cdktf.stringToHclTerraform(this._writeDatasyncReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_filesync_action: {
        value: cdktf.stringToHclTerraform(this._writeFilesyncAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_filesync_reply: {
        value: cdktf.stringToHclTerraform(this._writeFilesyncReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_transfer_max_size: {
        value: cdktf.numberToHclTerraform(this._writeTransferMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_transfer_multiple: {
        value: cdktf.numberToHclTerraform(this._writeTransferMultiple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_transfer_size: {
        value: cdktf.numberToHclTerraform(this._writeTransferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_unstable_action: {
        value: cdktf.stringToHclTerraform(this._writeUnstableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_unstable_reply: {
        value: cdktf.stringToHclTerraform(this._writeUnstableReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
