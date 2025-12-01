// https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets the unit for the allocation value (for example, "bytes", "KiB", "MiB", "GiB"); if omitted, libvirt uses its default unit semantics.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#allocation_unit Volume#allocation_unit}
  */
  readonly allocationUnit?: string;
  /**
  * Configures an optional backing store volume for copy-on-write images, enabling layered storage where this volume records changes on top of another image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#backing_store Volume#backing_store}
  */
  readonly backingStore?: VolumeBackingStore;
  /**
  * Volume capacity in bytes (required unless using create.content)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#capacity Volume#capacity}
  */
  readonly capacity?: number;
  /**
  * Sets the unit used for `capacity` (for example `bytes`, `KiB`, `MiB`, `GiB`), matching libvirt’s `unit` attribute semantics.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#capacity_unit Volume#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * Volume creation options for initializing volume content from external sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#create Volume#create}
  */
  readonly create?: VolumeCreate;
  /**
  * Sets the volume name, which must be unique within the containing pool (for disk pools, often derived from a device path plus partition index).
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * Sets the unit used for `physical` (for example `bytes`, `KiB`, `MiB`, `GiB`), matching libvirt’s `unit` attribute semantics.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#physical_unit Volume#physical_unit}
  */
  readonly physicalUnit?: string;
  /**
  * Name of the storage pool where the volume will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#pool Volume#pool}
  */
  readonly pool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#target Volume#target}
  */
  readonly target?: VolumeTarget;
  /**
  * Sets the actual storage volume type reported by libvirt (for example `file`, `block`, `dir`, `network`, `netdir`, or `ploop`), matching the `type` attribute libvirt exposes for the volume; the value is user-provided and should be consistent with the underlying storage backend.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-xml>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#type Volume#type}
  */
  readonly type?: string;
}
export interface VolumeBackingStoreFormat {
  /**
  * Specifies the backing store format type string (for example, "raw" or "qcow2"), which must be a format supported by the hypervisor.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#type Volume#type}
  */
  readonly type: string;
}

export function volumeBackingStoreFormatToTerraform(struct?: VolumeBackingStoreFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function volumeBackingStoreFormatToHclTerraform(struct?: VolumeBackingStoreFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VolumeBackingStoreFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeBackingStoreFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeBackingStoreFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
export interface VolumeBackingStorePermissions {
  /**
  * Sets the numeric group ID (gid) that owns the backing store file or device; the value is user-provided, for example `107`.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#group Volume#group}
  */
  readonly group?: string;
  /**
  * Sets an SELinux security label for the backing store, when SELinux labeling is in use; the value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#label Volume#label}
  */
  readonly label?: string;
  /**
  * Sets the numeric file mode (permission bits) for the backing store, typically as an octal value such as `0640`.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#mode Volume#mode}
  */
  readonly mode?: string;
  /**
  * Sets the numeric user ID (uid) that owns the backing store file or device; the value is user-provided, for example `107`.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#owner Volume#owner}
  */
  readonly owner?: string;
}

export function volumeBackingStorePermissionsToTerraform(struct?: VolumeBackingStorePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    label: cdktf.stringToTerraform(struct!.label),
    mode: cdktf.stringToTerraform(struct!.mode),
    owner: cdktf.stringToTerraform(struct!.owner),
  }
}


export function volumeBackingStorePermissionsToHclTerraform(struct?: VolumeBackingStorePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeBackingStorePermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeBackingStorePermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeBackingStorePermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._label = undefined;
      this._mode = undefined;
      this._owner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._label = value.label;
      this._mode = value.mode;
      this._owner = value.owner;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }
}
export interface VolumeBackingStore {
  /**
  * Sets the on-disk format metadata for the backing store volume; this must match the actual format of the backing image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#format Volume#format}
  */
  readonly format?: VolumeBackingStoreFormat;
  /**
  * Sets the path to the backing image used by this volume, either as an absolute host path or a pool-relative path (for example, "/var/lib/libvirt/images/base.qcow2").
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#path Volume#path}
  */
  readonly path: string;
  /**
  * Configures POSIX ownership and SELinux label metadata for the backing store volume, controlling how the backing file is labeled and accessed on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#permissions Volume#permissions}
  */
  readonly permissions?: VolumeBackingStorePermissions;
}

export function volumeBackingStoreToTerraform(struct?: VolumeBackingStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: volumeBackingStoreFormatToTerraform(struct!.format),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: volumeBackingStorePermissionsToTerraform(struct!.permissions),
  }
}


export function volumeBackingStoreToHclTerraform(struct?: VolumeBackingStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: volumeBackingStoreFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeBackingStoreFormat",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: volumeBackingStorePermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeBackingStorePermissions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeBackingStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeBackingStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeBackingStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format.internalValue = undefined;
      this._path = undefined;
      this._permissions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format.internalValue = value.format;
      this._path = value.path;
      this._permissions.internalValue = value.permissions;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format = new VolumeBackingStoreFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: VolumeBackingStoreFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new VolumeBackingStorePermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: VolumeBackingStorePermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }
}
export interface VolumeCreateContent {
  /**
  * URL to download content from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#url Volume#url}
  */
  readonly url: string;
}

export function volumeCreateContentToTerraform(struct?: VolumeCreateContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function volumeCreateContentToHclTerraform(struct?: VolumeCreateContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeCreateContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeCreateContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeCreateContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface VolumeCreate {
  /**
  * Upload content from a URL or local file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#content Volume#content}
  */
  readonly content: VolumeCreateContent;
}

export function volumeCreateToTerraform(struct?: VolumeCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: volumeCreateContentToTerraform(struct!.content),
  }
}


export function volumeCreateToHclTerraform(struct?: VolumeCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: volumeCreateContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeCreateContent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content.internalValue = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content = new VolumeCreateContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: VolumeCreateContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}
export interface VolumeTargetEncryptionCipher {
  /**
  * Sets the hash algorithm used with the encryption cipher (for example `sha256`), with the exact value being user-provided but expected to be supported by the chosen encryption format.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#hash Volume#hash}
  */
  readonly hash: string;
  /**
  * Sets the cipher mode of operation (for example `cbc` or `xts`), with the value user-provided and constrained by the encryption backend’s supported modes.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#mode Volume#mode}
  */
  readonly mode: string;
  /**
  * Sets the base cipher algorithm name (for example `aes`), with the value user-provided and expected to be a valid algorithm for the image’s encryption format.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * Sets the cipher key size in bits for the encrypted storage volume (user-provided integer such as 128, 256, etc.).
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#size Volume#size}
  */
  readonly size: number;
}

export function volumeTargetEncryptionCipherToTerraform(struct?: VolumeTargetEncryptionCipher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function volumeTargetEncryptionCipherToHclTerraform(struct?: VolumeTargetEncryptionCipher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTargetEncryptionCipherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTargetEncryptionCipher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetEncryptionCipher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._mode = value.mode;
      this._name = value.name;
      this._size = value.size;
    }
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface VolumeTargetEncryptionIvgen {
  /**
  * Sets the hash algorithm used by the IV generator (for example "sha1" or "sha256"); value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#hash Volume#hash}
  */
  readonly hash: string;
  /**
  * Sets the IV generation scheme name used by the encryption layer (for example "plain", "essiv", etc.); value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
}

export function volumeTargetEncryptionIvgenToTerraform(struct?: VolumeTargetEncryptionIvgen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function volumeTargetEncryptionIvgenToHclTerraform(struct?: VolumeTargetEncryptionIvgen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTargetEncryptionIvgenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTargetEncryptionIvgen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetEncryptionIvgen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._name = value.name;
    }
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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
}
export interface VolumeTargetEncryptionSecret {
  /**
  * Sets how the secret is referenced, typically "uuid" to reference a libvirt secret by its UUID.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#type Volume#type}
  */
  readonly type: string;
}

export function volumeTargetEncryptionSecretToTerraform(struct?: VolumeTargetEncryptionSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function volumeTargetEncryptionSecretToHclTerraform(struct?: VolumeTargetEncryptionSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VolumeTargetEncryptionSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTargetEncryptionSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetEncryptionSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface VolumeTargetEncryption {
  /**
  * Defines the encryption cipher parameters used for the volume, such as algorithm name, mode, and hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#cipher Volume#cipher}
  */
  readonly cipher?: VolumeTargetEncryptionCipher;
  /**
  * Sets the encryption format used for the volume; for LUKS volumes this is typically set to "luks".
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#format Volume#format}
  */
  readonly format: string;
  /**
  * Configures the initialization vector (IV) generation method for the encrypted volume; when present, both name and hash must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#ivgen Volume#ivgen}
  */
  readonly ivgen?: VolumeTargetEncryptionIvgen;
  /**
  * Configures the libvirt secret used to supply the encryption key material for the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#secret Volume#secret}
  */
  readonly secret?: VolumeTargetEncryptionSecret;
}

export function volumeTargetEncryptionToTerraform(struct?: VolumeTargetEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: volumeTargetEncryptionCipherToTerraform(struct!.cipher),
    format: cdktf.stringToTerraform(struct!.format),
    ivgen: volumeTargetEncryptionIvgenToTerraform(struct!.ivgen),
    secret: volumeTargetEncryptionSecretToTerraform(struct!.secret),
  }
}


export function volumeTargetEncryptionToHclTerraform(struct?: VolumeTargetEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: volumeTargetEncryptionCipherToHclTerraform(struct!.cipher),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeTargetEncryptionCipher",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivgen: {
      value: volumeTargetEncryptionIvgenToHclTerraform(struct!.ivgen),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeTargetEncryptionIvgen",
    },
    secret: {
      value: volumeTargetEncryptionSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeTargetEncryptionSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTargetEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTargetEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._ivgen?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ivgen = this._ivgen?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher.internalValue = undefined;
      this._format = undefined;
      this._ivgen.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipher.internalValue = value.cipher;
      this._format = value.format;
      this._ivgen.internalValue = value.ivgen;
      this._secret.internalValue = value.secret;
    }
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher = new VolumeTargetEncryptionCipherOutputReference(this, "cipher");
  public get cipher() {
    return this._cipher;
  }
  public putCipher(value: VolumeTargetEncryptionCipher) {
    this._cipher.internalValue = value;
  }
  public resetCipher() {
    this._cipher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher.internalValue;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // ivgen - computed: false, optional: true, required: false
  private _ivgen = new VolumeTargetEncryptionIvgenOutputReference(this, "ivgen");
  public get ivgen() {
    return this._ivgen;
  }
  public putIvgen(value: VolumeTargetEncryptionIvgen) {
    this._ivgen.internalValue = value;
  }
  public resetIvgen() {
    this._ivgen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ivgenInput() {
    return this._ivgen.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new VolumeTargetEncryptionSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: VolumeTargetEncryptionSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface VolumeTargetFeatures {
}

export function volumeTargetFeaturesToTerraform(struct?: VolumeTargetFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function volumeTargetFeaturesToHclTerraform(struct?: VolumeTargetFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VolumeTargetFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeTargetFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class VolumeTargetFeaturesList extends cdktf.ComplexList {
  public internalValue? : VolumeTargetFeatures[] | cdktf.IResolvable

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
  public get(index: number): VolumeTargetFeaturesOutputReference {
    return new VolumeTargetFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeTargetFormat {
  /**
  * Specifies the backing store format type string (for example, "raw" or "qcow2"), which must be a format supported by the hypervisor.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#type Volume#type}
  */
  readonly type: string;
}

export function volumeTargetFormatToTerraform(struct?: VolumeTargetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function volumeTargetFormatToHclTerraform(struct?: VolumeTargetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VolumeTargetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTargetFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
export interface VolumeTargetPermissions {
  /**
  * Sets the numeric group ID (gid) that owns the backing store file or device; the value is user-provided, for example `107`.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#group Volume#group}
  */
  readonly group?: string;
  /**
  * Sets an SELinux security label for the backing store, when SELinux labeling is in use; the value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#label Volume#label}
  */
  readonly label?: string;
  /**
  * Sets the numeric file mode (permission bits) for the backing store, typically as an octal value such as `0640`.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#mode Volume#mode}
  */
  readonly mode?: string;
  /**
  * Sets the numeric user ID (uid) that owns the backing store file or device; the value is user-provided, for example `107`.
  * 
  * See: <https://libvirt.org/formatstorage.html#backing-store-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#owner Volume#owner}
  */
  readonly owner?: string;
}

export function volumeTargetPermissionsToTerraform(struct?: VolumeTargetPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    label: cdktf.stringToTerraform(struct!.label),
    mode: cdktf.stringToTerraform(struct!.mode),
    owner: cdktf.stringToTerraform(struct!.owner),
  }
}


export function volumeTargetPermissionsToHclTerraform(struct?: VolumeTargetPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTargetPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTargetPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._label = undefined;
      this._mode = undefined;
      this._owner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._label = value.label;
      this._mode = value.mode;
      this._owner = value.owner;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }
}
export interface VolumeTargetTimestamps {
  /**
  * Sets the last access time of the volume, typically as a UNIX timestamp in seconds (and optional nanoseconds) since the epoch.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#atime Volume#atime}
  */
  readonly atime: string;
  /**
  * Sets the last metadata change time of the volume, typically as a UNIX timestamp in seconds (and optional nanoseconds) since the epoch.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#ctime Volume#ctime}
  */
  readonly ctime: string;
  /**
  * Sets the last modification time (mtime) metadata for the volume target, using a user-provided timestamp value (seconds plus optional nanoseconds) that must be present for the volume definition. Examples: `seconds = 1716900000`, `seconds = 1716900000`, `nanoseconds = 123456789`.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#mtime Volume#mtime}
  */
  readonly mtime: string;
}

export function volumeTargetTimestampsToTerraform(struct?: VolumeTargetTimestamps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atime: cdktf.stringToTerraform(struct!.atime),
    ctime: cdktf.stringToTerraform(struct!.ctime),
    mtime: cdktf.stringToTerraform(struct!.mtime),
  }
}


export function volumeTargetTimestampsToHclTerraform(struct?: VolumeTargetTimestamps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atime: {
      value: cdktf.stringToHclTerraform(struct!.atime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ctime: {
      value: cdktf.stringToHclTerraform(struct!.ctime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtime: {
      value: cdktf.stringToHclTerraform(struct!.mtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTargetTimestampsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTargetTimestamps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atime !== undefined) {
      hasAnyValues = true;
      internalValueResult.atime = this._atime;
    }
    if (this._ctime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctime = this._ctime;
    }
    if (this._mtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtime = this._mtime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTargetTimestamps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atime = undefined;
      this._ctime = undefined;
      this._mtime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atime = value.atime;
      this._ctime = value.ctime;
      this._mtime = value.mtime;
    }
  }

  // atime - computed: false, optional: false, required: true
  private _atime?: string; 
  public get atime() {
    return this.getStringAttribute('atime');
  }
  public set atime(value: string) {
    this._atime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atimeInput() {
    return this._atime;
  }

  // ctime - computed: false, optional: false, required: true
  private _ctime?: string; 
  public get ctime() {
    return this.getStringAttribute('ctime');
  }
  public set ctime(value: string) {
    this._ctime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ctimeInput() {
    return this._ctime;
  }

  // mtime - computed: false, optional: false, required: true
  private _mtime?: string; 
  public get mtime() {
    return this.getStringAttribute('mtime');
  }
  public set mtime(value: string) {
    this._mtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtimeInput() {
    return this._mtime;
  }
}
export interface VolumeTarget {
  /**
  * Sets the cluster size for qcow2 volumes, controlling the allocation granularity on disk; value is a size with the unit given by `cluster_size_unit`.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#cluster_size Volume#cluster_size}
  */
  readonly clusterSize?: number;
  /**
  * Sets the unit for `cluster_size` (for example `bytes`, `KiB`, `MiB`), matching libvirt’s clusterSize `unit` attribute semantics.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#cluster_size_unit Volume#cluster_size_unit}
  */
  readonly clusterSizeUnit?: string;
  /**
  * Sets the qcow2 compatibility level for the volume (for example `0.10` or `1.1`), controlling which qemu feature set the image uses.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#compat Volume#compat}
  */
  readonly compat?: string;
  /**
  * Enables and configures encryption for the volume’s data, defining the cipher parameters for an encrypted image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#encryption Volume#encryption}
  */
  readonly encryption?: VolumeTargetEncryption;
  /**
  * Configures per-volume feature flags for the target format (such as qcow2 features); contents are user-provided according to the image format.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#features Volume#features}
  */
  readonly features?: VolumeTargetFeatures[] | cdktf.IResolvable;
  /**
  * Sets the on-disk format metadata for the backing store volume; this must match the actual format of the backing image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#format Volume#format}
  */
  readonly format?: VolumeTargetFormat;
  /**
  * Configures POSIX ownership and SELinux label metadata for the backing store volume, controlling how the backing file is labeled and accessed on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#permissions Volume#permissions}
  */
  readonly permissions?: VolumeTargetPermissions;
  /**
  * Configures stored timestamps for the volume target, such as access and change times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#timestamps Volume#timestamps}
  */
  readonly timestamps?: VolumeTargetTimestamps;
}

export function volumeTargetToTerraform(struct?: VolumeTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_size: cdktf.numberToTerraform(struct!.clusterSize),
    cluster_size_unit: cdktf.stringToTerraform(struct!.clusterSizeUnit),
    compat: cdktf.stringToTerraform(struct!.compat),
    encryption: volumeTargetEncryptionToTerraform(struct!.encryption),
    features: cdktf.listMapper(volumeTargetFeaturesToTerraform, false)(struct!.features),
    format: volumeTargetFormatToTerraform(struct!.format),
    permissions: volumeTargetPermissionsToTerraform(struct!.permissions),
    timestamps: volumeTargetTimestampsToTerraform(struct!.timestamps),
  }
}


export function volumeTargetToHclTerraform(struct?: VolumeTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_size: {
      value: cdktf.numberToHclTerraform(struct!.clusterSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_size_unit: {
      value: cdktf.stringToHclTerraform(struct!.clusterSizeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compat: {
      value: cdktf.stringToHclTerraform(struct!.compat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: volumeTargetEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeTargetEncryption",
    },
    features: {
      value: cdktf.listMapperHcl(volumeTargetFeaturesToHclTerraform, false)(struct!.features),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeTargetFeaturesList",
    },
    format: {
      value: volumeTargetFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeTargetFormat",
    },
    permissions: {
      value: volumeTargetPermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeTargetPermissions",
    },
    timestamps: {
      value: volumeTargetTimestampsToHclTerraform(struct!.timestamps),
      isBlock: true,
      type: "struct",
      storageClassType: "VolumeTargetTimestamps",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSize = this._clusterSize;
    }
    if (this._clusterSizeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSizeUnit = this._clusterSizeUnit;
    }
    if (this._compat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compat = this._compat;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._timestamps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamps = this._timestamps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterSize = undefined;
      this._clusterSizeUnit = undefined;
      this._compat = undefined;
      this._encryption.internalValue = undefined;
      this._features.internalValue = undefined;
      this._format.internalValue = undefined;
      this._permissions.internalValue = undefined;
      this._timestamps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterSize = value.clusterSize;
      this._clusterSizeUnit = value.clusterSizeUnit;
      this._compat = value.compat;
      this._encryption.internalValue = value.encryption;
      this._features.internalValue = value.features;
      this._format.internalValue = value.format;
      this._permissions.internalValue = value.permissions;
      this._timestamps.internalValue = value.timestamps;
    }
  }

  // cluster_size - computed: false, optional: true, required: false
  private _clusterSize?: number; 
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }
  public set clusterSize(value: number) {
    this._clusterSize = value;
  }
  public resetClusterSize() {
    this._clusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // cluster_size_unit - computed: false, optional: true, required: false
  private _clusterSizeUnit?: string; 
  public get clusterSizeUnit() {
    return this.getStringAttribute('cluster_size_unit');
  }
  public set clusterSizeUnit(value: string) {
    this._clusterSizeUnit = value;
  }
  public resetClusterSizeUnit() {
    this._clusterSizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeUnitInput() {
    return this._clusterSizeUnit;
  }

  // compat - computed: false, optional: true, required: false
  private _compat?: string; 
  public get compat() {
    return this.getStringAttribute('compat');
  }
  public set compat(value: string) {
    this._compat = value;
  }
  public resetCompat() {
    this._compat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatInput() {
    return this._compat;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new VolumeTargetEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: VolumeTargetEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new VolumeTargetFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: VolumeTargetFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new VolumeTargetFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: VolumeTargetFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new VolumeTargetPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: VolumeTargetPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // timestamps - computed: false, optional: true, required: false
  private _timestamps = new VolumeTargetTimestampsOutputReference(this, "timestamps");
  public get timestamps() {
    return this._timestamps;
  }
  public putTimestamps(value: VolumeTargetTimestamps) {
    this._timestamps.internalValue = value;
  }
  public resetTimestamps() {
    this._timestamps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsInput() {
    return this._timestamps.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume libvirt_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/volume libvirt_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_volume',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationUnit = config.allocationUnit;
    this._backingStore.internalValue = config.backingStore;
    this._capacity = config.capacity;
    this._capacityUnit = config.capacityUnit;
    this._create.internalValue = config.create;
    this._name = config.name;
    this._physicalUnit = config.physicalUnit;
    this._pool = config.pool;
    this._target.internalValue = config.target;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation - computed: true, optional: false, required: false
  public get allocation() {
    return this.getNumberAttribute('allocation');
  }

  // allocation_unit - computed: false, optional: true, required: false
  private _allocationUnit?: string; 
  public get allocationUnit() {
    return this.getStringAttribute('allocation_unit');
  }
  public set allocationUnit(value: string) {
    this._allocationUnit = value;
  }
  public resetAllocationUnit() {
    this._allocationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationUnitInput() {
    return this._allocationUnit;
  }

  // backing_store - computed: false, optional: true, required: false
  private _backingStore = new VolumeBackingStoreOutputReference(this, "backing_store");
  public get backingStore() {
    return this._backingStore;
  }
  public putBackingStore(value: VolumeBackingStore) {
    this._backingStore.internalValue = value;
  }
  public resetBackingStore() {
    this._backingStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingStoreInput() {
    return this._backingStore.internalValue;
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // capacity_unit - computed: false, optional: true, required: false
  private _capacityUnit?: string; 
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  public resetCapacityUnit() {
    this._capacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // create - computed: false, optional: true, required: false
  private _create = new VolumeCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: VolumeCreate) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // physical - computed: true, optional: false, required: false
  public get physical() {
    return this.getNumberAttribute('physical');
  }

  // physical_unit - computed: false, optional: true, required: false
  private _physicalUnit?: string; 
  public get physicalUnit() {
    return this.getStringAttribute('physical_unit');
  }
  public set physicalUnit(value: string) {
    this._physicalUnit = value;
  }
  public resetPhysicalUnit() {
    this._physicalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalUnitInput() {
    return this._physicalUnit;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // target - computed: false, optional: true, required: false
  private _target = new VolumeTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: VolumeTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // type - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_unit: cdktf.stringToTerraform(this._allocationUnit),
      backing_store: volumeBackingStoreToTerraform(this._backingStore.internalValue),
      capacity: cdktf.numberToTerraform(this._capacity),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      create: volumeCreateToTerraform(this._create.internalValue),
      name: cdktf.stringToTerraform(this._name),
      physical_unit: cdktf.stringToTerraform(this._physicalUnit),
      pool: cdktf.stringToTerraform(this._pool),
      target: volumeTargetToTerraform(this._target.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_unit: {
        value: cdktf.stringToHclTerraform(this._allocationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backing_store: {
        value: volumeBackingStoreToHclTerraform(this._backingStore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeBackingStore",
      },
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capacity_unit: {
        value: cdktf.stringToHclTerraform(this._capacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create: {
        value: volumeCreateToHclTerraform(this._create.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeCreate",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_unit: {
        value: cdktf.stringToHclTerraform(this._physicalUnit),
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
      target: {
        value: volumeTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeTarget",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
