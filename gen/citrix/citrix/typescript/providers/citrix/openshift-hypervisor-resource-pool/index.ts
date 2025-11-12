// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenshiftHypervisorResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the hypervisor for which the resource pool needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#hypervisor OpenshiftHypervisorResourcePool#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * Name of the resource pool. Name should be unique across all hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#name OpenshiftHypervisorResourcePool#name}
  */
  readonly name: string;
  /**
  * Namespace for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#namespace OpenshiftHypervisorResourcePool#namespace}
  */
  readonly namespace: string;
  /**
  * Networks for allocating resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#networks OpenshiftHypervisorResourcePool#networks}
  */
  readonly networks: string[];
  /**
  * Storage resources to use for OS data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#storage OpenshiftHypervisorResourcePool#storage}
  */
  readonly storage: OpenshiftHypervisorResourcePoolStorage[] | cdktf.IResolvable;
  /**
  * Storage resources to use for temporary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#temporary_storage OpenshiftHypervisorResourcePool#temporary_storage}
  */
  readonly temporaryStorage: OpenshiftHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable;
}
export interface OpenshiftHypervisorResourcePoolStorage {
  /**
  * The name of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#storage_name OpenshiftHypervisorResourcePool#storage_name}
  */
  readonly storageName: string;
  /**
  * Indicates whether the storage has been superseded. Superseded storage may be used for existing virtual machines, but is not used when provisioning new virtual machines. Use only when updating the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#superseded OpenshiftHypervisorResourcePool#superseded}
  */
  readonly superseded?: boolean | cdktf.IResolvable;
}

export function openshiftHypervisorResourcePoolStorageToTerraform(struct?: OpenshiftHypervisorResourcePoolStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    superseded: cdktf.booleanToTerraform(struct!.superseded),
  }
}


export function openshiftHypervisorResourcePoolStorageToHclTerraform(struct?: OpenshiftHypervisorResourcePoolStorage | cdktf.IResolvable): any {
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

export class OpenshiftHypervisorResourcePoolStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenshiftHypervisorResourcePoolStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenshiftHypervisorResourcePoolStorage | cdktf.IResolvable | undefined) {
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

export class OpenshiftHypervisorResourcePoolStorageList extends cdktf.ComplexList {
  public internalValue? : OpenshiftHypervisorResourcePoolStorage[] | cdktf.IResolvable

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
  public get(index: number): OpenshiftHypervisorResourcePoolStorageOutputReference {
    return new OpenshiftHypervisorResourcePoolStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenshiftHypervisorResourcePoolTemporaryStorage {
  /**
  * The name of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#storage_name OpenshiftHypervisorResourcePool#storage_name}
  */
  readonly storageName: string;
  /**
  * Indicates whether the storage has been superseded. Superseded storage may be used for existing virtual machines, but is not used when provisioning new virtual machines. Use only when updating the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#superseded OpenshiftHypervisorResourcePool#superseded}
  */
  readonly superseded?: boolean | cdktf.IResolvable;
}

export function openshiftHypervisorResourcePoolTemporaryStorageToTerraform(struct?: OpenshiftHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    superseded: cdktf.booleanToTerraform(struct!.superseded),
  }
}


export function openshiftHypervisorResourcePoolTemporaryStorageToHclTerraform(struct?: OpenshiftHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable): any {
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

export class OpenshiftHypervisorResourcePoolTemporaryStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenshiftHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenshiftHypervisorResourcePoolTemporaryStorage | cdktf.IResolvable | undefined) {
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

export class OpenshiftHypervisorResourcePoolTemporaryStorageList extends cdktf.ComplexList {
  public internalValue? : OpenshiftHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable

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
  public get(index: number): OpenshiftHypervisorResourcePoolTemporaryStorageOutputReference {
    return new OpenshiftHypervisorResourcePoolTemporaryStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool citrix_openshift_hypervisor_resource_pool}
*/
export class OpenshiftHypervisorResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_openshift_hypervisor_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenshiftHypervisorResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenshiftHypervisorResourcePool to import
  * @param importFromId The id of the existing OpenshiftHypervisorResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenshiftHypervisorResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_openshift_hypervisor_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/openshift_hypervisor_resource_pool citrix_openshift_hypervisor_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenshiftHypervisorResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: OpenshiftHypervisorResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_openshift_hypervisor_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
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
    this._name = config.name;
    this._namespace = config.namespace;
    this._networks = config.networks;
    this._storage.internalValue = config.storage;
    this._temporaryStorage.internalValue = config.temporaryStorage;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
  private _storage = new OpenshiftHypervisorResourcePoolStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenshiftHypervisorResourcePoolStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // temporary_storage - computed: false, optional: false, required: true
  private _temporaryStorage = new OpenshiftHypervisorResourcePoolTemporaryStorageList(this, "temporary_storage", false);
  public get temporaryStorage() {
    return this._temporaryStorage;
  }
  public putTemporaryStorage(value: OpenshiftHypervisorResourcePoolTemporaryStorage[] | cdktf.IResolvable) {
    this._temporaryStorage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryStorageInput() {
    return this._temporaryStorage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      storage: cdktf.listMapper(openshiftHypervisorResourcePoolStorageToTerraform, false)(this._storage.internalValue),
      temporary_storage: cdktf.listMapper(openshiftHypervisorResourcePoolTemporaryStorageToTerraform, false)(this._temporaryStorage.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
        value: cdktf.listMapperHcl(openshiftHypervisorResourcePoolStorageToHclTerraform, false)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenshiftHypervisorResourcePoolStorageList",
      },
      temporary_storage: {
        value: cdktf.listMapperHcl(openshiftHypervisorResourcePoolTemporaryStorageToHclTerraform, false)(this._temporaryStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenshiftHypervisorResourcePoolTemporaryStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
