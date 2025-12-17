// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureArchivalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#cloud_account_id AzureArchivalLocation#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * Cloud native archival location name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#name AzureArchivalLocation#name}
  */
  readonly name: string;
  /**
  * Azure storage redundancy. Possible values are `GRS`, `GZRS`, `LRS`, `RA_GRS`, `RA_GZRS` and `ZRS`. Default value is `LRS`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#redundancy AzureArchivalLocation#redundancy}
  */
  readonly redundancy?: string;
  /**
  * Azure storage account name prefix. The storage account name prefix cannot be longer than 14 characters and can only consist of numbers and lower case letters. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#storage_account_name_prefix AzureArchivalLocation#storage_account_name_prefix}
  */
  readonly storageAccountNamePrefix: string;
  /**
  * Azure region to store the snapshots in. If not specified, the snapshots will be stored in the same region as the workload. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#storage_account_region AzureArchivalLocation#storage_account_region}
  */
  readonly storageAccountRegion?: string;
  /**
  * Azure storage account tags. Each tag will be added to the storage account created by RSC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#storage_account_tags AzureArchivalLocation#storage_account_tags}
  */
  readonly storageAccountTags?: { [key: string]: string };
  /**
  * Azure storage tier. Possible values are `COOL` and `HOT`. Default value is `COOL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#storage_tier AzureArchivalLocation#storage_tier}
  */
  readonly storageTier?: string;
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#customer_managed_key AzureArchivalLocation#customer_managed_key}
  */
  readonly customerManagedKey?: AzureArchivalLocationCustomerManagedKey[] | cdktf.IResolvable;
}
export interface AzureArchivalLocationCustomerManagedKey {
  /**
  * Key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#name AzureArchivalLocation#name}
  */
  readonly name: string;
  /**
  * The region in which the key will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#region AzureArchivalLocation#region}
  */
  readonly region: string;
  /**
  * Key vault name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#vault_name AzureArchivalLocation#vault_name}
  */
  readonly vaultName: string;
}

export function azureArchivalLocationCustomerManagedKeyToTerraform(struct?: AzureArchivalLocationCustomerManagedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function azureArchivalLocationCustomerManagedKeyToHclTerraform(struct?: AzureArchivalLocationCustomerManagedKey | cdktf.IResolvable): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_name: {
      value: cdktf.stringToHclTerraform(struct!.vaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureArchivalLocationCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureArchivalLocationCustomerManagedKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._vaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultName = this._vaultName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureArchivalLocationCustomerManagedKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._vaultName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._region = value.region;
      this._vaultName = value.vaultName;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }
}

export class AzureArchivalLocationCustomerManagedKeyList extends cdktf.ComplexList {
  public internalValue? : AzureArchivalLocationCustomerManagedKey[] | cdktf.IResolvable

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
  public get(index: number): AzureArchivalLocationCustomerManagedKeyOutputReference {
    return new AzureArchivalLocationCustomerManagedKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location polaris_azure_archival_location}
*/
export class AzureArchivalLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_archival_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureArchivalLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureArchivalLocation to import
  * @param importFromId The id of the existing AzureArchivalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureArchivalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_archival_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/azure_archival_location polaris_azure_archival_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureArchivalLocationConfig
  */
  public constructor(scope: Construct, id: string, config: AzureArchivalLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_archival_location',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAccountId = config.cloudAccountId;
    this._name = config.name;
    this._redundancy = config.redundancy;
    this._storageAccountNamePrefix = config.storageAccountNamePrefix;
    this._storageAccountRegion = config.storageAccountRegion;
    this._storageAccountTags = config.storageAccountTags;
    this._storageTier = config.storageTier;
    this._customerManagedKey.internalValue = config.customerManagedKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_template - computed: true, optional: false, required: false
  public get locationTemplate() {
    return this.getStringAttribute('location_template');
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

  // redundancy - computed: false, optional: true, required: false
  private _redundancy?: string; 
  public get redundancy() {
    return this.getStringAttribute('redundancy');
  }
  public set redundancy(value: string) {
    this._redundancy = value;
  }
  public resetRedundancy() {
    this._redundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy;
  }

  // storage_account_name_prefix - computed: false, optional: false, required: true
  private _storageAccountNamePrefix?: string; 
  public get storageAccountNamePrefix() {
    return this.getStringAttribute('storage_account_name_prefix');
  }
  public set storageAccountNamePrefix(value: string) {
    this._storageAccountNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNamePrefixInput() {
    return this._storageAccountNamePrefix;
  }

  // storage_account_region - computed: false, optional: true, required: false
  private _storageAccountRegion?: string; 
  public get storageAccountRegion() {
    return this.getStringAttribute('storage_account_region');
  }
  public set storageAccountRegion(value: string) {
    this._storageAccountRegion = value;
  }
  public resetStorageAccountRegion() {
    this._storageAccountRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountRegionInput() {
    return this._storageAccountRegion;
  }

  // storage_account_tags - computed: false, optional: true, required: false
  private _storageAccountTags?: { [key: string]: string }; 
  public get storageAccountTags() {
    return this.getStringMapAttribute('storage_account_tags');
  }
  public set storageAccountTags(value: { [key: string]: string }) {
    this._storageAccountTags = value;
  }
  public resetStorageAccountTags() {
    this._storageAccountTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTagsInput() {
    return this._storageAccountTags;
  }

  // storage_tier - computed: false, optional: true, required: false
  private _storageTier?: string; 
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }
  public set storageTier(value: string) {
    this._storageTier = value;
  }
  public resetStorageTier() {
    this._storageTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTierInput() {
    return this._storageTier;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new AzureArchivalLocationCustomerManagedKeyList(this, "customer_managed_key", true);
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: AzureArchivalLocationCustomerManagedKey[] | cdktf.IResolvable) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      name: cdktf.stringToTerraform(this._name),
      redundancy: cdktf.stringToTerraform(this._redundancy),
      storage_account_name_prefix: cdktf.stringToTerraform(this._storageAccountNamePrefix),
      storage_account_region: cdktf.stringToTerraform(this._storageAccountRegion),
      storage_account_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageAccountTags),
      storage_tier: cdktf.stringToTerraform(this._storageTier),
      customer_managed_key: cdktf.listMapper(azureArchivalLocationCustomerManagedKeyToTerraform, true)(this._customerManagedKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
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
      redundancy: {
        value: cdktf.stringToHclTerraform(this._redundancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_name_prefix: {
        value: cdktf.stringToHclTerraform(this._storageAccountNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_region: {
        value: cdktf.stringToHclTerraform(this._storageAccountRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._storageAccountTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      storage_tier: {
        value: cdktf.stringToHclTerraform(this._storageTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key: {
        value: cdktf.listMapperHcl(azureArchivalLocationCustomerManagedKeyToHclTerraform, true)(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureArchivalLocationCustomerManagedKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
