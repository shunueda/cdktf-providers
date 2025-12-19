// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMeshServiceMeshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#cluster_ids ServiceMeshServiceMesh#cluster_ids}
  */
  readonly clusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#cluster_spec ServiceMeshServiceMesh#cluster_spec}
  */
  readonly clusterSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#customized_prometheus ServiceMeshServiceMesh#customized_prometheus}
  */
  readonly customizedPrometheus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#edition ServiceMeshServiceMesh#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#force ServiceMeshServiceMesh#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#id ServiceMeshServiceMesh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#prometheus_url ServiceMeshServiceMesh#prometheus_url}
  */
  readonly prometheusUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#service_mesh_name ServiceMeshServiceMesh#service_mesh_name}
  */
  readonly serviceMeshName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#tags ServiceMeshServiceMesh#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#version ServiceMeshServiceMesh#version}
  */
  readonly version?: string;
  /**
  * extra_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#extra_configuration ServiceMeshServiceMesh#extra_configuration}
  */
  readonly extraConfiguration?: ServiceMeshServiceMeshExtraConfiguration;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#load_balancer ServiceMeshServiceMesh#load_balancer}
  */
  readonly loadBalancer?: ServiceMeshServiceMeshLoadBalancer;
  /**
  * mesh_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#mesh_config ServiceMeshServiceMesh#mesh_config}
  */
  readonly meshConfig?: ServiceMeshServiceMeshMeshConfig;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#network ServiceMeshServiceMesh#network}
  */
  readonly network: ServiceMeshServiceMeshNetwork;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#timeouts ServiceMeshServiceMesh#timeouts}
  */
  readonly timeouts?: ServiceMeshServiceMeshTimeouts;
}
export interface ServiceMeshServiceMeshExtraConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#cr_aggregation_enabled ServiceMeshServiceMesh#cr_aggregation_enabled}
  */
  readonly crAggregationEnabled?: boolean | cdktf.IResolvable;
}

export function serviceMeshServiceMeshExtraConfigurationToTerraform(struct?: ServiceMeshServiceMeshExtraConfigurationOutputReference | ServiceMeshServiceMeshExtraConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cr_aggregation_enabled: cdktf.booleanToTerraform(struct!.crAggregationEnabled),
  }
}


export function serviceMeshServiceMeshExtraConfigurationToHclTerraform(struct?: ServiceMeshServiceMeshExtraConfigurationOutputReference | ServiceMeshServiceMeshExtraConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cr_aggregation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.crAggregationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshExtraConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshExtraConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crAggregationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.crAggregationEnabled = this._crAggregationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshExtraConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crAggregationEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crAggregationEnabled = value.crAggregationEnabled;
    }
  }

  // cr_aggregation_enabled - computed: false, optional: true, required: false
  private _crAggregationEnabled?: boolean | cdktf.IResolvable; 
  public get crAggregationEnabled() {
    return this.getBooleanAttribute('cr_aggregation_enabled');
  }
  public set crAggregationEnabled(value: boolean | cdktf.IResolvable) {
    this._crAggregationEnabled = value;
  }
  public resetCrAggregationEnabled() {
    this._crAggregationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crAggregationEnabledInput() {
    return this._crAggregationEnabled;
  }
}
export interface ServiceMeshServiceMeshLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#api_server_public_eip ServiceMeshServiceMesh#api_server_public_eip}
  */
  readonly apiServerPublicEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#pilot_public_eip ServiceMeshServiceMesh#pilot_public_eip}
  */
  readonly pilotPublicEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#pilot_public_eip_id ServiceMeshServiceMesh#pilot_public_eip_id}
  */
  readonly pilotPublicEipId?: string;
}

export function serviceMeshServiceMeshLoadBalancerToTerraform(struct?: ServiceMeshServiceMeshLoadBalancerOutputReference | ServiceMeshServiceMeshLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_public_eip: cdktf.booleanToTerraform(struct!.apiServerPublicEip),
    pilot_public_eip: cdktf.booleanToTerraform(struct!.pilotPublicEip),
    pilot_public_eip_id: cdktf.stringToTerraform(struct!.pilotPublicEipId),
  }
}


export function serviceMeshServiceMeshLoadBalancerToHclTerraform(struct?: ServiceMeshServiceMeshLoadBalancerOutputReference | ServiceMeshServiceMeshLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_public_eip: {
      value: cdktf.booleanToHclTerraform(struct!.apiServerPublicEip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pilot_public_eip: {
      value: cdktf.booleanToHclTerraform(struct!.pilotPublicEip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pilot_public_eip_id: {
      value: cdktf.stringToHclTerraform(struct!.pilotPublicEipId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerPublicEip !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPublicEip = this._apiServerPublicEip;
    }
    if (this._pilotPublicEip !== undefined) {
      hasAnyValues = true;
      internalValueResult.pilotPublicEip = this._pilotPublicEip;
    }
    if (this._pilotPublicEipId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pilotPublicEipId = this._pilotPublicEipId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServerPublicEip = undefined;
      this._pilotPublicEip = undefined;
      this._pilotPublicEipId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServerPublicEip = value.apiServerPublicEip;
      this._pilotPublicEip = value.pilotPublicEip;
      this._pilotPublicEipId = value.pilotPublicEipId;
    }
  }

  // api_server_loadbalancer_id - computed: true, optional: false, required: false
  public get apiServerLoadbalancerId() {
    return this.getStringAttribute('api_server_loadbalancer_id');
  }

  // api_server_public_eip - computed: false, optional: true, required: false
  private _apiServerPublicEip?: boolean | cdktf.IResolvable; 
  public get apiServerPublicEip() {
    return this.getBooleanAttribute('api_server_public_eip');
  }
  public set apiServerPublicEip(value: boolean | cdktf.IResolvable) {
    this._apiServerPublicEip = value;
  }
  public resetApiServerPublicEip() {
    this._apiServerPublicEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPublicEipInput() {
    return this._apiServerPublicEip;
  }

  // pilot_public_eip - computed: true, optional: true, required: false
  private _pilotPublicEip?: boolean | cdktf.IResolvable; 
  public get pilotPublicEip() {
    return this.getBooleanAttribute('pilot_public_eip');
  }
  public set pilotPublicEip(value: boolean | cdktf.IResolvable) {
    this._pilotPublicEip = value;
  }
  public resetPilotPublicEip() {
    this._pilotPublicEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pilotPublicEipInput() {
    return this._pilotPublicEip;
  }

  // pilot_public_eip_id - computed: false, optional: true, required: false
  private _pilotPublicEipId?: string; 
  public get pilotPublicEipId() {
    return this.getStringAttribute('pilot_public_eip_id');
  }
  public set pilotPublicEipId(value: string) {
    this._pilotPublicEipId = value;
  }
  public resetPilotPublicEipId() {
    this._pilotPublicEipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pilotPublicEipIdInput() {
    return this._pilotPublicEipId;
  }

  // pilot_public_loadbalancer_id - computed: true, optional: false, required: false
  public get pilotPublicLoadbalancerId() {
    return this.getStringAttribute('pilot_public_loadbalancer_id');
  }
}
export interface ServiceMeshServiceMeshMeshConfigPrometheus {
}

export function serviceMeshServiceMeshMeshConfigPrometheusToTerraform(struct?: ServiceMeshServiceMeshMeshConfigPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceMeshServiceMeshMeshConfigPrometheusToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceMeshServiceMeshMeshConfigPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMeshServiceMeshMeshConfigPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_url - computed: true, optional: false, required: false
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }

  // use_external - computed: true, optional: false, required: false
  public get useExternal() {
    return this.getBooleanAttribute('use_external');
  }
}

export class ServiceMeshServiceMeshMeshConfigPrometheusList extends cdktf.ComplexList {

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
  public get(index: number): ServiceMeshServiceMeshMeshConfigPrometheusOutputReference {
    return new ServiceMeshServiceMeshMeshConfigPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshServiceMeshMeshConfigAccessLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enabled ServiceMeshServiceMesh#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#gateway_enabled ServiceMeshServiceMesh#gateway_enabled}
  */
  readonly gatewayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#gateway_lifecycle ServiceMeshServiceMesh#gateway_lifecycle}
  */
  readonly gatewayLifecycle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#project ServiceMeshServiceMesh#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#sidecar_enabled ServiceMeshServiceMesh#sidecar_enabled}
  */
  readonly sidecarEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#sidecar_lifecycle ServiceMeshServiceMesh#sidecar_lifecycle}
  */
  readonly sidecarLifecycle?: number;
}

export function serviceMeshServiceMeshMeshConfigAccessLogToTerraform(struct?: ServiceMeshServiceMeshMeshConfigAccessLogOutputReference | ServiceMeshServiceMeshMeshConfigAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    gateway_enabled: cdktf.booleanToTerraform(struct!.gatewayEnabled),
    gateway_lifecycle: cdktf.numberToTerraform(struct!.gatewayLifecycle),
    project: cdktf.stringToTerraform(struct!.project),
    sidecar_enabled: cdktf.booleanToTerraform(struct!.sidecarEnabled),
    sidecar_lifecycle: cdktf.numberToTerraform(struct!.sidecarLifecycle),
  }
}


export function serviceMeshServiceMeshMeshConfigAccessLogToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigAccessLogOutputReference | ServiceMeshServiceMeshMeshConfigAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_lifecycle: {
      value: cdktf.numberToHclTerraform(struct!.gatewayLifecycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sidecar_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sidecarEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sidecar_lifecycle: {
      value: cdktf.numberToHclTerraform(struct!.sidecarLifecycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayEnabled = this._gatewayEnabled;
    }
    if (this._gatewayLifecycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayLifecycle = this._gatewayLifecycle;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._sidecarEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarEnabled = this._sidecarEnabled;
    }
    if (this._sidecarLifecycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarLifecycle = this._sidecarLifecycle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._gatewayEnabled = undefined;
      this._gatewayLifecycle = undefined;
      this._project = undefined;
      this._sidecarEnabled = undefined;
      this._sidecarLifecycle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._gatewayEnabled = value.gatewayEnabled;
      this._gatewayLifecycle = value.gatewayLifecycle;
      this._project = value.project;
      this._sidecarEnabled = value.sidecarEnabled;
      this._sidecarLifecycle = value.sidecarLifecycle;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // gateway_enabled - computed: false, optional: true, required: false
  private _gatewayEnabled?: boolean | cdktf.IResolvable; 
  public get gatewayEnabled() {
    return this.getBooleanAttribute('gateway_enabled');
  }
  public set gatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._gatewayEnabled = value;
  }
  public resetGatewayEnabled() {
    this._gatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayEnabledInput() {
    return this._gatewayEnabled;
  }

  // gateway_lifecycle - computed: true, optional: true, required: false
  private _gatewayLifecycle?: number; 
  public get gatewayLifecycle() {
    return this.getNumberAttribute('gateway_lifecycle');
  }
  public set gatewayLifecycle(value: number) {
    this._gatewayLifecycle = value;
  }
  public resetGatewayLifecycle() {
    this._gatewayLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayLifecycleInput() {
    return this._gatewayLifecycle;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // sidecar_enabled - computed: false, optional: true, required: false
  private _sidecarEnabled?: boolean | cdktf.IResolvable; 
  public get sidecarEnabled() {
    return this.getBooleanAttribute('sidecar_enabled');
  }
  public set sidecarEnabled(value: boolean | cdktf.IResolvable) {
    this._sidecarEnabled = value;
  }
  public resetSidecarEnabled() {
    this._sidecarEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarEnabledInput() {
    return this._sidecarEnabled;
  }

  // sidecar_lifecycle - computed: true, optional: true, required: false
  private _sidecarLifecycle?: number; 
  public get sidecarLifecycle() {
    return this.getNumberAttribute('sidecar_lifecycle');
  }
  public set sidecarLifecycle(value: number) {
    this._sidecarLifecycle = value;
  }
  public resetSidecarLifecycle() {
    this._sidecarLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarLifecycleInput() {
    return this._sidecarLifecycle;
  }
}
export interface ServiceMeshServiceMeshMeshConfigAudit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enabled ServiceMeshServiceMesh#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#project ServiceMeshServiceMesh#project}
  */
  readonly project?: string;
}

export function serviceMeshServiceMeshMeshConfigAuditToTerraform(struct?: ServiceMeshServiceMeshMeshConfigAuditOutputReference | ServiceMeshServiceMeshMeshConfigAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function serviceMeshServiceMeshMeshConfigAuditToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigAuditOutputReference | ServiceMeshServiceMeshMeshConfigAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._project = value.project;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface ServiceMeshServiceMeshMeshConfigControlPlaneLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enabled ServiceMeshServiceMesh#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#log_ttl_in_day ServiceMeshServiceMesh#log_ttl_in_day}
  */
  readonly logTtlInDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#project ServiceMeshServiceMesh#project}
  */
  readonly project?: string;
}

export function serviceMeshServiceMeshMeshConfigControlPlaneLogToTerraform(struct?: ServiceMeshServiceMeshMeshConfigControlPlaneLogOutputReference | ServiceMeshServiceMeshMeshConfigControlPlaneLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_ttl_in_day: cdktf.numberToTerraform(struct!.logTtlInDay),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function serviceMeshServiceMeshMeshConfigControlPlaneLogToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigControlPlaneLogOutputReference | ServiceMeshServiceMeshMeshConfigControlPlaneLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_ttl_in_day: {
      value: cdktf.numberToHclTerraform(struct!.logTtlInDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigControlPlaneLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigControlPlaneLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logTtlInDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTtlInDay = this._logTtlInDay;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigControlPlaneLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logTtlInDay = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logTtlInDay = value.logTtlInDay;
      this._project = value.project;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_ttl_in_day - computed: true, optional: true, required: false
  private _logTtlInDay?: number; 
  public get logTtlInDay() {
    return this.getNumberAttribute('log_ttl_in_day');
  }
  public set logTtlInDay(value: number) {
    this._logTtlInDay = value;
  }
  public resetLogTtlInDay() {
    this._logTtlInDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTtlInDayInput() {
    return this._logTtlInDay;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface ServiceMeshServiceMeshMeshConfigKialiOpenIdConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#client_id ServiceMeshServiceMesh#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#client_secret ServiceMeshServiceMesh#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#issuer_uri ServiceMeshServiceMesh#issuer_uri}
  */
  readonly issuerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#scopes ServiceMeshServiceMesh#scopes}
  */
  readonly scopes?: string[];
}

export function serviceMeshServiceMeshMeshConfigKialiOpenIdConfigToTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiOpenIdConfigOutputReference | ServiceMeshServiceMeshMeshConfigKialiOpenIdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    issuer_uri: cdktf.stringToTerraform(struct!.issuerUri),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function serviceMeshServiceMeshMeshConfigKialiOpenIdConfigToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiOpenIdConfigOutputReference | ServiceMeshServiceMeshMeshConfigKialiOpenIdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_uri: {
      value: cdktf.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigKialiOpenIdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigKialiOpenIdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigKialiOpenIdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuerUri = undefined;
      this._scopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuerUri = value.issuerUri;
      this._scopes = value.scopes;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // issuer_uri - computed: false, optional: true, required: false
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  public resetIssuerUri() {
    this._issuerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface ServiceMeshServiceMeshMeshConfigKialiRamOauthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#redirect_uris ServiceMeshServiceMesh#redirect_uris}
  */
  readonly redirectUris?: string;
}

export function serviceMeshServiceMeshMeshConfigKialiRamOauthConfigToTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiRamOauthConfigOutputReference | ServiceMeshServiceMeshMeshConfigKialiRamOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_uris: cdktf.stringToTerraform(struct!.redirectUris),
  }
}


export function serviceMeshServiceMeshMeshConfigKialiRamOauthConfigToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiRamOauthConfigOutputReference | ServiceMeshServiceMeshMeshConfigKialiRamOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_uris: {
      value: cdktf.stringToHclTerraform(struct!.redirectUris),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigKialiRamOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigKialiRamOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigKialiRamOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectUris = value.redirectUris;
    }
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string; 
  public get redirectUris() {
    return this.getStringAttribute('redirect_uris');
  }
  public set redirectUris(value: string) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }
}
export interface ServiceMeshServiceMeshMeshConfigKialiServerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#web_fqdn ServiceMeshServiceMesh#web_fqdn}
  */
  readonly webFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#web_port ServiceMeshServiceMesh#web_port}
  */
  readonly webPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#web_root ServiceMeshServiceMesh#web_root}
  */
  readonly webRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#web_schema ServiceMeshServiceMesh#web_schema}
  */
  readonly webSchema?: string;
}

export function serviceMeshServiceMeshMeshConfigKialiServerConfigToTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiServerConfigOutputReference | ServiceMeshServiceMeshMeshConfigKialiServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    web_fqdn: cdktf.stringToTerraform(struct!.webFqdn),
    web_port: cdktf.numberToTerraform(struct!.webPort),
    web_root: cdktf.stringToTerraform(struct!.webRoot),
    web_schema: cdktf.stringToTerraform(struct!.webSchema),
  }
}


export function serviceMeshServiceMeshMeshConfigKialiServerConfigToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiServerConfigOutputReference | ServiceMeshServiceMeshMeshConfigKialiServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    web_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.webFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_port: {
      value: cdktf.numberToHclTerraform(struct!.webPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_root: {
      value: cdktf.stringToHclTerraform(struct!.webRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_schema: {
      value: cdktf.stringToHclTerraform(struct!.webSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigKialiServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigKialiServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.webFqdn = this._webFqdn;
    }
    if (this._webPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPort = this._webPort;
    }
    if (this._webRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.webRoot = this._webRoot;
    }
    if (this._webSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSchema = this._webSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigKialiServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webFqdn = undefined;
      this._webPort = undefined;
      this._webRoot = undefined;
      this._webSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webFqdn = value.webFqdn;
      this._webPort = value.webPort;
      this._webRoot = value.webRoot;
      this._webSchema = value.webSchema;
    }
  }

  // web_fqdn - computed: false, optional: true, required: false
  private _webFqdn?: string; 
  public get webFqdn() {
    return this.getStringAttribute('web_fqdn');
  }
  public set webFqdn(value: string) {
    this._webFqdn = value;
  }
  public resetWebFqdn() {
    this._webFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFqdnInput() {
    return this._webFqdn;
  }

  // web_port - computed: false, optional: true, required: false
  private _webPort?: number; 
  public get webPort() {
    return this.getNumberAttribute('web_port');
  }
  public set webPort(value: number) {
    this._webPort = value;
  }
  public resetWebPort() {
    this._webPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPortInput() {
    return this._webPort;
  }

  // web_root - computed: false, optional: true, required: false
  private _webRoot?: string; 
  public get webRoot() {
    return this.getStringAttribute('web_root');
  }
  public set webRoot(value: string) {
    this._webRoot = value;
  }
  public resetWebRoot() {
    this._webRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRootInput() {
    return this._webRoot;
  }

  // web_schema - computed: false, optional: true, required: false
  private _webSchema?: string; 
  public get webSchema() {
    return this.getStringAttribute('web_schema');
  }
  public set webSchema(value: string) {
    this._webSchema = value;
  }
  public resetWebSchema() {
    this._webSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSchemaInput() {
    return this._webSchema;
  }
}
export interface ServiceMeshServiceMeshMeshConfigKiali {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#auth_strategy ServiceMeshServiceMesh#auth_strategy}
  */
  readonly authStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#custom_prometheus_url ServiceMeshServiceMesh#custom_prometheus_url}
  */
  readonly customPrometheusUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enabled ServiceMeshServiceMesh#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#integrate_clb ServiceMeshServiceMesh#integrate_clb}
  */
  readonly integrateClb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#kiali_arms_auth_tokens ServiceMeshServiceMesh#kiali_arms_auth_tokens}
  */
  readonly kialiArmsAuthTokens?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#kiali_service_annotations ServiceMeshServiceMesh#kiali_service_annotations}
  */
  readonly kialiServiceAnnotations?: string;
  /**
  * open_id_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#open_id_config ServiceMeshServiceMesh#open_id_config}
  */
  readonly openIdConfig?: ServiceMeshServiceMeshMeshConfigKialiOpenIdConfig;
  /**
  * ram_oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#ram_oauth_config ServiceMeshServiceMesh#ram_oauth_config}
  */
  readonly ramOauthConfig?: ServiceMeshServiceMeshMeshConfigKialiRamOauthConfig;
  /**
  * server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#server_config ServiceMeshServiceMesh#server_config}
  */
  readonly serverConfig?: ServiceMeshServiceMeshMeshConfigKialiServerConfig;
}

export function serviceMeshServiceMeshMeshConfigKialiToTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiOutputReference | ServiceMeshServiceMeshMeshConfigKiali): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_strategy: cdktf.stringToTerraform(struct!.authStrategy),
    custom_prometheus_url: cdktf.stringToTerraform(struct!.customPrometheusUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    integrate_clb: cdktf.booleanToTerraform(struct!.integrateClb),
    kiali_arms_auth_tokens: cdktf.stringToTerraform(struct!.kialiArmsAuthTokens),
    kiali_service_annotations: cdktf.stringToTerraform(struct!.kialiServiceAnnotations),
    open_id_config: serviceMeshServiceMeshMeshConfigKialiOpenIdConfigToTerraform(struct!.openIdConfig),
    ram_oauth_config: serviceMeshServiceMeshMeshConfigKialiRamOauthConfigToTerraform(struct!.ramOauthConfig),
    server_config: serviceMeshServiceMeshMeshConfigKialiServerConfigToTerraform(struct!.serverConfig),
  }
}


export function serviceMeshServiceMeshMeshConfigKialiToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigKialiOutputReference | ServiceMeshServiceMeshMeshConfigKiali): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_strategy: {
      value: cdktf.stringToHclTerraform(struct!.authStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_prometheus_url: {
      value: cdktf.stringToHclTerraform(struct!.customPrometheusUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integrate_clb: {
      value: cdktf.booleanToHclTerraform(struct!.integrateClb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kiali_arms_auth_tokens: {
      value: cdktf.stringToHclTerraform(struct!.kialiArmsAuthTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kiali_service_annotations: {
      value: cdktf.stringToHclTerraform(struct!.kialiServiceAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_id_config: {
      value: serviceMeshServiceMeshMeshConfigKialiOpenIdConfigToHclTerraform(struct!.openIdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigKialiOpenIdConfigList",
    },
    ram_oauth_config: {
      value: serviceMeshServiceMeshMeshConfigKialiRamOauthConfigToHclTerraform(struct!.ramOauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigKialiRamOauthConfigList",
    },
    server_config: {
      value: serviceMeshServiceMeshMeshConfigKialiServerConfigToHclTerraform(struct!.serverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigKialiServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigKialiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigKiali | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._customPrometheusUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPrometheusUrl = this._customPrometheusUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._integrateClb !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrateClb = this._integrateClb;
    }
    if (this._kialiArmsAuthTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.kialiArmsAuthTokens = this._kialiArmsAuthTokens;
    }
    if (this._kialiServiceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.kialiServiceAnnotations = this._kialiServiceAnnotations;
    }
    if (this._openIdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConfig = this._openIdConfig?.internalValue;
    }
    if (this._ramOauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramOauthConfig = this._ramOauthConfig?.internalValue;
    }
    if (this._serverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConfig = this._serverConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigKiali | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authStrategy = undefined;
      this._customPrometheusUrl = undefined;
      this._enabled = undefined;
      this._integrateClb = undefined;
      this._kialiArmsAuthTokens = undefined;
      this._kialiServiceAnnotations = undefined;
      this._openIdConfig.internalValue = undefined;
      this._ramOauthConfig.internalValue = undefined;
      this._serverConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authStrategy = value.authStrategy;
      this._customPrometheusUrl = value.customPrometheusUrl;
      this._enabled = value.enabled;
      this._integrateClb = value.integrateClb;
      this._kialiArmsAuthTokens = value.kialiArmsAuthTokens;
      this._kialiServiceAnnotations = value.kialiServiceAnnotations;
      this._openIdConfig.internalValue = value.openIdConfig;
      this._ramOauthConfig.internalValue = value.ramOauthConfig;
      this._serverConfig.internalValue = value.serverConfig;
    }
  }

  // aggregated_kiali_address - computed: true, optional: false, required: false
  public get aggregatedKialiAddress() {
    return this.getStringAttribute('aggregated_kiali_address');
  }

  // auth_strategy - computed: true, optional: true, required: false
  private _authStrategy?: string; 
  public get authStrategy() {
    return this.getStringAttribute('auth_strategy');
  }
  public set authStrategy(value: string) {
    this._authStrategy = value;
  }
  public resetAuthStrategy() {
    this._authStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyInput() {
    return this._authStrategy;
  }

  // custom_prometheus_url - computed: true, optional: true, required: false
  private _customPrometheusUrl?: string; 
  public get customPrometheusUrl() {
    return this.getStringAttribute('custom_prometheus_url');
  }
  public set customPrometheusUrl(value: string) {
    this._customPrometheusUrl = value;
  }
  public resetCustomPrometheusUrl() {
    this._customPrometheusUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPrometheusUrlInput() {
    return this._customPrometheusUrl;
  }

  // distributed_kiali_access_tokens - computed: true, optional: false, required: false
  public get distributedKialiAccessTokens() {
    return this.getStringAttribute('distributed_kiali_access_tokens');
  }

  // distributed_kiali_addresses - computed: true, optional: false, required: false
  public get distributedKialiAddresses() {
    return this.getStringAttribute('distributed_kiali_addresses');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // integrate_clb - computed: false, optional: true, required: false
  private _integrateClb?: boolean | cdktf.IResolvable; 
  public get integrateClb() {
    return this.getBooleanAttribute('integrate_clb');
  }
  public set integrateClb(value: boolean | cdktf.IResolvable) {
    this._integrateClb = value;
  }
  public resetIntegrateClb() {
    this._integrateClb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrateClbInput() {
    return this._integrateClb;
  }

  // kiali_arms_auth_tokens - computed: false, optional: true, required: false
  private _kialiArmsAuthTokens?: string; 
  public get kialiArmsAuthTokens() {
    return this.getStringAttribute('kiali_arms_auth_tokens');
  }
  public set kialiArmsAuthTokens(value: string) {
    this._kialiArmsAuthTokens = value;
  }
  public resetKialiArmsAuthTokens() {
    this._kialiArmsAuthTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kialiArmsAuthTokensInput() {
    return this._kialiArmsAuthTokens;
  }

  // kiali_service_annotations - computed: false, optional: true, required: false
  private _kialiServiceAnnotations?: string; 
  public get kialiServiceAnnotations() {
    return this.getStringAttribute('kiali_service_annotations');
  }
  public set kialiServiceAnnotations(value: string) {
    this._kialiServiceAnnotations = value;
  }
  public resetKialiServiceAnnotations() {
    this._kialiServiceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kialiServiceAnnotationsInput() {
    return this._kialiServiceAnnotations;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // use_populated_arms_prometheus - computed: true, optional: false, required: false
  public get usePopulatedArmsPrometheus() {
    return this.getBooleanAttribute('use_populated_arms_prometheus');
  }

  // open_id_config - computed: false, optional: true, required: false
  private _openIdConfig = new ServiceMeshServiceMeshMeshConfigKialiOpenIdConfigOutputReference(this, "open_id_config");
  public get openIdConfig() {
    return this._openIdConfig;
  }
  public putOpenIdConfig(value: ServiceMeshServiceMeshMeshConfigKialiOpenIdConfig) {
    this._openIdConfig.internalValue = value;
  }
  public resetOpenIdConfig() {
    this._openIdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConfigInput() {
    return this._openIdConfig.internalValue;
  }

  // ram_oauth_config - computed: false, optional: true, required: false
  private _ramOauthConfig = new ServiceMeshServiceMeshMeshConfigKialiRamOauthConfigOutputReference(this, "ram_oauth_config");
  public get ramOauthConfig() {
    return this._ramOauthConfig;
  }
  public putRamOauthConfig(value: ServiceMeshServiceMeshMeshConfigKialiRamOauthConfig) {
    this._ramOauthConfig.internalValue = value;
  }
  public resetRamOauthConfig() {
    this._ramOauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramOauthConfigInput() {
    return this._ramOauthConfig.internalValue;
  }

  // server_config - computed: false, optional: true, required: false
  private _serverConfig = new ServiceMeshServiceMeshMeshConfigKialiServerConfigOutputReference(this, "server_config");
  public get serverConfig() {
    return this._serverConfig;
  }
  public putServerConfig(value: ServiceMeshServiceMeshMeshConfigKialiServerConfig) {
    this._serverConfig.internalValue = value;
  }
  public resetServerConfig() {
    this._serverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConfigInput() {
    return this._serverConfig.internalValue;
  }
}
export interface ServiceMeshServiceMeshMeshConfigOpa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enabled ServiceMeshServiceMesh#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#limit_cpu ServiceMeshServiceMesh#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#limit_memory ServiceMeshServiceMesh#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#log_level ServiceMeshServiceMesh#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#request_cpu ServiceMeshServiceMesh#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#request_memory ServiceMeshServiceMesh#request_memory}
  */
  readonly requestMemory?: string;
}

export function serviceMeshServiceMeshMeshConfigOpaToTerraform(struct?: ServiceMeshServiceMeshMeshConfigOpaOutputReference | ServiceMeshServiceMeshMeshConfigOpa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
  }
}


export function serviceMeshServiceMeshMeshConfigOpaToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigOpaOutputReference | ServiceMeshServiceMeshMeshConfigOpa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigOpaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigOpa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigOpa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._logLevel = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._logLevel = value.logLevel;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // limit_cpu - computed: false, optional: true, required: false
  private _limitCpu?: string; 
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }
  public set limitCpu(value: string) {
    this._limitCpu = value;
  }
  public resetLimitCpu() {
    this._limitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: true, required: false
  private _limitMemory?: string; 
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }
  public set limitMemory(value: string) {
    this._limitMemory = value;
  }
  public resetLimitMemory() {
    this._limitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // request_cpu - computed: false, optional: true, required: false
  private _requestCpu?: string; 
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }
  public set requestCpu(value: string) {
    this._requestCpu = value;
  }
  public resetRequestCpu() {
    this._requestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: true, required: false
  private _requestMemory?: string; 
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
  public set requestMemory(value: string) {
    this._requestMemory = value;
  }
  public resetRequestMemory() {
    this._requestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
  }
}
export interface ServiceMeshServiceMeshMeshConfigPilot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#http10_enabled ServiceMeshServiceMesh#http10_enabled}
  */
  readonly http10Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#trace_sampling ServiceMeshServiceMesh#trace_sampling}
  */
  readonly traceSampling?: number;
}

export function serviceMeshServiceMeshMeshConfigPilotToTerraform(struct?: ServiceMeshServiceMeshMeshConfigPilotOutputReference | ServiceMeshServiceMeshMeshConfigPilot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http10_enabled: cdktf.booleanToTerraform(struct!.http10Enabled),
    trace_sampling: cdktf.numberToTerraform(struct!.traceSampling),
  }
}


export function serviceMeshServiceMeshMeshConfigPilotToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigPilotOutputReference | ServiceMeshServiceMeshMeshConfigPilot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http10_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.http10Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trace_sampling: {
      value: cdktf.numberToHclTerraform(struct!.traceSampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigPilotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigPilot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http10Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.http10Enabled = this._http10Enabled;
    }
    if (this._traceSampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceSampling = this._traceSampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigPilot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http10Enabled = undefined;
      this._traceSampling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http10Enabled = value.http10Enabled;
      this._traceSampling = value.traceSampling;
    }
  }

  // http10_enabled - computed: false, optional: true, required: false
  private _http10Enabled?: boolean | cdktf.IResolvable; 
  public get http10Enabled() {
    return this.getBooleanAttribute('http10_enabled');
  }
  public set http10Enabled(value: boolean | cdktf.IResolvable) {
    this._http10Enabled = value;
  }
  public resetHttp10Enabled() {
    this._http10Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http10EnabledInput() {
    return this._http10Enabled;
  }

  // trace_sampling - computed: false, optional: true, required: false
  private _traceSampling?: number; 
  public get traceSampling() {
    return this.getNumberAttribute('trace_sampling');
  }
  public set traceSampling(value: number) {
    this._traceSampling = value;
  }
  public resetTraceSampling() {
    this._traceSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceSamplingInput() {
    return this._traceSampling;
  }
}
export interface ServiceMeshServiceMeshMeshConfigProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#cluster_domain ServiceMeshServiceMesh#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#limit_cpu ServiceMeshServiceMesh#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#limit_memory ServiceMeshServiceMesh#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#request_cpu ServiceMeshServiceMesh#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#request_memory ServiceMeshServiceMesh#request_memory}
  */
  readonly requestMemory?: string;
}

export function serviceMeshServiceMeshMeshConfigProxyToTerraform(struct?: ServiceMeshServiceMeshMeshConfigProxyOutputReference | ServiceMeshServiceMeshMeshConfigProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
  }
}


export function serviceMeshServiceMeshMeshConfigProxyToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigProxyOutputReference | ServiceMeshServiceMeshMeshConfigProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterDomain = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterDomain = value.clusterDomain;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
    }
  }

  // cluster_domain - computed: true, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // limit_cpu - computed: false, optional: true, required: false
  private _limitCpu?: string; 
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }
  public set limitCpu(value: string) {
    this._limitCpu = value;
  }
  public resetLimitCpu() {
    this._limitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: true, required: false
  private _limitMemory?: string; 
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }
  public set limitMemory(value: string) {
    this._limitMemory = value;
  }
  public resetLimitMemory() {
    this._limitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
  }

  // request_cpu - computed: false, optional: true, required: false
  private _requestCpu?: string; 
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }
  public set requestCpu(value: string) {
    this._requestCpu = value;
  }
  public resetRequestCpu() {
    this._requestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: true, required: false
  private _requestMemory?: string; 
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
  public set requestMemory(value: string) {
    this._requestMemory = value;
  }
  public resetRequestMemory() {
    this._requestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
  }
}
export interface ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enabled ServiceMeshServiceMesh#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#exclude_namespaces ServiceMeshServiceMesh#exclude_namespaces}
  */
  readonly excludeNamespaces?: string;
}

export function serviceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationToTerraform(struct?: ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationOutputReference | ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_namespaces: cdktf.stringToTerraform(struct!.excludeNamespaces),
  }
}


export function serviceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationOutputReference | ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_namespaces: {
      value: cdktf.stringToHclTerraform(struct!.excludeNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludeNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNamespaces = this._excludeNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excludeNamespaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excludeNamespaces = value.excludeNamespaces;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_namespaces - computed: false, optional: true, required: false
  private _excludeNamespaces?: string; 
  public get excludeNamespaces() {
    return this.getStringAttribute('exclude_namespaces');
  }
  public set excludeNamespaces(value: string) {
    this._excludeNamespaces = value;
  }
  public resetExcludeNamespaces() {
    this._excludeNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamespacesInput() {
    return this._excludeNamespaces;
  }
}
export interface ServiceMeshServiceMeshMeshConfigSidecarInjector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#auto_injection_policy_enabled ServiceMeshServiceMesh#auto_injection_policy_enabled}
  */
  readonly autoInjectionPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enable_namespaces_by_default ServiceMeshServiceMesh#enable_namespaces_by_default}
  */
  readonly enableNamespacesByDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#limit_cpu ServiceMeshServiceMesh#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#limit_memory ServiceMeshServiceMesh#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#request_cpu ServiceMeshServiceMesh#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#request_memory ServiceMeshServiceMesh#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * init_cni_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#init_cni_configuration ServiceMeshServiceMesh#init_cni_configuration}
  */
  readonly initCniConfiguration?: ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfiguration;
}

export function serviceMeshServiceMeshMeshConfigSidecarInjectorToTerraform(struct?: ServiceMeshServiceMeshMeshConfigSidecarInjectorOutputReference | ServiceMeshServiceMeshMeshConfigSidecarInjector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_injection_policy_enabled: cdktf.booleanToTerraform(struct!.autoInjectionPolicyEnabled),
    enable_namespaces_by_default: cdktf.booleanToTerraform(struct!.enableNamespacesByDefault),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    init_cni_configuration: serviceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationToTerraform(struct!.initCniConfiguration),
  }
}


export function serviceMeshServiceMeshMeshConfigSidecarInjectorToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigSidecarInjectorOutputReference | ServiceMeshServiceMeshMeshConfigSidecarInjector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_injection_policy_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoInjectionPolicyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_namespaces_by_default: {
      value: cdktf.booleanToHclTerraform(struct!.enableNamespacesByDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_cni_configuration: {
      value: serviceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationToHclTerraform(struct!.initCniConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigSidecarInjectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfigSidecarInjector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoInjectionPolicyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoInjectionPolicyEnabled = this._autoInjectionPolicyEnabled;
    }
    if (this._enableNamespacesByDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNamespacesByDefault = this._enableNamespacesByDefault;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    if (this._initCniConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initCniConfiguration = this._initCniConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfigSidecarInjector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoInjectionPolicyEnabled = undefined;
      this._enableNamespacesByDefault = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._initCniConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoInjectionPolicyEnabled = value.autoInjectionPolicyEnabled;
      this._enableNamespacesByDefault = value.enableNamespacesByDefault;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._initCniConfiguration.internalValue = value.initCniConfiguration;
    }
  }

  // auto_injection_policy_enabled - computed: false, optional: true, required: false
  private _autoInjectionPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get autoInjectionPolicyEnabled() {
    return this.getBooleanAttribute('auto_injection_policy_enabled');
  }
  public set autoInjectionPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._autoInjectionPolicyEnabled = value;
  }
  public resetAutoInjectionPolicyEnabled() {
    this._autoInjectionPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInjectionPolicyEnabledInput() {
    return this._autoInjectionPolicyEnabled;
  }

  // enable_namespaces_by_default - computed: false, optional: true, required: false
  private _enableNamespacesByDefault?: boolean | cdktf.IResolvable; 
  public get enableNamespacesByDefault() {
    return this.getBooleanAttribute('enable_namespaces_by_default');
  }
  public set enableNamespacesByDefault(value: boolean | cdktf.IResolvable) {
    this._enableNamespacesByDefault = value;
  }
  public resetEnableNamespacesByDefault() {
    this._enableNamespacesByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNamespacesByDefaultInput() {
    return this._enableNamespacesByDefault;
  }

  // limit_cpu - computed: false, optional: true, required: false
  private _limitCpu?: string; 
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }
  public set limitCpu(value: string) {
    this._limitCpu = value;
  }
  public resetLimitCpu() {
    this._limitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: true, required: false
  private _limitMemory?: string; 
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }
  public set limitMemory(value: string) {
    this._limitMemory = value;
  }
  public resetLimitMemory() {
    this._limitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
  }

  // request_cpu - computed: false, optional: true, required: false
  private _requestCpu?: string; 
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }
  public set requestCpu(value: string) {
    this._requestCpu = value;
  }
  public resetRequestCpu() {
    this._requestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: true, required: false
  private _requestMemory?: string; 
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
  public set requestMemory(value: string) {
    this._requestMemory = value;
  }
  public resetRequestMemory() {
    this._requestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
  }

  // sidecar_injector_webhook_as_yaml - computed: true, optional: false, required: false
  public get sidecarInjectorWebhookAsYaml() {
    return this.getStringAttribute('sidecar_injector_webhook_as_yaml');
  }

  // init_cni_configuration - computed: false, optional: true, required: false
  private _initCniConfiguration = new ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfigurationOutputReference(this, "init_cni_configuration");
  public get initCniConfiguration() {
    return this._initCniConfiguration;
  }
  public putInitCniConfiguration(value: ServiceMeshServiceMeshMeshConfigSidecarInjectorInitCniConfiguration) {
    this._initCniConfiguration.internalValue = value;
  }
  public resetInitCniConfiguration() {
    this._initCniConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initCniConfigurationInput() {
    return this._initCniConfiguration.internalValue;
  }
}
export interface ServiceMeshServiceMeshMeshConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#customized_zipkin ServiceMeshServiceMesh#customized_zipkin}
  */
  readonly customizedZipkin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#enable_locality_lb ServiceMeshServiceMesh#enable_locality_lb}
  */
  readonly enableLocalityLb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#include_ip_ranges ServiceMeshServiceMesh#include_ip_ranges}
  */
  readonly includeIpRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#outbound_traffic_policy ServiceMeshServiceMesh#outbound_traffic_policy}
  */
  readonly outboundTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#telemetry ServiceMeshServiceMesh#telemetry}
  */
  readonly telemetry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#tracing ServiceMeshServiceMesh#tracing}
  */
  readonly tracing?: boolean | cdktf.IResolvable;
  /**
  * access_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#access_log ServiceMeshServiceMesh#access_log}
  */
  readonly accessLog?: ServiceMeshServiceMeshMeshConfigAccessLog;
  /**
  * audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#audit ServiceMeshServiceMesh#audit}
  */
  readonly audit?: ServiceMeshServiceMeshMeshConfigAudit;
  /**
  * control_plane_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#control_plane_log ServiceMeshServiceMesh#control_plane_log}
  */
  readonly controlPlaneLog?: ServiceMeshServiceMeshMeshConfigControlPlaneLog;
  /**
  * kiali block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#kiali ServiceMeshServiceMesh#kiali}
  */
  readonly kiali?: ServiceMeshServiceMeshMeshConfigKiali;
  /**
  * opa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#opa ServiceMeshServiceMesh#opa}
  */
  readonly opa?: ServiceMeshServiceMeshMeshConfigOpa;
  /**
  * pilot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#pilot ServiceMeshServiceMesh#pilot}
  */
  readonly pilot?: ServiceMeshServiceMeshMeshConfigPilot;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#proxy ServiceMeshServiceMesh#proxy}
  */
  readonly proxy?: ServiceMeshServiceMeshMeshConfigProxy;
  /**
  * sidecar_injector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#sidecar_injector ServiceMeshServiceMesh#sidecar_injector}
  */
  readonly sidecarInjector?: ServiceMeshServiceMeshMeshConfigSidecarInjector;
}

export function serviceMeshServiceMeshMeshConfigToTerraform(struct?: ServiceMeshServiceMeshMeshConfigOutputReference | ServiceMeshServiceMeshMeshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customized_zipkin: cdktf.booleanToTerraform(struct!.customizedZipkin),
    enable_locality_lb: cdktf.booleanToTerraform(struct!.enableLocalityLb),
    include_ip_ranges: cdktf.stringToTerraform(struct!.includeIpRanges),
    outbound_traffic_policy: cdktf.stringToTerraform(struct!.outboundTrafficPolicy),
    telemetry: cdktf.booleanToTerraform(struct!.telemetry),
    tracing: cdktf.booleanToTerraform(struct!.tracing),
    access_log: serviceMeshServiceMeshMeshConfigAccessLogToTerraform(struct!.accessLog),
    audit: serviceMeshServiceMeshMeshConfigAuditToTerraform(struct!.audit),
    control_plane_log: serviceMeshServiceMeshMeshConfigControlPlaneLogToTerraform(struct!.controlPlaneLog),
    kiali: serviceMeshServiceMeshMeshConfigKialiToTerraform(struct!.kiali),
    opa: serviceMeshServiceMeshMeshConfigOpaToTerraform(struct!.opa),
    pilot: serviceMeshServiceMeshMeshConfigPilotToTerraform(struct!.pilot),
    proxy: serviceMeshServiceMeshMeshConfigProxyToTerraform(struct!.proxy),
    sidecar_injector: serviceMeshServiceMeshMeshConfigSidecarInjectorToTerraform(struct!.sidecarInjector),
  }
}


export function serviceMeshServiceMeshMeshConfigToHclTerraform(struct?: ServiceMeshServiceMeshMeshConfigOutputReference | ServiceMeshServiceMeshMeshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customized_zipkin: {
      value: cdktf.booleanToHclTerraform(struct!.customizedZipkin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_locality_lb: {
      value: cdktf.booleanToHclTerraform(struct!.enableLocalityLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_ip_ranges: {
      value: cdktf.stringToHclTerraform(struct!.includeIpRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.outboundTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry: {
      value: cdktf.booleanToHclTerraform(struct!.telemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracing: {
      value: cdktf.booleanToHclTerraform(struct!.tracing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_log: {
      value: serviceMeshServiceMeshMeshConfigAccessLogToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigAccessLogList",
    },
    audit: {
      value: serviceMeshServiceMeshMeshConfigAuditToHclTerraform(struct!.audit),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigAuditList",
    },
    control_plane_log: {
      value: serviceMeshServiceMeshMeshConfigControlPlaneLogToHclTerraform(struct!.controlPlaneLog),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigControlPlaneLogList",
    },
    kiali: {
      value: serviceMeshServiceMeshMeshConfigKialiToHclTerraform(struct!.kiali),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigKialiList",
    },
    opa: {
      value: serviceMeshServiceMeshMeshConfigOpaToHclTerraform(struct!.opa),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigOpaList",
    },
    pilot: {
      value: serviceMeshServiceMeshMeshConfigPilotToHclTerraform(struct!.pilot),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigPilotList",
    },
    proxy: {
      value: serviceMeshServiceMeshMeshConfigProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigProxyList",
    },
    sidecar_injector: {
      value: serviceMeshServiceMeshMeshConfigSidecarInjectorToHclTerraform(struct!.sidecarInjector),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshServiceMeshMeshConfigSidecarInjectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshMeshConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshMeshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizedZipkin !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedZipkin = this._customizedZipkin;
    }
    if (this._enableLocalityLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalityLb = this._enableLocalityLb;
    }
    if (this._includeIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIpRanges = this._includeIpRanges;
    }
    if (this._outboundTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundTrafficPolicy = this._outboundTrafficPolicy;
    }
    if (this._telemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry;
    }
    if (this._tracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing;
    }
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    if (this._audit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit?.internalValue;
    }
    if (this._controlPlaneLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneLog = this._controlPlaneLog?.internalValue;
    }
    if (this._kiali?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kiali = this._kiali?.internalValue;
    }
    if (this._opa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opa = this._opa?.internalValue;
    }
    if (this._pilot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pilot = this._pilot?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._sidecarInjector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarInjector = this._sidecarInjector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshMeshConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customizedZipkin = undefined;
      this._enableLocalityLb = undefined;
      this._includeIpRanges = undefined;
      this._outboundTrafficPolicy = undefined;
      this._telemetry = undefined;
      this._tracing = undefined;
      this._accessLog.internalValue = undefined;
      this._audit.internalValue = undefined;
      this._controlPlaneLog.internalValue = undefined;
      this._kiali.internalValue = undefined;
      this._opa.internalValue = undefined;
      this._pilot.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._sidecarInjector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customizedZipkin = value.customizedZipkin;
      this._enableLocalityLb = value.enableLocalityLb;
      this._includeIpRanges = value.includeIpRanges;
      this._outboundTrafficPolicy = value.outboundTrafficPolicy;
      this._telemetry = value.telemetry;
      this._tracing = value.tracing;
      this._accessLog.internalValue = value.accessLog;
      this._audit.internalValue = value.audit;
      this._controlPlaneLog.internalValue = value.controlPlaneLog;
      this._kiali.internalValue = value.kiali;
      this._opa.internalValue = value.opa;
      this._pilot.internalValue = value.pilot;
      this._proxy.internalValue = value.proxy;
      this._sidecarInjector.internalValue = value.sidecarInjector;
    }
  }

  // customized_zipkin - computed: false, optional: true, required: false
  private _customizedZipkin?: boolean | cdktf.IResolvable; 
  public get customizedZipkin() {
    return this.getBooleanAttribute('customized_zipkin');
  }
  public set customizedZipkin(value: boolean | cdktf.IResolvable) {
    this._customizedZipkin = value;
  }
  public resetCustomizedZipkin() {
    this._customizedZipkin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedZipkinInput() {
    return this._customizedZipkin;
  }

  // enable_locality_lb - computed: false, optional: true, required: false
  private _enableLocalityLb?: boolean | cdktf.IResolvable; 
  public get enableLocalityLb() {
    return this.getBooleanAttribute('enable_locality_lb');
  }
  public set enableLocalityLb(value: boolean | cdktf.IResolvable) {
    this._enableLocalityLb = value;
  }
  public resetEnableLocalityLb() {
    this._enableLocalityLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalityLbInput() {
    return this._enableLocalityLb;
  }

  // include_ip_ranges - computed: true, optional: true, required: false
  private _includeIpRanges?: string; 
  public get includeIpRanges() {
    return this.getStringAttribute('include_ip_ranges');
  }
  public set includeIpRanges(value: string) {
    this._includeIpRanges = value;
  }
  public resetIncludeIpRanges() {
    this._includeIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIpRangesInput() {
    return this._includeIpRanges;
  }

  // outbound_traffic_policy - computed: false, optional: true, required: false
  private _outboundTrafficPolicy?: string; 
  public get outboundTrafficPolicy() {
    return this.getStringAttribute('outbound_traffic_policy');
  }
  public set outboundTrafficPolicy(value: string) {
    this._outboundTrafficPolicy = value;
  }
  public resetOutboundTrafficPolicy() {
    this._outboundTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTrafficPolicyInput() {
    return this._outboundTrafficPolicy;
  }

  // prometheus - computed: true, optional: false, required: false
  private _prometheus = new ServiceMeshServiceMeshMeshConfigPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry?: boolean | cdktf.IResolvable; 
  public get telemetry() {
    return this.getBooleanAttribute('telemetry');
  }
  public set telemetry(value: boolean | cdktf.IResolvable) {
    this._telemetry = value;
  }
  public resetTelemetry() {
    this._telemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing?: boolean | cdktf.IResolvable; 
  public get tracing() {
    return this.getBooleanAttribute('tracing');
  }
  public set tracing(value: boolean | cdktf.IResolvable) {
    this._tracing = value;
  }
  public resetTracing() {
    this._tracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing;
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new ServiceMeshServiceMeshMeshConfigAccessLogOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: ServiceMeshServiceMeshMeshConfigAccessLog) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }

  // audit - computed: false, optional: true, required: false
  private _audit = new ServiceMeshServiceMeshMeshConfigAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }
  public putAudit(value: ServiceMeshServiceMeshMeshConfigAudit) {
    this._audit.internalValue = value;
  }
  public resetAudit() {
    this._audit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit.internalValue;
  }

  // control_plane_log - computed: false, optional: true, required: false
  private _controlPlaneLog = new ServiceMeshServiceMeshMeshConfigControlPlaneLogOutputReference(this, "control_plane_log");
  public get controlPlaneLog() {
    return this._controlPlaneLog;
  }
  public putControlPlaneLog(value: ServiceMeshServiceMeshMeshConfigControlPlaneLog) {
    this._controlPlaneLog.internalValue = value;
  }
  public resetControlPlaneLog() {
    this._controlPlaneLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneLogInput() {
    return this._controlPlaneLog.internalValue;
  }

  // kiali - computed: false, optional: true, required: false
  private _kiali = new ServiceMeshServiceMeshMeshConfigKialiOutputReference(this, "kiali");
  public get kiali() {
    return this._kiali;
  }
  public putKiali(value: ServiceMeshServiceMeshMeshConfigKiali) {
    this._kiali.internalValue = value;
  }
  public resetKiali() {
    this._kiali.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kialiInput() {
    return this._kiali.internalValue;
  }

  // opa - computed: false, optional: true, required: false
  private _opa = new ServiceMeshServiceMeshMeshConfigOpaOutputReference(this, "opa");
  public get opa() {
    return this._opa;
  }
  public putOpa(value: ServiceMeshServiceMeshMeshConfigOpa) {
    this._opa.internalValue = value;
  }
  public resetOpa() {
    this._opa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaInput() {
    return this._opa.internalValue;
  }

  // pilot - computed: false, optional: true, required: false
  private _pilot = new ServiceMeshServiceMeshMeshConfigPilotOutputReference(this, "pilot");
  public get pilot() {
    return this._pilot;
  }
  public putPilot(value: ServiceMeshServiceMeshMeshConfigPilot) {
    this._pilot.internalValue = value;
  }
  public resetPilot() {
    this._pilot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pilotInput() {
    return this._pilot.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new ServiceMeshServiceMeshMeshConfigProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: ServiceMeshServiceMeshMeshConfigProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // sidecar_injector - computed: false, optional: true, required: false
  private _sidecarInjector = new ServiceMeshServiceMeshMeshConfigSidecarInjectorOutputReference(this, "sidecar_injector");
  public get sidecarInjector() {
    return this._sidecarInjector;
  }
  public putSidecarInjector(value: ServiceMeshServiceMeshMeshConfigSidecarInjector) {
    this._sidecarInjector.internalValue = value;
  }
  public resetSidecarInjector() {
    this._sidecarInjector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInjectorInput() {
    return this._sidecarInjector.internalValue;
  }
}
export interface ServiceMeshServiceMeshNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#vpc_id ServiceMeshServiceMesh#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#vswitche_list ServiceMeshServiceMesh#vswitche_list}
  */
  readonly vswitcheList: string[];
}

export function serviceMeshServiceMeshNetworkToTerraform(struct?: ServiceMeshServiceMeshNetworkOutputReference | ServiceMeshServiceMeshNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitche_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vswitcheList),
  }
}


export function serviceMeshServiceMeshNetworkToHclTerraform(struct?: ServiceMeshServiceMeshNetworkOutputReference | ServiceMeshServiceMeshNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitche_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vswitcheList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshServiceMeshNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitcheList !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitcheList = this._vswitcheList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcId = undefined;
      this._vswitcheList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcId = value.vpcId;
      this._vswitcheList = value.vswitcheList;
    }
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
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

  // vswitche_list - computed: false, optional: false, required: true
  private _vswitcheList?: string[]; 
  public get vswitcheList() {
    return this.getListAttribute('vswitche_list');
  }
  public set vswitcheList(value: string[]) {
    this._vswitcheList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitcheListInput() {
    return this._vswitcheList;
  }
}
export interface ServiceMeshServiceMeshTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#create ServiceMeshServiceMesh#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#delete ServiceMeshServiceMesh#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#update ServiceMeshServiceMesh#update}
  */
  readonly update?: string;
}

export function serviceMeshServiceMeshTimeoutsToTerraform(struct?: ServiceMeshServiceMeshTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceMeshServiceMeshTimeoutsToHclTerraform(struct?: ServiceMeshServiceMeshTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceMeshTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceMeshServiceMeshTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshServiceMeshTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh alicloud_service_mesh_service_mesh}
*/
export class ServiceMeshServiceMesh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_service_mesh_service_mesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMeshServiceMesh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMeshServiceMesh to import
  * @param importFromId The id of the existing ServiceMeshServiceMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMeshServiceMesh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_service_mesh_service_mesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/service_mesh_service_mesh alicloud_service_mesh_service_mesh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMeshServiceMeshConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMeshServiceMeshConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_service_mesh_service_mesh',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterIds = config.clusterIds;
    this._clusterSpec = config.clusterSpec;
    this._customizedPrometheus = config.customizedPrometheus;
    this._edition = config.edition;
    this._force = config.force;
    this._id = config.id;
    this._prometheusUrl = config.prometheusUrl;
    this._serviceMeshName = config.serviceMeshName;
    this._tags = config.tags;
    this._version = config.version;
    this._extraConfiguration.internalValue = config.extraConfiguration;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._meshConfig.internalValue = config.meshConfig;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ids - computed: false, optional: true, required: false
  private _clusterIds?: string[]; 
  public get clusterIds() {
    return this.getListAttribute('cluster_ids');
  }
  public set clusterIds(value: string[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
  }

  // cluster_spec - computed: true, optional: true, required: false
  private _clusterSpec?: string; 
  public get clusterSpec() {
    return this.getStringAttribute('cluster_spec');
  }
  public set clusterSpec(value: string) {
    this._clusterSpec = value;
  }
  public resetClusterSpec() {
    this._clusterSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSpecInput() {
    return this._clusterSpec;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customized_prometheus - computed: false, optional: true, required: false
  private _customizedPrometheus?: boolean | cdktf.IResolvable; 
  public get customizedPrometheus() {
    return this.getBooleanAttribute('customized_prometheus');
  }
  public set customizedPrometheus(value: boolean | cdktf.IResolvable) {
    this._customizedPrometheus = value;
  }
  public resetCustomizedPrometheus() {
    this._customizedPrometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedPrometheusInput() {
    return this._customizedPrometheus;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // prometheus_url - computed: false, optional: true, required: false
  private _prometheusUrl?: string; 
  public get prometheusUrl() {
    return this.getStringAttribute('prometheus_url');
  }
  public set prometheusUrl(value: string) {
    this._prometheusUrl = value;
  }
  public resetPrometheusUrl() {
    this._prometheusUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusUrlInput() {
    return this._prometheusUrl;
  }

  // service_mesh_name - computed: false, optional: true, required: false
  private _serviceMeshName?: string; 
  public get serviceMeshName() {
    return this.getStringAttribute('service_mesh_name');
  }
  public set serviceMeshName(value: string) {
    this._serviceMeshName = value;
  }
  public resetServiceMeshName() {
    this._serviceMeshName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMeshNameInput() {
    return this._serviceMeshName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // extra_configuration - computed: false, optional: true, required: false
  private _extraConfiguration = new ServiceMeshServiceMeshExtraConfigurationOutputReference(this, "extra_configuration");
  public get extraConfiguration() {
    return this._extraConfiguration;
  }
  public putExtraConfiguration(value: ServiceMeshServiceMeshExtraConfiguration) {
    this._extraConfiguration.internalValue = value;
  }
  public resetExtraConfiguration() {
    this._extraConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigurationInput() {
    return this._extraConfiguration.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ServiceMeshServiceMeshLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ServiceMeshServiceMeshLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // mesh_config - computed: false, optional: true, required: false
  private _meshConfig = new ServiceMeshServiceMeshMeshConfigOutputReference(this, "mesh_config");
  public get meshConfig() {
    return this._meshConfig;
  }
  public putMeshConfig(value: ServiceMeshServiceMeshMeshConfig) {
    this._meshConfig.internalValue = value;
  }
  public resetMeshConfig() {
    this._meshConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshConfigInput() {
    return this._meshConfig.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new ServiceMeshServiceMeshNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ServiceMeshServiceMeshNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceMeshServiceMeshTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceMeshServiceMeshTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterIds),
      cluster_spec: cdktf.stringToTerraform(this._clusterSpec),
      customized_prometheus: cdktf.booleanToTerraform(this._customizedPrometheus),
      edition: cdktf.stringToTerraform(this._edition),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      prometheus_url: cdktf.stringToTerraform(this._prometheusUrl),
      service_mesh_name: cdktf.stringToTerraform(this._serviceMeshName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      extra_configuration: serviceMeshServiceMeshExtraConfigurationToTerraform(this._extraConfiguration.internalValue),
      load_balancer: serviceMeshServiceMeshLoadBalancerToTerraform(this._loadBalancer.internalValue),
      mesh_config: serviceMeshServiceMeshMeshConfigToTerraform(this._meshConfig.internalValue),
      network: serviceMeshServiceMeshNetworkToTerraform(this._network.internalValue),
      timeouts: serviceMeshServiceMeshTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_spec: {
        value: cdktf.stringToHclTerraform(this._clusterSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_prometheus: {
        value: cdktf.booleanToHclTerraform(this._customizedPrometheus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prometheus_url: {
        value: cdktf.stringToHclTerraform(this._prometheusUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_mesh_name: {
        value: cdktf.stringToHclTerraform(this._serviceMeshName),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_configuration: {
        value: serviceMeshServiceMeshExtraConfigurationToHclTerraform(this._extraConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshServiceMeshExtraConfigurationList",
      },
      load_balancer: {
        value: serviceMeshServiceMeshLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshServiceMeshLoadBalancerList",
      },
      mesh_config: {
        value: serviceMeshServiceMeshMeshConfigToHclTerraform(this._meshConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshServiceMeshMeshConfigList",
      },
      network: {
        value: serviceMeshServiceMeshNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshServiceMeshNetworkList",
      },
      timeouts: {
        value: serviceMeshServiceMeshTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceMeshServiceMeshTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
