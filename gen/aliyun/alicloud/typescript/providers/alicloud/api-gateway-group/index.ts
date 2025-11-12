// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#base_path ApiGatewayGroup#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#description ApiGatewayGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#id ApiGatewayGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#instance_id ApiGatewayGroup#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#name ApiGatewayGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#vpc_intranet_enable ApiGatewayGroup#vpc_intranet_enable}
  */
  readonly vpcIntranetEnable?: boolean | cdktf.IResolvable;
  /**
  * user_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#user_log_config ApiGatewayGroup#user_log_config}
  */
  readonly userLogConfig?: ApiGatewayGroupUserLogConfig;
}
export interface ApiGatewayGroupUserLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#jwt_claims ApiGatewayGroup#jwt_claims}
  */
  readonly jwtClaims?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#query_string ApiGatewayGroup#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#request_body ApiGatewayGroup#request_body}
  */
  readonly requestBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#request_headers ApiGatewayGroup#request_headers}
  */
  readonly requestHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#response_body ApiGatewayGroup#response_body}
  */
  readonly responseBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#response_headers ApiGatewayGroup#response_headers}
  */
  readonly responseHeaders?: string;
}

export function apiGatewayGroupUserLogConfigToTerraform(struct?: ApiGatewayGroupUserLogConfigOutputReference | ApiGatewayGroupUserLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt_claims: cdktf.stringToTerraform(struct!.jwtClaims),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    request_body: cdktf.booleanToTerraform(struct!.requestBody),
    request_headers: cdktf.stringToTerraform(struct!.requestHeaders),
    response_body: cdktf.booleanToTerraform(struct!.responseBody),
    response_headers: cdktf.stringToTerraform(struct!.responseHeaders),
  }
}


export function apiGatewayGroupUserLogConfigToHclTerraform(struct?: ApiGatewayGroupUserLogConfigOutputReference | ApiGatewayGroupUserLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwt_claims: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_body: {
      value: cdktf.booleanToHclTerraform(struct!.requestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body: {
      value: cdktf.booleanToHclTerraform(struct!.responseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_headers: {
      value: cdktf.stringToHclTerraform(struct!.responseHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayGroupUserLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayGroupUserLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwtClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._requestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._responseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBody = this._responseBody;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayGroupUserLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jwtClaims = undefined;
      this._queryString = undefined;
      this._requestBody = undefined;
      this._requestHeaders = undefined;
      this._responseBody = undefined;
      this._responseHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jwtClaims = value.jwtClaims;
      this._queryString = value.queryString;
      this._requestBody = value.requestBody;
      this._requestHeaders = value.requestHeaders;
      this._responseBody = value.responseBody;
      this._responseHeaders = value.responseHeaders;
    }
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims?: string; 
  public get jwtClaims() {
    return this.getStringAttribute('jwt_claims');
  }
  public set jwtClaims(value: string) {
    this._jwtClaims = value;
  }
  public resetJwtClaims() {
    this._jwtClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: boolean | cdktf.IResolvable; 
  public get requestBody() {
    return this.getBooleanAttribute('request_body');
  }
  public set requestBody(value: boolean | cdktf.IResolvable) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: string; 
  public get requestHeaders() {
    return this.getStringAttribute('request_headers');
  }
  public set requestHeaders(value: string) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // response_body - computed: false, optional: true, required: false
  private _responseBody?: boolean | cdktf.IResolvable; 
  public get responseBody() {
    return this.getBooleanAttribute('response_body');
  }
  public set responseBody(value: boolean | cdktf.IResolvable) {
    this._responseBody = value;
  }
  public resetResponseBody() {
    this._responseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyInput() {
    return this._responseBody;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders?: string; 
  public get responseHeaders() {
    return this.getStringAttribute('response_headers');
  }
  public set responseHeaders(value: string) {
    this._responseHeaders = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group alicloud_api_gateway_group}
*/
export class ApiGatewayGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_api_gateway_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayGroup to import
  * @param importFromId The id of the existing ApiGatewayGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_api_gateway_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_group alicloud_api_gateway_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_api_gateway_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basePath = config.basePath;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._vpcIntranetEnable = config.vpcIntranetEnable;
    this._userLogConfig.internalValue = config.userLogConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_id - computed: true, optional: true, required: false
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

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }

  // vpc_domain - computed: true, optional: false, required: false
  public get vpcDomain() {
    return this.getStringAttribute('vpc_domain');
  }

  // vpc_intranet_enable - computed: false, optional: true, required: false
  private _vpcIntranetEnable?: boolean | cdktf.IResolvable; 
  public get vpcIntranetEnable() {
    return this.getBooleanAttribute('vpc_intranet_enable');
  }
  public set vpcIntranetEnable(value: boolean | cdktf.IResolvable) {
    this._vpcIntranetEnable = value;
  }
  public resetVpcIntranetEnable() {
    this._vpcIntranetEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIntranetEnableInput() {
    return this._vpcIntranetEnable;
  }

  // user_log_config - computed: false, optional: true, required: false
  private _userLogConfig = new ApiGatewayGroupUserLogConfigOutputReference(this, "user_log_config");
  public get userLogConfig() {
    return this._userLogConfig;
  }
  public putUserLogConfig(value: ApiGatewayGroupUserLogConfig) {
    this._userLogConfig.internalValue = value;
  }
  public resetUserLogConfig() {
    this._userLogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLogConfigInput() {
    return this._userLogConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_path: cdktf.stringToTerraform(this._basePath),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      vpc_intranet_enable: cdktf.booleanToTerraform(this._vpcIntranetEnable),
      user_log_config: apiGatewayGroupUserLogConfigToTerraform(this._userLogConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_intranet_enable: {
        value: cdktf.booleanToHclTerraform(this._vpcIntranetEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_log_config: {
        value: apiGatewayGroupUserLogConfigToHclTerraform(this._userLogConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayGroupUserLogConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
