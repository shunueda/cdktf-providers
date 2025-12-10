// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSslDescribeHostApiGatewayInstanceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate ID to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#certificate_id DataTencentcloudSslDescribeHostApiGatewayInstanceList#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#id DataTencentcloudSslDescribeHostApiGatewayInstanceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to query the cache, 1: Yes; 0: No, the default is the query cache, the cache is half an hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#is_cache DataTencentcloudSslDescribeHostApiGatewayInstanceList#is_cache}
  */
  readonly isCache?: number;
  /**
  * Deployed certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#old_certificate_id DataTencentcloudSslDescribeHostApiGatewayInstanceList#old_certificate_id}
  */
  readonly oldCertificateId?: string;
  /**
  * Deploy resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#resource_type DataTencentcloudSslDescribeHostApiGatewayInstanceList#resource_type}
  */
  readonly resourceType: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#result_output_file DataTencentcloudSslDescribeHostApiGatewayInstanceList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#filters DataTencentcloudSslDescribeHostApiGatewayInstanceList#filters}
  */
  readonly filters?: DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStruct {
}

export function dataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStructToTerraform(struct?: DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStructToHclTerraform(struct?: DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_id - computed: true, optional: false, required: false
  public get certId() {
    return this.getStringAttribute('cert_id');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStructOutputReference {
    return new DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters {
  /**
  * Filter parameter key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#filter_key DataTencentcloudSslDescribeHostApiGatewayInstanceList#filter_key}
  */
  readonly filterKey: string;
  /**
  * Filter parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#filter_value DataTencentcloudSslDescribeHostApiGatewayInstanceList#filter_value}
  */
  readonly filterValue: string;
}

export function dataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersToTerraform(struct?: DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_key: cdktf.stringToTerraform(struct!.filterKey),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function dataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersToHclTerraform(struct?: DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_key: {
      value: cdktf.stringToHclTerraform(struct!.filterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKey = this._filterKey;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterKey = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterKey = value.filterKey;
      this._filterValue = value.filterValue;
    }
  }

  // filter_key - computed: false, optional: false, required: true
  private _filterKey?: string; 
  public get filterKey() {
    return this.getStringAttribute('filter_key');
  }
  public set filterKey(value: string) {
    this._filterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeyInput() {
    return this._filterKey;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class DataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersOutputReference {
    return new DataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list tencentcloud_ssl_describe_host_api_gateway_instance_list}
*/
export class DataTencentcloudSslDescribeHostApiGatewayInstanceList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_describe_host_api_gateway_instance_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSslDescribeHostApiGatewayInstanceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSslDescribeHostApiGatewayInstanceList to import
  * @param importFromId The id of the existing DataTencentcloudSslDescribeHostApiGatewayInstanceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSslDescribeHostApiGatewayInstanceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_describe_host_api_gateway_instance_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/ssl_describe_host_api_gateway_instance_list tencentcloud_ssl_describe_host_api_gateway_instance_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSslDescribeHostApiGatewayInstanceListConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSslDescribeHostApiGatewayInstanceListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_describe_host_api_gateway_instance_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._id = config.id;
    this._isCache = config.isCache;
    this._oldCertificateId = config.oldCertificateId;
    this._resourceType = config.resourceType;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataTencentcloudSslDescribeHostApiGatewayInstanceListInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }

  // is_cache - computed: false, optional: true, required: false
  private _isCache?: number; 
  public get isCache() {
    return this.getNumberAttribute('is_cache');
  }
  public set isCache(value: number) {
    this._isCache = value;
  }
  public resetIsCache() {
    this._isCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCacheInput() {
    return this._isCache;
  }

  // old_certificate_id - computed: false, optional: true, required: false
  private _oldCertificateId?: string; 
  public get oldCertificateId() {
    return this.getStringAttribute('old_certificate_id');
  }
  public set oldCertificateId(value: string) {
    this._oldCertificateId = value;
  }
  public resetOldCertificateId() {
    this._oldCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldCertificateIdInput() {
    return this._oldCertificateId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudSslDescribeHostApiGatewayInstanceListFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      is_cache: cdktf.numberToTerraform(this._isCache),
      old_certificate_id: cdktf.stringToTerraform(this._oldCertificateId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_cache: {
        value: cdktf.numberToHclTerraform(this._isCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      old_certificate_id: {
        value: cdktf.stringToHclTerraform(this._oldCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
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
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudSslDescribeHostApiGatewayInstanceListFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
