// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/location_group_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaLocationGroupControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the location within the ziaLocations block to search for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/location_group_controller#location_name DataZpaLocationGroupController#location_name}
  */
  readonly locationName: string;
  /**
  * Name of the extranet resource partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/location_group_controller#zia_er_name DataZpaLocationGroupController#zia_er_name}
  */
  readonly ziaErName: string;
}
export interface DataZpaLocationGroupControllerZiaLocations {
}

export function dataZpaLocationGroupControllerZiaLocationsToTerraform(struct?: DataZpaLocationGroupControllerZiaLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaLocationGroupControllerZiaLocationsToHclTerraform(struct?: DataZpaLocationGroupControllerZiaLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaLocationGroupControllerZiaLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaLocationGroupControllerZiaLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaLocationGroupControllerZiaLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZpaLocationGroupControllerZiaLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaLocationGroupControllerZiaLocationsOutputReference {
    return new DataZpaLocationGroupControllerZiaLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/location_group_controller zpa_location_group_controller}
*/
export class DataZpaLocationGroupController extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_location_group_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaLocationGroupController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaLocationGroupController to import
  * @param importFromId The id of the existing DataZpaLocationGroupController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/location_group_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaLocationGroupController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_location_group_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/location_group_controller zpa_location_group_controller} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaLocationGroupControllerConfig
  */
  public constructor(scope: Construct, id: string, config: DataZpaLocationGroupControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_location_group_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._locationName = config.locationName;
    this._ziaErName = config.ziaErName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_group_id - computed: true, optional: false, required: false
  public get locationGroupId() {
    return this.getStringAttribute('location_group_id');
  }

  // location_group_name - computed: true, optional: false, required: false
  public get locationGroupName() {
    return this.getStringAttribute('location_group_name');
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // zia_er_name - computed: false, optional: false, required: true
  private _ziaErName?: string; 
  public get ziaErName() {
    return this.getStringAttribute('zia_er_name');
  }
  public set ziaErName(value: string) {
    this._ziaErName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ziaErNameInput() {
    return this._ziaErName;
  }

  // zia_locations - computed: true, optional: false, required: false
  private _ziaLocations = new DataZpaLocationGroupControllerZiaLocationsList(this, "zia_locations", false);
  public get ziaLocations() {
    return this._ziaLocations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location_name: cdktf.stringToTerraform(this._locationName),
      zia_er_name: cdktf.stringToTerraform(this._ziaErName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location_name: {
        value: cdktf.stringToHclTerraform(this._locationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zia_er_name: {
        value: cdktf.stringToHclTerraform(this._ziaErName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
