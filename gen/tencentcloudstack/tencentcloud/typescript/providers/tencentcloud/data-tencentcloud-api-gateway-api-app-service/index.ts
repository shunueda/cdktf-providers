// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudApiGatewayApiAppServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Territory to which the service belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service#api_region DataTencentcloudApiGatewayApiAppService#api_region}
  */
  readonly apiRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service#id DataTencentcloudApiGatewayApiAppService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service#result_output_file DataTencentcloudApiGatewayApiAppService#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The unique ID of the service to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service#service_id DataTencentcloudApiGatewayApiAppService#service_id}
  */
  readonly serviceId: string;
}
export interface DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfig {
}

export function dataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfigToTerraform(struct?: DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfigToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // login_redirect_url - computed: true, optional: false, required: false
  public get loginRedirectUrl() {
    return this.getStringAttribute('login_redirect_url');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // token_location - computed: true, optional: false, required: false
  public get tokenLocation() {
    return this.getStringAttribute('token_location');
  }
}

export class DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfigOutputReference {
    return new DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppServiceApiIdStatusSet {
}

export function dataTencentcloudApiGatewayApiAppServiceApiIdStatusSetToTerraform(struct?: DataTencentcloudApiGatewayApiAppServiceApiIdStatusSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppServiceApiIdStatusSetToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppServiceApiIdStatusSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppServiceApiIdStatusSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppServiceApiIdStatusSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_business_type - computed: true, optional: false, required: false
  public get apiBusinessType() {
    return this.getStringAttribute('api_business_type');
  }

  // api_desc - computed: true, optional: false, required: false
  public get apiDesc() {
    return this.getStringAttribute('api_desc');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // api_type - computed: true, optional: false, required: false
  public get apiType() {
    return this.getStringAttribute('api_type');
  }

  // auth_relation_api_id - computed: true, optional: false, required: false
  public get authRelationApiId() {
    return this.getStringAttribute('auth_relation_api_id');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // is_debug_after_charge - computed: true, optional: false, required: false
  public get isDebugAfterCharge() {
    return this.getBooleanAttribute('is_debug_after_charge');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // token_location - computed: true, optional: false, required: false
  public get tokenLocation() {
    return this.getStringAttribute('token_location');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
}

export class DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOutputReference {
    return new DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppServiceUsagePlanListStruct {
}

export function dataTencentcloudApiGatewayApiAppServiceUsagePlanListStructToTerraform(struct?: DataTencentcloudApiGatewayApiAppServiceUsagePlanListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppServiceUsagePlanListStructToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppServiceUsagePlanListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppServiceUsagePlanListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppServiceUsagePlanListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppServiceUsagePlanListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // max_request_num_pre_sec - computed: true, optional: false, required: false
  public get maxRequestNumPreSec() {
    return this.getNumberAttribute('max_request_num_pre_sec');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // usage_plan_desc - computed: true, optional: false, required: false
  public get usagePlanDesc() {
    return this.getStringAttribute('usage_plan_desc');
  }

  // usage_plan_id - computed: true, optional: false, required: false
  public get usagePlanId() {
    return this.getStringAttribute('usage_plan_id');
  }

  // usage_plan_name - computed: true, optional: false, required: false
  public get usagePlanName() {
    return this.getStringAttribute('usage_plan_name');
  }
}

export class DataTencentcloudApiGatewayApiAppServiceUsagePlanListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppServiceUsagePlanListStructOutputReference {
    return new DataTencentcloudApiGatewayApiAppServiceUsagePlanListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service tencentcloud_api_gateway_api_app_service}
*/
export class DataTencentcloudApiGatewayApiAppService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api_app_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudApiGatewayApiAppService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudApiGatewayApiAppService to import
  * @param importFromId The id of the existing DataTencentcloudApiGatewayApiAppService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudApiGatewayApiAppService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api_app_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_api_app_service tencentcloud_api_gateway_api_app_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudApiGatewayApiAppServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudApiGatewayApiAppServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api_app_service',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiRegion = config.apiRegion;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id_status_set - computed: true, optional: false, required: false
  private _apiIdStatusSet = new DataTencentcloudApiGatewayApiAppServiceApiIdStatusSetList(this, "api_id_status_set", false);
  public get apiIdStatusSet() {
    return this._apiIdStatusSet;
  }

  // api_region - computed: false, optional: false, required: true
  private _apiRegion?: string; 
  public get apiRegion() {
    return this.getStringAttribute('api_region');
  }
  public set apiRegion(value: string) {
    this._apiRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRegionInput() {
    return this._apiRegion;
  }

  // api_total_count - computed: true, optional: false, required: false
  public get apiTotalCount() {
    return this.getNumberAttribute('api_total_count');
  }

  // available_environments - computed: true, optional: false, required: false
  public get availableEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('available_environments'));
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // inner_http_port - computed: true, optional: false, required: false
  public get innerHttpPort() {
    return this.getNumberAttribute('inner_http_port');
  }

  // inner_https_port - computed: true, optional: false, required: false
  public get innerHttpsPort() {
    return this.getNumberAttribute('inner_https_port');
  }

  // internal_sub_domain - computed: true, optional: false, required: false
  public get internalSubDomain() {
    return this.getStringAttribute('internal_sub_domain');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // net_types - computed: true, optional: false, required: false
  public get netTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('net_types'));
  }

  // outer_sub_domain - computed: true, optional: false, required: false
  public get outerSubDomain() {
    return this.getStringAttribute('outer_sub_domain');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
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

  // service_desc - computed: true, optional: false, required: false
  public get serviceDesc() {
    return this.getStringAttribute('service_desc');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // set_id - computed: true, optional: false, required: false
  public get setId() {
    return this.getNumberAttribute('set_id');
  }

  // usage_plan_list - computed: true, optional: false, required: false
  private _usagePlanList = new DataTencentcloudApiGatewayApiAppServiceUsagePlanListStructList(this, "usage_plan_list", false);
  public get usagePlanList() {
    return this._usagePlanList;
  }

  // usage_plan_total_count - computed: true, optional: false, required: false
  public get usagePlanTotalCount() {
    return this.getNumberAttribute('usage_plan_total_count');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_region: cdktf.stringToTerraform(this._apiRegion),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_region: {
        value: cdktf.stringToHclTerraform(this._apiRegion),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
