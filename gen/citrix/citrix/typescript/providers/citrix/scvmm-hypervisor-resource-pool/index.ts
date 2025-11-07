// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScvmmHypervisorResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#host ScvmmHypervisorResourcePool#host}
  */
  readonly host: string;
  /**
  * The name of the host group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#host_group ScvmmHypervisorResourcePool#host_group}
  */
  readonly hostGroup?: string;
  /**
  * Id of the hypervisor for which the resource pool needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#hypervisor ScvmmHypervisorResourcePool#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * Metadata for the Hypervisor Resource Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#metadata ScvmmHypervisorResourcePool#metadata}
  */
  readonly metadata?: ScvmmHypervisorResourcePoolMetadata[] | cdktf.IResolvable;
  /**
  * Name of the resource pool. Name should be unique across all hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#name ScvmmHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Networks for allocating resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#networks ScvmmHypervisorResourcePool#networks}
  */
  readonly networks: string[];
  /**
  * Storage resources to use for OS data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#storage ScvmmHypervisorResourcePool#storage}
  */
  readonly storage: ScvmmHypervisorResourcePoolStorage[] | cdktf.IResolvable;
  /**
  * Storage resources to use for temporary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#temporary_storage ScvmmHypervisorResourcePool#temporary_storage}
  */
  readonly temporaryStorage: ScvmmHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable;
  /**
  * Indicates whether intellicache is enabled to reduce load on the shared storage device. Will only be effective when shared storage is used. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#use_local_storage_caching ScvmmHypervisorResourcePool#use_local_storage_caching}
  */
  readonly useLocalStorageCaching?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether VMs created by provisioning operations should be tagged. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#vm_tagging ScvmmHypervisorResourcePool#vm_tagging}
  */
  readonly vmTagging?: boolean | cdktf.IResolvable;
}
export interface ScvmmHypervisorResourcePoolMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#name ScvmmHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#value ScvmmHypervisorResourcePool#value}
  */
  readonly value: string;
}

export function scvmmHypervisorResourcePoolMetadataToTerraform(struct?: ScvmmHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function scvmmHypervisorResourcePoolMetadataToHclTerraform(struct?: ScvmmHypervisorResourcePoolMetadata | cdktf.IResolvable): any {
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

export class ScvmmHypervisorResourcePoolMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScvmmHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScvmmHypervisorResourcePoolMetadata | cdktf.IResolvable | undefined) {
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

export class ScvmmHypervisorResourcePoolMetadataList extends cdktf.ComplexList {
  public internalValue? : ScvmmHypervisorResourcePoolMetadata[] | cdktf.IResolvable

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
  public get(index: number): ScvmmHypervisorResourcePoolMetadataOutputReference {
    return new ScvmmHypervisorResourcePoolMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScvmmHypervisorResourcePoolStorage {
  /**
  * The name of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#storage_name ScvmmHypervisorResourcePool#storage_name}
  */
  readonly storageName: string;
  /**
  * Indicates whether the storage has been superseded. Superseded storage may be used for existing virtual machines, but is not used when provisioning new virtual machines. Use only when updating the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#superseded ScvmmHypervisorResourcePool#superseded}
  */
  readonly superseded?: boolean | cdktf.IResolvable;
}

export function scvmmHypervisorResourcePoolStorageToTerraform(struct?: ScvmmHypervisorResourcePoolStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    superseded: cdktf.booleanToTerraform(struct!.superseded),
  }
}


export function scvmmHypervisorResourcePoolStorageToHclTerraform(struct?: ScvmmHypervisorResourcePoolStorage | cdktf.IResolvable): any {
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

export class ScvmmHypervisorResourcePoolStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScvmmHypervisorResourcePoolStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScvmmHypervisorResourcePoolStorage | cdktf.IResolvable | undefined) {
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

export class ScvmmHypervisorResourcePoolStorageList extends cdktf.ComplexList {
  public internalValue? : ScvmmHypervisorResourcePoolStorage[] | cdktf.IResolvable

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
  public get(index: number): ScvmmHypervisorResourcePoolStorageOutputReference {
    return new ScvmmHypervisorResourcePoolStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScvmmHypervisorResourcePoolTemporaryStorage {
  /**
  * The name of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#storage_name ScvmmHypervisorResourcePool#storage_name}
  */
  readonly storageName: string;
  /**
  * Indicates whether the storage has been superseded. Superseded storage may be used for existing virtual machines, but is not used when provisioning new virtual machines. Use only when updating the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#superseded ScvmmHypervisorResourcePool#superseded}
  */
  readonly superseded?: boolean | cdktf.IResolvable;
}

export function scvmmHypervisorResourcePoolTemporaryStorageToTerraform(struct?: ScvmmHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    superseded: cdktf.booleanToTerraform(struct!.superseded),
  }
}


export function scvmmHypervisorResourcePoolTemporaryStorageToHclTerraform(struct?: ScvmmHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable): any {
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

export class ScvmmHypervisorResourcePoolTemporaryStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScvmmHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScvmmHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable | undefined) {
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

export class ScvmmHypervisorResourcePoolTemporaryStorageList extends cdktf.ComplexList {
  public internalValue? : ScvmmHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable

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
  public get(index: number): ScvmmHypervisorResourcePoolTemporaryStorageOutputReference {
    return new ScvmmHypervisorResourcePoolTemporaryStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool citrix_scvmm_hypervisor_resource_pool}
*/
export class ScvmmHypervisorResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_scvmm_hypervisor_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScvmmHypervisorResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScvmmHypervisorResourcePool to import
  * @param importFromId The id of the existing ScvmmHypervisorResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScvmmHypervisorResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_scvmm_hypervisor_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor_resource_pool citrix_scvmm_hypervisor_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScvmmHypervisorResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ScvmmHypervisorResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_scvmm_hypervisor_resource_pool',
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
    this._host = config.host;
    this._hostGroup = config.hostGroup;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_group - computed: false, optional: true, required: false
  private _hostGroup?: string; 
  public get hostGroup() {
    return this.getStringAttribute('host_group');
  }
  public set hostGroup(value: string) {
    this._hostGroup = value;
  }
  public resetHostGroup() {
    this._hostGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupInput() {
    return this._hostGroup;
  }

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
  private _metadata = new ScvmmHypervisorResourcePoolMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ScvmmHypervisorResourcePoolMetadata[] | cdktf.IResolvable) {
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
  private _storage = new ScvmmHypervisorResourcePoolStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ScvmmHypervisorResourcePoolStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // temporary_storage - computed: false, optional: false, required: true
  private _temporaryStorage = new ScvmmHypervisorResourcePoolTemporaryStorageList(this, "temporary_storage", false);
  public get temporaryStorage() {
    return this._temporaryStorage;
  }
  public putTemporaryStorage(value: ScvmmHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable) {
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
      host: cdktf.stringToTerraform(this._host),
      host_group: cdktf.stringToTerraform(this._hostGroup),
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      metadata: cdktf.listMapper(scvmmHypervisorResourcePoolMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      storage: cdktf.listMapper(scvmmHypervisorResourcePoolStorageToTerraform, false)(this._storage.internalValue),
      temporary_storage: cdktf.listMapper(scvmmHypervisorResourcePoolTemporaryStorageToTerraform, false)(this._temporaryStorage.internalValue),
      use_local_storage_caching: cdktf.booleanToTerraform(this._useLocalStorageCaching),
      vm_tagging: cdktf.booleanToTerraform(this._vmTagging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_group: {
        value: cdktf.stringToHclTerraform(this._hostGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(scvmmHypervisorResourcePoolMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScvmmHypervisorResourcePoolMetadataList",
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
        value: cdktf.listMapperHcl(scvmmHypervisorResourcePoolStorageToHclTerraform, false)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScvmmHypervisorResourcePoolStorageList",
      },
      temporary_storage: {
        value: cdktf.listMapperHcl(scvmmHypervisorResourcePoolTemporaryStorageToHclTerraform, false)(this._temporaryStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScvmmHypervisorResourcePoolTemporaryStorageList",
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
