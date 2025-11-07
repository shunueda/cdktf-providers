// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomSbmOperatingSystemOrderOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_options#id DataServerscomSbmOperatingSystemOrderOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_options#location_id DataServerscomSbmOperatingSystemOrderOptions#location_id}
  */
  readonly locationId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_options#sbm_flavor_model_id DataServerscomSbmOperatingSystemOrderOptions#sbm_flavor_model_id}
  */
  readonly sbmFlavorModelId: number;
}
export interface DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystems {
}

export function dataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystemsToTerraform(struct?: DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystemsToHclTerraform(struct?: DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // filesystems - computed: true, optional: false, required: false
  public get filesystems() {
    return this.getListAttribute('filesystems');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystemsList extends cdktf.ComplexList {

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
  public get(index: number): DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystemsOutputReference {
    return new DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_options serverscom_sbm_operating_system_order_options}
*/
export class DataServerscomSbmOperatingSystemOrderOptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_sbm_operating_system_order_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomSbmOperatingSystemOrderOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomSbmOperatingSystemOrderOptions to import
  * @param importFromId The id of the existing DataServerscomSbmOperatingSystemOrderOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomSbmOperatingSystemOrderOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_sbm_operating_system_order_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_operating_system_order_options serverscom_sbm_operating_system_order_options} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomSbmOperatingSystemOrderOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomSbmOperatingSystemOrderOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_sbm_operating_system_order_options',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2'
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
    this._locationId = config.locationId;
    this._sbmFlavorModelId = config.sbmFlavorModelId;
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

  // location_id - computed: false, optional: false, required: true
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // sbm_flavor_model_id - computed: false, optional: false, required: true
  private _sbmFlavorModelId?: number; 
  public get sbmFlavorModelId() {
    return this.getNumberAttribute('sbm_flavor_model_id');
  }
  public set sbmFlavorModelId(value: number) {
    this._sbmFlavorModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sbmFlavorModelIdInput() {
    return this._sbmFlavorModelId;
  }

  // sbm_operating_systems - computed: true, optional: false, required: false
  private _sbmOperatingSystems = new DataServerscomSbmOperatingSystemOrderOptionsSbmOperatingSystemsList(this, "sbm_operating_systems", false);
  public get sbmOperatingSystems() {
    return this._sbmOperatingSystems;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.numberToTerraform(this._locationId),
      sbm_flavor_model_id: cdktf.numberToTerraform(this._sbmFlavorModelId),
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
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sbm_flavor_model_id: {
        value: cdktf.numberToHclTerraform(this._sbmFlavorModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
