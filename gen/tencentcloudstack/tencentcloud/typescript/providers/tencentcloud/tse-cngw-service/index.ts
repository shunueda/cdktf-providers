// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#gateway_id TseCngwService#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#id TseCngwService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#name TseCngwService#name}
  */
  readonly name: string;
  /**
  * path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#path TseCngwService#path}
  */
  readonly path: string;
  /**
  * protocol. Reference value:`https`, `http`, `tcp`, `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#protocol TseCngwService#protocol}
  */
  readonly protocol: string;
  /**
  * retry times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#retries TseCngwService#retries}
  */
  readonly retries: number;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#tags TseCngwService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * time out, unit:ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#timeout TseCngwService#timeout}
  */
  readonly timeout: number;
  /**
  * service type. Reference value:`Kubernetes`, `Registry`, `IPList`, `HostIP`, `Scf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#upstream_type TseCngwService#upstream_type}
  */
  readonly upstreamType: string;
  /**
  * upstream_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#upstream_info TseCngwService#upstream_info}
  */
  readonly upstreamInfo: TseCngwServiceUpstreamInfo;
}
export interface TseCngwServiceUpstreamInfoTargets {
  /**
  * host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#host TseCngwService#host}
  */
  readonly host: string;
  /**
  * port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#port TseCngwService#port}
  */
  readonly port: number;
  /**
  * source of target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#source TseCngwService#source}
  */
  readonly source?: string;
  /**
  * weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#weight TseCngwService#weight}
  */
  readonly weight: number;
}

export function tseCngwServiceUpstreamInfoTargetsToTerraform(struct?: TseCngwServiceUpstreamInfoTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    source: cdktf.stringToTerraform(struct!.source),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function tseCngwServiceUpstreamInfoTargetsToHclTerraform(struct?: TseCngwServiceUpstreamInfoTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class TseCngwServiceUpstreamInfoTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwServiceUpstreamInfoTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwServiceUpstreamInfoTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._source = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._source = value.source;
      this._weight = value.weight;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class TseCngwServiceUpstreamInfoTargetsList extends cdktf.ComplexList {
  public internalValue? : TseCngwServiceUpstreamInfoTargets[] | cdktf.IResolvable

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
  public get(index: number): TseCngwServiceUpstreamInfoTargetsOutputReference {
    return new TseCngwServiceUpstreamInfoTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwServiceUpstreamInfo {
  /**
  * load balance algorithm,default: `round-robin`, `least-connections` and `consisten_hashing` also support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#algorithm TseCngwService#algorithm}
  */
  readonly algorithm?: string;
  /**
  * auto scaling group port of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#auto_scaling_cvm_port TseCngwService#auto_scaling_cvm_port}
  */
  readonly autoScalingCvmPort?: number;
  /**
  * auto scaling group ID of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#auto_scaling_group_id TseCngwService#auto_scaling_group_id}
  */
  readonly autoScalingGroupId?: string;
  /**
  * hook status in auto scaling group of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#auto_scaling_hook_status TseCngwService#auto_scaling_hook_status}
  */
  readonly autoScalingHookStatus?: string;
  /**
  * tat cmd status in auto scaling group of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#auto_scaling_tat_cmd_status TseCngwService#auto_scaling_tat_cmd_status}
  */
  readonly autoScalingTatCmdStatus?: string;
  /**
  * an IP address or domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#host TseCngwService#host}
  */
  readonly host?: string;
  /**
  * namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#namespace TseCngwService#namespace}
  */
  readonly namespace?: string;
  /**
  * backend service port.valid values: `1` to `65535`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#port TseCngwService#port}
  */
  readonly port?: number;
  /**
  * exact source service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#real_source_type TseCngwService#real_source_type}
  */
  readonly realSourceType?: string;
  /**
  * scf lambda name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#scf_lambda_name TseCngwService#scf_lambda_name}
  */
  readonly scfLambdaName?: string;
  /**
  * scf lambda version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#scf_lambda_qualifier TseCngwService#scf_lambda_qualifier}
  */
  readonly scfLambdaQualifier?: string;
  /**
  * scf lambda namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#scf_namespace TseCngwService#scf_namespace}
  */
  readonly scfNamespace?: string;
  /**
  * scf lambda type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#scf_type TseCngwService#scf_type}
  */
  readonly scfType?: string;
  /**
  * the name of the service in registry or kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#service_name TseCngwService#service_name}
  */
  readonly serviceName?: string;
  /**
  * slow start time, unit: `second`, when it is enabled, weight of the node is increased from 1 to the target value gradually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#slow_start TseCngwService#slow_start}
  */
  readonly slowStart?: number;
  /**
  * service source ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#source_id TseCngwService#source_id}
  */
  readonly sourceId?: string;
  /**
  * the name of source service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#source_name TseCngwService#source_name}
  */
  readonly sourceName?: string;
  /**
  * source service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#source_type TseCngwService#source_type}
  */
  readonly sourceType?: string;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#targets TseCngwService#targets}
  */
  readonly targets?: TseCngwServiceUpstreamInfoTargets[] | cdktf.IResolvable;
}

export function tseCngwServiceUpstreamInfoToTerraform(struct?: TseCngwServiceUpstreamInfoOutputReference | TseCngwServiceUpstreamInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    auto_scaling_cvm_port: cdktf.numberToTerraform(struct!.autoScalingCvmPort),
    auto_scaling_group_id: cdktf.stringToTerraform(struct!.autoScalingGroupId),
    auto_scaling_hook_status: cdktf.stringToTerraform(struct!.autoScalingHookStatus),
    auto_scaling_tat_cmd_status: cdktf.stringToTerraform(struct!.autoScalingTatCmdStatus),
    host: cdktf.stringToTerraform(struct!.host),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    real_source_type: cdktf.stringToTerraform(struct!.realSourceType),
    scf_lambda_name: cdktf.stringToTerraform(struct!.scfLambdaName),
    scf_lambda_qualifier: cdktf.stringToTerraform(struct!.scfLambdaQualifier),
    scf_namespace: cdktf.stringToTerraform(struct!.scfNamespace),
    scf_type: cdktf.stringToTerraform(struct!.scfType),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    slow_start: cdktf.numberToTerraform(struct!.slowStart),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    targets: cdktf.listMapper(tseCngwServiceUpstreamInfoTargetsToTerraform, true)(struct!.targets),
  }
}


export function tseCngwServiceUpstreamInfoToHclTerraform(struct?: TseCngwServiceUpstreamInfoOutputReference | TseCngwServiceUpstreamInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling_cvm_port: {
      value: cdktf.numberToHclTerraform(struct!.autoScalingCvmPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_scaling_group_id: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling_hook_status: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingHookStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling_tat_cmd_status: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingTatCmdStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    real_source_type: {
      value: cdktf.stringToHclTerraform(struct!.realSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scf_lambda_name: {
      value: cdktf.stringToHclTerraform(struct!.scfLambdaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scf_lambda_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.scfLambdaQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scf_namespace: {
      value: cdktf.stringToHclTerraform(struct!.scfNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scf_type: {
      value: cdktf.stringToHclTerraform(struct!.scfType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slow_start: {
      value: cdktf.numberToHclTerraform(struct!.slowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(tseCngwServiceUpstreamInfoTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwServiceUpstreamInfoTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwServiceUpstreamInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwServiceUpstreamInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._autoScalingCvmPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingCvmPort = this._autoScalingCvmPort;
    }
    if (this._autoScalingGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingGroupId = this._autoScalingGroupId;
    }
    if (this._autoScalingHookStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingHookStatus = this._autoScalingHookStatus;
    }
    if (this._autoScalingTatCmdStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingTatCmdStatus = this._autoScalingTatCmdStatus;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._realSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.realSourceType = this._realSourceType;
    }
    if (this._scfLambdaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scfLambdaName = this._scfLambdaName;
    }
    if (this._scfLambdaQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.scfLambdaQualifier = this._scfLambdaQualifier;
    }
    if (this._scfNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.scfNamespace = this._scfNamespace;
    }
    if (this._scfType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scfType = this._scfType;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._slowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStart = this._slowStart;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwServiceUpstreamInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._autoScalingCvmPort = undefined;
      this._autoScalingGroupId = undefined;
      this._autoScalingHookStatus = undefined;
      this._autoScalingTatCmdStatus = undefined;
      this._host = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._realSourceType = undefined;
      this._scfLambdaName = undefined;
      this._scfLambdaQualifier = undefined;
      this._scfNamespace = undefined;
      this._scfType = undefined;
      this._serviceName = undefined;
      this._slowStart = undefined;
      this._sourceId = undefined;
      this._sourceName = undefined;
      this._sourceType = undefined;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._autoScalingCvmPort = value.autoScalingCvmPort;
      this._autoScalingGroupId = value.autoScalingGroupId;
      this._autoScalingHookStatus = value.autoScalingHookStatus;
      this._autoScalingTatCmdStatus = value.autoScalingTatCmdStatus;
      this._host = value.host;
      this._namespace = value.namespace;
      this._port = value.port;
      this._realSourceType = value.realSourceType;
      this._scfLambdaName = value.scfLambdaName;
      this._scfLambdaQualifier = value.scfLambdaQualifier;
      this._scfNamespace = value.scfNamespace;
      this._scfType = value.scfType;
      this._serviceName = value.serviceName;
      this._slowStart = value.slowStart;
      this._sourceId = value.sourceId;
      this._sourceName = value.sourceName;
      this._sourceType = value.sourceType;
      this._targets.internalValue = value.targets;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // auto_scaling_cvm_port - computed: false, optional: true, required: false
  private _autoScalingCvmPort?: number; 
  public get autoScalingCvmPort() {
    return this.getNumberAttribute('auto_scaling_cvm_port');
  }
  public set autoScalingCvmPort(value: number) {
    this._autoScalingCvmPort = value;
  }
  public resetAutoScalingCvmPort() {
    this._autoScalingCvmPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingCvmPortInput() {
    return this._autoScalingCvmPort;
  }

  // auto_scaling_group_id - computed: false, optional: true, required: false
  private _autoScalingGroupId?: string; 
  public get autoScalingGroupId() {
    return this.getStringAttribute('auto_scaling_group_id');
  }
  public set autoScalingGroupId(value: string) {
    this._autoScalingGroupId = value;
  }
  public resetAutoScalingGroupId() {
    this._autoScalingGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupIdInput() {
    return this._autoScalingGroupId;
  }

  // auto_scaling_hook_status - computed: false, optional: true, required: false
  private _autoScalingHookStatus?: string; 
  public get autoScalingHookStatus() {
    return this.getStringAttribute('auto_scaling_hook_status');
  }
  public set autoScalingHookStatus(value: string) {
    this._autoScalingHookStatus = value;
  }
  public resetAutoScalingHookStatus() {
    this._autoScalingHookStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingHookStatusInput() {
    return this._autoScalingHookStatus;
  }

  // auto_scaling_tat_cmd_status - computed: false, optional: true, required: false
  private _autoScalingTatCmdStatus?: string; 
  public get autoScalingTatCmdStatus() {
    return this.getStringAttribute('auto_scaling_tat_cmd_status');
  }
  public set autoScalingTatCmdStatus(value: string) {
    this._autoScalingTatCmdStatus = value;
  }
  public resetAutoScalingTatCmdStatus() {
    this._autoScalingTatCmdStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingTatCmdStatusInput() {
    return this._autoScalingTatCmdStatus;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // real_source_type - computed: true, optional: true, required: false
  private _realSourceType?: string; 
  public get realSourceType() {
    return this.getStringAttribute('real_source_type');
  }
  public set realSourceType(value: string) {
    this._realSourceType = value;
  }
  public resetRealSourceType() {
    this._realSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realSourceTypeInput() {
    return this._realSourceType;
  }

  // scf_lambda_name - computed: false, optional: true, required: false
  private _scfLambdaName?: string; 
  public get scfLambdaName() {
    return this.getStringAttribute('scf_lambda_name');
  }
  public set scfLambdaName(value: string) {
    this._scfLambdaName = value;
  }
  public resetScfLambdaName() {
    this._scfLambdaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scfLambdaNameInput() {
    return this._scfLambdaName;
  }

  // scf_lambda_qualifier - computed: false, optional: true, required: false
  private _scfLambdaQualifier?: string; 
  public get scfLambdaQualifier() {
    return this.getStringAttribute('scf_lambda_qualifier');
  }
  public set scfLambdaQualifier(value: string) {
    this._scfLambdaQualifier = value;
  }
  public resetScfLambdaQualifier() {
    this._scfLambdaQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scfLambdaQualifierInput() {
    return this._scfLambdaQualifier;
  }

  // scf_namespace - computed: false, optional: true, required: false
  private _scfNamespace?: string; 
  public get scfNamespace() {
    return this.getStringAttribute('scf_namespace');
  }
  public set scfNamespace(value: string) {
    this._scfNamespace = value;
  }
  public resetScfNamespace() {
    this._scfNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scfNamespaceInput() {
    return this._scfNamespace;
  }

  // scf_type - computed: false, optional: true, required: false
  private _scfType?: string; 
  public get scfType() {
    return this.getStringAttribute('scf_type');
  }
  public set scfType(value: string) {
    this._scfType = value;
  }
  public resetScfType() {
    this._scfType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scfTypeInput() {
    return this._scfType;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // slow_start - computed: false, optional: true, required: false
  private _slowStart?: number; 
  public get slowStart() {
    return this.getNumberAttribute('slow_start');
  }
  public set slowStart(value: number) {
    this._slowStart = value;
  }
  public resetSlowStart() {
    this._slowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartInput() {
    return this._slowStart;
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

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new TseCngwServiceUpstreamInfoTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: TseCngwServiceUpstreamInfoTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service tencentcloud_tse_cngw_service}
*/
export class TseCngwService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwService to import
  * @param importFromId The id of the existing TseCngwService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tse_cngw_service tencentcloud_tse_cngw_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwServiceConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_service',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._name = config.name;
    this._path = config.path;
    this._protocol = config.protocol;
    this._retries = config.retries;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._upstreamType = config.upstreamType;
    this._upstreamInfo.internalValue = config.upstreamInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // retries - computed: false, optional: false, required: true
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // upstream_type - computed: false, optional: false, required: true
  private _upstreamType?: string; 
  public get upstreamType() {
    return this.getStringAttribute('upstream_type');
  }
  public set upstreamType(value: string) {
    this._upstreamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamTypeInput() {
    return this._upstreamType;
  }

  // upstream_info - computed: false, optional: false, required: true
  private _upstreamInfo = new TseCngwServiceUpstreamInfoOutputReference(this, "upstream_info");
  public get upstreamInfo() {
    return this._upstreamInfo;
  }
  public putUpstreamInfo(value: TseCngwServiceUpstreamInfo) {
    this._upstreamInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInfoInput() {
    return this._upstreamInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      protocol: cdktf.stringToTerraform(this._protocol),
      retries: cdktf.numberToTerraform(this._retries),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      upstream_type: cdktf.stringToTerraform(this._upstreamType),
      upstream_info: tseCngwServiceUpstreamInfoToTerraform(this._upstreamInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upstream_type: {
        value: cdktf.stringToHclTerraform(this._upstreamType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_info: {
        value: tseCngwServiceUpstreamInfoToHclTerraform(this._upstreamInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwServiceUpstreamInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
