// https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of CPUs allocated to this virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#cpus Vm#cpus}
  */
  readonly cpus?: number;
  /**
  * ID of the environment you want to add the VM to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#environment_id Vm#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#id Vm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined name of the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#name Vm#name}
  */
  readonly name?: string;
  /**
  * The size of the OS disk. The disk size is in MiB; it will be converted to GiB in the Skytap UI. The maximum disk size is 2,096,128 MiB (1.999 TiB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#os_disk_size Vm#os_disk_size}
  */
  readonly osDiskSize?: number;
  /**
  * Amount of RAM allocated to the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#ram Vm#ram}
  */
  readonly ram?: number;
  /**
  * ID of the template you want to create the VM from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#template_id Vm#template_id}
  */
  readonly templateId: string;
  /**
  * VM user data, available from the metadata server and the Skytap API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#user_data Vm#user_data}
  */
  readonly userData?: string;
  /**
  * ID of the VM within the template that you want to create the VM from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#vm_id Vm#vm_id}
  */
  readonly vmId: string;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#disk Vm#disk}
  */
  readonly disk?: VmDisk[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#label Vm#label}
  */
  readonly label?: VmLabel[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#network_interface Vm#network_interface}
  */
  readonly networkInterface?: VmNetworkInterface[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#timeouts Vm#timeouts}
  */
  readonly timeouts?: VmTimeouts;
}
export interface VmDisk {
  /**
  * A unique name for the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
  /**
  * The size of the disk specified in MiB. The minimum disk size is 2048 MiB; the maximum is 2,096,128 MiB (1.999 TiB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#size Vm#size}
  */
  readonly size: number;
}

export function vmDiskToTerraform(struct?: VmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function vmDiskToHclTerraform(struct?: VmDisk | cdktf.IResolvable): any {
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

export class VmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: VmDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._size = value.size;
    }
  }

  // controller - computed: true, optional: false, required: false
  public get controller() {
    return this.getStringAttribute('controller');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getStringAttribute('lun');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class VmDiskList extends cdktf.ComplexList {
  public internalValue? : VmDisk[] | cdktf.IResolvable

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
  public get(index: number): VmDiskOutputReference {
    return new VmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmLabel {
  /**
  * Label category that provides contextual meaning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#category Vm#category}
  */
  readonly category: string;
  /**
  * Label value used for reporting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#value Vm#value}
  */
  readonly value: string;
}

export function vmLabelToTerraform(struct?: VmLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmLabelToHclTerraform(struct?: VmLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._value = value.value;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VmLabelList extends cdktf.ComplexList {
  public internalValue? : VmLabel[] | cdktf.IResolvable

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
  public get(index: number): VmLabelOutputReference {
    return new VmLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmNetworkInterfacePublishedService {
  /**
  * The port that is exposed on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#internal_port Vm#internal_port}
  */
  readonly internalPort: number;
  /**
  * A unique name for the published service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
}

export function vmNetworkInterfacePublishedServiceToTerraform(struct?: VmNetworkInterfacePublishedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_port: cdktf.numberToTerraform(struct!.internalPort),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmNetworkInterfacePublishedServiceToHclTerraform(struct?: VmNetworkInterfacePublishedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_port: {
      value: cdktf.numberToHclTerraform(struct!.internalPort),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmNetworkInterfacePublishedServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmNetworkInterfacePublishedService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalPort = this._internalPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmNetworkInterfacePublishedService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalPort = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalPort = value.internalPort;
      this._name = value.name;
    }
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // external_port - computed: true, optional: false, required: false
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_port - computed: false, optional: false, required: true
  private _internalPort?: number; 
  public get internalPort() {
    return this.getNumberAttribute('internal_port');
  }
  public set internalPort(value: number) {
    this._internalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
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

export class VmNetworkInterfacePublishedServiceList extends cdktf.ComplexList {
  public internalValue? : VmNetworkInterfacePublishedService[] | cdktf.IResolvable

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
  public get(index: number): VmNetworkInterfacePublishedServiceOutputReference {
    return new VmNetworkInterfacePublishedServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmNetworkInterface {
  /**
  * Hostname of the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#hostname Vm#hostname}
  */
  readonly hostname: string;
  /**
  * Type of network that this network adapter is attached to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#interface_type Vm#interface_type}
  */
  readonly interfaceType: string;
  /**
  * The IP address (for example, 10.1.0.37). Skytap will not assign the same IP address to multiple interfaces on the same network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#ip Vm#ip}
  */
  readonly ip: string;
  /**
  * ID of the network that this network adapter is attached to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#network_id Vm#network_id}
  */
  readonly networkId: string;
  /**
  * published_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#published_service Vm#published_service}
  */
  readonly publishedService?: VmNetworkInterfacePublishedService[] | cdktf.IResolvable;
}

export function vmNetworkInterfaceToTerraform(struct?: VmNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    ip: cdktf.stringToTerraform(struct!.ip),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    published_service: cdktf.listMapper(vmNetworkInterfacePublishedServiceToTerraform, true)(struct!.publishedService),
  }
}


export function vmNetworkInterfaceToHclTerraform(struct?: VmNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_type: {
      value: cdktf.stringToHclTerraform(struct!.interfaceType),
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
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    published_service: {
      value: cdktf.listMapperHcl(vmNetworkInterfacePublishedServiceToHclTerraform, true)(struct!.publishedService),
      isBlock: true,
      type: "set",
      storageClassType: "VmNetworkInterfacePublishedServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._publishedService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishedService = this._publishedService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._interfaceType = undefined;
      this._ip = undefined;
      this._networkId = undefined;
      this._publishedService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._interfaceType = value.interfaceType;
      this._ip = value.ip;
      this._networkId = value.networkId;
      this._publishedService.internalValue = value.publishedService;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_type - computed: false, optional: false, required: true
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // published_service - computed: false, optional: true, required: false
  private _publishedService = new VmNetworkInterfacePublishedServiceList(this, "published_service", true);
  public get publishedService() {
    return this._publishedService;
  }
  public putPublishedService(value: VmNetworkInterfacePublishedService[] | cdktf.IResolvable) {
    this._publishedService.internalValue = value;
  }
  public resetPublishedService() {
    this._publishedService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedServiceInput() {
    return this._publishedService.internalValue;
  }
}

export class VmNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : VmNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): VmNetworkInterfaceOutputReference {
    return new VmNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#create Vm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#delete Vm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#update Vm#update}
  */
  readonly update?: string;
}

export function vmTimeoutsToTerraform(struct?: VmTimeouts | cdktf.IResolvable): any {
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


export function vmTimeoutsToHclTerraform(struct?: VmTimeouts | cdktf.IResolvable): any {
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

export class VmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm skytap_vm}
*/
export class Vm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "skytap_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vm to import
  * @param importFromId The id of the existing Vm that should be imported. Refer to the {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "skytap_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/vm skytap_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmConfig
  */
  public constructor(scope: Construct, id: string, config: VmConfig) {
    super(scope, id, {
      terraformResourceType: 'skytap_vm',
      terraformGeneratorMetadata: {
        providerName: 'skytap',
        providerVersion: '0.15.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpus = config.cpus;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._name = config.name;
    this._osDiskSize = config.osDiskSize;
    this._ram = config.ram;
    this._templateId = config.templateId;
    this._userData = config.userData;
    this._vmId = config.vmId;
    this._disk.internalValue = config.disk;
    this._label.internalValue = config.label;
    this._networkInterface.internalValue = config.networkInterface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpus - computed: true, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // max_cpus - computed: true, optional: false, required: false
  public get maxCpus() {
    return this.getNumberAttribute('max_cpus');
  }

  // max_ram - computed: true, optional: false, required: false
  public get maxRam() {
    return this.getNumberAttribute('max_ram');
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

  // os_disk_size - computed: true, optional: true, required: false
  private _osDiskSize?: number; 
  public get osDiskSize() {
    return this.getNumberAttribute('os_disk_size');
  }
  public set osDiskSize(value: number) {
    this._osDiskSize = value;
  }
  public resetOsDiskSize() {
    this._osDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeInput() {
    return this._osDiskSize;
  }

  // ram - computed: true, optional: true, required: false
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  public resetRam() {
    this._ram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // service_ips - computed: true, optional: false, required: false
  private _serviceIps = new cdktf.StringMap(this, "service_ips");
  public get serviceIps() {
    return this._serviceIps;
  }

  // service_ports - computed: true, optional: false, required: false
  private _servicePorts = new cdktf.NumberMap(this, "service_ports");
  public get servicePorts() {
    return this._servicePorts;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new VmDiskList(this, "disk", true);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VmDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new VmLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: VmLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new VmNetworkInterfaceList(this, "network_interface", true);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: VmNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmTimeouts) {
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
      cpus: cdktf.numberToTerraform(this._cpus),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      os_disk_size: cdktf.numberToTerraform(this._osDiskSize),
      ram: cdktf.numberToTerraform(this._ram),
      template_id: cdktf.stringToTerraform(this._templateId),
      user_data: cdktf.stringToTerraform(this._userData),
      vm_id: cdktf.stringToTerraform(this._vmId),
      disk: cdktf.listMapper(vmDiskToTerraform, true)(this._disk.internalValue),
      label: cdktf.listMapper(vmLabelToTerraform, true)(this._label.internalValue),
      network_interface: cdktf.listMapper(vmNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      timeouts: vmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpus: {
        value: cdktf.numberToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_disk_size: {
        value: cdktf.numberToHclTerraform(this._osDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.listMapperHcl(vmDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmDiskList",
      },
      label: {
        value: cdktf.listMapperHcl(vmLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmLabelList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(vmNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmNetworkInterfaceList",
      },
      timeouts: {
        value: vmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
