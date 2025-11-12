// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualRouterInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Context variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#context VirtualRouterInstance#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * Amount of CPU quota assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#cpu VirtualRouterInstance#cpu}
  */
  readonly cpu?: number;
  /**
  * A description of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#description VirtualRouterInstance#description}
  */
  readonly description?: string;
  /**
  * Name of the Group that onws the resource, If empty, it uses caller group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#group VirtualRouterInstance#group}
  */
  readonly group?: string;
  /**
  * Immediately poweroff/terminate/reboot/undeploy the VM. (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#hard_shutdown VirtualRouterInstance#hard_shutdown}
  */
  readonly hardShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#id VirtualRouterInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#lock VirtualRouterInstance#lock}
  */
  readonly lock?: string;
  /**
  * Amount of memory (RAM) in MB assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#memory VirtualRouterInstance#memory}
  */
  readonly memory?: number;
  /**
  * Name of the VM. If empty, defaults to 'templatename-<vmid>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#name VirtualRouterInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#on_disk_change VirtualRouterInstance#on_disk_change}
  */
  readonly onDiskChange?: string;
  /**
  * Pending state of the VM during its creation, by default it is set to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#pending VirtualRouterInstance#pending}
  */
  readonly pending?: boolean | cdktf.IResolvable;
  /**
  * Permissions for the resource (in Unix format, owner-group-other, use-manage-admin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#permissions VirtualRouterInstance#permissions}
  */
  readonly permissions?: string;
  /**
  * Storage placement requirements to deploy the resource following specific rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#sched_ds_requirements VirtualRouterInstance#sched_ds_requirements}
  */
  readonly schedDsRequirements?: string;
  /**
  * Scheduling requirements to deploy the resource following specific rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#sched_requirements VirtualRouterInstance#sched_requirements}
  */
  readonly schedRequirements?: string;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#tags VirtualRouterInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Timeout (in minutes) within resource should be available. Default: 3 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#timeout VirtualRouterInstance#timeout}
  */
  readonly timeout?: number;
  /**
  * Number of virtual CPUs assigned to the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#vcpu VirtualRouterInstance#vcpu}
  */
  readonly vcpu?: number;
  /**
  * Identifier of the parent virtual router ressource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#virtual_router_id VirtualRouterInstance#virtual_router_id}
  */
  readonly virtualRouterId: number;
  /**
  * cpumodel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#cpumodel VirtualRouterInstance#cpumodel}
  */
  readonly cpumodel?: VirtualRouterInstanceCpumodel;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#disk VirtualRouterInstance#disk}
  */
  readonly disk?: VirtualRouterInstanceDisk[] | cdktf.IResolvable;
  /**
  * graphics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#graphics VirtualRouterInstance#graphics}
  */
  readonly graphics?: VirtualRouterInstanceGraphics;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#os VirtualRouterInstance#os}
  */
  readonly os?: VirtualRouterInstanceOs;
  /**
  * raw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#raw VirtualRouterInstance#raw}
  */
  readonly raw?: VirtualRouterInstanceRaw;
  /**
  * template_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#template_section VirtualRouterInstance#template_section}
  */
  readonly templateSection?: VirtualRouterInstanceTemplateSection[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#timeouts VirtualRouterInstance#timeouts}
  */
  readonly timeouts?: VirtualRouterInstanceTimeouts;
  /**
  * vmgroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#vmgroup VirtualRouterInstance#vmgroup}
  */
  readonly vmgroup?: VirtualRouterInstanceVmgroup;
}
export interface VirtualRouterInstanceTemplateDisk {
}

export function virtualRouterInstanceTemplateDiskToTerraform(struct?: VirtualRouterInstanceTemplateDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterInstanceTemplateDiskToHclTerraform(struct?: VirtualRouterInstanceTemplateDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterInstanceTemplateDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualRouterInstanceTemplateDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterInstanceTemplateDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // computed_cache - computed: true, optional: false, required: false
  public get computedCache() {
    return this.getStringAttribute('computed_cache');
  }

  // computed_dev_prefix - computed: true, optional: false, required: false
  public get computedDevPrefix() {
    return this.getStringAttribute('computed_dev_prefix');
  }

  // computed_discard - computed: true, optional: false, required: false
  public get computedDiscard() {
    return this.getStringAttribute('computed_discard');
  }

  // computed_driver - computed: true, optional: false, required: false
  public get computedDriver() {
    return this.getStringAttribute('computed_driver');
  }

  // computed_io - computed: true, optional: false, required: false
  public get computedIo() {
    return this.getStringAttribute('computed_io');
  }

  // computed_size - computed: true, optional: false, required: false
  public get computedSize() {
    return this.getNumberAttribute('computed_size');
  }

  // computed_target - computed: true, optional: false, required: false
  public get computedTarget() {
    return this.getStringAttribute('computed_target');
  }

  // computed_volatile_format - computed: true, optional: false, required: false
  public get computedVolatileFormat() {
    return this.getStringAttribute('computed_volatile_format');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getNumberAttribute('image_id');
  }
}

export class VirtualRouterInstanceTemplateDiskList extends cdktf.ComplexList {

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
  public get(index: number): VirtualRouterInstanceTemplateDiskOutputReference {
    return new VirtualRouterInstanceTemplateDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterInstanceCpumodel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#model VirtualRouterInstance#model}
  */
  readonly model: string;
}

export function virtualRouterInstanceCpumodelToTerraform(struct?: VirtualRouterInstanceCpumodelOutputReference | VirtualRouterInstanceCpumodel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function virtualRouterInstanceCpumodelToHclTerraform(struct?: VirtualRouterInstanceCpumodelOutputReference | VirtualRouterInstanceCpumodel): any {
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

export class VirtualRouterInstanceCpumodelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualRouterInstanceCpumodel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterInstanceCpumodel | undefined) {
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
export interface VirtualRouterInstanceDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#cache VirtualRouterInstance#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#dev_prefix VirtualRouterInstance#dev_prefix}
  */
  readonly devPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#discard VirtualRouterInstance#discard}
  */
  readonly discard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#driver VirtualRouterInstance#driver}
  */
  readonly driver?: string;
  /**
  * Image Id  of the image to attach to the VM. Defaults to -1: no image attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#image_id VirtualRouterInstance#image_id}
  */
  readonly imageId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#io VirtualRouterInstance#io}
  */
  readonly io?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#size VirtualRouterInstance#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#target VirtualRouterInstance#target}
  */
  readonly target?: string;
  /**
  * Format of the volatile disk: raw or qcow2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#volatile_format VirtualRouterInstance#volatile_format}
  */
  readonly volatileFormat?: string;
  /**
  * Type of the volatile disk: swap or fs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#volatile_type VirtualRouterInstance#volatile_type}
  */
  readonly volatileType?: string;
}

export function virtualRouterInstanceDiskToTerraform(struct?: VirtualRouterInstanceDisk | cdktf.IResolvable): any {
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


export function virtualRouterInstanceDiskToHclTerraform(struct?: VirtualRouterInstanceDisk | cdktf.IResolvable): any {
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

export class VirtualRouterInstanceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterInstanceDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterInstanceDisk | cdktf.IResolvable | undefined) {
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

  // computed_cache - computed: true, optional: false, required: false
  public get computedCache() {
    return this.getStringAttribute('computed_cache');
  }

  // computed_dev_prefix - computed: true, optional: false, required: false
  public get computedDevPrefix() {
    return this.getStringAttribute('computed_dev_prefix');
  }

  // computed_discard - computed: true, optional: false, required: false
  public get computedDiscard() {
    return this.getStringAttribute('computed_discard');
  }

  // computed_driver - computed: true, optional: false, required: false
  public get computedDriver() {
    return this.getStringAttribute('computed_driver');
  }

  // computed_io - computed: true, optional: false, required: false
  public get computedIo() {
    return this.getStringAttribute('computed_io');
  }

  // computed_size - computed: true, optional: false, required: false
  public get computedSize() {
    return this.getNumberAttribute('computed_size');
  }

  // computed_target - computed: true, optional: false, required: false
  public get computedTarget() {
    return this.getStringAttribute('computed_target');
  }

  // computed_volatile_format - computed: true, optional: false, required: false
  public get computedVolatileFormat() {
    return this.getStringAttribute('computed_volatile_format');
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

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getNumberAttribute('disk_id');
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

export class VirtualRouterInstanceDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterInstanceDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterInstanceDiskOutputReference {
    return new VirtualRouterInstanceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterInstanceGraphics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#keymap VirtualRouterInstance#keymap}
  */
  readonly keymap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#listen VirtualRouterInstance#listen}
  */
  readonly listen: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#passwd VirtualRouterInstance#passwd}
  */
  readonly passwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#port VirtualRouterInstance#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#random_passwd VirtualRouterInstance#random_passwd}
  */
  readonly randomPasswd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#type VirtualRouterInstance#type}
  */
  readonly type: string;
}

export function virtualRouterInstanceGraphicsToTerraform(struct?: VirtualRouterInstanceGraphicsOutputReference | VirtualRouterInstanceGraphics): any {
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


export function virtualRouterInstanceGraphicsToHclTerraform(struct?: VirtualRouterInstanceGraphicsOutputReference | VirtualRouterInstanceGraphics): any {
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

export class VirtualRouterInstanceGraphicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualRouterInstanceGraphics | undefined {
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

  public set internalValue(value: VirtualRouterInstanceGraphics | undefined) {
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
export interface VirtualRouterInstanceOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#arch VirtualRouterInstance#arch}
  */
  readonly arch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#boot VirtualRouterInstance#boot}
  */
  readonly boot: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#bootloader VirtualRouterInstance#bootloader}
  */
  readonly bootloader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#firmware VirtualRouterInstance#firmware}
  */
  readonly firmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#firmware_secure VirtualRouterInstance#firmware_secure}
  */
  readonly firmwareSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#initrd VirtualRouterInstance#initrd}
  */
  readonly initrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#initrd_ds VirtualRouterInstance#initrd_ds}
  */
  readonly initrdDs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#kernel VirtualRouterInstance#kernel}
  */
  readonly kernel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#kernel_cmd VirtualRouterInstance#kernel_cmd}
  */
  readonly kernelCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#kernel_ds VirtualRouterInstance#kernel_ds}
  */
  readonly kernelDs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#machine VirtualRouterInstance#machine}
  */
  readonly machine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#root VirtualRouterInstance#root}
  */
  readonly root?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#sd_disk_bus VirtualRouterInstance#sd_disk_bus}
  */
  readonly sdDiskBus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#uuid VirtualRouterInstance#uuid}
  */
  readonly uuid?: string;
}

export function virtualRouterInstanceOsToTerraform(struct?: VirtualRouterInstanceOsOutputReference | VirtualRouterInstanceOs): any {
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


export function virtualRouterInstanceOsToHclTerraform(struct?: VirtualRouterInstanceOsOutputReference | VirtualRouterInstanceOs): any {
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

export class VirtualRouterInstanceOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualRouterInstanceOs | undefined {
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

  public set internalValue(value: VirtualRouterInstanceOs | undefined) {
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
export interface VirtualRouterInstanceRaw {
  /**
  * Low-level data to pass to the hypervisor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#data VirtualRouterInstance#data}
  */
  readonly data: string;
  /**
  * Name of the hypervisor: kvm, lxd, vmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#type VirtualRouterInstance#type}
  */
  readonly type: string;
}

export function virtualRouterInstanceRawToTerraform(struct?: VirtualRouterInstanceRawOutputReference | VirtualRouterInstanceRaw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualRouterInstanceRawToHclTerraform(struct?: VirtualRouterInstanceRawOutputReference | VirtualRouterInstanceRaw): any {
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

export class VirtualRouterInstanceRawOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualRouterInstanceRaw | undefined {
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

  public set internalValue(value: VirtualRouterInstanceRaw | undefined) {
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
export interface VirtualRouterInstanceTemplateSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#elements VirtualRouterInstance#elements}
  */
  readonly elements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#name VirtualRouterInstance#name}
  */
  readonly name: string;
}

export function virtualRouterInstanceTemplateSectionToTerraform(struct?: VirtualRouterInstanceTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elements),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualRouterInstanceTemplateSectionToHclTerraform(struct?: VirtualRouterInstanceTemplateSection | cdktf.IResolvable): any {
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

export class VirtualRouterInstanceTemplateSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterInstanceTemplateSection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterInstanceTemplateSection | cdktf.IResolvable | undefined) {
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

export class VirtualRouterInstanceTemplateSectionList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterInstanceTemplateSection[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterInstanceTemplateSectionOutputReference {
    return new VirtualRouterInstanceTemplateSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#create VirtualRouterInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#delete VirtualRouterInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#update VirtualRouterInstance#update}
  */
  readonly update?: string;
}

export function virtualRouterInstanceTimeoutsToTerraform(struct?: VirtualRouterInstanceTimeouts | cdktf.IResolvable): any {
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


export function virtualRouterInstanceTimeoutsToHclTerraform(struct?: VirtualRouterInstanceTimeouts | cdktf.IResolvable): any {
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

export class VirtualRouterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterInstanceVmgroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#role VirtualRouterInstance#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#vmgroup_id VirtualRouterInstance#vmgroup_id}
  */
  readonly vmgroupId: number;
}

export function virtualRouterInstanceVmgroupToTerraform(struct?: VirtualRouterInstanceVmgroupOutputReference | VirtualRouterInstanceVmgroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    vmgroup_id: cdktf.numberToTerraform(struct!.vmgroupId),
  }
}


export function virtualRouterInstanceVmgroupToHclTerraform(struct?: VirtualRouterInstanceVmgroupOutputReference | VirtualRouterInstanceVmgroup): any {
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

export class VirtualRouterInstanceVmgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualRouterInstanceVmgroup | undefined {
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

  public set internalValue(value: VirtualRouterInstanceVmgroup | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance opennebula_virtual_router_instance}
*/
export class VirtualRouterInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_virtual_router_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualRouterInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualRouterInstance to import
  * @param importFromId The id of the existing VirtualRouterInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualRouterInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_virtual_router_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_instance opennebula_virtual_router_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualRouterInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualRouterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_virtual_router_instance',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._hardShutdown = config.hardShutdown;
    this._id = config.id;
    this._lock = config.lock;
    this._memory = config.memory;
    this._name = config.name;
    this._onDiskChange = config.onDiskChange;
    this._pending = config.pending;
    this._permissions = config.permissions;
    this._schedDsRequirements = config.schedDsRequirements;
    this._schedRequirements = config.schedRequirements;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._vcpu = config.vcpu;
    this._virtualRouterId = config.virtualRouterId;
    this._cpumodel.internalValue = config.cpumodel;
    this._disk.internalValue = config.disk;
    this._graphics.internalValue = config.graphics;
    this._os.internalValue = config.os;
    this._raw.internalValue = config.raw;
    this._templateSection.internalValue = config.templateSection;
    this._timeouts.internalValue = config.timeouts;
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

  // hard_shutdown - computed: false, optional: true, required: false
  private _hardShutdown?: boolean | cdktf.IResolvable; 
  public get hardShutdown() {
    return this.getBooleanAttribute('hard_shutdown');
  }
  public set hardShutdown(value: boolean | cdktf.IResolvable) {
    this._hardShutdown = value;
  }
  public resetHardShutdown() {
    this._hardShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardShutdownInput() {
    return this._hardShutdown;
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

  // lcmstate - computed: true, optional: false, required: false
  public get lcmstate() {
    return this.getNumberAttribute('lcmstate');
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

  // on_disk_change - computed: false, optional: true, required: false
  private _onDiskChange?: string; 
  public get onDiskChange() {
    return this.getStringAttribute('on_disk_change');
  }
  public set onDiskChange(value: string) {
    this._onDiskChange = value;
  }
  public resetOnDiskChange() {
    this._onDiskChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDiskChangeInput() {
    return this._onDiskChange;
  }

  // pending - computed: false, optional: true, required: false
  private _pending?: boolean | cdktf.IResolvable; 
  public get pending() {
    return this.getBooleanAttribute('pending');
  }
  public set pending(value: boolean | cdktf.IResolvable) {
    this._pending = value;
  }
  public resetPending() {
    this._pending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingInput() {
    return this._pending;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
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

  // template_disk - computed: true, optional: false, required: false
  private _templateDisk = new VirtualRouterInstanceTemplateDiskList(this, "template_disk", false);
  public get templateDisk() {
    return this._templateDisk;
  }

  // template_section_names - computed: true, optional: false, required: false
  private _templateSectionNames = new cdktf.StringMap(this, "template_section_names");
  public get templateSectionNames() {
    return this._templateSectionNames;
  }

  // template_tags - computed: true, optional: false, required: false
  private _templateTags = new cdktf.StringMap(this, "template_tags");
  public get templateTags() {
    return this._templateTags;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // uname - computed: true, optional: false, required: false
  public get uname() {
    return this.getStringAttribute('uname');
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

  // virtual_router_id - computed: false, optional: false, required: true
  private _virtualRouterId?: number; 
  public get virtualRouterId() {
    return this.getNumberAttribute('virtual_router_id');
  }
  public set virtualRouterId(value: number) {
    this._virtualRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterIdInput() {
    return this._virtualRouterId;
  }

  // cpumodel - computed: false, optional: true, required: false
  private _cpumodel = new VirtualRouterInstanceCpumodelOutputReference(this, "cpumodel");
  public get cpumodel() {
    return this._cpumodel;
  }
  public putCpumodel(value: VirtualRouterInstanceCpumodel) {
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
  private _disk = new VirtualRouterInstanceDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VirtualRouterInstanceDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // graphics - computed: false, optional: true, required: false
  private _graphics = new VirtualRouterInstanceGraphicsOutputReference(this, "graphics");
  public get graphics() {
    return this._graphics;
  }
  public putGraphics(value: VirtualRouterInstanceGraphics) {
    this._graphics.internalValue = value;
  }
  public resetGraphics() {
    this._graphics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphicsInput() {
    return this._graphics.internalValue;
  }

  // os - computed: false, optional: true, required: false
  private _os = new VirtualRouterInstanceOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: VirtualRouterInstanceOs) {
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
  private _raw = new VirtualRouterInstanceRawOutputReference(this, "raw");
  public get raw() {
    return this._raw;
  }
  public putRaw(value: VirtualRouterInstanceRaw) {
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
  private _templateSection = new VirtualRouterInstanceTemplateSectionList(this, "template_section", true);
  public get templateSection() {
    return this._templateSection;
  }
  public putTemplateSection(value: VirtualRouterInstanceTemplateSection[] | cdktf.IResolvable) {
    this._templateSection.internalValue = value;
  }
  public resetTemplateSection() {
    this._templateSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSectionInput() {
    return this._templateSection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualRouterInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualRouterInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vmgroup - computed: false, optional: true, required: false
  private _vmgroup = new VirtualRouterInstanceVmgroupOutputReference(this, "vmgroup");
  public get vmgroup() {
    return this._vmgroup;
  }
  public putVmgroup(value: VirtualRouterInstanceVmgroup) {
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
      hard_shutdown: cdktf.booleanToTerraform(this._hardShutdown),
      id: cdktf.stringToTerraform(this._id),
      lock: cdktf.stringToTerraform(this._lock),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      on_disk_change: cdktf.stringToTerraform(this._onDiskChange),
      pending: cdktf.booleanToTerraform(this._pending),
      permissions: cdktf.stringToTerraform(this._permissions),
      sched_ds_requirements: cdktf.stringToTerraform(this._schedDsRequirements),
      sched_requirements: cdktf.stringToTerraform(this._schedRequirements),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      vcpu: cdktf.numberToTerraform(this._vcpu),
      virtual_router_id: cdktf.numberToTerraform(this._virtualRouterId),
      cpumodel: virtualRouterInstanceCpumodelToTerraform(this._cpumodel.internalValue),
      disk: cdktf.listMapper(virtualRouterInstanceDiskToTerraform, true)(this._disk.internalValue),
      graphics: virtualRouterInstanceGraphicsToTerraform(this._graphics.internalValue),
      os: virtualRouterInstanceOsToTerraform(this._os.internalValue),
      raw: virtualRouterInstanceRawToTerraform(this._raw.internalValue),
      template_section: cdktf.listMapper(virtualRouterInstanceTemplateSectionToTerraform, true)(this._templateSection.internalValue),
      timeouts: virtualRouterInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vmgroup: virtualRouterInstanceVmgroupToTerraform(this._vmgroup.internalValue),
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
      hard_shutdown: {
        value: cdktf.booleanToHclTerraform(this._hardShutdown),
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
      on_disk_change: {
        value: cdktf.stringToHclTerraform(this._onDiskChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending: {
        value: cdktf.booleanToHclTerraform(this._pending),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcpu: {
        value: cdktf.numberToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_router_id: {
        value: cdktf.numberToHclTerraform(this._virtualRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpumodel: {
        value: virtualRouterInstanceCpumodelToHclTerraform(this._cpumodel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterInstanceCpumodelList",
      },
      disk: {
        value: cdktf.listMapperHcl(virtualRouterInstanceDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterInstanceDiskList",
      },
      graphics: {
        value: virtualRouterInstanceGraphicsToHclTerraform(this._graphics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterInstanceGraphicsList",
      },
      os: {
        value: virtualRouterInstanceOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterInstanceOsList",
      },
      raw: {
        value: virtualRouterInstanceRawToHclTerraform(this._raw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterInstanceRawList",
      },
      template_section: {
        value: cdktf.listMapperHcl(virtualRouterInstanceTemplateSectionToHclTerraform, true)(this._templateSection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualRouterInstanceTemplateSectionList",
      },
      timeouts: {
        value: virtualRouterInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterInstanceTimeouts",
      },
      vmgroup: {
        value: virtualRouterInstanceVmgroupToHclTerraform(this._vmgroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterInstanceVmgroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
