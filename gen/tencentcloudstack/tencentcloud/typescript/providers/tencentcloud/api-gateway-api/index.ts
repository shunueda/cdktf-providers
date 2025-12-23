// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * When `auth_type` is OAUTH, this field is valid, NORMAL: Business API, OAUTH: Authorization API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#api_business_type ApiGatewayApi#api_business_type}
  */
  readonly apiBusinessType?: string;
  /**
  * Custom API description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#api_desc ApiGatewayApi#api_desc}
  */
  readonly apiDesc?: string;
  /**
  * Custom API name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#api_name ApiGatewayApi#api_name}
  */
  readonly apiName: string;
  /**
  * API type, supports NORMAL (regular API) and TSF (microservice API), defaults to NORMAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#api_type ApiGatewayApi#api_type}
  */
  readonly apiType?: string;
  /**
  * The unique ID of the associated authorization API takes effect when AuthType is OAUTH and ApiBusinessType is NORMAL. The unique ID of the oauth2.0 authorized API that identifies the business API binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#auth_relation_api_id ApiGatewayApi#auth_relation_api_id}
  */
  readonly authRelationApiId?: string;
  /**
  * API authentication type. Support SECRET (Key Pair Authentication), NONE (Authentication Exemption), OAUTH, APP (Application Authentication). The default is NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#auth_type ApiGatewayApi#auth_type}
  */
  readonly authType?: string;
  /**
  * EIAM application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#eiam_app_id ApiGatewayApi#eiam_app_id}
  */
  readonly eiamAppId?: string;
  /**
  * EIAM application type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#eiam_app_type ApiGatewayApi#eiam_app_type}
  */
  readonly eiamAppType?: string;
  /**
  * The EIAM application authentication type supports AuthenticationOnly, Authentication, and Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#eiam_auth_type ApiGatewayApi#eiam_auth_type}
  */
  readonly eiamAuthType?: string;
  /**
  * Whether to enable CORS. Default value: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#enable_cors ApiGatewayApi#enable_cors}
  */
  readonly enableCors?: boolean | cdktf.IResolvable;
  /**
  * Event bus ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#event_bus_id ApiGatewayApi#event_bus_id}
  */
  readonly eventBusId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#id ApiGatewayApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to enable Base64 encoding will only take effect when the backend is scf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#is_base64_encoded ApiGatewayApi#is_base64_encoded}
  */
  readonly isBase64Encoded?: boolean | cdktf.IResolvable;
  /**
  * Charge after starting debugging. (Cloud Market Reserved Fields).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#is_debug_after_charge ApiGatewayApi#is_debug_after_charge}
  */
  readonly isDebugAfterCharge?: boolean | cdktf.IResolvable;
  /**
  * Do you want to delete the custom response configuration error code? If it is not passed or False is passed, it will not be deleted. If True is passed, all custom response configuration error codes for this API will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#is_delete_response_error_codes ApiGatewayApi#is_delete_response_error_codes}
  */
  readonly isDeleteResponseErrorCodes?: boolean | cdktf.IResolvable;
  /**
  * Owner of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#owner ApiGatewayApi#owner}
  */
  readonly owner?: string;
  /**
  * API QPS value. Enter a positive number to limit the API query rate per second `QPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#pre_limit ApiGatewayApi#pre_limit}
  */
  readonly preLimit?: number;
  /**
  * API frontend request type. Valid values: `HTTP`, `WEBSOCKET`. Default value: `HTTP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#protocol ApiGatewayApi#protocol}
  */
  readonly protocol?: string;
  /**
  * API QPS value. Enter a positive number to limit the API query rate per second `QPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#release_limit ApiGatewayApi#release_limit}
  */
  readonly releaseLimit?: number;
  /**
  * Request frontend method configuration. Valid values: `GET`,`POST`,`PUT`,`DELETE`,`HEAD`,`ANY`. Default value: `GET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#request_config_method ApiGatewayApi#request_config_method}
  */
  readonly requestConfigMethod?: string;
  /**
  * Request frontend path configuration. Like `/user/getinfo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#request_config_path ApiGatewayApi#request_config_path}
  */
  readonly requestConfigPath: string;
  /**
  * Response failure sample of custom response configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#response_fail_example ApiGatewayApi#response_fail_example}
  */
  readonly responseFailExample?: string;
  /**
  * Successful response sample of custom response configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#response_success_example ApiGatewayApi#response_success_example}
  */
  readonly responseSuccessExample?: string;
  /**
  * Return type. Valid values: `HTML`, `JSON`, `TEXT`, `BINARY`, `XML`. Default value: `HTML`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#response_type ApiGatewayApi#response_type}
  */
  readonly responseType?: string;
  /**
  * API backend service request method, such as `GET`. If `service_config_type` is `HTTP`, this parameter will be required. The frontend `request_config_method` and backend method `service_config_method` can be different.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_method ApiGatewayApi#service_config_method}
  */
  readonly serviceConfigMethod?: string;
  /**
  * Returned information of API backend mocking. This parameter is required when `service_config_type` is `MOCK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_mock_return_message ApiGatewayApi#service_config_mock_return_message}
  */
  readonly serviceConfigMockReturnMessage?: string;
  /**
  * API backend service path, such as /path. If `service_config_type` is `HTTP`, this parameter will be required. The frontend `request_config_path` and backend path `service_config_path` can be different.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_path ApiGatewayApi#service_config_path}
  */
  readonly serviceConfigPath?: string;
  /**
  * Backend type. Effective when enabling vpc, currently supported types are clb, cvm, and upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_product ApiGatewayApi#service_config_product}
  */
  readonly serviceConfigProduct?: string;
  /**
  * SCF function name. This parameter takes effect when `service_config_type` is `SCF`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_scf_function_name ApiGatewayApi#service_config_scf_function_name}
  */
  readonly serviceConfigScfFunctionName?: string;
  /**
  * SCF function namespace. This parameter takes effect when `service_config_type` is `SCF`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_scf_function_namespace ApiGatewayApi#service_config_scf_function_namespace}
  */
  readonly serviceConfigScfFunctionNamespace?: string;
  /**
  * SCF function version. This parameter takes effect when `service_config_type` is `SCF`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_scf_function_qualifier ApiGatewayApi#service_config_scf_function_qualifier}
  */
  readonly serviceConfigScfFunctionQualifier?: string;
  /**
  * Scf function type. Effective when the backend type is SCF. Support Event Triggering (EVENT) and HTTP Direct Cloud Function (HTTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_scf_function_type ApiGatewayApi#service_config_scf_function_type}
  */
  readonly serviceConfigScfFunctionType?: string;
  /**
  * Whether to enable response integration. Effective when the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_scf_is_integrated_response ApiGatewayApi#service_config_scf_is_integrated_response}
  */
  readonly serviceConfigScfIsIntegratedResponse?: boolean | cdktf.IResolvable;
  /**
  * API backend service timeout period in seconds. Default value: `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_timeout ApiGatewayApi#service_config_timeout}
  */
  readonly serviceConfigTimeout?: number;
  /**
  * The backend service type of the API. Supports HTTP, MOCK, TSF, SCF, WEBSOCKET, COS, TARGET (internal testing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_type ApiGatewayApi#service_config_type}
  */
  readonly serviceConfigType?: string;
  /**
  * Only required when binding to VPC channelsNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_upstream_id ApiGatewayApi#service_config_upstream_id}
  */
  readonly serviceConfigUpstreamId?: string;
  /**
  * The backend service URL of the API. If the ServiceType is HTTP, this parameter must be passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_url ApiGatewayApi#service_config_url}
  */
  readonly serviceConfigUrl?: string;
  /**
  * Unique VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_vpc_id ApiGatewayApi#service_config_vpc_id}
  */
  readonly serviceConfigVpcId?: string;
  /**
  * Scf websocket cleaning function. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_cleanup_function_name ApiGatewayApi#service_config_websocket_cleanup_function_name}
  */
  readonly serviceConfigWebsocketCleanupFunctionName?: string;
  /**
  * Scf websocket cleans up the function namespace. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_cleanup_function_namespace ApiGatewayApi#service_config_websocket_cleanup_function_namespace}
  */
  readonly serviceConfigWebsocketCleanupFunctionNamespace?: string;
  /**
  * Scf websocket cleaning function version. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_cleanup_function_qualifier ApiGatewayApi#service_config_websocket_cleanup_function_qualifier}
  */
  readonly serviceConfigWebsocketCleanupFunctionQualifier?: string;
  /**
  * Scf websocket registration function. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_register_function_name ApiGatewayApi#service_config_websocket_register_function_name}
  */
  readonly serviceConfigWebsocketRegisterFunctionName?: string;
  /**
  * Scf websocket registers function namespaces. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_register_function_namespace ApiGatewayApi#service_config_websocket_register_function_namespace}
  */
  readonly serviceConfigWebsocketRegisterFunctionNamespace?: string;
  /**
  * Scf websocket transfer function version. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_register_function_qualifier ApiGatewayApi#service_config_websocket_register_function_qualifier}
  */
  readonly serviceConfigWebsocketRegisterFunctionQualifier?: string;
  /**
  * Scf websocket transfer function. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_transport_function_name ApiGatewayApi#service_config_websocket_transport_function_name}
  */
  readonly serviceConfigWebsocketTransportFunctionName?: string;
  /**
  * Scf websocket transfer function namespace. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_transport_function_namespace ApiGatewayApi#service_config_websocket_transport_function_namespace}
  */
  readonly serviceConfigWebsocketTransportFunctionNamespace?: string;
  /**
  * Scf websocket transfer function version. It takes effect when the current end type is WEBSOCKET and the backend type is SCF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_websocket_transport_function_qualifier ApiGatewayApi#service_config_websocket_transport_function_qualifier}
  */
  readonly serviceConfigWebsocketTransportFunctionQualifier?: string;
  /**
  * The unique ID of the service where the API is located. Refer to resource `tencentcloud_api_gateway_service`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_id ApiGatewayApi#service_id}
  */
  readonly serviceId: string;
  /**
  * Tsf serverless namespace ID. (In internal testing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#target_namespace_id ApiGatewayApi#target_namespace_id}
  */
  readonly targetNamespaceId?: string;
  /**
  * Target type load balancing configuration. (Internal testing stage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#target_services_load_balance_conf ApiGatewayApi#target_services_load_balance_conf}
  */
  readonly targetServicesLoadBalanceConf?: number;
  /**
  * API QPS value. Enter a positive number to limit the API query rate per second `QPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#test_limit ApiGatewayApi#test_limit}
  */
  readonly testLimit?: number;
  /**
  * The effective time of the EIAM application token, measured in seconds, defaults to 7200 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#token_timeout ApiGatewayApi#token_timeout}
  */
  readonly tokenTimeout?: number;
  /**
  * User type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#user_type ApiGatewayApi#user_type}
  */
  readonly userType?: string;
  /**
  * constant_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#constant_parameters ApiGatewayApi#constant_parameters}
  */
  readonly constantParameters?: ApiGatewayApiConstantParameters[] | cdktf.IResolvable;
  /**
  * micro_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#micro_services ApiGatewayApi#micro_services}
  */
  readonly microServices?: ApiGatewayApiMicroServices[] | cdktf.IResolvable;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#oauth_config ApiGatewayApi#oauth_config}
  */
  readonly oauthConfig?: ApiGatewayApiOauthConfig;
  /**
  * request_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#request_parameters ApiGatewayApi#request_parameters}
  */
  readonly requestParameters?: ApiGatewayApiRequestParameters[] | cdktf.IResolvable;
  /**
  * response_error_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#response_error_codes ApiGatewayApi#response_error_codes}
  */
  readonly responseErrorCodes?: ApiGatewayApiResponseErrorCodes[] | cdktf.IResolvable;
  /**
  * service_config_cos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_config_cos_config ApiGatewayApi#service_config_cos_config}
  */
  readonly serviceConfigCosConfig?: ApiGatewayApiServiceConfigCosConfig;
  /**
  * service_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_parameters ApiGatewayApi#service_parameters}
  */
  readonly serviceParameters?: ApiGatewayApiServiceParameters[] | cdktf.IResolvable;
  /**
  * service_tsf_health_check_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_tsf_health_check_conf ApiGatewayApi#service_tsf_health_check_conf}
  */
  readonly serviceTsfHealthCheckConf?: ApiGatewayApiServiceTsfHealthCheckConf;
  /**
  * service_tsf_load_balance_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#service_tsf_load_balance_conf ApiGatewayApi#service_tsf_load_balance_conf}
  */
  readonly serviceTsfLoadBalanceConf?: ApiGatewayApiServiceTsfLoadBalanceConf;
  /**
  * target_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#target_services ApiGatewayApi#target_services}
  */
  readonly targetServices?: ApiGatewayApiTargetServices[] | cdktf.IResolvable;
  /**
  * target_services_health_check_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#target_services_health_check_conf ApiGatewayApi#target_services_health_check_conf}
  */
  readonly targetServicesHealthCheckConf?: ApiGatewayApiTargetServicesHealthCheckConf;
}
export interface ApiGatewayApiConstantParameters {
  /**
  * Default value for constant parameters. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#default_value ApiGatewayApi#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Constant parameter description. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#desc ApiGatewayApi#desc}
  */
  readonly desc?: string;
  /**
  * Constant parameter name. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name?: string;
  /**
  * Constant parameter position. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#position ApiGatewayApi#position}
  */
  readonly position?: string;
}

export function apiGatewayApiConstantParametersToTerraform(struct?: ApiGatewayApiConstantParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    desc: cdktf.stringToTerraform(struct!.desc),
    name: cdktf.stringToTerraform(struct!.name),
    position: cdktf.stringToTerraform(struct!.position),
  }
}


export function apiGatewayApiConstantParametersToHclTerraform(struct?: ApiGatewayApiConstantParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiConstantParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiConstantParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiConstantParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._desc = undefined;
      this._name = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._desc = value.desc;
      this._name = value.name;
      this._position = value.position;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class ApiGatewayApiConstantParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiConstantParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiConstantParametersOutputReference {
    return new ApiGatewayApiConstantParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiMicroServices {
  /**
  * Micro service cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#cluster_id ApiGatewayApi#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Microservice name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#micro_service_name ApiGatewayApi#micro_service_name}
  */
  readonly microServiceName: string;
  /**
  * Microservice namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#namespace_id ApiGatewayApi#namespace_id}
  */
  readonly namespaceId: string;
}

export function apiGatewayApiMicroServicesToTerraform(struct?: ApiGatewayApiMicroServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    micro_service_name: cdktf.stringToTerraform(struct!.microServiceName),
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
  }
}


export function apiGatewayApiMicroServicesToHclTerraform(struct?: ApiGatewayApiMicroServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    micro_service_name: {
      value: cdktf.stringToHclTerraform(struct!.microServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiMicroServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiMicroServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._microServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.microServiceName = this._microServiceName;
    }
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiMicroServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._microServiceName = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._microServiceName = value.microServiceName;
      this._namespaceId = value.namespaceId;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // micro_service_name - computed: false, optional: false, required: true
  private _microServiceName?: string; 
  public get microServiceName() {
    return this.getStringAttribute('micro_service_name');
  }
  public set microServiceName(value: string) {
    this._microServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microServiceNameInput() {
    return this._microServiceName;
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class ApiGatewayApiMicroServicesList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiMicroServices[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiMicroServicesOutputReference {
    return new ApiGatewayApiMicroServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiOauthConfig {
  /**
  * Redirect address, used to guide users in login operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#login_redirect_url ApiGatewayApi#login_redirect_url}
  */
  readonly loginRedirectUrl?: string;
  /**
  * Public key, used to verify user tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#public_key ApiGatewayApi#public_key}
  */
  readonly publicKey: string;
  /**
  * Token passes the position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#token_location ApiGatewayApi#token_location}
  */
  readonly tokenLocation: string;
}

export function apiGatewayApiOauthConfigToTerraform(struct?: ApiGatewayApiOauthConfigOutputReference | ApiGatewayApiOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_redirect_url: cdktf.stringToTerraform(struct!.loginRedirectUrl),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    token_location: cdktf.stringToTerraform(struct!.tokenLocation),
  }
}


export function apiGatewayApiOauthConfigToHclTerraform(struct?: ApiGatewayApiOauthConfigOutputReference | ApiGatewayApiOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.loginRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_location: {
      value: cdktf.stringToHclTerraform(struct!.tokenLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginRedirectUrl = this._loginRedirectUrl;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._tokenLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLocation = this._tokenLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginRedirectUrl = undefined;
      this._publicKey = undefined;
      this._tokenLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginRedirectUrl = value.loginRedirectUrl;
      this._publicKey = value.publicKey;
      this._tokenLocation = value.tokenLocation;
    }
  }

  // login_redirect_url - computed: false, optional: true, required: false
  private _loginRedirectUrl?: string; 
  public get loginRedirectUrl() {
    return this.getStringAttribute('login_redirect_url');
  }
  public set loginRedirectUrl(value: string) {
    this._loginRedirectUrl = value;
  }
  public resetLoginRedirectUrl() {
    this._loginRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginRedirectUrlInput() {
    return this._loginRedirectUrl;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // token_location - computed: false, optional: false, required: true
  private _tokenLocation?: string; 
  public get tokenLocation() {
    return this.getStringAttribute('token_location');
  }
  public set tokenLocation(value: string) {
    this._tokenLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocationInput() {
    return this._tokenLocation;
  }
}
export interface ApiGatewayApiRequestParameters {
  /**
  * Parameter default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#default_value ApiGatewayApi#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Parameter description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#desc ApiGatewayApi#desc}
  */
  readonly desc?: string;
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Parameter location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#position ApiGatewayApi#position}
  */
  readonly position: string;
  /**
  * If this parameter required. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#required ApiGatewayApi#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Parameter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type: string;
}

export function apiGatewayApiRequestParametersToTerraform(struct?: ApiGatewayApiRequestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    desc: cdktf.stringToTerraform(struct!.desc),
    name: cdktf.stringToTerraform(struct!.name),
    position: cdktf.stringToTerraform(struct!.position),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apiGatewayApiRequestParametersToHclTerraform(struct?: ApiGatewayApiRequestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiRequestParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiRequestParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiRequestParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._desc = undefined;
      this._name = undefined;
      this._position = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._desc = value.desc;
      this._name = value.name;
      this._position = value.position;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
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

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApiGatewayApiRequestParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiRequestParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiRequestParametersOutputReference {
    return new ApiGatewayApiRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiResponseErrorCodes {
  /**
  * Custom response configuration error code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#code ApiGatewayApi#code}
  */
  readonly code: number;
  /**
  * Custom error code conversion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#converted_code ApiGatewayApi#converted_code}
  */
  readonly convertedCode?: number;
  /**
  * Parameter description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#desc ApiGatewayApi#desc}
  */
  readonly desc?: string;
  /**
  * Custom response configuration error message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#msg ApiGatewayApi#msg}
  */
  readonly msg: string;
  /**
  * Whether to enable error code conversion. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#need_convert ApiGatewayApi#need_convert}
  */
  readonly needConvert?: boolean | cdktf.IResolvable;
}

export function apiGatewayApiResponseErrorCodesToTerraform(struct?: ApiGatewayApiResponseErrorCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    converted_code: cdktf.numberToTerraform(struct!.convertedCode),
    desc: cdktf.stringToTerraform(struct!.desc),
    msg: cdktf.stringToTerraform(struct!.msg),
    need_convert: cdktf.booleanToTerraform(struct!.needConvert),
  }
}


export function apiGatewayApiResponseErrorCodesToHclTerraform(struct?: ApiGatewayApiResponseErrorCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    converted_code: {
      value: cdktf.numberToHclTerraform(struct!.convertedCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg: {
      value: cdktf.stringToHclTerraform(struct!.msg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    need_convert: {
      value: cdktf.booleanToHclTerraform(struct!.needConvert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiResponseErrorCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiResponseErrorCodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._convertedCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertedCode = this._convertedCode;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    if (this._msg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msg = this._msg;
    }
    if (this._needConvert !== undefined) {
      hasAnyValues = true;
      internalValueResult.needConvert = this._needConvert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiResponseErrorCodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._convertedCode = undefined;
      this._desc = undefined;
      this._msg = undefined;
      this._needConvert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._convertedCode = value.convertedCode;
      this._desc = value.desc;
      this._msg = value.msg;
      this._needConvert = value.needConvert;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // converted_code - computed: false, optional: true, required: false
  private _convertedCode?: number; 
  public get convertedCode() {
    return this.getNumberAttribute('converted_code');
  }
  public set convertedCode(value: number) {
    this._convertedCode = value;
  }
  public resetConvertedCode() {
    this._convertedCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertedCodeInput() {
    return this._convertedCode;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // msg - computed: false, optional: false, required: true
  private _msg?: string; 
  public get msg() {
    return this.getStringAttribute('msg');
  }
  public set msg(value: string) {
    this._msg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgInput() {
    return this._msg;
  }

  // need_convert - computed: false, optional: true, required: false
  private _needConvert?: boolean | cdktf.IResolvable; 
  public get needConvert() {
    return this.getBooleanAttribute('need_convert');
  }
  public set needConvert(value: boolean | cdktf.IResolvable) {
    this._needConvert = value;
  }
  public resetNeedConvert() {
    this._needConvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needConvertInput() {
    return this._needConvert;
  }
}

export class ApiGatewayApiResponseErrorCodesList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiResponseErrorCodes[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiResponseErrorCodesOutputReference {
    return new ApiGatewayApiResponseErrorCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiServiceConfigCosConfig {
  /**
  * The API calls the backend COS method, and the optional values for the front-end request method and Action are:GET: GetObjectPUT: PutObjectPOST: PostObject, AppendObjectHEAD: HeadObjectDELETE: DeleteObject.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#action ApiGatewayApi#action}
  */
  readonly action: string;
  /**
  * The API calls the signature switch of the backend COS, which defaults to false.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#authorization ApiGatewayApi#authorization}
  */
  readonly authorization?: boolean | cdktf.IResolvable;
  /**
  * The bucket name of the API backend COS.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#bucket_name ApiGatewayApi#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Path matching mode for API backend COS, optional values:BackEndPath: Backend path matchingFullPath: Full Path MatchingThe default value is: BackEndPathNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#path_match_mode ApiGatewayApi#path_match_mode}
  */
  readonly pathMatchMode?: string;
}

export function apiGatewayApiServiceConfigCosConfigToTerraform(struct?: ApiGatewayApiServiceConfigCosConfigOutputReference | ApiGatewayApiServiceConfigCosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    authorization: cdktf.booleanToTerraform(struct!.authorization),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path_match_mode: cdktf.stringToTerraform(struct!.pathMatchMode),
  }
}


export function apiGatewayApiServiceConfigCosConfigToHclTerraform(struct?: ApiGatewayApiServiceConfigCosConfigOutputReference | ApiGatewayApiServiceConfigCosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization: {
      value: cdktf.booleanToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_match_mode: {
      value: cdktf.stringToHclTerraform(struct!.pathMatchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiServiceConfigCosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiServiceConfigCosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._pathMatchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatchMode = this._pathMatchMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiServiceConfigCosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._authorization = undefined;
      this._bucketName = undefined;
      this._pathMatchMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._authorization = value.authorization;
      this._bucketName = value.bucketName;
      this._pathMatchMode = value.pathMatchMode;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: boolean | cdktf.IResolvable; 
  public get authorization() {
    return this.getBooleanAttribute('authorization');
  }
  public set authorization(value: boolean | cdktf.IResolvable) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path_match_mode - computed: false, optional: true, required: false
  private _pathMatchMode?: string; 
  public get pathMatchMode() {
    return this.getStringAttribute('path_match_mode');
  }
  public set pathMatchMode(value: string) {
    this._pathMatchMode = value;
  }
  public resetPathMatchMode() {
    this._pathMatchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchModeInput() {
    return this._pathMatchMode;
  }
}
export interface ApiGatewayApiServiceParameters {
  /**
  * The default value for the backend service parameters of the API. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#default_value ApiGatewayApi#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The backend service parameter name of the API. This parameter is only used when ServiceType is HTTP. The front and rear parameter names can be different.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name?: string;
  /**
  * The backend service parameter location of the API, such as head. This parameter is only used when ServiceType is HTTP. The parameter positions at the front and rear ends can be configured differently.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#position ApiGatewayApi#position}
  */
  readonly position?: string;
  /**
  * Remarks on the backend service parameters of the API. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#relevant_request_parameter_desc ApiGatewayApi#relevant_request_parameter_desc}
  */
  readonly relevantRequestParameterDesc?: string;
  /**
  * The name of the front-end parameter corresponding to the backend service parameter of the API. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#relevant_request_parameter_name ApiGatewayApi#relevant_request_parameter_name}
  */
  readonly relevantRequestParameterName?: string;
  /**
  * The location of the front-end parameters corresponding to the backend service parameters of the API, such as head. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#relevant_request_parameter_position ApiGatewayApi#relevant_request_parameter_position}
  */
  readonly relevantRequestParameterPosition?: string;
  /**
  * The backend service parameter type of the API. This parameter is only used when ServiceType is HTTP.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#relevant_request_parameter_type ApiGatewayApi#relevant_request_parameter_type}
  */
  readonly relevantRequestParameterType?: string;
}

export function apiGatewayApiServiceParametersToTerraform(struct?: ApiGatewayApiServiceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
    position: cdktf.stringToTerraform(struct!.position),
    relevant_request_parameter_desc: cdktf.stringToTerraform(struct!.relevantRequestParameterDesc),
    relevant_request_parameter_name: cdktf.stringToTerraform(struct!.relevantRequestParameterName),
    relevant_request_parameter_position: cdktf.stringToTerraform(struct!.relevantRequestParameterPosition),
    relevant_request_parameter_type: cdktf.stringToTerraform(struct!.relevantRequestParameterType),
  }
}


export function apiGatewayApiServiceParametersToHclTerraform(struct?: ApiGatewayApiServiceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevant_request_parameter_desc: {
      value: cdktf.stringToHclTerraform(struct!.relevantRequestParameterDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevant_request_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.relevantRequestParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevant_request_parameter_position: {
      value: cdktf.stringToHclTerraform(struct!.relevantRequestParameterPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevant_request_parameter_type: {
      value: cdktf.stringToHclTerraform(struct!.relevantRequestParameterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiServiceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiServiceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._relevantRequestParameterDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevantRequestParameterDesc = this._relevantRequestParameterDesc;
    }
    if (this._relevantRequestParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevantRequestParameterName = this._relevantRequestParameterName;
    }
    if (this._relevantRequestParameterPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevantRequestParameterPosition = this._relevantRequestParameterPosition;
    }
    if (this._relevantRequestParameterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevantRequestParameterType = this._relevantRequestParameterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiServiceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
      this._position = undefined;
      this._relevantRequestParameterDesc = undefined;
      this._relevantRequestParameterName = undefined;
      this._relevantRequestParameterPosition = undefined;
      this._relevantRequestParameterType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
      this._position = value.position;
      this._relevantRequestParameterDesc = value.relevantRequestParameterDesc;
      this._relevantRequestParameterName = value.relevantRequestParameterName;
      this._relevantRequestParameterPosition = value.relevantRequestParameterPosition;
      this._relevantRequestParameterType = value.relevantRequestParameterType;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // relevant_request_parameter_desc - computed: false, optional: true, required: false
  private _relevantRequestParameterDesc?: string; 
  public get relevantRequestParameterDesc() {
    return this.getStringAttribute('relevant_request_parameter_desc');
  }
  public set relevantRequestParameterDesc(value: string) {
    this._relevantRequestParameterDesc = value;
  }
  public resetRelevantRequestParameterDesc() {
    this._relevantRequestParameterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantRequestParameterDescInput() {
    return this._relevantRequestParameterDesc;
  }

  // relevant_request_parameter_name - computed: false, optional: true, required: false
  private _relevantRequestParameterName?: string; 
  public get relevantRequestParameterName() {
    return this.getStringAttribute('relevant_request_parameter_name');
  }
  public set relevantRequestParameterName(value: string) {
    this._relevantRequestParameterName = value;
  }
  public resetRelevantRequestParameterName() {
    this._relevantRequestParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantRequestParameterNameInput() {
    return this._relevantRequestParameterName;
  }

  // relevant_request_parameter_position - computed: false, optional: true, required: false
  private _relevantRequestParameterPosition?: string; 
  public get relevantRequestParameterPosition() {
    return this.getStringAttribute('relevant_request_parameter_position');
  }
  public set relevantRequestParameterPosition(value: string) {
    this._relevantRequestParameterPosition = value;
  }
  public resetRelevantRequestParameterPosition() {
    this._relevantRequestParameterPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantRequestParameterPositionInput() {
    return this._relevantRequestParameterPosition;
  }

  // relevant_request_parameter_type - computed: false, optional: true, required: false
  private _relevantRequestParameterType?: string; 
  public get relevantRequestParameterType() {
    return this.getStringAttribute('relevant_request_parameter_type');
  }
  public set relevantRequestParameterType(value: string) {
    this._relevantRequestParameterType = value;
  }
  public resetRelevantRequestParameterType() {
    this._relevantRequestParameterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantRequestParameterTypeInput() {
    return this._relevantRequestParameterType;
  }
}

export class ApiGatewayApiServiceParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiServiceParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiServiceParametersOutputReference {
    return new ApiGatewayApiServiceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiServiceTsfHealthCheckConf {
  /**
  * Threshold percentage.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#error_threshold_percentage ApiGatewayApi#error_threshold_percentage}
  */
  readonly errorThresholdPercentage?: number;
  /**
  * Whether to initiate a health check.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#is_health_check ApiGatewayApi#is_health_check}
  */
  readonly isHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Health check threshold.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#request_volume_threshold ApiGatewayApi#request_volume_threshold}
  */
  readonly requestVolumeThreshold?: number;
  /**
  * Window size.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#sleep_window_in_milliseconds ApiGatewayApi#sleep_window_in_milliseconds}
  */
  readonly sleepWindowInMilliseconds?: number;
}

export function apiGatewayApiServiceTsfHealthCheckConfToTerraform(struct?: ApiGatewayApiServiceTsfHealthCheckConfOutputReference | ApiGatewayApiServiceTsfHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_threshold_percentage: cdktf.numberToTerraform(struct!.errorThresholdPercentage),
    is_health_check: cdktf.booleanToTerraform(struct!.isHealthCheck),
    request_volume_threshold: cdktf.numberToTerraform(struct!.requestVolumeThreshold),
    sleep_window_in_milliseconds: cdktf.numberToTerraform(struct!.sleepWindowInMilliseconds),
  }
}


export function apiGatewayApiServiceTsfHealthCheckConfToHclTerraform(struct?: ApiGatewayApiServiceTsfHealthCheckConfOutputReference | ApiGatewayApiServiceTsfHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_threshold_percentage: {
      value: cdktf.numberToHclTerraform(struct!.errorThresholdPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_health_check: {
      value: cdktf.booleanToHclTerraform(struct!.isHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_volume_threshold: {
      value: cdktf.numberToHclTerraform(struct!.requestVolumeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sleep_window_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.sleepWindowInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiServiceTsfHealthCheckConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiServiceTsfHealthCheckConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorThresholdPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorThresholdPercentage = this._errorThresholdPercentage;
    }
    if (this._isHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthCheck = this._isHealthCheck;
    }
    if (this._requestVolumeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestVolumeThreshold = this._requestVolumeThreshold;
    }
    if (this._sleepWindowInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sleepWindowInMilliseconds = this._sleepWindowInMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiServiceTsfHealthCheckConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorThresholdPercentage = undefined;
      this._isHealthCheck = undefined;
      this._requestVolumeThreshold = undefined;
      this._sleepWindowInMilliseconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorThresholdPercentage = value.errorThresholdPercentage;
      this._isHealthCheck = value.isHealthCheck;
      this._requestVolumeThreshold = value.requestVolumeThreshold;
      this._sleepWindowInMilliseconds = value.sleepWindowInMilliseconds;
    }
  }

  // error_threshold_percentage - computed: false, optional: true, required: false
  private _errorThresholdPercentage?: number; 
  public get errorThresholdPercentage() {
    return this.getNumberAttribute('error_threshold_percentage');
  }
  public set errorThresholdPercentage(value: number) {
    this._errorThresholdPercentage = value;
  }
  public resetErrorThresholdPercentage() {
    this._errorThresholdPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorThresholdPercentageInput() {
    return this._errorThresholdPercentage;
  }

  // is_health_check - computed: false, optional: true, required: false
  private _isHealthCheck?: boolean | cdktf.IResolvable; 
  public get isHealthCheck() {
    return this.getBooleanAttribute('is_health_check');
  }
  public set isHealthCheck(value: boolean | cdktf.IResolvable) {
    this._isHealthCheck = value;
  }
  public resetIsHealthCheck() {
    this._isHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthCheckInput() {
    return this._isHealthCheck;
  }

  // request_volume_threshold - computed: false, optional: true, required: false
  private _requestVolumeThreshold?: number; 
  public get requestVolumeThreshold() {
    return this.getNumberAttribute('request_volume_threshold');
  }
  public set requestVolumeThreshold(value: number) {
    this._requestVolumeThreshold = value;
  }
  public resetRequestVolumeThreshold() {
    this._requestVolumeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVolumeThresholdInput() {
    return this._requestVolumeThreshold;
  }

  // sleep_window_in_milliseconds - computed: false, optional: true, required: false
  private _sleepWindowInMilliseconds?: number; 
  public get sleepWindowInMilliseconds() {
    return this.getNumberAttribute('sleep_window_in_milliseconds');
  }
  public set sleepWindowInMilliseconds(value: number) {
    this._sleepWindowInMilliseconds = value;
  }
  public resetSleepWindowInMilliseconds() {
    this._sleepWindowInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepWindowInMillisecondsInput() {
    return this._sleepWindowInMilliseconds;
  }
}
export interface ApiGatewayApiServiceTsfLoadBalanceConf {
  /**
  * Is load balancing enabled.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#is_load_balance ApiGatewayApi#is_load_balance}
  */
  readonly isLoadBalance?: boolean | cdktf.IResolvable;
  /**
  * Load balancing method.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#method ApiGatewayApi#method}
  */
  readonly method?: string;
  /**
  * Whether to enable session persistence.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#session_stick_required ApiGatewayApi#session_stick_required}
  */
  readonly sessionStickRequired?: boolean | cdktf.IResolvable;
  /**
  * Session hold timeout.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#session_stick_timeout ApiGatewayApi#session_stick_timeout}
  */
  readonly sessionStickTimeout?: number;
}

export function apiGatewayApiServiceTsfLoadBalanceConfToTerraform(struct?: ApiGatewayApiServiceTsfLoadBalanceConfOutputReference | ApiGatewayApiServiceTsfLoadBalanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_load_balance: cdktf.booleanToTerraform(struct!.isLoadBalance),
    method: cdktf.stringToTerraform(struct!.method),
    session_stick_required: cdktf.booleanToTerraform(struct!.sessionStickRequired),
    session_stick_timeout: cdktf.numberToTerraform(struct!.sessionStickTimeout),
  }
}


export function apiGatewayApiServiceTsfLoadBalanceConfToHclTerraform(struct?: ApiGatewayApiServiceTsfLoadBalanceConfOutputReference | ApiGatewayApiServiceTsfLoadBalanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_load_balance: {
      value: cdktf.booleanToHclTerraform(struct!.isLoadBalance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_stick_required: {
      value: cdktf.booleanToHclTerraform(struct!.sessionStickRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_stick_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionStickTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiServiceTsfLoadBalanceConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiServiceTsfLoadBalanceConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLoadBalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLoadBalance = this._isLoadBalance;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._sessionStickRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStickRequired = this._sessionStickRequired;
    }
    if (this._sessionStickTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStickTimeout = this._sessionStickTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiServiceTsfLoadBalanceConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLoadBalance = undefined;
      this._method = undefined;
      this._sessionStickRequired = undefined;
      this._sessionStickTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLoadBalance = value.isLoadBalance;
      this._method = value.method;
      this._sessionStickRequired = value.sessionStickRequired;
      this._sessionStickTimeout = value.sessionStickTimeout;
    }
  }

  // is_load_balance - computed: false, optional: true, required: false
  private _isLoadBalance?: boolean | cdktf.IResolvable; 
  public get isLoadBalance() {
    return this.getBooleanAttribute('is_load_balance');
  }
  public set isLoadBalance(value: boolean | cdktf.IResolvable) {
    this._isLoadBalance = value;
  }
  public resetIsLoadBalance() {
    this._isLoadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoadBalanceInput() {
    return this._isLoadBalance;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // session_stick_required - computed: false, optional: true, required: false
  private _sessionStickRequired?: boolean | cdktf.IResolvable; 
  public get sessionStickRequired() {
    return this.getBooleanAttribute('session_stick_required');
  }
  public set sessionStickRequired(value: boolean | cdktf.IResolvable) {
    this._sessionStickRequired = value;
  }
  public resetSessionStickRequired() {
    this._sessionStickRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickRequiredInput() {
    return this._sessionStickRequired;
  }

  // session_stick_timeout - computed: false, optional: true, required: false
  private _sessionStickTimeout?: number; 
  public get sessionStickTimeout() {
    return this.getNumberAttribute('session_stick_timeout');
  }
  public set sessionStickTimeout(value: number) {
    this._sessionStickTimeout = value;
  }
  public resetSessionStickTimeout() {
    this._sessionStickTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickTimeoutInput() {
    return this._sessionStickTimeout;
  }
}
export interface ApiGatewayApiTargetServices {
  /**
  * docker ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#docker_ip ApiGatewayApi#docker_ip}
  */
  readonly dockerIp?: string;
  /**
  * Host IP of the CVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#host_ip ApiGatewayApi#host_ip}
  */
  readonly hostIp: string;
  /**
  * vm ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#vm_ip ApiGatewayApi#vm_ip}
  */
  readonly vmIp: string;
  /**
  * vm port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#vm_port ApiGatewayApi#vm_port}
  */
  readonly vmPort: number;
  /**
  * vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#vpc_id ApiGatewayApi#vpc_id}
  */
  readonly vpcId: string;
}

export function apiGatewayApiTargetServicesToTerraform(struct?: ApiGatewayApiTargetServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_ip: cdktf.stringToTerraform(struct!.dockerIp),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    vm_ip: cdktf.stringToTerraform(struct!.vmIp),
    vm_port: cdktf.numberToTerraform(struct!.vmPort),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function apiGatewayApiTargetServicesToHclTerraform(struct?: ApiGatewayApiTargetServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_ip: {
      value: cdktf.stringToHclTerraform(struct!.dockerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_ip: {
      value: cdktf.stringToHclTerraform(struct!.vmIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_port: {
      value: cdktf.numberToHclTerraform(struct!.vmPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiTargetServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiTargetServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerIp = this._dockerIp;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._vmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIp = this._vmIp;
    }
    if (this._vmPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmPort = this._vmPort;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiTargetServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerIp = undefined;
      this._hostIp = undefined;
      this._vmIp = undefined;
      this._vmPort = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerIp = value.dockerIp;
      this._hostIp = value.hostIp;
      this._vmIp = value.vmIp;
      this._vmPort = value.vmPort;
      this._vpcId = value.vpcId;
    }
  }

  // docker_ip - computed: false, optional: true, required: false
  private _dockerIp?: string; 
  public get dockerIp() {
    return this.getStringAttribute('docker_ip');
  }
  public set dockerIp(value: string) {
    this._dockerIp = value;
  }
  public resetDockerIp() {
    this._dockerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerIpInput() {
    return this._dockerIp;
  }

  // host_ip - computed: false, optional: false, required: true
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // vm_ip - computed: false, optional: false, required: true
  private _vmIp?: string; 
  public get vmIp() {
    return this.getStringAttribute('vm_ip');
  }
  public set vmIp(value: string) {
    this._vmIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIpInput() {
    return this._vmIp;
  }

  // vm_port - computed: false, optional: false, required: true
  private _vmPort?: number; 
  public get vmPort() {
    return this.getNumberAttribute('vm_port');
  }
  public set vmPort(value: number) {
    this._vmPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmPortInput() {
    return this._vmPort;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class ApiGatewayApiTargetServicesList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiTargetServices[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiTargetServicesOutputReference {
    return new ApiGatewayApiTargetServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiTargetServicesHealthCheckConf {
  /**
  * Threshold percentage.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#error_threshold_percentage ApiGatewayApi#error_threshold_percentage}
  */
  readonly errorThresholdPercentage?: number;
  /**
  * Whether to initiate a health check.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#is_health_check ApiGatewayApi#is_health_check}
  */
  readonly isHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Health check threshold.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#request_volume_threshold ApiGatewayApi#request_volume_threshold}
  */
  readonly requestVolumeThreshold?: number;
  /**
  * Window size.Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#sleep_window_in_milliseconds ApiGatewayApi#sleep_window_in_milliseconds}
  */
  readonly sleepWindowInMilliseconds?: number;
}

export function apiGatewayApiTargetServicesHealthCheckConfToTerraform(struct?: ApiGatewayApiTargetServicesHealthCheckConfOutputReference | ApiGatewayApiTargetServicesHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_threshold_percentage: cdktf.numberToTerraform(struct!.errorThresholdPercentage),
    is_health_check: cdktf.booleanToTerraform(struct!.isHealthCheck),
    request_volume_threshold: cdktf.numberToTerraform(struct!.requestVolumeThreshold),
    sleep_window_in_milliseconds: cdktf.numberToTerraform(struct!.sleepWindowInMilliseconds),
  }
}


export function apiGatewayApiTargetServicesHealthCheckConfToHclTerraform(struct?: ApiGatewayApiTargetServicesHealthCheckConfOutputReference | ApiGatewayApiTargetServicesHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_threshold_percentage: {
      value: cdktf.numberToHclTerraform(struct!.errorThresholdPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_health_check: {
      value: cdktf.booleanToHclTerraform(struct!.isHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_volume_threshold: {
      value: cdktf.numberToHclTerraform(struct!.requestVolumeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sleep_window_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.sleepWindowInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiTargetServicesHealthCheckConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiTargetServicesHealthCheckConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorThresholdPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorThresholdPercentage = this._errorThresholdPercentage;
    }
    if (this._isHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthCheck = this._isHealthCheck;
    }
    if (this._requestVolumeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestVolumeThreshold = this._requestVolumeThreshold;
    }
    if (this._sleepWindowInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sleepWindowInMilliseconds = this._sleepWindowInMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiTargetServicesHealthCheckConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorThresholdPercentage = undefined;
      this._isHealthCheck = undefined;
      this._requestVolumeThreshold = undefined;
      this._sleepWindowInMilliseconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorThresholdPercentage = value.errorThresholdPercentage;
      this._isHealthCheck = value.isHealthCheck;
      this._requestVolumeThreshold = value.requestVolumeThreshold;
      this._sleepWindowInMilliseconds = value.sleepWindowInMilliseconds;
    }
  }

  // error_threshold_percentage - computed: false, optional: true, required: false
  private _errorThresholdPercentage?: number; 
  public get errorThresholdPercentage() {
    return this.getNumberAttribute('error_threshold_percentage');
  }
  public set errorThresholdPercentage(value: number) {
    this._errorThresholdPercentage = value;
  }
  public resetErrorThresholdPercentage() {
    this._errorThresholdPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorThresholdPercentageInput() {
    return this._errorThresholdPercentage;
  }

  // is_health_check - computed: false, optional: true, required: false
  private _isHealthCheck?: boolean | cdktf.IResolvable; 
  public get isHealthCheck() {
    return this.getBooleanAttribute('is_health_check');
  }
  public set isHealthCheck(value: boolean | cdktf.IResolvable) {
    this._isHealthCheck = value;
  }
  public resetIsHealthCheck() {
    this._isHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthCheckInput() {
    return this._isHealthCheck;
  }

  // request_volume_threshold - computed: false, optional: true, required: false
  private _requestVolumeThreshold?: number; 
  public get requestVolumeThreshold() {
    return this.getNumberAttribute('request_volume_threshold');
  }
  public set requestVolumeThreshold(value: number) {
    this._requestVolumeThreshold = value;
  }
  public resetRequestVolumeThreshold() {
    this._requestVolumeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVolumeThresholdInput() {
    return this._requestVolumeThreshold;
  }

  // sleep_window_in_milliseconds - computed: false, optional: true, required: false
  private _sleepWindowInMilliseconds?: number; 
  public get sleepWindowInMilliseconds() {
    return this.getNumberAttribute('sleep_window_in_milliseconds');
  }
  public set sleepWindowInMilliseconds(value: number) {
    this._sleepWindowInMilliseconds = value;
  }
  public resetSleepWindowInMilliseconds() {
    this._sleepWindowInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepWindowInMillisecondsInput() {
    return this._sleepWindowInMilliseconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api tencentcloud_api_gateway_api}
*/
export class ApiGatewayApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayApi to import
  * @param importFromId The id of the existing ApiGatewayApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/api_gateway_api tencentcloud_api_gateway_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayApiConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiBusinessType = config.apiBusinessType;
    this._apiDesc = config.apiDesc;
    this._apiName = config.apiName;
    this._apiType = config.apiType;
    this._authRelationApiId = config.authRelationApiId;
    this._authType = config.authType;
    this._eiamAppId = config.eiamAppId;
    this._eiamAppType = config.eiamAppType;
    this._eiamAuthType = config.eiamAuthType;
    this._enableCors = config.enableCors;
    this._eventBusId = config.eventBusId;
    this._id = config.id;
    this._isBase64Encoded = config.isBase64Encoded;
    this._isDebugAfterCharge = config.isDebugAfterCharge;
    this._isDeleteResponseErrorCodes = config.isDeleteResponseErrorCodes;
    this._owner = config.owner;
    this._preLimit = config.preLimit;
    this._protocol = config.protocol;
    this._releaseLimit = config.releaseLimit;
    this._requestConfigMethod = config.requestConfigMethod;
    this._requestConfigPath = config.requestConfigPath;
    this._responseFailExample = config.responseFailExample;
    this._responseSuccessExample = config.responseSuccessExample;
    this._responseType = config.responseType;
    this._serviceConfigMethod = config.serviceConfigMethod;
    this._serviceConfigMockReturnMessage = config.serviceConfigMockReturnMessage;
    this._serviceConfigPath = config.serviceConfigPath;
    this._serviceConfigProduct = config.serviceConfigProduct;
    this._serviceConfigScfFunctionName = config.serviceConfigScfFunctionName;
    this._serviceConfigScfFunctionNamespace = config.serviceConfigScfFunctionNamespace;
    this._serviceConfigScfFunctionQualifier = config.serviceConfigScfFunctionQualifier;
    this._serviceConfigScfFunctionType = config.serviceConfigScfFunctionType;
    this._serviceConfigScfIsIntegratedResponse = config.serviceConfigScfIsIntegratedResponse;
    this._serviceConfigTimeout = config.serviceConfigTimeout;
    this._serviceConfigType = config.serviceConfigType;
    this._serviceConfigUpstreamId = config.serviceConfigUpstreamId;
    this._serviceConfigUrl = config.serviceConfigUrl;
    this._serviceConfigVpcId = config.serviceConfigVpcId;
    this._serviceConfigWebsocketCleanupFunctionName = config.serviceConfigWebsocketCleanupFunctionName;
    this._serviceConfigWebsocketCleanupFunctionNamespace = config.serviceConfigWebsocketCleanupFunctionNamespace;
    this._serviceConfigWebsocketCleanupFunctionQualifier = config.serviceConfigWebsocketCleanupFunctionQualifier;
    this._serviceConfigWebsocketRegisterFunctionName = config.serviceConfigWebsocketRegisterFunctionName;
    this._serviceConfigWebsocketRegisterFunctionNamespace = config.serviceConfigWebsocketRegisterFunctionNamespace;
    this._serviceConfigWebsocketRegisterFunctionQualifier = config.serviceConfigWebsocketRegisterFunctionQualifier;
    this._serviceConfigWebsocketTransportFunctionName = config.serviceConfigWebsocketTransportFunctionName;
    this._serviceConfigWebsocketTransportFunctionNamespace = config.serviceConfigWebsocketTransportFunctionNamespace;
    this._serviceConfigWebsocketTransportFunctionQualifier = config.serviceConfigWebsocketTransportFunctionQualifier;
    this._serviceId = config.serviceId;
    this._targetNamespaceId = config.targetNamespaceId;
    this._targetServicesLoadBalanceConf = config.targetServicesLoadBalanceConf;
    this._testLimit = config.testLimit;
    this._tokenTimeout = config.tokenTimeout;
    this._userType = config.userType;
    this._constantParameters.internalValue = config.constantParameters;
    this._microServices.internalValue = config.microServices;
    this._oauthConfig.internalValue = config.oauthConfig;
    this._requestParameters.internalValue = config.requestParameters;
    this._responseErrorCodes.internalValue = config.responseErrorCodes;
    this._serviceConfigCosConfig.internalValue = config.serviceConfigCosConfig;
    this._serviceParameters.internalValue = config.serviceParameters;
    this._serviceTsfHealthCheckConf.internalValue = config.serviceTsfHealthCheckConf;
    this._serviceTsfLoadBalanceConf.internalValue = config.serviceTsfLoadBalanceConf;
    this._targetServices.internalValue = config.targetServices;
    this._targetServicesHealthCheckConf.internalValue = config.targetServicesHealthCheckConf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_business_type - computed: true, optional: true, required: false
  private _apiBusinessType?: string; 
  public get apiBusinessType() {
    return this.getStringAttribute('api_business_type');
  }
  public set apiBusinessType(value: string) {
    this._apiBusinessType = value;
  }
  public resetApiBusinessType() {
    this._apiBusinessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBusinessTypeInput() {
    return this._apiBusinessType;
  }

  // api_desc - computed: false, optional: true, required: false
  private _apiDesc?: string; 
  public get apiDesc() {
    return this.getStringAttribute('api_desc');
  }
  public set apiDesc(value: string) {
    this._apiDesc = value;
  }
  public resetApiDesc() {
    this._apiDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDescInput() {
    return this._apiDesc;
  }

  // api_name - computed: false, optional: false, required: true
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // api_type - computed: false, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
  }

  // auth_relation_api_id - computed: true, optional: true, required: false
  private _authRelationApiId?: string; 
  public get authRelationApiId() {
    return this.getStringAttribute('auth_relation_api_id');
  }
  public set authRelationApiId(value: string) {
    this._authRelationApiId = value;
  }
  public resetAuthRelationApiId() {
    this._authRelationApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRelationApiIdInput() {
    return this._authRelationApiId;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eiam_app_id - computed: false, optional: true, required: false
  private _eiamAppId?: string; 
  public get eiamAppId() {
    return this.getStringAttribute('eiam_app_id');
  }
  public set eiamAppId(value: string) {
    this._eiamAppId = value;
  }
  public resetEiamAppId() {
    this._eiamAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eiamAppIdInput() {
    return this._eiamAppId;
  }

  // eiam_app_type - computed: false, optional: true, required: false
  private _eiamAppType?: string; 
  public get eiamAppType() {
    return this.getStringAttribute('eiam_app_type');
  }
  public set eiamAppType(value: string) {
    this._eiamAppType = value;
  }
  public resetEiamAppType() {
    this._eiamAppType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eiamAppTypeInput() {
    return this._eiamAppType;
  }

  // eiam_auth_type - computed: false, optional: true, required: false
  private _eiamAuthType?: string; 
  public get eiamAuthType() {
    return this.getStringAttribute('eiam_auth_type');
  }
  public set eiamAuthType(value: string) {
    this._eiamAuthType = value;
  }
  public resetEiamAuthType() {
    this._eiamAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eiamAuthTypeInput() {
    return this._eiamAuthType;
  }

  // enable_cors - computed: false, optional: true, required: false
  private _enableCors?: boolean | cdktf.IResolvable; 
  public get enableCors() {
    return this.getBooleanAttribute('enable_cors');
  }
  public set enableCors(value: boolean | cdktf.IResolvable) {
    this._enableCors = value;
  }
  public resetEnableCors() {
    this._enableCors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCorsInput() {
    return this._enableCors;
  }

  // event_bus_id - computed: false, optional: true, required: false
  private _eventBusId?: string; 
  public get eventBusId() {
    return this.getStringAttribute('event_bus_id');
  }
  public set eventBusId(value: string) {
    this._eventBusId = value;
  }
  public resetEventBusId() {
    this._eventBusId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusIdInput() {
    return this._eventBusId;
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

  // is_base64_encoded - computed: true, optional: true, required: false
  private _isBase64Encoded?: boolean | cdktf.IResolvable; 
  public get isBase64Encoded() {
    return this.getBooleanAttribute('is_base64_encoded');
  }
  public set isBase64Encoded(value: boolean | cdktf.IResolvable) {
    this._isBase64Encoded = value;
  }
  public resetIsBase64Encoded() {
    this._isBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBase64EncodedInput() {
    return this._isBase64Encoded;
  }

  // is_debug_after_charge - computed: true, optional: true, required: false
  private _isDebugAfterCharge?: boolean | cdktf.IResolvable; 
  public get isDebugAfterCharge() {
    return this.getBooleanAttribute('is_debug_after_charge');
  }
  public set isDebugAfterCharge(value: boolean | cdktf.IResolvable) {
    this._isDebugAfterCharge = value;
  }
  public resetIsDebugAfterCharge() {
    this._isDebugAfterCharge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDebugAfterChargeInput() {
    return this._isDebugAfterCharge;
  }

  // is_delete_response_error_codes - computed: true, optional: true, required: false
  private _isDeleteResponseErrorCodes?: boolean | cdktf.IResolvable; 
  public get isDeleteResponseErrorCodes() {
    return this.getBooleanAttribute('is_delete_response_error_codes');
  }
  public set isDeleteResponseErrorCodes(value: boolean | cdktf.IResolvable) {
    this._isDeleteResponseErrorCodes = value;
  }
  public resetIsDeleteResponseErrorCodes() {
    this._isDeleteResponseErrorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeleteResponseErrorCodesInput() {
    return this._isDeleteResponseErrorCodes;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
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

  // request_config_method - computed: false, optional: true, required: false
  private _requestConfigMethod?: string; 
  public get requestConfigMethod() {
    return this.getStringAttribute('request_config_method');
  }
  public set requestConfigMethod(value: string) {
    this._requestConfigMethod = value;
  }
  public resetRequestConfigMethod() {
    this._requestConfigMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigMethodInput() {
    return this._requestConfigMethod;
  }

  // request_config_path - computed: false, optional: false, required: true
  private _requestConfigPath?: string; 
  public get requestConfigPath() {
    return this.getStringAttribute('request_config_path');
  }
  public set requestConfigPath(value: string) {
    this._requestConfigPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigPathInput() {
    return this._requestConfigPath;
  }

  // response_fail_example - computed: true, optional: true, required: false
  private _responseFailExample?: string; 
  public get responseFailExample() {
    return this.getStringAttribute('response_fail_example');
  }
  public set responseFailExample(value: string) {
    this._responseFailExample = value;
  }
  public resetResponseFailExample() {
    this._responseFailExample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailExampleInput() {
    return this._responseFailExample;
  }

  // response_success_example - computed: true, optional: true, required: false
  private _responseSuccessExample?: string; 
  public get responseSuccessExample() {
    return this.getStringAttribute('response_success_example');
  }
  public set responseSuccessExample(value: string) {
    this._responseSuccessExample = value;
  }
  public resetResponseSuccessExample() {
    this._responseSuccessExample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSuccessExampleInput() {
    return this._responseSuccessExample;
  }

  // response_type - computed: true, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // service_config_method - computed: false, optional: true, required: false
  private _serviceConfigMethod?: string; 
  public get serviceConfigMethod() {
    return this.getStringAttribute('service_config_method');
  }
  public set serviceConfigMethod(value: string) {
    this._serviceConfigMethod = value;
  }
  public resetServiceConfigMethod() {
    this._serviceConfigMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigMethodInput() {
    return this._serviceConfigMethod;
  }

  // service_config_mock_return_message - computed: false, optional: true, required: false
  private _serviceConfigMockReturnMessage?: string; 
  public get serviceConfigMockReturnMessage() {
    return this.getStringAttribute('service_config_mock_return_message');
  }
  public set serviceConfigMockReturnMessage(value: string) {
    this._serviceConfigMockReturnMessage = value;
  }
  public resetServiceConfigMockReturnMessage() {
    this._serviceConfigMockReturnMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigMockReturnMessageInput() {
    return this._serviceConfigMockReturnMessage;
  }

  // service_config_path - computed: false, optional: true, required: false
  private _serviceConfigPath?: string; 
  public get serviceConfigPath() {
    return this.getStringAttribute('service_config_path');
  }
  public set serviceConfigPath(value: string) {
    this._serviceConfigPath = value;
  }
  public resetServiceConfigPath() {
    this._serviceConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigPathInput() {
    return this._serviceConfigPath;
  }

  // service_config_product - computed: false, optional: true, required: false
  private _serviceConfigProduct?: string; 
  public get serviceConfigProduct() {
    return this.getStringAttribute('service_config_product');
  }
  public set serviceConfigProduct(value: string) {
    this._serviceConfigProduct = value;
  }
  public resetServiceConfigProduct() {
    this._serviceConfigProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigProductInput() {
    return this._serviceConfigProduct;
  }

  // service_config_scf_function_name - computed: false, optional: true, required: false
  private _serviceConfigScfFunctionName?: string; 
  public get serviceConfigScfFunctionName() {
    return this.getStringAttribute('service_config_scf_function_name');
  }
  public set serviceConfigScfFunctionName(value: string) {
    this._serviceConfigScfFunctionName = value;
  }
  public resetServiceConfigScfFunctionName() {
    this._serviceConfigScfFunctionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigScfFunctionNameInput() {
    return this._serviceConfigScfFunctionName;
  }

  // service_config_scf_function_namespace - computed: false, optional: true, required: false
  private _serviceConfigScfFunctionNamespace?: string; 
  public get serviceConfigScfFunctionNamespace() {
    return this.getStringAttribute('service_config_scf_function_namespace');
  }
  public set serviceConfigScfFunctionNamespace(value: string) {
    this._serviceConfigScfFunctionNamespace = value;
  }
  public resetServiceConfigScfFunctionNamespace() {
    this._serviceConfigScfFunctionNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigScfFunctionNamespaceInput() {
    return this._serviceConfigScfFunctionNamespace;
  }

  // service_config_scf_function_qualifier - computed: false, optional: true, required: false
  private _serviceConfigScfFunctionQualifier?: string; 
  public get serviceConfigScfFunctionQualifier() {
    return this.getStringAttribute('service_config_scf_function_qualifier');
  }
  public set serviceConfigScfFunctionQualifier(value: string) {
    this._serviceConfigScfFunctionQualifier = value;
  }
  public resetServiceConfigScfFunctionQualifier() {
    this._serviceConfigScfFunctionQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigScfFunctionQualifierInput() {
    return this._serviceConfigScfFunctionQualifier;
  }

  // service_config_scf_function_type - computed: false, optional: true, required: false
  private _serviceConfigScfFunctionType?: string; 
  public get serviceConfigScfFunctionType() {
    return this.getStringAttribute('service_config_scf_function_type');
  }
  public set serviceConfigScfFunctionType(value: string) {
    this._serviceConfigScfFunctionType = value;
  }
  public resetServiceConfigScfFunctionType() {
    this._serviceConfigScfFunctionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigScfFunctionTypeInput() {
    return this._serviceConfigScfFunctionType;
  }

  // service_config_scf_is_integrated_response - computed: false, optional: true, required: false
  private _serviceConfigScfIsIntegratedResponse?: boolean | cdktf.IResolvable; 
  public get serviceConfigScfIsIntegratedResponse() {
    return this.getBooleanAttribute('service_config_scf_is_integrated_response');
  }
  public set serviceConfigScfIsIntegratedResponse(value: boolean | cdktf.IResolvable) {
    this._serviceConfigScfIsIntegratedResponse = value;
  }
  public resetServiceConfigScfIsIntegratedResponse() {
    this._serviceConfigScfIsIntegratedResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigScfIsIntegratedResponseInput() {
    return this._serviceConfigScfIsIntegratedResponse;
  }

  // service_config_timeout - computed: false, optional: true, required: false
  private _serviceConfigTimeout?: number; 
  public get serviceConfigTimeout() {
    return this.getNumberAttribute('service_config_timeout');
  }
  public set serviceConfigTimeout(value: number) {
    this._serviceConfigTimeout = value;
  }
  public resetServiceConfigTimeout() {
    this._serviceConfigTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigTimeoutInput() {
    return this._serviceConfigTimeout;
  }

  // service_config_type - computed: false, optional: true, required: false
  private _serviceConfigType?: string; 
  public get serviceConfigType() {
    return this.getStringAttribute('service_config_type');
  }
  public set serviceConfigType(value: string) {
    this._serviceConfigType = value;
  }
  public resetServiceConfigType() {
    this._serviceConfigType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigTypeInput() {
    return this._serviceConfigType;
  }

  // service_config_upstream_id - computed: false, optional: true, required: false
  private _serviceConfigUpstreamId?: string; 
  public get serviceConfigUpstreamId() {
    return this.getStringAttribute('service_config_upstream_id');
  }
  public set serviceConfigUpstreamId(value: string) {
    this._serviceConfigUpstreamId = value;
  }
  public resetServiceConfigUpstreamId() {
    this._serviceConfigUpstreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigUpstreamIdInput() {
    return this._serviceConfigUpstreamId;
  }

  // service_config_url - computed: false, optional: true, required: false
  private _serviceConfigUrl?: string; 
  public get serviceConfigUrl() {
    return this.getStringAttribute('service_config_url');
  }
  public set serviceConfigUrl(value: string) {
    this._serviceConfigUrl = value;
  }
  public resetServiceConfigUrl() {
    this._serviceConfigUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigUrlInput() {
    return this._serviceConfigUrl;
  }

  // service_config_vpc_id - computed: false, optional: true, required: false
  private _serviceConfigVpcId?: string; 
  public get serviceConfigVpcId() {
    return this.getStringAttribute('service_config_vpc_id');
  }
  public set serviceConfigVpcId(value: string) {
    this._serviceConfigVpcId = value;
  }
  public resetServiceConfigVpcId() {
    this._serviceConfigVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigVpcIdInput() {
    return this._serviceConfigVpcId;
  }

  // service_config_websocket_cleanup_function_name - computed: false, optional: true, required: false
  private _serviceConfigWebsocketCleanupFunctionName?: string; 
  public get serviceConfigWebsocketCleanupFunctionName() {
    return this.getStringAttribute('service_config_websocket_cleanup_function_name');
  }
  public set serviceConfigWebsocketCleanupFunctionName(value: string) {
    this._serviceConfigWebsocketCleanupFunctionName = value;
  }
  public resetServiceConfigWebsocketCleanupFunctionName() {
    this._serviceConfigWebsocketCleanupFunctionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketCleanupFunctionNameInput() {
    return this._serviceConfigWebsocketCleanupFunctionName;
  }

  // service_config_websocket_cleanup_function_namespace - computed: false, optional: true, required: false
  private _serviceConfigWebsocketCleanupFunctionNamespace?: string; 
  public get serviceConfigWebsocketCleanupFunctionNamespace() {
    return this.getStringAttribute('service_config_websocket_cleanup_function_namespace');
  }
  public set serviceConfigWebsocketCleanupFunctionNamespace(value: string) {
    this._serviceConfigWebsocketCleanupFunctionNamespace = value;
  }
  public resetServiceConfigWebsocketCleanupFunctionNamespace() {
    this._serviceConfigWebsocketCleanupFunctionNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketCleanupFunctionNamespaceInput() {
    return this._serviceConfigWebsocketCleanupFunctionNamespace;
  }

  // service_config_websocket_cleanup_function_qualifier - computed: false, optional: true, required: false
  private _serviceConfigWebsocketCleanupFunctionQualifier?: string; 
  public get serviceConfigWebsocketCleanupFunctionQualifier() {
    return this.getStringAttribute('service_config_websocket_cleanup_function_qualifier');
  }
  public set serviceConfigWebsocketCleanupFunctionQualifier(value: string) {
    this._serviceConfigWebsocketCleanupFunctionQualifier = value;
  }
  public resetServiceConfigWebsocketCleanupFunctionQualifier() {
    this._serviceConfigWebsocketCleanupFunctionQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketCleanupFunctionQualifierInput() {
    return this._serviceConfigWebsocketCleanupFunctionQualifier;
  }

  // service_config_websocket_register_function_name - computed: false, optional: true, required: false
  private _serviceConfigWebsocketRegisterFunctionName?: string; 
  public get serviceConfigWebsocketRegisterFunctionName() {
    return this.getStringAttribute('service_config_websocket_register_function_name');
  }
  public set serviceConfigWebsocketRegisterFunctionName(value: string) {
    this._serviceConfigWebsocketRegisterFunctionName = value;
  }
  public resetServiceConfigWebsocketRegisterFunctionName() {
    this._serviceConfigWebsocketRegisterFunctionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketRegisterFunctionNameInput() {
    return this._serviceConfigWebsocketRegisterFunctionName;
  }

  // service_config_websocket_register_function_namespace - computed: false, optional: true, required: false
  private _serviceConfigWebsocketRegisterFunctionNamespace?: string; 
  public get serviceConfigWebsocketRegisterFunctionNamespace() {
    return this.getStringAttribute('service_config_websocket_register_function_namespace');
  }
  public set serviceConfigWebsocketRegisterFunctionNamespace(value: string) {
    this._serviceConfigWebsocketRegisterFunctionNamespace = value;
  }
  public resetServiceConfigWebsocketRegisterFunctionNamespace() {
    this._serviceConfigWebsocketRegisterFunctionNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketRegisterFunctionNamespaceInput() {
    return this._serviceConfigWebsocketRegisterFunctionNamespace;
  }

  // service_config_websocket_register_function_qualifier - computed: false, optional: true, required: false
  private _serviceConfigWebsocketRegisterFunctionQualifier?: string; 
  public get serviceConfigWebsocketRegisterFunctionQualifier() {
    return this.getStringAttribute('service_config_websocket_register_function_qualifier');
  }
  public set serviceConfigWebsocketRegisterFunctionQualifier(value: string) {
    this._serviceConfigWebsocketRegisterFunctionQualifier = value;
  }
  public resetServiceConfigWebsocketRegisterFunctionQualifier() {
    this._serviceConfigWebsocketRegisterFunctionQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketRegisterFunctionQualifierInput() {
    return this._serviceConfigWebsocketRegisterFunctionQualifier;
  }

  // service_config_websocket_transport_function_name - computed: false, optional: true, required: false
  private _serviceConfigWebsocketTransportFunctionName?: string; 
  public get serviceConfigWebsocketTransportFunctionName() {
    return this.getStringAttribute('service_config_websocket_transport_function_name');
  }
  public set serviceConfigWebsocketTransportFunctionName(value: string) {
    this._serviceConfigWebsocketTransportFunctionName = value;
  }
  public resetServiceConfigWebsocketTransportFunctionName() {
    this._serviceConfigWebsocketTransportFunctionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketTransportFunctionNameInput() {
    return this._serviceConfigWebsocketTransportFunctionName;
  }

  // service_config_websocket_transport_function_namespace - computed: false, optional: true, required: false
  private _serviceConfigWebsocketTransportFunctionNamespace?: string; 
  public get serviceConfigWebsocketTransportFunctionNamespace() {
    return this.getStringAttribute('service_config_websocket_transport_function_namespace');
  }
  public set serviceConfigWebsocketTransportFunctionNamespace(value: string) {
    this._serviceConfigWebsocketTransportFunctionNamespace = value;
  }
  public resetServiceConfigWebsocketTransportFunctionNamespace() {
    this._serviceConfigWebsocketTransportFunctionNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketTransportFunctionNamespaceInput() {
    return this._serviceConfigWebsocketTransportFunctionNamespace;
  }

  // service_config_websocket_transport_function_qualifier - computed: false, optional: true, required: false
  private _serviceConfigWebsocketTransportFunctionQualifier?: string; 
  public get serviceConfigWebsocketTransportFunctionQualifier() {
    return this.getStringAttribute('service_config_websocket_transport_function_qualifier');
  }
  public set serviceConfigWebsocketTransportFunctionQualifier(value: string) {
    this._serviceConfigWebsocketTransportFunctionQualifier = value;
  }
  public resetServiceConfigWebsocketTransportFunctionQualifier() {
    this._serviceConfigWebsocketTransportFunctionQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigWebsocketTransportFunctionQualifierInput() {
    return this._serviceConfigWebsocketTransportFunctionQualifier;
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

  // target_namespace_id - computed: false, optional: true, required: false
  private _targetNamespaceId?: string; 
  public get targetNamespaceId() {
    return this.getStringAttribute('target_namespace_id');
  }
  public set targetNamespaceId(value: string) {
    this._targetNamespaceId = value;
  }
  public resetTargetNamespaceId() {
    this._targetNamespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceIdInput() {
    return this._targetNamespaceId;
  }

  // target_services_load_balance_conf - computed: false, optional: true, required: false
  private _targetServicesLoadBalanceConf?: number; 
  public get targetServicesLoadBalanceConf() {
    return this.getNumberAttribute('target_services_load_balance_conf');
  }
  public set targetServicesLoadBalanceConf(value: number) {
    this._targetServicesLoadBalanceConf = value;
  }
  public resetTargetServicesLoadBalanceConf() {
    this._targetServicesLoadBalanceConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServicesLoadBalanceConfInput() {
    return this._targetServicesLoadBalanceConf;
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

  // token_timeout - computed: false, optional: true, required: false
  private _tokenTimeout?: number; 
  public get tokenTimeout() {
    return this.getNumberAttribute('token_timeout');
  }
  public set tokenTimeout(value: number) {
    this._tokenTimeout = value;
  }
  public resetTokenTimeout() {
    this._tokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTimeoutInput() {
    return this._tokenTimeout;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // constant_parameters - computed: false, optional: true, required: false
  private _constantParameters = new ApiGatewayApiConstantParametersList(this, "constant_parameters", true);
  public get constantParameters() {
    return this._constantParameters;
  }
  public putConstantParameters(value: ApiGatewayApiConstantParameters[] | cdktf.IResolvable) {
    this._constantParameters.internalValue = value;
  }
  public resetConstantParameters() {
    this._constantParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantParametersInput() {
    return this._constantParameters.internalValue;
  }

  // micro_services - computed: false, optional: true, required: false
  private _microServices = new ApiGatewayApiMicroServicesList(this, "micro_services", true);
  public get microServices() {
    return this._microServices;
  }
  public putMicroServices(value: ApiGatewayApiMicroServices[] | cdktf.IResolvable) {
    this._microServices.internalValue = value;
  }
  public resetMicroServices() {
    this._microServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microServicesInput() {
    return this._microServices.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new ApiGatewayApiOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: ApiGatewayApiOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters = new ApiGatewayApiRequestParametersList(this, "request_parameters", true);
  public get requestParameters() {
    return this._requestParameters;
  }
  public putRequestParameters(value: ApiGatewayApiRequestParameters[] | cdktf.IResolvable) {
    this._requestParameters.internalValue = value;
  }
  public resetRequestParameters() {
    this._requestParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters.internalValue;
  }

  // response_error_codes - computed: false, optional: true, required: false
  private _responseErrorCodes = new ApiGatewayApiResponseErrorCodesList(this, "response_error_codes", true);
  public get responseErrorCodes() {
    return this._responseErrorCodes;
  }
  public putResponseErrorCodes(value: ApiGatewayApiResponseErrorCodes[] | cdktf.IResolvable) {
    this._responseErrorCodes.internalValue = value;
  }
  public resetResponseErrorCodes() {
    this._responseErrorCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseErrorCodesInput() {
    return this._responseErrorCodes.internalValue;
  }

  // service_config_cos_config - computed: false, optional: true, required: false
  private _serviceConfigCosConfig = new ApiGatewayApiServiceConfigCosConfigOutputReference(this, "service_config_cos_config");
  public get serviceConfigCosConfig() {
    return this._serviceConfigCosConfig;
  }
  public putServiceConfigCosConfig(value: ApiGatewayApiServiceConfigCosConfig) {
    this._serviceConfigCosConfig.internalValue = value;
  }
  public resetServiceConfigCosConfig() {
    this._serviceConfigCosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigCosConfigInput() {
    return this._serviceConfigCosConfig.internalValue;
  }

  // service_parameters - computed: false, optional: true, required: false
  private _serviceParameters = new ApiGatewayApiServiceParametersList(this, "service_parameters", false);
  public get serviceParameters() {
    return this._serviceParameters;
  }
  public putServiceParameters(value: ApiGatewayApiServiceParameters[] | cdktf.IResolvable) {
    this._serviceParameters.internalValue = value;
  }
  public resetServiceParameters() {
    this._serviceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceParametersInput() {
    return this._serviceParameters.internalValue;
  }

  // service_tsf_health_check_conf - computed: false, optional: true, required: false
  private _serviceTsfHealthCheckConf = new ApiGatewayApiServiceTsfHealthCheckConfOutputReference(this, "service_tsf_health_check_conf");
  public get serviceTsfHealthCheckConf() {
    return this._serviceTsfHealthCheckConf;
  }
  public putServiceTsfHealthCheckConf(value: ApiGatewayApiServiceTsfHealthCheckConf) {
    this._serviceTsfHealthCheckConf.internalValue = value;
  }
  public resetServiceTsfHealthCheckConf() {
    this._serviceTsfHealthCheckConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTsfHealthCheckConfInput() {
    return this._serviceTsfHealthCheckConf.internalValue;
  }

  // service_tsf_load_balance_conf - computed: false, optional: true, required: false
  private _serviceTsfLoadBalanceConf = new ApiGatewayApiServiceTsfLoadBalanceConfOutputReference(this, "service_tsf_load_balance_conf");
  public get serviceTsfLoadBalanceConf() {
    return this._serviceTsfLoadBalanceConf;
  }
  public putServiceTsfLoadBalanceConf(value: ApiGatewayApiServiceTsfLoadBalanceConf) {
    this._serviceTsfLoadBalanceConf.internalValue = value;
  }
  public resetServiceTsfLoadBalanceConf() {
    this._serviceTsfLoadBalanceConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTsfLoadBalanceConfInput() {
    return this._serviceTsfLoadBalanceConf.internalValue;
  }

  // target_services - computed: false, optional: true, required: false
  private _targetServices = new ApiGatewayApiTargetServicesList(this, "target_services", false);
  public get targetServices() {
    return this._targetServices;
  }
  public putTargetServices(value: ApiGatewayApiTargetServices[] | cdktf.IResolvable) {
    this._targetServices.internalValue = value;
  }
  public resetTargetServices() {
    this._targetServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServicesInput() {
    return this._targetServices.internalValue;
  }

  // target_services_health_check_conf - computed: false, optional: true, required: false
  private _targetServicesHealthCheckConf = new ApiGatewayApiTargetServicesHealthCheckConfOutputReference(this, "target_services_health_check_conf");
  public get targetServicesHealthCheckConf() {
    return this._targetServicesHealthCheckConf;
  }
  public putTargetServicesHealthCheckConf(value: ApiGatewayApiTargetServicesHealthCheckConf) {
    this._targetServicesHealthCheckConf.internalValue = value;
  }
  public resetTargetServicesHealthCheckConf() {
    this._targetServicesHealthCheckConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServicesHealthCheckConfInput() {
    return this._targetServicesHealthCheckConf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_business_type: cdktf.stringToTerraform(this._apiBusinessType),
      api_desc: cdktf.stringToTerraform(this._apiDesc),
      api_name: cdktf.stringToTerraform(this._apiName),
      api_type: cdktf.stringToTerraform(this._apiType),
      auth_relation_api_id: cdktf.stringToTerraform(this._authRelationApiId),
      auth_type: cdktf.stringToTerraform(this._authType),
      eiam_app_id: cdktf.stringToTerraform(this._eiamAppId),
      eiam_app_type: cdktf.stringToTerraform(this._eiamAppType),
      eiam_auth_type: cdktf.stringToTerraform(this._eiamAuthType),
      enable_cors: cdktf.booleanToTerraform(this._enableCors),
      event_bus_id: cdktf.stringToTerraform(this._eventBusId),
      id: cdktf.stringToTerraform(this._id),
      is_base64_encoded: cdktf.booleanToTerraform(this._isBase64Encoded),
      is_debug_after_charge: cdktf.booleanToTerraform(this._isDebugAfterCharge),
      is_delete_response_error_codes: cdktf.booleanToTerraform(this._isDeleteResponseErrorCodes),
      owner: cdktf.stringToTerraform(this._owner),
      pre_limit: cdktf.numberToTerraform(this._preLimit),
      protocol: cdktf.stringToTerraform(this._protocol),
      release_limit: cdktf.numberToTerraform(this._releaseLimit),
      request_config_method: cdktf.stringToTerraform(this._requestConfigMethod),
      request_config_path: cdktf.stringToTerraform(this._requestConfigPath),
      response_fail_example: cdktf.stringToTerraform(this._responseFailExample),
      response_success_example: cdktf.stringToTerraform(this._responseSuccessExample),
      response_type: cdktf.stringToTerraform(this._responseType),
      service_config_method: cdktf.stringToTerraform(this._serviceConfigMethod),
      service_config_mock_return_message: cdktf.stringToTerraform(this._serviceConfigMockReturnMessage),
      service_config_path: cdktf.stringToTerraform(this._serviceConfigPath),
      service_config_product: cdktf.stringToTerraform(this._serviceConfigProduct),
      service_config_scf_function_name: cdktf.stringToTerraform(this._serviceConfigScfFunctionName),
      service_config_scf_function_namespace: cdktf.stringToTerraform(this._serviceConfigScfFunctionNamespace),
      service_config_scf_function_qualifier: cdktf.stringToTerraform(this._serviceConfigScfFunctionQualifier),
      service_config_scf_function_type: cdktf.stringToTerraform(this._serviceConfigScfFunctionType),
      service_config_scf_is_integrated_response: cdktf.booleanToTerraform(this._serviceConfigScfIsIntegratedResponse),
      service_config_timeout: cdktf.numberToTerraform(this._serviceConfigTimeout),
      service_config_type: cdktf.stringToTerraform(this._serviceConfigType),
      service_config_upstream_id: cdktf.stringToTerraform(this._serviceConfigUpstreamId),
      service_config_url: cdktf.stringToTerraform(this._serviceConfigUrl),
      service_config_vpc_id: cdktf.stringToTerraform(this._serviceConfigVpcId),
      service_config_websocket_cleanup_function_name: cdktf.stringToTerraform(this._serviceConfigWebsocketCleanupFunctionName),
      service_config_websocket_cleanup_function_namespace: cdktf.stringToTerraform(this._serviceConfigWebsocketCleanupFunctionNamespace),
      service_config_websocket_cleanup_function_qualifier: cdktf.stringToTerraform(this._serviceConfigWebsocketCleanupFunctionQualifier),
      service_config_websocket_register_function_name: cdktf.stringToTerraform(this._serviceConfigWebsocketRegisterFunctionName),
      service_config_websocket_register_function_namespace: cdktf.stringToTerraform(this._serviceConfigWebsocketRegisterFunctionNamespace),
      service_config_websocket_register_function_qualifier: cdktf.stringToTerraform(this._serviceConfigWebsocketRegisterFunctionQualifier),
      service_config_websocket_transport_function_name: cdktf.stringToTerraform(this._serviceConfigWebsocketTransportFunctionName),
      service_config_websocket_transport_function_namespace: cdktf.stringToTerraform(this._serviceConfigWebsocketTransportFunctionNamespace),
      service_config_websocket_transport_function_qualifier: cdktf.stringToTerraform(this._serviceConfigWebsocketTransportFunctionQualifier),
      service_id: cdktf.stringToTerraform(this._serviceId),
      target_namespace_id: cdktf.stringToTerraform(this._targetNamespaceId),
      target_services_load_balance_conf: cdktf.numberToTerraform(this._targetServicesLoadBalanceConf),
      test_limit: cdktf.numberToTerraform(this._testLimit),
      token_timeout: cdktf.numberToTerraform(this._tokenTimeout),
      user_type: cdktf.stringToTerraform(this._userType),
      constant_parameters: cdktf.listMapper(apiGatewayApiConstantParametersToTerraform, true)(this._constantParameters.internalValue),
      micro_services: cdktf.listMapper(apiGatewayApiMicroServicesToTerraform, true)(this._microServices.internalValue),
      oauth_config: apiGatewayApiOauthConfigToTerraform(this._oauthConfig.internalValue),
      request_parameters: cdktf.listMapper(apiGatewayApiRequestParametersToTerraform, true)(this._requestParameters.internalValue),
      response_error_codes: cdktf.listMapper(apiGatewayApiResponseErrorCodesToTerraform, true)(this._responseErrorCodes.internalValue),
      service_config_cos_config: apiGatewayApiServiceConfigCosConfigToTerraform(this._serviceConfigCosConfig.internalValue),
      service_parameters: cdktf.listMapper(apiGatewayApiServiceParametersToTerraform, true)(this._serviceParameters.internalValue),
      service_tsf_health_check_conf: apiGatewayApiServiceTsfHealthCheckConfToTerraform(this._serviceTsfHealthCheckConf.internalValue),
      service_tsf_load_balance_conf: apiGatewayApiServiceTsfLoadBalanceConfToTerraform(this._serviceTsfLoadBalanceConf.internalValue),
      target_services: cdktf.listMapper(apiGatewayApiTargetServicesToTerraform, true)(this._targetServices.internalValue),
      target_services_health_check_conf: apiGatewayApiTargetServicesHealthCheckConfToTerraform(this._targetServicesHealthCheckConf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_business_type: {
        value: cdktf.stringToHclTerraform(this._apiBusinessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_desc: {
        value: cdktf.stringToHclTerraform(this._apiDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_name: {
        value: cdktf.stringToHclTerraform(this._apiName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_type: {
        value: cdktf.stringToHclTerraform(this._apiType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_relation_api_id: {
        value: cdktf.stringToHclTerraform(this._authRelationApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eiam_app_id: {
        value: cdktf.stringToHclTerraform(this._eiamAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eiam_app_type: {
        value: cdktf.stringToHclTerraform(this._eiamAppType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eiam_auth_type: {
        value: cdktf.stringToHclTerraform(this._eiamAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cors: {
        value: cdktf.booleanToHclTerraform(this._enableCors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_bus_id: {
        value: cdktf.stringToHclTerraform(this._eventBusId),
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
      is_base64_encoded: {
        value: cdktf.booleanToHclTerraform(this._isBase64Encoded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_debug_after_charge: {
        value: cdktf.booleanToHclTerraform(this._isDebugAfterCharge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_delete_response_error_codes: {
        value: cdktf.booleanToHclTerraform(this._isDeleteResponseErrorCodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      request_config_method: {
        value: cdktf.stringToHclTerraform(this._requestConfigMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_config_path: {
        value: cdktf.stringToHclTerraform(this._requestConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_fail_example: {
        value: cdktf.stringToHclTerraform(this._responseFailExample),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_success_example: {
        value: cdktf.stringToHclTerraform(this._responseSuccessExample),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_type: {
        value: cdktf.stringToHclTerraform(this._responseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_method: {
        value: cdktf.stringToHclTerraform(this._serviceConfigMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_mock_return_message: {
        value: cdktf.stringToHclTerraform(this._serviceConfigMockReturnMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_path: {
        value: cdktf.stringToHclTerraform(this._serviceConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_product: {
        value: cdktf.stringToHclTerraform(this._serviceConfigProduct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_scf_function_name: {
        value: cdktf.stringToHclTerraform(this._serviceConfigScfFunctionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_scf_function_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceConfigScfFunctionNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_scf_function_qualifier: {
        value: cdktf.stringToHclTerraform(this._serviceConfigScfFunctionQualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_scf_function_type: {
        value: cdktf.stringToHclTerraform(this._serviceConfigScfFunctionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_scf_is_integrated_response: {
        value: cdktf.booleanToHclTerraform(this._serviceConfigScfIsIntegratedResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_config_timeout: {
        value: cdktf.numberToHclTerraform(this._serviceConfigTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_config_type: {
        value: cdktf.stringToHclTerraform(this._serviceConfigType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_upstream_id: {
        value: cdktf.stringToHclTerraform(this._serviceConfigUpstreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_url: {
        value: cdktf.stringToHclTerraform(this._serviceConfigUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_vpc_id: {
        value: cdktf.stringToHclTerraform(this._serviceConfigVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_cleanup_function_name: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketCleanupFunctionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_cleanup_function_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketCleanupFunctionNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_cleanup_function_qualifier: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketCleanupFunctionQualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_register_function_name: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketRegisterFunctionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_register_function_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketRegisterFunctionNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_register_function_qualifier: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketRegisterFunctionQualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_transport_function_name: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketTransportFunctionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_transport_function_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketTransportFunctionNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_websocket_transport_function_qualifier: {
        value: cdktf.stringToHclTerraform(this._serviceConfigWebsocketTransportFunctionQualifier),
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
      target_namespace_id: {
        value: cdktf.stringToHclTerraform(this._targetNamespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_services_load_balance_conf: {
        value: cdktf.numberToHclTerraform(this._targetServicesLoadBalanceConf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      test_limit: {
        value: cdktf.numberToHclTerraform(this._testLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_timeout: {
        value: cdktf.numberToHclTerraform(this._tokenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constant_parameters: {
        value: cdktf.listMapperHcl(apiGatewayApiConstantParametersToHclTerraform, true)(this._constantParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiConstantParametersList",
      },
      micro_services: {
        value: cdktf.listMapperHcl(apiGatewayApiMicroServicesToHclTerraform, true)(this._microServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiMicroServicesList",
      },
      oauth_config: {
        value: apiGatewayApiOauthConfigToHclTerraform(this._oauthConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiOauthConfigList",
      },
      request_parameters: {
        value: cdktf.listMapperHcl(apiGatewayApiRequestParametersToHclTerraform, true)(this._requestParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiRequestParametersList",
      },
      response_error_codes: {
        value: cdktf.listMapperHcl(apiGatewayApiResponseErrorCodesToHclTerraform, true)(this._responseErrorCodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiResponseErrorCodesList",
      },
      service_config_cos_config: {
        value: apiGatewayApiServiceConfigCosConfigToHclTerraform(this._serviceConfigCosConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiServiceConfigCosConfigList",
      },
      service_parameters: {
        value: cdktf.listMapperHcl(apiGatewayApiServiceParametersToHclTerraform, true)(this._serviceParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiServiceParametersList",
      },
      service_tsf_health_check_conf: {
        value: apiGatewayApiServiceTsfHealthCheckConfToHclTerraform(this._serviceTsfHealthCheckConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiServiceTsfHealthCheckConfList",
      },
      service_tsf_load_balance_conf: {
        value: apiGatewayApiServiceTsfLoadBalanceConfToHclTerraform(this._serviceTsfLoadBalanceConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiServiceTsfLoadBalanceConfList",
      },
      target_services: {
        value: cdktf.listMapperHcl(apiGatewayApiTargetServicesToHclTerraform, true)(this._targetServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiTargetServicesList",
      },
      target_services_health_check_conf: {
        value: apiGatewayApiTargetServicesHealthCheckConfToHclTerraform(this._targetServicesHealthCheckConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiTargetServicesHealthCheckConfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
