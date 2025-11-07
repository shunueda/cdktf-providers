// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Capacity Unit corresponding to the size. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume#cap_unit Volume#cap_unit}
  */
  readonly capUnit?: string;
  /**
  * States whether mobility ID is enabled on the volume. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume#mobility_id_enabled Volume#mobility_id_enabled}
  */
  readonly mobilityIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the storage group. sg_name is required while creating the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume#sg_name Volume#sg_name}
  */
  readonly sgName: string;
  /**
  * The size of the volume. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume#size Volume#size}
  */
  readonly size: number;
  /**
  * The name of the volume. Only alphanumeric characters, underscores ( _ ). (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume#vol_name Volume#vol_name}
  */
  readonly volName: string;
}
export interface VolumeRdfGroupIds {
}

export function volumeRdfGroupIdsToTerraform(struct?: VolumeRdfGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function volumeRdfGroupIdsToHclTerraform(struct?: VolumeRdfGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VolumeRdfGroupIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeRdfGroupIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeRdfGroupIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // rdf_group_number - computed: true, optional: false, required: false
  public get rdfGroupNumber() {
    return this.getNumberAttribute('rdf_group_number');
  }
}

export class VolumeRdfGroupIdsList extends cdktf.ComplexList {

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
  public get(index: number): VolumeRdfGroupIdsOutputReference {
    return new VolumeRdfGroupIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeStorageGroups {
}

export function volumeStorageGroupsToTerraform(struct?: VolumeStorageGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function volumeStorageGroupsToHclTerraform(struct?: VolumeStorageGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VolumeStorageGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeStorageGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeStorageGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parent_storage_group_name - computed: true, optional: false, required: false
  public get parentStorageGroupName() {
    return this.getStringAttribute('parent_storage_group_name');
  }

  // storage_group_name - computed: true, optional: false, required: false
  public get storageGroupName() {
    return this.getStringAttribute('storage_group_name');
  }
}

export class VolumeStorageGroupsList extends cdktf.ComplexList {

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
  public get(index: number): VolumeStorageGroupsOutputReference {
    return new VolumeStorageGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSymmetrixPortKey {
}

export function volumeSymmetrixPortKeyToTerraform(struct?: VolumeSymmetrixPortKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function volumeSymmetrixPortKeyToHclTerraform(struct?: VolumeSymmetrixPortKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VolumeSymmetrixPortKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeSymmetrixPortKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSymmetrixPortKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // director_id - computed: true, optional: false, required: false
  public get directorId() {
    return this.getStringAttribute('director_id');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }
}

export class VolumeSymmetrixPortKeyList extends cdktf.ComplexList {

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
  public get(index: number): VolumeSymmetrixPortKeyOutputReference {
    return new VolumeSymmetrixPortKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume powermax_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/volume powermax_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_volume',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capUnit = config.capUnit;
    this._mobilityIdEnabled = config.mobilityIdEnabled;
    this._sgName = config.sgName;
    this._size = config.size;
    this._volName = config.volName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_percent - computed: true, optional: false, required: false
  public get allocatedPercent() {
    return this.getNumberAttribute('allocated_percent');
  }

  // cap_unit - computed: true, optional: true, required: false
  private _capUnit?: string; 
  public get capUnit() {
    return this.getStringAttribute('cap_unit');
  }
  public set capUnit(value: string) {
    this._capUnit = value;
  }
  public resetCapUnit() {
    this._capUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capUnitInput() {
    return this._capUnit;
  }

  // effective_wwn - computed: true, optional: false, required: false
  public get effectiveWwn() {
    return this.getStringAttribute('effective_wwn');
  }

  // emulation - computed: true, optional: false, required: false
  public get emulation() {
    return this.getStringAttribute('emulation');
  }

  // encapsulated - computed: true, optional: false, required: false
  public get encapsulated() {
    return this.getBooleanAttribute('encapsulated');
  }

  // encapsulated_wwn - computed: true, optional: false, required: false
  public get encapsulatedWwn() {
    return this.getStringAttribute('encapsulated_wwn');
  }

  // has_effective_wwn - computed: true, optional: false, required: false
  public get hasEffectiveWwn() {
    return this.getBooleanAttribute('has_effective_wwn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mobility_id_enabled - computed: true, optional: true, required: false
  private _mobilityIdEnabled?: boolean | cdktf.IResolvable; 
  public get mobilityIdEnabled() {
    return this.getBooleanAttribute('mobility_id_enabled');
  }
  public set mobilityIdEnabled(value: boolean | cdktf.IResolvable) {
    this._mobilityIdEnabled = value;
  }
  public resetMobilityIdEnabled() {
    this._mobilityIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilityIdEnabledInput() {
    return this._mobilityIdEnabled;
  }

  // nguid - computed: true, optional: false, required: false
  public get nguid() {
    return this.getStringAttribute('nguid');
  }

  // num_of_front_end_paths - computed: true, optional: false, required: false
  public get numOfFrontEndPaths() {
    return this.getNumberAttribute('num_of_front_end_paths');
  }

  // num_of_storage_groups - computed: true, optional: false, required: false
  public get numOfStorageGroups() {
    return this.getNumberAttribute('num_of_storage_groups');
  }

  // oracle_instance_name - computed: true, optional: false, required: false
  public get oracleInstanceName() {
    return this.getStringAttribute('oracle_instance_name');
  }

  // pinned - computed: true, optional: false, required: false
  public get pinned() {
    return this.getBooleanAttribute('pinned');
  }

  // rdf_group_ids - computed: true, optional: false, required: false
  private _rdfGroupIds = new VolumeRdfGroupIdsList(this, "rdf_group_ids", false);
  public get rdfGroupIds() {
    return this._rdfGroupIds;
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }

  // sg_name - computed: false, optional: false, required: true
  private _sgName?: string; 
  public get sgName() {
    return this.getStringAttribute('sg_name');
  }
  public set sgName(value: string) {
    this._sgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sgNameInput() {
    return this._sgName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapvx_source - computed: true, optional: false, required: false
  public get snapvxSource() {
    return this.getBooleanAttribute('snapvx_source');
  }

  // snapvx_target - computed: true, optional: false, required: false
  public get snapvxTarget() {
    return this.getBooleanAttribute('snapvx_target');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_groups - computed: true, optional: false, required: false
  private _storageGroups = new VolumeStorageGroupsList(this, "storage_groups", false);
  public get storageGroups() {
    return this._storageGroups;
  }

  // symmetrix_port_key - computed: true, optional: false, required: false
  private _symmetrixPortKey = new VolumeSymmetrixPortKeyList(this, "symmetrix_port_key", false);
  public get symmetrixPortKey() {
    return this._symmetrixPortKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unreducible_data_gb - computed: true, optional: false, required: false
  public get unreducibleDataGb() {
    return this.getNumberAttribute('unreducible_data_gb');
  }

  // vol_name - computed: false, optional: false, required: true
  private _volName?: string; 
  public get volName() {
    return this.getStringAttribute('vol_name');
  }
  public set volName(value: string) {
    this._volName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volNameInput() {
    return this._volName;
  }

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cap_unit: cdktf.stringToTerraform(this._capUnit),
      mobility_id_enabled: cdktf.booleanToTerraform(this._mobilityIdEnabled),
      sg_name: cdktf.stringToTerraform(this._sgName),
      size: cdktf.numberToTerraform(this._size),
      vol_name: cdktf.stringToTerraform(this._volName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cap_unit: {
        value: cdktf.stringToHclTerraform(this._capUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobility_id_enabled: {
        value: cdktf.booleanToHclTerraform(this._mobilityIdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sg_name: {
        value: cdktf.stringToHclTerraform(this._sgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vol_name: {
        value: cdktf.stringToHclTerraform(this._volName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
