// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserQuotasAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#id UserQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the user to apply the quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#user_id UserQuotasA#user_id}
  */
  readonly userId: number;
  /**
  * datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#datastore UserQuotasA#datastore}
  */
  readonly datastore?: UserQuotasDatastore[] | cdktf.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#image UserQuotasA#image}
  */
  readonly image?: UserQuotasImage[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#network UserQuotasA#network}
  */
  readonly network?: UserQuotasNetwork[] | cdktf.IResolvable;
  /**
  * vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#vm UserQuotasA#vm}
  */
  readonly vm?: UserQuotasVm[] | cdktf.IResolvable;
}
export interface UserQuotasDatastore {
  /**
  * Datastore ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#id UserQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Images allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#images UserQuotasA#images}
  */
  readonly images?: number;
  /**
  * Maximum size in MB allowed on the datastore (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#size UserQuotasA#size}
  */
  readonly size?: number;
}

export function userQuotasDatastoreToTerraform(struct?: UserQuotasDatastore | cdktf.IResolvable): any {
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


export function userQuotasDatastoreToHclTerraform(struct?: UserQuotasDatastore | cdktf.IResolvable): any {
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

export class UserQuotasDatastoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasDatastore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasDatastore | cdktf.IResolvable | undefined) {
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

export class UserQuotasDatastoreList extends cdktf.ComplexList {
  public internalValue? : UserQuotasDatastore[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasDatastoreOutputReference {
    return new UserQuotasDatastoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserQuotasImage {
  /**
  * Image ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#id UserQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Running VMs allowed for this image (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#running_vms UserQuotasA#running_vms}
  */
  readonly runningVms?: number;
}

export function userQuotasImageToTerraform(struct?: UserQuotasImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    running_vms: cdktf.numberToTerraform(struct!.runningVms),
  }
}


export function userQuotasImageToHclTerraform(struct?: UserQuotasImage | cdktf.IResolvable): any {
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

export class UserQuotasImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasImage | cdktf.IResolvable | undefined) {
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

export class UserQuotasImageList extends cdktf.ComplexList {
  public internalValue? : UserQuotasImage[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasImageOutputReference {
    return new UserQuotasImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserQuotasNetwork {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#id UserQuotasA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Leases allowed for this network (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#leases UserQuotasA#leases}
  */
  readonly leases?: number;
}

export function userQuotasNetworkToTerraform(struct?: UserQuotasNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    leases: cdktf.numberToTerraform(struct!.leases),
  }
}


export function userQuotasNetworkToHclTerraform(struct?: UserQuotasNetwork | cdktf.IResolvable): any {
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

export class UserQuotasNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasNetwork | cdktf.IResolvable | undefined) {
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

export class UserQuotasNetworkList extends cdktf.ComplexList {
  public internalValue? : UserQuotasNetwork[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasNetworkOutputReference {
    return new UserQuotasNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserQuotasVm {
  /**
  * Maximum number of CPU allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#cpu UserQuotasA#cpu}
  */
  readonly cpu?: number;
  /**
  * Maximum Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#memory UserQuotasA#memory}
  */
  readonly memory?: number;
  /**
  * Maximum number of 'running' CPUs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#running_cpu UserQuotasA#running_cpu}
  */
  readonly runningCpu?: number;
  /**
  * 'Running' Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#running_memory UserQuotasA#running_memory}
  */
  readonly runningMemory?: number;
  /**
  * Maximum number of Running VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#running_vms UserQuotasA#running_vms}
  */
  readonly runningVms?: number;
  /**
  * Maximum System Disk size (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#system_disk_size UserQuotasA#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Maximum number of VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#vms UserQuotasA#vms}
  */
  readonly vms?: number;
}

export function userQuotasVmToTerraform(struct?: UserQuotasVm | cdktf.IResolvable): any {
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


export function userQuotasVmToHclTerraform(struct?: UserQuotasVm | cdktf.IResolvable): any {
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

export class UserQuotasVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasVm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasVm | cdktf.IResolvable | undefined) {
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

export class UserQuotasVmList extends cdktf.ComplexList {
  public internalValue? : UserQuotasVm[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasVmOutputReference {
    return new UserQuotasVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas opennebula_user_quotas}
*/
export class UserQuotasA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_user_quotas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserQuotasA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserQuotasA to import
  * @param importFromId The id of the existing UserQuotasA that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserQuotasA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_user_quotas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user_quotas opennebula_user_quotas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserQuotasAConfig
  */
  public constructor(scope: Construct, id: string, config: UserQuotasAConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_user_quotas',
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
    this._id = config.id;
    this._userId = config.userId;
    this._datastore.internalValue = config.datastore;
    this._image.internalValue = config.image;
    this._network.internalValue = config.network;
    this._vm.internalValue = config.vm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore = new UserQuotasDatastoreList(this, "datastore", false);
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: UserQuotasDatastore[] | cdktf.IResolvable) {
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
  private _image = new UserQuotasImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: UserQuotasImage[] | cdktf.IResolvable) {
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
  private _network = new UserQuotasNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: UserQuotasNetwork[] | cdktf.IResolvable) {
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
  private _vm = new UserQuotasVmList(this, "vm", false);
  public get vm() {
    return this._vm;
  }
  public putVm(value: UserQuotasVm[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.numberToTerraform(this._userId),
      datastore: cdktf.listMapper(userQuotasDatastoreToTerraform, true)(this._datastore.internalValue),
      image: cdktf.listMapper(userQuotasImageToTerraform, true)(this._image.internalValue),
      network: cdktf.listMapper(userQuotasNetworkToTerraform, true)(this._network.internalValue),
      vm: cdktf.listMapper(userQuotasVmToTerraform, true)(this._vm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      datastore: {
        value: cdktf.listMapperHcl(userQuotasDatastoreToHclTerraform, true)(this._datastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserQuotasDatastoreList",
      },
      image: {
        value: cdktf.listMapperHcl(userQuotasImageToHclTerraform, true)(this._image.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserQuotasImageList",
      },
      network: {
        value: cdktf.listMapperHcl(userQuotasNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserQuotasNetworkList",
      },
      vm: {
        value: cdktf.listMapperHcl(userQuotasVmToHclTerraform, true)(this._vm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserQuotasVmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
