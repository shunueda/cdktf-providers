// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XenserverHypervisorResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the hypervisor for which the resource pool needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#hypervisor XenserverHypervisorResourcePool#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * Metadata for the Hypervisor Resource Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#metadata XenserverHypervisorResourcePool#metadata}
  */
  readonly metadata?: XenserverHypervisorResourcePoolMetadata[] | cdktf.IResolvable;
  /**
  * Name of the resource pool. Name should be unique across all hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#name XenserverHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Networks for allocating resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#networks XenserverHypervisorResourcePool#networks}
  */
  readonly networks: string[];
  /**
  * List of hypervisor storage to use for OS data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#storage XenserverHypervisorResourcePool#storage}
  */
  readonly storage: XenserverHypervisorResourcePoolStorage[] | cdktf.IResolvable;
  /**
  * List of hypervisor storage to use for temporary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#temporary_storage XenserverHypervisorResourcePool#temporary_storage}
  */
  readonly temporaryStorage: XenserverHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable;
  /**
  * Indicates whether intellicache is enabled to reduce load on the shared storage device. Will only be effective when shared storage is used. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#use_local_storage_caching XenserverHypervisorResourcePool#use_local_storage_caching}
  */
  readonly useLocalStorageCaching?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether VMs created by provisioning operations should be tagged. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#vm_tagging XenserverHypervisorResourcePool#vm_tagging}
  */
  readonly vmTagging?: boolean | cdktf.IResolvable;
}
export interface XenserverHypervisorResourcePoolMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#name XenserverHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#value XenserverHypervisorResourcePool#value}
  */
  readonly value: string;
}

export function xenserverHypervisorResourcePoolMetadataToTerraform(struct?: XenserverHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function xenserverHypervisorResourcePoolMetadataToHclTerraform(struct?: XenserverHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
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

export class XenserverHypervisorResourcePoolMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): XenserverHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XenserverHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class XenserverHypervisorResourcePoolMetadataList extends cdktf.ComplexList {
  public internalValue? : XenserverHypervisorResourcePoolMetadata[] | cdktf.IResolvable

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
  public get(index: number): XenserverHypervisorResourcePoolMetadataOutputReference {
    return new XenserverHypervisorResourcePoolMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface XenserverHypervisorResourcePoolStorage {
  /**
  * The name of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#storage_name XenserverHypervisorResourcePool#storage_name}
  */
  readonly storageName: string;
  /**
  * Indicates whether the storage has been superseded. Superseded storage may be used for existing virtual machines, but is not used when provisioning new virtual machines. Use only when updating the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#superseded XenserverHypervisorResourcePool#superseded}
  */
  readonly superseded?: boolean | cdktf.IResolvable;
}

export function xenserverHypervisorResourcePoolStorageToTerraform(struct?: XenserverHypervisorResourcePoolStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    superseded: cdktf.booleanToTerraform(struct!.superseded),
  }
}


export function xenserverHypervisorResourcePoolStorageToHclTerraform(struct?: XenserverHypervisorResourcePoolStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    superseded: {
      value: cdktf.booleanToHclTerraform(struct!.superseded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class XenserverHypervisorResourcePoolStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): XenserverHypervisorResourcePoolStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._superseded !== undefined) {
      hasAnyValues = true;
      internalValueResult.superseded = this._superseded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XenserverHypervisorResourcePoolStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageName = undefined;
      this._superseded = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageName = value.storageName;
      this._superseded = value.superseded;
    }
  }

  // storage_name - computed: false, optional: false, required: true
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // superseded - computed: true, optional: true, required: false
  private _superseded?: boolean | cdktf.IResolvable; 
  public get superseded() {
    return this.getBooleanAttribute('superseded');
  }
  public set superseded(value: boolean | cdktf.IResolvable) {
    this._superseded = value;
  }
  public resetSuperseded() {
    this._superseded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supersededInput() {
    return this._superseded;
  }
}

export class XenserverHypervisorResourcePoolStorageList extends cdktf.ComplexList {
  public internalValue? : XenserverHypervisorResourcePoolStorage[] | cdktf.IResolvable

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
  public get(index: number): XenserverHypervisorResourcePoolStorageOutputReference {
    return new XenserverHypervisorResourcePoolStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface XenserverHypervisorResourcePoolTemporaryStorage {
  /**
  * The name of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#storage_name XenserverHypervisorResourcePool#storage_name}
  */
  readonly storageName: string;
  /**
  * Indicates whether the storage has been superseded. Superseded storage may be used for existing virtual machines, but is not used when provisioning new virtual machines. Use only when updating the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#superseded XenserverHypervisorResourcePool#superseded}
  */
  readonly superseded?: boolean | cdktf.IResolvable;
}

export function xenserverHypervisorResourcePoolTemporaryStorageToTerraform(struct?: XenserverHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    superseded: cdktf.booleanToTerraform(struct!.superseded),
  }
}


export function xenserverHypervisorResourcePoolTemporaryStorageToHclTerraform(struct?: XenserverHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    superseded: {
      value: cdktf.booleanToHclTerraform(struct!.superseded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class XenserverHypervisorResourcePoolTemporaryStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): XenserverHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._superseded !== undefined) {
      hasAnyValues = true;
      internalValueResult.superseded = this._superseded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XenserverHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageName = undefined;
      this._superseded = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageName = value.storageName;
      this._superseded = value.superseded;
    }
  }

  // storage_name - computed: false, optional: false, required: true
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // superseded - computed: true, optional: true, required: false
  private _superseded?: boolean | cdktf.IResolvable; 
  public get superseded() {
    return this.getBooleanAttribute('superseded');
  }
  public set superseded(value: boolean | cdktf.IResolvable) {
    this._superseded = value;
  }
  public resetSuperseded() {
    this._superseded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supersededInput() {
    return this._superseded;
  }
}

export class XenserverHypervisorResourcePoolTemporaryStorageList extends cdktf.ComplexList {
  public internalValue? : XenserverHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable

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
  public get(index: number): XenserverHypervisorResourcePoolTemporaryStorageOutputReference {
    return new XenserverHypervisorResourcePoolTemporaryStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool citrix_xenserver_hypervisor_resource_pool}
*/
export class XenserverHypervisorResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_xenserver_hypervisor_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a XenserverHypervisorResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the XenserverHypervisorResourcePool to import
  * @param importFromId The id of the existing XenserverHypervisorResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the XenserverHypervisorResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_xenserver_hypervisor_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/xenserver_hypervisor_resource_pool citrix_xenserver_hypervisor_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XenserverHypervisorResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: XenserverHypervisorResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_xenserver_hypervisor_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hypervisor = config.hypervisor;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._networks = config.networks;
    this._storage.internalValue = config.storage;
    this._temporaryStorage.internalValue = config.temporaryStorage;
    this._useLocalStorageCaching = config.useLocalStorageCaching;
    this._vmTagging = config.vmTagging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hypervisor - computed: false, optional: false, required: true
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new XenserverHypervisorResourcePoolMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: XenserverHypervisorResourcePoolMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // networks - computed: false, optional: false, required: true
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new XenserverHypervisorResourcePoolStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: XenserverHypervisorResourcePoolStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // temporary_storage - computed: false, optional: false, required: true
  private _temporaryStorage = new XenserverHypervisorResourcePoolTemporaryStorageList(this, "temporary_storage", false);
  public get temporaryStorage() {
    return this._temporaryStorage;
  }
  public putTemporaryStorage(value: XenserverHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable) {
    this._temporaryStorage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryStorageInput() {
    return this._temporaryStorage.internalValue;
  }

  // use_local_storage_caching - computed: true, optional: true, required: false
  private _useLocalStorageCaching?: boolean | cdktf.IResolvable; 
  public get useLocalStorageCaching() {
    return this.getBooleanAttribute('use_local_storage_caching');
  }
  public set useLocalStorageCaching(value: boolean | cdktf.IResolvable) {
    this._useLocalStorageCaching = value;
  }
  public resetUseLocalStorageCaching() {
    this._useLocalStorageCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalStorageCachingInput() {
    return this._useLocalStorageCaching;
  }

  // vm_tagging - computed: true, optional: true, required: false
  private _vmTagging?: boolean | cdktf.IResolvable; 
  public get vmTagging() {
    return this.getBooleanAttribute('vm_tagging');
  }
  public set vmTagging(value: boolean | cdktf.IResolvable) {
    this._vmTagging = value;
  }
  public resetVmTagging() {
    this._vmTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTaggingInput() {
    return this._vmTagging;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      metadata: cdktf.listMapper(xenserverHypervisorResourcePoolMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      storage: cdktf.listMapper(xenserverHypervisorResourcePoolStorageToTerraform, false)(this._storage.internalValue),
      temporary_storage: cdktf.listMapper(xenserverHypervisorResourcePoolTemporaryStorageToTerraform, false)(this._temporaryStorage.internalValue),
      use_local_storage_caching: cdktf.booleanToTerraform(this._useLocalStorageCaching),
      vm_tagging: cdktf.booleanToTerraform(this._vmTagging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(xenserverHypervisorResourcePoolMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "XenserverHypervisorResourcePoolMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      storage: {
        value: cdktf.listMapperHcl(xenserverHypervisorResourcePoolStorageToHclTerraform, false)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "XenserverHypervisorResourcePoolStorageList",
      },
      temporary_storage: {
        value: cdktf.listMapperHcl(xenserverHypervisorResourcePoolTemporaryStorageToHclTerraform, false)(this._temporaryStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "XenserverHypervisorResourcePoolTemporaryStorageList",
      },
      use_local_storage_caching: {
        value: cdktf.booleanToHclTerraform(this._useLocalStorageCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vm_tagging: {
        value: cdktf.booleanToHclTerraform(this._vmTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
