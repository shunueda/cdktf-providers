// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCssXp2PDetailInfoListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dimension parameter can be used to specify the dimension for the query. If this parameter is not passed, the query will default to stream-level data. If you pass this parameter, it will only retrieve data for the specified dimension. The available dimension currently supported is AppId dimension, which allows you to query data based on the application ID. Please note that the returned fields will be related to the specified dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list#dimension DataTencentcloudCssXp2PDetailInfoList#dimension}
  */
  readonly dimension?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list#id DataTencentcloudCssXp2PDetailInfoList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The UTC minute granularity query time for querying usage data for a specific minute is in the format: yyyy-mm-ddTHH:MM:00Z. Please refer to the link https://cloud.tencent.com/document/product/266/11732#I.For example, if the local time is 2019-01-08 10:00:00 in Beijing, the corresponding UTC time would be 2019-01-08T10:00:00+08:00.This query supports data from the past six months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list#query_time DataTencentcloudCssXp2PDetailInfoList#query_time}
  */
  readonly queryTime?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list#result_output_file DataTencentcloudCssXp2PDetailInfoList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The stream array can be used to specify the streams to be queried. If no stream is specified, the query will include all streams by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list#stream_names DataTencentcloudCssXp2PDetailInfoList#stream_names}
  */
  readonly streamNames?: string[];
  /**
  * The type array can be used to specify the type of media content to be queried. The two available options are live for live streaming and vod for video on demand. If no type is specified, the query will include both live and VOD content by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list#type DataTencentcloudCssXp2PDetailInfoList#type}
  */
  readonly type?: string[];
}
export interface DataTencentcloudCssXp2PDetailInfoListDataInfoListStruct {
}

export function dataTencentcloudCssXp2PDetailInfoListDataInfoListStructToTerraform(struct?: DataTencentcloudCssXp2PDetailInfoListDataInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssXp2PDetailInfoListDataInfoListStructToHclTerraform(struct?: DataTencentcloudCssXp2PDetailInfoListDataInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssXp2PDetailInfoListDataInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssXp2PDetailInfoListDataInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssXp2PDetailInfoListDataInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // cdn_bytes - computed: true, optional: false, required: false
  public get cdnBytes() {
    return this.getNumberAttribute('cdn_bytes');
  }

  // online_people - computed: true, optional: false, required: false
  public get onlinePeople() {
    return this.getNumberAttribute('online_people');
  }

  // p2p_bytes - computed: true, optional: false, required: false
  public get p2PBytes() {
    return this.getNumberAttribute('p2p_bytes');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getNumberAttribute('request');
  }

  // request_success - computed: true, optional: false, required: false
  public get requestSuccess() {
    return this.getNumberAttribute('request_success');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }

  // stuck_people - computed: true, optional: false, required: false
  public get stuckPeople() {
    return this.getNumberAttribute('stuck_people');
  }

  // stuck_times - computed: true, optional: false, required: false
  public get stuckTimes() {
    return this.getNumberAttribute('stuck_times');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCssXp2PDetailInfoListDataInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssXp2PDetailInfoListDataInfoListStructOutputReference {
    return new DataTencentcloudCssXp2PDetailInfoListDataInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list tencentcloud_css_xp2p_detail_info_list}
*/
export class DataTencentcloudCssXp2PDetailInfoList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_xp2p_detail_info_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCssXp2PDetailInfoList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCssXp2PDetailInfoList to import
  * @param importFromId The id of the existing DataTencentcloudCssXp2PDetailInfoList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCssXp2PDetailInfoList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_xp2p_detail_info_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/css_xp2p_detail_info_list tencentcloud_css_xp2p_detail_info_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCssXp2PDetailInfoListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCssXp2PDetailInfoListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_xp2p_detail_info_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dimension = config.dimension;
    this._id = config.id;
    this._queryTime = config.queryTime;
    this._resultOutputFile = config.resultOutputFile;
    this._streamNames = config.streamNames;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_info_list - computed: true, optional: false, required: false
  private _dataInfoList = new DataTencentcloudCssXp2PDetailInfoListDataInfoListStructList(this, "data_info_list", false);
  public get dataInfoList() {
    return this._dataInfoList;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: string[]; 
  public get dimension() {
    return cdktf.Fn.tolist(this.getListAttribute('dimension'));
  }
  public set dimension(value: string[]) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
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

  // query_time - computed: false, optional: true, required: false
  private _queryTime?: string; 
  public get queryTime() {
    return this.getStringAttribute('query_time');
  }
  public set queryTime(value: string) {
    this._queryTime = value;
  }
  public resetQueryTime() {
    this._queryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeInput() {
    return this._queryTime;
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

  // stream_names - computed: false, optional: true, required: false
  private _streamNames?: string[]; 
  public get streamNames() {
    return cdktf.Fn.tolist(this.getListAttribute('stream_names'));
  }
  public set streamNames(value: string[]) {
    this._streamNames = value;
  }
  public resetStreamNames() {
    this._streamNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNamesInput() {
    return this._streamNames;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return cdktf.Fn.tolist(this.getListAttribute('type'));
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dimension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dimension),
      id: cdktf.stringToTerraform(this._id),
      query_time: cdktf.stringToTerraform(this._queryTime),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      stream_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streamNames),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dimension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dimension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_time: {
        value: cdktf.stringToHclTerraform(this._queryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._streamNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
