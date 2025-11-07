// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Context variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#context Template#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * Amount of CPU quota assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#cpu Template#cpu}
  */
  readonly cpu?: number;
  /**
  * A description of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * Name of the Group that onws the resource, If empty, it uses caller group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#group Template#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#id Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#lock Template#lock}
  */
  readonly lock?: string;
  /**
  * Amount of memory (RAM) in MB assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#memory Template#memory}
  */
  readonly memory?: number;
  /**
  * Name of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * Permissions for the resource (in Unix format, owner-group-other, use-manage-admin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#permissions Template#permissions}
  */
  readonly permissions?: string;
  /**
  * Storage placement requirements to deploy the resource following specific rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#sched_ds_requirements Template#sched_ds_requirements}
  */
  readonly schedDsRequirements?: string;
  /**
  * Scheduling requirements to deploy the resource following specific rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#sched_requirements Template#sched_requirements}
  */
  readonly schedRequirements?: string;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#tags Template#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Provides the template creator with the possibility to dynamically ask the user instantiating the template for dynamic values that must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#user_inputs Template#user_inputs}
  */
  readonly userInputs?: { [key: string]: string };
  /**
  * Number of virtual CPUs assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#vcpu Template#vcpu}
  */
  readonly vcpu?: number;
  /**
  * cpumodel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#cpumodel Template#cpumodel}
  */
  readonly cpumodel?: TemplateCpumodel;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#disk Template#disk}
  */
  readonly disk?: TemplateDisk[] | cdktf.IResolvable;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#features Template#features}
  */
  readonly features?: TemplateFeatures[] | cdktf.IResolvable;
  /**
  * graphics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#graphics Template#graphics}
  */
  readonly graphics?: TemplateGraphics;
  /**
  * nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#nic Template#nic}
  */
  readonly nic?: TemplateNic[] | cdktf.IResolvable;
  /**
  * nic_alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#nic_alias Template#nic_alias}
  */
  readonly nicAlias?: TemplateNicAlias[] | cdktf.IResolvable;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#os Template#os}
  */
  readonly os?: TemplateOs;
  /**
  * raw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#raw Template#raw}
  */
  readonly raw?: TemplateRaw;
  /**
  * template_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#template_section Template#template_section}
  */
  readonly templateSection?: TemplateTemplateSection[] | cdktf.IResolvable;
  /**
  * vmgroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#vmgroup Template#vmgroup}
  */
  readonly vmgroup?: TemplateVmgroup;
}
export interface TemplateCpumodel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#model Template#model}
  */
  readonly model: string;
}

export function templateCpumodelToTerraform(struct?: TemplateCpumodelOutputReference | TemplateCpumodel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function templateCpumodelToHclTerraform(struct?: TemplateCpumodelOutputReference | TemplateCpumodel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class TemplateCpumodelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateCpumodel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCpumodel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface TemplateDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#cache Template#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#dev_prefix Template#dev_prefix}
  */
  readonly devPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#discard Template#discard}
  */
  readonly discard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#driver Template#driver}
  */
  readonly driver?: string;
  /**
  * Image Id  of the image to attach to the VM. Defaults to -1: no image attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#image_id Template#image_id}
  */
  readonly imageId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#io Template#io}
  */
  readonly io?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#size Template#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#target Template#target}
  */
  readonly target?: string;
  /**
  * Format of the volatile disk: raw or qcow2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#volatile_format Template#volatile_format}
  */
  readonly volatileFormat?: string;
  /**
  * Type of the volatile disk: swap or fs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#volatile_type Template#volatile_type}
  */
  readonly volatileType?: string;
}

export function templateDiskToTerraform(struct?: TemplateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: cdktf.stringToTerraform(struct!.cache),
    dev_prefix: cdktf.stringToTerraform(struct!.devPrefix),
    discard: cdktf.stringToTerraform(struct!.discard),
    driver: cdktf.stringToTerraform(struct!.driver),
    image_id: cdktf.numberToTerraform(struct!.imageId),
    io: cdktf.stringToTerraform(struct!.io),
    size: cdktf.numberToTerraform(struct!.size),
    target: cdktf.stringToTerraform(struct!.target),
    volatile_format: cdktf.stringToTerraform(struct!.volatileFormat),
    volatile_type: cdktf.stringToTerraform(struct!.volatileType),
  }
}


export function templateDiskToHclTerraform(struct?: TemplateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_prefix: {
      value: cdktf.stringToHclTerraform(struct!.devPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discard: {
      value: cdktf.stringToHclTerraform(struct!.discard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.numberToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io: {
      value: cdktf.stringToHclTerraform(struct!.io),
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volatile_format: {
      value: cdktf.stringToHclTerraform(struct!.volatileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volatile_type: {
      value: cdktf.stringToHclTerraform(struct!.volatileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._devPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.devPrefix = this._devPrefix;
    }
    if (this._discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._io !== undefined) {
      hasAnyValues = true;
      internalValueResult.io = this._io;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._volatileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.volatileFormat = this._volatileFormat;
    }
    if (this._volatileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volatileType = this._volatileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cache = undefined;
      this._devPrefix = undefined;
      this._discard = undefined;
      this._driver = undefined;
      this._imageId = undefined;
      this._io = undefined;
      this._size = undefined;
      this._target = undefined;
      this._volatileFormat = undefined;
      this._volatileType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cache = value.cache;
      this._devPrefix = value.devPrefix;
      this._discard = value.discard;
      this._driver = value.driver;
      this._imageId = value.imageId;
      this._io = value.io;
      this._size = value.size;
      this._target = value.target;
      this._volatileFormat = value.volatileFormat;
      this._volatileType = value.volatileType;
    }
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // dev_prefix - computed: false, optional: true, required: false
  private _devPrefix?: string; 
  public get devPrefix() {
    return this.getStringAttribute('dev_prefix');
  }
  public set devPrefix(value: string) {
    this._devPrefix = value;
  }
  public resetDevPrefix() {
    this._devPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devPrefixInput() {
    return this._devPrefix;
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: string; 
  public get discard() {
    return this.getStringAttribute('discard');
  }
  public set discard(value: string) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: number; 
  public get imageId() {
    return this.getNumberAttribute('image_id');
  }
  public set imageId(value: number) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // io - computed: false, optional: true, required: false
  private _io?: string; 
  public get io() {
    return this.getStringAttribute('io');
  }
  public set io(value: string) {
    this._io = value;
  }
  public resetIo() {
    this._io = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioInput() {
    return this._io;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // volatile_format - computed: false, optional: true, required: false
  private _volatileFormat?: string; 
  public get volatileFormat() {
    return this.getStringAttribute('volatile_format');
  }
  public set volatileFormat(value: string) {
    this._volatileFormat = value;
  }
  public resetVolatileFormat() {
    this._volatileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volatileFormatInput() {
    return this._volatileFormat;
  }

  // volatile_type - computed: false, optional: true, required: false
  private _volatileType?: string; 
  public get volatileType() {
    return this.getStringAttribute('volatile_type');
  }
  public set volatileType(value: string) {
    this._volatileType = value;
  }
  public resetVolatileType() {
    this._volatileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volatileTypeInput() {
    return this._volatileType;
  }
}

export class TemplateDiskList extends cdktf.ComplexList {
  public internalValue? : TemplateDisk[] | cdktf.IResolvable

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
  public get(index: number): TemplateDiskOutputReference {
    return new TemplateDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateFeatures {
  /**
  * Useful for power management, for example, with KVM guests it is required for graceful shutdown to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#acpi Template#acpi}
  */
  readonly acpi?: string;
  /**
  * Enables the advanced programmable IRQ management. Useful for SMP machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#apic Template#apic}
  */
  readonly apic?: string;
  /**
  * Enables the QEMU Guest Agent communication. This only creates the socket inside the VM, the Guest Agent itself must be installed and started in the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#guest_agent Template#guest_agent}
  */
  readonly guestAgent?: string;
  /**
  * Add hyperv extensions to the VM. The options can be configured in the driver configuration, HYPERV_OPTIONS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#hyperv Template#hyperv}
  */
  readonly hyperv?: string;
  /**
  * Number of iothreads for virtio disks. By default threads will be assign to disk by round robin algorithm. Disk thread id can be forced by disk IOTHREAD attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#iothreads Template#iothreads}
  */
  readonly iothreads?: string;
  /**
  * The guest clock will be synchronized to the host’s configured timezone when booted. Useful for Windows VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#localtime Template#localtime}
  */
  readonly localtime?: string;
  /**
  * Physical address extension mode allows 32-bit guests to address more than 4 GB of memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#pae Template#pae}
  */
  readonly pae?: string;
  /**
  * Numer of vCPU queues for the virtio-scsi controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#virtio_scsi_queues Template#virtio_scsi_queues}
  */
  readonly virtioScsiQueues?: string;
}

export function templateFeaturesToTerraform(struct?: TemplateFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acpi: cdktf.stringToTerraform(struct!.acpi),
    apic: cdktf.stringToTerraform(struct!.apic),
    guest_agent: cdktf.stringToTerraform(struct!.guestAgent),
    hyperv: cdktf.stringToTerraform(struct!.hyperv),
    iothreads: cdktf.stringToTerraform(struct!.iothreads),
    localtime: cdktf.stringToTerraform(struct!.localtime),
    pae: cdktf.stringToTerraform(struct!.pae),
    virtio_scsi_queues: cdktf.stringToTerraform(struct!.virtioScsiQueues),
  }
}


export function templateFeaturesToHclTerraform(struct?: TemplateFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acpi: {
      value: cdktf.stringToHclTerraform(struct!.acpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic: {
      value: cdktf.stringToHclTerraform(struct!.apic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_agent: {
      value: cdktf.stringToHclTerraform(struct!.guestAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hyperv: {
      value: cdktf.stringToHclTerraform(struct!.hyperv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iothreads: {
      value: cdktf.stringToHclTerraform(struct!.iothreads),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localtime: {
      value: cdktf.stringToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pae: {
      value: cdktf.stringToHclTerraform(struct!.pae),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtio_scsi_queues: {
      value: cdktf.stringToHclTerraform(struct!.virtioScsiQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateFeatures | cdktf.IResolvable | undefined {
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
    if (this._guestAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAgent = this._guestAgent;
    }
    if (this._hyperv !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperv = this._hyperv;
    }
    if (this._iothreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.iothreads = this._iothreads;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._pae !== undefined) {
      hasAnyValues = true;
      internalValueResult.pae = this._pae;
    }
    if (this._virtioScsiQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtioScsiQueues = this._virtioScsiQueues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acpi = undefined;
      this._apic = undefined;
      this._guestAgent = undefined;
      this._hyperv = undefined;
      this._iothreads = undefined;
      this._localtime = undefined;
      this._pae = undefined;
      this._virtioScsiQueues = undefined;
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
      this._guestAgent = value.guestAgent;
      this._hyperv = value.hyperv;
      this._iothreads = value.iothreads;
      this._localtime = value.localtime;
      this._pae = value.pae;
      this._virtioScsiQueues = value.virtioScsiQueues;
    }
  }

  // acpi - computed: false, optional: true, required: false
  private _acpi?: string; 
  public get acpi() {
    return this.getStringAttribute('acpi');
  }
  public set acpi(value: string) {
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
  private _apic?: string; 
  public get apic() {
    return this.getStringAttribute('apic');
  }
  public set apic(value: string) {
    this._apic = value;
  }
  public resetApic() {
    this._apic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicInput() {
    return this._apic;
  }

  // guest_agent - computed: false, optional: true, required: false
  private _guestAgent?: string; 
  public get guestAgent() {
    return this.getStringAttribute('guest_agent');
  }
  public set guestAgent(value: string) {
    this._guestAgent = value;
  }
  public resetGuestAgent() {
    this._guestAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAgentInput() {
    return this._guestAgent;
  }

  // hyperv - computed: false, optional: true, required: false
  private _hyperv?: string; 
  public get hyperv() {
    return this.getStringAttribute('hyperv');
  }
  public set hyperv(value: string) {
    this._hyperv = value;
  }
  public resetHyperv() {
    this._hyperv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervInput() {
    return this._hyperv;
  }

  // iothreads - computed: false, optional: true, required: false
  private _iothreads?: string; 
  public get iothreads() {
    return this.getStringAttribute('iothreads');
  }
  public set iothreads(value: string) {
    this._iothreads = value;
  }
  public resetIothreads() {
    this._iothreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iothreadsInput() {
    return this._iothreads;
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: string; 
  public get localtime() {
    return this.getStringAttribute('localtime');
  }
  public set localtime(value: string) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // pae - computed: false, optional: true, required: false
  private _pae?: string; 
  public get pae() {
    return this.getStringAttribute('pae');
  }
  public set pae(value: string) {
    this._pae = value;
  }
  public resetPae() {
    this._pae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paeInput() {
    return this._pae;
  }

  // virtio_scsi_queues - computed: false, optional: true, required: false
  private _virtioScsiQueues?: string; 
  public get virtioScsiQueues() {
    return this.getStringAttribute('virtio_scsi_queues');
  }
  public set virtioScsiQueues(value: string) {
    this._virtioScsiQueues = value;
  }
  public resetVirtioScsiQueues() {
    this._virtioScsiQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtioScsiQueuesInput() {
    return this._virtioScsiQueues;
  }
}

export class TemplateFeaturesList extends cdktf.ComplexList {
  public internalValue? : TemplateFeatures[] | cdktf.IResolvable

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
  public get(index: number): TemplateFeaturesOutputReference {
    return new TemplateFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateGraphics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#keymap Template#keymap}
  */
  readonly keymap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#listen Template#listen}
  */
  readonly listen: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#passwd Template#passwd}
  */
  readonly passwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#port Template#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#random_passwd Template#random_passwd}
  */
  readonly randomPasswd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#type Template#type}
  */
  readonly type: string;
}

export function templateGraphicsToTerraform(struct?: TemplateGraphicsOutputReference | TemplateGraphics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keymap: cdktf.stringToTerraform(struct!.keymap),
    listen: cdktf.stringToTerraform(struct!.listen),
    passwd: cdktf.stringToTerraform(struct!.passwd),
    port: cdktf.stringToTerraform(struct!.port),
    random_passwd: cdktf.booleanToTerraform(struct!.randomPasswd),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function templateGraphicsToHclTerraform(struct?: TemplateGraphicsOutputReference | TemplateGraphics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keymap: {
      value: cdktf.stringToHclTerraform(struct!.keymap),
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
    passwd: {
      value: cdktf.stringToHclTerraform(struct!.passwd),
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
    random_passwd: {
      value: cdktf.booleanToHclTerraform(struct!.randomPasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class TemplateGraphicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateGraphics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keymap !== undefined) {
      hasAnyValues = true;
      internalValueResult.keymap = this._keymap;
    }
    if (this._listen !== undefined) {
      hasAnyValues = true;
      internalValueResult.listen = this._listen;
    }
    if (this._passwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwd = this._passwd;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._randomPasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomPasswd = this._randomPasswd;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGraphics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keymap = undefined;
      this._listen = undefined;
      this._passwd = undefined;
      this._port = undefined;
      this._randomPasswd = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keymap = value.keymap;
      this._listen = value.listen;
      this._passwd = value.passwd;
      this._port = value.port;
      this._randomPasswd = value.randomPasswd;
      this._type = value.type;
    }
  }

  // keymap - computed: false, optional: true, required: false
  private _keymap?: string; 
  public get keymap() {
    return this.getStringAttribute('keymap');
  }
  public set keymap(value: string) {
    this._keymap = value;
  }
  public resetKeymap() {
    this._keymap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keymapInput() {
    return this._keymap;
  }

  // listen - computed: false, optional: false, required: true
  private _listen?: string; 
  public get listen() {
    return this.getStringAttribute('listen');
  }
  public set listen(value: string) {
    this._listen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
  }

  // passwd - computed: false, optional: true, required: false
  private _passwd?: string; 
  public get passwd() {
    return this.getStringAttribute('passwd');
  }
  public set passwd(value: string) {
    this._passwd = value;
  }
  public resetPasswd() {
    this._passwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdInput() {
    return this._passwd;
  }

  // port - computed: true, optional: true, required: false
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

  // random_passwd - computed: false, optional: true, required: false
  private _randomPasswd?: boolean | cdktf.IResolvable; 
  public get randomPasswd() {
    return this.getBooleanAttribute('random_passwd');
  }
  public set randomPasswd(value: boolean | cdktf.IResolvable) {
    this._randomPasswd = value;
  }
  public resetRandomPasswd() {
    this._randomPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomPasswdInput() {
    return this._randomPasswd;
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
export interface TemplateNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#dns Template#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#gateway Template#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip Template#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6 Template#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6_global Template#ip6_global}
  */
  readonly ip6Global?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6_link Template#ip6_link}
  */
  readonly ip6Link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6_ula Template#ip6_ula}
  */
  readonly ip6Ula?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#mac Template#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#method Template#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#model Template#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#name Template#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#network_id Template#network_id}
  */
  readonly networkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#network_mode_auto Template#network_mode_auto}
  */
  readonly networkModeAuto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#physical_device Template#physical_device}
  */
  readonly physicalDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#sched_rank Template#sched_rank}
  */
  readonly schedRank?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#sched_requirements Template#sched_requirements}
  */
  readonly schedRequirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#security_groups Template#security_groups}
  */
  readonly securityGroups?: number[];
  /**
  * Only if model is virtio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#virtio_queues Template#virtio_queues}
  */
  readonly virtioQueues?: string;
}

export function templateNicToTerraform(struct?: TemplateNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    ip6_global: cdktf.stringToTerraform(struct!.ip6Global),
    ip6_link: cdktf.stringToTerraform(struct!.ip6Link),
    ip6_ula: cdktf.stringToTerraform(struct!.ip6Ula),
    mac: cdktf.stringToTerraform(struct!.mac),
    method: cdktf.stringToTerraform(struct!.method),
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.numberToTerraform(struct!.networkId),
    network_mode_auto: cdktf.booleanToTerraform(struct!.networkModeAuto),
    physical_device: cdktf.stringToTerraform(struct!.physicalDevice),
    sched_rank: cdktf.stringToTerraform(struct!.schedRank),
    sched_requirements: cdktf.stringToTerraform(struct!.schedRequirements),
    security_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.securityGroups),
    virtio_queues: cdktf.stringToTerraform(struct!.virtioQueues),
  }
}


export function templateNicToHclTerraform(struct?: TemplateNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
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
    ip6_global: {
      value: cdktf.stringToHclTerraform(struct!.ip6Global),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_link: {
      value: cdktf.stringToHclTerraform(struct!.ip6Link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_ula: {
      value: cdktf.stringToHclTerraform(struct!.ip6Ula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.numberToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_mode_auto: {
      value: cdktf.booleanToHclTerraform(struct!.networkModeAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    physical_device: {
      value: cdktf.stringToHclTerraform(struct!.physicalDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sched_rank: {
      value: cdktf.stringToHclTerraform(struct!.schedRank),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sched_requirements: {
      value: cdktf.stringToHclTerraform(struct!.schedRequirements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    virtio_queues: {
      value: cdktf.stringToHclTerraform(struct!.virtioQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._ip6Global !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Global = this._ip6Global;
    }
    if (this._ip6Link !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Link = this._ip6Link;
    }
    if (this._ip6Ula !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Ula = this._ip6Ula;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._networkModeAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkModeAuto = this._networkModeAuto;
    }
    if (this._physicalDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalDevice = this._physicalDevice;
    }
    if (this._schedRank !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedRank = this._schedRank;
    }
    if (this._schedRequirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedRequirements = this._schedRequirements;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._virtioQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtioQueues = this._virtioQueues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._gateway = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._ip6Global = undefined;
      this._ip6Link = undefined;
      this._ip6Ula = undefined;
      this._mac = undefined;
      this._method = undefined;
      this._model = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._networkModeAuto = undefined;
      this._physicalDevice = undefined;
      this._schedRank = undefined;
      this._schedRequirements = undefined;
      this._securityGroups = undefined;
      this._virtioQueues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._gateway = value.gateway;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._ip6Global = value.ip6Global;
      this._ip6Link = value.ip6Link;
      this._ip6Ula = value.ip6Ula;
      this._mac = value.mac;
      this._method = value.method;
      this._model = value.model;
      this._name = value.name;
      this._networkId = value.networkId;
      this._networkModeAuto = value.networkModeAuto;
      this._physicalDevice = value.physicalDevice;
      this._schedRank = value.schedRank;
      this._schedRequirements = value.schedRequirements;
      this._securityGroups = value.securityGroups;
      this._virtioQueues = value.virtioQueues;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip6_global - computed: false, optional: true, required: false
  private _ip6Global?: string; 
  public get ip6Global() {
    return this.getStringAttribute('ip6_global');
  }
  public set ip6Global(value: string) {
    this._ip6Global = value;
  }
  public resetIp6Global() {
    this._ip6Global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GlobalInput() {
    return this._ip6Global;
  }

  // ip6_link - computed: false, optional: true, required: false
  private _ip6Link?: string; 
  public get ip6Link() {
    return this.getStringAttribute('ip6_link');
  }
  public set ip6Link(value: string) {
    this._ip6Link = value;
  }
  public resetIp6Link() {
    this._ip6Link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6LinkInput() {
    return this._ip6Link;
  }

  // ip6_ula - computed: false, optional: true, required: false
  private _ip6Ula?: string; 
  public get ip6Ula() {
    return this.getStringAttribute('ip6_ula');
  }
  public set ip6Ula(value: string) {
    this._ip6Ula = value;
  }
  public resetIp6Ula() {
    this._ip6Ula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6UlaInput() {
    return this._ip6Ula;
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_mode_auto - computed: false, optional: true, required: false
  private _networkModeAuto?: boolean | cdktf.IResolvable; 
  public get networkModeAuto() {
    return this.getBooleanAttribute('network_mode_auto');
  }
  public set networkModeAuto(value: boolean | cdktf.IResolvable) {
    this._networkModeAuto = value;
  }
  public resetNetworkModeAuto() {
    this._networkModeAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeAutoInput() {
    return this._networkModeAuto;
  }

  // physical_device - computed: false, optional: true, required: false
  private _physicalDevice?: string; 
  public get physicalDevice() {
    return this.getStringAttribute('physical_device');
  }
  public set physicalDevice(value: string) {
    this._physicalDevice = value;
  }
  public resetPhysicalDevice() {
    this._physicalDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDeviceInput() {
    return this._physicalDevice;
  }

  // sched_rank - computed: false, optional: true, required: false
  private _schedRank?: string; 
  public get schedRank() {
    return this.getStringAttribute('sched_rank');
  }
  public set schedRank(value: string) {
    this._schedRank = value;
  }
  public resetSchedRank() {
    this._schedRank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedRankInput() {
    return this._schedRank;
  }

  // sched_requirements - computed: false, optional: true, required: false
  private _schedRequirements?: string; 
  public get schedRequirements() {
    return this.getStringAttribute('sched_requirements');
  }
  public set schedRequirements(value: string) {
    this._schedRequirements = value;
  }
  public resetSchedRequirements() {
    this._schedRequirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedRequirementsInput() {
    return this._schedRequirements;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: number[]; 
  public get securityGroups() {
    return this.getNumberListAttribute('security_groups');
  }
  public set securityGroups(value: number[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // virtio_queues - computed: false, optional: true, required: false
  private _virtioQueues?: string; 
  public get virtioQueues() {
    return this.getStringAttribute('virtio_queues');
  }
  public set virtioQueues(value: string) {
    this._virtioQueues = value;
  }
  public resetVirtioQueues() {
    this._virtioQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtioQueuesInput() {
    return this._virtioQueues;
  }
}

export class TemplateNicList extends cdktf.ComplexList {
  public internalValue? : TemplateNic[] | cdktf.IResolvable

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
  public get(index: number): TemplateNicOutputReference {
    return new TemplateNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateNicAlias {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#dns Template#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#gateway Template#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip Template#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6 Template#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6_global Template#ip6_global}
  */
  readonly ip6Global?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6_link Template#ip6_link}
  */
  readonly ip6Link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#ip6_ula Template#ip6_ula}
  */
  readonly ip6Ula?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#mac Template#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#name Template#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#network Template#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#network_id Template#network_id}
  */
  readonly networkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#parent Template#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#security_groups Template#security_groups}
  */
  readonly securityGroups?: number[];
}

export function templateNicAliasToTerraform(struct?: TemplateNicAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    ip6_global: cdktf.stringToTerraform(struct!.ip6Global),
    ip6_link: cdktf.stringToTerraform(struct!.ip6Link),
    ip6_ula: cdktf.stringToTerraform(struct!.ip6Ula),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    network_id: cdktf.numberToTerraform(struct!.networkId),
    parent: cdktf.stringToTerraform(struct!.parent),
    security_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.securityGroups),
  }
}


export function templateNicAliasToHclTerraform(struct?: TemplateNicAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
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
    ip6_global: {
      value: cdktf.stringToHclTerraform(struct!.ip6Global),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_link: {
      value: cdktf.stringToHclTerraform(struct!.ip6Link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_ula: {
      value: cdktf.stringToHclTerraform(struct!.ip6Ula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.numberToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateNicAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateNicAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._ip6Global !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Global = this._ip6Global;
    }
    if (this._ip6Link !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Link = this._ip6Link;
    }
    if (this._ip6Ula !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Ula = this._ip6Ula;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateNicAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._gateway = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._ip6Global = undefined;
      this._ip6Link = undefined;
      this._ip6Ula = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._network = undefined;
      this._networkId = undefined;
      this._parent = undefined;
      this._securityGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._gateway = value.gateway;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._ip6Global = value.ip6Global;
      this._ip6Link = value.ip6Link;
      this._ip6Ula = value.ip6Ula;
      this._mac = value.mac;
      this._name = value.name;
      this._network = value.network;
      this._networkId = value.networkId;
      this._parent = value.parent;
      this._securityGroups = value.securityGroups;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip6_global - computed: false, optional: true, required: false
  private _ip6Global?: string; 
  public get ip6Global() {
    return this.getStringAttribute('ip6_global');
  }
  public set ip6Global(value: string) {
    this._ip6Global = value;
  }
  public resetIp6Global() {
    this._ip6Global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GlobalInput() {
    return this._ip6Global;
  }

  // ip6_link - computed: false, optional: true, required: false
  private _ip6Link?: string; 
  public get ip6Link() {
    return this.getStringAttribute('ip6_link');
  }
  public set ip6Link(value: string) {
    this._ip6Link = value;
  }
  public resetIp6Link() {
    this._ip6Link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6LinkInput() {
    return this._ip6Link;
  }

  // ip6_ula - computed: false, optional: true, required: false
  private _ip6Ula?: string; 
  public get ip6Ula() {
    return this.getStringAttribute('ip6_ula');
  }
  public set ip6Ula(value: string) {
    this._ip6Ula = value;
  }
  public resetIp6Ula() {
    this._ip6Ula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6UlaInput() {
    return this._ip6Ula;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: number[]; 
  public get securityGroups() {
    return this.getNumberListAttribute('security_groups');
  }
  public set securityGroups(value: number[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }
}

export class TemplateNicAliasList extends cdktf.ComplexList {
  public internalValue? : TemplateNicAlias[] | cdktf.IResolvable

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
  public get(index: number): TemplateNicAliasOutputReference {
    return new TemplateNicAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#arch Template#arch}
  */
  readonly arch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#boot Template#boot}
  */
  readonly boot: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#bootloader Template#bootloader}
  */
  readonly bootloader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#firmware Template#firmware}
  */
  readonly firmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#firmware_secure Template#firmware_secure}
  */
  readonly firmwareSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#initrd Template#initrd}
  */
  readonly initrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#initrd_ds Template#initrd_ds}
  */
  readonly initrdDs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#kernel Template#kernel}
  */
  readonly kernel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#kernel_cmd Template#kernel_cmd}
  */
  readonly kernelCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#kernel_ds Template#kernel_ds}
  */
  readonly kernelDs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#machine Template#machine}
  */
  readonly machine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#root Template#root}
  */
  readonly root?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#sd_disk_bus Template#sd_disk_bus}
  */
  readonly sdDiskBus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#uuid Template#uuid}
  */
  readonly uuid?: string;
}

export function templateOsToTerraform(struct?: TemplateOsOutputReference | TemplateOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    boot: cdktf.stringToTerraform(struct!.boot),
    bootloader: cdktf.stringToTerraform(struct!.bootloader),
    firmware: cdktf.stringToTerraform(struct!.firmware),
    firmware_secure: cdktf.booleanToTerraform(struct!.firmwareSecure),
    initrd: cdktf.stringToTerraform(struct!.initrd),
    initrd_ds: cdktf.stringToTerraform(struct!.initrdDs),
    kernel: cdktf.stringToTerraform(struct!.kernel),
    kernel_cmd: cdktf.stringToTerraform(struct!.kernelCmd),
    kernel_ds: cdktf.stringToTerraform(struct!.kernelDs),
    machine: cdktf.stringToTerraform(struct!.machine),
    root: cdktf.stringToTerraform(struct!.root),
    sd_disk_bus: cdktf.stringToTerraform(struct!.sdDiskBus),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function templateOsToHclTerraform(struct?: TemplateOsOutputReference | TemplateOs): any {
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
    boot: {
      value: cdktf.stringToHclTerraform(struct!.boot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootloader: {
      value: cdktf.stringToHclTerraform(struct!.bootloader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware: {
      value: cdktf.stringToHclTerraform(struct!.firmware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware_secure: {
      value: cdktf.booleanToHclTerraform(struct!.firmwareSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initrd: {
      value: cdktf.stringToHclTerraform(struct!.initrd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initrd_ds: {
      value: cdktf.stringToHclTerraform(struct!.initrdDs),
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
    kernel_cmd: {
      value: cdktf.stringToHclTerraform(struct!.kernelCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel_ds: {
      value: cdktf.stringToHclTerraform(struct!.kernelDs),
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
    root: {
      value: cdktf.stringToHclTerraform(struct!.root),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sd_disk_bus: {
      value: cdktf.stringToHclTerraform(struct!.sdDiskBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._boot !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot = this._boot;
    }
    if (this._bootloader !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootloader = this._bootloader;
    }
    if (this._firmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware;
    }
    if (this._firmwareSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwareSecure = this._firmwareSecure;
    }
    if (this._initrd !== undefined) {
      hasAnyValues = true;
      internalValueResult.initrd = this._initrd;
    }
    if (this._initrdDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.initrdDs = this._initrdDs;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    if (this._kernelCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelCmd = this._kernelCmd;
    }
    if (this._kernelDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelDs = this._kernelDs;
    }
    if (this._machine !== undefined) {
      hasAnyValues = true;
      internalValueResult.machine = this._machine;
    }
    if (this._root !== undefined) {
      hasAnyValues = true;
      internalValueResult.root = this._root;
    }
    if (this._sdDiskBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdDiskBus = this._sdDiskBus;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arch = undefined;
      this._boot = undefined;
      this._bootloader = undefined;
      this._firmware = undefined;
      this._firmwareSecure = undefined;
      this._initrd = undefined;
      this._initrdDs = undefined;
      this._kernel = undefined;
      this._kernelCmd = undefined;
      this._kernelDs = undefined;
      this._machine = undefined;
      this._root = undefined;
      this._sdDiskBus = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arch = value.arch;
      this._boot = value.boot;
      this._bootloader = value.bootloader;
      this._firmware = value.firmware;
      this._firmwareSecure = value.firmwareSecure;
      this._initrd = value.initrd;
      this._initrdDs = value.initrdDs;
      this._kernel = value.kernel;
      this._kernelCmd = value.kernelCmd;
      this._kernelDs = value.kernelDs;
      this._machine = value.machine;
      this._root = value.root;
      this._sdDiskBus = value.sdDiskBus;
      this._uuid = value.uuid;
    }
  }

  // arch - computed: false, optional: false, required: true
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // boot - computed: false, optional: false, required: true
  private _boot?: string; 
  public get boot() {
    return this.getStringAttribute('boot');
  }
  public set boot(value: string) {
    this._boot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot;
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

  // firmware_secure - computed: false, optional: true, required: false
  private _firmwareSecure?: boolean | cdktf.IResolvable; 
  public get firmwareSecure() {
    return this.getBooleanAttribute('firmware_secure');
  }
  public set firmwareSecure(value: boolean | cdktf.IResolvable) {
    this._firmwareSecure = value;
  }
  public resetFirmwareSecure() {
    this._firmwareSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareSecureInput() {
    return this._firmwareSecure;
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

  // initrd_ds - computed: false, optional: true, required: false
  private _initrdDs?: string; 
  public get initrdDs() {
    return this.getStringAttribute('initrd_ds');
  }
  public set initrdDs(value: string) {
    this._initrdDs = value;
  }
  public resetInitrdDs() {
    this._initrdDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initrdDsInput() {
    return this._initrdDs;
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

  // kernel_cmd - computed: false, optional: true, required: false
  private _kernelCmd?: string; 
  public get kernelCmd() {
    return this.getStringAttribute('kernel_cmd');
  }
  public set kernelCmd(value: string) {
    this._kernelCmd = value;
  }
  public resetKernelCmd() {
    this._kernelCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelCmdInput() {
    return this._kernelCmd;
  }

  // kernel_ds - computed: false, optional: true, required: false
  private _kernelDs?: string; 
  public get kernelDs() {
    return this.getStringAttribute('kernel_ds');
  }
  public set kernelDs(value: string) {
    this._kernelDs = value;
  }
  public resetKernelDs() {
    this._kernelDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelDsInput() {
    return this._kernelDs;
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

  // root - computed: false, optional: true, required: false
  private _root?: string; 
  public get root() {
    return this.getStringAttribute('root');
  }
  public set root(value: string) {
    this._root = value;
  }
  public resetRoot() {
    this._root = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootInput() {
    return this._root;
  }

  // sd_disk_bus - computed: false, optional: true, required: false
  private _sdDiskBus?: string; 
  public get sdDiskBus() {
    return this.getStringAttribute('sd_disk_bus');
  }
  public set sdDiskBus(value: string) {
    this._sdDiskBus = value;
  }
  public resetSdDiskBus() {
    this._sdDiskBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdDiskBusInput() {
    return this._sdDiskBus;
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
}
export interface TemplateRaw {
  /**
  * Low-level data to pass to the hypervisor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#data Template#data}
  */
  readonly data: string;
  /**
  * Name of the hypervisor: kvm, lxd, vmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#type Template#type}
  */
  readonly type: string;
}

export function templateRawToTerraform(struct?: TemplateRawOutputReference | TemplateRaw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function templateRawToHclTerraform(struct?: TemplateRawOutputReference | TemplateRaw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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

export class TemplateRawOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateRaw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRaw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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
export interface TemplateTemplateSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#elements Template#elements}
  */
  readonly elements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#name Template#name}
  */
  readonly name: string;
}

export function templateTemplateSectionToTerraform(struct?: TemplateTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elements),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templateTemplateSectionToHclTerraform(struct?: TemplateTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elements: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.elements),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class TemplateTemplateSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateTemplateSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateTemplateSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elements = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elements = value.elements;
      this._name = value.name;
    }
  }

  // elements - computed: false, optional: true, required: false
  private _elements?: { [key: string]: string }; 
  public get elements() {
    return this.getStringMapAttribute('elements');
  }
  public set elements(value: { [key: string]: string }) {
    this._elements = value;
  }
  public resetElements() {
    this._elements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
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

export class TemplateTemplateSectionList extends cdktf.ComplexList {
  public internalValue? : TemplateTemplateSection[] | cdktf.IResolvable

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
  public get(index: number): TemplateTemplateSectionOutputReference {
    return new TemplateTemplateSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateVmgroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#role Template#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#vmgroup_id Template#vmgroup_id}
  */
  readonly vmgroupId: number;
}

export function templateVmgroupToTerraform(struct?: TemplateVmgroupOutputReference | TemplateVmgroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    vmgroup_id: cdktf.numberToTerraform(struct!.vmgroupId),
  }
}


export function templateVmgroupToHclTerraform(struct?: TemplateVmgroupOutputReference | TemplateVmgroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmgroup_id: {
      value: cdktf.numberToHclTerraform(struct!.vmgroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateVmgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateVmgroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._vmgroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmgroupId = this._vmgroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateVmgroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._vmgroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._vmgroupId = value.vmgroupId;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // vmgroup_id - computed: false, optional: false, required: true
  private _vmgroupId?: number; 
  public get vmgroupId() {
    return this.getNumberAttribute('vmgroup_id');
  }
  public set vmgroupId(value: number) {
    this._vmgroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmgroupIdInput() {
    return this._vmgroupId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template opennebula_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/template opennebula_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_template',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._cpu = config.cpu;
    this._description = config.description;
    this._group = config.group;
    this._id = config.id;
    this._lock = config.lock;
    this._memory = config.memory;
    this._name = config.name;
    this._permissions = config.permissions;
    this._schedDsRequirements = config.schedDsRequirements;
    this._schedRequirements = config.schedRequirements;
    this._tags = config.tags;
    this._userInputs = config.userInputs;
    this._vcpu = config.vcpu;
    this._cpumodel.internalValue = config.cpumodel;
    this._disk.internalValue = config.disk;
    this._features.internalValue = config.features;
    this._graphics.internalValue = config.graphics;
    this._nic.internalValue = config.nic;
    this._nicAlias.internalValue = config.nicAlias;
    this._os.internalValue = config.os;
    this._raw.internalValue = config.raw;
    this._templateSection.internalValue = config.templateSection;
    this._vmgroup.internalValue = config.vmgroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // default_tags - computed: true, optional: false, required: false
  private _defaultTags = new cdktf.StringMap(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
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

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // gname - computed: true, optional: false, required: false
  public get gname() {
    return this.getStringAttribute('gname');
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

  // memory - computed: true, optional: true, required: false
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

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // reg_time - computed: true, optional: false, required: false
  public get regTime() {
    return this.getNumberAttribute('reg_time');
  }

  // sched_ds_requirements - computed: false, optional: true, required: false
  private _schedDsRequirements?: string; 
  public get schedDsRequirements() {
    return this.getStringAttribute('sched_ds_requirements');
  }
  public set schedDsRequirements(value: string) {
    this._schedDsRequirements = value;
  }
  public resetSchedDsRequirements() {
    this._schedDsRequirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedDsRequirementsInput() {
    return this._schedDsRequirements;
  }

  // sched_requirements - computed: false, optional: true, required: false
  private _schedRequirements?: string; 
  public get schedRequirements() {
    return this.getStringAttribute('sched_requirements');
  }
  public set schedRequirements(value: string) {
    this._schedRequirements = value;
  }
  public resetSchedRequirements() {
    this._schedRequirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedRequirementsInput() {
    return this._schedRequirements;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // uname - computed: true, optional: false, required: false
  public get uname() {
    return this.getStringAttribute('uname');
  }

  // user_inputs - computed: false, optional: true, required: false
  private _userInputs?: { [key: string]: string }; 
  public get userInputs() {
    return this.getStringMapAttribute('user_inputs');
  }
  public set userInputs(value: { [key: string]: string }) {
    this._userInputs = value;
  }
  public resetUserInputs() {
    this._userInputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputsInput() {
    return this._userInputs;
  }

  // vcpu - computed: true, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // cpumodel - computed: false, optional: true, required: false
  private _cpumodel = new TemplateCpumodelOutputReference(this, "cpumodel");
  public get cpumodel() {
    return this._cpumodel;
  }
  public putCpumodel(value: TemplateCpumodel) {
    this._cpumodel.internalValue = value;
  }
  public resetCpumodel() {
    this._cpumodel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpumodelInput() {
    return this._cpumodel.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new TemplateDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: TemplateDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new TemplateFeaturesList(this, "features", true);
  public get features() {
    return this._features;
  }
  public putFeatures(value: TemplateFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // graphics - computed: false, optional: true, required: false
  private _graphics = new TemplateGraphicsOutputReference(this, "graphics");
  public get graphics() {
    return this._graphics;
  }
  public putGraphics(value: TemplateGraphics) {
    this._graphics.internalValue = value;
  }
  public resetGraphics() {
    this._graphics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphicsInput() {
    return this._graphics.internalValue;
  }

  // nic - computed: false, optional: true, required: false
  private _nic = new TemplateNicList(this, "nic", false);
  public get nic() {
    return this._nic;
  }
  public putNic(value: TemplateNic[] | cdktf.IResolvable) {
    this._nic.internalValue = value;
  }
  public resetNic() {
    this._nic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicInput() {
    return this._nic.internalValue;
  }

  // nic_alias - computed: false, optional: true, required: false
  private _nicAlias = new TemplateNicAliasList(this, "nic_alias", false);
  public get nicAlias() {
    return this._nicAlias;
  }
  public putNicAlias(value: TemplateNicAlias[] | cdktf.IResolvable) {
    this._nicAlias.internalValue = value;
  }
  public resetNicAlias() {
    this._nicAlias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicAliasInput() {
    return this._nicAlias.internalValue;
  }

  // os - computed: false, optional: true, required: false
  private _os = new TemplateOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: TemplateOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // raw - computed: false, optional: true, required: false
  private _raw = new TemplateRawOutputReference(this, "raw");
  public get raw() {
    return this._raw;
  }
  public putRaw(value: TemplateRaw) {
    this._raw.internalValue = value;
  }
  public resetRaw() {
    this._raw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw.internalValue;
  }

  // template_section - computed: false, optional: true, required: false
  private _templateSection = new TemplateTemplateSectionList(this, "template_section", true);
  public get templateSection() {
    return this._templateSection;
  }
  public putTemplateSection(value: TemplateTemplateSection[] | cdktf.IResolvable) {
    this._templateSection.internalValue = value;
  }
  public resetTemplateSection() {
    this._templateSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSectionInput() {
    return this._templateSection.internalValue;
  }

  // vmgroup - computed: false, optional: true, required: false
  private _vmgroup = new TemplateVmgroupOutputReference(this, "vmgroup");
  public get vmgroup() {
    return this._vmgroup;
  }
  public putVmgroup(value: TemplateVmgroup) {
    this._vmgroup.internalValue = value;
  }
  public resetVmgroup() {
    this._vmgroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmgroupInput() {
    return this._vmgroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.hashMapper(cdktf.stringToTerraform)(this._context),
      cpu: cdktf.numberToTerraform(this._cpu),
      description: cdktf.stringToTerraform(this._description),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      lock: cdktf.stringToTerraform(this._lock),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      sched_ds_requirements: cdktf.stringToTerraform(this._schedDsRequirements),
      sched_requirements: cdktf.stringToTerraform(this._schedRequirements),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_inputs: cdktf.hashMapper(cdktf.stringToTerraform)(this._userInputs),
      vcpu: cdktf.numberToTerraform(this._vcpu),
      cpumodel: templateCpumodelToTerraform(this._cpumodel.internalValue),
      disk: cdktf.listMapper(templateDiskToTerraform, true)(this._disk.internalValue),
      features: cdktf.listMapper(templateFeaturesToTerraform, true)(this._features.internalValue),
      graphics: templateGraphicsToTerraform(this._graphics.internalValue),
      nic: cdktf.listMapper(templateNicToTerraform, true)(this._nic.internalValue),
      nic_alias: cdktf.listMapper(templateNicAliasToTerraform, true)(this._nicAlias.internalValue),
      os: templateOsToTerraform(this._os.internalValue),
      raw: templateRawToTerraform(this._raw.internalValue),
      template_section: cdktf.listMapper(templateTemplateSectionToTerraform, true)(this._templateSection.internalValue),
      vmgroup: templateVmgroupToTerraform(this._vmgroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._context),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
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
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sched_ds_requirements: {
        value: cdktf.stringToHclTerraform(this._schedDsRequirements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sched_requirements: {
        value: cdktf.stringToHclTerraform(this._schedRequirements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_inputs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userInputs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vcpu: {
        value: cdktf.numberToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpumodel: {
        value: templateCpumodelToHclTerraform(this._cpumodel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateCpumodelList",
      },
      disk: {
        value: cdktf.listMapperHcl(templateDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateDiskList",
      },
      features: {
        value: cdktf.listMapperHcl(templateFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TemplateFeaturesList",
      },
      graphics: {
        value: templateGraphicsToHclTerraform(this._graphics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGraphicsList",
      },
      nic: {
        value: cdktf.listMapperHcl(templateNicToHclTerraform, true)(this._nic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateNicList",
      },
      nic_alias: {
        value: cdktf.listMapperHcl(templateNicAliasToHclTerraform, true)(this._nicAlias.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateNicAliasList",
      },
      os: {
        value: templateOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateOsList",
      },
      raw: {
        value: templateRawToHclTerraform(this._raw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateRawList",
      },
      template_section: {
        value: cdktf.listMapperHcl(templateTemplateSectionToHclTerraform, true)(this._templateSection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TemplateTemplateSectionList",
      },
      vmgroup: {
        value: templateVmgroupToHclTerraform(this._vmgroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateVmgroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
