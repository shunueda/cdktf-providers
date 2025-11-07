// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_locations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudwrapperLocationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_locations#locations DataAkamaiCloudwrapperLocations#locations}
  */
  readonly locations?: DataAkamaiCloudwrapperLocationsLocations[] | cdktf.IResolvable;
}
export interface DataAkamaiCloudwrapperLocationsLocationsTrafficTypes {
}

export function dataAkamaiCloudwrapperLocationsLocationsTrafficTypesToTerraform(struct?: DataAkamaiCloudwrapperLocationsLocationsTrafficTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperLocationsLocationsTrafficTypesToHclTerraform(struct?: DataAkamaiCloudwrapperLocationsLocationsTrafficTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperLocationsLocationsTrafficTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperLocationsLocationsTrafficTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperLocationsLocationsTrafficTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }

  // traffic_type_id - computed: true, optional: false, required: false
  public get trafficTypeId() {
    return this.getNumberAttribute('traffic_type_id');
  }
}

export class DataAkamaiCloudwrapperLocationsLocationsTrafficTypesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperLocationsLocationsTrafficTypes[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperLocationsLocationsTrafficTypesOutputReference {
    return new DataAkamaiCloudwrapperLocationsLocationsTrafficTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperLocationsLocations {
  /**
  * traffic_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_locations#traffic_types DataAkamaiCloudwrapperLocations#traffic_types}
  */
  readonly trafficTypes?: DataAkamaiCloudwrapperLocationsLocationsTrafficTypes[] | cdktf.IResolvable;
}

export function dataAkamaiCloudwrapperLocationsLocationsToTerraform(struct?: DataAkamaiCloudwrapperLocationsLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_types: cdktf.listMapper(dataAkamaiCloudwrapperLocationsLocationsTrafficTypesToTerraform, true)(struct!.trafficTypes),
  }
}


export function dataAkamaiCloudwrapperLocationsLocationsToHclTerraform(struct?: DataAkamaiCloudwrapperLocationsLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_types: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperLocationsLocationsTrafficTypesToHclTerraform, true)(struct!.trafficTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiCloudwrapperLocationsLocationsTrafficTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudwrapperLocationsLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperLocationsLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTypes = this._trafficTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperLocationsLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficTypes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficTypes.internalValue = value.trafficTypes;
    }
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // multi_cdn_location_id - computed: true, optional: false, required: false
  public get multiCdnLocationId() {
    return this.getStringAttribute('multi_cdn_location_id');
  }

  // traffic_types - computed: false, optional: true, required: false
  private _trafficTypes = new DataAkamaiCloudwrapperLocationsLocationsTrafficTypesList(this, "traffic_types", false);
  public get trafficTypes() {
    return this._trafficTypes;
  }
  public putTrafficTypes(value: DataAkamaiCloudwrapperLocationsLocationsTrafficTypes[] | cdktf.IResolvable) {
    this._trafficTypes.internalValue = value;
  }
  public resetTrafficTypes() {
    this._trafficTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypesInput() {
    return this._trafficTypes.internalValue;
  }
}

export class DataAkamaiCloudwrapperLocationsLocationsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperLocationsLocations[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperLocationsLocationsOutputReference {
    return new DataAkamaiCloudwrapperLocationsLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_locations akamai_cloudwrapper_locations}
*/
export class DataAkamaiCloudwrapperLocations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudwrapper_locations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudwrapperLocations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudwrapperLocations to import
  * @param importFromId The id of the existing DataAkamaiCloudwrapperLocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_locations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudwrapperLocations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudwrapper_locations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_locations akamai_cloudwrapper_locations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudwrapperLocationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudwrapperLocationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudwrapper_locations',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._locations.internalValue = config.locations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // locations - computed: false, optional: true, required: false
  private _locations = new DataAkamaiCloudwrapperLocationsLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: DataAkamaiCloudwrapperLocationsLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      locations: cdktf.listMapper(dataAkamaiCloudwrapperLocationsLocationsToTerraform, true)(this._locations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      locations: {
        value: cdktf.listMapperHcl(dataAkamaiCloudwrapperLocationsLocationsToHclTerraform, true)(this._locations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiCloudwrapperLocationsLocationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
