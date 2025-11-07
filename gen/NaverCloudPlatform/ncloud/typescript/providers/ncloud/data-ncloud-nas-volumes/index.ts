// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudNasVolumesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#id DataNcloudNasVolumes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#is_event_configuration DataNcloudNasVolumes#is_event_configuration}
  */
  readonly isEventConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#is_snapshot_configuration DataNcloudNasVolumes#is_snapshot_configuration}
  */
  readonly isSnapshotConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#no_list DataNcloudNasVolumes#no_list}
  */
  readonly noList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#output_file DataNcloudNasVolumes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Region code. Get available values using the `data ncloud_regions`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#region DataNcloudNasVolumes#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#volume_allotment_protocol_type_code DataNcloudNasVolumes#volume_allotment_protocol_type_code}
  */
  readonly volumeAllotmentProtocolTypeCode?: string;
  /**
  * Zone code. Get available values using the `data ncloud_zones`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#zone DataNcloudNasVolumes#zone}
  */
  readonly zone?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#filter DataNcloudNasVolumes#filter}
  */
  readonly filter?: DataNcloudNasVolumesFilter[] | cdktf.IResolvable;
}
export interface DataNcloudNasVolumesNasVolumes {
}

export function dataNcloudNasVolumesNasVolumesToTerraform(struct?: DataNcloudNasVolumesNasVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudNasVolumesNasVolumesToHclTerraform(struct?: DataNcloudNasVolumesNasVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudNasVolumesNasVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudNasVolumesNasVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudNasVolumesNasVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_encrypted_volume - computed: true, optional: false, required: false
  public get isEncryptedVolume() {
    return this.getBooleanAttribute('is_encrypted_volume');
  }

  // is_event_configuration - computed: true, optional: false, required: false
  public get isEventConfiguration() {
    return this.getBooleanAttribute('is_event_configuration');
  }

  // is_return_protection - computed: true, optional: false, required: false
  public get isReturnProtection() {
    return this.getBooleanAttribute('is_return_protection');
  }

  // is_snapshot_configuration - computed: true, optional: false, required: false
  public get isSnapshotConfiguration() {
    return this.getBooleanAttribute('is_snapshot_configuration');
  }

  // mount_information - computed: true, optional: false, required: false
  public get mountInformation() {
    return this.getStringAttribute('mount_information');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nas_volume_no - computed: true, optional: false, required: false
  public get nasVolumeNo() {
    return this.getStringAttribute('nas_volume_no');
  }

  // server_instance_no_list - computed: true, optional: false, required: false
  public get serverInstanceNoList() {
    return this.getListAttribute('server_instance_no_list');
  }

  // snapshot_volume_size - computed: true, optional: false, required: false
  public get snapshotVolumeSize() {
    return this.getNumberAttribute('snapshot_volume_size');
  }

  // volume_allotment_protocol_type - computed: true, optional: false, required: false
  public get volumeAllotmentProtocolType() {
    return this.getStringAttribute('volume_allotment_protocol_type');
  }

  // volume_name_postfix - computed: true, optional: false, required: false
  public get volumeNamePostfix() {
    return this.getStringAttribute('volume_name_postfix');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_total_size - computed: true, optional: false, required: false
  public get volumeTotalSize() {
    return this.getNumberAttribute('volume_total_size');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataNcloudNasVolumesNasVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudNasVolumesNasVolumesOutputReference {
    return new DataNcloudNasVolumesNasVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudNasVolumesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#name DataNcloudNasVolumes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#regex DataNcloudNasVolumes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#values DataNcloudNasVolumes#values}
  */
  readonly values: string[];
}

export function dataNcloudNasVolumesFilterToTerraform(struct?: DataNcloudNasVolumesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataNcloudNasVolumesFilterToHclTerraform(struct?: DataNcloudNasVolumesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNcloudNasVolumesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudNasVolumesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudNasVolumesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataNcloudNasVolumesFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudNasVolumesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudNasVolumesFilterOutputReference {
    return new DataNcloudNasVolumesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes ncloud_nas_volumes}
*/
export class DataNcloudNasVolumes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_nas_volumes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudNasVolumes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudNasVolumes to import
  * @param importFromId The id of the existing DataNcloudNasVolumes that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudNasVolumes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_nas_volumes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/nas_volumes ncloud_nas_volumes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudNasVolumesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudNasVolumesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_nas_volumes',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
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
    this._isEventConfiguration = config.isEventConfiguration;
    this._isSnapshotConfiguration = config.isSnapshotConfiguration;
    this._noList = config.noList;
    this._outputFile = config.outputFile;
    this._region = config.region;
    this._volumeAllotmentProtocolTypeCode = config.volumeAllotmentProtocolTypeCode;
    this._zone = config.zone;
    this._filter.internalValue = config.filter;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // is_event_configuration - computed: false, optional: true, required: false
  private _isEventConfiguration?: boolean | cdktf.IResolvable; 
  public get isEventConfiguration() {
    return this.getBooleanAttribute('is_event_configuration');
  }
  public set isEventConfiguration(value: boolean | cdktf.IResolvable) {
    this._isEventConfiguration = value;
  }
  public resetIsEventConfiguration() {
    this._isEventConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEventConfigurationInput() {
    return this._isEventConfiguration;
  }

  // is_snapshot_configuration - computed: false, optional: true, required: false
  private _isSnapshotConfiguration?: boolean | cdktf.IResolvable; 
  public get isSnapshotConfiguration() {
    return this.getBooleanAttribute('is_snapshot_configuration');
  }
  public set isSnapshotConfiguration(value: boolean | cdktf.IResolvable) {
    this._isSnapshotConfiguration = value;
  }
  public resetIsSnapshotConfiguration() {
    this._isSnapshotConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSnapshotConfigurationInput() {
    return this._isSnapshotConfiguration;
  }

  // nas_volumes - computed: true, optional: false, required: false
  private _nasVolumes = new DataNcloudNasVolumesNasVolumesList(this, "nas_volumes", false);
  public get nasVolumes() {
    return this._nasVolumes;
  }

  // no_list - computed: true, optional: true, required: false
  private _noList?: string[]; 
  public get noList() {
    return this.getListAttribute('no_list');
  }
  public set noList(value: string[]) {
    this._noList = value;
  }
  public resetNoList() {
    this._noList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noListInput() {
    return this._noList;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // volume_allotment_protocol_type_code - computed: false, optional: true, required: false
  private _volumeAllotmentProtocolTypeCode?: string; 
  public get volumeAllotmentProtocolTypeCode() {
    return this.getStringAttribute('volume_allotment_protocol_type_code');
  }
  public set volumeAllotmentProtocolTypeCode(value: string) {
    this._volumeAllotmentProtocolTypeCode = value;
  }
  public resetVolumeAllotmentProtocolTypeCode() {
    this._volumeAllotmentProtocolTypeCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAllotmentProtocolTypeCodeInput() {
    return this._volumeAllotmentProtocolTypeCode;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudNasVolumesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudNasVolumesFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      is_event_configuration: cdktf.booleanToTerraform(this._isEventConfiguration),
      is_snapshot_configuration: cdktf.booleanToTerraform(this._isSnapshotConfiguration),
      no_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noList),
      output_file: cdktf.stringToTerraform(this._outputFile),
      region: cdktf.stringToTerraform(this._region),
      volume_allotment_protocol_type_code: cdktf.stringToTerraform(this._volumeAllotmentProtocolTypeCode),
      zone: cdktf.stringToTerraform(this._zone),
      filter: cdktf.listMapper(dataNcloudNasVolumesFilterToTerraform, true)(this._filter.internalValue),
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
      is_event_configuration: {
        value: cdktf.booleanToHclTerraform(this._isEventConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_snapshot_configuration: {
        value: cdktf.booleanToHclTerraform(this._isSnapshotConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_allotment_protocol_type_code: {
        value: cdktf.stringToHclTerraform(this._volumeAllotmentProtocolTypeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudNasVolumesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudNasVolumesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
