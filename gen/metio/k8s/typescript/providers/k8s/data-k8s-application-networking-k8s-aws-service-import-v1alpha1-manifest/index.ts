// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#metadata DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata;
  /**
  * spec defines the behavior of a ServiceImport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#spec DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec;
}
export interface DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#annotations DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#labels DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#name DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#namespace DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts {
  /**
  * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol. Field can be enabled with ServiceAppProtocol feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#app_protocol DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#name DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The port that will be exposed by this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#port DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Supports 'TCP', 'UDP', and 'SCTP'. Default is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#protocol DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
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
}

export class DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsOutputReference {
    return new DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp {
  /**
  * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == 'ClientIP'. Default value is 10800(for 3 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#timeout_seconds DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIpToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIpToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
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

export class DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined) {
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
export interface DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig {
  /**
  * clientIP contains the configurations of Client IP based session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#client_ip DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#client_ip}
  */
  readonly clientIp?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp;
}

export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIpToTerraform(struct!.clientIp),
  }
}


export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIpToHclTerraform(struct!.clientIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig | cdktf.IResolvable | undefined) {
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
  private _clientIp = new DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIpOutputReference(this, "client_ip");
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigClientIp) {
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
export interface DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec {
  /**
  * ip will be used as the VIP for this service when type is ClusterSetIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#ips DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#ports DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#ports}
  */
  readonly ports: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable;
  /**
  * Supports 'ClientIP' and 'None'. Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. Ignored when type is Headless More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#session_affinity DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * sessionAffinityConfig contains session affinity configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#session_affinity_config DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#session_affinity_config}
  */
  readonly sessionAffinityConfig?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig;
  /**
  * type defines the type of this service. Must be ClusterSetIP or Headless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#type DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    ports: cdktf.listMapper(dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsToTerraform, false)(struct!.ports),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_config: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigToTerraform(struct!.sessionAffinityConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsList",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity_config: {
      value: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigToHclTerraform(struct!.sessionAffinityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig",
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

export class DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
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

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ips = undefined;
      this._ports.internalValue = undefined;
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
      this._ips = value.ips;
      this._ports.internalValue = value.ports;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityConfig.internalValue = value.sessionAffinityConfig;
      this._type = value.type;
    }
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
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
  private _sessionAffinityConfig = new DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfigOutputReference(this, "session_affinity_config");
  public get sessionAffinityConfig() {
    return this._sessionAffinityConfig;
  }
  public putSessionAffinityConfig(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecSessionAffinityConfig) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest k8s_application_networking_k8s_aws_service_import_v1alpha1_manifest}
*/
export class DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_application_networking_k8s_aws_service_import_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_application_networking_k8s_aws_service_import_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/application_networking_k8s_aws_service_import_v1alpha1_manifest k8s_application_networking_k8s_aws_service_import_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_application_networking_k8s_aws_service_import_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationNetworkingK8SAwsServiceImportV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
