// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAntiddosBasicDeviceStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status#filter_region DataTencentcloudAntiddosBasicDeviceStatus#filter_region}
  */
  readonly filterRegion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status#id DataTencentcloudAntiddosBasicDeviceStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Named resource transfer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status#id_list DataTencentcloudAntiddosBasicDeviceStatus#id_list}
  */
  readonly idList?: string[];
  /**
  * Ip resource list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status#ip_list DataTencentcloudAntiddosBasicDeviceStatus#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status#result_output_file DataTencentcloudAntiddosBasicDeviceStatus#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudAntiddosBasicDeviceStatusClbData {
}

export function dataTencentcloudAntiddosBasicDeviceStatusClbDataToTerraform(struct?: DataTencentcloudAntiddosBasicDeviceStatusClbData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBasicDeviceStatusClbDataToHclTerraform(struct?: DataTencentcloudAntiddosBasicDeviceStatusClbData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBasicDeviceStatusClbDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBasicDeviceStatusClbData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBasicDeviceStatusClbData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudAntiddosBasicDeviceStatusClbDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBasicDeviceStatusClbDataOutputReference {
    return new DataTencentcloudAntiddosBasicDeviceStatusClbDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAntiddosBasicDeviceStatusData {
}

export function dataTencentcloudAntiddosBasicDeviceStatusDataToTerraform(struct?: DataTencentcloudAntiddosBasicDeviceStatusData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBasicDeviceStatusDataToHclTerraform(struct?: DataTencentcloudAntiddosBasicDeviceStatusData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBasicDeviceStatusDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBasicDeviceStatusData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBasicDeviceStatusData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudAntiddosBasicDeviceStatusDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBasicDeviceStatusDataOutputReference {
    return new DataTencentcloudAntiddosBasicDeviceStatusDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status tencentcloud_antiddos_basic_device_status}
*/
export class DataTencentcloudAntiddosBasicDeviceStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_basic_device_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAntiddosBasicDeviceStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAntiddosBasicDeviceStatus to import
  * @param importFromId The id of the existing DataTencentcloudAntiddosBasicDeviceStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAntiddosBasicDeviceStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_basic_device_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/antiddos_basic_device_status tencentcloud_antiddos_basic_device_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAntiddosBasicDeviceStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAntiddosBasicDeviceStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_basic_device_status',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterRegion = config.filterRegion;
    this._id = config.id;
    this._idList = config.idList;
    this._ipList = config.ipList;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clb_data - computed: true, optional: false, required: false
  private _clbData = new DataTencentcloudAntiddosBasicDeviceStatusClbDataList(this, "clb_data", false);
  public get clbData() {
    return this._clbData;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudAntiddosBasicDeviceStatusDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // filter_region - computed: false, optional: true, required: false
  private _filterRegion?: number; 
  public get filterRegion() {
    return this.getNumberAttribute('filter_region');
  }
  public set filterRegion(value: number) {
    this._filterRegion = value;
  }
  public resetFilterRegion() {
    this._filterRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRegionInput() {
    return this._filterRegion;
  }

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

  // id_list - computed: false, optional: true, required: false
  private _idList?: string[]; 
  public get idList() {
    return cdktf.Fn.tolist(this.getListAttribute('id_list'));
  }
  public set idList(value: string[]) {
    this._idList = value;
  }
  public resetIdList() {
    this._idList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idListInput() {
    return this._idList;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string[]; 
  public get ipList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_list'));
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_region: cdktf.numberToTerraform(this._filterRegion),
      id: cdktf.stringToTerraform(this._id),
      id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idList),
      ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipList),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_region: {
        value: cdktf.numberToHclTerraform(this._filterRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._idList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
