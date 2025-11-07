// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudServerImageNumbersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#hypervisor_type DataNcloudServerImageNumbers#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#output_file DataNcloudServerImageNumbers#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#server_image_name DataNcloudServerImageNumbers#server_image_name}
  */
  readonly serverImageName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#filter DataNcloudServerImageNumbers#filter}
  */
  readonly filter?: DataNcloudServerImageNumbersFilter[] | cdktf.IResolvable;
}
export interface DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStruct {
}

export function dataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStructToTerraform(struct?: DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStructToHclTerraform(struct?: DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_name - computed: true, optional: false, required: false
  public get blockStorageName() {
    return this.getStringAttribute('block_storage_name');
  }

  // block_storage_size - computed: true, optional: false, required: false
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }

  // block_storage_snapshot_instance_no - computed: true, optional: false, required: false
  public get blockStorageSnapshotInstanceNo() {
    return this.getNumberAttribute('block_storage_snapshot_instance_no');
  }

  // block_storage_snapshot_name - computed: true, optional: false, required: false
  public get blockStorageSnapshotName() {
    return this.getStringAttribute('block_storage_snapshot_name');
  }

  // block_storage_volume_type - computed: true, optional: false, required: false
  public get blockStorageVolumeType() {
    return this.getStringAttribute('block_storage_volume_type');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // is_encrypted_volume - computed: true, optional: false, required: false
  public get isEncryptedVolume() {
    return this.getBooleanAttribute('is_encrypted_volume');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
}

export class DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStructOutputReference {
    return new DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudServerImageNumbersImageNumberListStruct {
}

export function dataNcloudServerImageNumbersImageNumberListStructToTerraform(struct?: DataNcloudServerImageNumbersImageNumberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudServerImageNumbersImageNumberListStructToHclTerraform(struct?: DataNcloudServerImageNumbersImageNumberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudServerImageNumbersImageNumberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudServerImageNumbersImageNumberListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudServerImageNumbersImageNumberListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_mapping_list - computed: true, optional: false, required: false
  private _blockStorageMappingList = new DataNcloudServerImageNumbersImageNumberListBlockStorageMappingListStructList(this, "block_storage_mapping_list", false);
  public get blockStorageMappingList() {
    return this._blockStorageMappingList;
  }

  // cpu_architecture_type - computed: true, optional: false, required: false
  public get cpuArchitectureType() {
    return this.getStringAttribute('cpu_architecture_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_category_type - computed: true, optional: false, required: false
  public get osCategoryType() {
    return this.getStringAttribute('os_category_type');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // server_image_number - computed: true, optional: false, required: false
  public get serverImageNumber() {
    return this.getStringAttribute('server_image_number');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNcloudServerImageNumbersImageNumberListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudServerImageNumbersImageNumberListStructOutputReference {
    return new DataNcloudServerImageNumbersImageNumberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudServerImageNumbersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#name DataNcloudServerImageNumbers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#regex DataNcloudServerImageNumbers#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#values DataNcloudServerImageNumbers#values}
  */
  readonly values: string[];
}

export function dataNcloudServerImageNumbersFilterToTerraform(struct?: DataNcloudServerImageNumbersFilter | cdktf.IResolvable): any {
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


export function dataNcloudServerImageNumbersFilterToHclTerraform(struct?: DataNcloudServerImageNumbersFilter | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNcloudServerImageNumbersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudServerImageNumbersFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNcloudServerImageNumbersFilter | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataNcloudServerImageNumbersFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudServerImageNumbersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudServerImageNumbersFilterOutputReference {
    return new DataNcloudServerImageNumbersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers ncloud_server_image_numbers}
*/
export class DataNcloudServerImageNumbers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_server_image_numbers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudServerImageNumbers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudServerImageNumbers to import
  * @param importFromId The id of the existing DataNcloudServerImageNumbers that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudServerImageNumbers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_server_image_numbers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_image_numbers ncloud_server_image_numbers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudServerImageNumbersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudServerImageNumbersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_server_image_numbers',
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
    this._hypervisorType = config.hypervisorType;
    this._outputFile = config.outputFile;
    this._serverImageName = config.serverImageName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hypervisor_type - computed: false, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_number_list - computed: true, optional: false, required: false
  private _imageNumberList = new DataNcloudServerImageNumbersImageNumberListStructList(this, "image_number_list", false);
  public get imageNumberList() {
    return this._imageNumberList;
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

  // server_image_name - computed: false, optional: true, required: false
  private _serverImageName?: string; 
  public get serverImageName() {
    return this.getStringAttribute('server_image_name');
  }
  public set serverImageName(value: string) {
    this._serverImageName = value;
  }
  public resetServerImageName() {
    this._serverImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverImageNameInput() {
    return this._serverImageName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudServerImageNumbersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudServerImageNumbersFilter[] | cdktf.IResolvable) {
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
      hypervisor_type: cdktf.stringToTerraform(this._hypervisorType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      server_image_name: cdktf.stringToTerraform(this._serverImageName),
      filter: cdktf.listMapper(dataNcloudServerImageNumbersFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hypervisor_type: {
        value: cdktf.stringToHclTerraform(this._hypervisorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_image_name: {
        value: cdktf.stringToHclTerraform(this._serverImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudServerImageNumbersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudServerImageNumbersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
