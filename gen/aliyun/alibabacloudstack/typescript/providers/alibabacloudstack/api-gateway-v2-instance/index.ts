// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#broker_engine_type ApiGatewayV2Instance#broker_engine_type}
  */
  readonly brokerEngineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#deploy_cluster_code ApiGatewayV2Instance#deploy_cluster_code}
  */
  readonly deployClusterCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#deploy_cluster_namespace ApiGatewayV2Instance#deploy_cluster_namespace}
  */
  readonly deployClusterNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#deploy_mode ApiGatewayV2Instance#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#edas_namespace_id ApiGatewayV2Instance#edas_namespace_id}
  */
  readonly edasNamespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#id ApiGatewayV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#ingress_class_name ApiGatewayV2Instance#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#instance_class ApiGatewayV2Instance#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#instance_name ApiGatewayV2Instance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#node_number ApiGatewayV2Instance#node_number}
  */
  readonly nodeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#prometheus_enabled ApiGatewayV2Instance#prometheus_enabled}
  */
  readonly prometheusEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#sls_enabled ApiGatewayV2Instance#sls_enabled}
  */
  readonly slsEnabled?: boolean | cdktf.IResolvable;
  /**
  * edas_app_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#edas_app_infos ApiGatewayV2Instance#edas_app_infos}
  */
  readonly edasAppInfos?: ApiGatewayV2InstanceEdasAppInfos[] | cdktf.IResolvable;
}
export interface ApiGatewayV2InstanceAccessMode {
}

export function apiGatewayV2InstanceAccessModeToTerraform(struct?: ApiGatewayV2InstanceAccessMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayV2InstanceAccessModeToHclTerraform(struct?: ApiGatewayV2InstanceAccessMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayV2InstanceAccessModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayV2InstanceAccessMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayV2InstanceAccessMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_mode_type - computed: true, optional: false, required: false
  public get accessModeType() {
    return this.getStringAttribute('access_mode_type');
  }

  // clusterip - computed: true, optional: false, required: false
  public get clusterip() {
    return cdktf.Fn.tolist(this.getListAttribute('clusterip'));
  }

  // external_ips - computed: true, optional: false, required: false
  public get externalIps() {
    return cdktf.Fn.tolist(this.getListAttribute('external_ips'));
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }

  // load_balancer_address_type - computed: true, optional: false, required: false
  public get loadBalancerAddressType() {
    return this.getStringAttribute('load_balancer_address_type');
  }

  // load_balancer_network_type - computed: true, optional: false, required: false
  public get loadBalancerNetworkType() {
    return this.getStringAttribute('load_balancer_network_type');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class ApiGatewayV2InstanceAccessModeList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayV2InstanceAccessModeOutputReference {
    return new ApiGatewayV2InstanceAccessModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayV2InstanceEdasAppInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#edas_namespace ApiGatewayV2Instance#edas_namespace}
  */
  readonly edasNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#k8s_cluster_id ApiGatewayV2Instance#k8s_cluster_id}
  */
  readonly k8SClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#k8s_namespace ApiGatewayV2Instance#k8s_namespace}
  */
  readonly k8SNamespace?: string;
}

export function apiGatewayV2InstanceEdasAppInfosToTerraform(struct?: ApiGatewayV2InstanceEdasAppInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edas_namespace: cdktf.stringToTerraform(struct!.edasNamespace),
    k8s_cluster_id: cdktf.stringToTerraform(struct!.k8SClusterId),
    k8s_namespace: cdktf.stringToTerraform(struct!.k8SNamespace),
  }
}


export function apiGatewayV2InstanceEdasAppInfosToHclTerraform(struct?: ApiGatewayV2InstanceEdasAppInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edas_namespace: {
      value: cdktf.stringToHclTerraform(struct!.edasNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.k8SClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_namespace: {
      value: cdktf.stringToHclTerraform(struct!.k8SNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayV2InstanceEdasAppInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayV2InstanceEdasAppInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edasNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.edasNamespace = this._edasNamespace;
    }
    if (this._k8SClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SClusterId = this._k8SClusterId;
    }
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayV2InstanceEdasAppInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edasNamespace = undefined;
      this._k8SClusterId = undefined;
      this._k8SNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edasNamespace = value.edasNamespace;
      this._k8SClusterId = value.k8SClusterId;
      this._k8SNamespace = value.k8SNamespace;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // edas_namespace - computed: true, optional: true, required: false
  private _edasNamespace?: string; 
  public get edasNamespace() {
    return this.getStringAttribute('edas_namespace');
  }
  public set edasNamespace(value: string) {
    this._edasNamespace = value;
  }
  public resetEdasNamespace() {
    this._edasNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasNamespaceInput() {
    return this._edasNamespace;
  }

  // k8s_cluster_id - computed: true, optional: true, required: false
  private _k8SClusterId?: string; 
  public get k8SClusterId() {
    return this.getStringAttribute('k8s_cluster_id');
  }
  public set k8SClusterId(value: string) {
    this._k8SClusterId = value;
  }
  public resetK8SClusterId() {
    this._k8SClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterIdInput() {
    return this._k8SClusterId;
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }
}

export class ApiGatewayV2InstanceEdasAppInfosList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayV2InstanceEdasAppInfos[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayV2InstanceEdasAppInfosOutputReference {
    return new ApiGatewayV2InstanceEdasAppInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance alibabacloudstack_api_gateway_v2_instance}
*/
export class ApiGatewayV2Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayV2Instance to import
  * @param importFromId The id of the existing ApiGatewayV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_instance alibabacloudstack_api_gateway_v2_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_instance',
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
    this._brokerEngineType = config.brokerEngineType;
    this._deployClusterCode = config.deployClusterCode;
    this._deployClusterNamespace = config.deployClusterNamespace;
    this._deployMode = config.deployMode;
    this._edasNamespaceId = config.edasNamespaceId;
    this._id = config.id;
    this._ingressClassName = config.ingressClassName;
    this._instanceClass = config.instanceClass;
    this._instanceName = config.instanceName;
    this._nodeNumber = config.nodeNumber;
    this._prometheusEnabled = config.prometheusEnabled;
    this._slsEnabled = config.slsEnabled;
    this._edasAppInfos.internalValue = config.edasAppInfos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: false, required: false
  private _accessMode = new ApiGatewayV2InstanceAccessModeList(this, "access_mode", true);
  public get accessMode() {
    return this._accessMode;
  }

  // broker_engine_type - computed: false, optional: true, required: false
  private _brokerEngineType?: string; 
  public get brokerEngineType() {
    return this.getStringAttribute('broker_engine_type');
  }
  public set brokerEngineType(value: string) {
    this._brokerEngineType = value;
  }
  public resetBrokerEngineType() {
    this._brokerEngineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerEngineTypeInput() {
    return this._brokerEngineType;
  }

  // broker_engine_version - computed: true, optional: false, required: false
  public get brokerEngineVersion() {
    return this.getStringAttribute('broker_engine_version');
  }

  // broker_latest_engine_version - computed: true, optional: false, required: false
  public get brokerLatestEngineVersion() {
    return this.getStringAttribute('broker_latest_engine_version');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_deploy_config - computed: true, optional: false, required: false
  private _customDeployConfig = new cdktf.StringMap(this, "custom_deploy_config");
  public get customDeployConfig() {
    return this._customDeployConfig;
  }

  // deploy_cluster_code - computed: false, optional: true, required: false
  private _deployClusterCode?: string; 
  public get deployClusterCode() {
    return this.getStringAttribute('deploy_cluster_code');
  }
  public set deployClusterCode(value: string) {
    this._deployClusterCode = value;
  }
  public resetDeployClusterCode() {
    this._deployClusterCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployClusterCodeInput() {
    return this._deployClusterCode;
  }

  // deploy_cluster_namespace - computed: true, optional: true, required: false
  private _deployClusterNamespace?: string; 
  public get deployClusterNamespace() {
    return this.getStringAttribute('deploy_cluster_namespace');
  }
  public set deployClusterNamespace(value: string) {
    this._deployClusterNamespace = value;
  }
  public resetDeployClusterNamespace() {
    this._deployClusterNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployClusterNamespaceInput() {
    return this._deployClusterNamespace;
  }

  // deploy_mode - computed: false, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // edas_app_id - computed: true, optional: false, required: false
  public get edasAppId() {
    return this.getStringAttribute('edas_app_id');
  }

  // edas_namespace_id - computed: true, optional: true, required: false
  private _edasNamespaceId?: string; 
  public get edasNamespaceId() {
    return this.getStringAttribute('edas_namespace_id');
  }
  public set edasNamespaceId(value: string) {
    this._edasNamespaceId = value;
  }
  public resetEdasNamespaceId() {
    this._edasNamespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasNamespaceIdInput() {
    return this._edasNamespaceId;
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

  // ingress_class_name - computed: true, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // instance_class - computed: false, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // k8s_cluster_id - computed: true, optional: false, required: false
  public get k8SClusterId() {
    return this.getStringAttribute('k8s_cluster_id');
  }

  // node_number - computed: false, optional: true, required: false
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  public resetNodeNumber() {
    this._nodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // prometheus_enabled - computed: true, optional: true, required: false
  private _prometheusEnabled?: boolean | cdktf.IResolvable; 
  public get prometheusEnabled() {
    return this.getBooleanAttribute('prometheus_enabled');
  }
  public set prometheusEnabled(value: boolean | cdktf.IResolvable) {
    this._prometheusEnabled = value;
  }
  public resetPrometheusEnabled() {
    this._prometheusEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusEnabledInput() {
    return this._prometheusEnabled;
  }

  // shared_instance - computed: true, optional: false, required: false
  public get sharedInstance() {
    return this.getBooleanAttribute('shared_instance');
  }

  // sls_enabled - computed: true, optional: true, required: false
  private _slsEnabled?: boolean | cdktf.IResolvable; 
  public get slsEnabled() {
    return this.getBooleanAttribute('sls_enabled');
  }
  public set slsEnabled(value: boolean | cdktf.IResolvable) {
    this._slsEnabled = value;
  }
  public resetSlsEnabled() {
    this._slsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsEnabledInput() {
    return this._slsEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tid - computed: true, optional: false, required: false
  public get tid() {
    return this.getStringAttribute('tid');
  }

  // edas_app_infos - computed: false, optional: true, required: false
  private _edasAppInfos = new ApiGatewayV2InstanceEdasAppInfosList(this, "edas_app_infos", true);
  public get edasAppInfos() {
    return this._edasAppInfos;
  }
  public putEdasAppInfos(value: ApiGatewayV2InstanceEdasAppInfos[] | cdktf.IResolvable) {
    this._edasAppInfos.internalValue = value;
  }
  public resetEdasAppInfos() {
    this._edasAppInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasAppInfosInput() {
    return this._edasAppInfos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broker_engine_type: cdktf.stringToTerraform(this._brokerEngineType),
      deploy_cluster_code: cdktf.stringToTerraform(this._deployClusterCode),
      deploy_cluster_namespace: cdktf.stringToTerraform(this._deployClusterNamespace),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      edas_namespace_id: cdktf.stringToTerraform(this._edasNamespaceId),
      id: cdktf.stringToTerraform(this._id),
      ingress_class_name: cdktf.stringToTerraform(this._ingressClassName),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      node_number: cdktf.numberToTerraform(this._nodeNumber),
      prometheus_enabled: cdktf.booleanToTerraform(this._prometheusEnabled),
      sls_enabled: cdktf.booleanToTerraform(this._slsEnabled),
      edas_app_infos: cdktf.listMapper(apiGatewayV2InstanceEdasAppInfosToTerraform, true)(this._edasAppInfos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broker_engine_type: {
        value: cdktf.stringToHclTerraform(this._brokerEngineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_cluster_code: {
        value: cdktf.stringToHclTerraform(this._deployClusterCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_cluster_namespace: {
        value: cdktf.stringToHclTerraform(this._deployClusterNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edas_namespace_id: {
        value: cdktf.stringToHclTerraform(this._edasNamespaceId),
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
      ingress_class_name: {
        value: cdktf.stringToHclTerraform(this._ingressClassName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_number: {
        value: cdktf.numberToHclTerraform(this._nodeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prometheus_enabled: {
        value: cdktf.booleanToHclTerraform(this._prometheusEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sls_enabled: {
        value: cdktf.booleanToHclTerraform(this._slsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edas_app_infos: {
        value: cdktf.listMapperHcl(apiGatewayV2InstanceEdasAppInfosToHclTerraform, true)(this._edasAppInfos.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayV2InstanceEdasAppInfosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
