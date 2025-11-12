// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/machine_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixMachineCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * GUID identifier of the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/machine_catalog#id DataCitrixMachineCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path to the folder in which the machine catalog is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/machine_catalog#machine_catalog_folder_path DataCitrixMachineCatalog#machine_catalog_folder_path}
  */
  readonly machineCatalogFolderPath?: string;
  /**
  * Name of the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/machine_catalog#name DataCitrixMachineCatalog#name}
  */
  readonly name?: string;
}
export interface DataCitrixMachineCatalogVdas {
}

export function dataCitrixMachineCatalogVdasToTerraform(struct?: DataCitrixMachineCatalogVdas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixMachineCatalogVdasToHclTerraform(struct?: DataCitrixMachineCatalogVdas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixMachineCatalogVdasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixMachineCatalogVdas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixMachineCatalogVdas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_delivery_group - computed: true, optional: false, required: false
  public get associatedDeliveryGroup() {
    return this.getStringAttribute('associated_delivery_group');
  }

  // associated_machine_catalog - computed: true, optional: false, required: false
  public get associatedMachineCatalog() {
    return this.getStringAttribute('associated_machine_catalog');
  }

  // hosted_machine_id - computed: true, optional: false, required: false
  public get hostedMachineId() {
    return this.getStringAttribute('hosted_machine_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_name - computed: true, optional: false, required: false
  public get machineName() {
    return this.getStringAttribute('machine_name');
  }
}

export class DataCitrixMachineCatalogVdasList extends cdktf.ComplexList {

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
  public get(index: number): DataCitrixMachineCatalogVdasOutputReference {
    return new DataCitrixMachineCatalogVdasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/machine_catalog citrix_machine_catalog}
*/
export class DataCitrixMachineCatalog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_machine_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixMachineCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixMachineCatalog to import
  * @param importFromId The id of the existing DataCitrixMachineCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/machine_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixMachineCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_machine_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/machine_catalog citrix_machine_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixMachineCatalogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixMachineCatalogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_machine_catalog',
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
    this._id = config.id;
    this._machineCatalogFolderPath = config.machineCatalogFolderPath;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // machine_catalog_folder_path - computed: false, optional: true, required: false
  private _machineCatalogFolderPath?: string; 
  public get machineCatalogFolderPath() {
    return this.getStringAttribute('machine_catalog_folder_path');
  }
  public set machineCatalogFolderPath(value: string) {
    this._machineCatalogFolderPath = value;
  }
  public resetMachineCatalogFolderPath() {
    this._machineCatalogFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCatalogFolderPathInput() {
    return this._machineCatalogFolderPath;
  }

  // name - computed: false, optional: true, required: false
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenants'));
  }

  // vdas - computed: true, optional: false, required: false
  private _vdas = new DataCitrixMachineCatalogVdasList(this, "vdas", false);
  public get vdas() {
    return this._vdas;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      machine_catalog_folder_path: cdktf.stringToTerraform(this._machineCatalogFolderPath),
      name: cdktf.stringToTerraform(this._name),
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
      machine_catalog_folder_path: {
        value: cdktf.stringToHclTerraform(this._machineCatalogFolderPath),
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
