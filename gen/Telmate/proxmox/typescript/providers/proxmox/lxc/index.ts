// https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LxcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#arch Lxc#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#bwlimit Lxc#bwlimit}
  */
  readonly bwlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#clone Lxc#clone}
  */
  readonly clone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#clone_storage Lxc#clone_storage}
  */
  readonly cloneStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#cmode Lxc#cmode}
  */
  readonly cmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#console Lxc#console}
  */
  readonly console?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#cores Lxc#cores}
  */
  readonly cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#cpulimit Lxc#cpulimit}
  */
  readonly cpulimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#cpuunits Lxc#cpuunits}
  */
  readonly cpuunits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#description Lxc#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#force Lxc#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#full Lxc#full}
  */
  readonly full?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#hagroup Lxc#hagroup}
  */
  readonly hagroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#hastate Lxc#hastate}
  */
  readonly hastate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#hookscript Lxc#hookscript}
  */
  readonly hookscript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#hostname Lxc#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#id Lxc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#ignore_unpack_errors Lxc#ignore_unpack_errors}
  */
  readonly ignoreUnpackErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#lock Lxc#lock}
  */
  readonly lock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#memory Lxc#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#nameserver Lxc#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#onboot Lxc#onboot}
  */
  readonly onboot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#ostemplate Lxc#ostemplate}
  */
  readonly ostemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#ostype Lxc#ostype}
  */
  readonly ostype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#password Lxc#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#pool Lxc#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#protection Lxc#protection}
  */
  readonly protection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#restore Lxc#restore}
  */
  readonly restore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#searchdomain Lxc#searchdomain}
  */
  readonly searchdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#ssh_public_keys Lxc#ssh_public_keys}
  */
  readonly sshPublicKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#start Lxc#start}
  */
  readonly start?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#startup Lxc#startup}
  */
  readonly startup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#swap Lxc#swap}
  */
  readonly swap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#tags Lxc#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#target_node Lxc#target_node}
  */
  readonly targetNode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#template Lxc#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#tty Lxc#tty}
  */
  readonly tty?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#unique Lxc#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#unprivileged Lxc#unprivileged}
  */
  readonly unprivileged?: boolean | cdktf.IResolvable;
  /**
  * The VM identifier in proxmox (100-999999999)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#vmid Lxc#vmid}
  */
  readonly vmid?: number;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#features Lxc#features}
  */
  readonly features?: LxcFeatures;
  /**
  * mountpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#mountpoint Lxc#mountpoint}
  */
  readonly mountpoint?: LxcMountpoint[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#network Lxc#network}
  */
  readonly network?: LxcNetwork[] | cdktf.IResolvable;
  /**
  * rootfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#rootfs Lxc#rootfs}
  */
  readonly rootfs?: LxcRootfs;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#timeouts Lxc#timeouts}
  */
  readonly timeouts?: LxcTimeouts;
}
export interface LxcFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#fuse Lxc#fuse}
  */
  readonly fuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#keyctl Lxc#keyctl}
  */
  readonly keyctl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#mknod Lxc#mknod}
  */
  readonly mknod?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#mount Lxc#mount}
  */
  readonly mount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#nesting Lxc#nesting}
  */
  readonly nesting?: boolean | cdktf.IResolvable;
}

export function lxcFeaturesToTerraform(struct?: LxcFeaturesOutputReference | LxcFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fuse: cdktf.booleanToTerraform(struct!.fuse),
    keyctl: cdktf.booleanToTerraform(struct!.keyctl),
    mknod: cdktf.booleanToTerraform(struct!.mknod),
    mount: cdktf.stringToTerraform(struct!.mount),
    nesting: cdktf.booleanToTerraform(struct!.nesting),
  }
}


export function lxcFeaturesToHclTerraform(struct?: LxcFeaturesOutputReference | LxcFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fuse: {
      value: cdktf.booleanToHclTerraform(struct!.fuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyctl: {
      value: cdktf.booleanToHclTerraform(struct!.keyctl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mknod: {
      value: cdktf.booleanToHclTerraform(struct!.mknod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nesting: {
      value: cdktf.booleanToHclTerraform(struct!.nesting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LxcFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LxcFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuse = this._fuse;
    }
    if (this._keyctl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyctl = this._keyctl;
    }
    if (this._mknod !== undefined) {
      hasAnyValues = true;
      internalValueResult.mknod = this._mknod;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._nesting !== undefined) {
      hasAnyValues = true;
      internalValueResult.nesting = this._nesting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LxcFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fuse = undefined;
      this._keyctl = undefined;
      this._mknod = undefined;
      this._mount = undefined;
      this._nesting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fuse = value.fuse;
      this._keyctl = value.keyctl;
      this._mknod = value.mknod;
      this._mount = value.mount;
      this._nesting = value.nesting;
    }
  }

  // fuse - computed: false, optional: true, required: false
  private _fuse?: boolean | cdktf.IResolvable; 
  public get fuse() {
    return this.getBooleanAttribute('fuse');
  }
  public set fuse(value: boolean | cdktf.IResolvable) {
    this._fuse = value;
  }
  public resetFuse() {
    this._fuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuseInput() {
    return this._fuse;
  }

  // keyctl - computed: false, optional: true, required: false
  private _keyctl?: boolean | cdktf.IResolvable; 
  public get keyctl() {
    return this.getBooleanAttribute('keyctl');
  }
  public set keyctl(value: boolean | cdktf.IResolvable) {
    this._keyctl = value;
  }
  public resetKeyctl() {
    this._keyctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyctlInput() {
    return this._keyctl;
  }

  // mknod - computed: false, optional: true, required: false
  private _mknod?: boolean | cdktf.IResolvable; 
  public get mknod() {
    return this.getBooleanAttribute('mknod');
  }
  public set mknod(value: boolean | cdktf.IResolvable) {
    this._mknod = value;
  }
  public resetMknod() {
    this._mknod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mknodInput() {
    return this._mknod;
  }

  // mount - computed: false, optional: true, required: false
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // nesting - computed: false, optional: true, required: false
  private _nesting?: boolean | cdktf.IResolvable; 
  public get nesting() {
    return this.getBooleanAttribute('nesting');
  }
  public set nesting(value: boolean | cdktf.IResolvable) {
    this._nesting = value;
  }
  public resetNesting() {
    this._nesting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestingInput() {
    return this._nesting;
  }
}
export interface LxcMountpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#acl Lxc#acl}
  */
  readonly acl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#backup Lxc#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#file Lxc#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#key Lxc#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#mp Lxc#mp}
  */
  readonly mp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#quota Lxc#quota}
  */
  readonly quota?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#replicate Lxc#replicate}
  */
  readonly replicate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#shared Lxc#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#size Lxc#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#slot Lxc#slot}
  */
  readonly slot: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#storage Lxc#storage}
  */
  readonly storage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#volume Lxc#volume}
  */
  readonly volume?: string;
}

export function lxcMountpointToTerraform(struct?: LxcMountpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.booleanToTerraform(struct!.acl),
    backup: cdktf.booleanToTerraform(struct!.backup),
    file: cdktf.stringToTerraform(struct!.file),
    key: cdktf.stringToTerraform(struct!.key),
    mp: cdktf.stringToTerraform(struct!.mp),
    quota: cdktf.booleanToTerraform(struct!.quota),
    replicate: cdktf.booleanToTerraform(struct!.replicate),
    shared: cdktf.booleanToTerraform(struct!.shared),
    size: cdktf.stringToTerraform(struct!.size),
    slot: cdktf.numberToTerraform(struct!.slot),
    storage: cdktf.stringToTerraform(struct!.storage),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function lxcMountpointToHclTerraform(struct?: LxcMountpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.booleanToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mp: {
      value: cdktf.stringToHclTerraform(struct!.mp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota: {
      value: cdktf.booleanToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicate: {
      value: cdktf.booleanToHclTerraform(struct!.replicate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.numberToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LxcMountpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LxcMountpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mp = this._mp;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._replicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicate = this._replicate;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LxcMountpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._backup = undefined;
      this._file = undefined;
      this._key = undefined;
      this._mp = undefined;
      this._quota = undefined;
      this._replicate = undefined;
      this._shared = undefined;
      this._size = undefined;
      this._slot = undefined;
      this._storage = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._backup = value.backup;
      this._file = value.file;
      this._key = value.key;
      this._mp = value.mp;
      this._quota = value.quota;
      this._replicate = value.replicate;
      this._shared = value.shared;
      this._size = value.size;
      this._slot = value.slot;
      this._storage = value.storage;
      this._volume = value.volume;
    }
  }

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

  // file - computed: true, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class LxcMountpointList extends cdktf.ComplexList {
  public internalValue? : LxcMountpoint[] | cdktf.IResolvable

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
  public get(index: number): LxcMountpointOutputReference {
    return new LxcMountpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LxcNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#bridge Lxc#bridge}
  */
  readonly bridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#firewall Lxc#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#gw Lxc#gw}
  */
  readonly gw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#gw6 Lxc#gw6}
  */
  readonly gw6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#hwaddr Lxc#hwaddr}
  */
  readonly hwaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#ip Lxc#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#ip6 Lxc#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#mtu Lxc#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#name Lxc#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#rate Lxc#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#tag Lxc#tag}
  */
  readonly tag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#trunks Lxc#trunks}
  */
  readonly trunks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#type Lxc#type}
  */
  readonly type?: string;
}

export function lxcNetworkToTerraform(struct?: LxcNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    firewall: cdktf.booleanToTerraform(struct!.firewall),
    gw: cdktf.stringToTerraform(struct!.gw),
    gw6: cdktf.stringToTerraform(struct!.gw6),
    hwaddr: cdktf.stringToTerraform(struct!.hwaddr),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    rate: cdktf.numberToTerraform(struct!.rate),
    tag: cdktf.numberToTerraform(struct!.tag),
    trunks: cdktf.stringToTerraform(struct!.trunks),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lxcNetworkToHclTerraform(struct?: LxcNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall: {
      value: cdktf.booleanToHclTerraform(struct!.firewall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gw: {
      value: cdktf.stringToHclTerraform(struct!.gw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gw6: {
      value: cdktf.stringToHclTerraform(struct!.gw6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hwaddr: {
      value: cdktf.stringToHclTerraform(struct!.hwaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunks: {
      value: cdktf.stringToHclTerraform(struct!.trunks),
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

export class LxcNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LxcNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._firewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall;
    }
    if (this._gw !== undefined) {
      hasAnyValues = true;
      internalValueResult.gw = this._gw;
    }
    if (this._gw6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gw6 = this._gw6;
    }
    if (this._hwaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwaddr = this._hwaddr;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._trunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunks = this._trunks;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LxcNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._firewall = undefined;
      this._gw = undefined;
      this._gw6 = undefined;
      this._hwaddr = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._rate = undefined;
      this._tag = undefined;
      this._trunks = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._firewall = value.firewall;
      this._gw = value.gw;
      this._gw6 = value.gw6;
      this._hwaddr = value.hwaddr;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._mtu = value.mtu;
      this._name = value.name;
      this._rate = value.rate;
      this._tag = value.tag;
      this._trunks = value.trunks;
      this._type = value.type;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: boolean | cdktf.IResolvable; 
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }
  public set firewall(value: boolean | cdktf.IResolvable) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
  }

  // gw - computed: false, optional: true, required: false
  private _gw?: string; 
  public get gw() {
    return this.getStringAttribute('gw');
  }
  public set gw(value: string) {
    this._gw = value;
  }
  public resetGw() {
    this._gw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInput() {
    return this._gw;
  }

  // gw6 - computed: false, optional: true, required: false
  private _gw6?: string; 
  public get gw6() {
    return this.getStringAttribute('gw6');
  }
  public set gw6(value: string) {
    this._gw6 = value;
  }
  public resetGw6() {
    this._gw6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gw6Input() {
    return this._gw6;
  }

  // hwaddr - computed: true, optional: true, required: false
  private _hwaddr?: string; 
  public get hwaddr() {
    return this.getStringAttribute('hwaddr');
  }
  public set hwaddr(value: string) {
    this._hwaddr = value;
  }
  public resetHwaddr() {
    this._hwaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwaddrInput() {
    return this._hwaddr;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // trunks - computed: true, optional: true, required: false
  private _trunks?: string; 
  public get trunks() {
    return this.getStringAttribute('trunks');
  }
  public set trunks(value: string) {
    this._trunks = value;
  }
  public resetTrunks() {
    this._trunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunksInput() {
    return this._trunks;
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

export class LxcNetworkList extends cdktf.ComplexList {
  public internalValue? : LxcNetwork[] | cdktf.IResolvable

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
  public get(index: number): LxcNetworkOutputReference {
    return new LxcNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LxcRootfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#acl Lxc#acl}
  */
  readonly acl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#quota Lxc#quota}
  */
  readonly quota?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#replicate Lxc#replicate}
  */
  readonly replicate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#ro Lxc#ro}
  */
  readonly ro?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#shared Lxc#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#size Lxc#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#storage Lxc#storage}
  */
  readonly storage: string;
}

export function lxcRootfsToTerraform(struct?: LxcRootfsOutputReference | LxcRootfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.booleanToTerraform(struct!.acl),
    quota: cdktf.booleanToTerraform(struct!.quota),
    replicate: cdktf.booleanToTerraform(struct!.replicate),
    ro: cdktf.booleanToTerraform(struct!.ro),
    shared: cdktf.booleanToTerraform(struct!.shared),
    size: cdktf.stringToTerraform(struct!.size),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function lxcRootfsToHclTerraform(struct?: LxcRootfsOutputReference | LxcRootfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.booleanToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quota: {
      value: cdktf.booleanToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicate: {
      value: cdktf.booleanToHclTerraform(struct!.replicate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ro: {
      value: cdktf.booleanToHclTerraform(struct!.ro),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LxcRootfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LxcRootfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._replicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicate = this._replicate;
    }
    if (this._ro !== undefined) {
      hasAnyValues = true;
      internalValueResult.ro = this._ro;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LxcRootfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl = undefined;
      this._quota = undefined;
      this._replicate = undefined;
      this._ro = undefined;
      this._shared = undefined;
      this._size = undefined;
      this._storage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl = value.acl;
      this._quota = value.quota;
      this._replicate = value.replicate;
      this._ro = value.ro;
      this._shared = value.shared;
      this._size = value.size;
      this._storage = value.storage;
    }
  }

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

  // ro - computed: false, optional: true, required: false
  private _ro?: boolean | cdktf.IResolvable; 
  public get ro() {
    return this.getBooleanAttribute('ro');
  }
  public set ro(value: boolean | cdktf.IResolvable) {
    this._ro = value;
  }
  public resetRo() {
    this._ro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roInput() {
    return this._ro;
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

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}
export interface LxcTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#create Lxc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#default Lxc#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#delete Lxc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#read Lxc#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#update Lxc#update}
  */
  readonly update?: string;
}

export function lxcTimeoutsToTerraform(struct?: LxcTimeouts | cdktf.IResolvable): any {
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


export function lxcTimeoutsToHclTerraform(struct?: LxcTimeouts | cdktf.IResolvable): any {
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

export class LxcTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LxcTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LxcTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc proxmox_lxc}
*/
export class Lxc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_lxc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lxc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lxc to import
  * @param importFromId The id of the existing Lxc that should be imported. Refer to the {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lxc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_lxc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/lxc proxmox_lxc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LxcConfig
  */
  public constructor(scope: Construct, id: string, config: LxcConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_lxc',
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
    this._arch = config.arch;
    this._bwlimit = config.bwlimit;
    this._clone = config.clone;
    this._cloneStorage = config.cloneStorage;
    this._cmode = config.cmode;
    this._console = config.console;
    this._cores = config.cores;
    this._cpulimit = config.cpulimit;
    this._cpuunits = config.cpuunits;
    this._description = config.description;
    this._force = config.force;
    this._full = config.full;
    this._hagroup = config.hagroup;
    this._hastate = config.hastate;
    this._hookscript = config.hookscript;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ignoreUnpackErrors = config.ignoreUnpackErrors;
    this._lock = config.lock;
    this._memory = config.memory;
    this._nameserver = config.nameserver;
    this._onboot = config.onboot;
    this._ostemplate = config.ostemplate;
    this._ostype = config.ostype;
    this._password = config.password;
    this._pool = config.pool;
    this._protection = config.protection;
    this._restore = config.restore;
    this._searchdomain = config.searchdomain;
    this._sshPublicKeys = config.sshPublicKeys;
    this._start = config.start;
    this._startup = config.startup;
    this._swap = config.swap;
    this._tags = config.tags;
    this._targetNode = config.targetNode;
    this._template = config.template;
    this._tty = config.tty;
    this._unique = config.unique;
    this._unprivileged = config.unprivileged;
    this._vmid = config.vmid;
    this._features.internalValue = config.features;
    this._mountpoint.internalValue = config.mountpoint;
    this._network.internalValue = config.network;
    this._rootfs.internalValue = config.rootfs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // bwlimit - computed: false, optional: true, required: false
  private _bwlimit?: number; 
  public get bwlimit() {
    return this.getNumberAttribute('bwlimit');
  }
  public set bwlimit(value: number) {
    this._bwlimit = value;
  }
  public resetBwlimit() {
    this._bwlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwlimitInput() {
    return this._bwlimit;
  }

  // clone - computed: false, optional: true, required: false
  private _clone?: string; 
  public get clone() {
    return this.getStringAttribute('clone');
  }
  public set clone(value: string) {
    this._clone = value;
  }
  public resetClone() {
    this._clone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone;
  }

  // clone_storage - computed: false, optional: true, required: false
  private _cloneStorage?: string; 
  public get cloneStorage() {
    return this.getStringAttribute('clone_storage');
  }
  public set cloneStorage(value: string) {
    this._cloneStorage = value;
  }
  public resetCloneStorage() {
    this._cloneStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneStorageInput() {
    return this._cloneStorage;
  }

  // cmode - computed: false, optional: true, required: false
  private _cmode?: string; 
  public get cmode() {
    return this.getStringAttribute('cmode');
  }
  public set cmode(value: string) {
    this._cmode = value;
  }
  public resetCmode() {
    this._cmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmodeInput() {
    return this._cmode;
  }

  // console - computed: false, optional: true, required: false
  private _console?: boolean | cdktf.IResolvable; 
  public get console() {
    return this.getBooleanAttribute('console');
  }
  public set console(value: boolean | cdktf.IResolvable) {
    this._console = value;
  }
  public resetConsole() {
    this._console = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console;
  }

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // cpulimit - computed: false, optional: true, required: false
  private _cpulimit?: number; 
  public get cpulimit() {
    return this.getNumberAttribute('cpulimit');
  }
  public set cpulimit(value: number) {
    this._cpulimit = value;
  }
  public resetCpulimit() {
    this._cpulimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpulimitInput() {
    return this._cpulimit;
  }

  // cpuunits - computed: false, optional: true, required: false
  private _cpuunits?: number; 
  public get cpuunits() {
    return this.getNumberAttribute('cpuunits');
  }
  public set cpuunits(value: number) {
    this._cpuunits = value;
  }
  public resetCpuunits() {
    this._cpuunits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuunitsInput() {
    return this._cpuunits;
  }

  // description - computed: false, optional: true, required: false
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

  // full - computed: false, optional: true, required: false
  private _full?: boolean | cdktf.IResolvable; 
  public get full() {
    return this.getBooleanAttribute('full');
  }
  public set full(value: boolean | cdktf.IResolvable) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // hagroup - computed: false, optional: true, required: false
  private _hagroup?: string; 
  public get hagroup() {
    return this.getStringAttribute('hagroup');
  }
  public set hagroup(value: string) {
    this._hagroup = value;
  }
  public resetHagroup() {
    this._hagroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hagroupInput() {
    return this._hagroup;
  }

  // hastate - computed: false, optional: true, required: false
  private _hastate?: string; 
  public get hastate() {
    return this.getStringAttribute('hastate');
  }
  public set hastate(value: string) {
    this._hastate = value;
  }
  public resetHastate() {
    this._hastate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hastateInput() {
    return this._hastate;
  }

  // hookscript - computed: false, optional: true, required: false
  private _hookscript?: string; 
  public get hookscript() {
    return this.getStringAttribute('hookscript');
  }
  public set hookscript(value: string) {
    this._hookscript = value;
  }
  public resetHookscript() {
    this._hookscript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookscriptInput() {
    return this._hookscript;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ignore_unpack_errors - computed: false, optional: true, required: false
  private _ignoreUnpackErrors?: boolean | cdktf.IResolvable; 
  public get ignoreUnpackErrors() {
    return this.getBooleanAttribute('ignore_unpack_errors');
  }
  public set ignoreUnpackErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreUnpackErrors = value;
  }
  public resetIgnoreUnpackErrors() {
    this._ignoreUnpackErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnpackErrorsInput() {
    return this._ignoreUnpackErrors;
  }

  // lock - computed: false, optional: true, required: false
  private _lock?: string; 
  public get lock() {
    return this.getStringAttribute('lock');
  }
  public set lock(value: string) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // onboot - computed: false, optional: true, required: false
  private _onboot?: boolean | cdktf.IResolvable; 
  public get onboot() {
    return this.getBooleanAttribute('onboot');
  }
  public set onboot(value: boolean | cdktf.IResolvable) {
    this._onboot = value;
  }
  public resetOnboot() {
    this._onboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onbootInput() {
    return this._onboot;
  }

  // ostemplate - computed: false, optional: true, required: false
  private _ostemplate?: string; 
  public get ostemplate() {
    return this.getStringAttribute('ostemplate');
  }
  public set ostemplate(value: string) {
    this._ostemplate = value;
  }
  public resetOstemplate() {
    this._ostemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ostemplateInput() {
    return this._ostemplate;
  }

  // ostype - computed: true, optional: true, required: false
  private _ostype?: string; 
  public get ostype() {
    return this.getStringAttribute('ostype');
  }
  public set ostype(value: string) {
    this._ostype = value;
  }
  public resetOstype() {
    this._ostype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ostypeInput() {
    return this._ostype;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // protection - computed: false, optional: true, required: false
  private _protection?: boolean | cdktf.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection');
  }
  public set protection(value: boolean | cdktf.IResolvable) {
    this._protection = value;
  }
  public resetProtection() {
    this._protection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // restore - computed: false, optional: true, required: false
  private _restore?: boolean | cdktf.IResolvable; 
  public get restore() {
    return this.getBooleanAttribute('restore');
  }
  public set restore(value: boolean | cdktf.IResolvable) {
    this._restore = value;
  }
  public resetRestore() {
    this._restore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore;
  }

  // searchdomain - computed: false, optional: true, required: false
  private _searchdomain?: string; 
  public get searchdomain() {
    return this.getStringAttribute('searchdomain');
  }
  public set searchdomain(value: string) {
    this._searchdomain = value;
  }
  public resetSearchdomain() {
    this._searchdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchdomainInput() {
    return this._searchdomain;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string; 
  public get sshPublicKeys() {
    return this.getStringAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // start - computed: false, optional: true, required: false
  private _start?: boolean | cdktf.IResolvable; 
  public get start() {
    return this.getBooleanAttribute('start');
  }
  public set start(value: boolean | cdktf.IResolvable) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // startup - computed: false, optional: true, required: false
  private _startup?: string; 
  public get startup() {
    return this.getStringAttribute('startup');
  }
  public set startup(value: string) {
    this._startup = value;
  }
  public resetStartup() {
    this._startup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupInput() {
    return this._startup;
  }

  // swap - computed: false, optional: true, required: false
  private _swap?: number; 
  public get swap() {
    return this.getNumberAttribute('swap');
  }
  public set swap(value: number) {
    this._swap = value;
  }
  public resetSwap() {
    this._swap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapInput() {
    return this._swap;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_node - computed: false, optional: false, required: true
  private _targetNode?: string; 
  public get targetNode() {
    return this.getStringAttribute('target_node');
  }
  public set targetNode(value: string) {
    this._targetNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeInput() {
    return this._targetNode;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // tty - computed: false, optional: true, required: false
  private _tty?: number; 
  public get tty() {
    return this.getNumberAttribute('tty');
  }
  public set tty(value: number) {
    this._tty = value;
  }
  public resetTty() {
    this._tty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyInput() {
    return this._tty;
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // unprivileged - computed: false, optional: true, required: false
  private _unprivileged?: boolean | cdktf.IResolvable; 
  public get unprivileged() {
    return this.getBooleanAttribute('unprivileged');
  }
  public set unprivileged(value: boolean | cdktf.IResolvable) {
    this._unprivileged = value;
  }
  public resetUnprivileged() {
    this._unprivileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprivilegedInput() {
    return this._unprivileged;
  }

  // unused - computed: true, optional: false, required: false
  public get unused() {
    return this.getListAttribute('unused');
  }

  // vmid - computed: true, optional: true, required: false
  private _vmid?: number; 
  public get vmid() {
    return this.getNumberAttribute('vmid');
  }
  public set vmid(value: number) {
    this._vmid = value;
  }
  public resetVmid() {
    this._vmid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmidInput() {
    return this._vmid;
  }

  // features - computed: false, optional: true, required: false
  private _features = new LxcFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: LxcFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // mountpoint - computed: false, optional: true, required: false
  private _mountpoint = new LxcMountpointList(this, "mountpoint", false);
  public get mountpoint() {
    return this._mountpoint;
  }
  public putMountpoint(value: LxcMountpoint[] | cdktf.IResolvable) {
    this._mountpoint.internalValue = value;
  }
  public resetMountpoint() {
    this._mountpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountpointInput() {
    return this._mountpoint.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new LxcNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: LxcNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // rootfs - computed: false, optional: true, required: false
  private _rootfs = new LxcRootfsOutputReference(this, "rootfs");
  public get rootfs() {
    return this._rootfs;
  }
  public putRootfs(value: LxcRootfs) {
    this._rootfs.internalValue = value;
  }
  public resetRootfs() {
    this._rootfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootfsInput() {
    return this._rootfs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LxcTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LxcTimeouts) {
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
      arch: cdktf.stringToTerraform(this._arch),
      bwlimit: cdktf.numberToTerraform(this._bwlimit),
      clone: cdktf.stringToTerraform(this._clone),
      clone_storage: cdktf.stringToTerraform(this._cloneStorage),
      cmode: cdktf.stringToTerraform(this._cmode),
      console: cdktf.booleanToTerraform(this._console),
      cores: cdktf.numberToTerraform(this._cores),
      cpulimit: cdktf.numberToTerraform(this._cpulimit),
      cpuunits: cdktf.numberToTerraform(this._cpuunits),
      description: cdktf.stringToTerraform(this._description),
      force: cdktf.booleanToTerraform(this._force),
      full: cdktf.booleanToTerraform(this._full),
      hagroup: cdktf.stringToTerraform(this._hagroup),
      hastate: cdktf.stringToTerraform(this._hastate),
      hookscript: cdktf.stringToTerraform(this._hookscript),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ignore_unpack_errors: cdktf.booleanToTerraform(this._ignoreUnpackErrors),
      lock: cdktf.stringToTerraform(this._lock),
      memory: cdktf.numberToTerraform(this._memory),
      nameserver: cdktf.stringToTerraform(this._nameserver),
      onboot: cdktf.booleanToTerraform(this._onboot),
      ostemplate: cdktf.stringToTerraform(this._ostemplate),
      ostype: cdktf.stringToTerraform(this._ostype),
      password: cdktf.stringToTerraform(this._password),
      pool: cdktf.stringToTerraform(this._pool),
      protection: cdktf.booleanToTerraform(this._protection),
      restore: cdktf.booleanToTerraform(this._restore),
      searchdomain: cdktf.stringToTerraform(this._searchdomain),
      ssh_public_keys: cdktf.stringToTerraform(this._sshPublicKeys),
      start: cdktf.booleanToTerraform(this._start),
      startup: cdktf.stringToTerraform(this._startup),
      swap: cdktf.numberToTerraform(this._swap),
      tags: cdktf.stringToTerraform(this._tags),
      target_node: cdktf.stringToTerraform(this._targetNode),
      template: cdktf.booleanToTerraform(this._template),
      tty: cdktf.numberToTerraform(this._tty),
      unique: cdktf.booleanToTerraform(this._unique),
      unprivileged: cdktf.booleanToTerraform(this._unprivileged),
      vmid: cdktf.numberToTerraform(this._vmid),
      features: lxcFeaturesToTerraform(this._features.internalValue),
      mountpoint: cdktf.listMapper(lxcMountpointToTerraform, true)(this._mountpoint.internalValue),
      network: cdktf.listMapper(lxcNetworkToTerraform, true)(this._network.internalValue),
      rootfs: lxcRootfsToTerraform(this._rootfs.internalValue),
      timeouts: lxcTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bwlimit: {
        value: cdktf.numberToHclTerraform(this._bwlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clone: {
        value: cdktf.stringToHclTerraform(this._clone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_storage: {
        value: cdktf.stringToHclTerraform(this._cloneStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmode: {
        value: cdktf.stringToHclTerraform(this._cmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console: {
        value: cdktf.booleanToHclTerraform(this._console),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpulimit: {
        value: cdktf.numberToHclTerraform(this._cpulimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpuunits: {
        value: cdktf.numberToHclTerraform(this._cpuunits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      full: {
        value: cdktf.booleanToHclTerraform(this._full),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hagroup: {
        value: cdktf.stringToHclTerraform(this._hagroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hastate: {
        value: cdktf.stringToHclTerraform(this._hastate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hookscript: {
        value: cdktf.stringToHclTerraform(this._hookscript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ignore_unpack_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreUnpackErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lock: {
        value: cdktf.stringToHclTerraform(this._lock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nameserver: {
        value: cdktf.stringToHclTerraform(this._nameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboot: {
        value: cdktf.booleanToHclTerraform(this._onboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ostemplate: {
        value: cdktf.stringToHclTerraform(this._ostemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ostype: {
        value: cdktf.stringToHclTerraform(this._ostype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection: {
        value: cdktf.booleanToHclTerraform(this._protection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restore: {
        value: cdktf.booleanToHclTerraform(this._restore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      searchdomain: {
        value: cdktf.stringToHclTerraform(this._searchdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_keys: {
        value: cdktf.stringToHclTerraform(this._sshPublicKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.booleanToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      startup: {
        value: cdktf.stringToHclTerraform(this._startup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swap: {
        value: cdktf.numberToHclTerraform(this._swap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_node: {
        value: cdktf.stringToHclTerraform(this._targetNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.booleanToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tty: {
        value: cdktf.numberToHclTerraform(this._tty),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unique: {
        value: cdktf.booleanToHclTerraform(this._unique),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unprivileged: {
        value: cdktf.booleanToHclTerraform(this._unprivileged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vmid: {
        value: cdktf.numberToHclTerraform(this._vmid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      features: {
        value: lxcFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LxcFeaturesList",
      },
      mountpoint: {
        value: cdktf.listMapperHcl(lxcMountpointToHclTerraform, true)(this._mountpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LxcMountpointList",
      },
      network: {
        value: cdktf.listMapperHcl(lxcNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LxcNetworkList",
      },
      rootfs: {
        value: lxcRootfsToHclTerraform(this._rootfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LxcRootfsList",
      },
      timeouts: {
        value: lxcTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LxcTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
