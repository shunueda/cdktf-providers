// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metadata DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata;
  /**
  * Defines the desired state of the FlowCollector resource. <br><br> *: the mention of 'unsupported', or 'deprecated' for a feature throughout this document means that this feature is not officially supported by Red Hat. It might have been, for example, contributed by the community and accepted without a formal agreement for maintenance. The product maintainers might provide some support for these features as a best effort only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#spec DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec;
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#annotations DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadataToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug {
  /**
  * 'env' allows passing custom environment variables to underlying components. Useful for passing some very concrete performance-tuning options, such as 'GOGC' and 'GOMAXPROCS', that should not be publicly exposed as part of the FlowCollector descriptor, as they are only useful in edge debug or support scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#env DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#env}
  */
  readonly env?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebugToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebugToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter {
  /**
  * Action defines the action to perform on the flows that match the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#action DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * CIDR defines the IP CIDR to filter flows by. Example: 10.10.10.0/24 or 100:100:100:100::/64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cidr DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * DestPorts defines the destination ports to filter flows by. To filter a single port, set a single port as an integer value. For example, destPorts: 80. To filter a range of ports, use a 'start-end' range in string format. For example, destPorts: '80-100'. To filter two ports, use a 'port1,port2' in string format. For example, 'ports: '80,100''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#dest_ports DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#dest_ports}
  */
  readonly destPorts?: string;
  /**
  * Direction defines the direction to filter flows by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#direction DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#direction}
  */
  readonly direction?: string;
  /**
  * Set 'enable' to 'true' to enable eBPF flow filtering feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ICMPCode defines the ICMP code to filter flows by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#icmp_code DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMPType defines the ICMP type to filter flows by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#icmp_type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * PeerIP defines the IP address to filter flows by. Example: 10.10.10.10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#peer_ip DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * 'pktDrops', to filter flows with packet drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#pkt_drops DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#pkt_drops}
  */
  readonly pktDrops?: boolean | cdktf.IResolvable;
  /**
  * Ports defines the ports to filter flows by. it can be user for either source or destination ports. To filter a single port, set a single port as an integer value. For example, ports: 80. To filter a range of ports, use a 'start-end' range in string format. For example, ports: '80-100'. To filter two ports, use a 'port1,port2' in string format. For example, 'ports: '80,100''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ports DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ports}
  */
  readonly ports?: string;
  /**
  * Protocol defines the protocol to filter flows by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#protocol DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * SourcePorts defines the source ports to filter flows by. To filter a single port, set a single port as an integer value. For example, sourcePorts: 80. To filter a range of ports, use a 'start-end' range in string format. For example, sourcePorts: '80-100'. To filter two ports, use a 'port1,port2' in string format. For example, 'ports: '80,100''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#source_ports DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#source_ports}
  */
  readonly sourcePorts?: string;
  /**
  * 'tcpFlags' defines the TCP flags to filter flows by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tcp_flags DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tcp_flags}
  */
  readonly tcpFlags?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilterToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    dest_ports: cdktf.stringToTerraform(struct!.destPorts),
    direction: cdktf.stringToTerraform(struct!.direction),
    enable: cdktf.booleanToTerraform(struct!.enable),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    pkt_drops: cdktf.booleanToTerraform(struct!.pktDrops),
    ports: cdktf.stringToTerraform(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_ports: cdktf.stringToTerraform(struct!.sourcePorts),
    tcp_flags: cdktf.stringToTerraform(struct!.tcpFlags),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilterToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter | cdktf.IResolvable): any {
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
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_ports: {
      value: cdktf.stringToHclTerraform(struct!.destPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkt_drops: {
      value: cdktf.booleanToHclTerraform(struct!.pktDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.stringToHclTerraform(struct!.sourcePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_flags: {
      value: cdktf.stringToHclTerraform(struct!.tcpFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._destPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPorts = this._destPorts;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._pktDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktDrops = this._pktDrops;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._tcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidr = undefined;
      this._destPorts = undefined;
      this._direction = undefined;
      this._enable = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._peerIp = undefined;
      this._pktDrops = undefined;
      this._ports = undefined;
      this._protocol = undefined;
      this._sourcePorts = undefined;
      this._tcpFlags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidr = value.cidr;
      this._destPorts = value.destPorts;
      this._direction = value.direction;
      this._enable = value.enable;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._peerIp = value.peerIp;
      this._pktDrops = value.pktDrops;
      this._ports = value.ports;
      this._protocol = value.protocol;
      this._sourcePorts = value.sourcePorts;
      this._tcpFlags = value.tcpFlags;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dest_ports - computed: false, optional: true, required: false
  private _destPorts?: string; 
  public get destPorts() {
    return this.getStringAttribute('dest_ports');
  }
  public set destPorts(value: string) {
    this._destPorts = value;
  }
  public resetDestPorts() {
    this._destPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortsInput() {
    return this._destPorts;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enable - computed: false, optional: true, required: false
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

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // pkt_drops - computed: false, optional: true, required: false
  private _pktDrops?: boolean | cdktf.IResolvable; 
  public get pktDrops() {
    return this.getBooleanAttribute('pkt_drops');
  }
  public set pktDrops(value: boolean | cdktf.IResolvable) {
    this._pktDrops = value;
  }
  public resetPktDrops() {
    this._pktDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktDropsInput() {
    return this._pktDrops;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string; 
  public get sourcePorts() {
    return this.getStringAttribute('source_ports');
  }
  public set sourcePorts(value: string) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags?: string; 
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }
  public set tcpFlags(value: string) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFileToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFileToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls {
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the provided certificate. If set to 'true', the 'providedCaFile' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * TLS configuration when 'type' is set to 'PROVIDED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#provided DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#provided}
  */
  readonly provided?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided;
  /**
  * Reference to the CA file when 'type' is set to 'PROVIDED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#provided_ca_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#provided_ca_file}
  */
  readonly providedCaFile?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile;
  /**
  * Select the type of TLS configuration:<br> - 'DISABLED' (default) to not configure TLS for the endpoint. - 'PROVIDED' to manually provide cert file and a key file. [Unsupported (*)]. - 'AUTO' to use OpenShift auto generated certificate using annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    provided: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedToTerraform(struct!.provided),
    provided_ca_file: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFileToTerraform(struct!.providedCaFile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provided: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedToHclTerraform(struct!.provided),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided",
    },
    provided_ca_file: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFileToHclTerraform(struct!.providedCaFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._provided?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provided = this._provided?.internalValue;
    }
    if (this._providedCaFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providedCaFile = this._providedCaFile?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = undefined;
      this._provided.internalValue = undefined;
      this._providedCaFile.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._provided.internalValue = value.provided;
      this._providedCaFile.internalValue = value.providedCaFile;
      this._type = value.type;
    }
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // provided - computed: false, optional: true, required: false
  private _provided = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedOutputReference(this, "provided");
  public get provided() {
    return this._provided;
  }
  public putProvided(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvided) {
    this._provided.internalValue = value;
  }
  public resetProvided() {
    this._provided.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedInput() {
    return this._provided.internalValue;
  }

  // provided_ca_file - computed: false, optional: true, required: false
  private _providedCaFile = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFileOutputReference(this, "provided_ca_file");
  public get providedCaFile() {
    return this._providedCaFile;
  }
  public putProvidedCaFile(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsProvidedCaFile) {
    this._providedCaFile.internalValue = value;
  }
  public resetProvidedCaFile() {
    this._providedCaFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedCaFileInput() {
    return this._providedCaFile.internalValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer {
  /**
  * The prometheus HTTP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics {
  /**
  * 'disableAlerts' is a list of alerts that should be disabled. Possible values are:<br> 'NetObservDroppedFlows', which is triggered when the eBPF agent is missing packets or flows, such as when the BPF hashmap is busy or full, or the capacity limiter being triggered.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#disable_alerts DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#disable_alerts}
  */
  readonly disableAlerts?: string[];
  /**
  * Set 'enable' to 'false' to disable eBPF agent metrics collection, by default it's 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Metrics server endpoint configuration for Prometheus scraper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#server DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#server}
  */
  readonly server?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disableAlerts),
    enable: cdktf.booleanToTerraform(struct!.enable),
    server: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerToTerraform(struct!.server),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_alerts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disableAlerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAlerts = this._disableAlerts;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAlerts = undefined;
      this._enable = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAlerts = value.disableAlerts;
      this._enable = value.enable;
      this._server.internalValue = value.server;
    }
  }

  // disable_alerts - computed: false, optional: true, required: false
  private _disableAlerts?: string[]; 
  public get disableAlerts() {
    return this.getListAttribute('disable_alerts');
  }
  public set disableAlerts(value: string[]) {
    this._disableAlerts = value;
  }
  public resetDisableAlerts() {
    this._disableAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAlertsInput() {
    return this._disableAlerts;
  }

  // enable - computed: false, optional: true, required: false
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

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#request DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
    }
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#claims DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#limits DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#requests DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf {
  /**
  * 'cacheActiveTimeout' is the max period during which the reporter aggregates flows before sending. Increasing 'cacheMaxFlows' and 'cacheActiveTimeout' can decrease the network traffic overhead and the CPU load, however you can expect higher memory consumption and an increased latency in the flow collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cache_active_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cache_active_timeout}
  */
  readonly cacheActiveTimeout?: string;
  /**
  * 'cacheMaxFlows' is the max number of flows in an aggregate; when reached, the reporter sends the flows. Increasing 'cacheMaxFlows' and 'cacheActiveTimeout' can decrease the network traffic overhead and the CPU load, however you can expect higher memory consumption and an increased latency in the flow collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cache_max_flows DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cache_max_flows}
  */
  readonly cacheMaxFlows?: number;
  /**
  * 'debug' allows setting some aspects of the internal configuration of the eBPF agent. This section is aimed exclusively for debugging and fine-grained performance optimizations, such as 'GOGC' and 'GOMAXPROCS' env vars. Set these values at your own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#debug DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#debug}
  */
  readonly debug?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug;
  /**
  * 'excludeInterfaces' contains the interface names that are excluded from flow tracing. An entry enclosed by slashes, such as '/br-/', is matched as a regular expression. Otherwise it is matched as a case-sensitive string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#exclude_interfaces DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#exclude_interfaces}
  */
  readonly excludeInterfaces?: string[];
  /**
  * List of additional features to enable. They are all disabled by default. Enabling additional features might have performance impacts. Possible values are:<br> - 'PacketDrop': enable the packets drop flows logging feature. This feature requires mounting the kernel debug filesystem, so the eBPF pod has to run as privileged. If the 'spec.agent.ebpf.privileged' parameter is not set, an error is reported.<br> - 'DNSTracking': enable the DNS tracking feature.<br> - 'FlowRTT': enable flow latency (sRTT) extraction in the eBPF agent from TCP traffic.<br> - 'NetworkEvents': enable the Network events monitoring feature. This feature requires mounting the kernel debug filesystem, so the eBPF pod has to run as privileged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#features DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#features}
  */
  readonly features?: string[];
  /**
  * 'flowFilter' defines the eBPF agent configuration regarding flow filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#flow_filter DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#flow_filter}
  */
  readonly flowFilter?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter;
  /**
  * 'imagePullPolicy' is the Kubernetes pull policy for the image defined above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#image_pull_policy DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * 'interfaces' contains the interface names from where flows are collected. If empty, the agent fetches all the interfaces in the system, excepting the ones listed in ExcludeInterfaces. An entry enclosed by slashes, such as '/br-/', is matched as a regular expression. Otherwise it is matched as a case-sensitive string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#interfaces DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * 'kafkaBatchSize' limits the maximum size of a request in bytes before being sent to a partition. Ignored when not using Kafka. Default: 1MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kafka_batch_size DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kafka_batch_size}
  */
  readonly kafkaBatchSize?: number;
  /**
  * 'logLevel' defines the log level for the NetObserv eBPF Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#log_level DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * 'metrics' defines the eBPF agent configuration regarding metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics;
  /**
  * Privileged mode for the eBPF Agent container. When ignored or set to 'false', the operator sets granular capabilities (BPF, PERFMON, NET_ADMIN, SYS_RESOURCE) to the container. If for some reason these capabilities cannot be set, such as if an old kernel version not knowing CAP_BPF is in use, then you can turn on this mode for more global privileges. Some agent features require the privileged mode, such as packet drops tracking (see 'features') and SR-IOV support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#privileged DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * 'resources' are the compute resources required by this container. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#resources DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources;
  /**
  * Sampling rate of the flow reporter. 100 means one flow on 100 is sent. 0 or 1 means all flows are sampled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#sampling DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#sampling}
  */
  readonly sampling?: number;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_active_timeout: cdktf.stringToTerraform(struct!.cacheActiveTimeout),
    cache_max_flows: cdktf.numberToTerraform(struct!.cacheMaxFlows),
    debug: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebugToTerraform(struct!.debug),
    exclude_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeInterfaces),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    flow_filter: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilterToTerraform(struct!.flowFilter),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
    kafka_batch_size: cdktf.numberToTerraform(struct!.kafkaBatchSize),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    metrics: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsToTerraform(struct!.metrics),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    resources: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesToTerraform(struct!.resources),
    sampling: cdktf.numberToTerraform(struct!.sampling),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_active_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cacheActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_max_flows: {
      value: cdktf.numberToHclTerraform(struct!.cacheMaxFlows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebugToHclTerraform(struct!.debug),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug",
    },
    exclude_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    flow_filter: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilterToHclTerraform(struct!.flowFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kafka_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.kafkaBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheActiveTimeout = this._cacheActiveTimeout;
    }
    if (this._cacheMaxFlows !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMaxFlows = this._cacheMaxFlows;
    }
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._excludeInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInterfaces = this._excludeInterfaces;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._flowFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowFilter = this._flowFilter?.internalValue;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._kafkaBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaBatchSize = this._kafkaBatchSize;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = undefined;
      this._cacheMaxFlows = undefined;
      this._debug.internalValue = undefined;
      this._excludeInterfaces = undefined;
      this._features = undefined;
      this._flowFilter.internalValue = undefined;
      this._imagePullPolicy = undefined;
      this._interfaces = undefined;
      this._kafkaBatchSize = undefined;
      this._logLevel = undefined;
      this._metrics.internalValue = undefined;
      this._privileged = undefined;
      this._resources.internalValue = undefined;
      this._sampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = value.cacheActiveTimeout;
      this._cacheMaxFlows = value.cacheMaxFlows;
      this._debug.internalValue = value.debug;
      this._excludeInterfaces = value.excludeInterfaces;
      this._features = value.features;
      this._flowFilter.internalValue = value.flowFilter;
      this._imagePullPolicy = value.imagePullPolicy;
      this._interfaces = value.interfaces;
      this._kafkaBatchSize = value.kafkaBatchSize;
      this._logLevel = value.logLevel;
      this._metrics.internalValue = value.metrics;
      this._privileged = value.privileged;
      this._resources.internalValue = value.resources;
      this._sampling = value.sampling;
    }
  }

  // cache_active_timeout - computed: false, optional: true, required: false
  private _cacheActiveTimeout?: string; 
  public get cacheActiveTimeout() {
    return this.getStringAttribute('cache_active_timeout');
  }
  public set cacheActiveTimeout(value: string) {
    this._cacheActiveTimeout = value;
  }
  public resetCacheActiveTimeout() {
    this._cacheActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheActiveTimeoutInput() {
    return this._cacheActiveTimeout;
  }

  // cache_max_flows - computed: false, optional: true, required: false
  private _cacheMaxFlows?: number; 
  public get cacheMaxFlows() {
    return this.getNumberAttribute('cache_max_flows');
  }
  public set cacheMaxFlows(value: number) {
    this._cacheMaxFlows = value;
  }
  public resetCacheMaxFlows() {
    this._cacheMaxFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxFlowsInput() {
    return this._cacheMaxFlows;
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // exclude_interfaces - computed: false, optional: true, required: false
  private _excludeInterfaces?: string[]; 
  public get excludeInterfaces() {
    return this.getListAttribute('exclude_interfaces');
  }
  public set excludeInterfaces(value: string[]) {
    this._excludeInterfaces = value;
  }
  public resetExcludeInterfaces() {
    this._excludeInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInterfacesInput() {
    return this._excludeInterfaces;
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // flow_filter - computed: false, optional: true, required: false
  private _flowFilter = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilterOutputReference(this, "flow_filter");
  public get flowFilter() {
    return this._flowFilter;
  }
  public putFlowFilter(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfFlowFilter) {
    this._flowFilter.internalValue = value;
  }
  public resetFlowFilter() {
    this._flowFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowFilterInput() {
    return this._flowFilter.internalValue;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // kafka_batch_size - computed: false, optional: true, required: false
  private _kafkaBatchSize?: number; 
  public get kafkaBatchSize() {
    return this.getNumberAttribute('kafka_batch_size');
  }
  public set kafkaBatchSize(value: number) {
    this._kafkaBatchSize = value;
  }
  public resetKafkaBatchSize() {
    this._kafkaBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBatchSizeInput() {
    return this._kafkaBatchSize;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator {
  /**
  * Namespace where the config map is going to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperatorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperatorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
    }
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes {
  /**
  * 'containerName' defines the name of the container to configure for IPFIX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#container_name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * 'daemonSetName' defines the name of the DaemonSet controlling the OVN-Kubernetes pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#daemon_set_name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#daemon_set_name}
  */
  readonly daemonSetName?: string;
  /**
  * Namespace where OVN-Kubernetes pods are deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    daemon_set_name: cdktf.stringToTerraform(struct!.daemonSetName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daemon_set_name: {
      value: cdktf.stringToHclTerraform(struct!.daemonSetName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._daemonSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSetName = this._daemonSetName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._daemonSetName = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._daemonSetName = value.daemonSetName;
      this._namespace = value.namespace;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // daemon_set_name - computed: false, optional: true, required: false
  private _daemonSetName?: string; 
  public get daemonSetName() {
    return this.getStringAttribute('daemon_set_name');
  }
  public set daemonSetName(value: string) {
    this._daemonSetName = value;
  }
  public resetDaemonSetName() {
    this._daemonSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSetNameInput() {
    return this._daemonSetName;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix {
  /**
  * 'cacheActiveTimeout' is the max period during which the reporter aggregates flows before sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cache_active_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cache_active_timeout}
  */
  readonly cacheActiveTimeout?: string;
  /**
  * 'cacheMaxFlows' is the max number of flows in an aggregate; when reached, the reporter sends the flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cache_max_flows DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cache_max_flows}
  */
  readonly cacheMaxFlows?: number;
  /**
  * 'clusterNetworkOperator' defines the settings related to the OpenShift Cluster Network Operator, when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cluster_network_operator DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cluster_network_operator}
  */
  readonly clusterNetworkOperator?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator;
  /**
  * 'forceSampleAll' allows disabling sampling in the IPFIX-based flow reporter. It is not recommended to sample all the traffic with IPFIX, as it might generate cluster instability. If you REALLY want to do that, set this flag to 'true'. Use at your own risk. When it is set to 'true', the value of 'sampling' is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#force_sample_all DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#force_sample_all}
  */
  readonly forceSampleAll?: boolean | cdktf.IResolvable;
  /**
  * 'ovnKubernetes' defines the settings of the OVN-Kubernetes CNI, when available. This configuration is used when using OVN's IPFIX exports, without OpenShift. When using OpenShift, refer to the 'clusterNetworkOperator' property instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ovn_kubernetes DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ovn_kubernetes}
  */
  readonly ovnKubernetes?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes;
  /**
  * 'sampling' is the sampling rate on the reporter. 100 means one flow on 100 is sent. To ensure cluster stability, it is not possible to set a value below 2. If you really want to sample every packet, which might impact the cluster stability, refer to 'forceSampleAll'. Alternatively, you can use the eBPF Agent instead of IPFIX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#sampling DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#sampling}
  */
  readonly sampling?: number;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_active_timeout: cdktf.stringToTerraform(struct!.cacheActiveTimeout),
    cache_max_flows: cdktf.numberToTerraform(struct!.cacheMaxFlows),
    cluster_network_operator: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperatorToTerraform(struct!.clusterNetworkOperator),
    force_sample_all: cdktf.booleanToTerraform(struct!.forceSampleAll),
    ovn_kubernetes: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetesToTerraform(struct!.ovnKubernetes),
    sampling: cdktf.numberToTerraform(struct!.sampling),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_active_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cacheActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_max_flows: {
      value: cdktf.numberToHclTerraform(struct!.cacheMaxFlows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_network_operator: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperatorToHclTerraform(struct!.clusterNetworkOperator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator",
    },
    force_sample_all: {
      value: cdktf.booleanToHclTerraform(struct!.forceSampleAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ovn_kubernetes: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetesToHclTerraform(struct!.ovnKubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheActiveTimeout = this._cacheActiveTimeout;
    }
    if (this._cacheMaxFlows !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMaxFlows = this._cacheMaxFlows;
    }
    if (this._clusterNetworkOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNetworkOperator = this._clusterNetworkOperator?.internalValue;
    }
    if (this._forceSampleAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSampleAll = this._forceSampleAll;
    }
    if (this._ovnKubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovnKubernetes = this._ovnKubernetes?.internalValue;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = undefined;
      this._cacheMaxFlows = undefined;
      this._clusterNetworkOperator.internalValue = undefined;
      this._forceSampleAll = undefined;
      this._ovnKubernetes.internalValue = undefined;
      this._sampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = value.cacheActiveTimeout;
      this._cacheMaxFlows = value.cacheMaxFlows;
      this._clusterNetworkOperator.internalValue = value.clusterNetworkOperator;
      this._forceSampleAll = value.forceSampleAll;
      this._ovnKubernetes.internalValue = value.ovnKubernetes;
      this._sampling = value.sampling;
    }
  }

  // cache_active_timeout - computed: false, optional: true, required: false
  private _cacheActiveTimeout?: string; 
  public get cacheActiveTimeout() {
    return this.getStringAttribute('cache_active_timeout');
  }
  public set cacheActiveTimeout(value: string) {
    this._cacheActiveTimeout = value;
  }
  public resetCacheActiveTimeout() {
    this._cacheActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheActiveTimeoutInput() {
    return this._cacheActiveTimeout;
  }

  // cache_max_flows - computed: false, optional: true, required: false
  private _cacheMaxFlows?: number; 
  public get cacheMaxFlows() {
    return this.getNumberAttribute('cache_max_flows');
  }
  public set cacheMaxFlows(value: number) {
    this._cacheMaxFlows = value;
  }
  public resetCacheMaxFlows() {
    this._cacheMaxFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxFlowsInput() {
    return this._cacheMaxFlows;
  }

  // cluster_network_operator - computed: false, optional: true, required: false
  private _clusterNetworkOperator = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperatorOutputReference(this, "cluster_network_operator");
  public get clusterNetworkOperator() {
    return this._clusterNetworkOperator;
  }
  public putClusterNetworkOperator(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixClusterNetworkOperator) {
    this._clusterNetworkOperator.internalValue = value;
  }
  public resetClusterNetworkOperator() {
    this._clusterNetworkOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkOperatorInput() {
    return this._clusterNetworkOperator.internalValue;
  }

  // force_sample_all - computed: false, optional: true, required: false
  private _forceSampleAll?: boolean | cdktf.IResolvable; 
  public get forceSampleAll() {
    return this.getBooleanAttribute('force_sample_all');
  }
  public set forceSampleAll(value: boolean | cdktf.IResolvable) {
    this._forceSampleAll = value;
  }
  public resetForceSampleAll() {
    this._forceSampleAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSampleAllInput() {
    return this._forceSampleAll;
  }

  // ovn_kubernetes - computed: false, optional: true, required: false
  private _ovnKubernetes = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetesOutputReference(this, "ovn_kubernetes");
  public get ovnKubernetes() {
    return this._ovnKubernetes;
  }
  public putOvnKubernetes(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOvnKubernetes) {
    this._ovnKubernetes.internalValue = value;
  }
  public resetOvnKubernetes() {
    this._ovnKubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovnKubernetesInput() {
    return this._ovnKubernetes.internalValue;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent {
  /**
  * 'ebpf' describes the settings related to the eBPF-based flow reporter when 'spec.agent.type' is set to 'EBPF'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ebpf DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ebpf}
  */
  readonly ebpf?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf;
  /**
  * 'ipfix' [deprecated (*)] - describes the settings related to the IPFIX-based flow reporter when 'spec.agent.type' is set to 'IPFIX'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ipfix DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ipfix}
  */
  readonly ipfix?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix;
  /**
  * 'type' [deprecated (*)] selects the flows tracing agent. The only possible value is 'EBPF' (default), to use NetObserv eBPF agent.<br> Previously, using an IPFIX collector was allowed, but was deprecated and it is now removed.<br> Setting 'IPFIX' is ignored and still use the eBPF Agent. Since there is only a single option here, this field will be remove in a future API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebpf: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfToTerraform(struct!.ebpf),
    ipfix: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixToTerraform(struct!.ipfix),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebpf: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfToHclTerraform(struct!.ebpf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf",
    },
    ipfix: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixToHclTerraform(struct!.ipfix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebpf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpf = this._ebpf?.internalValue;
    }
    if (this._ipfix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfix = this._ipfix?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebpf.internalValue = undefined;
      this._ipfix.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebpf.internalValue = value.ebpf;
      this._ipfix.internalValue = value.ipfix;
      this._type = value.type;
    }
  }

  // ebpf - computed: false, optional: true, required: false
  private _ebpf = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpfOutputReference(this, "ebpf");
  public get ebpf() {
    return this._ebpf;
  }
  public putEbpf(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentEbpf) {
    this._ebpf.internalValue = value;
  }
  public resetEbpf() {
    this._ebpf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpfInput() {
    return this._ebpf.internalValue;
  }

  // ipfix - computed: false, optional: true, required: false
  private _ipfix = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfixOutputReference(this, "ipfix");
  public get ipfix() {
    return this._ipfix;
  }
  public putIpfix(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentIpfix) {
    this._ipfix.internalValue = value;
  }
  public resetIpfix() {
    this._ipfix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfixInput() {
    return this._ipfix.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#container DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#api_version DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kind DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#described_object DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#described_object}
  */
  readonly describedObject: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject",
    },
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable): any {
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#container_resource DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#container_resource}
  */
  readonly containerResource?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#external DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#external}
  */
  readonly external?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#object DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#object}
  */
  readonly object?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#pods DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#pods}
  */
  readonly pods?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#resource DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#resource}
  */
  readonly resource?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resource: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToTerraform(struct!.containerResource),
    external: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalToTerraform(struct!.external),
    object: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectToTerraform(struct!.object),
    pods: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsToTerraform(struct!.pods),
    resource: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource",
    },
    external: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal",
    },
    object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject",
    },
    pods: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods",
    },
    resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResource = this._containerResource?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = undefined;
      this._external.internalValue = undefined;
      this._object.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._resource.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = value.containerResource;
      this._external.internalValue = value.external;
      this._object.internalValue = value.object;
      this._pods.internalValue = value.pods;
      this._resource.internalValue = value.resource;
      this._type = value.type;
    }
  }

  // container_resource - computed: false, optional: true, required: false
  private _containerResource = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsContainerResource) {
    this._containerResource.internalValue = value;
  }
  public resetContainerResource() {
    this._containerResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceInput() {
    return this._containerResource.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler {
  /**
  * 'maxReplicas' is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#max_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Metrics used by the pod autoscaler. For documentation, refer to https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/horizontal-pod-autoscaler-v2/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics[] | cdktf.IResolvable;
  /**
  * 'minReplicas' is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured. Scaling is active as long as at least one metric value is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#min_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * 'status' describes the desired status regarding deploying an horizontal pod autoscaler.<br> - 'DISABLED' does not deploy an horizontal pod autoscaler.<br> - 'ENABLED' deploys an horizontal pod autoscaler.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#status DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._minReplicas = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._metrics.internalValue = value.metrics;
      this._minReplicas = value.minReplicas;
      this._status = value.status;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming {
  /**
  * Enable the console plugin port-to-service name translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'portNames' defines additional port names to use in the console, for example, 'portNames: {'3100': 'loki'}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#port_names DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#port_names}
  */
  readonly portNames?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNamingToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    port_names: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.portNames),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNamingToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable): any {
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
    port_names: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.portNames),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._portNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNames = this._portNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._portNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._portNames = value.portNames;
    }
  }

  // enable - computed: false, optional: true, required: false
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

  // port_names - computed: false, optional: true, required: false
  private _portNames?: { [key: string]: string }; 
  public get portNames() {
    return this.getStringMapAttribute('port_names');
  }
  public set portNames(value: { [key: string]: string }) {
    this._portNames = value;
  }
  public resetPortNames() {
    this._portNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNamesInput() {
    return this._portNames;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters {
  /**
  * 'default' defines whether this filter should be active by default or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#default DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * 'filter' is a set of keys and values to be set when this filter is selected. Each key can relate to a list of values using a coma-separated string, for example, 'filter: {'src_namespace': 'namespace1,namespace2'}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#filter DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#filter}
  */
  readonly filter: { [key: string]: string };
  /**
  * Name of the filter, that is displayed in the Console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.filter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#request DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
    }
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#claims DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#limits DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#requests DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin {
  /**
  * 'autoscaler' spec of a horizontal pod autoscaler to set up for the plugin Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#autoscaler DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#autoscaler}
  */
  readonly autoscaler?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler;
  /**
  * Enables the console plugin deployment. 'spec.loki.enable' must also be 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'imagePullPolicy' is the Kubernetes pull policy for the image defined above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#image_pull_policy DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * 'logLevel' for the console plugin backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#log_level DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * 'port' is the plugin service port. Do not use 9002, which is reserved for metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * 'portNaming' defines the configuration of the port-to-service name translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#port_naming DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#port_naming}
  */
  readonly portNaming?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming;
  /**
  * 'quickFilters' configures quick filter presets for the Console plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#quick_filters DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#quick_filters}
  */
  readonly quickFilters?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters[] | cdktf.IResolvable;
  /**
  * 'register' allows, when set to 'true', to automatically register the provided console plugin with the OpenShift Console operator. When set to 'false', you can still register it manually by editing console.operator.openshift.io/cluster with the following command: 'oc patch console.operator.openshift.io cluster --type='json' -p '[{'op': 'add', 'path': '/spec/plugins/-', 'value': 'netobserv-plugin'}]''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#register DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#register}
  */
  readonly register?: boolean | cdktf.IResolvable;
  /**
  * 'replicas' defines the number of replicas (pods) to start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * 'resources', in terms of compute resources, required by this container. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#resources DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaler: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerToTerraform(struct!.autoscaler),
    enable: cdktf.booleanToTerraform(struct!.enable),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    port: cdktf.numberToTerraform(struct!.port),
    port_naming: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNamingToTerraform(struct!.portNaming),
    quick_filters: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersToTerraform, false)(struct!.quickFilters),
    register: cdktf.booleanToTerraform(struct!.register),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaler: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerToHclTerraform(struct!.autoscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_naming: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNamingToHclTerraform(struct!.portNaming),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming",
    },
    quick_filters: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersToHclTerraform, false)(struct!.quickFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersList",
    },
    register: {
      value: cdktf.booleanToHclTerraform(struct!.register),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portNaming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNaming = this._portNaming?.internalValue;
    }
    if (this._quickFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickFilters = this._quickFilters?.internalValue;
    }
    if (this._register !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaler.internalValue = undefined;
      this._enable = undefined;
      this._imagePullPolicy = undefined;
      this._logLevel = undefined;
      this._port = undefined;
      this._portNaming.internalValue = undefined;
      this._quickFilters.internalValue = undefined;
      this._register = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaler.internalValue = value.autoscaler;
      this._enable = value.enable;
      this._imagePullPolicy = value.imagePullPolicy;
      this._logLevel = value.logLevel;
      this._port = value.port;
      this._portNaming.internalValue = value.portNaming;
      this._quickFilters.internalValue = value.quickFilters;
      this._register = value.register;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
    }
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // enable - computed: false, optional: true, required: false
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

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
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

  // port_naming - computed: false, optional: true, required: false
  private _portNaming = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNamingOutputReference(this, "port_naming");
  public get portNaming() {
    return this._portNaming;
  }
  public putPortNaming(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginPortNaming) {
    this._portNaming.internalValue = value;
  }
  public resetPortNaming() {
    this._portNaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNamingInput() {
    return this._portNaming.internalValue;
  }

  // quick_filters - computed: false, optional: true, required: false
  private _quickFilters = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFiltersList(this, "quick_filters", false);
  public get quickFilters() {
    return this._quickFilters;
  }
  public putQuickFilters(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginQuickFilters[] | cdktf.IResolvable) {
    this._quickFilters.internalValue = value;
  }
  public resetQuickFilters() {
    this._quickFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickFiltersInput() {
    return this._quickFilters.internalValue;
  }

  // register - computed: false, optional: true, required: false
  private _register?: boolean | cdktf.IResolvable; 
  public get register() {
    return this.getBooleanAttribute('register');
  }
  public set register(value: boolean | cdktf.IResolvable) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix {
  /**
  * Address of the IPFIX external receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target_host DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target_host}
  */
  readonly targetHost: string;
  /**
  * Port for the IPFIX external receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target_port DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target_port}
  */
  readonly targetPort: number;
  /**
  * Transport protocol ('TCP' or 'UDP') to be used for the IPFIX connection, defaults to 'TCP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#transport DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#transport}
  */
  readonly transport?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfixToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_host: cdktf.stringToTerraform(struct!.targetHost),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    transport: cdktf.stringToTerraform(struct!.transport),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfixToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_host: {
      value: cdktf.stringToHclTerraform(struct!.targetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport: {
      value: cdktf.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetHost = this._targetHost;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetHost = undefined;
      this._targetPort = undefined;
      this._transport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetHost = value.targetHost;
      this._targetPort = value.targetPort;
      this._transport = value.transport;
    }
  }

  // target_host - computed: false, optional: false, required: true
  private _targetHost?: string; 
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }
  public set targetHost(value: string) {
    this._targetHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostInput() {
    return this._targetHost;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl {
  /**
  * Reference to the secret or config map containing the client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#client_id_reference DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#client_id_reference}
  */
  readonly clientIdReference?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference;
  /**
  * Reference to the secret or config map containing the client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#client_secret_reference DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#client_secret_reference}
  */
  readonly clientSecretReference?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference;
  /**
  * Type of SASL authentication to use, or 'DISABLED' if SASL is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_reference: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReferenceToTerraform(struct!.clientIdReference),
    client_secret_reference: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReferenceToTerraform(struct!.clientSecretReference),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReferenceToHclTerraform(struct!.clientIdReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference",
    },
    client_secret_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReferenceToHclTerraform(struct!.clientSecretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdReference = this._clientIdReference?.internalValue;
    }
    if (this._clientSecretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretReference = this._clientSecretReference?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = undefined;
      this._clientSecretReference.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = value.clientIdReference;
      this._clientSecretReference.internalValue = value.clientSecretReference;
      this._type = value.type;
    }
  }

  // client_id_reference - computed: false, optional: true, required: false
  private _clientIdReference = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReferenceOutputReference(this, "client_id_reference");
  public get clientIdReference() {
    return this._clientIdReference;
  }
  public putClientIdReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientIdReference) {
    this._clientIdReference.internalValue = value;
  }
  public resetClientIdReference() {
    this._clientIdReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdReferenceInput() {
    return this._clientIdReference.internalValue;
  }

  // client_secret_reference - computed: false, optional: true, required: false
  private _clientSecretReference = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReferenceOutputReference(this, "client_secret_reference");
  public get clientSecretReference() {
    return this._clientSecretReference;
  }
  public putClientSecretReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslClientSecretReference) {
    this._clientSecretReference.internalValue = value;
  }
  public resetClientSecretReference() {
    this._clientSecretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretReferenceInput() {
    return this._clientSecretReference.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls {
  /**
  * 'caCert' defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert;
  /**
  * Enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the server certificate. If set to 'true', the 'caCert' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * 'userCert' defines the user certificate reference and is used for mTLS (you can ignore it when using one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
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

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka {
  /**
  * Address of the Kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#address DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#address}
  */
  readonly address: string;
  /**
  * SASL authentication configuration. [Unsupported (*)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#sasl DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#sasl}
  */
  readonly sasl?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl;
  /**
  * TLS client configuration. When using TLS, verify that the address matches the Kafka port used for TLS, generally 9093.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls;
  /**
  * Kafka topic to use. It must exist. NetObserv does not create it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#topic DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#topic}
  */
  readonly topic: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    sasl: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslToTerraform(struct!.sasl),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsToTerraform(struct!.tls),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
      this._topic = value.topic;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters {
  /**
  * IPFIX configuration, such as the IP address and port to send enriched IPFIX flows to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ipfix DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ipfix}
  */
  readonly ipfix?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix;
  /**
  * Kafka configuration, such as the address and topic, to send enriched flows to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kafka DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kafka}
  */
  readonly kafka?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka;
  /**
  * 'type' selects the type of exporters. The available options are 'KAFKA' and 'IPFIX'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipfix: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfixToTerraform(struct!.ipfix),
    kafka: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaToTerraform(struct!.kafka),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipfix: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfixToHclTerraform(struct!.ipfix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix",
    },
    kafka: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipfix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfix = this._ipfix?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipfix.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipfix.internalValue = value.ipfix;
      this._kafka.internalValue = value.kafka;
      this._type = value.type;
    }
  }

  // ipfix - computed: false, optional: true, required: false
  private _ipfix = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfixOutputReference(this, "ipfix");
  public get ipfix() {
    return this._ipfix;
  }
  public putIpfix(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersIpfix) {
    this._ipfix.internalValue = value;
  }
  public resetIpfix() {
    this._ipfix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfixInput() {
    return this._ipfix.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl {
  /**
  * Reference to the secret or config map containing the client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#client_id_reference DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#client_id_reference}
  */
  readonly clientIdReference?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference;
  /**
  * Reference to the secret or config map containing the client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#client_secret_reference DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#client_secret_reference}
  */
  readonly clientSecretReference?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference;
  /**
  * Type of SASL authentication to use, or 'DISABLED' if SASL is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_reference: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReferenceToTerraform(struct!.clientIdReference),
    client_secret_reference: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReferenceToTerraform(struct!.clientSecretReference),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReferenceToHclTerraform(struct!.clientIdReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference",
    },
    client_secret_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReferenceToHclTerraform(struct!.clientSecretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdReference = this._clientIdReference?.internalValue;
    }
    if (this._clientSecretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretReference = this._clientSecretReference?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = undefined;
      this._clientSecretReference.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = value.clientIdReference;
      this._clientSecretReference.internalValue = value.clientSecretReference;
      this._type = value.type;
    }
  }

  // client_id_reference - computed: false, optional: true, required: false
  private _clientIdReference = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReferenceOutputReference(this, "client_id_reference");
  public get clientIdReference() {
    return this._clientIdReference;
  }
  public putClientIdReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientIdReference) {
    this._clientIdReference.internalValue = value;
  }
  public resetClientIdReference() {
    this._clientIdReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdReferenceInput() {
    return this._clientIdReference.internalValue;
  }

  // client_secret_reference - computed: false, optional: true, required: false
  private _clientSecretReference = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReferenceOutputReference(this, "client_secret_reference");
  public get clientSecretReference() {
    return this._clientSecretReference;
  }
  public putClientSecretReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslClientSecretReference) {
    this._clientSecretReference.internalValue = value;
  }
  public resetClientSecretReference() {
    this._clientSecretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretReferenceInput() {
    return this._clientSecretReference.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls {
  /**
  * 'caCert' defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert;
  /**
  * Enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the server certificate. If set to 'true', the 'caCert' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * 'userCert' defines the user certificate reference and is used for mTLS (you can ignore it when using one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
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

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka {
  /**
  * Address of the Kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#address DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#address}
  */
  readonly address: string;
  /**
  * SASL authentication configuration. [Unsupported (*)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#sasl DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#sasl}
  */
  readonly sasl?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl;
  /**
  * TLS client configuration. When using TLS, verify that the address matches the Kafka port used for TLS, generally 9093.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls;
  /**
  * Kafka topic to use. It must exist. NetObserv does not create it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#topic DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#topic}
  */
  readonly topic: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    sasl: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslToTerraform(struct!.sasl),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsToTerraform(struct!.tls),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
      this._topic = value.topic;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls {
  /**
  * 'caCert' defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert;
  /**
  * Enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the server certificate. If set to 'true', the 'caCert' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * 'userCert' defines the user certificate reference and is used for mTLS (you can ignore it when using one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
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

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls {
  /**
  * 'caCert' defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert;
  /**
  * Enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the server certificate. If set to 'true', the 'caCert' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * 'userCert' defines the user certificate reference and is used for mTLS (you can ignore it when using one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
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

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki {
  /**
  * 'authToken' describes the way to get a token to authenticate to Loki.<br> - 'DISABLED' does not send any token with the request.<br> - 'FORWARD' forwards the user token for authorization.<br> - 'HOST' [deprecated (*)] - uses the local pod service account to authenticate to Loki.<br> When using the Loki Operator, this must be set to 'FORWARD'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#auth_token DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#auth_token}
  */
  readonly authToken?: string;
  /**
  * 'batchSize' is the maximum batch size (in bytes) of logs to accumulate before sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#batch_size DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * 'batchWait' is the maximum time to wait before sending a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#batch_wait DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#batch_wait}
  */
  readonly batchWait?: string;
  /**
  * Set 'enable' to 'true' to store flows in Loki. The Console plugin can use either Loki or Prometheus as a data source for metrics (see also 'spec.prometheus.querier'), or both. Not all queries are transposable from Loki to Prometheus. Hence, if Loki is disabled, some features of the plugin are disabled as well, such as getting per-pod information or viewing raw flows. If both Prometheus and Loki are enabled, Prometheus takes precedence and Loki is used as a fallback for queries that Prometheus cannot handle. If they are both disabled, the Console plugin is not deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'maxBackoff' is the maximum backoff time for client connection between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#max_backoff DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#max_backoff}
  */
  readonly maxBackoff?: string;
  /**
  * 'maxRetries' is the maximum number of retries for client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#max_retries DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * 'minBackoff' is the initial backoff time for client connection between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#min_backoff DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#min_backoff}
  */
  readonly minBackoff?: string;
  /**
  * 'querierURL' specifies the address of the Loki querier service, in case it is different from the Loki ingester URL. If empty, the URL value is used (assuming that the Loki ingester and querier are in the same server). When using the Loki Operator, do not set it, since ingestion and queries use the Loki gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#querier_url DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#querier_url}
  */
  readonly querierUrl?: string;
  /**
  * 'readTimeout' is the maximum loki query total time limit. A timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#read_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * 'staticLabels' is a map of common labels to set on each flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#static_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#static_labels}
  */
  readonly staticLabels?: { [key: string]: string };
  /**
  * TLS client configuration for Loki status URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#status_tls DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#status_tls}
  */
  readonly statusTls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls;
  /**
  * 'statusURL' specifies the address of the Loki '/ready', '/metrics' and '/config' endpoints, in case it is different from the Loki querier URL. If empty, the 'querierURL' value is used. This is useful to show error messages and some context in the frontend. When using the Loki Operator, set it to the Loki HTTP query frontend service, for example https://loki-query-frontend-http.netobserv.svc:3100/. 'statusTLS' configuration is used when 'statusUrl' is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#status_url DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#status_url}
  */
  readonly statusUrl?: string;
  /**
  * 'tenantID' is the Loki 'X-Scope-OrgID' that identifies the tenant for each request. When using the Loki Operator, set it to 'network', which corresponds to a special tenant mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tenant_id DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * 'timeout' is the maximum processor time connection / request limit. A timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * TLS client configuration for Loki URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls;
  /**
  * 'url' is the address of an existing Loki service to push the flows to. When using the Loki Operator, set it to the Loki gateway service with the 'network' tenant set in path, for example https://loki-gateway-http.netobserv.svc:8080/api/logs/v1/network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#url DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    batch_wait: cdktf.stringToTerraform(struct!.batchWait),
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_backoff: cdktf.stringToTerraform(struct!.maxBackoff),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    min_backoff: cdktf.stringToTerraform(struct!.minBackoff),
    querier_url: cdktf.stringToTerraform(struct!.querierUrl),
    read_timeout: cdktf.stringToTerraform(struct!.readTimeout),
    static_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticLabels),
    status_tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsToTerraform(struct!.statusTls),
    status_url: cdktf.stringToTerraform(struct!.statusUrl),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsToTerraform(struct!.tls),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_wait: {
      value: cdktf.stringToHclTerraform(struct!.batchWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_backoff: {
      value: cdktf.stringToHclTerraform(struct!.maxBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_backoff: {
      value: cdktf.stringToHclTerraform(struct!.minBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    querier_url: {
      value: cdktf.stringToHclTerraform(struct!.querierUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    status_tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsToHclTerraform(struct!.statusTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls",
    },
    status_url: {
      value: cdktf.stringToHclTerraform(struct!.statusUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._batchWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchWait = this._batchWait;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoff = this._maxBackoff;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._minBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackoff = this._minBackoff;
    }
    if (this._querierUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.querierUrl = this._querierUrl;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._staticLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticLabels = this._staticLabels;
    }
    if (this._statusTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusTls = this._statusTls?.internalValue;
    }
    if (this._statusUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUrl = this._statusUrl;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authToken = undefined;
      this._batchSize = undefined;
      this._batchWait = undefined;
      this._enable = undefined;
      this._maxBackoff = undefined;
      this._maxRetries = undefined;
      this._minBackoff = undefined;
      this._querierUrl = undefined;
      this._readTimeout = undefined;
      this._staticLabels = undefined;
      this._statusTls.internalValue = undefined;
      this._statusUrl = undefined;
      this._tenantId = undefined;
      this._timeout = undefined;
      this._tls.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authToken = value.authToken;
      this._batchSize = value.batchSize;
      this._batchWait = value.batchWait;
      this._enable = value.enable;
      this._maxBackoff = value.maxBackoff;
      this._maxRetries = value.maxRetries;
      this._minBackoff = value.minBackoff;
      this._querierUrl = value.querierUrl;
      this._readTimeout = value.readTimeout;
      this._staticLabels = value.staticLabels;
      this._statusTls.internalValue = value.statusTls;
      this._statusUrl = value.statusUrl;
      this._tenantId = value.tenantId;
      this._timeout = value.timeout;
      this._tls.internalValue = value.tls;
      this._url = value.url;
    }
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // batch_wait - computed: false, optional: true, required: false
  private _batchWait?: string; 
  public get batchWait() {
    return this.getStringAttribute('batch_wait');
  }
  public set batchWait(value: string) {
    this._batchWait = value;
  }
  public resetBatchWait() {
    this._batchWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchWaitInput() {
    return this._batchWait;
  }

  // enable - computed: false, optional: true, required: false
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

  // max_backoff - computed: false, optional: true, required: false
  private _maxBackoff?: string; 
  public get maxBackoff() {
    return this.getStringAttribute('max_backoff');
  }
  public set maxBackoff(value: string) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // min_backoff - computed: false, optional: true, required: false
  private _minBackoff?: string; 
  public get minBackoff() {
    return this.getStringAttribute('min_backoff');
  }
  public set minBackoff(value: string) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff;
  }

  // querier_url - computed: false, optional: true, required: false
  private _querierUrl?: string; 
  public get querierUrl() {
    return this.getStringAttribute('querier_url');
  }
  public set querierUrl(value: string) {
    this._querierUrl = value;
  }
  public resetQuerierUrl() {
    this._querierUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierUrlInput() {
    return this._querierUrl;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // static_labels - computed: false, optional: true, required: false
  private _staticLabels?: { [key: string]: string }; 
  public get staticLabels() {
    return this.getStringMapAttribute('static_labels');
  }
  public set staticLabels(value: { [key: string]: string }) {
    this._staticLabels = value;
  }
  public resetStaticLabels() {
    this._staticLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticLabelsInput() {
    return this._staticLabels;
  }

  // status_tls - computed: false, optional: true, required: false
  private _statusTls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTlsOutputReference(this, "status_tls");
  public get statusTls() {
    return this._statusTls;
  }
  public putStatusTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiStatusTls) {
    this._statusTls.internalValue = value;
  }
  public resetStatusTls() {
    this._statusTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusTlsInput() {
    return this._statusTls.internalValue;
  }

  // status_url - computed: false, optional: true, required: false
  private _statusUrl?: string; 
  public get statusUrl() {
    return this.getStringAttribute('status_url');
  }
  public set statusUrl(value: string) {
    this._statusUrl = value;
  }
  public resetStatusUrl() {
    this._statusUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUrlInput() {
    return this._statusUrl;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug {
  /**
  * 'env' allows passing custom environment variables to underlying components. Useful for passing some very concrete performance-tuning options, such as 'GOGC' and 'GOMAXPROCS', that should not be publicly exposed as part of the FlowCollector descriptor, as they are only useful in edge debug or support scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#env DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#env}
  */
  readonly env?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebugToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebugToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#container DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#api_version DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kind DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#described_object DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#described_object}
  */
  readonly describedObject: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject",
    },
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable): any {
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#container_resource DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#container_resource}
  */
  readonly containerResource?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#external DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#external}
  */
  readonly external?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#object DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#object}
  */
  readonly object?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#pods DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#pods}
  */
  readonly pods?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#resource DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#resource}
  */
  readonly resource?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resource: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToTerraform(struct!.containerResource),
    external: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToTerraform(struct!.external),
    object: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToTerraform(struct!.object),
    pods: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToTerraform(struct!.pods),
    resource: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource",
    },
    external: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal",
    },
    object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject",
    },
    pods: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods",
    },
    resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResource = this._containerResource?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = undefined;
      this._external.internalValue = undefined;
      this._object.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._resource.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = value.containerResource;
      this._external.internalValue = value.external;
      this._object.internalValue = value.object;
      this._pods.internalValue = value.pods;
      this._resource.internalValue = value.resource;
      this._type = value.type;
    }
  }

  // container_resource - computed: false, optional: true, required: false
  private _containerResource = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource) {
    this._containerResource.internalValue = value;
  }
  public resetContainerResource() {
    this._containerResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceInput() {
    return this._containerResource.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler {
  /**
  * 'maxReplicas' is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#max_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Metrics used by the pod autoscaler. For documentation, refer to https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/horizontal-pod-autoscaler-v2/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable;
  /**
  * 'minReplicas' is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured. Scaling is active as long as at least one metric value is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#min_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * 'status' describes the desired status regarding deploying an horizontal pod autoscaler.<br> - 'DISABLED' does not deploy an horizontal pod autoscaler.<br> - 'ENABLED' deploys an horizontal pod autoscaler.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#status DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._minReplicas = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._metrics.internalValue = value.metrics;
      this._minReplicas = value.minReplicas;
      this._status = value.status;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFileToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFileToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls {
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the provided certificate. If set to 'true', the 'providedCaFile' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * TLS configuration when 'type' is set to 'PROVIDED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#provided DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#provided}
  */
  readonly provided?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided;
  /**
  * Reference to the CA file when 'type' is set to 'PROVIDED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#provided_ca_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#provided_ca_file}
  */
  readonly providedCaFile?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile;
  /**
  * Select the type of TLS configuration:<br> - 'DISABLED' (default) to not configure TLS for the endpoint. - 'PROVIDED' to manually provide cert file and a key file. [Unsupported (*)]. - 'AUTO' to use OpenShift auto generated certificate using annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    provided: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedToTerraform(struct!.provided),
    provided_ca_file: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFileToTerraform(struct!.providedCaFile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provided: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedToHclTerraform(struct!.provided),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided",
    },
    provided_ca_file: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFileToHclTerraform(struct!.providedCaFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._provided?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provided = this._provided?.internalValue;
    }
    if (this._providedCaFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providedCaFile = this._providedCaFile?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = undefined;
      this._provided.internalValue = undefined;
      this._providedCaFile.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._provided.internalValue = value.provided;
      this._providedCaFile.internalValue = value.providedCaFile;
      this._type = value.type;
    }
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // provided - computed: false, optional: true, required: false
  private _provided = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedOutputReference(this, "provided");
  public get provided() {
    return this._provided;
  }
  public putProvided(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvided) {
    this._provided.internalValue = value;
  }
  public resetProvided() {
    this._provided.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedInput() {
    return this._provided.internalValue;
  }

  // provided_ca_file - computed: false, optional: true, required: false
  private _providedCaFile = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFileOutputReference(this, "provided_ca_file");
  public get providedCaFile() {
    return this._providedCaFile;
  }
  public putProvidedCaFile(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsProvidedCaFile) {
    this._providedCaFile.internalValue = value;
  }
  public resetProvidedCaFile() {
    this._providedCaFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedCaFileInput() {
    return this._providedCaFile.internalValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer {
  /**
  * The prometheus HTTP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics {
  /**
  * 'disableAlerts' is a list of alerts that should be disabled. Possible values are:<br> 'NetObservNoFlows', which is triggered when no flows are being observed for a certain period.<br> 'NetObservLokiError', which is triggered when flows are being dropped due to Loki errors.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#disable_alerts DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#disable_alerts}
  */
  readonly disableAlerts?: string[];
  /**
  * 'ignoreTags' [deprecated (*)] is a list of tags to specify which metrics to ignore. Each metric is associated with a list of tags. More details in https://github.com/netobserv/network-observability-operator/tree/main/controllers/flowlogspipeline/metrics_definitions . Available tags are: 'egress', 'ingress', 'flows', 'bytes', 'packets', 'namespaces', 'nodes', 'workloads', 'nodes-flows', 'namespaces-flows', 'workloads-flows'. Namespace-based metrics are covered by both 'workloads' and 'namespaces' tags, hence it is recommended to always ignore one of them ('workloads' offering a finer granularity).<br> Deprecation notice: use 'includeList' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ignore_tags DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ignore_tags}
  */
  readonly ignoreTags?: string[];
  /**
  * 'includeList' is a list of metric names to specify which ones to generate. The names correspond to the names in Prometheus without the prefix. For example, 'namespace_egress_packets_total' will show up as 'netobserv_namespace_egress_packets_total' in Prometheus. Note that the more metrics you add, the bigger is the impact on Prometheus workload resources. Metrics enabled by default are: 'namespace_flows_total', 'node_ingress_bytes_total', 'workload_ingress_bytes_total', 'namespace_drop_packets_total' (when 'PacketDrop' feature is enabled), 'namespace_rtt_seconds' (when 'FlowRTT' feature is enabled), 'namespace_dns_latency_seconds' (when 'DNSTracking' feature is enabled). More information, with full list of available metrics: https://github.com/netobserv/network-observability-operator/blob/main/docs/Metrics.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#include_list DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#include_list}
  */
  readonly includeList?: string[];
  /**
  * Metrics server endpoint configuration for Prometheus scraper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#server DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#server}
  */
  readonly server?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disableAlerts),
    ignore_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreTags),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
    server: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerToTerraform(struct!.server),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_alerts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disableAlerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAlerts = this._disableAlerts;
    }
    if (this._ignoreTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTags = this._ignoreTags;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAlerts = undefined;
      this._ignoreTags = undefined;
      this._includeList = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAlerts = value.disableAlerts;
      this._ignoreTags = value.ignoreTags;
      this._includeList = value.includeList;
      this._server.internalValue = value.server;
    }
  }

  // disable_alerts - computed: false, optional: true, required: false
  private _disableAlerts?: string[]; 
  public get disableAlerts() {
    return this.getListAttribute('disable_alerts');
  }
  public set disableAlerts(value: string[]) {
    this._disableAlerts = value;
  }
  public resetDisableAlerts() {
    this._disableAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAlertsInput() {
    return this._disableAlerts;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: string[]; 
  public get ignoreTags() {
    return this.getListAttribute('ignore_tags');
  }
  public set ignoreTags(value: string[]) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#request DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
    }
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#claims DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#limits DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#requests DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels {
  /**
  * List of CIDRs, such as '['1.2.3.4/32']'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cidrs DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cidrs}
  */
  readonly cidrs: string[];
  /**
  * Label name, used to flag matching flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
      this._name = value.name;
    }
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
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
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels {
  /**
  * 'customLabels' allows to customize subnets and IPs labelling, such as to identify cluster-external workloads or web services. If you enable 'openShiftAutoDetect', 'customLabels' can override the detected subnets in case they overlap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#custom_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#custom_labels}
  */
  readonly customLabels?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels[] | cdktf.IResolvable;
  /**
  * 'openShiftAutoDetect' allows, when set to 'true', to detect automatically the machines, pods and services subnets based on the OpenShift install configuration and the Cluster Network Operator configuration. Indirectly, this is a way to accurately detect external traffic: flows that are not labeled for those subnets are external to the cluster. Enabled by default on OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#open_shift_auto_detect DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#open_shift_auto_detect}
  */
  readonly openShiftAutoDetect?: boolean | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_labels: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsToTerraform, false)(struct!.customLabels),
    open_shift_auto_detect: cdktf.booleanToTerraform(struct!.openShiftAutoDetect),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_labels: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsToHclTerraform, false)(struct!.customLabels),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsList",
    },
    open_shift_auto_detect: {
      value: cdktf.booleanToHclTerraform(struct!.openShiftAutoDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabels = this._customLabels?.internalValue;
    }
    if (this._openShiftAutoDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.openShiftAutoDetect = this._openShiftAutoDetect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customLabels.internalValue = undefined;
      this._openShiftAutoDetect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customLabels.internalValue = value.customLabels;
      this._openShiftAutoDetect = value.openShiftAutoDetect;
    }
  }

  // custom_labels - computed: false, optional: true, required: false
  private _customLabels = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabelsList(this, "custom_labels", false);
  public get customLabels() {
    return this._customLabels;
  }
  public putCustomLabels(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsCustomLabels[] | cdktf.IResolvable) {
    this._customLabels.internalValue = value;
  }
  public resetCustomLabels() {
    this._customLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelsInput() {
    return this._customLabels.internalValue;
  }

  // open_shift_auto_detect - computed: false, optional: true, required: false
  private _openShiftAutoDetect?: boolean | cdktf.IResolvable; 
  public get openShiftAutoDetect() {
    return this.getBooleanAttribute('open_shift_auto_detect');
  }
  public set openShiftAutoDetect(value: boolean | cdktf.IResolvable) {
    this._openShiftAutoDetect = value;
  }
  public resetOpenShiftAutoDetect() {
    this._openShiftAutoDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openShiftAutoDetectInput() {
    return this._openShiftAutoDetect;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor {
  /**
  * 'addZone' allows availability zone awareness by labelling flows with their source and destination zones. This feature requires the 'topology.kubernetes.io/zone' label to be set on nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#add_zone DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#add_zone}
  */
  readonly addZone?: boolean | cdktf.IResolvable;
  /**
  * 'clusterName' is the name of the cluster to appear in the flows data. This is useful in a multi-cluster context. When using OpenShift, leave empty to make it automatically determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cluster_name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * 'conversationEndTimeout' is the time to wait after a network flow is received, to consider the conversation ended. This delay is ignored when a FIN packet is collected for TCP flows (see 'conversationTerminatingTimeout' instead).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#conversation_end_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#conversation_end_timeout}
  */
  readonly conversationEndTimeout?: string;
  /**
  * 'conversationHeartbeatInterval' is the time to wait between 'tick' events of a conversation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#conversation_heartbeat_interval DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#conversation_heartbeat_interval}
  */
  readonly conversationHeartbeatInterval?: string;
  /**
  * 'conversationTerminatingTimeout' is the time to wait from detected FIN flag to end a conversation. Only relevant for TCP flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#conversation_terminating_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#conversation_terminating_timeout}
  */
  readonly conversationTerminatingTimeout?: string;
  /**
  * 'debug' allows setting some aspects of the internal configuration of the flow processor. This section is aimed exclusively for debugging and fine-grained performance optimizations, such as 'GOGC' and 'GOMAXPROCS' env vars. Set these values at your own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#debug DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#debug}
  */
  readonly debug?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug;
  /**
  * 'dropUnusedFields' [deprecated (*)] this setting is not used anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#drop_unused_fields DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#drop_unused_fields}
  */
  readonly dropUnusedFields?: boolean | cdktf.IResolvable;
  /**
  * 'enableKubeProbes' is a flag to enable or disable Kubernetes liveness and readiness probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable_kube_probes DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable_kube_probes}
  */
  readonly enableKubeProbes?: boolean | cdktf.IResolvable;
  /**
  * 'healthPort' is a collector HTTP port in the Pod that exposes the health check API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#health_port DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#health_port}
  */
  readonly healthPort?: number;
  /**
  * 'imagePullPolicy' is the Kubernetes pull policy for the image defined above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#image_pull_policy DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * 'kafkaConsumerAutoscaler' is the spec of a horizontal pod autoscaler to set up for 'flowlogs-pipeline-transformer', which consumes Kafka messages. This setting is ignored when Kafka is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kafka_consumer_autoscaler DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kafka_consumer_autoscaler}
  */
  readonly kafkaConsumerAutoscaler?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler;
  /**
  * 'kafkaConsumerBatchSize' indicates to the broker the maximum batch size, in bytes, that the consumer accepts. Ignored when not using Kafka. Default: 10MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kafka_consumer_batch_size DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kafka_consumer_batch_size}
  */
  readonly kafkaConsumerBatchSize?: number;
  /**
  * 'kafkaConsumerQueueCapacity' defines the capacity of the internal message queue used in the Kafka consumer client. Ignored when not using Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kafka_consumer_queue_capacity DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kafka_consumer_queue_capacity}
  */
  readonly kafkaConsumerQueueCapacity?: number;
  /**
  * 'kafkaConsumerReplicas' defines the number of replicas (pods) to start for 'flowlogs-pipeline-transformer', which consumes Kafka messages. This setting is ignored when Kafka is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kafka_consumer_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kafka_consumer_replicas}
  */
  readonly kafkaConsumerReplicas?: number;
  /**
  * 'logLevel' of the processor runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#log_level DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * 'logTypes' defines the desired record types to generate. Possible values are:<br> - 'FLOWS' (default) to export regular network flows<br> - 'CONVERSATIONS' to generate events for started conversations, ended conversations as well as periodic 'tick' updates<br> - 'ENDED_CONVERSATIONS' to generate only ended conversations events<br> - 'ALL' to generate both network flows and all conversations events<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#log_types DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#log_types}
  */
  readonly logTypes?: string;
  /**
  * 'Metrics' define the processor configuration regarding metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics;
  /**
  * Set 'multiClusterDeployment' to 'true' to enable multi clusters feature. This adds clusterName label to flows data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#multi_cluster_deployment DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#multi_cluster_deployment}
  */
  readonly multiClusterDeployment?: boolean | cdktf.IResolvable;
  /**
  * Port of the flow collector (host port). By convention, some values are forbidden. It must be greater than 1024 and different from 4500, 4789 and 6081.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * 'profilePort' allows setting up a Go pprof profiler listening to this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#profile_port DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#profile_port}
  */
  readonly profilePort?: number;
  /**
  * 'resources' are the compute resources required by this container. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#resources DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources;
  /**
  * 'subnetLabels' allows to define custom labels on subnets and IPs or to enable automatic labelling of recognized subnets in OpenShift. When a subnet matches the source or destination IP of a flow, a corresponding field is added: 'SrcSubnetLabel' or 'DstSubnetLabel'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#subnet_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#subnet_labels}
  */
  readonly subnetLabels?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_zone: cdktf.booleanToTerraform(struct!.addZone),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    conversation_end_timeout: cdktf.stringToTerraform(struct!.conversationEndTimeout),
    conversation_heartbeat_interval: cdktf.stringToTerraform(struct!.conversationHeartbeatInterval),
    conversation_terminating_timeout: cdktf.stringToTerraform(struct!.conversationTerminatingTimeout),
    debug: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebugToTerraform(struct!.debug),
    drop_unused_fields: cdktf.booleanToTerraform(struct!.dropUnusedFields),
    enable_kube_probes: cdktf.booleanToTerraform(struct!.enableKubeProbes),
    health_port: cdktf.numberToTerraform(struct!.healthPort),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    kafka_consumer_autoscaler: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerToTerraform(struct!.kafkaConsumerAutoscaler),
    kafka_consumer_batch_size: cdktf.numberToTerraform(struct!.kafkaConsumerBatchSize),
    kafka_consumer_queue_capacity: cdktf.numberToTerraform(struct!.kafkaConsumerQueueCapacity),
    kafka_consumer_replicas: cdktf.numberToTerraform(struct!.kafkaConsumerReplicas),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    log_types: cdktf.stringToTerraform(struct!.logTypes),
    metrics: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsToTerraform(struct!.metrics),
    multi_cluster_deployment: cdktf.booleanToTerraform(struct!.multiClusterDeployment),
    port: cdktf.numberToTerraform(struct!.port),
    profile_port: cdktf.numberToTerraform(struct!.profilePort),
    resources: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesToTerraform(struct!.resources),
    subnet_labels: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsToTerraform(struct!.subnetLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_zone: {
      value: cdktf.booleanToHclTerraform(struct!.addZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_end_timeout: {
      value: cdktf.stringToHclTerraform(struct!.conversationEndTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_heartbeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.conversationHeartbeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_terminating_timeout: {
      value: cdktf.stringToHclTerraform(struct!.conversationTerminatingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebugToHclTerraform(struct!.debug),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug",
    },
    drop_unused_fields: {
      value: cdktf.booleanToHclTerraform(struct!.dropUnusedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_kube_probes: {
      value: cdktf.booleanToHclTerraform(struct!.enableKubeProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_port: {
      value: cdktf.numberToHclTerraform(struct!.healthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_consumer_autoscaler: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerToHclTerraform(struct!.kafkaConsumerAutoscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler",
    },
    kafka_consumer_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_consumer_queue_capacity: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerQueueCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_consumer_replicas: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types: {
      value: cdktf.stringToHclTerraform(struct!.logTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics",
    },
    multi_cluster_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.multiClusterDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_port: {
      value: cdktf.numberToHclTerraform(struct!.profilePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources",
    },
    subnet_labels: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsToHclTerraform(struct!.subnetLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.addZone = this._addZone;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._conversationEndTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationEndTimeout = this._conversationEndTimeout;
    }
    if (this._conversationHeartbeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationHeartbeatInterval = this._conversationHeartbeatInterval;
    }
    if (this._conversationTerminatingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationTerminatingTimeout = this._conversationTerminatingTimeout;
    }
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._dropUnusedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUnusedFields = this._dropUnusedFields;
    }
    if (this._enableKubeProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKubeProbes = this._enableKubeProbes;
    }
    if (this._healthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPort = this._healthPort;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._kafkaConsumerAutoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerAutoscaler = this._kafkaConsumerAutoscaler?.internalValue;
    }
    if (this._kafkaConsumerBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerBatchSize = this._kafkaConsumerBatchSize;
    }
    if (this._kafkaConsumerQueueCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerQueueCapacity = this._kafkaConsumerQueueCapacity;
    }
    if (this._kafkaConsumerReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerReplicas = this._kafkaConsumerReplicas;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._multiClusterDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiClusterDeployment = this._multiClusterDeployment;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._profilePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilePort = this._profilePort;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._subnetLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetLabels = this._subnetLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addZone = undefined;
      this._clusterName = undefined;
      this._conversationEndTimeout = undefined;
      this._conversationHeartbeatInterval = undefined;
      this._conversationTerminatingTimeout = undefined;
      this._debug.internalValue = undefined;
      this._dropUnusedFields = undefined;
      this._enableKubeProbes = undefined;
      this._healthPort = undefined;
      this._imagePullPolicy = undefined;
      this._kafkaConsumerAutoscaler.internalValue = undefined;
      this._kafkaConsumerBatchSize = undefined;
      this._kafkaConsumerQueueCapacity = undefined;
      this._kafkaConsumerReplicas = undefined;
      this._logLevel = undefined;
      this._logTypes = undefined;
      this._metrics.internalValue = undefined;
      this._multiClusterDeployment = undefined;
      this._port = undefined;
      this._profilePort = undefined;
      this._resources.internalValue = undefined;
      this._subnetLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addZone = value.addZone;
      this._clusterName = value.clusterName;
      this._conversationEndTimeout = value.conversationEndTimeout;
      this._conversationHeartbeatInterval = value.conversationHeartbeatInterval;
      this._conversationTerminatingTimeout = value.conversationTerminatingTimeout;
      this._debug.internalValue = value.debug;
      this._dropUnusedFields = value.dropUnusedFields;
      this._enableKubeProbes = value.enableKubeProbes;
      this._healthPort = value.healthPort;
      this._imagePullPolicy = value.imagePullPolicy;
      this._kafkaConsumerAutoscaler.internalValue = value.kafkaConsumerAutoscaler;
      this._kafkaConsumerBatchSize = value.kafkaConsumerBatchSize;
      this._kafkaConsumerQueueCapacity = value.kafkaConsumerQueueCapacity;
      this._kafkaConsumerReplicas = value.kafkaConsumerReplicas;
      this._logLevel = value.logLevel;
      this._logTypes = value.logTypes;
      this._metrics.internalValue = value.metrics;
      this._multiClusterDeployment = value.multiClusterDeployment;
      this._port = value.port;
      this._profilePort = value.profilePort;
      this._resources.internalValue = value.resources;
      this._subnetLabels.internalValue = value.subnetLabels;
    }
  }

  // add_zone - computed: false, optional: true, required: false
  private _addZone?: boolean | cdktf.IResolvable; 
  public get addZone() {
    return this.getBooleanAttribute('add_zone');
  }
  public set addZone(value: boolean | cdktf.IResolvable) {
    this._addZone = value;
  }
  public resetAddZone() {
    this._addZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addZoneInput() {
    return this._addZone;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // conversation_end_timeout - computed: false, optional: true, required: false
  private _conversationEndTimeout?: string; 
  public get conversationEndTimeout() {
    return this.getStringAttribute('conversation_end_timeout');
  }
  public set conversationEndTimeout(value: string) {
    this._conversationEndTimeout = value;
  }
  public resetConversationEndTimeout() {
    this._conversationEndTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationEndTimeoutInput() {
    return this._conversationEndTimeout;
  }

  // conversation_heartbeat_interval - computed: false, optional: true, required: false
  private _conversationHeartbeatInterval?: string; 
  public get conversationHeartbeatInterval() {
    return this.getStringAttribute('conversation_heartbeat_interval');
  }
  public set conversationHeartbeatInterval(value: string) {
    this._conversationHeartbeatInterval = value;
  }
  public resetConversationHeartbeatInterval() {
    this._conversationHeartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationHeartbeatIntervalInput() {
    return this._conversationHeartbeatInterval;
  }

  // conversation_terminating_timeout - computed: false, optional: true, required: false
  private _conversationTerminatingTimeout?: string; 
  public get conversationTerminatingTimeout() {
    return this.getStringAttribute('conversation_terminating_timeout');
  }
  public set conversationTerminatingTimeout(value: string) {
    this._conversationTerminatingTimeout = value;
  }
  public resetConversationTerminatingTimeout() {
    this._conversationTerminatingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationTerminatingTimeoutInput() {
    return this._conversationTerminatingTimeout;
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // drop_unused_fields - computed: false, optional: true, required: false
  private _dropUnusedFields?: boolean | cdktf.IResolvable; 
  public get dropUnusedFields() {
    return this.getBooleanAttribute('drop_unused_fields');
  }
  public set dropUnusedFields(value: boolean | cdktf.IResolvable) {
    this._dropUnusedFields = value;
  }
  public resetDropUnusedFields() {
    this._dropUnusedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnusedFieldsInput() {
    return this._dropUnusedFields;
  }

  // enable_kube_probes - computed: false, optional: true, required: false
  private _enableKubeProbes?: boolean | cdktf.IResolvable; 
  public get enableKubeProbes() {
    return this.getBooleanAttribute('enable_kube_probes');
  }
  public set enableKubeProbes(value: boolean | cdktf.IResolvable) {
    this._enableKubeProbes = value;
  }
  public resetEnableKubeProbes() {
    this._enableKubeProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubeProbesInput() {
    return this._enableKubeProbes;
  }

  // health_port - computed: false, optional: true, required: false
  private _healthPort?: number; 
  public get healthPort() {
    return this.getNumberAttribute('health_port');
  }
  public set healthPort(value: number) {
    this._healthPort = value;
  }
  public resetHealthPort() {
    this._healthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPortInput() {
    return this._healthPort;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // kafka_consumer_autoscaler - computed: false, optional: true, required: false
  private _kafkaConsumerAutoscaler = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscalerOutputReference(this, "kafka_consumer_autoscaler");
  public get kafkaConsumerAutoscaler() {
    return this._kafkaConsumerAutoscaler;
  }
  public putKafkaConsumerAutoscaler(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorKafkaConsumerAutoscaler) {
    this._kafkaConsumerAutoscaler.internalValue = value;
  }
  public resetKafkaConsumerAutoscaler() {
    this._kafkaConsumerAutoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerAutoscalerInput() {
    return this._kafkaConsumerAutoscaler.internalValue;
  }

  // kafka_consumer_batch_size - computed: false, optional: true, required: false
  private _kafkaConsumerBatchSize?: number; 
  public get kafkaConsumerBatchSize() {
    return this.getNumberAttribute('kafka_consumer_batch_size');
  }
  public set kafkaConsumerBatchSize(value: number) {
    this._kafkaConsumerBatchSize = value;
  }
  public resetKafkaConsumerBatchSize() {
    this._kafkaConsumerBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerBatchSizeInput() {
    return this._kafkaConsumerBatchSize;
  }

  // kafka_consumer_queue_capacity - computed: false, optional: true, required: false
  private _kafkaConsumerQueueCapacity?: number; 
  public get kafkaConsumerQueueCapacity() {
    return this.getNumberAttribute('kafka_consumer_queue_capacity');
  }
  public set kafkaConsumerQueueCapacity(value: number) {
    this._kafkaConsumerQueueCapacity = value;
  }
  public resetKafkaConsumerQueueCapacity() {
    this._kafkaConsumerQueueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerQueueCapacityInput() {
    return this._kafkaConsumerQueueCapacity;
  }

  // kafka_consumer_replicas - computed: false, optional: true, required: false
  private _kafkaConsumerReplicas?: number; 
  public get kafkaConsumerReplicas() {
    return this.getNumberAttribute('kafka_consumer_replicas');
  }
  public set kafkaConsumerReplicas(value: number) {
    this._kafkaConsumerReplicas = value;
  }
  public resetKafkaConsumerReplicas() {
    this._kafkaConsumerReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerReplicasInput() {
    return this._kafkaConsumerReplicas;
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

  // log_types - computed: false, optional: true, required: false
  private _logTypes?: string; 
  public get logTypes() {
    return this.getStringAttribute('log_types');
  }
  public set logTypes(value: string) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // multi_cluster_deployment - computed: false, optional: true, required: false
  private _multiClusterDeployment?: boolean | cdktf.IResolvable; 
  public get multiClusterDeployment() {
    return this.getBooleanAttribute('multi_cluster_deployment');
  }
  public set multiClusterDeployment(value: boolean | cdktf.IResolvable) {
    this._multiClusterDeployment = value;
  }
  public resetMultiClusterDeployment() {
    this._multiClusterDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterDeploymentInput() {
    return this._multiClusterDeployment;
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

  // profile_port - computed: false, optional: true, required: false
  private _profilePort?: number; 
  public get profilePort() {
    return this.getNumberAttribute('profile_port');
  }
  public set profilePort(value: number) {
    this._profilePort = value;
  }
  public resetProfilePort() {
    this._profilePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePortInput() {
    return this._profilePort;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // subnet_labels - computed: false, optional: true, required: false
  private _subnetLabels = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabelsOutputReference(this, "subnet_labels");
  public get subnetLabels() {
    return this._subnetLabels;
  }
  public putSubnetLabels(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorSubnetLabels) {
    this._subnetLabels.internalValue = value;
  }
  public resetSubnetLabels() {
    this._subnetLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetLabelsInput() {
    return this._subnetLabels.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls {
  /**
  * 'caCert' defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert;
  /**
  * Enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the server certificate. If set to 'true', the 'caCert' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * 'userCert' defines the user certificate reference and is used for mTLS (you can ignore it when using one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
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

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual {
  /**
  * Set 'true' to forward logged in user token in queries to Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#forward_user_token DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#forward_user_token}
  */
  readonly forwardUserToken?: boolean | cdktf.IResolvable;
  /**
  * TLS client configuration for Prometheus URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls;
  /**
  * 'url' is the address of an existing Prometheus service to use for querying metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#url DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_user_token: cdktf.booleanToTerraform(struct!.forwardUserToken),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsToTerraform(struct!.tls),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_user_token: {
      value: cdktf.booleanToHclTerraform(struct!.forwardUserToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardUserToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardUserToken = this._forwardUserToken;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardUserToken = undefined;
      this._tls.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardUserToken = value.forwardUserToken;
      this._tls.internalValue = value.tls;
      this._url = value.url;
    }
  }

  // forward_user_token - computed: false, optional: true, required: false
  private _forwardUserToken?: boolean | cdktf.IResolvable; 
  public get forwardUserToken() {
    return this.getBooleanAttribute('forward_user_token');
  }
  public set forwardUserToken(value: boolean | cdktf.IResolvable) {
    this._forwardUserToken = value;
  }
  public resetForwardUserToken() {
    this._forwardUserToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUserTokenInput() {
    return this._forwardUserToken;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier {
  /**
  * Set 'enable' to 'true' to make the Console plugin querying flow metrics from Prometheus instead of Loki whenever possible. The Console plugin can use either Loki or Prometheus as a data source for metrics (see also 'spec.loki'), or both. Not all queries are transposable from Loki to Prometheus. Hence, if Loki is disabled, some features of the plugin are disabled as well, such as getting per-pod information or viewing raw flows. If both Prometheus and Loki are enabled, Prometheus takes precedence and Loki is used as a fallback for queries that Prometheus cannot handle. If they are both disabled, the Console plugin is not deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Prometheus configuration for 'Manual' mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#manual DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#manual}
  */
  readonly manual?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual;
  /**
  * 'mode' must be set according to the type of Prometheus installation that stores NetObserv metrics:<br> - Use 'Auto' to try configuring automatically. In OpenShift, it uses the Thanos querier from OpenShift Cluster Monitoring<br> - Use 'Manual' for a manual setup<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#mode DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#mode}
  */
  readonly mode: string;
  /**
  * 'timeout' is the read timeout for console plugin queries to Prometheus. A timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    manual: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualToTerraform(struct!.manual),
    mode: cdktf.stringToTerraform(struct!.mode),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier | cdktf.IResolvable): any {
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
    manual: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._manual.internalValue = undefined;
      this._mode = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._manual.internalValue = value.manual;
      this._mode = value.mode;
      this._timeout = value.timeout;
    }
  }

  // enable - computed: false, optional: true, required: false
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

  // manual - computed: false, optional: true, required: false
  private _manual = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus {
  /**
  * Prometheus querying configuration, such as client settings, used in the Console plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#querier DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#querier}
  */
  readonly querier?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    querier: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierToTerraform(struct!.querier),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    querier: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierToHclTerraform(struct!.querier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._querier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querier = this._querier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._querier.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._querier.internalValue = value.querier;
    }
  }

  // querier - computed: false, optional: true, required: false
  private _querier = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerierOutputReference(this, "querier");
  public get querier() {
    return this._querier;
  }
  public putQuerier(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusQuerier) {
    this._querier.internalValue = value;
  }
  public resetQuerier() {
    this._querier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec {
  /**
  * Agent configuration for flows extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#agent DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#agent}
  */
  readonly agent?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent;
  /**
  * 'consolePlugin' defines the settings related to the OpenShift Console plugin, when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#console_plugin DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#console_plugin}
  */
  readonly consolePlugin?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin;
  /**
  * 'deploymentModel' defines the desired type of deployment for flow processing. Possible values are:<br> - 'DIRECT' (default) to make the flow processor listening directly from the agents.<br> - 'KAFKA' to make flows sent to a Kafka pipeline before consumption by the processor.<br> Kafka can provide better scalability, resiliency, and high availability (for more details, see https://www.redhat.com/en/topics/integration/what-is-apache-kafka).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#deployment_model DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#deployment_model}
  */
  readonly deploymentModel?: string;
  /**
  * 'exporters' define additional optional exporters for custom consumption or storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#exporters DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#exporters}
  */
  readonly exporters?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters[] | cdktf.IResolvable;
  /**
  * Kafka configuration, allowing to use Kafka as a broker as part of the flow collection pipeline. Available when the 'spec.deploymentModel' is 'KAFKA'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#kafka DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#kafka}
  */
  readonly kafka?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka;
  /**
  * 'loki', the flow store, client settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#loki DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#loki}
  */
  readonly loki?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki;
  /**
  * Namespace where NetObserv pods are deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * 'processor' defines the settings of the component that receives the flows from the agent, enriches them, generates metrics, and forwards them to the Loki persistence layer and/or any available exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#processor DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#processor}
  */
  readonly processor?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor;
  /**
  * 'prometheus' defines Prometheus settings, such as querier configuration used to fetch metrics from the Console plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#prometheus DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentToTerraform(struct!.agent),
    console_plugin: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginToTerraform(struct!.consolePlugin),
    deployment_model: cdktf.stringToTerraform(struct!.deploymentModel),
    exporters: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersToTerraform, false)(struct!.exporters),
    kafka: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaToTerraform(struct!.kafka),
    loki: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiToTerraform(struct!.loki),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    processor: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorToTerraform(struct!.processor),
    prometheus: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusToTerraform(struct!.prometheus),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentToHclTerraform(struct!.agent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent",
    },
    console_plugin: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginToHclTerraform(struct!.consolePlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin",
    },
    deployment_model: {
      value: cdktf.stringToHclTerraform(struct!.deploymentModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exporters: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersToHclTerraform, false)(struct!.exporters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersList",
    },
    kafka: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka",
    },
    loki: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiToHclTerraform(struct!.loki),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processor: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorToHclTerraform(struct!.processor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor",
    },
    prometheus: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    if (this._consolePlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolePlugin = this._consolePlugin?.internalValue;
    }
    if (this._deploymentModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentModel = this._deploymentModel;
    }
    if (this._exporters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporters = this._exporters?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._loki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loki = this._loki?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent.internalValue = undefined;
      this._consolePlugin.internalValue = undefined;
      this._deploymentModel = undefined;
      this._exporters.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._loki.internalValue = undefined;
      this._namespace = undefined;
      this._processor.internalValue = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent.internalValue = value.agent;
      this._consolePlugin.internalValue = value.consolePlugin;
      this._deploymentModel = value.deploymentModel;
      this._exporters.internalValue = value.exporters;
      this._kafka.internalValue = value.kafka;
      this._loki.internalValue = value.loki;
      this._namespace = value.namespace;
      this._processor.internalValue = value.processor;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecAgent) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // console_plugin - computed: false, optional: true, required: false
  private _consolePlugin = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePluginOutputReference(this, "console_plugin");
  public get consolePlugin() {
    return this._consolePlugin;
  }
  public putConsolePlugin(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecConsolePlugin) {
    this._consolePlugin.internalValue = value;
  }
  public resetConsolePlugin() {
    this._consolePlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolePluginInput() {
    return this._consolePlugin.internalValue;
  }

  // deployment_model - computed: false, optional: true, required: false
  private _deploymentModel?: string; 
  public get deploymentModel() {
    return this.getStringAttribute('deployment_model');
  }
  public set deploymentModel(value: string) {
    this._deploymentModel = value;
  }
  public resetDeploymentModel() {
    this._deploymentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModelInput() {
    return this._deploymentModel;
  }

  // exporters - computed: false, optional: true, required: false
  private _exporters = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExportersList(this, "exporters", false);
  public get exporters() {
    return this._exporters;
  }
  public putExporters(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecExporters[] | cdktf.IResolvable) {
    this._exporters.internalValue = value;
  }
  public resetExporters() {
    this._exporters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportersInput() {
    return this._exporters.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // loki - computed: false, optional: true, required: false
  private _loki = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLokiOutputReference(this, "loki");
  public get loki() {
    return this._loki;
  }
  public putLoki(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecLoki) {
    this._loki.internalValue = value;
  }
  public resetLoki() {
    this._loki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lokiInput() {
    return this._loki.internalValue;
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

  // processor - computed: false, optional: true, required: false
  private _processor = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessorOutputReference(this, "processor");
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecProcessor) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest k8s_flows_netobserv_io_flow_collector_v1beta1_manifest}
*/
export class DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flows_netobserv_io_flow_collector_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFlowsNetobservIoFlowCollectorV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flows_netobserv_io_flow_collector_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/flows_netobserv_io_flow_collector_v1beta1_manifest k8s_flows_netobserv_io_flow_collector_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flows_netobserv_io_flow_collector_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
