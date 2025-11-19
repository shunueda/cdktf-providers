// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deactivate NFS monitoring on all supported systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#disable_nfs_disk_monitoring DiskOptions#disable_nfs_disk_monitoring}
  */
  readonly disableNfsDiskMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#id DiskOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When disabled OneAgent will try to deduplicate some of nfs disks. Disabled by default, applies only to Linux hosts. Requires OneAgent 1.209 or later
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#nfs_show_all DiskOptions#nfs_show_all}
  */
  readonly nfsShowAll?: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#scope DiskOptions#scope}
  */
  readonly scope?: string;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#exclusions DiskOptions#exclusions}
  */
  readonly exclusions?: DiskOptionsExclusions;
}
export interface DiskOptionsExclusionsExclusion {
  /**
  * **File system type field:** the type of the file system to be excluded from monitoring. Examples:
  * 
  * * ext4
  * * ext3
  * * btrfs
  * * ext*
  * 
  * ⚠️ Starting from **OneAgent 1.299+** file system types are not case sensitive! 
  * 
  * The wildcard in the last example means to exclude matching file systems such as types ext4 and ext3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#filesystem DiskOptions#filesystem}
  */
  readonly filesystem?: string;
  /**
  * **Disk or mount point path field:** the path to where the disk to be excluded from monitoring is mounted. Examples:
  * 
  * * /mnt/my_disk
  * * /staff/emp1
  * * C:\
  * * /staff/*
  * * /disk*
  * 
  *  ⚠️ Mount point paths are case sensitive! 
  * 
  * The wildcard in ** /staff/*** means to exclude every child folder of /staff.
  * 
  * The wildcard in ** /disk*** means to exclude every mount point starting with /disk, for example /disk1, /disk99,  /diskabc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#mountpoint DiskOptions#mountpoint}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly mountpoint?: string;
  /**
  * Possible Values: `OS_TYPE_AIX`, `OS_TYPE_DARWIN`, `OS_TYPE_HPUX`, `OS_TYPE_LINUX`, `OS_TYPE_SOLARIS`, `OS_TYPE_UNKNOWN`, `OS_TYPE_WINDOWS`, `OS_TYPE_ZOS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#os DiskOptions#os}
  */
  readonly os: string;
}

export function diskOptionsExclusionsExclusionToTerraform(struct?: DiskOptionsExclusionsExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filesystem: cdktf.stringToTerraform(struct!.filesystem),
    mountpoint: cdktf.stringToTerraform(struct!.mountpoint),
    os: cdktf.stringToTerraform(struct!.os),
  }
}


export function diskOptionsExclusionsExclusionToHclTerraform(struct?: DiskOptionsExclusionsExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filesystem: {
      value: cdktf.stringToHclTerraform(struct!.filesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mountpoint: {
      value: cdktf.stringToHclTerraform(struct!.mountpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskOptionsExclusionsExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiskOptionsExclusionsExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._mountpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountpoint = this._mountpoint;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskOptionsExclusionsExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filesystem = undefined;
      this._mountpoint = undefined;
      this._os = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filesystem = value.filesystem;
      this._mountpoint = value.mountpoint;
      this._os = value.os;
    }
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  public resetFilesystem() {
    this._filesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // mountpoint - computed: false, optional: true, required: false
  private _mountpoint?: string; 
  public get mountpoint() {
    return this.getStringAttribute('mountpoint');
  }
  public set mountpoint(value: string) {
    this._mountpoint = value;
  }
  public resetMountpoint() {
    this._mountpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountpointInput() {
    return this._mountpoint;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }
}

export class DiskOptionsExclusionsExclusionList extends cdktf.ComplexList {
  public internalValue? : DiskOptionsExclusionsExclusion[] | cdktf.IResolvable

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
  public get(index: number): DiskOptionsExclusionsExclusionOutputReference {
    return new DiskOptionsExclusionsExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiskOptionsExclusions {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#exclusion DiskOptions#exclusion}
  */
  readonly exclusion: DiskOptionsExclusionsExclusion[] | cdktf.IResolvable;
}

export function diskOptionsExclusionsToTerraform(struct?: DiskOptionsExclusionsOutputReference | DiskOptionsExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(diskOptionsExclusionsExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function diskOptionsExclusionsToHclTerraform(struct?: DiskOptionsExclusionsOutputReference | DiskOptionsExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(diskOptionsExclusionsExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "DiskOptionsExclusionsExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskOptionsExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskOptionsExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskOptionsExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
    }
  }

  // exclusion - computed: false, optional: false, required: true
  private _exclusion = new DiskOptionsExclusionsExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: DiskOptionsExclusionsExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options dynatrace_disk_options}
*/
export class DiskOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_disk_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskOptions to import
  * @param importFromId The id of the existing DiskOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_disk_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/disk_options dynatrace_disk_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DiskOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_disk_options',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableNfsDiskMonitoring = config.disableNfsDiskMonitoring;
    this._id = config.id;
    this._nfsShowAll = config.nfsShowAll;
    this._scope = config.scope;
    this._exclusions.internalValue = config.exclusions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_nfs_disk_monitoring - computed: false, optional: true, required: false
  private _disableNfsDiskMonitoring?: boolean | cdktf.IResolvable; 
  public get disableNfsDiskMonitoring() {
    return this.getBooleanAttribute('disable_nfs_disk_monitoring');
  }
  public set disableNfsDiskMonitoring(value: boolean | cdktf.IResolvable) {
    this._disableNfsDiskMonitoring = value;
  }
  public resetDisableNfsDiskMonitoring() {
    this._disableNfsDiskMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNfsDiskMonitoringInput() {
    return this._disableNfsDiskMonitoring;
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

  // nfs_show_all - computed: false, optional: true, required: false
  private _nfsShowAll?: boolean | cdktf.IResolvable; 
  public get nfsShowAll() {
    return this.getBooleanAttribute('nfs_show_all');
  }
  public set nfsShowAll(value: boolean | cdktf.IResolvable) {
    this._nfsShowAll = value;
  }
  public resetNfsShowAll() {
    this._nfsShowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsShowAllInput() {
    return this._nfsShowAll;
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

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new DiskOptionsExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DiskOptionsExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_nfs_disk_monitoring: cdktf.booleanToTerraform(this._disableNfsDiskMonitoring),
      id: cdktf.stringToTerraform(this._id),
      nfs_show_all: cdktf.booleanToTerraform(this._nfsShowAll),
      scope: cdktf.stringToTerraform(this._scope),
      exclusions: diskOptionsExclusionsToTerraform(this._exclusions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_nfs_disk_monitoring: {
        value: cdktf.booleanToHclTerraform(this._disableNfsDiskMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_show_all: {
        value: cdktf.booleanToHclTerraform(this._nfsShowAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusions: {
        value: diskOptionsExclusionsToHclTerraform(this._exclusions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskOptionsExclusionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
