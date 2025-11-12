// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowermaxVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#timeouts DataPowermaxVolume#timeouts}
  */
  readonly timeouts?: DataPowermaxVolumeTimeouts;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#filter DataPowermaxVolume#filter}
  */
  readonly filter?: DataPowermaxVolumeFilter;
}
export interface DataPowermaxVolumeTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#read DataPowermaxVolume#read}
  */
  readonly read?: string;
}

export function dataPowermaxVolumeTimeoutsToTerraform(struct?: DataPowermaxVolumeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowermaxVolumeTimeoutsToHclTerraform(struct?: DataPowermaxVolumeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxVolumeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxVolumeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataPowermaxVolumeVolumesRdfGroupIds {
}

export function dataPowermaxVolumeVolumesRdfGroupIdsToTerraform(struct?: DataPowermaxVolumeVolumesRdfGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowermaxVolumeVolumesRdfGroupIdsToHclTerraform(struct?: DataPowermaxVolumeVolumesRdfGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowermaxVolumeVolumesRdfGroupIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxVolumeVolumesRdfGroupIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxVolumeVolumesRdfGroupIds | undefined) {
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

export class DataPowermaxVolumeVolumesRdfGroupIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowermaxVolumeVolumesRdfGroupIdsOutputReference {
    return new DataPowermaxVolumeVolumesRdfGroupIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxVolumeVolumesStorageGroups {
}

export function dataPowermaxVolumeVolumesStorageGroupsToTerraform(struct?: DataPowermaxVolumeVolumesStorageGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowermaxVolumeVolumesStorageGroupsToHclTerraform(struct?: DataPowermaxVolumeVolumesStorageGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowermaxVolumeVolumesStorageGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxVolumeVolumesStorageGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxVolumeVolumesStorageGroups | undefined) {
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

export class DataPowermaxVolumeVolumesStorageGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowermaxVolumeVolumesStorageGroupsOutputReference {
    return new DataPowermaxVolumeVolumesStorageGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxVolumeVolumesSymmetrixPortKey {
}

export function dataPowermaxVolumeVolumesSymmetrixPortKeyToTerraform(struct?: DataPowermaxVolumeVolumesSymmetrixPortKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowermaxVolumeVolumesSymmetrixPortKeyToHclTerraform(struct?: DataPowermaxVolumeVolumesSymmetrixPortKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowermaxVolumeVolumesSymmetrixPortKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxVolumeVolumesSymmetrixPortKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxVolumeVolumesSymmetrixPortKey | undefined) {
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

export class DataPowermaxVolumeVolumesSymmetrixPortKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataPowermaxVolumeVolumesSymmetrixPortKeyOutputReference {
    return new DataPowermaxVolumeVolumesSymmetrixPortKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxVolumeVolumes {
  /**
  * States whether mobility ID is enabled on the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#mobility_id_enabled DataPowermaxVolume#mobility_id_enabled}
  */
  readonly mobilityIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#volume_identifier DataPowermaxVolume#volume_identifier}
  */
  readonly volumeIdentifier?: string;
}

export function dataPowermaxVolumeVolumesToTerraform(struct?: DataPowermaxVolumeVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobility_id_enabled: cdktf.booleanToTerraform(struct!.mobilityIdEnabled),
    volume_identifier: cdktf.stringToTerraform(struct!.volumeIdentifier),
  }
}


export function dataPowermaxVolumeVolumesToHclTerraform(struct?: DataPowermaxVolumeVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobility_id_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mobilityIdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_identifier: {
      value: cdktf.stringToHclTerraform(struct!.volumeIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxVolumeVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxVolumeVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobilityIdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilityIdEnabled = this._mobilityIdEnabled;
    }
    if (this._volumeIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeIdentifier = this._volumeIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxVolumeVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobilityIdEnabled = undefined;
      this._volumeIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobilityIdEnabled = value.mobilityIdEnabled;
      this._volumeIdentifier = value.volumeIdentifier;
    }
  }

  // allocated_percent - computed: true, optional: false, required: false
  public get allocatedPercent() {
    return this.getNumberAttribute('allocated_percent');
  }

  // cap_cyl - computed: true, optional: false, required: false
  public get capCyl() {
    return this.getNumberAttribute('cap_cyl');
  }

  // cap_gb - computed: true, optional: false, required: false
  public get capGb() {
    return this.getNumberAttribute('cap_gb');
  }

  // cap_mb - computed: true, optional: false, required: false
  public get capMb() {
    return this.getNumberAttribute('cap_mb');
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

  // physical_name - computed: true, optional: false, required: false
  public get physicalName() {
    return this.getStringAttribute('physical_name');
  }

  // pinned - computed: true, optional: false, required: false
  public get pinned() {
    return this.getBooleanAttribute('pinned');
  }

  // rdf_group_ids - computed: true, optional: false, required: false
  private _rdfGroupIds = new DataPowermaxVolumeVolumesRdfGroupIdsList(this, "rdf_group_ids", false);
  public get rdfGroupIds() {
    return this._rdfGroupIds;
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getBooleanAttribute('reserved');
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
  private _storageGroups = new DataPowermaxVolumeVolumesStorageGroupsList(this, "storage_groups", false);
  public get storageGroups() {
    return this._storageGroups;
  }

  // symmetrix_port_key - computed: true, optional: false, required: false
  private _symmetrixPortKey = new DataPowermaxVolumeVolumesSymmetrixPortKeyList(this, "symmetrix_port_key", false);
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

  // volume_identifier - computed: true, optional: true, required: false
  private _volumeIdentifier?: string; 
  public get volumeIdentifier() {
    return this.getStringAttribute('volume_identifier');
  }
  public set volumeIdentifier(value: string) {
    this._volumeIdentifier = value;
  }
  public resetVolumeIdentifier() {
    this._volumeIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdentifierInput() {
    return this._volumeIdentifier;
  }

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }
}

export class DataPowermaxVolumeVolumesList extends cdktf.ComplexList {
  public internalValue? : DataPowermaxVolumeVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataPowermaxVolumeVolumesOutputReference {
    return new DataPowermaxVolumeVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxVolumeFilter {
  /**
  * Greater than, Less than or equal to the allocated percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#allocated_percent DataPowermaxVolume#allocated_percent}
  */
  readonly allocatedPercent?: string;
  /**
  * Volumes that are associated (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#associated DataPowermaxVolume#associated}
  */
  readonly associated?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are available thin volumes (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#available_thin_volumes DataPowermaxVolume#available_thin_volumes}
  */
  readonly availableThinVolumes?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are bound tdev (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#bound_tdev DataPowermaxVolume#bound_tdev}
  */
  readonly boundTdev?: boolean | cdktf.IResolvable;
  /**
  * Greater than, Less than or equal to the cap CYL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#cap_cyl DataPowermaxVolume#cap_cyl}
  */
  readonly capCyl?: string;
  /**
  * Greater than, Less than or equal to the cap gb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#cap_gb DataPowermaxVolume#cap_gb}
  */
  readonly capGb?: string;
  /**
  * Greater than, Less than or equal to the cap mb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#cap_mb DataPowermaxVolume#cap_mb}
  */
  readonly capMb?: string;
  /**
  * Greater than, Less than or equal to the cap tb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#cap_tb DataPowermaxVolume#cap_tb}
  */
  readonly capTb?: string;
  /**
  * Volumes that are mapped to a CU image with the specified CU image number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#cu_image_num DataPowermaxVolume#cu_image_num}
  */
  readonly cuImageNum?: string;
  /**
  * Volumes that are mapped to a CU image with the specified CU SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#cu_image_ssid DataPowermaxVolume#cu_image_ssid}
  */
  readonly cuImageSsid?: string;
  /**
  * Volumes that are data volume (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#data_volume DataPowermaxVolume#data_volume}
  */
  readonly dataVolume?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are dld (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#dld DataPowermaxVolume#dld}
  */
  readonly dld?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are drv (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#drv DataPowermaxVolume#drv}
  */
  readonly drv?: boolean | cdktf.IResolvable;
  /**
  * Volumes that contain the specified effective_wwn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#effective_wwn DataPowermaxVolume#effective_wwn}
  */
  readonly effectiveWwn?: string;
  /**
  * Volumes that are of the specified emulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#emulation DataPowermaxVolume#emulation}
  */
  readonly emulation?: string;
  /**
  * Volumes that are encapsulated (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#encapsulated DataPowermaxVolume#encapsulated}
  */
  readonly encapsulated?: boolean | cdktf.IResolvable;
  /**
  * The specified volume encapsulated_wwn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#encapsulated_wwn DataPowermaxVolume#encapsulated_wwn}
  */
  readonly encapsulatedWwn?: string;
  /**
  * Volumes that are gatekeeper (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#gatekeeper DataPowermaxVolume#gatekeeper}
  */
  readonly gatekeeper?: boolean | cdktf.IResolvable;
  /**
  * Volumes that have effective wwns (true/false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#has_effective_wwn DataPowermaxVolume#has_effective_wwn}
  */
  readonly hasEffectiveWwn?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are mapped (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#mapped DataPowermaxVolume#mapped}
  */
  readonly mapped?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are mobility ID enabled (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#mobility_id_enabled DataPowermaxVolume#mobility_id_enabled}
  */
  readonly mobilityIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Volumes that correspond to Namespace Globally Unique Identifier that uses the EUI64 16-byte designator format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#nguid DataPowermaxVolume#nguid}
  */
  readonly nguid?: string;
  /**
  * Greater than, Less than or equal to the number of front end paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#num_of_front_end_paths DataPowermaxVolume#num_of_front_end_paths}
  */
  readonly numOfFrontEndPaths?: string;
  /**
  * Greater than, Less than or equal to the number of masking views.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#num_of_masking_views DataPowermaxVolume#num_of_masking_views}
  */
  readonly numOfMaskingViews?: string;
  /**
  * Greater than, Less than or equal to the number of storage groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#num_of_storage_groups DataPowermaxVolume#num_of_storage_groups}
  */
  readonly numOfStorageGroups?: string;
  /**
  * Volumes that contain the specified Oracle Instance Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#oracle_instance_name DataPowermaxVolume#oracle_instance_name}
  */
  readonly oracleInstanceName?: string;
  /**
  * The specified volume physical name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#physical_name DataPowermaxVolume#physical_name}
  */
  readonly physicalName?: string;
  /**
  * Volumes that are pinned (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#pinned DataPowermaxVolume#pinned}
  */
  readonly pinned?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are private (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#private_volumes DataPowermaxVolume#private_volumes}
  */
  readonly privateVolumes?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are part of the specified rdf group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#rdf_group_number DataPowermaxVolume#rdf_group_number}
  */
  readonly rdfGroupNumber?: string;
  /**
  * Volumes that are reserved (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#reserved DataPowermaxVolume#reserved}
  */
  readonly reserved?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are mapped to CU images associated to the specified FICON split.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#split_name DataPowermaxVolume#split_name}
  */
  readonly splitName?: string;
  /**
  * The specified volume status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#status DataPowermaxVolume#status}
  */
  readonly status?: string;
  /**
  * The name of the storage group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#storage_group_name DataPowermaxVolume#storage_group_name}
  */
  readonly storageGroupName?: string;
  /**
  * Greater than, Less than or equal to the specified symmlun.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#symmlun DataPowermaxVolume#symmlun}
  */
  readonly symmlun?: string;
  /**
  * Volumes that are tdev (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#tdev DataPowermaxVolume#tdev}
  */
  readonly tdev?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are thin bcv (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#thin_bcv DataPowermaxVolume#thin_bcv}
  */
  readonly thinBcv?: boolean | cdktf.IResolvable;
  /**
  * Volumes that contain the specified volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#type DataPowermaxVolume#type}
  */
  readonly type?: string;
  /**
  * Greater than,Less than or equal to the unreducible data gb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#unreducible_data_gb DataPowermaxVolume#unreducible_data_gb}
  */
  readonly unreducibleDataGb?: string;
  /**
  * Volumes that are vdev (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#vdev DataPowermaxVolume#vdev}
  */
  readonly vdev?: boolean | cdktf.IResolvable;
  /**
  * Volumes that are virtual volumes (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#virtual_volumes DataPowermaxVolume#virtual_volumes}
  */
  readonly virtualVolumes?: boolean | cdktf.IResolvable;
  /**
  * The specified volume volume identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#volume_identifier DataPowermaxVolume#volume_identifier}
  */
  readonly volumeIdentifier?: string;
  /**
  * The specified volume wwn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#wwn DataPowermaxVolume#wwn}
  */
  readonly wwn?: string;
}

export function dataPowermaxVolumeFilterToTerraform(struct?: DataPowermaxVolumeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_percent: cdktf.stringToTerraform(struct!.allocatedPercent),
    associated: cdktf.booleanToTerraform(struct!.associated),
    available_thin_volumes: cdktf.booleanToTerraform(struct!.availableThinVolumes),
    bound_tdev: cdktf.booleanToTerraform(struct!.boundTdev),
    cap_cyl: cdktf.stringToTerraform(struct!.capCyl),
    cap_gb: cdktf.stringToTerraform(struct!.capGb),
    cap_mb: cdktf.stringToTerraform(struct!.capMb),
    cap_tb: cdktf.stringToTerraform(struct!.capTb),
    cu_image_num: cdktf.stringToTerraform(struct!.cuImageNum),
    cu_image_ssid: cdktf.stringToTerraform(struct!.cuImageSsid),
    data_volume: cdktf.booleanToTerraform(struct!.dataVolume),
    dld: cdktf.booleanToTerraform(struct!.dld),
    drv: cdktf.booleanToTerraform(struct!.drv),
    effective_wwn: cdktf.stringToTerraform(struct!.effectiveWwn),
    emulation: cdktf.stringToTerraform(struct!.emulation),
    encapsulated: cdktf.booleanToTerraform(struct!.encapsulated),
    encapsulated_wwn: cdktf.stringToTerraform(struct!.encapsulatedWwn),
    gatekeeper: cdktf.booleanToTerraform(struct!.gatekeeper),
    has_effective_wwn: cdktf.booleanToTerraform(struct!.hasEffectiveWwn),
    mapped: cdktf.booleanToTerraform(struct!.mapped),
    mobility_id_enabled: cdktf.booleanToTerraform(struct!.mobilityIdEnabled),
    nguid: cdktf.stringToTerraform(struct!.nguid),
    num_of_front_end_paths: cdktf.stringToTerraform(struct!.numOfFrontEndPaths),
    num_of_masking_views: cdktf.stringToTerraform(struct!.numOfMaskingViews),
    num_of_storage_groups: cdktf.stringToTerraform(struct!.numOfStorageGroups),
    oracle_instance_name: cdktf.stringToTerraform(struct!.oracleInstanceName),
    physical_name: cdktf.stringToTerraform(struct!.physicalName),
    pinned: cdktf.booleanToTerraform(struct!.pinned),
    private_volumes: cdktf.booleanToTerraform(struct!.privateVolumes),
    rdf_group_number: cdktf.stringToTerraform(struct!.rdfGroupNumber),
    reserved: cdktf.booleanToTerraform(struct!.reserved),
    split_name: cdktf.stringToTerraform(struct!.splitName),
    status: cdktf.stringToTerraform(struct!.status),
    storage_group_name: cdktf.stringToTerraform(struct!.storageGroupName),
    symmlun: cdktf.stringToTerraform(struct!.symmlun),
    tdev: cdktf.booleanToTerraform(struct!.tdev),
    thin_bcv: cdktf.booleanToTerraform(struct!.thinBcv),
    type: cdktf.stringToTerraform(struct!.type),
    unreducible_data_gb: cdktf.stringToTerraform(struct!.unreducibleDataGb),
    vdev: cdktf.booleanToTerraform(struct!.vdev),
    virtual_volumes: cdktf.booleanToTerraform(struct!.virtualVolumes),
    volume_identifier: cdktf.stringToTerraform(struct!.volumeIdentifier),
    wwn: cdktf.stringToTerraform(struct!.wwn),
  }
}


export function dataPowermaxVolumeFilterToHclTerraform(struct?: DataPowermaxVolumeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_percent: {
      value: cdktf.stringToHclTerraform(struct!.allocatedPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    associated: {
      value: cdktf.booleanToHclTerraform(struct!.associated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    available_thin_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.availableThinVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bound_tdev: {
      value: cdktf.booleanToHclTerraform(struct!.boundTdev),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cap_cyl: {
      value: cdktf.stringToHclTerraform(struct!.capCyl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cap_gb: {
      value: cdktf.stringToHclTerraform(struct!.capGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cap_mb: {
      value: cdktf.stringToHclTerraform(struct!.capMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cap_tb: {
      value: cdktf.stringToHclTerraform(struct!.capTb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cu_image_num: {
      value: cdktf.stringToHclTerraform(struct!.cuImageNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cu_image_ssid: {
      value: cdktf.stringToHclTerraform(struct!.cuImageSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume: {
      value: cdktf.booleanToHclTerraform(struct!.dataVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dld: {
      value: cdktf.booleanToHclTerraform(struct!.dld),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drv: {
      value: cdktf.booleanToHclTerraform(struct!.drv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effective_wwn: {
      value: cdktf.stringToHclTerraform(struct!.effectiveWwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulation: {
      value: cdktf.stringToHclTerraform(struct!.emulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulated: {
      value: cdktf.booleanToHclTerraform(struct!.encapsulated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encapsulated_wwn: {
      value: cdktf.stringToHclTerraform(struct!.encapsulatedWwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gatekeeper: {
      value: cdktf.booleanToHclTerraform(struct!.gatekeeper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_effective_wwn: {
      value: cdktf.booleanToHclTerraform(struct!.hasEffectiveWwn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapped: {
      value: cdktf.booleanToHclTerraform(struct!.mapped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobility_id_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mobilityIdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nguid: {
      value: cdktf.stringToHclTerraform(struct!.nguid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_of_front_end_paths: {
      value: cdktf.stringToHclTerraform(struct!.numOfFrontEndPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_of_masking_views: {
      value: cdktf.stringToHclTerraform(struct!.numOfMaskingViews),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_of_storage_groups: {
      value: cdktf.stringToHclTerraform(struct!.numOfStorageGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_instance_name: {
      value: cdktf.stringToHclTerraform(struct!.oracleInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_name: {
      value: cdktf.stringToHclTerraform(struct!.physicalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinned: {
      value: cdktf.booleanToHclTerraform(struct!.pinned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.privateVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rdf_group_number: {
      value: cdktf.stringToHclTerraform(struct!.rdfGroupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved: {
      value: cdktf.booleanToHclTerraform(struct!.reserved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    split_name: {
      value: cdktf.stringToHclTerraform(struct!.splitName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_group_name: {
      value: cdktf.stringToHclTerraform(struct!.storageGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    symmlun: {
      value: cdktf.stringToHclTerraform(struct!.symmlun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tdev: {
      value: cdktf.booleanToHclTerraform(struct!.tdev),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thin_bcv: {
      value: cdktf.booleanToHclTerraform(struct!.thinBcv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unreducible_data_gb: {
      value: cdktf.stringToHclTerraform(struct!.unreducibleDataGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdev: {
      value: cdktf.booleanToHclTerraform(struct!.vdev),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtual_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.virtualVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_identifier: {
      value: cdktf.stringToHclTerraform(struct!.volumeIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn: {
      value: cdktf.stringToHclTerraform(struct!.wwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxVolumeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxVolumeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedPercent = this._allocatedPercent;
    }
    if (this._associated !== undefined) {
      hasAnyValues = true;
      internalValueResult.associated = this._associated;
    }
    if (this._availableThinVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableThinVolumes = this._availableThinVolumes;
    }
    if (this._boundTdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundTdev = this._boundTdev;
    }
    if (this._capCyl !== undefined) {
      hasAnyValues = true;
      internalValueResult.capCyl = this._capCyl;
    }
    if (this._capGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capGb = this._capGb;
    }
    if (this._capMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capMb = this._capMb;
    }
    if (this._capTb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capTb = this._capTb;
    }
    if (this._cuImageNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cuImageNum = this._cuImageNum;
    }
    if (this._cuImageSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cuImageSsid = this._cuImageSsid;
    }
    if (this._dataVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolume = this._dataVolume;
    }
    if (this._dld !== undefined) {
      hasAnyValues = true;
      internalValueResult.dld = this._dld;
    }
    if (this._drv !== undefined) {
      hasAnyValues = true;
      internalValueResult.drv = this._drv;
    }
    if (this._effectiveWwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveWwn = this._effectiveWwn;
    }
    if (this._emulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulation = this._emulation;
    }
    if (this._encapsulated !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulated = this._encapsulated;
    }
    if (this._encapsulatedWwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulatedWwn = this._encapsulatedWwn;
    }
    if (this._gatekeeper !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatekeeper = this._gatekeeper;
    }
    if (this._hasEffectiveWwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasEffectiveWwn = this._hasEffectiveWwn;
    }
    if (this._mapped !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapped = this._mapped;
    }
    if (this._mobilityIdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilityIdEnabled = this._mobilityIdEnabled;
    }
    if (this._nguid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nguid = this._nguid;
    }
    if (this._numOfFrontEndPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfFrontEndPaths = this._numOfFrontEndPaths;
    }
    if (this._numOfMaskingViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfMaskingViews = this._numOfMaskingViews;
    }
    if (this._numOfStorageGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfStorageGroups = this._numOfStorageGroups;
    }
    if (this._oracleInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleInstanceName = this._oracleInstanceName;
    }
    if (this._physicalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalName = this._physicalName;
    }
    if (this._pinned !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinned = this._pinned;
    }
    if (this._privateVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateVolumes = this._privateVolumes;
    }
    if (this._rdfGroupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdfGroupNumber = this._rdfGroupNumber;
    }
    if (this._reserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserved = this._reserved;
    }
    if (this._splitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitName = this._splitName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._storageGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageGroupName = this._storageGroupName;
    }
    if (this._symmlun !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmlun = this._symmlun;
    }
    if (this._tdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdev = this._tdev;
    }
    if (this._thinBcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.thinBcv = this._thinBcv;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unreducibleDataGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreducibleDataGb = this._unreducibleDataGb;
    }
    if (this._vdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdev = this._vdev;
    }
    if (this._virtualVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualVolumes = this._virtualVolumes;
    }
    if (this._volumeIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeIdentifier = this._volumeIdentifier;
    }
    if (this._wwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwn = this._wwn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxVolumeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedPercent = undefined;
      this._associated = undefined;
      this._availableThinVolumes = undefined;
      this._boundTdev = undefined;
      this._capCyl = undefined;
      this._capGb = undefined;
      this._capMb = undefined;
      this._capTb = undefined;
      this._cuImageNum = undefined;
      this._cuImageSsid = undefined;
      this._dataVolume = undefined;
      this._dld = undefined;
      this._drv = undefined;
      this._effectiveWwn = undefined;
      this._emulation = undefined;
      this._encapsulated = undefined;
      this._encapsulatedWwn = undefined;
      this._gatekeeper = undefined;
      this._hasEffectiveWwn = undefined;
      this._mapped = undefined;
      this._mobilityIdEnabled = undefined;
      this._nguid = undefined;
      this._numOfFrontEndPaths = undefined;
      this._numOfMaskingViews = undefined;
      this._numOfStorageGroups = undefined;
      this._oracleInstanceName = undefined;
      this._physicalName = undefined;
      this._pinned = undefined;
      this._privateVolumes = undefined;
      this._rdfGroupNumber = undefined;
      this._reserved = undefined;
      this._splitName = undefined;
      this._status = undefined;
      this._storageGroupName = undefined;
      this._symmlun = undefined;
      this._tdev = undefined;
      this._thinBcv = undefined;
      this._type = undefined;
      this._unreducibleDataGb = undefined;
      this._vdev = undefined;
      this._virtualVolumes = undefined;
      this._volumeIdentifier = undefined;
      this._wwn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedPercent = value.allocatedPercent;
      this._associated = value.associated;
      this._availableThinVolumes = value.availableThinVolumes;
      this._boundTdev = value.boundTdev;
      this._capCyl = value.capCyl;
      this._capGb = value.capGb;
      this._capMb = value.capMb;
      this._capTb = value.capTb;
      this._cuImageNum = value.cuImageNum;
      this._cuImageSsid = value.cuImageSsid;
      this._dataVolume = value.dataVolume;
      this._dld = value.dld;
      this._drv = value.drv;
      this._effectiveWwn = value.effectiveWwn;
      this._emulation = value.emulation;
      this._encapsulated = value.encapsulated;
      this._encapsulatedWwn = value.encapsulatedWwn;
      this._gatekeeper = value.gatekeeper;
      this._hasEffectiveWwn = value.hasEffectiveWwn;
      this._mapped = value.mapped;
      this._mobilityIdEnabled = value.mobilityIdEnabled;
      this._nguid = value.nguid;
      this._numOfFrontEndPaths = value.numOfFrontEndPaths;
      this._numOfMaskingViews = value.numOfMaskingViews;
      this._numOfStorageGroups = value.numOfStorageGroups;
      this._oracleInstanceName = value.oracleInstanceName;
      this._physicalName = value.physicalName;
      this._pinned = value.pinned;
      this._privateVolumes = value.privateVolumes;
      this._rdfGroupNumber = value.rdfGroupNumber;
      this._reserved = value.reserved;
      this._splitName = value.splitName;
      this._status = value.status;
      this._storageGroupName = value.storageGroupName;
      this._symmlun = value.symmlun;
      this._tdev = value.tdev;
      this._thinBcv = value.thinBcv;
      this._type = value.type;
      this._unreducibleDataGb = value.unreducibleDataGb;
      this._vdev = value.vdev;
      this._virtualVolumes = value.virtualVolumes;
      this._volumeIdentifier = value.volumeIdentifier;
      this._wwn = value.wwn;
    }
  }

  // allocated_percent - computed: false, optional: true, required: false
  private _allocatedPercent?: string; 
  public get allocatedPercent() {
    return this.getStringAttribute('allocated_percent');
  }
  public set allocatedPercent(value: string) {
    this._allocatedPercent = value;
  }
  public resetAllocatedPercent() {
    this._allocatedPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedPercentInput() {
    return this._allocatedPercent;
  }

  // associated - computed: false, optional: true, required: false
  private _associated?: boolean | cdktf.IResolvable; 
  public get associated() {
    return this.getBooleanAttribute('associated');
  }
  public set associated(value: boolean | cdktf.IResolvable) {
    this._associated = value;
  }
  public resetAssociated() {
    this._associated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInput() {
    return this._associated;
  }

  // available_thin_volumes - computed: false, optional: true, required: false
  private _availableThinVolumes?: boolean | cdktf.IResolvable; 
  public get availableThinVolumes() {
    return this.getBooleanAttribute('available_thin_volumes');
  }
  public set availableThinVolumes(value: boolean | cdktf.IResolvable) {
    this._availableThinVolumes = value;
  }
  public resetAvailableThinVolumes() {
    this._availableThinVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableThinVolumesInput() {
    return this._availableThinVolumes;
  }

  // bound_tdev - computed: false, optional: true, required: false
  private _boundTdev?: boolean | cdktf.IResolvable; 
  public get boundTdev() {
    return this.getBooleanAttribute('bound_tdev');
  }
  public set boundTdev(value: boolean | cdktf.IResolvable) {
    this._boundTdev = value;
  }
  public resetBoundTdev() {
    this._boundTdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundTdevInput() {
    return this._boundTdev;
  }

  // cap_cyl - computed: false, optional: true, required: false
  private _capCyl?: string; 
  public get capCyl() {
    return this.getStringAttribute('cap_cyl');
  }
  public set capCyl(value: string) {
    this._capCyl = value;
  }
  public resetCapCyl() {
    this._capCyl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capCylInput() {
    return this._capCyl;
  }

  // cap_gb - computed: false, optional: true, required: false
  private _capGb?: string; 
  public get capGb() {
    return this.getStringAttribute('cap_gb');
  }
  public set capGb(value: string) {
    this._capGb = value;
  }
  public resetCapGb() {
    this._capGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capGbInput() {
    return this._capGb;
  }

  // cap_mb - computed: false, optional: true, required: false
  private _capMb?: string; 
  public get capMb() {
    return this.getStringAttribute('cap_mb');
  }
  public set capMb(value: string) {
    this._capMb = value;
  }
  public resetCapMb() {
    this._capMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capMbInput() {
    return this._capMb;
  }

  // cap_tb - computed: false, optional: true, required: false
  private _capTb?: string; 
  public get capTb() {
    return this.getStringAttribute('cap_tb');
  }
  public set capTb(value: string) {
    this._capTb = value;
  }
  public resetCapTb() {
    this._capTb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capTbInput() {
    return this._capTb;
  }

  // cu_image_num - computed: false, optional: true, required: false
  private _cuImageNum?: string; 
  public get cuImageNum() {
    return this.getStringAttribute('cu_image_num');
  }
  public set cuImageNum(value: string) {
    this._cuImageNum = value;
  }
  public resetCuImageNum() {
    this._cuImageNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuImageNumInput() {
    return this._cuImageNum;
  }

  // cu_image_ssid - computed: false, optional: true, required: false
  private _cuImageSsid?: string; 
  public get cuImageSsid() {
    return this.getStringAttribute('cu_image_ssid');
  }
  public set cuImageSsid(value: string) {
    this._cuImageSsid = value;
  }
  public resetCuImageSsid() {
    this._cuImageSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuImageSsidInput() {
    return this._cuImageSsid;
  }

  // data_volume - computed: false, optional: true, required: false
  private _dataVolume?: boolean | cdktf.IResolvable; 
  public get dataVolume() {
    return this.getBooleanAttribute('data_volume');
  }
  public set dataVolume(value: boolean | cdktf.IResolvable) {
    this._dataVolume = value;
  }
  public resetDataVolume() {
    this._dataVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeInput() {
    return this._dataVolume;
  }

  // dld - computed: false, optional: true, required: false
  private _dld?: boolean | cdktf.IResolvable; 
  public get dld() {
    return this.getBooleanAttribute('dld');
  }
  public set dld(value: boolean | cdktf.IResolvable) {
    this._dld = value;
  }
  public resetDld() {
    this._dld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dldInput() {
    return this._dld;
  }

  // drv - computed: false, optional: true, required: false
  private _drv?: boolean | cdktf.IResolvable; 
  public get drv() {
    return this.getBooleanAttribute('drv');
  }
  public set drv(value: boolean | cdktf.IResolvable) {
    this._drv = value;
  }
  public resetDrv() {
    this._drv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drvInput() {
    return this._drv;
  }

  // effective_wwn - computed: false, optional: true, required: false
  private _effectiveWwn?: string; 
  public get effectiveWwn() {
    return this.getStringAttribute('effective_wwn');
  }
  public set effectiveWwn(value: string) {
    this._effectiveWwn = value;
  }
  public resetEffectiveWwn() {
    this._effectiveWwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveWwnInput() {
    return this._effectiveWwn;
  }

  // emulation - computed: false, optional: true, required: false
  private _emulation?: string; 
  public get emulation() {
    return this.getStringAttribute('emulation');
  }
  public set emulation(value: string) {
    this._emulation = value;
  }
  public resetEmulation() {
    this._emulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulationInput() {
    return this._emulation;
  }

  // encapsulated - computed: false, optional: true, required: false
  private _encapsulated?: boolean | cdktf.IResolvable; 
  public get encapsulated() {
    return this.getBooleanAttribute('encapsulated');
  }
  public set encapsulated(value: boolean | cdktf.IResolvable) {
    this._encapsulated = value;
  }
  public resetEncapsulated() {
    this._encapsulated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulatedInput() {
    return this._encapsulated;
  }

  // encapsulated_wwn - computed: false, optional: true, required: false
  private _encapsulatedWwn?: string; 
  public get encapsulatedWwn() {
    return this.getStringAttribute('encapsulated_wwn');
  }
  public set encapsulatedWwn(value: string) {
    this._encapsulatedWwn = value;
  }
  public resetEncapsulatedWwn() {
    this._encapsulatedWwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulatedWwnInput() {
    return this._encapsulatedWwn;
  }

  // gatekeeper - computed: false, optional: true, required: false
  private _gatekeeper?: boolean | cdktf.IResolvable; 
  public get gatekeeper() {
    return this.getBooleanAttribute('gatekeeper');
  }
  public set gatekeeper(value: boolean | cdktf.IResolvable) {
    this._gatekeeper = value;
  }
  public resetGatekeeper() {
    this._gatekeeper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatekeeperInput() {
    return this._gatekeeper;
  }

  // has_effective_wwn - computed: false, optional: true, required: false
  private _hasEffectiveWwn?: boolean | cdktf.IResolvable; 
  public get hasEffectiveWwn() {
    return this.getBooleanAttribute('has_effective_wwn');
  }
  public set hasEffectiveWwn(value: boolean | cdktf.IResolvable) {
    this._hasEffectiveWwn = value;
  }
  public resetHasEffectiveWwn() {
    this._hasEffectiveWwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasEffectiveWwnInput() {
    return this._hasEffectiveWwn;
  }

  // mapped - computed: false, optional: true, required: false
  private _mapped?: boolean | cdktf.IResolvable; 
  public get mapped() {
    return this.getBooleanAttribute('mapped');
  }
  public set mapped(value: boolean | cdktf.IResolvable) {
    this._mapped = value;
  }
  public resetMapped() {
    this._mapped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedInput() {
    return this._mapped;
  }

  // mobility_id_enabled - computed: false, optional: true, required: false
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

  // nguid - computed: false, optional: true, required: false
  private _nguid?: string; 
  public get nguid() {
    return this.getStringAttribute('nguid');
  }
  public set nguid(value: string) {
    this._nguid = value;
  }
  public resetNguid() {
    this._nguid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nguidInput() {
    return this._nguid;
  }

  // num_of_front_end_paths - computed: false, optional: true, required: false
  private _numOfFrontEndPaths?: string; 
  public get numOfFrontEndPaths() {
    return this.getStringAttribute('num_of_front_end_paths');
  }
  public set numOfFrontEndPaths(value: string) {
    this._numOfFrontEndPaths = value;
  }
  public resetNumOfFrontEndPaths() {
    this._numOfFrontEndPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfFrontEndPathsInput() {
    return this._numOfFrontEndPaths;
  }

  // num_of_masking_views - computed: false, optional: true, required: false
  private _numOfMaskingViews?: string; 
  public get numOfMaskingViews() {
    return this.getStringAttribute('num_of_masking_views');
  }
  public set numOfMaskingViews(value: string) {
    this._numOfMaskingViews = value;
  }
  public resetNumOfMaskingViews() {
    this._numOfMaskingViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfMaskingViewsInput() {
    return this._numOfMaskingViews;
  }

  // num_of_storage_groups - computed: false, optional: true, required: false
  private _numOfStorageGroups?: string; 
  public get numOfStorageGroups() {
    return this.getStringAttribute('num_of_storage_groups');
  }
  public set numOfStorageGroups(value: string) {
    this._numOfStorageGroups = value;
  }
  public resetNumOfStorageGroups() {
    this._numOfStorageGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfStorageGroupsInput() {
    return this._numOfStorageGroups;
  }

  // oracle_instance_name - computed: false, optional: true, required: false
  private _oracleInstanceName?: string; 
  public get oracleInstanceName() {
    return this.getStringAttribute('oracle_instance_name');
  }
  public set oracleInstanceName(value: string) {
    this._oracleInstanceName = value;
  }
  public resetOracleInstanceName() {
    this._oracleInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInstanceNameInput() {
    return this._oracleInstanceName;
  }

  // physical_name - computed: false, optional: true, required: false
  private _physicalName?: string; 
  public get physicalName() {
    return this.getStringAttribute('physical_name');
  }
  public set physicalName(value: string) {
    this._physicalName = value;
  }
  public resetPhysicalName() {
    this._physicalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalNameInput() {
    return this._physicalName;
  }

  // pinned - computed: false, optional: true, required: false
  private _pinned?: boolean | cdktf.IResolvable; 
  public get pinned() {
    return this.getBooleanAttribute('pinned');
  }
  public set pinned(value: boolean | cdktf.IResolvable) {
    this._pinned = value;
  }
  public resetPinned() {
    this._pinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedInput() {
    return this._pinned;
  }

  // private_volumes - computed: false, optional: true, required: false
  private _privateVolumes?: boolean | cdktf.IResolvable; 
  public get privateVolumes() {
    return this.getBooleanAttribute('private_volumes');
  }
  public set privateVolumes(value: boolean | cdktf.IResolvable) {
    this._privateVolumes = value;
  }
  public resetPrivateVolumes() {
    this._privateVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVolumesInput() {
    return this._privateVolumes;
  }

  // rdf_group_number - computed: false, optional: true, required: false
  private _rdfGroupNumber?: string; 
  public get rdfGroupNumber() {
    return this.getStringAttribute('rdf_group_number');
  }
  public set rdfGroupNumber(value: string) {
    this._rdfGroupNumber = value;
  }
  public resetRdfGroupNumber() {
    this._rdfGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdfGroupNumberInput() {
    return this._rdfGroupNumber;
  }

  // reserved - computed: false, optional: true, required: false
  private _reserved?: boolean | cdktf.IResolvable; 
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }
  public set reserved(value: boolean | cdktf.IResolvable) {
    this._reserved = value;
  }
  public resetReserved() {
    this._reserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved;
  }

  // split_name - computed: false, optional: true, required: false
  private _splitName?: string; 
  public get splitName() {
    return this.getStringAttribute('split_name');
  }
  public set splitName(value: string) {
    this._splitName = value;
  }
  public resetSplitName() {
    this._splitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitNameInput() {
    return this._splitName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // storage_group_name - computed: false, optional: true, required: false
  private _storageGroupName?: string; 
  public get storageGroupName() {
    return this.getStringAttribute('storage_group_name');
  }
  public set storageGroupName(value: string) {
    this._storageGroupName = value;
  }
  public resetStorageGroupName() {
    this._storageGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGroupNameInput() {
    return this._storageGroupName;
  }

  // symmlun - computed: false, optional: true, required: false
  private _symmlun?: string; 
  public get symmlun() {
    return this.getStringAttribute('symmlun');
  }
  public set symmlun(value: string) {
    this._symmlun = value;
  }
  public resetSymmlun() {
    this._symmlun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmlunInput() {
    return this._symmlun;
  }

  // tdev - computed: false, optional: true, required: false
  private _tdev?: boolean | cdktf.IResolvable; 
  public get tdev() {
    return this.getBooleanAttribute('tdev');
  }
  public set tdev(value: boolean | cdktf.IResolvable) {
    this._tdev = value;
  }
  public resetTdev() {
    this._tdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdevInput() {
    return this._tdev;
  }

  // thin_bcv - computed: false, optional: true, required: false
  private _thinBcv?: boolean | cdktf.IResolvable; 
  public get thinBcv() {
    return this.getBooleanAttribute('thin_bcv');
  }
  public set thinBcv(value: boolean | cdktf.IResolvable) {
    this._thinBcv = value;
  }
  public resetThinBcv() {
    this._thinBcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thinBcvInput() {
    return this._thinBcv;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unreducible_data_gb - computed: false, optional: true, required: false
  private _unreducibleDataGb?: string; 
  public get unreducibleDataGb() {
    return this.getStringAttribute('unreducible_data_gb');
  }
  public set unreducibleDataGb(value: string) {
    this._unreducibleDataGb = value;
  }
  public resetUnreducibleDataGb() {
    this._unreducibleDataGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreducibleDataGbInput() {
    return this._unreducibleDataGb;
  }

  // vdev - computed: false, optional: true, required: false
  private _vdev?: boolean | cdktf.IResolvable; 
  public get vdev() {
    return this.getBooleanAttribute('vdev');
  }
  public set vdev(value: boolean | cdktf.IResolvable) {
    this._vdev = value;
  }
  public resetVdev() {
    this._vdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdevInput() {
    return this._vdev;
  }

  // virtual_volumes - computed: false, optional: true, required: false
  private _virtualVolumes?: boolean | cdktf.IResolvable; 
  public get virtualVolumes() {
    return this.getBooleanAttribute('virtual_volumes');
  }
  public set virtualVolumes(value: boolean | cdktf.IResolvable) {
    this._virtualVolumes = value;
  }
  public resetVirtualVolumes() {
    this._virtualVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualVolumesInput() {
    return this._virtualVolumes;
  }

  // volume_identifier - computed: false, optional: true, required: false
  private _volumeIdentifier?: string; 
  public get volumeIdentifier() {
    return this.getStringAttribute('volume_identifier');
  }
  public set volumeIdentifier(value: string) {
    this._volumeIdentifier = value;
  }
  public resetVolumeIdentifier() {
    this._volumeIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdentifierInput() {
    return this._volumeIdentifier;
  }

  // wwn - computed: false, optional: true, required: false
  private _wwn?: string; 
  public get wwn() {
    return this.getStringAttribute('wwn');
  }
  public set wwn(value: string) {
    this._wwn = value;
  }
  public resetWwn() {
    this._wwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnInput() {
    return this._wwn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume powermax_volume}
*/
export class DataPowermaxVolume extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowermaxVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowermaxVolume to import
  * @param importFromId The id of the existing DataPowermaxVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowermaxVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/volume powermax_volume} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowermaxVolumeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowermaxVolumeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powermax_volume',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3',
        providerVersionConstraint: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeouts.internalValue = config.timeouts;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowermaxVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowermaxVolumeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataPowermaxVolumeVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowermaxVolumeFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowermaxVolumeFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: dataPowermaxVolumeTimeoutsToTerraform(this._timeouts.internalValue),
      filter: dataPowermaxVolumeFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowermaxVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxVolumeTimeouts",
      },
      filter: {
        value: dataPowermaxVolumeFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxVolumeFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
