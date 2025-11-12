// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_archival_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisAzureArchivalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud native archival location ID (UUID). **Deprecated:** use `id` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_archival_location#archival_location_id DataPolarisAzureArchivalLocation#archival_location_id}
  */
  readonly archivalLocationId?: string;
  /**
  * Cloud native archival location ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_archival_location#id DataPolarisAzureArchivalLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cloud native archival location name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_archival_location#name DataPolarisAzureArchivalLocation#name}
  */
  readonly name?: string;
}
export interface DataPolarisAzureArchivalLocationCustomerManagedKey {
}

export function dataPolarisAzureArchivalLocationCustomerManagedKeyToTerraform(struct?: DataPolarisAzureArchivalLocationCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPolarisAzureArchivalLocationCustomerManagedKeyToHclTerraform(struct?: DataPolarisAzureArchivalLocationCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPolarisAzureArchivalLocationCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPolarisAzureArchivalLocationCustomerManagedKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPolarisAzureArchivalLocationCustomerManagedKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // vault_name - computed: true, optional: false, required: false
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
}

export class DataPolarisAzureArchivalLocationCustomerManagedKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataPolarisAzureArchivalLocationCustomerManagedKeyOutputReference {
    return new DataPolarisAzureArchivalLocationCustomerManagedKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_archival_location polaris_azure_archival_location}
*/
export class DataPolarisAzureArchivalLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_archival_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisAzureArchivalLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisAzureArchivalLocation to import
  * @param importFromId The id of the existing DataPolarisAzureArchivalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_archival_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisAzureArchivalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_archival_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_archival_location polaris_azure_archival_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisAzureArchivalLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPolarisAzureArchivalLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_archival_location',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archivalLocationId = config.archivalLocationId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archival_location_id - computed: true, optional: true, required: false
  private _archivalLocationId?: string; 
  public get archivalLocationId() {
    return this.getStringAttribute('archival_location_id');
  }
  public set archivalLocationId(value: string) {
    this._archivalLocationId = value;
  }
  public resetArchivalLocationId() {
    this._archivalLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalLocationIdInput() {
    return this._archivalLocationId;
  }

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // customer_managed_key - computed: true, optional: false, required: false
  private _customerManagedKey = new DataPolarisAzureArchivalLocationCustomerManagedKeyList(this, "customer_managed_key", true);
  public get customerManagedKey() {
    return this._customerManagedKey;
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

  // location_template - computed: true, optional: false, required: false
  public get locationTemplate() {
    return this.getStringAttribute('location_template');
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

  // redundancy - computed: true, optional: false, required: false
  public get redundancy() {
    return this.getStringAttribute('redundancy');
  }

  // storage_account_name_prefix - computed: true, optional: false, required: false
  public get storageAccountNamePrefix() {
    return this.getStringAttribute('storage_account_name_prefix');
  }

  // storage_account_region - computed: true, optional: false, required: false
  public get storageAccountRegion() {
    return this.getStringAttribute('storage_account_region');
  }

  // storage_account_tags - computed: true, optional: false, required: false
  private _storageAccountTags = new cdktf.StringMap(this, "storage_account_tags");
  public get storageAccountTags() {
    return this._storageAccountTags;
  }

  // storage_tier - computed: true, optional: false, required: false
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archival_location_id: cdktf.stringToTerraform(this._archivalLocationId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archival_location_id: {
        value: cdktf.stringToHclTerraform(this._archivalLocationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
