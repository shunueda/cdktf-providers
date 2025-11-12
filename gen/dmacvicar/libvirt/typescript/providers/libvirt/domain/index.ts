// https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the domain should be started automatically when the host boots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#autostart Domain#autostart}
  */
  readonly autostart?: boolean | cdktf.IResolvable;
  /**
  * Bootloader path for paravirtualized guests (Xen).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#bootloader Domain#bootloader}
  */
  readonly bootloader?: string;
  /**
  * Arguments to pass to bootloader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#bootloader_args Domain#bootloader_args}
  */
  readonly bootloaderArgs?: string;
  /**
  * Clock configuration for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#clock Domain#clock}
  */
  readonly clock?: DomainClock;
  /**
  * CPU configuration for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#cpu Domain#cpu}
  */
  readonly cpu?: DomainCpu;
  /**
  * 
  * Domain start flags corresponding to virDomainCreateFlags. Only used when running=true.
  * 
  * See [libvirt domain documentation](https://libvirt.org/html/libvirt-libvirt-domain.html#virDomainCreateFlags).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#create Domain#create}
  */
  readonly create?: DomainCreate;
  /**
  * Actual memory allocation at boot time. If not set, defaults to memory value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#current_memory Domain#current_memory}
  */
  readonly currentMemory?: number;
  /**
  * Human-readable description of the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#description Domain#description}
  */
  readonly description?: string;
  /**
  * Domain shutdown behavior. Controls how the domain is stopped when running changes from true to false or when the resource is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#destroy Domain#destroy}
  */
  readonly destroy?: DomainDestroy;
  /**
  * Devices attached to the domain (disks, network interfaces, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#devices Domain#devices}
  */
  readonly devices?: DomainDevices;
  /**
  * Hypervisor features to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#features Domain#features}
  */
  readonly features?: DomainFeatures;
  /**
  * Hardware UUID for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#hwuuid Domain#hwuuid}
  */
  readonly hwuuid?: string;
  /**
  * Number of I/O threads for virtio disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#iothreads Domain#iothreads}
  */
  readonly iothreads?: number;
  /**
  * Maximum memory for hotplug. Must be >= memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#max_memory Domain#max_memory}
  */
  readonly maxMemory?: number;
  /**
  * Number of slots for memory hotplug. Required when max_memory is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#max_memory_slots Domain#max_memory_slots}
  */
  readonly maxMemorySlots?: number;
  /**
  * Maximum memory allocation in the specified unit. Default unit is KiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#memory Domain#memory}
  */
  readonly memory: number;
  /**
  * Custom metadata XML for the domain.
  * 
  * This allows applications to store custom information within the domain's XML configuration.
  * 
  * **Requirements:**
  * - Must be valid XML
  * - Must use custom namespaces (e.g., `xmlns:app1="http://app1.org/app1/"`)
  * - Only one top-level element per namespace
  * 
  * **Example:**
  * ```xml
  * <app1:foo xmlns:app1="http://app1.org/app1/">
  *   <app1:bar>some content</app1:bar>
  * </app1:foo>
  * ```
  * 
  * See [libvirt metadata documentation](https://libvirt.org/formatdomain.html#metadata) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#metadata Domain#metadata}
  */
  readonly metadata?: string;
  /**
  * Domain name. Must be unique on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Action to take when guest crashes (destroy, restart, preserve, rename-restart, coredump-destroy, coredump-restart).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#on_crash Domain#on_crash}
  */
  readonly onCrash?: string;
  /**
  * Action to take when guest requests poweroff (destroy, restart, preserve, rename-restart).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#on_poweroff Domain#on_poweroff}
  */
  readonly onPoweroff?: string;
  /**
  * Action to take when guest requests reboot (destroy, restart, preserve, rename-restart).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#on_reboot Domain#on_reboot}
  */
  readonly onReboot?: string;
  /**
  * Operating system configuration for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#os Domain#os}
  */
  readonly os?: DomainOs;
  /**
  * Power management configuration for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#pm Domain#pm}
  */
  readonly pm?: DomainPm;
  /**
  * Whether the domain should be running. If true, the domain will be started after creation. If false or unset, the domain will only be defined but not started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#running Domain#running}
  */
  readonly running?: boolean | cdktf.IResolvable;
  /**
  * Short description title for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#title Domain#title}
  */
  readonly title?: string;
  /**
  * Domain type (e.g., 'kvm', 'qemu').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#type Domain#type}
  */
  readonly type?: string;
  /**
  * Memory unit (KiB, MiB, GiB, TiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#unit Domain#unit}
  */
  readonly unit?: string;
  /**
  * Domain UUID. If not specified, one will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#uuid Domain#uuid}
  */
  readonly uuid?: string;
  /**
  * Number of virtual CPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#vcpu Domain#vcpu}
  */
  readonly vcpu: number;
}
export interface DomainClockTimerCatchup {
  /**
  * Limit in nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#limit Domain#limit}
  */
  readonly limit?: number;
  /**
  * Slew in nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#slew Domain#slew}
  */
  readonly slew?: number;
  /**
  * Threshold in nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#threshold Domain#threshold}
  */
  readonly threshold?: number;
}

export function domainClockTimerCatchupToTerraform(struct?: DomainClockTimerCatchup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    slew: cdktf.numberToTerraform(struct!.slew),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function domainClockTimerCatchupToHclTerraform(struct?: DomainClockTimerCatchup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slew: {
      value: cdktf.numberToHclTerraform(struct!.slew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainClockTimerCatchupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainClockTimerCatchup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._slew !== undefined) {
      hasAnyValues = true;
      internalValueResult.slew = this._slew;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainClockTimerCatchup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._slew = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._slew = value.slew;
      this._threshold = value.threshold;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // slew - computed: false, optional: true, required: false
  private _slew?: number; 
  public get slew() {
    return this.getNumberAttribute('slew');
  }
  public set slew(value: number) {
    this._slew = value;
  }
  public resetSlew() {
    this._slew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slewInput() {
    return this._slew;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface DomainClockTimer {
  /**
  * Timer catchup configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#catchup Domain#catchup}
  */
  readonly catchup?: DomainClockTimerCatchup;
  /**
  * Timer frequency in Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#frequency Domain#frequency}
  */
  readonly frequency?: number;
  /**
  * Timer mode (auto, native, emulate, paravirt, smpsafe).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#mode Domain#mode}
  */
  readonly mode?: string;
  /**
  * Timer name (platform, pit, rtc, hpet, tsc, kvmclock, hypervclock, armvtimer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Whether timer is present (yes, no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#present Domain#present}
  */
  readonly present?: string;
  /**
  * Tick policy (delay, catchup, merge, discard).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#tickpolicy Domain#tickpolicy}
  */
  readonly tickpolicy?: string;
  /**
  * Track source (guest, wall).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#track Domain#track}
  */
  readonly track?: string;
}

export function domainClockTimerToTerraform(struct?: DomainClockTimer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catchup: domainClockTimerCatchupToTerraform(struct!.catchup),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    present: cdktf.stringToTerraform(struct!.present),
    tickpolicy: cdktf.stringToTerraform(struct!.tickpolicy),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function domainClockTimerToHclTerraform(struct?: DomainClockTimer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catchup: {
      value: domainClockTimerCatchupToHclTerraform(struct!.catchup),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainClockTimerCatchup",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    present: {
      value: cdktf.stringToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tickpolicy: {
      value: cdktf.stringToHclTerraform(struct!.tickpolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainClockTimerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainClockTimer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catchup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catchup = this._catchup?.internalValue;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._tickpolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickpolicy = this._tickpolicy;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainClockTimer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catchup.internalValue = undefined;
      this._frequency = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._present = undefined;
      this._tickpolicy = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catchup.internalValue = value.catchup;
      this._frequency = value.frequency;
      this._mode = value.mode;
      this._name = value.name;
      this._present = value.present;
      this._tickpolicy = value.tickpolicy;
      this._track = value.track;
    }
  }

  // catchup - computed: false, optional: true, required: false
  private _catchup = new DomainClockTimerCatchupOutputReference(this, "catchup");
  public get catchup() {
    return this._catchup;
  }
  public putCatchup(value: DomainClockTimerCatchup) {
    this._catchup.internalValue = value;
  }
  public resetCatchup() {
    this._catchup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchupInput() {
    return this._catchup.internalValue;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // present - computed: false, optional: true, required: false
  private _present?: string; 
  public get present() {
    return this.getStringAttribute('present');
  }
  public set present(value: string) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
  }

  // tickpolicy - computed: false, optional: true, required: false
  private _tickpolicy?: string; 
  public get tickpolicy() {
    return this.getStringAttribute('tickpolicy');
  }
  public set tickpolicy(value: string) {
    this._tickpolicy = value;
  }
  public resetTickpolicy() {
    this._tickpolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickpolicyInput() {
    return this._tickpolicy;
  }

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class DomainClockTimerList extends cdktf.ComplexList {
  public internalValue? : DomainClockTimer[] | cdktf.IResolvable

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
  public get(index: number): DomainClockTimerOutputReference {
    return new DomainClockTimerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainClock {
  /**
  * Clock adjustment in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#adjustment Domain#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Clock basis (utc, localtime).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#basis Domain#basis}
  */
  readonly basis?: string;
  /**
  * Clock offset (utc, localtime, timezone, variable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#offset Domain#offset}
  */
  readonly offset?: string;
  /**
  * Timer devices for the guest clock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#timer Domain#timer}
  */
  readonly timer?: DomainClockTimer[] | cdktf.IResolvable;
  /**
  * Timezone name when offset is 'timezone'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#timezone Domain#timezone}
  */
  readonly timezone?: string;
}

export function domainClockToTerraform(struct?: DomainClock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    basis: cdktf.stringToTerraform(struct!.basis),
    offset: cdktf.stringToTerraform(struct!.offset),
    timer: cdktf.listMapper(domainClockTimerToTerraform, false)(struct!.timer),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function domainClockToHclTerraform(struct?: DomainClock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basis: {
      value: cdktf.stringToHclTerraform(struct!.basis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer: {
      value: cdktf.listMapperHcl(domainClockTimerToHclTerraform, false)(struct!.timer),
      isBlock: true,
      type: "list",
      storageClassType: "DomainClockTimerList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainClockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainClock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._basis !== undefined) {
      hasAnyValues = true;
      internalValueResult.basis = this._basis;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._timer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer?.internalValue;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainClock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adjustment = undefined;
      this._basis = undefined;
      this._offset = undefined;
      this._timer.internalValue = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adjustment = value.adjustment;
      this._basis = value.basis;
      this._offset = value.offset;
      this._timer.internalValue = value.timer;
      this._timezone = value.timezone;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // basis - computed: false, optional: true, required: false
  private _basis?: string; 
  public get basis() {
    return this.getStringAttribute('basis');
  }
  public set basis(value: string) {
    this._basis = value;
  }
  public resetBasis() {
    this._basis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basisInput() {
    return this._basis;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // timer - computed: false, optional: true, required: false
  private _timer = new DomainClockTimerList(this, "timer", false);
  public get timer() {
    return this._timer;
  }
  public putTimer(value: DomainClockTimer[] | cdktf.IResolvable) {
    this._timer.internalValue = value;
  }
  public resetTimer() {
    this._timer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer.internalValue;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface DomainCpu {
  /**
  * CPU check policy (none, partial, full).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#check Domain#check}
  */
  readonly check?: string;
  /**
  * How to handle deprecated features (allow, forbid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#deprecated_features Domain#deprecated_features}
  */
  readonly deprecatedFeatures?: string;
  /**
  * CPU match policy (exact, minimum, strict).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#match Domain#match}
  */
  readonly match?: string;
  /**
  * Whether the CPU is migratable (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#migratable Domain#migratable}
  */
  readonly migratable?: string;
  /**
  * CPU mode (host-model, host-passthrough, custom).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#mode Domain#mode}
  */
  readonly mode?: string;
  /**
  * CPU model name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#model Domain#model}
  */
  readonly model?: string;
  /**
  * CPU vendor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#vendor Domain#vendor}
  */
  readonly vendor?: string;
}

export function domainCpuToTerraform(struct?: DomainCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.stringToTerraform(struct!.check),
    deprecated_features: cdktf.stringToTerraform(struct!.deprecatedFeatures),
    match: cdktf.stringToTerraform(struct!.match),
    migratable: cdktf.stringToTerraform(struct!.migratable),
    mode: cdktf.stringToTerraform(struct!.mode),
    model: cdktf.stringToTerraform(struct!.model),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function domainCpuToHclTerraform(struct?: DomainCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.stringToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deprecated_features: {
      value: cdktf.stringToHclTerraform(struct!.deprecatedFeatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migratable: {
      value: cdktf.stringToHclTerraform(struct!.migratable),
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
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._deprecatedFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecatedFeatures = this._deprecatedFeatures;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._migratable !== undefined) {
      hasAnyValues = true;
      internalValueResult.migratable = this._migratable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._deprecatedFeatures = undefined;
      this._match = undefined;
      this._migratable = undefined;
      this._mode = undefined;
      this._model = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._deprecatedFeatures = value.deprecatedFeatures;
      this._match = value.match;
      this._migratable = value.migratable;
      this._mode = value.mode;
      this._model = value.model;
      this._vendor = value.vendor;
    }
  }

  // check - computed: false, optional: true, required: false
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // deprecated_features - computed: false, optional: true, required: false
  private _deprecatedFeatures?: string; 
  public get deprecatedFeatures() {
    return this.getStringAttribute('deprecated_features');
  }
  public set deprecatedFeatures(value: string) {
    this._deprecatedFeatures = value;
  }
  public resetDeprecatedFeatures() {
    this._deprecatedFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedFeaturesInput() {
    return this._deprecatedFeatures;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // migratable - computed: false, optional: true, required: false
  private _migratable?: string; 
  public get migratable() {
    return this.getStringAttribute('migratable');
  }
  public set migratable(value: string) {
    this._migratable = value;
  }
  public resetMigratable() {
    this._migratable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migratableInput() {
    return this._migratable;
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

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}
export interface DomainCreate {
  /**
  * Automatically destroy domain when connection closes (VIR_DOMAIN_START_AUTODESTROY).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#autodestroy Domain#autodestroy}
  */
  readonly autodestroy?: boolean | cdktf.IResolvable;
  /**
  * Avoid filesystem cache pollution (VIR_DOMAIN_START_BYPASS_CACHE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#bypass_cache Domain#bypass_cache}
  */
  readonly bypassCache?: boolean | cdktf.IResolvable;
  /**
  * Boot domain, discarding any managed save state (VIR_DOMAIN_START_FORCE_BOOT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#force_boot Domain#force_boot}
  */
  readonly forceBoot?: boolean | cdktf.IResolvable;
  /**
  * Launch domain in paused state (VIR_DOMAIN_START_PAUSED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#paused Domain#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Re-initialize NVRAM from template (VIR_DOMAIN_START_RESET_NVRAM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#reset_nvram Domain#reset_nvram}
  */
  readonly resetNvram?: boolean | cdktf.IResolvable;
  /**
  * Validate XML document against schema (VIR_DOMAIN_START_VALIDATE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#validate Domain#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
}

export function domainCreateToTerraform(struct?: DomainCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodestroy: cdktf.booleanToTerraform(struct!.autodestroy),
    bypass_cache: cdktf.booleanToTerraform(struct!.bypassCache),
    force_boot: cdktf.booleanToTerraform(struct!.forceBoot),
    paused: cdktf.booleanToTerraform(struct!.paused),
    reset_nvram: cdktf.booleanToTerraform(struct!.resetNvram),
    validate: cdktf.booleanToTerraform(struct!.validate),
  }
}


export function domainCreateToHclTerraform(struct?: DomainCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autodestroy: {
      value: cdktf.booleanToHclTerraform(struct!.autodestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_cache: {
      value: cdktf.booleanToHclTerraform(struct!.bypassCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_boot: {
      value: cdktf.booleanToHclTerraform(struct!.forceBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset_nvram: {
      value: cdktf.booleanToHclTerraform(struct!.resetNvram),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate: {
      value: cdktf.booleanToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodestroy = this._autodestroy;
    }
    if (this._bypassCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCache = this._bypassCache;
    }
    if (this._forceBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceBoot = this._forceBoot;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._resetNvram !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetNvram = this._resetNvram;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autodestroy = undefined;
      this._bypassCache = undefined;
      this._forceBoot = undefined;
      this._paused = undefined;
      this._resetNvram = undefined;
      this._validate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autodestroy = value.autodestroy;
      this._bypassCache = value.bypassCache;
      this._forceBoot = value.forceBoot;
      this._paused = value.paused;
      this._resetNvram = value.resetNvram;
      this._validate = value.validate;
    }
  }

  // autodestroy - computed: false, optional: true, required: false
  private _autodestroy?: boolean | cdktf.IResolvable; 
  public get autodestroy() {
    return this.getBooleanAttribute('autodestroy');
  }
  public set autodestroy(value: boolean | cdktf.IResolvable) {
    this._autodestroy = value;
  }
  public resetAutodestroy() {
    this._autodestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodestroyInput() {
    return this._autodestroy;
  }

  // bypass_cache - computed: false, optional: true, required: false
  private _bypassCache?: boolean | cdktf.IResolvable; 
  public get bypassCache() {
    return this.getBooleanAttribute('bypass_cache');
  }
  public set bypassCache(value: boolean | cdktf.IResolvable) {
    this._bypassCache = value;
  }
  public resetBypassCache() {
    this._bypassCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCacheInput() {
    return this._bypassCache;
  }

  // force_boot - computed: false, optional: true, required: false
  private _forceBoot?: boolean | cdktf.IResolvable; 
  public get forceBoot() {
    return this.getBooleanAttribute('force_boot');
  }
  public set forceBoot(value: boolean | cdktf.IResolvable) {
    this._forceBoot = value;
  }
  public resetForceBoot() {
    this._forceBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBootInput() {
    return this._forceBoot;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // reset_nvram - computed: false, optional: true, required: false
  private _resetNvram?: boolean | cdktf.IResolvable; 
  public get resetNvram() {
    return this.getBooleanAttribute('reset_nvram');
  }
  public set resetNvram(value: boolean | cdktf.IResolvable) {
    this._resetNvram = value;
  }
  public resetResetNvram() {
    this._resetNvram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetNvramInput() {
    return this._resetNvram;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}
export interface DomainDestroy {
  /**
  * Attempt graceful shutdown before forcing. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#graceful Domain#graceful}
  */
  readonly graceful?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds to wait for graceful shutdown before forcing. Defaults to 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#timeout Domain#timeout}
  */
  readonly timeout?: number;
}

export function domainDestroyToTerraform(struct?: DomainDestroy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graceful: cdktf.booleanToTerraform(struct!.graceful),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function domainDestroyToHclTerraform(struct?: DomainDestroy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graceful: {
      value: cdktf.booleanToHclTerraform(struct!.graceful),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDestroyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDestroy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceful = this._graceful;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDestroy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graceful = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graceful = value.graceful;
      this._timeout = value.timeout;
    }
  }

  // graceful - computed: false, optional: true, required: false
  private _graceful?: boolean | cdktf.IResolvable; 
  public get graceful() {
    return this.getBooleanAttribute('graceful');
  }
  public set graceful(value: boolean | cdktf.IResolvable) {
    this._graceful = value;
  }
  public resetGraceful() {
    this._graceful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulInput() {
    return this._graceful;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DomainDevicesConsoles {
  /**
  * Source path for file or unix socket types. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#source_path Domain#source_path}
  */
  readonly sourcePath?: string;
  /**
  * Target port number. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#target_port Domain#target_port}
  */
  readonly targetPort?: number;
  /**
  * Target type (serial, virtio, xen, etc.). Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#target_type Domain#target_type}
  */
  readonly targetType?: string;
  /**
  * Console source type (pty, file, unix, tcp, etc.). Optional, defaults to pty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#type Domain#type}
  */
  readonly type?: string;
}

export function domainDevicesConsolesToTerraform(struct?: DomainDevicesConsoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function domainDevicesConsolesToHclTerraform(struct?: DomainDevicesConsoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_path: {
      value: cdktf.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
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

export class DomainDevicesConsolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDevicesConsoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesConsoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourcePath = undefined;
      this._targetPort = undefined;
      this._targetType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourcePath = value.sourcePath;
      this._targetPort = value.targetPort;
      this._targetType = value.targetType;
      this._type = value.type;
    }
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
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
}

export class DomainDevicesConsolesList extends cdktf.ComplexList {
  public internalValue? : DomainDevicesConsoles[] | cdktf.IResolvable

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
  public get(index: number): DomainDevicesConsolesOutputReference {
    return new DomainDevicesConsolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainDevicesDisksSource {
  /**
  * Block device path (e.g., /dev/sdb). Mutually exclusive with pool/volume and file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#block Domain#block}
  */
  readonly block?: string;
  /**
  * Path to disk image file. Mutually exclusive with pool/volume and block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#file Domain#file}
  */
  readonly file?: string;
  /**
  * Storage pool name for volume-based disks. Use with 'volume'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#pool Domain#pool}
  */
  readonly pool?: string;
  /**
  * Volume name in the storage pool. Use with 'pool'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#volume Domain#volume}
  */
  readonly volume?: string;
}

export function domainDevicesDisksSourceToTerraform(struct?: DomainDevicesDisksSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.stringToTerraform(struct!.block),
    file: cdktf.stringToTerraform(struct!.file),
    pool: cdktf.stringToTerraform(struct!.pool),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function domainDevicesDisksSourceToHclTerraform(struct?: DomainDevicesDisksSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.stringToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
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

export class DomainDevicesDisksSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesDisksSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesDisksSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block = undefined;
      this._file = undefined;
      this._pool = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block = value.block;
      this._file = value.file;
      this._pool = value.pool;
      this._volume = value.volume;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // file - computed: false, optional: true, required: false
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

  // volume - computed: false, optional: true, required: false
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
export interface DomainDevicesDisksTarget {
  /**
  * Bus type (virtio, scsi, ide, sata, usb).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#bus Domain#bus}
  */
  readonly bus?: string;
  /**
  * Target device name (e.g., vda, sda, hda).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#dev Domain#dev}
  */
  readonly dev: string;
}

export function domainDevicesDisksTargetToTerraform(struct?: DomainDevicesDisksTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus: cdktf.stringToTerraform(struct!.bus),
    dev: cdktf.stringToTerraform(struct!.dev),
  }
}


export function domainDevicesDisksTargetToHclTerraform(struct?: DomainDevicesDisksTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus: {
      value: cdktf.stringToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev: {
      value: cdktf.stringToHclTerraform(struct!.dev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesDisksTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesDisksTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._dev !== undefined) {
      hasAnyValues = true;
      internalValueResult.dev = this._dev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesDisksTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bus = undefined;
      this._dev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bus = value.bus;
      this._dev = value.dev;
    }
  }

  // bus - computed: false, optional: true, required: false
  private _bus?: string; 
  public get bus() {
    return this.getStringAttribute('bus');
  }
  public set bus(value: string) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // dev - computed: false, optional: false, required: true
  private _dev?: string; 
  public get dev() {
    return this.getStringAttribute('dev');
  }
  public set dev(value: string) {
    this._dev = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
  }
}
export interface DomainDevicesDisks {
  /**
  * Device type (disk, cdrom, floppy, lun).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#device Domain#device}
  */
  readonly device?: string;
  /**
  * Disk source configuration. Specify one of: pool+volume for libvirt volumes, file for file paths, or block for block devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#source Domain#source}
  */
  readonly source?: DomainDevicesDisksSource;
  /**
  * Guest device target mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#target Domain#target}
  */
  readonly target: DomainDevicesDisksTarget;
  /**
  * World Wide Name identifier for the disk (typically for SCSI disks). If not specified for SCSI disks, one will be generated. Format: 16 hex digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#wwn Domain#wwn}
  */
  readonly wwn?: string;
}

export function domainDevicesDisksToTerraform(struct?: DomainDevicesDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    source: domainDevicesDisksSourceToTerraform(struct!.source),
    target: domainDevicesDisksTargetToTerraform(struct!.target),
    wwn: cdktf.stringToTerraform(struct!.wwn),
  }
}


export function domainDevicesDisksToHclTerraform(struct?: DomainDevicesDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: domainDevicesDisksSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesDisksSource",
    },
    target: {
      value: domainDevicesDisksTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesDisksTarget",
    },
    wwn: {
      value: cdktf.stringToHclTerraform(struct!.wwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDevicesDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._wwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwn = this._wwn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._source.internalValue = undefined;
      this._target.internalValue = undefined;
      this._wwn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._source.internalValue = value.source;
      this._target.internalValue = value.target;
      this._wwn = value.wwn;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DomainDevicesDisksSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DomainDevicesDisksSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DomainDevicesDisksTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DomainDevicesDisksTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // wwn - computed: true, optional: true, required: false
  private _wwn?: string; 
  public get wwn() {
    return this.getStringAttribute('wwn');
  }
  public set wwn(value: string) {
    this._wwn = value;
  }
  public resetWwn() {
    this._wwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnInput() {
    return this._wwn;
  }
}

export class DomainDevicesDisksList extends cdktf.ComplexList {
  public internalValue? : DomainDevicesDisks[] | cdktf.IResolvable

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
  public get(index: number): DomainDevicesDisksOutputReference {
    return new DomainDevicesDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainDevicesFilesystems {
  /**
  * Access mode (mapped, passthrough, squash). Defaults to mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#accessmode Domain#accessmode}
  */
  readonly accessmode?: string;
  /**
  * Whether the filesystem should be mounted read-only in the guest. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#readonly Domain#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Host directory path to share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#source Domain#source}
  */
  readonly source: string;
  /**
  * Mount tag visible in the guest (used to mount the filesystem).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#target Domain#target}
  */
  readonly target: string;
}

export function domainDevicesFilesystemsToTerraform(struct?: DomainDevicesFilesystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessmode: cdktf.stringToTerraform(struct!.accessmode),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function domainDevicesFilesystemsToHclTerraform(struct?: DomainDevicesFilesystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessmode: {
      value: cdktf.stringToHclTerraform(struct!.accessmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesFilesystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDevicesFilesystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessmode = this._accessmode;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesFilesystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessmode = undefined;
      this._readonly = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessmode = value.accessmode;
      this._readonly = value.readonly;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // accessmode - computed: false, optional: true, required: false
  private _accessmode?: string; 
  public get accessmode() {
    return this.getStringAttribute('accessmode');
  }
  public set accessmode(value: string) {
    this._accessmode = value;
  }
  public resetAccessmode() {
    this._accessmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessmodeInput() {
    return this._accessmode;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class DomainDevicesFilesystemsList extends cdktf.ComplexList {
  public internalValue? : DomainDevicesFilesystems[] | cdktf.IResolvable

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
  public get(index: number): DomainDevicesFilesystemsOutputReference {
    return new DomainDevicesFilesystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainDevicesGraphicsSpice {
  /**
  * Auto-allocate port (yes/no). Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#autoport Domain#autoport}
  */
  readonly autoport?: string;
  /**
  * Listen address for Spice server. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#listen Domain#listen}
  */
  readonly listen?: string;
  /**
  * TCP port for Spice server. Use -1 for auto. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#port Domain#port}
  */
  readonly port?: number;
  /**
  * TLS port for Spice server. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#tlsport Domain#tlsport}
  */
  readonly tlsport?: number;
}

export function domainDevicesGraphicsSpiceToTerraform(struct?: DomainDevicesGraphicsSpice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoport: cdktf.stringToTerraform(struct!.autoport),
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    tlsport: cdktf.numberToTerraform(struct!.tlsport),
  }
}


export function domainDevicesGraphicsSpiceToHclTerraform(struct?: DomainDevicesGraphicsSpice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoport: {
      value: cdktf.stringToHclTerraform(struct!.autoport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsport: {
      value: cdktf.numberToHclTerraform(struct!.tlsport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesGraphicsSpiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesGraphicsSpice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoport !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoport = this._autoport;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tlsport !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsport = this._tlsport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesGraphicsSpice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoport = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._tlsport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoport = value.autoport;
      this._listen = value.listen;
      this._port = value.port;
      this._tlsport = value.tlsport;
    }
  }

  // autoport - computed: false, optional: true, required: false
  private _autoport?: string; 
  public get autoport() {
    return this.getStringAttribute('autoport');
  }
  public set autoport(value: string) {
    this._autoport = value;
  }
  public resetAutoport() {
    this._autoport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoportInput() {
    return this._autoport;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tlsport - computed: false, optional: true, required: false
  private _tlsport?: number; 
  public get tlsport() {
    return this.getNumberAttribute('tlsport');
  }
  public set tlsport(value: number) {
    this._tlsport = value;
  }
  public resetTlsport() {
    this._tlsport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsportInput() {
    return this._tlsport;
  }
}
export interface DomainDevicesGraphicsVnc {
  /**
  * Auto-allocate port (yes/no). Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#autoport Domain#autoport}
  */
  readonly autoport?: string;
  /**
  * Listen address for VNC server. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#listen Domain#listen}
  */
  readonly listen?: string;
  /**
  * TCP port for VNC server. Use -1 for auto. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#port Domain#port}
  */
  readonly port?: number;
  /**
  * UNIX socket path for VNC server. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#socket Domain#socket}
  */
  readonly socket?: string;
  /**
  * WebSocket port for VNC. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#websocket Domain#websocket}
  */
  readonly websocket?: number;
}

export function domainDevicesGraphicsVncToTerraform(struct?: DomainDevicesGraphicsVnc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoport: cdktf.stringToTerraform(struct!.autoport),
    listen: cdktf.stringToTerraform(struct!.listen),
    port: cdktf.numberToTerraform(struct!.port),
    socket: cdktf.stringToTerraform(struct!.socket),
    websocket: cdktf.numberToTerraform(struct!.websocket),
  }
}


export function domainDevicesGraphicsVncToHclTerraform(struct?: DomainDevicesGraphicsVnc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoport: {
      value: cdktf.stringToHclTerraform(struct!.autoport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen: {
      value: cdktf.stringToHclTerraform(struct!.listen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket: {
      value: cdktf.stringToHclTerraform(struct!.socket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    websocket: {
      value: cdktf.numberToHclTerraform(struct!.websocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesGraphicsVncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesGraphicsVnc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoport !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoport = this._autoport;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._socket !== undefined) {
      hasAnyValues = true;
      internalValueResult.socket = this._socket;
    }
    if (this._websocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocket = this._websocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesGraphicsVnc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoport = undefined;
      this._listen = undefined;
      this._port = undefined;
      this._socket = undefined;
      this._websocket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoport = value.autoport;
      this._listen = value.listen;
      this._port = value.port;
      this._socket = value.socket;
      this._websocket = value.websocket;
    }
  }

  // autoport - computed: false, optional: true, required: false
  private _autoport?: string; 
  public get autoport() {
    return this.getStringAttribute('autoport');
  }
  public set autoport(value: string) {
    this._autoport = value;
  }
  public resetAutoport() {
    this._autoport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoportInput() {
    return this._autoport;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // socket - computed: false, optional: true, required: false
  private _socket?: string; 
  public get socket() {
    return this.getStringAttribute('socket');
  }
  public set socket(value: string) {
    this._socket = value;
  }
  public resetSocket() {
    this._socket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketInput() {
    return this._socket;
  }

  // websocket - computed: false, optional: true, required: false
  private _websocket?: number; 
  public get websocket() {
    return this.getNumberAttribute('websocket');
  }
  public set websocket(value: number) {
    this._websocket = value;
  }
  public resetWebsocket() {
    this._websocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket;
  }
}
export interface DomainDevicesGraphics {
  /**
  * Spice graphics configuration. Mutually exclusive with vnc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#spice Domain#spice}
  */
  readonly spice?: DomainDevicesGraphicsSpice;
  /**
  * VNC graphics configuration. Mutually exclusive with spice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#vnc Domain#vnc}
  */
  readonly vnc?: DomainDevicesGraphicsVnc;
}

export function domainDevicesGraphicsToTerraform(struct?: DomainDevicesGraphics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spice: domainDevicesGraphicsSpiceToTerraform(struct!.spice),
    vnc: domainDevicesGraphicsVncToTerraform(struct!.vnc),
  }
}


export function domainDevicesGraphicsToHclTerraform(struct?: DomainDevicesGraphics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spice: {
      value: domainDevicesGraphicsSpiceToHclTerraform(struct!.spice),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesGraphicsSpice",
    },
    vnc: {
      value: domainDevicesGraphicsVncToHclTerraform(struct!.vnc),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesGraphicsVnc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesGraphicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesGraphics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spice = this._spice?.internalValue;
    }
    if (this._vnc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnc = this._vnc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesGraphics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spice.internalValue = undefined;
      this._vnc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spice.internalValue = value.spice;
      this._vnc.internalValue = value.vnc;
    }
  }

  // spice - computed: false, optional: true, required: false
  private _spice = new DomainDevicesGraphicsSpiceOutputReference(this, "spice");
  public get spice() {
    return this._spice;
  }
  public putSpice(value: DomainDevicesGraphicsSpice) {
    this._spice.internalValue = value;
  }
  public resetSpice() {
    this._spice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiceInput() {
    return this._spice.internalValue;
  }

  // vnc - computed: false, optional: true, required: false
  private _vnc = new DomainDevicesGraphicsVncOutputReference(this, "vnc");
  public get vnc() {
    return this._vnc;
  }
  public putVnc(value: DomainDevicesGraphicsVnc) {
    this._vnc.internalValue = value;
  }
  public resetVnc() {
    this._vnc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vncInput() {
    return this._vnc.internalValue;
  }
}
export interface DomainDevicesInterfacesSource {
  /**
  * Bridge name (for type=bridge).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#bridge Domain#bridge}
  */
  readonly bridge?: string;
  /**
  * Device name (for type=user or type=direct).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#dev Domain#dev}
  */
  readonly dev?: string;
  /**
  * Direct mode (for type=direct). Options: bridge, vepa, private, passthrough.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#mode Domain#mode}
  */
  readonly mode?: string;
  /**
  * Network name (for type=network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#network Domain#network}
  */
  readonly network?: string;
  /**
  * Port group name (for type=network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#portgroup Domain#portgroup}
  */
  readonly portgroup?: string;
}

export function domainDevicesInterfacesSourceToTerraform(struct?: DomainDevicesInterfacesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    dev: cdktf.stringToTerraform(struct!.dev),
    mode: cdktf.stringToTerraform(struct!.mode),
    network: cdktf.stringToTerraform(struct!.network),
    portgroup: cdktf.stringToTerraform(struct!.portgroup),
  }
}


export function domainDevicesInterfacesSourceToHclTerraform(struct?: DomainDevicesInterfacesSource | cdktf.IResolvable): any {
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
    dev: {
      value: cdktf.stringToHclTerraform(struct!.dev),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portgroup: {
      value: cdktf.stringToHclTerraform(struct!.portgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesInterfacesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesInterfacesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._dev !== undefined) {
      hasAnyValues = true;
      internalValueResult.dev = this._dev;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._portgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.portgroup = this._portgroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesInterfacesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._dev = undefined;
      this._mode = undefined;
      this._network = undefined;
      this._portgroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._dev = value.dev;
      this._mode = value.mode;
      this._network = value.network;
      this._portgroup = value.portgroup;
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

  // dev - computed: false, optional: true, required: false
  private _dev?: string; 
  public get dev() {
    return this.getStringAttribute('dev');
  }
  public set dev(value: string) {
    this._dev = value;
  }
  public resetDev() {
    this._dev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // portgroup - computed: false, optional: true, required: false
  private _portgroup?: string; 
  public get portgroup() {
    return this.getStringAttribute('portgroup');
  }
  public set portgroup(value: string) {
    this._portgroup = value;
  }
  public resetPortgroup() {
    this._portgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portgroupInput() {
    return this._portgroup;
  }
}
export interface DomainDevicesInterfacesWaitForIp {
  /**
  * Source to query for IP addresses: 'lease' (DHCP), 'agent' (qemu-guest-agent), or 'any' (try both). Default: 'any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#source Domain#source}
  */
  readonly source?: string;
  /**
  * Maximum time to wait for IP address in seconds. Default: 300 (5 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#timeout Domain#timeout}
  */
  readonly timeout?: number;
}

export function domainDevicesInterfacesWaitForIpToTerraform(struct?: DomainDevicesInterfacesWaitForIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function domainDevicesInterfacesWaitForIpToHclTerraform(struct?: DomainDevicesInterfacesWaitForIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesInterfacesWaitForIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesInterfacesWaitForIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesInterfacesWaitForIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._timeout = value.timeout;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DomainDevicesInterfaces {
  /**
  * MAC address for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#mac Domain#mac}
  */
  readonly mac?: string;
  /**
  * Device model (virtio, e1000, rtl8139, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#model Domain#model}
  */
  readonly model?: string;
  /**
  * Interface source configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#source Domain#source}
  */
  readonly source?: DomainDevicesInterfacesSource;
  /**
  * Interface type (network, bridge, user, direct, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
  /**
  * Wait for IP address during domain creation. If specified, Terraform will poll for an IP address before considering creation complete. If timeout is reached without obtaining an IP, the domain will be destroyed and creation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#wait_for_ip Domain#wait_for_ip}
  */
  readonly waitForIp?: DomainDevicesInterfacesWaitForIp;
}

export function domainDevicesInterfacesToTerraform(struct?: DomainDevicesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac: cdktf.stringToTerraform(struct!.mac),
    model: cdktf.stringToTerraform(struct!.model),
    source: domainDevicesInterfacesSourceToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    wait_for_ip: domainDevicesInterfacesWaitForIpToTerraform(struct!.waitForIp),
  }
}


export function domainDevicesInterfacesToHclTerraform(struct?: DomainDevicesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: domainDevicesInterfacesSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesInterfacesSource",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_ip: {
      value: domainDevicesInterfacesWaitForIpToHclTerraform(struct!.waitForIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesInterfacesWaitForIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDevicesInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._waitForIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForIp = this._waitForIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mac = undefined;
      this._model = undefined;
      this._source.internalValue = undefined;
      this._type = undefined;
      this._waitForIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mac = value.mac;
      this._model = value.model;
      this._source.internalValue = value.source;
      this._type = value.type;
      this._waitForIp.internalValue = value.waitForIp;
    }
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DomainDevicesInterfacesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DomainDevicesInterfacesSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
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

  // wait_for_ip - computed: false, optional: true, required: false
  private _waitForIp = new DomainDevicesInterfacesWaitForIpOutputReference(this, "wait_for_ip");
  public get waitForIp() {
    return this._waitForIp;
  }
  public putWaitForIp(value: DomainDevicesInterfacesWaitForIp) {
    this._waitForIp.internalValue = value;
  }
  public resetWaitForIp() {
    this._waitForIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForIpInput() {
    return this._waitForIp.internalValue;
  }
}

export class DomainDevicesInterfacesList extends cdktf.ComplexList {
  public internalValue? : DomainDevicesInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DomainDevicesInterfacesOutputReference {
    return new DomainDevicesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainDevicesRngs {
  /**
  * Backend random device path (e.g., /dev/random, /dev/urandom, /dev/hwrng). Defaults to /dev/urandom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#device Domain#device}
  */
  readonly device?: string;
  /**
  * RNG device model (virtio, virtio-transitional, virtio-non-transitional). Defaults to virtio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#model Domain#model}
  */
  readonly model?: string;
}

export function domainDevicesRngsToTerraform(struct?: DomainDevicesRngs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function domainDevicesRngsToHclTerraform(struct?: DomainDevicesRngs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesRngsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDevicesRngs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesRngs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._model = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._model = value.model;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}

export class DomainDevicesRngsList extends cdktf.ComplexList {
  public internalValue? : DomainDevicesRngs[] | cdktf.IResolvable

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
  public get(index: number): DomainDevicesRngsOutputReference {
    return new DomainDevicesRngsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainDevicesSerials {
  /**
  * Source path for file or unix socket types. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#source_path Domain#source_path}
  */
  readonly sourcePath?: string;
  /**
  * Target port number. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#target_port Domain#target_port}
  */
  readonly targetPort?: number;
  /**
  * Target type (isa-serial, usb-serial, pci-serial, etc.). Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#target_type Domain#target_type}
  */
  readonly targetType?: string;
  /**
  * Serial source type (pty, file, unix, tcp, etc.). Optional, defaults to pty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#type Domain#type}
  */
  readonly type?: string;
}

export function domainDevicesSerialsToTerraform(struct?: DomainDevicesSerials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function domainDevicesSerialsToHclTerraform(struct?: DomainDevicesSerials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_path: {
      value: cdktf.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
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

export class DomainDevicesSerialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDevicesSerials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesSerials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourcePath = undefined;
      this._targetPort = undefined;
      this._targetType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourcePath = value.sourcePath;
      this._targetPort = value.targetPort;
      this._targetType = value.targetType;
      this._type = value.type;
    }
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
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
}

export class DomainDevicesSerialsList extends cdktf.ComplexList {
  public internalValue? : DomainDevicesSerials[] | cdktf.IResolvable

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
  public get(index: number): DomainDevicesSerialsOutputReference {
    return new DomainDevicesSerialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainDevicesTpms {
  /**
  * Device path for passthrough backend (e.g., '/dev/tpm0'). Only used with backend_type='passthrough'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#backend_device_path Domain#backend_device_path}
  */
  readonly backendDevicePath?: string;
  /**
  * UUID of secret for encrypted state persistence. Only used with backend_type='emulator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#backend_encryption_secret Domain#backend_encryption_secret}
  */
  readonly backendEncryptionSecret?: string;
  /**
  * Whether TPM state should be persistent across VM restarts. Only used with backend_type='emulator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#backend_persistent_state Domain#backend_persistent_state}
  */
  readonly backendPersistentState?: boolean | cdktf.IResolvable;
  /**
  * TPM backend type ('passthrough', 'emulator'). Defaults to 'emulator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#backend_type Domain#backend_type}
  */
  readonly backendType?: string;
  /**
  * TPM backend version (e.g., '2.0'). Only used with backend_type='emulator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#backend_version Domain#backend_version}
  */
  readonly backendVersion?: string;
  /**
  * TPM device model (e.g., 'tpm-tis', 'tpm-crb', 'tpm-spapr').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#model Domain#model}
  */
  readonly model?: string;
}

export function domainDevicesTpmsToTerraform(struct?: DomainDevicesTpms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_device_path: cdktf.stringToTerraform(struct!.backendDevicePath),
    backend_encryption_secret: cdktf.stringToTerraform(struct!.backendEncryptionSecret),
    backend_persistent_state: cdktf.booleanToTerraform(struct!.backendPersistentState),
    backend_type: cdktf.stringToTerraform(struct!.backendType),
    backend_version: cdktf.stringToTerraform(struct!.backendVersion),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function domainDevicesTpmsToHclTerraform(struct?: DomainDevicesTpms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_device_path: {
      value: cdktf.stringToHclTerraform(struct!.backendDevicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_encryption_secret: {
      value: cdktf.stringToHclTerraform(struct!.backendEncryptionSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_persistent_state: {
      value: cdktf.booleanToHclTerraform(struct!.backendPersistentState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_type: {
      value: cdktf.stringToHclTerraform(struct!.backendType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_version: {
      value: cdktf.stringToHclTerraform(struct!.backendVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesTpmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainDevicesTpms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendDevicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDevicePath = this._backendDevicePath;
    }
    if (this._backendEncryptionSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendEncryptionSecret = this._backendEncryptionSecret;
    }
    if (this._backendPersistentState !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPersistentState = this._backendPersistentState;
    }
    if (this._backendType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendType = this._backendType;
    }
    if (this._backendVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendVersion = this._backendVersion;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevicesTpms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendDevicePath = undefined;
      this._backendEncryptionSecret = undefined;
      this._backendPersistentState = undefined;
      this._backendType = undefined;
      this._backendVersion = undefined;
      this._model = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendDevicePath = value.backendDevicePath;
      this._backendEncryptionSecret = value.backendEncryptionSecret;
      this._backendPersistentState = value.backendPersistentState;
      this._backendType = value.backendType;
      this._backendVersion = value.backendVersion;
      this._model = value.model;
    }
  }

  // backend_device_path - computed: false, optional: true, required: false
  private _backendDevicePath?: string; 
  public get backendDevicePath() {
    return this.getStringAttribute('backend_device_path');
  }
  public set backendDevicePath(value: string) {
    this._backendDevicePath = value;
  }
  public resetBackendDevicePath() {
    this._backendDevicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDevicePathInput() {
    return this._backendDevicePath;
  }

  // backend_encryption_secret - computed: false, optional: true, required: false
  private _backendEncryptionSecret?: string; 
  public get backendEncryptionSecret() {
    return this.getStringAttribute('backend_encryption_secret');
  }
  public set backendEncryptionSecret(value: string) {
    this._backendEncryptionSecret = value;
  }
  public resetBackendEncryptionSecret() {
    this._backendEncryptionSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendEncryptionSecretInput() {
    return this._backendEncryptionSecret;
  }

  // backend_persistent_state - computed: false, optional: true, required: false
  private _backendPersistentState?: boolean | cdktf.IResolvable; 
  public get backendPersistentState() {
    return this.getBooleanAttribute('backend_persistent_state');
  }
  public set backendPersistentState(value: boolean | cdktf.IResolvable) {
    this._backendPersistentState = value;
  }
  public resetBackendPersistentState() {
    this._backendPersistentState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPersistentStateInput() {
    return this._backendPersistentState;
  }

  // backend_type - computed: false, optional: true, required: false
  private _backendType?: string; 
  public get backendType() {
    return this.getStringAttribute('backend_type');
  }
  public set backendType(value: string) {
    this._backendType = value;
  }
  public resetBackendType() {
    this._backendType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTypeInput() {
    return this._backendType;
  }

  // backend_version - computed: false, optional: true, required: false
  private _backendVersion?: string; 
  public get backendVersion() {
    return this.getStringAttribute('backend_version');
  }
  public set backendVersion(value: string) {
    this._backendVersion = value;
  }
  public resetBackendVersion() {
    this._backendVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendVersionInput() {
    return this._backendVersion;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}

export class DomainDevicesTpmsList extends cdktf.ComplexList {
  public internalValue? : DomainDevicesTpms[] | cdktf.IResolvable

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
  public get(index: number): DomainDevicesTpmsOutputReference {
    return new DomainDevicesTpmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainDevicesVideo {
  /**
  * Video device model type (e.g., cirrus, vga, qxl, virtio, vbox, vmvga, gop). Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#type Domain#type}
  */
  readonly type?: string;
}

export function domainDevicesVideoToTerraform(struct?: DomainDevicesVideo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function domainDevicesVideoToHclTerraform(struct?: DomainDevicesVideo | cdktf.IResolvable): any {
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

export class DomainDevicesVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevicesVideo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DomainDevicesVideo | cdktf.IResolvable | undefined) {
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
}
export interface DomainDevices {
  /**
  * Console devices for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#consoles Domain#consoles}
  */
  readonly consoles?: DomainDevicesConsoles[] | cdktf.IResolvable;
  /**
  * Disk devices attached to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#disks Domain#disks}
  */
  readonly disks?: DomainDevicesDisks[] | cdktf.IResolvable;
  /**
  * Path to the emulator binary (e.g., /usr/bin/qemu-system-x86_64). Optional, libvirt chooses default if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#emulator Domain#emulator}
  */
  readonly emulator?: string;
  /**
  * Filesystem devices for sharing host directories with the guest (virtio-9p).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#filesystems Domain#filesystems}
  */
  readonly filesystems?: DomainDevicesFilesystems[] | cdktf.IResolvable;
  /**
  * Graphics device for the domain (VNC or Spice). Only one type can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#graphics Domain#graphics}
  */
  readonly graphics?: DomainDevicesGraphics;
  /**
  * Network interfaces attached to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#interfaces Domain#interfaces}
  */
  readonly interfaces?: DomainDevicesInterfaces[] | cdktf.IResolvable;
  /**
  * Random number generator devices for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#rngs Domain#rngs}
  */
  readonly rngs?: DomainDevicesRngs[] | cdktf.IResolvable;
  /**
  * Serial devices for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#serials Domain#serials}
  */
  readonly serials?: DomainDevicesSerials[] | cdktf.IResolvable;
  /**
  * TPM devices for the domain. Only one TPM device is supported per domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#tpms Domain#tpms}
  */
  readonly tpms?: DomainDevicesTpms[] | cdktf.IResolvable;
  /**
  * Video device for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#video Domain#video}
  */
  readonly video?: DomainDevicesVideo;
}

export function domainDevicesToTerraform(struct?: DomainDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consoles: cdktf.listMapper(domainDevicesConsolesToTerraform, false)(struct!.consoles),
    disks: cdktf.listMapper(domainDevicesDisksToTerraform, false)(struct!.disks),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    filesystems: cdktf.listMapper(domainDevicesFilesystemsToTerraform, false)(struct!.filesystems),
    graphics: domainDevicesGraphicsToTerraform(struct!.graphics),
    interfaces: cdktf.listMapper(domainDevicesInterfacesToTerraform, false)(struct!.interfaces),
    rngs: cdktf.listMapper(domainDevicesRngsToTerraform, false)(struct!.rngs),
    serials: cdktf.listMapper(domainDevicesSerialsToTerraform, false)(struct!.serials),
    tpms: cdktf.listMapper(domainDevicesTpmsToTerraform, false)(struct!.tpms),
    video: domainDevicesVideoToTerraform(struct!.video),
  }
}


export function domainDevicesToHclTerraform(struct?: DomainDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consoles: {
      value: cdktf.listMapperHcl(domainDevicesConsolesToHclTerraform, false)(struct!.consoles),
      isBlock: true,
      type: "list",
      storageClassType: "DomainDevicesConsolesList",
    },
    disks: {
      value: cdktf.listMapperHcl(domainDevicesDisksToHclTerraform, false)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "DomainDevicesDisksList",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystems: {
      value: cdktf.listMapperHcl(domainDevicesFilesystemsToHclTerraform, false)(struct!.filesystems),
      isBlock: true,
      type: "list",
      storageClassType: "DomainDevicesFilesystemsList",
    },
    graphics: {
      value: domainDevicesGraphicsToHclTerraform(struct!.graphics),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesGraphics",
    },
    interfaces: {
      value: cdktf.listMapperHcl(domainDevicesInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DomainDevicesInterfacesList",
    },
    rngs: {
      value: cdktf.listMapperHcl(domainDevicesRngsToHclTerraform, false)(struct!.rngs),
      isBlock: true,
      type: "list",
      storageClassType: "DomainDevicesRngsList",
    },
    serials: {
      value: cdktf.listMapperHcl(domainDevicesSerialsToHclTerraform, false)(struct!.serials),
      isBlock: true,
      type: "list",
      storageClassType: "DomainDevicesSerialsList",
    },
    tpms: {
      value: cdktf.listMapperHcl(domainDevicesTpmsToHclTerraform, false)(struct!.tpms),
      isBlock: true,
      type: "list",
      storageClassType: "DomainDevicesTpmsList",
    },
    video: {
      value: domainDevicesVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainDevicesVideo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoles = this._consoles?.internalValue;
    }
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._filesystems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystems = this._filesystems?.internalValue;
    }
    if (this._graphics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphics = this._graphics?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._rngs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rngs = this._rngs?.internalValue;
    }
    if (this._serials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serials = this._serials?.internalValue;
    }
    if (this._tpms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpms = this._tpms?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consoles.internalValue = undefined;
      this._disks.internalValue = undefined;
      this._emulator = undefined;
      this._filesystems.internalValue = undefined;
      this._graphics.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._rngs.internalValue = undefined;
      this._serials.internalValue = undefined;
      this._tpms.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consoles.internalValue = value.consoles;
      this._disks.internalValue = value.disks;
      this._emulator = value.emulator;
      this._filesystems.internalValue = value.filesystems;
      this._graphics.internalValue = value.graphics;
      this._interfaces.internalValue = value.interfaces;
      this._rngs.internalValue = value.rngs;
      this._serials.internalValue = value.serials;
      this._tpms.internalValue = value.tpms;
      this._video.internalValue = value.video;
    }
  }

  // consoles - computed: false, optional: true, required: false
  private _consoles = new DomainDevicesConsolesList(this, "consoles", false);
  public get consoles() {
    return this._consoles;
  }
  public putConsoles(value: DomainDevicesConsoles[] | cdktf.IResolvable) {
    this._consoles.internalValue = value;
  }
  public resetConsoles() {
    this._consoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolesInput() {
    return this._consoles.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new DomainDevicesDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: DomainDevicesDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // emulator - computed: false, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // filesystems - computed: false, optional: true, required: false
  private _filesystems = new DomainDevicesFilesystemsList(this, "filesystems", false);
  public get filesystems() {
    return this._filesystems;
  }
  public putFilesystems(value: DomainDevicesFilesystems[] | cdktf.IResolvable) {
    this._filesystems.internalValue = value;
  }
  public resetFilesystems() {
    this._filesystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemsInput() {
    return this._filesystems.internalValue;
  }

  // graphics - computed: false, optional: true, required: false
  private _graphics = new DomainDevicesGraphicsOutputReference(this, "graphics");
  public get graphics() {
    return this._graphics;
  }
  public putGraphics(value: DomainDevicesGraphics) {
    this._graphics.internalValue = value;
  }
  public resetGraphics() {
    this._graphics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphicsInput() {
    return this._graphics.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DomainDevicesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DomainDevicesInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // rngs - computed: false, optional: true, required: false
  private _rngs = new DomainDevicesRngsList(this, "rngs", false);
  public get rngs() {
    return this._rngs;
  }
  public putRngs(value: DomainDevicesRngs[] | cdktf.IResolvable) {
    this._rngs.internalValue = value;
  }
  public resetRngs() {
    this._rngs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rngsInput() {
    return this._rngs.internalValue;
  }

  // serials - computed: false, optional: true, required: false
  private _serials = new DomainDevicesSerialsList(this, "serials", false);
  public get serials() {
    return this._serials;
  }
  public putSerials(value: DomainDevicesSerials[] | cdktf.IResolvable) {
    this._serials.internalValue = value;
  }
  public resetSerials() {
    this._serials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialsInput() {
    return this._serials.internalValue;
  }

  // tpms - computed: false, optional: true, required: false
  private _tpms = new DomainDevicesTpmsList(this, "tpms", false);
  public get tpms() {
    return this._tpms;
  }
  public putTpms(value: DomainDevicesTpms[] | cdktf.IResolvable) {
    this._tpms.internalValue = value;
  }
  public resetTpms() {
    this._tpms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmsInput() {
    return this._tpms.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new DomainDevicesVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: DomainDevicesVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}
export interface DomainFeatures {
  /**
  * ACPI support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#acpi Domain#acpi}
  */
  readonly acpi?: boolean | cdktf.IResolvable;
  /**
  * APIC support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#apic Domain#apic}
  */
  readonly apic?: boolean | cdktf.IResolvable;
  /**
  * CCF Assist (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#ccf_assist Domain#ccf_assist}
  */
  readonly ccfAssist?: string;
  /**
  * GIC version for ARM guests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#gic_version Domain#gic_version}
  */
  readonly gicVersion?: string;
  /**
  * Hardware Assisted Paging (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#hap Domain#hap}
  */
  readonly hap?: string;
  /**
  * Hardware Transactional Memory (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#htm Domain#htm}
  */
  readonly htm?: string;
  /**
  * IOAPIC driver (kvm, qemu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#ioapic_driver Domain#ioapic_driver}
  */
  readonly ioapicDriver?: string;
  /**
  * Nested HV (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#nested_hv Domain#nested_hv}
  */
  readonly nestedHv?: string;
  /**
  * Physical Address Extension mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#pae Domain#pae}
  */
  readonly pae?: boolean | cdktf.IResolvable;
  /**
  * Performance Monitoring Unit (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#pmu Domain#pmu}
  */
  readonly pmu?: string;
  /**
  * Private network namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#privnet Domain#privnet}
  */
  readonly privnet?: boolean | cdktf.IResolvable;
  /**
  * PS/2 controller (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#ps2 Domain#ps2}
  */
  readonly ps2?: string;
  /**
  * Paravirtualized spinlock prevention (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#pvspinlock Domain#pvspinlock}
  */
  readonly pvspinlock?: string;
  /**
  * Reliability, Availability and Serviceability (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#ras Domain#ras}
  */
  readonly ras?: string;
  /**
  * Viridian enlightenments for Windows guests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#viridian Domain#viridian}
  */
  readonly viridian?: boolean | cdktf.IResolvable;
  /**
  * VM crash information (on, off).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#vmcoreinfo Domain#vmcoreinfo}
  */
  readonly vmcoreinfo?: string;
  /**
  * VMware IO port emulation (on, off, auto).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#vmport Domain#vmport}
  */
  readonly vmport?: string;
}

export function domainFeaturesToTerraform(struct?: DomainFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acpi: cdktf.booleanToTerraform(struct!.acpi),
    apic: cdktf.booleanToTerraform(struct!.apic),
    ccf_assist: cdktf.stringToTerraform(struct!.ccfAssist),
    gic_version: cdktf.stringToTerraform(struct!.gicVersion),
    hap: cdktf.stringToTerraform(struct!.hap),
    htm: cdktf.stringToTerraform(struct!.htm),
    ioapic_driver: cdktf.stringToTerraform(struct!.ioapicDriver),
    nested_hv: cdktf.stringToTerraform(struct!.nestedHv),
    pae: cdktf.booleanToTerraform(struct!.pae),
    pmu: cdktf.stringToTerraform(struct!.pmu),
    privnet: cdktf.booleanToTerraform(struct!.privnet),
    ps2: cdktf.stringToTerraform(struct!.ps2),
    pvspinlock: cdktf.stringToTerraform(struct!.pvspinlock),
    ras: cdktf.stringToTerraform(struct!.ras),
    viridian: cdktf.booleanToTerraform(struct!.viridian),
    vmcoreinfo: cdktf.stringToTerraform(struct!.vmcoreinfo),
    vmport: cdktf.stringToTerraform(struct!.vmport),
  }
}


export function domainFeaturesToHclTerraform(struct?: DomainFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acpi: {
      value: cdktf.booleanToHclTerraform(struct!.acpi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apic: {
      value: cdktf.booleanToHclTerraform(struct!.apic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ccf_assist: {
      value: cdktf.stringToHclTerraform(struct!.ccfAssist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gic_version: {
      value: cdktf.stringToHclTerraform(struct!.gicVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hap: {
      value: cdktf.stringToHclTerraform(struct!.hap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    htm: {
      value: cdktf.stringToHclTerraform(struct!.htm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ioapic_driver: {
      value: cdktf.stringToHclTerraform(struct!.ioapicDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nested_hv: {
      value: cdktf.stringToHclTerraform(struct!.nestedHv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pae: {
      value: cdktf.booleanToHclTerraform(struct!.pae),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pmu: {
      value: cdktf.stringToHclTerraform(struct!.pmu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privnet: {
      value: cdktf.booleanToHclTerraform(struct!.privnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ps2: {
      value: cdktf.stringToHclTerraform(struct!.ps2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvspinlock: {
      value: cdktf.stringToHclTerraform(struct!.pvspinlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ras: {
      value: cdktf.stringToHclTerraform(struct!.ras),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    viridian: {
      value: cdktf.booleanToHclTerraform(struct!.viridian),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vmcoreinfo: {
      value: cdktf.stringToHclTerraform(struct!.vmcoreinfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmport: {
      value: cdktf.stringToHclTerraform(struct!.vmport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.acpi = this._acpi;
    }
    if (this._apic !== undefined) {
      hasAnyValues = true;
      internalValueResult.apic = this._apic;
    }
    if (this._ccfAssist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccfAssist = this._ccfAssist;
    }
    if (this._gicVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gicVersion = this._gicVersion;
    }
    if (this._hap !== undefined) {
      hasAnyValues = true;
      internalValueResult.hap = this._hap;
    }
    if (this._htm !== undefined) {
      hasAnyValues = true;
      internalValueResult.htm = this._htm;
    }
    if (this._ioapicDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioapicDriver = this._ioapicDriver;
    }
    if (this._nestedHv !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedHv = this._nestedHv;
    }
    if (this._pae !== undefined) {
      hasAnyValues = true;
      internalValueResult.pae = this._pae;
    }
    if (this._pmu !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmu = this._pmu;
    }
    if (this._privnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.privnet = this._privnet;
    }
    if (this._ps2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ps2 = this._ps2;
    }
    if (this._pvspinlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvspinlock = this._pvspinlock;
    }
    if (this._ras !== undefined) {
      hasAnyValues = true;
      internalValueResult.ras = this._ras;
    }
    if (this._viridian !== undefined) {
      hasAnyValues = true;
      internalValueResult.viridian = this._viridian;
    }
    if (this._vmcoreinfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmcoreinfo = this._vmcoreinfo;
    }
    if (this._vmport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmport = this._vmport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acpi = undefined;
      this._apic = undefined;
      this._ccfAssist = undefined;
      this._gicVersion = undefined;
      this._hap = undefined;
      this._htm = undefined;
      this._ioapicDriver = undefined;
      this._nestedHv = undefined;
      this._pae = undefined;
      this._pmu = undefined;
      this._privnet = undefined;
      this._ps2 = undefined;
      this._pvspinlock = undefined;
      this._ras = undefined;
      this._viridian = undefined;
      this._vmcoreinfo = undefined;
      this._vmport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acpi = value.acpi;
      this._apic = value.apic;
      this._ccfAssist = value.ccfAssist;
      this._gicVersion = value.gicVersion;
      this._hap = value.hap;
      this._htm = value.htm;
      this._ioapicDriver = value.ioapicDriver;
      this._nestedHv = value.nestedHv;
      this._pae = value.pae;
      this._pmu = value.pmu;
      this._privnet = value.privnet;
      this._ps2 = value.ps2;
      this._pvspinlock = value.pvspinlock;
      this._ras = value.ras;
      this._viridian = value.viridian;
      this._vmcoreinfo = value.vmcoreinfo;
      this._vmport = value.vmport;
    }
  }

  // acpi - computed: false, optional: true, required: false
  private _acpi?: boolean | cdktf.IResolvable; 
  public get acpi() {
    return this.getBooleanAttribute('acpi');
  }
  public set acpi(value: boolean | cdktf.IResolvable) {
    this._acpi = value;
  }
  public resetAcpi() {
    this._acpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acpiInput() {
    return this._acpi;
  }

  // apic - computed: false, optional: true, required: false
  private _apic?: boolean | cdktf.IResolvable; 
  public get apic() {
    return this.getBooleanAttribute('apic');
  }
  public set apic(value: boolean | cdktf.IResolvable) {
    this._apic = value;
  }
  public resetApic() {
    this._apic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicInput() {
    return this._apic;
  }

  // ccf_assist - computed: false, optional: true, required: false
  private _ccfAssist?: string; 
  public get ccfAssist() {
    return this.getStringAttribute('ccf_assist');
  }
  public set ccfAssist(value: string) {
    this._ccfAssist = value;
  }
  public resetCcfAssist() {
    this._ccfAssist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccfAssistInput() {
    return this._ccfAssist;
  }

  // gic_version - computed: false, optional: true, required: false
  private _gicVersion?: string; 
  public get gicVersion() {
    return this.getStringAttribute('gic_version');
  }
  public set gicVersion(value: string) {
    this._gicVersion = value;
  }
  public resetGicVersion() {
    this._gicVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gicVersionInput() {
    return this._gicVersion;
  }

  // hap - computed: false, optional: true, required: false
  private _hap?: string; 
  public get hap() {
    return this.getStringAttribute('hap');
  }
  public set hap(value: string) {
    this._hap = value;
  }
  public resetHap() {
    this._hap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hapInput() {
    return this._hap;
  }

  // htm - computed: false, optional: true, required: false
  private _htm?: string; 
  public get htm() {
    return this.getStringAttribute('htm');
  }
  public set htm(value: string) {
    this._htm = value;
  }
  public resetHtm() {
    this._htm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmInput() {
    return this._htm;
  }

  // ioapic_driver - computed: false, optional: true, required: false
  private _ioapicDriver?: string; 
  public get ioapicDriver() {
    return this.getStringAttribute('ioapic_driver');
  }
  public set ioapicDriver(value: string) {
    this._ioapicDriver = value;
  }
  public resetIoapicDriver() {
    this._ioapicDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioapicDriverInput() {
    return this._ioapicDriver;
  }

  // nested_hv - computed: false, optional: true, required: false
  private _nestedHv?: string; 
  public get nestedHv() {
    return this.getStringAttribute('nested_hv');
  }
  public set nestedHv(value: string) {
    this._nestedHv = value;
  }
  public resetNestedHv() {
    this._nestedHv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedHvInput() {
    return this._nestedHv;
  }

  // pae - computed: false, optional: true, required: false
  private _pae?: boolean | cdktf.IResolvable; 
  public get pae() {
    return this.getBooleanAttribute('pae');
  }
  public set pae(value: boolean | cdktf.IResolvable) {
    this._pae = value;
  }
  public resetPae() {
    this._pae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paeInput() {
    return this._pae;
  }

  // pmu - computed: false, optional: true, required: false
  private _pmu?: string; 
  public get pmu() {
    return this.getStringAttribute('pmu');
  }
  public set pmu(value: string) {
    this._pmu = value;
  }
  public resetPmu() {
    this._pmu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmuInput() {
    return this._pmu;
  }

  // privnet - computed: false, optional: true, required: false
  private _privnet?: boolean | cdktf.IResolvable; 
  public get privnet() {
    return this.getBooleanAttribute('privnet');
  }
  public set privnet(value: boolean | cdktf.IResolvable) {
    this._privnet = value;
  }
  public resetPrivnet() {
    this._privnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privnetInput() {
    return this._privnet;
  }

  // ps2 - computed: false, optional: true, required: false
  private _ps2?: string; 
  public get ps2() {
    return this.getStringAttribute('ps2');
  }
  public set ps2(value: string) {
    this._ps2 = value;
  }
  public resetPs2() {
    this._ps2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ps2Input() {
    return this._ps2;
  }

  // pvspinlock - computed: false, optional: true, required: false
  private _pvspinlock?: string; 
  public get pvspinlock() {
    return this.getStringAttribute('pvspinlock');
  }
  public set pvspinlock(value: string) {
    this._pvspinlock = value;
  }
  public resetPvspinlock() {
    this._pvspinlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvspinlockInput() {
    return this._pvspinlock;
  }

  // ras - computed: false, optional: true, required: false
  private _ras?: string; 
  public get ras() {
    return this.getStringAttribute('ras');
  }
  public set ras(value: string) {
    this._ras = value;
  }
  public resetRas() {
    this._ras = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rasInput() {
    return this._ras;
  }

  // viridian - computed: false, optional: true, required: false
  private _viridian?: boolean | cdktf.IResolvable; 
  public get viridian() {
    return this.getBooleanAttribute('viridian');
  }
  public set viridian(value: boolean | cdktf.IResolvable) {
    this._viridian = value;
  }
  public resetViridian() {
    this._viridian = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viridianInput() {
    return this._viridian;
  }

  // vmcoreinfo - computed: false, optional: true, required: false
  private _vmcoreinfo?: string; 
  public get vmcoreinfo() {
    return this.getStringAttribute('vmcoreinfo');
  }
  public set vmcoreinfo(value: string) {
    this._vmcoreinfo = value;
  }
  public resetVmcoreinfo() {
    this._vmcoreinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcoreinfoInput() {
    return this._vmcoreinfo;
  }

  // vmport - computed: false, optional: true, required: false
  private _vmport?: string; 
  public get vmport() {
    return this.getStringAttribute('vmport');
  }
  public set vmport(value: string) {
    this._vmport = value;
  }
  public resetVmport() {
    this._vmport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmportInput() {
    return this._vmport;
  }
}
export interface DomainOsNvramSource {
  /**
  * Block device path. Mutually exclusive with pool/volume and file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#block Domain#block}
  */
  readonly block?: string;
  /**
  * Path to NVRAM file. Mutually exclusive with pool/volume and block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#file Domain#file}
  */
  readonly file?: string;
  /**
  * Storage pool name for volume-based NVRAM. Use with 'volume'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#pool Domain#pool}
  */
  readonly pool?: string;
  /**
  * Volume name in the storage pool. Use with 'pool'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#volume Domain#volume}
  */
  readonly volume?: string;
}

export function domainOsNvramSourceToTerraform(struct?: DomainOsNvramSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.stringToTerraform(struct!.block),
    file: cdktf.stringToTerraform(struct!.file),
    pool: cdktf.stringToTerraform(struct!.pool),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function domainOsNvramSourceToHclTerraform(struct?: DomainOsNvramSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.stringToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
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

export class DomainOsNvramSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainOsNvramSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainOsNvramSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block = undefined;
      this._file = undefined;
      this._pool = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block = value.block;
      this._file = value.file;
      this._pool = value.pool;
      this._volume = value.volume;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // file - computed: false, optional: true, required: false
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

  // volume - computed: false, optional: true, required: false
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
export interface DomainOsNvram {
  /**
  * Format of the NVRAM file (e.g., 'raw', 'qcow2').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#format Domain#format}
  */
  readonly format?: string;
  /**
  * Path to the NVRAM file for the domain. Mutually exclusive with source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#path Domain#path}
  */
  readonly path?: string;
  /**
  * NVRAM source configuration for volume-based NVRAM. Mutually exclusive with path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#source Domain#source}
  */
  readonly source?: DomainOsNvramSource;
  /**
  * Path to NVRAM template file for UEFI variable store. This template is copied to create the domain's NVRAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#template Domain#template}
  */
  readonly template?: string;
  /**
  * Format of the template file (e.g., 'raw', 'qcow2').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#template_format Domain#template_format}
  */
  readonly templateFormat?: string;
}

export function domainOsNvramToTerraform(struct?: DomainOsNvram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    path: cdktf.stringToTerraform(struct!.path),
    source: domainOsNvramSourceToTerraform(struct!.source),
    template: cdktf.stringToTerraform(struct!.template),
    template_format: cdktf.stringToTerraform(struct!.templateFormat),
  }
}


export function domainOsNvramToHclTerraform(struct?: DomainOsNvram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    source: {
      value: domainOsNvramSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainOsNvramSource",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_format: {
      value: cdktf.stringToHclTerraform(struct!.templateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainOsNvramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainOsNvram | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._templateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateFormat = this._templateFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainOsNvram | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._path = undefined;
      this._source.internalValue = undefined;
      this._template = undefined;
      this._templateFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._path = value.path;
      this._source.internalValue = value.source;
      this._template = value.template;
      this._templateFormat = value.templateFormat;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // source - computed: false, optional: true, required: false
  private _source = new DomainOsNvramSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DomainOsNvramSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_format - computed: false, optional: true, required: false
  private _templateFormat?: string; 
  public get templateFormat() {
    return this.getStringAttribute('template_format');
  }
  public set templateFormat(value: string) {
    this._templateFormat = value;
  }
  public resetTemplateFormat() {
    this._templateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFormatInput() {
    return this._templateFormat;
  }
}
export interface DomainOs {
  /**
  * CPU architecture (e.g., 'x86_64', 'aarch64').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#arch Domain#arch}
  */
  readonly arch?: string;
  /**
  * Ordered list of boot devices (e.g., 'hd', 'network', 'cdrom'). If not specified, libvirt may add default boot devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#boot_devices Domain#boot_devices}
  */
  readonly bootDevices?: string[];
  /**
  * Firmware type (e.g., 'efi', 'bios').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#firmware Domain#firmware}
  */
  readonly firmware?: string;
  /**
  * Path to initrd image for direct kernel boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#initrd Domain#initrd}
  */
  readonly initrd?: string;
  /**
  * Path to kernel image for direct kernel boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#kernel Domain#kernel}
  */
  readonly kernel?: string;
  /**
  * Kernel command line arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#kernel_args Domain#kernel_args}
  */
  readonly kernelArgs?: string;
  /**
  * Path to UEFI firmware loader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#loader_path Domain#loader_path}
  */
  readonly loaderPath?: string;
  /**
  * Whether the UEFI firmware is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#loader_readonly Domain#loader_readonly}
  */
  readonly loaderReadonly?: boolean | cdktf.IResolvable;
  /**
  * Loader type ('rom' or 'pflash').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#loader_type Domain#loader_type}
  */
  readonly loaderType?: string;
  /**
  * Machine type (e.g., 'pc', 'q35'). Note: This value represents what you want, but libvirt may internally expand it to a versioned type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#machine Domain#machine}
  */
  readonly machine?: string;
  /**
  * NVRAM configuration for UEFI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#nvram Domain#nvram}
  */
  readonly nvram?: DomainOsNvram;
  /**
  * OS type (e.g., 'hvm' for fully virtualized, 'linux' for paravirtualized).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
}

export function domainOsToTerraform(struct?: DomainOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    boot_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootDevices),
    firmware: cdktf.stringToTerraform(struct!.firmware),
    initrd: cdktf.stringToTerraform(struct!.initrd),
    kernel: cdktf.stringToTerraform(struct!.kernel),
    kernel_args: cdktf.stringToTerraform(struct!.kernelArgs),
    loader_path: cdktf.stringToTerraform(struct!.loaderPath),
    loader_readonly: cdktf.booleanToTerraform(struct!.loaderReadonly),
    loader_type: cdktf.stringToTerraform(struct!.loaderType),
    machine: cdktf.stringToTerraform(struct!.machine),
    nvram: domainOsNvramToTerraform(struct!.nvram),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function domainOsToHclTerraform(struct?: DomainOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootDevices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    firmware: {
      value: cdktf.stringToHclTerraform(struct!.firmware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initrd: {
      value: cdktf.stringToHclTerraform(struct!.initrd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel: {
      value: cdktf.stringToHclTerraform(struct!.kernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel_args: {
      value: cdktf.stringToHclTerraform(struct!.kernelArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loader_path: {
      value: cdktf.stringToHclTerraform(struct!.loaderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loader_readonly: {
      value: cdktf.booleanToHclTerraform(struct!.loaderReadonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loader_type: {
      value: cdktf.stringToHclTerraform(struct!.loaderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine: {
      value: cdktf.stringToHclTerraform(struct!.machine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nvram: {
      value: domainOsNvramToHclTerraform(struct!.nvram),
      isBlock: true,
      type: "struct",
      storageClassType: "DomainOsNvram",
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

export class DomainOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainOs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._bootDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDevices = this._bootDevices;
    }
    if (this._firmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware;
    }
    if (this._initrd !== undefined) {
      hasAnyValues = true;
      internalValueResult.initrd = this._initrd;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    if (this._kernelArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelArgs = this._kernelArgs;
    }
    if (this._loaderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.loaderPath = this._loaderPath;
    }
    if (this._loaderReadonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.loaderReadonly = this._loaderReadonly;
    }
    if (this._loaderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loaderType = this._loaderType;
    }
    if (this._machine !== undefined) {
      hasAnyValues = true;
      internalValueResult.machine = this._machine;
    }
    if (this._nvram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvram = this._nvram?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainOs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._bootDevices = undefined;
      this._firmware = undefined;
      this._initrd = undefined;
      this._kernel = undefined;
      this._kernelArgs = undefined;
      this._loaderPath = undefined;
      this._loaderReadonly = undefined;
      this._loaderType = undefined;
      this._machine = undefined;
      this._nvram.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._bootDevices = value.bootDevices;
      this._firmware = value.firmware;
      this._initrd = value.initrd;
      this._kernel = value.kernel;
      this._kernelArgs = value.kernelArgs;
      this._loaderPath = value.loaderPath;
      this._loaderReadonly = value.loaderReadonly;
      this._loaderType = value.loaderType;
      this._machine = value.machine;
      this._nvram.internalValue = value.nvram;
      this._type = value.type;
    }
  }

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

  // boot_devices - computed: true, optional: true, required: false
  private _bootDevices?: string[]; 
  public get bootDevices() {
    return this.getListAttribute('boot_devices');
  }
  public set bootDevices(value: string[]) {
    this._bootDevices = value;
  }
  public resetBootDevices() {
    this._bootDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDevicesInput() {
    return this._bootDevices;
  }

  // firmware - computed: false, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // initrd - computed: false, optional: true, required: false
  private _initrd?: string; 
  public get initrd() {
    return this.getStringAttribute('initrd');
  }
  public set initrd(value: string) {
    this._initrd = value;
  }
  public resetInitrd() {
    this._initrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initrdInput() {
    return this._initrd;
  }

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }

  // kernel_args - computed: false, optional: true, required: false
  private _kernelArgs?: string; 
  public get kernelArgs() {
    return this.getStringAttribute('kernel_args');
  }
  public set kernelArgs(value: string) {
    this._kernelArgs = value;
  }
  public resetKernelArgs() {
    this._kernelArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelArgsInput() {
    return this._kernelArgs;
  }

  // loader_path - computed: false, optional: true, required: false
  private _loaderPath?: string; 
  public get loaderPath() {
    return this.getStringAttribute('loader_path');
  }
  public set loaderPath(value: string) {
    this._loaderPath = value;
  }
  public resetLoaderPath() {
    this._loaderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaderPathInput() {
    return this._loaderPath;
  }

  // loader_readonly - computed: false, optional: true, required: false
  private _loaderReadonly?: boolean | cdktf.IResolvable; 
  public get loaderReadonly() {
    return this.getBooleanAttribute('loader_readonly');
  }
  public set loaderReadonly(value: boolean | cdktf.IResolvable) {
    this._loaderReadonly = value;
  }
  public resetLoaderReadonly() {
    this._loaderReadonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaderReadonlyInput() {
    return this._loaderReadonly;
  }

  // loader_type - computed: false, optional: true, required: false
  private _loaderType?: string; 
  public get loaderType() {
    return this.getStringAttribute('loader_type');
  }
  public set loaderType(value: string) {
    this._loaderType = value;
  }
  public resetLoaderType() {
    this._loaderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaderTypeInput() {
    return this._loaderType;
  }

  // machine - computed: false, optional: true, required: false
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // nvram - computed: false, optional: true, required: false
  private _nvram = new DomainOsNvramOutputReference(this, "nvram");
  public get nvram() {
    return this._nvram;
  }
  public putNvram(value: DomainOsNvram) {
    this._nvram.internalValue = value;
  }
  public resetNvram() {
    this._nvram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvramInput() {
    return this._nvram.internalValue;
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
export interface DomainPm {
  /**
  * Suspend to disk policy (yes, no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#suspend_to_disk Domain#suspend_to_disk}
  */
  readonly suspendToDisk?: string;
  /**
  * Suspend to memory policy (yes, no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#suspend_to_mem Domain#suspend_to_mem}
  */
  readonly suspendToMem?: string;
}

export function domainPmToTerraform(struct?: DomainPm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suspend_to_disk: cdktf.stringToTerraform(struct!.suspendToDisk),
    suspend_to_mem: cdktf.stringToTerraform(struct!.suspendToMem),
  }
}


export function domainPmToHclTerraform(struct?: DomainPm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suspend_to_disk: {
      value: cdktf.stringToHclTerraform(struct!.suspendToDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend_to_mem: {
      value: cdktf.stringToHclTerraform(struct!.suspendToMem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainPmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainPm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suspendToDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendToDisk = this._suspendToDisk;
    }
    if (this._suspendToMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendToMem = this._suspendToMem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainPm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suspendToDisk = undefined;
      this._suspendToMem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suspendToDisk = value.suspendToDisk;
      this._suspendToMem = value.suspendToMem;
    }
  }

  // suspend_to_disk - computed: false, optional: true, required: false
  private _suspendToDisk?: string; 
  public get suspendToDisk() {
    return this.getStringAttribute('suspend_to_disk');
  }
  public set suspendToDisk(value: string) {
    this._suspendToDisk = value;
  }
  public resetSuspendToDisk() {
    this._suspendToDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendToDiskInput() {
    return this._suspendToDisk;
  }

  // suspend_to_mem - computed: false, optional: true, required: false
  private _suspendToMem?: string; 
  public get suspendToMem() {
    return this.getStringAttribute('suspend_to_mem');
  }
  public set suspendToMem(value: string) {
    this._suspendToMem = value;
  }
  public resetSuspendToMem() {
    this._suspendToMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendToMemInput() {
    return this._suspendToMem;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain libvirt_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.0/docs/resources/domain libvirt_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_domain',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.9.0',
        providerVersionConstraint: '0.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autostart = config.autostart;
    this._bootloader = config.bootloader;
    this._bootloaderArgs = config.bootloaderArgs;
    this._clock.internalValue = config.clock;
    this._cpu.internalValue = config.cpu;
    this._create.internalValue = config.create;
    this._currentMemory = config.currentMemory;
    this._description = config.description;
    this._destroy.internalValue = config.destroy;
    this._devices.internalValue = config.devices;
    this._features.internalValue = config.features;
    this._hwuuid = config.hwuuid;
    this._iothreads = config.iothreads;
    this._maxMemory = config.maxMemory;
    this._maxMemorySlots = config.maxMemorySlots;
    this._memory = config.memory;
    this._metadata = config.metadata;
    this._name = config.name;
    this._onCrash = config.onCrash;
    this._onPoweroff = config.onPoweroff;
    this._onReboot = config.onReboot;
    this._os.internalValue = config.os;
    this._pm.internalValue = config.pm;
    this._running = config.running;
    this._title = config.title;
    this._type = config.type;
    this._unit = config.unit;
    this._uuid = config.uuid;
    this._vcpu = config.vcpu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autostart - computed: false, optional: true, required: false
  private _autostart?: boolean | cdktf.IResolvable; 
  public get autostart() {
    return this.getBooleanAttribute('autostart');
  }
  public set autostart(value: boolean | cdktf.IResolvable) {
    this._autostart = value;
  }
  public resetAutostart() {
    this._autostart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostartInput() {
    return this._autostart;
  }

  // bootloader - computed: false, optional: true, required: false
  private _bootloader?: string; 
  public get bootloader() {
    return this.getStringAttribute('bootloader');
  }
  public set bootloader(value: string) {
    this._bootloader = value;
  }
  public resetBootloader() {
    this._bootloader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootloaderInput() {
    return this._bootloader;
  }

  // bootloader_args - computed: false, optional: true, required: false
  private _bootloaderArgs?: string; 
  public get bootloaderArgs() {
    return this.getStringAttribute('bootloader_args');
  }
  public set bootloaderArgs(value: string) {
    this._bootloaderArgs = value;
  }
  public resetBootloaderArgs() {
    this._bootloaderArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootloaderArgsInput() {
    return this._bootloaderArgs;
  }

  // clock - computed: false, optional: true, required: false
  private _clock = new DomainClockOutputReference(this, "clock");
  public get clock() {
    return this._clock;
  }
  public putClock(value: DomainClock) {
    this._clock.internalValue = value;
  }
  public resetClock() {
    this._clock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockInput() {
    return this._clock.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DomainCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DomainCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // create - computed: false, optional: true, required: false
  private _create = new DomainCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: DomainCreate) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // current_memory - computed: false, optional: true, required: false
  private _currentMemory?: number; 
  public get currentMemory() {
    return this.getNumberAttribute('current_memory');
  }
  public set currentMemory(value: number) {
    this._currentMemory = value;
  }
  public resetCurrentMemory() {
    this._currentMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentMemoryInput() {
    return this._currentMemory;
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

  // destroy - computed: false, optional: true, required: false
  private _destroy = new DomainDestroyOutputReference(this, "destroy");
  public get destroy() {
    return this._destroy;
  }
  public putDestroy(value: DomainDestroy) {
    this._destroy.internalValue = value;
  }
  public resetDestroy() {
    this._destroy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyInput() {
    return this._destroy.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new DomainDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DomainDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new DomainFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: DomainFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // hwuuid - computed: false, optional: true, required: false
  private _hwuuid?: string; 
  public get hwuuid() {
    return this.getStringAttribute('hwuuid');
  }
  public set hwuuid(value: string) {
    this._hwuuid = value;
  }
  public resetHwuuid() {
    this._hwuuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwuuidInput() {
    return this._hwuuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothreads - computed: false, optional: true, required: false
  private _iothreads?: number; 
  public get iothreads() {
    return this.getNumberAttribute('iothreads');
  }
  public set iothreads(value: number) {
    this._iothreads = value;
  }
  public resetIothreads() {
    this._iothreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iothreadsInput() {
    return this._iothreads;
  }

  // max_memory - computed: false, optional: true, required: false
  private _maxMemory?: number; 
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }
  public set maxMemory(value: number) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // max_memory_slots - computed: false, optional: true, required: false
  private _maxMemorySlots?: number; 
  public get maxMemorySlots() {
    return this.getNumberAttribute('max_memory_slots');
  }
  public set maxMemorySlots(value: number) {
    this._maxMemorySlots = value;
  }
  public resetMaxMemorySlots() {
    this._maxMemorySlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemorySlotsInput() {
    return this._maxMemorySlots;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // on_crash - computed: false, optional: true, required: false
  private _onCrash?: string; 
  public get onCrash() {
    return this.getStringAttribute('on_crash');
  }
  public set onCrash(value: string) {
    this._onCrash = value;
  }
  public resetOnCrash() {
    this._onCrash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCrashInput() {
    return this._onCrash;
  }

  // on_poweroff - computed: false, optional: true, required: false
  private _onPoweroff?: string; 
  public get onPoweroff() {
    return this.getStringAttribute('on_poweroff');
  }
  public set onPoweroff(value: string) {
    this._onPoweroff = value;
  }
  public resetOnPoweroff() {
    this._onPoweroff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPoweroffInput() {
    return this._onPoweroff;
  }

  // on_reboot - computed: false, optional: true, required: false
  private _onReboot?: string; 
  public get onReboot() {
    return this.getStringAttribute('on_reboot');
  }
  public set onReboot(value: string) {
    this._onReboot = value;
  }
  public resetOnReboot() {
    this._onReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRebootInput() {
    return this._onReboot;
  }

  // os - computed: false, optional: true, required: false
  private _os = new DomainOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: DomainOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // pm - computed: false, optional: true, required: false
  private _pm = new DomainPmOutputReference(this, "pm");
  public get pm() {
    return this._pm;
  }
  public putPm(value: DomainPm) {
    this._pm.internalValue = value;
  }
  public resetPm() {
    this._pm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmInput() {
    return this._pm.internalValue;
  }

  // running - computed: false, optional: true, required: false
  private _running?: boolean | cdktf.IResolvable; 
  public get running() {
    return this.getBooleanAttribute('running');
  }
  public set running(value: boolean | cdktf.IResolvable) {
    this._running = value;
  }
  public resetRunning() {
    this._running = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vcpu - computed: false, optional: false, required: true
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autostart: cdktf.booleanToTerraform(this._autostart),
      bootloader: cdktf.stringToTerraform(this._bootloader),
      bootloader_args: cdktf.stringToTerraform(this._bootloaderArgs),
      clock: domainClockToTerraform(this._clock.internalValue),
      cpu: domainCpuToTerraform(this._cpu.internalValue),
      create: domainCreateToTerraform(this._create.internalValue),
      current_memory: cdktf.numberToTerraform(this._currentMemory),
      description: cdktf.stringToTerraform(this._description),
      destroy: domainDestroyToTerraform(this._destroy.internalValue),
      devices: domainDevicesToTerraform(this._devices.internalValue),
      features: domainFeaturesToTerraform(this._features.internalValue),
      hwuuid: cdktf.stringToTerraform(this._hwuuid),
      iothreads: cdktf.numberToTerraform(this._iothreads),
      max_memory: cdktf.numberToTerraform(this._maxMemory),
      max_memory_slots: cdktf.numberToTerraform(this._maxMemorySlots),
      memory: cdktf.numberToTerraform(this._memory),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      on_crash: cdktf.stringToTerraform(this._onCrash),
      on_poweroff: cdktf.stringToTerraform(this._onPoweroff),
      on_reboot: cdktf.stringToTerraform(this._onReboot),
      os: domainOsToTerraform(this._os.internalValue),
      pm: domainPmToTerraform(this._pm.internalValue),
      running: cdktf.booleanToTerraform(this._running),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      unit: cdktf.stringToTerraform(this._unit),
      uuid: cdktf.stringToTerraform(this._uuid),
      vcpu: cdktf.numberToTerraform(this._vcpu),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autostart: {
        value: cdktf.booleanToHclTerraform(this._autostart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootloader: {
        value: cdktf.stringToHclTerraform(this._bootloader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootloader_args: {
        value: cdktf.stringToHclTerraform(this._bootloaderArgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock: {
        value: domainClockToHclTerraform(this._clock.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainClock",
      },
      cpu: {
        value: domainCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainCpu",
      },
      create: {
        value: domainCreateToHclTerraform(this._create.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainCreate",
      },
      current_memory: {
        value: cdktf.numberToHclTerraform(this._currentMemory),
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
      destroy: {
        value: domainDestroyToHclTerraform(this._destroy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainDestroy",
      },
      devices: {
        value: domainDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainDevices",
      },
      features: {
        value: domainFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainFeatures",
      },
      hwuuid: {
        value: cdktf.stringToHclTerraform(this._hwuuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iothreads: {
        value: cdktf.numberToHclTerraform(this._iothreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_memory: {
        value: cdktf.numberToHclTerraform(this._maxMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_memory_slots: {
        value: cdktf.numberToHclTerraform(this._maxMemorySlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_crash: {
        value: cdktf.stringToHclTerraform(this._onCrash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_poweroff: {
        value: cdktf.stringToHclTerraform(this._onPoweroff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_reboot: {
        value: cdktf.stringToHclTerraform(this._onReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: domainOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainOs",
      },
      pm: {
        value: domainPmToHclTerraform(this._pm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainPm",
      },
      running: {
        value: cdktf.booleanToHclTerraform(this._running),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
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
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpu: {
        value: cdktf.numberToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
