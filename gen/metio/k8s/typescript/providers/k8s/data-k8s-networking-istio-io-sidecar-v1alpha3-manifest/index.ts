// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#metadata DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata;
  /**
  * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#spec DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec;
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#annotations DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#labels DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#name DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#namespace DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort {
  /**
  * Label assigned to the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#name DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * A valid non-negative integer port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#number DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#number}
  */
  readonly number?: number;
  /**
  * The protocol exposed on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#protocol DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#target_port DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#target_port}
  */
  readonly targetPort?: number;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPortToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPortToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort | cdktf.IResolvable): any {
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._number = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._number = value.number;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
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

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress {
  /**
  * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#bind DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#bind}
  */
  readonly bind?: string;
  /**
  * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not). Valid Options: DEFAULT, IPTABLES, NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#capture_mode DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#capture_mode}
  */
  readonly captureMode?: string;
  /**
  * One or more service hosts exposed by the listener in 'namespace/dnsName' format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#hosts DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#hosts}
  */
  readonly hosts: string[];
  /**
  * The port associated with the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#port DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind: cdktf.stringToTerraform(struct!.bind),
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPortToTerraform(struct!.port),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind: {
      value: cdktf.stringToHclTerraform(struct!.bind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bind !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind;
    }
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bind = undefined;
      this._captureMode = undefined;
      this._hosts = undefined;
      this._port.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bind = value.bind;
      this._captureMode = value.captureMode;
      this._hosts = value.hosts;
      this._port.internalValue = value.port;
    }
  }

  // bind - computed: false, optional: true, required: false
  private _bind?: string; 
  public get bind() {
    return this.getStringAttribute('bind');
  }
  public set bind(value: string) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
  }

  // capture_mode - computed: false, optional: true, required: false
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  public resetCaptureMode() {
    this._captureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressOutputReference {
    return new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp {
  /**
  * Specify if http1.1 connection should be upgraded to http2 for the associated destination. Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#h2_upgrade_policy DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#http1_max_pending_requests DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#http1_max_pending_requests}
  */
  readonly http1MaxPendingRequests?: number;
  /**
  * Maximum number of active requests to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#http2_max_requests DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#http2_max_requests}
  */
  readonly http2MaxRequests?: number;
  /**
  * The idle timeout for upstream connection pool connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#idle_timeout DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_concurrent_streams DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * Maximum number of requests per connection to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_requests_per_connection DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_retries DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * If set to true, client protocol will be preserved while initiating connection to backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#use_client_protocol DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#use_client_protocol}
  */
  readonly useClientProtocol?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttpToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    http1_max_pending_requests: cdktf.numberToTerraform(struct!.http1MaxPendingRequests),
    http2_max_requests: cdktf.numberToTerraform(struct!.http2MaxRequests),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    use_client_protocol: cdktf.booleanToTerraform(struct!.useClientProtocol),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttpToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http1_max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.http1MaxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_max_requests: {
      value: cdktf.numberToHclTerraform(struct!.http2MaxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_client_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.useClientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._http1MaxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1MaxPendingRequests = this._http1MaxPendingRequests;
    }
    if (this._http2MaxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2MaxRequests = this._http2MaxRequests;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._useClientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClientProtocol = this._useClientProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._http1MaxPendingRequests = undefined;
      this._http2MaxRequests = undefined;
      this._idleTimeout = undefined;
      this._maxConcurrentStreams = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
      this._useClientProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._http1MaxPendingRequests = value.http1MaxPendingRequests;
      this._http2MaxRequests = value.http2MaxRequests;
      this._idleTimeout = value.idleTimeout;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
      this._useClientProtocol = value.useClientProtocol;
    }
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // http1_max_pending_requests - computed: false, optional: true, required: false
  private _http1MaxPendingRequests?: number; 
  public get http1MaxPendingRequests() {
    return this.getNumberAttribute('http1_max_pending_requests');
  }
  public set http1MaxPendingRequests(value: number) {
    this._http1MaxPendingRequests = value;
  }
  public resetHttp1MaxPendingRequests() {
    this._http1MaxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1MaxPendingRequestsInput() {
    return this._http1MaxPendingRequests;
  }

  // http2_max_requests - computed: false, optional: true, required: false
  private _http2MaxRequests?: number; 
  public get http2MaxRequests() {
    return this.getNumberAttribute('http2_max_requests');
  }
  public set http2MaxRequests(value: number) {
    this._http2MaxRequests = value;
  }
  public resetHttp2MaxRequests() {
    this._http2MaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxRequestsInput() {
    return this._http2MaxRequests;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
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

  // use_client_protocol - computed: false, optional: true, required: false
  private _useClientProtocol?: boolean | cdktf.IResolvable; 
  public get useClientProtocol() {
    return this.getBooleanAttribute('use_client_protocol');
  }
  public set useClientProtocol(value: boolean | cdktf.IResolvable) {
    this._useClientProtocol = value;
  }
  public resetUseClientProtocol() {
    this._useClientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientProtocolInput() {
    return this._useClientProtocol;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive {
  /**
  * The time duration between keep-alive probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#interval DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of keepalive probes to send without response before deciding the connection is dead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#probes DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#probes}
  */
  readonly probes?: number;
  /**
  * The time duration a connection needs to be idle before keep-alive probes start being sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#time DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepaliveToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepaliveToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp {
  /**
  * TCP connection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#connect_timeout DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The idle timeout for TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#idle_timeout DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum duration of a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_connection_duration DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_connection_duration}
  */
  readonly maxConnectionDuration?: string;
  /**
  * Maximum number of HTTP1 /TCP connections to a destination host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_connections DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#tcp_keepalive DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_connection_duration: cdktf.stringToTerraform(struct!.maxConnectionDuration),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    tcp_keepalive: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepaliveToTerraform(struct!.tcpKeepalive),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_keepalive: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConnectionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionDuration = this._maxConnectionDuration;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._idleTimeout = undefined;
      this._maxConnectionDuration = undefined;
      this._maxConnections = undefined;
      this._tcpKeepalive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._idleTimeout = value.idleTimeout;
      this._maxConnectionDuration = value.maxConnectionDuration;
      this._maxConnections = value.maxConnections;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_connection_duration - computed: false, optional: true, required: false
  private _maxConnectionDuration?: string; 
  public get maxConnectionDuration() {
    return this.getStringAttribute('max_connection_duration');
  }
  public set maxConnectionDuration(value: string) {
    this._maxConnectionDuration = value;
  }
  public resetMaxConnectionDuration() {
    this._maxConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionDurationInput() {
    return this._maxConnectionDuration;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool {
  /**
  * HTTP connection pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#http DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#http}
  */
  readonly http?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp;
  /**
  * Settings common to both HTTP and TCP upstream connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#tcp DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#tcp}
  */
  readonly tcp?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttpToTerraform(struct!.http),
    tcp: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp",
    },
    tcp: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp {
  /**
  * Specify if http1.1 connection should be upgraded to http2 for the associated destination. Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#h2_upgrade_policy DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#http1_max_pending_requests DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#http1_max_pending_requests}
  */
  readonly http1MaxPendingRequests?: number;
  /**
  * Maximum number of active requests to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#http2_max_requests DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#http2_max_requests}
  */
  readonly http2MaxRequests?: number;
  /**
  * The idle timeout for upstream connection pool connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#idle_timeout DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_concurrent_streams DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * Maximum number of requests per connection to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_requests_per_connection DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_retries DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * If set to true, client protocol will be preserved while initiating connection to backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#use_client_protocol DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#use_client_protocol}
  */
  readonly useClientProtocol?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttpToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    http1_max_pending_requests: cdktf.numberToTerraform(struct!.http1MaxPendingRequests),
    http2_max_requests: cdktf.numberToTerraform(struct!.http2MaxRequests),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    use_client_protocol: cdktf.booleanToTerraform(struct!.useClientProtocol),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttpToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http1_max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.http1MaxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_max_requests: {
      value: cdktf.numberToHclTerraform(struct!.http2MaxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_client_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.useClientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._http1MaxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1MaxPendingRequests = this._http1MaxPendingRequests;
    }
    if (this._http2MaxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2MaxRequests = this._http2MaxRequests;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._useClientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClientProtocol = this._useClientProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._http1MaxPendingRequests = undefined;
      this._http2MaxRequests = undefined;
      this._idleTimeout = undefined;
      this._maxConcurrentStreams = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
      this._useClientProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._http1MaxPendingRequests = value.http1MaxPendingRequests;
      this._http2MaxRequests = value.http2MaxRequests;
      this._idleTimeout = value.idleTimeout;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
      this._useClientProtocol = value.useClientProtocol;
    }
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // http1_max_pending_requests - computed: false, optional: true, required: false
  private _http1MaxPendingRequests?: number; 
  public get http1MaxPendingRequests() {
    return this.getNumberAttribute('http1_max_pending_requests');
  }
  public set http1MaxPendingRequests(value: number) {
    this._http1MaxPendingRequests = value;
  }
  public resetHttp1MaxPendingRequests() {
    this._http1MaxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1MaxPendingRequestsInput() {
    return this._http1MaxPendingRequests;
  }

  // http2_max_requests - computed: false, optional: true, required: false
  private _http2MaxRequests?: number; 
  public get http2MaxRequests() {
    return this.getNumberAttribute('http2_max_requests');
  }
  public set http2MaxRequests(value: number) {
    this._http2MaxRequests = value;
  }
  public resetHttp2MaxRequests() {
    this._http2MaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxRequestsInput() {
    return this._http2MaxRequests;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
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

  // use_client_protocol - computed: false, optional: true, required: false
  private _useClientProtocol?: boolean | cdktf.IResolvable; 
  public get useClientProtocol() {
    return this.getBooleanAttribute('use_client_protocol');
  }
  public set useClientProtocol(value: boolean | cdktf.IResolvable) {
    this._useClientProtocol = value;
  }
  public resetUseClientProtocol() {
    this._useClientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientProtocolInput() {
    return this._useClientProtocol;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive {
  /**
  * The time duration between keep-alive probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#interval DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of keepalive probes to send without response before deciding the connection is dead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#probes DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#probes}
  */
  readonly probes?: number;
  /**
  * The time duration a connection needs to be idle before keep-alive probes start being sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#time DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepaliveToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepaliveToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp {
  /**
  * TCP connection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#connect_timeout DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The idle timeout for TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#idle_timeout DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum duration of a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_connection_duration DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_connection_duration}
  */
  readonly maxConnectionDuration?: string;
  /**
  * Maximum number of HTTP1 /TCP connections to a destination host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_connections DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#tcp_keepalive DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_connection_duration: cdktf.stringToTerraform(struct!.maxConnectionDuration),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    tcp_keepalive: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepaliveToTerraform(struct!.tcpKeepalive),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_keepalive: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConnectionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionDuration = this._maxConnectionDuration;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._idleTimeout = undefined;
      this._maxConnectionDuration = undefined;
      this._maxConnections = undefined;
      this._tcpKeepalive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._idleTimeout = value.idleTimeout;
      this._maxConnectionDuration = value.maxConnectionDuration;
      this._maxConnections = value.maxConnections;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_connection_duration - computed: false, optional: true, required: false
  private _maxConnectionDuration?: string; 
  public get maxConnectionDuration() {
    return this.getStringAttribute('max_connection_duration');
  }
  public set maxConnectionDuration(value: string) {
    this._maxConnectionDuration = value;
  }
  public resetMaxConnectionDuration() {
    this._maxConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionDurationInput() {
    return this._maxConnectionDuration;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool {
  /**
  * HTTP connection pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#http DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#http}
  */
  readonly http?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp;
  /**
  * Settings common to both HTTP and TCP upstream connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#tcp DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#tcp}
  */
  readonly tcp?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttpToTerraform(struct!.http),
    tcp: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp",
    },
    tcp: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort {
  /**
  * Label assigned to the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#name DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * A valid non-negative integer port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#number DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#number}
  */
  readonly number?: number;
  /**
  * The protocol exposed on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#protocol DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#target_port DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#target_port}
  */
  readonly targetPort?: number;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPortToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPortToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort | cdktf.IResolvable): any {
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._number = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._number = value.number;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
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

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls {
  /**
  * REQUIRED if mode is 'MUTUAL' or 'OPTIONAL_MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#ca_certificates DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#ca_crl DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#ca_crl}
  */
  readonly caCrl?: string;
  /**
  * Optional: If specified, only support the specified cipher list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#cipher_suites DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#credential_name DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#https_redirect DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * Optional: Maximum TLS protocol version. Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#max_protocol_version DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#max_protocol_version}
  */
  readonly maxProtocolVersion?: string;
  /**
  * Optional: Minimum TLS protocol version. Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#min_protocol_version DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * Optional: Indicates whether connections to this port should be secured using TLS. Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#mode DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#mode}
  */
  readonly mode?: string;
  /**
  * REQUIRED if mode is 'SIMPLE' or 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#private_key DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * REQUIRED if mode is 'SIMPLE' or 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#server_certificate DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate presented by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#subject_alt_names DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
  /**
  * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#verify_certificate_hash DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#verify_certificate_hash}
  */
  readonly verifyCertificateHash?: string[];
  /**
  * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#verify_certificate_spki DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#verify_certificate_spki}
  */
  readonly verifyCertificateSpki?: string[];
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTlsToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    ca_crl: cdktf.stringToTerraform(struct!.caCrl),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    max_protocol_version: cdktf.stringToTerraform(struct!.maxProtocolVersion),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    server_certificate: cdktf.stringToTerraform(struct!.serverCertificate),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
    verify_certificate_hash: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifyCertificateHash),
    verify_certificate_spki: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifyCertificateSpki),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTlsToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_crl: {
      value: cdktf.stringToHclTerraform(struct!.caCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maxProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_certificate_hash: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifyCertificateHash),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_certificate_spki: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifyCertificateSpki),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._caCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCrl = this._caCrl;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._maxProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProtocolVersion = this._maxProtocolVersion;
    }
    if (this._minProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProtocolVersion = this._minProtocolVersion;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._serverCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    if (this._verifyCertificateHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificateHash = this._verifyCertificateHash;
    }
    if (this._verifyCertificateSpki !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificateSpki = this._verifyCertificateSpki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._caCrl = undefined;
      this._cipherSuites = undefined;
      this._credentialName = undefined;
      this._httpsRedirect = undefined;
      this._maxProtocolVersion = undefined;
      this._minProtocolVersion = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._serverCertificate = undefined;
      this._subjectAltNames = undefined;
      this._verifyCertificateHash = undefined;
      this._verifyCertificateSpki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._caCrl = value.caCrl;
      this._cipherSuites = value.cipherSuites;
      this._credentialName = value.credentialName;
      this._httpsRedirect = value.httpsRedirect;
      this._maxProtocolVersion = value.maxProtocolVersion;
      this._minProtocolVersion = value.minProtocolVersion;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._serverCertificate = value.serverCertificate;
      this._subjectAltNames = value.subjectAltNames;
      this._verifyCertificateHash = value.verifyCertificateHash;
      this._verifyCertificateSpki = value.verifyCertificateSpki;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // ca_crl - computed: false, optional: true, required: false
  private _caCrl?: string; 
  public get caCrl() {
    return this.getStringAttribute('ca_crl');
  }
  public set caCrl(value: string) {
    this._caCrl = value;
  }
  public resetCaCrl() {
    this._caCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCrlInput() {
    return this._caCrl;
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // max_protocol_version - computed: false, optional: true, required: false
  private _maxProtocolVersion?: string; 
  public get maxProtocolVersion() {
    return this.getStringAttribute('max_protocol_version');
  }
  public set maxProtocolVersion(value: string) {
    this._maxProtocolVersion = value;
  }
  public resetMaxProtocolVersion() {
    this._maxProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProtocolVersionInput() {
    return this._maxProtocolVersion;
  }

  // min_protocol_version - computed: false, optional: true, required: false
  private _minProtocolVersion?: string; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }

  // verify_certificate_hash - computed: false, optional: true, required: false
  private _verifyCertificateHash?: string[]; 
  public get verifyCertificateHash() {
    return this.getListAttribute('verify_certificate_hash');
  }
  public set verifyCertificateHash(value: string[]) {
    this._verifyCertificateHash = value;
  }
  public resetVerifyCertificateHash() {
    this._verifyCertificateHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateHashInput() {
    return this._verifyCertificateHash;
  }

  // verify_certificate_spki - computed: false, optional: true, required: false
  private _verifyCertificateSpki?: string[]; 
  public get verifyCertificateSpki() {
    return this.getListAttribute('verify_certificate_spki');
  }
  public set verifyCertificateSpki(value: string[]) {
    this._verifyCertificateSpki = value;
  }
  public resetVerifyCertificateSpki() {
    this._verifyCertificateSpki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateSpkiInput() {
    return this._verifyCertificateSpki;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress {
  /**
  * The IP(IPv4 or IPv6) to which the listener should be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#bind DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#bind}
  */
  readonly bind?: string;
  /**
  * The captureMode option dictates how traffic to the listener is expected to be captured (or not). Valid Options: DEFAULT, IPTABLES, NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#capture_mode DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#capture_mode}
  */
  readonly captureMode?: string;
  /**
  * Settings controlling the volume of connections Envoy will accept from the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#connection_pool DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool;
  /**
  * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#default_endpoint DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#default_endpoint}
  */
  readonly defaultEndpoint?: string;
  /**
  * The port associated with the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#port DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#port}
  */
  readonly port: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort;
  /**
  * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#tls DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#tls}
  */
  readonly tls?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind: cdktf.stringToTerraform(struct!.bind),
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
    connection_pool: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolToTerraform(struct!.connectionPool),
    default_endpoint: cdktf.stringToTerraform(struct!.defaultEndpoint),
    port: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPortToTerraform(struct!.port),
    tls: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTlsToTerraform(struct!.tls),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind: {
      value: cdktf.stringToHclTerraform(struct!.bind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pool: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool",
    },
    default_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.defaultEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort",
    },
    tls: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bind !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind;
    }
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._defaultEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndpoint = this._defaultEndpoint;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bind = undefined;
      this._captureMode = undefined;
      this._connectionPool.internalValue = undefined;
      this._defaultEndpoint = undefined;
      this._port.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bind = value.bind;
      this._captureMode = value.captureMode;
      this._connectionPool.internalValue = value.connectionPool;
      this._defaultEndpoint = value.defaultEndpoint;
      this._port.internalValue = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // bind - computed: false, optional: true, required: false
  private _bind?: string; 
  public get bind() {
    return this.getStringAttribute('bind');
  }
  public set bind(value: string) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
  }

  // capture_mode - computed: false, optional: true, required: false
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  public resetCaptureMode() {
    this._captureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // default_endpoint - computed: false, optional: true, required: false
  private _defaultEndpoint?: string; 
  public get defaultEndpoint() {
    return this.getStringAttribute('default_endpoint');
  }
  public set defaultEndpoint(value: string) {
    this._defaultEndpoint = value;
  }
  public resetDefaultEndpoint() {
    this._defaultEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointInput() {
    return this._defaultEndpoint;
  }

  // port - computed: false, optional: false, required: true
  private _port = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressPort) {
    this._port.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressTls) {
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

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressOutputReference {
    return new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#number DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPortToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPortToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy {
  /**
  * The name of a service from the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#host DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#host}
  */
  readonly host: string;
  /**
  * Specifies the port on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#port DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort;
  /**
  * The name of a subset within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#subset DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#subset}
  */
  readonly subset?: string;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPortToTerraform(struct!.port),
    subset: cdktf.stringToTerraform(struct!.subset),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy | cdktf.IResolvable): any {
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
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort",
    },
    subset: {
      value: cdktf.stringToHclTerraform(struct!.subset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._subset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port.internalValue = undefined;
      this._subset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port.internalValue = value.port;
      this._subset = value.subset;
    }
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

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: string; 
  public get subset() {
    return this.getStringAttribute('subset');
  }
  public set subset(value: string) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#egress_proxy DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#egress_proxy}
  */
  readonly egressProxy?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy;
  /**
  *  Valid Options: REGISTRY_ONLY, ALLOW_ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#mode DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_proxy: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyToTerraform(struct!.egressProxy),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_proxy: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyToHclTerraform(struct!.egressProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressProxy = this._egressProxy?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressProxy.internalValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressProxy.internalValue = value.egressProxy;
      this._mode = value.mode;
    }
  }

  // egress_proxy - computed: false, optional: true, required: false
  private _egressProxy = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxyOutputReference(this, "egress_proxy");
  public get egressProxy() {
    return this._egressProxy;
  }
  public putEgressProxy(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyEgressProxy) {
    this._egressProxy.internalValue = value;
  }
  public resetEgressProxy() {
    this._egressProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressProxyInput() {
    return this._egressProxy.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#labels DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelectorToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelectorToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
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
}
export interface DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec {
  /**
  * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#egress DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#egress}
  */
  readonly egress?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress[] | cdktf.IResolvable;
  /**
  * Settings controlling the volume of connections Envoy will accept from the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#inbound_connection_pool DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#inbound_connection_pool}
  */
  readonly inboundConnectionPool?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool;
  /**
  * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#ingress DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#ingress}
  */
  readonly ingress?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress[] | cdktf.IResolvable;
  /**
  * Set the default behavior of the sidecar for handling outbound traffic from the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#outbound_traffic_policy DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#outbound_traffic_policy}
  */
  readonly outboundTrafficPolicy?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy;
  /**
  * Criteria used to select the specific set of pods/VMs on which this 'Sidecar' configuration should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#workload_selector DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest#workload_selector}
  */
  readonly workloadSelector?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector;
}

export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecToTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressToTerraform, false)(struct!.egress),
    inbound_connection_pool: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolToTerraform(struct!.inboundConnectionPool),
    ingress: cdktf.listMapper(dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressToTerraform, false)(struct!.ingress),
    outbound_traffic_policy: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyToTerraform(struct!.outboundTrafficPolicy),
    workload_selector: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelectorToTerraform(struct!.workloadSelector),
  }
}


export function dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressList",
    },
    inbound_connection_pool: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolToHclTerraform(struct!.inboundConnectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressList",
    },
    outbound_traffic_policy: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyToHclTerraform(struct!.outboundTrafficPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy",
    },
    workload_selector: {
      value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelectorToHclTerraform(struct!.workloadSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._inboundConnectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundConnectionPool = this._inboundConnectionPool?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._outboundTrafficPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundTrafficPolicy = this._outboundTrafficPolicy?.internalValue;
    }
    if (this._workloadSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSelector = this._workloadSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egress.internalValue = undefined;
      this._inboundConnectionPool.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._outboundTrafficPolicy.internalValue = undefined;
      this._workloadSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egress.internalValue = value.egress;
      this._inboundConnectionPool.internalValue = value.inboundConnectionPool;
      this._ingress.internalValue = value.ingress;
      this._outboundTrafficPolicy.internalValue = value.outboundTrafficPolicy;
      this._workloadSelector.internalValue = value.workloadSelector;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // inbound_connection_pool - computed: false, optional: true, required: false
  private _inboundConnectionPool = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPoolOutputReference(this, "inbound_connection_pool");
  public get inboundConnectionPool() {
    return this._inboundConnectionPool;
  }
  public putInboundConnectionPool(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecInboundConnectionPool) {
    this._inboundConnectionPool.internalValue = value;
  }
  public resetInboundConnectionPool() {
    this._inboundConnectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundConnectionPoolInput() {
    return this._inboundConnectionPool.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // outbound_traffic_policy - computed: false, optional: true, required: false
  private _outboundTrafficPolicy = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicyOutputReference(this, "outbound_traffic_policy");
  public get outboundTrafficPolicy() {
    return this._outboundTrafficPolicy;
  }
  public putOutboundTrafficPolicy(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutboundTrafficPolicy) {
    this._outboundTrafficPolicy.internalValue = value;
  }
  public resetOutboundTrafficPolicy() {
    this._outboundTrafficPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTrafficPolicyInput() {
    return this._outboundTrafficPolicy.internalValue;
  }

  // workload_selector - computed: false, optional: true, required: false
  private _workloadSelector = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelectorOutputReference(this, "workload_selector");
  public get workloadSelector() {
    return this._workloadSelector;
  }
  public putWorkloadSelector(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecWorkloadSelector) {
    this._workloadSelector.internalValue = value;
  }
  public resetWorkloadSelector() {
    this._workloadSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSelectorInput() {
    return this._workloadSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest k8s_networking_istio_io_sidecar_v1alpha3_manifest}
*/
export class DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_istio_io_sidecar_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingIstioIoSidecarV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_istio_io_sidecar_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/networking_istio_io_sidecar_v1alpha3_manifest k8s_networking_istio_io_sidecar_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_istio_io_sidecar_v1alpha3_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec) {
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
      metadata: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoSidecarV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
