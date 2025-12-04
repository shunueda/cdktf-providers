// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsmServiceMeshV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}
  */
  readonly version: string;
  /**
  * clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#clusters AsmServiceMeshV1#clusters}
  */
  readonly clusters: AsmServiceMeshV1Clusters[] | cdktf.IResolvable;
  /**
  * proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#proxy_config AsmServiceMeshV1#proxy_config}
  */
  readonly proxyConfig?: AsmServiceMeshV1ProxyConfig;
  /**
  * telemetry_config_tracing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#telemetry_config_tracing AsmServiceMeshV1#telemetry_config_tracing}
  */
  readonly telemetryConfigTracing?: AsmServiceMeshV1TelemetryConfigTracing;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#timeouts AsmServiceMeshV1#timeouts}
  */
  readonly timeouts?: AsmServiceMeshV1Timeouts;
}
export interface AsmServiceMeshV1Clusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}
  */
  readonly injectionNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}
  */
  readonly installationNodes: string[];
}

export function asmServiceMeshV1ClustersToTerraform(struct?: AsmServiceMeshV1Clusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    injection_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.injectionNamespaces),
    installation_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.installationNodes),
  }
}


export function asmServiceMeshV1ClustersToHclTerraform(struct?: AsmServiceMeshV1Clusters | cdktf.IResolvable): any {
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
    injection_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.injectionNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    installation_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.installationNodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsmServiceMeshV1ClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsmServiceMeshV1Clusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._injectionNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectionNamespaces = this._injectionNamespaces;
    }
    if (this._installationNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationNodes = this._installationNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsmServiceMeshV1Clusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._injectionNamespaces = undefined;
      this._installationNodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._injectionNamespaces = value.injectionNamespaces;
      this._installationNodes = value.installationNodes;
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

  // injection_namespaces - computed: false, optional: true, required: false
  private _injectionNamespaces?: string[]; 
  public get injectionNamespaces() {
    return this.getListAttribute('injection_namespaces');
  }
  public set injectionNamespaces(value: string[]) {
    this._injectionNamespaces = value;
  }
  public resetInjectionNamespaces() {
    this._injectionNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectionNamespacesInput() {
    return this._injectionNamespaces;
  }

  // installation_nodes - computed: false, optional: false, required: true
  private _installationNodes?: string[]; 
  public get installationNodes() {
    return this.getListAttribute('installation_nodes');
  }
  public set installationNodes(value: string[]) {
    this._installationNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installationNodesInput() {
    return this._installationNodes;
  }
}

export class AsmServiceMeshV1ClustersList extends cdktf.ComplexList {
  public internalValue? : AsmServiceMeshV1Clusters[] | cdktf.IResolvable

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
  public get(index: number): AsmServiceMeshV1ClustersOutputReference {
    return new AsmServiceMeshV1ClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsmServiceMeshV1ProxyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}
  */
  readonly excludeInboundPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}
  */
  readonly excludeIpRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}
  */
  readonly excludeOutboundPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}
  */
  readonly includeInboundPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}
  */
  readonly includeIpRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}
  */
  readonly includeOutboundPorts?: string;
}

export function asmServiceMeshV1ProxyConfigToTerraform(struct?: AsmServiceMeshV1ProxyConfigOutputReference | AsmServiceMeshV1ProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_inbound_ports: cdktf.stringToTerraform(struct!.excludeInboundPorts),
    exclude_ip_ranges: cdktf.stringToTerraform(struct!.excludeIpRanges),
    exclude_outbound_ports: cdktf.stringToTerraform(struct!.excludeOutboundPorts),
    include_inbound_ports: cdktf.stringToTerraform(struct!.includeInboundPorts),
    include_ip_ranges: cdktf.stringToTerraform(struct!.includeIpRanges),
    include_outbound_ports: cdktf.stringToTerraform(struct!.includeOutboundPorts),
  }
}


export function asmServiceMeshV1ProxyConfigToHclTerraform(struct?: AsmServiceMeshV1ProxyConfigOutputReference | AsmServiceMeshV1ProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_inbound_ports: {
      value: cdktf.stringToHclTerraform(struct!.excludeInboundPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_ip_ranges: {
      value: cdktf.stringToHclTerraform(struct!.excludeIpRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_outbound_ports: {
      value: cdktf.stringToHclTerraform(struct!.excludeOutboundPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_inbound_ports: {
      value: cdktf.stringToHclTerraform(struct!.includeInboundPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_ip_ranges: {
      value: cdktf.stringToHclTerraform(struct!.includeIpRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_outbound_ports: {
      value: cdktf.stringToHclTerraform(struct!.includeOutboundPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsmServiceMeshV1ProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsmServiceMeshV1ProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeInboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInboundPorts = this._excludeInboundPorts;
    }
    if (this._excludeIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIpRanges = this._excludeIpRanges;
    }
    if (this._excludeOutboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeOutboundPorts = this._excludeOutboundPorts;
    }
    if (this._includeInboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInboundPorts = this._includeInboundPorts;
    }
    if (this._includeIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIpRanges = this._includeIpRanges;
    }
    if (this._includeOutboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOutboundPorts = this._includeOutboundPorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsmServiceMeshV1ProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeInboundPorts = undefined;
      this._excludeIpRanges = undefined;
      this._excludeOutboundPorts = undefined;
      this._includeInboundPorts = undefined;
      this._includeIpRanges = undefined;
      this._includeOutboundPorts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeInboundPorts = value.excludeInboundPorts;
      this._excludeIpRanges = value.excludeIpRanges;
      this._excludeOutboundPorts = value.excludeOutboundPorts;
      this._includeInboundPorts = value.includeInboundPorts;
      this._includeIpRanges = value.includeIpRanges;
      this._includeOutboundPorts = value.includeOutboundPorts;
    }
  }

  // exclude_inbound_ports - computed: true, optional: true, required: false
  private _excludeInboundPorts?: string; 
  public get excludeInboundPorts() {
    return this.getStringAttribute('exclude_inbound_ports');
  }
  public set excludeInboundPorts(value: string) {
    this._excludeInboundPorts = value;
  }
  public resetExcludeInboundPorts() {
    this._excludeInboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInboundPortsInput() {
    return this._excludeInboundPorts;
  }

  // exclude_ip_ranges - computed: true, optional: true, required: false
  private _excludeIpRanges?: string; 
  public get excludeIpRanges() {
    return this.getStringAttribute('exclude_ip_ranges');
  }
  public set excludeIpRanges(value: string) {
    this._excludeIpRanges = value;
  }
  public resetExcludeIpRanges() {
    this._excludeIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpRangesInput() {
    return this._excludeIpRanges;
  }

  // exclude_outbound_ports - computed: true, optional: true, required: false
  private _excludeOutboundPorts?: string; 
  public get excludeOutboundPorts() {
    return this.getStringAttribute('exclude_outbound_ports');
  }
  public set excludeOutboundPorts(value: string) {
    this._excludeOutboundPorts = value;
  }
  public resetExcludeOutboundPorts() {
    this._excludeOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOutboundPortsInput() {
    return this._excludeOutboundPorts;
  }

  // include_inbound_ports - computed: true, optional: true, required: false
  private _includeInboundPorts?: string; 
  public get includeInboundPorts() {
    return this.getStringAttribute('include_inbound_ports');
  }
  public set includeInboundPorts(value: string) {
    this._includeInboundPorts = value;
  }
  public resetIncludeInboundPorts() {
    this._includeInboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInboundPortsInput() {
    return this._includeInboundPorts;
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

  // include_outbound_ports - computed: true, optional: true, required: false
  private _includeOutboundPorts?: string; 
  public get includeOutboundPorts() {
    return this.getStringAttribute('include_outbound_ports');
  }
  public set includeOutboundPorts(value: string) {
    this._includeOutboundPorts = value;
  }
  public resetIncludeOutboundPorts() {
    this._includeOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOutboundPortsInput() {
    return this._includeOutboundPorts;
  }
}
export interface AsmServiceMeshV1TelemetryConfigTracingExtensionProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}
  */
  readonly zipkinServiceAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}
  */
  readonly zipkinServicePort?: number;
}

export function asmServiceMeshV1TelemetryConfigTracingExtensionProvidersToTerraform(struct?: AsmServiceMeshV1TelemetryConfigTracingExtensionProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    zipkin_service_addr: cdktf.stringToTerraform(struct!.zipkinServiceAddr),
    zipkin_service_port: cdktf.numberToTerraform(struct!.zipkinServicePort),
  }
}


export function asmServiceMeshV1TelemetryConfigTracingExtensionProvidersToHclTerraform(struct?: AsmServiceMeshV1TelemetryConfigTracingExtensionProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zipkin_service_addr: {
      value: cdktf.stringToHclTerraform(struct!.zipkinServiceAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zipkin_service_port: {
      value: cdktf.numberToHclTerraform(struct!.zipkinServicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsmServiceMeshV1TelemetryConfigTracingExtensionProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zipkinServiceAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkinServiceAddr = this._zipkinServiceAddr;
    }
    if (this._zipkinServicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkinServicePort = this._zipkinServicePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsmServiceMeshV1TelemetryConfigTracingExtensionProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._zipkinServiceAddr = undefined;
      this._zipkinServicePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._zipkinServiceAddr = value.zipkinServiceAddr;
      this._zipkinServicePort = value.zipkinServicePort;
    }
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

  // zipkin_service_addr - computed: false, optional: true, required: false
  private _zipkinServiceAddr?: string; 
  public get zipkinServiceAddr() {
    return this.getStringAttribute('zipkin_service_addr');
  }
  public set zipkinServiceAddr(value: string) {
    this._zipkinServiceAddr = value;
  }
  public resetZipkinServiceAddr() {
    this._zipkinServiceAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinServiceAddrInput() {
    return this._zipkinServiceAddr;
  }

  // zipkin_service_port - computed: false, optional: true, required: false
  private _zipkinServicePort?: number; 
  public get zipkinServicePort() {
    return this.getNumberAttribute('zipkin_service_port');
  }
  public set zipkinServicePort(value: number) {
    this._zipkinServicePort = value;
  }
  public resetZipkinServicePort() {
    this._zipkinServicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinServicePortInput() {
    return this._zipkinServicePort;
  }
}

export class AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList extends cdktf.ComplexList {
  public internalValue? : AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] | cdktf.IResolvable

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
  public get(index: number): AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference {
    return new AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsmServiceMeshV1TelemetryConfigTracing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}
  */
  readonly defaultProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}
  */
  readonly randomSamplingPercentage?: number;
  /**
  * extension_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#extension_providers AsmServiceMeshV1#extension_providers}
  */
  readonly extensionProviders?: AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] | cdktf.IResolvable;
}

export function asmServiceMeshV1TelemetryConfigTracingToTerraform(struct?: AsmServiceMeshV1TelemetryConfigTracingOutputReference | AsmServiceMeshV1TelemetryConfigTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultProviders),
    random_sampling_percentage: cdktf.numberToTerraform(struct!.randomSamplingPercentage),
    extension_providers: cdktf.listMapper(asmServiceMeshV1TelemetryConfigTracingExtensionProvidersToTerraform, true)(struct!.extensionProviders),
  }
}


export function asmServiceMeshV1TelemetryConfigTracingToHclTerraform(struct?: AsmServiceMeshV1TelemetryConfigTracingOutputReference | AsmServiceMeshV1TelemetryConfigTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    random_sampling_percentage: {
      value: cdktf.numberToHclTerraform(struct!.randomSamplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extension_providers: {
      value: cdktf.listMapperHcl(asmServiceMeshV1TelemetryConfigTracingExtensionProvidersToHclTerraform, true)(struct!.extensionProviders),
      isBlock: true,
      type: "list",
      storageClassType: "AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsmServiceMeshV1TelemetryConfigTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsmServiceMeshV1TelemetryConfigTracing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultProviders = this._defaultProviders;
    }
    if (this._randomSamplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSamplingPercentage = this._randomSamplingPercentage;
    }
    if (this._extensionProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionProviders = this._extensionProviders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsmServiceMeshV1TelemetryConfigTracing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultProviders = undefined;
      this._randomSamplingPercentage = undefined;
      this._extensionProviders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultProviders = value.defaultProviders;
      this._randomSamplingPercentage = value.randomSamplingPercentage;
      this._extensionProviders.internalValue = value.extensionProviders;
    }
  }

  // default_providers - computed: true, optional: true, required: false
  private _defaultProviders?: string[]; 
  public get defaultProviders() {
    return this.getListAttribute('default_providers');
  }
  public set defaultProviders(value: string[]) {
    this._defaultProviders = value;
  }
  public resetDefaultProviders() {
    this._defaultProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProvidersInput() {
    return this._defaultProviders;
  }

  // random_sampling_percentage - computed: true, optional: true, required: false
  private _randomSamplingPercentage?: number; 
  public get randomSamplingPercentage() {
    return this.getNumberAttribute('random_sampling_percentage');
  }
  public set randomSamplingPercentage(value: number) {
    this._randomSamplingPercentage = value;
  }
  public resetRandomSamplingPercentage() {
    this._randomSamplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSamplingPercentageInput() {
    return this._randomSamplingPercentage;
  }

  // extension_providers - computed: false, optional: true, required: false
  private _extensionProviders = new AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList(this, "extension_providers", false);
  public get extensionProviders() {
    return this._extensionProviders;
  }
  public putExtensionProviders(value: AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] | cdktf.IResolvable) {
    this._extensionProviders.internalValue = value;
  }
  public resetExtensionProviders() {
    this._extensionProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionProvidersInput() {
    return this._extensionProviders.internalValue;
  }
}
export interface AsmServiceMeshV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}
  */
  readonly delete?: string;
}

export function asmServiceMeshV1TimeoutsToTerraform(struct?: AsmServiceMeshV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function asmServiceMeshV1TimeoutsToHclTerraform(struct?: AsmServiceMeshV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsmServiceMeshV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AsmServiceMeshV1Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsmServiceMeshV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}
*/
export class AsmServiceMeshV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_asm_service_mesh_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsmServiceMeshV1 to import
  * @param importFromId The id of the existing AsmServiceMeshV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsmServiceMeshV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_asm_service_mesh_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsmServiceMeshV1Config
  */
  public constructor(scope: Construct, id: string, config: AsmServiceMeshV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_asm_service_mesh_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipv6Enable = config.ipv6Enable;
    this._name = config.name;
    this._type = config.type;
    this._version = config.version;
    this._clusters.internalValue = config.clusters;
    this._proxyConfig.internalValue = config.proxyConfig;
    this._telemetryConfigTracing.internalValue = config.telemetryConfigTracing;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ids - computed: true, optional: false, required: false
  public get clusterIds() {
    return this.getListAttribute('cluster_ids');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // ipv6_enable - computed: true, optional: true, required: false
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // clusters - computed: false, optional: false, required: true
  private _clusters = new AsmServiceMeshV1ClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: AsmServiceMeshV1Clusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new AsmServiceMeshV1ProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: AsmServiceMeshV1ProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // telemetry_config_tracing - computed: false, optional: true, required: false
  private _telemetryConfigTracing = new AsmServiceMeshV1TelemetryConfigTracingOutputReference(this, "telemetry_config_tracing");
  public get telemetryConfigTracing() {
    return this._telemetryConfigTracing;
  }
  public putTelemetryConfigTracing(value: AsmServiceMeshV1TelemetryConfigTracing) {
    this._telemetryConfigTracing.internalValue = value;
  }
  public resetTelemetryConfigTracing() {
    this._telemetryConfigTracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryConfigTracingInput() {
    return this._telemetryConfigTracing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AsmServiceMeshV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AsmServiceMeshV1Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      clusters: cdktf.listMapper(asmServiceMeshV1ClustersToTerraform, true)(this._clusters.internalValue),
      proxy_config: asmServiceMeshV1ProxyConfigToTerraform(this._proxyConfig.internalValue),
      telemetry_config_tracing: asmServiceMeshV1TelemetryConfigTracingToTerraform(this._telemetryConfigTracing.internalValue),
      timeouts: asmServiceMeshV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clusters: {
        value: cdktf.listMapperHcl(asmServiceMeshV1ClustersToHclTerraform, true)(this._clusters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsmServiceMeshV1ClustersList",
      },
      proxy_config: {
        value: asmServiceMeshV1ProxyConfigToHclTerraform(this._proxyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsmServiceMeshV1ProxyConfigList",
      },
      telemetry_config_tracing: {
        value: asmServiceMeshV1TelemetryConfigTracingToHclTerraform(this._telemetryConfigTracing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsmServiceMeshV1TelemetryConfigTracingList",
      },
      timeouts: {
        value: asmServiceMeshV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AsmServiceMeshV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
