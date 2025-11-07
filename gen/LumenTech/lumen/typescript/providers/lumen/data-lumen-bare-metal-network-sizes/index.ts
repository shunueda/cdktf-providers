// https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/data-sources/bare_metal_network_sizes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLumenBareMetalNetworkSizesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/data-sources/bare_metal_network_sizes#id DataLumenBareMetalNetworkSizes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of a location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/data-sources/bare_metal_network_sizes#location_id DataLumenBareMetalNetworkSizes#location_id}
  */
  readonly locationId: string;
}
export interface DataLumenBareMetalNetworkSizesNetworkSizes {
}

export function dataLumenBareMetalNetworkSizesNetworkSizesToTerraform(struct?: DataLumenBareMetalNetworkSizesNetworkSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLumenBareMetalNetworkSizesNetworkSizesToHclTerraform(struct?: DataLumenBareMetalNetworkSizesNetworkSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLumenBareMetalNetworkSizesNetworkSizesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLumenBareMetalNetworkSizesNetworkSizes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLumenBareMetalNetworkSizesNetworkSizes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_ips - computed: true, optional: false, required: false
  public get availableIps() {
    return this.getNumberAttribute('available_ips');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getStringAttribute('price');
  }
}

export class DataLumenBareMetalNetworkSizesNetworkSizesList extends cdktf.ComplexList {

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
  public get(index: number): DataLumenBareMetalNetworkSizesNetworkSizesOutputReference {
    return new DataLumenBareMetalNetworkSizesNetworkSizesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/data-sources/bare_metal_network_sizes lumen_bare_metal_network_sizes}
*/
export class DataLumenBareMetalNetworkSizes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lumen_bare_metal_network_sizes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLumenBareMetalNetworkSizes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLumenBareMetalNetworkSizes to import
  * @param importFromId The id of the existing DataLumenBareMetalNetworkSizes that should be imported. Refer to the {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/data-sources/bare_metal_network_sizes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLumenBareMetalNetworkSizes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lumen_bare_metal_network_sizes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/data-sources/bare_metal_network_sizes lumen_bare_metal_network_sizes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLumenBareMetalNetworkSizesConfig
  */
  public constructor(scope: Construct, id: string, config: DataLumenBareMetalNetworkSizesConfig) {
    super(scope, id, {
      terraformResourceType: 'lumen_bare_metal_network_sizes',
      terraformGeneratorMetadata: {
        providerName: 'lumen',
        providerVersion: '3.0.0'
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
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // network_sizes - computed: true, optional: false, required: false
  private _networkSizes = new DataLumenBareMetalNetworkSizesNetworkSizesList(this, "network_sizes", false);
  public get networkSizes() {
    return this._networkSizes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.stringToTerraform(this._locationId),
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
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
