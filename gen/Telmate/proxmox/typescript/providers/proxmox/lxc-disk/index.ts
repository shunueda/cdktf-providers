// https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LxcDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#acl LxcDisk#acl}
  */
  readonly acl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#backup LxcDisk#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#container LxcDisk#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#id LxcDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#mp LxcDisk#mp}
  */
  readonly mp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#quota LxcDisk#quota}
  */
  readonly quota?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#replicate LxcDisk#replicate}
  */
  readonly replicate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#shared LxcDisk#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#size LxcDisk#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#slot LxcDisk#slot}
  */
  readonly slot: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#storage LxcDisk#storage}
  */
  readonly storage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#volume LxcDisk#volume}
  */
  readonly volume?: string;
  /**
  * mountoptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#mountoptions LxcDisk#mountoptions}
  */
  readonly mountoptions?: LxcDiskMountoptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#timeouts LxcDisk#timeouts}
  */
  readonly timeouts?: LxcDiskTimeouts;
}
export interface LxcDiskMountoptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#noatime LxcDisk#noatime}
  */
  readonly noatime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#nodev LxcDisk#nodev}
  */
  readonly nodev?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#noexec LxcDisk#noexec}
  */
  readonly noexec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#nosuid LxcDisk#nosuid}
  */
  readonly nosuid?: boolean | cdktf.IResolvable;
}

export function lxcDiskMountoptionsToTerraform(struct?: LxcDiskMountoptionsOutputReference | LxcDiskMountoptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    noatime: cdktf.booleanToTerraform(struct!.noatime),
    nodev: cdktf.booleanToTerraform(struct!.nodev),
    noexec: cdktf.stringToTerraform(struct!.noexec),
    nosuid: cdktf.booleanToTerraform(struct!.nosuid),
  }
}


export function lxcDiskMountoptionsToHclTerraform(struct?: LxcDiskMountoptionsOutputReference | LxcDiskMountoptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    noatime: {
      value: cdktf.booleanToHclTerraform(struct!.noatime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nodev: {
      value: cdktf.booleanToHclTerraform(struct!.nodev),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    noexec: {
      value: cdktf.stringToHclTerraform(struct!.noexec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nosuid: {
      value: cdktf.booleanToHclTerraform(struct!.nosuid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LxcDiskMountoptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LxcDiskMountoptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noatime !== undefined) {
      hasAnyValues = true;
      internalValueResult.noatime = this._noatime;
    }
    if (this._nodev !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodev = this._nodev;
    }
    if (this._noexec !== undefined) {
      hasAnyValues = true;
      internalValueResult.noexec = this._noexec;
    }
    if (this._nosuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosuid = this._nosuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LxcDiskMountoptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noatime = undefined;
      this._nodev = undefined;
      this._noexec = undefined;
      this._nosuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noatime = value.noatime;
      this._nodev = value.nodev;
      this._noexec = value.noexec;
      this._nosuid = value.nosuid;
    }
  }

  // noatime - computed: false, optional: true, required: false
  private _noatime?: boolean | cdktf.IResolvable; 
  public get noatime() {
    return this.getBooleanAttribute('noatime');
  }
  public set noatime(value: boolean | cdktf.IResolvable) {
    this._noatime = value;
  }
  public resetNoatime() {
    this._noatime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noatimeInput() {
    return this._noatime;
  }

  // nodev - computed: false, optional: true, required: false
  private _nodev?: boolean | cdktf.IResolvable; 
  public get nodev() {
    return this.getBooleanAttribute('nodev');
  }
  public set nodev(value: boolean | cdktf.IResolvable) {
    this._nodev = value;
  }
  public resetNodev() {
    this._nodev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodevInput() {
    return this._nodev;
  }

  // noexec - computed: false, optional: true, required: false
  private _noexec?: string; 
  public get noexec() {
    return this.getStringAttribute('noexec');
  }
  public set noexec(value: string) {
    this._noexec = value;
  }
  public resetNoexec() {
    this._noexec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noexecInput() {
    return this._noexec;
  }

  // nosuid - computed: false, optional: true, required: false
  private _nosuid?: boolean | cdktf.IResolvable; 
  public get nosuid() {
    return this.getBooleanAttribute('nosuid');
  }
  public set nosuid(value: boolean | cdktf.IResolvable) {
    this._nosuid = value;
  }
  public resetNosuid() {
    this._nosuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosuidInput() {
    return this._nosuid;
  }
}
export interface LxcDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#create LxcDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#default LxcDisk#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#delete LxcDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#read LxcDisk#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#update LxcDisk#update}
  */
  readonly update?: string;
}

export function lxcDiskTimeoutsToTerraform(struct?: LxcDiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lxcDiskTimeoutsToHclTerraform(struct?: LxcDiskTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class LxcDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LxcDiskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LxcDiskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk proxmox_lxc_disk}
*/
export class LxcDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_lxc_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LxcDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LxcDisk to import
  * @param importFromId The id of the existing LxcDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LxcDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_lxc_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc_disk proxmox_lxc_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LxcDiskConfig
  */
  public constructor(scope: Construct, id: string, config: LxcDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_lxc_disk',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '2.9.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._backup = config.backup;
    this._container = config.container;
    this._id = config.id;
    this._mp = config.mp;
    this._quota = config.quota;
    this._replicate = config.replicate;
    this._shared = config.shared;
    this._size = config.size;
    this._slot = config.slot;
    this._storage = config.storage;
    this._volume = config.volume;
    this._mountoptions.internalValue = config.mountoptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: boolean | cdktf.IResolvable; 
  public get acl() {
    return this.getBooleanAttribute('acl');
  }
  public set acl(value: boolean | cdktf.IResolvable) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // mp - computed: false, optional: false, required: true
  private _mp?: string; 
  public get mp() {
    return this.getStringAttribute('mp');
  }
  public set mp(value: string) {
    this._mp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpInput() {
    return this._mp;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: boolean | cdktf.IResolvable; 
  public get quota() {
    return this.getBooleanAttribute('quota');
  }
  public set quota(value: boolean | cdktf.IResolvable) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // replicate - computed: false, optional: true, required: false
  private _replicate?: boolean | cdktf.IResolvable; 
  public get replicate() {
    return this.getBooleanAttribute('replicate');
  }
  public set replicate(value: boolean | cdktf.IResolvable) {
    this._replicate = value;
  }
  public resetReplicate() {
    this._replicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateInput() {
    return this._replicate;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // slot - computed: false, optional: false, required: true
  private _slot?: number; 
  public get slot() {
    return this.getNumberAttribute('slot');
  }
  public set slot(value: number) {
    this._slot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }

  // mountoptions - computed: false, optional: true, required: false
  private _mountoptions = new LxcDiskMountoptionsOutputReference(this, "mountoptions");
  public get mountoptions() {
    return this._mountoptions;
  }
  public putMountoptions(value: LxcDiskMountoptions) {
    this._mountoptions.internalValue = value;
  }
  public resetMountoptions() {
    this._mountoptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountoptionsInput() {
    return this._mountoptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LxcDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LxcDiskTimeouts) {
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
      acl: cdktf.booleanToTerraform(this._acl),
      backup: cdktf.booleanToTerraform(this._backup),
      container: cdktf.stringToTerraform(this._container),
      id: cdktf.stringToTerraform(this._id),
      mp: cdktf.stringToTerraform(this._mp),
      quota: cdktf.booleanToTerraform(this._quota),
      replicate: cdktf.booleanToTerraform(this._replicate),
      shared: cdktf.booleanToTerraform(this._shared),
      size: cdktf.stringToTerraform(this._size),
      slot: cdktf.numberToTerraform(this._slot),
      storage: cdktf.stringToTerraform(this._storage),
      volume: cdktf.stringToTerraform(this._volume),
      mountoptions: lxcDiskMountoptionsToTerraform(this._mountoptions.internalValue),
      timeouts: lxcDiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.booleanToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup: {
        value: cdktf.booleanToHclTerraform(this._backup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container: {
        value: cdktf.stringToHclTerraform(this._container),
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
      mp: {
        value: cdktf.stringToHclTerraform(this._mp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota: {
        value: cdktf.booleanToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replicate: {
        value: cdktf.booleanToHclTerraform(this._replicate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot: {
        value: cdktf.numberToHclTerraform(this._slot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage: {
        value: cdktf.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume: {
        value: cdktf.stringToHclTerraform(this._volume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mountoptions: {
        value: lxcDiskMountoptionsToHclTerraform(this._mountoptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LxcDiskMountoptionsList",
      },
      timeouts: {
        value: lxcDiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LxcDiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
