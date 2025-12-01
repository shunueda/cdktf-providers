// https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets the unit used for the storage_pool.allocation value (for example, "bytes", "KiB", "MiB", "GiB"); if unset, libvirt’s default unit (typically bytes) is used.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#allocation_unit Pool#allocation_unit}
  */
  readonly allocationUnit?: string;
  /**
  * Sets the unit used for the storage_pool.available value (for example, "bytes", "KiB", "MiB", "GiB"); if unset, libvirt’s default unit (typically bytes) is used.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#available_unit Pool#available_unit}
  */
  readonly availableUnit?: string;
  /**
  * Sets the unit used for the storage_pool.capacity value (for example, "bytes", "KiB", "MiB", "GiB"); if unset, libvirt’s default unit (typically bytes) is used.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#capacity_unit Pool#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * Enables optional storage-pool-specific features such as copy-on-write behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#features Pool#features}
  */
  readonly features?: PoolFeatures;
  /**
  * Sets the storage pool name, which must be unique on the host and is required when defining a pool.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
  /**
  * Configures optional refresh behavior for the pool and its volumes, controlling how allocation statistics are recomputed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#refresh Pool#refresh}
  */
  readonly refresh?: PoolRefresh;
  /**
  * Defines the source backing for the storage pool (e.g., device, host, directory, or network export), specific to the chosen pool type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#source Pool#source}
  */
  readonly source?: PoolSource;
  /**
  * Configures the pool target section, which describes how the storage pool is exposed or mapped on the host (such as the target directory, block device, or other mapping details).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#target Pool#target}
  */
  readonly target?: PoolTarget;
  /**
  * Sets the storage pool backend type, such as "dir", "fs", "netfs", "logical", "disk", "iscsi", "scsi", "mpath", or "zfs", which determines which source/target sub-elements are valid.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-xml>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}
export interface PoolFeaturesCow {
  /**
  * Sets whether filesystem-level copy-on-write is enabled for images in the pool; valid values are "on" or "off".
  * 
  * See: <https://libvirt.org/formatstorage.html#features>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#state Pool#state}
  */
  readonly state: string;
}

export function poolFeaturesCowToTerraform(struct?: PoolFeaturesCow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function poolFeaturesCowToHclTerraform(struct?: PoolFeaturesCow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolFeaturesCowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolFeaturesCow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolFeaturesCow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface PoolFeatures {
  /**
  * Enables configuration of the copy-on-write (COW) feature for filesystems that support it in this storage pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#cow Pool#cow}
  */
  readonly cow?: PoolFeaturesCow;
}

export function poolFeaturesToTerraform(struct?: PoolFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cow: poolFeaturesCowToTerraform(struct!.cow),
  }
}


export function poolFeaturesToHclTerraform(struct?: PoolFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cow: {
      value: poolFeaturesCowToHclTerraform(struct!.cow),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolFeaturesCow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cow = this._cow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cow.internalValue = value.cow;
    }
  }

  // cow - computed: false, optional: true, required: false
  private _cow = new PoolFeaturesCowOutputReference(this, "cow");
  public get cow() {
    return this._cow;
  }
  public putCow(value: PoolFeaturesCow) {
    this._cow.internalValue = value;
  }
  public resetCow() {
    this._cow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cowInput() {
    return this._cow.internalValue;
  }
}
export interface PoolRefreshVolume {
  /**
  * Sets the method used to compute volume allocation during refresh; valid values are those supported by libvirt for the pool type (user-provided, e.g. "physical" vs "logical" where applicable).
  * 
  * See: <https://libvirt.org/formatstorage.html#refresh-overrides>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#allocation Pool#allocation}
  */
  readonly allocation: string;
}

export function poolRefreshVolumeToTerraform(struct?: PoolRefreshVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation: cdktf.stringToTerraform(struct!.allocation),
  }
}


export function poolRefreshVolumeToHclTerraform(struct?: PoolRefreshVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation: {
      value: cdktf.stringToHclTerraform(struct!.allocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolRefreshVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolRefreshVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocation = this._allocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolRefreshVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocation = value.allocation;
    }
  }

  // allocation - computed: false, optional: false, required: true
  private _allocation?: string; 
  public get allocation() {
    return this.getStringAttribute('allocation');
  }
  public set allocation(value: string) {
    this._allocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationInput() {
    return this._allocation;
  }
}
export interface PoolRefresh {
  /**
  * Configures per-volume refresh behavior for the pool, including how each volume’s allocation is calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#volume Pool#volume}
  */
  readonly volume?: PoolRefreshVolume;
}

export function poolRefreshToTerraform(struct?: PoolRefresh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume: poolRefreshVolumeToTerraform(struct!.volume),
  }
}


export function poolRefreshToHclTerraform(struct?: PoolRefresh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume: {
      value: poolRefreshVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolRefreshVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolRefresh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolRefresh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volume.internalValue = value.volume;
    }
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new PoolRefreshVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: PoolRefreshVolume) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}
export interface PoolSourceAdapterParentAddrAddress {
  /**
  * Sets the PCI bus number of the parent adapter; value is user-provided, typically in decimal (e.g., "0", "3").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#bus Pool#bus}
  */
  readonly bus?: number;
  /**
  * Sets the PCI domain number of the parent adapter; value is user-provided, typically "0" on most systems.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#domain Pool#domain}
  */
  readonly domain?: number;
  /**
  * Sets the PCI function number of the parent adapter; value is user-provided, typically 0–7 (e.g., "0").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#function Pool#function}
  */
  readonly function?: number;
  /**
  * Sets the PCI slot number of the parent adapter; value is user-provided, typically in decimal (e.g., "0", "1", "10").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#slot Pool#slot}
  */
  readonly slot?: number;
}

export function poolSourceAdapterParentAddrAddressToTerraform(struct?: PoolSourceAdapterParentAddrAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus: cdktf.numberToTerraform(struct!.bus),
    domain: cdktf.numberToTerraform(struct!.domain),
    function: cdktf.numberToTerraform(struct!.function),
    slot: cdktf.numberToTerraform(struct!.slot),
  }
}


export function poolSourceAdapterParentAddrAddressToHclTerraform(struct?: PoolSourceAdapterParentAddrAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus: {
      value: cdktf.numberToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain: {
      value: cdktf.numberToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    function: {
      value: cdktf.numberToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot: {
      value: cdktf.numberToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceAdapterParentAddrAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceAdapterParentAddrAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceAdapterParentAddrAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bus = undefined;
      this._domain = undefined;
      this._function = undefined;
      this._slot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bus = value.bus;
      this._domain = value.domain;
      this._function = value.function;
      this._slot = value.slot;
    }
  }

  // bus - computed: false, optional: true, required: false
  private _bus?: number; 
  public get bus() {
    return this.getNumberAttribute('bus');
  }
  public set bus(value: number) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: number; 
  public get domain() {
    return this.getNumberAttribute('domain');
  }
  public set domain(value: number) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // function - computed: false, optional: true, required: false
  private _function?: number; 
  public get function() {
    return this.getNumberAttribute('function');
  }
  public set function(value: number) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: number; 
  public get slot() {
    return this.getNumberAttribute('slot');
  }
  public set slot(value: number) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }
}
export interface PoolSourceAdapterParentAddr {
  /**
  * Provides the structured PCI address of the parent adapter (domain, bus, slot, function).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#address Pool#address}
  */
  readonly address?: PoolSourceAdapterParentAddrAddress;
  /**
  * Sets the required unique identifier for the parent adapter address, used by libvirt to distinguish this adapter instance (user-provided string).
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#unique_id Pool#unique_id}
  */
  readonly uniqueId: number;
}

export function poolSourceAdapterParentAddrToTerraform(struct?: PoolSourceAdapterParentAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: poolSourceAdapterParentAddrAddressToTerraform(struct!.address),
    unique_id: cdktf.numberToTerraform(struct!.uniqueId),
  }
}


export function poolSourceAdapterParentAddrToHclTerraform(struct?: PoolSourceAdapterParentAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: poolSourceAdapterParentAddrAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceAdapterParentAddrAddress",
    },
    unique_id: {
      value: cdktf.numberToHclTerraform(struct!.uniqueId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceAdapterParentAddrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceAdapterParentAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._uniqueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueId = this._uniqueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceAdapterParentAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._uniqueId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._uniqueId = value.uniqueId;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new PoolSourceAdapterParentAddrAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: PoolSourceAdapterParentAddrAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // unique_id - computed: false, optional: false, required: true
  private _uniqueId?: number; 
  public get uniqueId() {
    return this.getNumberAttribute('unique_id');
  }
  public set uniqueId(value: number) {
    this._uniqueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdInput() {
    return this._uniqueId;
  }
}
export interface PoolSourceAdapter {
  /**
  * Controls whether libvirt manages the adapter’s login/session; accepts "yes" or "no" and is interpreted as a boolean.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#managed Pool#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Sets the adapter name for the pool source, typically the host HBA or interface identifier (user-provided string, such as "host0").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name?: string;
  /**
  * Sets an optional parent adapter identifier if the specified adapter is a child of another adapter (user-provided string).
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#parent Pool#parent}
  */
  readonly parent?: string;
  /**
  * Configures the PCI-style address and unique ID of the parent adapter for the storage pool source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#parent_addr Pool#parent_addr}
  */
  readonly parentAddr?: PoolSourceAdapterParentAddr;
  /**
  * Sets the adapter type for the pool source (e.g., HBA type); value is user-provided and must be supported by the chosen pool backend.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#type Pool#type}
  */
  readonly type?: string;
  /**
  * Sets the World Wide Node Name (WWNN) for a Fibre Channel adapter; value is a user-provided FC WWN string (e.g., "5005076802401234").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#wwnn Pool#wwnn}
  */
  readonly wwnn?: string;
  /**
  * Sets the World Wide Port Name (WWPN) for a Fibre Channel adapter; value is a user-provided FC WWN string (e.g., "5005076802456789").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#wwpn Pool#wwpn}
  */
  readonly wwpn?: string;
}

export function poolSourceAdapterToTerraform(struct?: PoolSourceAdapter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: cdktf.booleanToTerraform(struct!.managed),
    name: cdktf.stringToTerraform(struct!.name),
    parent: cdktf.stringToTerraform(struct!.parent),
    parent_addr: poolSourceAdapterParentAddrToTerraform(struct!.parentAddr),
    type: cdktf.stringToTerraform(struct!.type),
    wwnn: cdktf.stringToTerraform(struct!.wwnn),
    wwpn: cdktf.stringToTerraform(struct!.wwpn),
  }
}


export function poolSourceAdapterToHclTerraform(struct?: PoolSourceAdapter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_addr: {
      value: poolSourceAdapterParentAddrToHclTerraform(struct!.parentAddr),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceAdapterParentAddr",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwnn: {
      value: cdktf.stringToHclTerraform(struct!.wwnn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwpn: {
      value: cdktf.stringToHclTerraform(struct!.wwpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceAdapterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceAdapter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._parentAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentAddr = this._parentAddr?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wwnn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnn = this._wwnn;
    }
    if (this._wwpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwpn = this._wwpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceAdapter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managed = undefined;
      this._name = undefined;
      this._parent = undefined;
      this._parentAddr.internalValue = undefined;
      this._type = undefined;
      this._wwnn = undefined;
      this._wwpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managed = value.managed;
      this._name = value.name;
      this._parent = value.parent;
      this._parentAddr.internalValue = value.parentAddr;
      this._type = value.type;
      this._wwnn = value.wwnn;
      this._wwpn = value.wwpn;
    }
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // name - computed: false, optional: true, required: false
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parent_addr - computed: false, optional: true, required: false
  private _parentAddr = new PoolSourceAdapterParentAddrOutputReference(this, "parent_addr");
  public get parentAddr() {
    return this._parentAddr;
  }
  public putParentAddr(value: PoolSourceAdapterParentAddr) {
    this._parentAddr.internalValue = value;
  }
  public resetParentAddr() {
    this._parentAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAddrInput() {
    return this._parentAddr.internalValue;
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

  // wwnn - computed: false, optional: true, required: false
  private _wwnn?: string; 
  public get wwnn() {
    return this.getStringAttribute('wwnn');
  }
  public set wwnn(value: string) {
    this._wwnn = value;
  }
  public resetWwnn() {
    this._wwnn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnnInput() {
    return this._wwnn;
  }

  // wwpn - computed: false, optional: true, required: false
  private _wwpn?: string; 
  public get wwpn() {
    return this.getStringAttribute('wwpn');
  }
  public set wwpn(value: string) {
    this._wwpn = value;
  }
  public resetWwpn() {
    this._wwpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwpnInput() {
    return this._wwpn;
  }
}
export interface PoolSourceAuthSecret {
  /**
  * Sets the application-specific usage name of the secret to use for pool authentication, as defined in the corresponding libvirt secret object (user-provided string such as "ceph-secret").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#usage Pool#usage}
  */
  readonly usage?: string;
}

export function poolSourceAuthSecretToTerraform(struct?: PoolSourceAuthSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    usage: cdktf.stringToTerraform(struct!.usage),
  }
}


export function poolSourceAuthSecretToHclTerraform(struct?: PoolSourceAuthSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceAuthSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceAuthSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceAuthSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._usage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._usage = value.usage;
    }
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface PoolSourceAuth {
  /**
  * Configures the libvirt secret used for authenticating access to the storage pool source (for example, an RBD or iSCSI password); either a secret UUID or a usage name must be provided via child attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#secret Pool#secret}
  */
  readonly secret?: PoolSourceAuthSecret;
  /**
  * Sets the authentication type used by the pool source, for example "ceph" for RBD pools or other backend-specific values; the value is user-provided but must match what the storage backend expects.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
  /**
  * Sets the username or client identifier used when authenticating to the storage backend (for example, a Ceph client name like "client.admin" or an iSCSI user).
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#username Pool#username}
  */
  readonly username: string;
}

export function poolSourceAuthToTerraform(struct?: PoolSourceAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: poolSourceAuthSecretToTerraform(struct!.secret),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function poolSourceAuthToHclTerraform(struct?: PoolSourceAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: poolSourceAuthSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceAuthSecret",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret.internalValue = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret.internalValue = value.secret;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new PoolSourceAuthSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: PoolSourceAuthSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface PoolSourceDeviceFreeExtents {
  /**
  * Sets the end offset of a free extent on the device, expressed in bytes as an integer greater than the start offset.
  * 
  * See: <https://libvirt.org/formatstorage.html#device-extents>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#end Pool#end}
  */
  readonly end: number;
  /**
  * Sets the start offset of a free extent on the device, expressed in bytes as a non-negative integer.
  * 
  * See: <https://libvirt.org/formatstorage.html#device-extents>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#start Pool#start}
  */
  readonly start: number;
}

export function poolSourceDeviceFreeExtentsToTerraform(struct?: PoolSourceDeviceFreeExtents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function poolSourceDeviceFreeExtentsToHclTerraform(struct?: PoolSourceDeviceFreeExtents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceDeviceFreeExtentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolSourceDeviceFreeExtents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceDeviceFreeExtents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class PoolSourceDeviceFreeExtentsList extends cdktf.ComplexList {
  public internalValue? : PoolSourceDeviceFreeExtents[] | cdktf.IResolvable

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
  public get(index: number): PoolSourceDeviceFreeExtentsOutputReference {
    return new PoolSourceDeviceFreeExtentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolSourceDevice {
  /**
  * Describes one or more free extents on the source device that are available for allocation by the pool, each defined by a start and end offset.
  * 
  * See: <https://libvirt.org/formatstorage.html#device-extents>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#free_extents Pool#free_extents}
  */
  readonly freeExtents?: PoolSourceDeviceFreeExtents[] | cdktf.IResolvable;
  /**
  * Sets the character used to separate the base device name from partition numbers (for example, "p" for devices like "/dev/nvme0n1p1"); the value is user-provided and backend-specific.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#part_separator Pool#part_separator}
  */
  readonly partSeparator?: string;
  /**
  * Sets the absolute path of the source block device used by the pool, such as "/dev/sdb" or "/dev/mapper/mpath0".
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#path Pool#path}
  */
  readonly path: string;
}

export function poolSourceDeviceToTerraform(struct?: PoolSourceDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_extents: cdktf.listMapper(poolSourceDeviceFreeExtentsToTerraform, false)(struct!.freeExtents),
    part_separator: cdktf.stringToTerraform(struct!.partSeparator),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function poolSourceDeviceToHclTerraform(struct?: PoolSourceDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    free_extents: {
      value: cdktf.listMapperHcl(poolSourceDeviceFreeExtentsToHclTerraform, false)(struct!.freeExtents),
      isBlock: true,
      type: "list",
      storageClassType: "PoolSourceDeviceFreeExtentsList",
    },
    part_separator: {
      value: cdktf.stringToHclTerraform(struct!.partSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolSourceDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeExtents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeExtents = this._freeExtents?.internalValue;
    }
    if (this._partSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.partSeparator = this._partSeparator;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._freeExtents.internalValue = undefined;
      this._partSeparator = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._freeExtents.internalValue = value.freeExtents;
      this._partSeparator = value.partSeparator;
      this._path = value.path;
    }
  }

  // free_extents - computed: false, optional: true, required: false
  private _freeExtents = new PoolSourceDeviceFreeExtentsList(this, "free_extents", false);
  public get freeExtents() {
    return this._freeExtents;
  }
  public putFreeExtents(value: PoolSourceDeviceFreeExtents[] | cdktf.IResolvable) {
    this._freeExtents.internalValue = value;
  }
  public resetFreeExtents() {
    this._freeExtents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeExtentsInput() {
    return this._freeExtents.internalValue;
  }

  // part_separator - computed: false, optional: true, required: false
  private _partSeparator?: string; 
  public get partSeparator() {
    return this.getStringAttribute('part_separator');
  }
  public set partSeparator(value: string) {
    this._partSeparator = value;
  }
  public resetPartSeparator() {
    this._partSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partSeparatorInput() {
    return this._partSeparator;
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
}

export class PoolSourceDeviceList extends cdktf.ComplexList {
  public internalValue? : PoolSourceDevice[] | cdktf.IResolvable

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
  public get(index: number): PoolSourceDeviceOutputReference {
    return new PoolSourceDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolSourceDir {
  /**
  * Sets the absolute path to the source directory for the pool, such as "/var/lib/libvirt/images" or a mounted filesystem root.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#path Pool#path}
  */
  readonly path: string;
}

export function poolSourceDirToTerraform(struct?: PoolSourceDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function poolSourceDirToHclTerraform(struct?: PoolSourceDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}
export interface PoolSourceFormat {
  /**
  * Sets the source format type string, such as "ext4", "xfs", "nfs", or other backend-specific formats; the value is user-provided but must be valid for the chosen pool type.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolSourceFormatToTerraform(struct?: PoolSourceFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolSourceFormatToHclTerraform(struct?: PoolSourceFormat | cdktf.IResolvable): any {
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

export class PoolSourceFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolSourceFormat | cdktf.IResolvable | undefined) {
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
export interface PoolSourceHost {
  /**
  * Sets the hostname or IP address of the remote storage server, such as "storage.example.com" or "192.0.2.10".
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
  /**
  * Optionally sets the TCP port used to connect to the remote storage server; if omitted, the backend’s default port is used.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#port Pool#port}
  */
  readonly port?: string;
}

export function poolSourceHostToTerraform(struct?: PoolSourceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function poolSourceHostToHclTerraform(struct?: PoolSourceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolSourceHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
    }
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class PoolSourceHostList extends cdktf.ComplexList {
  public internalValue? : PoolSourceHost[] | cdktf.IResolvable

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
  public get(index: number): PoolSourceHostOutputReference {
    return new PoolSourceHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolSourceInitiatorIqn {
  /**
  * Sets the iSCSI initiator IQN name used by the storage pool when authenticating to an iSCSI target; the value is user-provided and should be a valid IQN string (for example, "iqn.1994-05.com.redhat:client1").
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name?: string;
}

export function poolSourceInitiatorIqnToTerraform(struct?: PoolSourceInitiatorIqn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function poolSourceInitiatorIqnToHclTerraform(struct?: PoolSourceInitiatorIqn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class PoolSourceInitiatorIqnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceInitiatorIqn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceInitiatorIqn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}
export interface PoolSourceInitiator {
  /**
  * Sets the iSCSI Qualified Name (IQN) of the initiator, such as "iqn.1993-08.org.debian:01:123456789"; the value must be a valid IQN string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#iqn Pool#iqn}
  */
  readonly iqn?: PoolSourceInitiatorIqn;
}

export function poolSourceInitiatorToTerraform(struct?: PoolSourceInitiator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iqn: poolSourceInitiatorIqnToTerraform(struct!.iqn),
  }
}


export function poolSourceInitiatorToHclTerraform(struct?: PoolSourceInitiator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iqn: {
      value: poolSourceInitiatorIqnToHclTerraform(struct!.iqn),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceInitiatorIqn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceInitiatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceInitiator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iqn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceInitiator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iqn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iqn.internalValue = value.iqn;
    }
  }

  // iqn - computed: false, optional: true, required: false
  private _iqn = new PoolSourceInitiatorIqnOutputReference(this, "iqn");
  public get iqn() {
    return this._iqn;
  }
  public putIqn(value: PoolSourceInitiatorIqn) {
    this._iqn.internalValue = value;
  }
  public resetIqn() {
    this._iqn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn.internalValue;
  }
}
export interface PoolSourceProduct {
  /**
  * Sets the required product name string for the storage pool source (for example, a storage array or disk product identifier); the value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
}

export function poolSourceProductToTerraform(struct?: PoolSourceProduct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function poolSourceProductToHclTerraform(struct?: PoolSourceProduct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class PoolSourceProductOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceProduct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceProduct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
export interface PoolSourceProtocol {
  /**
  * Sets the required protocol version string used by the storage pool source (for example, an RBD or protocol-specific version); the value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#version Pool#version}
  */
  readonly version: string;
}

export function poolSourceProtocolToTerraform(struct?: PoolSourceProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function poolSourceProtocolToHclTerraform(struct?: PoolSourceProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface PoolSourceVendor {
  /**
  * Sets the required vendor name string for the storage pool source (for example, "Red Hat" or a storage vendor identifier); the value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
}

export function poolSourceVendorToTerraform(struct?: PoolSourceVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function poolSourceVendorToHclTerraform(struct?: PoolSourceVendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class PoolSourceVendorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSourceVendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSourceVendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
export interface PoolSource {
  /**
  * Configures an HBA/adapter description for pools that use host adapters (e.g., iSCSI or SCSI pools), including addressing and management attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#adapter Pool#adapter}
  */
  readonly adapter?: PoolSourceAdapter;
  /**
  * Configures optional authentication for the pool source (e.g., user/secret for iSCSI, RBD, or other networked storage), with credentials defined according to the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#auth Pool#auth}
  */
  readonly auth?: PoolSourceAuth;
  /**
  * Configures a source block device used by the storage pool (for example, for disk, logical, iscsi, or scsi pools), including its path and optional partitioning/extents metadata.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#device Pool#device}
  */
  readonly device?: PoolSourceDevice[] | cdktf.IResolvable;
  /**
  * Configures a source directory used by the storage pool backend (for example, for dir, fs, netfs, or vstorage-style pools).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#dir Pool#dir}
  */
  readonly dir?: PoolSourceDir;
  /**
  * Declares the low-level format of the pool source, where supported (for example, the filesystem type or protocol-specific format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#format Pool#format}
  */
  readonly format?: PoolSourceFormat;
  /**
  * Configures a remote host used as the source of the storage pool, including hostname and optional port (for example, an NFS or iSCSI server).
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#host Pool#host}
  */
  readonly host?: PoolSourceHost[] | cdktf.IResolvable;
  /**
  * Configures iSCSI initiator information for the pool source, allowing the host to identify itself to an iSCSI target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#initiator Pool#initiator}
  */
  readonly initiator?: PoolSourceInitiator;
  /**
  * Sets an optional human-readable name for the storage pool source, whose semantics depend on the specific pool type and are otherwise user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#source-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name?: string;
  /**
  * Enables specifying a product descriptor for the storage pool source, typically used together with vendor information for device-based pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#product Pool#product}
  */
  readonly product?: PoolSourceProduct;
  /**
  * Enables defining a network storage protocol block for the pool source (for example, RBD, Gluster, or other supported protocols), with details provided by its child attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#protocol Pool#protocol}
  */
  readonly protocol?: PoolSourceProtocol;
  /**
  * Enables specifying a vendor descriptor for the storage pool source, typically paired with a product to identify the backing storage hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#vendor Pool#vendor}
  */
  readonly vendor?: PoolSourceVendor;
}

export function poolSourceToTerraform(struct?: PoolSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter: poolSourceAdapterToTerraform(struct!.adapter),
    auth: poolSourceAuthToTerraform(struct!.auth),
    device: cdktf.listMapper(poolSourceDeviceToTerraform, false)(struct!.device),
    dir: poolSourceDirToTerraform(struct!.dir),
    format: poolSourceFormatToTerraform(struct!.format),
    host: cdktf.listMapper(poolSourceHostToTerraform, false)(struct!.host),
    initiator: poolSourceInitiatorToTerraform(struct!.initiator),
    name: cdktf.stringToTerraform(struct!.name),
    product: poolSourceProductToTerraform(struct!.product),
    protocol: poolSourceProtocolToTerraform(struct!.protocol),
    vendor: poolSourceVendorToTerraform(struct!.vendor),
  }
}


export function poolSourceToHclTerraform(struct?: PoolSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter: {
      value: poolSourceAdapterToHclTerraform(struct!.adapter),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceAdapter",
    },
    auth: {
      value: poolSourceAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceAuth",
    },
    device: {
      value: cdktf.listMapperHcl(poolSourceDeviceToHclTerraform, false)(struct!.device),
      isBlock: true,
      type: "list",
      storageClassType: "PoolSourceDeviceList",
    },
    dir: {
      value: poolSourceDirToHclTerraform(struct!.dir),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceDir",
    },
    format: {
      value: poolSourceFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceFormat",
    },
    host: {
      value: cdktf.listMapperHcl(poolSourceHostToHclTerraform, false)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "PoolSourceHostList",
    },
    initiator: {
      value: poolSourceInitiatorToHclTerraform(struct!.initiator),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceInitiator",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: poolSourceProductToHclTerraform(struct!.product),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceProduct",
    },
    protocol: {
      value: poolSourceProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceProtocol",
    },
    vendor: {
      value: poolSourceVendorToHclTerraform(struct!.vendor),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolSourceVendor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapter = this._adapter?.internalValue;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._dir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._initiator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiator = this._initiator?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._vendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapter.internalValue = undefined;
      this._auth.internalValue = undefined;
      this._device.internalValue = undefined;
      this._dir.internalValue = undefined;
      this._format.internalValue = undefined;
      this._host.internalValue = undefined;
      this._initiator.internalValue = undefined;
      this._name = undefined;
      this._product.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._vendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapter.internalValue = value.adapter;
      this._auth.internalValue = value.auth;
      this._device.internalValue = value.device;
      this._dir.internalValue = value.dir;
      this._format.internalValue = value.format;
      this._host.internalValue = value.host;
      this._initiator.internalValue = value.initiator;
      this._name = value.name;
      this._product.internalValue = value.product;
      this._protocol.internalValue = value.protocol;
      this._vendor.internalValue = value.vendor;
    }
  }

  // adapter - computed: false, optional: true, required: false
  private _adapter = new PoolSourceAdapterOutputReference(this, "adapter");
  public get adapter() {
    return this._adapter;
  }
  public putAdapter(value: PoolSourceAdapter) {
    this._adapter.internalValue = value;
  }
  public resetAdapter() {
    this._adapter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterInput() {
    return this._adapter.internalValue;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new PoolSourceAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: PoolSourceAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device = new PoolSourceDeviceList(this, "device", false);
  public get device() {
    return this._device;
  }
  public putDevice(value: PoolSourceDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // dir - computed: false, optional: true, required: false
  private _dir = new PoolSourceDirOutputReference(this, "dir");
  public get dir() {
    return this._dir;
  }
  public putDir(value: PoolSourceDir) {
    this._dir.internalValue = value;
  }
  public resetDir() {
    this._dir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new PoolSourceFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: PoolSourceFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new PoolSourceHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: PoolSourceHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // initiator - computed: false, optional: true, required: false
  private _initiator = new PoolSourceInitiatorOutputReference(this, "initiator");
  public get initiator() {
    return this._initiator;
  }
  public putInitiator(value: PoolSourceInitiator) {
    this._initiator.internalValue = value;
  }
  public resetInitiator() {
    this._initiator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator.internalValue;
  }

  // name - computed: false, optional: true, required: false
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

  // product - computed: false, optional: true, required: false
  private _product = new PoolSourceProductOutputReference(this, "product");
  public get product() {
    return this._product;
  }
  public putProduct(value: PoolSourceProduct) {
    this._product.internalValue = value;
  }
  public resetProduct() {
    this._product.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new PoolSourceProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: PoolSourceProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor = new PoolSourceVendorOutputReference(this, "vendor");
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: PoolSourceVendor) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }
}
export interface PoolTargetEncryptionCipher {
  /**
  * Sets the hash algorithm used with the encryption cipher (for example `sha256`), with the exact value being user-provided but expected to be supported by the chosen encryption format.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#hash Pool#hash}
  */
  readonly hash: string;
  /**
  * Sets the cipher mode of operation (for example `cbc` or `xts`), with the value user-provided and constrained by the encryption backend’s supported modes.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#mode Pool#mode}
  */
  readonly mode: string;
  /**
  * Sets the base cipher algorithm name (for example `aes`), with the value user-provided and expected to be a valid algorithm for the image’s encryption format.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
  /**
  * Sets the cipher key size in bits for the encrypted storage volume (user-provided integer such as 128, 256, etc.).
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#size Pool#size}
  */
  readonly size: number;
}

export function poolTargetEncryptionCipherToTerraform(struct?: PoolTargetEncryptionCipher | cdktf.IResolvable): any {
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


export function poolTargetEncryptionCipherToHclTerraform(struct?: PoolTargetEncryptionCipher | cdktf.IResolvable): any {
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

export class PoolTargetEncryptionCipherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolTargetEncryptionCipher | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolTargetEncryptionCipher | cdktf.IResolvable | undefined) {
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
export interface PoolTargetEncryptionIvgen {
  /**
  * Sets the hash algorithm used by the IV generator (for example "sha1" or "sha256"); value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#hash Pool#hash}
  */
  readonly hash: string;
  /**
  * Sets the IV generation scheme name used by the encryption layer (for example "plain", "essiv", etc.); value is user-provided.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
}

export function poolTargetEncryptionIvgenToTerraform(struct?: PoolTargetEncryptionIvgen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function poolTargetEncryptionIvgenToHclTerraform(struct?: PoolTargetEncryptionIvgen | cdktf.IResolvable): any {
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

export class PoolTargetEncryptionIvgenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolTargetEncryptionIvgen | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolTargetEncryptionIvgen | cdktf.IResolvable | undefined) {
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
export interface PoolTargetEncryptionSecret {
  /**
  * Sets how the secret is referenced, typically "uuid" to reference a libvirt secret by its UUID.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolTargetEncryptionSecretToTerraform(struct?: PoolTargetEncryptionSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolTargetEncryptionSecretToHclTerraform(struct?: PoolTargetEncryptionSecret | cdktf.IResolvable): any {
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

export class PoolTargetEncryptionSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolTargetEncryptionSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolTargetEncryptionSecret | cdktf.IResolvable | undefined) {
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
export interface PoolTargetEncryption {
  /**
  * Defines the encryption cipher parameters used for the volume, such as algorithm name, mode, and hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#cipher Pool#cipher}
  */
  readonly cipher?: PoolTargetEncryptionCipher;
  /**
  * Sets the encryption format used for the volume; for LUKS volumes this is typically set to "luks".
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-volume-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#format Pool#format}
  */
  readonly format: string;
  /**
  * Configures the initialization vector (IV) generation method for the encrypted volume; when present, both name and hash must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#ivgen Pool#ivgen}
  */
  readonly ivgen?: PoolTargetEncryptionIvgen;
  /**
  * Configures the libvirt secret used to supply the encryption key material for the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#secret Pool#secret}
  */
  readonly secret?: PoolTargetEncryptionSecret;
}

export function poolTargetEncryptionToTerraform(struct?: PoolTargetEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: poolTargetEncryptionCipherToTerraform(struct!.cipher),
    format: cdktf.stringToTerraform(struct!.format),
    ivgen: poolTargetEncryptionIvgenToTerraform(struct!.ivgen),
    secret: poolTargetEncryptionSecretToTerraform(struct!.secret),
  }
}


export function poolTargetEncryptionToHclTerraform(struct?: PoolTargetEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: poolTargetEncryptionCipherToHclTerraform(struct!.cipher),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolTargetEncryptionCipher",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivgen: {
      value: poolTargetEncryptionIvgenToHclTerraform(struct!.ivgen),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolTargetEncryptionIvgen",
    },
    secret: {
      value: poolTargetEncryptionSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolTargetEncryptionSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolTargetEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolTargetEncryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolTargetEncryption | cdktf.IResolvable | undefined) {
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
  private _cipher = new PoolTargetEncryptionCipherOutputReference(this, "cipher");
  public get cipher() {
    return this._cipher;
  }
  public putCipher(value: PoolTargetEncryptionCipher) {
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
  private _ivgen = new PoolTargetEncryptionIvgenOutputReference(this, "ivgen");
  public get ivgen() {
    return this._ivgen;
  }
  public putIvgen(value: PoolTargetEncryptionIvgen) {
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
  private _secret = new PoolTargetEncryptionSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: PoolTargetEncryptionSecret) {
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
export interface PoolTargetPermissions {
  /**
  * Sets the numeric group ID or group name that owns the pool target path (for example, "107" or "libvirt-qemu").
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#group Pool#group}
  */
  readonly group?: string;
  /**
  * Sets an optional security label (such as an SELinux context) to apply to the pool target path; the value is user-provided and backend-specific.
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#label Pool#label}
  */
  readonly label?: string;
  /**
  * Sets the Unix permission bits for the pool target path, as an octal string such as "0755" or "0700".
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#mode Pool#mode}
  */
  readonly mode?: string;
  /**
  * Sets the numeric user ID or username that owns the pool target path (for example, "107" or "qemu").
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#owner Pool#owner}
  */
  readonly owner?: string;
}

export function poolTargetPermissionsToTerraform(struct?: PoolTargetPermissions | cdktf.IResolvable): any {
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


export function poolTargetPermissionsToHclTerraform(struct?: PoolTargetPermissions | cdktf.IResolvable): any {
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

export class PoolTargetPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolTargetPermissions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolTargetPermissions | cdktf.IResolvable | undefined) {
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
export interface PoolTargetTimestamps {
  /**
  * Sets the last access time for the pool target path; the value is user-provided (for example, a seconds or seconds.nanoseconds timestamp as supported by libvirt).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#atime Pool#atime}
  */
  readonly atime: string;
  /**
  * Sets the last metadata change time for the pool target path; the value is user-provided in the timestamp format expected by libvirt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#ctime Pool#ctime}
  */
  readonly ctime: string;
  /**
  * Sets the last data modification time for the pool target path; the value is user-provided in the timestamp format expected by libvirt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#mtime Pool#mtime}
  */
  readonly mtime: string;
}

export function poolTargetTimestampsToTerraform(struct?: PoolTargetTimestamps | cdktf.IResolvable): any {
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


export function poolTargetTimestampsToHclTerraform(struct?: PoolTargetTimestamps | cdktf.IResolvable): any {
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

export class PoolTargetTimestampsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolTargetTimestamps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolTargetTimestamps | cdktf.IResolvable | undefined) {
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
export interface PoolTarget {
  /**
  * Enables and configures encryption for the volume’s data, defining the cipher parameters for an encrypted image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#encryption Pool#encryption}
  */
  readonly encryption?: PoolTargetEncryption;
  /**
  * Sets the host path where the pool target is mapped, such as a directory for a dir/fs/netfs pool or a block device for a disk/logical pool (for example, "/var/lib/libvirt/images" or "/dev/sdb").
  * 
  * See: <https://libvirt.org/formatstorage.html#storage-pool-target-elements>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#path Pool#path}
  */
  readonly path?: string;
  /**
  * Sets ownership and permission metadata applied to the pool target path, controlling which user/group and mode bits are used on the backing directory or device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#permissions Pool#permissions}
  */
  readonly permissions?: PoolTargetPermissions;
  /**
  * Sets explicit access, change, and modification timestamps on the pool target path when supported by the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#timestamps Pool#timestamps}
  */
  readonly timestamps?: PoolTargetTimestamps;
}

export function poolTargetToTerraform(struct?: PoolTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: poolTargetEncryptionToTerraform(struct!.encryption),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: poolTargetPermissionsToTerraform(struct!.permissions),
    timestamps: poolTargetTimestampsToTerraform(struct!.timestamps),
  }
}


export function poolTargetToHclTerraform(struct?: PoolTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: poolTargetEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolTargetEncryption",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: poolTargetPermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolTargetPermissions",
    },
    timestamps: {
      value: poolTargetTimestampsToHclTerraform(struct!.timestamps),
      isBlock: true,
      type: "struct",
      storageClassType: "PoolTargetTimestamps",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PoolTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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

  public set internalValue(value: PoolTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._path = undefined;
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
      this._encryption.internalValue = value.encryption;
      this._path = value.path;
      this._permissions.internalValue = value.permissions;
      this._timestamps.internalValue = value.timestamps;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new PoolTargetEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: PoolTargetEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new PoolTargetPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: PoolTargetPermissions) {
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
  private _timestamps = new PoolTargetTimestampsOutputReference(this, "timestamps");
  public get timestamps() {
    return this._timestamps;
  }
  public putTimestamps(value: PoolTargetTimestamps) {
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
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool libvirt_pool}
*/
export class Pool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pool to import
  * @param importFromId The id of the existing Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/pool libvirt_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoolConfig
  */
  public constructor(scope: Construct, id: string, config: PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_pool',
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
    this._availableUnit = config.availableUnit;
    this._capacityUnit = config.capacityUnit;
    this._features.internalValue = config.features;
    this._name = config.name;
    this._refresh.internalValue = config.refresh;
    this._source.internalValue = config.source;
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

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getNumberAttribute('available');
  }

  // available_unit - computed: false, optional: true, required: false
  private _availableUnit?: string; 
  public get availableUnit() {
    return this.getStringAttribute('available_unit');
  }
  public set availableUnit(value: string) {
    this._availableUnit = value;
  }
  public resetAvailableUnit() {
    this._availableUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableUnitInput() {
    return this._availableUnit;
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
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

  // features - computed: false, optional: true, required: false
  private _features = new PoolFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: PoolFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // refresh - computed: false, optional: true, required: false
  private _refresh = new PoolRefreshOutputReference(this, "refresh");
  public get refresh() {
    return this._refresh;
  }
  public putRefresh(value: PoolRefresh) {
    this._refresh.internalValue = value;
  }
  public resetRefresh() {
    this._refresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new PoolSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: PoolSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new PoolTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PoolTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_unit: cdktf.stringToTerraform(this._allocationUnit),
      available_unit: cdktf.stringToTerraform(this._availableUnit),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      features: poolFeaturesToTerraform(this._features.internalValue),
      name: cdktf.stringToTerraform(this._name),
      refresh: poolRefreshToTerraform(this._refresh.internalValue),
      source: poolSourceToTerraform(this._source.internalValue),
      target: poolTargetToTerraform(this._target.internalValue),
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
      available_unit: {
        value: cdktf.stringToHclTerraform(this._availableUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_unit: {
        value: cdktf.stringToHclTerraform(this._capacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: poolFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PoolFeatures",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: poolRefreshToHclTerraform(this._refresh.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PoolRefresh",
      },
      source: {
        value: poolSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PoolSource",
      },
      target: {
        value: poolTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PoolTarget",
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
