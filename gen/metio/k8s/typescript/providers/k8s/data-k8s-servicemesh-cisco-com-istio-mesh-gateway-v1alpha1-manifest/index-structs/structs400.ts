import * as cdktf from 'cdktf';
import { DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadata,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadataToTerraform,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadataToHclTerraform,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadataOutputReference,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePorts,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePortsToTerraform,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePortsToHclTerraform,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePortsList,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeployment,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeploymentToTerraform,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeploymentToHclTerraform,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeploymentOutputReference,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlane,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlaneToTerraform,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlaneToHclTerraform,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlaneOutputReference,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlays,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlaysToTerraform,
dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlaysToHclTerraform,
DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlaysList } from './structs0'
export interface DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#timeout_seconds DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIpToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIpToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#client_ip DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#client_ip}
  */
  readonly clientIp?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp;
}

export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIpToTerraform(struct!.clientIp),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIpToHclTerraform(struct!.clientIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIpOutputReference(this, "client_ip");
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigClientIp) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }
}
export interface DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#cluster_ip DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#cluster_ip}
  */
  readonly clusterIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#external_i_ps DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#external_i_ps}
  */
  readonly externalIPs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#external_name DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#external_name}
  */
  readonly externalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#external_traffic_policy DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#health_check_node_port DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#health_check_node_port}
  */
  readonly healthCheckNodePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#ip_family DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#load_balancer_ip DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#load_balancer_source_ranges DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#metadata DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#ports DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#ports}
  */
  readonly ports: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#publish_not_ready_addresses DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#publish_not_ready_addresses}
  */
  readonly publishNotReadyAddresses?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#selector DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#session_affinity DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#session_affinity_config DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#session_affinity_config}
  */
  readonly sessionAffinityConfig?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#type DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ip: cdktf.stringToTerraform(struct!.clusterIp),
    external_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalIPs),
    external_name: cdktf.stringToTerraform(struct!.externalName),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    health_check_node_port: cdktf.numberToTerraform(struct!.healthCheckNodePort),
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
    load_balancer_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSourceRanges),
    metadata: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadataToTerraform(struct!.metadata),
    ports: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePortsToTerraform, false)(struct!.ports),
    publish_not_ready_addresses: cdktf.booleanToTerraform(struct!.publishNotReadyAddresses),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_config: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigToTerraform(struct!.sessionAffinityConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ip: {
      value: cdktf.stringToHclTerraform(struct!.clusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_name: {
      value: cdktf.stringToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_node_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadata",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePortsList",
    },
    publish_not_ready_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.publishNotReadyAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity_config: {
      value: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigToHclTerraform(struct!.sessionAffinityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig",
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

export class DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIp = this._clusterIp;
    }
    if (this._externalIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIPs = this._externalIPs;
    }
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._healthCheckNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckNodePort = this._healthCheckNodePort;
    }
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._publishNotReadyAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishNotReadyAddresses = this._publishNotReadyAddresses;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._sessionAffinityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityConfig = this._sessionAffinityConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIp = undefined;
      this._externalIPs = undefined;
      this._externalName = undefined;
      this._externalTrafficPolicy = undefined;
      this._healthCheckNodePort = undefined;
      this._ipFamily = undefined;
      this._loadBalancerIp = undefined;
      this._loadBalancerSourceRanges = undefined;
      this._metadata.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._publishNotReadyAddresses = undefined;
      this._selector = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityConfig.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIp = value.clusterIp;
      this._externalIPs = value.externalIPs;
      this._externalName = value.externalName;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._healthCheckNodePort = value.healthCheckNodePort;
      this._ipFamily = value.ipFamily;
      this._loadBalancerIp = value.loadBalancerIp;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
      this._metadata.internalValue = value.metadata;
      this._ports.internalValue = value.ports;
      this._publishNotReadyAddresses = value.publishNotReadyAddresses;
      this._selector = value.selector;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityConfig.internalValue = value.sessionAffinityConfig;
      this._type = value.type;
    }
  }

  // cluster_ip - computed: false, optional: true, required: false
  private _clusterIp?: string; 
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }
  public set clusterIp(value: string) {
    this._clusterIp = value;
  }
  public resetClusterIp() {
    this._clusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInput() {
    return this._clusterIp;
  }

  // external_i_ps - computed: false, optional: true, required: false
  private _externalIPs?: string[]; 
  public get externalIPs() {
    return this.getListAttribute('external_i_ps');
  }
  public set externalIPs(value: string[]) {
    this._externalIPs = value;
  }
  public resetExternalIPs() {
    this._externalIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIPsInput() {
    return this._externalIPs;
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // health_check_node_port - computed: false, optional: true, required: false
  private _healthCheckNodePort?: number; 
  public get healthCheckNodePort() {
    return this.getNumberAttribute('health_check_node_port');
  }
  public set healthCheckNodePort(value: number) {
    this._healthCheckNodePort = value;
  }
  public resetHealthCheckNodePort() {
    this._healthCheckNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckNodePortInput() {
    return this._healthCheckNodePort;
  }

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string[]; 
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string[]) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServicePorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // publish_not_ready_addresses - computed: false, optional: true, required: false
  private _publishNotReadyAddresses?: boolean | cdktf.IResolvable; 
  public get publishNotReadyAddresses() {
    return this.getBooleanAttribute('publish_not_ready_addresses');
  }
  public set publishNotReadyAddresses(value: boolean | cdktf.IResolvable) {
    this._publishNotReadyAddresses = value;
  }
  public resetPublishNotReadyAddresses() {
    this._publishNotReadyAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishNotReadyAddressesInput() {
    return this._publishNotReadyAddresses;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_config - computed: false, optional: true, required: false
  private _sessionAffinityConfig = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfigOutputReference(this, "session_affinity_config");
  public get sessionAffinityConfig() {
    return this._sessionAffinityConfig;
  }
  public putSessionAffinityConfig(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceSessionAffinityConfig) {
    this._sessionAffinityConfig.internalValue = value;
  }
  public resetSessionAffinityConfig() {
    this._sessionAffinityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityConfigInput() {
    return this._sessionAffinityConfig.internalValue;
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
export interface DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#deployment DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#deployment}
  */
  readonly deployment?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeployment;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#istio_control_plane DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#istio_control_plane}
  */
  readonly istioControlPlane: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlane;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#k8s_resource_overlays DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#k8s_resource_overlays}
  */
  readonly k8SResourceOverlays?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlays[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#run_as_root DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#run_as_root}
  */
  readonly runAsRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#service DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#service}
  */
  readonly service: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/servicemesh_cisco_com_istio_mesh_gateway_v1alpha1_manifest#type DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecToTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeploymentToTerraform(struct!.deployment),
    istio_control_plane: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlaneToTerraform(struct!.istioControlPlane),
    k8s_resource_overlays: cdktf.listMapper(dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlaysToTerraform, false)(struct!.k8SResourceOverlays),
    run_as_root: cdktf.booleanToTerraform(struct!.runAsRoot),
    service: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceToTerraform(struct!.service),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeployment",
    },
    istio_control_plane: {
      value: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlaneToHclTerraform(struct!.istioControlPlane),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlane",
    },
    k8s_resource_overlays: {
      value: cdktf.listMapperHcl(dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlaysToHclTerraform, false)(struct!.k8SResourceOverlays),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlaysList",
    },
    run_as_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: dataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService",
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

export class DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._istioControlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioControlPlane = this._istioControlPlane?.internalValue;
    }
    if (this._k8SResourceOverlays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SResourceOverlays = this._k8SResourceOverlays?.internalValue;
    }
    if (this._runAsRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsRoot = this._runAsRoot;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployment.internalValue = undefined;
      this._istioControlPlane.internalValue = undefined;
      this._k8SResourceOverlays.internalValue = undefined;
      this._runAsRoot = undefined;
      this._service.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployment.internalValue = value.deployment;
      this._istioControlPlane.internalValue = value.istioControlPlane;
      this._k8SResourceOverlays.internalValue = value.k8SResourceOverlays;
      this._runAsRoot = value.runAsRoot;
      this._service.internalValue = value.service;
      this._type = value.type;
    }
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // istio_control_plane - computed: false, optional: false, required: true
  private _istioControlPlane = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlaneOutputReference(this, "istio_control_plane");
  public get istioControlPlane() {
    return this._istioControlPlane;
  }
  public putIstioControlPlane(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecIstioControlPlane) {
    this._istioControlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get istioControlPlaneInput() {
    return this._istioControlPlane.internalValue;
  }

  // k8s_resource_overlays - computed: false, optional: true, required: false
  private _k8SResourceOverlays = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlaysList(this, "k8s_resource_overlays", false);
  public get k8SResourceOverlays() {
    return this._k8SResourceOverlays;
  }
  public putK8SResourceOverlays(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecK8SResourceOverlays[] | cdktf.IResolvable) {
    this._k8SResourceOverlays.internalValue = value;
  }
  public resetK8SResourceOverlays() {
    this._k8SResourceOverlays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SResourceOverlaysInput() {
    return this._k8SResourceOverlays.internalValue;
  }

  // run_as_root - computed: false, optional: true, required: false
  private _runAsRoot?: boolean | cdktf.IResolvable; 
  public get runAsRoot() {
    return this.getBooleanAttribute('run_as_root');
  }
  public set runAsRoot(value: boolean | cdktf.IResolvable) {
    this._runAsRoot = value;
  }
  public resetRunAsRoot() {
    this._runAsRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsRootInput() {
    return this._runAsRoot;
  }

  // service - computed: false, optional: false, required: true
  private _service = new DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SServicemeshCiscoComIstioMeshGatewayV1Alpha1ManifestSpecService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
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
