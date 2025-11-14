// https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/availability_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcAvailabilityZonesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataMgcAvailabilityZonesRegionsAvailabilityZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/availability_zones#block_type DataMgcAvailabilityZones#block_type}
  */
  readonly blockType?: string;
}

export function dataMgcAvailabilityZonesRegionsAvailabilityZonesToTerraform(struct?: DataMgcAvailabilityZonesRegionsAvailabilityZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_type: cdktf.stringToTerraform(struct!.blockType),
  }
}


export function dataMgcAvailabilityZonesRegionsAvailabilityZonesToHclTerraform(struct?: DataMgcAvailabilityZonesRegionsAvailabilityZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_type: {
      value: cdktf.stringToHclTerraform(struct!.blockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMgcAvailabilityZonesRegionsAvailabilityZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMgcAvailabilityZonesRegionsAvailabilityZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockType = this._blockType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcAvailabilityZonesRegionsAvailabilityZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockType = value.blockType;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // block_type - computed: true, optional: true, required: false
  private _blockType?: string; 
  public get blockType() {
    return this.getStringAttribute('block_type');
  }
  public set blockType(value: string) {
    this._blockType = value;
  }
  public resetBlockType() {
    this._blockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTypeInput() {
    return this._blockType;
  }
}

export class DataMgcAvailabilityZonesRegionsAvailabilityZonesList extends cdktf.ComplexList {
  public internalValue? : DataMgcAvailabilityZonesRegionsAvailabilityZones[] | cdktf.IResolvable

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
  public get(index: number): DataMgcAvailabilityZonesRegionsAvailabilityZonesOutputReference {
    return new DataMgcAvailabilityZonesRegionsAvailabilityZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMgcAvailabilityZonesRegions {
}

export function dataMgcAvailabilityZonesRegionsToTerraform(struct?: DataMgcAvailabilityZonesRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcAvailabilityZonesRegionsToHclTerraform(struct?: DataMgcAvailabilityZonesRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcAvailabilityZonesRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMgcAvailabilityZonesRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcAvailabilityZonesRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  private _availabilityZones = new DataMgcAvailabilityZonesRegionsAvailabilityZonesList(this, "availability_zones", false);
  public get availabilityZones() {
    return this._availabilityZones;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataMgcAvailabilityZonesRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcAvailabilityZonesRegionsOutputReference {
    return new DataMgcAvailabilityZonesRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/availability_zones mgc_availability_zones}
*/
export class DataMgcAvailabilityZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_availability_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcAvailabilityZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcAvailabilityZones to import
  * @param importFromId The id of the existing DataMgcAvailabilityZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/availability_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcAvailabilityZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_availability_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/availability_zones mgc_availability_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcAvailabilityZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMgcAvailabilityZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mgc_availability_zones',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.1',
        providerVersionConstraint: '0.40.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // regions - computed: true, optional: false, required: false
  private _regions = new DataMgcAvailabilityZonesRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
