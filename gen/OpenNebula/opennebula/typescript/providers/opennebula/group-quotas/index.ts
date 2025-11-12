// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupQuotasAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the group to apply the quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#group_id GroupQuotasA#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#id GroupQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#datastore GroupQuotasA#datastore}
  */
  readonly datastore?: GroupQuotasDatastore[] | cdktf.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#image GroupQuotasA#image}
  */
  readonly image?: GroupQuotasImage[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#network GroupQuotasA#network}
  */
  readonly network?: GroupQuotasNetwork[] | cdktf.IResolvable;
  /**
  * vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#vm GroupQuotasA#vm}
  */
  readonly vm?: GroupQuotasVm[] | cdktf.IResolvable;
}
export interface GroupQuotasDatastore {
  /**
  * Datastore ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#id GroupQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Images allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#images GroupQuotasA#images}
  */
  readonly images?: number;
  /**
  * Maximum size in MB allowed on the datastore (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#size GroupQuotasA#size}
  */
  readonly size?: number;
}

export function groupQuotasDatastoreToTerraform(struct?: GroupQuotasDatastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    images: cdktf.numberToTerraform(struct!.images),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function groupQuotasDatastoreToHclTerraform(struct?: GroupQuotasDatastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    images: {
      value: cdktf.numberToHclTerraform(struct!.images),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GroupQuotasDatastoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasDatastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasDatastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._images = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._images = value.images;
      this._size = value.size;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // images - computed: false, optional: true, required: false
  private _images?: number; 
  public get images() {
    return this.getNumberAttribute('images');
  }
  public set images(value: number) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
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
}

export class GroupQuotasDatastoreList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasDatastore[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasDatastoreOutputReference {
    return new GroupQuotasDatastoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotasImage {
  /**
  * Image ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#id GroupQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Running VMs allowed for this image (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#running_vms GroupQuotasA#running_vms}
  */
  readonly runningVms?: number;
}

export function groupQuotasImageToTerraform(struct?: GroupQuotasImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    running_vms: cdktf.numberToTerraform(struct!.runningVms),
  }
}


export function groupQuotasImageToHclTerraform(struct?: GroupQuotasImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_vms: {
      value: cdktf.numberToHclTerraform(struct!.runningVms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._runningVms !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningVms = this._runningVms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._runningVms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._runningVms = value.runningVms;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // running_vms - computed: false, optional: true, required: false
  private _runningVms?: number; 
  public get runningVms() {
    return this.getNumberAttribute('running_vms');
  }
  public set runningVms(value: number) {
    this._runningVms = value;
  }
  public resetRunningVms() {
    this._runningVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningVmsInput() {
    return this._runningVms;
  }
}

export class GroupQuotasImageList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasImage[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasImageOutputReference {
    return new GroupQuotasImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotasNetwork {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#id GroupQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Leases allowed for this network (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#leases GroupQuotasA#leases}
  */
  readonly leases?: number;
}

export function groupQuotasNetworkToTerraform(struct?: GroupQuotasNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    leases: cdktf.numberToTerraform(struct!.leases),
  }
}


export function groupQuotasNetworkToHclTerraform(struct?: GroupQuotasNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    leases: {
      value: cdktf.numberToHclTerraform(struct!.leases),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leases !== undefined) {
      hasAnyValues = true;
      internalValueResult.leases = this._leases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._leases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._leases = value.leases;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // leases - computed: false, optional: true, required: false
  private _leases?: number; 
  public get leases() {
    return this.getNumberAttribute('leases');
  }
  public set leases(value: number) {
    this._leases = value;
  }
  public resetLeases() {
    this._leases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasesInput() {
    return this._leases;
  }
}

export class GroupQuotasNetworkList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasNetwork[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasNetworkOutputReference {
    return new GroupQuotasNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotasVm {
  /**
  * Maximum number of CPU allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#cpu GroupQuotasA#cpu}
  */
  readonly cpu?: number;
  /**
  * Maximum Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#memory GroupQuotasA#memory}
  */
  readonly memory?: number;
  /**
  * Maximum number of 'running' CPUs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#running_cpu GroupQuotasA#running_cpu}
  */
  readonly runningCpu?: number;
  /**
  * 'Running' Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#running_memory GroupQuotasA#running_memory}
  */
  readonly runningMemory?: number;
  /**
  * Maximum number of Running VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#running_vms GroupQuotasA#running_vms}
  */
  readonly runningVms?: number;
  /**
  * Maximum System Disk size (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#system_disk_size GroupQuotasA#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Maximum number of VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#vms GroupQuotasA#vms}
  */
  readonly vms?: number;
}

export function groupQuotasVmToTerraform(struct?: GroupQuotasVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
    running_cpu: cdktf.numberToTerraform(struct!.runningCpu),
    running_memory: cdktf.numberToTerraform(struct!.runningMemory),
    running_vms: cdktf.numberToTerraform(struct!.runningVms),
    system_disk_size: cdktf.numberToTerraform(struct!.systemDiskSize),
    vms: cdktf.numberToTerraform(struct!.vms),
  }
}


export function groupQuotasVmToHclTerraform(struct?: GroupQuotasVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_cpu: {
      value: cdktf.numberToHclTerraform(struct!.runningCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_memory: {
      value: cdktf.numberToHclTerraform(struct!.runningMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_vms: {
      value: cdktf.numberToHclTerraform(struct!.runningVms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vms: {
      value: cdktf.numberToHclTerraform(struct!.vms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._runningCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningCpu = this._runningCpu;
    }
    if (this._runningMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningMemory = this._runningMemory;
    }
    if (this._runningVms !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningVms = this._runningVms;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._vms !== undefined) {
      hasAnyValues = true;
      internalValueResult.vms = this._vms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
      this._runningCpu = undefined;
      this._runningMemory = undefined;
      this._runningVms = undefined;
      this._systemDiskSize = undefined;
      this._vms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
      this._runningCpu = value.runningCpu;
      this._runningMemory = value.runningMemory;
      this._runningVms = value.runningVms;
      this._systemDiskSize = value.systemDiskSize;
      this._vms = value.vms;
    }
  }

  // cpu - computed: false, optional: true, required: false
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

  // running_cpu - computed: false, optional: true, required: false
  private _runningCpu?: number; 
  public get runningCpu() {
    return this.getNumberAttribute('running_cpu');
  }
  public set runningCpu(value: number) {
    this._runningCpu = value;
  }
  public resetRunningCpu() {
    this._runningCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningCpuInput() {
    return this._runningCpu;
  }

  // running_memory - computed: false, optional: true, required: false
  private _runningMemory?: number; 
  public get runningMemory() {
    return this.getNumberAttribute('running_memory');
  }
  public set runningMemory(value: number) {
    this._runningMemory = value;
  }
  public resetRunningMemory() {
    this._runningMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningMemoryInput() {
    return this._runningMemory;
  }

  // running_vms - computed: false, optional: true, required: false
  private _runningVms?: number; 
  public get runningVms() {
    return this.getNumberAttribute('running_vms');
  }
  public set runningVms(value: number) {
    this._runningVms = value;
  }
  public resetRunningVms() {
    this._runningVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningVmsInput() {
    return this._runningVms;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // vms - computed: false, optional: true, required: false
  private _vms?: number; 
  public get vms() {
    return this.getNumberAttribute('vms');
  }
  public set vms(value: number) {
    this._vms = value;
  }
  public resetVms() {
    this._vms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmsInput() {
    return this._vms;
  }
}

export class GroupQuotasVmList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasVm[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasVmOutputReference {
    return new GroupQuotasVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas opennebula_group_quotas}
*/
export class GroupQuotasA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_group_quotas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupQuotasA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupQuotasA to import
  * @param importFromId The id of the existing GroupQuotasA that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupQuotasA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_group_quotas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group_quotas opennebula_group_quotas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupQuotasAConfig
  */
  public constructor(scope: Construct, id: string, config: GroupQuotasAConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_group_quotas',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._datastore.internalValue = config.datastore;
    this._image.internalValue = config.image;
    this._network.internalValue = config.network;
    this._vm.internalValue = config.vm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore = new GroupQuotasDatastoreList(this, "datastore", false);
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: GroupQuotasDatastore[] | cdktf.IResolvable) {
    this._datastore.internalValue = value;
  }
  public resetDatastore() {
    this._datastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new GroupQuotasImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: GroupQuotasImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new GroupQuotasNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: GroupQuotasNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // vm - computed: false, optional: true, required: false
  private _vm = new GroupQuotasVmList(this, "vm", false);
  public get vm() {
    return this._vm;
  }
  public putVm(value: GroupQuotasVm[] | cdktf.IResolvable) {
    this._vm.internalValue = value;
  }
  public resetVm() {
    this._vm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      datastore: cdktf.listMapper(groupQuotasDatastoreToTerraform, true)(this._datastore.internalValue),
      image: cdktf.listMapper(groupQuotasImageToTerraform, true)(this._image.internalValue),
      network: cdktf.listMapper(groupQuotasNetworkToTerraform, true)(this._network.internalValue),
      vm: cdktf.listMapper(groupQuotasVmToTerraform, true)(this._vm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore: {
        value: cdktf.listMapperHcl(groupQuotasDatastoreToHclTerraform, true)(this._datastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupQuotasDatastoreList",
      },
      image: {
        value: cdktf.listMapperHcl(groupQuotasImageToHclTerraform, true)(this._image.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupQuotasImageList",
      },
      network: {
        value: cdktf.listMapperHcl(groupQuotasNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupQuotasNetworkList",
      },
      vm: {
        value: cdktf.listMapperHcl(groupQuotasVmToHclTerraform, true)(this._vm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupQuotasVmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
