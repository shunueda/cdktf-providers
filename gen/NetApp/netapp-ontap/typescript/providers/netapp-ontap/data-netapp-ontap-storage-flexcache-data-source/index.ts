// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapStorageFlexcacheDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source#cx_profile_name DataNetappOntapStorageFlexcacheDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * The name of the flexcache volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source#name DataNetappOntapStorageFlexcacheDataSource#name}
  */
  readonly name: string;
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source#svm_name DataNetappOntapStorageFlexcacheDataSource#svm_name}
  */
  readonly svmName: string;
}
export interface DataNetappOntapStorageFlexcacheDataSourceAggregates {
}

export function dataNetappOntapStorageFlexcacheDataSourceAggregatesToTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceAggregates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageFlexcacheDataSourceAggregatesToHclTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceAggregates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageFlexcacheDataSourceAggregatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapStorageFlexcacheDataSourceAggregates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageFlexcacheDataSourceAggregates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataNetappOntapStorageFlexcacheDataSourceAggregatesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapStorageFlexcacheDataSourceAggregatesOutputReference {
    return new DataNetappOntapStorageFlexcacheDataSourceAggregatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetappOntapStorageFlexcacheDataSourceGuarantee {
}

export function dataNetappOntapStorageFlexcacheDataSourceGuaranteeToTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceGuarantee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageFlexcacheDataSourceGuaranteeToHclTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceGuarantee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageFlexcacheDataSourceGuaranteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageFlexcacheDataSourceGuarantee | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageFlexcacheDataSourceGuarantee | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataNetappOntapStorageFlexcacheDataSourceOriginsSvm {
}

export function dataNetappOntapStorageFlexcacheDataSourceOriginsSvmToTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceOriginsSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageFlexcacheDataSourceOriginsSvmToHclTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceOriginsSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageFlexcacheDataSourceOriginsSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageFlexcacheDataSourceOriginsSvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageFlexcacheDataSourceOriginsSvm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataNetappOntapStorageFlexcacheDataSourceOriginsVolume {
}

export function dataNetappOntapStorageFlexcacheDataSourceOriginsVolumeToTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceOriginsVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageFlexcacheDataSourceOriginsVolumeToHclTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceOriginsVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageFlexcacheDataSourceOriginsVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageFlexcacheDataSourceOriginsVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageFlexcacheDataSourceOriginsVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataNetappOntapStorageFlexcacheDataSourceOrigins {
  /**
  * Origin volume SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source#svm DataNetappOntapStorageFlexcacheDataSource#svm}
  */
  readonly svm: DataNetappOntapStorageFlexcacheDataSourceOriginsSvm;
  /**
  * Origin volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source#volume DataNetappOntapStorageFlexcacheDataSource#volume}
  */
  readonly volume: DataNetappOntapStorageFlexcacheDataSourceOriginsVolume;
}

export function dataNetappOntapStorageFlexcacheDataSourceOriginsToTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm: dataNetappOntapStorageFlexcacheDataSourceOriginsSvmToTerraform(struct!.svm),
    volume: dataNetappOntapStorageFlexcacheDataSourceOriginsVolumeToTerraform(struct!.volume),
  }
}


export function dataNetappOntapStorageFlexcacheDataSourceOriginsToHclTerraform(struct?: DataNetappOntapStorageFlexcacheDataSourceOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svm: {
      value: dataNetappOntapStorageFlexcacheDataSourceOriginsSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapStorageFlexcacheDataSourceOriginsSvm",
    },
    volume: {
      value: dataNetappOntapStorageFlexcacheDataSourceOriginsVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapStorageFlexcacheDataSourceOriginsVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapStorageFlexcacheDataSourceOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapStorageFlexcacheDataSourceOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageFlexcacheDataSourceOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._svm.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._svm.internalValue = value.svm;
      this._volume.internalValue = value.volume;
    }
  }

  // svm - computed: true, optional: false, required: true
  private _svm = new DataNetappOntapStorageFlexcacheDataSourceOriginsSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapStorageFlexcacheDataSourceOriginsSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // volume - computed: true, optional: false, required: true
  private _volume = new DataNetappOntapStorageFlexcacheDataSourceOriginsVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: DataNetappOntapStorageFlexcacheDataSourceOriginsVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class DataNetappOntapStorageFlexcacheDataSourceOriginsList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapStorageFlexcacheDataSourceOrigins[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapStorageFlexcacheDataSourceOriginsOutputReference {
    return new DataNetappOntapStorageFlexcacheDataSourceOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source netapp-ontap_storage_flexcache_data_source}
*/
export class DataNetappOntapStorageFlexcacheDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_storage_flexcache_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapStorageFlexcacheDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapStorageFlexcacheDataSource to import
  * @param importFromId The id of the existing DataNetappOntapStorageFlexcacheDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapStorageFlexcacheDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_storage_flexcache_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_flexcache_data_source netapp-ontap_storage_flexcache_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapStorageFlexcacheDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapStorageFlexcacheDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_storage_flexcache_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregates - computed: true, optional: false, required: false
  private _aggregates = new DataNetappOntapStorageFlexcacheDataSourceAggregatesList(this, "aggregates", true);
  public get aggregates() {
    return this._aggregates;
  }

  // constituents_per_aggregate - computed: true, optional: false, required: false
  public get constituentsPerAggregate() {
    return this.getNumberAttribute('constituents_per_aggregate');
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // dr_cache - computed: true, optional: false, required: false
  public get drCache() {
    return this.getBooleanAttribute('dr_cache');
  }

  // global_file_locking_enabled - computed: true, optional: false, required: false
  public get globalFileLockingEnabled() {
    return this.getBooleanAttribute('global_file_locking_enabled');
  }

  // guarantee - computed: true, optional: false, required: false
  private _guarantee = new DataNetappOntapStorageFlexcacheDataSourceGuaranteeOutputReference(this, "guarantee");
  public get guarantee() {
    return this._guarantee;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // junction_path - computed: true, optional: false, required: false
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // origins - computed: true, optional: false, required: false
  private _origins = new DataNetappOntapStorageFlexcacheDataSourceOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // size_unit - computed: true, optional: false, required: false
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // use_tiered_aggregate - computed: true, optional: false, required: false
  public get useTieredAggregate() {
    return this.getBooleanAttribute('use_tiered_aggregate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
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
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
