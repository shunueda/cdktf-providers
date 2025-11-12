// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#metadata DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata;
  /**
  * DosProtectedResourceSpec defines the properties and values a DosProtectedResource can have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#spec DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec;
}
export interface DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#annotations DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#labels DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#name DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#namespace DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#ip_with_mask DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#ip_with_mask}
  */
  readonly ipWithMask?: string;
}

export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructToTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_with_mask: cdktf.stringToTerraform(struct!.ipWithMask),
  }
}


export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructToHclTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_with_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipWithMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipWithMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipWithMask = this._ipWithMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipWithMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipWithMask = value.ipWithMask;
    }
  }

  // ip_with_mask - computed: false, optional: true, required: false
  private _ipWithMask?: string; 
  public get ipWithMask() {
    return this.getStringAttribute('ip_with_mask');
  }
  public set ipWithMask(value: string) {
    this._ipWithMask = value;
  }
  public resetIpWithMask() {
    this._ipWithMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWithMaskInput() {
    return this._ipWithMask;
  }
}

export class DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructOutputReference {
    return new DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor {
  /**
  * Protocol determines if the server listens on http1 / http2 / grpc / websocket. The default is http1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#protocol DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Timeout determines how long (in seconds) should NGINX App Protect DoS wait for a response. Default is 10 seconds for http1/http2 and 5 seconds for grpc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#timeout DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * URI is the destination to the desired protected object in the nginx.conf:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#uri DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitorToTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitorToHclTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._timeout = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._timeout = value.timeout;
      this._uri = value.uri;
    }
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog {
  /**
  * ApDosLogConf is the namespace/name of a APDosLogConf resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#ap_dos_log_conf DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#ap_dos_log_conf}
  */
  readonly apDosLogConf?: string;
  /**
  * DosLogDest is the network address of a logging service, can be either IP or DNS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#dos_log_dest DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#dos_log_dest}
  */
  readonly dosLogDest?: string;
  /**
  * Enable enables the security logging feature if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#enable DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLogToTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_dos_log_conf: cdktf.stringToTerraform(struct!.apDosLogConf),
    dos_log_dest: cdktf.stringToTerraform(struct!.dosLogDest),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLogToHclTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_dos_log_conf: {
      value: cdktf.stringToHclTerraform(struct!.apDosLogConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_log_dest: {
      value: cdktf.stringToHclTerraform(struct!.dosLogDest),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apDosLogConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.apDosLogConf = this._apDosLogConf;
    }
    if (this._dosLogDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosLogDest = this._dosLogDest;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apDosLogConf = undefined;
      this._dosLogDest = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apDosLogConf = value.apDosLogConf;
      this._dosLogDest = value.dosLogDest;
      this._enable = value.enable;
    }
  }

  // ap_dos_log_conf - computed: false, optional: true, required: false
  private _apDosLogConf?: string; 
  public get apDosLogConf() {
    return this.getStringAttribute('ap_dos_log_conf');
  }
  public set apDosLogConf(value: string) {
    this._apDosLogConf = value;
  }
  public resetApDosLogConf() {
    this._apDosLogConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apDosLogConfInput() {
    return this._apDosLogConf;
  }

  // dos_log_dest - computed: false, optional: true, required: false
  private _dosLogDest?: string; 
  public get dosLogDest() {
    return this.getStringAttribute('dos_log_dest');
  }
  public set dosLogDest(value: string) {
    this._dosLogDest = value;
  }
  public resetDosLogDest() {
    this._dosLogDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosLogDestInput() {
    return this._dosLogDest;
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
}
export interface DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec {
  /**
  * AllowList is a list of allowed IPs and subnet masks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#allow_list DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#allow_list}
  */
  readonly allowList?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct[] | cdktf.IResolvable;
  /**
  * ApDosMonitor is how NGINX App Protect DoS monitors the stress level of the protected object. The monitor requests are sent from localhost (127.0.0.1). Default value: URI - None, protocol - http1, timeout - NGINX App Protect DoS default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#ap_dos_monitor DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#ap_dos_monitor}
  */
  readonly apDosMonitor?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor;
  /**
  * ApDosPolicy is the namespace/name of a ApDosPolicy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#ap_dos_policy DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#ap_dos_policy}
  */
  readonly apDosPolicy?: string;
  /**
  * DosAccessLogDest is the network address for the access logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#dos_access_log_dest DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#dos_access_log_dest}
  */
  readonly dosAccessLogDest?: string;
  /**
  * DosSecurityLog defines the security log of the DosProtectedResource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#dos_security_log DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#dos_security_log}
  */
  readonly dosSecurityLog?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog;
  /**
  * Enable enables the DOS feature if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#enable DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of protected object, max of 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#name DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecToTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list: cdktf.listMapper(dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructToTerraform, false)(struct!.allowList),
    ap_dos_monitor: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitorToTerraform(struct!.apDosMonitor),
    ap_dos_policy: cdktf.stringToTerraform(struct!.apDosPolicy),
    dos_access_log_dest: cdktf.stringToTerraform(struct!.dosAccessLogDest),
    dos_security_log: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLogToTerraform(struct!.dosSecurityLog),
    enable: cdktf.booleanToTerraform(struct!.enable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list: {
      value: cdktf.listMapperHcl(dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructToHclTerraform, false)(struct!.allowList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructList",
    },
    ap_dos_monitor: {
      value: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitorToHclTerraform(struct!.apDosMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor",
    },
    ap_dos_policy: {
      value: cdktf.stringToHclTerraform(struct!.apDosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_access_log_dest: {
      value: cdktf.stringToHclTerraform(struct!.dosAccessLogDest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_security_log: {
      value: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLogToHclTerraform(struct!.dosSecurityLog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList?.internalValue;
    }
    if (this._apDosMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apDosMonitor = this._apDosMonitor?.internalValue;
    }
    if (this._apDosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.apDosPolicy = this._apDosPolicy;
    }
    if (this._dosAccessLogDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosAccessLogDest = this._dosAccessLogDest;
    }
    if (this._dosSecurityLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosSecurityLog = this._dosSecurityLog?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowList.internalValue = undefined;
      this._apDosMonitor.internalValue = undefined;
      this._apDosPolicy = undefined;
      this._dosAccessLogDest = undefined;
      this._dosSecurityLog.internalValue = undefined;
      this._enable = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowList.internalValue = value.allowList;
      this._apDosMonitor.internalValue = value.apDosMonitor;
      this._apDosPolicy = value.apDosPolicy;
      this._dosAccessLogDest = value.dosAccessLogDest;
      this._dosSecurityLog.internalValue = value.dosSecurityLog;
      this._enable = value.enable;
      this._name = value.name;
    }
  }

  // allow_list - computed: false, optional: true, required: false
  private _allowList = new DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStructList(this, "allow_list", false);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  public resetAllowList() {
    this._allowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // ap_dos_monitor - computed: false, optional: true, required: false
  private _apDosMonitor = new DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitorOutputReference(this, "ap_dos_monitor");
  public get apDosMonitor() {
    return this._apDosMonitor;
  }
  public putApDosMonitor(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecApDosMonitor) {
    this._apDosMonitor.internalValue = value;
  }
  public resetApDosMonitor() {
    this._apDosMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apDosMonitorInput() {
    return this._apDosMonitor.internalValue;
  }

  // ap_dos_policy - computed: false, optional: true, required: false
  private _apDosPolicy?: string; 
  public get apDosPolicy() {
    return this.getStringAttribute('ap_dos_policy');
  }
  public set apDosPolicy(value: string) {
    this._apDosPolicy = value;
  }
  public resetApDosPolicy() {
    this._apDosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apDosPolicyInput() {
    return this._apDosPolicy;
  }

  // dos_access_log_dest - computed: false, optional: true, required: false
  private _dosAccessLogDest?: string; 
  public get dosAccessLogDest() {
    return this.getStringAttribute('dos_access_log_dest');
  }
  public set dosAccessLogDest(value: string) {
    this._dosAccessLogDest = value;
  }
  public resetDosAccessLogDest() {
    this._dosAccessLogDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosAccessLogDestInput() {
    return this._dosAccessLogDest;
  }

  // dos_security_log - computed: false, optional: true, required: false
  private _dosSecurityLog = new DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLogOutputReference(this, "dos_security_log");
  public get dosSecurityLog() {
    return this._dosSecurityLog;
  }
  public putDosSecurityLog(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecDosSecurityLog) {
    this._dosSecurityLog.internalValue = value;
  }
  public resetDosSecurityLog() {
    this._dosSecurityLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosSecurityLogInput() {
    return this._dosSecurityLog.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest k8s_appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest}
*/
export class DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest k8s_appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appprotectdos_f5_com_dos_protected_resource_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec) {
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
      metadata: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectdosF5ComDosProtectedResourceV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
