// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayV2ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#description ApiGatewayV2Service#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#gw_instance_id ApiGatewayV2Service#gw_instance_id}
  */
  readonly gwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#id ApiGatewayV2Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#load_balance_type ApiGatewayV2Service#load_balance_type}
  */
  readonly loadBalanceType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#name ApiGatewayV2Service#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#protocol ApiGatewayV2Service#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#real_service_name ApiGatewayV2Service#real_service_name}
  */
  readonly realServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#service_group ApiGatewayV2Service#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#service_source_type ApiGatewayV2Service#service_source_type}
  */
  readonly serviceSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#service_version ApiGatewayV2Service#service_version}
  */
  readonly serviceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#source_group ApiGatewayV2Service#source_group}
  */
  readonly sourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#source_id ApiGatewayV2Service#source_id}
  */
  readonly sourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#upstream_type ApiGatewayV2Service#upstream_type}
  */
  readonly upstreamType?: number;
  /**
  * health_check_struct block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#health_check_struct ApiGatewayV2Service#health_check_struct}
  */
  readonly healthCheckStruct?: ApiGatewayV2ServiceHealthCheckStruct;
  /**
  * service_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#service_nodes ApiGatewayV2Service#service_nodes}
  */
  readonly serviceNodes?: ApiGatewayV2ServiceServiceNodes[] | cdktf.IResolvable;
  /**
  * sql_input_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#sql_input_parameters ApiGatewayV2Service#sql_input_parameters}
  */
  readonly sqlInputParameters?: ApiGatewayV2ServiceSqlInputParameters[] | cdktf.IResolvable;
  /**
  * sql_output_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#sql_output_parameters ApiGatewayV2Service#sql_output_parameters}
  */
  readonly sqlOutputParameters?: ApiGatewayV2ServiceSqlOutputParameters[] | cdktf.IResolvable;
}
export interface ApiGatewayV2ServiceHealthCheckStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#health_interval ApiGatewayV2Service#health_interval}
  */
  readonly healthInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#health_path ApiGatewayV2Service#health_path}
  */
  readonly healthPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#http_failures ApiGatewayV2Service#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#http_statuses ApiGatewayV2Service#http_statuses}
  */
  readonly httpStatuses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#http_successes ApiGatewayV2Service#http_successes}
  */
  readonly httpSuccesses?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#timeout ApiGatewayV2Service#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#type ApiGatewayV2Service#type}
  */
  readonly type: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#un_health_interval ApiGatewayV2Service#un_health_interval}
  */
  readonly unHealthInterval?: number;
}

export function apiGatewayV2ServiceHealthCheckStructToTerraform(struct?: ApiGatewayV2ServiceHealthCheckStructOutputReference | ApiGatewayV2ServiceHealthCheckStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_interval: cdktf.numberToTerraform(struct!.healthInterval),
    health_path: cdktf.stringToTerraform(struct!.healthPath),
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    http_statuses: cdktf.stringToTerraform(struct!.httpStatuses),
    http_successes: cdktf.numberToTerraform(struct!.httpSuccesses),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.numberToTerraform(struct!.type),
    un_health_interval: cdktf.numberToTerraform(struct!.unHealthInterval),
  }
}


export function apiGatewayV2ServiceHealthCheckStructToHclTerraform(struct?: ApiGatewayV2ServiceHealthCheckStructOutputReference | ApiGatewayV2ServiceHealthCheckStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_interval: {
      value: cdktf.numberToHclTerraform(struct!.healthInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_path: {
      value: cdktf.stringToHclTerraform(struct!.healthPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_statuses: {
      value: cdktf.stringToHclTerraform(struct!.httpStatuses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_successes: {
      value: cdktf.numberToHclTerraform(struct!.httpSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    un_health_interval: {
      value: cdktf.numberToHclTerraform(struct!.unHealthInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayV2ServiceHealthCheckStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayV2ServiceHealthCheckStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthInterval = this._healthInterval;
    }
    if (this._healthPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPath = this._healthPath;
    }
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._httpSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSuccesses = this._httpSuccesses;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unHealthInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.unHealthInterval = this._unHealthInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayV2ServiceHealthCheckStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthInterval = undefined;
      this._healthPath = undefined;
      this._httpFailures = undefined;
      this._httpStatuses = undefined;
      this._httpSuccesses = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._unHealthInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthInterval = value.healthInterval;
      this._healthPath = value.healthPath;
      this._httpFailures = value.httpFailures;
      this._httpStatuses = value.httpStatuses;
      this._httpSuccesses = value.httpSuccesses;
      this._timeout = value.timeout;
      this._type = value.type;
      this._unHealthInterval = value.unHealthInterval;
    }
  }

  // health_interval - computed: false, optional: true, required: false
  private _healthInterval?: number; 
  public get healthInterval() {
    return this.getNumberAttribute('health_interval');
  }
  public set healthInterval(value: number) {
    this._healthInterval = value;
  }
  public resetHealthInterval() {
    this._healthInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthIntervalInput() {
    return this._healthInterval;
  }

  // health_path - computed: false, optional: true, required: false
  private _healthPath?: string; 
  public get healthPath() {
    return this.getStringAttribute('health_path');
  }
  public set healthPath(value: string) {
    this._healthPath = value;
  }
  public resetHealthPath() {
    this._healthPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPathInput() {
    return this._healthPath;
  }

  // http_failures - computed: false, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // http_statuses - computed: false, optional: true, required: false
  private _httpStatuses?: string; 
  public get httpStatuses() {
    return this.getStringAttribute('http_statuses');
  }
  public set httpStatuses(value: string) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // http_successes - computed: false, optional: true, required: false
  private _httpSuccesses?: number; 
  public get httpSuccesses() {
    return this.getNumberAttribute('http_successes');
  }
  public set httpSuccesses(value: number) {
    this._httpSuccesses = value;
  }
  public resetHttpSuccesses() {
    this._httpSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessesInput() {
    return this._httpSuccesses;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // un_health_interval - computed: false, optional: true, required: false
  private _unHealthInterval?: number; 
  public get unHealthInterval() {
    return this.getNumberAttribute('un_health_interval');
  }
  public set unHealthInterval(value: number) {
    this._unHealthInterval = value;
  }
  public resetUnHealthInterval() {
    this._unHealthInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unHealthIntervalInput() {
    return this._unHealthInterval;
  }
}
export interface ApiGatewayV2ServiceServiceNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#enable ApiGatewayV2Service#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#ip ApiGatewayV2Service#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#port ApiGatewayV2Service#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#weight ApiGatewayV2Service#weight}
  */
  readonly weight?: number;
}

export function apiGatewayV2ServiceServiceNodesToTerraform(struct?: ApiGatewayV2ServiceServiceNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function apiGatewayV2ServiceServiceNodesToHclTerraform(struct?: ApiGatewayV2ServiceServiceNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayV2ServiceServiceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayV2ServiceServiceNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayV2ServiceServiceNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._ip = value.ip;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApiGatewayV2ServiceServiceNodesList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayV2ServiceServiceNodes[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayV2ServiceServiceNodesOutputReference {
    return new ApiGatewayV2ServiceServiceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayV2ServiceSqlInputParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#description ApiGatewayV2Service#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#isoptional ApiGatewayV2Service#isoptional}
  */
  readonly isoptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#original_name ApiGatewayV2Service#original_name}
  */
  readonly originalName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#sample ApiGatewayV2Service#sample}
  */
  readonly sample: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#target_name ApiGatewayV2Service#target_name}
  */
  readonly targetName: string;
}

export function apiGatewayV2ServiceSqlInputParametersToTerraform(struct?: ApiGatewayV2ServiceSqlInputParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    isoptional: cdktf.booleanToTerraform(struct!.isoptional),
    original_name: cdktf.stringToTerraform(struct!.originalName),
    sample: cdktf.stringToTerraform(struct!.sample),
    target_name: cdktf.stringToTerraform(struct!.targetName),
  }
}


export function apiGatewayV2ServiceSqlInputParametersToHclTerraform(struct?: ApiGatewayV2ServiceSqlInputParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isoptional: {
      value: cdktf.booleanToHclTerraform(struct!.isoptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    original_name: {
      value: cdktf.stringToHclTerraform(struct!.originalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample: {
      value: cdktf.stringToHclTerraform(struct!.sample),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayV2ServiceSqlInputParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayV2ServiceSqlInputParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isoptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.isoptional = this._isoptional;
    }
    if (this._originalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalName = this._originalName;
    }
    if (this._sample !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayV2ServiceSqlInputParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isoptional = undefined;
      this._originalName = undefined;
      this._sample = undefined;
      this._targetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isoptional = value.isoptional;
      this._originalName = value.originalName;
      this._sample = value.sample;
      this._targetName = value.targetName;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // isoptional - computed: false, optional: true, required: false
  private _isoptional?: boolean | cdktf.IResolvable; 
  public get isoptional() {
    return this.getBooleanAttribute('isoptional');
  }
  public set isoptional(value: boolean | cdktf.IResolvable) {
    this._isoptional = value;
  }
  public resetIsoptional() {
    this._isoptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoptionalInput() {
    return this._isoptional;
  }

  // original_name - computed: false, optional: false, required: true
  private _originalName?: string; 
  public get originalName() {
    return this.getStringAttribute('original_name');
  }
  public set originalName(value: string) {
    this._originalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalNameInput() {
    return this._originalName;
  }

  // sample - computed: false, optional: false, required: true
  private _sample?: string; 
  public get sample() {
    return this.getStringAttribute('sample');
  }
  public set sample(value: string) {
    this._sample = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample;
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }
}

export class ApiGatewayV2ServiceSqlInputParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayV2ServiceSqlInputParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayV2ServiceSqlInputParametersOutputReference {
    return new ApiGatewayV2ServiceSqlInputParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayV2ServiceSqlOutputParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#description ApiGatewayV2Service#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#isoptional ApiGatewayV2Service#isoptional}
  */
  readonly isoptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#original_name ApiGatewayV2Service#original_name}
  */
  readonly originalName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#param_type ApiGatewayV2Service#param_type}
  */
  readonly paramType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#sample ApiGatewayV2Service#sample}
  */
  readonly sample: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#target_name ApiGatewayV2Service#target_name}
  */
  readonly targetName: string;
}

export function apiGatewayV2ServiceSqlOutputParametersToTerraform(struct?: ApiGatewayV2ServiceSqlOutputParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    isoptional: cdktf.booleanToTerraform(struct!.isoptional),
    original_name: cdktf.stringToTerraform(struct!.originalName),
    param_type: cdktf.stringToTerraform(struct!.paramType),
    sample: cdktf.stringToTerraform(struct!.sample),
    target_name: cdktf.stringToTerraform(struct!.targetName),
  }
}


export function apiGatewayV2ServiceSqlOutputParametersToHclTerraform(struct?: ApiGatewayV2ServiceSqlOutputParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isoptional: {
      value: cdktf.booleanToHclTerraform(struct!.isoptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    original_name: {
      value: cdktf.stringToHclTerraform(struct!.originalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_type: {
      value: cdktf.stringToHclTerraform(struct!.paramType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample: {
      value: cdktf.stringToHclTerraform(struct!.sample),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayV2ServiceSqlOutputParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayV2ServiceSqlOutputParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isoptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.isoptional = this._isoptional;
    }
    if (this._originalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalName = this._originalName;
    }
    if (this._paramType !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramType = this._paramType;
    }
    if (this._sample !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayV2ServiceSqlOutputParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isoptional = undefined;
      this._originalName = undefined;
      this._paramType = undefined;
      this._sample = undefined;
      this._targetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isoptional = value.isoptional;
      this._originalName = value.originalName;
      this._paramType = value.paramType;
      this._sample = value.sample;
      this._targetName = value.targetName;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // isoptional - computed: false, optional: true, required: false
  private _isoptional?: boolean | cdktf.IResolvable; 
  public get isoptional() {
    return this.getBooleanAttribute('isoptional');
  }
  public set isoptional(value: boolean | cdktf.IResolvable) {
    this._isoptional = value;
  }
  public resetIsoptional() {
    this._isoptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoptionalInput() {
    return this._isoptional;
  }

  // original_name - computed: false, optional: false, required: true
  private _originalName?: string; 
  public get originalName() {
    return this.getStringAttribute('original_name');
  }
  public set originalName(value: string) {
    this._originalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalNameInput() {
    return this._originalName;
  }

  // param_type - computed: false, optional: true, required: false
  private _paramType?: string; 
  public get paramType() {
    return this.getStringAttribute('param_type');
  }
  public set paramType(value: string) {
    this._paramType = value;
  }
  public resetParamType() {
    this._paramType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramTypeInput() {
    return this._paramType;
  }

  // sample - computed: false, optional: false, required: true
  private _sample?: string; 
  public get sample() {
    return this.getStringAttribute('sample');
  }
  public set sample(value: string) {
    this._sample = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample;
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }
}

export class ApiGatewayV2ServiceSqlOutputParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayV2ServiceSqlOutputParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayV2ServiceSqlOutputParametersOutputReference {
    return new ApiGatewayV2ServiceSqlOutputParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service alibabacloudstack_api_gateway_v2_service}
*/
export class ApiGatewayV2Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayV2Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayV2Service to import
  * @param importFromId The id of the existing ApiGatewayV2Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayV2Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_service alibabacloudstack_api_gateway_v2_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayV2ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayV2ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_service',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gwInstanceId = config.gwInstanceId;
    this._id = config.id;
    this._loadBalanceType = config.loadBalanceType;
    this._name = config.name;
    this._protocol = config.protocol;
    this._realServiceName = config.realServiceName;
    this._serviceGroup = config.serviceGroup;
    this._serviceSourceType = config.serviceSourceType;
    this._serviceVersion = config.serviceVersion;
    this._sourceGroup = config.sourceGroup;
    this._sourceId = config.sourceId;
    this._upstreamType = config.upstreamType;
    this._healthCheckStruct.internalValue = config.healthCheckStruct;
    this._serviceNodes.internalValue = config.serviceNodes;
    this._sqlInputParameters.internalValue = config.sqlInputParameters;
    this._sqlOutputParameters.internalValue = config.sqlOutputParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gw_instance_id - computed: false, optional: false, required: true
  private _gwInstanceId?: string; 
  public get gwInstanceId() {
    return this.getStringAttribute('gw_instance_id');
  }
  public set gwInstanceId(value: string) {
    this._gwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInstanceIdInput() {
    return this._gwInstanceId;
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

  // load_balance_type - computed: true, optional: true, required: false
  private _loadBalanceType?: number; 
  public get loadBalanceType() {
    return this.getNumberAttribute('load_balance_type');
  }
  public set loadBalanceType(value: number) {
    this._loadBalanceType = value;
  }
  public resetLoadBalanceType() {
    this._loadBalanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceTypeInput() {
    return this._loadBalanceType;
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

  // protocol - computed: true, optional: true, required: false
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

  // real_service_name - computed: false, optional: true, required: false
  private _realServiceName?: string; 
  public get realServiceName() {
    return this.getStringAttribute('real_service_name');
  }
  public set realServiceName(value: string) {
    this._realServiceName = value;
  }
  public resetRealServiceName() {
    this._realServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServiceNameInput() {
    return this._realServiceName;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_source_type - computed: false, optional: true, required: false
  private _serviceSourceType?: string; 
  public get serviceSourceType() {
    return this.getStringAttribute('service_source_type');
  }
  public set serviceSourceType(value: string) {
    this._serviceSourceType = value;
  }
  public resetServiceSourceType() {
    this._serviceSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSourceTypeInput() {
    return this._serviceSourceType;
  }

  // service_version - computed: false, optional: true, required: false
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  public resetServiceVersion() {
    this._serviceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }

  // source_group - computed: true, optional: true, required: false
  private _sourceGroup?: string; 
  public get sourceGroup() {
    return this.getStringAttribute('source_group');
  }
  public set sourceGroup(value: string) {
    this._sourceGroup = value;
  }
  public resetSourceGroup() {
    this._sourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupInput() {
    return this._sourceGroup;
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // upstream_type - computed: true, optional: true, required: false
  private _upstreamType?: number; 
  public get upstreamType() {
    return this.getNumberAttribute('upstream_type');
  }
  public set upstreamType(value: number) {
    this._upstreamType = value;
  }
  public resetUpstreamType() {
    this._upstreamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamTypeInput() {
    return this._upstreamType;
  }

  // health_check_struct - computed: false, optional: true, required: false
  private _healthCheckStruct = new ApiGatewayV2ServiceHealthCheckStructOutputReference(this, "health_check_struct");
  public get healthCheckStruct() {
    return this._healthCheckStruct;
  }
  public putHealthCheckStruct(value: ApiGatewayV2ServiceHealthCheckStruct) {
    this._healthCheckStruct.internalValue = value;
  }
  public resetHealthCheckStruct() {
    this._healthCheckStruct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStructInput() {
    return this._healthCheckStruct.internalValue;
  }

  // service_nodes - computed: false, optional: true, required: false
  private _serviceNodes = new ApiGatewayV2ServiceServiceNodesList(this, "service_nodes", false);
  public get serviceNodes() {
    return this._serviceNodes;
  }
  public putServiceNodes(value: ApiGatewayV2ServiceServiceNodes[] | cdktf.IResolvable) {
    this._serviceNodes.internalValue = value;
  }
  public resetServiceNodes() {
    this._serviceNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodesInput() {
    return this._serviceNodes.internalValue;
  }

  // sql_input_parameters - computed: false, optional: true, required: false
  private _sqlInputParameters = new ApiGatewayV2ServiceSqlInputParametersList(this, "sql_input_parameters", true);
  public get sqlInputParameters() {
    return this._sqlInputParameters;
  }
  public putSqlInputParameters(value: ApiGatewayV2ServiceSqlInputParameters[] | cdktf.IResolvable) {
    this._sqlInputParameters.internalValue = value;
  }
  public resetSqlInputParameters() {
    this._sqlInputParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInputParametersInput() {
    return this._sqlInputParameters.internalValue;
  }

  // sql_output_parameters - computed: false, optional: true, required: false
  private _sqlOutputParameters = new ApiGatewayV2ServiceSqlOutputParametersList(this, "sql_output_parameters", true);
  public get sqlOutputParameters() {
    return this._sqlOutputParameters;
  }
  public putSqlOutputParameters(value: ApiGatewayV2ServiceSqlOutputParameters[] | cdktf.IResolvable) {
    this._sqlOutputParameters.internalValue = value;
  }
  public resetSqlOutputParameters() {
    this._sqlOutputParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlOutputParametersInput() {
    return this._sqlOutputParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gw_instance_id: cdktf.stringToTerraform(this._gwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      load_balance_type: cdktf.numberToTerraform(this._loadBalanceType),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      real_service_name: cdktf.stringToTerraform(this._realServiceName),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      service_source_type: cdktf.stringToTerraform(this._serviceSourceType),
      service_version: cdktf.stringToTerraform(this._serviceVersion),
      source_group: cdktf.stringToTerraform(this._sourceGroup),
      source_id: cdktf.stringToTerraform(this._sourceId),
      upstream_type: cdktf.numberToTerraform(this._upstreamType),
      health_check_struct: apiGatewayV2ServiceHealthCheckStructToTerraform(this._healthCheckStruct.internalValue),
      service_nodes: cdktf.listMapper(apiGatewayV2ServiceServiceNodesToTerraform, true)(this._serviceNodes.internalValue),
      sql_input_parameters: cdktf.listMapper(apiGatewayV2ServiceSqlInputParametersToTerraform, true)(this._sqlInputParameters.internalValue),
      sql_output_parameters: cdktf.listMapper(apiGatewayV2ServiceSqlOutputParametersToTerraform, true)(this._sqlOutputParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_instance_id: {
        value: cdktf.stringToHclTerraform(this._gwInstanceId),
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
      load_balance_type: {
        value: cdktf.numberToHclTerraform(this._loadBalanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      real_service_name: {
        value: cdktf.stringToHclTerraform(this._realServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_source_type: {
        value: cdktf.stringToHclTerraform(this._serviceSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_version: {
        value: cdktf.stringToHclTerraform(this._serviceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_group: {
        value: cdktf.stringToHclTerraform(this._sourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_type: {
        value: cdktf.numberToHclTerraform(this._upstreamType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_struct: {
        value: apiGatewayV2ServiceHealthCheckStructToHclTerraform(this._healthCheckStruct.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayV2ServiceHealthCheckStructList",
      },
      service_nodes: {
        value: cdktf.listMapperHcl(apiGatewayV2ServiceServiceNodesToHclTerraform, true)(this._serviceNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayV2ServiceServiceNodesList",
      },
      sql_input_parameters: {
        value: cdktf.listMapperHcl(apiGatewayV2ServiceSqlInputParametersToHclTerraform, true)(this._sqlInputParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayV2ServiceSqlInputParametersList",
      },
      sql_output_parameters: {
        value: cdktf.listMapperHcl(apiGatewayV2ServiceSqlOutputParametersToHclTerraform, true)(this._sqlOutputParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayV2ServiceSqlOutputParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
