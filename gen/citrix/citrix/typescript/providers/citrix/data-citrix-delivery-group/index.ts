// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/delivery_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixDeliveryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path to the folder in which the delivery group is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/delivery_group#delivery_group_folder_path DataCitrixDeliveryGroup#delivery_group_folder_path}
  */
  readonly deliveryGroupFolderPath?: string;
  /**
  * GUID identifier of the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/delivery_group#id DataCitrixDeliveryGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the delivery group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/delivery_group#name DataCitrixDeliveryGroup#name}
  */
  readonly name?: string;
}
export interface DataCitrixDeliveryGroupVdas {
}

export function dataCitrixDeliveryGroupVdasToTerraform(struct?: DataCitrixDeliveryGroupVdas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixDeliveryGroupVdasToHclTerraform(struct?: DataCitrixDeliveryGroupVdas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixDeliveryGroupVdasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixDeliveryGroupVdas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixDeliveryGroupVdas | undefined) {
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

export class DataCitrixDeliveryGroupVdasList extends cdktf.ComplexList {

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
  public get(index: number): DataCitrixDeliveryGroupVdasOutputReference {
    return new DataCitrixDeliveryGroupVdasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/delivery_group citrix_delivery_group}
*/
export class DataCitrixDeliveryGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_delivery_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixDeliveryGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixDeliveryGroup to import
  * @param importFromId The id of the existing DataCitrixDeliveryGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/delivery_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixDeliveryGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_delivery_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/delivery_group citrix_delivery_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixDeliveryGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixDeliveryGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_delivery_group',
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
    this._deliveryGroupFolderPath = config.deliveryGroupFolderPath;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color_depth - computed: true, optional: false, required: false
  public get colorDepth() {
    return this.getStringAttribute('color_depth');
  }

  // delivery_group_folder_path - computed: false, optional: true, required: false
  private _deliveryGroupFolderPath?: string; 
  public get deliveryGroupFolderPath() {
    return this.getStringAttribute('delivery_group_folder_path');
  }
  public set deliveryGroupFolderPath(value: string) {
    this._deliveryGroupFolderPath = value;
  }
  public resetDeliveryGroupFolderPath() {
    this._deliveryGroupFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupFolderPathInput() {
    return this._deliveryGroupFolderPath;
  }

  // delivery_type - computed: true, optional: false, required: false
  public get deliveryType() {
    return this.getStringAttribute('delivery_type');
  }

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

  // in_maintenance_mode - computed: true, optional: false, required: false
  public get inMaintenanceMode() {
    return this.getBooleanAttribute('in_maintenance_mode');
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

  // secure_ica_required - computed: true, optional: false, required: false
  public get secureIcaRequired() {
    return this.getBooleanAttribute('secure_ica_required');
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
  private _vdas = new DataCitrixDeliveryGroupVdasList(this, "vdas", false);
  public get vdas() {
    return this._vdas;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_group_folder_path: cdktf.stringToTerraform(this._deliveryGroupFolderPath),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_group_folder_path: {
        value: cdktf.stringToHclTerraform(this._deliveryGroupFolderPath),
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
