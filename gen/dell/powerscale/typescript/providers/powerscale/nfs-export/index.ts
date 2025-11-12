// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * True if all directories under the specified paths are mountable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#all_dirs NfsExport#all_dirs}
  */
  readonly allDirs?: boolean | cdktf.IResolvable;
  /**
  * Specifies the block size returned by the NFS statfs procedure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#block_size NfsExport#block_size}
  */
  readonly blockSize?: number;
  /**
  * True if the client can set file times through the NFS set attribute request. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#can_set_time NfsExport#can_set_time}
  */
  readonly canSetTime?: boolean | cdktf.IResolvable;
  /**
  * True if the case is ignored for file names. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#case_insensitive NfsExport#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * True if the case is preserved for file names. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#case_preserving NfsExport#case_preserving}
  */
  readonly casePreserving?: boolean | cdktf.IResolvable;
  /**
  * True if the superuser can change file ownership. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#chown_restricted NfsExport#chown_restricted}
  */
  readonly chownRestricted?: boolean | cdktf.IResolvable;
  /**
  * Specifies the clients with root access to the export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#clients NfsExport#clients}
  */
  readonly clients?: string[];
  /**
  * True if NFS  commit  requests execute asynchronously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#commit_asynchronous NfsExport#commit_asynchronous}
  */
  readonly commitAsynchronous?: boolean | cdktf.IResolvable;
  /**
  * Reports the paths that conflict with another export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#conflicting_paths NfsExport#conflicting_paths}
  */
  readonly conflictingPaths?: string[];
  /**
  * Specifies the user-defined string that is used to identify the export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#description NfsExport#description}
  */
  readonly description?: string;
  /**
  * Specifies the preferred size for directory read operations. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#directory_transfer_size NfsExport#directory_transfer_size}
  */
  readonly directoryTransferSize?: number;
  /**
  * Specifies the default character set encoding of the clients connecting to the export, unless otherwise specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#encoding NfsExport#encoding}
  */
  readonly encoding?: string;
  /**
  * If true, the export will be created even if it conflicts with another export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#force NfsExport#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Ignore invalid users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#ignore_bad_auth NfsExport#ignore_bad_auth}
  */
  readonly ignoreBadAuth?: boolean | cdktf.IResolvable;
  /**
  * Ignore nonexistent or otherwise bad paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#ignore_bad_paths NfsExport#ignore_bad_paths}
  */
  readonly ignoreBadPaths?: boolean | cdktf.IResolvable;
  /**
  * Ignore conflicts with existing exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#ignore_conflicts NfsExport#ignore_conflicts}
  */
  readonly ignoreConflicts?: boolean | cdktf.IResolvable;
  /**
  * Ignore unresolvable hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#ignore_unresolvable_hosts NfsExport#ignore_unresolvable_hosts}
  */
  readonly ignoreUnresolvableHosts?: boolean | cdktf.IResolvable;
  /**
  * Specifies the reported maximum number of links to a file. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#link_max NfsExport#link_max}
  */
  readonly linkMax?: number;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#map_all NfsExport#map_all}
  */
  readonly mapAll?: NfsExportMapAll;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#map_failure NfsExport#map_failure}
  */
  readonly mapFailure?: NfsExportMapFailure;
  /**
  * True if user mappings query the OneFS user database. When set to false, user mappings only query local authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#map_full NfsExport#map_full}
  */
  readonly mapFull?: boolean | cdktf.IResolvable;
  /**
  * True if incoming user IDs (UIDs) are mapped to users in the OneFS user database. When set to false, incoming UIDs are applied directly to file operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#map_lookup_uid NfsExport#map_lookup_uid}
  */
  readonly mapLookupUid?: boolean | cdktf.IResolvable;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#map_non_root NfsExport#map_non_root}
  */
  readonly mapNonRoot?: NfsExportMapNonRoot;
  /**
  * Determines whether searches for users specified in 'map_all', 'map_root' or 'map_nonroot' are retried if the search fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#map_retry NfsExport#map_retry}
  */
  readonly mapRetry?: boolean | cdktf.IResolvable;
  /**
  * Specifies the users and groups to which non-root and root clients are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#map_root NfsExport#map_root}
  */
  readonly mapRoot?: NfsExportMapRoot;
  /**
  * Specifies the maximum file size for any file accessed from the export. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#max_file_size NfsExport#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Specifies the reported maximum length of a file name. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name_max_size NfsExport#name_max_size}
  */
  readonly nameMaxSize?: number;
  /**
  * True if long file names result in an error. This parameter does not affect server behavior, but is included to accommodate legacy client requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#no_truncate NfsExport#no_truncate}
  */
  readonly noTruncate?: boolean | cdktf.IResolvable;
  /**
  * Specifies the paths under /ifs that are exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#paths NfsExport#paths}
  */
  readonly paths: string[];
  /**
  * True if the export is set to read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#read_only NfsExport#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies the clients with read-only access to the export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#read_only_clients NfsExport#read_only_clients}
  */
  readonly readOnlyClients?: string[];
  /**
  * Specifies the maximum buffer size that clients should use on NFS read requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#read_transfer_max_size NfsExport#read_transfer_max_size}
  */
  readonly readTransferMaxSize?: number;
  /**
  * Specifies the preferred multiple size for NFS read requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#read_transfer_multiple NfsExport#read_transfer_multiple}
  */
  readonly readTransferMultiple?: number;
  /**
  * Specifies the preferred size for NFS read requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#read_transfer_size NfsExport#read_transfer_size}
  */
  readonly readTransferSize?: number;
  /**
  * Specifies the clients with both read and write access to the export, even when the export is set to read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#read_write_clients NfsExport#read_write_clients}
  */
  readonly readWriteClients?: string[];
  /**
  * True if 'readdirplus' requests are enabled. Enabling this property might improve network performance and is only available for NFSv3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#readdirplus NfsExport#readdirplus}
  */
  readonly readdirplus?: boolean | cdktf.IResolvable;
  /**
  * Sets the number of directory entries that are prefetched when a 'readdirplus' request is processed. (Deprecated.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#readdirplus_prefetch NfsExport#readdirplus_prefetch}
  */
  readonly readdirplusPrefetch?: number;
  /**
  * Limits the size of file identifiers returned by NFSv3+ to 32-bit values (may require remount).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#return_32bit_file_ids NfsExport#return_32bit_file_ids}
  */
  readonly return32BitFileIds?: boolean | cdktf.IResolvable;
  /**
  * Clients that have root access to the export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#root_clients NfsExport#root_clients}
  */
  readonly rootClients?: string[];
  /**
  * When specified as 'effective', or not specified, all fields are returned. When specified as 'user', only fields with non-default values are shown. When specified as 'default', the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#scope NfsExport#scope}
  */
  readonly scope?: string;
  /**
  * Specifies the authentication types that are supported for this export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#security_flavors NfsExport#security_flavors}
  */
  readonly securityFlavors?: string[];
  /**
  * True if set attribute operations execute asynchronously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#setattr_asynchronous NfsExport#setattr_asynchronous}
  */
  readonly setattrAsynchronous?: boolean | cdktf.IResolvable;
  /**
  * Specifies the snapshot for all mounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#snapshot NfsExport#snapshot}
  */
  readonly snapshot?: string;
  /**
  * True if symlinks are supported. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#symlinks NfsExport#symlinks}
  */
  readonly symlinks?: boolean | cdktf.IResolvable;
  /**
  * Specifies the resolution of all time values that are returned to the clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#time_delta NfsExport#time_delta}
  */
  readonly timeDelta?: number;
  /**
  * Specifies the action to be taken when an NFSv3+ datasync write is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_datasync_action NfsExport#write_datasync_action}
  */
  readonly writeDatasyncAction?: string;
  /**
  * Specifies the stability disposition returned when an NFSv3+ datasync write is processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_datasync_reply NfsExport#write_datasync_reply}
  */
  readonly writeDatasyncReply?: string;
  /**
  * Specifies the action to be taken when an NFSv3+ filesync write is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_filesync_action NfsExport#write_filesync_action}
  */
  readonly writeFilesyncAction?: string;
  /**
  * Specifies the stability disposition returned when an NFSv3+ filesync write is processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_filesync_reply NfsExport#write_filesync_reply}
  */
  readonly writeFilesyncReply?: string;
  /**
  * Specifies the maximum buffer size that clients should use on NFS write requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_transfer_max_size NfsExport#write_transfer_max_size}
  */
  readonly writeTransferMaxSize?: number;
  /**
  * Specifies the preferred multiple size for NFS write requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_transfer_multiple NfsExport#write_transfer_multiple}
  */
  readonly writeTransferMultiple?: number;
  /**
  * Specifies the preferred multiple size for NFS write requests. This value is used to advise the client of optimal settings for the server, but is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_transfer_size NfsExport#write_transfer_size}
  */
  readonly writeTransferSize?: number;
  /**
  * Specifies the action to be taken when an NFSv3+ unstable write is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_unstable_action NfsExport#write_unstable_action}
  */
  readonly writeUnstableAction?: string;
  /**
  * Specifies the stability disposition returned when an NFSv3+ unstable write is processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#write_unstable_reply NfsExport#write_unstable_reply}
  */
  readonly writeUnstableReply?: string;
  /**
  * Specifies the zone in which the export is valid. Cannot be changed once set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#zone NfsExport#zone}
  */
  readonly zone?: string;
}
export interface NfsExportMapAllPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapAllPrimaryGroupToTerraform(struct?: NfsExportMapAllPrimaryGroup | cdktf.IResolvable): any {
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


export function nfsExportMapAllPrimaryGroupToHclTerraform(struct?: NfsExportMapAllPrimaryGroup | cdktf.IResolvable): any {
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

export class NfsExportMapAllPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapAllPrimaryGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapAllPrimaryGroup | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapAllSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapAllSecondaryGroupsToTerraform(struct?: NfsExportMapAllSecondaryGroups | cdktf.IResolvable): any {
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


export function nfsExportMapAllSecondaryGroupsToHclTerraform(struct?: NfsExportMapAllSecondaryGroups | cdktf.IResolvable): any {
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

export class NfsExportMapAllSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportMapAllSecondaryGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapAllSecondaryGroups | cdktf.IResolvable | undefined) {
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

export class NfsExportMapAllSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportMapAllSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportMapAllSecondaryGroupsOutputReference {
    return new NfsExportMapAllSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportMapAllUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapAllUserToTerraform(struct?: NfsExportMapAllUser | cdktf.IResolvable): any {
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


export function nfsExportMapAllUserToHclTerraform(struct?: NfsExportMapAllUser | cdktf.IResolvable): any {
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

export class NfsExportMapAllUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapAllUser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapAllUser | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapAll {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#enabled NfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#primary_group NfsExport#primary_group}
  */
  readonly primaryGroup?: NfsExportMapAllPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#secondary_groups NfsExport#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportMapAllSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#user NfsExport#user}
  */
  readonly user?: NfsExportMapAllUser;
}

export function nfsExportMapAllToTerraform(struct?: NfsExportMapAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportMapAllPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportMapAllSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportMapAllUserToTerraform(struct!.user),
  }
}


export function nfsExportMapAllToHclTerraform(struct?: NfsExportMapAll | cdktf.IResolvable): any {
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
      value: nfsExportMapAllPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapAllPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportMapAllSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportMapAllSecondaryGroupsList",
    },
    user: {
      value: nfsExportMapAllUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapAllUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportMapAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapAll | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapAll | cdktf.IResolvable | undefined) {
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
  private _primaryGroup = new NfsExportMapAllPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportMapAllPrimaryGroup) {
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
  private _secondaryGroups = new NfsExportMapAllSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportMapAllSecondaryGroups[] | cdktf.IResolvable) {
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
  private _user = new NfsExportMapAllUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportMapAllUser) {
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
export interface NfsExportMapFailurePrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapFailurePrimaryGroupToTerraform(struct?: NfsExportMapFailurePrimaryGroup | cdktf.IResolvable): any {
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


export function nfsExportMapFailurePrimaryGroupToHclTerraform(struct?: NfsExportMapFailurePrimaryGroup | cdktf.IResolvable): any {
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

export class NfsExportMapFailurePrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapFailurePrimaryGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapFailurePrimaryGroup | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapFailureSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapFailureSecondaryGroupsToTerraform(struct?: NfsExportMapFailureSecondaryGroups | cdktf.IResolvable): any {
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


export function nfsExportMapFailureSecondaryGroupsToHclTerraform(struct?: NfsExportMapFailureSecondaryGroups | cdktf.IResolvable): any {
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

export class NfsExportMapFailureSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportMapFailureSecondaryGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapFailureSecondaryGroups | cdktf.IResolvable | undefined) {
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

export class NfsExportMapFailureSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportMapFailureSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportMapFailureSecondaryGroupsOutputReference {
    return new NfsExportMapFailureSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportMapFailureUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapFailureUserToTerraform(struct?: NfsExportMapFailureUser | cdktf.IResolvable): any {
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


export function nfsExportMapFailureUserToHclTerraform(struct?: NfsExportMapFailureUser | cdktf.IResolvable): any {
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

export class NfsExportMapFailureUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapFailureUser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapFailureUser | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapFailure {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#enabled NfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#primary_group NfsExport#primary_group}
  */
  readonly primaryGroup?: NfsExportMapFailurePrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#secondary_groups NfsExport#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportMapFailureSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#user NfsExport#user}
  */
  readonly user?: NfsExportMapFailureUser;
}

export function nfsExportMapFailureToTerraform(struct?: NfsExportMapFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportMapFailurePrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportMapFailureSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportMapFailureUserToTerraform(struct!.user),
  }
}


export function nfsExportMapFailureToHclTerraform(struct?: NfsExportMapFailure | cdktf.IResolvable): any {
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
      value: nfsExportMapFailurePrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapFailurePrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportMapFailureSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportMapFailureSecondaryGroupsList",
    },
    user: {
      value: nfsExportMapFailureUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapFailureUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportMapFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapFailure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapFailure | cdktf.IResolvable | undefined) {
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
  private _primaryGroup = new NfsExportMapFailurePrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportMapFailurePrimaryGroup) {
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
  private _secondaryGroups = new NfsExportMapFailureSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportMapFailureSecondaryGroups[] | cdktf.IResolvable) {
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
  private _user = new NfsExportMapFailureUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportMapFailureUser) {
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
export interface NfsExportMapNonRootPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapNonRootPrimaryGroupToTerraform(struct?: NfsExportMapNonRootPrimaryGroup | cdktf.IResolvable): any {
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


export function nfsExportMapNonRootPrimaryGroupToHclTerraform(struct?: NfsExportMapNonRootPrimaryGroup | cdktf.IResolvable): any {
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

export class NfsExportMapNonRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapNonRootPrimaryGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapNonRootPrimaryGroup | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapNonRootSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapNonRootSecondaryGroupsToTerraform(struct?: NfsExportMapNonRootSecondaryGroups | cdktf.IResolvable): any {
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


export function nfsExportMapNonRootSecondaryGroupsToHclTerraform(struct?: NfsExportMapNonRootSecondaryGroups | cdktf.IResolvable): any {
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

export class NfsExportMapNonRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportMapNonRootSecondaryGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapNonRootSecondaryGroups | cdktf.IResolvable | undefined) {
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

export class NfsExportMapNonRootSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportMapNonRootSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportMapNonRootSecondaryGroupsOutputReference {
    return new NfsExportMapNonRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportMapNonRootUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapNonRootUserToTerraform(struct?: NfsExportMapNonRootUser | cdktf.IResolvable): any {
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


export function nfsExportMapNonRootUserToHclTerraform(struct?: NfsExportMapNonRootUser | cdktf.IResolvable): any {
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

export class NfsExportMapNonRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapNonRootUser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapNonRootUser | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapNonRoot {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#enabled NfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#primary_group NfsExport#primary_group}
  */
  readonly primaryGroup?: NfsExportMapNonRootPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#secondary_groups NfsExport#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportMapNonRootSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#user NfsExport#user}
  */
  readonly user?: NfsExportMapNonRootUser;
}

export function nfsExportMapNonRootToTerraform(struct?: NfsExportMapNonRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportMapNonRootPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportMapNonRootSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportMapNonRootUserToTerraform(struct!.user),
  }
}


export function nfsExportMapNonRootToHclTerraform(struct?: NfsExportMapNonRoot | cdktf.IResolvable): any {
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
      value: nfsExportMapNonRootPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapNonRootPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportMapNonRootSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportMapNonRootSecondaryGroupsList",
    },
    user: {
      value: nfsExportMapNonRootUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapNonRootUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportMapNonRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapNonRoot | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapNonRoot | cdktf.IResolvable | undefined) {
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
  private _primaryGroup = new NfsExportMapNonRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportMapNonRootPrimaryGroup) {
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
  private _secondaryGroups = new NfsExportMapNonRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportMapNonRootSecondaryGroups[] | cdktf.IResolvable) {
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
  private _user = new NfsExportMapNonRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportMapNonRootUser) {
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
export interface NfsExportMapRootPrimaryGroup {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapRootPrimaryGroupToTerraform(struct?: NfsExportMapRootPrimaryGroup | cdktf.IResolvable): any {
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


export function nfsExportMapRootPrimaryGroupToHclTerraform(struct?: NfsExportMapRootPrimaryGroup | cdktf.IResolvable): any {
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

export class NfsExportMapRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapRootPrimaryGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapRootPrimaryGroup | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapRootSecondaryGroups {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapRootSecondaryGroupsToTerraform(struct?: NfsExportMapRootSecondaryGroups | cdktf.IResolvable): any {
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


export function nfsExportMapRootSecondaryGroupsToHclTerraform(struct?: NfsExportMapRootSecondaryGroups | cdktf.IResolvable): any {
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

export class NfsExportMapRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfsExportMapRootSecondaryGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapRootSecondaryGroups | cdktf.IResolvable | undefined) {
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

export class NfsExportMapRootSecondaryGroupsList extends cdktf.ComplexList {
  public internalValue? : NfsExportMapRootSecondaryGroups[] | cdktf.IResolvable

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
  public get(index: number): NfsExportMapRootSecondaryGroupsOutputReference {
    return new NfsExportMapRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsExportMapRootUser {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#id NfsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#type NfsExport#type}
  */
  readonly type?: string;
}

export function nfsExportMapRootUserToTerraform(struct?: NfsExportMapRootUser | cdktf.IResolvable): any {
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


export function nfsExportMapRootUserToHclTerraform(struct?: NfsExportMapRootUser | cdktf.IResolvable): any {
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

export class NfsExportMapRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapRootUser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapRootUser | cdktf.IResolvable | undefined) {
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
export interface NfsExportMapRoot {
  /**
  * True if the user mapping is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#enabled NfsExport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#primary_group NfsExport#primary_group}
  */
  readonly primaryGroup?: NfsExportMapRootPrimaryGroup;
  /**
  * Specifies persona properties for the secondary user group. A persona consists of either a type and name, or an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#secondary_groups NfsExport#secondary_groups}
  */
  readonly secondaryGroups?: NfsExportMapRootSecondaryGroups[] | cdktf.IResolvable;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#user NfsExport#user}
  */
  readonly user?: NfsExportMapRootUser;
}

export function nfsExportMapRootToTerraform(struct?: NfsExportMapRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_group: nfsExportMapRootPrimaryGroupToTerraform(struct!.primaryGroup),
    secondary_groups: cdktf.listMapper(nfsExportMapRootSecondaryGroupsToTerraform, false)(struct!.secondaryGroups),
    user: nfsExportMapRootUserToTerraform(struct!.user),
  }
}


export function nfsExportMapRootToHclTerraform(struct?: NfsExportMapRoot | cdktf.IResolvable): any {
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
      value: nfsExportMapRootPrimaryGroupToHclTerraform(struct!.primaryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapRootPrimaryGroup",
    },
    secondary_groups: {
      value: cdktf.listMapperHcl(nfsExportMapRootSecondaryGroupsToHclTerraform, false)(struct!.secondaryGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NfsExportMapRootSecondaryGroupsList",
    },
    user: {
      value: nfsExportMapRootUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsExportMapRootUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsExportMapRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsExportMapRoot | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NfsExportMapRoot | cdktf.IResolvable | undefined) {
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
  private _primaryGroup = new NfsExportMapRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }
  public putPrimaryGroup(value: NfsExportMapRootPrimaryGroup) {
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
  private _secondaryGroups = new NfsExportMapRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }
  public putSecondaryGroups(value: NfsExportMapRootSecondaryGroups[] | cdktf.IResolvable) {
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
  private _user = new NfsExportMapRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: NfsExportMapRootUser) {
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
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export powerscale_nfs_export}
*/
export class NfsExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfsExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfsExport to import
  * @param importFromId The id of the existing NfsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfsExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_export powerscale_nfs_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfsExportConfig
  */
  public constructor(scope: Construct, id: string, config: NfsExportConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_export',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
    this._clients = config.clients;
    this._commitAsynchronous = config.commitAsynchronous;
    this._conflictingPaths = config.conflictingPaths;
    this._description = config.description;
    this._directoryTransferSize = config.directoryTransferSize;
    this._encoding = config.encoding;
    this._force = config.force;
    this._ignoreBadAuth = config.ignoreBadAuth;
    this._ignoreBadPaths = config.ignoreBadPaths;
    this._ignoreConflicts = config.ignoreConflicts;
    this._ignoreUnresolvableHosts = config.ignoreUnresolvableHosts;
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
    this._paths = config.paths;
    this._readOnly = config.readOnly;
    this._readOnlyClients = config.readOnlyClients;
    this._readTransferMaxSize = config.readTransferMaxSize;
    this._readTransferMultiple = config.readTransferMultiple;
    this._readTransferSize = config.readTransferSize;
    this._readWriteClients = config.readWriteClients;
    this._readdirplus = config.readdirplus;
    this._readdirplusPrefetch = config.readdirplusPrefetch;
    this._return32BitFileIds = config.return32BitFileIds;
    this._rootClients = config.rootClients;
    this._scope = config.scope;
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

  // clients - computed: true, optional: true, required: false
  private _clients?: string[]; 
  public get clients() {
    return cdktf.Fn.tolist(this.getListAttribute('clients'));
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
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

  // conflicting_paths - computed: true, optional: true, required: false
  private _conflictingPaths?: string[]; 
  public get conflictingPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('conflicting_paths'));
  }
  public set conflictingPaths(value: string[]) {
    this._conflictingPaths = value;
  }
  public resetConflictingPaths() {
    this._conflictingPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictingPathsInput() {
    return this._conflictingPaths;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ignore_bad_auth - computed: false, optional: true, required: false
  private _ignoreBadAuth?: boolean | cdktf.IResolvable; 
  public get ignoreBadAuth() {
    return this.getBooleanAttribute('ignore_bad_auth');
  }
  public set ignoreBadAuth(value: boolean | cdktf.IResolvable) {
    this._ignoreBadAuth = value;
  }
  public resetIgnoreBadAuth() {
    this._ignoreBadAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBadAuthInput() {
    return this._ignoreBadAuth;
  }

  // ignore_bad_paths - computed: false, optional: true, required: false
  private _ignoreBadPaths?: boolean | cdktf.IResolvable; 
  public get ignoreBadPaths() {
    return this.getBooleanAttribute('ignore_bad_paths');
  }
  public set ignoreBadPaths(value: boolean | cdktf.IResolvable) {
    this._ignoreBadPaths = value;
  }
  public resetIgnoreBadPaths() {
    this._ignoreBadPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBadPathsInput() {
    return this._ignoreBadPaths;
  }

  // ignore_conflicts - computed: false, optional: true, required: false
  private _ignoreConflicts?: boolean | cdktf.IResolvable; 
  public get ignoreConflicts() {
    return this.getBooleanAttribute('ignore_conflicts');
  }
  public set ignoreConflicts(value: boolean | cdktf.IResolvable) {
    this._ignoreConflicts = value;
  }
  public resetIgnoreConflicts() {
    this._ignoreConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreConflictsInput() {
    return this._ignoreConflicts;
  }

  // ignore_unresolvable_hosts - computed: false, optional: true, required: false
  private _ignoreUnresolvableHosts?: boolean | cdktf.IResolvable; 
  public get ignoreUnresolvableHosts() {
    return this.getBooleanAttribute('ignore_unresolvable_hosts');
  }
  public set ignoreUnresolvableHosts(value: boolean | cdktf.IResolvable) {
    this._ignoreUnresolvableHosts = value;
  }
  public resetIgnoreUnresolvableHosts() {
    this._ignoreUnresolvableHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnresolvableHostsInput() {
    return this._ignoreUnresolvableHosts;
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

  // map_all - computed: false, optional: true, required: false
  private _mapAll = new NfsExportMapAllOutputReference(this, "map_all");
  public get mapAll() {
    return this._mapAll;
  }
  public putMapAll(value: NfsExportMapAll) {
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
  private _mapFailure = new NfsExportMapFailureOutputReference(this, "map_failure");
  public get mapFailure() {
    return this._mapFailure;
  }
  public putMapFailure(value: NfsExportMapFailure) {
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
  private _mapNonRoot = new NfsExportMapNonRootOutputReference(this, "map_non_root");
  public get mapNonRoot() {
    return this._mapNonRoot;
  }
  public putMapNonRoot(value: NfsExportMapNonRoot) {
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
  private _mapRoot = new NfsExportMapRootOutputReference(this, "map_root");
  public get mapRoot() {
    return this._mapRoot;
  }
  public putMapRoot(value: NfsExportMapRoot) {
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

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
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

  // read_only_clients - computed: true, optional: true, required: false
  private _readOnlyClients?: string[]; 
  public get readOnlyClients() {
    return cdktf.Fn.tolist(this.getListAttribute('read_only_clients'));
  }
  public set readOnlyClients(value: string[]) {
    this._readOnlyClients = value;
  }
  public resetReadOnlyClients() {
    this._readOnlyClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyClientsInput() {
    return this._readOnlyClients;
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

  // read_write_clients - computed: true, optional: true, required: false
  private _readWriteClients?: string[]; 
  public get readWriteClients() {
    return cdktf.Fn.tolist(this.getListAttribute('read_write_clients'));
  }
  public set readWriteClients(value: string[]) {
    this._readWriteClients = value;
  }
  public resetReadWriteClients() {
    this._readWriteClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteClientsInput() {
    return this._readWriteClients;
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

  // root_clients - computed: true, optional: true, required: false
  private _rootClients?: string[]; 
  public get rootClients() {
    return cdktf.Fn.tolist(this.getListAttribute('root_clients'));
  }
  public set rootClients(value: string[]) {
    this._rootClients = value;
  }
  public resetRootClients() {
    this._rootClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootClientsInput() {
    return this._rootClients;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // security_flavors - computed: true, optional: true, required: false
  private _securityFlavors?: string[]; 
  public get securityFlavors() {
    return cdktf.Fn.tolist(this.getListAttribute('security_flavors'));
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

  // unresolved_clients - computed: true, optional: false, required: false
  public get unresolvedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('unresolved_clients'));
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
      clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clients),
      commit_asynchronous: cdktf.booleanToTerraform(this._commitAsynchronous),
      conflicting_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._conflictingPaths),
      description: cdktf.stringToTerraform(this._description),
      directory_transfer_size: cdktf.numberToTerraform(this._directoryTransferSize),
      encoding: cdktf.stringToTerraform(this._encoding),
      force: cdktf.booleanToTerraform(this._force),
      ignore_bad_auth: cdktf.booleanToTerraform(this._ignoreBadAuth),
      ignore_bad_paths: cdktf.booleanToTerraform(this._ignoreBadPaths),
      ignore_conflicts: cdktf.booleanToTerraform(this._ignoreConflicts),
      ignore_unresolvable_hosts: cdktf.booleanToTerraform(this._ignoreUnresolvableHosts),
      link_max: cdktf.numberToTerraform(this._linkMax),
      map_all: nfsExportMapAllToTerraform(this._mapAll.internalValue),
      map_failure: nfsExportMapFailureToTerraform(this._mapFailure.internalValue),
      map_full: cdktf.booleanToTerraform(this._mapFull),
      map_lookup_uid: cdktf.booleanToTerraform(this._mapLookupUid),
      map_non_root: nfsExportMapNonRootToTerraform(this._mapNonRoot.internalValue),
      map_retry: cdktf.booleanToTerraform(this._mapRetry),
      map_root: nfsExportMapRootToTerraform(this._mapRoot.internalValue),
      max_file_size: cdktf.numberToTerraform(this._maxFileSize),
      name_max_size: cdktf.numberToTerraform(this._nameMaxSize),
      no_truncate: cdktf.booleanToTerraform(this._noTruncate),
      paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      read_only_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readOnlyClients),
      read_transfer_max_size: cdktf.numberToTerraform(this._readTransferMaxSize),
      read_transfer_multiple: cdktf.numberToTerraform(this._readTransferMultiple),
      read_transfer_size: cdktf.numberToTerraform(this._readTransferSize),
      read_write_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readWriteClients),
      readdirplus: cdktf.booleanToTerraform(this._readdirplus),
      readdirplus_prefetch: cdktf.numberToTerraform(this._readdirplusPrefetch),
      return_32bit_file_ids: cdktf.booleanToTerraform(this._return32BitFileIds),
      root_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rootClients),
      scope: cdktf.stringToTerraform(this._scope),
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
      clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      commit_asynchronous: {
        value: cdktf.booleanToHclTerraform(this._commitAsynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      conflicting_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._conflictingPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_bad_auth: {
        value: cdktf.booleanToHclTerraform(this._ignoreBadAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_bad_paths: {
        value: cdktf.booleanToHclTerraform(this._ignoreBadPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_conflicts: {
        value: cdktf.booleanToHclTerraform(this._ignoreConflicts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_unresolvable_hosts: {
        value: cdktf.booleanToHclTerraform(this._ignoreUnresolvableHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link_max: {
        value: cdktf.numberToHclTerraform(this._linkMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      map_all: {
        value: nfsExportMapAllToHclTerraform(this._mapAll.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportMapAll",
      },
      map_failure: {
        value: nfsExportMapFailureToHclTerraform(this._mapFailure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportMapFailure",
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
        value: nfsExportMapNonRootToHclTerraform(this._mapNonRoot.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportMapNonRoot",
      },
      map_retry: {
        value: cdktf.booleanToHclTerraform(this._mapRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      map_root: {
        value: nfsExportMapRootToHclTerraform(this._mapRoot.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsExportMapRoot",
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
      paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_only_clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readOnlyClients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      read_write_clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readWriteClients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      root_clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rootClients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_flavors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityFlavors),
        isBlock: false,
        type: "set",
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
