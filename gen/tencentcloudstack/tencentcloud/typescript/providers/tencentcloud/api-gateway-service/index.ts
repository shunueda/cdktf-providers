// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Self-deployed cluster name, which is used to specify the self-deployed cluster where the service is to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#exclusive_set_name ApiGatewayService#exclusive_set_name}
  */
  readonly exclusiveSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#id ApiGatewayService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Exclusive instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#instance_id ApiGatewayService#instance_id}
  */
  readonly instanceId?: string;
  /**
  * IP version number. Valid values: `IPv4`, `IPv6`. Default value: `IPv4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#ip_version ApiGatewayService#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Network type list, which is used to specify the supported network types. Valid values: `INNER`, `OUTER`. `INNER` indicates access over private network, and `OUTER` indicates access over public network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#net_type ApiGatewayService#net_type}
  */
  readonly netType: string[];
  /**
  * API QPS value. Enter a positive number to limit the API query rate per second `QPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#pre_limit ApiGatewayService#pre_limit}
  */
  readonly preLimit?: number;
  /**
  * Service frontend request type. Valid values: `http`, `https`, `http&https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#protocol ApiGatewayService#protocol}
  */
  readonly protocol: string;
  /**
  * API QPS value. Enter a positive number to limit the API query rate per second `QPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#release_limit ApiGatewayService#release_limit}
  */
  readonly releaseLimit?: number;
  /**
  * Custom service description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#service_desc ApiGatewayService#service_desc}
  */
  readonly serviceDesc?: string;
  /**
  * Custom service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#service_name ApiGatewayService#service_name}
  */
  readonly serviceName: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#tags ApiGatewayService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * API QPS value. Enter a positive number to limit the API query rate per second `QPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#test_limit ApiGatewayService#test_limit}
  */
  readonly testLimit?: number;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#uniq_vpc_id ApiGatewayService#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
}
export interface ApiGatewayServiceApiListStruct {
}

export function apiGatewayServiceApiListStructToTerraform(struct?: ApiGatewayServiceApiListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayServiceApiListStructToHclTerraform(struct?: ApiGatewayServiceApiListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayServiceApiListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayServiceApiListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayServiceApiListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class ApiGatewayServiceApiListStructList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayServiceApiListStructOutputReference {
    return new ApiGatewayServiceApiListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayServiceUsagePlanListStruct {
}

export function apiGatewayServiceUsagePlanListStructToTerraform(struct?: ApiGatewayServiceUsagePlanListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayServiceUsagePlanListStructToHclTerraform(struct?: ApiGatewayServiceUsagePlanListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayServiceUsagePlanListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayServiceUsagePlanListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayServiceUsagePlanListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // bind_type - computed: true, optional: false, required: false
  public get bindType() {
    return this.getStringAttribute('bind_type');
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

export class ApiGatewayServiceUsagePlanListStructList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayServiceUsagePlanListStructOutputReference {
    return new ApiGatewayServiceUsagePlanListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service tencentcloud_api_gateway_service}
*/
export class ApiGatewayService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayService to import
  * @param importFromId The id of the existing ApiGatewayService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/api_gateway_service tencentcloud_api_gateway_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_service',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exclusiveSetName = config.exclusiveSetName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipVersion = config.ipVersion;
    this._netType = config.netType;
    this._preLimit = config.preLimit;
    this._protocol = config.protocol;
    this._releaseLimit = config.releaseLimit;
    this._serviceDesc = config.serviceDesc;
    this._serviceName = config.serviceName;
    this._tags = config.tags;
    this._testLimit = config.testLimit;
    this._uniqVpcId = config.uniqVpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_list - computed: true, optional: false, required: false
  private _apiList = new ApiGatewayServiceApiListStructList(this, "api_list", false);
  public get apiList() {
    return this._apiList;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // exclusive_set_name - computed: false, optional: true, required: false
  private _exclusiveSetName?: string; 
  public get exclusiveSetName() {
    return this.getStringAttribute('exclusive_set_name');
  }
  public set exclusiveSetName(value: string) {
    this._exclusiveSetName = value;
  }
  public resetExclusiveSetName() {
    this._exclusiveSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveSetNameInput() {
    return this._exclusiveSetName;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // internal_sub_domain - computed: true, optional: false, required: false
  public get internalSubDomain() {
    return this.getStringAttribute('internal_sub_domain');
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // net_type - computed: false, optional: false, required: true
  private _netType?: string[]; 
  public get netType() {
    return cdktf.Fn.tolist(this.getListAttribute('net_type'));
  }
  public set netType(value: string[]) {
    this._netType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // outer_sub_domain - computed: true, optional: false, required: false
  public get outerSubDomain() {
    return this.getStringAttribute('outer_sub_domain');
  }

  // pre_limit - computed: true, optional: true, required: false
  private _preLimit?: number; 
  public get preLimit() {
    return this.getNumberAttribute('pre_limit');
  }
  public set preLimit(value: number) {
    this._preLimit = value;
  }
  public resetPreLimit() {
    this._preLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLimitInput() {
    return this._preLimit;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // release_limit - computed: true, optional: true, required: false
  private _releaseLimit?: number; 
  public get releaseLimit() {
    return this.getNumberAttribute('release_limit');
  }
  public set releaseLimit(value: number) {
    this._releaseLimit = value;
  }
  public resetReleaseLimit() {
    this._releaseLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLimitInput() {
    return this._releaseLimit;
  }

  // service_desc - computed: false, optional: true, required: false
  private _serviceDesc?: string; 
  public get serviceDesc() {
    return this.getStringAttribute('service_desc');
  }
  public set serviceDesc(value: string) {
    this._serviceDesc = value;
  }
  public resetServiceDesc() {
    this._serviceDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescInput() {
    return this._serviceDesc;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // test_limit - computed: true, optional: true, required: false
  private _testLimit?: number; 
  public get testLimit() {
    return this.getNumberAttribute('test_limit');
  }
  public set testLimit(value: number) {
    this._testLimit = value;
  }
  public resetTestLimit() {
    this._testLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testLimitInput() {
    return this._testLimit;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // usage_plan_list - computed: true, optional: false, required: false
  private _usagePlanList = new ApiGatewayServiceUsagePlanListStructList(this, "usage_plan_list", false);
  public get usagePlanList() {
    return this._usagePlanList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclusive_set_name: cdktf.stringToTerraform(this._exclusiveSetName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      net_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._netType),
      pre_limit: cdktf.numberToTerraform(this._preLimit),
      protocol: cdktf.stringToTerraform(this._protocol),
      release_limit: cdktf.numberToTerraform(this._releaseLimit),
      service_desc: cdktf.stringToTerraform(this._serviceDesc),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      test_limit: cdktf.numberToTerraform(this._testLimit),
      uniq_vpc_id: cdktf.stringToTerraform(this._uniqVpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclusive_set_name: {
        value: cdktf.stringToHclTerraform(this._exclusiveSetName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._netType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pre_limit: {
        value: cdktf.numberToHclTerraform(this._preLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_limit: {
        value: cdktf.numberToHclTerraform(this._releaseLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_desc: {
        value: cdktf.stringToHclTerraform(this._serviceDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      test_limit: {
        value: cdktf.numberToHclTerraform(this._testLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uniq_vpc_id: {
        value: cdktf.stringToHclTerraform(this._uniqVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
