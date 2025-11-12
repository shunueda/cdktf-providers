// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/vda
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixVdaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The delivery group which the VDAs are associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/vda#delivery_group DataCitrixVda#delivery_group}
  */
  readonly deliveryGroup?: string;
  /**
  * The machine catalog which the VDAs are associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/vda#machine_catalog DataCitrixVda#machine_catalog}
  */
  readonly machineCatalog?: string;
}
export interface DataCitrixVdaVdas {
}

export function dataCitrixVdaVdasToTerraform(struct?: DataCitrixVdaVdas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixVdaVdasToHclTerraform(struct?: DataCitrixVdaVdas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixVdaVdasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixVdaVdas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixVdaVdas | undefined) {
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

export class DataCitrixVdaVdasList extends cdktf.ComplexList {

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
  public get(index: number): DataCitrixVdaVdasOutputReference {
    return new DataCitrixVdaVdasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/vda citrix_vda}
*/
export class DataCitrixVda extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_vda";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixVda resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixVda to import
  * @param importFromId The id of the existing DataCitrixVda that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/vda#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixVda to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_vda", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/vda citrix_vda} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixVdaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixVdaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_vda',
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
    this._deliveryGroup = config.deliveryGroup;
    this._machineCatalog = config.machineCatalog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_group - computed: false, optional: true, required: false
  private _deliveryGroup?: string; 
  public get deliveryGroup() {
    return this.getStringAttribute('delivery_group');
  }
  public set deliveryGroup(value: string) {
    this._deliveryGroup = value;
  }
  public resetDeliveryGroup() {
    this._deliveryGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupInput() {
    return this._deliveryGroup;
  }

  // machine_catalog - computed: false, optional: true, required: false
  private _machineCatalog?: string; 
  public get machineCatalog() {
    return this.getStringAttribute('machine_catalog');
  }
  public set machineCatalog(value: string) {
    this._machineCatalog = value;
  }
  public resetMachineCatalog() {
    this._machineCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCatalogInput() {
    return this._machineCatalog;
  }

  // vdas - computed: true, optional: false, required: false
  private _vdas = new DataCitrixVdaVdasList(this, "vdas", false);
  public get vdas() {
    return this._vdas;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_group: cdktf.stringToTerraform(this._deliveryGroup),
      machine_catalog: cdktf.stringToTerraform(this._machineCatalog),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_group: {
        value: cdktf.stringToHclTerraform(this._deliveryGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_catalog: {
        value: cdktf.stringToHclTerraform(this._machineCatalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
